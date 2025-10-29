# TOMMY

## 0.12.0

### Major Changes

- Added support for ESP32 and ESP32-S2

### Minor Changes

- Show variable motion in visualization
- Show motion threshold in visualization
- Changed sensitivity wording to threshold
- Moved 'Add to Home Assistant' button to 'Actions'
- Added 'Copy' button to ESPHome YAML configuration
- Renamed 'Add device' button to 'Flash device' and moved to 'Available devices' box
- Display firmware for ESPHome devices
- Added 'Device info' popover to device list
- Added SSID of router to device info
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