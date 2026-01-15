# Home assistant add-on: Cloudcommander


我利用业余时间维护这个和其他 Home Assistant add-ons：跟上上游的变更、HA 的变更以及在真实硬件上测试都需要大量的时间（并且还需要一些金钱）。我大约使用我超过 110 个 add-ons 中的 5-10 个，所以我安装了一些我自己不使用的测试机器（并购买了一些测试服务，如 VPN）来调试和改进这些 add-ons。

如果这个 add-on 为您节省了时间或简化了您的设置，我将非常感谢您的支持！

[![Buy me a coffee][donation-badge]](https://www.buymeacoffee.com/alexbelgium)
[![Donate via PayPal][paypal-badge]](https://www.paypal.com/donate/?hosted_button_id=DZFULJZTP3UQA)

## Addon informations

![Version](https://img.shields.io/badge/dynamic/yaml?label=Version&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fcloudcommander%2Fconfig.yaml)
![Ingress](https://img.shields.io/badge/dynamic/yaml?label=Ingress&query=%24.ingress&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fcloudcommander%2Fconfig.yaml)
![Arch](https://img.shields.io/badge/dynamic/yaml?color=success&label=Arch&query=%24.arch&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fcloudcommander%2Fconfig.yaml)

[![Codacy Badge](https://app.codacy.com/project/badge/Grade/9c6cf10bdbba45ecb202d7f579b5be0e)](https://www.codacy.com/gh/alexbelgium/hassio-addons/dashboard?utm_source=github.com&utm_medium=referral&utm_content=alexbelgium/hassio-addons&utm_campaign=Badge_Grade)
[![GitHub Super-Linter](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/weekly-supelinter.yaml?label=Lint%20code%20base)](https://github.com/alexbelgium/hassio-addons/actions/workflows/weekly-supelinter.yaml)
[![Builder](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/onpush_builder.yaml?label=Builder)](https://github.com/alexbelgium/hassio-addons/actions/workflows/onpush_builder.yaml)

[donation-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee-%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white
[paypal-badge]: https://img.shields.io/badge/Donate%20via%20PayPal-0070BA?logo=paypal&style=flat&logoColor=white

_感谢所有给我仓库点赞的人！点击下面的图片来点赞，它将会出现在右上角。谢谢！_

[![Stargazers repo roster for @alexbelgium/hassio-addons](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/.github/stars2.svg)](https://github.com/alexbelgium/hassio-addons/stargazers)

![downloads evolution](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/cloudcommander/stats.png)

## About

[Cloud Commander](https://github.com/coderaiser/cloudcmd) 是一个带有控制台和编辑器的网页文件管理器。
这个 add-on 基于的 [docker 镜像](https://hub.docker.com/r/coderaiser/cloudcmd)。

## Configuration

Webui 可以在 <http://homeassistant:8000> 或通过 Ingress 在侧边栏中访问。
配置可以通过 app webUI 进行，除了以下选项。

### Options

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `CUSTOM_OPTIONS` | str | | 自定义 CLI 选项（例如，`--name Homeassistant`) |
| `DROPBOX_TOKEN` | str | | Dropbox 集成令牌（见 https://cloudcmd.io/) |
| `localdisks` | str | | 要挂载的本地驱动器（例如，`sda1,sdb1,MYNAS`) |
| `networkdisks` | str | | 要挂载的 SMB 分享（例如，`//SERVER/SHARE`) |
| `cifsusername` | str | | SMB 网络分享的用户名 |
| `cifspassword` | str | | SMB 网络分享的密码 |
| `cifsdomain` | str | | SMB 网络分享的域 |
| `smbv1` | bool | `false` | 启用 SMB v1 协议 |

### Example Configuration

```yaml
CUSTOM_OPTIONS: "--name Homeassistant"
DROPBOX_TOKEN: "your-dropbox-token"
localdisks: "sda1,sdb1"
networkdisks: "//192.168.1.100/files"
cifsusername: "fileuser"
cifspassword: "password123"
cifsdomain: "workgroup"
smbv1: false
```

### Mounting Drives

这个 add-on 支持挂载本地驱动器和远程 SMB 分享：

- **本地驱动器**：参见 [在 Addons 中挂载本地驱动器](https://github.com/alexbelgium/hassio-addons/wiki/Mounting-Local-Drives-in-Addons)
- **远程分享**：参见 [在 Addons 中挂载远程分享](https://github.com/alexbelgium/hassio-addons/wiki/Mounting-remote-shares-in-Addons)

### Custom Scripts and Environment Variables

这个 add-on 支持自定义脚本和环境变量：

- **自定义脚本**：参见 [在 Addons 中运行自定义脚本](https://github.com/alexbelgium/hassio-addons/wiki/Running-custom-scripts-in-Addons)
- **env_vars 选项**：使用 add-on 的 `env_vars` 选项来传递额外的环境变量（大小写名称均可）。参见 https://github.com/alexbelgium/hassio-addons/wiki/Add-Environment-variables-to-your-Addon-2 了解详情。

## Installation

这个 add-on 的安装非常简单，与其他 Hass.io add-on 的安装方式相同。

1. [将我的 Hass.io add-ons 仓库][repository] 添加到您的 Hass.io 实例。
1. 安装这个 add-on。
1. 点击 `Save` 按钮来保存您的配置。
1. 启动 add-on。
1. 检查 add-on 的日志，看看一切是否正常。

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
