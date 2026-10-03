# Home Assistant 插件：gazpar2mqtt

我在业余时间维护这个以及其他 Home Assistant 插件：跟踪上游更改、Home Assistant 更改以及在真实硬件上进行测试都需要花费大量时间（以及一些金钱）。我经常使用我超过 110 个插件中的 5-10 个，所以我安装了测试机器（并购买了如 VPN 等一些我自身不使用的测试服务），以便进行故障排除和改进插件。

如果这个插件为您节省了时间或使您的设置更加简单，我将非常感激您的支持！

[![给我买杯咖啡][donation-badge]](https://www.buymeacoffee.com/alexbelgium)
[![通过 PayPal 捐赠][paypal-badge]](https://www.paypal.com/donate/?hosted_button_id=DZFULJZTP3UQA)

## 插件信息

![版本](https://img.shields.io/badge/dynamic/yaml?label=Version&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fgazpar2mqtt%2Fconfig.yaml)
![入口](https://img.shields.io/badge/dynamic/yaml?label=Ingress&query=%24.ingress&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fgazpar2mqtt%2Fconfig.yaml)
![架构](https://img.shields.io/badge/dynamic/yaml?color=success&label=Arch&query=%24.arch&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fgazpar2mqtt%2Fconfig.yaml)

[![Codacy 徽章](https://app.codacy.com/project/badge/Grade/9c6cf10bdbba45ecb202d7f579b5be0e)](https://www.codacy.com/gh/alexbelgium/hassio-addons/dashboard?utm_source=github.com&utm_medium=referral&utm_content=alexbelgium/hassio-addons&utm_campaign=Badge_Grade)
[![GitHub Super-Linter](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/weekly-supelinter.yaml?label=Lint%20code%20base)](https://github.com/alexbelgium/hassio-addons/actions/workflows/weekly-supelinter.yaml)
[![Builder](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/onpush_builder.yaml?label=Builder)](https://github.com/alexbelgium/hassio-addons/actions/workflows/onpush_builder.yaml)

[donation-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee-%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white
[paypal-badge]: https://img.shields.io/badge/Donate%20via%20PayPal-0070BA?logo=paypal&style=flat&logoColor=white

_感谢所有为我仓库加星的人！要加星，请点击下面的图片，然后它将出现在右上角。谢谢！_

[![Stargazers repo roster for @alexbelgium/hassio-addons](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/.github/stars2.svg)](https://github.com/alexbelgium/hassio-addons/stargazers)

![下载趋势](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/gazpar2mqtt/stats.png)

## 关于

Python 脚本，用于获取 GRDF 数据并将其发布到 mqtt 代理。
有关所有信息，请参阅其 github：https://github.com/ssenart/gazpar2mqtt

## 配置

使用插件的 `env_vars` 选项来传递额外的环境变量（大写或小写名称）。有关详细信息，请参阅 https://github.com/alexbelgium/hassio-addons/wiki/Add-Environment-variables-to-your-Addon-2。

此插件从 GRDF（法国天然气公用事业）获取天然气消耗数据，并将其发布到 MQTT 以进行 Home Assistant 集成。

### 设置步骤

1. 在 https://monespace.grdf.fr/ 创建 GRDF 账户。
2. 在 config.yaml 文件中配置您的 GRDF 凭据。
3. 设置 MQTT 连接详细信息。
4. 在插件日志中监控数据检索。

### 选项

| 选项 | 类型 | 默认值 | 描述 |
|------|------|---------|------|
| `CONFIG_LOCATION` | str | `/config/gazpar2mqtt/config.yaml` | 配置文件路径 |
| `TZ` | str | `Europe/Paris` | 时区（例如，`Europe/London`） |
| `mqtt_autodiscover` | bool | `true` | 启用 MQTT 自动发现 |
| `verbose` | bool | `true` | 启用详细日志记录 |

### 示例配置

```yaml
CONFIG_LOCATION: "/config/gazpar2mqtt/config.yaml"
TZ: "Europe/Paris"
mqtt_autodiscover: true
verbose: false
```

### 配置文件

主要配置通过 `/config/gazpar2mqtt/config.yaml` 完成。此文件包含：
- GRDF 账户凭据
- MQTT 代理设置
- 数据检索间隔
- 设备配置

### config.yaml 中必需的配置

```yaml
# GRDF 凭据
grdf:
  username: "your-grdf-username"
  password: "your-grdf-password"

# MQTT 设置
mqtt:
  host: "homeassistant.local"
  port: 1883
  username: "mqtt-user"
  password: "mqtt-password"
  topic_prefix: "gazpar"

# 可选：更新频率
update_frequency: 3600  # 秒
```

有关完整的配置选项，请参阅：https://github.com/ssenart/gazpar2mqtt

## 安装

此插件的安装相当简单，与安装任何其他 Hass.io 插件没有区别。

1. 将我的插件仓库添加到您的 Home Assistant 实例中（在 supervisor 插件存储的右上角，或点击下面的按钮如果您已配置我的 HA）
   [![打开您的 Home Assistant 实例并显示带有特定仓库 URL 预填充的添加插件仓库对话框](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2Falexbelgium%2Fhassio-addons)
1. 安装此插件。
2. 点击“保存”按钮以存储您的配置。
3. 启动插件。
4. 检查插件的日志以查看一切是否顺利。
5. 仔细配置插件以满足您的需求，有关详细信息，请参阅官方文档。
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
