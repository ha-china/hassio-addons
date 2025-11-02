# Home Assistant 插件：Cloudflared

[![GitHub 发布][releases-shield]][releases]
![项目阶段][project-stage-shield]
![项目维护][maintenance-shield]
![已报告的安装][installations-shield-stable]

通过 Cloudflared，无需打开任何端口即可远程连接到您的 Home Assistant 实例。

## 关于

Cloudflared 通过一个安全的隧道将您的 Home Assistant 实例连接到 Cloudflare 的一个域名或子域名。这样，您可以在不打开路由器端口的情况下将 Home Assistant 暴露给互联网。此外，您还可以利用 Cloudflare Teams，他们的 Zero Trust 平台来进一步保护您的 Home Assistant 连接。

**要使用此插件，您必须拥有一个使用 Cloudflare 进行 DNS 条目的域名（例如 example.com）。您可以在我们的 [Wiki][wiki] 中找到更多相关信息**。

## 免责声明

在使用此插件时，请确保您遵守
[Cloudflare 自助服务订阅协议][cloudflare-sssa]。

[cloudflare-sssa]: https://www.cloudflare.com/terms/
[domainarticle]: https://www.linkedin.com/pulse/what-do-domain-name-how-get-one-free-tobias-brenner?trk=public_post-content_share-article
[maintenance-shield]: https://img.shields.io/maintenance/yes/2025.svg
[project-stage-shield]: https://img.shields.io/badge/project%20stage-production%20ready-brightgreen.svg
[releases-shield]: https://img.shields.io/github/v/release/brenner-tobias/addon-cloudflared?include_prereleases
[releases]: https://github.com/brenner-tobias/addon-cloudflared/releases
[wiki]: https://github.com/brenner-tobias/addon-cloudflared/wiki/How-tos
[installations-shield-edge]: https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fanalytics.home-assistant.io%2Faddons.json&query=%24%5B%22ffd6a162_cloudflared%22%5D.total&label=Reported%20Installations&link=https%3A%2F%2Fanalytics.home-assistant.io/add-ons
[installations-shield-stable]: https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fanalytics.home-assistant.io%2Faddons.json&query=%24%5B%229074a9fa_cloudflared%22%5D.total&label=Reported%20Installations&link=https%3A%2F%2Fanalytics.home-assistant.io/add-ons
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
