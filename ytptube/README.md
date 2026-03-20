# Home Assistant 扩展：ytptube

yt-dlp的Web界面，支持播放列表和频道（https://github.com/arabcoders/ytptube）。

_感谢所有为我的仓库点赞的人！要点赞，请点击下面的图片，然后它就会显示在右上角。谢谢！_

![Stargazers repo roster for @jdeath/homeassistant-addons](https://reporoster.com/stars/jdeath/homeassistant-addons))(https://github.com/jdeath/homeassistant-addons/stargazers)

## 关于

此扩展基于[docker镜像](https://github.com/arabcoders/ytptube)。

# YTPTube 功能

* 多个下载支持。
* 随机美丽的背景。`可以禁用或更改源`。
* 可以处理直播流。
* 调度器，可以自动在指定时间下载频道或播放列表。
* 根据所选事件向目标发送通知。
* 支持每个链接的`cli选项`和`cookies`。
* 使用逗号分隔的多个URL。
* 预设系统，用于重复使用常用的yt-dlp选项。
* 简单的文件浏览器。`默认禁用`。
* 内置视频播放器**支持侧载外部字幕**。
* 新的`POST /api/history`端点，允许同时发送一个或多个链接。
* 新的`GET /api/history/add?url=http://..`端点，允许通过GET请求添加单个项目。
* 现代前端UI。
* SQLite作为数据库后端。
* 基本认证支持。
* 支持`curl_cffi`，见[yt-dlp文档](https://github.com/yt-dlp/yt-dlp?tab=readme-ov-file#impersonation)。
* 支持基本模式WebUI，非技术用户隐藏大多数正常功能。
* 容器中捆绑工具：curl-cffi, ffmpeg, ffprobe, aria2, rtmpdump, mkvtoolsnix, mp4box。
* 自动重排即将到来的直播流。
* 根据自定义条件应用`yt-dlp`选项。
* 自定义浏览器扩展、书签和iOS快捷方式，将链接发送到YTPTube实例。

## 安装

此扩展的安装有一些额外的步骤。

1. [将我的Hass.io扩展仓库][repository]添加到您的Hass.io实例。
1. 安装此扩展。
1. 点击`保存`按钮以存储您的配置。
1. 下载目录默认为/share/ytptube，可以更改为share中的任何位置
1. 启动扩展。它将失败
1. 使用ssh进入home assistant并输入`chown hassio /addon_configs/2effc9b9_ytptube`
1. 再次使用ssh进入home assistant并输入`chown hassio /share/ytptube`或您更改的下载目录
1. 启动扩展
1. 检查扩展的日志以查看是否一切顺利。
1. 通过<your-ip>:port打开WebUI。入口不工作
1. 点击"重建"将拉取最新的yt-dlp，即使YTPTube没有更新。

## 配置

```
port : 8081 #您希望运行的端口。
```

WebUI可以在<your-ip>:port找到。

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
