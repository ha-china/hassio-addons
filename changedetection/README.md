# Home assistant add-on: Changedetection.io

**最简便、优雅的自托管免费开源网站内容变更检测、监控与通知服务。Visualping、Watchtower 等的替代方案。专为简单设计——只需免费监控哪些网站的内容发生了变化。免费开源的网页内容变更检测**

#### 典型使用场景

- 产品价格或服务的变更
- _缺货通知_ 和 _库存恢复通知_
- 政府部门的更新（更改通常仅出现在其网站上）
- 新软件发布及安全公告（当您不在其邮件列表中时）
- 带有更新活动的节日
- 房地产信息变更
- 在任何人之前发现您心仪的威士忌正在热卖，或其他特惠活动宣布
- 来自政府网站的 COVID 相关新闻
- 来自该组织的大学/组织新闻
- 检测并监控 JSON API 响应中的变化
- JSON API 监控与告警
- 检测和监控法律及其他文件中的变更
- 当网页上出现文本时，通过通知触发 API 调用
- 使用 JSON 过滤器和 JSON 通知将各个 API 连接起来
- 基于网页内容变更创建 RSS 订阅源
- 监控 HTML 源代码以发现意外更改，加强 PCI 合规性
- 如果您有一组非常敏感的 URL 需要监控，并且您不_想要_使用付费替代品。（请记住，_您自己_就是产品）

_需要实际的带有 Javascript 支持的 Chrome 执行器吗？我们通过 WebDriver 和 Playwright 提供支持！_<a_>

#### 主要功能

- 提供大量触发过滤器，例如“基于文本触发”、“按选择器移除文本”、“忽略文本”、“提取文本”，还支持使用正则表达式！
- 使用 xPath 和 CSS 选择器设置目标元素，轻松使用 JsonPath 规则监控复杂的 JSON 数据
- 在快速非 JS 模式和基于 Chrome 的 JS 模式“获取器”之间切换
- 轻松指定检查网站的频率
- 在提取文本之前执行 JS（适用于登录场景，见 UI 中的示例！）
- 覆盖请求头，指定 `POST` 或 `GET` 及其他方法
- 使用“视觉选择工具”来辅助定位特定元素

_感谢所有为我仓库点星的支持！点击上方图片点星即可，它将被显示在右上角。非常感谢！_

[![Stargazers repo roster for @jdeath/homeassistant-addons](https://reporoster.com/stars/jdeath/homeassistant-addons)](https://github.com/jdeath/homeassistant-addons/stargazers)

## 主要功能


## 安装

此 add-on 的安装非常简单，与安装任何其他 Hass.io add-on 并无不同。

1. 将 [我的 Hass.io add-ons 仓库][repository] 添加到您的 Hass.io 实例中。
1. 安装此 add-on。
1. 访问 ip:port。Ingress 大致可用，但页面渲染不正确


## 如何使用 Playwright JS 启用的获取器代替内置的明文/HTTP 客户端

Changedetection.io add-on 本身只能使用内置的明文/HTTP 客户端获取网站信息。

许多现代网页使用 JavaScript 来填充内容，它们更加动态，有时需要真实的 Chrome 浏览器来获取内容，尽管许多页面可能可以接受内置的“获取器”工作。

您可以配置 Changedetection.io 使用 Playwright 获取器获取页面，否则它将使用简单的非 JS 内置浏览器进行获取。使用 Playwright 获取器可以提供完整的 Changedetection.io 功能，包括使用 JS 浏览器执行步骤获取内容和视觉过滤器选择器。

要使用 Playwright 获取器，Changedetection.io add-on 需要与 alexbelgium 制作的 Browserless Chrome add-on 配合使用。

要安装 Browserless Chrome add-on，请在 Home Assistant 中添加 alexbelgium/hassio-addons 仓库（https://github.com/alexbelgium/hassio-addons/）。通过 Home Assistant 界面安装并启动该 add-on。要使用 Playwright 获取器，在添加新监控网站时或在设置中检查"Playwright Chromium/Javascript"，进入您的 Changedetection.io add-on 的 Web 界面 > 设置（Settings）> 获取（Fetching），并选择"Playwright Chromium/Javascript"。

关于 Browserless Chrome add-on 的更多信息：https://github.com/alexbelgium/hassio-addons/tree/master/browserless_chrome

这两个 add-on 需要在同一台机器上运行。已在 Home Assistant 2023.5.3/Supervisor 2023.04.1/操作系统 10.1 的 Raspberry Pi 4B 上测试，但与任何其他版本以及 amd64 设备也应兼容。

注意：Browserless Chrome add-on 在获取网站时资源消耗较大，属于 RAM 和 CPU 的密集型操作。在 RPi 4B 上运行时表现良好，但在旧设备上可能会较慢。同时进行的获取次数最大限制为 1。


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
