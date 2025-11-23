# Bambulab AMS Spoolman FilamentStatus HA Add-on
![Version][version]
![SBAFS-update-shield]

![Production ready][production-ready]
![Supports aarch64 Architecture][aarch64-shield]
![Supports amd64 Architecture][amd64-shield]

## About
This add-on is based on Rdiger-36 [bambulab-ams-spoolman-filamentstatus](https://github.com/Rdiger-36/bambulab-ams-spoolman-filamentstatus).

This add-on integrates a **Bambulab AMS** system with **Spoolman** to track and synchronize filament spool usage.  
It listens for MQTT updates from your Bambulab printer(s) and automatically updates Spoolman.

## Notes

1. **Data directories**
   - `addon_config/<reponumber_slug>/` → main add-on data, logs, and backups.  
     - `<slug>` is the add-on folder name automatically created by Home Assistant, e.g., `12a34b56_bambulabspoolmanfs`.  
   - The add-on automatically creates the following subdirectories inside this folder:
     - `app/printers/` → printer configuration (`printers.json`)  
     - `app/logs/` → log files
   - Permissions are set to allow the add-on to read/write without issues.  
   - `/config` refers to the main Home Assistant configuration path inside the container, but all add-on files live under `addon_config/<slug>/`.

2. **Version numbering**
   - Using **x.x.x-x** format.  
   - The first three numbers match the official Bambulab AMS/Spoolman integration version (e.g., `1.1.0`).  
   - The number after the dash (`-X`) is for changes specific to this Home Assistant add-on (e.g., `1.1.0-1`).

## Printer configuration
- The add-on creates a **`printers.json`** automatically with **Printer 1** from the add-on UI options.  
- Users can manually add additional printers via SFTP in `addon_config/<reponumber_slug>/app/printers/printers.json`.  
- **Backup**: a single backup of `printers.json` is kept at `printers.json.bak`. Older backups are overwritten.  
- Printer 1 is always updated from the UI config at start; Printer 2+ remain untouched unless edited manually.
- **How to add more printers:** simply edit `printers.json` via SFTP and add new printer objects following the existing JSON structure, for example:

```json
{
  "name": "Printer 2",
  "id": "01PYYYYYYYYYYYY",
  "code": "AccessCode",
  "ip": "192.168.1.Y"
}
```
More info about Printer configuration here: [Rdiger-36/bambulab-ams-spoolman-filamentstatus #installation part 2](https://github.com/Rdiger-36/bambulab-ams-spoolman-filamentstatus?tab=readme-ov-file#installation)

## Installation
1. [Add the repository][repository] to your Home Assistant add-ons.  
2. Install the **Bambulab AMS Spoolman FilamentStatus** add-on.  
3. Start the add-on.  
4. Access the WebUI at: `http://<HOME_ASSISTANT_HOST>:4000`.  

## Configuration
- User can configure Printer 1 via the add-on **UI options**:  
  - `PRINTER_ID`  
  - `PRINTER_CODE`  
  - `PRINTER_IP`  
  - `SPOOLMAN_ENDPOINT`  
  - `UPDATE_INTERVAL`  
  - `NEVER_MERGE_IF_TAG`  
  - `DEBUG`  
  - `MODE` (`manual` or `automatic`)  
- Changes to Printer 1 are automatically written to `printers.json`.  

## Logs
- Logs are stored in `addon_config/<reponumber_slug>/app/logs/server.log`.  
- Errors and status messages are visible in both the log file and the add-on page log view.

## Automation Tip
If your printer is connected to a smart power plug in Home Assistant OS, you can automate this add-on (and optionally other add-ons such as Spoolman) to start automatically when the printer is powered on.

This is useful because Bambulab AMS Spoolman FilamentStatus will continue pinging the printer every few minutes (default interval: `30000 ms`) even when the printer is powered off.  
By starting the add-on only when the printer is powered, you reduce unnecessary network traffic and keep your logs cleaner.

**Example automation (YAML)**

The example below starts this add-on when your smart plug turns **on**:

```yaml
description: "Bambulab AMS Spoolman FilamentStatus - Auto Start"
mode: single
triggers:
  - trigger: state
    entity_id: switch.powerplug_printer
    to: "on"
conditions: []
actions:
  - action: hassio.addon_start
    data:
      addon: reponumber_bambulabspoolmanfs
```

## Troubleshooting

| Problem | Possible cause | Solution |
|---------|----------------|----------|
| **Printer configuration not loaded** | `printers.json` malformed | Restore `printers.json.bak` or edit `printers.json` via SFTP. (See Printer configuration)  |
| **Filament not updating in Spoolman** | Bambulab printer not reachable | Check network connectivity and `SPOOLMAN_ENDPOINT`. |

## Support
- Open an issue on the [Bytenoodle/hassioaddon GitHub repository](https://github.com/bytenoodle/hassioaddon/issues).  
- Include your add-on logs (`Addon log from the UI` and `addon_config/<reponumber_slug>/app/logs/server.log`,`addon_config/<reponumber_slug>/app/logs/printeridxxxxx.log`) and a short description of the problem.

## Screenshot

![Preview][preview]

<!--
Assets
-->

[aarch64-shield]: https://img.shields.io/badge/aarch64-yes-green.svg
[amd64-shield]: https://img.shields.io/badge/amd64-yes-green.svg
[version]: https://img.shields.io/badge/version-v1.1.0--0-blue.svg
[production-ready]: https://img.shields.io/badge/Production%20ready-yes-green.svg
[repository]: https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https://github.com/bytenoodle/hassioaddon
[SBAFS-update-shield]: https://img.shields.io/badge/Updated%20on-2025--11--19-blue.svg
[preview]: https://raw.githubusercontent.com/bytenoodle/hassioaddon/refs/heads/main/Bambulab-ams-spoolman/preview.png
**⚠️ This resource is intended to help Chinese Home Assistant users more easily install excellent add-ons. If you are not a Chinese user, please read repository readme first**



## 📱 关注我

扫描下面二维码，关注我。有需要可以随时给我留言：

<img src="https://gitee.com/desmond_GT/hassio-addons/raw/main/WeChat_QRCode.png" width="50%" /> 📲

## ☕ 赞助支持

如果您觉得我花费大量时间维护这个库对您有帮助，欢迎请我喝杯奶茶，您的支持将是我持续改进的动力！

<div style="display: flex; justify-content: space-between;">
  <img src="https://gitee.com/desmond_GT/hassio-addons/raw/main/1_readme/Ali_Pay.jpg" height="350px" />
  <img src="https://gitee.com/desmond_GT/hassio-addons/raw/main/1_readme/WeChat_Pay.jpg" height="350px" />
</div> 💖

感谢您的支持与鼓励！
