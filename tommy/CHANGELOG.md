# TOMMY

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