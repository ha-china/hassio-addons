# Home Assistant 社区应用：n8n

[![Release][release-shield]][release] ![项目阶段][project-stage-shield] ![维护状态][maintenance-shield]

[![通过 GitHub Sponsors 支持 Frenck][github-sponsors-shield]][github-sponsors]

[![在 Patreon 支持 Frenck][patreon-shield]][patreon]

为技术人员打造的自动化工作流，集成 Home Assistant 和 MQTT。

## 简介

[n8n][n8n] 是一个面向技术人员的自动化工作流平台：一个可视化编辑器，您可以在此将数百种服务连接起来，包括 HTTP 请求、Webhook 和时间计划，以及数据库、聊天平台和 AI 模型，中间只需少量的 JavaScript。

此应用将 n8n 运行在 Home Assistant 内部，并作为侧边栏中的一个面板展示。打开时，该 Home Assistant 安装所需的凭据已就绪，无需生成访问令牌；如果是您的 MQTT 发布器和 MariaDB 数据库，相关凭据也已就位。Home Assistant 自动化通过内部网络启动工作流；您也可以从任何地方发布端口和接入点（webhooks）进行访问。

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
