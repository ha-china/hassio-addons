# Home Assistant 附加组件：Readeck

Readeck 是一个简单的网页应用程序，可以让你保存喜欢的并希望永久保留的网页中的可阅读内容。将其视为书签管理器和稍后阅读工具。

_感谢所有给我仓库点星的家伙！想点星请点下面的图片，它就会出现在右上角。谢谢！_

[![Stargazers repo roster for @jdeath/homeassistant-addons](https://reporoster.com/stars/jdeath/homeassistant-addons)](https://github.com/jdeath/homeassistant-addons/stargazers)

## 关于

此附加组件基于 [docker 镜像](https://codeberg.org/readeck/readeck)。

## 功能

### 🔖 书签

喜欢正在看的页面吗？在 Readeck 中粘贴链接即可！

### 📸 文章、图片和视频

Readeck 为您保存网页的可读内容，以便稍后阅读。它还检测页面是否为图片或视频，并相应地调整其处理流程。

### ⭐ 标签、收藏夹、归档

将书签移动到归档或收藏夹，并添加您想要的任何标签。

### 🖍️ 高亮

高亮书签中的重要内容，以便稍后轻松查找。

### 🗃️ 收藏集

如果您需要一个专门的段落，包含标有"cat"标签的过去两周的所有书签，Readeck 允许您将此搜索查询保存为收藏集，以便稍后访问。

### 🧩 浏览器扩展

浏览时想稍后保存一些内容吗？无需复制粘贴链接。安装浏览器扩展并以一键保存书签！

- [对于 Mozilla Firefox](https://addons.mozilla.org/en-US/firefox/addon/readeck/)
- [对于 Google Chrome](https://chromewebstore.google.com/detail/readeck/jnmcpmfimecibicbojhopfkcbmkafhee)
- [更多信息和源代码](https://codeberg.org/readeck/browser-extension)

### 📖 e 图书导出

还有什么比在您电子阅读器上阅读您收集的文章更好呢？您可以将任何文章导出为电子书文件（EPUB）。甚至可以将收藏集导出为单一本书！

此外，如果您的电子阅读器支持 OPDS，您可以直接访问 Readeck 的目录和收藏集。

### 🔎 全文搜索

无论您是否需要在文章中查找一段模糊的文本，还是查找具有特定标签的或来自特定网站的所有文章，我们都已涵盖！

### 🚀 快速！

Readeck 是现代的称为无聊但经过验证的技术解决方案。它保证响应时间非常快且用户体验流畅。

### 🔒 专为您的隐私和长期归档而-build

您喜欢的这篇文章明年还会在互联网上吗？10 年后？也许不会；也许都已经消失，文字和图片。出于这个原因以及出于您的隐私考虑，文字和图片在保存链接时立即存储在您的 Readeck 实例中。

除了视频外，您的浏览器不会向任何外部网站发起任何请求。

## 安装

1. [将我的 Hass.io 附加组件仓库][repository] 添加到您的 Hass.io 实例中。
1. 安装此附加组件。
1. 单击 `保存 `按钮以存储配置。
1. 启动附加组件。
1. 退出附加组件并重新启动（首次使用时需要这样做兩次！）。
1. 检查附加组件的日志，以查看一切是否顺利。
1. 打开 WebUI 可通过 ingress 或 `<your-ip>:port` 访问。

## 更新

由于源代码不在 GitHub 上托管，因此很难自动更新此功能。如果您想要最新版本，请提出问题。

## 配置

```
port : 8000 # 您想运行的端口。
```

Webui 可在 `<your-ip>:port` 找到。

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
