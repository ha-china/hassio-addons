# 家居助理插件：CyberChef

CyberChef 是一个简单直观的网页应用程序，可在网页浏览器中执行各种“网络”操作。这些操作包括简单的编码，如XOR和Base64，更复杂的加密，如AES、DES和Blowfish，创建二进制和十六进制转储，数据的压缩和解压缩，计算哈希和校验和，IPv6和X.509解析，更改字符编码，等等。

该工具旨在使技术和非技术分析师都能够以复杂的方式操作数据，而无需处理复杂的工具或算法。它是由一位分析师在多年的10%创新时间内构思、设计、构建和逐步改进的。

_感谢 everyone 为我的仓库点星！要为它点星，请点击下面的图片，然后它将显示在右上角。谢谢！_

[![Stargazers repo roster for @jdeath/homeassistant-addons](https://reporoster.com/stars/jdeath/homeassistant-addons)](https://github.com/jdeath/homeassistant-addons/stargazers)

## 关于

此插件基于 [docker 镜像](https://github.com/gchq/CyberChef)。

## 安装

此插件的安装非常简单，与安装任何其他Hass.io插件没有区别。

1. [将我的Hass.io插件仓库添加到您的Hass.io实例][repository]。
1. 安装此插件。
2. 点击“保存”按钮以存储您的配置。
3. 启动插件。
4. 检查插件的日志以查看一切是否顺利。
5. 通过ingress或<your-ip>:port 打开WebUI应该可以工作。

## 配置

```
port : 80 #你想要运行的端口。
```

WebUI 可以在 `<your-ip>:port` 找到。

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
