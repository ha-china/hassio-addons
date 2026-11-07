<!-- https://developers.home-assistant.io/docs/add-ons/presentation#keeping-a-changelog -->

# ![Version](https://img.shields.io/badge/dynamic/yaml?label=Version&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Fhabuild%2Fhassio-addons%2Fmain%2Fhaos-sbfspot%2Fconfig.yaml)

- bump for SBFspot V3.9.12

## ![Release][release-shield-2025-1-0]

[release-shield-2025-1-0]: https://img.shields.io/badge/version-2025.1.0-blue.svg

- bump container base to 3.21
- bump dependencies for container base 3.21
- Add warning to docs about leave sensor creation set to NO until working MQTT connection.
- bug chasing on pi5 version.

## ![Release][release-shield-2024-7-1]

[release-shield-2024-7-1]: https://img.shields.io/badge/version-2024.7.1-blue.svg

- bump dependencies for container base 3.20
- added -mqtt to archive poll due to feature request

## ![Release][release-shield-2024-5-1]

[release-shield-2024-5-1]: https://img.shields.io/badge/version-2024.5.1-blue.svg

- Bump SPBspot to latest. Which is technically 3.9.9 due to SBFspot github setup.
- https://github.com/SBFspot/SBFspot/blob/master/SBFspot/version.h
- Bump base images to 3.19
- Bump dependencies

## ![Release][release-shield-2023-7-1]

[release-shield-2023-7-1]: https://img.shields.io/badge/version-2023.7.1-blue.svg

- Added network to apparmor capabilities for DEB12 supervised installs - issue75
- Added 14 day archive to daily archive function
- bump dependencies
- fixed some defunct nano config options

## ![Release][release-shield-2023-6-1]

[release-shield-2023-6-1]: https://img.shields.io/badge/version-2023.6.1-blue.svg

- Bump container base to 3.18
- Bump dependencies

## ![Release][release-shield-2023-1-1]

[release-shield-2023-1-1]: https://img.shields.io/badge/version-2023.1.1-blue.svg

- added share to container mapping
- bump for dependencies

## ![Release][release-shield-2022-11-1]

[release-shield-2022-11-1]: https://img.shields.io/badge/version-2022.11.1-blue.svg

- added MIS support to readme
- bump for dependencies
- Shifted Bluetoothctl list command to avoid hanging devices without BT.

## ![Release][release-shield-2022-10-3]

[release-shield-2022-10-3]: https://img.shields.io/badge/version-2022.10.3-blue.svg

- bump for dependencies
- added codenotary

## ![Release][release-shield-2022-10-1]

[release-shield-2022-10-1]: https://img.shields.io/badge/version-2022.10.1-blue.svg

- minor bump for typo in ethernet configs.

## ![Release][release-shield-2022-9-2]

[release-shield-2022-9-2]: https://img.shields.io/badge/version-2022.9.2-blue.svg

- additional sensors - 2022.9.2
- BREAKING CHANGES - any version below 2022.9.1
- see 2022.9.1 changelog

## ![Release][release-shield-2022-9-1]

[release-shield-2022-9-1]: https://img.shields.io/badge/version-2022.9.1-blue.svg

- Bump to SBFspot 3.9.6
- BREAKING CHANGES
- Major overhaul of options
- Most options have defaults set that will be used when options left blank
- Secrets template provided in the readme!

<br></br>

- MQTT user and pass have moved locations in options
- MQTT Publisher args option has been disabled
- AUTOGEN SENSORS
- List of upto 39 sensors available
- New Option create or purge sensors (defaults to No)
- Some Sensors start disabled in the MQTT integration
- (They can be enabled in the MQTT integration)
- Disabled sensors are not automatically deleted by the MQTT integration (Purge will get them)
- Sensors can now be created and purged via the Addon and HA MQTT integration
- Backup and disable/remove existing yaml sensors to avoid naming conflicts
- MQTT_Data list can be used to create desired Sensors.
- custom timestamp can be set for InvTime SunRise and SunSet
- Timestamp sensor can not use custom timestamp
- (can be changed by value_template in a lovelace card)
- Logging to \*.txt file is being removed from SBFspot 3.9.6 onwards
- option for logging dir removed to accommodate this change

<br></br>

- Cleaned up readme...
- updated translations to reflect options changes
- bump curl dev dependancy

## ![Release][release-shield-2022-8-4]

[release-shield-2022-8-4]: https://img.shields.io/badge/version-2022.8.4-blue.svg

- Created translations to give more detail to UI options.
- MQTT_Enable option has been removed.
- It has to be manually removed via yaml options to stop supervisor log warning about it.

## ![Release][release-shield-2022-8-3]

[release-shield-2022-8-3]: https://img.shields.io/badge/version-2022.8.3-blue.svg

- WARNING - Copy your config prior to update.
- line 1 config needs - Connection_Type: Bluetooth
- Line 5 config needs - IP_Address: "0.0.0.0"
- Config Options change for Ethernet connection.
- (Ethernet Untested as of 13/08/2022)
- Cleaned up backend scripts.
- Split BT and Ethernet config.

## ![Release][release-shield-2022-8-2]

[release-shield-2022-8-2]: https://img.shields.io/badge/version-2022.8.2-blue.svg

- Added Local BT address config.

## ![Release][release-shield-2022-8-1]

[release-shield-2022-8-1]: https://img.shields.io/badge/version-2022.8.1-blue.svg

- tweaked the logging
- Added **Bluetoothctl list** to log
- Green

## ![Release][release-shield-2022-7-5]

[release-shield-2022-7-5]: https://img.shields.io/badge/version-2022.7.5-blue.svg

- Added LocalBTAddress to config
- SBFspot version 3.9.5 was released.
- Major changes for s6-Overlay v3 changes
- Added apparmor config
- Some other background tweaks.
- updated base containers to 3.16

## ![Release][release-shield-2022-3-5]

[release-shield-2022-3-5]: https://img.shields.io/badge/version-2022.3.5-blue.svg

- Add cronjob to update sensors if restart occurs.
- SBFspot version 3.9.4 was released.

## ![Release][release-shield-2022-3-4]

[release-shield-2022-3-4]: https://img.shields.io/badge/version-2022.3.4-blue.svg

- Better log handling for latest file.
- Set removal of old logs at 3 days.

## ![Release][release-shield-2022-3-3]

[release-shield-2022-3-3]: https://img.shields.io/badge/version-2022.3.3-blue.svg

- Upload logging moved to HA logging window.
- needs default /data/sbfspot/log directory.
- SBFspot version 3.9.3

## ![Release][release-shield-2022-3-2]

[release-shield-2022-3-2]: https://img.shields.io/badge/version-2022.3.2-blue.svg

- bug chasing
- SBFspot version 3.9.3

## ![Release][release-shield]

[release-shield]: https://img.shields.io/badge/version-2022.3.1-blue.svg

- SBFspot version 3.9.3
- Initial release
- Rebuilt to multi stage docker containter.
- This saves ~450MB on the final image.
- Is using base HA alpine container and s6 Overlay, so should be fully compatible with HAOS.
- Doesn't require complicated USER setups.

- I'm no programmer, so apologies if I break something along the way
