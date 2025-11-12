# Home assistant add-on: Changedetection.io

**最佳且最简单的自托管免费开源网站变更检测跟踪、监控和通知服务。Visualping、Watchtower等的替代方案。设计简洁——主要目标是免费监控哪些网站发生了文本变更。免费开源网页变更检测**

#### 示例使用场景

- 产品和服务价格变更
- _缺货通知_和_重新上架通知_
- 政府部门更新（变更通常仅在其网站上）
- 未在邮件列表上收到通知时的新软件发布、安全公告
- 变更中的节日
- 房地产列表变更
- 在其他人之前知道你喜欢的威士忌打折或其他特别优惠的宣布
- 政府网站上的COVID相关新闻
- 大学/组织网站上的新闻
- 检测和监控JSON API响应中的变更
- JSON API监控和警报
- 法律和其他文件中的变更
- 当网站出现文本时通过通知触发API调用
- 使用JSON过滤器和JSON通知将API粘合在一起
- 根据网页内容变更创建RSS订阅
- 监控HTML源代码的意外变更，加强你的PCI合规性
- 你有一个非常敏感的URL列表要监控，并且你不想使用付费替代方案。（记住，_你_就是产品）

_Need一个带有JavaScript支持的Chrome运行器？我们支持通过WebDriver和Playwright获取！_

#### 主要功能

- 许多触发过滤器，例如“按文本触发”、“通过选择器移除文本”、“忽略文本”、“提取文本”，还使用正则表达式！
- 使用XPath和CSS选择器定位元素，轻松监控复杂的JSON，使用JsonPath规则
- 在基于非JS的快速“获取器”和基于Chrome JS的“获取器”之间切换
- 轻松指定网站检查的频率
- 在提取文本之前执行JS（适用于登录，请查看UI中的示例！）
- 覆盖请求头，指定`POST`或`GET`和其他方法
- 使用“视觉选择器”来帮助定位特定元素

_感谢所有将我的存储库标记为星标的人！要标记它，请点击下面的图片，然后它将在右上角。谢谢！_

[![Stargazers repo roster for @jdeath/homeassistant-addons](https://reporoster.com/stars/jdeath/homeassistant-addons)](https://github.com/jdeath/homeassistant-addons/stargazers)

## 主要功能


## 安装

此插件的安装非常直接，与安装任何其他Hass.io插件没有区别。

1. [将我的Hass.io插件存储库][repository]添加到你的Hass.io实例。
1. 安装此插件。
1. 前往ip:端口。Ingress有点像工作，但页面无法正确渲染


## 如何使用Playwright JS启用的获取器而不是内置的Plaintext/HTTP Client

Changedetection.io插件本身只能使用内置的Plaintext/HTTP Client获取网站。

许多现代网页使用JavaScript来填充内容，它们更具动态性，有时需要真实的Chrome浏览器来获取内容，尽管许多网页可能使用内置的'获取器'也能工作

你可以配置Changedetection.io使用Playwright获取器来获取页面，否则它将使用纯非JS内置浏览器。使用Playwright获取器提供Changedetection.io的全部功能，包括用于获取内容的JS浏览器步骤和视觉过滤器选择器。

要使用Playwright获取器，Changedetection.io插件需要与alexbelgium制作的Browserless Chrome插件合作。

要安装Browserless Chrome插件，将alexbelgium/hassio-addons存储库（https://github.com/alexbelgium/hassio-addons/）添加到Homeassistant。从Homeassistant界面安装并启动插件。要使用Playwright获取器，只需在添加要监控的新网站时或将其设置为所有监控网站的系统标准时，在“请求”选项卡中勾选“Playwright Chromium/Javascript”，或者前往Changedetection.io插件的Web界面 > 设置 > 获取并选择“Playwright Chromium/Javascript”。

更多关于Browserless Chrome插件的信息：https://github.com/alexbelgium/hassio-addons/tree/master/browserless_chrome

这两个插件需要在同一台机器上运行。在Home Assistant 2023.5.3/Supervisor 2023.04.1/操作系统10.1在Raspberry Pi 4B上测试过，但应该与其他版本和amd64设备也能工作。

注意：Browserless Chrome插件在获取网站时非常消耗资源，无论是在RAM还是CPU方面。在RPi 4B上运行良好，但在较旧设备上可能较慢。最大并发获取限制为1。

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
