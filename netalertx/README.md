# Home assistant add-on: NetAlertX

我利用业余时间维护这个和其他 Home Assistant add-ons：跟上上游变化、HA 变化以及在真实硬件上测试需要大量时间（并且需要一些钱）。我大约使用我超过 110 个 add-ons 中的 5-10 个，因此我安装了一些我自己的测试机器（并且购买了一些测试服务，例如 VPN），以便我能够解决和改进这些 add-ons。

如果这个 add-on 节省了你的时间或简化了你的设置，我将非常感谢你的支持！

[![Buy me a coffee][donation-badge]](https://www.buymeacoffee.com/alexbelgium)
[![Donate via PayPal][paypal-badge]](https://www.paypal.com/donate/?hosted_button_id=DZFULJZTP3UQA)

## Addon informations

![Version](https://img.shields.io/badge/dynamic/yaml?label=Version&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fnetalertx%2Fconfig.yaml)
![Ingress](https://img.shields.io/badge/dynamic/yaml?label=Ingress&query=%24.ingress&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fnetalertx%2Fconfig.yaml)
![Arch](https://img.shields.io/badge/dynamic/yaml?color=success&label=Arch&query=%24.arch&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fnetalertx%2Fconfig.yaml)
![mqtt](https://img.shields.io/badge/Service-MQTT-green.svg?logo=chromecast&logoColor=white)

[![Codacy Badge](https://app.codacy.com/project/badge/Grade/9c6cf10bdbba45ecb202d7f579b5be0e)](https://www.codacy.com/gh/alexbelgium/hassio-addons/dashboard?utm_source=github.com&utm_medium=referral&utm_content=alexbelgium/hassio-addons&utm_campaign=Badge_Grade)
[![GitHub Super-Linter](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/weekly-supelinter.yaml?label=Lint%20code%20base)](https://github.com/alexbelgium/hassio-addons/actions/workflows/weekly-supelinter.yaml)
[![Builder](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/onpush_builder.yaml?label=Builder)](https://github.com/alexbelgium/hassio-addons/actions/workflows/onpush_builder.yaml)

[donation-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee-%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white
[paypal-badge]: https://img.shields.io/badge/Donate%20via%20PayPal-0070BA?logo=paypal&style=flat&logoColor=white

_感谢所有给我的仓库点赞的人！要点赞，请点击下面的图片，然后它将在右上角。谢谢！_

[![Stargazers repo roster for @alexbelgium/hassio-addons](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/.github/stars2.svg)](https://github.com/alexbelgium/hassio-addons/stargazers)

![downloads evolution](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/netalertx/stats.png)

## About

网络存在和入侵检测器。扫描连接到您网络的设备，并在发现新的未知设备时向您发出警报。
这个 add-on 基于 jokob-sk 的 [docker image](https://github.com/jokob-sk/NetAlertX/tree/main/dockerfiles)。

## Installation

这个 add-on 的安装非常简单，与安装任何其他 Hass.io add-on 没有区别。

1. 将我的 Hass.io add-ons 仓库 [repository] 添加到您的 Hass.io 实例中。
1. 安装这个 add-on。
1. 点击 `Save` 按钮以保存您的配置。
1. 启动 add-on。
1. 检查 add-on 的日志，看看是否一切正常。
1. 仔细配置 add-on 以满足您的偏好，请参阅官方文档以了解详细信息。

## Configuration

1. 如果不可用，应用程序在首次运行时生成默认的 `app.conf` 和 `app.db` 文件。
1. 推荐的方式是通过 UI 中的设置部分管理配置，如果 UI 不可访问，您可以直接修改 `/config/config/` 文件夹中的 `app.conf`。
1. 您必须指定要扫描哪些网络。这是通过输入主机可以访问的子网来完成的。如果您使用默认的 `ARPSCAN` 插件，您必须在 `SCAN_SUBNETS` 设置中指定至少一个有效的子网和接口。请参阅 [如何设置多个 SUBNETS、VLANs 以及限制的文档](https://github.com/jokob-sk/NetAlertX/blob/main/docs/SUBNETS.md) 以及故障排除和更高级的情景。
1. 阅读 [通过 MQTT 插件将设备添加到 Home Assistant 实例的方法](https://github.com/jokob-sk/NetAlertX/blob/main/docs/HOME_ASSISTANT.md)
1. 按照 [备份文档](https://github.com/jokob-sk/NetAlertX/blob/main/docs/BACKUPS.md) 备份所有内容。

Webui 可以在 <http://homeassistant:20211> 或使用 HA ingress 找到

<img width="500" alt="image" src="https://github.com/user-attachments/assets/fd74af43-091a-4f38-9879-037ca64cfab9" />

```yaml
PGID: user
GPID: user
```

### Custom Scripts and Environment Variables

这个 add-on 通过 `addon_config` 映射支持自定义脚本和环境变量：

- **Custom scripts**: 查看 [在 Addons 中运行自定义脚本](https://github.com/alexbelgium/hassio-addons/wiki/Running-custom-scripts-in-Addons)
- **env_vars option**: 使用 add-on 的 `env_vars` 选项来传递额外的环境变量（大小写名称）。请参阅 https://github.com/alexbelgium/hassio-addons/wiki/Add-Environment-variables-to-your-Addon-2 了解详细信息。

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
