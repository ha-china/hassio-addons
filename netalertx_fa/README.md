# Home Assistant 附加组件：NetAlertX 全功能版

我利用业余时间维护此及其他 Home Assistant 附加组件：跟踪上游变更、HA 变更，以及在真实硬件上进行测试会耗费大量时间（以及一些金钱）。我大约使用我拥有的 10-15 个>110 个附加组件中的几个，因此我通常会安装测试机器（并购买一些测试服务，如 vpn），这些机器我自己不使用，以便调试和改进附加组件。

如果这个附加组件能为您节省时间或使您的设置更容易，我将不胜感激您的支持！

[![Buy me a coffee][donation-badge]](https://www.buymeacoffee.com/alexbelgium)
[![Donate via PayPal][paypal-badge]](https://www.paypal.com/donate/?hosted_button_id=DZFULJZTP3UQA)

## 附加组件信息

![版本](https://img.shields.io/badge/dynamic/yaml?label=版本&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fnetalertx_fa%2Fconfig.yaml)
![Ingress](https://img.shields.io/badge/dynamic/yaml?label=Ingress&query=%24.ingress&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fnetalertx_fa%2Fconfig.yaml)
![Arch](https://img.shields.io/badge/dynamic/yaml?color=success&label=Arch&query=%24.arch&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fnetalertx_fa%2Fconfig.yaml)

[![Codacy Badge](https://app.codacy.com/project/badge/Grade/9c6cf10bdbba45ecb202d7f579b5be0e)](https://www.codacy.com/gh/alexbelgium/hassio-addons/dashboard?utm_source=github.com&utm_medium=referral&utm_content=alexbelgium/hassio-addons&utm_campaign=Badge_Grade)
[![GitHub Super-Linter](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/weekly-supelinter.yaml?label=Lint%20代码%20库)](https://github.com/alexbelgium/hassio-addons/actions/workflows/weekly-supelinter.yaml)
[![Builder](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/onpush_builder.yaml?label=Builder)](https://github.com/alexbelgium/hassio-addons/actions/workflows/onpush_builder.yaml)

[donation-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee-%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white
[paypal-badge]: https://img.shields.io/badge/Donate%20via%20PayPal-0070BA?logo=paypal&style=flat&logoColor=white

_谢谢所有为我仓库星标（star）的人！要星标它，请点击下方的图片，然后它就会显示在右上角。谢谢！_

[![Stargazers repo roster for @alexbelgium/hassio-addons](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/.github/stars2.svg)](https://github.com/alexbelgium/hassio-addons/stargazers)

![downloads 演变](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/netalertx_fa/stats.png)

## 关于

[NetAlertX](https://github.com/jokob-sk/NetAlertX) 是一个 WIFI / LAN 扫描器，用于入侵检测和 presence（存在）检测，可帮助您监控网络以查找新设备和潜在的安全威胁。

**这是全功能版**，与标准 NetAlertX 附加组件相比，它提供额外的权限和网络访问能力。

主要功能：
- 网络设备发现和监控
- 已知设备的存在检测
- 未知设备的入侵检测
- 基于 Web 的仪表板用于网络可视化
- 与 Home Assistant 的 MQTT 集成
- 使用增强权限的网络扫描

## 配置

Web 界面可以在 `<your-ip>:20211` 或通过侧边栏使用 Ingress 访问。

### 选项

| 选项 | 类型 | 默认值 | 描述 |
|------|------|--------|------|
| `TZ` | str | `Europe/Berlin` | 时区（例如，`Europe/London`） |
| `APP_CONF_OVERRIDE` | str | | 额外的应用配置覆盖 |

### 配置示例

```yaml
TZ: "Europe/London"
APP_CONF_OVERRIDE: "SCAN_SUBNETS=['192.168.1.0/24']"
```

### MQTT 集成

此附加组件支持 MQTT 集成，如果可用，将自动连接到您的 Home Assistant MQTT 代理。NetAlertX 可以将设备存在信息发布到 MQTT 主题，以便与 Home Assistant 自动化集成。

### 自定义脚本和环境变量

此附加组件通过 `app_config` 映射支持自定义脚本和环境变量：

- **自定义脚本**：请参阅 [在附加组件中运行自定义脚本](https://github.com/alexbelgium/hassio-addons/wiki/Running-custom-scripts-in-Addons)
- **env_vars 选项**：使用附加组件 `env_vars` 选项传递额外的环境变量（大写或小写名称均可）。有关详细信息，请查看 https://github.com/alexbelgium/hassio-addons/wiki/Add-Environment-variables-to-your-Addon-2。

## 安装

此附加组件的安装非常直截了当，与安装任何其他 Hass.io 附加组件没有区别。

1. 将我的附加组件仓库添加到您的 home assistant 实例（在 supervisor addons store 右上角，或者如果您已配置了我的 HA，请点击下方按钮）
   [![打开您的 Home Assistant 实例并显示预填充了特定仓库 URL 的附加组件存储库对话框。](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2Falexbelgium%2Fhassio-addons)
1. 安装此附加组件。
1. 点击 `保存 (Save)` 按钮以存储您的配置。
1. 启动附加组件。
1. 检查附加组件日志以查看一切是否正常。
1. 打开 Web UI 以配置您的网络扫描偏好设置。

## 全功能版 vs 标准版

此**全功能版**提供：
- `full_access: true` - 完整的系统访问权限
- `host_network: true` - 直接主机网络访问
- 增强的权限 (`SYS_ADMIN`, `NET_ADMIN`, `NET_RAW`)
- `udev: true` - 硬件设备访问

如果您需要增强的网络扫描能力，或者标准 NetAlertX 附加组件的访问权限对于您的设置不足，请使用此版本。

## 支持

在 GitHub 上创建问题，或前往 [Home Assistant 社区论坛](https://community.home-assistant.io/) 询问。

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
