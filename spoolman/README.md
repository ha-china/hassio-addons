# Spoolman HA Add-on
![Version][version]
![Spoolman-update-shield]

![Supports amd64 Architecture][amd64-shield]
![Supports aarch64 Architecture][aarch64-shield]
![Supports armv7 Architecture][Spoolman-armv7-shield]

## About
This add-on is based on [Spoolman](https://github.com/Donkie/Spoolman).

## Notes
1. **Timezone**
   - The add-on automatically uses the Home Assistant system timezone.
   - No manual timezone configuration is required.  
   - Default fallback: `Europe/Stockholm`.

2. **Port**
   - Fixed to `7912`. Changing the port in the add-on configuration has no effect.
   - Ensure no other add-on uses this host port.

3. **Data directories**
   - `addon_config/<slug>/` → main add-on data, logs, and backups.  
     - `<slug>` is the add-on folder name automatically created by Home Assistant, e.g., `20c49e40_spoolman`.  
   - The add-on automatically creates the following subdirectories inside this folder:
     - `backups/` → backup storage
     - `logs/` → log files
     - `cache/` → temporary cache files
   - All directories have correct permissions for the Spoolman process.  
   - **Note:** `/config` refers to the main Home Assistant configuration path inside the container, but all add-on files live under `addon_config/<slug>/`.
4. **Version numbering**
   - Using **x.x.x-x** format.  
   - The first three numbers match the official Spoolman version (e.g., `0.22.1`).  
   - The number after the dash (`-X`) is for changes specific to this Home Assistant add-on (e.g., `0.22.1-0`).  
5. **External DB Sync & Backups**
   - The add-on automatically syncs filaments and materials from the external SpoolmanDB.  
   - Automatic database backups are scheduled for midnight.  
   - No configuration is required; everything runs in the background.

## Known issues
- None so far.

## Installation
1. [Add the repository][repository] to your Home Assistant add-ons.  
2. Install the **Spoolman** add-on.  
3. Start the add-on.  
4. Access the WebUI at: `http://<HOME_ASSISTANT_HOST>:7912`.  


## Troubleshooting

| Problem | Possible cause | Solution |
|---------|----------------|----------|
| **Add-on not starting** | Port 7912 already in use | Make sure no other add-on is using port 7912, or change the conflicting add-on port. |
| **Time incorrect in logs** | Host timezone misconfigured | Ensure Home Assistant system timezone is correct in **Settings → System → Time & Date**. |
| **Database not updating** | Corrupted SQLite database | Backup and remove `/config/spoolman.db`, then restart the add-on to recreate the database. |

## Support
- If you encounter any issues, please open an issue on the [Bytenoodle/hassioaddon GitHub repository](https://github.com/bytenoodle/hassioaddon/issues).  
- Include your add-on logs (`addon_config/<slug>/addon_log/spoolman.log` and `Log from addon page`) and a brief description of the problem.  
- This helps to diagnose and fix problems faster.

## Screenshot

![Preview][preview]

<!--
Assets
-->

[aarch64-shield]: https://img.shields.io/badge/aarch64-yes-green.svg
[amd64-shield]: https://img.shields.io/badge/amd64-yes-green.svg
[Spoolman-armv7-shield]: https://img.shields.io/badge/armv7-yes-green.svg
[version]: https://img.shields.io/badge/version-v0.23.0--0-blue.svg
[Spoolman-update-shield]: https://img.shields.io/badge/Updated%20on-2026--01--27-blue.svg
[repository]: https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https://github.com/bytenoodle/hassioaddon
[preview]: https://raw.githubusercontent.com/bytenoodle/hassioaddon/refs/heads/main/spoolman/preview.png

---
**⚠️ This resource is intended to help Chinese Home Assistant users more easily install excellent add-ons. If you are not a Chinese user, please read repository readme first**
**⚠️ 这个资源用来帮助中国Home Assistant用户更容易地安装优秀的插件。如果您不是中国用户，请先阅读仓库的README，以下为收集者（汉化，加速）信息，非原作者信息**
---

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
