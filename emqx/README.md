# Home Assistant 社区应用：EMQX

[![Release][release-shield]][release] ![Project Stage][project-stage-shield] ![Project Maintenance][maintenance-shield]

[![Sponsor Frenck via GitHub Sponsors][github-sponsors-shield]][github-sponsors]

[![Support Frenck on Patreon][patreon-shield]][patreon]

为物联网（IoT）、工业物联网（IIoT）和相关联车辆打造的最高扩展性 MQTT 代理。

## 简介

[EMQX][emqx] 是一个高性能实时消息处理引擎驱动的 MQTT 代理，旨在大规模场景下赋能物联网设备的事件流传输。作为扩展性最先进的 MQTT 代理，EMQX 可帮助您连接任意设备，无论规模大小（包括家庭网络）。

[EMQX MQTT 代理][emqx] 是莫斯奎托（Mosquitto）MQTT 代理/应用的先进替代方案，后者通常用于 Home Assistant。它提供了界面用于配置、管理和调试您的 MQTT 代理、客户端及流量。

虽然 EMQX 将其产品主要作为在其网站上托管的云产品进行销售，但本应用会在完全本地的、自托管环境中运行 EMQX。

自 5.9.0 版本起，EMQX 已不再是开源软件；其采用 [商业源许可 1.1][emqx-license]。在此构建中封包的 EMQX 社区许可证为免费使用、无过期时间，并支持单个节点最多 1000 万并发会话。集群功能需要商业许可证，而本应用从未进行过集群操作。

![EMQX in the Home Assistant Frontend][screenshot]

[emqx-license]: https://github.com/emqx/emqx/blob/main/LICENSE
[emqx]: https://www.emqx.io/
[github-sponsors-shield]: https://frenck.dev/wp-content/uploads/2019/12/github_sponsor.png
[github-sponsors]: https://github.com/sponsors/frenck
[maintenance-shield]: https://img.shields.io/maintenance/yes/2026.svg
[patreon-shield]: https://frenck.dev/wp-content/uploads/2019/12/patreon.png
[patreon]: https://www.patreon.com/frenck
[project-stage-shield]: https://img.shields.io/badge/project%20stage-experimental-yellow.svg
[release-shield]: https://img.shields.io/badge/version-v0.10.1-blue.svg
[release]: https://github.com/hassio-addons/app-emqx/tree/v0.10.1
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
