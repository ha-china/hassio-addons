# Hass.io 插件：Wger

我在业余时间维护这个和其他 Home Assistant 插件：跟进上游变更、HA 变更以及在真实硬件上测试都需要花费大量的时间（以及一些金钱）。我经常使用大约 5-10 个我的 >110 个插件，所以我安装了测试机器（并购买了某些我本人不使用的测试服务，如 vpn），以便进行故障排除和改进插件。

如果这个插件为您节省了时间或使您的设置变得更简单，我将非常感激您的支持！

[![买我一杯咖啡][捐赠徽章]](https://www.buymeacoffee.com/alexbelgium)
[![通过 PayPal 捐赠][paypal-徽章]](https://www.paypal.com/donate/?hosted_button_id=DZFULJZTP3UQA)

## 插件信息

![版本](https://img.shields.io/badge/dynamic/yaml?label=Version&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fwger%2Fconfig.yaml)
![入口](https://img.shields.io/badge/dynamic/yaml?label=Ingress&query=%24.ingress&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fwger%2Fconfig.yaml)
![架构](https://img.shields.io/badge/dynamic/yaml?color=success&label=Arch&query=%24.arch&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fwger%2Fconfig.yaml)

[![Codacy 徽章](https://app.codacy.com/project/badge/Grade/9c6cf10bdbba45ecb202d7f579b5be0e)](https://www.codacy.com/gh/alexbelgium/hassio-addons/dashboard?utm_source=github.com&utm_medium=referral&utm_content=alexbelgium/hassio-addons&utm_campaign=Badge_Grade)
[![GitHub Super-Linter](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/weekly-supelinter.yaml?label=Lint%20code%20base)](https://github.com/alexbelgium/hassio-addons/actions/workflows/weekly-supelinter.yaml)
[![Builder](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/onpush_builder.yaml?label=Builder)](https://github.com/alexbelgium/hassio-addons/actions/workflows/onpush_builder.yaml)

[捐赠徽章]: https://img.shields.io/badge/Buy%20me%20a%20coffee-%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white
[paypal-徽章]: https://img.shields.io/badge/Donate%20via%20PayPal-0070BA?logo=paypal&style=flat&logoColor=white

_感谢所有为我仓库点星的人！要点星，请点击下面的图片，然后它将出现在右上角。谢谢！_

[![Stargazers repo roster for @alexbelgium/hassio-addons](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/.github/stars2.svg)](https://github.com/alexbelgium/hassio-addons/stargazers)

![下载趋势](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/wger/stats.png)

## 关于

[wger](https://github.com/wger-project/wger) 锻炼管理器是一个免费、开源的 Web 应用程序，可以帮助您管理个人锻炼、体重和饮食计划，也可以用作简单的健身房管理工具。它还提供了一个 REST API，便于与其他项目和工具集成。

## 配置

使用 `env_vars` 插件选项来传递额外的环境变量（大写或小写名称）。有关详细信息，请参阅 https://github.com/alexbelgium/hassio-addons/wiki/Add-Environment-variables-to-your-Addon-2。

- 启动插件。等待一段时间，并检查日志中是否有任何错误。初始启动可能需要长达 15 分钟！
- 打开 yourdomain.com:9927（默认主机映射为插件端口 `80/tcp`，如 `webui` 提示所示）。
- 默认
  - 用户名：`admin`
  - 密码：`adminadmin`

选项可以通过两种方式配置：

- 插件选项

```yaml
"CONFIG_LOCATION": location of the config.yaml # 设置 config.yaml 的位置（见下文）
```

- config.yaml（高级用法）

可以通过在配置.yaml中添加它们，并将它们作为 ENV 变量设置，来设置额外的变量。配置.yaml的位置根据您的插件选项定义，请参阅以下指南：https://github.com/alexbelgium/hassio-addons/wiki/Addons-feature:-add-env-variables

ENV 变量的完整列表可以在此处查看：不可用

## 安装

此插件的安装非常简单，与安装任何其他 Hass.io 插件没有区别。

1. 将我的插件仓库添加到您的 Home Assistant 实例中（在监督器插件存储的右上角，或点击下面的按钮如果您已配置我的 HA）
   [![打开您的 Home Assistant 实例并显示带有特定仓库 URL 预填充的添加插件仓库对话框。](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2Falexbelgium%2Fhassio-addons)
1. 安装此插件。
1. 点击“保存”按钮以存储您的配置。
1. 启动插件。
1. 检查插件的日志，以查看一切是否顺利。
1. 仔细配置插件以满足您的喜好，请参阅官方文档。

## 支持

如果您在安装过程中遇到问题，请务必查看 github。

[仓库](https://github.com/alexbelgium/hassio-addons)
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
