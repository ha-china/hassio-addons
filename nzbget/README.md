# 社区应用：NZBGet

[![Release][release-shield]][release] ![项目阶段][project-stage-shield] ![维护状态][maintenance-shield]

[![通过 GitHub Sponsors 赞助 Frenck][github-sponsors-shield]][github-sponsors]

[![在 Patreon 上支持 Frenck][patreon-shield]][patreon]

由 C++ 编写的高效 Usenet 下载器。

## 关于

[NZBGet][nzbget] 是一个以尽可能少资源完成工作为核心的 Usenet 下载器。它最初是为硬件资源极为有限的设备编写的，并且能在处理任何更大规模下载时，让其余部分机器照常运行而不受干扰。

只需传入一个 NZB 文件，即可完成全部工作：它会获取文章，用附带的 par2 文件校验并修复损坏的数据，解压压缩包，然后将结果传递给后续任何你想要运行的服务。分类决定了文件的存放位置，RSS feeds 会自动拉取新条目，而所有其他功能都提供 JSON-RPC API 支持。

下载的文件会存放在 `media` 文件夹中，这样 Home Assistant 的媒体浏览器以及其他将其映射的应用程序都能访问到这些文件。Home Assistant 还提供了 [NZBGet 集成][integration]，因此你可以在仪表板上查看所有速度和队列大小，并通过服务从自动化中暂停、恢复或限制下载速度。

[github-sponsors-shield]: https://frenck.dev/wp-content/uploads/2019/12/github_sponsor.png
[github-sponsors]: https://github.com/sponsors/frenck
[integration]: https://www.home-assistant.io/integrations/nzbget/
[maintenance-shield]: https://img.shields.io/maintenance/yes/2026.svg
[nzbget]: https://nzbget.com/
[patreon-shield]: https://frenck.dev/wp-content/uploads/2019/12/patreon.png
[patreon]: https://www.patreon.com/frenck
[project-stage-shield]: https://img.shields.io/badge/project%20stage-experimental-yellow.svg
[release-shield]: https://img.shields.io/badge/version-v0.1.0-blue.svg
[release]: https://github.com/hassio-addons/app-nzbget/tree/v0.1.0

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
