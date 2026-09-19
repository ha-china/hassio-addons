# Home assistant 附加组件：Brave

我在业余时间维护这个及其他 Home Assistant 附加组件。跟进上游变化、HA 变化，以及在真实硬件上进行测试需要大量时间（以及一些金钱）。我需要约 5-10 个附加组件，因此我安装了测试机器（并购买了一些测试服务，如 vpn），以便我不使用的服务来调试和改进附加组件

如果您使用此附加组件节省了时间或使您的设置更加简单，我将不胜感激您的支持！

[![Buy me a coffee][donation-badge]](https://www.buymeacoffee.com/alexbelgium)
[![Donate via PayPal][paypal-badge]](https://www.paypal.com/donate/?hosted_button_id=DZFULJZTP3UQA)

## Addon 信息

![Version](https://img.shields.io/badge/dynamic/yaml?label=Version&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fbrave%2Fconfig.yaml)
![Ingress](https://img.shields.io/badge/dynamic/yaml?label=Ingress&query=%24.ingress&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fbrave%2Fconfig.yaml)
![Arch](https://img.shields.io/badge/dynamic/yaml?color=success&label=Arch&query=%24.arch&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fbrave%2Fconfig.yaml)

[![Codacy Badge](https://app.codacy.com/project/badge/Grade/9c6cf10bdbba45ecb202d7f579b5be0e)](https://www.codacy.com/gh/alexbelgium/hassio-addons/dashboard?utm_source=github.com&utm_medium=referral&utm_content=alexbelgium/hassio-addons&utm_campaign=Badge_Grade)
[![GitHub Super-Linter](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/weekly-supelinter.yaml?label=Lint%20code%20base)](https://github.com/alexbelgium/hassio-addons/actions/workflows/weekly-supelinter.yaml)
[![Builder](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/onpush_builder.yaml?label=Builder)](https://github.com/alexbelgium/hassio-addons/actions/workflows/onpush_builder.yaml)

[donation-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee-%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white
[paypal-badge]: https://img.shields.io/badge/Donate%20via%20PayPal-0070BA?logo=paypal&style=flat&logoColor=white

_感谢所有人 starred 我的仓库！要 starred 它，请访问下面的图片，它将位于右上角。感谢！_

[![Stargazers repo roster for @alexbelgium/hassio-addons](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/.github/stars2.svg)](https://github.com/alexbelgium/hassio-addons/stargazers)

![downloads evolution](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/brave/stats.png)

## 概述

[Brave](https://brave.com/) 是一个快速、私密和安全的 PC、Mac 和移动设备网页浏览器。
此附加组件基于 docker 镜像 https://github.com/linuxserver/docker-brave

## 配置

使用附加组件 `env_vars` 选项来传递额外的环境变量（名称可以是大写或小写）。有关详细信息，请参阅 https://github.com/alexbelgium/hassio-addons/wiki/Add-Environment-variables-to-your-Addon-2。

Webui 可以通过 ingress 或在 <http://homeassistant:PORT> 处访问。端口默认为禁用状态，但可以通过附加组件选项启用。

默认情况下，该镜像基于 abc 用户，我们建议使用此用户，因为所有初始化/配置都基于它。默认密码也是 abc。如果要在访问接口时更改此密码并需要身份验证，请简单地在容器的 GUI 终端内发行 passwd。之后，访问 web 界面时使用以下路径：

http://localhost:3000/?login=true

应用安装不是持久的，您需要通过附加组件选项来执行。但是，它们的配置是持久的。

如果图形不工作，请使用 DRINODE 特性来选择您的图形设备。

查看所有潜在的环境变量，请访问：https://docs.linuxserver.io/images/docker-brave#optional-environment-variables

```yaml
TZ: timezone ; Country/City according to https://manpages.ubuntu.com/manpages/trusty/man3/DateTime::TimeZone::Catalog.3pm.html
additional_apps: engrampa,thunderbird # Allows installation of apps, as they are not persistent
DRINODE: specify a custom graphic device, default is /dev/dri/renderD128
DNS_servers: 8.8.8.8,1.1.1.1 # Keep blank to use router's DNS, or set custom DNS to avoid spamming in case of local DNS ad-remover
localdisks: sda1 #put the hardware name of your drive to mount separated by commas, or its label. ex. sda1, sdb1, MYNAS...
networkdisks: "//SERVER/SHARE" # optional, list of smb servers to mount, separated by commas
cifsusername: "username" # optional, smb username, same for all smb shares
cifspassword: "password" # optional, smb password
cifsdomain: "domain" # optional, allow setting the domain for the smb share
```

## 安装

此附加组件的安装非常直接，与其他任何附加组件的安装没有区别。

1. 将我的附加组件仓库添加到您的 Home Assistant 实例（在 supervisor addons 商店右上角，或者如果您已配置了我的 HA，则单击下面的按钮）
   [![Open your Home Assistant instance and show the add add-on repository dialog with a specific repository URL pre-filled.](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2Falexbelgium%2Fhassio-addons)
1. 安装此附加组件。
1. 单击 `Save` 按钮以存储您的配置。
1. 将附加组件选项设置为您的偏好设置
1. 启动附加组件。
1. 检查附加组件日志，以确保一切正常。
1. 打开 webUI 并调整软件选项

## 支持

在 github 上创建issue

## 说明

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
