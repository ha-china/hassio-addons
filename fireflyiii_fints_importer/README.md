# Home Assistant 附加组件：Fireflyiii FinTS 导入器

我在闲暇时间维护此及其他 Home Assistant 附加组件：跟进上游更改、HA 更改以及在真实硬件上进行测试需要耗费大量时间（以及一些金钱）。我使用了大约 5-10 个我拥有的 >110 个附加组件，因此我经常安装测试机器（并购买一些我自己不使用的测试服务，如 vpn），用以故障排除和改进附加组件。

如果您使用此附加组件节省了时间或使您的设置更简单，我将非常感谢您的支持！

[![Buy me a coffee][donation-badge]](https://www.buymeacoffee.com/alexbelgium)
[![Donate via PayPal][paypal-badge]](https://www.paypal.com/donate/?hosted_button_id=DZFULJZTP3UQA)

## 附加组件信息

![Version](https://img.shields.io/badge/dynamic/yaml?label=Version&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Ffireflyiii_fints_importer%2Fconfig.yaml)
![Ingress](https://img.shields.io/badge/dynamic/yaml?label=Ingress&query=%24.ingress&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Ffireflyiii_fints_importer%2Fconfig.yaml)
![Arch](https://img.shields.io/badge/dynamic/yaml?color=success&label=Arch&query=%24.arch&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Ffireflyiii_fints_importer%2Fconfig.yaml)

[![Codacy Badge](https://app.codacy.com/project/badge/Grade/9c6cf10bdbba45ecb202d7f579b5be0e)](https://www.codacy.com/gh/alexbelgium/hassio-addons/dashboard?utm_source=github.com&utm_medium=referral&utm_content=alexbelgium/hassio-addons&utm_campaign=Badge_Grade)
[![GitHub Super-Linter](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/weekly-supelinter.yaml?label=Lint%20code%20base)](https://github.com/alexbelgium/hassio-addons/actions/workflows/weekly-supelinter.yaml)
[![Builder](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/onpush_builder.yaml?label=Builder)](https://github.com/alexbelgium/hassio-addons/actions/workflows/onpush_builder.yaml)

[donation-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee-%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white
[paypal-badge]: https://img.shields.io/badge/Donate%20via%20PayPal-0070BA?logo=paypal&style=flat&logoColor=white

_感谢大家为我仓库点赞！请点击下方图片点赞它，它将会出现在右上角。谢谢！_

[![Stargazers repo roster for @alexbelgium/hassio-addons](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/.github/stars2.svg)](https://github.com/alexbelgium/hassio-addons/stargazers)

![downloads evolution](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/fireflyiii_fints_importer/stats.png)

## 概述

["Firefly III"](https://www.firefly-iii.org) 是一个（自托管）个人财务管理系统。它可以帮助您跟踪您的支出和收入，从而为您减少支出、增加储蓄。此工具允许您将启用 FinTS 的银行的交易导入到 Firefly III。它提供了一个 Web  GUI，引导您完成此过程。

此附加组件基于 Docker 镜像 https://hub.docker.com/r/benkl/firefly-iii-fints-importer。

## 配置

使用附加组件的 `env_vars` 选项传递额外的环境变量（名称可以大写或小写）。详见 https://github.com/alexbelgium/hassio-addons/wiki/Add-Environment-variables-to-your-Addon-2 了解详情。

Webui 可在 <http://homeassistant:3476> 找到。

此工具允许您将启用了 FinTS 的银行的（主要是德国银行）交易导入到 Firefly III。

### 安装步骤

1. 确保您有运行中的 Firefly III 实例
2. 访问 Web 界面配置银行连接
3. 为每个银行账户设置导入配置
4. 如需要，配置自动导入计划

有关详细安装文档，请访问：https://github.com/bnw/firefly-iii-fints-importer

### 选项

| Option | Type | Description |
|--------|------|-------------|
| `Updates` | list | 自动导入计划（每小时，每天 2 小时，每天 4 小时，每天 6 小时，每天 8 小时，每天 10 小时，每天 12 小时，每周） |
| `silent` | bool | 抑制调试消息 |

### 示例配置

```yaml
Updates: ["daily6"]  # 每天凌晨 6 点运行
silent: false
```

### 自动导入计划

`Updates` 选项允许您安排自动导入：

- `hourly`: 每小时一次
- `daily2`: 每天凌晨 2:00
- `daily4`: 每天凌晨 4:00
- `daily6`: 每天凌晨 6:00
- `daily8`: 每天上午 8:00
- `daily10`: 每天上午 10:00
- `daily12`: 每天中午 12:00
- `weekly`: 每周一次（周日凌晨 2:00）

### 配置存储

银行配置和导入设置存储在以下位置：
`/config/addons_config/fireflyiii_fints_importer/`

有关配置文件格式，请访问：https://github.com/bnw/firefly-iii-fints-importer#storing-configurations

### FinTS 支持

此导入器支持使用 FinTS（金融交易服务）协议的德国银行。大多数主要德国银行均通过 FinTS 支持自动交易检索。

## 安装

此附加组件的安装非常直接，与其他附加组件安装没有区别。

1. 将我的附加组件仓库添加到 home assistant 实例中（在 supervisor 附加组件商店的右上角，或者如果您配置了 HA，点击下方按钮）
   [![打开您的 Home Assistant 实例并显示附加组件仓库对话框，其中预先填有特定的仓库 URL。](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2Falexbelgium%2Fhassio-addons)
1. 安装此附加组件。
1. 点击 `Save` 按钮保存您的配置。
1. 将附加组件选项设置为您的偏好设置
1. 启动附加组件。
1. 检查附加组件的日志，看看一切是否正常。
1. 打开 WebUI 并调整软件选项

## 支持

在 github 上创建问题。

## 说明

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
