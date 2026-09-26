# Tuya Local Key

Tuya Local Key retrieves Smart Life / Tuya device local keys using QR-code login. You do not need a Tuya IoT developer account, cloud project, Access ID, or Access Secret.

## Usage

1. Start the app.
2. Open the web UI from the Home Assistant sidebar.
3. Enter your Smart Life user code.
4. Scan the QR code with the Smart Life app.
5. Tap Confirm login in the app.
6. View, copy, filter, refresh, or export your devices.
7. Select a device row to open a panel with its full details: identity, connectivity, timestamps, every data point with its local dp id and current value, and the raw JSON record.

## Finding Your User Code

In the Smart Life app, go to Me > Settings > Account and Security > User Code.

## Configuration

Use the app configuration page to choose the QR scheme. The default is `smartlife`; switch to `tuyaSmart` if scanning or confirmation does not work for your account.

`DEVICE_CACHE` controls whether the device list is stored. Leave it `on` to keep the list across restarts and app updates, or set it to `off` to hold the list in memory only.

## Device List Cache

The device list is cached for 3 days and stored in the app's `/data` directory, so restarting or updating the app shows your devices immediately instead of re-fetching them from Tuya. Click Refresh to get the current list.

That list contains every local key in your account, so it is encrypted at rest: `/data/devices.cache` holds the encrypted list and `/data/cache.key` holds the key that decrypts it. Both are readable only by the app. Logging out deletes both, which also makes any copy of `devices.cache` in an older Home Assistant backup permanently unreadable.

This protects the cache file on its own, not the `/data` directory as a whole — the key sits beside the file it unlocks, and that directory already holds the session tokens that can fetch the same keys from Tuya. Home Assistant backups include `/data`, so treat a backup of this app as sensitive. Set `DEVICE_CACHE` to `off` if you would rather the device list never reach disk.

### When Tuya Cannot Be Reached

If a fetch fails, or your login has expired, the saved list is shown instead of an error and labelled as a snapshot. Local keys do not expire with the login, so those keys are still the ones your devices use, and the notice offers to log in again rather than dropping you at the login screen with nothing. Logging out is what clears the saved list.

## Change Detection

Every refresh is compared against the list you saw before it. Devices added, removed, and renamed are summarised above the table, and so are local keys that changed.

A rotated local key is the one worth watching for: Tuya changes it when a device is re-paired, and anything holding the old one, such as LocalTuya or tuya-local, stops working with no explanation. Changed rows are badged in the table, and the filter box matches the badge text, so typing `key changed` narrows the list to them.

## Bluetooth Devices

Bluetooth-only devices show `-` in the Local Key column. Tuya's device-sharing API does not return a local key for them, so there is nothing to display. See [Bluetooth Devices](https://github.com/vineetchoudhary/tuya-local-key#bluetooth-devices) in the README for more information.

## Security

The app exposes device `localKey` values after login. Keep access restricted to trusted Home Assistant users. The device list is also stored in `/data`, encrypted; see [Device List Cache](#device-list-cache).

The direct `8000/tcp` port is disabled by default. Use Home Assistant ingress unless you intentionally enable the direct port.

Ingress access is already authenticated by Home Assistant. If you enable the direct port (or otherwise reach the app outside ingress), set both `AUTH_USERNAME` and `AUTH_PASSWORD` in the app Configuration to require a login.

> **Warning:** `AUTH_USERNAME` and `AUTH_PASSWORD` are **ignored when the app is opened through Home Assistant ingress** (the sidebar panel). Ingress already authenticates you, and the browser cannot pass Basic Auth credentials through the ingress proxy, so no login prompt appears there. It only applies if you expose the direct port.
