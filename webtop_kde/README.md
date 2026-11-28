# Home Assistant 附加组件：Webtop KDE Alpine

我在空闲时间维护此附加组件及其他 Home Assistant 附加组件：跟进上游变更、HA 变更，以及在真实硬件上进行测试需要耗费大量时间（以及一些金钱）。我通常在 110 多个附加组件中使用 5-10 个，因此为了调试和改进这些附加组件，我会定期安装测试机器（并购买一些测试服务，如 vpn），即使我自己不使用它们。

如果此附加组件为您节省时间或使您的设置更容易，我将非常感激您的支持！

[![Buy me a coffee][donation-badge]](https://www.buymeacoffee.com/alexbelgium)
[![Donate via PayPal][paypal-badge]](https://www.paypal.com/donate/?hosted_button_id=DZFULJZTP3UQA)

## 附加组件信息

![Version](https://img.shields.io/badge/dynamic/yaml?label=Version&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fwebtop%2Fconfig.yaml)
![Ingress](https://img.shields.io/badge/dynamic/yaml?label=Ingress&query=%24.ingress&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fwebtop%2Fconfig.yaml)
![Arch](https://img.shields.io/badge/dynamic/yaml?color=success&label=Arch&query=%24.arch&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fwebtop%2Fconfig.yaml)

[![Codacy Badge](https://app.codacy.com/project/badge/Grade/9c6cf10bdbba45ecb202d7f579b5be0e)](https://www.codacy.com/gh/alexbelgium/hassio-addons/dashboard?utm_source=github.com&utm_medium=referral&utm_content=alexbelgium/hassio-addons&utm_campaign=Badge_Grade)
[![GitHub Super-Linter](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/weekly-supelinter.yaml?label=Lint%20code%20base)](https://github.com/alexbelgium/hassio-addons/actions/workflows/weekly-supelinter.yaml)
[![Builder](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/onpush_builder.yaml?label=Builder)](https://github.com/alexbelgium/hassio-addons/actions/workflows/onpush_builder.yaml)

[donation-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee-%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white
[paypal-badge]: https://img.shields.io/badge/Donate%20via%20PayPal-0070BA?logo=paypal&style=flat&logoColor=white

_感谢所有人星标我的仓库！要对其进行星标，请点击下方图片，它将显示在右上角。谢谢！_

[![Stargazers repo roster for @alexbelgium/hassio-addons](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/.github/stars2.svg)](https://github.com/alexbelgium/hassio-addons/stargazers)

![downloads evolution](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/webtop/stats.png)

## 概述

[webtop](https://github.com/webtop/webtop) 是一个可以通过任何现代网络浏览器访问的全功能桌面环境。
此附加组件基于 docker 镜像 https://github.com/linuxserver/docker-webtop。

## 配置

使用附加组件 `env_vars` 选项来传递额外的环境变量（名称大小写均可）。有关详细信息，请访问 https://github.com/alexbelgium/hassio-addons/wiki/Add-Environment-variables-to-your-Addon-2。

Webui 可以通过 ingress 或在 <http://homeassistant:PORT> 处找到。默认情况下端口被禁用，但可以通过附加组件选项启用它。

默认情况下，该镜像基于 abc 用户，我们建议使用此用户，因为所有的 init 配置都基于它。默认密码也是 abc。如果您想要更改此密码并在访问界面时需要认证，请简单地在 webtop 的 gui 终端内执行 passwd。然后访问 web 界面时使用以下路径：

http://localhost:3000/?login=true

应用安装不是持久的，您需要通过附加组件选项进行操作。不过，它们的配置是持久的。

如果图形功能不起作用，请使用 DRINODE 功能选择您的图形设备。

查看所有可能的 ENV 变量：https://docs.linuxserver.io/images/docker-webtop#optional-environment-variables

```yaml
TZ: timezone ; 时区，根据国家/城市参考 https://manpages.ubuntu.com/manpages/trusty/man3/DateTime::TimeZone::Catalog.3pm.html
additional_apps: engrampa,thunderbird # 允许安装应用，因为它们不是持久的
DRINODE: specify a custom graphic device, default is /dev/dri/renderD128
DNS_servers: 8.8.8.8,1.1.1.1 # 保持空白以使用路由器 DNS，或设置自定义 DNS 以避免因本地 DNS 广告移除器而造成的垃圾邮件
localdisks: sda1 # 将您的驱动器硬件名称放入 mounts，用逗号分隔，或 its label。例如 sda1, sdb1, MYNAS... 添加一个文件夹仅挂载它，例如 MYNAS/public 挂载于 /mnt/MYNAS/public (2026-09-19 之后发布的附加组件版本)
networkdisks: "//SERVER/SHARE" # 可选，要挂载的 smb 服务器列表，用逗号分隔
cifsusername: "username" # 可选，smb 用户名，所有 smb shares 都一样
cifspassword: "password" # 可选，smb 密码
cifsdomain: "domain" # 可选，允许设置 smb share 的域
```

## 安装

该附加组件的安装非常直接，与其他附加组件的安装没有区别。

1. 将我的附加组件仓库添加到您的 home assistant 实例（在 supervisor addons store 右上角，或如果您已配置了 HA 则点击下方按钮）
   [![打开您的 Home Assistant 实例并显示附加组件仓库对话框，特别预填充特定的仓库 URL。](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2Falexbelgium%2Fhassio-addons)
1. 安装此附加组件。
1. 点击 `Save` 按钮以保存您的配置。
1. 将附加组件选项设置为您的偏好设置。
1. 启动附加组件。
1. 检查附加组件日志以查看一切是否顺利。
1. 打开 webUI 并调整软件选项

## 支持

在 github 上创建一个问题

## 插图

![illustration](https://www.linuxserver.io/user/pages/content/images/2021/05/menu.png)

[repository]: https://github.com/alexbelgium/hassio-addons

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
