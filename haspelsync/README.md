# HaspelSync HA App
![Version][version]
![HaspelSync-update-shield]

![Supports aarch64 Architecture][aarch64-shield]
![Supports amd64 Architecture][amd64-shield]

## About
This app is based on Rdiger-36's [HaspelSync](https://github.com/Rdiger-36/HaspelSync) and is the successor of the **Bambulab AMS Spoolman FilamentStatus** app.

HaspelSync synchronizes your **Bambu Lab AMS** filament spools with **Spoolman**. It listens to your printer(s) over MQTT, reads the sliced G-code of a print and books the consumed filament onto the right spool in Spoolman.

## Coming from Bambulab AMS Spoolman FilamentStatus?
The old app is deprecated. HaspelSync is a separate app and you start fresh: nothing is carried over, so set up your Spoolman URL and printers in the Web UI.

- Stop the old app first, both apps use port `4000`. Uninstall it as soon as HaspelSync works.
- Automations that start or stop the old app need the new slug `reponumber_haspelsync` (see [Automation Tip](#automation-tip)).
- Slot labels now start at `A1`, so every slot label is one higher than in the old app.

## Notes

1. **Data directories**
   - `addon_config/<reponumber_slug>/` → main app data and logs.
     - `<slug>` is the app folder name automatically created by Home Assistant, e.g., `12a34b56_haspelsync`.
   - The app automatically creates the following subdirectories inside this folder:
     - `app/printers/` → printer list (`printers.json`) and app settings (`settings.json`)
     - `app/logs/` → log files
   - Permissions are set to allow the app to read/write without issues.
   - `/config` refers to the app's own config folder inside the container, which is `addon_config/<slug>/` on the Home Assistant side.

2. **Version numbering**
   - Using **x.x.x-x** format.
   - The first three numbers match the HaspelSync version (e.g., `1.3.3`).
   - The number after the dash (`-X`) is for changes specific to this Home Assistant app (e.g., `1.3.3-1`).

## Installation
1. [Add the repository][repository] to your Home Assistant.
2. Install the **HaspelSync** app.
3. Start the app.
4. Access the Web UI at: `http://<HOME_ASSISTANT_HOST>:4000`.

You need a running Spoolman instance and, per printer, its serial number, access code and IP address. The printer must be reachable on port `8883` (MQTT) and `990` (FTPS). The P2S, H series and X2D need a USB stick in the printer for consumption tracking, see [supported hardware](https://github.com/Rdiger-36/HaspelSync#supported-hardware).

## Configuration
- This app has no options in the Home Assistant app configuration tab.
- Everything is configured in the HaspelSync Web UI under **Settings**: Spoolman endpoint, printers, tracking mode, password and API keys.
- More info: [HaspelSync settings documentation](https://github.com/Rdiger-36/HaspelSync/blob/main/docs/settings.md).

## Documentation
These pages are maintained by HaspelSync itself:

- [Installation](https://github.com/Rdiger-36/HaspelSync/blob/main/docs/installation.md)
- [Supported hardware and USB stick](https://github.com/Rdiger-36/HaspelSync#supported-hardware)
- [How it works](https://github.com/Rdiger-36/HaspelSync/blob/main/docs/how-it-works.md)
- [Web UI](https://github.com/Rdiger-36/HaspelSync/blob/main/docs/web-ui.md)
- [Settings](https://github.com/Rdiger-36/HaspelSync/blob/main/docs/settings.md)
- [Troubleshooting](https://github.com/Rdiger-36/HaspelSync/blob/main/docs/troubleshooting.md)
- [Legacy mode](https://github.com/Rdiger-36/HaspelSync/blob/main/docs/legacy-mode.md)
- [FAQ](https://github.com/Rdiger-36/HaspelSync/blob/main/docs/faq.md)

## Logs
- Logs are stored in `addon_config/<reponumber_slug>/app/logs/server.log`.
- Errors and status messages are visible in both the log file and the app page log view.
- The HaspelSync Web UI has its own log viewer.

## Automation Tip
If your printer is connected to a smart power plug in Home Assistant OS, you can automate this app (and optionally other apps such as Spoolman) to start automatically when the printer is powered on.

This is useful because HaspelSync keeps trying to reach the printer every few minutes, even when the printer is powered off.
By starting the app only when the printer is powered, you reduce unnecessary network traffic and keep your logs cleaner.

**Example automation (YAML)**

The example below starts this app when your smart plug turns **on**:

```yaml
description: "HaspelSync - Auto Start"
mode: single
triggers:
  - trigger: state
    entity_id: switch.powerplug_printer
    to: "on"
conditions: []
actions:
  - action: hassio.addon_start
    data:
      addon: reponumber_haspelsync
```

## Troubleshooting

| Problem | Possible cause | Solution |
|---------|----------------|----------|
| **Printer is not shown or not connected** | Wrong serial number, access code or IP address | Check the printer under **Settings** in the Web UI. The printer must be reachable on ports `8883` and `990`. |
| **Filament not updating in Spoolman** | Spoolman not reachable, or the slot is not linked to a spool | Check the Spoolman endpoint under **Settings** and link the slot to a Spoolman spool in the Web UI. |
| **"No sliced file on the printer" in the log** | P2S, H series or X2D without a USB stick | Put a USB stick in the printer. |
| **Printer list is empty after a restart** | `printers.json` malformed | Check `addon_config/<reponumber_slug>/app/printers/printers.json` via SFTP/Samba, or add the printer again in the Web UI. |

## Support
- Open an issue on the [Bytenoodle/hassioaddon GitHub repository](https://github.com/bytenoodle/hassioaddon/issues) for problems with this Home Assistant app.
- For problems with HaspelSync itself, use the [HaspelSync issue tracker](https://github.com/Rdiger-36/HaspelSync/issues).
- Include your app logs (`App log from the UI` and `addon_config/<reponumber_slug>/app/logs/server.log`) and a short description of the problem.

## Screenshot

![Preview][preview]

<!--
Assets
-->

[aarch64-shield]: https://img.shields.io/badge/aarch64-yes-green.svg
[amd64-shield]: https://img.shields.io/badge/amd64-yes-green.svg
[version]: https://img.shields.io/badge/version-v1.3.6--0-blue.svg
[repository]: https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https://github.com/bytenoodle/hassioaddon
[HaspelSync-update-shield]: https://img.shields.io/badge/Updated%20on-2026--10--26-blue.svg
[preview]: https://raw.githubusercontent.com/bytenoodle/hassioaddon/refs/heads/main/haspelsync/preview.png

---

**⚠️ This resource is intended to help Chinese Home Assistant users more easily install excellent add-ons. If you are not a Chinese user, please read repository readme first**

**⚠️ 这个资源用来帮助中国Home Assistant用户更容易地安装优秀的插件。如果您不是中国用户，请先阅读仓库的README，以下为收集者（汉化，加速）信息，非原作者信息**

---

## 📱 关注我

扫描下面二维码，关注我。有需要可以随时给我留言：

<img src="https://raw.gitcode.com/ha-china/ha-apps/raw/main/WeChat_QRCode.png" width="50%" /> 📲

## ☕ 赞助支持

如果您觉得我花费大量时间维护这个库对您有帮助，欢迎请我喝杯奶茶，您的支持将是我持续改进的动力！

<div style="display: flex; justify-content: space-between;">
  <img src="https://raw.gitcode.com/ha-china/ha-apps/raw/main/1_readme/Ali_Pay.jpg" height="350px" />
  <img src="https://raw.gitcode.com/ha-china/ha-apps/raw/main/1_readme/WeChat_Pay.jpg" height="350px" />
</div> 💖

感谢您的支持与鼓励！
