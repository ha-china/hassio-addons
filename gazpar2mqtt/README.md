# Home Assistant 插件：gazpar2mqtt

我利用空闲时间维护此及其他 Home Assistant 插件：跟进上游变更、适配 Home Assistant 变更以及在真实硬件上进行测试需要花费大量时间（以及一些金钱）。我常用的插件大约有 5-10 个（超过总数 110 个），所以我定期安装测试机器（并购买一些测试服务，如 VPN）来自行解决我未使用的设备问题，从而排查和改进插件。

如果此插件能为您节省时间或简化您的设置，我将不胜感激您的支持！

[![Buy me a coffee][donation-badge]](https://www.buymeacoffee.com/alexbelgium)
[![Donate via PayPal][paypal-badge]](https://www.paypal.com/donate/?hosted_button_id=DZFULJZTP3UQA)

## 插件信息

![版本](https://img.shields.io/badge/dynamic/yaml?label=版本&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fgazpar2mqtt%2Fconfig.yaml)
![入口](https://img.shields.io/badge/dynamic/yaml?label=入口&query=%24.ingress&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fgazpar2mqtt%2Fconfig.yaml)
![架构](https://img.shields.io/badge/dynamic/yaml?color=success&label=架构&query=%24.arch&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fgazpar2mqtt%2Fconfig.yaml)

[![Codacy 徽章](https://app.codacy.com/project/badge/Grade/9c6cf10bdbba45ecb202d7f579b5be0e)](https://www.codacy.com/gh/alexbelgium/hassio-addons/dashboard?utm_source=github.com&utm_medium=referral&utm_content=alexbelgium/hassio-addons&utm_campaign=Badge_Grade)
[![GitHub Super-Linter](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/weekly-supelinter.yaml?label=代码检查)](https://github.com/alexbelgium/hassio-addons/actions/workflows/weekly-supelinter.yaml)
[![构建者](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/onpush_builder.yaml?label=构建)](https://github.com/alexbelgium/hassio-addons/actions/workflows/onpush_builder.yaml)

[donation-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee-%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white
[paypal-badge]: https://img.shields.io/badge/Donate%20via%20PayPal-0070BA?logo=paypal&style=flat&logoColor=white

_感谢所有为我的仓库点赞的人！要点赞，请点击下方的图片，这样它便会出现在右上角。谢谢！_

[![@alexbelgium/hassio-addons 的星标仓库名单](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/.github/stars2.svg)](https://github.com/alexbelgium/hassio-addons/stargazers)

![下载趋势](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/gazpar2mqtt/stats.png)

## 关于

这是一个用于获取 GRDF 数据并发布到 MQTT 代理的 Python 脚本。
有关所有详细信息，请查看其 GitHub 仓库：https://github.com/ssenart/gazpar2mqtt

## 配置

使用插件的 `env_vars` 选项传递额外的环境变量（大小写名称均可）。详情请参考 https://github.com/alexbelgium/hassio-addons/wiki/Add-Environment-variables-to-your-Addon-2。

此插件从 GRDF（法国天然气公司）获取天然气消耗数据，并将其发布到 Home Assistant 集成的 MQTT 服务。

### 安装步骤

1. 在 https://monespace.grdf.fr/ 创建 GRDF 账户
2. 在 `config.yaml` 文件中配置 GRDF 凭据
3. 设置 MQTT 连接详情
4. 在插件日志中监控数据获取情况

### 选项

| 选项 | 类型 | 默认值 | 描述 |
|------|------|--------|------|
| `CONFIG_LOCATION` | str | `/config/gazpar2mqtt/config.yaml` | 配置文件路径 |
| `TZ` | str | `Europe/Paris` | 时区（例如，`Europe/London`） |
| `mqtt_autodiscover` | bool | `true` | 启用 MQTT 自动发现 |
| `verbose` | bool | `true` | 启用详细日志 |

### 配置示例

```yaml
CONFIG_LOCATION: "/config/gazpar2mqtt/config.yaml"
TZ: "Europe/Paris"
mqtt_autodiscover: true
verbose: false
```

### 配置文件

主要配置通过 `/config/gazpar2mqtt/config.yaml` 进行。该文件包含以下内容：
- GRDF 账户凭据
- MQTT 代理设置
- 数据获取间隔
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

此插件的安装非常简单，与其他任何 Hass.io 插件的安装方式并无不同。

1. 将我的插件仓库添加到您的 Home Assistant 实例中（在 supervisor 插件存储中点击右上角，或如果您已配置我的 HA，则点击下方按钮）
   [![打开您的 Home Assistant 实例并显示预填充特定仓库 URL 的添加插件仓库对话框。](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2Falexbelgium%2Fhassio-addons)
1. 安装此插件。
2. 点击 `保存` 按钮以保存您的配置。
3. 启动插件。
4. 检查插件日志以查看一切是否正常运行。
5. 仔细按照官方文档将插件配置为您喜欢的设置。

[仓库]: https://github.com/alexbelgium/hassio-addons

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
