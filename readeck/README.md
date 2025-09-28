# Home assistant add-on: Readeck

Readeck 是一个简单的网络应用程序，它允许你保存你喜欢的网页的宝贵可读内容，并希望永远保存。将其视为一个书签管理器和稍后阅读的工具。

_感谢所有给我的仓库加星！要加星，请点击下面的图片，它将出现在右上角。谢谢！_

[![Stargazers repo roster for @jdeath/homeassistant-addons](https://reporoster.com/stars/jdeath/homeassistant-addons)](https://github.com/jdeath/homeassistant-addons/stargazers)

## 关于

这个插件基于 [Docker 镜像](https://codeberg.org/readeck/readeck)。

## 功能

### 🔖 书签

喜欢你正在阅读的页面？将链接粘贴到 Readeck 中，然后你就可以完成了！

### 📸 文章、图片和视频

Readeck 会为你保存网页的可读内容，以便稍后阅读。它还会检测页面是图片还是视频，并相应地调整其处理过程。

### ⭐ 标签、收藏夹、存档

将书签移动到存档或收藏夹，并添加你想要的标签。

### 🖍️ 高亮

高亮你的书签中的重要内容，以便稍后轻松找到它们。

### 🗃️ 收藏集

如果你需要一个专门的部分，包含过去两周的所有书签，并标记为“猫”，Readeck 允许你将这个搜索查询保存到收藏集中，以便稍后访问。

### 🧩 浏览器扩展

在浏览时想保存一些东西？不需要复制和粘贴链接。安装浏览器扩展，一键保存书签！

- [适用于 Mozilla Firefox](https://addons.mozilla.org/en-US/firefox/addon/readeck/)
- [适用于 Google Chrome](https://chromewebstore.google.com/detail/readeck/jnmcpmfimecibicbojhopfkcbmkafhee)
- [更多信息及源代码](https://codeberg.org/readeck/browser-extension)

### 📖 电子书导出

比在你的电子阅读器上阅读你收集的文章更好的是什么？你可以将任何文章导出为电子书文件（EPUB）。甚至可以将收藏集导出为单个书籍！

除此之外，如果你的电子阅读器支持 OPDS，你可以直接访问 Readeck 的目录和收藏集。

### 🔎 全文搜索

无论你需要从文章中找到模糊的文本片段，还是所有带有特定标签或来自特定网站的文章，我们都为你提供了支持！

### 🚀 快速！

Readeck 是对所谓的无聊但经过验证的技术的现代诠释。它保证非常快的响应时间和流畅的用户体验。

### 🔒 为了你的隐私和长期存档而构建

你喜欢的这篇文章明年还会在网上吗？十年后呢？可能不会；也许一切都消失了，包括文本和图片。出于这个原因，也是为了你的隐私，文本和图片在你保存链接的那一刻就会存储在你的 Readeck 实例中。

除了视频之外，你的浏览器不会向任何外部网站发出任何请求。

## 安装

1. [将我的 Hass.io 插件仓库][repository] 添加到你的 Hass.io 实例。
2. 安装这个插件。
3. 点击 `保存` 按钮来存储你的配置。
4. 启动插件。
5. 退出插件并再次启动（这是第一次启动时必要的！）
6. 检查插件的日志，看看是否一切顺利。
7. WebUI 应该可以通过 ingress 或 <your-ip>:port 访问。

## 更新

由于源代码没有托管在 github 上，因此很难自动更新这个。如果你想要最新版本，请提出问题

## 配置

```
port : 8000 #你想要运行的端口。
```

Webui 可以在 `<your-ip>:port` 找到。

[repository]: https://github.com/jdeath/homeassistant-addons