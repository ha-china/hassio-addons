# Home assistant 附加组件：ConvertX

一个自托管的在线文件转换器。支持 831 种不同格式。使用 TypeScript、Bun 和 Elysia 编写

_感谢所有为我的仓库点赞的朋友！要点赞请点击下方的图片，它将被置于右上角。感谢！_

[![Stargazers repo roster for @jdeath/homeassistant-addons](https://reporoster.com/stars/jdeath/homeassistant-addons)](https://github.com/jdeath/homeassistant-addons/stargazers)

## 关于

此附加组件使用 [docker 镜像](https://github.com/C4illin/ConvertX)。

## 安装

此附加组件的安装非常简单，与其他任何 Hass.io 附加组件的安装方式没有区别。

1. [将我的 Hass.io 附加组件仓库][repository] 添加到您的 Hass.io 实例中。
1. 安装此附加组件。2 GB 的镜像可能需要较长时间下载。
1. 点击 `Save` 按钮以存储您的配置。
1. 启动附加组件。
1. 检查附加组件的日志以确认一切正常。
1. 通过 ingress 或 `<your-ip>:port` 打开 WebUI 应可工作。
1. 数据将存储在 /addon_configs/2effc9b9_convertx

## 配置

```
port : 3000 # 您希望运行的端口。
```

Web 界面可在 `<your-ip>:port` 处访问。

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
