# Changelog

## 2.1
- The device list is now stored on disk, so a restart or an app update shows your devices immediately instead of re-fetching them from Tuya.
- The stored list is encrypted. It contains every local key in your account, so it is written with a key kept beside it and readable only by the app. Logging out deletes both, which also makes any copy of the file that survives elsewhere permanently unreadable.
- Every refresh is now compared against the previous list. Devices added, removed, and renamed are summarised above the table, and so are local keys that changed. Changed rows are badged, and the filter matches the badge text.
- When Tuya cannot be reached, or your login has expired, the saved device list is now shown as a labelled snapshot instead of an error or the login screen. Local keys do not expire with the login, so those keys are still good. Logging out still clears everything.
- Added a `DEVICE_CACHE` setting. Set it to `off` to keep the device list in memory only, as in 2.0.
- The device list is now cached for 3 days instead of 24 hours. Click Refresh at any time to pull the current list from Tuya.
- **Full Changelog**: https://github.com/vineetchoudhary/tuya-local-key/compare/v2.0...v2.1

## 2.0
- Added a device details panel. Select a device row to see every field the device-sharing SDK returns: identity, connectivity, account ids, timestamps, every data point with its local dp id and current value, and the raw JSON record.
- Timestamps in the web UI now use your browser's timezone. The details panel also shows the UTC reading and the raw epoch. CSV export stay in UTC.
- Moved UUID, category, IP address, and last-paired time out of the device table into the details panel.
- Update `tuya-device-sharing-sdk`.
- **Full Changelog**: https://github.com/vineetchoudhary/tuya-local-key/compare/v1.7...v2.0

## 1.7
- `AUTH_USERNAME` and `AUTH_PASSWORD` only apply to the direct port access. These are ignored under Home Assistant ingress.
- **Full Changelog**: https://github.com/vineetchoudhary/tuya-local-key/compare/v1.6...v1.7

## 1.6
- Added optional username/password authentication. Set both `AUTH_USERNAME` and `AUTH_PASSWORD` to enable login.
- Cached the device list in the web UI for 24 hours. Use the Refresh button to fetch the latest list from Tuya.
- Added Home Assistant configuration for selecting the QR code scheme.
- Various other improvements and bug fixes.
- **Full Changelog**: https://github.com/vineetchoudhary/tuya-local-key/compare/v1.5...v1.6

## 1.5
- Fixed broken app icon for Home Assistant ingress urls
- **Full Changelog**: https://github.com/vineetchoudhary/tuya-local-key/compare/v1.4...v1.5

## 1.4
- Publishing GHCR images without Buildx provenance/SBOM attestation manifests.
- Local keys are now hidden by default in the web UI. Use the eye toggle in the Local Key header to reveal or hide all keys, while copy-to-clipboard continues to copy the real key value.
- **Full Changelog**: https://github.com/vineetchoudhary/tuya-local-key/compare/v1.3...v1.4

## 1.3
- Fix HomeAssistant volume mount issue
- **Full Changelog**: https://github.com/vineetchoudhary/tuya-local-key/compare/v1.2...v1.3

## 1.2

- Fixed Home Assistant installation.
- Added the Home Assistant app icon.
- **Full Changelog**: https://github.com/vineetchoudhary/tuya-local-key/compare/v1.1...v1.2

## 1.1

- Added Home Assistant app support.
- Improved web UI local-key copy behavior.
- Hardened QR login polling and session cleanup.
- **Full Changelog**: https://github.com/vineetchoudhary/tuya-local-key/compare/v1.0...v1.1

## 1.0

- Retrieve device localKey values using QR-code login from the Smart Life app.
- No Tuya IoT developer account, Access ID, or Access Secret required.
- Web UI for login, device listing, filtering, copying local keys, refreshing devices, logging out, and exporting CSV.
- CLI with the same QR-code login flow for terminal use.
- Session caching so repeat scans are not required until the login expires.
- Docker and Docker Compose support.
- Multi-architecture Docker images for linux/amd64 and linux/arm64.