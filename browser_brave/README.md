# Home Assistant 附加组件：Brave

我利用业余时间维护此及其他 Home Assistant 附加组件：跟进上游变更、HA 变更，并在真实硬件上进行测试非常耗时（还需要一些钱）。我使用了约 5-10 个我的 110+ 个附加组件，因此我定期安装测试机器（并购买一些我自己不使用的测试服务，例如 VPN）来排查问题和改进附加组件。

如果这个附加组件能为您节省时间或使您的设置更简单，我将非常感激您的支持！

[![Buy me a coffee][donation-badge]](https://www.buymeacoffee.com/alexbelgium)
[![Donate via PayPal][paypal-badge]](https://www.paypal.com/donate/?hosted_button_id=DZFULJZTP3UQA)

## 附加组件信息

![Version](https://img.shields.io/badge/dynamic/yaml?label=Version&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fbrave%2Fconfig.yaml)
![Ingress](https://img.shields.io/badge/dynamic/yaml?label=Ingress&query=%24.ingress&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fbrave%2Fconfig.yaml)
![Arch](https://img.shields.io/badge/dynamic/yaml?color=success&label=Arch&query=%24.arch&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fbrave%2Fconfig.yaml)

[![Codacy Badge](https://app.codacy.com/project/badge/Grade/9c6cf10bdbba45ecb202d7f579b5be0e)](https://www.codacy.com/gh/alexbelgium/hassio-addons/dashboard?utm_source=github.com&utm_medium=referral&utm_content=alexbelgium/hassio-addons&utm_campaign=Badge_Grade)
[![GitHub Super-Linter](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/weekly-supelinter.yaml?label=Lint%20code%20base)](https://github.com/alexbelgium/hassio-addons/actions/workflows/weekly-supelinter.yaml)
[![Builder](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/onpush_builder.yaml?label=Builder)](https://github.com/alexbelgium/hassio-addons/actions/workflows/onpush_builder.yaml)

[donation-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee-%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white
[paypal-badge]: https://img.shields.io/badge/Donate%20via%20PayPal-0070BA?logo=paypal&style=flat&logoColor=white

_感谢所有为我仓库星标的人！想要星标，请点击下方的图像，然后它将会出现在右上角。谢谢！_

[![Stargazers repo roster for @alexbelgium/hassio-addons](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/.github/stars2.svg)](https://github.com/alexbelgium/hassio-addons/stargazers)

![downloads evolution](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/brave/stats.png)

## 关于

[Brave](https://brave.com/) 是一款适用于 PC、Mac 和移动设备的快速、私密且安全的网络浏览器。
该附加组件基于 Docker 镜像，网址为 https://github.com/linuxserver/docker-brave

## 配置

使用附加组件的 `env_vars` 选项来传递额外的环境变量（名称可以是大写或小写）。有关详细信息，请参阅 https://github.com/alexbelgium/hassio-addons/wiki/Add-Environment-variables-to-your-Addon-2。

WebUI 可以通过 Ingress 或在 http://homeassistant:PORT 处找到。端口默认是禁用的，但可以通过附加组件选项启用。

默认情况下，镜像围绕 abc 用户构建，我们建议使用该用户，因为所有的初始化/配置都是围绕它进行的。默认密码也是 abc。如果您想更改此密码并需要在访问界面时要求认证，请分别在容器的 GUI 终端中执行 passwd 命令。然后访问 Web 界面时，使用以下路径：

http://localhost:3000/?login=true

应用安装不是持久化的，您需要通过附加组件选项来完成。然而，它们的配置是持久化的。

如果图形界面无法工作，请使用 DRINODE 功能选择您的图形设备。

查找所有潜在的环境变量：https://docs.linuxserver.io/images/docker-brave#optional-environment-variables

```yaml
TZ: timezone ; 根据 https://manpages.ubuntu.com/manpages/trusty/man3/DateTime::TimeZone::Catalog.3pm.html 填写时区所在国家/城市
additional_apps: engrampa,thunderbird # 允许安装应用，因为它们不是持久化的
DRINODE: 指定自定义图形设备，默认为 /dev/dri/renderD128
DNS_servers: 8.8.8.8,1.1.1.1 # 留空使用路由器 DNS，或设置自定义 DNS 以防止垃圾邮件（如果本地 DNS 是广告拦截器）
localdisks: sda1 # 输入您挂载的驱动器硬件名称，用逗号分隔，或其标签。例如：sda1, sdb1, MYNAS...
networkdisks: "//SERVER/SHARE" # 可选，要挂载的 SMB 服务器列表，用逗号分隔
cifsusername: "username" # 可选，SMB 用户名，所有 SMB 共享共用此用户名
cifspassword: "password" # 可选，SMB 密码
cifsdomain: "domain" # 可选，允许为 SMB 共享设置域名
```

## 安全性

如果没有 `PASSWORD`，Brave 就没有认证，发布的外部 Web 端口会将浏览器的所有控制权交给网络中的任何人，包括其会话以及已映射的媒体和共享文件夹。为了保障安全，请设置 `PASSWORD` 选项，或者在附加组件网络设置中禁用端口并使用 Ingress。即使设置了 `PASSWORD`，DevTools 端口 9221（默认禁用）也没有认证：仅将其发布在受信任的网络上。附加组件在两种情况下都会在启动时记录警告消息。

## 安装

此附加组件的安装非常简单，与其他附加组件的安装没有区别。

1. 将我的附加组件存储库添加到您的 Home Assistant 实例中（在 supervisor 附加组件商店中点击右上角，或如果您已配置了我的 HA，则点击下方的按钮）
   [![Open your Home Assistant instance and show the add add-on repository dialog with a specific repository URL pre-filled.](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2Falexbelgium%2Fhassio-addons)
1. 安装此附加组件。
1. 点击 `Save` 按钮以保存您的配置。
1. 将附加组件选项设置为您的偏好设置
1. 启动附加组件。
1. 检查附加组件的日志，查看是否一切正常。
1. 打开 WebUI 并调整软件选项

## 支持

在 github 上创建问题。

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
