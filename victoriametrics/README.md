# Home Assistant 社区应用：VictoriaMetrics

[![Release][release-shield]][release] ![Project Stage][project-stage-shield] ![Project Maintenance][maintenance-shield]

[![Sponsor Frenck via GitHub Sponsors][github-sponsors-shield]][github-sponsors]

[![Support Frenck on Patreon][patreon-shield]][patreon]

专为指标设计的高速、资源高效的时序数据库。

## 关于

[VictoriaMetrics][victoriametrics] 是一款快速、成本效益高且可扩展的时序数据库。它支持 Prometheus 查询语言和 API，但储存的空间仅为其他方案的一小部分，并且完全能在 Home Assistant 常见的硬件上运行。

Home Assistant 自带的记录器旨在回答“现在发生了什么”。它并非为回答“过去三年发生了怎样的变化”而设计；为了保留足够的历史数据以满足这一需求，会使其在处理主要任务时速度变慢。此应用为这些长期数据提供了专属的归宿：指向 Home Assistant，选择保留时间长度，然后通过其内置的 Web 界面或来自 Grafana 进行查询。

[github-sponsors-shield]: https://frenck.dev/wp-content/uploads/2019/12/github_sponsor.png
[github-sponsors]: https://github.com/sponsors/frenck
[maintenance-shield]: https://img.shields.io/maintenance/yes/2026.svg
[patreon-shield]: https://frenck.dev/wp-content/uploads/2019/12/patreon.png
[patreon]: https://www.patreon.com/frenck
[project-stage-shield]: https://img.shields.io/badge/project%20stage-experimental-yellow.svg
[release-shield]: https://img.shields.io/badge/version-v0.4.0-blue.svg
[release]: https://github.com/hassio-addons/app-victoriametrics/tree/v0.4.0
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
