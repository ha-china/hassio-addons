# Home Assistant Community Add-on: Z-Wave JS UI

[![Release][release-shield]][release] ![Project Stage][project-stage-shield] ![Project Maintenance][maintenance-shield]

[![Discord][discord-shield]][discord] [![Community Forum][forum-shield]][forum]

[![Sponsor Frenck via GitHub Sponsors][github-sponsors-shield]][github-sponsors]

[![Support Frenck on Patreon][patreon-shield]][patreon]

可完全配置的Z-Wave JS控制面板和MQTT网关。

![Z-Wave JS UI][logo]

## 关于

Z-Wave JS UI插件提供了一个额外的控制面板，允许您配置您的Z-Wave网络的各个方面。它提供了一个解耦的网关，可以通过Z-Wave JS WebSocket（Home Assistant Z-Wave JS集成使用）和MQTT（甚至可以同时使用）进行通信。

一些优点和使用案例：

- 与Home Assistant Z-Wave JS集成兼容。
- 您的Z-Wave网络将在Home Assistant重新启动之间继续运行。
- 您可以直接使用Node-RED等工具与您的Z-Wave网络进行交互，同时它对Home Assistant也可用。
- 允许基于[ESPHome.io][esphome]的ESP设备直接响应或与您的Z-Wave网络工作。
- 当发现时，会使用Mosquitto插件进行预配置。

此插件使用[Z-Wave JS UI][zwave-js-ui]软件。

[discord-shield]: https://img.shields.io/discord/478094546522079232.svg
[discord]: https://discord.me/hassioaddons
[esphome]: https://esphome.io/components/mqtt.html#on-message-trigger
[forum-shield]: https://img.shields.io/badge/community-forum-brightgreen.svg
[forum]: https://community.home-assistant.io/?u=frenck
[github-sponsors-shield]: https://frenck.dev/wp-content/uploads/2019/12/github_sponsor.png
[github-sponsors]: https://github.com/sponsors/frenck
[logo]: https://github.com/hassio-addons/addon-zwave-js-ui/raw/main/zwave-js-ui/logo.png
[maintenance-shield]: https://img.shields.io/maintenance/yes/2025.svg
[patreon-shield]: https://frenck.dev/wp-content/uploads/2019/12/patreon.png
[patreon]: https://www.patreon.com/frenck
[project-stage-shield]: https://img.shields.io/badge/project%20stage-production%20ready-brightgreen.svg
[release-shield]: https://img.shields.io/badge/version-v6.1.0-blue.svg
[release]: https://github.com/hassio-addons/addon-zwave-js-ui/tree/v6.1.0
[zwave-js-ui]: https://github.com/zwave-js/zwave-js-ui
**⚠️ This resource is intended to help Chinese Home Assistant users more easily install excellent add-ons. If you are not a Chinese user, please read repository readme first**



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
