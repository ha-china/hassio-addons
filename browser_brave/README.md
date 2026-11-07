# Home Assistant 插件：Brave

我利用业余时间维护此 Home Assistant 插件以及其他插件：跟踪上游更改、HA 更改以及在真实硬件上的测试需要大量时间（以及一些金钱）。我常用的插件约有 5-10 个（远多于我的 110 个插件），因此我会安装测试机器（并购买一些测试服务，如 vpn），我将这些机器用于我自己之外的用途来调试和改进插件。

如果这个插件为您节省了时间或让您的设置更简单，我非常感谢您的支持！

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

_感谢所有为我仓库点赞的人！要点赞它，请点击下方的图片，它将显示在右上角。谢谢！_

[![Stargazers repo roster for @alexbelgium/hassio-addons](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/.github/stars2.svg)](https://github.com/alexbelgium/hassio-addons/stargazers)

![downloads evolution](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/brave/stats.png)

## 关于

[Brave](https://brave.com/) 是用于 PC、Mac 和移动设备的快速、私密和安全的网络浏览器。
此插件基于 docker 镜像 https://github.com/linuxserver/docker-brave。

## 配置

使用插件的 `env_vars` 选项传递额外的环境变量（大小写名称均可）。有关详细信息，请参阅 https://github.com/alexbelgium/hassio-addons/wiki/Add-Environment-variables-to-your-Addon-2。

Web UI 可以通过 ingress 或访问 <http://homeassistant:PORT> 找到。端口默认禁用，但可以通过插件选项启用。

默认情况下，镜像基于 abc 用户，我们建议使用此用户，因为所有的 init 和配置都是基于它。默认密码也是 abc。如果您想更改此密码，并在访问界面时需要认证，只需在容器中的 GUI 终端内运行 passwd。然后访问 Web 界面时使用以下路径：

http://localhost:3000/?login=true

应用程序安装不是持久的，您需要通过插件选项进行安装。但是，其配置是持久的。

如果图形功能不工作，请使用 DRINODE 功能选择您的图形设备。

所有潜在的环境变量请访问：https://docs.linuxserver.io/images/docker-brave#optional-environment-variables

```yaml
TZ: timezone ; Country/City according to https://manpages.ubuntu.com/manpages/trusty/man3/DateTime::TimeZone::Catalog.3pm.html
additional_apps: engrampa,thunderbird # 允许安装应用程序，因为它们不是持久的
DRINODE: specify a custom graphic device, default is /dev/dri/renderD128
DNS_servers: 8.8.8.8,1.1.1.1 # 保持空白以使用路由器的 DNS，或设置自定义 DNS 以避免垃圾邮件（如果本地 DNS 广告拦截器存在）
localdisks: sda1 # 将您的驱动器硬件名称通过逗号分隔地加入，或其标签。例如 sda1, sdb1, MYNAS...
networkdisks: "//SERVER/SHARE" # 可选，列出要挂载的 smb 服务器，用逗号分隔
cifsusername: "username" # 可选，smb 用户名，所有 smb 共享相同
cifspassword: "password" # 可选，smb 密码
cifsdomain: "domain" # 可选，允许设置 smb 共享的域
```

## 安装

此插件的安装非常简单，与其他插件的安装没有区别。

1. 将我的插件仓库添加到您的 Home Assistant 实例中（在 supervisor addons store 右上角，或如果您已配置了我的 HA，点击下方按钮）
   [![Open your Home Assistant instance and show the add add-on repository dialog with a specific repository URL pre-filled.](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2Falexbelgium%2Fhassio-addons)
1. 安装此插件。
1. 点击 `Save` 按钮以存储您的配置。
1. 将插件选项设置为您的偏好设置。
1. 启动插件。
1. 检查插件日志以查看一切是否顺利。
1. 打开 Web UI 并调整软件选项

## 支持

在 github 上创建 issue

## 插图

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
