# Home Assistant 插件：ArchiveBox

**ArchiveBox 是一个强大、自托管的互联网存档解决方案，用于收集、保存和查看您希望离线保存的网站。**

**您可以逐个添加 URL，或者定期从浏览器书签或历史记录、RSS 源、Pocket/Pinboard 等书签服务导入。有关完整列表，请参阅 <a href="#input-formats">输入格式</a>。**

**它以多种格式保存您提供的 URL 的快照：HTML、PDF、PNG 屏幕截图、WARC 等，开箱即用，自动提取和保存大量内容（文章文本、音频/视频、Git 仓库等）。有关完整列表，请参阅 <a href="#output-formats">输出格式</a>。**

目标是安心入睡，知道您关心的互联网部分将在它下线后自动以耐用、易于访问的格式 [保存数十年](#background--motivation)。

_感谢所有为我仓库点赞的人！要点赞，请点击下面的图片，然后它将显示在右上角。谢谢！_

[![Stargazers repo roster for @jdeath/homeassistant-addons](https://reporoster.com/stars/jdeath/homeassistant-addons)](https://github.com/jdeath/homeassistant-addons/stargazers)

现在数据存储在 /addon_configs/2effc9b9_archivebox

## 关键特性


## 安装

此插件的安装非常简单，与安装任何其他 Hass.io 插件没有区别。

1. 将我的 Hass.io 插件仓库 [repository] 添加到您的 Hass.io 实例。
1. 安装此插件。

## 配置
1. 通过 ssh 登录到 homeassistant
1. 输入 "docker ps" 以找到 archivebox 容器的 ID
1. 输入 "docker exec -it CONTAINERID /bin/bash"
1. 输入 "su archivebox"
1. 输入 "cd /config/"
1. 输入 "archivebox manage createsuperuser" 并输入信息
1. 输入 "archivebox config --set SAVE_ARCHIVE_DOT_ORG=False" 以设置在此处找到的任何额外配置：https://github.com/ArchiveBox/ArchiveBox/wiki/Configuration
1. 访问 http://localhomeassistantip:8000/ 以使用 WebUI。Ingress 不可用
1. 使用 bookmarklet 或浏览器扩展将链接（或所有活动）发送到 archivebox

[repository]: https://github.com/jdeath/homeassistant-addons
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
