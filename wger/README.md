# Hass.io 附加组件：Wger

我正在业余时间维护此及其他 Home Assistant 附加组件：跟上上游更改、HA 更改以及在真实硬件上进行测试耗费了大量时间（和金钱）。我日常使用约 5-10 个超过 110 个附加组件中的组件，因此我经常安装测试机器（并购买一些我自己不使用的测试服务，如 vpn）来进行故障排除和改进附加组件。

如果这个附加组件为您节省了时间或让您的设置更简单，我将非常感激您的支持！

[![Buy me a coffee][donation-badge]](https://www.buymeacoffee.com/alexbelgium)
[![Donate via PayPal][paypal-badge]](https://www.paypal.com/donate/?hosted_button_id=DZFULJZTP3UQA)

## 附加组件信息

![Version](https://img.shields.io/badge/dynamic/yaml?label=Version&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fwger%2Fconfig.yaml)
![Ingress](https://img.shields.io/badge/dynamic/yaml?label=Ingress&query=%24.ingress&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fwger%2Fconfig.yaml)
![Arch](https://img.shields.io/badge/dynamic/yaml?color=success&label=Arch&query=%24.arch&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fwger%2Fconfig.yaml)

[![Codacy Badge](https://app.codacy.com/project/badge/Grade/9c6cf10bdbba45ecb202d7f579b5be0e)](https://www.codacy.com/gh/alexbelgium/hassio-addons/dashboard?utm_source=github.com&utm_medium=referral&utm_content=alexbelgium/hassio-addons&utm_campaign=Badge_Grade)
[![GitHub Super-Linter](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/weekly-supelinter.yaml?label=Lint%20code%20base)](https://github.com/alexbelgium/hassio-addons/actions/workflows/weekly-supelinter.yaml)
[![Builder](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/onpush_builder.yaml?label=Builder)](https://github.com/alexbelgium/hassio-addons/actions/workflows/onpush_builder.yaml)

[donation-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee-%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white
[paypal-badge]: https://img.shields.io/badge/Donate%20via%20PayPal-0070BA?logo=paypal&style=flat&logoColor=white

_感谢所有人给我的仓库点赞！要点赞，请点击下方的图片，然后它将被显示在右上角。谢谢！_

[![Stargazers repo roster for @alexbelgium/hassio-addons](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/.github/stars2.svg)](https://github.com/alexbelgium/hassio-addons/stargazers)

![downloads evolution](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/wger/stats.png)

## 关于

[wger](https://github.com/wger-project/wger) Workout Manager（锻炼管理器）是一个免费、开源的 Web 应用程序，帮助您管理您的个人锻炼计划、体重和饮食计划，也可用作简单的健身房管理工具。它还提供了一个 REST API，便于与其他项目和工具进行集成。

## 配置

使用附加组件的 `env_vars` 选项传递额外的环境变量（名称为大写或小写）。详见 https://github.com/alexbelgium/hassio-addons/wiki/Add-Environment-variables-to-your-Addon-2 了解详细信息。

- 启动附加组件。等待一段时间后检查日志以查看是否有任何错误。初始启动可能需要长达 15 分钟！
- 打开 yourdomain.com:9927（附加组件端口 `80/tcp` 的默认主机映射，如 `webui` 提示符所示）。
- 默认设置
  - 用户名：`admin`
  - 密码：`adminadmin`

两种方法可配置选项：

- 附加组件选项

```yaml
"CONFIG_LOCATION": config.yaml 的位置 # 设置 config.yaml 的位置（见下方）
```

- config.yaml（高级用法）

附加变量可以通过在 config.yaml 中添加环境变量来设置，位置位于您的附加组件选项中定义的位置，具体指南如下：https://github.com/alexbelgium/hassio-addons/wiki/Addons-feature:-add-env-variables

环境变量完整列表可在以下位置查看：不可用

## 安装

此附加组件的安装非常简单，与安装任何其他 Hass.io 附加组件没有区别。

1. 将我的附加组件仓库添加到 Home Assistant 实例（在 supervisor 附加组件商店顶部右侧，或如果您已配置我的 HA，则点击下方的按钮）
   [![打开您的 Home Assistant 实例并显示带有特定仓库 URL 预填充的添加附加组件仓库对话框。](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2Falexbelgium%2Fhassio-addons)
1. 安装此附加组件。
1. 点击 `Save` 按钮保存您的配置。
1. 启动附加组件。
1. 检查附加组件的日志，确认一切是否正常。
1. 仔细根据您的偏好配置附加组件，查看官方文档获取相关信息。

## 支持

如果您在安装过程中遇到问题，请确保查看 github。

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
