# Home assistant add-on: Joal

[![Donate][donation-badge]](https://www.buymeacoffee.com/alexbelgium)
[![Donate][paypal-badge]](https://www.paypal.com/donate/?hosted_button_id=DZFULJZTP3UQA)

![Version](https://img.shields.io/badge/dynamic/yaml?label=版本&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fjoal%2Fconfig.yaml)
![Ingress](https://img.shields.io/badge/dynamic/yaml?label=Ingress&query=%24.ingress&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fjoal%2Fconfig.yaml)
![Arch](https://img.shields.io/badge/dynamic/yaml?color=success&label=Arch&query=%24.arch&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fjoal%2Fconfig.yaml)

[![Codacy Badge](https://app.codacy.com/project/badge/Grade/9c6cf10bdbba45ecb202d7f579b5be0e)](https://www.codacy.com/gh/alexbelgium/hassio-addons/dashboard?utm_source=github.com&utm_medium=referral&utm_content=alexbelgium/hassio-addons&utm_campaign=Badge_Grade)
[![GitHub Super-Linter](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/weekly-supelinter.yaml?label=Lint%20code%20base)](https://github.com/alexbelgium/hassio-addons/actions/workflows/weekly-supelinter.yaml)
[![Builder](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/onpush_builder.yaml?label=Builder)](https://github.com/alexbelgium/hassio-addons/actions/workflows/onpush_builder.yaml)

[donation-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee%20(no%20paypal)-%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white
[paypal-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee%20with%20Paypal-0070BA?logo=paypal&style=flat&logoColor=white

_感谢所有给我的仓库加星的人！要加星，请点击下面的图片，然后它就会出现在右上角。谢谢！_

[![Stargazers repo roster for @alexbelgium/hassio-addons](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/.github/stars2.svg)](https://github.com/alexbelgium/hassio-addons/stargazers)

![downloads evolution](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/joal/stats.png)

## 关于

一个开源的命令行RatioMaster，带有Web界面。
这个插件基于Anthony Raymond的[docker镜像](https://hub.docker.com/r/anthonyraymond/joal)。
这个应用的所有功劳都归功于Anthony Raymond，请访问他的仓库：https://github.com/anthonyraymond/joal

## 配置

Web界面可以在<http://homeassistant:PORT>找到，或者通过Ingress在侧边栏中访问。
配置详情可以在插件日志中找到。

### 选项

| 选项 | 类型 | 默认值 | 描述 |
|------|------|--------|-------|
| `secret_token` | 字符串 | `lrMY24Byhx` | Web界面的认证令牌 |
| `ui_path` | 字符串 | `joal` | Web界面路径 |
| `run_duration` | 字符串 | `12h` | 运行时长（例如，5s, 2m, 12h, 5d） |
| `verbose` | 布尔值 | | 启用详细日志 |

### 示例配置

```yaml
secret_token: "your-custom-token-here"
ui_path: "joal"
run_duration: "24h"
verbose: true
```

## 安装

这个插件的安装非常简单，与其他Hass.io插件的安装方式相同。

1. 将我的Hass.io插件仓库[repository]添加到你的Hass.io实例中。
1. 安装这个插件。
1. 点击`保存`按钮以保存你的配置。
1. 确保你的路由器上开放了两个端口。
1. 启动插件。
1. 检查插件的日志以查看是否一切正常。
1. 仔细配置插件以符合你的偏好，请参考官方文档进行配置。

## 支持

对于HA：在github上创建问题
对于Joal：请访问上游仓库：https://github.com/anthonyraymond/joal

## 插图

![image](https://user-images.githubusercontent.com/44178713/117990142-29c3b200-b33d-11eb-86c8-a3007d73c3da.png)

[repository]: https://github.com/alexbelgium/hassio-addons