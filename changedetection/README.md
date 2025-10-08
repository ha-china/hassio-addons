# Home assistant add-on: Changedetection.io

**最好的、最简单的自托管免费开源网站变更检测跟踪、监控和通知服务。是 Visualping、Watchtower 等的替代方案。专为简洁设计——主要目标是免费监控哪些网站的文本发生了变化。免费开源网页变更检测**

#### 示例用例

- 产品和服务价格发生变化
- _缺货通知_ 和 _库存恢复通知_
- 政府部门更新（变更通常只在其网站上）
- 新软件发布，安全公告，而您不在其邮件列表上。
- 节日变更
- 房地产列表变更
- 知道您最喜欢的威士忌何时打折，或其他人宣布其他特殊优惠之前
- 政府网站上的 COVID 相关新闻
- 大学/组织网站上的新闻
- 检测和监控 JSON API 响应中的变更
- JSON API 监控和警报
- 法律和其他文件的变更
- 当网站上的文本出现时，通过通知触发 API 调用
- 使用 JSON 过滤器和 JSON 通知将 API 粘合在一起
- 根据网页内容的变化创建 RSS 源
- 监控 HTML 源代码的意外变更，加强您的 PCI 合规性
- 您有一个非常敏感的 URL 列表要监控，并且您不想使用付费替代方案。（记住，_您_ 就是产品）

_N需要带有 JavaScript 支持的实际 Chrome 运行器？我们支持通过 WebDriver 和 Playwright 获取！_

#### 主要功能

- 许多触发过滤器，如 "按文本触发"、"通过选择器删除文本"、"忽略文本"、"提取文本"，还使用正则表达式！
- 使用 XPath 和 CSS 选择器定位元素，轻松使用 JsonPath 规则监控复杂的 JSON
- 在快速非 JS 和基于 Chrome JS 的 "获取器" 之间切换
- 轻松指定网站应该检查的频率
- 在提取文本之前执行 JS（适用于登录，请查看 UI 中的示例！）
- 覆盖请求头，指定 `POST` 或 `GET` 和其他方法
- 使用 "视觉选择器" 帮助定位特定元素

_感谢所有给我的仓库点赞的人！要点赞，请点击下面的图片，然后它将出现在右上角。谢谢！_

[![Stargazers repo roster for @jdeath/homeassistant-addons](https://reporoster.com/stars/jdeath/homeassistant-addons)](https://github.com/jdeath/homeassistant-addons/stargazers)

## 主要功能


## 安装

此插件的安装非常简单，与其他 Hass.io 插件的安装没有区别。

1. [将我的 Hass.io 插件仓库][repository] 添加到您的 Hass.io 实例。
1. 安装此插件。
1. 转到 ip:port。Ingress 差不多可以工作，但页面无法正确渲染


## 如何使用 Playwright JS 启用的获取器而不是内置的 Plaintext/HTTP Client

Changedetection.io 插件本身只能使用内置的 Plaintext/HTTP Client 获取网站。

许多现代网页使用 JavaScript 填充内容，它们更动态，有时需要真实的 Chrome 浏览器来获取内容，尽管许多网页可能使用内置的 'fetcher' 即可工作

您可以将 Changedetection.io 配置为使用 Playwright 获取器获取页面，否则它将使用纯非 JS 内置浏览器。使用 Playwright 获取器提供 Changedetection.io 的全部功能，包括 JS 浏览器步骤来获取内容和视觉过滤器选择器。

要使用 Playwright 获取器，Changedetection.io 插件需要与 alexbelgium 制作的 Browserless Chrome 插件合作。

要安装 Browserless Chrome 插件，请在 Homeassistant 中添加 alexbelgium/hassio-addons 仓库（https://github.com/alexbelgium/hassio-addons/）。从 Homeassistant 界面安装并启动插件。要使用 Playwright 获取器，只需在添加要监控的新网站时或在将 Playwright Chromium/Javascript 设置为所有监控网站的系统标准时，转到 Changedetection.io 插件的 Web 界面 > 设置 > 获取并选择 "Playwright Chromium/Javascript"。

更多关于 Browserless Chrome 插件的信息：https://github.com/alexbelgium/hassio-addons/tree/master/browserless_chrome

这两个插件需要在同一台机器上运行。已在 Home Assistant 2023.5.3/Supervisor 2023.04.1/操作系统 10.1 在 Raspberry Pi 4B 上测试，但应该与其他版本和 amd64 设备一起工作。

注意：Browserless Chrome 插件在获取网站时非常消耗资源，无论是在 RAM 和 CPU 方面。在 Raspberry Pi 4B 上运行良好，但在旧设备上可能较慢。最大并发获取限制为 1。

[repository]: https://github.com/jdeath/homeassistant-addons