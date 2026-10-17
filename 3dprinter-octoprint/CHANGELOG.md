## 2024.11.0
  * Remove AppArmor to make it run on HA Supervised
  * Update default OctoPrint version to 1.10.3

## 2024.01.2
  * Add option to pass webcam URL to proxy.

## 2024.01.1

  * Maintenance release:
    * Update base image.
    * Update default OctoPrint version to 1.9.3.

## 2023.03.1
  * Add check that OctoPrint can install at buildtime.
  * Add missing dependency for armhf (libffi-dev)

## 2023.03.0
  * Mark 3DPrinter-OctoPrint stable
  * Set realtime flag
  * Enable AppArmor

## 2023.02.0
  * Add binaries for flashing firmware to printer (avrdude, dfu-util, dfu-programmer, stm32flash).

## 2023.01.2
  * Disable AppArmor profile.

## 2023.01.1
  * Add AppArmor profile
  * Add support for GPIO

## 2023.01.0
  * Update to OctoPrint 1.8.6.
  * Disabled Ingress.
  * Based on Debian instead of Alpine, should make more plugins compatible.
  * Default config now set by CLI instead of copying pre-set file.
  * Using Caddy as reverse proxy.
  * Added option to set trusted_proxies, should help with reverse proxy configuration.
