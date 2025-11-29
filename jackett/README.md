# Home assistant add-on: jackett

## 💖 支持开发

我利用业余时间维护这个和其他 Home Assistant add-ons：跟进上游变化、HA 变化，并在真实硬件上测试都需要大量时间（和一些金钱）。我大约使用我超过 110 个 add-ons 中的 5-10 个非常频繁，因此我安装了一些我自身不使用的测试机器（和一些测试服务，如 VPN）来调试和改进这些 add-ons。

如果这个 add-on 为您节省了时间或简化了您的设置，我将非常感谢您的支持！

[![Buy me a coffee][donation-badge]](https://www.buymeacoffee.com/alexbelgium)
[![Donate via PayPal][paypal-badge]](https://www.paypal.com/donate/?hosted_button_id=DZFULJZTP3UQA)

## Addon 信息

![版本](https://img.shields.io/badge/dynamic/yaml?label=版本&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fjackett%2Fconfig.yaml)
![Ingress](https://img.shields.io/badge/dynamic/yaml?label=Ingress&query=%24.ingress&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fjackett%2Fconfig.yaml)
![Arch](https://img.shields.io/badge/dynamic/yaml?color=success&label=Arch&query=%24.arch&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fjackett%2Fconfig.yaml)

[![Codacy Badge](https://app.codacy.com/project/badge/Grade/9c6cf10bdbba45ecb202d7f579b5be0e)](https://www.codacy.com/gh/alexbelgium/hassio-addons/dashboard?utm_source=github.com&utm_medium=referral&utm_content=alexbelgium/hassio-addons&utm_campaign=Badge_Grade)
[![GitHub Super-Linter](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/weekly-supelinter.yaml?label=Lint%20code%20base)](https://github.com/alexbelgium/hassio-addons/actions/workflows/weekly-supelinter.yaml)
[![Builder](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/onpush_builder.yaml?label=Builder)](https://github.com/alexbelgium/hassio-addons/actions/workflows/onpush_builder.yaml)

[donation-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee-%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white
[paypal-badge]: https://img.shields.io/badge/Donate%20via%20PayPal-0070BA?logo=paypal&style=flat&logoColor=white

_感谢所有给我仓库点赞的人！点击下面的图片即可点赞，然后它将出现在右上角。谢谢！_

[![Stargazers repo roster for @alexbelgium/hassio-addons](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/.github/stars2.svg)](https://github.com/alexbelgium/hassio-addons/stargazers)

![下载量趋势](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/jackett/stats.png)

## 关于

[jackett](https://github.com/jackett/jackett) - 一个用于处理电影如 Couchpotato 的 jackett 分叉。

这个 add-on 基于 linuxserver.io 的 [docker image](https://github.com/linuxserver/docker-jackett)。

## 配置

使用 add-on 的 `env_vars` 选项来传递额外的环境变量（大小写名称）。详情请见 https://github.com/alexbelgium/hassio-addons/wiki/Add-Environment-variables-to-your-Addon-2。

Webui 可以在配置的端口或通过 Ingress 在侧边栏找到。
配置可以通过应用 webUI 完成，以下选项除外。

### 选项

| 选项 | 类型 | 默认 | 描述 |
|------|------|------|------|
| `PGID` | int | `0` | 文件权限的组 ID |
| `PUID` | int | `0` | 文件权限的用户 ID |
| `TZ` | str | | 时区（例如，`Europe/London`） |
| `localdisks` | str | | 要挂载的本地驱动器（例如，`sda1,sdb1,MYNAS`） |
| `networkdisks` | str | | 要挂载的 SMB 共享（例如，`//SERVER/SHARE`） |
| `cifsusername` | str | | 网络共享的 SMB 用户名 |
| `cifspassword` | str | | 网络共享的 SMB 密码 |
| `cifsdomain` | str | | 网络共享的 SMB 域 |

### 示例配置

```yaml
PGID: 0
PUID: 0
TZ: "Europe/London"
localdisks: "sda1,sdb1"
networkdisks: "//192.168.1.100/downloads"
cifsusername: "mediauser"
cifspassword: "password123"
cifsdomain: "workgroup"
```

### 挂载驱动器

这个 add-on 支持挂载本地驱动器和远程 SMB 共享：

- **本地驱动器**：参见 [在 Addons 中挂载本地驱动器](https://github.com/alexbelgium/hassio-addons/wiki/Mounting-Local-Drives-in-Addons)
- **远程共享**：参见 [在 Addons 中挂载远程共享](https://github.com/alexbelgium/hassio-addons/wiki/Mounting-remote-shares-in-Addons)

## 安装

这个 add-on 的安装非常简单，与安装任何其他 Hass.io add-on 没有区别。

1. [将我的 Hass.io add-ons 仓库][repository] 添加到您的 Hass.io 实例。
1. 安装这个 add-on。
1. 点击 `Save` 按钮保存您的配置。
1. 启动 add-on。
1. 检查 add-on 的日志以查看一切是否正常。
1. 仔细配置 add-on 以满足您的需求，请参考官方文档进行配置。

[repository]: https://github.com/alexbelgium/hassio-addons
**⚠️ This resource is intended to help Chinese Home Assistant users more easily install excellent add-ons. If you are not a Chinese user, please read repository readme first**



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
