#!/usr/bin/env bash
# ──────────────────────────────────────────────────────────────
# oc-config — inspect and roll back OpenClaw configuration snapshots
#
# The add-on rewrites /config/.openclaw/openclaw.json on every start (gateway
# bind/port/auth, controlUi origins, repair rules). A snapshot is taken before
# the first write of each boot, so a bad change is always recoverable.
#
# All work is delegated to oc_config_helper.py — no config parsing lives here.
# ──────────────────────────────────────────────────────────────
set -euo pipefail

export OPENCLAW_CONFIG_PATH="${OPENCLAW_CONFIG_PATH:-/config/.openclaw/openclaw.json}"

# Same lookup order as run.sh: image path first, then alongside this script.
HELPER="${OC_CONFIG_HELPER:-/oc_config_helper.py}"
if [ ! -f "$HELPER" ] && [ -f "$(dirname "$0")/oc_config_helper.py" ]; then
  HELPER="$(dirname "$0")/oc_config_helper.py"
fi

# Mirrors the config_backup_keep add-on option; exported by run.sh.
KEEP="${CONFIG_BACKUP_KEEP:-10}"

usage() {
  cat <<'EOF'
Usage: oc-config <command> [args]

  list                 Show saved config snapshots (newest first)
  diff [n|file]        Diff a snapshot against the current config (default: newest)
  restore <n|file>     Restore a snapshot (the current config is backed up first)
  snapshot [label]     Take a snapshot right now
  help                 Show this help

Snapshots live in /config/.openclaw/backups and are pruned to the newest
config_backup_keep entries (add-on Configuration, default 10).

Examples:
  oc-config list
  oc-config diff 2
  oc-config restore 2       # then restart the add-on
EOF
}

cmd="${1:-list}"
shift || true

if [ ! -f "$HELPER" ] && [ "$cmd" != "help" ] && [ "$cmd" != "-h" ] && [ "$cmd" != "--help" ]; then
  echo "ERROR: oc_config_helper.py not found (looked in /oc_config_helper.py)" >&2
  echo "ERROR: The add-on image looks incomplete; reinstall or update the add-on." >&2
  exit 1
fi

case "$cmd" in
  list|ls)
    exec python3 "$HELPER" list-snapshots
    ;;
  diff)
    exec python3 "$HELPER" diff-snapshot "${1:-1}"
    ;;
  restore)
    if [ $# -lt 1 ]; then
      echo "ERROR: restore needs a snapshot index or filename (see 'oc-config list')" >&2
      exit 1
    fi
    exec python3 "$HELPER" restore-snapshot "$1" "$KEEP"
    ;;
  snapshot|save)
    exec python3 "$HELPER" snapshot "$KEEP" "${1:-manual}" --force
    ;;
  help|-h|--help)
    usage
    ;;
  *)
    echo "Unknown command: $cmd" >&2
    usage >&2
    exit 2
    ;;
esac
