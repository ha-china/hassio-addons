# 家庭助手附加组件：ArchiveBox

**ArchiveBox 是一个强大、可自托管的网络存档解决方案，用于收集、保存和查看您希望离线保留的网站。**

您可以逐个向其提供 URL，或定期导入浏览器书签、历史记录、RSS 源、Pocket/Pinboard 书签服务等。详见 <a href="#input-formats">输入格式</a> 获取完整列表。

**它将以多种格式保存您向其提供的 URL 的快照：** HTML、PDF、PNG 截图、WARC 等开箱即用，并自动提取和保存各种内容（文章文本、音视频、Git 仓库等）。详见 <a href="#output-formats">输出格式</a> 获取完整列表。

目标就是能够安心入睡，知道您所关心的互联网部分在关闭后，将以持久且易于访问的格式 <a href="#background--motivation">数十年</a> 内被自动保留。

_感谢所有为我仓库点赞的人！请点击下图进行点赞，它就会出现在右上角。谢谢！_

[![@jdeath/homeassistant-addons 仓库星标人员名单](https://reporoster.com/stars/jdeath/homeassistant-addons)](https://github.com/jdeath/homeassistant-addons/stargazers)

数据现在存储在 `/addon_configs/2effc9b9_archivebox`

## 主要特性

## 安装

该附加组件的安装非常简单，与其他 Hass.io 附加组件的安装方式类似。

1. [将我家庭助手的附加组件仓库][repository] 添加到您的 Hass.io 实例中。
1. 安装此附加组件。

## 配置
1. 通过 ssh 连接到 homeassistant
1. 输入 "docker ps" 以查找 archivebox 的容器 ID
1. 输入 "docker exec -it CONTAINERID /bin/bash"，
1. 输入 "su archivebox"
1. 输入 "cd /config/"
1. 输入 "archivebox manage createsuperuser" 并输入信息
1. 输入 "archivebox config --set SAVE_ARCHIVE_DOT_ORG=False" 以设置在此处找到的任何额外配置：https://github.com/ArchiveBox/ArchiveBox/wiki/Configuration
1. 访问 http://localhomeassistantip:8000/ 使用 Web UI。Ingress 未工作
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
