# Home Assistant 插件：Joal

[![Donate][donation-badge]](https://www.buymeacoffee.com/alexbelgium)
[![Donate][paypal-badge]](https://www.paypal.com/donate/?hosted_button_id=DZFULJZTP3UQA)

![版本](https://img.shields.io/badge/dynamic/json?label=Version&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fjoal%2Fconfig.json)
![Ingress](https://img.shields.io/badge/dynamic/json?label=Ingress&query=%24.ingress&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fjoal%2Fconfig.json)
![架构](https://img.shields.io/badge/dynamic/json?color=success&label=Arch&query=%24.arch&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fjoal%2Fconfig.json)

[![Codacy Badge](https://app.codacy.com/project/badge/Grade/9c6cf10bdbba45ecb202d7f579b5be0e)](https://www.codacy.com/gh/alexbelgium/hassio-addons/dashboard?utm_source=github.com&utm_medium=referral&utm_content=alexbelgium/hassio-addons&utm_campaign=Badge_Grade)
[![GitHub Super-Linter](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/weekly-supelinter.yaml?label=Lint%20code%20base)](https://github.com/alexbelgium/hassio-addons/actions/workflows/weekly-supelinter.yaml)
[![Builder](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/onpush_builder.yaml?label=Builder)](https://github.com/alexbelgium/hassio-addons/actions/workflows/onpush_builder.yaml)

[donation-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee%20(no%20paypal)-%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white
[paypal-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee%20with%20Paypal-0070BA?logo=paypal&style=flat&logoColor=white

_感谢所有给我仓库加星的人！要为其加星请点击下面的图片，然后它将显示在右上角。谢谢！_

[![Stargazers repo roster for @alexbelgium/hassio-addons](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/.github/stars2.svg)](https://github.com/alexbelgium/hassio-addons/stargazers)

![下载演变](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/joal/stats.png)

## 关于

一个开源的命令行 RatioMaster 以及 WebUI。
该插件基于 Anthony Raymond 的 [docker 镜像](https://hub.docker.com/r/anthonyraymond/joal)。
该应用的所有功劳归于 Anthony Raymond，请在此访问他的仓库 : https://github.com/anthonyraymond/joal

## 配置

Joal 配置：在插件日志中包含了所有针对您系统的信息。

插件选项

```yaml
secret_token: lrMY24Byhx #您可以在此处编码自己的令牌，该令牌将用于在应用中进行身份识别
ui_path: joal #Joal 的访问路径
run_duration: 12h #插件应运行多长时间。必须格式化为数字 + 时间单位（例如：5s，2m，12h，或5d...）
```

## 安装

该插件的安装非常简单，与安装其他 Hass.io 插件没有区别。

1. [将我的 Hass.io 插件仓库][repository] 添加到您的 Hass.io 实例。
1. 安装此插件。
1. 点击 `保存` 按钮以存储您的配置。
1. 确保路由器上打开了这两个端口。
1. 启动插件。
1. 检查插件的日志以查看一切是否顺利。
1. 小心配置插件以符合您的偏好，请查看官方文档以了解更多。

## 支持

对于 HA：在 GitHub 上创建问题。
对于 Joal：请查看上游仓库 https://github.com/anthonyraymond/joal

## 插图

![image](https://user-images.githubusercontent.com/44178713/117990142-29c3b200-b33d-11eb-86c8-a3007d73c3da.png)

[repository]: https://github.com/alexbelgium/hassio-addons