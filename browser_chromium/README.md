# Home Assistant 插件：chromium

我利用业余时间维护这些和其他 Home Assistant 插件：跟踪上游更改、适配 Home Assistant 更新以及在真实硬件上进行测试耗费了大量时间（还有一些金钱）。我的插件库有 110 多个，我会定期安装一些测试机（并购买一些测试服务，如 VPN）——我自己不使用——来 troubleshooting、改进这些插件。

如果您的添加有助于节省时间或简化您的配置，我会非常感谢您提供的支持！

[![Buy me a coffee][donation-badge]](https://www.buymeacoffee.com/alexbelgium)
[![Donate via PayPal][paypal-badge]](https://www.paypal.com/donate/?hosted_button_id=DZFULJZTP3UQA)

## 插件信息

![Version](https://img.shields.io/badge/dynamic/yaml?label=Version&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fchromium%2Fconfig.yaml)
![Ingress](https://img.shields.io/badge/dynamic/yaml?label=Ingress&query=%24.ingress&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fchromium%2Fconfig.yaml)
![Arch](https://img.shields.io/badge/dynamic/yaml?color=success&label=Arch&query=%24.arch&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fchromium%2Fconfig.yaml)

[![Codacy Badge](https://app.codacy.com/project/badge/Grade/9c6cf10bdbba45ecb202d7f579b5be0e)](https://www.codacy.com/gh/alexbelgium/hassio-addons/dashboard?utm_source=github.com&utm_medium=referral&utm_content=alexbelgium/hassio-addons&utm_campaign=Badge_Grade)
[![GitHub Super-Linter](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/weekly-supelinter.yaml?label=Lint%20code%20base)](https://github.com/alexbelgium/hassio-addons/actions/workflows/weekly-supelinter.yaml)
[![Builder](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/onpush_builder.yaml?label=Builder)](https://github.com/alexbelgium/hassio-addons/actions/workflows/onpush_builder.yaml)

[donation-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee-%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white
[paypal-badge]: https://img.shields.io/badge/Donate%20via%20PayPal-0070BA?logo=paypal&style=flat&logoColor=white

_感谢 everyone 为我仓库 star 了！star 请点下方图片，它就会显示在右上角。谢谢！_

[![Stargazers repo roster for @alexbelgium/hassio-addons](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/.github/stars2.svg)](https://github.com/alexbelgium/hassio-addons/stargazers)

![downloads evolution](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/chromium/stats.png)

## 简介

[chromium](https://chromium.com/) 是一款快速、私密、安全的 PC、Mac 和移动浏览器。
此附加组件基于 DOCKER 镜像 https://github.com/linuxserver/docker-chromium

## 配置

使用附加组件的 `env_vars` 选项来传递额外的环境变量（支持大写或小写名称）。详见 https://github.com/alexbelgium/hassio-addons/wiki/Add-Environment-Variables-to-Your-Addon-2。

WebUI 可以通过 Ingress 或在 <http://homeassistant:PORT> 找到。默认情况下端口是禁用的，但可以通过附加组件选项启用。

默认情况下，镜像是基于 abc 用户的，我们建议使用该用户，因为所有的 init/config 都是基于它的。默认密码也是 abc。如果您想要更改此密码，并在访问界面时需要身份验证，请简单地通过在容器的 GUI 终端中执行 passwd 来完成。然后，当访问 Web 接口时，使用以下路径：

http://localhost:3000/?login=true

App 的安装不是持久的，您需要通过附加组件选项进行安装。配置之后，它是持久的。

如果图形功能不工作，请通过使用 DRINODE 功能选择您的图形设备。

查看所有潜在环境变量：https://docs.linuxserver.io/images/docker-chromium#optional-environment-variables

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

此附加组件的安装非常简单，与安装任何其他附加组件没有什么区别。

1. 将我的附加组件仓库添加到您的 Home Assistant 实例中（在监督器 addons store 右上角，或者如果您已配置了我的 HA，请点击下方的按钮）
   [![Open your Home Assistant instance and show the add add-on repository dialog with a specific repository URL pre-filled.](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2Falexbelgium%2Fhassio-addons)
1. 安装此附加组件。
1. 单击 `Save` 按钮以保存您的配置。
1. 设置附加组件选项以满足您的偏好。
1. 启动附加组件。
1. 检查附加组件的日志，看看一切是否正常。
1. 打开 WebUI 并调整软件选项。

## 支持

在 GitHub 上创建 issue

## 插图

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
