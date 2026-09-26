# Home Assistant 附加组件：MeTube

为 youtube-dl（使用 yt-dlp 分支）提供 Web 图形界面，支持播放列表。允许您从 YouTube 以及数十个其他网站下载视频（https://github.com/yt-dlp/yt-dlp/blob/master/supportedsites.md）。

_谢谢所有人给我的仓库点赞！如果要在右上角点赞，请点击下图。谢谢！_

[![Stargazers 仓库名人录 for @jdeath/homeassistant-addons](https://reporoster.com/stars/jdeath/homeassistant-addons)](https://github.com/jdeath/homeassistant-addons/stargazers)

## 关于

该附加组件基于 [docker 镜像](https://github.com/alexta69/metube)。

## 安装

该附加组件的安装非常简单，与其他任何 Hass.io 附加组件的安装方式没有区别。

1. [添加我的 Hass.io 附加组件仓库][repository]到您的 Hass.io 实例中。
2. 安装此附加组件。
3. 点击`保存`按钮以存储您的配置。
4. 下载目录默认为/share/metube，可更改为 share 中的任何位置。
5. 启动附加组件。
6. 检查附加组件日志，查看一切是否正常。
7. 打开 Web 界面，可通过 ingress 或<your-ip>:port 访问。

## 配置

```
port : 8081 #要运行的端口。
```

Web 界面位于 `<your-ip>:port`。

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
