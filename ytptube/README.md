# Home Assistant 附加组件：ytptube

带播放列表和频道支持的 yt-dlp Web 界面 (https://github.com/arabcoders/ytptube)。

_感谢所有为我仓库星标的人们！想要标星请点击下方图片，之后它将显示在右上角。感谢！_

[![Stargazers repo roster for @jdeath/homeassistant-addons](https://reporoster.com/stars/jdeath/homeassistant-addons)](https://github.com/jdeath/homeassistant-addons/stargazers)

## 关于

此附加组件基于 [docker 镜像](https://github.com/arabcoders/ytptube)。

# YTPTube 功能特点

* 支持多下载。
* 随机漂亮背景。`可禁用或更改源`。
* 可处理直播流。
* 计划任务可队列频道或播放列表，在指定时间自动下载。
* 根据选定事件向目标发送通知。
* 支持每链接 `命令行选项` 和` .cookies`。
* 队列多个用逗号分隔的 URL。
* 预设系统，用于重新使用常用的 yt-dlp 选项。
* 简易文件浏览器。`默认禁用`。
* 内置视频播放器，**支持侧边栏外部字幕**。
* 新增 `POST /api/history` 端点，允许同时发送一个或多个链接。
* 新增 `GET /api/history/add?url=http://..` 端点，允许通过 GET 请求添加单个项目。
* 现代化前界面 UI。
* SQLite 作为数据库后端。
* 支持基本认证。
* 支持 curl_cffi，详见 [yt-dlp 文档](https://github.com/yt-dlp/yt-dlp?tab=readme-ov-file#impersonation)。
* 为非技术用户提供 WebUI 基本模式，该方法隐藏大多数普通功能。
* 容器捆绑工具：curl-cffi, ffmpeg, ffprobe, aria2, rtmpdump, mkvtoolsnix, mp4box。
* 自动即将到来的直播流重新队列。
* 根据自定义条件应用 `yt-dlp` 选项。
* 自定义浏览器扩展程序、书签链接和 iOS 快捷方式，将链接发送到 YTPTube 实例。

## 安装

此附加组件的安装有几个额外步骤。

1. 将 [我的 Hass.io 附加组件仓库][repository] 添加到您的 Hass.io 实例。
1. 安装此附加组件。
1. 单击 `保存` 按钮以存储您的配置。
1. 下载目录默认为 /share/ytptube，可更改为 share 中的任何位置。
1. 启动附加组件。它将失败。
1. ssh 进入 Home Assistant 并输入 `chown hassio /addon_configs/2effc9b9_ytptube`
1. 再次启动附加组件。它将失败。
1. 再次 ssh 进入 HomeAssistant 并输入 `chown hassio /share/ytptube` 或您更改的下载目录。
1. 启动附加组件
1. 查看附加组件日志以确定一切是否顺利。
1. 通过 <your-ip>:port 打开 WebUI。Ingress 不工作。
1. 点击 "重建" 将拉取最新的 yt-dlp，即使 YTPTube 没有更新。
## 配置

```
port : 8081 #要运行的端口。
```

Webui 可在 `<your-ip>:port` 找到。

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
