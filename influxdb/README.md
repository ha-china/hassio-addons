# Home Assistant 社区应用：InfluxDB v1

[![Release][release-shield]][release] ![项目阶段][project-stage-shield] ![项目维护][maintenance-shield]

[![通过 GitHub Sponsors 赞助 Frenck][github-sponsors-shield]][github-sponsors]

[![在 Patreon 上支持 Frenck][patreon-shield]][patreon]

配备 Chronograf 和 Kapacitor 的 InfluxDB 1.x 时序数据库。

## 简介

InfluxDB 是一个专为高吞吐量写入优化的开源时序数据库。它非常适合记录指标、传感器数据、事件以及进行数据分析。它通过 HTTP API 支持客户端交互，并经常与 Grafana 结合使用以可视化数据。

此应用提供 InfluxDB **1.x** 系列（InfluxQL、1.x HTTP API 以及经典数据库、用户和保留策略模型）。它不是 InfluxDB 2 或 InfluxDB 3；后两者具有不同的 API、数据模型和配置。如果您正在与 Home Assistant 集成，请使用带有 `api_version: 1` 的 `influxdb` 集成，这是默认设置。

此应用预装了 Chronograf 和 Kapacitor，为您提供一个美观的 InfluxDB 管理界面，用于管理用户、数据库和数据保留设置，并允许您使用数据探索器查看数据库内部情况。

![Home Assistant 前端中的 Chronograf][screenshot]

[discord]: https://discord.me/hassioaddons
[forum]: https://community.home-assistant.io/t/home-assistant-community-add-on-influxdb/54491?u=frenck
[github-sponsors-shield]: https://frenck.dev/wp-content/uploads/2019/12/github_sponsor.png
[github-sponsors]: https://github.com/sponsors/frenck
[maintenance-shield]: https://img.shields.io/maintenance/yes/2026.svg
[patreon-shield]: https://frenck.dev/wp-content/uploads/2019/12/patreon.png
[patreon]: https://www.patreon.com/frenck
[project-stage-shield]: https://img.shields.io/badge/project%20stage-production%20ready-brightgreen.svg
[release-shield]: https://img.shields.io/badge/version-v6.0.0-blue.svg
[release]: https://github.com/hassio-addons/app-influxdb/tree/v6.0.0
[screenshot]: https://github.com/hassio-addons/app-influxdb/raw/main/images/screenshot.png

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
