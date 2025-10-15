# Home assistant add-on: Changedetection.io

**最好的和最简单的自托管免费开源网站变化检测跟踪、监控和通知服务。Visualping、Watchtower等的替代品。为简单而设计 - 主要目标是免费监控哪些网站发生了文本变化。免费开源网页变化检测**

#### 示例用例

- 产品和服务价格发生变化
- _缺货通知_和_重新有货通知_
- 政府部门更新（变化通常只在他们的网站上）
- 当您不在他们的邮件列表上时，新的软件发布、安全公告。
- 节日变化
- 房地产列表变化
- 知道您最喜欢的威士忌何时打折，或其他特殊优惠在其他人之前宣布
- 政府网站上的COVID相关新闻
- 大学/组织网站上的新闻
- 检测和监控JSON API响应中的变化
- JSON API监控和警报
- 法律和其他文件的变化
- 在网站上出现文本时通过通知触发API调用
- 使用JSON过滤器和JSON通知将API粘合在一起
- 基于网页内容变化创建RSS订阅
- 监控HTML源代码的意外变化，加强您的PCI合规性
- 您有一个非常敏感的URL列表要监控，并且您不想使用付费替代方案。（记住，_您_就是产品）

_需要带有JavaScript支持的Chrome运行器？我们支持通过WebDriver和Playwright获取！_

#### 主要功能

- 很多触发过滤器，例如“按文本触发”、“通过选择器删除文本”、“忽略文本”、“提取文本”，还使用正则表达式！
- 使用XPath和CSS选择器定位元素，轻松监控复杂的JSON，使用JsonPath规则
- 在基于JS和非JS的“获取器”之间切换
- 轻松指定网站检查的频率
- 在提取文本之前执行JS（适用于登录，请查看UI中的示例！）
- 覆盖请求头，指定`POST`或`GET`和其他方法
- 使用“视觉选择器”来帮助定位特定元素

_感谢所有给我的仓库加星！要加星，请点击下面的图片，然后它会在右上角。谢谢！_

[![Stargazers repo roster for @jdeath/homeassistant-addons](https://reporoster.com/stars/jdeath/homeassistant-addons)](https://github.com/jdeath/homeassistant-addons/stargazers)

## 主要功能


## 安装

这个插件的安装非常简单，与安装任何其他Hass.io插件没有区别。

1. [将我的Hass.io插件仓库][repository]添加到您的Hass.io实例。
1. 安装这个插件。
1. 转到ip:端口。Ingress有点像工作，但页面没有正确渲染

## 如何使用带有Playwright JS的获取器而不是内置的Plaintext/HTTP Client

Changedetection.io插件本身只能使用内置的Plaintext/HTTP Client获取网站。

许多现代网页使用JavaScript填充内容，它们更动态，有时需要真正的Chrome浏览器来获取内容，尽管许多可能使用内置的“获取器”就能工作

您可以将Changedetection.io配置为使用Playwright获取器获取页面，否则它将使用普通的非JS内置浏览器。使用Playwright获取器提供Changedetection.io的全部功能，包括用于获取内容的JS浏览器步骤和视觉过滤器选择器。

要使用Playwright获取器，Changedetection.io插件需要与由alexbelgium制作的Browserless Chrome插件合作。

要安装Browserless Chrome插件，请在Homeassistant中添加alexbelgium/hassio-addons仓库（https://github.com/alexbelgium/hassio-addons/）。从Homeassistant界面安装并启动插件。要使用Playwright获取器，只需在添加要监控的新网站时或在将所有监控网站设置为系统标准的“请求”选项卡中选中“Playwright Chromium/Javascript”。转到您的Changedetection.io插件的Web界面 > 设置 > 获取，并选择“Playwright Chromium/Javascript”。

关于Browserless Chrome插件：https://github.com/alexbelgium/hassio-addons/tree/master/browserless_chrome

这两个插件需要在同一台机器上运行。已在Home Assistant 2023.5.3/Supervisor 2023.04.1/操作系统10.1在Raspberry Pi 4B上测试，但应该与其他版本和amd64设备一起工作。

注意：Browserless Chrome插件在获取网站时非常消耗资源，无论是在RAM还是CPU方面。在RPi 4B上运行良好，在旧设备上可能较慢。最大并发获取限制为1。

[repository]: https://github.com/jdeath/homeassistant-addons