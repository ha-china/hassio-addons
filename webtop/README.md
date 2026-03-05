# Home assistant add-on: Webtop KDE Alpine

我利用业余时间维护这个以及其他 Home Assistant add-ons：跟上上游的变更、HA 的变更，并在真实硬件上测试都需要大量的时间（并且需要一些金钱）。我大约使用我超过 110 个 add-ons 中 5-10 个，因此我安装测试机器（并且购买一些我自己不使用的测试服务，例如 VPN）来调试和改进这些 add-ons。

如果这个 add-on 为您节省了时间或简化了您的设置，我将非常感谢您的支持！

[![Buy me a coffee][donation-badge]](https://www.buymeacoffee.com/alexbelgium)
[![Donate via PayPal][paypal-badge]](https://www.paypal.com/donate/?hosted_button_id=DZFULJZTP3UQA)

## Addon informations

![Version](https://img.shields.io/badge/dynamic/yaml?label=Version&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fwebtop%2Fconfig.yaml)
![Ingress](https://img.shields.io/badge/dynamic/yaml?label=Ingress&query=%24.ingress&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fwebtop%2Fconfig.yaml)
![Arch](https://img.shields.io/badge/dynamic/yaml?color=success&label=Arch&query=%24.arch&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fwebtop%2Fconfig.yaml)

[![Codacy Badge](https://app.codacy.com/project/badge/Grade/9c6cf10bdbba45ecb202d7f579b5be0e)](https://www.codacy.com/gh/alexbelgium/hassio-addons/dashboard?utm_source=github.com&utm_medium=referral&utm_content=alexbelgium/hassio-addons&utm_campaign=Badge_Grade)
[![GitHub Super-Linter](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/weekly-supelinter.yaml?label=Lint%20code%20base)](https://github.com/alexbelgium/hassio-addons/actions/workflows/weekly-supelinter.yaml)
[![Builder](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/onpush_builder.yaml?label=Builder)](https://github.com/alexbelgium/hassio-addons/actions/workflows/onpush_builder.yaml)

[donation-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee-%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white
[paypal-badge]: https://img.shields.io/badge/Donate%20via%20PayPal-0070BA?logo=paypal&style=flat&logoColor=white

_感谢所有给我的仓库加星标的人！要加星标，请点击下面的图片，然后它就会在右上角。谢谢！_

[![Stargazers repo roster for @alexbelgium/hassio-addons](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/.github/stars2.svg)](https://github.com/alexbelgium/hassio-addons/stargazers)

![downloads evolution](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/webtop/stats.png)

## About

[webtop](https://github.com/webtop/webtop) 是一个可以通过任何现代网络浏览器访问的完整桌面环境。
这个 add-on 基于 https://github.com/linuxserver/docker-webtop 的 docker 镜像。

## Configuration

Webui 可以通过 ingress 或在 <http://homeassistant:PORT> 找到。端口默认是禁用的，但可以通过 add-on 选项启用。

默认情况下，镜像基于 abc 用户，我们建议使用此用户，因为所有的 init/config 都基于它。默认密码也是 abc。如果您想更改此密码并在访问界面时需要身份验证，请在 webtop 中的 gui 终端中运行 passwd。然后，在访问网络界面时使用路径：

http://localhost:3000/?login=true

应用程序的安装不是持久的，您需要通过 add-on 选项进行安装。但是，它们的配置是持久的。

如果图形无法工作，使用 DRINODE 功能选择您的图形设备。

有关所有潜在的环境变量，请参阅：https://docs.linuxserver.io/images/docker-webtop#optional-environment-variables

### Options

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `PGID` | int | `0` | 文件权限的组 ID |
| `PUID` | int | `0` | 文件权限的用户 ID |
| `TZ` | str | | 时区（例如，`Europe/London`） |
| `additional_apps` | str | `engrampa,libreoffice` | 要安装的应用程序（逗号分隔） |
| `DRINODE` | str | `/dev/dri/renderD128` | 图形设备路径 |
| `DNS_server` | str | `8.8.8.8` | 自定义 DNS 服务器 |
| `KEYBOARD` | str | `en-us-qwerty` | 键盘布局 |
| `PASSWORD` | str | | 自定义网络界面的密码 |
| `data_location` | str | | 自定义数据存储路径 |
| `localdisks` | str | | 要挂载的本地驱动器（例如，`sda1,sdb1`） |
| `networkdisks` | str | | 要挂载的 SMB 共享（例如，`//SERVER/SHARE`） |
| `cifsusername` | str | | SMB 共享的网络用户名 |
| `cifspassword` | str | | SMB 共享的网络密码 |
| `cifsdomain` | str | | SMB 共享的网络域 |

### Example Configuration

```yaml
PGID: 1000
PUID: 1000
TZ: "Europe/London"
additional_apps: "firefox,gimp,vlc"
DRINODE: "/dev/dri/card0"
KEYBOARD: "fr-fr-azerty"
localdisks: "sda1,sdb1"
networkdisks: "//192.168.1.100/media"
cifsusername: "mediauser"
cifspassword: "password123"
cifsdomain: "workgroup"
```

### Mounting Drives

这个 add-on 支持挂载本地驱动器和远程 SMB 共享：

- **本地驱动器**：请参阅 [在 Add-on 中挂载本地驱动器](https://github.com/alexbelgium/hassio-addons/wiki/Mounting-Local-Drives-in-Addons)
- **远程共享**：请参阅 [在 Add-on 中挂载远程共享](https://github.com/alexbelgium/hassio-addons/wiki/Mounting-remote-shares-in-Addons)

### Custom Scripts and Environment Variables

这个 add-on 支持自定义脚本执行和环境变量注入：

- **自定义脚本**：请参阅 [在 Add-on 中运行自定义脚本](https://github.com/alexbelgium/hassio-addons/wiki/Running-custom-scripts-in-Addons)
- **env_vars 选项**：使用 add-on 的 `env_vars` 选项来传递额外的环境变量（名称可以是大小写）。请参阅 https://github.com/alexbelgium/hassio-addons/wiki/Add-Environment-variables-to-your-Addon-2 获取详细信息。

### Additional Resources

有关所有潜在的环境变量：https://docs.linuxserver.io/images/docker-webtop#optional-environment-variables

## Installation

这个 add-on 的安装非常简单，与安装任何其他 add-on 没有区别。

1. 将我的 add-ons 仓库添加到您的 Home Assistant 实例中（在 supervisor add-ons store 的右上角，或者如果您已经配置了我的 HA，请点击下面的按钮）
   [![打开您的 Home Assistant 实例并显示添加 add-on 仓库对话框，其中预填了特定的仓库 URL。](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2Falexbelgium%2Fhassio-addons)
1. 安装这个 add-on。
1. 点击 `Save` 按钮保存您的配置。
1. 设置 add-on 选项以符合您的偏好
1. 启动 add-on。
1. 检查 add-on 的日志以查看是否一切正常。
1. 打开 webUI 并调整软件选项

## Support

在 github 上创建问题

## Illustration

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
