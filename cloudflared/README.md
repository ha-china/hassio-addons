# Home Assistant App: Cloudflared

[![GitHub Release][releases-shield]][releases]
![项目阶段][project-stage-shield]
![项目维护状态][maintenance-shield]
![报告安装量][installations-shield-stable]

使用 Cloudflared 即可在不开放任何端口的情况下远程连接到您的 Home Assistant 实例。

## 关于介绍

Cloudflared 通过安全隧道将您的 Home Assistant 实例连接到 Cloudflare 上的域名或子域名。这样，您就可以在无需开放路由器端口的情况下，将 Home Assistant 暴露给互联网。此外，您还可以利用 Cloudflare Teams 及其零信任平台来进一步保障您的 Home Assistant 连接安全。

**要使用此应用，您需要拥有一个域名（例如 example.com），并且该域名的 DNS 条目使用的是 Cloudflare。有关更多信息，请参阅我们的 [Wiki][wiki]**。

## 免责声明

使用前，请确保遵守 [Cloudflare 自服役订阅协议][cloudflare-sssa]。

[cloudflare-sssa]: https://www.cloudflare.com/terms/
[维护状态标识]: https://img.shields.io/maintenance/yes/2026.svg
[项目阶段标识]: https://img.shields.io/badge/project%20stage-production%20ready-brightgreen.svg
[发布标识]: https://img.shields.io/github/v/release/homeassistant-apps/app-cloudflared?include_prereleases
[发布链接]: https://github.com/homeassistant-apps/app-cloudflared/releases
[Wiki]: https://github.com/homeassistant-apps/app-cloudflared/wiki/How-tos
[报告安装量标识-edge]: https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fanalytics.home-assistant.io%2Faddons.json&query=%24%5B%22ffd6a162_cloudflared%22%5D.total&label=报告安装量&link=https%3A%2F%2Fanalytics.home-assistant.io%2Faddons
[报告安装量标识-稳定版]: https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fanalytics.home-assistant.io%2Faddons.json&query=%24%5B%229074a9fa_cloudflared%22%5D.total&label=报告安装量&link=https%3A%2F%2Fanalytics.home-assistant.io%2Faddons

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
