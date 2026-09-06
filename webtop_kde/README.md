# Home Assistant 插件：Webtop KDE Alpine

我在空闲时间维护 Home Assistant 插件及其他插件： acompanhar upstream 更新、HA 更新，以及在真实硬件上测试耗费了大量时间（以及一些金钱）。我会使用大约 5-10 个我拥有的 110 多个插件，因此我经常安装测试机器（并购买一些我自己不使用的测试服务，如 vpn）来进行故障排除和改进插件。

如果您使用此插件节省了时间或简化了设置，我会非常感谢您的支持！

[![Buy me a coffee][donation-badge]](https://www.buymeacoffee.com/alexbelgium)
[![Donate via PayPal][paypal-badge]](https://www.paypal.com/donate/?hosted_button_id=DZFULJZTP3UQA)

## 插件信息

![Version](https://img.shields.io/badge/dynamic/yaml?label=Version&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fwebtop%2Fconfig.yaml)
![Ingress](https://img.shields.io/badge/dynamic/yaml?label=Ingress&query=%24.ingress&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fwebtop%2Fconfig.yaml)
![Arch](https://img.shields.io/badge/dynamic/yaml?color=success&label=Arch&query=%24.arch&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fwebtop%2Fconfig.yaml)

[![Codacy Badge](https://app.codacy.com/project/badge/Grade/9c6cf10bdbba45ecb202d7f579b5be0e)](https://www.codacy.com/gh/alexbelgium/hassio-addons/dashboard?utm_source=github.com&utm_medium=referral&utm_content=alexbelgium/hassio-addons&utm_campaign=Badge_Grade)
[![GitHub Super-Linter](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/weekly-supelinter.yaml?label=Lint%20code%20base)](https://github.com/alexbelgium/hassio-addons/actions/workflows/weekly-supelinter.yaml)
[![Builder](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/onpush_builder.yaml?label=Builder)](https://github.com/alexbelgium/hassio-addons/actions/workflows/onpush_builder.yaml)

[donation-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee-%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white
[paypal-badge]: https://img.shields.io/badge/Donate%20via%20PayPal-0070BA?logo=paypal&style=flat&logoColor=white

_感谢所有为我仓库星标 (Star) 的人！要星标它，请点击下方图片，然后它就会被显示在右上角。谢谢！_

[![Stargazers repo roster for @alexbelgium/hassio-addons](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/.github/stars2.svg)](https://github.com/alexbelgium/hassio-addons/stargazers)

![downloads evolution](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/webtop/stats.png)

## 关于

[webtop](https://github.com/webtop/webtop) 是一个可以通过任何现代网络浏览器访问的全功能桌面环境。此插件基于 docker 镜像 https://github.com/linuxserver/docker-webtop。

## 配置

使用插件的 `env_vars` 选项来传递额外的环境变量（名称区分大小写）。详见 https://github.com/alexbelgium/hassio-addons/wiki/Add-Environment-variables-to-your-Addon-2 获取详细信息。

Webui 可以通过 ingress 访问，地址为 <http://homeassistant:PORT>。端口默认禁用，但可以通过插件选项启用。

默认情况下，该镜像基于 abc 用户，我们建议使用该用户，因为所有的初始化/配置都是基于它。默认密码也是 abc。如果您想更改密码并需要在访问界面时要求身份验证，请在 webtop 的图形终端内执行 passwd 命令。然后，在访问 Web 接口时使用以下路径：

http://localhost:3000/?login=true

应用程序的安装不是持久的，您需要通过插件选项进行操作。然而，它们的配置是持久的。

如果图形功能不工作，请使用 DRINODE 功能来选择图形设备。

查看所有潜在的环境变量的位置：https://docs.linuxserver.io/images/docker-webtop#optional-environment-variables

```yaml
TZ: timezone ; 根据国家/城市，参见 https://manpages.ubuntu.com/manpages/trusty/man3/DateTime::TimeZone::Catalog.3pm.html
additional_apps: engrampa,thunderbird # 允许安装应用程序，因为它们不是持久的
DRINODE: specify a custom graphic device, default is /dev/dri/renderD128
DNS_servers: 8.8.8.8,1.1.1.1 # 留空以使用路由器的 DNS，或设置自定义 DNS 以避免垃圾邮件（如果本地 DNS 进行广告拦截）
localdisks: sda1 # 将硬盘挂载到硬件名称（通过逗号分隔），或标签。例如：sda1, sdb1, MYNAS...
networkdisks: "//SERVER/SHARE" # 可选的，SMB 服务器列表，逗号分隔
cifsusername: "username" # 可选的，SMB 用户名，适用于所有 SMB 共享
cifspassword: "password" # 可选的，SMB 密码
cifsdomain: "domain" # 可选的，允许为 SMB 共享设置域
```

## 安装

此插件的安装非常简单，与其他插件的安装方式没有区别。

1. 将我的插件仓库添加到您的 Home Assistant 实例中（在 supervisor 插件商店右上角，或如果您配置了我的 HA，请点击下方按钮）
   [![Open your Home Assistant instance and show the add add-on repository dialog with a specific repository URL pre-filled.](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2Falexbelgium%2Fhassio-addons)
1. 安装此插件。
1. 点击 `Save` 按钮以保存您的配置。
1. 将插件选项设置为您偏好的内容。
1. 启动插件。
1. 查看插件的日志以确认一切正常。
1. 打开 Web UI 并调整软件选项。

## 支持

在 github 上创建问题 (issue)。

## 插图

![illustration](https://www.linuxserver.io/user/pages/content/images/2021/05/menu.png)

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
