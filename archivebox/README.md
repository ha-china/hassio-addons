# Home assistant 附加组件：ArchiveBox

**ArchiveBox 是一个功能强大的自托管互联网归档解决方案，可收集、保存和查看您想离线保留的网站。**

**您可以逐个将其输入 URLs，或定期从书签或历史记录（如 RSS -feed ）、书签服务（如 Pocket/Pinboard）等导入。** 详细列表请参阅 <a href="#input-formats">输入格式</a>。

**它将以多种格式保存您提供的 URL 的快照：** HTML、PDF、PNG 截图、WARC 等，开箱即用，并自动提取和保存大量内容（文章文本、音视频、Git 仓库等）。有关完整列表，请参阅 <a href="#output-formats">输出格式</a>。

目标是静心地知道您关心的互联网部分将在其关闭后数十年被以持久且易于访问的格式自动保留 [几十年](#background--motivation)。

_感谢所有为我仓库点赞的人！请点击下方图片点赞，它将显示在右上角。谢谢！_

[![维护者仓库成员名单 for @jdeath/homeassistant-addons](https://reporoster.com/stars/jdeath/homeassistant-addons)](https://github.com/jdeath/homeassistant-addons/stargazers)

数据存储路径：/addon_configs/2effc9b9_archivebox
## 关键特性


## 安装

安装此附加组件非常简单，与其他任何 Hass.io 附加组件的安装方式并无不同。

1.  [添加我的 Hass.io 附加组件仓库][repository] 到您的 Hass.io 实例。
1.  安装此附加组件。


## 配置
1.  使用 ssh 连接到 homeassistant
1.  输入 "docker ps" 查找 archivebox 的容器 ID
1.  输入 "docker exec -it CONTAINERID /bin/bash"，
1.  输入 "su archivebox"
1.  输入 "cd /config/"
1.  输入 "archivebox manage createsuperuser" 并输入信息
1.  输入 "archivebox config --set SAVE_ARCHIVE_DOT_ORG=False" 以设置任何额外的配置（可选）：https://github.com/ArchiveBox/ArchiveBox/wiki/Configuration
1.  前往 http://localhomeassistantip:8000/ 使用 Web 界面。（Ingress 目前未启用）
1.  使用书签工具或浏览器扩展将链接（或所有活动）发送到 archivebox


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
