# Home Assistant 社区应用：Z-Wave JS UI

[![Release][release-shield]][release] ![项目阶段][project-stage-shield] ![项目维护状态][maintenance-shield]

[![Frenck 赞助 GitHub Sponsors][github-sponsors-shield]][github-sponsors]

[![Patreon 支持 Frenck][patreon-shield]][patreon]

完全可配置的 Z-Wave JS 控制面板和 MQTT 网关。

![Z-Wave JS UI][logo]

## 简介

Z-Wave JS UI 应用程序提供了一个额外的控制面板，允许您配置 Z-Wave 网络的每个方面。它提供了一个解耦的网关，可以通过 Z-Wave JS WebSocket（被 Home Assistant Z-Wave JS 集成使用）和 MQTT 进行通信（甚至可以同时使用）。

优点和使用场景：

- 与 Home Assistant Z-Wave JS 集成兼容。
- 在 Home Assistant 重启之间，您的 Z-Wave 网络将继续运行。
- 您可以直接在 Node-RED 中使用 Z-Wave 网络，同时它也可供 Home Assistant 使用。
- 允许基于 [ESPHome.io][esphome] 的 ESP 设备直接响应或与您的 Z-Wave 网络交互。
- 如果检测到，会预配置 Mosquitto 应用程序。

该应用使用 [Z-Wave JS UI][zwave-js-ui] 软件。

[esphome]: https://esphome.io/components/mqtt.html#on-message-trigger
[github-sponsors-shield]: https://frenck.dev/wp-content/uploads/2019/12/github_sponsor.png
[github-sponsors]: https://github.com/sponsors/frenck
[logo]: https://github.com/hassio-addons/app-zwave-js-ui/raw/main/zwave-js-ui/logo.png
[maintenance-shield]: https://img.shields.io/maintenance/yes/2026.svg
[patreon-shield]: https://frenck.dev/wp-content/uploads/2019/12/patreon.png
[patreon]: https://www.patreon.com/frenck
[project-stage-shield]: https://img.shields.io/badge/project%20stage-production%20ready-brightgreen.svg
[release-shield]: https://img.shields.io/badge/version-v7.7.2-blue.svg
[release]: https://github.com/hassio-addons/app-zwave-js-ui/tree/v7.7.2
[zwave-js-ui]: https://github.com/zwave-js/zwave-js-ui

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
