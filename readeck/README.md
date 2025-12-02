# Home assistant add-on: Readeck

Readeck 是一个简单的网络应用程序，它允许你保存你喜欢的网页中宝贵的可读内容，并希望永远保存。将其视为一个书签管理器和稍后阅读工具。

_感谢所有给我的仓库加星！要加星，请点击下面的图片，它将在右上角。谢谢！_

[![Stargazers repo roster for @jdeath/homeassistant-addons](https://reporoster.com/stars/jdeath/homeassistant-addons)](https://github.com/jdeath/homeassistant-addons/stargazers)

## 关于

这个插件基于 [docker 镜像](https://codeberg.org/readeck/readeck)。

## 功能

### 🔖 书签

喜欢你在阅读的页面？将链接粘贴到 Readeck 中，你就可以完成了！

### 📸 文章、图片和视频

Readeck 会为你保存网页的可读内容，供你稍后阅读。它还会检测页面是图片还是视频，并相应地调整其处理过程。

### ⭐ 标签、收藏夹、存档

将书签移动到存档或收藏夹，并添加你想要的标签。

### 🖍️ 高亮

高亮你的书签中的重要内容，以便稍后轻松找到它们。

### 🗃️ 收藏集

如果你需要一个专门的部分，包含过去 2 周内所有标记为“cat”的书签，Readeck 允许你将这个搜索查询保存为收藏集，以便稍后访问。

### 🧩 浏览器扩展

在浏览时想保存一些东西以备后用？不需要复制和粘贴链接。安装浏览器扩展，一键保存书签！

- [适用于 Mozilla Firefox](https://addons.mozilla.org/en-US/firefox/addon/readeck/)
- [适用于 Google Chrome](https://chromewebstore.google.com/detail/readeck/jnmcpmfimecibicbojhopfkcbmkafhee)
- [更多信息及源代码](https://codeberg.org/readeck/browser-extension)

### 📖 电子书导出

比在你的电子阅读器上阅读你收集的文章更好的是什么？你可以将任何文章导出为电子书文件（EPUB）。甚至可以将收藏集导出为一个单一的书籍！

除此之外，如果你的电子阅读器支持 OPDS，你可以直接从你的电子阅读器访问 Readeck 的目录和收藏集。

### 🔎 全文搜索

无论你需要从文章中找到模糊的文本片段，还是所有带有特定标签或来自特定网站的文章，我们都为你提供了全面的解决方案！

### 🚀 快速！

Readeck 是对所谓无聊但经过验证的技术的现代诠释。它保证非常快的响应时间和流畅的用户体验。

### 🔒 为你的隐私和长期存档而设计

你喜欢这篇文章明年还在网上吗？10 年后呢？也许不在；也许所有文本和图片都消失了。由于这个原因，以及为了你的隐私，当你保存一个链接时，文本和图片都会立即存储在你的 Readeck 实例中。

除了视频之外，你的浏览器不会向任何外部网站发送任何请求。

## 安装

1. [将我的 Hass.io 插件仓库][repository] 添加到你的 Hass.io 实例。
1. 安装这个插件。
1. 点击 `保存` 按钮以存储你的配置。
1. 启动插件。
1. 退出插件并重新启动（这是第一次启动时必须的！）
1. 检查插件的日志，看看是否一切顺利。
1. 应该可以通过 ingress 或 <your-ip>:port 打开 WebUI。

## 更新

由于源代码没有托管在 github 上，自动更新这个非常困难。如果想要最新版本，请提交一个问题

## 配置

```
port : 8000 #你想要运行的端口。
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
