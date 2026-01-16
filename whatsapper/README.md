# Home assistant插件：WhatsApp

我利用业余时间维护这个和其他Home Assistant插件：跟上上游的变化、HA的变化，并在真实硬件上测试需要大量时间（和一些金钱）。我大约使用我超过110个插件中的5-10个，因此我安装了一些测试机器（和购买了一些我自己不使用的测试服务，如VPN），以调试和提高插件。

如果这个插件节省了您的时间或使您的设置更简单，我将非常感谢您的支持！

[![请给我买咖啡][donation-badge]](https://www.buymeacoffee.com/alexbelgium)
[![通过PayPal捐赠][paypal-badge]](https://www.paypal.com/donate/?hosted_button_id=DZFULJZTP3UQA)

## 插件信息

![版本](https://img.shields.io/badge/dynamic/yaml?label=版本&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fwhatsapper%2Fconfig.yaml)
![Ingress](https://img.shields.io/badge/dynamic/yaml?label=Ingress&query=%24.ingress&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fwhatsapper%2Fconfig.yaml)
![架构](https://img.shields.io/badge/dynamic/yaml?color=success&label=架构&query=%24.arch&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fwhatsapper%2Fconfig.yaml)

[![Codacy徽章](https://app.codacy.com/project/badge/Grade/9c6cf10bdbba45ecb202d7f579b5be0e)](https://www.codacy.com/gh/alexbelgium/hassio-addons/dashboard?utm_source=github.com&utm_medium=referral&utm_content=alexbelgium/hassio-addons&utm_campaign=Badge_Grade)
[![GitHub Super-Linter](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/weekly-supelinter.yaml?label=Lint%20code%20base)](https://github.com/alexbelgium/hassio-addons/actions/workflows/weekly-supelinter.yaml)
[![构建器](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/onpush_builder.yaml?label=构建器)](https://github.com/alexbelgium/hassio-addons/actions/workflows/onpush_builder.yaml)

[donation-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee-%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white
[paypal-badge]: https://img.shields.io/badge/Donate%20via%20PayPal-0070BA?logo=paypal&style=flat&logoColor=white

_感谢所有给我仓库点赞的人！点击下面的图片，然后它就会在右上角。谢谢！_

[![@alexbelgium/hassio-addons的星标者仓库列表](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/.github/stars2.svg)](https://github.com/alexbelgium/hassio-addons/stargazers)

![下载量趋势](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/whatsapper/stats.png)

## 关于

各种调整和配置选项的添加。
此插件基于[docker镜像](https://hub.docker.com/r/whatsapper/whatsapper)。

添加在这里找到的HACS集成

https://github.com/baldarn/whatsapper-ha-integration

并按照那里的说明配置系统

## 配置

```yaml
TODO
```

Webui可以在`<你的IP>:端口`找到。

## 安装

这个插件的安装非常简单，与安装任何其他Hass.io插件没有不同。

1. [将我的Hass.io插件仓库][repository]添加到你的Hass.io实例。
1. 安装这个插件。
1. 点击`保存`按钮以保存你的配置。
1. 启动插件。
1. 检查插件的日志，看看是否一切正常。
1. 前往webui，在那里初始化应用
1. 重启插件，以应用任何应该应用的选项

### 环境变量

使用插件的`env_vars`选项传递额外的环境变量（名称可以是大小写）。查看https://github.com/alexbelgium/hassio-addons/wiki/Add-Environment-variables-to-your-Addon-2以获取详细信息。

[repository]: https://github.com/alexbelgium/hassio-addons
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
