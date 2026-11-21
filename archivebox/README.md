# Home assistant 附加组件：ArchiveBox

**ArchiveBox 是一个强大的、自我托管的互联网存档解决方案，用于收集、保存和查看您希望离线保存的网站。**

您可以一次性输入 URL，也可以定期导入浏览器书签或历史记录、RSS 新闻源、Pocket/Pinboard 书签服务等更多信息。有关完整列表，请见 <a href="#input-formats">输入格式</a>。

**它以多种格式保存您提供的 URL 的快照：** HTML、PDF、PNG 截图、WARC，并提供更多开箱即用的功能，自动提取和保存各种内容（文章文本、音视频、Git 仓库等）。有关完整列表，请见 <a href="#output-formats">输出格式</a>。

目标是在您关心的互联网部分永久停用后，能够安心入睡，因为它将以持久且易于访问的格式自动保存数十年 [时间](#background--motivation)。

_感谢所有关注我的仓库的人！要关注它，请点击下面的图片，它将显示在右上角。感谢大家！_

[![关注者们仓库名册 for @jdeath/homeassistant-addons](https://reporoster.com/stars/jdeath/homeassistant-addons)](https://github.com/jdeath/homeassistant-addons/stargazers)

现在数据存储路径为 /addon_configs/2effc9b9_archivebox

## 关键特性

## 安装

此附加组件的安装非常直接，与其他 Hass.io 附加组件的安装方式没有区别。

1. [添加我的 Hass.io 附加组件仓库][repository] 到您的 Hass.io 实例。
1. 安装此附加组件。

## 配置
1. 通过 ssh 连接进入 homeassistant
1. 输入 "docker ps" 以查找 archivebox 的容器 ID
1. 输入 "docker exec -it CONTAINERID /bin/bash",
1. 输入 "su archivebox"
1. 输入 "cd /config/"
1. 输入 "archivebox manage createsuperuser" 并输入相关信息
1. 输入 "archivebox config --set SAVE_ARCHIVE_DOT_ORG=False" 以设置此处提到的任何额外配置，链接如下：https://github.com/ArchiveBox/ArchiveBox/wiki/Configuration
1. 前往 http://localhomeassistantip:8000/ 以使用 Web UI。Ingress 功能尚未工作
1. 使用书签插件或浏览器扩展将链接（或所有活动）发送到 archivebox


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
