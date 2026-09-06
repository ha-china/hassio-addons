# Home assistant 附加组件：ArchiveBox

**ArchiveBox 是一个功能强大的、自托管的互联网归档解决方案，用于收集、保存和查看您希望离线保留的网站。**

**您可以逐个发送 URL，或设置定期导入**来自浏览器书签或浏览历史、RSS 订阅、Pocket/Pinboard 等书签服务的内容。详见 [输入格式](#input-formats) 获取完整列表。

**它将您发送的 URL 保存为几种格式的快照：** HTML、PDF、PNG 截图、WARC 等开箱即用，并自动提取和保存各种内容（文章文本、音视频、git 仓库等）。详见 [输出格式](#output-formats) 获取完整列表。

目标是能够安心睡眠，知道您关注的互联网部分在断开连接后，将以持久化、易于访问的格式 [数十年](#background--motivation) 自动得到保存。

_感谢所有为我仓库点赞的人！要点赞请点击下方的图片，然后点击 사항을 추가 (添加) 即可位于右上角。谢谢！_

[![Stargazers repo roster for @jdeath/homeassistant-addons](https://reporoster.com/stars/jdeath/homeassistant-addons)](https://github.com/jdeath/homeassistant-addons/stargazers)

现在数据存储于 /addon_configs/2effc9b9_archivebox
## 主要特性

## 安装

该附加组件的安装非常简单，与其他任何 Hass.io 附加组件的安装方式没有区别。

1. [将我的 Hass.io 附加组件仓库][repository] 添加到您的 Hass.io 实例中。
1. 安装此附加组件。

## 配置
1. ssh 进入 homeassistant
1. 输入 "docker ps" 以查找 archivebox 的容器 ID。
1. 输入 "docker exec -it CONTAINERID /bin/bash"，
1. 输入 "su archivebox"
1. 输入 "cd /config/"
1. 输入 "archivebox manage createsuperuser" 并输入信息。
1. 输入 "archivebox config --set SAVE_ARCHIVE_DOT_ORG=False" 以设置更多配置项，查找于这里：https://github.com/ArchiveBox/ArchiveBox/wiki/Configuration
1. 访问 http://localhomeassistantip:8000/ 使用 Web UI。(Ingress 当前未正常工作)
1. 使用书签管理器或小工具（bookmarklet）或浏览器扩展将链接（或所有活动）发送到 archivebox。


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
