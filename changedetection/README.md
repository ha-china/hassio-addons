# Home assistant 附加组件：Changedetection.io

**最好的也是最简单的自托管免费开源网站更改检测跟踪、监控和通知服务。Visualping、Watchtower 等的替代方案。专为简单性设计——主要目标是为了免费监控哪些网站发生了文本更改。免费开源网页更改检测**

#### 典型使用场景

- 产品和服务的价格发生变化
- `_缺货通知_` 和 `_重新有货通知_`
- 政府部门的更新（更改通常只出现在其网站上）
- 新的软件发布、安全公告，即使你不在他们的邮件列表中也会收到通知。
- 带有变化的节日活动
- 房地产 listings 变动
- 了解你最喜欢的 whisky 何时上市，或在其他人之前知晓其他特别优惠的宣传
- 政府网站上的与 COVID 相关的内容
- 来自其网站的大学/组织新闻
- 检测和监控 JSON API 响应的更改
- JSON API 监控和警报
- 法律和-other 文档的更改
- 通过通知触发网站文本出现时调用 API
- 使用 JSON 过滤器和 JSON 通知将 API 连接起来
- 基于网页内容的更改创建 RSS 订阅源
- 监控 HTML 源代码以检测意外更改，加强 PCI 合规性
- 你有一个非常敏感的 URL 清单进行监视，并且不想使用付费替代方案。（记住，_你_ 就是产品）

_Needs 实际的带有 Javascript 支持的 Chrome runner？我们支持通过 WebDriver 和 Playwright 进行抓取！_

#### 核心功能

- 拥有大量的触发过滤器，例如“在文本上触发”、“按选择器移除文本”、“忽略文本”、“提取文本”，也可以使用正则表达式！
- 使用 xPath 和 CSS 选择器定位目标元素，轻松使用 JsonPath 规则监控复杂的 JSON
- 在快速的无 JS 和基于 Chrome JS 的"fetcher"之间切换
- 轻松指定网站应该多久被检查一次
- 在提取文本之前执行 JS（适合登录，在 UI 中查看详情！）
- 覆盖请求头，指定 `POST` 或 `GET` 和其他方法
- 使用“Visual Selector”帮助定位特定元素

_感谢大家给我 repo！如果你们愿意，请点击下方的图片使其顶格显示。谢谢！_

[![Stargazers repo roster for @jdeath/homeassistant-addons](https://reporoster.com/stars/jdeath/homeassistant-addons)](https://github.com/jdeath/homeassistant-addons/stargazers)

## 核心功能

## 安装

该附加组件的安装非常简单，与其他任何 Hass.io 附加组件的安装方式没有区别。

1. 将 [我的 Hass.io 附加组件仓库][repository] 添加到您的 Hass.io 实例中。
1. 安装此附加组件。
1. 访问 ip:port。Ingress 大体可行，但页面无法正确渲染

## 如何配置使用 Playwright JS 启用获取器而非内置的明文/HTTP 客户端

Changedetection.io 附加组件本身仅能使用内置的明文/HTTP 客户端抓取网站。

许多现代网页使用 JavaScript 填充内容，它们更动态，有时需要真实的 Chrome 浏览器来获取内容，尽管许多页面可能可以使用内置的“获取器”正常工作。

您可以配置 Changedetection.io 使用 Playwright 获取器进行页面抓取，否则它将使用纯无 JS 的内置浏览器进行抓取。使用 Playwright 获取器可提供完整的 Changedetection.io 功能，包括用于抓取内容的 JS 浏览器步骤和 Visual Filter Selector。

要使用 Playwright 获取器，Changedetection.io 附加组件需要与 alexbelgium 制作的 Browserless Chrome 附加组件配合使用。

要安装 Browserless Chrome 附加组件，请在 Homeassistant 中添加 alexbelgium/hassio-addons 仓库 (https://github.com/alexbelgium/hassio-addons/)，并从 Homeassistant 界面中安装并启动该附加组件。要使用 Playwright 获取器，只需在添加新待监测网站或将它设置为所有受监控网站的系统标准时，在“请求”选项卡中勾选"Playwright Chromium/Javascript"，然后进入你的 Changedetection.io 附加组件的 Web 界面 > 设置 > Fetching，并选择"Playwright Chromium/Javascript"。

关于 Browserless Chrome 附加组件的更多信息：https://github.com/alexbelgium/hassio-addons/tree/master/browserless_chrome

这两个附加组件需要在同一台机器上运行。已在 Home Assistant 2023.5.3/Supervisor 2023.04.1/Operating System 10.1 上的 Raspberry Pi 4B 上测试，但应该与其他版本以及 amd64 设备兼容。

注意：Browserless Chrome 附加组件在抓取网站时资源消耗较大，在术语上属于 CPU 和 RAM 上的“机器人”。在 RPi 4B 上运行正常，旧设备上可能较慢。最大同时抓取次数限制为 1。

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
