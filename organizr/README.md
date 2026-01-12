# Home assistant add-on: Organizr


我利用业余时间维护这个和其他 Home Assistant add-ons：跟进上游变化、HA 变化，并在真实硬件上测试需要大量时间（和一些金钱）。我大约使用我超过 110 个 add-ons 中 5-10 个，所以我安装测试机器（和一些我自己的测试服务，如 vpn）来调试和提高 add-ons。

如果这个 add-on 帮助你节省时间或使你的设置更简单，我将非常感谢你的支持！

[![Buy me a coffee][donation-badge]](https://www.buymeacoffee.com/alexbelgium)
[![Donate via PayPal][paypal-badge]](https://www.paypal.com/donate/?hosted_button_id=DZFULJZTP3UQA)

## Addon informations

![Version](https://img.shields.io/badge/dynamic/yaml?label=Version&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Forganizr%2Fconfig.yaml)
![Ingress](https://img.shields.io/badge/dynamic/yaml?label=Ingress&query=%24.ingress&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Forganizr%2Fconfig.yaml)
![Arch](https://img.shields.io/badge/dynamic/yaml?color=success&label=Arch&query=%24.arch&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Forganizr%2Fconfig.yaml)

[![Codacy Badge](https://app.codacy.com/project/badge/Grade/9c6cf10bdbba45ecb202d7f579b5be0e)](https://www.codacy.com/gh/alexbelgium/hassio-addons/dashboard?utm_source=github.com&utm_medium=referral&utm_content=alexbelgium/hassio-addons&utm_campaign=Badge_Grade)
[![GitHub Super-Linter](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/weekly-supelinter.yaml?label=Lint%20code%20base)](https://github.com/alexbelgium/hassio-addons/actions/workflows/weekly-supelinter.yaml)
[![Builder](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/onpush_builder.yaml?label=Builder)](https://github.com/alexbelgium/hassio-addons/actions/workflows/onpush_builder.yaml)

[donation-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee-%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white
[paypal-badge]: https://img.shields.io/badge/Donate%20via%20PayPal-0070BA?logo=paypal&style=flat&logoColor=white

_感谢所有给我的仓库点赞的人！要点赞，请点击下面的图片，然后它将在右上角。谢谢！_

[![Stargazers repo roster for @alexbelgium/hassio-addons](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/.github/stars2.svg)](https://github.com/alexbelgium/hassio-addons/stargazers)

![downloads evolution](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/organizr/stats.png)

## About

一个用 PHP 编写的 HTPC/Homelab 服务组织者。
这个 add-on 基于 linuxserver.io 的 [docker image](https://hub.docker.com/r/organizr/organizr)。

## Installation

这个 add-on 的安装非常简单，与其他 Hass.io add-on 的安装没有区别。

1. 将我的 Hass.io add-ons 仓库 [repository] 添加到你的 Hass.io 实例。
1. 安装这个 add-on。
1. 点击 `Save` 按钮以保存你的配置。
1. 启动 add-on。
1. 检查 add-on 的日志以查看是否一切顺利。
1. 仔细配置 add-on 以符合你的偏好，查看官方文档以了解详细信息。

## Configuration

使用 add-on 的 `env_vars` 选项传递额外的环境变量（名称大小写均可）。有关详细信息，请参阅 https://github.com/alexbelgium/hassio-addons/wiki/Add-Environment-variables-to-your-Addon-2。

Webui 可以在 <http://homeassistant:80> 或通过 Ingress 通过侧边栏访问。
配置可以通过 app webUI 进行，除了以下选项。

### Setup Steps

1. 启动 add-on 并访问 Web 界面
2. 按照设置向导创建管理员账户
3. 通过 Web 界面配置你的服务和选项卡
4. 数据库文件存储在 `/data/` 目录

### Options

| 选项 | 类型 | 默认值 | 描述 |
|------|------|--------|-------|
| `PGID` | 整数 | `0` | 文件权限的组 ID |
| `PUID` | 整数 | `0` | 文件权限的用户 ID |

### 示例配置

```yaml
PGID: 1000
PUID: 1000
```

**注意**：Organizr 通过 add-on 选项需要最少量的配置。大多数设置通过 Web 界面进行配置，包括服务集成、身份验证和主题。

## Support

在 github 上创建问题

## Illustration

![bjaSt3fTfdXhw5vyl-7Lqz1EOjJIyh8lrdqxA53qO6E](https://user-images.githubusercontent.com/44178713/123061812-43601b00-d40c-11eb-993c-2aed31072775.jpg)

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
