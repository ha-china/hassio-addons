# Home Assistant 附加组件：ArchiveBox

**ArchiveBox 是一个强大的、可自托管的互联网归档解决方案，用于收集、保存和查看您想要离线保存的网站。**

**您可以逐个推送 URL，或定时导入**浏览器书签或历史记录、RSS 类源、像 Pocket/Pinboard 这样的书签服务等。查看 <a href="#输入格式">输入格式</a> 获取完整列表。

**它以几种格式保存您推送的 URL 的快照：** HTML、PDF、PNG 截图、WARC 等，开箱即用，并自动提取和保留各种内容（文章文本、音视频、Git 仓库等）。查看 <a href="#输出格式">输出格式</a> 获取完整列表。

目标是在您关心的互联网部分被切断后数 decade（数十载），它们能以持久且易于访问的格式被自动保存——让您安睡。

_感谢大家给我的仓库点赞！若要点赞，请点击下图，它将被置于右上角。谢谢！_

[![@jdeath/homeassistant-addons 仓库的 Star 持有人列表](https://reporoster.com/stars/jdeath/homeassistant-addons)](https://github.com/jdeath/homeassistant-addons/stargazers)

现在数据存储于 /addon_configs/2effc9b9_archivebox 
## 主要功能


## 安装

该附加组件的安装非常简单，与其他任何 Hass.io 附加组件的安装没有区别。

1. [将我的 Hass.io 附加组件仓库][repository] 添加到您的 Hass.io 实例中。
1. 安装此附加组件。


## 配置
1. 登录 homeassistant
1. 输入 "docker ps" 查找 archivebox 的容器 ID
1. 输入 "docker exec -it CONTAINERID /bin/bash",
1. 输入 "su archivebox"
1. 输入 "cd /config/"
1. 输入 "archivebox manage createsuperuser" 并输入相关信息
1. 输入 "archivebox config --set SAVE_ARCHIVE_DOT_ORG=False" 以设置此处找到的任何额外配置：https://github.com/ArchiveBox/ArchiveBox/wiki/Configuration
1. 访问 http://localhomeassistantip:8000/ 使用 Web 界面。Ingress 当前不工作
1. 使用书签插件或浏览器扩展将链接（或所有活动）发送到 archivebox


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
