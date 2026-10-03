# Home Assistant 社区应用：文件管理器

[![释放][release-shield]][release] ![项目阶段][project-stage-shield] ![项目维护状态][maintenance-shield]

[![通过 GitHub Sponsors 赞助 Frenck][github-sponsors-shield]][github-sponsors]

[![在 Patreon 支持 Frenck][patreon-shield]][patreon]

浏览、编辑、上传并整理您的 Home Assistant 安装文件。

## 简介

这是一个为 Home Assistant 安装设计的文件管理器，集成在侧边栏面板中。它会显示 Home Assistant 存放文件的目录，并允许您浏览这些目录、将它们上传、移动、解压归档、就地编辑 YAML 文件、预览图片或 PDF，以及在所有目录中进行搜索。

其底层是 [FileBrowser Quantum][filebrowser]，这是一个现代化的网络文件管理器，内置了编辑器、预览功能、搜索索引和 WebDAV 支持。该应用将 Home Assistant 的目录设定为其数据源：包括配置目录、媒体目录、共享目录、备份目录、证书目录、应用程序及其配置。

从侧边栏打开它后，Home Assistant 会进行身份验证，并为您创建一个独立账户。如果您公开发布其端口，它不仅可用于本地管理，同时也作为 WebDAV 共享提供，因此您可以在计算机上将目标目录作为网络驱动器挂载。

[filebrowser]: https://filebrowserquantum.com/
[github-sponsors-shield]: https://frenck.dev/wp-content/uploads/2019/12/github_sponsor.png
[github-sponsors]: https://github.com/sponsors/frenck
[maintenance-shield]: https://img.shields.io/maintenance/yes/2026.svg
[patreon-shield]: https://frenck.dev/wp-content/uploads/2019/12/patreon.png
[patreon]: https://www.patreon.com/frenck
[project-stage-shield]: https://img.shields.io/badge/project%20stage-experimental-yellow.svg
[release-shield]: https://img.shields.io/badge/version-v0.1.0-blue.svg
[release]: https://github.com/hassio-addons/app-file-explorer/tree/v0.1.0

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
