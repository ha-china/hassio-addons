# Home assistant add-on: Joal

我利用业余时间维护这个及其他 Home Assistant add-ons：跟上上游的变更、HA 的变更，并在真实硬件上测试，这需要大量时间（和一些金钱）。我大约使用我超过 110 个 add-ons 中 5-10 个，因此我安装了一些测试机器（和购买了一些我自身不使用的测试服务，如 VPN），以用于调试和改进 add-ons。

如果这个 add-on 为您节省了时间或简化了您的设置，我将非常感谢您的支持！

[![Buy me a coffee][donation-badge]](https://www.buymeacoffee.com/alexbelgium)
[![Donate via PayPal][paypal-badge]](https://www.paypal.com/donate/?hosted_button_id=DZFULJZTP3UQA)

## Addon informations

![Version](https://img.shields.io/badge/dynamic/yaml?label=Version&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fjoal%2Fconfig.yaml)
![Ingress](https://img.shields.io/badge/dynamic/yaml?label=Ingress&query=%24.ingress&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fjoal%2Fconfig.yaml)
![Arch](https://img.shields.io/badge/dynamic/yaml?color=success&label=Arch&query=%24.arch&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fjoal%2Fconfig.yaml)

[![Codacy Badge](https://app.codacy.com/project/badge/Grade/9c6cf10bdbba45ecb202d7f579b5be0e)](https://www.codacy.com/gh/alexbelgium/hassio-addons/dashboard?utm_source=github.com&utm_medium=referral&utm_content=alexbelgium/hassio-addons&utm_campaign=Badge_Grade)
[![GitHub Super-Linter](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/weekly-supelinter.yaml?label=Lint%20code%20base)](https://github.com/alexbelgium/hassio-addons/actions/workflows/weekly-supelinter.yaml)
[![Builder](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/onpush_builder.yaml?label=Builder)](https://github.com/alexbelgium/hassio-addons/actions/workflows/onpush_builder.yaml)

[donation-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee-%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white
[paypal-badge]: https://img.shields.io/badge/Donate%20via%20PayPal-0070BA?logo=paypal&style=flat&logoColor=white

_感谢大家给我的仓库点赞！点击下面的图片即可点赞，之后它将出现在右上角。谢谢！_

[![Stargazers repo roster for @alexbelgium/hassio-addons](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/.github/stars2.svg)](https://github.com/alexbelgium/hassio-addons/stargazers)

![downloads evolution](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/joal/stats.png)

## About

一个开源的命令行 RatioMaster，带 WebUI。
这个 add-on 基于 Anthony Raymond 的 [docker image](https://hub.docker.com/r/anthonyraymond/joal)。
这个应用的所有功劳都归功于 Anthony Raymond，请访问他的仓库：https://github.com/anthonyraymond/joal

## Configuration

使用 add-on 的 `env_vars` 选项来传递额外的环境变量（大小写名称）。详情请见 https://github.com/alexbelgium/hassio-addons/wiki/Add-Environment-variables-to-your-Addon-2。

Webui 可以在 <http://homeassistant:PORT> 或通过 Ingress 在侧边栏中找到。
配置详情可以在 add-on 日志中找到。

### Options

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `secret_token` | str | `lrMY24Byhx` | Web 界面的认证令牌 |
| `ui_path` | str | `joal` | Web UI 路径 |
| `run_duration` | str | `12h` | 运行时长（例如，5s，2m，12h，5d） |
| `verbose` | bool | | 启用详细日志记录 |

### Example Configuration

```yaml
secret_token: "your-custom-token-here"
ui_path: "joal"
run_duration: "24h"
verbose: true
```

## Installation

这个 add-on 的安装非常简单，与安装其他 Hass.io add-on 没有区别。

1. [将我的 Hass.io add-ons 仓库][repository]添加到您的 Hass.io 实例中。
1. 安装这个 add-on。
1. 点击 `Save` 按钮来保存您的配置。
1. 确保您的路由器上开放了两个端口。
1. 启动 add-on。
1. 检查 add-on 的日志，看看是否一切正常。
1. 仔细配置 add-on 以符合您的偏好，请查看官方文档。

## Support

对于 HA：在 github 上创建一个问题
对于 Joal：请查看上游仓库：https://github.com/anthonyraymond/joal

## Illustration

![image](https://user-images.githubusercontent.com/44178713/117990142-29c3b200-b33d-11eb-86c8-a3007d73c3da.png)

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
