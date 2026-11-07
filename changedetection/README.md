# Home assistant 插件：Changedetection.io

最好的、最简洁的自托管免费开源网站变化检测跟踪、监控和通知服务。它是 Visualping、Watchtower 等工具的替代品。专为简洁性而设计——主要目标是免费监控哪些网站发生了文字变化。免费开源的网页变化检测。

#### 使用示例

- 产品和服务出现价格调整
- _缺货通知_ 和 _补货通知_
- 政府部门的更新（更改通常只出现在他们的网站上）
- 新软件发布、安全须知（即使您未订阅其邮件列表）
- 有更改的节庆活动
- 房地产 listing 变更
- 知道您最喜欢的威士忌上市销售，或在其他人之前获悉其他特价活动的 announcement
- 政府网站上的 COVID 相关新闻
- 大学/组织从其网站发布的新闻
- 检测并监控 JSON API 响应的变化
- JSON API 监控和告警
- 法律及其他文件的变更
- 当网页出现文字时，通过通知触发 API 调用
- 使用 JSON 过滤器和 JSON 通知将 API 连接起来
- 基于网页内容的变化创建 RSS  feed
- 监控 HTML 源代码以发现意外更改，加强 PCI 合规性
- 如果您有一组非常敏感的用以监控的 URL，并且_不想_使用付费替代品。（记住，_您_就是产品）

_需要实际支持 JavaScript 的 Chrome 浏览器？我们支持通过 WebDriver 和 Playwright 获取数据！_

#### 主要功能

- 拥有大量触发过滤器，例如“触发于文字”、“移除指定选择器的文字”、“忽略文字”、“提取文字”，还支持正则表达式！
- 使用 xPath 和 CSS 选择器靶向目标元素，轻松使用 JsonPath 规则监控复杂的 JSON
- 在快速非 JS 和 Chrome JS 基础"fetcher"之间切换
- 轻松指定网站应检查的频率
- 在提取文字之前执行 JS（适合登录等场景，请在 UI 中查看示例！）
- 覆盖请求头，指定 `POST` 或`GET` 及其他方法
- 使用“视觉选择器”帮助靶向特定元素

_感谢所有为我仓库点赞的人们！想要点赞请点击下方图片，这样它就会显示在右上角。谢谢！_

[![Starred repositories roster for @jdeath/homeassistant-addons](https://reporoster.com/stars/jdeath/homeassistant-addons)](https://github.com/jdeath/homeassistant-addons/stargazers)

## 主要功能


## 安装

该插件的安装非常简单，与其他任何 Hass.io 插件的安装方式没有区别。

1. [添加我的 Hass.io 插件仓库][repository] 到您的 Hass.io 实例中。
1. 安装此插件。
1. 访问 ip:端口。Ingress 大致可用，但页面渲染可能不正确


## 如何配置 Playwright JS 支持的 fetcher 以替代内置的纯文本/HTTP 客户端

Changedetection.io 插件仅能使用内置的纯文本/HTTP 客户端获取网站数据。

许多现代网页使用 JavaScript 填充内容，它们更动态，有时需要真实的 Chrome 浏览器来获取内容（尽管许多页面可以使用内置的"fetcher"工作）。

您可以配置 Changedetection.io 使用 Playwright fetcher 获取页面，否则它将使用裸体的非 JS 内置浏览器进行获取。使用 Playwright fetcher 可以发挥 Changedetection.io 的全部功能，包括用 JS 浏览器步骤获取内容以及视觉过滤器选择器。

要使用 Playwright fetcher，Changedetection.io 插件需与 alexbelgium 开发的 Browserless Chrome 插件合作。

要安装 Browserless Chrome 插件，请在 Homeassistant 中添加 alexbelgium/hassio-addons 仓库（https://github.com/alexbelgium/hassio-addons/）。在 Homeassistant 界面中安装并启动该插件。要使用 Playwright fetcher，请在添加要监控的新站点时勾选 "Playwright Chromium/Javascript"，或将其设为所有监控站点的系统标准：进入 Changedetection.io 插件的 Web 界面 > 设置 > Fetching，并选择 "Playwright Chromium/Javascript"。

关于 Browserless Chrome 插件的更多详情：https://github.com/alexbelgium/hassio-addons/tree/master/browserless_chrome

两个插件需要在同一台机器上运行。已在 Home Assistant 2023.5.3 / Supervisor 2023.04.1 / 操作系统 10.1 上的 Raspberry Pi 4B 上测试，但应适用于其他版本以及 amd64 设备。

注意：Browserless Chrome 插件在获取网站时相当消耗资源，在内存和 CPU 方面消耗较高。在 RPi 4B 上运行正常，在旧设备上可能较慢。最大并发获取次数限制为 1。


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
