# Hass.io 附加组件：Wger

我在业余时间维护这个及其他 Home Assistant 附加组件：追踪上游变更、适应 Home Assistant 的更新以及在真实硬件上测试会耗费大量时间（甚至需要一些金钱）。我常用的附加组件大约有 10 个，总计超过 110 个。因此，我会安装测试机器（甚至使用一些我不直接使用的测试服务，如 VPN）来调试和改进附加组件。

如果您使用此附加组件节省了时间或简化了您的设置，我将不胜感激！

[![Buy me a coffee][donation-badge]](https://www.buymeacoffee.com/alexbelgium)
[![Donate via PayPal][paypal-badge]](https://www.paypal.com/donate/?hosted_button_id=DZFULJZTP3UQA)

## 附加组件信息

![版本](https://img.shields.io/badge/dynamic/yaml?label=Version&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fwger%2Fconfig.yaml)
![Ingress](https://img.shields.io/badge/dynamic/yaml?label=Ingress&query=%24.ingress&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fwger%2Fconfig.yaml)
![架构](https://img.shields.io/badge/dynamic/yaml?color=success&label=Arch&query=%24.arch&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fwger%2Fconfig.yaml)

[![Codacy Badge](https://app.codacy.com/project/badge/Grade/9c6cf10bdbba45ecb202d7f579b5be0e)](https://www.codacy.com/gh/alexbelgium/hassio-addons/dashboard?utm_source=github.com&utm_medium=referral&utm_content=alexbelgium/hassio-addons&utm_campaign=Badge_Grade)
[![GitHub Super-Linter](https://img.shields.io/github/actions/workflows/status/alexbelgium/hassio-addons/weekly-supelinter.yaml?label=Lint%20code%20base)](https://github.com/alexbelgium/hassio-addons/actions/workflows/weekly-supelinter.yaml)
[![Builder](https://img.shields.io/github/actions/workflows/status/alexbelgium/hassio-addons/onpush_builder.yaml?label=Builder)](https://github.com/alexbelgium/hassio-addons/actions/workflows/onpush_builder.yaml)

[donation-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee-%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white
[paypal-badge]: https://img.shields.io/badge/Donate%20via%20PayPal-0070BA?logo=paypal&style=flat&logoColor=white

_感谢大家给我这个仓库赐星！点击下方图片给它赐星后，它就会显示在右上角。感谢大家！_

[![Star 者仓库名单 - @alexbelgium/hassio-addons](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/.github/stars2.svg)](https://github.com/alexbelgium/hassio-addons/stargazers)

![下载量趋势](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/wger/stats.png)

## 简介

[wger](https://github.com/wger-project/wger) Workout Manager (Wger Workout Manager 计划) 是一个免费、开源的Web应用程序，可帮助您管理个人的训练计划、体重和饮食计划，也可作为简单的健身房管理工具使用。它还提供了 REST API，便于与其他项目和工具集成。

## 配置

使用附加组件的 `env_vars` 选项来传递额外的环境变量（支持大小写字母）。有关详细信息，请参阅 https://github.com/alexbelgium/hassio-addons/wiki/Add-Environment-variables-to-your-Addon-2。

- 启动附加组件。等待一段时间，并检查日志以查看是否有错误。初始启动可能需要长达 15 分钟！
- 打开 yourdomain.com:9927（附加组件端口 `80/tcp` 的默认主机映射，如 `webui` 提示所示）。
- 默认设置：
  - 用户名：`admin`
  - 密码：`adminadmin`

有两种方式可以配置选项：

- 附加组件选项

```yaml
"CONFIG_LOCATION": 配置.yaml 的位置 # 设置配置.yaml 的位置（见下文）
```

- 配置.yaml（高级用法）

您可以通过在配置.yaml 中定义位置来将它们设置为环境变量，该位置位于您在附加组件选项中定义的位置，请参考此指南：https://github.com/alexbelgium/hassio-addons/wiki/Addons-feature:-add-env-variables

完整的 ENV 变量列表参见此处：暂无

## 安装

此附加组件的安装非常简单，与其他任何 Hass.io 附加组件的安装方式没有不同。

1. 将我的附加组件仓库添加到您的 Home Assistant 实例中（在 supervisor 附加组件商店的右上角，或如果您已配置我的 Home Assistant，请点击下方的按钮）。
   [![打开您的 Home Assistant 实例并显示带有特定存储库 URL 预填充的附加组件仓库对话框。](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2Falexbelgium%2Fhassio-addons)
2. 安装此附加组件。
3. 点击 `保存` 按钮以存储您的配置。
4. 启动附加组件。
5. 检查附加组件日志，确认一切是否正常运行。
6. 仔细根据您的偏好配置附加组件，具体操作请参考官方文档。

## 支持

如果您在安装过程中遇到问题，请确保检查 GitHub 提供的信息。

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
