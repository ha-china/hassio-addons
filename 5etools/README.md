# Home assistant 附加组件：5etools

一套面向 D&D 5e 玩家和 DM 的基于浏览器的工具。以下是从 5etools GitHub 下载的截图。jdeath 的仓库中未托管或发布任何图像或内容。由于 Home Assistant 附加组件创建者不使用此项目，因此不提供支持。托管镜像的版本可能落后于 5etools 网站。镜像大小为 4 GB，安装时间较长，请耐心等待。

_感谢所有为我仓库点赞的人！要点赞它，请点击下方的图像，它将显示在右上角。谢谢！_

[![@jdeath/homeassistant-addons 仓库的所有星号成员列表](https://reporoster.com/stars/jdeath/homeassistant-addons)](https://github.com/jdeath/homeassistant-addons/stargazers)

## 关于

该附加组件使用 [docker 镜像](https://github.com/5etools-mirror-2/5etools-mirror-2.github.io)。

## 安装

此附加组件的安装非常简单，与安装任何其他 Hass.io 附加组件的过程并无不同。

1. 将 [我的 Hass.io 附加组件仓库][repository] 添加到您的 Hass.io 实例中。
1. 安装此附加组件。4 GB 的镜像下载需要花费一些时间。
1. 点击 `Save` 按钮以保存您的配置。
1. 启动附加组件。
1. 检查附加组件的日志，确认一切正常。
1. 可以通过 ingress 或 `<your-ip>:port` 访问 WebUI。

## 配置

```
port : 8080 # 您想要运行的端口号。
```

WebUI 可以在此地址找到：`<your-ip>:port`。

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
