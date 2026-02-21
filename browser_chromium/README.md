# Home assistant add-on: chromium

我利用业余时间维护这个Home Assistant插件以及其他插件：跟进上游变化、Home Assistant的变化，并在真实硬件上进行测试，这需要大量时间（和一些金钱）。我大约使用我超过110个插件中的5到10个，因此我安装了一些我自身不使用的测试机器（以及购买了一些测试服务，如VPN），以用于调试和改进插件。

如果这个插件节省了您的时间或使您的设置更简单，我将非常感谢您的支持！

[![请给我一杯咖啡][donation-badge]](https://www.buymeacoffee.com/alexbelgium)
[![通过PayPal捐款][paypal-badge]](https://www.paypal.com/donate/?hosted_button_id=DZFULJZTP3UQA)

## 插件信息

![版本](https://img.shields.io/badge/dynamic/yaml?label=版本&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fchromium%2Fconfig.yaml)
![入口](https://img.shields.io/badge/dynamic/yaml?label=入口&query=%24.ingress&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fchromium%2Fconfig.yaml)
![架构](https://img.shields.io/badge/dynamic/yaml?color=success&label=架构&query=%24.arch&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fchromium%2Fconfig.yaml)

[![Codacy徽章](https://app.codacy.com/project/badge/Grade/9c6cf10bdbba45ecb202d7f579b5be0e)](https://www.codacy.com/gh/alexbelgium/hassio-addons/dashboard?utm_source=github.com&utm_medium=referral&utm_content=alexbelgium/hassio-addons&utm_campaign=Badge_Grade)
[![GitHub Super-Linter](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/weekly-supelinter.yaml?label=Lint%20code%20base)](https://github.com/alexbelgium/hassio-addons/actions/workflows/weekly-supelinter.yaml)
[![构建者](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/onpush_builder.yaml?label=构建者)](https://github.com/alexbelgium/hassio-addons/actions/workflows/onpush_builder.yaml)

[donation-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee-%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white
[paypal-badge]: https://img.shields.io/badge/Donate%20via%20PayPal-0070BA?logo=paypal&style=flat&logoColor=white

_感谢所有给我仓库点赞的人！点击下面的图片来点赞，然后它将出现在右上角。谢谢！_

[![@alexbelgium/hassio-addons的Stargazers仓库名单](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/.github/stars2.svg)](https://github.com/alexbelgium/hassio-addons/stargazers)

![下载量趋势](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/chromium/stats.png)

## 关于

[chromium](https://chromium.com/)是一个快速、私密且安全的网络浏览器，适用于PC、Mac和移动设备。
这个插件基于docker镜像 https://github.com/linuxserver/docker-chromium

## 配置

使用插件的`env_vars`选项来传递额外的环境变量（大小写名称均可）。详细信息请见 https://github.com/alexbelgium/hassio-addons/wiki/Add-Environment-variables-to-your-Addon-2。

Web UI可以通过入口访问，或在 <http://homeassistant:PORT>。默认情况下端口是禁用的，但可以通过插件选项启用。

默认情况下，镜像基于abc用户，我们建议使用此用户，因为所有的init/config都是围绕它构建的。默认密码也是abc。如果您想更改此密码并在访问界面时需要身份验证，请在容器中的GUI终端中运行passwd。然后，在访问Web界面时使用以下路径：

http://localhost:3000/?login=true

应用程序的安装不是持久的，您需要通过插件选项来安装。然而，它们的配置是持久的。

如果图形无法工作，使用DRINODE功能来选择您的图形设备。

查看所有可能的ENV变量：https://docs.linuxserver.io/images/docker-chromium#optional-environment-variables

```yaml
TZ: timezone ; 国家/城市根据 https://manpages.ubuntu.com/manpages/trusty/man3/DateTime::TimeZone::Catalog.3pm.html
additional_apps: engrampa,thunderbird # 允许安装应用程序，因为它们不是持久的
DRINODE: 指定自定义图形设备，默认是 /dev/dri/renderD128
DNS_servers: 8.8.8.8,1.1.1.1 # 保持空白以使用路由器的DNS，或设置自定义DNS以避免在本地DNS广告拦截器的情况下进行垃圾邮件
localdisks: sda1 # 将您的驱动硬件名称输入到挂载中，用逗号分隔，或其标签。例如。 sda1, sdb1, MYNAS...
networkdisks: "//SERVER/SHARE" # 可选，要挂载的SMB服务器列表，用逗号分隔
cifsusername: "username" # 可选，SMB用户名，所有SMB共享都相同
cifspassword: "password" # 可选，SMB密码
cifsdomain: "domain" # 可选，允许为SMB共享设置域
```

## 安装

这个插件的安装非常简单，与安装任何其他插件没有区别。

1. 将我的插件仓库添加到您的Home Assistant实例中（在supervisor插件商店的右上角，或者如果您已经配置了我的HA，请点击下面的按钮）
   [![打开您的Home Assistant实例并显示带有特定仓库URL预填的添加插件仓库对话框。](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2Falexbelgium%2Fhassio-addons)
1. 安装这个插件。
1. 点击`保存`按钮以保存您的配置。
1. 设置插件选项以符合您的偏好。
1. 启动插件。
1. 检查插件的日志以查看是否一切正常。
1. 打开Web UI并调整软件选项

## 支持

在github上创建问题

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
