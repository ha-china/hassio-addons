# Home Assistant 插件：Brave

我在闲暇时间维护此及其他 Home Assistant 插件：追踪上游更改、HA 更新以及在实际硬件上进行测试需要大量时间（以及一些金钱）。我使用了我 100 多个插件中的约 5-10 个，因此我定期安装测试机器（并购买一些我实际上不使用的测试服务，如 VPN）来调试和改进这些插件。

如果该插件为您节省了时间或让您的设置更简单，我将非常感谢您的支持！

[![Buy me a coffee][donation-badge]](https://www.buymeacoffee.com/alexbelgium)
[![Donate via PayPal][paypal-badge]](https://www.paypal.com/donate/?hosted_button_id=DZFULJZTP3UQA)

## 插件信息

![Version](https://img.shields.io/badge/dynamic/yaml?label=Version&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fbrave%2Fconfig.yaml)
![Ingress](https://img.shields.io/badge/dynamic/yaml?label=Ingress&query=%24.ingress&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fbrave%2Fconfig.yaml)
![Arch](https://img.shields.io/badge/dynamic/yaml?color=success&label=Arch&query=%24.arch&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fbrave%2Fconfig.yaml)

[![Codacy Badge](https://app.codacy.com/project/badge/Grade/9c6cf10bdbba45ecb202d7f579b5be0e)](https://www.codacy.com/gh/alexbelgium/hassio-addons/dashboard?utm_source=github.com&utm_medium=referral&utm_content=alexbelgium/hassio-addons&utm_campaign=Badge_Grade)
[![GitHub Super-Linter](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/weekly-supelinter.yaml?label=Lint%20code%20base)](https://github.com/alexbelgium/hassio-addons/actions/workflows/weekly-supelinter.yaml)
[![Builder](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/onpush_builder.yaml?label=Builder)](https://github.com/alexbelgium/hassio-addons/actions/workflows/onpush_builder.yaml)

[donation-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee-%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white
[paypal-badge]: https://img.shields.io/badge/Donate%20via%20PayPal-0070BA?logo=paypal&style=flat&logoColor=white

_感谢所有为我仓库星标的人！要星标它，请点击下面的图片，然后它将显示在右上角。谢谢！_

[![Stargazers repo roster for @alexbelgium/hassio-addons](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/.github/stars2.svg)](https://github.com/alexbelgium/hassio-addons/stargazers)

![downloads evolution](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/brave/stats.png)

## 简介

[Brave](https://brave.com/) 是一款为 PC、Mac 和移动设备设计的快速、私密且安全的网络浏览器。
此插件基于 https://github.com/linuxserver/docker-brave 的 Docker 镜像。

## 配置

使用插件的 `env_vars` 选项来传递额外的环境变量（名称大小写皆可）。有关详细信息，请参阅 https://github.com/alexbelgium/hassio-addons/wiki/Add-Environment-variables-to-your-Addon-2。

Webui 可以通过 Ingress 查找，或通过 <http://homeassistant:PORT> 访问。端口默认禁用，但可通过插件选项启用。

默认情况下，该镜像基于 abc 用户，我们建议使用此用户，因为所有的初始化/配置都基于它。默认密码也是 abc。如果您想更改此密码，并在访问界面时需要认证，请在容器的 GUI 终端内执行 passwd 命令。然后，访问 Web 界面时使用以下路径：

http://localhost:3000/?login=true

应用安装不是持久的，您需要通过插件选项来进行。然而，其配置是可用的。

如果图形无法工作，请使用 DRINODE 特性选择您的图形设备。

查看所有潜在环境变量：https://docs.linuxserver.io/images/docker-brave#optional-environment-variables

```yaml
TZ: timezone ; 根据 https://manpages.ubuntu.com/manpages/trusty/man3/DateTime::TimeZone::Catalog.3pm.html 设置的国家/城市
additional_apps: engrampa,thunderbird # 允许安装应用，因为它们不是持久化的
DRINODE: 指定自定义图形设备，默认值为 /dev/dri/renderD128
DNS_servers: 8.8.8.8,1.1.1.1 # 保留空白以使用路由器 DNS，或设置自定义 DNS 以避免垃圾邮件（如果有本地 DNS 广告拦截程序的话）
localdisks: sda1 # 将您的驱动器硬件名称填入，用逗号分隔，或以其标签为准。例如：sda1, sdb1, MYNAS...
networkdisks: "//SERVER/SHARE" # 可选，SMB 服务器列表，用逗号分隔
cifsusername: "username" # 可选，SMB 用户名，适用于所有 SMB 共享
cifspassword: "password" # 可选，SMB 密码
cifsdomain: "domain" # 可选，允许为 SMB 共享设置域
```

## 安装

此插件的安装非常简单，与其他插件的安装没有区别。

1. 将我存储库的插件添加到您的 Home Assistant 实例中（在 Supervisor 存储中添加插件商店的右上部分，或者如果您已配置了我的 HA，则点击下方的按钮）
   [![Open your Home Assistant instance and show the add add-on repository dialog with a specific repository URL pre-filled.](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2Falexbelgium%2Fhassio-addons)
1. 安装此插件。
1. 单击 `Save` 按钮以保存您的配置。
1. 将插件选项设置为您偏好。
1. 启动插件。
1. 检查插件日志以查看一切是否正常。
1. 打开 WebUI 并调整软件选项。

## 支持

在 GitHub 上创建 issue。

## 插图画像

---

**⚠️ This resource is intended to help Chinese Home Assistant users more easily install excellent add-ons. If you are not a Chinese user, please read repository readme first**

**⚠️ 这个资源用来帮助中国Home Assistant用户更容易地安装优秀的插件。如果您不是中国用户，请先阅读仓库的README，以下为收集者（汉化，加速）信息，非原作者信息**

---

## 📱 关注我

扫描下面二维码，关注我。有需要可以随时给我留言：

<img src="https://raw.gitcode.com/ha-china/ha-apps/raw/main/WeChat_QRCode.png" width="50%" /> 📲

## ☕ 赞助支持

如果您觉得我花费大量时间维护这个库对您有帮助，欢迎请我喝杯奶茶，您的支持将是我持续改进的动力！

<div style="display: flex; justify-content: space-between;">
  <img src="https://raw.gitcode.com/ha-china/ha-apps/raw/main/1_readme/Ali_Pay.jpg" height="350px" />
  <img src="https://raw.gitcode.com/ha-china/ha-apps/raw/main/1_readme/WeChat_Pay.jpg" height="350px" />
</div> 💖

感谢您的支持与鼓励！
