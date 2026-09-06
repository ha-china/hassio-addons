# Changelog

## 1.3.0

Everything from the 1.3.0 betas, rolled up for the stable channel. Since 1.2.0:

### New Features

- Give each person their own access: which rooms they see, whether they can control things, which sensitive devices (locks, alarm, cameras, garage) stay off limits, which dashboards they open, and whether their access ends on a date. Settings, People & Devices.
- Shared screens are now their own members: a kitchen tablet gets its own access, starts on its own dashboard, uses its own theme, and no longer borrows whoever paired it.
- Invite someone by link: they pick a password and land on the dashboards you gave them. Links work once and expire after 7 days; resend or cancel them from People & Devices.
- People you invited sign in with their own name, exactly as they typed it when they joined, from the "Local sign in" door on the welcome screen.
- Everyone can see their own row in People & Devices: what they have access to and where they are signed in.
- After this update, admins see a one-time note in People & Devices to review screens that were paired before it.

### Changes

- Limited access is enforced everywhere: people with limited access only see and control what you gave them, in the app and in every widget, and a change applies within a second. Removing someone signs them out of every device right away. When access ends, one clear screen says so, with "Sign in again" and "Sign out".
- People who cannot edit dashboards no longer see the edit and add-widget controls, and the server refuses edits from them. People limited to some dashboards only see those.
- Only admins can change the household theme, background, general settings, the Home Assistant address, remote access, pair devices, approve device codes, and install or remove widgets. Pictures follow the dashboard rule: people who can edit dashboards can add and delete them.
- Your Home Assistant login token now stays on the GlassHome server. The app, every widget, and every signed-in device reach Home Assistant only through GlassHome, so nothing in the browser ever holds the key.
- If GlassHome loses its link to Home Assistant (for example after a password reset there), admins see a banner with a one-tap "Sign in to Home Assistant" button; everyone else is told to ask someone who manages the home.
- People with limited access cannot use energy dashboards or edit entity settings yet; full members and admins are unaffected.

### Improvements

- Panels that open over the dashboard, like widget settings, adding a person, or pairing a screen, now scroll inside themselves. On a wall tablet a long form no longer pushes its buttons off the bottom of the screen, and the close button is easier to hit.
- In Settings, a group's label now sits right above its own rows instead of floating under the card title.

### Security

- Someone guessing a password or an invite link can no longer dodge the sign-in limit by faking their address.

### Fixes

- Turning on automatic widget updates, or approving a widget's new permissions, now takes effect straight away. It used to sit and wait for the next scheduled check, up to six hours later.
- Your dashboard now loads at full speed when your home has no internet. It used to sit on "Updating widgets" and then show an empty screen for up to half a minute before your widgets appeared, even though every widget was already on your box.
- When a widget update fails, the message now names the widget and says why, instead of just counting a failure.

## 1.2.0

Everything from the 1.2.0 beta, rolled up for the stable channel. Since 1.1.3:

### New Features

- Settings has a new Media section: how much room your pictures take, a row of the ones you added most recently, and an Upload button. "Browse library" opens the full collection a page at a time, where you can see any picture full size and delete the ones no widget is using. Household admins can also raise or lower how much can be stored.
- A new Picture Frame widget shows your own photos on a dashboard, one at a time or as a slideshow that fades from one to the next.

### Improvements

- Very large background photos are now turned away instead of being opened. A wallpaper over roughly 40 megapixels, a long panorama or a big scan, could eat enough memory to slow your home down or take the dashboard offline while it loaded. If yours is refused, scale it down in any photo app and upload it again.

## 1.1.3

### Changes

- Widget SDK bumped to 1.11.0.

## 1.1.2

### Bug Fixes

- Widgets no longer reload from scratch when you come back to the dashboard tab or after you place, remove, or edit another widget. Open sections and scroll positions stay where you left them, and to-do widgets stop flashing a "Widget unmounted" error while their list refreshes.

## 1.1.1

### Bug Fixes

- Fixed build flag handling; the dashboard loads a little lighter.

## 1.1.0

Everything from the 1.1.0 betas, rolled up for the stable channel. Since 1.0.0:

### New Features

- Widgets can live on some screen sizes and not others: your phone dashboard can stay short while your desktop stays full.
- The widget browser shows a picture of each widget before you install it, in light and dark.
- Setup and Settings draw how your home connects (your browser, GlassHome, Home Assistant) and mark the link that is failing.
- Widgets can show your Home Assistant calendars and to-do lists, within the permissions you granted.

### Improvements

- Widgets respect the smallest and largest sizes their author set.
- Rearranging a dashboard saves gesture by gesture, and two people can rearrange the same dashboard at once without overwriting each other.
- Setup names the connection that failed, warns when a Home Assistant address won't work from outside your home, and if your device can't open Home Assistant's sign-in page within a few seconds it brings you back and suggests the IP address.
- Settings and notifications read more calmly: quieter badges, names and roles on one line, short titles with the detail underneath.
- Reduced-transparency mode and the Midnight Glass theme look right inside widgets.

### Security

- A widget can only reach the devices you approved when you installed it. No catalog widget misused this and your Home Assistant password was never exposed, but a widget you installed could have controlled more than you allowed.
- A website you visit can no longer reach your dashboard on your behalf, and adding a widget from a typed address can no longer make your GlassHome server fetch from your own network.
- Remote-access tokens are no longer sent to the browser.

### Bug Fixes

- A widget whose settings could not be upgraded keeps them instead of falling back to defaults.
- Updating all widgets at once asks for permission when one of them wants new access.
- Sensor history charts keep drawing when a second widget shows the same sensor.
- The custom theme colour picker shows the right swatch for strongly coloured shades.
- Going back during setup no longer lands on a blank step; help links open the right page.

## 1.0.0

GlassHome v1. Everything since 0.10.0:

### New Features

- A short, personal welcome note the first time you open GlassHome.
- Add a phone or tablet by scanning a QR code, with no tokens to copy. Devices without a camera can enter a 6-digit code on an on-screen numpad instead, and you see clear progress while it connects.
- Settings now tells you when a newer version of GlassHome is available, showing the version you're on and the one to update to.
- Widgets can use icons from any icon set, not just a small built-in selection. Icons are cached on your box after first use, so they keep working offline, and they no longer flicker or shift while you scroll.
- Turn off every light or lock every door straight from the dashboard header: the lights and lock chips are now buttons.

### Improvements

- The dashboard's frosted-glass blur is faster and lighter, especially with many widgets on screen. A new Blur setting lets you choose: Performant (the new default, the same look at a fraction of the cost), Dynamic (real-time and most accurate, heaviest on the device), or None (solid surfaces, the lightest option).
- Remote access lives in one place: a single card for the managed GlassHome tunnel and your own addresses (a home reverse proxy, a VPN, or your own tunnel). A reverse proxy at home is free; a public address needs Pro.
- The mobile app now works away from home, reaching Home Assistant securely through your dashboard server. Album art and camera images load over remote access too, not just on your home network.
- No more dead ends when you're away: if Home Assistant can't be reached, that option is clearly marked unavailable with what to do instead, rather than a browser error page.
- A redesigned sign-in screen with clear, colour-coded options, the best one for your situation highlighted, your home's name shown, and your Home Assistant address filled in for you.
- Browsing and adding widgets share one cleaner card layout, with a tidy search-and-filter bar and a side-by-side view of the widget you're inspecting.
- The Area widget was redesigned as a clean column of tiles, making each light, switch, and sensor easier to see and tap.
- Installing a community widget shows one clear permission dialog instead of two, listing exactly what it wants access to, with a "How widgets are kept safe" explainer.
- Pro now covers your whole home: when one member has Pro, every member, kiosk, and family phone gets Pro too, and it keeps working for two weeks if your home goes offline.
- Settings shows you and your home together in a single household card, and the Devices screen groups connected devices by person and clears out stale sessions.
- Widgets download as smaller, faster bundles and update automatically after you upgrade.
- Badges and buttons across Settings got a visual refresh: frosted status chips, polished gradient Pro and Early Bird badges, and pill-shaped buttons. Dropdown menus have a consistent size and no longer waste space on mobile.
- The dashboard header temperature matches the unit you set in Home Assistant, switching between °C and °F with it.

### Security

- Community widgets ask permission before touching your home and can only do what you approve; if a widget ever tries to do more, the attempt is blocked and you get a notification. Each widget runs in its own isolated space, can't interfere with the rest of your dashboard, and can never send your home's data anywhere except your Home Assistant and GlassHome. Widgets never see your Home Assistant login, and your Home Assistant token is no longer handed to the browser. A help page explains, in plain language, what widgets can and cannot do: glasshome.app/docs/widget-security.

### Fixes

- Signing in with your GlassHome account reliably lands you on your home and your dashboards, instead of an empty page or a duplicate "Home". Connecting your account from Settings fixes accounts stuck on earlier versions and cleans up the duplicate profile automatically. Failed sign-ins now show a clear message instead of a silent dead end.
- Home Assistant admins are admins in GlassHome too, so you can manage your home's members; your role updates on your next sign-in. Every home always has a dashboard, restored on next sign-in if yours was missing.
- Sign-in works behind a reverse proxy that terminates HTTPS, and Home Assistant error messages show the real text instead of "[object Object]".
- Notification banners show the correct colours in light mode and under custom themes.
- Performant Blur (the default) now works on iPhone, iPad, and Mac. Changing your background updates the frosted glass instantly, and the frosted look is identical in every blur mode.
- Widgets size correctly across more tile shapes, no longer look too small right after the opening animation, and "ghost" tiles no longer linger in empty slots.
- Reduce Blur and Reduce Motion now apply inside widgets too, and in dark mode widgets follow your custom theme's colours and corner roundness.
- A widget that fails to auto-update quietly retries once before showing an error, and widgets no longer freeze when switching between dashboards.
- The interactive demo loads with every widget fully styled, and each visitor gets their own private demo that tidies itself up afterward.
- The Home Assistant logo was updated to its current mark, and the icon next to a page's title is properly centred.

## 0.10.0

Highlights since 0.9.6:

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

## 0.9.6

### Improvements

- Widget colors are more vibrant, especially at low opacity and in dark mode. Icons stay readable against their tinted backgrounds.
- Climate widget mode colors (heat, cool, auto, off) render distinctly in both light and dark themes instead of washing out.

### Bug Fixes

- Widgets that need a newer dashboard than yours no longer get auto-installed and broken. Auto-update now skips incompatible versions and tells you why.
- Climate widget no longer crashes when debug info is open.
- Widget tiles render correctly on existing dashboards after updating.
- Updating to a new dashboard release no longer leaves older bundled code lingering in your browser's cache. Updates take effect on first reload.

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

## 0.8.2

### Bug Fixes

- Fix authentication failing when accessing the dashboard via local network IPs outside the 192.168.x range (e.g. 10.x.x.x, 172.x.x.x)

## 0.8.1

### Bug Fixes

- Fix authentication for local network access with dynamic host resolution

## 0.8.0

### Features

- New setup wizard: single-screen flow replaces 5-step wizard
- Upgraded to Vite 8 (Rolldown bundler) for faster builds
- Instance-wide widget installs (no longer per-user)
- Simplified demo mode

### Bug Fixes

- Fix database migration issues with SQLite statement breakpoints
- Fix HA connection lost after update
- Fix widget install/uninstall errors
- Fix widgets failing to load in production
- Fix setup redirect loop for anonymous users
- Fix device pairing with signed session cookies

## 0.7.0

### Features

- Add custom background images per dashboard with upload and blur/effects options
- Add delete button to remove widgets from any widget type
- Add configurable metrics in area cards (e.g. battery levels, entity counts)
- Add FPS, memory, and network monitoring plus stress test controls in the debug panel
- Simplify widget config by removing size and layout fields
- Update demo dashboard with new widget examples

### Improvements

- Use popover for background selection instead of inline dropdown
- Improve area card gradients and icon display

### Bug Fixes

- Fix orphaned references when deleting custom background images
- Fix extra separator above background effects section
- Fix area widget showing wrong values for numeric metrics (e.g. battery percentages)
- Fix light widget classic-glass variant not applying blur correctly
- Fix errors when toggling light groups with missing or unavailable entities
- Fix slide gestures on mobile locking to single axis to avoid scroll conflicts
- Fix area cards not navigating to the correct dashboard when tapped

## 0.6.0

### Features

- Add theme customization with presets, color editing, and auto-save functionality
- Add animated background support with new themes and a geometric houses animation
- Add widget configuration versioning and migration system for safer upgrades
- Enhance clock widget with preset themes, date display, auto layout, and visual glow effects
- Add card layout and display options to the batteries widget
- Add skip controls (next/previous) to media player widget in small layout
- Add safe config loading with validation helpers and fallback defaults

### Improvements

- Migrate all widgets to a new unified widget framework (Light, Clock, Batteries, Switch, Binary Sensor, Media Player, Weather, Camera)
- Introduce aggregation presets and entity state utilities for cleaner widget code
- Implement shared state colors theming system across all widgets
- Enhance config schemas with proper fallbacks for missing or invalid values
- Remove primaryEntity anti-pattern from all widgets for better consistency
- Standardize widget configurations and improve code organization

### Bug Fixes

- Fix session/login bugs including OAuth callback parameter cleanup and disconnect before reconnect behavior
- Fix Next.js server binding to 0.0.0.0 for VM compatibility
- Fix clock widget creation dialog with proper V2 fields
- Fix TypeScript build errors and Zod v4 compatibility issues
- Fix widget gradient and glow format issues in button and switch widgets

## 0.5.0

### Features

- Add lock widget for controlling Home Assistant lock entities       
- Enhance demo mode functionality with improved widget support       

### Improvements

- Migrate the underlying framework for better stability in the long run
- Improve performance overall by reducing rerenders and using React Compiler for better memoization
- Add a performance testing suite
- Implement session validation for improved dashboard redirection    
- Refactor application structure for better maintainability

### Bug Fixes

- Fix build and Docker image configuration
- Fix a bug where the baterry widget would cause too many rerenders and bad performance

## 0.4.4

### Bug Fixes
- Fix a bug where the delete and edit buttons in widgets do not appear if entity is deleted from HA

## 0.4.3

### Bug Fixes
- Fix the issue where the app does not load at all on startup (for real for real this time)

## 0.4.2

### Bug Fixes
- Fix the issue where the app does not load at all on startup (for real this time)

## 0.4.1

### Bug Fixes
- Fix the issue where the app does not load at all on startup

## 0.4.0

### Features

- Add media player widget with play, pause, next, previous, volume control, and source selection
- Add cover widget for controlling Home Assistant cover entities with position adjustments
- Add clock widget with configuration options
- Add demo mode functionality for testing without real Home Assistant connections
- Implement simplified session management architecture
- Enhance dock management with drag-and-drop reordering and dynamic item visibility
- Add support for dock links to external URLs alongside dashboards

### Bug Fixes

- Refactor area widget dialogs to use consistent entity ID retrieval
- Remove deprecated configuration files and migrate to unified configuration structure

## 0.3.2

### Bug Fixes
- Fix a bug where no entities were being detected in the area widget dialogs, preventing creation or editing 

## 0.3.1

### Bug Fixes
- Fix a bug where the entity picker doesn't display any entities when creating or editing a widget

## 0.3.0

### Features
- Build and integrate @glasshome/sync-layer, a new library to interface and sync with Home Assistant
- Add a debug dialog to peak into the sync-layer and HA communication (enabled in the settings)
- Add a Home Assistant button that let's you jump to HA (enabled in the settings)
- Add the button widget
- Add the switch widget 

### Bug Fixes
- Rewrite of the camera widget and improve its stability
- Add more debugging information to the camera 
- Add a full test suite for early bug detection

## 0.2.0

### Features
- Add ability to configure Home Assistant URL
- Add ability to click area cards and navigate to their dashboard with sleek animations
- Add ability to click on camera widget and see the full feed

### Bug Fixes
- Fix camera feed freezing or disappearing
- Fix editing widget entities crashing the dashboard
- Fix debug information dialog tabs overflowing
- Fix battery widget config not being applied
- Fix icons in navigation dock and area widgets to use HA-defined icons

## 0.1.1

- Support processors older than 2013

## 0.1.0

- Initial release
- Support for amd64 and aarch64 architectures
- Direct port access (port 3123)
- HaKit authentication
- Drag-and-drop dashboard builder
- Multiple widget types
