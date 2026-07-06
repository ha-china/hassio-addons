# Home Assistant 插件：ytptube

yt-dlp 的网页界面，支持播放列表和频道（https://github.com/arabcoders/ytptube）。

_感谢所有为我的仓库点星的人！要点星，请点击下面的图片，然后它就会显示在右上角。谢谢！_

![@jdeath/homeassistant-addons 的 Starred 仓库名单](https://reporoster.com/stars/jdeath/homeassistant-addons)(https://github.com/jdeath/homeassistant-addons/stargazers)

## 关于

此插件基于 [docker 镜像](https://github.com/arabcoders/ytptube)。

# YTPTube 功能。

* 支持多下载。
* 随机美丽的背景。`可以禁用或更改源`。
* 可以处理直播流。
* 调度器可以将频道或播放列表排队在指定时间自动下载。
* 根据所选事件向目标发送通知。 
* 支持每个链接的 `cli 选项` & `cookies`。
* 使用逗号分隔多个 URL。
* 预设系统以重用常用 yt-dlp 选项。
* 简单的文件浏览器。`默认禁用`。
* 内置视频播放器 **支持侧载外部字幕**。
* 新增 `POST /api/history` 端点，允许同时发送一个或多个链接。
* 新增 `GET /api/history/add?url=http://..` 端点，允许通过 GET 请求添加单个项目。
* 现代前端 UI。
* SQLite 作为数据库后端。
* 基本身份验证支持。
* 支持 curl_cffi，见 [yt-dlp 文档](https://github.com/yt-dlp/yt-dlp?tab=readme-ov-file#impersonation)。
* 支持基本模式 WebUI，为非技术用户隐藏大部分正常功能。
* 容器中捆绑工具：curl-cffi、ffmpeg、ffprobe、aria2、rtmpdump、mkvtoolsnix、mp4box。
* 自动重新排队即将到来的直播流。
* 根据自定义条件应用 `yt-dlp` 选项。
* 自定义浏览器扩展、书签和 iOS 快捷方式，将链接发送到 YTPTube 实例。

## 安装

此插件的安装有一些额外的步骤。

1. [将我的 Hass.io 插件仓库添加到您的 Hass.io 实例中][repository]。
1. 安装此插件。
1. 点击 `保存` 按钮以存储您的配置。
1. 下载目录默认为 /share/ytptube，可以更改为 share 中的任何位置。
1. 启动插件。它将失败
1. 使用 ssh 登录 home assistant 并输入 `chown hassio /addon_configs/2effc9b9_ytptube`
1. 再次使用 ssh 登录 home assistant 并输入 `chown hassio /share/ytptube` 或您更改的下载目录
1. 启动插件
1. 检查插件的日志以查看一切是否顺利。
1. 通过 <your-ip>:port 打开 WebUI。入口不起作用
1. 点击 "重建" 将拉取最新的 yt-dlp，即使 YTPTube 没有更新。
## 配置

```
port : 8081 #您希望运行的端口。
```

WebUI 可在 `<your-ip>:port` 找到。

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
