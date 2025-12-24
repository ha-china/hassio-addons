# Home assistant add-on: emby


我利用业余时间维护这个和其他Home Assistant add-ons：跟进上游变化、HA变化，并在真实硬件上测试，这需要花费大量时间（和一些金钱）。我大约使用我超过110个add-ons中的5-10个，因此我安装了测试机器（和一些我自己不使用的测试服务，例如VPN），以排除故障并改进这些add-ons。

如果这个add-on为您节省了时间或简化了您的设置，我将非常感谢您的支持！

[![Buy me a coffee][donation-badge]](https://www.buymeacoffee.com/alexbelgium)
[![Donate via PayPal][paypal-badge]](https://www.paypal.com/donate/?hosted_button_id=DZFULJZTP3UQA)

## Addon informations

![Version](https://img.shields.io/badge/dynamic/yaml?label=Version&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Femby%2Fconfig.yaml)
![Ingress](https://img.shields.io/badge/dynamic/yaml?label=Ingress&query=%24.ingress&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Femby%2Fconfig.yaml)
![Arch](https://img.shields.io/badge/dynamic/yaml?color=success&label=Arch&query=%24.arch&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Femby%2Fconfig.yaml)

[![Codacy Badge](https://app.codacy.com/project/badge/Grade/9c6cf10bdbba45ecb202d7f579b5be0e)](https://www.codacy.com/gh/alexbelgium/hassio-addons/dashboard?utm_source=github.com&utm_medium=referral&utm_content=alexbelgium/hassio-addons&utm_campaign=Badge_Grade)
[![GitHub Super-Linter](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/weekly-supelinter.yaml?label=Lint%20code%20base)](https://github.com/alexbelgium/hassio-addons/actions/workflows/weekly-supelinter.yaml)
[![Builder](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/onpush_builder.yaml?label=Builder)](https://github.com/alexbelgium/hassio-addons/actions/workflows/onpush_builder.yaml)

[donation-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee-%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white
[paypal-badge]: https://img.shields.io/badge/Donate%20via%20PayPal-0070BA?logo=paypal&style=flat&logoColor=white

_感谢所有给我仓库点赞的人！点击下面的图片为其点赞，它将出现在右上角。谢谢！_

[![Stargazers repo roster for @alexbelgium/hassio-addons](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/.github/stars2.svg)](https://github.com/alexbelgium/hassio-addons/stargazers)

![downloads evolution](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/emby/stats.png)

## About

[emby](https://emby.media/)组织个人媒体库的视频、音乐、直播电视和照片，并将它们流式传输到智能电视、流媒体盒子和移动设备。这个容器作为一个独立的emby Media Server进行打包。

这个add-on基于linuxserver.io的[docker镜像](https://github.com/linuxserver/docker-emby)。
初始add-on版本：https://github.com/petersendev/hassio-addons

## Configuration

使用add-on的`env_vars`选项来传递额外的环境变量（大小写名称）。有关详细信息，请参阅 https://github.com/alexbelgium/hassio-addons/wiki/Add-Environment-variables-to-your-Addon-2。

Webui可以在`<your-ip>:8096`找到，或者在Home Assistant通过Ingress访问。

```yaml
PGID: user
GPID: user
TZ: timezone
localdisks: sda1 #将您的驱动硬件名称用逗号分隔，或其标签。例如。 sda1, sdb1, MYNAS...
networkdisks: "//SERVER/SHARE" #可选，要挂载的smb服务器列表，用逗号分隔
cifsusername: "username" #可选，smb用户名，所有smb共享相同
cifspassword: "password" #可选，smb密码
cifsdomain: "domain" #可选，允许为smb共享设置域
silent: true #抑制调试消息
```

## Installation

这个add-on的安装非常简单，与安装任何其他Hass.io add-on没有区别。

1. 将我的Hass.io add-ons仓库[repository]添加到您的Hass.io实例。
1. 安装这个add-on。
1. 点击`Save`按钮以保存您的配置。
1. 启动add-on。
1. 检查add-on的日志，看看是否一切顺利。
1. 仔细配置add-on以满足您的偏好，请参阅官方文档以获取相关信息。

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
