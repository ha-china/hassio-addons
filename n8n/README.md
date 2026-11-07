# Home Assistant 社区应用：n8n

[![Release][release-shield]][release] ![项目阶段][project-stage-shield] ![维护状态][maintenance-shield]

[![通过 GitHub Actions 赞助 Frenck][github-sponsors-shield]][github-sponsors]

[![在 Patreon 支持 Frenck][patreon-shield]][patreon]

为技术人员提供工作流自动化，并集成 Home Assistant 和 MQTT。

## 简介

[n8n][n8n] 是专为技术人员设计的工作流自动化平台：它是一个可视编辑器，您可以在其中将数百个服务连接起来，从 HTTP 请求、Webhooks 和计划任务到数据库、聊天平台和 AI 模型，并在需要时在其间加入一些 JavaScript。

此应用程序在 Home Assistant 中运行 n8n，并在侧边栏面板中。打开时，该 Home Assistant 安装中已存在凭据，无需访问令牌即可使用，且对于 MQTT 代理和 MariaDB 也是如此（如果它们可用）。Home Assistant 的自动化会在内部网络上启动工作流；发布其端口和 Webhooks 后，从任何地方都可以访问它们。

[github-sponsors-shield]: https://frenck.dev/wp-content/uploads/2019/12/github_sponsor.png
[github-sponsors]: https://github.com/sponsors/frenck
[maintenance-shield]: https://img.shields.io/maintenance/yes/2026.svg
[n8n]: https://n8n.io
[patreon-shield]: https://frenck.dev/wp-content/uploads/2019/12/patreon.png
[patreon]: https://www.patreon.com/frenck
[project-stage-shield]: https://img.shields.io/badge/project%20stage-experimental-yellow.svg
[release-shield]: https://img.shields.io/badge/version-v0.5.0-blue.svg
[release]: https://github.com/hassio-addons/app-n8n/tree/v0.5.0

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
