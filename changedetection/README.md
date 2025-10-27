# Home assistant add-on: Changedetection.io

**最好的和最简单的自托管免费开源网站变化检测跟踪、监控和通知服务。是 Visualping、Watchtower 等的替代品。为简洁而设计 - 主要目标是免费监控哪些网站发生了文本变化。免费开源网页变化检测**

#### 示例使用场景

- 产品和服务价格发生变化
- 缺货通知 和 重补货通知
- 政府部门更新（变化通常只在他们网站上）
- 当您不在他们的邮件列表上时，新的软件发布、安全建议。
- 活节日的变化
- 房地产列表变化
- 知道您最喜欢的威士忌何时打折，或其他人宣布其他特别优惠之前
- 政府网站上的 COVID 相关新闻
- 大学/组织网站上的新闻
- 检测和监控 JSON API 响应的变化
- JSON API 监控和警报
- 法律和其他文件的变化
- 当网站出现文本时通过通知触发 API 调用
- 使用 JSON 过滤器和 JSON 通知将 API 粘合在一起
- 根据网页内容的变化创建 RSS 源
- 监控 HTML 源代码的意外变化，加强您的 PCI 合规性
- 您有一个非常敏感的 URL 列表要监视，并且您不希望使用付费替代方案。（记住，您自己是产品）

_需要带有 JavaScript 支持的实际 Chrome 运行器？我们支持通过 WebDriver 和 Playwright 获取！_

#### 主要功能

- 许多触发过滤器，例如“触发文本”、“通过选择器删除文本”、“忽略文本”、“提取文本”，还使用正则表达式！
- 使用 XPath 和 CSS 选择器定位元素，轻松监控具有 JsonPath 规则的复杂 JSON
- 在基于非 JS 的快速“获取器”和基于 Chrome JS 的“获取器”之间切换
- 轻松指定网站应该检查的频率
- 在提取文本之前执行 JS（适用于登录，请查看 UI 中的示例！）
- 覆盖请求头，指定 `POST` 或 `GET` 和其他方法
- 使用“视觉选择器”帮助定位特定元素

_感谢所有给我的仓库星标！要星标它，请点击下面的图片，然后它将在右上角。谢谢！_

[![Stargazers repo roster for @jdeath/homeassistant-addons](https://reporoster.com/stars/jdeath/homeassistant-addons)](https://github.com/jdeath/homeassistant-addons/stargazers)

## 主要功能


## 安装

这个 add-on 的安装非常简单，与安装任何其他 Hass.io add-on 没有区别。

1. [将我的 Hass.io add-on 仓库][repository]添加到您的 Hass.io 实例。
1. 安装这个 add-on。
1. 前往 ip:端口。Ingress 差不多可以工作，但页面无法正确渲染


## 如何使用 Playwright JS 启用的获取器而不是内置的 Plaintext/HTTP 客户端

Changedetection.io add-on 本身只能使用内置的 Plaintext/HTTP 客户端获取网站。

许多现代网页使用 JavaScript 填充内容，它们更加动态，有时需要真正的 Chrome 浏览器来获取内容，尽管许多可能使用内置的 'fetcher' 就可以工作

您可以将 Changedetection.io 配置为使用 Playwright 获取器获取页面，否则它将使用纯非 JS 的内置浏览器。使用 Playwright 获取器提供 Changedetection.io 的全部功能，包括 JS 浏览器步骤来获取内容和视觉过滤器选择器。

要使用 Playwright 获取器，Changedetection.io add-on 需要与 alexbelgium 制作的 Browserless Chrome add-on 合作。

要安装 Browserless Chrome add-on，请将 alexbelgium/hassio-addons 仓库（https://github.com/alexbelgium/hassio-addons/）添加到 Homeassistant。从 Homeassistant 界面安装并启动 add-on。要使用 Playwright 获取器，只需在添加要监控的新网站时或在将 Playwright Chromium/Javascript 设置为所有监控网站的系统标准时，在 Changedetection.io add-on 的 Webinterface > 设置 > 获取中选中“Playwright Chromium/Javascript”。

更多关于 Browserless Chrome add-on 的信息：https://github.com/alexbelgium/hassio-addons/tree/master/browserless_chrome

这两个 add-on 需要在同一台机器上运行。在 Home Assistant 2023.5.3/Supervisor 2023.04.1/操作系统 10.1 上的 Raspberry Pi 4B 上测试过，但应该与其他版本和 amd64 设备一起工作。

注意：Browserless Chrome add-on 在获取网站时非常消耗资源，无论是在 RAM 和 CPU 方面。在 Raspberry Pi 4B 上运行良好，在较旧的设备上可能较慢。最大同时获取限制为 1。

[repository]: https://github.com/jdeath/homeassistant-addons