# Home assistant add-on: Changedetection.io

**最好的和最简单的自托管免费开源网站变更检测跟踪、监控和通知服务。Visualping、Watchtower等的替代方案。专为简单设计 - 主要目标是免费监控哪些网站发生了文本变化。免费开源网页变更检测**

#### 示例使用场景

- 产品和服务价格发生变化
- _缺货通知_ 和 _重新有货通知_
- 政府部门更新（变更通常只出现在他们的网站上）
- 新软件发布，安全警告，当你不在他们的邮件列表上时。
- 节日变更
- 房地产列表变更
- 知道你最喜欢的威士忌何时打折，或其他特殊优惠在其他人之前宣布
- 政府网站上的新冠疫情相关新闻
- 大学/组织网站上的新闻
- 检测和监控JSON API响应中的变更
- JSON API监控和警报
- 法律和其他文件的变更
- 在网站上出现文本时通过通知触发API调用
- 使用JSON过滤器和JSON通知将API粘合在一起
- 根据网页内容变更创建RSS订阅
- 监控HTML源代码的意外变更，加强你的PCI合规性
- 你有一个非常敏感的URL列表要监控，并且你不想使用付费替代方案。（记住，_你_就是产品）

_需要一个带有JavaScript支持的Chrome运行器？我们支持通过WebDriver和Playwright进行抓取！_

#### 关键功能

- 许多触发过滤器，例如“按文本触发”、“通过选择器删除文本”、“忽略文本”、“提取文本”，还使用正则表达式！
- 使用XPath和CSS选择器定位元素，轻松监控复杂的JSON，使用JsonPath规则
- 在快速非JS和基于Chrome JS的“抓取器”之间切换
- 轻松指定网站应该多久检查一次
- 在提取文本之前执行JS（适用于登录，请查看UI中的示例！）
- 覆盖请求头，指定`POST`或`GET`和其他方法
- 使用“视觉选择器”来帮助定位特定元素

_感谢所有将我的仓库标记为星标的人！要标记它，请点击下面的图片，然后它将出现在右上角。谢谢！_

[![Stargazers repo roster for @jdeath/homeassistant-addons](https://reporoster.com/stars/jdeath/homeassistant-addons)](https://github.com/jdeath/homeassistant-addons/stargazers)

## 关键功能

## 安装

这个add-on的安装非常简单，与安装任何其他Hass.io add-on没有区别。

1. [将我的Hass.io add-ons仓库][repository]添加到你的Hass.io实例。
1. 安装这个add-on。
1. 前往ip:port。Ingress有点像工作，但页面无法正确渲染

## 如何使用Playwright JS启用的抓取器而不是内置的Plaintext/HTTP Client

Changedetection.io add-on本身只能使用内置的Plaintext/HTTP Client抓取网站。

许多现代网页使用JavaScript来填充内容，它们更具动态性，有时需要真实的Chrome浏览器来抓取内容，尽管许多可能使用内置的'抓取器'也能工作

你可以配置Changedetection.io使用Playwright抓取器来抓取页面，否则它将使用普通的非JS内置浏览器。使用Playwright抓取器提供了Changedetection.io的全部功能，包括用于抓取内容的JS浏览器步骤和视觉过滤器选择器。

要使用Playwright抓取器，Changedetection.io add-on需要与由alexbelgium制作的Browserless Chrome add-on合作。

要安装Browserless Chrome add-on，请在Homeassistant中添加alexbelgium/hassio-addons仓库（https://github.com/alexbelgium/hassio-addons/）。从Homeassistant界面安装并启动add-on。要使用Playwright抓取器，只需在添加要监控的新网站时或在将“Playwright Chromium/Javascript”设置为所有监控网站的系统标准时，在“请求”选项卡中选中“Playwright Chromium/Javascript”。前往你的Changedetection.io add-on的Web界面 > 设置 > 抓取，并选择“Playwright Chromium/Javascript”。

更多关于Browserless Chrome add-on的信息：https://github.com/alexbelgium/hassio-addons/tree/master/browserless_chrome

这两个add-on需要在同一台机器上运行。已在Home Assistant 2023.5.3/Supervisor 2023.04.1/操作系统10.1在Raspberry Pi 4B上测试，但也应该与其他版本和amd64设备一起工作。

注意：Browserless Chrome add-on在抓取网站时非常消耗资源，无论是在RAM还是CPU方面。在Raspberry Pi 4B上运行良好，在旧设备上可能较慢。最大并发抓取限制为1。

[repository]: https://github.com/jdeath/homeassistant-addons