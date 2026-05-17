#!/usr/bin/env python3
"""Apply Hermes dashboard compatibility patches for the Home Assistant add-on.

The add-on runs against a user-selected Hermes checkout, so the dashboard source
can be either modern and proxy-prefix aware, or older and root-path-only. This
script keeps the startup path tolerant: modern sources are left alone, legacy
sources get small idempotent patches, and upstream drift emits warnings instead
of killing the add-on.
"""

from __future__ import annotations

import re
import sys
from pathlib import Path


LEGACY_BASE_PATCH = (
    'export const BASE = new URL(/* @vite-ignore */ "..", import.meta.url)'
    '.pathname.replace(/\\/$/, ""); /* HA-ADDON-BASE-PATCHED */'
)
LEGACY_BASE_PATCH_WITHOUT_VITE_IGNORE = (
    'export const BASE = new URL("..", import.meta.url)'
    '.pathname.replace(/\\/$/, ""); /* HA-ADDON-BASE-PATCHED */'
)
LEGACY_BASE_PATCHES = (
    LEGACY_BASE_PATCH,
    LEGACY_BASE_PATCH_WITHOUT_VITE_IGNORE,
)


def read(path: Path) -> str:
    return path.read_text() if path.is_file() else ""


def write_if_changed(path: Path, old_text: str, new_text: str) -> bool:
    if new_text == old_text:
        return False
    path.write_text(new_text)
    return True


def patch_modern_dashboard(api: Path, api_text: str) -> bool:
    """Undo obsolete legacy BASE patches on modern Hermes sources."""
    matched_patch = next((patch for patch in LEGACY_BASE_PATCHES if patch in api_text), "")
    if not matched_patch:
        print("[run] Dashboard source is proxy-prefix aware; source patches skipped")
        return False

    repaired = api_text.replace(matched_patch, "const BASE = HERMES_BASE_PATH;")
    if write_if_changed(api, api_text, repaired):
        print("[run] Removed obsolete dashboard BASE source patch")
        return True
    return False


def patch_legacy_api(api: Path, api_text: str) -> bool:
    if not api.is_file() or "HA-ADDON-BASE-PATCHED" in api_text:
        return False

    patched, count = re.subn(
        r"^const BASE = .*$",
        LEGACY_BASE_PATCH,
        api_text,
        count=1,
        flags=re.MULTILINE,
    )
    if not count:
        print("[run] WARNING: api.ts BASE pattern changed upstream - dashboard API paths may need review")
        return False

    if write_if_changed(api, api_text, patched):
        print("[run] Patched legacy dashboard API base path")
        return True
    return False


def patch_legacy_plugins(plugins: Path, plugins_text: str) -> bool:
    if not plugins.is_file() or "HA-ADDON-PLUGINS-PATCHED" in plugins_text:
        return False

    patched = plugins_text.replace(
        'import { api } from "@/lib/api";',
        'import { api, BASE } from "@/lib/api"; /* HA-ADDON-PLUGINS-PATCHED */',
        1,
    )
    patched = patched.replace("`/dashboard-plugins/", "`${BASE}/dashboard-plugins/")

    if patched == plugins_text:
        print("[run] WARNING: usePlugins.ts URL pattern changed upstream - dashboard plugins may 404")
        return False

    if write_if_changed(plugins, plugins_text, patched):
        print("[run] Patched legacy dashboard plugin asset paths")
        return True
    return False


def patch_legacy_router(main_tsx: Path, main_text: str) -> bool:
    if not main_tsx.is_file() or "HA-ADDON-ROUTER-BASENAME-PATCHED" in main_text:
        return False

    patched = main_text.replace(
        'import { BrowserRouter } from "react-router-dom";',
        'import { BrowserRouter } from "react-router-dom";\n'
        'import { BASE } from "@/lib/api"; /* HA-ADDON-ROUTER-BASENAME-PATCHED */',
        1,
    )
    patched = patched.replace("<BrowserRouter>", '<BrowserRouter basename={BASE || "/"}>', 1)

    if patched == main_text or 'basename={BASE || "/"}' not in patched:
        print("[run] WARNING: main.tsx BrowserRouter pattern changed upstream - dashboard links may 404 behind /dashboard/")
        return False

    if write_if_changed(main_tsx, main_text, patched):
        print("[run] Patched legacy dashboard router base path")
        return True
    return False


def patch_legacy_vite(vite: Path, vite_text: str) -> bool:
    if not vite.is_file() or "HA-ADDON-BASE-INJECTED" in vite_text:
        return False

    cleaned = re.sub(r'^\s*base:\s*"\./",\s*\n', "", vite_text, flags=re.MULTILINE)
    patched = cleaned.replace(
        "export default defineConfig({",
        'export default defineConfig({\n  /* HA-ADDON-BASE-INJECTED */\n  base: "./",',
        1,
    )

    if patched == vite_text:
        print("[run] WARNING: vite.config.ts defineConfig pattern changed upstream - dashboard assets may need review")
        return False

    if write_if_changed(vite, vite_text, patched):
        print("[run] Patched legacy dashboard Vite base path")
        return True
    return False


def main() -> int:
    if len(sys.argv) != 3:
        print("usage: dashboard-patches.py SRC_DIR STATUS_FILE", file=sys.stderr)
        return 2

    src = Path(sys.argv[1])
    status_file = Path(sys.argv[2])
    api = src / "web/src/lib/api.ts"
    plugins = src / "web/src/plugins/usePlugins.ts"
    main_tsx = src / "web/src/main.tsx"
    vite = src / "web/vite.config.ts"

    changed = False
    api_text = read(api)
    modern_dashboard = "HERMES_BASE_PATH" in api_text and "__HERMES_BASE_PATH__" in api_text

    if modern_dashboard:
        changed |= patch_modern_dashboard(api, api_text)
    else:
        changed |= patch_legacy_api(api, api_text)
        changed |= patch_legacy_plugins(plugins, read(plugins))
        changed |= patch_legacy_router(main_tsx, read(main_tsx))
        changed |= patch_legacy_vite(vite, read(vite))

    status_file.write_text("changed" if changed else "")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
