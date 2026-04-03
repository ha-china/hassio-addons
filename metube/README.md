# Home Assistant 扩展：MeTube

基于yt-dlp分支（使用yt-dlp分支）的youtube-dl的Web GUI，支持播放列表。允许您从YouTube和数十个其他网站下载视频（https://github.com/yt-dlp/yt-dlp/blob/master/supportedsites.md）。

_感谢所有star了我的仓库的人！要star它，请点击下面的图片，然后它就会出现在右上角。谢谢！_

[![Stargazers repo roster for @jdeath/homeassistant-addons](https://reporoster.com/stars/jdeath/homeassistant-addons)](https://github.com/jdeath/homeassistant-addons/stargazers)

## 关于

此扩展基于[docker镜像](https://github.com/alexta69/metube)。

## 安装

此扩展的安装非常简单，与安装任何其他Hass.io扩展没有区别。

1. 将我的Hass.io扩展仓库[repository]添加到您的Hass.io实例中。
1. 安装此扩展。
2. 点击“保存”按钮以存储您的配置。
3. 下载目录默认为/share/metube，可以在share中更改到任何位置。
4. 启动扩展。
5. 检查扩展的日志以查看是否一切顺利。
6. 通过ingress或<您的IP>:端口号打开WebUI。

## 配置

```
port : 8081 #您想要运行的端口号。
```

WebUI可以在`<您的IP>:端口号`找到。

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
