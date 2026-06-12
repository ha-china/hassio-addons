# Home Assistant 社区应用：Z-Wave JS UI

[![发布][release-shield]][release] ![项目阶段][project-stage-shield] ![项目维护][maintenance-shield]

[![通过 GitHub Sponsors 支持Frenck][github-sponsors-shield]][github-sponsors]

[![在 Patreon 上支持 Frenck][patreon-shield]][patreon]

完全可配置的 Z-Wave JS 控制面板和 MQTT 网关。

![Z-Wave JS UI][logo]

## 关于

Z-Wave JS UI 应用提供了一个额外的控制面板，允许您配置 Z-Wave 网络的各个方面。它提供了一个解耦的网关，可以使用 Z-Wave JS WebSockets（由 Home Assistant Z-Wave JS 集成使用）和 MQTT（甚至可以同时使用）进行通信。

一些优点和用例：

- 与 Home Assistant Z-Wave JS 集成兼容。
- 在 Home Assistant 重启期间，您的 Z-Wave 网络将继续运行。
- 您可以直接使用 Node-RED 等工具与您的 Z-Wave 网络交互，同时它也适用于 Home Assistant。
- 允许基于 [ESPHome.io][esphome] 的 ESP 设备直接响应或与您的 Z-Wave 网络协同工作。
- 当检测到 Mosquitto 应用时，会自动进行预配置。

此应用使用 [Z-Wave JS UI][zwave-js-ui] 软件。

[esphome]: https://esphome.io/components/mqtt.html#on-message-trigger
[github-sponsors-shield]: https://frenck.dev/wp-content/uploads/2019/12/github_sponsor.png
[github-sponsors]: https://github.com/sponsors/frenck
[logo]: https://github.com/hassio-addons/app-zwave-js-ui/raw/main/zwave-js-ui/logo.png
[maintenance-shield]: https://img.shields.io/maintenance/yes/2026.svg
[patreon-shield]: https://frenck.dev/wp-content/uploads/2019/12/patreon.png
[patreon]: https://www.patreon.com/frenck
[project-stage-shield]: https://img.shields.io/badge/project%20stage-production%20ready-brightgreen.svg
[release-shield]: https://img.shields.io/badge/version-v7.4.0-blue.svg
[release]: https://github.com/hassio-addons/app-zwave-js-ui/tree/v7.4.0
[zwave-js-ui]: https://github.com/zwave-js/zwave-js-ui
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
