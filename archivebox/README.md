# Home assistant 插件：ArchiveBox

**ArchiveBox 是一个强大、可自行托管的互联网存档解决方案，用于收集、保存并查看您希望离线保留的网站。**

**您可以逐个推送 URL，或定期导入** 浏览器书签或历史记录、RSS 源以及其他类似 Pocket/Pinboard 的书签服务。有关完整列表，请参阅 `<a href="#input-formats">输入格式</a>`。

**它会对您推送的 URL 以多种格式保存快照**：HTML、PDF、PNG 截图、WARC 等，开箱即用，并自动提取和保存各种内容（文章文本、音视频、Git 仓库等）。有关完整列表，请参阅 `<a href="#output-formats">输出格式</a>`。

目标是能够安心入睡，知道您关心的互联网部分会在它下线后数以**十年**的时间（<a href="#background--motivation">见背景与动机</a>）以后，自动以耐久且易于访问的格式得以保存。

_感谢所有为我仓库点亮星星的人！要点亮它，请点击下图，它将显示在右上角。谢谢！_

[![Stargazers repo roster for @jdeath/homeassistant-addons](https://reporoster.com/stars/jdeath/homeassistant-addons)](https://github.com/jdeath/homeassistant-addons/stargazers)

Now stores data in /addon_configs/2effc9b9_archivebox

## 关键特性


## 安装

该插件的安装非常直接，与其他 Hass.io 插件的安装方式并无二致。

1. [添加我的 Hass.io 插件仓库][repository] 到您的 Hass.io 实例中。
1. 安装此插件。


## 配置
1. 通过 ssh 进入 homeassistant
2. 输入 "docker ps" 以查找 archivebox 的容器 ID
3. 输入 "docker exec -it CONTAINERID /bin/bash"，
4. 输入 "su archivebox"
5. 输入 "cd /config/"
6. 输入 "archivebox manage createsuperuser" 并输入相关信息
7. 输入 "archivebox config --set SAVE_ARCHIVE_DOT_ORG=False" 以设置任何额外配置，详见此处：https://github.com/ArchiveBox/ArchiveBox/wiki/Configuration
8. 访问 http://localhomeassistantip:8000/ 使用网页界面。Ingress 目前无法工作
9. 使用书签工具或浏览器扩展发送链接（或所有活动）到 archivebox


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
