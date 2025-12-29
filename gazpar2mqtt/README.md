# Home assistant插件：gazpar2mqtt

我在空闲时间维护这个和其他的Home Assistant插件：跟进上游的变更、Home Assistant的变更，以及在真实硬件上进行测试都需要大量时间（并且需要一些金钱）。我大约使用我超过110个插件中的5-10个，因此我安装了一些我本人不使用的测试机器（并且购买了一些测试服务，例如VPN）来调试和改进这些插件。

如果这个插件能为您节省时间或使您的设置更简单，我将非常感谢您的支持！

[![给我买咖啡][donation-badge]](https://www.buymeacoffee.com/alexbelgium)
[![通过PayPal捐赠][paypal-badge]](https://www.paypal.com/donate/?hosted_button_id=DZFULJZTP3UQA)

## 插件信息

![版本](https://img.shields.io/badge/dynamic/yaml?label=版本&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fgazpar2mqtt%2Fconfig.yaml)
![入口](https://img.shields.io/badge/dynamic/yaml?label=入口&query=%24.ingress&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fgazpar2mqtt%2Fconfig.yaml)
![架构](https://img.shields.io/badge/dynamic/yaml?color=success&label=架构&query=%24.arch&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fgazpar2mqtt%2Fconfig.yaml)

[![Codacy徽章](https://app.codacy.com/project/badge/Grade/9c6cf10bdbba45ecb202d7f579b5be0e)](https://www.codacy.com/gh/alexbelgium/hassio-addons/dashboard?utm_source=github.com&utm_medium=referral&utm_content=alexbelgium/hassio-addons&utm_campaign=Badge_Grade)
[![GitHub Super-Linter](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/weekly-supelinter.yaml?label=Lint%20code%20base)](https://github.com/alexbelgium/hassio-addons/actions/workflows/weekly-supelinter.yaml)
[![构建器](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/onpush_builder.yaml?label=构建器)](https://github.com/alexbelgium/hassio-addons/actions/workflows/onpush_builder.yaml)

[donation-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee-%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white
[paypal-badge]: https://img.shields.io/badge/Donate%20via%20PayPal-0070BA?logo=paypal&style=flat&logoColor=white

_感谢所有给我仓库星标的人！要给星标，请点击下面的图片，然后它将出现在右上角。谢谢！_

[![Stargazers repo roster for @alexbelgium/hassio-addons](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/.github/stars2.svg)](https://github.com/alexbelgium/hassio-addons/stargazers)

![下载趋势](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/gazpar2mqtt/stats.png)

## 关于

一个Python脚本，用于获取GRDF数据并将数据发布到MQTT代理。
有关所有信息的github：https://github.com/ssenart/gazpar2mqtt

## 配置

使用插件的`env_vars`选项来传递额外的环境变量（大小写名称）。详细信息请见：https://github.com/alexbelgium/hassio-addons/wiki/Add-Environment-variables-to-your-Addon-2。

这个插件从GRDF（法国燃气公司）获取燃气消耗数据，并将其发布到MQTT以实现Home Assistant的集成。

### 安装步骤

1. 在 https://monespace.grdf.fr/ 创建一个GRDF账户
2. 在config.yaml文件中配置您的GRDF凭证
3. 设置MQTT连接详情
4. 在插件日志中监控数据检索

### 选项

| 选项 | 类型 | 默认 | 描述 |
|------|------|------|------|
| `CONFIG_LOCATION` | 字符串 | `/config/gazpar2mqtt/config.yaml` | 配置文件路径 |
| `TZ` | 字符串 | `Europe/Paris` | 时区（例如，`Europe/London`） |
| `mqtt_autodiscover` | 布尔值 | `true` | 启用MQTT自动发现 |
| `verbose` | 布尔值 | `true` | 启用详细日志 |

### 示例配置

```yaml
CONFIG_LOCATION: "/config/gazpar2mqtt/config.yaml"
TZ: "Europe/Paris"
mqtt_autodiscover: true
verbose: false
```

### 配置文件

主要的配置通过`/config/gazpar2mqtt/config.yaml`完成。该文件包含：
- GRDF账户凭证
- MQTT代理设置
- 数据检索间隔
- 设备配置

### config.yaml中的必要配置

```yaml
# GRDF凭证
grdf:
  username: "your-grdf-username"
  password: "your-grdf-password"

# MQTT设置
mqtt:
  host: "homeassistant.local"
  port: 1883
  username: "mqtt-user"
  password: "mqtt-password"
  topic_prefix: "gazpar"

# 可选：更新频率
update_frequency: 3600  # 秒
```

有关完整的配置选项，请见：https://github.com/ssenart/gazpar2mqtt

## 安装

这个插件的安装非常简单，与安装任何其他Hass.io插件没有区别。

1. [将我的Hass.io插件仓库][repository]添加到您的Hass.io实例。
2. 安装这个插件。
3. 点击`保存`按钮以保存您的配置。
4. 启动插件。
5. 检查插件的日志以查看是否一切顺利。
6. 仔细配置插件以符合您的偏好，请参考官方文档进行配置。

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
