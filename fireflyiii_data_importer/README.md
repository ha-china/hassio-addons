# Home assistant add-on: Fireflyiii data importer

[![Donate][donation-badge]](https://www.buymeacoffee.com/alexbelgium)
[![Donate][paypal-badge]](https://www.paypal.com/donate/?hosted_button_id=DZFULJZTP3UQA)

![Version](https://img.shields.io/badge/dynamic/yaml?label=Version&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Ffireflyiii_data_importer%2Fconfig.yaml)
![Ingress](https://img.shields.io/badge/dynamic/yaml?label=Ingress&query=%24.ingress&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Ffireflyiii_data_importer%2Fconfig.yaml)
![Arch](https://img.shields.io/badge/dynamic/yaml?color=success&label=Arch&query=%24.arch&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Ffireflyiii_data_importer%2Fconfig.yaml)

[![Codacy Badge](https://app.codacy.com/project/badge/Grade/9c6cf10bdbba45ecb202d7f579b5be0e)](https://www.codacy.com/gh/alexbelgium/hassio-addons/dashboard?utm_source=github.com&utm_medium=referral&utm_content=alexbelgium/hassio-addons&utm_campaign=Badge_Grade)
[![GitHub Super-Linter](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/weekly-supelinter.yaml?label=Lint%20code%20base)](https://github.com/alexbelgium/hassio-addons/actions/workflows/weekly-supelinter.yaml)
[![Builder](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/onpush_builder.yaml?label=Builder)](https://github.com/alexbelgium/hassio-addons/actions/workflows/onpush_builder.yaml)

[donation-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee%20(no%20paypal)-%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white
[paypal-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee%20with%20Paypal-0070BA?logo=paypal&style=flat&logoColor=white

_感谢所有给我的仓库点赞的人！要点赞，请点击下面的图片，然后它会在右上角。谢谢！_

[![Stargazers repo roster for @alexbelgium/hassio-addons](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/.github/stars2.svg)](https://github.com/alexbelgium/hassio-addons/stargazers)

![downloads evolution](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/fireflyiii_data_importer/stats.png)

## About

["Firefly III"](https://www.firefly-iii.org) 是一个（自托管）的个人财务管理工具。它可以帮助你跟踪支出和收入，以便你花得更少，存得更多。数据导入器是为了帮助你将交易导入 Firefly III 而构建的。它因安全和维护原因与 Firefly III 分离。

这个插件基于 Docker 镜像 https://hub.docker.com/r/fireflyiii/data-importer

## Configuration

Webui 可以在 <http://homeassistant:3474> 找到。

### Setup

1. 确保你有一个运行的 Firefly III 实例
2. 配置数据导入器以连接到你的 Firefly III 安装
3. 根据需要设置导入配置和文件

完整的设置文档，请参阅：https://docs.firefly-iii.org/data-importer

### Options

| 选项 | 类型 | 必需 | 描述 |
|------|------|------|------|
| `FIREFLY_III_URL` | 字符串 | 是 | 你的 Firefly III 实例的 URL |
| `FIREFLY_III_ACCESS_TOKEN` | 字符串 | 是 | 来自 Firefly III 的个人访问令牌 |
| `CONFIG_LOCATION` | 字符串 | 是 | 配置文件的位置 |
| `FIREFLY_III_CLIENT_ID` | 字符串 | 否 | OAuth 客户端 ID（访问令牌的替代方案） |
| `NORDIGEN_ID` | 字符串 | 否 | 用于银行集成的 Nordigen 客户端 ID |
| `NORDIGEN_KEY` | 字符串 | 否 | Nordigen 客户端密钥 |
| `SPECTRE_APP_ID` | 字符串 | 否 | Spectre/Salt Edge 客户端 ID |
| `SPECTRE_SECRET` | 字符串 | 否 | Spectre/Salt Edge 客户端密钥 |
| `AUTO_IMPORT_SECRET` | 字符串 | 否 | 自动导入 webhook 的密钥 |
| `CAN_POST_AUTOIMPORT` | 布尔值 | 否 | 允许自动导入功能 |
| `CAN_POST_FILES` | 布尔值 | 否 | 允许文件上传 |
| `Updates` | 列表 | 否 | 自动导入计划（每小时、每天、每周） |
| `silent` | 布尔值 | 否 | 隐藏调试消息 |

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
  - 查看：https://docs.firefly-iii.org/data-importer/help/config/

- **Import Files**: `/addon_configs/xxx-fireflyiii_data_importer/import_files/`
  - 在这里放置 CSV 文件以进行自动导入
  - 查看：https://docs.firefly-iii.org/data-importer/usage/command_line/

### Getting a Firefly III Access Token

1. 登录到你的 Firefly III 实例
2. 前往选项 → 个人资料 → OAuth → 个人访问令牌
3. 创建一个新的令牌并设置适当的权限
4. 复制令牌并在 `FIREFLY_III_ACCESS_TOKEN` 选项中使用它

### Custom Scripts and Environment Variables

这个插件支持自定义脚本和环境变量通过 `addon_config` 映射：

- **Custom scripts**: 查看 [Running Custom Scripts in Addons](https://github.com/alexbelgium/hassio-addons/wiki/Running-custom-scripts-in-Addons)
- **env_vars 选项**: 使用插件的 `env_vars` 选项传递额外的环境变量（大写或小写名称）。查看 https://github.com/alexbelgium/hassio-addons/wiki/Add-Environment-variables-to-your-Addon-2 以获取详细信息。

## Installation

这个插件的安装非常简单，与安装其他插件没有区别。

1. 将我的插件仓库添加到你的 Home Assistant 实例（在 Supervisor 插件商店的右上角，或者如果你已经配置了我的 HA，点击下面的按钮）
   [![打开你的 Home Assistant 实例并显示添加插件仓库对话框，预填特定仓库 URL。](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2Falexbelgium%2Fhassio-addons)
2. 安装这个插件。
3. 点击 `保存` 按钮以保存你的配置。
4. 设置插件的选项以符合你的偏好。
5. 启动插件。
6. 检查插件的日志以查看是否一切正常。
7. 打开 WebUI 并调整软件选项

## Support

在 github 上创建问题

## Illustration

[repository]: https://github.com/alexbelgium/hassio-addons
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
