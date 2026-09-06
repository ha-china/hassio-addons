# Home Assistant App (Add-on): Cloudflared

[![GitHub Release][releases-shield]][releases]
![Project Stage][project-stage-shield]
![Project Maintenance][maintenance-shield]
![Reported Installations][installations-shield-stable]

通过使用 Cloudflared，您可以在不开放端口的情况下远程连接您的 Home Assistant 实例。

## 关于云朋 (Cloudflared)

Cloudflared 通过安全隧道将您的 Home Assistant 实例连接到 Cloudflare 上的域或子域。这样做可以在不向路由器开放端口的情况下将您的 Home Assistant 暴露在互联网上。此外，您还可以利用 Cloudflare Teams 及其零信任平台来进一步保障您的 Home Assistant 连接安全。

**要使用此应用 (附加组件)，您需要拥有一个使用 Cloudflare 管理其 DNS 记录的域名（例如 example.com）。有关此内容的更多信息，请查看我们的 [Wiki][wiki]。**

## 免责声明

请在（附加组件）中使用此应用之前，请确保遵守 [Cloudflare 自助订阅协议][cloudflare-sssa]。

[cloudflare-sssa]: https://www.cloudflare.com/terms/
[maintenance-shield]: https://img.shields.io/maintenance/yes/2026.svg
[project-stage-shield]: https://img.shields.io/badge/project%20stage-production%20ready-brightgreen.svg
[releases-shield]: https://img.shields.io/github/v/release/homeassistant-apps/app-cloudflared?include_prereleases
[releases]: https://github.com/homeassistant-apps/app-cloudflared/releases
[wiki]: https://github.com/homeassistant-apps/app-cloudflared/wiki/How-tos
[installations-shield-edge]: https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fanalytics.home-assistant.io%2Faddons.json&query=%24%5B%22ffd6a162_cloudflared%22%5D.total&label=Reported%20Installations&link=https%3A%2F%2Fanalytics.home-assistant.io/add-ons
[installations-shield-stable]: https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fanalytics.home-assistant.io%2Faddons.json&query=%24%5B%229074a9fa_cloudflared%22%5D.total&label=Reported%20Installations&link=https%3A%2F%2Fanalytics.home-assistant.io/add-ons

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
