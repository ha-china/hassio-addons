# Home Assistant 社区应用：InfluxDB v1

[![Release][release-shield]][release] ![Project Stage][project-stage-shield] ![Project Maintenance][maintenance-shield]

[![Sponsor Frenck via GitHub Sponsors][github-sponsors-shield]][github-sponsors]

[![Support Frenck on Patreon][patreon-shield]][patreon]

带有 Chronograf 和 Kapacitor 的 InfluxDB 1.x 时序数据库。

## 关于

InfluxDB 是一个面向高写入量的开源时序数据库。它非常适合记录指标、传感器数据、事件并进行分析。它提供 HTTP API 供客户端交互，通常与 Grafana 结合使用来可视化数据。

此应用提供了 InfluxDB **1.x** 系列（InfluxQL、1.x HTTP API 以及经典的数据库、用户和保留策略模型）。这不是 InfluxDB 2 或 InfluxDB 3；后者拥有不同的 API、数据模型和配置。如果您正在与 Home Assistant 集成，请使用 `influxdb` 集成并设置 `api_version: 1`，这是默认设置。

此应用预装了 Chronograf 和 Kapacitor，为您提供了一个用于管理用户、数据库和数据保留设置的精美 InfluxDB 管理界面，并允许您通过数据浏览器查看数据库内部情况。

![Chronograf in the Home Assistant Frontend][screenshot]

[discord]: https://discord.me/hassioaddons
[forum]: https://community.home-assistant.io/t/home-assistant-community-add-on-influxdb/54491?u=frenck
[github-sponsors-shield]: https://frenck.dev/wp-content/uploads/2019/12/github_sponsor.png
[github-sponsors]: https://github.com/sponsors/frenck
[maintenance-shield]: https://img.shields.io/maintenance/yes/2026.svg
[patreon-shield]: https://frenck.dev/wp-content/uploads/2019/12/patreon.png
[patreon]: https://www.patreon.com/frenck
[project-stage-shield]: https://img.shields.io/badge/project%20stage-production%20ready-brightgreen.svg
[release-shield]: https://img.shields.io/badge/version-v6.0.1-blue.svg
[release]: https://github.com/hassio-addons/app-influxdb/tree/v6.0.1
[screenshot]: https://github.com/hassio-addons/app-influxdb/raw/main/images/screenshot.png

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
