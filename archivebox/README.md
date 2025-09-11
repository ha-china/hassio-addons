# 家庭助理插件：ArchiveBox

**ArchiveBox 是一个强大的自托管互联网归档解决方案，用于收集、保存和查看您希望离线保留的网站。**

**您可以逐个提供 URL，或定期从浏览器书签或历史记录、RSS 等 Feed、书签服务如 Pocket/Pinboard 等进行导入。查看<a href="#input-formats">输入格式</a>以获取完整列表。**

**它以多种格式保存您提供的 URL 快照：**HTML、PDF、PNG 截图、WARC 等开箱即用，并自动提取和保存各种内容（文章文本、音频/视频、git 仓库等）。查看<a href="#output-formats">输出格式</a>以获取完整列表。

目标是让您安心入睡，知道您关心的互联网部分将在关闭后以耐用、易于访问的格式[自动保存数十年](#background--motivation)。

_感谢每一个给我仓库点星的人！要点星，请单击下面的图像，然后它将在右上角。谢谢！_

[![Stargazers repo roster for @jdeath/homeassistant-addons](https://reporoster.com/stars/jdeath/homeassistant-addons)](https://github.com/jdeath/homeassistant-addons/stargazers)

现在将数据存储在 /addon_configs/2effc9b9_archivebox
## 主要特点


## 安装

此插件的安装非常简单，与安装其他 Hass.io 插件没有区别。

1. [将我的 Hass.io 插件库][repository]添加到您的 Hass.io 实例。
1. 安装此插件。


## 配置
1. SSH 登录到 homeassistant
1. 输入“docker ps”以查找 archivebox 的容器 ID
1. 输入“docker exec -it CONTAINERID /bin/bash”
1. 输入“su archivebox”
1. 输入“cd /config/”
1. 输入“archivebox manage createsuperuser”并输入信息
1. 输入“archivebox config --set SAVE_ARCHIVE_DOT_ORG=False”以设置此处的任何额外配置：https://github.com/ArchiveBox/ArchiveBox/wiki/Configuration
1. 转到 http://localhomeassistantip:8000/ 使用 webUI。Ingress 无法使用
1. 使用书签工具或浏览器扩展将链接（或所有活动）发送到 archivebox


[repository]: https://github.com/jdeath/homeassistant-addons