# Home assistant 插件：ytptube

带有播放列表和频道支持的 yt-dlp Web GUI (https://github.com/arabcoders/ytptube)。

_感谢所有为我项目点星的朋友！要添加该项，点击下方图片即可，它将显示在右上角。感谢！_

[![Stargazers repo roster for @jdeath/homeassistant-addons](https://reporoster.com/stars/jdeath/homeassistant-addons)](https://github.com/jdeath/homeassistant-addons/stargazers)

## 概述

此插件基于 [docker 镜像](https://github.com/arabcoders/ytptube)。

# YTPTube 特性

* 支持多下载。
* 随机美观的背景。`可禁用或更改源`。
* 可处理直播流。
* 计划任务以在指定的时间自动下载频道或播放列表。
* 基于选定事件向目标发送通知。
* 支持每链接的 `cli 选项` 和 `Cookies`。
* 支持用逗号分隔的多条 URL 队列。
* 预设系统以重用常用的 yt-dlp 选项。
* 简易文件浏览器。`默认禁用`。
* 内置视频播放器，**支持侧栏外部字幕**。
* 新增 `POST /api/history` 端点，允许同时发送一个或多个链接。
* 新增 `GET /api/history/add?url=http://..` 端点，允许通过 GET 请求添加单个项目。
* 现代化前端 UI。
* 使用 SQLite 作为数据库后端。
* 支持基本认证。
* 支持 curl_cffi，详见 [yt-dlp 文档](https://github.com/yt-dlp/yt-dlp?tab=readme-ov-file#impersonation)。
* 为Web用户面提供基本模式，该模式隐藏了大多数普通功能。
* 容器捆绑工具：curl-cffi, ffmpeg, ffprobe, aria2, rtmpdump, mkvtoolsnix, mp4box。
* 自动重排即将发生的直播流。
* 根据自定义条件应用`yt-dlp` 选项。
* 自定义浏览器扩展、书签和 iOS 快捷指令，以将链接发送到 YTPTube 实例。

## 安装

此插件的安装有几个额外的步骤。

1. [将我的 Hass.io 插件库][repository] 添加到您的 Hass.io 实例。
1. 安装此插件。
1. 点击 `保存` 按钮以存储配置。
1. 下载目录默认为 /share/ytptube，可更改为 anything in share
1. 启动插件。它会失败。
1. ssh 进入 home assistant 并输入 `chown hassio /addon_configs/2effc9b9_ytptube`
1. 再次启动插件。它会失败。
1. 再次 ssh 进入 home assistant 并输入 `chown hassio /share/ytptube` 或您更改的下载目录。
1. 启动插件。
1. 检查插件日志，查看一切是否顺利。
1. 通过 <your-ip>:port 打开 WebUI。Ingress 不起作用。
1. 点击 "Rebuild" 将拉取最新的 yt-dlp，即使 YTPTube 也没有更新。
## 配置

```
port : 8081 #您想运行的端口。
```

Webui 可在 <your-ip>:port 找到。

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
