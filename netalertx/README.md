# Home Assistant 附加组件：NetAlertX

我利用闲暇时间维护此及其他 Home Assistant 附加组件：跟踪上游变更、适配 Home Assistant 平台更新以及在真实硬件上进行测试需要耗费大量时间（以及一些费用）。我常用的附加组件大约有 5-10 个（总共有超过 110 个），因此我经常安装测试机器（并购买一些测试服务，如 VPN）来进行故障排查和改进这些附加组件。

如果您觉得这个附加组件节省了您的时间或简化了您的设置，我将不胜感激！

[![Buy me a coffee][donation-badge]](https://www.buymeacoffee.com/alexbelgium)
[![Donate via PayPal][paypal-badge]](https://www.paypal.com/donate/?hosted_button_id=DZFULJZTP3UQA)

## 附加组件信息

![Version](https://img.shields.io/badge/dynamic/yaml?label=Version&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fnetalertx%2Fconfig.yaml)
![Ingress](https://img.shields.io/badge/dynamic/yaml?label=Ingress&query=%24.ingress&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fnetalertx%2Fconfig.yaml)
![Arch](https://img.shields.io/badge/dynamic/yaml?color=success&label=Arch&query=%24.arch&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fnetalertx%2Fconfig.yaml)
![mqtt](https://img.shields.io/badge/Service-MQTT-green.svg?logo=chromecast&logoColor=white)

[![Codacy Badge](https://app.codacy.com/project/badge/Grade/9c6cf10bdbba45ecb202d7f579b5be0e)](https://www.codacy.com/gh/alexbelgium/hassio-addons/dashboard?utm_source=github.com&utm_medium=referral&utm_content=alexbelgium/hassio-addons&utm_campaign=Badge_Grade)
[![GitHub Super-Linter](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/weekly-supelinter.yaml?label=Lint%20code%20base)](https://github.com/alexbelgium/hassio-addons/actions/workflows/weekly-supelinter.yaml)
[![Builder](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/onpush_builder.yaml?label=Builder)](https://github.com/alexbelgium/hassio-addons/actions/workflows/onpush_builder.yaml)

[donation-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee-%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white
[paypal-badge]: https://img.shields.io/badge/Donate%20via%20PayPal-0070BA?logo=paypal&style=flat&logoColor=white

_感谢所有给仓库加星的朋友们！要加星，请点击下面的图片，它将会显示在右上角。感谢！_

[![Stargazers repo roster for @alexbelgium/hassio-addons](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/.github/stars2.svg)](https://github.com/alexbelgium/hassio-addons/stargazers)

![downloads evolution](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/netalertx/stats.png)

## 简介

网络存在检测和入侵探测器。用于扫描连接到您网络的设备，并在发现新设备和未知设备时向您发出警报。
该附加组件基于 jokob-sk 的 [docker 镜像](https://github.com/jokob-sk/NetAlertX/tree/main/dockerfiles)。

## 安装

此附加组件的安装非常简单，与其他 Hass.io 附加组件的安装没有区别。

1. 将我的附加组件仓库添加到您的 Home Assistant 实例中（在 supervisor 附加组件存储右上角，或者如果您已配置了 Home Assistant，请点击下方的按钮）。
   [![Open your Home Assistant instance and show the add add-on repository dialog with a specific repository URL pre-filled.](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2Falexbelgium%2Fhassio-addons)
1. 安装此附加组件。
1. 点击 `Save` 按钮以保存您的配置。
1. 启动附加组件。
1. 检查附加组件的日志以确认一切是否顺利。
1. 谨慎地根据您的偏好配置附加组件，详见官方文档。

## 配置

1. 如果未找到文件，应用程序会在首次运行时生成默认的 `app.conf` 和 `app.db` 文件。
1. 首选方式是通过 UI 中的“设置”部分进行管理，如果无法访问 UI，您可以直接修改 `/config/config/` 文件夹中的 `app.conf`。
1. 您需要指定要扫描哪些网络。这通过输入主机可访问的子网来完成。如果您使用默认的 `ARPSCAN` 插件，必须在 `SCAN_SUBNETS` 设置中至少指定一个有效的子网和接口。请参阅 [关于如何设置多个子网、VLAN 以及限制条件的文档](https://github.com/jokob-sk/NetAlertX/blob/main/docs/SUBNETS.md)，以及故障排查和更多高级场景的文档。
1. 阅读如何通过 MQTT 插件将设备添加到您的 [Home Assistant 实例](https://github.com/jokob-sk/NetAlertX/blob/main/docs/HOME_ASSISTANT.md) 中。
1. 按照 [备份文档](https://github.com/jokob-sk/NetAlertX/blob/main/docs/BACKUPS.md) 备份所有数据。

Webui 可以访问 <http://homeassistant.local:20211> 或使用 Home Assistant 的 Ingress。

<img width="500" alt="image" src="https://github.com/user-attachments/assets/fd74af43-091a-4f38-9879-037ca64cfab9" />

```yaml
PGID: user
GPID: user
```

### 自定义脚本和环境变量

此附加组件通过 `app_config` 映射支持自定义脚本和环境变量：

- **自定义脚本**：见 [在附加组件中运行自定义脚本](https://github.com/alexbelgium/hassio-addons/wiki/Running-custom-scripts-in-Addons)
- **env_vars 选项**：使用附加组件的 `env_vars` 选项来传递额外的环境变量（名称大小写均可）。详见 https://github.com/alexbelgium/hassio-addons/wiki/Add-Environment-variables-to-your-Addon-2 了解详细信息。

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
