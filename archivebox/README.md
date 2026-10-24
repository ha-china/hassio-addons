# Home assistant add-on: ArchiveBox

**ArchiveBox 是一个功能强大的去中心化互联网存档解决方案，用于收集、保存并查看您想离线保存的网站。**

**您可以逐个发送 URL，或安排定期导入** 浏览器书签或历史记录、RSS 源、Pocket/Pinboard 等书签服务，以及更多内容。有关完整列表，请参阅 <a href="#input-formats">输入格式</a> 部分。

**它为输入的 URL 保存快照，支持多种格式：** HTML、PDF、PNG 截图、WARC 等开箱即用，并可自动提取和保存多种内容（文章文本、音视频、git 仓库等）。有关完整列表，请参阅 <a href="#output-formats">输出格式</a> 部分。

目标是在互联网停用时，您关心的部分将在可持久化、易访问的格式 **[数十年](#background--motivation)** 内自动得到保存，让您能安枕无忧。

_感谢所有人在我的仓库上点过 star！点击下图星标它，它将显示在右上角。谢谢！_

[![Stargazers repo roster for @jdeath/homeassistant-addons](https://reporoster.com/stars/jdeath/homeassistant-addons)](https://github.com/jdeath/homeassistant-addons/stargazers)

数据现在存储在 /addon_configs/2effc9b9_archivebox
## 主要特性


## 安装

该 add-on 的安装过程非常简单，与安装任何其他 Hass.io add-on 没有区别。

1. [将我的 Hass.io add-on 仓库][repository] 添加到您的 Hass.io 实例中。
2. 安装此 add-on。


## 配置
1. ssh 到 homeassistant
1. 输入 "docker ps" 查找 archivebox 的容器 ID
1. 输入 "docker exec -it CONTAINERID /bin/bash",
1. 输入 "su archivebox"
1. 输入 "cd /config/"
1. 输入 "archivebox manage createsuperuser" 并输入相关信息
1. 输入 "archivebox config --set SAVE_ARCHIVE_DOT_ORG=False" 以设置此处 [找到](#http://localhomeassistantip:8000-) 的任何其他配置项：https://github.com/ArchiveBox/ArchiveBox/wiki/Configuration
1. 访问 http://localhomeassistantip:8000/ 使用 WebUI。Ingress 暂时无法工作
1. 使用书签工具或浏览器扩展将链接（或所有活动）发送到 archivebox


[repository]: https://github.com/jdeath/homeassistant-addons

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
