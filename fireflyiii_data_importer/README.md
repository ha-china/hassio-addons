# Home assistant add-on: Fireflyiii data importer

我利用业余时间维护这个 Home Assistant add-on 以及其他的 add-on：跟上上游的变更、Home Assistant 的变更，并在真实硬件上测试都需要大量时间（和一些金钱）。我大约使用我超过 110 个 add-on 中的 5-10 个，因此我安装了一些测试机器（并且购买了一些我自己不使用的测试服务，如 VPN），以便于调试和改进这些 add-on。

如果这个 add-on 为您节省了时间或简化了您的设置，我将非常感谢您的支持！

[![Buy me a coffee][donation-badge]](https://www.buymeacoffee.com/alexbelgium)
[![Donate via PayPal][paypal-badge]](https://www.paypal.com/donate/?hosted_button_id=DZFULJZTP3UQA)

## Addon informations

![Version](https://img.shields.io/badge/dynamic/yaml?label=Version&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Ffireflyiii_data_importer%2Fconfig.yaml)
![Ingress](https://img.shields.io/badge/dynamic/yaml?label=Ingress&query=%24.ingress&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Ffireflyiii_data_importer%2Fconfig.yaml)
![Arch](https://img.shields.io/badge/dynamic/yaml?color=success&label=Arch&query=%24.arch&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Ffireflyiii_data_importer%2Fconfig.yaml)

[![Codacy Badge](https://app.codacy.com/project/badge/Grade/9c6cf10bdbba45ecb202d7f579b5be0e)](https://www.codacy.com/gh/alexbelgium/hassio-addons/dashboard?utm_source=github.com&utm_medium=referral&utm_content=alexbelgium/hassio-addons&utm_campaign=Badge_Grade)
[![GitHub Super-Linter](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/weekly-supelinter.yaml?label=Lint%20code%20base)](https://github.com/alexbelgium/hassio-addons/actions/workflows/weekly-supelinter.yaml)
[![Builder](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/onpush_builder.yaml?label=Builder)](https://github.com/alexbelgium/hassio-addons/actions/workflows/onpush_builder.yaml)

[donation-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee-%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white
[paypal-badge]: https://img.shields.io/badge/Donate%20via%20PayPal-0070BA?logo=paypal&style=flat&logoColor=white

_感谢所有给我的仓库点赞的人！点击下面的图片给它点赞，它就会出现在右上角。谢谢！_

[![Stargazers repo roster for @alexbelgium/hassio-addons](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/.github/stars2.svg)](https://github.com/alexbelgium/hassio-addons/stargazers)

![downloads evolution](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/fireflyiii_data_importer/stats.png)

## About

["Firefly III"](https://www.firefly-iii.org) 是一个（自托管）个人财务管理工具。它可以帮助您跟踪支出和收入，以便您花得更少，存得更多。数据导入器是为了帮助您将交易导入 Firefly III 而构建的。它出于安全和维护的原因与 Firefly III 分开。

这个 add-on 基于以下 Docker 镜像：https://hub.docker.com/r/fireflyiii/data-importer

## Configuration

Webui 可以在 <http://homeassistant:3474> 找到。

### Setup

1. 确保您有一个运行的 Firefly III 实例
2. 配置数据导入器以连接到您的 Firefly III 安装
3. 根据需要设置导入配置和文件

有关完整的设置文档，请参阅：https://docs.firefly-iii.org/data-importer

### Options

| Option | Type | Required | Description |
|--------|------|----------|-------------|
| `FIREFLY_III_URL` | str | Yes | 您的 Firefly III 实例的 URL |
| `FIREFLY_III_ACCESS_TOKEN` | str | Yes | 来自 Firefly III 的个人访问令牌 |
| `CONFIG_LOCATION` | str | Yes | 配置文件的位置 |
| `FIREFLY_III_CLIENT_ID` | str | No | OAuth 客户端 ID（访问令牌的替代方案） |
| `NORDIGEN_ID` | str | No | Nordigen 客户端 ID 用于银行集成 |
| `NORDIGEN_KEY` | str | No | Nordigen 客户端密钥 |
| `SPECTRE_APP_ID` | str | No | Spectre/Salt Edge 客户端 ID |
| `SPECTRE_SECRET` | str | No | Spectre/Salt Edge 客户端密钥 |
| `AUTO_IMPORT_SECRET` | str | No | 自动导入 webhook 的密钥 |
| `CAN_POST_AUTOIMPORT` | bool | No | 允许自动导入功能 |
| `CAN_POST_FILES` | bool | No | 允许文件上传 |
| `Updates` | list | No | 自动导入计划（每小时、每天、每周） |
| `silent` | bool | No | 抑制调试消息 |

### Example Configuration

```yaml
FIREFLY_III_URL: "http://homeassistant:8082"
FIREFLY_III_ACCESS_TOKEN: "your-access-token-here"
CONFIG_LOCATION: "/config"
NORDIGEN_ID: "your-nordigen-id"
NORDIGEN_KEY: "your-nordigen-key"
Updates: ["daily"]
silent: false
```

### File Locations

- **Configurations**: `/addon_configs/xxx-fireflyiii_data_importer/configurations/`
  - 在这里存储导入配置文件
  - 参考：https://docs.firefly-iii.org/data-importer/help/config/

- **Import Files**: `/addon_configs/xxx-fireflyiii_data_importer/import_files/`
  - 在这里放置 CSV 文件以进行自动导入
  - 参考：https://docs.firefly-iii.org/data-importer/usage/command_line/

### Getting a Firefly III Access Token

1. 登录到您的 Firefly III 实例
2. 转到 Options → Profile → OAuth → Personal Access Tokens
3. 创建一个新的具有适当权限的令牌
4. 复制令牌并在 `FIREFLY_III_ACCESS_TOKEN` 选项中使用它

### Custom Scripts and Environment Variables

这个 add-on 通过 `addon_config` 映射支持自定义脚本和环境变量：

- **Custom scripts**: 参考 [Running Custom Scripts in Addons](https://github.com/alexbelgium/hassio-addons/wiki/Running-custom-scripts-in-Addons)
- **env_vars option**: 使用 add-on 的 `env_vars` 选项传递额外的环境变量（大小写名称）。参考 https://github.com/alexbelgium/hassio-addons/wiki/Add-Environment-variables-to-your-Addon-2 获取详细信息。

## Installation

这个 add-on 的安装非常简单，与安装任何其他 add-on 没有区别。

1. 将我的 add-ons 仓库添加到您的 Home Assistant 实例（在 supervisor add-ons 存储库在右上角，或者如果您已经配置了我的 HA，点击下面的按钮）
   [![打开您的 Home Assistant 实例并显示添加 add-on 仓库对话框，并预填特定的仓库 URL。](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2Falexbelgium%2Fhassio-addons)
1. 安装这个 add-on。
1. 点击 `Save` 按钮保存您的配置。
1. 设置 add-on 选项以符合您的偏好
1. 启动 add-on。
1. 检查 add-on 的日志，看看是否一切正常。
1. 打开 webUI 并调整软件选项

## Support

在 github 上创建问题

## Illustration

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
