# Home assistant add-on: ytptube

yt-dlp 的 Web 界面，支持播放列表与频道功能 (https://github.com/arabcoders/ytptube)。

_感谢每位为我仓库点星的朋友！要为我点星，请单击下方图片，它将出现在右上角。谢谢！_

[![Stargazers repo roster for @jdeath/homeassistant-addons](https://reporoster.com/stars/jdeath/homeassistant-addons)](https://github.com/jdeath/homeassistant-addons/stargazers)

## 关于

本插件基于 [docker 镜像](https://github.com/arabcoders/ytptube) 构建。

# YTPTube 功能。

* 支持多下载。
* 随机漂亮的背景。`可以禁用或更改来源`。
* 可处理实时流。
* 调度和队列：在指定时间自动下载频道或播放列表。
* 根据选定事件向目标发送通知。 
* 支持每个链接的`cli 选项` 与 `cookies`。
* 支持由逗号分隔的多个 URL 队列。
* 预设系统：重用常用的 yt-dlp 选项。
* 简单的文件浏览器。 `默认禁用`。
* 内置视频播放器，**支持侧车外部字幕**。
* 新增 `POST /api/history` 端点，允许同时发送一个或多个链接。
* 新增 `GET /api/history/add?url=http://..` 端点，允许通过 GET 请求添加单个项目。
* 现代化的前端界面。
* SQLite 作为数据库后端。
* 支持基本认证。
* 支持 curl_cffi，详见 [yt-dlp 文档](https://github.com/yt-dlp/yt-dlp?tab=readme-ov-file#impersonation)。
* 支持普通模式，为技术人员提供 WebUI，隐藏大多数常规功能。
* 容器内捆绑工具：curl-cffi, ffmpeg, ffprobe, aria2, rtmpdump, mkvtoolsnix, mp4box。
* 自动处理即将到来的实时流重新入队。
* 根据自定义条件应用 `yt-dlp` 选项。
* 自定义浏览器扩展、书签快捷方式、iOS 快捷指令，将链接发送到 YTPTube 实例。

## 安装

本插件安装需要额外几步。

1. [将我的 Hass.io 插件仓库][repository] 添加到您的 Hass.io 实例。
1. 安装此插件。
1. 单击 `保存` 按钮以存储配置。
1. 下载目录默认为 /share/ytptube，可更改为 share 中的任意位置。
1. 启动插件。它将失败。
1. ssh 进入 home assistant 并输入 `chown hassio /addon_configs/2effc9b9_ytptube`
1. 再次启动插件。它将失败。
1. 再次 ssh 进入 home assistant 并输入 `chown hassio /share/ytptube` 或您更改的下载目录。
1. 启动插件。
1. 检查插件日志，确认一切正常。
1. 通过 <your-ip>:port 打开 WebUI。Ingress 不起作用。
1. 单击"Rebuild"，即使 YTPTube 没有更新，也会拉取最新的 yt-dlp。
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

<img src="https://gitee.com/desmond_GT/hassio-addons/raw/main/WeChat_QRCode.png" width="50%" /> 📲

## ☕ 赞助支持

如果您觉得我花费大量时间维护这个库对您有帮助，欢迎请我喝杯奶茶，您的支持将是我持续改进的动力！

<div style="display: flex; justify-content: space-between;">
  <img src="https://gitee.com/desmond_GT/hassio-addons/raw/main/1_readme/Ali_Pay.jpg" height="350px" />
  <img src="https://gitee.com/desmond_GT/hassio-addons/raw/main/1_readme/WeChat_Pay.jpg" height="350px" />
</div> 💖

感谢您的支持与鼓励！
