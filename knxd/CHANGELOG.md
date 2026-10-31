# Changelog

## 0.6.1

- fixed validation of the add-on configuration to not require a defined `device` option for certain interface types (IP based interfaces as well as USB)

## 0.6.0

- updated KNXD to version 0.14.72
- bumped docker base image to 3.21
- added option to provide a custom `ini` file in the `addon_configs` directory

## 0.5.2

- updated the definition of the default value for the "device" config option so that the visual editor will also render this option as optional. 
- bumped KNXD to version 0.14.66

## 0.5.1

- added support for the `ipt` interface

## 0.5.0

- bumped docker base image to 3.20
- adjusted architecture to work with new s6overlay
- updated KNXD to version 0.14.63 which should fix some issues with programming devices using ETS6

## 0.4.7

- bumped docker base image to 3.16 again

## 0.4.6

- downgraded docker base image to 3.14 until issues are resolved

## 0.4.5

- updated KNXD to version 0.14.56
- updated docker base image to Alpine 3.16

## 0.4.4

- added new experimental interfaces for `tpuart-ip` and `ncn5120-ip`

## 0.4.3

- update addon based on home assistant template structure
- removed "hassio_role": "admin"
- bumped KNXD to 0.14.53
- bumped base images to 3.14
- add validators for `address` and `client_address`:
- add english descriptions for all parameters

## 0.4.2

- fixed line breaks not being preserved in the resulting config file when using a `custom_config`

## 0.4.1

- correctly map USB hardware device paths to the expected integer values in knxd configuration

## 0.4

- using new approach on how the KNXD config is generated
- added device selector to the add-on configuration options
- added possibility to configure the error log level to be able to debug issues more easily
- switched add-on base image back to Alpine 3.12 since the new 3.13 seems to have severe issues with USB interfaces

## 0.3.7

- switched to new hass-io base containers based on GitHub Docker Repository
- removed run.sh and replaced it with according s6-overlay scripts

## 0.3.6

- bumped knxd version to 0.14.39 which fixes some delays with pace filters

## 0.3.5

- bumped knxd version to 0.14.37 which fixes a memory leak in the FT12 driver
- add-on now uses the hosts network which enables multicast support. Thanks to stemnic for noticing the issue and fixing it.

## 0.3.4

- bumped knxd version to 0.14.34
