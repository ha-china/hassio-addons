# Hass.io Add-ons: Wger

[![Donate][donation-badge]](https://www.buymeacoffee.com/alexbelgium)
[![Donate][paypal-badge]](https://www.paypal.com/donate/?hosted_button_id=DZFULJZTP3UQA)

![Version](https://img.shields.io/badge/dynamic/yaml?label=Version&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fwger%2Fconfig.yaml)
![Ingress](https://img.shields.io/badge/dynamic/yaml?label=Ingress&query=%24.ingress&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fwger%2Fconfig.yaml)
![Arch](https://img.shields.io/badge/dynamic/yaml?color=success&label=Arch&query=%24.arch&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fwger%2Fconfig.yaml)

[![Codacy Badge](https://app.codacy.com/project/badge/Grade/9c6cf10bdbba45ecb202d7f579b5be0e)](https://www.codacy.com/gh/alexbelgium/hassio-addons/dashboard?utm_source=github.com&utm_medium=referral&utm_content=alexbelgium/hassio-addons&utm_campaign=Badge_Grade)
[![GitHub Super-Linter](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/weekly-supelinter.yaml?label=Lint%20code%20base)](https://github.com/alexbelgium/hassio-addons/actions/workflows/weekly-supelinter.yaml)
[![Builder](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/onpush_builder.yaml?label=Builder)](https://github.com/alexbelgium/hassio-addons/actions/workflows/onpush_builder.yaml)

[donation-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee%20(no%20paypal)-%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white
[paypal-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee%20with%20Paypal-0070BA?logo=paypal&style=flat&logoColor=white

_Thanks to everyone having starred my repo! To star it click on the image below, then it will be on top right. Thanks!_

[![Stargazers repo roster for @alexbelgium/hassio-addons](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/.github/stars2.svg)](https://github.com/alexbelgium/hassio-addons/stargazers)

![downloads evolution](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/wger/stats.png)

## About

[wger](https://github.com/wger-project/wger) Workout Manager 是一个免费、开源的网页应用程序，帮助您管理个人锻炼、体重和饮食计划，也可以用作简单的健身房管理工具。它还提供了一个 REST API，以便轻松与其他项目和工具集成。

## Configuration

- 启动插件。等待一段时间并检查日志中的任何错误。初始启动可能需要长达 15 分钟！
- 打开 yourdomain.com:8000（其中 ":8000" 是插件中配置的端口）。
- 默认
  - 用户名: `admin`
  - 密码: `adminadmin`

选项可以通过两种方式配置：

- 插件选项

```yaml
"CONFIG_LOCATION": location of the config.yaml # 设置 config.yaml 的位置（见下文）
```

- Config.yaml（高级用法）

附加变量可以作为 ENV 变量通过在 config.yaml 中添加它们来设置，根据此指南在您的插件选项中定义的位置：https://github.com/alexbelgium/hassio-addons/wiki/Addons-feature:-add-env-variables

完整的 ENV 变量列表可以在这里查看：不可用

## Installation

此插件的安装非常简单，与安装任何其他 Hass.io 插件没有区别。

1. [将我的 Hass.io 插件存储库][repository]添加到您的 Hass.io 实例。
1. 安装此插件。
1. 点击 `保存` 按钮以保存您的配置。
1. 启动插件。
1. 检查插件的日志，看看是否一切正常。
1. 仔细配置插件以满足您的偏好，请参阅官方文档进行配置。

## Support

如果您在安装过程中遇到问题，请确保查看 GitHub。

[repository]: https://github.com/alexbelgium/hassio-addons