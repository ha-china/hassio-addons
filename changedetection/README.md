# Home assistant 附加组件：Changedetection.io

这是最佳且最简单易用的完全托管的免费开源网站变化检测跟踪、监控和通知服务。它是 Visualping、Watchtower 等工具的替代方案。专为简单性设计——主要目标是免费监控哪个网站的文字发生了变化。**免费开源网页内容变化检测**

#### 示例用例

- 产品和服务的价格发生变化
- _缺货通知_ 和 _补货通知_
- 政府部门更新（变化通常只出现在其网站上）
- 新软件发布、安全警告（当您不在其邮件列表时）
- 带有变化的节日活动
- 房地产 listings 变化
- 知晓您最喜欢的威士忌上市优惠，或其他特别优惠由您在此之前公布
- 来自政府网站的与 COVID 相关的新闻
- 来自其组织的大学/组织新闻
- 检测和监控 JSON API 响应的变化
- JSON API 监控和报警
- 法律和公文文档中的变化
- 当网站出现文本时，通过通知触发 API 调用
- 使用 JSON 过滤器和 JSON 通知将 API 连接在一起
- 基于网页内容的变化创建 RSS  feeds
- 监控 HTML 源代码中的意外变化，加强您的 PCI 合规性
- 如果您有一份非常敏感的 URL 列表用于监视，并且您 _不_ 想使用付费替代品。（记住，_您_ 就是产品）

_需要实际支持 Javascript 的 Chrome 运行器吗？我们通过 WebDriver 和 Playwright 支持获取！_

#### 主要功能

- 提供许多触发过滤器，例如“基于文本触发”、“选择器移除文本”、“忽略文本”、“提取文本”，也可使用正则表达式！
- 使用 XPath 和 CSS 选择器针对目标元素，轻松使用 JsonPath 规则监控复杂的 JSON 数据
- 在快速的非 JS 和基于 Chrome JS 的“获取器”之间切换
- 轻松指定应多长时间检查一次站点
- 在提取文本之前执行 JS（适合登录，请在 UI 中查看示例！）
- 覆盖请求头部，指定 `POST` 或 `GET` 及其他方法
- 使用“视觉选择器”帮助针对特定元素

_感谢大家给我的仓库点星！要给它点星，请点击下方的图片，然后它会被移至右上角。谢谢！_

[![@jdeath/homeassistant-addons 的主仓库星图](https://reporoster.com/stars/jdeath/homeassistant-addons)](https://github.com/jdeath/homeassistant-addons/stargazers)

## 主要功能


## 安装

该附加组件的安装非常直接，与其他任何 Hass.io 附加组件的安装方式没有区别。

1. 将 [_我的 Hass.io 附加组件仓库_][repository] 添加到您的 Hass.io 实例中。
1. 安装此附加组件。
1. 前往 ip:port。Ingress 大概能起作用，但页面渲染不正确。

## 如何使用 Playwright JS  enabled 获取器而非内置的明文/HTTP 客户端

Changedetection.io 附加组件本身仅能使用内置的明文/HTTP 客户端获取网站信息。

许多现代网页使用 JavaScript 填充内容，它们更动态且有时需要使用真实的 Chrome 浏览器来获取内容，尽管许多可能与内置的“获取器”兼容。

您可以配置 Changedetection.io 使用 Playwright 获取器获取页面，否则将使用纯非 JS 内置浏览器。使用 Playwright 获取器可提供完整的 Changedetection.io 功能，包括用于获取内容的 JS 浏览器步骤和视觉过滤器选择器。

要使用 Playwright 获取器，Changedetection.io 附加组件需要与由 alexbelgium 制作的 Browserless Chrome 附加组件合作。

要安装 Browserless Chrome 附加组件，请在 Homeassistant 中添加 alexbelgium/hassio-addons 仓库（https://github.com/alexbelgium/hassio-addons/）。从 Homeassistant 界面安装并启动附加组件。要使用 Playwright 获取器，只需在添加受监控的新站点时或在将其设置为所有监控站点的系统默认值时，在 “请求” 选项卡中勾选"Playwright Chromium/Javascript"（选项可能不完全准确，建议英文界面操作更顺畅）。前往您 Changedetection.io 附加组件的 Web 界面 > 设置 > 获取，并选择"Playwright Chromium/Javascript"。

关于 Browserless Chrome 附加组件的更多信息：https://github.com/alexbelgium/hassio-addons/tree/master/browserless_chrome

两个附加组件需要在同一台机器上运行。已在 Home Assistant 2023.5.3/Supervisor 2023.04.1/Operating System 10.1 下的 Raspberry Pi 4B 上测试，但应该适用于其他版本以及其他 amd64 设备。

注意：Browserless Chrome 附加组件在获取网站时相当耗费资源，表现为高 RAM 和 CPU 使用率。在 RPi 4B 上运行良好，可能在旧设备上变慢。最大并发获取数限制为 1。

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
