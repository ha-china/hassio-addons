# Home Assistant 插件：Changedetection.io

**最好且最简易的自托管免费开源网站变更检测追踪、监控和通知服务。Visualping、Watchtower 等产品的替代方案。专为简易性设计——主要目标是免费监控哪些网站发生了文本变化。免费开源网页变更检测**

#### 典型应用场景

- 产品和服务价格变动
- _库存耗尽通知_ 和 _库存恢复通知_
- 政府机构更新（变更通常仅出现在其网站上）
- 新软件发布、安全预警（如果你不在其邮件列表中则无法知晓）
- 带有新内容的节日活动
- 房地产资讯变化
- 了解你喜爱的小众威士忌是否在售，或其他特殊优惠何时被宣布
- 政府网站的新冠疫情相关新闻
- 大学/组织从其网站发布的新消息
- 检测和监控 JSON API 响应中的变化
- JSON API 监控和告警
- 法律和 других重要文档的变更
- 当网页出现特定文本时，通过通知触发 API 调用
- 使用 JSON 过滤器和 JSON 通知将 API 连接起来
- 基于网页内容的变化创建 RSS 源
- 监控 HTML 源代码以发现意外变化，加强您的 PCI 合规性
- 你有非常敏感的 URL 名单需要监控，并且 _不_ 想使用付费替代方案。（记住，_你_ 就是产品）

_需要一个支持 JavaScript 的实际 Chrome 运行器吗？我们支持通过 WebDriver 和 Playwright 获取内容！_

#### 主要功能

- 拥有丰富的触发过滤器，例如“触发特定文本”、“移除指定元素”、“忽略文本”、“提取文本”，还支持正则表达式！
- 使用 XPath 和 CSS 选择器定位目标元素，轻松使用 JsonPath 规则监控复杂的 JSON 数据
- 在快速非 JS 模式和基于 Chrome 的 JS 模式“获取器”之间切换
- 轻松指定网站应检查的周期
- 在提取文本前执行 JS 脚本（适合登录场景，见 UI 中的示例！）
- 覆盖请求头，指定 `POST` 或 `GET` 及其他方法
- 使用“视觉选择器”帮助定位特定元素

_感谢所有给我的仓库点亮 Star 的人！要在右上角点亮它，点击图片下方链接即可。谢谢！_

[![Stargazers repo roster for @jdeath/homeassistant-addons](https://reporoster.com/stars/jdeath/homeassistant-addons)](https://github.com/jdeath/homeassistant-addons/stargazers)

## 主要功能


## 安装

本插件的安装相当简单，与安装其他 Hass.io 插件相比并无不同。

1. 将 [我的 Hass.io 插件库][repository] 添加到您的 Hass.io 实例中。
2. 安装此插件。
3. 访问 ip:port 。Ingress 大致可用，但页面渲染可能不正确。

## 如何改用 Playwright JS 支持的获取器，而不是内置的纯文本/HTTP 客户端

Changedetection.io 插件本身仅能使用内置的纯文本/HTTP 客户端获取网站数据。

许多现代网页使用 JavaScript 填充内容，它们更动态，有时需要使用真实的 Chrome 浏览器来获取内容（尽管许多页面也可能与内置的“获取器”兼容）。

您可以配置 Changedetection.io 使用 Playwright 获取器获取页面，否则它将使用内置的纯非 JS 浏览器进行获取。使用 Playwright 获取器可提供完整的 Changedetection.io 功能，包括 JS 浏览器步骤来获取内容以及视觉过滤器选择器。

要使用 Playwright 获取器，Changedetection.io 插件需要与 alexbelgium 制作的 Browserless Chrome 插件配合使用。

要安装 Browserless Chrome 插件，请在 Home Assistant 中添加 alexbelgium/hassio-addons 库 (https://github.com/alexbelgium/hassio-addons/)。从 Home Assistant 界面安装并启动该插件。要使用 Playwright 获取器，只需在添加新监控站点或将其设置为所有监控站点的系统默认值时，在“请求”选项卡中勾选"Playwright Chromium/Javascript"。然后进入您的 Changedetection.io 插件的 Web 界面 > 设置 > 获取，并选择"Playwright Chromium/Javascript"。

关于 Browserless Chrome 插件的更多信息：https://github.com/alexbelgium/hassio-addons/tree/master/browserless_chrome

两个插件需要在同一台机器上运行。已在 Home Assistant 2023.5.3 / 监视器 2023.04.1 / 操作系统 10.1 的 Raspberry Pi 4B 上测试，但应与任何其它版本以及 amd64 设备兼容。

注意：Browserless Chrome 插件在抓取网站时资源消耗较高（以 RAM 和 CPU 为指标）。在 RPi 4B 上运行良好，但在旧设备上也可能运行缓慢。最大并发抓取数限制为 1。

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
