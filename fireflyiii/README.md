# Home Assistant 附加组件：fireflyiii

我在业余时间维护这个及其他 Home Assistant 附加组件：跟踪上游更改、适配 HA 更改以及在真实硬件上进行测试需要花费大量时间（以及一些金钱）。我使用的附加组件约有 5-10 个，其中我会定期安装测试机器（甚至购买一些我自己不用但用于测试的服务，例如 VPN），以便诊断和改进这些附加组件。

如果这个附加组件能为您节省时间或让您的设置更简单，我将不胜感激！

[![Buy me a coffee][donation-badge]](https://www.buymeacoffee.com/alexbelgium)
[![Donate via PayPal][paypal-badge]](https://www.paypal.com/donate/?hosted_button_id=DZFULJZTP3UQA)

## 附加组件信息

![版本](https://img.shields.io/badge/dynamic/yaml?label=版本&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Ffireflyiii%2Fconfig.yaml)
![入口](https://img.shields.io/badge/dynamic/yaml?label=入口&query=%24.ingress&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Ffireflyiii%2Fconfig.yaml)
![架构](https://img.shields.io/badge/dynamic/yaml?color=success&label=架构&query=%24.arch&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Ffireflyiii%2Fconfig.yaml)

[![Codacy 徽章](https://app.codacy.com/project/badge/Grade/9c6cf10bdbba45ecb202d7f579b5be0e)](https://www.codacy.com/gh/alexbelgium/hassio-addons/dashboard?utm_source=github.com&utm_medium=referral&utm_content=alexbelgium/hassio-addons&utm_campaign=Badge_Grade)
[![GitHub Super-Linter](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/weekly-supelinter.yaml?label=代码规范检查)](https://github.com/alexbelgium/hassio-addons/actions/workflows/weekly-supelinter.yaml)
[![构建者](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/onpush_builder.yaml?label=构建)](https://github.com/alexbelgium/hassio-addons/actions/workflows/onpush_builder.yaml)

[donation-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee-%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white
[paypal-badge]: https://img.shields.io/badge/Donate%20via%20PayPal-0070BA?logo=paypal&style=flat&logoColor=white

_感谢所有人给我的仓库点了星标！点击右上角的图片来星标它，它就会显示在右上角。谢谢！_

[![@alexbelgium/hassio-addons 仓库星等排行榜](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/.github/stars2.svg)](https://github.com/alexbelgium/hassio-addons/stargazers)

![下载趋势](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/fireflyiii/stats.png)

## 关于

["Firefly III"](https://www.firefly-iii.org) 是一个（可自主托管的）个人财务管理系统。它能帮助您跟踪支出和收入，从而节约开支，增加储蓄。
本附加组件基于 Docker 镜像：https://hub.docker.com/r/fireflyiii/core

## 配置

使用附加组件的 `env_vars` 选项传递额外的环境变量（名称不区分大小写）。请参阅 https://github.com/alexbelgium/hassio-addons/wiki/Add-Environment-variables-to-your-Addon-2 了解详情。

Web 界面可通过 <http://homeassistant:PORT> 访问，或通过侧边栏使用入口访问。
配置可通过应用程序 Web 界面进行，除了以下选项外：

**⚠️ 重要提示**：在首次启动前更改您的 `APP_KEY`！之后您将无法在不重置数据库的情况下更改它。

### 选项

| 选项 | 类型 | 默认值 | 描述 |
|--------|------|---------|-------------|
| `APP_KEY` | str | `CHANGEME_32_CHARS_EuC5dfn3LAPzeO` | **关键**：32 位加密密钥 - 首次运行前务必更改！ |
| `CONFIG_LOCATION` | str | `/config/addons_config/fireflyiii/config.yaml` | 额外配置文件的位置 |
| `DB_CONNECTION` | list | `sqlite_internal` | 数据库类型 (sqlite_internal/mariadb_addon/mysql/pgsql) |
| `DB_HOST` | str | | 数据库主机（用于外部数据库） |
| `DB_PORT` | str | | 数据库端口（用于外部数据库） |
| `DB_DATABASE` | str | | 数据库名称（mariadb_addon 的默认值为 `firefly`） |
| `DB_USERNAME` | str | | 数据库用户名（覆盖设置的 MariaDB 附加组件服务发现） |
| `DB_PASSWORD` | str | | 数据库密码（覆盖设置的 MariaDB 附加组件服务发现） |
| `Updates` | list | | 自动更新计划（每小时/每天/每周） |
| `silent` | bool | `true` | 静默模式 - 设置为 false 以获取调试信息 |

### 示例配置

```yaml
APP_KEY: "SomeRandomStringOf32CharsExactly"
CONFIG_LOCATION: "/config/addons_config/fireflyiii/config.yaml"
DB_CONNECTION: "mariadb_addon"
DB_HOST: "core-mariadb"
DB_PORT: "3306"
DB_DATABASE: "firefly"
DB_USERNAME: "firefly"
DB_PASSWORD: "secure_password"
Updates: "weekly"
silent: false
```

### 高级配置

可以使用 `config.yaml` 文件配置额外的环境变量。请参阅：
- [添加环境变量指南](https://github.com/alexbelgium/hassio-addons/wiki/Add-Environment-variables-to-your-Addon)
- [Firefly III 完整环境变量列表](https://raw.githubusercontent.com/firefly-iii/firefly-iii/main/.env.example)

## 安全性

`APP_KEY` 选项的默认值为 `CHANGEME_32_CHARS_EuC5dfn3LAPzeO`。该密钥用于加密敏感数据并签名会话，默认值是公开的。在存储真实数据之前，请设置您自己的 32 位密钥，因为稍后更改会导致已加密的数据无法读取。当默认值仍未设置时，附加组件会在启动日志中打印警告。

## 安装

安装此附加组件非常简单，与其他附加组件的安装方式无异。

1. 将我的附加组件库添加到 Home Assistant 实例中（在 Supervisor 附加组件商店右上角，或如果您已配置了我的 HA，则点击下方按钮）
   [![打开您的 Home Assistant 实例并显示带有预填充特定仓库 URL 的添加附加组件库对话框](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2Falexbelgium%2Fhassio-addons)
1. 安装此附加组件。
1. 点击 `保存` 按钮以保存您的配置。
1. 设置附加组件选项为您的偏好设置
1. 启动附加组件。
1. 检查附加组件的日志以查看一切是否正常。
1. 打开 Web 界面并调整软件选项

## 支持

在 GitHub 上创建问题。

## 示意图

![示意图](https://raw.githubusercontent.com/firefly-iii/firefly-iii/develop/.github/assets/img/imac-complete.png)

[repository]: https://github.com/alexbelgium/hassio-addons

---

**⚠️ This resource is intended to help Chinese Home Assistant users more easily install excellent add-ons. If you are not a Chinese user, please read repository readme first**

**⚠️ 这个资源用来帮助中国Home Assistant用户更容易地安装优秀的插件。如果您不是中国用户，请先阅读仓库的README，以下为收集者（汉化，加速）信息，非原作者信息**

---

## 📱 关注我

扫描下面二维码，关注我。有需要可以随时给我留言：

<img src="https://raw.gitcode.com/ha-china/ha-apps/raw/main/WeChat_QRCode.png" width="50%" /> 📲

## ☕ 赞助支持

如果您觉得我花费大量时间维护这个库对您有帮助，欢迎请我喝杯奶茶，您的支持将是我持续改进的动力！

<div style="display: flex; justify-content: space-between;">
  <img src="https://raw.gitcode.com/ha-china/ha-apps/raw/main/1_readme/Ali_Pay.jpg" height="350px" />
  <img src="https://raw.gitcode.com/ha-china/ha-apps/raw/main/1_readme/WeChat_Pay.jpg" height="350px" />
</div> 💖

感谢您的支持与鼓励！
