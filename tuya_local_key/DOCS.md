# Tuya Local Key

Retrieve Smart Life / Tuya device local keys using QR-code login. No Tuya IoT developer account or cloud project is needed.

## Usage

1. Start the app and open it from the Home Assistant sidebar.
2. Enter your Smart Life user code from **Me > Settings > Account and Security > User Code**.
3. In Smart Life, tap **+ > Scan**, scan the QR code, and confirm login.
4. View, copy, filter, or export your devices. Select a row for device details and local integration setup.

The device list is cached for 3 days and kept across restarts. Click **Refresh** to fetch the latest list from Tuya.

Use **Scan network** with your IoT subnet (for example `192.168.2.0/24`) to find local IP addresses and protocol versions.

## Configuration

Set these options on the app's Configuration page:

| Option | Default | Purpose |
|---|---|---|
| `QR_SCHEME` | `smartlife` | Use `tuyaSmart` if QR login fails. |
| `DEVICE_CACHE` | `on` | Keep devices across restarts. Set to `off` to keep the list in memory only. |
| `LAN_SUBNET` | _(unset)_ | Prefill Scan network with your IoT subnet. Separate multiple subnets with commas. |
| `AUTH_USERNAME` / `AUTH_PASSWORD` | _(unset)_ | Optional login for direct port access. Set both. |

## Security

Ingress access uses Home Assistant authentication. The direct `8000/tcp` port is disabled by default. If you enable it, set both `AUTH_USERNAME` and `AUTH_PASSWORD`. These credentials apply only to direct access and are **ignored through Home Assistant ingress**.

Login data and cached device keys are stored in `/data`. Treat app backups as sensitive and restrict access to trusted Home Assistant users.

## Documentation

Detailed guides are in the [docs folder](https://github.com/vineetchoudhary/tuya-local-key/tree/main/docs):

- [Device details, local integrations, and Bluetooth](https://github.com/vineetchoudhary/tuya-local-key/blob/main/docs/usage.md)
- [Network scanning, VLANs, gateways, and scan statuses](https://github.com/vineetchoudhary/tuya-local-key/blob/main/docs/network-scanning.md)
- [Caching, offline snapshots, and change detection](https://github.com/vineetchoudhary/tuya-local-key/blob/main/docs/caching-and-changes.md)
- [Configuration and security](https://github.com/vineetchoudhary/tuya-local-key/blob/main/docs/configuration.md)
- [Troubleshooting](https://github.com/vineetchoudhary/tuya-local-key/blob/main/docs/troubleshooting.md)
- [Screenshots](https://github.com/vineetchoudhary/tuya-local-key/blob/main/docs/screenshots.md)
