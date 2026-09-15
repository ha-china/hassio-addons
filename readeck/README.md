# Home assistant 插件：Readeck

Readeck 是一个简单的 Web 应用程序，它可以将您喜欢的网页中宝贵的可读内容永久保存下来。您可以将其视为书签管理器以及“稍后阅读”工具。

_感谢所有星标我的仓库的人！要星标它，请点击下方的图片，它将会出现在右上角。谢谢！_

[![Stargazers repo roster for @jdeath/homeassistant-addons](https://reporoster.com/stars/jdeath/homeassistant-addons)](https://github.com/jdeath/homeassistant-addons/stargazers)

## 关于

该插件基于 [docker 镜像](https://codeberg.org/readeck/readeck) 构建。

## 功能

### 🔖 书签

喜欢正在阅读的一页？在 Readeck 中粘贴链接即可！

### 📸 文章、图片和视频

Readeck 为您保存网页的可读内容以便稍后阅读。它还能检测网页是否为图片或视频，并相应地调整其处理流程。

### ⭐ 标签、收藏和归档

将书签移动到归档或收藏，并添加任意数量的标签。

### 🖍️ 高亮标记

高亮书签中的重要内容，以便稍后快速查找。

### 🗃️ 集合

如果您需要专门的部分来归档过去两周内标记为“猫”的所有书签，Readeck 允许您将此搜索查询保存为集合，以便稍后访问。

### 🧩 浏览器扩展

浏览时想稍后保留某些内容吗？无需复制粘贴链接。安装浏览器扩展即可一键保存书签！

- [Mozilla Firefox 版](https://addons.mozilla.org/en-US/firefox/addon/readeck/)
- [Google Chrome 版](https://chromewebstore.google.com/detail/readeck/jnmcpmfimecibicbojhopfkcbmkafhee)
- [更多信息和源代码](https://codeberg.org/readeck/browser-extension)

### 📖 电子书导出

有什么比在电子书阅读器上阅读您收藏的文章更好呢？您可以将任何文章导出为电子书文件（EPUB）。您甚至可以将一个集合导出为单一的一本书！

此外，如果您的电子书阅读器支持 OPDS，您可以直接访问 Readeck 的目录和集合。

### 🔎 全文搜索

无论您需要查找文章中模糊的一段文字，还是所有带有特定标签或来自特定网站的文章，我们都已为您准备好！

### 🚀 快速！

Readeck 是对那些所谓的枯燥但经过验证的技术组件的现代改进。它保证了极短的响应时间和流畅的用户体验。

### 🔒 为您隐私和长期存档而构建

您喜欢的文章明年还在线吗？10 年后呢？也许没有；也许所有内容都不见了，包括文字和图片。出于这个原因以及为了保护您的隐私，每当您保存一个链接时，所有文字和图片都会立即存储在您的 Readeck 实例中。

除视频外，您的浏览器不会向任何外部网站发起任何请求。

## 安装

1. [将我的 Hass.io 插件仓库][repository] 添加到您的 Hass.io 实例。
2. 安装此插件。
3. 点击 `保存` 按钮以存储您的配置。
4. 启动该插件。
5. 退出插件并重新启动（这第一次启动时需要启动两次！）。
6. 检查插件日志以确保一切运行正常。
7. 打开 WebUI 应可以通过 Ingress 或 <your-ip>:port 访问。

## 更新

由于源代码未托管在 GitHub 上，因此很难实现自动更新。如需最新版本，请提出 Issue。

## 配置

```
port : 8000 # 您希望运行的端口号。
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
