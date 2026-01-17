# Home assistant add-on: Fireflyiii data importer

我利用业余时间维护这个Home Assistant插件以及其他插件：跟上上游的变更、Home Assistant的变更以及在真实硬件上进行测试都需要大量时间（并且需要一些资金）。我大约使用我超过110个插件中的5-10个，因此我安装了一些用于测试的机器（并且购买了一些我自己不使用的测试服务，如VPN），以便进行插件的故障排除和改进。

如果这个插件节省了您的时间或使您的设置更简单，我将非常感谢您的支持！

[![Buy me a coffee][donation-badge]](https://www.buymeacoffee.com/alexbelgium)
[![Donate via PayPal][paypal-badge]](https://www.paypal.com/donate/?hosted_button_id=DZFULJZTP3UQA)

## 插件信息

![版本](https://img.shields.io/badge/dynamic/yaml?label=版本&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Ffireflyiii_data_importer%2Fconfig.yaml)
![Ingress](https://img.shields.io/badge/dynamic/yaml?label=Ingress&query=%24.ingress&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Ffireflyiii_data_importer%2Fconfig.yaml)
![架构](https://img.shields.io/badge/dynamic/yaml?color=success&label=架构&query=%24.arch&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Ffireflyiii_data_importer%2Fconfig.yaml)

[![Codacy Badge](https://app.codacy.com/project/badge/Grade/9c6cf10bdbba45ecb202d7f579b5be0e)](https://www.codacy.com/gh/alexbelgium/hassio-addons/dashboard?utm_source=github.com&utm_medium=referral&utm_content=alexbelgium/hassio-addons&utm_campaign=Badge_Grade)
[![GitHub Super-Linter](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/weekly-supelinter.yaml?label=Lint%20code%20base)](https://github.com/alexbelgium/hassio-addons/actions/workflows/weekly-supelinter.yaml)
[![构建者](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/onpush_builder.yaml?label=构建者)](https://github.com/alexbelgium/hassio-addons/actions/workflows/onpush_builder.yaml)

[donation-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee-%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white
[paypal-badge]: https://img.shields.io/badge/Donate%20via%20PayPal-0070BA?logo=paypal&style=flat&logoColor=white

_感谢所有星标我的仓库的人！要星标它，请点击下面的图片，它将出现在右上角。谢谢！_

[![Stargazers repo roster for @alexbelgium/hassio-addons](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/.github/stars2.svg)](https://github.com/alexbelgium/hassio-addons/stargazers)

![下载趋势](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/fireflyiii_data_importer/stats.png)

## 关于

["Firefly III"](https://www.firefly-iii.org) 是一个（自托管）的个人财务管理工具。它可以帮助您跟踪支出和收入，以便您少花钱多储蓄。数据导入器旨在帮助您将交易导入Firefly III。出于安全和维护的原因，它与Firefly III是分开的。

这个插件基于Docker镜像 https://hub.docker.com/r/fireflyiii/data-importer

## 配置

Web UI位于 <http://homeassistant:3474>。

### 设置

1. 确保您有一个正在运行的Firefly III实例
2. 配置数据导入器以连接到您的Firefly III安装
3. 根据需要设置导入配置和文件

有关完整的设置文档，请参阅：https://docs.firefly-iii.org/data-importer

### 选项

| 选项 | 类型 | 必填 | 描述 |
|------|------|------|------|
| `FIREFLY_III_URL` | 字符串 | 是 | 您的Firefly III实例的URL |
| `FIREFLY_III_ACCESS_TOKEN` | 字符串 | 是 | 来自Firefly III的个人访问令牌 |
| `CONFIG_LOCATION` | 字符串 | 是 | 配置文件的位置 |
| `FIREFLY_III_CLIENT_ID` | 字符串 | 否 | OAuth客户端ID（访问令牌的替代方案） |
| `NORDIGEN_ID` | 字符串 | 否 | 用于银行集成的Nordigen客户端ID |
| `NORDIGEN_KEY` | 字符串 | 否 | Nordigen客户端密钥 |
| `SPECTRE_APP_ID` | 字符串 | 否 | Spectre/Salt Edge客户端ID |
| `SPECTRE_SECRET` | 字符串 | 否 | Spectre/Salt Edge客户端密钥 |
| `AUTO_IMPORT_SECRET` | 字符串 | 否 | 自动导入webhook的密钥 |
| `CAN_POST_AUTOIMPORT` | 布尔值 | 否 | 允许自动导入功能 |
| `CAN_POST_FILES` | 布尔值 | 否 | 允许文件上传 |
| `更新` | 列表 | 否 | 自动导入计划（每小时、每天、每周） |
| `silent` | 布尔值 | 否 | 抑制调试消息 |

### 示例配置

```yaml
FIREFLY_III_URL: "http://homeassistant:8082"
FIREFLY_III_ACCESS_TOKEN: "your-access-token-here"
CONFIG_LOCATION: "/config"
NORDIGEN_ID: "your-nordigen-id"
NORDIGEN_KEY: "your-nordigen-key"
更新: ["daily"]
silent: false
```

### 文件位置

- **配置文件**：`/addon_configs/xxx-fireflyiii_data_importer/configurations/`
  - 在这里存储导入配置文件
  - 查看：https://docs.firefly-iii.org/data-importer/help/config/

- **导入文件**：`/addon_configs/xxx-fireflyiii_data_importer/import_files/`
  - 在这里放置CSV文件以进行自动导入
  - 查看：https://docs.firefly-iii.org/data-importer/usage/command_line/

### 获取Firefly III访问令牌

1. 登录到您的Firefly III实例
2. 转到选项 → 个人资料 → OAuth → 个人访问令牌
3. 创建一个新的具有适当权限的令牌
4. 复制令牌并在 `FIREFLY_III_ACCESS_TOKEN` 选项中使用它

### 自定义脚本和环境变量

这个插件通过 `addon_config` 映射支持自定义脚本和环境变量：

- **自定义脚本**：查看 [在插件中运行自定义脚本](https://github.com/alexbelgium/hassio-addons/wiki/Running-custom-scripts-in-Addons)
- **env_vars选项**：使用插件的 `env_vars` 选项传递额外的环境变量（大写或小写名称）。查看 https://github.com/alexbelgium/hassio-addons/wiki/Add-Environment-variables-to-your-Addon-2 获取详细信息。

## 安装

这个插件的安装非常简单，与其他插件的安装方式相同。

1. 将我的插件仓库添加到您的Home Assistant实例（在supervisor插件商店的右上角，或者如果您已经配置了我的HA，请点击下面的按钮）
   [![打开您的Home Assistant实例并显示添加插件仓库对话框，其中预填了特定的仓库URL。](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2Falexbelgium%2Fhassio-addons)
1. 安装这个插件。
1. 点击 `保存` 按钮以保存您的配置。
1. 设置插件的选项以符合您的偏好
1. 启动插件。
1. 检查插件的日志以查看是否一切正常。
1. 打开Web UI并调整软件选项

## 支持

在github上创建问题

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
