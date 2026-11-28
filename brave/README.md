# Home assistant add-on: Brave

我业余时间维护这个以及其他Home Assistant add-ons：跟上上游变化、HA变化，并在真实硬件上测试需要大量时间（和一些金钱）。我大约使用我超过110个add-ons中的5-10个，因此我安装了测试机器（并购买了一些我自己不使用的测试服务，如VPN）来调试和改进这些add-ons。

如果这个add-on为你节省了时间或简化了你的设置，我将非常感谢你的支持！

[![Buy me a coffee][donation-badge]](https://www.buymeacoffee.com/alexbelgium)
[![Donate via PayPal][paypal-badge]](https://www.paypal.com/donate/?hosted_button_id=DZFULJZTP3UQA)

## Addon informations

![Version](https://img.shields.io/badge/dynamic/yaml?label=版本&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fbrave%2Fconfig.yaml)
![Ingress](https://img.shields.io/badge/dynamic/yaml?label=Ingress&query=%24.ingress&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fbrave%2Fconfig.yaml)
![Arch](https://img.shields.io/badge/dynamic/yaml?color=success&label=架构&query=%24.arch&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fbrave%2Fconfig.yaml)

[![Codacy Badge](https://app.codacy.com/project/badge/Grade/9c6cf10bdbba45ecb202d7f579b5be0e)](https://www.codacy.com/gh/alexbelgium/hassio-addons/dashboard?utm_source=github.com&utm_medium=referral&utm_content=alexbelgium/hassio-addons&utm_campaign=Badge_Grade)
[![GitHub Super-Linter](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/weekly-supelinter.yaml?label=Lint%20code%20base)](https://github.com/alexbelgium/hassio-addons/actions/workflows/weekly-supelinter.yaml)
[![Builder](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/onpush_builder.yaml?label=Builder)](https://github.com/alexbelgium/hassio-addons/actions/workflows/onpush_builder.yaml)

[donation-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee-%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white
[paypal-badge]: https://img.shields.io/badge/Donate%20via%20PayPal-0070BA?logo=paypal&style=flat&logoColor=white

_感谢所有给我仓库点赞的人！要点赞，请点击下面的图片，然后它将出现在右上角。谢谢！_

[![Stargazers repo roster for @alexbelgium/hassio-addons](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/.github/stars2.svg)](https://github.com/alexbelgium/hassio-addons/stargazers)

![downloads evolution](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/brave/stats.png)

## About

[Brave](https://brave.com/) 是一个快速、私密和安全的网络浏览器，适用于PC、Mac和移动设备。
这个add-on基于以下docker镜像：https://github.com/linuxserver/docker-brave

## Configuration

使用add-on的`env_vars`选项来传递额外的环境变量（大小写名称均可）。详情请见：https://github.com/alexbelgium/hassio-addons/wiki/Add-Environment-variables-to-your-Addon-2。

Webui可以通过ingress访问或访问<http://homeassistant:PORT>。默认情况下端口是禁用的，但可以通过add-on选项启用。

默认情况下，镜像基于用户abc，我们推荐使用这个用户，因为所有的init/config都是围绕它构建的。默认密码也是abc。如果你想要更改这个密码并在访问界面时需要认证，只需在GUI终端中在容器内输入passwd。然后访问Web界面时使用以下路径：

http://localhost:3000/?login=true

应用程序安装不是持久的，你需要通过add-on选项来安装。但是，它们的配置是持久的。

如果图形不工作，使用DRINODE功能来选择你的图形设备。

查看所有可能的ENV变量：https://docs.linuxserver.io/images/docker-brave#optional-environment-variables

```yaml
TZ: timezone ; 国家/城市根据 https://manpages.ubuntu.com/manpages/trusty/man3/DateTime::TimeZone::Catalog.3pm.html
additional_apps: engrampa,thunderbird # 允许安装应用程序，因为它们不是持久的
DRINODE: 指定一个自定义图形设备，默认是 /dev/dri/renderD128
DNS_servers: 8.8.8.8,1.1.1.1 # 保持空白以使用路由器的DNS，或设置自定义DNS以避免在本地DNS广告拦截器的情况下发送垃圾邮件
localdisks: sda1 # 将你的驱动硬件名称挂载，用逗号分隔，或使用其标签。例如。 sda1, sdb1, MYNAS...
networkdisks: "//SERVER/SHARE" # 可选，要挂载的SMB服务器列表，用逗号分隔
cifsusername: "username" # 可选，SMB用户名，所有SMB共享相同
cifspassword: "password" # 可选，SMB密码
cifsdomain: "domain" # 可选，允许设置SMB共享的域
```

## Installation

这个add-on的安装非常简单，与安装任何其他add-on没有区别。

1. 将我的add-ons仓库添加到你的Home Assistant实例中（在supervisor add-ons商店的右上角，或者如果你已经配置了我的HA，点击下面的按钮）
   [![打开你的Home Assistant实例并显示带有特定仓库URL预填的添加add-on仓库对话框。](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2Falexbelgium%2Fhassio-addons)
1. 安装这个add-on。
1. 点击`Save`按钮以保存你的配置。
1. 设置add-on选项以符合你的偏好。
1. 启动add-on。
1. 检查add-on的日志以查看是否一切顺利。
1. 打开WebUI并调整软件选项

## Support

在github上创建问题

## Illustration

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
