# Home Assistant 添加组件：CyberChef

CyberChef 是一款用于在网页浏览器中执行各种"网络"操作的简单直观 Web 应用程序。这些操作包括简单的编码（如 XOR 和 Base64）、更复杂的加密（如 AES、DES 和 Blowfish）、创建二进制和十六进制转储、数据压缩和解压缩、计算哈希和校验和、解析 IPv6 和 X.509、更改字符编码等。

该工具旨在使技术分析和非技术分析人员能够以复杂的方式操作数据，而无需处理复杂的工具或算法。它由一名分析师在其 10% 的创新时间中经过数年构思、设计、构建并逐步改进而成。

_感谢所有为我仓库点赞的人！要点赞，请点击下方的图片，它就会显示在右上角。谢谢！_

[![Stargazers repo roster for @jdeath/homeassistant-addons](https://reporoster.com/stars/jdeath/homeassistant-addons)](https://github.com/jdeath/homeassistant-addons/stargazers)

## 关于

此添加组件基于 [docker 镜像](https://github.com/gchq/CyberChef)。

## 安装

此添加组件的安装相当简单，与其他任何 Hass.io 添加组件的安装方式没有区别。

1. [将我的 Hass.io 添加组件仓库][repository] 添加到您的 Hass.io 实例。
1. 安装此添加组件。
1. 点击 `保存` 按钮以保存您的配置。
1. 启动添加组件。
1. 检查添加组件的日志，以防一切顺利。
1. 打开 WebUI 可以通过 ingress 或 `<your-ip>:port` 访问。

## 配置

```
port : 80 #您想要运行的端口。
```

WebUI 位于 `<your-ip>:port`。

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
