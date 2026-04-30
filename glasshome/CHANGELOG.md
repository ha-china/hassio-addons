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
