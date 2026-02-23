# Home assistant add-on: Changedetection.io

**最好的和最简单的自托管免费开源网站变更检测跟踪、监控和通知服务。是 Visualping、Watchtower 等的替代品。为简单设计 - 主要目标是免费监控哪些网站发生了文本变更。免费开源网页变更检测**

#### 示例使用案例

- 产品和服务价格变更
- _缺货通知_ 和 _重新有货通知_
- 政府部门更新（变更通常只在他们的网站上）
- 新软件发布，安全通知，当你不在他们的邮件列表上时。
- 节日变更
- 房地产列表变更
- 知道你最喜欢的威士忌何时打折，或其他特殊优惠在其他人宣布之前被宣布
- 政府网站上的 COVID 相关新闻
- 大学/组织网站上的新闻
- 检测和监控 JSON API 响应中的变更
- JSON API 监控和警报
- 法律和其他文件中的变更
- 当网站上的文本出现时通过通知触发 API 调用
- 使用 JSON 过滤器和 JSON 通知将 API 连接在一起
- 基于网页内容变更创建 RSS 源
- 监控 HTML 源代码中的意外变更，加强你的 PCI 合规性
- 你有一个非常敏感的 URL 列表要监控，并且你不想使用付费替代方案。（记住，_你_ 就是产品）

_需要一个带有 JavaScript 支持的实际 Chrome 运行器？我们支持通过 WebDriver 和 Playwright 获取！_

#### 主要功能

- 许多触发过滤器，例如“文本触发”、“通过选择器删除文本”、“忽略文本”、“提取文本”，还使用正则表达式！
- 使用 XPath 和 CSS 选择器定位元素，轻松监控复杂的 JSON，使用 JsonPath 规则
- 在快速非 JS 和基于 Chrome JS 的“获取器”之间切换
- 轻松指定网站应该多久检查一次
- 在提取文本之前执行 JS（适用于登录，请查看 UI 中的示例！）
- 覆盖请求头，指定 `POST` 或 `GET` 和其他方法
- 使用“可视化选择器”来帮助定位特定元素

_感谢大家给我的仓库星标！要星标它，请点击下面的图片，然后它会在右上角。谢谢！_

[![Stargazers repo roster for @jdeath/homeassistant-addons](https://reporoster.com/stars/jdeath/homeassistant-addons)](https://github.com/jdeath/homeassistant-addons/stargazers)

## 主要功能


## 安装

这个 add-on 的安装非常简单，与其他 Hass.io add-on 的安装没有区别。

1. [将我的 Hass.io add-on 仓库][repository] 添加到你的 Hass.io 实例。
1. 安装这个 add-on。
1. 进入 ip:port。Ingress 差不多有效，但页面无法正确渲染


## 如何使用带有 Playwright JS 的获取器而不是内置的 Plaintext/HTTP Client

Changedetection.io add-on 本身只能使用内置的 Plaintext/HTTP Client 获取网站。

许多现代网页使用 JavaScript 填充内容，它们更动态，有时需要实际的 Chrome 浏览器来获取内容，尽管许多可能使用内置的“获取器”就能工作

你可以配置 Changedetection.io 使用 Playwright 获取器获取页面，否则它将使用普通的非 JS 内置浏览器。使用 Playwright 获取器提供 Changedetection.io 的全部功能，包括 JS 浏览器步骤来获取内容和可视化过滤器选择器。

要使用 Playwright 获取器，Changedetection.io add-on 需要与 alexbelgium 制作的可浏览 Chrome add-on 合作。

要安装可浏览 Chrome add-on，将 alexbelgium/hassio-addons 仓库（https://github.com/alexbelgium/hassio-addons/）添加到 Homeassistant。从 Homeassistant 界面安装并启动 add-on。要使用 Playwright 获取器，只需在添加要监控的新网站时或在将 Playwright Chromium/Javascript 设置为所有监控网站的系统标准时，进入 Changedetection.io add-on 的 Web 界面 > 设置 > 获取并选择“Playwright Chromium/Javascript”。

关于可浏览 Chrome add-on：https://github.com/alexbelgium/hassio-addons/tree/master/browserless_chrome

这两个 add-on 都需要在同一台机器上运行。在 Home Assistant 2023.5.3/Supervisor 2023.04.1/操作系统 10.1 上的 Raspberry Pi 4B 上测试过，但应该与其他版本和 amd64 设备一起工作。

注意：可浏览 Chrome add-on 在获取网站时非常消耗资源，无论是在 RAM 还是 CPU 方面。在 Raspberry Pi 4B 上运行良好，在旧设备上可能较慢。最大同时获取限制为 1。

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
