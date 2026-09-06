# Home assistant 附加组件：CyberChef

CyberChef 是一个用于在 Web 浏览器内执行各种"网络”操作的简单、直观型 Web 应用程序。这些操作包括简单的编码（如 XOR 和 Base64），更复杂的加密（如 AES、DES 和 Blowfish），创建二进制和十六进制内存转储、数据的压缩和反压缩、计算哈希值和校验和、解析 IPv6 和 X.509、更改字符编码，以及更多内容。

该工具旨在使技术和非技术分析师都能够以复杂的方式操纵数据，而无需处理复杂工具或算法。它由一名分析师在其 10% 的创新时间内，在数年间构思、设计、构建并逐步完善。

_感谢所有为我仓库点赞的人！要点赞它，请单击下方的图片，然后点击它将显示在右上角。感谢！_

[![Stargazers repo roster for @jdeath/homeassistant-addons](https://reporoster.com/stars/jdeath/homeassistant-addons)](https://github.com/jdeath/homeassistant-addons/stargazers)

## 关于

此附加组件基于 [Docker 镜像](https://github.com/gchq/CyberChef)。

## 安装

此附加组件的安装非常简单，与安装任何其他 Hass.io 附加组件没有区别。

1. [添加我的 Hass.io 附加组件仓库][repository] 到您的 Hass.io 实例。
1. 安装此附加组件。
1. 单击 `Save` 按钮以保存配置。
1. 启动附加组件。
1. 检查附加组件的日志以查看一切是否顺利。
1. 打开 WebUI 可以通过 Ingress 或 `<your-ip>:port` 访问。

## 配置

```
port : 80 # 你想运行的端口。
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
