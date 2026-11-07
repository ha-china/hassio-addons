# Home Assistant 附加组件：5etools

这是专为《龙与地下城》5 版（D&D 5e）玩家和 DM 提供的一套基于浏览器的工具。下载的截图来自 5etools 的 GitHub 仓库。jdeath 的仓库中没有任何图片或内容托管/发布。由于 Home Assistant 附加组件创建者不使用此项目，因此不提供任何支持。自托管镜像可能落后于 5etools 网站的内容。镜像大小为 4GB，因此安装时间会比较长，请耐心等待。

_感谢所有人点击右上角星星支持我的仓库！要星星，请点击下方的链接，然后星星位置将显示在右上角。感谢！_

[![@jdeath/homeassistant-addons 存储库明星名单](https://reporoster.com/stars/jdeath/homeassistant-addons)](https://github.com/jdeath/homeassistant-addons/stargazers)

## 关于此附加组件

此附加组件使用 [Docker 镜像](https://github.com/5etools-mirror-2/5etools-mirror-2.github.io)。

## 安装

此附加组件的安装非常简单，与安装任何其他的 Hass.io 附加组件没有区别。

1. [将我添加到 Hass.io 附加组件仓库][repository] 到你的 Hass.io 实例中。
1. 安装此附加组件。4 GB 镜像下载需要花费一些时间。
1. 点击 `保存` 按钮以保存你的配置。
1. 启动附加组件。
1. 查看附加组件的日志，以确认一切是否正常运行。
1. 打开 WebUI 可通过 ingress 或 `<your-ip>:port` 访问。

## 配置

```
port : 8080 #端口，在此配置中运行的端口。
```

WebUI 可在 `<your-ip>:port` 处访问。

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
