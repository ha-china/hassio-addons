# Home assistant 附加组件：ArchiveBox

**ArchiveBox 是一个功能强大的托管互联网归档解决方案，用于收集、保存并查看您需要离线保留的网站。**

**您可以逐个输入 URL，或者定期从浏览器收藏夹或历史记录、RSS 源、Pocket/Pinboard 等书签服务中导入数据。** 有关完整列表，请参阅 <a href="#input-formats">输入格式</a>。

**它将保存您提供的 URL 的快照，并将其以多种格式输出：** HTML、PDF、PNG 截图、WARC 等，并自动提取和保存大量内容（文章文本、音视频、Git 仓库等）。有关完整列表，请参阅 <a href="#output-formats">输出格式</a>。

目标是安心沉睡，因为您关心的互联网部分将在它停服后 [数十年](#background--motivation) 被自动保存在持久且易于访问的格式中。

_感谢所有人给我的仓库点亮 Star！要点亮它，请点击下图，然后它就会出现在右上角。谢谢 !_

[![Stargazers repo roster for @jdeath/homeassistant-addons](https://reporoster.com/stars/jdeath/homeassistant-addons)](https://github.com/jdeath/homeassistant-addons/stargazers)

现在数据存储位于 /addon_configs/2effc9b9_archivebox 目录。

## 关键特性

## 安装

此附加组件的安装非常 straightforward，与安装任何其他 Hass.io 附加组件并无不同。

1. [添加我的 Hass.io 附加组件仓库][repository] 到您的 Hass.io 实例。
1. 安装此附加组件。

## 配置
1. ssh 进入 homeassistant
1. 输入 "docker ps" 以查找 archivebox 的容器 ID
1. 输入 "docker exec -it CONTAINERID /bin/bash",
1. 输入 "su archivebox"
1. 输入 "cd /config/"
1. 输入 "archivebox manage createsuperuser" 并填入信息
1. 输入 "archivebox config --set SAVE_ARCHIVE_DOT_ORG=False" 以设置任何在此处找到的额外配置：https://github.com/ArchiveBox/ArchiveBox/wiki/Configuration
1. 访问 http://localhomeassistantip:8000/ 使用 Web 界面。（Ingress 当前未正常工作）
1. 使用书签工具 (bookmarklet) 或浏览器插件将链接（或所有活动）发送到 archivebox

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
