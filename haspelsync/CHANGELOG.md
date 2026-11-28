## [1.4.2-1] - 2026-11-27
- Bumped HaspelSync version to 1.4.2
  - HaspelSync changelog: https://github.com/Rdiger-36/HaspelSync/releases/tag/v1.4.2
- Bumped HA addon version to : 1.4.2-1

**Fixes**
- Fixed fresh installation startup failure ([#13](https://github.com/bytenoodle/hassioaddon/issues/13))
- Added automatic ownership correction for persistent application data
- Ensured existing installations retain their settings and printer configuration
- Run HaspelSync as the unprivileged node user

## [1.4.1-1] - 2026-11-26
- Bumped HaspelSync version to : 1.4.1
   - HaspelSync changelog: https://github.com/Rdiger-36/HaspelSync/releases/tag/v1.4.1
- Bumped HA addon version to : 1.4.1-1

**Fixes**
- Fixed Docker build permissions after HaspelSync switched to the unprivileged node user in v1.4.0.
- Updated run.sh to use the native DATA_DIR and LOG_DIR environment variables instead of symbolic links.
- Removed unnecessary chown and chmod operations.
- Fixed persistent settings and printer configuration not being loaded after updating to HaspelSync v1.4.0.
- Ensured required data and log directories are automatically created on fresh installations.

## [1.4.0-0] - 2026-11-26
- Bumped HaspelSync version to : 1.4.0
   - HaspelSync changelog: https://github.com/Rdiger-36/HaspelSync/releases/tag/v1.4.0
- Bumped HA addon version to : 1.4.0-0

## [1.3.7-0] - 2026-11-03
- Bumped HaspelSync version to : 1.3.7
   - HaspelSync changelog: https://github.com/Rdiger-36/HaspelSync/releases/tag/v1.3.7
- Bumped HA addon version to : 1.3.7-0

## [1.3.6-0] - 2026-10-26
- Bumped HaspelSync version to : 1.3.6
   - HaspelSync changelog 1.3.6: https://github.com/Rdiger-36/HaspelSync/releases/tag/v1.3.6
- Bumped HA addon version to : 1.3.6-0

## [1.3.5-0] - 2026-10-22
- Bumped HaspelSync version to : 1.3.5
   - HaspelSync changelog 1.3.5: https://github.com/Rdiger-36/HaspelSync/releases/tag/v1.3.5
- Bumped HA addon version to : 1.3.5-0

## [1.3.4-0] - 2026-10-10
- Bumped HaspelSync version to : 1.3.4
   - HaspelSync changelog 1.3.4: https://github.com/Rdiger-36/HaspelSync/releases/tag/v1.3.4
- Bumped HA addon version to : 1.3.4-0

## [1.3.3-0] - 2026-10-06
- First release of the HaspelSync App, the successor of the Bambulab AMS Spoolman FilamentStatus App.
- Based on HaspelSync v1.3.3
- Everything is configured in the HaspelSync Web UI.
- Coming from the deprecated Bambulab AMS Spoolman FilamentStatus app? Stop and uninstall it and start fresh, see the README.
