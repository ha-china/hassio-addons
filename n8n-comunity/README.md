# Home Assistant 社区应用：n8n

[![Release][release-shield]][release] ![项目阶段][project-stage-shield] ![项目维护状态][maintenance-shield]

[![通过 GitHub Sponsors 支持 Frenck][github-sponsors-shield]][github-sponsors]

[![在 Patreon 上支持 Frenck][patreon-shield]][patreon]

面向技术人员的自动化工作流，已集成 Home Assistant 和 MQTT。

## 关于

[n8n][n8n] 是一个面向技术人员的自动化工作流平台：一个可视化编辑器，您可以在其中将数百项服务连接在一起，包括 HTTP 请求、Webhook 和本地计划调度与数据库、聊天平台和 AI 模型，并在需要时在中途插入少量 JavaScript。

本应用在 Home Assistant 内部运行 n8n，并将其集成在侧边栏面板中。当打开该应用时，已有一个凭据可用，无需创建访问令牌；如果存在您的 MQTT 托管者和 MariaDB 设置，也会自动提供相应的凭据。Home Assistant 自动化会在本地网络内启动工作流；同时，发布其端口和 Webhook，使得任何地方都能访问它们。

[github-sponsors-shield]: https://frenck.dev/wp-content/uploads/2019/12/github_sponsor.png
[github-sponsors]: https://github.com/sponsors/frenck
[maintenance-shield]: https://img.shields.io/maintenance/yes/2026.svg
[n8n]: https://n8n.io
[patreon-shield]: https://frenck.dev/wp-content/uploads/2019/12/patreon.png
[patreon]: https://www.patreon.com/frenck
[project-stage-shield]: https://img.shields.io/badge/project%20stage-experimental-yellow.svg
[release-shield]: https://img.shields.io/badge/version-v0.6.0-blue.svg
[release]: https://github.com/hassio-addons/app-n8n/tree/v0.6.0

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
