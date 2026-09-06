#!/usr/bin/env python3
"""
OpenClaw config helper for Home Assistant add-on.
Safely reads/writes openclaw.json without corrupting it.
"""

import difflib
import json
import os
import re
import sys
from datetime import datetime, timezone
from pathlib import Path

CONFIG_PATH = Path(os.environ.get("OPENCLAW_CONFIG_PATH", "/config/.openclaw/openclaw.json"))
BACKUP_DIR = Path(os.environ.get("OPENCLAW_CONFIG_BACKUP_DIR", "/config/.openclaw/backups"))
BACKUP_PREFIX = "openclaw."
BACKUP_SUFFIX = ".json"



def read_config():
    """Read and parse openclaw.json."""
    if not CONFIG_PATH.exists():
        return None
    try:
        return json.loads(CONFIG_PATH.read_text(encoding="utf-8"))
    except (json.JSONDecodeError, IOError) as e:
        print(f"ERROR: Failed to read config: {e}", file=sys.stderr)
        return None


def write_config(cfg):
    """Write config back to file with nice formatting."""
    try:
        CONFIG_PATH.parent.mkdir(parents=True, exist_ok=True)
        CONFIG_PATH.write_text(json.dumps(cfg, indent=2) + "\n", encoding="utf-8")
        return True
    except IOError as e:
        print(f"ERROR: Failed to write config: {e}", file=sys.stderr)
        return False


# ──────────────────────────────────────────────────────────────────────────────
# Config snapshots
#
# The add-on rewrites openclaw.json on every start (gateway settings, controlUi,
# repair rules). A snapshot is taken before the first write of each boot so a bad
# merge or an unwanted repair can always be rolled back with `oc-config restore`.
# ──────────────────────────────────────────────────────────────────────────────

def _sanitize_label(label):
    """Reduce a free-form label to a filename-safe token."""
    cleaned = re.sub(r"[^a-zA-Z0-9-]+", "-", (label or "manual")).strip("-").lower()
    return cleaned[:24] or "manual"


def list_snapshots():
    """Return snapshot files, newest first."""
    if not BACKUP_DIR.is_dir():
        return []
    entries = [
        p for p in BACKUP_DIR.iterdir()
        if p.is_file() and p.name.startswith(BACKUP_PREFIX) and p.name.endswith(BACKUP_SUFFIX)
    ]
    # Filenames embed a sortable UTC timestamp, so name order == chronological order.
    return sorted(entries, key=lambda p: p.name, reverse=True)


def _snapshot_label(path):
    """Extract the label embedded in a snapshot filename (may be empty)."""
    stem = path.name[len(BACKUP_PREFIX):-len(BACKUP_SUFFIX)]
    parts = stem.split(".", 1)
    return parts[1] if len(parts) > 1 else ""


def _parsed_or_none(text):
    try:
        return json.loads(text)
    except (json.JSONDecodeError, ValueError):
        return None


def _same_content(left_text, right_text):
    """Compare two configs semantically, falling back to raw text."""
    left = _parsed_or_none(left_text)
    right = _parsed_or_none(right_text)
    if left is not None and right is not None:
        return left == right
    return left_text == right_text


def prune_snapshots(keep):
    """Delete all but the newest `keep` snapshots. Returns the number removed."""
    if keep <= 0:
        return 0
    removed = 0
    for stale in list_snapshots()[keep:]:
        try:
            stale.unlink()
            removed += 1
        except OSError as e:
            print(f"WARN: Could not remove old snapshot {stale.name}: {e}", file=sys.stderr)
    return removed


def create_snapshot(keep, label="manual", force=False):
    """
    Snapshot the current openclaw.json unless it is identical to the newest one.

    Args:
        keep: how many snapshots to retain (<=0 disables snapshotting entirely)
        label: short tag embedded in the filename (e.g. startup, manual, pre-restore)
        force: write even when the content is unchanged
    """
    if keep <= 0:
        print("INFO: Config snapshots disabled (config_backup_keep=0)")
        return True

    if not CONFIG_PATH.exists():
        print("INFO: No OpenClaw config to snapshot yet")
        return True

    try:
        current = CONFIG_PATH.read_text(encoding="utf-8")
    except IOError as e:
        print(f"WARN: Could not read config for snapshot: {e}", file=sys.stderr)
        return True

    existing = list_snapshots()
    if not force and existing:
        try:
            if _same_content(existing[0].read_text(encoding="utf-8"), current):
                print(f"INFO: Config unchanged since {existing[0].name}; no new snapshot")
                prune_snapshots(keep)
                return True
        except IOError:
            pass  # unreadable newest snapshot — take a fresh one

    # Millisecond precision: a startup snapshot and an immediate `oc-config
    # snapshot` (or pre-restore backup) must not collide and overwrite each other.
    # Fixed-width, so lexicographic filename order stays chronological.
    now = datetime.now(timezone.utc)
    stamp = now.strftime("%Y%m%d-%H%M%S-") + f"{now.microsecond // 1000:03d}"
    target = BACKUP_DIR / f"{BACKUP_PREFIX}{stamp}.{_sanitize_label(label)}{BACKUP_SUFFIX}"

    try:
        BACKUP_DIR.mkdir(parents=True, exist_ok=True)
        target.write_text(current, encoding="utf-8")
        try:
            target.chmod(0o600)
        except OSError:
            pass
    except IOError as e:
        print(f"WARN: Could not write snapshot {target.name}: {e}", file=sys.stderr)
        return True  # never block startup on a failed backup

    removed = prune_snapshots(keep)
    suffix = f" (pruned {removed} old)" if removed else ""
    print(f"INFO: Saved config snapshot {target.name}{suffix}")
    return True


def resolve_snapshot(target):
    """Resolve a 1-based index or a filename to a snapshot path."""
    snapshots = list_snapshots()
    if not snapshots:
        print("ERROR: No config snapshots found in " + str(BACKUP_DIR))
        return None

    if re.fullmatch(r"\d+", str(target)):
        index = int(target)
        if index < 1 or index > len(snapshots):
            print(f"ERROR: Snapshot #{index} does not exist (have 1-{len(snapshots)})")
            return None
        return snapshots[index - 1]

    for snapshot in snapshots:
        if snapshot.name == target:
            return snapshot

    print(f"ERROR: Snapshot '{target}' not found")
    return None


def print_snapshot_list():
    snapshots = list_snapshots()
    if not snapshots:
        print(f"No config snapshots yet (looked in {BACKUP_DIR}).")
        return True

    print(f"Config snapshots in {BACKUP_DIR} (newest first):")
    print(f"{'#':>3}  {'Taken (UTC)':<19}  {'Label':<12}  {'Size':>7}  File")
    for index, snapshot in enumerate(snapshots, start=1):
        stem = snapshot.name[len(BACKUP_PREFIX):-len(BACKUP_SUFFIX)]
        stamp = stem.split(".", 1)[0]
        taken = stamp
        for fmt in ("%Y%m%d-%H%M%S-%f", "%Y%m%d-%H%M%S"):
            try:
                taken = datetime.strptime(stamp, fmt).strftime("%Y-%m-%d %H:%M:%S")
                break
            except ValueError:
                continue
        try:
            size = f"{snapshot.stat().st_size / 1024:.1f} KB"
        except OSError:
            size = "?"
        print(f"{index:>3}  {taken:<19}  {_snapshot_label(snapshot):<12}  {size:>7}  {snapshot.name}")
    return True


def diff_snapshot(target):
    """Print a unified diff between a snapshot and the current config."""
    snapshot = resolve_snapshot(target)
    if snapshot is None:
        return False

    def normalized(path):
        try:
            raw = path.read_text(encoding="utf-8")
        except IOError as e:
            print(f"ERROR: Could not read {path}: {e}")
            return None
        parsed = _parsed_or_none(raw)
        if parsed is None:
            return raw.splitlines()
        return json.dumps(parsed, indent=2, sort_keys=True).splitlines()

    old = normalized(snapshot)
    new = normalized(CONFIG_PATH) if CONFIG_PATH.exists() else []
    if old is None or new is None:
        return False

    diff = list(difflib.unified_diff(
        old, new, fromfile=snapshot.name, tofile="openclaw.json (current)", lineterm=""
    ))
    if not diff:
        print(f"No differences between {snapshot.name} and the current config.")
        return True

    for line in diff:
        print(line)
    return True


def restore_snapshot(target, keep=10):
    """Restore a snapshot over the live config, backing up the current one first."""
    snapshot = resolve_snapshot(target)
    if snapshot is None:
        return False

    try:
        content = snapshot.read_text(encoding="utf-8")
    except IOError as e:
        print(f"ERROR: Could not read snapshot {snapshot.name}: {e}")
        return False

    if _parsed_or_none(content) is None:
        print(f"ERROR: Snapshot {snapshot.name} is not valid JSON; refusing to restore")
        return False

    # Safety net: the config being replaced becomes a snapshot of its own.
    create_snapshot(keep, label="pre-restore", force=True)

    try:
        CONFIG_PATH.parent.mkdir(parents=True, exist_ok=True)
        CONFIG_PATH.write_text(content, encoding="utf-8")
    except IOError as e:
        print(f"ERROR: Could not write config: {e}")
        return False

    print(f"INFO: Restored {snapshot.name} to {CONFIG_PATH}")
    print("INFO: Restart the add-on for the restored config to take effect.")
    print("NOTE: Add-on options (gateway bind/port/auth) are re-applied on every start")
    print("NOTE: and will overwrite the restored values for those specific keys.")
    return True


def apply_resource_profile(profile):
    """
    Apply conservative OpenClaw defaults for low-resource hardware.

    Only runs for an explicitly selected `low` profile, and only writes keys that
    the user has not set themselves — so an existing install that relies on
    browser automation is never silently disabled.
    """
    if profile != "low":
        print(f"INFO: resource_profile={profile}; no OpenClaw config changes needed")
        return True

    cfg = read_config()
    if cfg is None:
        print("INFO: No OpenClaw config yet; skipping low-profile config defaults")
        return True

    changes = []

    browser = cfg.get("browser")
    if browser is None or isinstance(browser, dict):
        browser = browser or {}
        if "enabled" not in browser:
            browser["enabled"] = False
            cfg["browser"] = browser
            changes.append("browser.enabled=false (Chromium is the heaviest optional component)")
    else:
        print("WARN: 'browser' in openclaw.json is not an object; leaving it untouched")

    if not changes:
        print("INFO: Low-profile OpenClaw defaults already applied or overridden by user")
        return True

    if write_config(cfg):
        print(f"INFO: Applied low-profile defaults: {', '.join(changes)}")
        print("INFO: Override any of these in openclaw.json — the add-on never re-applies them.")
        return True

    print("ERROR: Failed to write config")
    return False


def get_gateway_setting(key, default=None):
    """Get a gateway setting from config."""
    cfg = read_config()
    if cfg is None:
        return default
    return cfg.get("gateway", {}).get(key, default)


def set_gateway_setting(key, value):
    """Set a gateway setting, preserving other config."""
    cfg = read_config()
    if cfg is None:
        cfg = {}
    
    if "gateway" not in cfg:
        cfg["gateway"] = {}
    
    cfg["gateway"][key] = value
    return write_config(cfg)


def apply_gateway_settings(mode: str, remote_url: str, bind_mode: str, port: int, enable_openai_api: bool, auth_mode: str, trusted_proxies_csv: str):
    """
    Apply gateway settings to OpenClaw config.
    
    Args:
        mode: "local" or "remote"
        remote_url: remote Gateway websocket URL (used when mode=remote)
        bind_mode: "loopback", "lan", or "tailnet"
        port: Port number to listen on (must be 1-65535)
        enable_openai_api: Enable OpenAI-compatible Chat Completions endpoint
        auth_mode: Gateway auth mode (token|trusted-proxy)
        trusted_proxies_csv: Comma-separated trusted proxy IP/CIDR list
    """
    # Validate gateway mode
    if mode not in ["local", "remote"]:
        print(f"ERROR: Invalid mode '{mode}'. Must be 'local' or 'remote'")
        return False
    
    # Validate bind mode
    if bind_mode not in ["loopback", "lan", "tailnet"]:
        print(f"ERROR: Invalid bind_mode '{bind_mode}'. Must be 'loopback', 'lan', or 'tailnet'")
        return False
    
    # Validate port range
    if port < 1 or port > 65535:
        print(f"ERROR: Invalid port {port}. Must be between 1 and 65535")
        return False

    # Validate auth mode
    if auth_mode not in ["token", "trusted-proxy"]:
        print(f"ERROR: Invalid auth_mode '{auth_mode}'. Must be 'token' or 'trusted-proxy'")
        return False
    
    cfg = read_config()
    if cfg is None:
        cfg = {}
    
    if "gateway" not in cfg:
        cfg["gateway"] = {}
    
    gateway = cfg["gateway"]

    # gateway.remote settings
    if "remote" not in gateway or not isinstance(gateway.get("remote"), dict):
        gateway["remote"] = {}
    remote_cfg = gateway["remote"]

    # auth should be nested inside gateway
    if "auth" not in gateway:
        gateway["auth"] = {}

    # http.endpoints.chatCompletions should be nested inside gateway
    if "http" not in gateway:
        gateway["http"] = {}
    if "endpoints" not in gateway["http"]:
        gateway["http"]["endpoints"] = {}
    if "chatCompletions" not in gateway["http"]["endpoints"]:
        gateway["http"]["endpoints"]["chatCompletions"] = {}
    
    auth = gateway["auth"]
    chat_completions = gateway["http"]["endpoints"]["chatCompletions"]

    # Order-preserving dedupe: access-mode presets prepend loopback, which can
    # repeat an entry the user also configured.
    trusted_proxies = []
    for candidate in trusted_proxies_csv.split(","):
        candidate = candidate.strip()
        if candidate and candidate not in trusted_proxies:
            trusted_proxies.append(candidate)

    # OpenClaw trusted-proxy mode requires nested auth.trustedProxy config.
    # Use a sane default user header expected from reverse proxies.
    trusted_proxy_cfg_default = {"userHeader": "x-forwarded-user"}

    current_mode = gateway.get("mode", "")
    current_remote_url = remote_cfg.get("url", "")
    current_bind = gateway.get("bind", "")
    current_port = gateway.get("port", 18789)
    current_openai_api = chat_completions.get("enabled", False)
    current_auth_mode = auth.get("mode", "token")
    current_trusted_proxies = gateway.get("trustedProxies", [])
    current_trusted_proxy_cfg = auth.get("trustedProxy")
    
    changes = []
    
    if current_mode != mode:
        gateway["mode"] = mode
        changes.append(f"mode: {current_mode} -> {mode}")

    if current_remote_url != remote_url:
        remote_cfg["url"] = remote_url
        changes.append(f"remote.url: {current_remote_url} -> {remote_url}")
    
    if current_bind != bind_mode:
        gateway["bind"] = bind_mode
        changes.append(f"bind: {current_bind} -> {bind_mode}")
    
    if current_port != port:
        gateway["port"] = port
        changes.append(f"port: {current_port} -> {port}")
    
    if current_openai_api != enable_openai_api:
        chat_completions["enabled"] = enable_openai_api
        changes.append(f"chatCompletions.enabled: {current_openai_api} -> {enable_openai_api}")
    
    if current_auth_mode != auth_mode:
        auth["mode"] = auth_mode
        changes.append(f"auth.mode: {current_auth_mode} -> {auth_mode}")

    if current_trusted_proxies != trusted_proxies:
        gateway["trustedProxies"] = trusted_proxies
        changes.append(f"trustedProxies: {current_trusted_proxies} -> {trusted_proxies}")

    if auth_mode == "trusted-proxy":
        if current_trusted_proxy_cfg != trusted_proxy_cfg_default:
            auth["trustedProxy"] = trusted_proxy_cfg_default
            changes.append("auth.trustedProxy: configured default userHeader=x-forwarded-user")
    
    if changes:
        if write_config(cfg):
            print(f"INFO: Updated gateway settings: {', '.join(changes)}")
            return True
        else:
            print("ERROR: Failed to write config")
            return False
    else:
        print(f"INFO: Gateway settings already correct (mode={mode}, remoteUrl={remote_url}, bind={bind_mode}, port={port}, chatCompletions={enable_openai_api}, authMode={auth_mode}, trustedProxies={trusted_proxies})")
        return True


def set_control_ui_origins(origins_csv: str, additional_origins_csv: str = "", disable_device_auth: bool = True):
    """
    Configure gateway.controlUi for the built-in HTTPS proxy.

    Sets allowedOrigins so the browser WebSocket is accepted, and removes keys
    that OpenClaw has retired or never accepted.

    Args:
        origins_csv: Comma-separated list of default origins provided by the add-on.
        additional_origins_csv: Comma-separated list of user-provided extra origins.
        disable_device_auth: Accepted for backward compatibility and ignored —
            gateway.controlUi.dangerouslyDisableDeviceAuth is retired upstream.
    """
    cfg = read_config()
    if cfg is None:
        cfg = {}

    if "gateway" not in cfg:
        cfg["gateway"] = {}
    gateway = cfg["gateway"]

    if "controlUi" not in gateway:
        gateway["controlUi"] = {}

    control_ui = gateway["controlUi"]
    default_origins = [o.strip() for o in origins_csv.split(",") if o.strip()]
    additional_origins = [o.strip() for o in (additional_origins_csv or "").split(",") if o.strip()]
    changes = []

    # --- allowedOrigins ---
    current_origins = control_ui.get("allowedOrigins", [])
    if not isinstance(current_origins, list):
        current_origins = []

    merged_origins = []
    for origin in [*default_origins, *current_origins, *additional_origins]:
        if isinstance(origin, str) and origin and origin not in merged_origins:
            merged_origins.append(origin)

    if current_origins != merged_origins:
        control_ui["allowedOrigins"] = merged_origins
        changes.append(f"allowedOrigins: {current_origins} -> {merged_origins}")

    # --- dangerouslyDisableDeviceAuth (retired upstream) ---
    # OpenClaw retired this flag in the 2026.8.x line: it is inert, the security
    # audit lists it as a dangerous key, and `openclaw doctor --fix` removes it.
    # Writing it back every boot would fight Doctor, so the add-on now strips it.
    # Browsers pair once instead (`openclaw devices approve <requestId>`).
    if "dangerouslyDisableDeviceAuth" in control_ui:
        del control_ui["dangerouslyDisableDeviceAuth"]
        changes.append("removed retired key: dangerouslyDisableDeviceAuth (now inert upstream)")

    # --- Remove invalid keys from earlier add-on versions ---
    for stale_key in ("pairingMode",):
        if stale_key in control_ui:
            del control_ui[stale_key]
            changes.append(f"removed invalid key: {stale_key}")

    if not changes:
        print(f"INFO: controlUi already correct: origins={merged_origins}")
        return True

    if write_config(cfg):
        print(f"INFO: Updated controlUi: {', '.join(changes)}")
        return True
    print("ERROR: Failed to write config")
    return False


def repair_known_invalid_settings():
    """Repair known config values that prevent OpenClaw from starting."""
    cfg = read_config()
    if cfg is None:
        return True

    tools = cfg.get("tools")
    if not isinstance(tools, dict):
        return True

    web = tools.get("web")
    if not isinstance(web, dict):
        return True

    search = web.get("search")
    if not isinstance(search, dict):
        return True

    provider = search.get("provider")
    changes = []

    if provider == "brave":
        del search["provider"]
        changes.append("removed unavailable tools.web.search.provider=brave")

    if not changes:
        print("INFO: No known invalid OpenClaw config settings found")
        return True

    if write_config(cfg):
        print(f"INFO: Repaired OpenClaw config: {', '.join(changes)}")
        return True

    print("ERROR: Failed to write config")
    return False


def main():
    """CLI entry point for use by run.sh"""
    if len(sys.argv) < 2:
        print("Usage: oc_config_helper.py <command> [args...]")
        sys.exit(1)
    
    cmd = sys.argv[1]
    
    if cmd == "apply-gateway-settings":
        if len(sys.argv) != 9:
            print("Usage: oc_config_helper.py apply-gateway-settings <local|remote> <remote_url> <loopback|lan|tailnet> <port> <enable_openai_api:true|false> <auth_mode:token|trusted-proxy> <trusted_proxies_csv>")
            sys.exit(1)
        mode = sys.argv[2]
        remote_url = sys.argv[3]
        bind_mode = sys.argv[4]
        port = int(sys.argv[5])
        enable_openai_api = sys.argv[6].lower() == "true"
        auth_mode = sys.argv[7]
        trusted_proxies_csv = sys.argv[8]
        success = apply_gateway_settings(mode, remote_url, bind_mode, port, enable_openai_api, auth_mode, trusted_proxies_csv)
        sys.exit(0 if success else 1)
    
    elif cmd == "get":
        if len(sys.argv) != 3:
            print("Usage: oc_config_helper.py get <key>")
            sys.exit(1)
        key = sys.argv[2]
        value = get_gateway_setting(key)
        if value is not None:
            print(value)
        sys.exit(0)
    
    elif cmd == "set-control-ui-origins":
        if len(sys.argv) not in (3, 4, 5):
            print("Usage: oc_config_helper.py set-control-ui-origins <origins_csv> [additional_origins_csv] [disable_device_auth:true|false]")
            sys.exit(1)
        origins_csv = sys.argv[2]
        additional_origins_csv = sys.argv[3] if len(sys.argv) >= 4 else ""
        disable_device_auth = True
        if len(sys.argv) == 5:
            disable_device_auth = sys.argv[4].strip().lower() == "true"
        success = set_control_ui_origins(origins_csv, additional_origins_csv, disable_device_auth)
        sys.exit(0 if success else 1)

    elif cmd == "repair-known-invalid-settings":
        if len(sys.argv) != 2:
            print("Usage: oc_config_helper.py repair-known-invalid-settings")
            sys.exit(1)
        success = repair_known_invalid_settings()
        sys.exit(0 if success else 1)

    elif cmd == "snapshot":
        # snapshot <keep> [label] [--force]
        keep = 10
        label = "manual"
        force = "--force" in sys.argv[2:]
        positional = [a for a in sys.argv[2:] if a != "--force"]
        if positional:
            try:
                keep = int(positional[0])
            except ValueError:
                print(f"ERROR: Invalid keep count '{positional[0]}' (expected an integer)")
                sys.exit(1)
        if len(positional) > 1:
            label = positional[1]
        sys.exit(0 if create_snapshot(keep, label, force) else 1)

    elif cmd == "list-snapshots":
        sys.exit(0 if print_snapshot_list() else 1)

    elif cmd == "diff-snapshot":
        target = sys.argv[2] if len(sys.argv) > 2 else "1"
        sys.exit(0 if diff_snapshot(target) else 1)

    elif cmd == "restore-snapshot":
        if len(sys.argv) not in (3, 4):
            print("Usage: oc_config_helper.py restore-snapshot <index|filename> [keep]")
            sys.exit(1)
        keep = 10
        if len(sys.argv) == 4:
            try:
                keep = int(sys.argv[3])
            except ValueError:
                print(f"ERROR: Invalid keep count '{sys.argv[3]}' (expected an integer)")
                sys.exit(1)
        sys.exit(0 if restore_snapshot(sys.argv[2], keep) else 1)

    elif cmd == "apply-resource-profile":
        if len(sys.argv) != 3:
            print("Usage: oc_config_helper.py apply-resource-profile <auto|low|balanced|high>")
            sys.exit(1)
        sys.exit(0 if apply_resource_profile(sys.argv[2]) else 1)

    elif cmd == "set":
        if len(sys.argv) != 4:
            print("Usage: oc_config_helper.py set <key> <value>")
            sys.exit(1)
        key = sys.argv[2]
        value = sys.argv[3]
        # Try to convert to int if it looks like a number
        try:
            value = int(value)
        except ValueError:
            pass
        success = set_gateway_setting(key, value)
        sys.exit(0 if success else 1)
    
    else:
        print(f"Unknown command: {cmd}")
        sys.exit(1)


if __name__ == "__main__":
    main()
