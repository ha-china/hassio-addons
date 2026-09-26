# Home Assistant 附加组件：Fireflyiii 数据导入器

我在业余时间维护此及其他 Home Assistant 附加组件：跟踪上游变化、跟进 Home Assistant 的变化以及在真实硬件上进行测试需要耗费大量时间（以及一些金钱）。我大约使用 5-10 个我拥有的 >110 个附加组件，因此我定期安装测试机（并购买一些我自己不使用的测试服务，如 VPN）来排查问题和改进附加组件。

如果这个附加组件为您节省时间或让您的设置更简单，我将不胜感激您的支持！

[![Buy me a coffee][donation-badge]](https://www.buymeacoffee.com/alexbelgium)
[![Donate via PayPal][paypal-badge]](https://www.paypal.com/donate/?hosted_button_id=DZFULJZTP3UQA)

## 附加组件信息

![Version](https://img.shields.io/badge/dynamic/yaml?label=Version&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Ffireflyiii_data_importer%2Fconfig.yaml)
![Ingress](https://img.shields.io/badge/dynamic/yaml?label=Ingress&query=%24.ingress&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Ffireflyiii_data_importer%2Fconfig.yaml)
![Arch](https://img.shields.io/badge/dynamic/yaml?color=success&label=Arch&query=%24.arch&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Ffireflyiii_data_importer%2Fconfig.yaml)

[![Codacy Badge](https://app.codacy.com/project/badge/Grade/9c6cf10bdbba45ecb202d7f579b5be0e)](https://www.codacy.com/gh/alexbelgium/hassio-addons/dashboard?utm_source=github.com&utm_medium=referral&utm_content=alexbelgium/hassio-addons&utm_campaign=Badge_Grade)
[![GitHub Super-Linter](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/weekly-supelinter.yaml?label=Lint%20code%20base)](https://github.com/alexbelgium/hassio-addons/actions/workflows/weekly-supelinter.yaml)
[![Builder](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/onpush_builder.yaml?label=Builder)](https://github.com/alexbelgium/hassio-addons/actions/workflows/onpush_builder.yaml)

[donation-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee-%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white
[paypal-badge]: https://img.shields.io/badge/Donate%20via%20PayPal-0070BA?logo=paypal&style=flat&logoColor=white

_感谢大家为我这个仓库_star_！请点击下方图片进行_star_，它将被置于右上角。谢谢！_

[![Stargazers repo roster for @alexbelgium/hassio-addons](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/.github/stars2.svg)](https://github.com/alexbelgium/hassio-addons/stargazers)

![downloads evolution](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/fireflyiii_data_importer/stats.png)

## 关于

["Firefly III"](https://www.firefly-iii.org) 是一个（自托管）个人财务管理器。它可以帮您跟踪收支，从而让您花得更少，存得更多。数据导入器旨在帮助您将交易导入 Firefly III。出于安全和维护方面的考虑，它与 Firefly III 分离。

此附加组件基于 Docker 镜像 https://hub.docker.com/r/fireflyiii/data-importer

## 配置

Web 用户界面位于 <http://homeassistant:3474>。

### 设置

1. 确保您有一个运行中的 Firefly III 实例
2. 配置数据导入器以连接到您的 Firefly III 安装
3. 根据需要设置导入配置和文件

完整的设置文档，请访问：https://docs.firefly-iii.org/data-importer

### 选项

| 选项 | 类型 | 必需 | 描述 |
|--------|------|----------|-------------|
| `FIREFLY_III_URL` | str | Yes | 您的 Firefly III 实例的 URL |
| `FIREFLY_III_ACCESS_TOKEN` | str | Yes | Firefly III 的个人访问令牌 |
| `CONFIG_LOCATION` | str | Yes | 配置文件的位置 |
| `FIREFLY_III_CLIENT_ID` | str | No | OAuth 客户端 ID（个人访问令牌的可替代方案） |
| `NORDIGEN_ID` | str | No | Nordigen 客户端 ID（用于银行集成） |
| `NORDIGEN_KEY` | str | No | Nordigen 客户端密钥 |
| `SPECTRE_APP_ID` | str | No | Spectre/Salt Edge 客户端 ID |
| `SPECTRE_SECRET` | str | No | Spectre/Salt Edge 客户端密钥 |
| `AUTO_IMPORT_SECRET` | str | No | 自动导入 Webhook 的密钥 |
| `CAN_POST_AUTOIMPORT` | bool | No | 允许自动导入功能 |
| `CAN_POST_FILES` | bool | No | 允许文件上传 |
| `Updates` | list | No | 自动导入计划（每小时、每天、每周） |
| `silent` | bool | No | 抑制调试消息 |

### 示例配置

```yaml
FIREFLY_III_URL: "http://homeassistant:8082"
FIREFLY_III_ACCESS_TOKEN: "your-access-token-here"
CONFIG_LOCATION: "/config"
NORDIGEN_ID: "your-nordigen-id"
NORDIGEN_KEY: "your-nordigen-key"
Updates: ["daily"]
silent: false
```

### 文件位置

- **配置**: `/app_configs/xxx-fireflyiii_data_importer/configurations/`
  - 在此处存储导入配置文件
  - 参见：https://docs.firefly-iii.org/data-importer/help/config/

- **导入文件**: `/app_configs/xxx-fireflyiii_data_importer/import_files/`
  - 在此处放置以进行自动导入的 CSV 文件
  - 参见：https://docs.firefly-iii.org/data-importer/usage/command_line/

### 获取 Firefly III 访问令牌

1. 登录您的 Firefly III 实例
2. 进入 选项 → 个人资料 → OAuth → 个人访问令牌
3. 创建具有适当权限的新令牌
4. 复制令牌并在 `FIREFLY_III_ACCESS_TOKEN` 选项中使用它

### 自定义脚本和环境变量

此附加组件通过 `app_config` 映射支持自定义脚本和环境变量：

- **自定义脚本**: 参见 [在附加组件中运行自定义脚本](https://github.com/alexbelgium/hassio-addons/wiki/Running-custom-scripts-in-Addons)
- **env_vars 选项**: 使用附加组件的 `env_vars` 选项传递额外的环境变量（大写或小写字母名称均可）。详见 https://github.com/alexbelgium/hassio-addons/wiki/Add-Environment-variables-to-your-Addon-2

## 安装

此附加组件的安装非常简单，与其他任何附加组件的安装没有不同。

1. 将我的附加组件库添加到您的 Home Assistant 实例（在 supervisor 附加组件存储中点击右上角，或如果您已配置了我们的 HA，则点击下面的按钮）
   [![Open your Home Assistant instance and show the add add-on repository dialog with a specific repository URL pre-filled.](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2Falexbelgium%2Fhassio-addons)
1. 安装此附加组件。
1. 点击 `保存` 按钮以存储配置。
1. 将附加组件选项设置为您的偏好设置。
1. 启动附加组件。
1. 查看附加组件的日志，以确认一切正常。
1. 打开 Web 用户界面并调整软件选项

## 支持

在 github 上创建问题。

## 插图

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
