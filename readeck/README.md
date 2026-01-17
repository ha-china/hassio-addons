# Home assistant add-on: Readeck

Readeck 是一个简单的网络应用程序，让你可以保存你喜欢的网页中宝贵的可读内容，并希望永远保存。将其视为一个书签管理器和稍后阅读工具。

_感谢大家给我的仓库加星！要加星，请点击下面的图片，它将在右上角。谢谢！_

[![Stargazers repo roster for @jdeath/homeassistant-addons](https://reporoster.com/stars/jdeath/homeassistant-addons)](https://github.com/jdeath/homeassistant-addons/stargazers)

## 关于

这个插件基于 [docker 镜像](https://codeberg.org/readeck/readeck)。

## 功能

### 🔖 书签

喜欢正在阅读的页面？将链接粘贴到 Readeck 中，你就可以完成了！

### 📸 文章、图片和视频

Readeck 为你保存网页的可读内容，供你稍后阅读。它还会检测页面是图片还是视频，并相应地调整其处理过程。

### ⭐ 标签、收藏夹、存档

将书签移动到存档或收藏夹，并添加你想要的标签。

### 🖍️ 高亮

高亮你的书签中的重要内容，以便稍后轻松找到。

### 🗃️ 收藏集

如果你需要一个专门的部分，包含过去 2 周内所有标记为 "cat" 的书签，Readeck 可以让你将这个搜索查询保存到收藏集中，以便稍后访问。

### 🧩 浏览器扩展

在浏览时想保留一些内容？无需复制和粘贴链接。安装浏览器扩展，一键保存书签！

- [适用于 Mozilla Firefox](https://addons.mozilla.org/en-US/firefox/addon/readeck/)
- [适用于 Google Chrome](https://chromewebstore.google.com/detail/readeck/jnmcpmfimecibicbojhopfkcbmkafhee)
- [更多信息及源代码](https://codeberg.org/readeck/browser-extension)

### 📖 电子书导出

比在你的电子阅读器上阅读你收集的文章更好的是什么？你可以将任何文章导出为电子书文件（EPUB）。甚至可以将收藏集导出为一个单独的书！

除此之外，如果你的电子阅读器支持 OPDS，你可以直接从电子阅读器访问 Readeck 的目录和收藏集。

### 🔎 全文搜索

无论你需要从文章中找到一段模糊的文本，还是所有带有特定标签或来自特定网站的文章，我们都为你提供了解决方案！

### 🚀 快速！

Readeck 是对所谓的无聊但经过验证的技术的现代诠释。它保证非常快的响应时间和流畅的用户体验。

### 🔒 为你的隐私和长期存档而设计

你喜欢的这篇文章明年还会在网上吗？10 年后呢？也许不会；也许一切都消失了，包括文本和图片。由于这个原因，以及为了你的隐私，当你保存链接时，文本和图片都会立即存储在你的 Readeck 实例中。

除了视频之外，你的浏览器不会向任何外部网站发起任何请求。

## 安装

1. [将我的 Hass.io 插件仓库][repository] 添加到你的 Hass.io 实例。
1. 安装此插件。
1. 点击 `保存` 按钮以保存你的配置。
1. 启动插件。
1. 退出插件并再次启动（这是第一次启动两次的必要步骤！）
1. 检查插件的日志，看看一切是否正常。
1. 应该可以通过 ingress 或 <your-ip>:port 打开 WebUI。

## 更新
由于源代码不在 github 上托管，很难自动更新这个。如果你想获取最新版本，请发布一个问题。

## 配置

```
port : 8000 #你想要运行的端口。
```

Webui 可以在 `<your-ip>:port` 找到。

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
