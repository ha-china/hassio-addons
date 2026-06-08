# MeTube 家居助手插件

基于yt-dlp分支（使用yt-dlp分支）的youtube-dl网页界面，支持播放列表。允许您从YouTube和数十个其他网站（https://github.com/yt-dlp/yt-dlp/blob/master/supportedsites.md）下载视频。

_感谢所有为我仓库点星的人！要星标它，请点击下面的图片，然后它将出现在右上角。谢谢！_

[![@jdeath/homeassistant-addons 的星标者列表](https://reporoster.com/stars/jdeath/homeassistant-addons)](https://github.com/jdeath/homeassistant-addons/stargazers)

## 关于

此插件基于[docker镜像](https://github.com/alexta69/metube)。

## 安装

此插件的安装非常简单，与安装其他Hass.io插件没有太大区别。

1. [将我的Hass.io插件仓库添加到您的Hass.io实例](repository)。
1. 安装此插件。
2. 点击“保存”按钮以存储您的配置。
3. 下载目录默认为/share/metube，可以在共享中更改。
4. 启动插件。
5. 检查插件的日志，以查看一切是否顺利。
6. 打开WebUI应该可以通过入口或<your-ip>:port工作。

## 配置

```
port : 8081 # 您想要运行的端口。
```

WebUI可以在`<your-ip>:port`找到。

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
