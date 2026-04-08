# Changelog

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
