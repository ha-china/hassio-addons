# Home assistant 插件：MyElectricalData

我在空闲时间维护此插件及其他 Home Assistant 插件：这些工作涉及跟进上游变更、HA 变更以及在实际硬件上进行测试，耗时且花费不菲。我使用了约 5-10 个超过 110 个插件中的插件，因此我会安装测试机（甚至购买我自己不使用的一些测试服务，如 VPN）来进行调试和改进插件。

如果您使用该插件节省了时间或使您的配置更加简便，我将不胜感激！

[![Buy me a coffee][donation-badge]](https://www.buymeacoffee.com/alexbelgium)
[![Donate via PayPal][paypal-badge]](https://www.paypal.com/donate/?hosted_button_id=DZFULJZTP3UQA)

## 插件信息

![版本](https://img.shields.io/badge/dynamic/yaml?label=Version&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fenedisgateway2mqtt%2Fconfig.yaml)
![Ingress](https://img.shields.io/badge/dynamic/yaml?label=Ingress&query=%24.ingress&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fenedisgateway2mqtt%2Fconfig.yaml)
![架构](https://img.shields.io/badge/dynamic/yaml?color=success&label=Arch&query=%24.arch&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fenedisgateway2mqtt%2Fconfig.yaml)

[![Codacy Badge](https://app.codacy.com/project/badge/Grade/9c6cf10bdbba45ecb202d7f579b5be0e)](https://www.codacy.com/gh/alexbelgium/hassio-addons/dashboard?utm_source=github.com&utm_medium=referral&utm_content=alexbelgium/hassio-addons&utm_campaign=Badge_Grade)
[![GitHub Super-Linter](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/weekly-supelinter.yaml?label=Lint%20code%20base)](https://github.com/alexbelgium/hassio-addons/actions/workflows/weekly-supelinter.yaml)
[![Builder](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/onpush_builder.yaml?label=Builder)](https://github.com/alexbelgium/hassio-addons/actions/workflows/onpush_builder.yaml)

[donation-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee-%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white
[paypal-badge]: https://img.shields.io/badge/Donate%20via%20PayPal-0070BA?logo=paypal&style=flat&logoColor=white

_感谢所有给我仓库加星的人！若想加星，请点击下方图片，然后点击后它将显示在右上角。谢谢！_

[![Stargazers repo roster for @alexbelgium/hassio-addons](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/.github/stars2.svg)](https://github.com/alexbelgium/hassio-addons/stargazers)

![下载量增长趋势](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/enedisgateway2mqtt/stats.png)

## 关于本插件

MyElectricalData 允许自动访问您的 Enedis 数据。有关详细信息请访问其 GitHub 仓库：https://github.com/m4dm4rtig4n/myelectricaldata

## 配置

使用插件的 `env_vars` 选项传递额外的环境变量（名称可大写或小写）。详情请参阅 https://github.com/alexbelgium/hassio-addons/wiki/Add-Environment-variables-to-your-Addon-2。

可通过 <http://homeassistant:5000> 或 Ingress 访问 Web 界面。
初始配置需要启动该插件一次以初始化配置模板。

### 设置步骤

1. 启动插件以初始化配置文件
2. 在 config.yaml 文件中配置您的 Enedis 凭据
3. 设置 MQTT 连接详情
4. 访问 Web 界面以监控数据获取情况

### 选项

| 选项 | 类型 | 默认值 | 描述 |
|--------|------|---------|-------------|
| `CONFIG_LOCATION` | str | `/config/myelectricaldata/config.yaml` | 配置文件路径 |
| `TZ` | str | `Europe/Paris` | 时区（例如 `Europe/London`） |
| `mqtt_autodiscover` | bool | `true` | 启用 MQTT 自动发现 |
| `verbose` | bool | `true` | 启用详细日志 |

### 示例配置

```yaml
CONFIG_LOCATION: "/config/myelectricaldata/config.yaml"
TZ: "Europe/London"
mqtt_autodiscover: true
verbose: false
```

### 配置文件

主要配置通过 `/config/myelectricaldata/config.yaml` 完成。该文件包含：
- Enedis API 凭据
- MQTT 服务器设置
- 数据获取间隔
- 设备配置

完整配置选项请参阅：https://github.com/m4dm4rtig4n/myelectricaldata/wiki/03.-Configuration

## 安装

此插件的安装非常简便，与其他 Hass.io 插件的安装方式没有区别。

1. 将我的插件仓库添加到您的 Home Assistant 实例（在 Supervisor -> 插件商店右上角，或者如果您已配置了 HA，请点击下方按钮）
   [![在 Home Assistant 实例中显示添加插件仓库对话框，并预填充特定仓库 URL。](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2Falexbelgium%2Fhassio-addons)
1. 安装此插件。
1. 点击 `保存` 按钮以存储配置。
1. 启动插件。
1. 查看插件日志以确认一切正常。
1. 仔细按需配置插件，请参考官方文档。

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
