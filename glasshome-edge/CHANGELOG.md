# Changelog

## 0.9.6

### Improvements

- Widget colors are more vibrant, especially at low opacity and in dark mode. Icons stay readable against their tinted backgrounds.
- Climate widget mode colors (heat, cool, auto, off) render distinctly in both light and dark themes instead of washing out.

### Bug Fixes

- Widgets that need a newer dashboard than yours no longer get auto-installed and broken. Auto-update now skips incompatible versions and tells you why.
- Climate widget no longer crashes when debug info is open.
- Widget tiles render correctly on existing dashboards after updating.
- Updating to a new dashboard release no longer leaves older bundled code lingering in your browser's cache. Updates take effect on first reload.

## 0.9.6-beta.3

### Bug Fixes

- Updating to a new dashboard release no longer leaves older bundled code lingering in your browser's cache. The dashboard now ships with versioned bundle names so updates take effect on first reload.

## 0.9.6-beta.2

### Bug Fixes

- The previous beta could fail to load widgets on existing dashboards because of an internal version mismatch between bundled and installed pieces. Widget tiles render correctly again after updating.

## 0.9.6-beta.1

### Improvements

- Widget colors are more vibrant, especially at low opacity and in dark mode. Icons stay readable against their tinted backgrounds.
- Climate widget mode colors (heat, cool, auto, off) now render distinctly in both light and dark themes instead of washing out.

### Bug Fixes

- Widgets that need a newer dashboard than yours no longer get auto-installed and broken. Auto-update now skips incompatible versions and tells you why.
- Climate widget no longer crashes when debug info is open.

## 0.9.5

### New Features

- Drag a widget into the top or bottom edge of the screen and the page autoscrolls. Long dashboards no longer require dropping a tile mid-move.
- Active dashboard in the dock is highlighted by a sliding pill indicator that animates between items.
- Mobile bottom-sheet rebuilt in-house: smoother drag-to-dismiss with velocity, proper keyboard avoidance, nested sheets, and popovers that no longer fight the stacking context.

### Improvements

- Mobile widget gestures redesigned. Tap toggles, long-press (500 ms with haptic bump on supported devices) opens the detail dialog. Fine control — sliders, color, presets — lives in the dialog. Page scroll over widgets is now snappy and predictable. Mouse and pen retain in-tile tap, hold, and slide.
- Edit mode pickup on mobile requires a 300 ms long-press with haptic confirmation, so a quick swipe through the dashboard no longer accidentally grabs a tile. Page scroll passes through the gaps between widgets.
- Resize handle hit target enlarged to 44×44 (visual grip unchanged), so even 1×1 tiles are resizable with a finger.
- Settings "Home Assistant" section uses the Home Assistant logo. Status chips on the dashboard and settings are now compact and consistently sized.
- Empty dashboards scroll and center properly in the viewport.

### Bug Fixes

- Widgets react to Home Assistant state changes in production again. Tapping a widget would toggle the entity in HA but the dashboard UI stayed frozen until refresh — a vendor-build module duplication caused entity subscriptions to never be sent.
- Background layer tracks the large viewport on mobile (100lvh) so it no longer repaints when browser chrome collapses on scroll.
- Web theme defaults to dark so the browser experience matches the native shell.
- Widget picker config dialog no longer flickers on close.
- Stale signal write during grid teardown silenced.

### Under the Hood

- @glasshome/ui 0.2.1 → 0.2.2 (drops @corvu/drawer)
- @glasshome/widget-sdk 0.3.4 → 0.3.7 (gesture grammar split by pointer type, touch-action derived from config)
- @glasshome/sync-layer 0.1.9 → 0.1.10 (duplicate-instance detection guards)
- Hub bearer auth restored for the CLI publish flow (server-side fix after better-auth 1.6 bump)
- CI bumped to bun 1.3.11 to match local

## 0.9.4

### Under the Hood

- Updated authentication library and validation framework — eliminates a class of startup crashes caused by dependency drift between local builds and CI
- Bundled weather demo content now ships with the dashboard out of the box

## 0.9.3

### Bug Fixes

- Fixed demo mode failing to start on fresh installs

## 0.9.2

### New Dashboard Header

- Glass header on every dashboard with the dashboard name and icon, time-of-day greeting, current date and time
- Live weather (temperature and condition) from your Home Assistant `weather.home` entity
- Lights-on and open-door counts that automatically scope to the dashboard's area when one is set
- Connection chips for Home Assistant and the GlassHome Hub so you can spot an offline side at a glance
- Smooth crossfade when entering edit mode — header swaps to dashboard controls without a jarring jump
- Responsive layout that scales down cleanly to phone-sized screens; edit-mode buttons collapse to icons on mobile

### Unified Settings Shell

- Settings pages now share the same glass header and status chips as the dashboard
- Consistent navigation, spacing, and look across every settings screen

### Bug Fixes

- Uninstall failures now show plain-English messages (demo-mode block, server error, network failure) instead of leaking raw error text from the backend
- Long-pressing a widget on mobile no longer accidentally selects text inside the tile or carries that highlight into the dialog you opened
- Switching dashboards from the settings page now actually opens the dashboard you picked, and the choice survives a page reload
- Switching between dashboards no longer briefly shows widgets from the previous dashboard — fixed a race that left stale instances on screen for a frame
- First-install demo content rebuilt: three curated dashboards (Home, Bedroom, Energy) wired to the dock with correct layouts
- Home dashboard weather widget pointed at a real demo entity so it shows data out of the box

### Under the Hood

- Updated to `@glasshome/ui` 0.2.1

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
