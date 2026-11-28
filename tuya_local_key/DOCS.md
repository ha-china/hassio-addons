# Tuya Local Key

Retrieve Smart Life / Tuya device local keys using QR-code login. No Tuya IoT developer account or cloud project is needed.

## Usage

1. Start the app and open it from the Home Assistant sidebar. Only administrators see it. Turn on **Start on boot** to keep it running after a restart.
2. Enter your Smart Life user code from **Me > Settings > Account and Security > User Code**.
3. In Smart Life, tap **+ > Scan**, scan the QR code, and confirm login.
4. View, copy, filter, or export your devices. Select a row for device details and local integration setup.
5. Use **Scan network** with your IoT VLAN or subnet, for example `192.168.2.0/24`, to find local IP addresses and protocol versions. The Home Assistant host must reach TCP port 6668 there.
6. Use **Filter** to narrow the list by home, room, status, or device category. **Clear all** resets filters and search, and restores excluded devices.
7. Open **Change history** in a device's options to see changes to its key, IP, protocol, and other settings.

The device list is kept across restarts and reused for up to 3 days. Use **Refresh** to fetch it sooner.

## Configuration

Set these options on the app's Configuration page:

| Option | Default | Purpose |
|---|---|---|
| `QR_SCHEME` | `smartlife` | Use `tuyaSmart` for the Tuya Smart app, or if QR login fails. |
| `DEVICE_CACHE` | `on` | Keep devices, scan results, and change history across restarts. Set to `off` to keep them in memory only and delete the saved copies. |
| `CHECK_FOR_UPDATES` | `true` | Turn off **Check for updates** to disable all update checks and notifications. |
| `CHANGE_HISTORY` | `on` | Keep encrypted change history. Set to `off` to delete saved history and its key. |
| `HISTORY_RETENTION_DAYS` | `90` | Days of history to keep, from 1 to 3,650, up to 10,000 entries. |
| `AUTH_USERNAME` / `AUTH_PASSWORD` | _(unset)_ | Optional login for direct port access. Set both. |
| `LAN_SUBNET` | _(unset)_ | Prefill Scan network with your IoT VLAN or subnet. Separate several with commas. |

## Security

Ingress uses Home Assistant authentication. The direct `8000/tcp` port is disabled by default. If you enable it, set both `AUTH_USERNAME` and `AUTH_PASSWORD`. Ingress ignores them.

Login data, cached device keys, and change history are stored in `/data`. Treat app backups as sensitive and restrict access to trusted Home Assistant users. Logging out deletes them all.

## Documentation

Detailed guides are in the [docs folder](https://github.com/vineetchoudhary/tuya-local-key/tree/main/docs):

- [Device details, local integrations, and Bluetooth](https://github.com/vineetchoudhary/tuya-local-key/blob/main/docs/usage.md)
- [Network scanning, VLANs, gateways, and scan statuses](https://github.com/vineetchoudhary/tuya-local-key/blob/main/docs/network-scanning.md)
- [Caching, change detection, and change history](https://github.com/vineetchoudhary/tuya-local-key/blob/main/docs/caching-and-changes.md)
- [Configuration and security](https://github.com/vineetchoudhary/tuya-local-key/blob/main/docs/configuration.md)
- [Troubleshooting](https://github.com/vineetchoudhary/tuya-local-key/blob/main/docs/troubleshooting.md)
- [Screenshots](https://github.com/vineetchoudhary/tuya-local-key/blob/main/docs/screenshots.md)
