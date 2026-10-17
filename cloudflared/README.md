# Home Assistant 应用：Cloudflared

[![GitHub 发布][releases-shield]][releases]
![项目阶段][project-stage-shield]
![项目维护状态][maintenance-shield]
![报告安装量][installations-shield-stable]

使用 Cloudflared 远程连接到您的 Home Assistant 实例，而无需开放任何端口。

## 简介

Cloudflared 通过安全隧道将您的 Home Assistant 实例连接到 Cloudflare 域或子域名。通过这种方式，您可以在不开放路由器端口的情况下将 Home Assistant 暴露到互联网。此外，您还可以利用 Cloudflare Teams 及其零信任平台进一步强化您的 Home Assistant 连接安全性。

**要使用此应用，您需要拥有一个使用 Cloudflare 进行 DNS 记录解析的域名（例如 example.com）。有关更多信息，请查阅我们的 [Wiki][wiki]。**

## 免责声明

使用此应用时，请确保您遵守 [Cloudflare 自助订阅协议][cloudflare-sssa]。

[cloudflare-sssa]: https://www.cloudflare.com/terms/
[maintenance-shield]: https://img.shields.io/maintenance/yes/2026.svg
[project-stage-shield]: https://img.shields.io/badge/project%20stage-production%20ready-brightgreen.svg
[releases-shield]: https://img.shields.io/github/v/release/homeassistant-apps/app-cloudflared?include_prereleases
[releases]: https://github.com/homeassistant-apps/app-cloudflared/releases
[wiki]: https://github.com/homeassistant-apps/app-cloudflared/wiki/How-tos
[installations-shield-edge]: https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fanalytics.home-assistant.io%2Faddons.json&query=%24%5B%22ffd6a162_cloudflared%22%5D.total&label=Reported%20Installations&link=https%3A%2F%2Fanalytics.home-assistant.io%2Faddons
[installations-shield-stable]: https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fanalytics.home-assistant.io%2Faddons.json&query=%24%5B%229074a9fa_cloudflared%22%5D.total&label=Reported%20Installations&link=https%3A%2F%2Fanalytics.home-assistant.io%2Faddons

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
