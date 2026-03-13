# Home assistant 插件：Changedetection.io

**最好的、最简单的自托管的免费开源网站变更检测、监控和通知服务。Visualping、Watchtower 等的替代品。设计理念为简单——主要目标是简单地免费监控哪些网站有文本变更。免费开源的网页变更检测**

#### 示例使用场景

- 产品和服务价格变动
- _缺货通知_ 和 _恢复库存通知_
- 政府部门更新（变更通常仅在其网站上）
- 新软件发布、安全警告，当您不在他们的邮件列表中时。
- 节日变更
- 房地产列表变更
- 知道您最喜欢的威士忌何时打折，或其他特别优惠在其他人之前公布
- 来自政府网站的 COVID 相关新闻
- 大学/组织网站的新闻
- 检测和监控 JSON API 响应中的变更
- JSON API 监控和警报
- 法律和其他文件的变更
- 当文本出现在网站上时通过通知触发 API 调用
- 使用 JSON 过滤器和 JSON 通知将 API 粘合在一起
- 根据网页内容变更创建 RSS 源
- 监控 HTML 源代码的意外变更，加强您的 PCI 合规性
- 您有一份非常敏感的 URL 列表需要监控，并且您不想使用付费替代品。（记住，_您_ 是产品）

_需要实际支持 JavaScript 的 Chrome 运行器吗？我们支持通过 WebDriver 和 Playwright 进行抓取！_

#### 关键功能

- 许多触发过滤器，例如“根据文本触发”、“通过选择器删除文本”、“忽略文本”、“提取文本”，还支持正则表达式！
- 使用 xPath 和 CSS 选择器定位目标元素，轻松监控复杂的 JSON，使用 JsonPath 规则
- 在快速的非 JS 和基于 Chrome JS 的“fetcher”之间切换
- 容易指定网站应该检查的频率
- 在提取文本之前执行 JS（适用于登录，请参阅 UI 中的示例！）
- 覆盖请求头，指定 `POST` 或 `GET` 和其他方法
- 使用“视觉选择器”帮助定位特定元素

_感谢所有为我仓库加星的人！要加星，请点击下面的图片，然后它将显示在右上角。谢谢！_

[![Stargazers 仓库列表 for @jdeath/homeassistant-addons](https://reporoster.com/stars/jdeath/homeassistant-addons)](https://github.com/jdeath/homeassistant-addons/stargazers)

## 关键功能


## 安装

此插件的安装非常简单，与安装任何其他 Hass.io 插件没有区别。

1. 将我的 Hass.io 插件仓库[仓库](https://github.com/jdeath/homeassistant-addons)添加到您的 Hass.io 实例中。
1. 安装此插件。
1. 前往 ip:port 。入口排序功能正常，但页面无法正确渲染


## 如何使用启用 Playwright JS 的 fetcher 替代内置的 Plaintext/HTTP 客户端

Changedetection.io 插件本身只能使用内置的 Plaintext/HTTP 客户端抓取网站。

许多现代网页使用 JavaScript 来填充内容，它们更动态，有时需要真实的 Chrome 浏览器来抓取内容，尽管许多内容可能使用内置的 'fetcher' 就可以抓取。

您可以配置 Changedetection.io 使用 Playwright fetcher 来抓取页面，否则它将使用内置的非 JS 浏览器进行抓取。使用 Playwright fetcher 提供了完整的 Changedetection.io 功能，包括 JS 浏览器步骤来抓取内容，以及视觉过滤选择器。

要使用 Playwright fetcher，Changedetection.io 插件需要与由 alexbelgium 开发的 Browserless Chrome 插件合作。

要安装 Browserless Chrome 插件，请将 alexbelgium/hassio-addons 仓库（https://github.com/alexbelgium/hassio-addons/）添加到 Homeassistant。从 Homeassistant 界面安装并启动插件。要使用 Playwright fetcher，只需在添加新网站进行监控或将其设置为所有监控网站的系统标准时，在“请求”选项卡中勾选“Playwright Chromium/Javascript”。前往您 Changedetection.io 插件的 Web 界面 > 设置 > 抓取，并选择“Playwright Chromium/Javascript”。

更多关于 Browserless Chrome 插件的信息：https://github.com/alexbelgium/hassio-addons/tree/master/browserless_chrome

两个插件需要在同一台机器上运行。在 Raspberry Pi 4B 上测试了 Home Assistant 2023.5.3/Supervisor 2023.04.1/操作系统 10.1，但应该适用于任何其他版本，以及 amd64 设备。

注意：Browserless Chrome 插件在抓取网站时资源消耗很大，无论是 RAM 还是 CPU。在 RPi 4B 上运行良好，在较旧的设备上可能较慢。最大同时抓取次数限制为 1。


[仓库]: https://github.com/jdeath/homeassistant-addons
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
