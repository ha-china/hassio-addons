# Home assistant add-on: Changedetection.io

**最好的和最简单的自托管免费开源网站变更检测跟踪、监控和通知服务。Visualping、Watchtower等的替代方案。设计简单 - 主要目标是免费监控哪些网站发生了文本变更。免费开源网页变更检测**

#### 示例用例

- 产品和服务价格变更
- 缺货通知和重新有货通知
- 政府部门更新（变更通常仅在其网站上）
- 当您不在其邮件列表上时，新软件发布、安全通知。
- 节日变更
- 房地产列表变更
- 知道您最喜欢的威士忌何时打折，或其他人宣布其他特别优惠之前
- 政府网站上的与COVID相关的新闻
- 大学/组织网站上的新闻
- 检测和监控JSON API响应中的变更
- JSON API监控和警报
- 法律和其他文档的变更
- 当网站上有文本出现时，通过通知触发API调用
- 使用JSON过滤器和JSON通知将API粘合在一起
- 基于网页内容变更创建RSS订阅
- 监控HTML源代码中的意外变更，加强您的PCI合规性
- 您有一个非常敏感的URL列表要监控，并且您不想使用付费替代方案。（记住，您自己是产品）

需要带有JavaScript支持的Chrome运行器吗？我们支持通过WebDriver和Playwright进行抓取！</a>_

#### 主要功能

- 很多触发过滤器，如“按文本触发”、“通过选择器移除文本”、“忽略文本”、“提取文本”，还使用正则表达式！
- 使用XPath和CSS选择器定位元素，轻松监控复杂的JSON，使用JsonPath规则
- 在基于非JS的快速抓取器和基于Chrome JS的抓取器之间切换
- 轻松指定网站检查的频率
- 在提取文本之前执行JS（适用于登录，请查看UI中的示例！）
- 覆盖请求头，指定`POST`或`GET`和其他方法
- 使用“视觉选择器”来帮助定位特定元素

_感谢所有将我的仓库星标的人！要星标它，请点击下面的图片，然后它将在右上角。谢谢！_

[![Stargazers repo roster for @jdeath/homeassistant-addons](https://reporoster.com/stars/jdeath/homeassistant-addons)](https://github.com/jdeath/homeassistant-addons/stargazers)

## 主要功能


## 安装

这个add-on的安装非常简单，与安装任何其他Hass.io add-on没有区别。

1. [将我的Hass.io add-ons仓库][repository]添加到您的Hass.io实例。
1. 安装这个add-on。
1. 前往ip:端口。Ingress有点像工作，但页面无法正确渲染


## 如何使用Playwright JS启用的抓取器而不是内置的Plaintext/HTTP Client

Changedetection.io add-on本身只能使用内置的Plaintext/HTTP Client抓取网站。

许多现代网页使用JavaScript来填充内容，它们更动态，有时需要真实的Chrome浏览器来抓取内容，尽管许多可能使用内置的'fetcher'就能工作

您可以将Changedetection.io配置为使用Playwright抓取器来抓取页面，否则它将使用普通的非JS内置浏览器。使用Playwright抓取器提供Changedetection.io的全部功能，包括JS浏览器步骤来抓取内容以及视觉过滤器选择器。

要使用Playwright抓取器，Changedetection.io add-on需要与由alexbelgium制作的Browserless Chrome add-on合作。

要安装Browserless Chrome add-on，在Homeassistant中添加alexbelgium/hassio-addons仓库（https://github.com/alexbelgium/hassio-addons/）。从Homeassistant界面安装并启动add-on。要使用Playwright抓取器，只需在添加要监控的新网站时或在“请求”选项卡中选中“Playwright Chromium/Javascript”将其设置为系统标准，或者前往Changedetection.io add-on的Web界面 > 设置 > 抓取并选择“Playwright Chromium/Javascript”。

更多关于Browserless Chrome add-on的信息：https://github.com/alexbelgium/hassio-addons/tree/master/browserless_chrome

这两个add-on需要在同一台机器上运行。在Home Assistant 2023.5.3/Supervisor 2023.04.1/操作系统10.1在Raspberry Pi 4B上测试过，但应该与其他版本和amd64设备也能工作。

注意：Browserless Chrome add-on在抓取网站时资源消耗很大，无论是在RAM还是CPU方面。在RPi 4B上运行良好，但在较旧的设备上可能较慢。最大并发抓取限制为1。

[repository]: https://github.com/jdeath/homeassistant-addons