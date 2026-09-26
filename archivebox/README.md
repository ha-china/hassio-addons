# Home assistant 插件：ArchiveBox

**ArchiveBox 是一个强大的、自托管的网络归档解决方案，用于收集、保存和查看您希望离线保留的网站。**

**您可以手动逐个输入 URL，或通过浏览器书签、历史记录、RSS 源以及 Pocket/Pinboard 等书签服务定期自动导入数据。** 查看<a href="#input-formats">输入格式</a>以获取完整列表。

**该工具会自动保存您输入的 URL 的多格式快照：** 包括 HTML、PDF、PNG 截图、WARC 等；同时会自动提取并保存各种内容（如文章文本、音视频、Git 仓库等）。查看<a href="#output-formats">输出格式</a>以获取完整列表。

目标是让您无忧无虑地知道，您关心的互联网内容将以持久且易于访问的格式自动保存，即使该网站关闭，也能在接下来的<span style="color:#0072b5; font-size:0.9em;">数十年</span>后保留<span id="background--motivation">#background--motivation</span>。

_感谢所有订阅我仓库的朋友们！要订阅它，请点击下图，它将显示在右上角。谢谢！_

[![Stargazers repo roster for @jdeath/homeassistant-addons](https://reporoster.com/stars/jdeath/homeassistant-addons)](https://github.com/jdeath/homeassistant-addons/stargazers)

数据现在存储在 /addon_configs/2effc9b9_archivebox 目录中。

## 主要功能

## 安装

该插件的安装过程非常 straightforward（简单直接），与安装其他 Hass.io 插件没有区别。

1. 将我的 [Hass.io 插件仓库][repository] 添加到您的 Hass.io 实例中。
1. 安装此插件。

## 配置

1. 连接到 homeassistant
1. 输入 "docker ps" 以查找 archivebox 的容器 ID
1. 输入 "docker exec -it CONTAINERID /bin/bash"，
1. 输入 "su archivebox"
1. 输入 "cd /config/"
1. 输入 "archivebox manage createsuperuser" 并按下回车键，输入相关信息
1. 输入 "archivebox config --set SAVE_ARCHIVE_DOT_ORG=False" 以设置此处查找到的任何额外配置，参考网址：https://github.com/ArchiveBox/ArchiveBox/wiki/Configuration
1. 访问 http://localhomeassistantip:8000/ 使用 Web 界面。（Ingress 当前无法正常工作）
1. 使用书签按钮（bookmarklet）或浏览器扩展程序将链接（或所有活动）发送到 archivebox

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
