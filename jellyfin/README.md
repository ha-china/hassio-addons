# Home Assistant 社区应用：Jellyfin

[![Release][release-shield]][release] ![Project Stage][project-stage-shield] ![Project Maintenance][maintenance-shield]

[![Sponsor Frenck via GitHub Sponsors][github-sponsors-shield]][github-sponsors]

[![Support Frenck on Patreon][patreon-shield]][patreon]

适用于电影、剧集和音乐的免费软件媒体系统。

## 关于

[Jellyfin][jellyfin] 是一个媒体服务器。只需指向存放您的电影、剧集和音乐的文件夹，它就能识别所有内容、收集图片及描述信息，然后将其呈现给您想观看的设备：浏览器、手机、平板电脑、游戏主机或电视。

该应用不会向 Jellyfin 发送任何信息。无需创建账户、订阅或付费档位；您本机上的服务器就是完整的产品。此应用将服务运行在 Home Assistant 旁边，其库存储在与您的其他应用共用同一 `media` 文件夹的位置。

当设备无法像原样播放文件时，转码任务可以交给 Intel 或 AMD 显卡，使用 Jellyfin 项目自带的经过修复的 FFmpeg 工具。Home Assistant 自带的 [Jellyfin 集成][integration] 将库引入媒体浏览器，并将其中的播放器作为每个播放来自该库的设备的媒体播放器。

[github-sponsors-shield]: https://frenck.dev/wp-content/uploads/2019/12/github_sponsor.png
[github-sponsors]: https://github.com/sponsors/frenck
[integration]: https://www.home-assistant.io/integrations/jellyfin/
[jellyfin]: https://jellyfin.org
[maintenance-shield]: https://img.shields.io/maintenance/yes/2026.svg
[patreon-shield]: https://frenck.dev/wp-content/uploads/2019/12/patreon.png
[patreon]: https://www.patreon.com/frenck
[project-stage-shield]: https://img.shields.io/badge/project%20stage-experimental-yellow.svg
[release-shield]: https://img.shields.io/badge/version-v0.4.0-blue.svg
[release]: https://github.com/hassio-addons/app-jellyfin/tree/v0.4.0

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
