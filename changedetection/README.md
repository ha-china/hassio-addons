# Home assistant add-on: Changedetection.io

**最好的和最简单的自托管免费开源网站变更检测跟踪、监控和通知服务。Visualping、Watchtower等的替代品。为简单而设计 - 主要目标是免费监控哪些网站发生了文本变更。免费开源网页变更检测**

#### 示例使用案例

- 产品和服务价格发生变化
- _缺货通知_和_重新有货通知_
- 政府部门更新（变更通常只在他们的网站上）
- 新软件发布，安全公告，当你不在他们的邮件列表上时。
- 活节日的变更
- 房地产列表变更
- 知道你最喜欢的威士忌何时打折，或其他特殊优惠在其他人宣布之前就宣布
- 政府网站上的COVID相关新闻
- 大学/组织网站上的新闻
- 检测和监控JSON API响应中的变更
- JSON API监控和警报
- 法律和其他文件的变更
- 在网站上出现文本时通过通知触发API调用
- 使用JSON过滤器和JSON通知将API粘合在一起
- 根据网页内容的变更创建RSS订阅
- 监控HTML源代码的意外变更，加强你的PCI合规性
- 你有一个非常敏感的URL列表要监视，并且你不想使用付费替代方案。（记住，_你_就是产品）

_需要带有JavaScript支持的Chrome运行器吗？我们支持通过WebDriver和Playwright获取！_

#### 主要功能

- 许多触发过滤器，例如“文本触发”、“通过选择器删除文本”、“忽略文本”、“提取文本”，还使用正则表达式！
- 使用XPath和CSS选择器定位目标元素，轻松使用JsonPath规则监控复杂的JSON
- 在基于非JS的快速“获取器”和基于Chrome JS的“获取器”之间切换
- 轻松指定网站应检查的频率
- 在提取文本之前执行JS（适用于登录，请查看UI中的示例！）
- 覆盖请求头，指定`POST`或`GET`和其他方法
- 使用“视觉选择器”来帮助定位特定元素

_感谢所有将我的存储库添加到收藏的人！要将其添加到收藏，请点击下面的图像，然后它将位于右上角。谢谢！_

[![Stargazers repo roster for @jdeath/homeassistant-addons](https://reporoster.com/stars/jdeath/homeassistant-addons)](https://github.com/jdeath/homeassistant-addons/stargazers)

## 主要功能


## 安装

此add-on的安装非常简单，与其他Hass.io add-on的安装方式相同。

1. [将我的Hass.io add-on存储库][repository]添加到你的Hass.io实例。
1. 安装此add-on。
1. 前往ip:port。Ingress有点起作用，但页面无法正确渲染


## 如何使用带有Playwright JS的获取器而不是内置的Plaintext/HTTP Client

Changedetection.io add-on本身只能使用内置的Plaintext/HTTP Client获取网站。

许多现代网页使用JavaScript来填充内容，它们更加动态，有时需要真实的Chrome浏览器来获取内容，尽管许多可能可以使用内置的'获取器'工作

你可以配置Changedetection.io使用Playwright获取器来获取页面，否则它将使用普通的非JS内置浏览器。使用Playwright获取器提供Changedetection.io的全部功能，包括用于获取内容的JS浏览器步骤和视觉过滤器选择器。

要使用Playwright获取器，Changedetection.io add-on需要与alexbelgium制作的Browserless Chrome add-on合作。

要安装Browserless Chrome add-on，将alexbelgium/hassio-addons存储库（https://github.com/alexbelgium/hassio-addons/）添加到Homeassistant。从Homeassistant界面安装并启动add-on。要使用Playwright获取器，只需在添加要监控的新网站时或将其设置为所有监控网站的系统标准时，在“请求”选项卡中选中“Playwright Chromium/Javascript”。前往你的Changedetection.io add-on的Web界面 > 设置 > 获取，并选择“Playwright Chromium/Javascript”。

更多关于Browserless Chrome add-on的信息：https://github.com/alexbelgium/hassio-addons/tree/master/browserless_chrome

这两个add-on需要在同一台机器上运行。已在Home Assistant 2023.5.3/Supervisor 2023.04.1/操作系统10.1在Raspberry Pi 4B上测试，但应该与其他版本和amd64设备一起工作。

注意：Browserless Chrome add-on在获取网站时非常消耗资源，无论是在RAM和CPU方面。在Raspberry Pi 4B上运行良好，在旧设备上可能较慢。最大并发获取限制为1。

[repository]: https://github.com/jdeath/homeassistant-addons