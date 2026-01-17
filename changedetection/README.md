# Home assistant add-on: Changedetection.io

**最好的、最简单的自托管免费开源网站变化检测跟踪、监控和通知服务。Visualping、Watchtower等的替代方案。设计简单——主要目标是免费监控哪些网站发生了文本变化。免费开源网页变化检测**

#### 示例用例

- 产品和服务价格发生变化
- _缺货通知_和_重新上架通知_
- 政府部门更新（变化通常只在其网站上）
- 新软件发布，安全公告，而您不在其邮件列表上。
- 节日变化
- 房地产列表变化
- 知道您最喜欢的威士忌何时打折，或其他人宣布其他特别优惠之前
- 政府网站上的新冠疫情相关新闻
- 大学/组织网站上的新闻
- 检测和监控JSON API响应中的变化
- JSON API监控和警报
- 法律和其他文件的变化
- 当网站出现文本时通过通知触发API调用
- 使用JSON过滤器和JSON通知将API粘合在一起
- 基于网页内容变化创建RSS订阅
- 监控HTML源代码的意外变化，加强您的PCI合规性
- 您有一个非常敏感的URL列表要监控，并且您不想使用付费替代方案。（记住，_您_就是产品）

_需要带有JavaScript支持的Chrome运行器？我们支持通过WebDriver和Playwright获取！_

#### 关键特性

- 许多触发过滤器，例如“按文本触发”、“通过选择器删除文本”、“忽略文本”、“提取文本”，还使用正则表达式！
- 使用XPath和CSS选择器定位目标元素，轻松监控复杂的JSON，使用JsonPath规则
- 在快速非JS和基于Chrome JS的“fetcher”之间切换
- 轻松指定网站检查的频率
- 在提取文本之前执行JS（适用于登录，请查看UI中的示例！）
- 覆盖请求头，指定`POST`或`GET`和其他方法
- 使用“视觉选择器”来帮助定位特定元素

_感谢所有将我的仓库星标的人！要星标它，请点击下面的图片，然后它将在右上角。谢谢！_

[![Stargazers repo roster for @jdeath/homeassistant-addons](https://reporoster.com/stars/jdeath/homeassistant-addons)](https://github.com/jdeath/homeassistant-addons/stargazers)

## 关键特性

## 安装

这个add-on的安装非常简单，与其他Hass.io add-on的安装没有区别。

1. [将我的Hass.io add-on仓库][repository]添加到您的Hass.io实例。
1. 安装这个add-on。
1. 转到ip:端口。Ingress有点像工作，但页面无法正确渲染

## 如何使用Playwright JS启用的fetcher而不是内置的Plaintext/HTTP Client

Changedetection.io add-on本身只能使用内置的Plaintext/HTTP Client获取网站。

许多现代网页使用JavaScript来填充内容，它们更动态，有时需要真实的Chrome浏览器来获取内容，尽管许多网页可能使用内置的'fetcher'就能工作

您可以将Changedetection.io配置为使用Playwright fetcher获取页面，否则它将使用纯非JS内置浏览器。使用Playwright fetcher提供Changedetection.io的完整功能，包括JavaScript浏览器步骤来获取内容和视觉过滤器选择器。

要使用Playwright fetcher，Changedetection.io add-on需要与alexbelgium制作的Browserless Chrome add-on合作。

要安装Browserless Chrome add-on，请在Homeassistant中添加alexbelgium/hassio-addons仓库（https://github.com/alexbelgium/hassio-addons/）。
从Homeassistant界面安装并启动该add-on。要使用Playwright fetcher，只需在添加要监控的新网站时或将其设置为所有监控网站的系统标准时，转到Changedetection.io add-on的Web界面 > 设置 > 获取，并选择“Playwright Chromium/Javascript”。

更多关于Browserless Chrome add-on的信息：https://github.com/alexbelgium/hassio-addons/tree/master/browserless_chrome

这两个add-on需要在同一台机器上运行。在Home Assistant 2023.5.3/Supervisor 2023.04.1/操作系统10.1上的Raspberry Pi 4B上测试过，但应该与其他版本和amd64设备也能正常工作。

注意：Browserless Chrome add-on在获取网站时非常消耗资源，无论是RAM还是CPU。在Raspberry Pi 4B上运行良好，但在较旧设备上可能较慢。最大并发获取限制为1。

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
