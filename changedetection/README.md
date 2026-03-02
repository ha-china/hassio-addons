# Home assistant 插件：Changedetection.io

**最优秀且最简单的自托管免费开源网站变更检测、监控和通知服务。Visualping、Watchtower 等的替代品。设计理念为简洁——主要目标是免费简单地监控哪些网站的文本发生了变更。免费开源的网页变更检测**

#### 示例用法

- 产品和服务的价格发生变化
- _缺货通知_ 和 _重新上架通知_
- 政府部门更新（变更通常只在他们的网站上）
- 新软件发布，当您不在他们的邮件列表中时，会收到安全警报。
- 节日变更
- 房地产列表变更
- 当您喜欢的威士忌特价销售，或宣布其他特别优惠时，在其他人之前知道
- 来自政府网站的COVID相关新闻
- 来自大学/组织的网站新闻
- 检测和监控JSON API响应中的变更
- JSON API监控和警报
- 法律和其他文件中的变更
- 当文本出现在网站上时，通过通知触发API调用
- 使用JSON过滤器和JSON通知将API粘合在一起
- 根据网页内容的变化创建RSS源
- 监控HTML源代码的意外变更，加强您的PCI合规性
- 您有一个非常敏感的URL监控列表，您不想使用付费替代方案。（记住，_您_是产品）

_需要实际支持JavaScript的Chrome运行器吗？我们支持通过WebDriver和Playwright进行抓取！<a>_

#### 关键特性

- 许多触发过滤器，如“根据文本触发”、“通过选择器移除文本”、“忽略文本”、“提取文本”，还支持正则表达式！
- 使用xPath和CSS选择器定位目标元素，易于使用JsonPath规则监控复杂的JSON
- 在快速的非JS和基于Chrome JS的“fetcher”之间切换
- 容易指定网站应检查的频率
- 在提取文本之前执行JS（对于登录很有用，UI中有示例！）
- 覆盖请求头，指定`POST`或`GET`和其他方法
- 使用“视觉选择器”帮助定位特定元素

_感谢每一位为我仓库加星的人！要加星，请点击下面的图片，然后它将出现在右上角。谢谢！_

[![Stargazers repo roster for @jdeath/homeassistant-addons](https://reporoster.com/stars/jdeath/homeassistant-addons)](https://github.com/jdeath/homeassistant-addons/stargazers)

## 关键特性

## 安装

此插件的安装相当简单，与安装任何其他Hass.io插件没有不同。

1. [将我的Hass.io插件仓库添加到您的Hass.io实例][repository]。
1. 安装此插件。
1. 前往ip:port。入口排序功能工作，但页面无法正确渲染


## 如何使用启用了Playwright JS的fetcher而不是内置的Plaintext/HTTP客户端

Changedetection.io插件本身只能使用内置的Plaintext/HTTP客户端抓取网站。

许多现代网页使用JavaScript来填充内容，它们更加动态，有时需要真实的Chrome浏览器来抓取内容，尽管许多可以使用内置的'fetcher'。

您可以将Changedetection.io配置为使用Playwright fetcher抓取页面，否则它将使用内置的非JS浏览器进行抓取。使用Playwright fetcher提供了Changedetection.io的全部功能，包括用于抓取内容的JS浏览器步骤和视觉过滤选择器。

要使用Playwright fetcher，Changedetection.io插件需要与由alexbelgium制作的Browserless Chrome插件合作。

要安装Browserless Chrome插件，请将alexbelgium/hassio-addons仓库（https://github.com/alexbelgium/hassio-addons/）添加到Homeassistant。从Homeassistant界面安装并启动插件。要使用Playwright fetcher，只需在添加新站点进行监控或将其设置为所有监控站点的系统标准时，在“请求”选项卡中勾选“Playwright Chromium/Javascript”，或者在您的Changedetection.io插件的网络界面中>设置>抓取，选择“Playwright Chromium/Javascript”。

有关Browserless Chrome插件的更多信息：https://github.com/alexbelgium/hassio-addons/tree/master/browserless_chrome

这两个插件需要在同一台机器上运行。已在Home Assistant 2023.5.3/Supervisor 2023.04.1/操作系统 10.1上的Raspberry Pi 4B上进行测试，但应该适用于任何其他版本，以及amd64设备。

注意：Browserless Chrome插件在抓取网站时资源消耗很大，包括RAM和CPU。在RPi 4B上运行良好，在较老设备上可能较慢。最大同时抓取次数限制为1。


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
