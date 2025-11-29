# Home assistant add-on: Readeck

Readeck 是一个简单的网络应用程序，允许您保存您喜欢的网页的宝贵可读内容并希望永远保存。将其视为一个书签管理器和稍后阅读工具。

_感谢所有给我的仓库加星！要加星，请点击下面的图片，它将在右上角。谢谢！_

[![Stargazers repo roster for @jdeath/homeassistant-addons](https://reporoster.com/stars/jdeath/homeassistant-addons)](https://github.com/jdeath/homeassistant-addons/stargazers)

## 关于

这个插件基于 [Docker 镜像](https://codeberg.org/readeck/readeck)。

## 功能

### 🔖 书签

喜欢您正在阅读的页面？将链接粘贴到 Readeck 中，您就完成了！

### 📸 文章、图片和视频

Readeck 为您保存网页的可读内容，以便稍后阅读。它还会检测页面是图片还是视频，并相应地调整其处理过程。

### ⭐ 标签、收藏夹、存档

将书签移动到存档或收藏夹，并添加您想要的标签。

### 🖍️ 高亮

突出显示您书签中的重要内容，以便以后轻松找到它。

### 🗃️ 收藏集

如果您需要一个专门的部分，包含过去 2 周内标记为 "cat" 的所有书签，Readeck 允许您将此搜索查询保存到收藏集中，以便以后访问。

### 🧩 浏览器扩展

在浏览时想要保留一些东西？不需要复制和粘贴链接。安装浏览器扩展，一键保存书签！

- [适用于 Mozilla Firefox](https://addons.mozilla.org/en-US/firefox/addon/readeck/)
- [适用于 Google Chrome](https://chromewebstore.google.com/detail/readeck/jnmcpmfimecibicbojhopfkcbmkafhee)
- [更多信息及源代码](https://codeberg.org/readeck/browser-extension)

### 📖 电子书导出

比在您的电子阅读器上阅读您收集的文章有什么更好的方式呢？您可以导出任何文章到一个电子书文件（EPUB）。甚至可以导出整个收藏集到一个单独的书籍！

除此之外，如果您的电子阅读器支持 OPDS，您可以直接从电子阅读器访问 Readeck 的目录和收藏集。

### 🔎 全文搜索

无论您需要从文章中找到模糊的文本片段，还是需要找到所有具有特定标签或来自特定网站的文章，我们都为您提供了解决方案！

### 🚀 快速！

Readeck 是对所谓的无聊但经过验证的技术的现代诠释。它保证非常快的响应时间和流畅的用户体验。

### 🔒 为您的隐私和长期存档而设计

您喜欢的这篇文章明年还在网上吗？10 年后呢？可能不在；可能全部消失，包括文本和图片。出于这个原因，以及为了您的隐私，文本和图片在您保存链接的瞬间就存储在您的 Readeck 实例中。

除了视频之外，您的浏览器不会向任何外部网站发起任何请求。

## 安装

1. [将我的 Hass.io 插件仓库][repository] 添加到您的 Hass.io 实例。
1. 安装此插件。
1. 点击 `保存` 按钮以保存您的配置。
1. 启动插件。
1. 停止插件并重新启动（这是第一次启动时必须的！）
1. 检查插件的日志，看看是否一切正常。
1. WebUI 应该可以通过 ingress 或 <your-ip>:port 访问。

## 更新
由于源代码没有托管在 github 上，很难自动更新这个。如果想要最新版本，请提交一个问题

## 配置

```
port : 8000 #您想要运行的端口。
```

Webui 可以在 `<your-ip>:port` 找到。

[repository]: https://github.com/jdeath/homeassistant-addons
**⚠️ This resource is intended to help Chinese Home Assistant users more easily install excellent add-ons. If you are not a Chinese user, please read repository readme first**



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
