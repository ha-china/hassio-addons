# Home Assistant 插件：Changedetection.io

**最佳且最简单的自托管免费开源网站变更检测、监控和通知服务。Visualping、Watchtower 等的替代品。设计理念为简洁——主要目标是简单地免费监控哪些网站有文本变更。免费开源的网页变更检测**

#### 示例用途

- 产品和服务价格变更
- _缺货通知_ 和 _补货通知_
- 政府部门更新（变更通常仅在其网站上）
- 新软件发布、安全通知（当你不在他们的邮件列表中时）
- 节日变更
- 房地产列表变更
- 当你喜欢的威士忌降价或其他特别优惠发布时，或其他人之前知道
- 来自政府网站的COVID相关新闻
- 大学/组织网站的新闻
- 检测和监控JSON API响应中的变更
- JSON API监控和警报
- 法律和其他文件中的变更
- 当网站上的文本出现时通过通知触发API调用
- 使用JSON过滤器和JSON通知将API粘合在一起
- 根据网页内容变更创建RSS源
- 监控HTML源代码的意外变更，加强PCI合规性
- 你有一份非常敏感的URL观察列表，并且你不想使用付费替代品。（记住，_你_ 是产品）

_需要实际支持JavaScript的Chrome运行器吗？我们支持通过WebDriver和Playwright获取数据！_

#### 关键特性

- 许多触发过滤器，例如“文本触发”、“通过选择器移除文本”、“忽略文本”、“提取文本”，还可以使用正则表达式！
- 使用xPath和CSS选择器定位目标元素，轻松使用JsonPath规则监控复杂的JSON
- 在快速非JS和基于Chrome JS的“获取器”之间切换
- 容易指定网站应该多久检查一次
- 在提取文本之前执行JS（用于登录，UI中的示例！）
- 覆盖请求头，指定`POST`或`GET`和其他方法
- 使用“视觉选择器”帮助定位特定元素

_感谢所有star我的repo的人！要star它，请点击下面的图片，然后它就会显示在右上角。谢谢！_

[![Stargazers repo roster for @jdeath/homeassistant-addons](https://reporoster.com/stars/jdeath/homeassistant-addons)](https://github.com/jdeath/homeassistant-addons/stargazers)

## 关键特性

## 安装

此插件的安装非常简单，与安装任何其他Hass.io插件没有区别。

1. [将我的Hass.io插件仓库][仓库]添加到您的Hass.io实例中。
1. 安装此插件。
1. 前往ip:port。入口排序似乎可以工作，但页面无法正确渲染

## 如何使用Playwright JS启用获取器而不是内置的纯文本/HTTP客户端

Changedetection.io插件本身只能使用内置的纯文本/HTTP客户端获取网站。

许多现代网页使用JavaScript来填充内容，它们更加动态，有时需要真实的Chrome浏览器来获取内容，尽管许多可能使用内置的'获取器'就能工作。

您可以将Changedetection.io配置为使用Playwright获取器，否则它将使用纯非JS内置浏览器获取数据。使用Playwright获取器提供完整的Changedetection.io功能，包括JS浏览器步骤以获取内容，以及视觉过滤选择器。

要使用Playwright获取器，Changedetection.io插件需要与由alexbelgium制作的Browserless Chrome插件合作。

要安装Browserless Chrome插件，请在Home Assistant中添加alexbelgium/hassio-addons仓库（https://github.com/alexbelgium/hassio-addons/）。从Home Assistant界面安装并启动插件。要使用Playwright获取器，只需在添加新站点进行监控时或在设置系统标准以监控所有站点时，在“请求”选项卡中勾选“Playwright Chromium/JavaScript”。要使用Playwright获取器，只需在添加新站点进行监控时或在设置系统标准以监控所有站点时，在“请求”选项卡中勾选“Playwright Chromium/JavaScript”。前往您的Changedetection.io插件的Web界面>设置>获取并选择“Playwright Chromium/JavaScript”。

更多关于Browserless Chrome插件的信息：https://github.com/alexbelgium/hassio-addons/tree/master/browserless_chrome

这两个插件需要在同一台机器上运行。在Home Assistant 2023.5.3/Supervisor 2023.04.1/操作系统 10.1 和Raspberry Pi 4B上进行了测试，但应与其他版本兼容，也适用于amd64设备。

注意：Browserless Chrome插件在获取网站时非常消耗资源，无论是RAM还是CPU。在RPi 4B上运行良好，可能在较旧的设备上速度较慢。最大同时获取数限制为1。

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
