# Home Assistant 附加组件：5etools

一套用于《龙与地下城》第 5 版游戏玩家及地下城大师的基于浏览器的工具。下图取自 5etools GitHub 仓库。jdeath 的仓库中并未托管或发布该图片或任何内容。既然 Home Assistant 附加组件创建者并不使用此工具，因此不提供支持。自托管的镜像可能落后于 5etools 网站。该镜像大小为 4GB，安装时间较长，请耐心等待。

_感谢所有为我仓库点赞的朋友们！要点赞，请点击下方的图片，它将显示在右上角。谢谢！_

[![@jdeath/homeassistant-addons 的 Star 者仓库名册](https://reporoster.com/stars/jdeath/homeassistant-addons)](https://github.com/jdeath/homeassistant-addons/stargazers)

## 关于本附加组件

本附加组件使用 [Docker 镜像](https://github.com/5etools-mirror-2/5etools-mirror-2.github.io)。

## 安装

本附加组件的安装非常简单，与其他 Hass.io 附加组件的安装方式基本相同。

1. [添加我的 Hass.io 附加组件仓库][repository] 到您的 Hass.io 实例。
2. 安装此附加组件。4GB 的镜像下载速度较慢。
3. 点击`保存`按钮以存储您的配置。
4. 启动附加组件。
5. 检查附加组件的日志，确认一切是否顺利。
6. 打开 Web 界面，应可通过 ingress 或 `<您的 IP 地址>:端口`访问。

## 配置

```
port : 8080 # 您希望运行 web 界面的端口。
```

Web 界面可通过 `<您的 IP 地址>:端口`访问。

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
