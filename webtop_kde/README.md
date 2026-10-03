# Home Assistant 插件：Webtop KDE Alpine

我利用业余时间维护此及其他 Home Assistant 插件：追踪上游更改、适配 HA 的变化以及在真实硬件上进行测试需要大量时间（以及一些金钱）。我所使用的约 5-10 个插件（从超过 110 个插件中）如此频繁，以至于我安装测试机器（并购买一些我自己不使用的测试服务，如 VPN）来调试和改进这些插件。

如果您觉得这个插件为您节省时间或让配置更简单，您的支持将使我倍感感激！

[![Buy me a coffee][donation-badge]](https://www.buymeacoffee.com/alexbelgium)
[![Donate via PayPal][paypal-badge]](https://www.paypal.com/donate/?hosted_button_id=DZFULJZTP3UQA)

## 插件信息

![版本](https://img.shields.io/badge/dynamic/yaml?label=Version&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fwebtop%2Fconfig.yaml)
![Ingress](https://img.shields.io/badge/dynamic/yaml?label=Ingress&query=%24.ingress&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fwebtop%2Fconfig.yaml)
![架构](https://img.shields.io/badge/dynamic/yaml?color=success&label=Arch&query=%24.arch&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fwebtop%2Fconfig.yaml)

[![Codacy Badge](https://app.codacy.com/project/badge/Grade/9c6cf10bdbba45ecb202d7f579b5be0e)](https://www.codacy.com/gh/alexbelgium/hassio-addons/dashboard?utm_source=github.com&utm_medium=referral&utm_content=alexbelgium/hassio-addons&utm_campaign=Badge_Grade)
[![GitHub Super-Linter](https//img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/weekly-supelinter.yaml?label=Lint%20code%20base)](https://github.com/alexbelgium/hassio-addons/actions/workflows/weekly-supelinter.yaml)
[![Builder](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/onpush_builder.yaml?label=Builder)](https://github.com/alexbelgium/hassio-addons/actions/workflows/onpush_builder.yaml)

[donation-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee-%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white
[paypal-badge]: https://img.shields.io/badge/Donate%20via%20PayPal-0070BA?logo=paypal&style=flat&logoColor=white

_感谢所有人为我仓库打 star！请点击下方图片打 star，它就会显示在右上角。谢谢！_

[![Stargazers repo roster for @alexbelgium/hassio-addons](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/.github/stars2.svg)](https://github.com/alexbelgium/hassio-addons/stargazers)

![下载变化曲线](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/webtop/stats.png)

## 介绍

[webtop](https://github.com/webtop/webtop) 是一个可以通过任何现代 Web 浏览器访问的完整桌面环境。
该插件基于 Docker 镜像 https://github.com/linuxserver/docker-webtop。

## 配置

使用插件的 `env_vars` 选项传递额外的环境变量（名称可以是大写或小写）。详情请参见 https://github.com/alexbelgium/hassio-addons/wiki/Add-Environment-variables-to-your-Addon-2。

Web 界面可以通过 ingress 或在 <http://homeassistant:PORT> 访问。端口默认禁用，但可以通过插件选项启用。

默认情况下，该镜像基于 abc 用户，我们建议使用此用户，因为所有的初始化/配置都围绕它构建。默认密码也是 abc。如果您想要更改此密码，并需要在访问界面时要求身份验证，请在 webtop 的 GUI 终端内部运行 passwd 命令。随后访问 Web 界面时使用以下路径：

http://localhost:3000/?login=true

应用程序安装不是永久的，需要通过插件选项进行操作。其配置则是永久的。

如果图形无法正常工作，请使用 DRINODE 功能选择您的图形设备。

所有潜在的环境变量请参阅此处：https://docs.linuxserver.io/images/docker-webtop#optional-environment-variables

```yaml
TZ: 时区 ; 根据 https://manpages.ubuntu.com/manpages/trusty/man3/DateTime::TimeZone::Catalog.3pm.html 填写国家/城市
additional_apps: engrampa,thunderbird # 允许安装应用程序，因为它们不是持久性的
DRINODE: 指定自定义图形设备，默认为 /dev/dri/renderD128
DNS_servers: 8.8.8.8,1.1.1.1 # 留空以使用路由器 DNS，或设置自定义 DNS 以避免垃圾邮件（如果本地 DNS 有广告拦截）
localdisks: sda1 # 将需要挂载的硬件驱动器名称（用逗号分隔）或其标签填入。例如：sda1, sdb1, MYNAS... 如果要添加只挂载的文件夹，例如 MYNAS/public 将挂载到 /mnt/MYNAS/public（2026-09-19 之后发布的插件版本）
networkdisks: "//SERVER/SHARE" # 可选，要挂载的 SMB 服务器列表，用逗号分隔
cifsusername: "用户名" # 可选，SMB 用户名，适用于所有 SMB 共享
cifspassword: "密码" # 可选，SMB 密码
cifsdomain: "域名" # 可选，允许为 SMB 共享设置域名
```

## 安装

该插件的安装非常简单，与其他插件的安装没有区别。

1. 将我的插件仓库添加到 Home Assistant 实例（在 Supervisor 插件商店右上角，或者如果您已配置了我的 HA，请单击下方按钮）
   [![打开您的 Home Assistant 实例并显示带有特定仓库 URL 预填充的添加插件仓库对话框。](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2Falexbelgium%2Fhassio-addons)
1. 安装此插件。
1. 单击 `保存` 按钮以存储您的配置。
1. 设置插件选项以符合您的偏好。
1. 启动插件。
1. 查看插件日志以确认一切是否正常。
1. 打开 Web UI 并调整软件选项。

## 支持

在 GitHub 上创建问题

## 插图

![插图](https://www.linuxserver.io/user/pages/content/images/2021/05/menu.png)

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
