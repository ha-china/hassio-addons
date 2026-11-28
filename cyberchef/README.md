# Home assistant 附加组件：CyberChef

CyberChef 是一个简单直观的网页应用程序，可在网络浏览器内执行各种“赛博”操作。这些操作包括简单的编码（如异或和 Base64）、更复杂的加密（如 AES、DES 和 Blowfish）、创建二进制和十六进制转储、数据压缩和解压缩、计算哈希和校验和、解析 IPv6 和 X.509、更改字符编码等等。

该工具旨在使技术和非技术分析人员能够以复杂的方式处理数据，而无需使用复杂的工具或算法。它由一名分析师在其 10% 的创新时间内，历时数年构思、设计、构建并逐步完善。

_感谢大家为我仓库星标！要星标它，请点击下方的图片，它将出现在右上角。谢谢！_

[![Stargazers repo roster for @jdeath/homeassistant-addons](https://reporoster.com/stars/jdeath/homeassistant-addons)](https://github.com/jdeath/homeassistant-addons/stargazers)

## 关于

附加组件基于 [docker 镜像](https://github.com/gchq/CyberChef)。

## 安装

此附加组件的安装非常简单，与其他 Hass.io 附加组件的安装方式没有区别。

1. [将我添加到我的 Hass.io 附加组件存储库][repository] 到您的 Hass.io 实例。
2. 安装此附加组件。
3. 点击“保存”按钮以存储您的配置。
4. 启动附加组件。
5. 检查附加组件日志以查看一切是否正常工作。
6. 应可通过内联或 `<your-ip>:port` 打开 Web 界面。

## 配置

```
port : 80 # 您希望运行的端口。
```

Web 界面可在 `<your-ip>:port` 上找到。

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
