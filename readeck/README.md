# Home Assistant 插件：Readeck

Readeck 是一个简单的 Web 应用程序，可以让您永久保存喜欢并希望保留的网页中的宝贵可读内容。将其视为书签管理器及稍后阅读工具。

_感谢所有为我仓库点星的人！要关注它，请点击下方的图片，它将被置于右上角。谢谢！_

[![Stargazers repo roster for @jdeath/homeassistant-addons](https://reporoster.com/stars/jdeath/homeassistant-addons)](https://github.com/jdeath/homeassistant-addons/stargazers)

## 关于

此插件基于 [docker 镜像](https://codeberg.org/readeck/readeck)。

## 功能

### 🔖 书签

喜欢某页？在 Readeck 中粘贴网址即可大功告成！

### 📸 文章、图片和视频

Readeck 为您保存网页的可读内容，以便您稍后阅读。它还会检测页面是否为图片或视频，并据此调整处理流程。

### ⭐ 标签、收藏项和归档

将书签移动至归档或收藏，并添加任意数量的标签。

### 🖍️ 高亮显示

突出显示书签中的重要内容，以便日后轻松查找。

### 🗃️ 集合

如果您需要一个专用部分来存放过去两周带有"猫"标签的所有书签，Readeck 允许您将此搜索查询保存为集合，以便日后访问。

### 🧩 浏览器扩展

浏览时想稍后保存某些内容？无需复制粘贴网址。安装浏览器扩展，点击即可保存书签！

- [适用于 Mozilla Firefox](https://addons.mozilla.org/en-US/firefox/addon/readeck/)
- [适用于 Google Chrome](https://chromewebstore.google.com/detail/readeck/jnmcpmfimecibicbojhopfkcbmkafhee)
- [更多信息和源代码](https://codeberg.org/readeck/browser-extension)

### 📖 EPUB 电子书导出

还有什么比在您电子阅读器上阅读收藏的文章更好呢？您可以将任意文章导出为电子书文件（EPUB）。甚至可以将一个集合导出为单一书籍！

此外，如果您的电子阅读器支持 OPDS，您可以直接从电子阅读器访问 Readeck 的目录和集合。

### 🔎 全文搜索

无论您是需要查找文章中模糊的一段文字，还是需要查找所有带有特定标签或来自特定网站的文章，我们都为您做到了！

### 🚀 快速！

Readeck 是对所谓枯燥但经过验证的技术方案的一种现代化实现。它保证了极快的响应时间和流畅的用户体验。

### 🔒 专为隐私和长期归档设计

您喜欢的这篇文章明年还在网上吗？十年后呢？也许不在，也许所有内容（文字和图片）都已消失。出于这一原因以及为了您的隐私，文字和图片在保存网址的那一刻就会全部存储在您的 Readeck 实例中。

除视频外，您的浏览器不会向任何外部网站发出任何请求。

## 安装

1. [将我位于 Hass.io 插件仓库][repository] 添加到您的 Hass.io 实例。
1. 安装此插件。
1. 点击 `保存` 按钮以保存您的配置。
1. 启动插件。
1. 退出插件并重新启动（这是第一次需要启动两次的原因！）
1. 查看插件日志以确认一切无误。
1. 打开 Web 界面，可通过 Ingress 或 `<您的 IP 地址>:端口` 访问。

## 更新

由于源代码未在 GitHub 托管，自动更新非常困难。如果有最新版本的更新需求，请提交问题。

## 配置

```
port : 8000 # 您希望运行的端口。
```

Web 界面可以通过 `<您的 IP 地址>:端口` 访问。

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
