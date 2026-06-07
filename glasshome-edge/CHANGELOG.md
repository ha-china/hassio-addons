# Changelog

## 0.10.0

Stable release. Everything from the 0.10.0 betas:

### New Features

- Sign in with a GlassHome account. Start the sign-in from settings and approve it by entering a short code at glasshome.app/link. Your dashboard knows you across devices, no password typed on the TV or tablet.
- GlassHome Pro. Community widgets and custom theming are now part of Pro. Free dashboards keep the full built-in widget set; a clear upgrade prompt appears when you reach for a Pro-only feature.
- Editing your dashboard is clearer: the page dims behind the widgets, each widget gets crisp corner buttons for move, remove, and resize, and holding a widget opens its settings directly.
- Try a demo home. From the welcome screen you can explore a fully populated dashboard, Pro features included, before connecting your own Home Assistant.
- Pair a second screen with Quick-Connect. A kiosk or extra tablet shows a short code you confirm once, instead of copying tokens by hand.
- Theme cards in the theme picker now show each theme's actual background and color palette, plus a new sharp Monochrome look with a diamond grid background and a scattered-trees pattern for Forest Zen.
- Icons now load without an internet connection. Entity, area, and dock icons come straight from your own server instead of an external icon service.

### Improvements

- Redesigned welcome and setup. A calmer, conversational onboarding walks you through connecting your home one step at a time.
- Reworked Settings. Your account and your home live in clearly separated cards, Settings → Your Home lists every member with their role, and a new "Reduce Motion" toggle dials back animations.
- Widgets you drop on the dashboard appear at a readable size by default instead of the 1x1 minimum.
- Searching for an entity by its friendly name works in every widget picker.
- Faster installs and updates. The add-on download is about a third smaller.

### Bug Fixes

- Upgrading from 0.9.x preserves your dashboards, placed widgets, and custom themes.
- Homes sharing one server are fully separated: community widgets, custom themes, and background updates belong to your home only.
- Dashboard reconnects to Home Assistant automatically after the app comes back from the background.
- Drag and resize work immediately after adding the first widget to a fresh dashboard.
- Batteries widget shows your batteries on setups where it used to come up empty.

## 0.10.0-beta.7

### Improvements

- The demo now includes Pro features: browse community widgets and create custom themes without a subscription, so you can see everything GlassHome offers before connecting your home.
- Demo-only installs now put "Demo mode" front and center on every sign-in screen. Home Assistant and Quick Connect are shown disabled with a notice instead of leading you into a connection that isn't available.

### Bug Fixes

- Your Pro plan now shows as a single PRO badge in Settings → Account instead of a row of one-letter badges.

## 0.10.0-beta.6

### New Features

- Editing your dashboard is clearer: the page dims behind the widgets, each widget gets crisp corner buttons for move, remove, and resize, and holding a widget opens its settings directly.
- Try GlassHome without a Home Assistant connection. The setup screen now offers "Or try the demo", which drops you into a shared demo home you can explore freely.
- Theme cards in the theme picker now show each theme's actual background and color palette, so you can see what you're picking before you apply it.
- New sharp Monochrome look with a rotated diamond grid background, and a new scattered-trees pattern for Forest Zen.
- Icons now load without an internet connection. Entity, area, and dock icons come straight from your own server instead of an external icon service.

### Improvements

- The Your Home settings section is tidier: flatter layout, a clear person icon for members, and the Add Link button where you expect it.

### Bug Fixes

- Installing a widget from the Widget Browser now updates the card immediately to "Installed", no need to reopen the dialog.
- Approving a new device while signed out no longer dead-ends on a GlassHome-only login page; you're taken through setup and back to the approval screen.
- Background patterns are easier to see, and changing themes no longer resets your background color.
- Uploading a custom background now shows the Pro upgrade prompt up front instead of quietly accepting a file you can't use.

## 0.10.0-beta.5

### New Features

- See who's in your home. Settings → Your Home now lists every member with their name, email, and role.

### Improvements

- Changing the dashboard background now shows the Pro lock up front. Free dashboards see lock badges on background options and an upgrade prompt, instead of clicks that silently did nothing.

### Bug Fixes

- Custom themes created on 0.9.x are back. If your saved themes disappeared from the theme editor after upgrading, they reappear and can be edited again.
- Homes sharing one server are now fully separated: community widgets and custom themes belong to your home only and no longer show up for other households on the same install.
- Background widget updates run for every home on a shared server, not just the first one.

## 0.10.0-beta.4

### Bug Fixes

- Your dashboard shows up again after upgrading. Some upgraded installs opened to a blank screen and widgets you added vanished on save; your existing dashboard and widgets now appear, and edits stick.

## 0.10.0-beta.3

### Bug Fixes

- Home Assistant reconnects after upgrading. If an upgrade left your dashboard signed in but showing no devices, sign in to Home Assistant again and the connection is restored automatically, or set the address under Settings (which now saves correctly).

## 0.10.0-beta.2

### Bug Fixes

- Upgrading from an earlier version no longer fails to start. Your existing dashboards and placed widgets carry over into the new accounts setup instead of being lost.

## 0.10.0-beta.1

### New Features

- Sign in with a GlassHome account. Open settings, start the sign-in, and approve it by entering the short code at glasshome.app/link. Your dashboard then knows who you are across devices, no password typed on the TV or tablet.
- GlassHome Pro. Community widgets and custom theming are now part of Pro. Free dashboards keep the full built-in widget set; an upgrade prompt appears when you reach for a Pro-only feature.
- Try a demo home. From the welcome screen you can explore a fully populated dashboard with sample rooms and devices before connecting your own Home Assistant.
- Pair a second screen with Quick-Connect. A kiosk or extra tablet shows a short code you confirm once, instead of copying tokens by hand.

### Improvements

- Redesigned welcome and setup. A calmer, conversational onboarding walks you through connecting your home one step at a time, with a smoother brand intro.
- Reworked Settings. Your account and your home now live in clearly separated cards, every section shares the same rounded, layered look, and corners follow the radius you pick in the theme editor.
- New "Reduce Motion" toggle in settings. Turn it on to dial back animations across the dashboard.
- Settings sections and widgets ease in with a gentle staggered entrance instead of appearing all at once.
- Faster installs and updates. The add-on download is about a third smaller, so upgrades land quicker.

## 0.9.7-beta.5

### Improvements

- Widgets you drop on the dashboard now appear at a readable size by default. Climate, light, clock, cover, batteries land at 2x2 instead of the 1x1 minimum; weather and media-player at 3x2; area and camera at 3x3. You can still resize each tile as before.
- Analogue clock now shows the date underneath the dial when you turn on "Show Date" in widget settings. The toggle is visible in both digital and analogue clock modes.
- Widget Browser icons (Settings → Browse Widgets) are legible. They used to render as muddy brown.

## 0.9.7-beta.4

### Bug Fixes

- Adding an external link to the dock now works. The button silently failed on installs served over plain HTTP on the LAN.
- The Home Assistant server URL field shows your saved URL after you leave settings and come back. The stale "Save" button that could overwrite your reverse-proxy URL with the default is gone.
- Light-mode widget picker icons are legible. They used to render as muddy brown on cream.
- The widget picker search box clears itself between adds, so you no longer see a stale query when reopening the dialog.
- Analog clock hour marks are visible in light mode. They used to render in white-on-cream and disappear.
- Widgets with multiple entities (lights, switches, sensors, etc.) show a comma-separated list of friendly names as the default title instead of only the first entity's name.

## 0.9.7-beta.3

### Bug Fixes

- Editing a placed widget now shows the full entity list again. The "No entities found" message that appeared when reopening a widget's settings is gone.
- Searching for an entity by its friendly name works in every widget picker. Typing "Solar Power" finds your sensor whether you remember the entity_id or not.
- Newly-created Home Assistant areas appear in the area widget picker live, without restarting the dashboard.

## 0.9.7-beta.2

### Improvements

- First update after this release pulls a single multi-architecture image instead of two separate ones, so future updates download faster.

## 0.9.7-beta.1

### Bug Fixes

- Drag and resize work immediately after adding the first widget to a fresh dashboard. No more refresh-or-add-second-widget workaround.
- Batteries widget now shows your batteries. Some setups previously saw an empty widget even when Home Assistant had battery entities.
- Dashboard reconnects to Home Assistant automatically after the iPad app comes back from the background. You no longer have to open Settings to bring widgets back to life.
- After upgrading to a new dashboard release, your widgets update and load on first paint with a brief "Updating widgets…" splash. No more opaque "Failed to load widget" toasts. If the hub is unreachable, the splash gives up after 10s and any incompatible tile shows a one-click "Update" button.
- Background widget auto-updates actually run now. They had been silently skipped on every paired install.

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
