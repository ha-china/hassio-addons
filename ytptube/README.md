# Home Assistant 附加组件：ytptube

yt-dlp 的 Web GUI，支持播放列表和频道 (https://github.com/arabcoders/ytptube)。

_感谢所有给我的仓库点 Star 的人！要给它点 Star，请点击下面的图片，它就会出现在右上角。谢谢！_

[![Stargazers repo roster for @jdeath/homeassistant-addons](https://reporoster.com/stars/jdeath/homeassistant-addons)](https://github.com/jdeath/homeassistant-addons/stargazers)

## 关于

此附加组件基于 [docker 镜像](https://github.com/arabcoders/ytptube)。

# YTPTube 功能。

* 支持多任务下载。
* 随机美观的背景。`可以禁用或更改来源`。
* 可以处理直播流。
* 调度器，用于在指定时间自动将频道或播放列表加入下载队列。
* 根据所选事件向目标发送通知。
* 支持每个链接的 `cli 选项` 和 `cookies`。
* 输入以逗号分隔的多个 URL 进行队列。
* 预设系统，用于重用常用的 yt-dlp 选项。
* 简单的文件浏览器。`默认禁用`。
* 内置视频播放器 **支持外挂字幕**。
* 新的 `POST /api/history` 端点，允许一次发送一个或多个链接。
* 新的 `GET /api/history/add?url=http://..` 端点，允许通过 GET 请求添加单个项目。
* 现代的前端 UI。
* 使用 SQLite 作为数据库后端。
* 支持基本身份验证。
* 支持 curl_cffi，请参阅 [yt-dlp 文档](https://github.com/yt-dlp/yt-dlp?tab=readme-ov-file#impersonation)
* 为非技术用户支持 WebUI 的基础模式，隐藏了大部分正常功能。
* 容器中捆绑的工具：curl-cffi, ffmpeg, ffprobe, aria2, rtmpdump, mkvtoolsnix, mp4box。
* 自动重新排队即将进行的直播流。
* 根据自定义条件应用 `yt-dlp` 选项。
* 自定义浏览器扩展、书签小工具和 iOS 快捷指令，用于将链接发送到 YTPTube 实例。

## 安装

此附加组件的安装有一些额外步骤。

1. [将我的 Hass.io 附加组件仓库][repository] 添加到你的 Hass.io 实例中。
1. 安装此附加组件。
1. 点击 `Save` 按钮保存你的配置。
1. 下载目录默认为 /share/ytptube，可以更改为 share 中的任何位置
1. 启动附加组件。它会失败
1. ssh 登录 Home Assistant 并输入 `chown hassio /addon_configs/2effc9b9_ytptube`
1. 启动附加组件。它会失败
1. 再次 ssh 登录 Home Assistant 并输入 `chown hassio /share/ytptube` 或你更改后的下载目录
1. 启动附加组件
1. 检查附加组件的日志，看看一切是否顺利。
1. 通过 <your-ip>:port 打开 WebUI。Ingress 不起作用
1. 点击 "Rebuild" 会拉取最新的 yt-dlp，即使 YTPTube 没有更新。
## 配置

```
port : 8081 #port you want to run on.
```

WebUI 可以在 `<your-ip>:port` 找到。

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
