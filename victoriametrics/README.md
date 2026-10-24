# Home Assistant Community App: VictoriaMetrics

[![Release][release-shield]][release] ![Project Stage][project-stage-shield] ![Project Maintenance][maintenance-shield]

[![Sponsor Frenck via GitHub Sponsors][github-sponsors-shield]][github-sponsors]

[![Support Frenck on Patreon][patreon-shield]][patreon]

为指标提供快速且资源高效的时序数据库。

## 关于

[VictoriaMetrics][victoriametrics] 是一个快速、成本效益高且具有扩展性的时序数据库。它支持 Prometheus 查询语言及 API，但能以更小的空间存储相同的数据，并且运行在 Home Assistant 通常使用的硬件上。

Home Assistant 自带的记录器旨在回答“现在发生了什么”。它并未设计用于回答“在过去三年中该指标的变化情况”，因此为了保存足够的历史数据，它在处理其本职工作时会变慢。这款应用为这些长期数据提供了一个专属空间：只需指向 Home Assistant，选择保留时间长短，即可通过其内置的 Web 界面或 Grafana 进行查询。

[github-sponsors-shield]: https://frenck.dev/wp-content/uploads/2019/12/github_sponsor.png
[github-sponsors]: https://github.com/sponsors/frenck
[maintenance-shield]: https://img.shields.io/maintenance/yes/2026.svg
[patreon-shield]: https://frenck.dev/wp-content/uploads/2019/12/patreon.png
[patreon]: https://www.patreon.com/frenck
[project-stage-shield]: https://img.shields.io/badge/project%20stage-experimental-yellow.svg
[release-shield]: https://img.shields.io/badge/version-v0.5.0-blue.svg
[release]: https://github.com/hassio-addons/app-victoriametrics/tree/v0.5.0
[victoriametrics]: https://victoriametrics.com/

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
