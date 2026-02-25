# Home assistant add-on: Changedetection.io

**最佳且最简单的自托管免费开源网站变更检测跟踪、监控和通知服务。Visualping、Watchtower等的替代方案。专为简单设计 - 主要目标是免费监控哪些网站发生了文本变更。免费开源网页变更检测**

#### 示例用例

- 产品和服务价格发生变化
- _缺货通知_ 和 _重新有货通知_
- 政府部门更新（变更通常只在其网站上）
- 当您不在其邮件列表上时，新的软件发布、安全警报。
- 活节日的变更
- 房地产列表变更
- 知道您最喜欢的威士忌何时打折，或其他人宣布其他特别优惠之前
- 政府网站上的COVID相关新闻
- 大学/组织网站上的新闻
- 检测和监控JSON API响应中的变更
- JSON API监控和警报
- 法律和其他文件的变更
- 在网站上的文本出现时通过通知触发API调用
- 使用JSON过滤器和JSON通知将API粘合在一起
- 基于网页内容变更创建RSS订阅
- 监控HTML源代码的意外变更，加强您的PCI合规性
- 您有一个非常敏感的URL列表要监控，并且您不想使用付费替代方案。（记住，_您_就是产品）

_需要带有JavaScript支持的Chrome运行器？我们支持通过WebDriver和Playwright抓取！_

#### 主要功能

- 许多触发过滤器，例如“按文本触发”、“通过选择器删除文本”、“忽略文本”、“提取文本”，还使用正则表达式！
- 使用XPath和CSS选择器定位元素，轻松监控复杂的JSON，使用JsonPath规则
- 在基于JS的快速非JS和Chrome JS的“抓取器”之间切换
- 轻松指定网站应该多久检查一次
- 在提取文本之前执行JS（适用于登录，请查看UI中的示例！）
- 覆盖请求头，指定`POST`或`GET`和其他方法
- 使用“视觉选择器”来帮助定位特定元素

_感谢所有将我的仓库星标的人！要星标它，请点击下面的图片，然后它将位于右上角。谢谢！_

[![Stargazers repo roster for @jdeath/homeassistant-addons](https://reporoster.com/stars/jdeath/homeassistant-addons)](https://github.com/jdeath/homeassistant-addons/stargazers)

## 主要功能


## 安装

此插件的安装非常简单，与安装任何其他Hass.io插件没有区别。

1. [将我的Hass.io插件仓库][repository]添加到您的Hass.io实例。
1. 安装此插件。
1. 前往ip:端口。Ingress有点作用，但页面无法正确渲染


## 如何使用带有Playwright JS的抓取器而不是内置的Plaintext/HTTP客户端

Changedetection.io插件本身只能使用内置的Plaintext/HTTP客户端抓取网站。

许多现代网页使用JavaScript来填充内容，它们更具动态性，有时需要真实的Chrome浏览器来抓取内容，尽管许多网页可能使用内置的“抓取器”即可工作

您可以将Changedetection.io配置为使用Playwright抓取器抓取页面，否则它将使用普通的非JS内置浏览器。使用Playwright抓取器提供Changedetection.io的全部功能，包括JS浏览器步骤来抓取内容和视觉过滤器选择器。

要使用Playwright抓取器，Changedetection.io插件需要与由alexbelgium制作的Browserless Chrome插件合作。

要安装Browserless Chrome插件，请将alexbelgium/hassio-addons仓库（https://github.com/alexbelgium/hassio-addons/）添加到Homeassistant。从Homeassistant界面安装并启动插件。要使用Playwright抓取器，只需在添加要监控的新网站时或在将Playwright Chromium/Javascript设置为所有监控网站的系统标准时，在“请求”选项卡中选中“Playwright Chromium/Javascript”。前往您的Changedetection.io插件的Web界面>设置>抓取，并选择“Playwright Chromium/Javascript”。

更多关于Browserless Chrome插件的信息：https://github.com/alexbelgium/hassio-addons/tree/master/browserless_chrome

这两个插件需要在同一台机器上运行。在Home Assistant 2023.5.3/Supervisor 2023.04.1/操作系统10.1在Raspberry Pi 4B上测试过，但应该与其他版本和amd64设备也能工作。

注意：Browserless Chrome插件在抓取网站时非常消耗资源，无论是在RAM和CPU方面。在Raspberry Pi 4B上运行良好，在旧设备上可能较慢。最大同时抓取数限制为1。

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
