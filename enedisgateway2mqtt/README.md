# Home Assistant 插件：MyElectricalData

[![捐赠][donation-badge]](https://www.buymeacoffee.com/alexbelgium)
[![捐赠][paypal-badge]](https://www.paypal.com/donate/?hosted_button_id=DZFULJZTP3UQA)

![版本](https://img.shields.io/badge/dynamic/json?label=Version&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fenedisgateway2mqtt%2Fconfig.json)
![Ingress](https://img.shields.io/badge/dynamic/json?label=Ingress&query=%24.ingress&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fenedisgateway2mqtt%2Fconfig.json)
![架构](https://img.shields.io/badge/dynamic/json?color=success&label=Arch&query=%24.arch&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fenedisgateway2mqtt%2Fconfig.json)

[![Codacy Badge](https://app.codacy.com/project/badge/Grade/9c6cf10bdbba45ecb202d7f579b5be0e)](https://www.codacy.com/gh/alexbelgium/hassio-addons/dashboard?utm_source=github.com&utm_medium=referral&utm_content=alexbelgium/hassio-addons&utm_campaign=Badge_Grade)
[![GitHub Super-Linter](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/weekly-supelinter.yaml?label=Lint%20code%20base)](https://github.com/alexbelgium/hassio-addons/actions/workflows/weekly-supelinter.yaml)
[![构建器](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/onpush_builder.yaml?label=Builder)](https://github.com/alexbelgium/hassio-addons/actions/workflows/onpush_builder.yaml)

[donation-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee%20(no%20paypal)-%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white
[paypal-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee%20with%20Paypal-0070BA?logo=paypal&style=flat&logoColor=white

_感谢所有关注我仓库的人！要关注它，请点击下面的图片，然后会在右上角显示。谢谢！_

[![关注者仓库名单 @alexbelgium/hassio-addons](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/.github/stars2.svg)](https://github.com/alexbelgium/hassio-addons/stargazers)

![下载发展](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/enedisgateway2mqtt/stats.png)

## 关于

MyElectricalData 允许自动访问您的 Enedis 数据。有关所有信息，请查看其 GitHub：https://github.com/m4dm4rtig4n/myelectricaldata

## 配置

安装后，第一次启动插件以初始化模板。

选项可以通过两种方式配置：

- 插件选项

```yaml
CONFIG_LOCATION: /config/myelectricaldata/config.yaml # 设置 config.yaml 的位置（见下文）
mqtt_autodiscover: true # 在日志中显示 mqtt 本地服务器的详细信息（如果可用）。然后可以添加到 config.yaml 文件中。
TZ: Europe/Paris # 设置特定时区
```

- Config.yaml
  所有配置均使用在 /config/myelectricaldata/config.yaml 中找到的 config.yaml 文件。

选项的完整列表可以在这里查看：https://github.com/m4dm4rtig4n/myelectricaldata/wiki/03.-Configuration

## 安装

这个插件的安装非常简单，与安装其他 Hass.io 插件没有什么不同。

1. [将我的 Hass.io 插件仓库][repository] 添加到您的 Hass.io 实例中。
1. 安装此插件。
1. 点击 `保存` 按钮以存储您的配置。
1. 启动插件。
1. 检查插件的日志以查看是否一切正常。
1. 仔细配置插件以满足您的偏好，详细信息请参阅官方文档。

[repository]: https://github.com/alexbelgium/hassio-addons