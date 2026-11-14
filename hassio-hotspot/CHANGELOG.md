# Changelog

## [1.1.7]
### Added
- Configurable DHCP lease time
- Static IP reservations based on MAC address with optional device naming
- Documentation for new DHCP features
- Create DHCP leases file and directory on startup

### Changed
- Remove hardcoded DHCP configuration values
- Calculate max leases dynamically based on DHCP range

## [1.1.6]
### Fixed
- Add switch from networkmanager to networkmanager-cli for nmcli (thanks to @dfries)

## [1.1.5]
### Fixed
- Fix missmatched interface name (thanks to @smbitech)

## [1.1.4]
### Changed
- Fix s6-overlay-suexec: fatal: can only run as pid 1 home assistant 2022.5 (thanks to @maivorbim)

## [1.1.3]
### Changed
- Add avahi daemon to enable mDNS

## [1.1.2]
### Changed
- Add option to change the network interface that is connected to the internet
- Decrease privilege levels of container for better security
- Rename the addon, since it no longer reflects the original

## [1.1.1]
### Changed
- Add possibility to show/hide the SSID

## [1.1.0]
### Changed
- Add possibility to configure the DHCP and Hostapd settings for better customization of the access point
- Fix issue with enabling/disabling internet access not working before

## [1.0.11.5]
### Changed
- Removed the external DHCP addon from this repo

### Added
- Support for Atheros based Wifi dongles
- Settings to enable/disable internet access on the hotspot
- Settings to enable/disable a DHCP server on the hotspot

## [1.0.10]
### Changed
- Removed other addons from this repo
- Removed package versions from setup, to avoid new installs problem

### Added
- Possibility of setting the access point with USB Wifi dongles.

## [1.0.4 -> 1.0.9]
### Changed
- Versions used internally only, during development

## [1.0.3] -> This fork
### Fixed
- Update apk networkmanager and sudo in Dockefile. 

## [1.0.2]
### Fixed
- Disabled NetworkManager for wlan0 to prevent the addon stop working after a few minutes. 

## [1.0.1]
### Fixed
- Gracefully Stopping Docker Containers 

### Changed
- Apply Changelog Best Practices


## [1.0.0]
- Initial version
