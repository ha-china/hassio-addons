# Home Assistant 扩展：MeTube

基于 yt-dlp 分支（使用 yt-dlp）的 YouTube-dl 网页界面，支持播放列表。允许您从 YouTube 和其他数十个网站下载视频（https://github.com/yt-dlp/yt-dlp/blob/master/supportedsites.md）。

_感谢所有为我的仓库点赞的人！要点赞，请点击下面的图片，然后它就会显示在右上角。谢谢！_

[![Stargazers 仓库列表 @jdeath/homeassistant-addons](https://reporoster.com/stars/jdeath/homeassistant-addons)](https://github.com/jdeath/homeassistant-addons/stargazers)

## 关于

此扩展基于 [docker 镜像](https://github.com/alexta69/metube)。

## 安装

安装此扩展非常简单，与安装任何其他 Hass.io 扩展没有区别。

1. 将我的 Hass.io 扩展仓库 [repository] 添加到您的 Hass.io 实例中。
1. 安装此扩展。
1. 点击 `保存` 按钮以存储您的配置。
1. 下载目录默认为 /share/metube，可以在 share 中更改。
1. 启动扩展。
1. 检查扩展的日志，以查看是否一切顺利。
1. 通过 ingress 或 <your-ip>:port 打开 WebUI 应该可以工作。

## 配置

```
port : 8081 # 您希望运行的端口。
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
