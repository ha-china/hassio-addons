# Home assistant 附加组件：Changedetection.io

**最好的、最简单的自托管免费开源网站变更检测跟踪、监控和通知服务。替代品包括 Visualping、Watchtower 等。设计以简洁为主——主要目标是为免费监控哪些网站出现了文本变更。免费开源网页内容变更检测。**

#### 示例用例

- 产品或服务的价格发生变化
- _库存不足通知_ 和 _库存补回通知_
- 政府部门的更新（变更通常只出现在其官网上）
- 新的软件发布和警报（如果你不在他们的邮件列表中）
- 发生过变更的节庆
- 房地产房源变更
- 了解你最喜欢的威士忌何时打折，或其他特优deal 在他人之前宣布
- 来自政府网站的新冠疫情相关新闻
- 来自其官网的大学/机构新闻
- 检测和监控 JSON API 响应中的变化
- JSON API 监控和警报
- 法律和其他文档中的变更
- 当网站上有文本时，通过通知触发 API 调用
- 使用 JSON 过滤器和 JSON 通知将 API 连接在一起
- 基于网页内容的变更创建 RSS 源
- 监控 HTML 源代码以检测意外的变更，加强 PCI 合规性
- 你有一份非常敏感的待监控 URL 列表，并且不想使用付费替代品。（记住，_你就是产品_）

_需要实际的带 Javascript 支持的 Chrome Runner 吗？我们支持通过 WebDriver 和 Playwright 获取数据！_

#### 主要功能

- 多种触发过滤器，例如“基于文本触发”、“通过选择器移除文本”、“忽略文本”、“提取文本”，还可以使用正则表达式！
- 使用 XPath 和 CSS 选择器靶向目标元素，轻松使用 JsonPath 规则监控复杂的 JSON 数据
- 在快速的非 JS 和基于 Chrome JS 的“获取器”之间切换
- 轻松指定网站应检查的频率
- 在提取文本之前执行 JS（适用于登录，见 UI 中的示例！）
- 覆盖请求头，指定 `POST` 或 `GET` 及其他方法
- 使用“视觉选择器”帮助靶向特定元素

_感谢所有为我仓库加星的各位！想加星请点击下方图片，它将出现在右上角。谢谢！_

[![Stargazers repo roster for @jdeath/homeassistant-addons](https://reporoster.com/stars/jdeath/homeassistant-addons)](https://github.com/jdeath/homeassistant-addons/stargazers)

## 主要功能

## 安装

该附加组件的安装非常简单，与其他任何 Hass.io 附加组件的安装方式没有区别。

1. 将我的 [Hass.io 附加组件仓库][repository] 添加到你的 Hass.io 实例。
1. 安装此附加组件。
1. 访问 ip:端口。Ingress 似乎可以工作，但页面渲染不正确。

## 如何在安装 Playwright JS 启用的获取器而非内置的纯文本/HTTP 客户端

Changedetection.io 附加组件本身只能使用内置的纯文本/HTTP 客户端获取网页。

许多现代网页使用 Javascript 填充内容，它们更动态，有时需要真正的 Chrome 浏览器来获取内容，尽管它们可能也能使用内置的“获取器”工作。

你可以配置 Changedetection.io 使用 Playwright 获取器获取页面，否则它将使用普通的非 JS 内置浏览器。使用 Playwright 获取器可以发挥 Changedetection.io 的全部功能，包括 JS 浏览器步骤来获取内容以及视觉过滤器选择器。

要使用 Playwright 获取器，Changedetection.io 附加组件需要与 alexbelgium 制作的 Browserless Chrome 附加组件合作。

要安装 Browserless Chrome 附加组件，请在 Homeassistant 中添加 alexbelgium/hassio-addons 仓库 (https://github.com/alexbelgium/hassio-addons/)。从 Homeassistant 界面安装并启动该附加组件。要使用 Playwright 获取器，只需在添加待监控新站点时选择“请求”选项卡中的"Playwright Chromium/Javascript"，或将其设置为所有监控站点的系统标准。请前往你的 Changedetection.io 附加组件的 Web 界面 > 设置 > 获取数据，并选择"Playwright Chromium/Javascript"。

更多关于 Browserless Chrome 附加组件的信息：https://github.com/alexbelgium/hassio-addons/tree/master/browserless_chrome

两个附加组件需要在同一台机器上运行。已经在 Home Assistant 2023.5.3/Supervisor 2023.04.1/Operating System 10.1 上的 Raspberry Pi 4B 上测试过，但也应该适用于其他版本以及 amd64 设备。

注意：Browserless Chrome 附加组件在获取网页时资源消耗较大（按 RAM 和 CPU 计算）。在 RPi 4B 上运行良好，但在较旧的设备上可能会慢。同时获取的最大次数限制为 1。

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
