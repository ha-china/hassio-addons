# TOMMY

## 2.5.0

### Major Changes
- Enabled enhanced detection (and presence sensing) on Community Edition
- Enabled Home Assistant Integration on Community Edition
- Increased allowed devices on Community Edition from 3 to 4

## 2.4.2

### Minor Changes
- Minor UI improvements

## 2.4.1

### Minor Changes
- Improved WebSocket performance between the server and dashboard
- Fixed a bug that caused the WebSocket send buffer to grow unbounded during reconnection
- Minor UI improvements
- Added a welcome message

## 2.4.0

### Major Changes
- Switched to serial provisioning instead of Wi-Fi provisioning when using the TOMMY Flasher, enabling much faster device flashing

### Minor Changes
- Added optional max TX power input during device provisioning (dBm, 2–20, rounds to nearest 0.25 dBm)

## 2.3.0

### Major Changes
- Reverted ESP-IDF from 5.5.2 to 5.5.1. Version 5.5.2 introduced a memory leak in the WiFi TX buffer, causing intermittent connection issues

> **ESPHome Users:** If you are using the ESPHome integration, please update the `framework` version in your ESPHome configuration from `5.5.2` to `5.5.1`. Please clean the ESPHome build cache first. Refer to the [ESPHome integration docs](https://www.tommysense.com/docs/flashing-devices/esphome) for the updated configuration.

## 2.2.6

### Minor Changes
- Improved false positives filtering
- Fixed a bug causing high motion level when a disabled pair was re-enabled

## 2.2.5

### Minor Changes
- Show TOMMY version on ESP32 boot
- Switched WiFi scan to all channels

## 2.2.4

### Minor Changes
- Fixed socket error in Matter Occupancy Sensor

## 2.2.3

### Minor Changes
- Improved error handling in Matter Occupancy Sensor

## 2.2.2

### Minor Changes
- Fixed a bug causing the zone selector to be hidden when no zones were added

## 2.2.1

### Minor Changes
- Improved false positive filtering
- Switched to fast scan for WiFi connections

## 2.2.0

### Major Changes
- Improvements to false positive filtering for ESP32-C3. It should now be possible to lower the motion threshold.

### Minor Changes
- Improved out of memory handling
 
## 2.1.0

### Major Changes
- Performance and stability improvements

## 2.0.2

### Minor Changes
- Minor improvements to motion detection for ESP32 and ESP32-C3

## 2.0.1

### Minor Changes
- Fixed missing version number in dashboard

## 2.0.0

### Major Changes
- Added status indicator for stationary presence detection capabilities (see [requirements](https://www.tommysense.com/docs/detection-mode))
- Improved motion detection
- TOMMY version now appears in the dashboard with a button to check for updates; a warning is shown if devices are not on the same version as the server
- **Breaking change:** It is necessary to flash devices (both TOMMY flasher and ESPHome) again. Please follow the installation instructions carefully, as some parameters have changed. Sorry for the inconvenience.

### Minor Changes
- Fixed connectivity issues with some devices
- Fixed an issue where Matter was broadcasting mDNS on all interfaces, causing high CPU usage
- Decreased max TX power on ESP32-C3 to 8.5 dBm to increase connection stability when using the TOMMY flasher. For ESPHome, TX power can be set in the ESPHome config.
- Reduced memory usage on ESP32s
- Removed the OTA checker loop. OTA is now requested from the server if a version mismatch is detected
- Improved configuration fetching, leading to reduced memory usage

## 1.5.4

### Minor Changes
- Fixed a bug where larger configurations resulted in an error on the ESP32
- Removed the OTA loop and replaced it with a single OTA at TOMMY server startup
- **ESPHome users: Please update your devices with the latest TOMMY firmware**

## 1.5.3

### Minor Changes
- Fixed a bug causing some devices to enter bootloop if BSSID was not set

## 1.5.2

### Minor Changes
- Fixed a bug which could cause a crash when sending a heartbeat from ESP32s
- Updated documentation regarding usage of BSSID when flashing through ESPHome
- **ESPHome users: Please update your devices with the latest TOMMY firmware**

## 1.5.1

### Minor Changes
- Increased timeout before disabling a node

## 1.5.0

### Major Changes
- Added ability to enter BSSID during provisioning to pin devices in a zone to the same access point. This is required for mesh networks. Please refer to the [information about mesh networks](https://tommysense.com/docs/system-requirements) in system requirements.
- **ESPHome users: Please update your devices with the latest TOMMY firmware**

### Minor Changes
- Now shows a warning if multiple access points are detected in a zone
- Fixed bug where a disconnected device during initialization would cause the rest of the devices to halt packet processing
- Updated the documentation with information about how to use HACS to install the Home Assistant integration

## 1.4.1

### Minor Changes
- Fixed a bug causing Wi-Fi connection issues with C6 devices
- **ESPHome users: Please update your devices with the latest TOMMY firmware**

## 1.4.0

### Major Changes
- Updated the firmware to use ESP-IDF 5.5.2 to match ESPHome version 2026.1.0.
- **ESPHome users: It is now required to use the latest ESPHome version 2026.1.0**
- **ESPHome users: Please update your devices with the latest TOMMY firmware**

### Minor Changes
- Fixed a bug introduced in 1.3.0 causing Wi-Fi connection issues with C6 devices

## 1.3.0

### Major Changes
- Added Custom Boundary Mode. This gives you fine-grained control over how different links contribute to the final motion prediction. Great for environments prone to false positives.
- Removed the option to do manual discovery through the dashboard. This will free up a substantial amount of memory during the startup phase. Please refer to the documentation for other methods of manual discovery.
- Improved memory usage for ESPHome, which may allow some devices to run the BLE stack (e.g., Bluetooth proxy) alongside TOMMY even without PSRAM
- **ESPHome users: Please update your devices with the latest TOMMY firmware**

### Minor Changes
- Fixed a bug causing hold time to not be applied for Matter integrations
- Fixed a bug causing ESPHome devices to keep restarting if the TOMMY server isn't running during boot
- Channel information per device is now shown in the dashboard
- A warning is shown if all devices aren't on the same channel

## 1.2.1

### Minor Changes
- Fixed a bug causing ESPHome devices to enter bootloop or send wrong relay data
- Fixed a bug causing ESPHome devices to report IP: 0.0.0.0 in the dashboard
- **ESPHome users: Please update your devices with the latest TOMMY firmware**

## 1.2.0

### Major Changes
- Improved motion detection algorithm (both basic and enhanced mode)
- Allowed High Performance mode for other devices than ESP32-C5
- **ESPHome users: Please update your devices with the latest TOMMY firmware**

### Minor Changes
- Improved explanations of the different performance modes
- Removed experimental "False positive filtering" as it's redundant after the latest improvements to the algorithm

## 1.1.0

### Major Changes
- Added Enhanced detection mode alongside the existing Basic detection mode. Enhanced mode is a state-of-the-art detection mode that can capture micro-movements and breathing with optimal device placement. This mode is being developed with the goal of evolving into full stationary presence detection. Enhanced mode is only supported on ESP32-C3, ESP32-C5, ESP32-C6, and ESP32-S3 devices and requires a Pro Edition license.

### Minor Changes

- Added automatic connection recovery to the online licensing system, eliminating the need for restarting after a temporary network interruption

## 1.0.5

### Minor Changes

- Fix MQTT reconnection issue

## 1.0.4

### Minor Changes

- Performance improvements to Raw Signal Visualizer

## 1.0.3

### Minor Changes

- Minor UI improvements

## 1.0.2

### Minor Changes

- Memory optimizations
- Added Bluetooth Proxy compatibility warning to ESPHome documentation and flasher dialog, including PSRAM recommendations for memory-constrained setups

## 1.0.1

### Minor Changes

- Removed 'Tips' button and replaced with 'Device Placement Guide' in header

## 1.0.0

### Major Changes
- Home Assistant Integration. A button is now added to the dashboard with information on how to install the integration. It automatically keeps TOMMY zones in sync with Home Assistant and exposes a device for each zone with a motion sensor entity. This feature is exclusive to the Pro Edition. The Matter integration is still available for users of the Community Edition.

### Minor Changes

- Added more information to the license error message
- Fixed a bug where the logs for an ESP32 would be flooded with "PACKET_SENDER: Failed to send packet: ESP_ERR_ESPNOW_NOT_FOUND" when a sensor wasn't added to a zone yet.

## 0.26.0

### Major Changes
- Added a balanced boundary mode, which is now default for new zones

## 0.25.2

### Minor Changes

- Improvements to detection algorithm

## 0.25.1

### Minor Changes

- Fixed mismatched glibc crash
- Included hold time in total motion statistics

## 0.25.0

### Major Changes
- Internal preparations for native Home Assistant Integration

## 0.24.3

### Minor Changes

- Minor UI fixes

## 0.24.2

### Minor Changes

- Minor UI fixes

## 0.24.1

### Minor Changes

- Fixed missing default for hold time, which could cause crashes

## 0.24.0

### Major Changes
- Added hold time support
- Added option for online license activation
- BREAKING CHANGE: Offline license activation is no longer supported for Docker installations. After careful consideration, we have determined that the license server solution has become too complex to maintain and support. If you were using the license server, you can remove it using `sudo dpkg -r tommy-license-server`. Docker installation users can switch to online activation, or use the Home Assistant Add-on for offline activation. If neither option works for your setup, we recommend staying on version 0.23.0. We apologize for any inconvenience this may cause.

## 0.23.0

### Major Changes
- Improvements to motion detection algorithm

### Minor Changes

- Minor UI changes

## 0.22.3

### Minor Changes

- Minor UI improvements

## 0.22.2

### Minor Changes

- Minor UI improvements

## 0.22.1

### Minor Changes

- Minor UI improvements

## 0.22.0

### Major Changes

- Added higher fidelity in High Performance mode

### Minor Changes

- Improvements to false positives filtering

## 0.21.1

### Minor Changes

- Allow toggling new false positive filter
- Fixed issues with machine ID overflowing screen
- Fixed issue with motion being detection at threshold instead of above

## 0.21.0

### Major Changes

- Improved motion detection when entering zone
- Improved motion detection for fast twitch movements
- Improved filtering of false positives
- Improved packet processing
- Implemented redundancy that allows other sensors to continue detecting motion when one is offline. A minimum of 2 active devices is still required.

### Minor Changes

- Added info text to visualizations in dashboard regarding choppiness being normal

## 0.20.8

### Minor Changes

- Fixed a problem with sensor fusion that could cause degraded motion detection under some specific network conditions

## 0.20.7

### Minor Changes

- Update to internal credentials manager

## 0.20.6

### Minor Changes

- Update to internal credentials manager

## 0.20.5

### Minor Changes

- Moved credentials to root configuration

## 0.20.4

### Minor Changes

- Fixed credentials input

## 0.20.3

### Minor Changes

- Changed default dashboard port to 8089
- Changed default MQTT port to 1886
- Added configuration options for license

## 0.20.2

### Minor Changes

- Performance improvements to visualizations in the dashboard
- Minor UI changes

## 0.20.1

### Minor Changes

- Fixed warning about Wi-Fi 6 in 'Performance Mode'

## 0.20.0

### Major Changes

- Added Boundary Mode

### Minor Changes

- UI changes

## 0.19.2

### Minor Changes

- Improved algorithm for 'High Performance' mode

## 0.19.1

### Minor Changes

- Scale raw signal

## 0.19.0

### Major Changes

- Added performance modes
- Improvements to detection algorithm

### Minor Changes

- Show status when OTA is in progress
- Performance improvements
  
## 0.18.0

### Major Changes

- Send log output to JTAG when UART is not in use (only applicable for devices flashed with TOMMY flasher)

## 0.17.0

### Major Changes

- Use prebuilt images in Home Assistant Add-on for faster installation
- Use Node 24 for virtual bridge

### Minor Changes

- Simplified raw signal analyzer

## 0.16.0

### Major Changes

- Option to manually enter instance details as a fallback for when mDNS fails, both during Wi-Fi provisioning and as parameters in ESPHome YAML configuration
- Added 'Amplify Sensing' feature, which amplifies sensing especially in non-line-of-sight scenarios. This can lead to a higher false positive rate

## 0.15.0

### Major Changes

- Resolved a critical bug that prevented Matter devices from being paired after a 15-minute timeout period
- Matter devices now automatically use the assigned zone name as their device identifier

## 0.14.2

### Minor Changes

- Fixed stack overflow in OTA process on ESP32-S3

## 0.14.1

### Minor Changes

- Fixed bug where devices are duplicated across zone devices and available devices.

## 0.14.0

### Minor Changes

- Minor UI changes

## 0.13.0

### Major Changes

- Added manual discovery for cases where mDNS fails

### Minor Changes

- Fixed bug which caused panic in heartbeat parsing
- Fixed YAML config visual overflow in ESPHome parser
- Minor UI changes

## 0.12.0

### Major Changes

- Added support for ESP32 and ESP32-S2
- Show variable motion in visualization
- Show motion threshold in visualization

### Minor Changes

- Changed sensitivity wording to threshold
- Moved 'Add to Home Assistant' button to 'Actions'
- Renamed 'Add device' button to 'Flash device' and moved to 'Available devices' box
- Added 'Copy' button to ESPHome YAML configuration
- Added 'Device info' popover to device list
- Added SSID of router to device info
- Added firmware info for ESPHome devices
- Added white border around Matter QR code
  
## 0.11.2

### Minor Changes

- Removed error logging for devices in zones with no other devices
- Added default refresh interval to ESPHome YAML configurations

## 0.11.1

### Minor Changes

- Improved webserial error in sensor debugger

## 0.11.0

### Major Changes

- Algorithm improvements to lower false positives outside the zone perimeter

## 0.10.6

### Minor Changes

- Added default to ingress path

## 0.10.5

### Minor Changes

- ESPHome as compile flag instead of runtime variable

## 0.10.4

### Minor Changes

- Allow incoming ws request on ingress path

## 0.10.3

### Minor Changes

- Fix ingress path in ws

## 0.10.2

### Minor Changes

- Add ingress path to ws path

## 0.10.1

### Minor Changes

- Added trailing slash to websocket uri

## 0.10.0

### Major Changes

- Move websocket server to dashboard to avoid mixed content errors on instances running behind DNS.

### Minor Changes

- Lowered log level in Caddy from INFO to WARN

## 0.9.3

### Minor Changes

- Wait for flasher to be ready before allowing click on 'connect button'

## 0.9.2

### Minor Changes

- Added path prefix to flash image fetching in ingress

## 0.9.1

### Minor Changes

- Added path prefix to configuration fetching in ingress

## 0.9.0

### Major Changes

- Switched to Wi-Fi provisioning as a prerequisite to support more devices with different UART/USB configurations
- Experimental support for ESP32-C3

### Minor Changes

- Fetch configuration from Router Handler instead of direct HTTP request to file server
- Show loading screen when fetching configuration
- Show loading screen when connecting to websocket server
- Added changelog