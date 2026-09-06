# Home Assistant 社区应用：Jellyfin

[![Release][release-shield]][release] ![项目阶段][project-stage-shield] ![项目维护][maintenance-shield]

[![通过 GitHub Sponsors 支持 Frenck][github-sponsors-shield]][github-sponsors]

[![在 Patreon 上支持 Frenck][patreon-shield]][patreon]

专为电影、剧集和音乐设计的免费软件媒体系统。

## 关于

[Jellyfin][jellyfin] 是一个媒体服务器。只要指向存放您电影、剧集和音乐的文件夹，它就能自动识别所有内容，收集图片和描述信息，然后将其传输给任何您希望观看的设备：浏览器、手机、平板电脑、游戏主机或电视。

它不会向外部设备发送任何信息。无需创建账户，无需订阅，也无需付费版本限制任何功能；您机组装的服务器就是完整的产品。此应用在 Home Assistant 旁边运行此服务器，其文件库位于与其余应用程序共享的同一 `media` 文件夹中。

当设备无法直接播放文件时，会用到英特尔或 AMD 图形芯片进行转码，使用的是 Jellyfin 项目提供的经过修补的 FFmpeg。Home Assistant 自带的 [Jellyfin 集成][integration] 将文件库引入媒体浏览器，并将来自该库的所有设备作为媒体播放器处理。

[github-sponsors-shield]: https://frenck.dev/wp-content/uploads/2019/12/github_sponsor.png
[github-sponsors]: https://github.com/sponsors/frenck
[integration]: https://www.home-assistant.io/integrations/jellyfin/
[jellyfin]: https://jellyfin.org
[maintenance-shield]: https://img.shields.io/maintenance/yes/2026.svg
[patreon-shield]: https://frenck.dev/wp-content/uploads/2019/12/patreon.png
[patreon]: https://www.patreon.com/frenck
[project-stage-shield]: https://img.shields.io/badge/project%20stage-experimental-yellow.svg
[release-shield]: https://img.shields.io/badge/version-v0.1.0-blue.svg
[release]: https://github.com/hassio-addons/app-jellyfin/tree/v0.1.0

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
