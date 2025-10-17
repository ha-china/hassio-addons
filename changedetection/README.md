# Home assistant add-on: Changedetection.io

**最佳且最简单的自托管免费开源网站变更检测跟踪、监控和通知服务。Visualping、Watchtower 等的替代方案。为简洁设计——主要目标是免费监控哪些网站出现了文本变更。免费开源网页变更检测**

#### 示例使用场景

- 产品和服务价格变更
- _缺货通知_ 和 _重新上架通知_
- 政府部门更新（变更通常只在其网站上）
- 当您不在其邮件列表上时，新软件发布、安全通知。
- 变更中的节日
- 房地产列表变更
- 知道您最喜欢的威士忌何时打折，或其他人宣布其他特别优惠之前
- 政府网站上的 COVID 相关新闻
- 大学/组织网站上的新闻
- 检测和监控 JSON API 响应中的变更
- JSON API 监控和警报
- 法律和其他文档的变更
- 当网站出现文本时通过通知触发 API 调用
- 使用 JSON 过滤器和 JSON 通知将 API 粘合在一起
- 基于网页内容变更创建 RSS 源
- 监控 HTML 源代码的意外变更，加强您的 PCI 合规性
- 您有一个非常敏感的 URL 列表要监控，并且您不希望使用付费替代方案。（记住，_您_就是产品）

_Need an actual Chrome runner with Javascript support? We support fetching via WebDriver and Playwright!</a>_

#### 主要功能

- 许多触发过滤器，如“文本触发”、“通过选择器删除文本”、“忽略文本”、“提取文本”，还使用正则表达式！
- 使用 XPath 和 CSS 选择器定位元素，轻松使用 JsonPath 规则监控复杂的 JSON
- 在基于 JS 的快速非 JS 和 Chrome JS 的“获取器”之间切换
- 轻松指定网站检查的频率
- 在提取文本之前执行 JS（适用于登录，请查看 UI 中的示例！）
- 覆盖请求头，指定 `POST` 或 `GET` 和其他方法
- 使用“视觉选择器”帮助定位特定元素

_感谢所有 star 我的仓库！要 star 它，请点击下面的图片，然后它将在右上角。谢谢！_

[![Stargazers repo roster for @jdeath/homeassistant-addons](https://reporoster.com/stars/jdeath/homeassistant-addons)](https://github.com/jdeath/homeassistant-addons/stargazers)

## 主要功能


## 安装

此插件的安装非常简单，与安装任何其他 Hass.io 插件没有区别。

1. [将我的 Hass.io 插件仓库][repository]添加到您的 Hass.io 实例。
1. 安装此插件。
1. 转到 ip:port。Ingress 差不多有效，但页面无法正确渲染


## 如何使用 Playwright JS 启用的获取器而不是内置的 Plaintext/HTTP 客户端

Changedetection.io 插件本身只能使用内置的 Plaintext/HTTP 客户端获取网站。

许多现代网页使用 JavaScript 填充内容，它们更动态，有时需要真正的 Chrome 浏览器来获取内容，尽管许多可以使用内置的“获取器”工作

您可以将 Changedetection.io 配置为使用 Playwright 获取器获取页面，否则它将使用普通的非 JS 内置浏览器。使用 Playwright 获取器提供 Changedetection.io 的全部功能，包括 JS 浏览器步骤来获取内容和视觉过滤器选择器。

要使用 Playwright 获取器，Changedetection.io 插件需要与 alexbelgium 制作的 Browserless Chrome 插件合作。

要安装 Browserless Chrome 插件，将 alexbelgium/hassio-addons 仓库（https://github.com/alexbelgium/hassio-addons/）添加到 Homeassistant。从 Homeassistant 界面安装并启动插件。要使用 Playwright 获取器，只需在添加要监控的新网站时或在将“Playwright Chromium/Javascript”设置为所有监控网站的系统标准时，转到 Changedetection.io 插件的 Web 界面 > 设置 > 获取并选择“Playwright Chromium/Javascript”。

更多关于 Browserless Chrome 插件的信息：https://github.com/alexbelgium/hassio-addons/tree/master/browserless_chrome

这两个插件需要在同一台机器上运行。在 Home Assistant 2023.5.3/Supervisor 2023.04.1/操作系统 10.1 上的 Raspberry Pi 4B 上经过测试，但应该与其他版本和 amd64 设备一起工作。

注意：Browserless Chrome 插件在获取网站时非常消耗资源，无论是在 RAM 还是 CPU 方面。在 Raspberry Pi 4B 上运行良好，但在旧设备上可能较慢。最大并发获取限制为 1。


[repository]: https://github.com/jdeath/homeassistant-addons