# Home assistant 附加组件：chromium

我在空闲时间维护此及其他 Home Assistant 附加组件：跟随上游变化、Home Assistant (HA) 变化，并在真实硬件上进行测试耗时巨大（且耗费不少金钱）。我大约会使用 5-10 个我拥有的 >110 个附加组件，因此我安装了测试机器（并购买了一些我自己不常用的测试服务，如 vpn），用于故障排除和改进附加组件。

如果该附加组件为您节省了时间或让配置更简便，您的支持将不胜感激！

[![Buy me a coffee][donation-badge]](https://www.buymeacoffee.com/alexbelgium)
[![Donate via PayPal][paypal-badge]](https://www.paypal.com/donate/?hosted_button_id=DZFULJZTP3UQA)

## 附加组件信息

![Version](https://img.shields.io/badge/dynamic/yaml?label=Version&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fchromium%2Fconfig.yaml)
![Ingress](https://img.shields.io/badge/dynamic/yaml?label=Ingress&query=%24.ingress&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fchromium%2Fconfig.yaml)
![Arch](https://img.shields.io/badge/dynamic/yaml?color=success&label=Arch&query=%24.arch&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fchromium%2Fconfig.yaml)

[![Codacy Badge](https://app.codacy.com/project/badge/Grade/9c6cf10bdbba45ecb202d7f579b5be0e)](https://www.codacy.com/gh/alexbelgium/hassio-addons/dashboard?utm_source=github.com&utm_medium=referral&utm_content=alexbelgium/hassio-addons&utm_campaign=Badge_Grade)
[![GitHub Super-Linter](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/weekly-supelinter.yaml?label=Lint%20code%20base)](https://github.com/alexbelgium/hassio-addons/actions/workflows/weekly-supelinter.yaml)
[![Builder](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/onpush_builder.yaml?label=Builder)](https://github.com/alexbelgium/hassio-addons/actions/workflows/onpush_builder.yaml)

[donation-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee-%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white
[paypal-badge]: https://img.shields.io/badge/Donate%20via%20PayPal-0070BA?logo=paypal&style=flat&logoColor=white

_感谢所有人给我的仓库点个星！点击下方图片再点击，它就会被置顶。谢谢！_

[![Stargazers repo roster for @alexbelgium/hassio-addons](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/.github/stars2.svg)](https://github.com/alexbelgium/hassio-addons/stargazers)

![downloads evolution](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/chromium/stats.png)

## 简介

[chromium](https://chromium.com/) 是一款用于 PC、Mac 和移动设备的快速、私密且安全的网络浏览器。
此附加组件基于 Docker 镜像 https://github.com/linuxserver/docker-chromium。

## 配置

使用附加组件的 `env_vars` 选项来传递额外的环境变量（名称可为大写或小写）。详情参见 https://github.com/alexbelgium/hassio-addons/wiki/Add-Environment-variables-to-your-Addon-2。

WebUI 可通过 ingress 或 <http://homeassistant:PORT> 访问。端口默认禁用了，但可通过附加组件选项启用。

默认情况下，该镜像基于 abc 用户，我们推荐使用此用户，因为所有初始化/配置均基于此用户。默认密码也是 abc。如果您想更改此密码并在访问界面时需要进行身份验证，请在容器的 GUI 终端中执行 passwd 命令。然后访问 Web 界面时，请使用以下路径：

http://localhost:3000/?login=true

应用安装不是持久性的，您需要通过附加组件选项操作。不过，它们的配置是持久性的。

如果图形功能不起作用，请使用 DRINODE 功能选择您的图形设备。

查看所有潜在的环境变量：https://docs.linuxserver.io/images/docker-chromium#optional-environment-variables

```yaml
TZ: timezone ; Country/City according to https://manpages.ubuntu.com/manpages/trusty/man3/DateTime::TimeZone::Catalog.3pm.html
additional_apps: engrampa,thunderbird # 允许安装应用，因为它们不是持久性的
DRINODE: specify a custom graphic device, default is /dev/dri/renderD128
DNS_servers: 8.8.8.8,1.1.1.1 # 留空以使用路由器的 DNS，或设置自定义 DNS 以避免垃圾邮件（如果本地 DNS 移除器会导致此问题）
localdisks: sda1 # 将硬驱名称输入以挂载，用逗号分隔，或其标签。例如：sda1, sdb1, MYNAS...
networkdisks: "//SERVER/SHARE" # 可选，SMB 服务器列表，用逗号分隔
cifsusername: "username" # 可选，SMB 用户名，适用于所有 SMB 共享
cifspassword: "password" # 可选，SMB 密码
cifsdomain: "domain" # 可选，允许为 SMB 共享设置域
```

## 安装

此附加组件的安装非常简单，与其他附加组件的安装方式没有区别。

1. 将我的附加组件仓库添加到您的 Home Assistant 实例中（在 supervisor 附加组件商店右上角，或者如果您已配置了我的 HA，点击下方按钮）
   [![Open your Home Assistant instance and show the add add-on repository dialog with a specific repository URL pre-filled.](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2Falexbelgium%2Fhassio-addons)
1. 安装此附加组件。
1. 点击 `Save` 按钮保存配置。
1. 将附加组件选项设置为您的偏好设置。
1. 启动附加组件。
1. 检查附加组件的日志，确认一切正常。
1. 打开 WebUI 并调整软件选项

## 支持

在 GitHub 上创建 Issue。

## 图表

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
