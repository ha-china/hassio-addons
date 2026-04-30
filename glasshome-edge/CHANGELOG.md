# Changelog

## 0.9.1

### Performance

- Smarter entity subscriptions — only subscribes to entities your widgets actually use, not everything
- Reduced unnecessary UI refreshes from Home Assistant heartbeat updates
- Smoother drag and slide gestures on widgets

### Bug Fixes

- Fixed area names and floor changes not updating in the UI
- Fixed a race condition that could briefly drop entity subscriptions during reconnection
- Fixed incorrect timestamp tracking for entity state changes

## 0.9.0

### Widget Auto-Update

- Automatic background updates for installed widgets — polls the hub and installs compatible new versions
- Per-widget auto-update toggle to opt individual widgets in or out
- Separate controls for official and community widgets in Settings
- Update history with recent runs and failure surfacing
- Dock badge showing available widget updates

### Widget Rollback & Safe Mode

- Config snapshots on every install, upgrade, and config change — automatic, zero setup
- One-click rollback button on widgets that fail to mount, restoring the last known-good config
- Safe Mode toggle in Settings that disables all widget loading for recovery from broken states
- Uninstall now warns when active instances exist across dashboards and offers cascade removal

### Widget Browser Improvements

- New detail dialog when browsing widgets — full description, version info, compatibility, and install status
- Per-registry error banners with retry instead of a single opaque failure
- Better error messages with 8 distinct error types in human-readable language
- "Update All" counter with accessibility support
- Yanked widget detection — amber banner on dashboard widgets that have been pulled from the hub
- Clear labels when a widget requires a newer SDK version
- Reworked community consent dialog

### Performance & Reliability

- Debounced layout saves to prevent redundant writes during rapid edits
- Stale module eviction on install/uninstall — no more phantom widgets lingering after changes
- Config migration moved out of the render path — eliminates unnecessary re-renders
- Lazy hub manifest loading in widget browser — only fetches details when you open them
- Atomic install pipeline with per-widget locking — no more race conditions during concurrent installs
- Generation counter on widget map to detect and discard stale state

### Toast & Notification Overhaul

- Fully responsive, theme-aware toast system with proper variants (success, error, warning, info)

### Security

- Hardened bundle downloads: size limits, timeout, content-type checks, SHA-256 verification
- Auth required on all user-scoped routes and background uploads
- SSRF and path traversal protections on all external requests
- CSP headers and Trusted Types for defense-in-depth
- Community widget updates gated behind explicit consent

### Bug Fixes

- Fixed SSE subscription auth — token now passed correctly
- Fixed demo reset wiping all data instead of just demo content
- Fixed stale widget map causing phantom widgets after rapid edits
- Fixed stale dialog state in widget config dialogs
- Fixed spurious dashboard save when navigating to settings
- Fixed spinner flicker across widget cards during install

## 0.9.0-beta.3

### Zod-first widget config system
- Widget config driven by Zod schemas — types, defaults, validation, and forms all derived automatically
- Auto-generated edit forms replace hand-built forms across all 15 widgets
- EntitySelector and AreaPicker now in @glasshome/ui as proper form components
- SchemaForm renders consistent forms from JSON Schema (generated from Zod)

### Toast system overhaul
- Responsive positioning: top-center on mobile, bottom-right on desktop
- Theme-aware: follows dark/light mode
- Proper variants: toast.success(), toast.error(), toast.loading(), toast.info()
- Dock-aware offset so toasts don't overlap navigation

### UX improvements
- Bottom sheet swipe-to-close on mobile
- Widget browser blocks incompatible widgets ("Requires newer dashboard")
- SDK version shown in settings footer
- Fixed spurious "Main dashboard updated" toast on settings navigation
- Fixed text selection on widget long-press

### Widget CLI
- `bun widget publish --name <widget> --bump <patch|minor|major>` for non-interactive publishing

## 0.8.2

### Bug Fixes

- Fix authentication failing when accessing the dashboard via local network IPs outside the 192.168.x range (e.g. 10.x.x.x, 172.x.x.x)

## 0.8.0-beta.8

- Fixed database migration not completing (missing statement breakpoints in SQLite)
- Fixed HA connection lost after update (auto-create anonymous session for unauthenticated requests)
- Fixed widget install/uninstall ON CONFLICT error

## 0.8.0-beta.7

- Upgraded to Vite 8 (Rolldown bundler) — ~3x faster builds
- Migrated from TanStack Router to @solidjs/router
- Fixed vendor chunk generation — pre-built separately to eliminate bundler-dependent fragility
- Removed per-user widget installs — installed widgets are now instance-wide
- Fixed migration journal timestamps causing skipped migrations
- Fixed widget CLI registration failing with FK constraint errors
- Replaced lucide-solid with iconify-icon for dev server compatibility

## 0.8.0-beta.6

- Fixed widgets failing to load in production (shared dependency exports were tree-shaken from vendor chunks)

## 0.8.0-beta.4

- Redesigned setup wizard: single-screen flow replaces 5-step wizard
- Fixed setup redirect loop for anonymous users
- Fixed device pairing (join flow) with signed session cookies
- Removed default user seeding; per-user config created on sign-in
- Auto-create default dashboard on user creation

## 0.8.0-beta.1

First edge release. This channel receives early builds for testing before they ship to stable.
