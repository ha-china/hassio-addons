# 家庭助理附加组件：Fireflyiii 数据导入器

我在业余时间维护这个以及其他家庭助理附加组件：跟进上游变化、家庭助理变化以及在真实硬件上进行测试需要花费很多时间（还有一些钱）。我经常使用我超过110个附加组件中的5-10个，所以我安装了测试机器（并购买了如vpn等一些我不使用的测试服务），以调试和改进附加组件。

如果这个附加组件为您节省了时间或使您的设置变得更简单，我将非常感谢您的支持！

[![请给我买杯咖啡][donation-badge]](https://www.buymeacoffee.com/alexbelgium)
[![通过 PayPal 捐赠][paypal-badge]](https://www.paypal.com/donate/?hosted_button_id=DZFULJZTP3UQA)

## 附加组件信息

![版本](https://img.shields.io/badge/dynamic/yaml?label=版本&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Ffireflyiii_data_importer%2Fconfig.yaml)
![入口](https://img.shields.io/badge/dynamic/yaml?label=入口&query=%24.ingress&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Ffireflyiii_data_importer%2Fconfig.yaml)
![架构](https://img.shields.io/badge/dynamic/yaml?color=success&label=架构&query=%24.arch&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Ffireflyiii_data_importer%2Fconfig.yaml)

[![Codacy 徽章](https://app.codacy.com/project/badge/Grade/9c6cf10bdbba45ecb202d7f579b5be0e)](https://www.codacy.com/gh/alexbelgium/hassio-addons/dashboard?utm_source=github.com&utm_medium=referral&utm_content=alexbelgium/hassio-addons&utm_campaign=Badge_Grade)
[![GitHub Super-Linter](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/weekly-supelinter.yaml?label=Lint%20code%20base)](https://github.com/alexbelgium/hassio-addons/actions/workflows/weekly-supelinter.yaml)
[![Builder](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/onpush_builder.yaml?label=Builder)](https://github.com/alexbelgium/hassio-addons/actions/workflows/onpush_builder.yaml)

[donation-badge]: https://img.shields.io/badge/请给我买杯咖啡-%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white
[paypal-badge]: https://img.shields.io/badge/通过%20PayPal%20捐赠-%230070BA?logo=paypal&style=flat&logoColor=white

_感谢每一位为我仓库点星的人！要星标它，请点击下面的图片，然后它就会出现在右上角。谢谢！_

[![@alexbelgium/hassio-addons 的星标者仓库](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/.github/stars2.svg)](https://github.com/alexbelgium/hassio-addons/stargazers)

![下载趋势](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/fireflyiii_data_importer/stats.png)

## 关于

[Firefly III](https://www.firefly-iii.org) 是一个（自托管）个人财务管理器。它可以帮助您跟踪您的支出和收入，让您少花钱，多存钱。数据导入器是为了帮助您将交易导入 Firefly III 而构建的。出于安全和维护的原因，它与 Firefly III 分开。

此附加组件基于 docker image https://hub.docker.com/r/fireflyiii/data-importer

## 配置

Webui 可以在 <http://homeassistant:3474> 找到。

### 安装

1. 确保您有一个运行的 Firefly III 实例
2. 配置数据导入器以连接到您的 Firefly III 安装
3. 根据需要设置导入配置和文件

有关完整的安装文档，请参阅：https://docs.firefly-iii.org/data-importer

### 选项

| 选项 | 类型 | 必需 | 描述 |
|--------|------|----------|-------------|
| `FIREFLY_III_URL` | str | 是 | 到您的 Firefly III 实例的 URL |
| `FIREFLY_III_ACCESS_TOKEN` | str | 是 | Firefly III 的个人访问令牌 |
| `CONFIG_LOCATION` | str | 是 | 配置文件的存储位置 |
| `FIREFLY_III_CLIENT_ID` | str | 否 | OAuth 客户端 ID（替代访问令牌） |
| `NORDIGEN_ID` | str | 否 | 用于银行集成的 Nordigen 客户端 ID |
| `NORDIGEN_KEY` | str | 否 | Nordigen 客户端密钥 |
| `SPECTRE_APP_ID` | str | 否 | Spectre/Salt Edge 客户端 ID |
| `SPECTRE_SECRET` | str | 否 | Spectre/Salt Edge 客户端密钥 |
| `AUTO_IMPORT_SECRET` | str | 否 | 自动导入 webhook 的密钥 |
| `CAN_POST_AUTOIMPORT` | bool | 否 | 允许自动导入功能 |
| `CAN_POST_FILES` | bool | 否 | 允许文件上传 |
| `Updates` | list | 否 | 自动导入计划（每小时、每天、每周） |
| `silent` | bool | 否 | 抑制调试信息 |

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

- **配置文件**：`/addon_configs/xxx-fireflyiii_data_importer/configurations/`
  - 在此处存储导入配置文件
  - 见：https://docs.firefly-iii.org/data-importer/help/config/

- **导入文件**：`/addon_configs/xxx-fireflyiii_data_importer/import_files/`
  - 将 CSV 文件放在此处以自动导入
  - 见：https://docs.firefly-iii.org/data-importer/usage/command_line/

### 获取 Firefly III 访问令牌

1. 登录到您的 Firefly III 实例
2. 前往选项 → 个人资料 → OAuth → 个人访问令牌
3. 创建一个新的令牌，并授予适当的权限
4. 复制令牌，并将其用于 `FIREFLY_III_ACCESS_TOKEN` 选项

### 自定义脚本和环境变量

此附加组件支持通过 `addon_config` 映射来使用自定义脚本和环境变量：

- **自定义脚本**：见 [在附加组件中运行自定义脚本](https://github.com/alexbelgium/hassio-addons/wiki/Running-custom-scripts-in-Addons)
- **env_vars 选项**：使用附加组件 `env_vars` 选项来传递额外的环境变量（名称为大写或小写）。见 https://github.com/alexbelgium/hassio-addons/wiki/Add-Environment-variables-to-your-Addon-2 了解详情。

## 安装

此附加组件的安装非常简单，与安装任何其他附加组件没有区别。

1. 将我的附加组件仓库添加到您的家庭助理实例中（在管理员附加组件商店右上角，或如果您已配置了我的 HA，请点击下面的按钮）
   [![打开您的家庭助理实例并显示具有特定仓库 URL 预填充的添加附加组件仓库对话框](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2Falexbelgium%2Fhassio-addons)
1. 安装此附加组件。
2. 点击 `保存` 按钮以保存您的配置。
3. 将附加组件选项设置为您的首选设置
4. 启动附加组件。
5. 检查附加组件的日志，以查看一切是否顺利。
6. 打开 WebUI 并调整软件选项

## 支持

在 GitHub 上创建一个问题

## 图解

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
