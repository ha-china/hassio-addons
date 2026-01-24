# Homepage
![Version][version]
![Homepage-update-shield]
![Production ready][production-ready]
![Supports aarch64 Architecture][aarch64-shield]
![Supports amd64 Architecture][amd64-shield]

## About
This addon is based on the [gethomepage/homepage](https://hub.docker.com/r/gethomepage/homepage/) - [gethomepage.dev](https://gethomepage.dev).

## Notes
1. HOMEPAGE_ALLOWED_HOSTS
   - By default, this add-on uses a wildcard (*) for HOMEPAGE_ALLOWED_HOSTS.
   - This is safe for typical Home Assistant setups because the add-on runs locally in an isolated container and is not directly exposed to the Internet.
   - Security note: If you ever expose this container to external networks, using a wildcard may allow unwanted requests. In that case, it’s recommended to specify the allowed host(s) explicitly.
   - More info here: https://gethomepage.dev/installation/#homepage_allowed_hosts

2. If you need to use /var/run/docker.sock (optional, for Docker integrations), make sure Protection Mode is disabled for this addon.
   - More info here about /var/run/docker.sock in homepage: https://gethomepage.dev/installation/docker/

3. Custom icons and images
   - You can use custom icons and images by uploading them with File Browser addon or SFTP.
   - since its not possible to mount `/app/public/icons` in haos to be used with homepage here is a workaround and easier to use.
   - Make a map in `/config/www/` [example: `/config/www/homepage/icons or/and /config/www/homepage/images`]
   - Directory example for custom Homepage assets:
     ```
       /config/www/homepage/
       ├─ icons/         ← place bookmark icons here
       ├─ images/        ← place other custom images here
       └─ backgrounds/   ← place background images here
     ```
       Reference files in your homepage YAML using full HA URLs:
       `http://iphaos:porthaos/local/homepage/icons/example.ico (example url: http://192.168.254.212:8123/local/homepage/icons/sonarr.ico`
   - Example for bookmarks.yaml:
     ```
     - Group A:
      - Sonarr:
        icon: http://192.168.254.212:8123/local/homepage/icons/sonarr.ico
        href: http://sonarr.host/
        description: Series management
     ```
   - More info about icons/images/backgrounds here: https://gethomepage.dev/configs/services/#icons and https://gethomepage.dev/configs/settings/#background-image

4. Version numbering:
   - Using **Vx.x.x.x** format.
   - The first 3 numbers follow the official Homepage version (e.g. `1.5.0`).
   - The last number is for changes within this Home Assistant add-on (e.g. `1.5.0.1`).

## Known issues
- None so far.

## Installation
1. [Add my add-ons repository][repository] to your Home Assistant addons.
2. Install this add-on.
3. Edit add-on config as needed. At the moment you can only change exposed port, which is 3000 by default.
4. If you need /var/run/docker.sock or custom icons/images see notes above.
5. Start the add-on.
6. Done, enjoy!

## Edit Homepage Config Files
1. Use the File Editor add-on or connect to your Home Assistant via SFTP.
2. Navigate to the addon_config folder.
3. Open the folder for the Homepage add-on, e.g., xxxxxxx_homepage (xxxxxxx are random numbers).
4. The folder structure should look like: /addon_config/abcd123_homepage/.
5. Edit the configuration files for Homepage. For more information on Homepage configuration, see: https://gethomepage.dev/configs/

## Troubleshooting

| Problem | Possible cause | Solution |
|---------|----------------|----------|
| **Add-on shows only “Start” button after starting after first/fresh install** | HA Supervisor UI sometimes does not refresh correctly after first installation | Refresh the page (F5) or click **Start** again. Then the full controls (`Stop`, `Restart`, `Uninstall`, `Rebuild`, `Open WebUI`) will appear. |
| **404 when using `/local/homepage/icons/...`** | The file is not located in the correct host directory, or HA has not reloaded static files yet | Make sure the file is placed in `/config/www/homepage/icons/`. Restart Home Assistant (core) so the `/local/` static files are reloaded. |
| **Old icons or images still showing** | Browser or server caching | Force a hard refresh in the browser (Ctrl+F5) or rename the file (e.g., `favicon_v2.ico`). |
| **Icons/Images not showing on Homepage** | Homepage container cannot reach `http://<ha-ip>:8123/local/...` or the URL is incorrect | For icons/images always use the full Home Assistant URL with port 8123 in your YAML config. |
| **Unable to upload files** | Permissions issue or wrong upload location | Ensure you have write access to `/config/www/homepage/...` via SFTP, File Editor, or another file manager. |
| **Incorrect paths or typos** | Typo in folder or filename | Double-check folder names, file extensions, and case sensitivity (Linux paths are case-sensitive). |

## Screenshot

![Preview][preview]

<!--
Assets
-->

[aarch64-shield]: https://img.shields.io/badge/aarch64-yes-green.svg
[amd64-shield]: https://img.shields.io/badge/amd64-yes-green.svg


[version]: https://img.shields.io/badge/version-v1.9.0--0-blue.svg
[production-ready]: https://img.shields.io/badge/Production%20ready-yes-green.svg

[Homepage-update-shield]: https://img.shields.io/badge/Updated%20on-2026--01--21-blue.svg

[repository]: https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https://github.com/bytenoodle/hassioaddon
[preview]: https://raw.githubusercontent.com/gethomepage/homepage/refs/heads/dev/images/1.png

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
