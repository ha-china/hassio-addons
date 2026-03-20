# Home Assistant 扩展：NetAlertX 全功能访问

我在业余时间维护这个和其他 Home Assistant 扩展：跟踪上游变更、Home Assistant 变更以及在真实硬件上进行测试需要花费大量时间（以及一些金钱）。我经常使用我超过 110 个扩展中的 5-10 个，因此我安装了测试机器（并购买了某些测试服务，如 VPN），这些服务我自己并不使用，以便进行故障排除和改进扩展。

如果这个扩展节省了您的时间或使您的设置更容易，我将非常感谢您的支持！

[![请给我买杯咖啡][donation-badge]](https://www.buymeacoffee.com/alexbelgium)
[![通过 PayPal 捐赠][paypal-badge]](https://www.paypal.com/donate/?hosted_button_id=DZFULJZTP3UQA)

## 扩展信息

![版本](https://img.shields.io/badge/dynamic/yaml?label=Version&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fnetalertx_fa%2Fconfig.yaml)
![入口](https://img.shields.io/badge/dynamic/yaml?label=Ingress&query=%24.ingress&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fnetalertx_fa%2Fconfig.yaml)
![架构](https://img.shields.io/badge/dynamic/yaml?color=success&label=Arch&query=%24.arch&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fnetalertx_fa%2Fconfig.yaml)

[![Codacy 徽章](https://app.codacy.com/project/badge/Grade/9c6cf10bdbba45ecb202d7f579b5be0e)](https://www.codacy.com/gh/alexbelgium/hassio-addons/dashboard?utm_source=github.com&utm_medium=referral&utm_content=alexbelgium/hassio-addons&utm_campaign=Badge_Grade)
[![GitHub Super-Linter](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/weekly-supelinter.yaml?label=Lint%20code%20base)](https://github.com/alexbelgium/hassio-addons/actions/workflows/weekly-supelinter.yaml)
[![Builder](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/onpush_builder.yaml?label=Builder)](https://github.com/alexbelgium/hassio-addons/actions/workflows/onpush_builder.yaml)

[donation-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee-%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white
[paypal-badge]: https://img.shields.io/badge/Donate%20via%20PayPal-0070BA?logo=paypal&style=flat&logoColor=white

_感谢所有为我仓库点赞的人！要点赞，请点击下面的图片，然后它就会显示在右上角。谢谢！_

[![Stargazers 仓库名单 for @alexbelgium/hassio-addons](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/.github/stars2.svg)](https://github.com/alexbelgium/hassio-addons/stargazers)

![下载演变](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/netalertx_fa/stats.png)

## 关于

[NetAlertX](https://github.com/jokob-sk/NetAlertX) 是一个 WIFI / LAN 扫描仪、入侵检测器和存在探测器，可以帮助您监视您的网络以查找新设备和潜在的安全威胁。

**这是全功能访问版本**，与标准 NetAlertX 扩展相比，提供了额外的权限和网络访问功能。

主要功能：
- 网络设备发现和监控
- 已知设备的存在检测
- 未知设备的入侵检测
- 基于网页的网络可视化仪表板
- 与 Home Assistant 的 MQTT 集成
- 带有增强权限的网络扫描

## 配置

Webui 可以在 `<your-ip>:20211` 上找到，或者通过入口侧边栏使用。

### 选项

| 选项 | 类型 | 默认值 | 描述 |
|--------|------|---------|-------------|
| `TZ` | str | `Europe/Berlin` | 时区（例如，`Europe/London`） |
| `APP_CONF_OVERRIDE` | str | | 额外的应用程序配置覆盖 |

### 示例配置

```yaml
TZ: "Europe/London"
APP_CONF_OVERRIDE: "SCAN_SUBNETS=['192.168.1.0/24']"
```

### MQTT 集成

此扩展支持 MQTT 集成，如果可用，将自动连接到您的 Home Assistant MQTT 代理。NetAlertX 可以将设备存在信息发布到 MQTT 主题，以便与 Home Assistant 自动化集成。

### 自定义脚本和环境变量

此扩展支持自定义脚本和环境变量通过 `addon_config` 映射：

- **自定义脚本**：请参阅 [在扩展中运行自定义脚本](https://github.com/alexbelgium/hassio-addons/wiki/Running-custom-scripts-in-Addons)
- **env_vars 选项**：使用扩展 `env_vars` 选项传递额外的环境变量（大写或小写名称）。请参阅 https://github.com/alexbelgium/hassio-addons/wiki/Add-Environment-variables-to-your-Addon-2 以获取详细信息。

## 安装

此扩展的安装非常简单，与安装任何其他 Hass.io 扩展没有区别。

1. 将我的扩展存储库添加到您的 Home Assistant 实例中（在监督器的扩展存储库右上角，或者如果您已配置我的 HA，请点击下面的按钮）
   [![打开您的 Home Assistant 实例并显示带有特定存储库 URL 预填充的添加扩展存储库对话框](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2Falexbelgium%2Fhassio-addons)
1. 安装此扩展。
1. 点击“保存”按钮以存储您的配置。
1. 启动扩展。
1. 检查扩展的日志，以查看一切是否顺利。
1. 打开 WebUI 以配置您的网络扫描首选项。

## 全功能访问版 vs 标准版

此 **全功能访问版** 提供：
- `full_access: true` - 完整的系统访问
- `host_network: true` - 直接的主机网络访问
- 增强的权限（`SYS_ADMIN`、`NET_ADMIN`、`NET_RAW`）
- `udev: true` - 硬件设备访问

如果您需要增强的网络扫描功能或标准 NetAlertX 扩展没有为您的设置提供足够网络访问，请使用此版本。

## 支持

在 github 上创建问题，或在 [home assistant 社区论坛](https://community.home-assistant.io/) 上提问

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
