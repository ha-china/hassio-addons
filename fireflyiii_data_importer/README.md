# 家庭助手插件：Fireflyiii 数据导入器

我在业余时间维护这个和其他家庭助手插件：跟踪上游更改、家庭助手更改以及在真实硬件上进行测试需要花费大量时间（以及一些金钱）。我经常使用大约5-10个我的>110个插件，因此我安装了测试机器（并购买了一些我本人不使用的测试服务，如VPN），以便进行故障排除和改进插件。

如果这个插件为您节省了时间或使您的设置变得更简单，我将非常感激您的支持！

[![给我买杯咖啡][捐赠徽章]](https://www.buymeacoffee.com/alexbelgium)
[![通过 PayPal 捐赠][paypal-徽章]](https://www.paypal.com/donate/?hosted_button_id=DZFULJZTP3UQA)

## 插件信息

![版本](https://img.shields.io/badge/dynamic/yaml?label=Version&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Ffireflyiii_data_importer%2Fconfig.yaml)
![入口](https://img.shields.io/badge/dynamic/yaml?label=入口&query=%24.ingress&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Ffireflyiii_data_importer%2Fconfig.yaml)
![架构](https://img.shields.io/badge/dynamic/yaml?color=success&label=架构&query=%24.arch&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Ffireflyiii_data_importer%2Fconfig.yaml)

[![Codacy 徽章](https://app.codacy.com/project/badge/Grade/9c6cf10bdbba45ecb202d7f579b5be0e)](https://www.codacy.com/gh/alexbelgium/hassio-addons/dashboard?utm_source=github.com&utm_medium=referral&utm_content=alexbelgium/hassio-addons&utm_campaign=Badge_Grade)
[![GitHub Super-Linter](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/weekly-supelinter.yaml?label=Lint%20code%20base)](https://github.com/alexbelgium/hassio-addons/actions/workflows/weekly-supelinter.yaml)
[![Builder](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/onpush_builder.yaml?label=Builder)](https://github.com/alexbelgium/hassio-addons/actions/workflows/onpush_builder.yaml)

[捐赠徽章]: https://img.shields.io/badge/Buy%20me%20a%20coffee-%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white
[paypal-徽章]: https://img.shields.io/badge/Donate%20via%20PayPal-0070BA?logo=paypal&style=flat&logoColor=white

_感谢所有星标我的仓库的人！要星标它，请点击下面的图片，然后它就会出现在右上角。谢谢！_

[![Stargazers 仓库名单 for @alexbelgium/hassio-addons](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/.github/stars2.svg)](https://github.com/alexbelgium/hassio-addons/stargazers)

![下载演变](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/fireflyiii_data_importer/stats.png)

## 关于

[Firefly III](https://www.firefly-iii.org) 是一个（自托管的）个人财务管理器。它可以帮助您跟踪您的支出和收入，这样您就可以少花钱多储蓄。数据导入器是为了帮助您将交易导入 Firefly III 而构建的。出于安全和维护原因，它被从 Firefly III 中分离出来。

此插件基于 docker 镜像 https://hub.docker.com/r/fireflyiii/data-importer

## 配置

Webui 可以在 <http://homeassistant:3474> 找到。

### 设置

1. 确保您有一个运行的 Firefly III 实例
2. 配置数据导入器以连接到您的 Firefly III 安装
3. 根据需要设置导入配置和文件

对于完整的设置文档，请参阅：https://docs.firefly-iii.org/data-importer

### 选项

| 选项 | 类型 | 必需 | 描述 |
|--------|------|----------|-------------|
| `FIREFLY_III_URL` | str | 是 | 您 Firefly III 实例的 URL |
| `FIREFLY_III_ACCESS_TOKEN` | str | 是 | Firefly III 的个人访问令牌 |
| `CONFIG_LOCATION` | str | 是 | 配置文件的存储位置 |
| `FIREFLY_III_CLIENT_ID` | str | 否 | OAuth 客户端 ID（替代访问令牌） |
| `NORDIGEN_ID` | str | 否 | Nordigen 客户端 ID 用于银行集成 |
| `NORDIGEN_KEY` | str | 否 | Nordigen 客户端密钥 |
| `SPECTRE_APP_ID` | str | 否 | Spectre/Salt Edge 客户端 ID |
| `SPECTRE_SECRET` | str | 否 | Spectre/Salt Edge 客户端密钥 |
| `AUTO_IMPORT_SECRET` | str | 否 | 自动导入 Webhook 的密钥 |
| `CAN_POST_AUTOIMPORT` | bool | 否 | 允许自动导入功能 |
| `CAN_POST_FILES` | bool | 否 | 允许文件上传 |
| `Updates` | list | 否 | 自动导入计划（每小时、每天、每周） |
| `silent` | bool | 否 | 抑制调试消息 |

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
  - 查看：https://docs.firefly-iii.org/data-importer/help/config/

- **导入文件**：`/addon_configs/xxx-fireflyiii_data_importer/import_files/`
  - 在此处放置 CSV 文件以进行自动导入
  - 查看：https://docs.firefly-iii.org/data-importer/usage/command_line/

### 获取 Firefly III 访问令牌

1. 登录您的 Firefly III 实例
2. 前往选项 → 个人资料 → OAuth → 个人访问令牌
3. 创建一个新的具有适当权限的令牌
4. 复制令牌并在 `FIREFLY_III_ACCESS_TOKEN` 选项中使用它

### 自定义脚本和环境变量

此插件通过 `addon_config` 映射支持自定义脚本和环境变量：

- **自定义脚本**：请参阅 [在插件中运行自定义脚本](https://github.com/alexbelgium/hassio-addons/wiki/Running-custom-scripts-in-Addons)
- **env_vars 选项**：使用插件的 `env_vars` 选项来传递额外的环境变量（使用大写或小写名称）。有关详细信息，请参阅 https://github.com/alexbelgium/hassio-addons/wiki/Add-Environment-variables-to-your-Addon-2。

## 安装

此插件的安装非常简单，与安装任何其他插件没有区别。

1. 将我的插件仓库添加到您的家庭助手实例中（在监督器插件存储的右上角，或单击下面的按钮如果您已配置我的 HA）
   [![打开您的家庭助手实例并显示带有特定仓库 URL 预填充的添加插件仓库对话框](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2Falexbelgium%2Fhassio-addons)
1. 安装此插件。
2. 点击“保存”按钮以存储您的配置。
3. 将插件选项设置为您的偏好设置
4. 启动插件。
5. 检查插件的日志以查看一切是否正常。
6. 打开 WebUI 并调整软件选项

## 支持

在 GitHub 上创建一个问题

## 图解

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
