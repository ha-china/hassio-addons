# Home assistant 插件：ArchiveBox

**ArchiveBox 是一个功能强大的自有托管互联网存档解决方案，用于收集、保存和查看您想永久保存的离线网站。**

**您可以逐个添加 URL，或定期导入**浏览器书签或历史记录、RSS 源、Pocket/Pinboard 等书签服务，以及更多内容。详见 <a href="#input-formats">输入格式</a> 获取完整列表。

**它以多种格式保存您提供的 URL 的快照：** HTML、PDF、PNG 截图、WARC 等开箱即用，并自动提取和保存广泛的内容（文章文本、音视频、git 仓库等）。详见 <a href="#output-formats">输出格式</a> 获取完整列表。

目标是在您关注的互联网部分随时消失后数 [十年](#background--motivation)，以耐用且易于访问的格式自动保存它们时能安然入睡。

_谢谢大家为我仓库点赞！点击下方图片即可点赞，它将出现在右上角。谢谢！_

[![Stargazers repo roster for @jdeath/homeassistant-addons](https://reporoster.com/stars/jdeath/homeassistant-addons)](https://github.com/jdeath/homeassistant-addons/stargazers)

现在数据存储路径为 /addon_configs/2effc9b9_archivebox

## 核心特性

## 安装

该插件的安装过程非常简单，与其他 Hass.io 插件的安装没有太大区别。

1. 将我的 Hass.io 插件仓库 [repository] 添加到您的 Hass.io 实例中。
1. 安装此插件。

## 配置
1. 通过 ssh 进入 homeassistant
1. 输入 "docker ps" 查找 archivebox 的容器 ID
1. 输入 "docker exec -it CONTAINERID /bin/bash",
1. 输入 "su archivebox"
1. 输入 "cd /config/"
1. 输入 "archivebox manage createsuperuser" 并输入信息
1. 输入 "archivebox config --set SAVE_ARCHIVE_DOT_ORG=False" 以设置以下位置查找的任何额外配置配置：https://github.com/ArchiveBox/ArchiveBox/wiki/Configuration
1. 访问 http://localhomeassistantip:8000/ 使用 Web UI。Ingress 目前无法正常工作
1. 使用书签链接工具或浏览器扩展将链接（或所有活动）发送到 archivebox


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
