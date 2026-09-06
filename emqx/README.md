# Home Assistant 社区应用：EMQX

[![Release][release-shield]][release] ![Project Stage][project-stage-shield] ![Project Maintenance][maintenance-shield]

[![Sponsor Frenck via GitHub Sponsors][github-sponsors-shield]][github-sponsors]

[![Support Frenck on Patreon][patreon-shield]][patreon]

最适合物联网、工业物联网及联网车辆的可扩展 MQTT 代理。

## 关于

[EMQX][emqx] 是一个带有高性能实时消息处理引擎的 MQTT 代理，可为大规模物联网设备提供事件流服务。作为最可扩展的 MQTT 代理，EMQX 可帮助您在任何规模（包括家庭）下连接任何设备。

[EMQX MQTT 代理][emqx] 是 Mosquitto MQTT 代理/应用的高级替代方案，该代理/应用通常用于 Home Assistant。它提供图形界面用于配置、管理和调试您的 MQTT 代理、客户端及流量。

虽然 EMQX 主要将其产品以云服务形式在其网站上销售，但该应用将在完全本地、自托管环境中运行 EMQX。

自版本 5.9.0 起，EMQX 已不再是开源软件；其许可证为 [业务来源许可 1.1][emqx-license]。此处分发的构建版本附带 EMQX 社区许可证，该许可证免费且永不失效，涵盖单个节点，支持多达 1000 万次并发会话。需要商业许可证的是集群功能，而本应用从未实现过集群。

![EMQX in the Home Assistant Frontend][screenshot]

[emqx-license]: https://github.com/emqx/emqx/blob/main/LICENSE
[emqx]: https://www.emqx.io/
[github-sponsors-shield]: https://frenck.dev/wp-content/uploads/2019/12/github_sponsor.png
[github-sponsors]: https://github.com/sponsors/frenck
[maintenance-shield]: https://img.shields.io/maintenance/yes/2026.svg
[patreon-shield]: https://frenck.dev/wp-content/uploads/2019/12/patreon.png
[patreon]: https://www.patreon.com/frenck
[project-stage-shield]: https://img.shields.io/badge/project%20stage-experimental-yellow.svg
[release-shield]: https://img.shields.io/badge/version-v0.9.0-blue.svg
[release]: https://github.com/hassio-addons/app-emqx/tree/v0.9.0
[screenshot]: https://github.com/hassio-addons/app-emqx/raw/main/images/screenshot.png

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
