# Home assistant 插件：Changedetection.io

**最佳且最简单的自托管免费开源网站变化检测、监控和通知服务。是 Visualping、Watchtower 等工具的替代方案。专为简单性设计——主要目标是免费监控哪些网站发生了文本变化。免费开源的网页变化检测**

#### 典型用例

- 产品和服务价格变更
- _库存不足通知_ 和 _重新有货通知_
- 政府机构更新（变更通常仅出现在其网站上）
- 新的软件发布和未加入邮件列表的安全公告
- 发生变化的节日活动
- 房地产 Listings 变更
- 当您想比别人更早知道您喜爱的威士忌打折，或其他特殊deal时
- 来自政府网站的疫情相关新闻
- 来自大学/组织官网的新闻
- 检测并监控 JSON API 响应中的变化
- JSON API 监控和告警
- 文档（法律和其他）中的变更
- 通过通知触发 API 调用（当网站上出现文本时）
- 使用 JSON 过滤器和 JSON 通知组合 API
- 基于网页内容的变化创建 RSS  feeds
- 监控 HTML 源代码中的意外变化，增强 PCI 合规性
- 如果您有一组非常敏感的 URL 需要监控，并且不想使用付费替代品。（记住，**您**就是产品）

_需要带 JavaScript 支持的 Chrome 浏览器内核吗？我们支持通过 WebDriver 和 Playwright 获取数据！_

#### 关键功能

- 包含大量触发过滤器，如"文本触发"、"通过选择器移除文本"、"忽略文本"、"提取文本"，还支持正则表达式！
- 使用 XPath 和 CSS 选择器指定目标元素，轻松使用 JsonPath 规则监控复杂的 JSON 数据
- 在快速非 JS 和基于 Chrome JS 的“获取器”之间切换
- 轻松指定网站应检查的频率
- 在提取文本前执行 JS（适合登录，参见 UI 中示例！）
- 重写请求头，指定 `POST` 或 `GET` 及其他方法
- 使用“视觉选择器”帮助定位特定元素

_感谢所有给我这个项目加星的人们！想给它加星请点击下方的图片，它将出现在右上角。谢谢！_

[![@jdeath/homeassistant-addons 仓库的星号收藏人员排班表](https://reporoster.com/stars/jdeath/homeassistant-addons)](https://github.com/jdeath/homeassistant-addons/stargazers)

## 关键功能


## 安装

该插件的安装非常简单，与安装任何其他 Hass.io 插件没有区别。

1. [将我的 Hass.io 插件仓库][repository] 添加到您的 Hass.io 实例中。
2. 安装此插件。
3. 进入 ip:port 页面。Ingress 似乎可用，但页面渲染不正确。

## 如何用法安装使用 Playwright JS 启用获取器而不是内置的纯文本/HTTP 客户端

Changedetection.io 插件本身只能使用内置的纯文本/HTTP 客户端抓取网站。

许多现代网页使用 JavaScript 填充内容，它们更动态，有时需要真实的 Chrome 浏览器来抓取内容，尽管许多页面可能可以使用内置的“获取器”工作。

您可以配置 Changedetection.io 使用 Playwright 获取器抓取页面，否则它将使用简单的非 JS 内置浏览器抓取。使用 Playwright 获取器可充分利用 Changedetection.io 的所有功能，包括用于抓取内容的 JS 浏览器步骤和视觉过滤器选择器。

要使用 Playwright 获取器，Changedetection.io 插件需要与 alexbelgium 制作的 Browserless Chrome 插件协作。

要安装 Browserless Chrome 插件，请在 Homeassistant 中添加到 alexbelgium/hassio-addons 仓库 (https://github.com/alexbelgium/hassio-addons/)，并从 Homeassistant 界面安装并启动该插件。要使用 Playwright 获取器，只需添加新监控站点或在设置中将其设为所有监控站点的系统默认值时，在“请求”标签页中勾选“Playwright Chromium/Javascript"。进入您的 Changedetection.io 插件 Web 界面 > 设置 > 抓取，并选择"Playwright Chromium/Javascript"。

有关 Browserless Chrome 插件的更多信息：https://github.com/alexbelgium/hassio-addons/tree/master/browserless_chrome

两个插件需要在同一台机器上运行。已在 Home Assistant 2023.5.3/Supervisor 2023.04.1/操作系统 10.1 上的 Raspberry Pi 4B 上测试过，但应与任何其他版本以及 amd64 设备一起正常工作。

注意：Browserless Chrome 插件在抓取网站时相当消耗资源，就 CPU 和内存而言被视为负担。在 RPi 4B 上运行良好，在较旧的设备上可能会较慢。最大并发抓取次数限制为 1。

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
