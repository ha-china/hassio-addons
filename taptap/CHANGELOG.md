<!-- https://developers.home-assistant.io/docs/add-ons/presentation#keeping-a-changelog -->

## 0.2.4

- fixed persistent nodes identification storage in the HA addon data
- updated taptap to v 0.2.6 - fix infrastructure events
- updated taptap-mqtt to v0.1.4 - added configurable granular nodes and statistical entities availability 

## 0.2.3

- BREAKING CHANGE - Tigo modules serials are now used for the configuration
- updated taptap-mqtt to v0.1.3 - bugfix for KeyError – 'node_name'

## 0.2.2

- BREAKING CHANGE - Tigo modules serials are now used for the configuration
- updated taptap-mqtt to v0.1.2 - fixed state topic initialization

## 0.2.1

- BREAKING CHANGE - Tigo modules serials are now used for the configuration
- updated taptap to v0.2.5 - fix for new Tigo CCA fw 4.0.1 protocol changes
- updated taptap-mqtt to v0.1.1 - fixed initialization logic

## 0.2.0

- BREAKING CHANGE - Tigo modules serials are now used for the configuration
- updated taptap to v0.2.0 - implemented support for modules serial number detection
- updated taptap-mqtt to v0.1.0 - support modules configuration by serial numbers

## 0.1.7

- updated taptap to v0.1.2 - implemented reconnect logic
  
## 0.1.6

- updated taptap-mqtt to v0.0.9 - fix for negative timezones

## 0.1.5

- updated taptap-mqtt to v0.0.8 - republish LWT state online after paho internal reconnect

## 0.1.4

- updated taptap-mqtt to v0.0.7 - support for different timestamp format, stability fixes to hopefully prevent silent freezes

## 0.1.3

- updated taptap-mqtt to v0.0.6 - fix for average statistic sensors calculation

## 0.1.2

- updated taptap-mqtt to v0.0.5 - provides configurable logging
- added apparmor profile
- more detailed DOCS

## 0.1.1

- updated taptap-mqtt to v0.0.4 - provides data smoothing
- fixed config translation/help
- more detailed DOCS

## 0.1.0

- Initial release
