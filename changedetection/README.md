# Home assistant add-on: Changedetection.io

**最好的和最简单的自托管免费开源网站变更检测跟踪、监控和通知服务。Visualping、Watchtower等的替代方案。专为简单设计 - 主要目标是免费监控哪些网站发生了文本变更。免费开源网页变更检测**

#### 示例用例

- 产品和服务价格变更
- 库存不足通知和库存充足通知
- 政府部门更新（变更通常只在其网站上）
- 当您不在其邮件列表上时，新的软件发布、安全通知。
- 节日变更
- 房地产列表变更
- 知道您最喜欢的威士忌何时打折，或其他人宣布其他特殊优惠之前
- 政府网站上的COVID相关新闻
- 大学/组织网站上的新闻
- 检测和监控JSON API响应中的变更
- JSON API监控和警报
- 法律和其他文档的变更
- 当网站出现文本时，通过通知触发API调用
- 使用JSON过滤器和JSON通知将API粘合在一起
- 根据网页内容变更创建RSS订阅
- 监控HTML源代码中的意外变更，加强您的PCI合规性
- 您有一个非常敏感的URL列表要监控，并且您不希望使用付费替代方案。（记住，您就是产品）

需要带有JavaScript支持的Chrome运行器？我们支持通过WebDriver和Playwright进行抓取！</a>_

#### 关键特性

- 许多触发过滤器，例如“文本触发”、“通过选择器移除文本”、“忽略文本”、“提取文本”，还使用正则表达式！
- 使用XPath和CSS选择器定位元素，轻松监控具有JsonPath规则的复杂JSON
- 在基于JS的快速抓取器和Chrome JS基于的抓取器之间切换
- 轻松指定网站检查的频率
- 在提取文本之前执行JS（适用于登录，请查看UI中的示例！）
- 覆盖请求标头，指定`POST`或`GET`和其他方法
- 使用“视觉选择器”帮助定位特定元素

_感谢所有将我的仓库标记为星标的人！要标记它，请点击下面的图像，然后它将出现在右上角。谢谢！_

[![Stargazers repo roster for @jdeath/homeassistant-addons](https://reporoster.com/stars/jdeath/homeassistant-addons)](https://github.com/jdeath/homeassistant-addons/stargazers)

## 关键特性


## 安装

此插件的安装非常直接，与安装任何其他Hass.io插件没有区别。

1. [将我的Hass.io插件仓库][repository]添加到您的Hass.io实例。
1. 安装此插件。
1. 前往ip:port。Ingress有点工作，但页面无法正确渲染


## 如何使用带有Playwright JS的抓取器而不是内置的Plaintext/HTTP Client

Changedetection.io插件本身只能使用内置的Plaintext/HTTP Client抓取网站。

许多现代网页使用JavaScript来填充内容，它们更动态，有时需要真实的Chrome浏览器来抓取内容，尽管许多可能使用内置的'fetcher'就能工作

您可以将Changedetection.io配置为使用Playwright抓取器抓取页面，否则它将使用普通的非JS内置浏览器。使用Playwright抓取器提供Changedetection.io的全部功能，包括JS浏览器步骤来抓取内容和视觉过滤器选择器。

要使用Playwright抓取器，Changedetection.io插件需要与由alexbelgium制作的Browserless Chrome插件合作。

要安装Browserless Chrome插件，将alexbelgium/hassio-addons仓库（https://github.com/alexbelgium/hassio-addons/）添加到Homeassistant。从Homeassistant界面安装并启动插件。要使用Playwright抓取器，只需在添加要监控的新网站时或将其设置为所有监控网站的系统标准时，在“请求”选项卡中选中“Playwright Chromium/Javascript”。前往您的Changedetection.io插件的Web界面 > 设置 > 抓取，并选择“Playwright Chromium/Javascript”。

更多关于Browserless Chrome插件的信息：https://github.com/alexbelgium/hassio-addons/tree/master/browserless_chrome

这两个插件需要在同一台机器上运行。在Home Assistant 2023.5.3/Supervisor 2023.04.1/操作系统10.1上的Raspberry Pi 4B上进行了测试，但应该与其他版本和amd64设备一起工作。

注意：Browserless Chrome插件在抓取网站时非常消耗资源，无论是在RAM还是CPU方面。在RPi 4B上运行良好，在旧设备上可能较慢。最大同时抓取数限制为1。


[repository]: https://github.com/jdeath/homeassistant-addons
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
