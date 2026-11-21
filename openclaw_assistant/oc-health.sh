#!/usr/bin/env bash
# ──────────────────────────────────────────────────────────────
# oc-health — publish OpenClaw add-on health as Home Assistant sensors
#
# Pushes a handful of states to the Home Assistant REST API so users can build
# automations/alerts on gateway health instead of watching the add-on log.
#
# Usage:
#   oc-health show    Print what would be published (no token needed)
#   oc-health check   Diagnose credentials and API connectivity
#   oc-health once    Publish one round of states
#   oc-health loop    Publish every HA_HEALTH_INTERVAL seconds (used by run.sh)
#
# Deliberately implemented as a short bash + curl round rather than a resident
# process: on a 1 GB Pi an idle Node/Python daemon costs more than the work.
# ──────────────────────────────────────────────────────────────
# NOTE: no `set -e` — a transient HA/API failure must never kill the loop.
set -uo pipefail

HA_TOKEN_FILE="${HA_TOKEN_FILE:-/config/secrets/homeassistant.token}"
OPENCLAW_CONFIG_PATH="${OPENCLAW_CONFIG_PATH:-/config/.openclaw/openclaw.json}"
CERT_PATH="${CERT_PATH:-/config/certs/gateway.crt}"
INTERVAL="${HA_HEALTH_INTERVAL:-60}"

# Context passed in by run.sh (all optional — `oc-health` also works standalone).
ADDON_VERSION="${ADDON_VERSION:-unknown}"
ACCESS_MODE="${ACCESS_MODE:-custom}"
GATEWAY_BIND_MODE="${GATEWAY_BIND_MODE:-loopback}"
GATEWAY_INTERNAL_PORT="${GATEWAY_INTERNAL_PORT:-18789}"
RESOURCE_PROFILE="${RESOURCE_PROFILE:-auto}"
NODE_HEAP_MB="${NODE_HEAP_MB:-}"
ENABLE_HTTPS_PROXY="${ENABLE_HTTPS_PROXY:-false}"

CURL_RC=""
HA_API=""
RESOLVE_LOG=""
RESOLVE_REASON=""
HA_INSECURE="false"
LAST_FAIL_CODE=""

cleanup() {
  [ -n "$CURL_RC" ] && rm -f "$CURL_RC"
}
trap cleanup EXIT INT TERM

# ── Credentials ──────────────────────────────────────────────
# The add-on runs with host_network: true, so the host's Home Assistant is
# reachable on localhost:8123 while the Supervisor's bridge-network hostname
# usually is not. Prefer the user's long-lived token; fall back to the
# Supervisor proxy only when that hostname actually resolves.
supervisor_api_reachable() {
  # This add-on runs with host_network: true, so the container lives in the host
  # network namespace and the Supervisor's internal `supervisor` hostname (Docker
  # DNS on the hassio bridge) does not resolve. Probing avoids a silent HTTP 000.
  getent hosts supervisor >/dev/null 2>&1
}

# Write the bearer token to a 0600 curl config so it never appears in `ps`/argv.
# `insecure` is added for local Home Assistant endpoints: HA commonly serves
# HTTPS with a certificate issued for its external hostname, which never matches
# 127.0.0.1 or homeassistant.local. The connection stays on the local host/LAN.
write_curl_rc() {
  local token="$1" insecure="${2:-false}" previous_umask
  case "$token" in
    *\"*|*$'\n'*|*$'\r'*)
      echo "ERROR: Home Assistant token contains invalid characters; refusing to use it." >&2
      return 1
      ;;
  esac
  previous_umask="$(umask)"
  umask 077
  if [ -z "$CURL_RC" ]; then
    CURL_RC="$(mktemp /tmp/.oc-health-XXXXXX)" || { umask "$previous_umask"; return 1; }
  fi
  printf 'header = "Authorization: Bearer %s"\nheader = "Content-Type: application/json"\n' \
    "$token" > "$CURL_RC"
  if [ "$insecure" = "true" ]; then
    printf 'insecure\n' >> "$CURL_RC"
  fi
  umask "$previous_umask"
  return 0
}

probe_api_base() {
  curl -sS -m 5 -o /dev/null -w '%{http_code}' -K "$CURL_RC" "$1/" 2>/dev/null
}

# Home Assistant is not always plain HTTP on localhost:8123 — it may serve HTTPS
# (curl reports "Empty reply from server" when we speak HTTP to a TLS port), sit
# on another host, or simply not be listening yet while the add-on boots. Probe
# the plausible endpoints and use the first that answers.
resolve_api() {
  local user_token="" candidates=() cand url tok insecure code

  if [ -r "$HA_TOKEN_FILE" ]; then
    user_token="$(cat "$HA_TOKEN_FILE" 2>/dev/null || true)"
  fi

  if [ -n "$user_token" ]; then
    if [ -n "${HA_BASE_URL:-}" ]; then
      candidates+=("${HA_BASE_URL%/}/api|$user_token|true")
    fi
    for host in 127.0.0.1 localhost homeassistant homeassistant.local; do
      candidates+=("https://${host}:8123/api|$user_token|true")
      candidates+=("http://${host}:8123/api|$user_token|false")
    done
  fi
  if [ -n "${SUPERVISOR_TOKEN:-}" ] && supervisor_api_reachable; then
    candidates+=("http://supervisor/core/api|$SUPERVISOR_TOKEN|false")
  fi

  if [ ${#candidates[@]} -eq 0 ]; then
    RESOLVE_REASON="no-token"
    return 1
  fi

  RESOLVE_LOG=""
  for cand in "${candidates[@]}"; do
    url="${cand%%|*}"
    tok="${cand#*|}"; tok="${tok%%|*}"
    insecure="${cand##*|}"
    write_curl_rc "$tok" "$insecure" || continue
    code="$(probe_api_base "$url")"
    RESOLVE_LOG="${RESOLVE_LOG}    ${url} -> HTTP ${code:-000}
"
    case "${code:-000}" in
      200|401|403)
        # 401/403 means we found Home Assistant but the token is wrong; stop
        # here so the reported error is accurate instead of "unreachable".
        HA_API="$url"
        HA_INSECURE="$insecure"
        write_curl_rc "$tok" "$insecure"
        return 0
        ;;
    esac
  done

  RESOLVE_REASON="unreachable"
  return 1
}

report_resolve_failure() {
  if [ "${RESOLVE_REASON:-}" = "no-token" ]; then
    echo "INFO: oc-health needs a Home Assistant token."
    echo "INFO: Set 'homeassistant_token' in the add-on Configuration and restart."
    echo "INFO: Run 'oc-health show' to preview the states without publishing."
    return
  fi
  echo "WARN: Could not reach the Home Assistant API. Tried:" >&2
  printf '%s' "${RESOLVE_LOG:-}" >&2
  echo "WARN: If Home Assistant is not on the default port, set 'ha_base_url' in the" >&2
  echo "WARN: add-on Configuration (for example http://192.168.1.10:8123)." >&2
}

# ── Metric collection ────────────────────────────────────────
gateway_pid() {
  local pid=""
  if command -v ss >/dev/null 2>&1; then
    pid=$(ss -tlnp 2>/dev/null \
      | grep ":${GATEWAY_INTERNAL_PORT} " \
      | sed -n 's/.*pid=\([0-9]*\).*/\1/p' \
      | head -1)
  fi
  if [ -z "$pid" ]; then
    pid=$(pgrep -f "openclaw-gateway" 2>/dev/null | head -1)
  fi
  printf '%s' "${pid:-}"
}

openclaw_version() {
  openclaw --version 2>/dev/null | head -n 1 \
    | grep -oE '[0-9]{4}\.[0-9]+\.[0-9]+(-[0-9]+)?' | head -n 1
}

# Resident set size of the gateway process, in MB.
gateway_rss_mb() {
  local pid="$1" rss_kb=""
  [ -n "$pid" ] || return 0
  rss_kb=$(awk '/^VmRSS:/{print $2}' "/proc/${pid}/status" 2>/dev/null)
  [ -n "$rss_kb" ] && printf '%d' $((rss_kb / 1024))
}

cert_days_remaining() {
  [ -r "$CERT_PATH" ] || return 0
  local end_date end_epoch now_epoch
  end_date=$(openssl x509 -enddate -noout -in "$CERT_PATH" 2>/dev/null | cut -d= -f2)
  [ -n "$end_date" ] || return 0
  end_epoch=$(date -d "$end_date" +%s 2>/dev/null) || return 0
  now_epoch=$(date +%s)
  printf '%d' $(( (end_epoch - now_epoch) / 86400 ))
}

# ── Publishing ───────────────────────────────────────────────
post_state() {
  local entity="$1" state="$2" attrs="$3" payload code

  payload=$(jq -nc --arg s "$state" --argjson a "$attrs" '{state: $s, attributes: $a}' 2>/dev/null)
  if [ -z "$payload" ]; then
    LAST_FAIL_CODE="payload"
    return 1
  fi

  if [ "$MODE" = "show" ]; then
    printf '%s -> %s\n' "$entity" "$payload"
    return 0
  fi

  code=$(curl -sS -m 10 -o /dev/null -w '%{http_code}' -K "$CURL_RC" \
    -X POST "${HA_API}/states/${entity}" -d "$payload" 2>/dev/null)

  case "${code:-000}" in
    200|201) return 0 ;;
    *)
      # Reported once per status change by the caller, never per entity, so a
      # persistent outage cannot flood the add-on log.
      LAST_FAIL_CODE="${code:-000}"
      return 1
      ;;
  esac
}

explain_failure() {
  case "${1:-000}" in
    000)
      echo "WARN: Cannot reach Home Assistant at ${HA_API} (no response)." >&2
      echo "WARN: Verify Home Assistant is reachable from the add-on; run" >&2
      echo "WARN: 'oc-health check' in the terminal for a full diagnosis." >&2
      ;;
    401|403)
      echo "WARN: Home Assistant rejected the token (HTTP $1) at ${HA_API}." >&2
      echo "WARN: Create a new long-lived token (profile -> Security) and update" >&2
      echo "WARN: 'homeassistant_token' in the add-on Configuration." >&2
      ;;
    404)
      echo "WARN: No Home Assistant API at ${HA_API} (HTTP 404)." >&2
      ;;
    payload)
      echo "WARN: Could not build the sensor payload (is 'jq' present in the image?)." >&2
      ;;
    *)
      echo "WARN: Home Assistant returned HTTP $1 at ${HA_API}." >&2
      ;;
  esac
}

publish_round() {
  local pid state rss version disk_pct disk_total disk_used disk_avail cert_days
  LAST_FAIL_CODE=""

  pid="$(gateway_pid)"
  if [ -n "$pid" ] && kill -0 "$pid" 2>/dev/null; then
    state="running"
  else
    state="stopped"
    pid=""
  fi

  post_state "sensor.openclaw_gateway" "$state" "$(jq -nc \
    --arg pid "${pid:-}" \
    --arg bind "$GATEWAY_BIND_MODE" \
    --arg access "$ACCESS_MODE" \
    --arg port "$GATEWAY_INTERNAL_PORT" \
    --arg profile "$RESOURCE_PROFILE" \
    '{friendly_name: "OpenClaw Gateway", icon: "mdi:robot",
      pid: $pid, bind_mode: $bind, access_mode: $access,
      port: $port, resource_profile: $profile}')"

  version="$(openclaw_version)"
  post_state "sensor.openclaw_version" "${version:-unknown}" "$(jq -nc \
    --arg addon "$ADDON_VERSION" \
    '{friendly_name: "OpenClaw Version", icon: "mdi:tag-outline", addon_version: $addon}')"

  rss="$(gateway_rss_mb "$pid")"
  if [ -n "$rss" ]; then
    post_state "sensor.openclaw_gateway_memory" "$rss" "$(jq -nc \
      --arg cap "${NODE_HEAP_MB:-unlimited}" \
      --arg profile "$RESOURCE_PROFILE" \
      '{friendly_name: "OpenClaw Gateway Memory", icon: "mdi:memory",
        unit_of_measurement: "MB", state_class: "measurement",
        heap_limit_mb: $cap, resource_profile: $profile}')"
  fi

  if df -h /config >/dev/null 2>&1; then
    disk_total=$(df -h /config | awk 'NR==2{print $2}')
    disk_used=$(df -h /config  | awk 'NR==2{print $3}')
    disk_avail=$(df -h /config | awk 'NR==2{print $4}')
    disk_pct=$(df -h /config   | awk 'NR==2{gsub(/%/,"",$5); print $5}')
    post_state "sensor.openclaw_disk_used" "${disk_pct:-0}" "$(jq -nc \
      --arg total "$disk_total" --arg used "$disk_used" --arg avail "$disk_avail" \
      '{friendly_name: "OpenClaw Disk Used", icon: "mdi:harddisk",
        unit_of_measurement: "%", state_class: "measurement",
        total: $total, used: $used, available: $avail}')"
  fi

  if [ "$ENABLE_HTTPS_PROXY" = "true" ]; then
    cert_days="$(cert_days_remaining)"
    if [ -n "$cert_days" ]; then
      post_state "sensor.openclaw_certificate_expiry" "$cert_days" "$(jq -nc \
        '{friendly_name: "OpenClaw Certificate Expiry", icon: "mdi:certificate",
          unit_of_measurement: "d", state_class: "measurement"}')"
    fi
  fi

  [ -z "$LAST_FAIL_CODE" ]
}

# ── Entry point ──────────────────────────────────────────────
MODE="${1:-once}"

case "$MODE" in
  show)
    publish_round
    exit 0
    ;;
  check)
    echo "OpenClaw health sensor diagnostics"
    echo "  token file      : ${HA_TOKEN_FILE} ($( [ -s "$HA_TOKEN_FILE" ] && echo present || echo missing ))"
    echo "  SUPERVISOR_TOKEN: $( [ -n "${SUPERVISOR_TOKEN:-}" ] && echo present || echo absent )"
    echo "  supervisor host : $( supervisor_api_reachable && echo resolves || echo "does not resolve (expected with host_network)" )"
    echo "  ha_base_url     : ${HA_BASE_URL:-<unset>}"
    echo "  endpoints tried :"
    if resolve_api; then
      printf '%s' "${RESOLVE_LOG:-}"
      echo "  chosen          : ${HA_API}"
      probe=$(probe_api_base "$HA_API")
      case "${probe:-000}" in
        200) echo "  result          : OK - Home Assistant is reachable and the token works"; exit 0 ;;
        *) explain_failure "${probe:-000}"; exit 1 ;;
      esac
    fi
    printf '%s' "${RESOLVE_LOG:-}"
    report_resolve_failure
    exit 1
    ;;
  once|loop)
    :
    ;;
  help|-h|--help)
    cat <<'EOF'
Usage: oc-health <show|check|once|loop>

show   Print the states that would be published (no token required)
check  Diagnose credentials and connectivity to the Home Assistant API
once   Publish a single round of states to Home Assistant
loop   Publish every HA_HEALTH_INTERVAL seconds (default 60)

Entities published:
  sensor.openclaw_gateway             running / stopped
  sensor.openclaw_version             OpenClaw runtime version
  sensor.openclaw_gateway_memory      gateway RSS in MB
  sensor.openclaw_disk_used           /config usage in %
  sensor.openclaw_certificate_expiry  days left (lan_https only)
EOF
    exit 0
    ;;
  *)
    echo "Unknown command: $MODE" >&2
    echo "Run: oc-health help" >&2
    exit 2
    ;;
esac

if [ "$MODE" = "once" ]; then
  if ! resolve_api; then
    report_resolve_failure
    exit 1
  fi
  if publish_round; then
    echo "INFO: Published OpenClaw health sensors to ${HA_API}"
    exit 0
  fi
  explain_failure "$LAST_FAIL_CODE"
  exit 1
fi

# Sanity-clamp the interval so a bad option can't busy-loop the CPU.
if ! [[ "$INTERVAL" =~ ^[0-9]+$ ]] || [ "$INTERVAL" -lt 15 ]; then
  echo "WARN: Invalid ha_health_interval '${INTERVAL}'; using 60s" >&2
  INTERVAL=60
fi

LAST_ROUND_OK="unknown"
while true; do
  if [ -z "$HA_API" ]; then
    if resolve_api; then
      echo "INFO: Publishing OpenClaw health sensors to ${HA_API} every ${INTERVAL}s"
      LAST_ROUND_OK="unknown"
    else
      if [ "$LAST_ROUND_OK" != "no" ]; then
        report_resolve_failure
        echo "WARN: Retrying every ${INTERVAL}s; logged once per status change." >&2
        LAST_ROUND_OK="no"
      fi
      sleep "$INTERVAL"
      continue
    fi
  fi

  if publish_round; then
    if [ "$LAST_ROUND_OK" != "yes" ]; then
      echo "INFO: Home Assistant health sensors are updating."
      LAST_ROUND_OK="yes"
    fi
  elif [ "$LAST_ROUND_OK" != "no" ]; then
    explain_failure "$LAST_FAIL_CODE"
    echo "WARN: Still retrying every ${INTERVAL}s; logged once per status change." >&2
    LAST_ROUND_OK="no"
    # Re-resolve on the next tick in case Home Assistant moved or came up late.
    if [ "$LAST_FAIL_CODE" = "000" ]; then
      HA_API=""
    fi
  fi
  sleep "$INTERVAL"
done
