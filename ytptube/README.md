# Home assistant 附加组件：ytptube

用于 yt-dlp 的 Web GUI，支持队列与频道 (https://github.com/arabcoders/ytptube)。

_感谢所有为我仓库投星的人！要投星请点击下方的图片，这样它就会出现在右上角。感谢！_

[![Stargazers repo roster for @jdeath/homeassistant-addons](https://reporoster.com/stars/jdeath/homeassistant-addons)](https://github.com/jdeath/homeassistant-addons/stargazers)

## 简介

此附加组件基于 [docker 镜像](https://github.com/arabcoders/ytptube)。

# YTPTube 功能特性.

* 支持多下载。
* 随机美丽的背景。`可以禁用或更改来源`。
* 可以处理直播流。
* 计划任务系统：可在指定时间自动下载频道或队列。
* 基于选中事件将通知发送给目标。
* 支持每个链接的 `cli 选项` & `cookies`。
* 支持用逗号分隔的多个 URL 排队。
* 预设系统以重用常用的 yt-dlp 选项。
* 简单文件浏览器。`默认为禁用`。
* 内置视频播放器，**支持侧边栏外部字幕**。
* 新增 `POST /api/history` 端点，允许同时发送一个或多个链接。
* 新增 `GET /api/history/add?url=http://..` 端点，允许通过 GET 请求添加单个项目。
* 现代化的前端界面。
* 使用 SQLite 作为数据库后端。
* 支持基本身份验证。
* 支持 curl_cffi，详见 [yt-dlp 文档](https://github.com/yt-dlp/yt-dlp?tab=readme-ov-file#impersonation)。
* 为非技术人员提供 WebUI 基本模式，该模式隐藏大多数常规功能。
* 容器内内置工具：curl-cffi, ffmpeg, ffprobe, aria2, rtmpdump, mkvtoolsnix, mp4box。
* 自动重新排队即将到来的直播流。
* 可根据自定义条件应用 `yt-dlp` 选项。
* 自定义浏览器扩展、书签工具和 iOS 快捷指令，用于向 YTPTube 实例发送链接。

## 安装

此附加组件的安装有额外的步骤。

1. [将我的 Hass.io 附加组件仓库][repository] 添加到你的 Hass.io 实例。
1. 安装此附加组件。
1. 点击 `保存` 按钮以存储配置文件。
1. 下载目录默认为 /share/ytptube，可以更改为 share 中的任何位置。
1. 启动附加组件。它会失败。
1. ssh 进入 home assistant 并输入 `chown hassio /addon_configs/2effc9b9_ytptube`。
1. 再次启动附加组件。它会失败。
1. ssh 再次进入 home assistant 并输入 `chown hassio /share/ytptube` 或你更改的下载目录。
1. 启动附加组件。
1. 检查附加组件的日志以确认一切正常。
1. 通过 <your-ip>:port 打开 WebUI。Ingress 不起作用。
1. 点击 "Rebuild" 会拉取最新的 yt-dlp，即使 YTPTube 本身没有更新。
## 配置

```
port : 8081 # 要运行的端口。
```

Webui 位于 `<your-ip>:port`。

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
