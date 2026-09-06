# Home Assistant 插件：Firefly III

我在业余时间维护这个和其他 Home Assistant 插件：跟进上游更改、HA 更改以及在真实硬件上进行测试都需要花费大量时间（以及一些金钱）。我经常使用我 >110 个插件中的 5-10 个，所以我安装了测试机器（并购买了一些我不使用的测试服务，如 vpn），以进行故障排除和改进插件。

如果这个插件为您节省了时间或使您的设置更加容易，我将非常感激您的支持！

[![给我买杯咖啡][donation-badge]](https://www.buymeacoffee.com/alexbelgium)
[![通过 PayPal 捐赠][paypal-badge]](https://www.paypal.com/donate/?hosted_button_id=DZFULJZTP3UQA)

## 插件信息

![版本](https://img.shields.io/badge/dynamic/yaml?label=Version&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Ffireflyiii%2Fconfig.yaml)
![入口](https://img.shields.io/badge/dynamic/yaml?label=Ingress&query=%24.ingress&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Ffireflyiii%2Fconfig.yaml)
![架构](https://img.shields.io/badge/dynamic/yaml?color=success&label=Arch&query=%24.arch&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Ffireflyiii%2Fconfig.yaml)

[![Codacy 徽章](https://app.codacy.com/project/badge/Grade/9c6cf10bdbba45ecb202d7f579b5be0e)](https://www.codacy.com/gh/alexbelgium/hassio-addons/dashboard?utm_source=github.com&utm_medium=referral&utm_content=alexbelgium/hassio-addons&utm_campaign=Badge_Grade)
[![GitHub Super-Linter](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/weekly-supelinter.yaml?label=Lint%20code%20base)](https://github.com/alexbelgium/hassio-addons/actions/workflows/weekly-supelinter.yaml)
[![Builder](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/onpush_builder.yaml?label=Builder)](https://github.com/alexbelgium/hassio-addons/actions/workflows/onpush_builder.yaml)

[donation-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee-%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white
[paypal-badge]: https://img.shields.io/badge/Donate%20via%20PayPal-0070BA?logo=paypal&style=flat&logoColor=white

_感谢所有为我仓库加星的人！要加星，请点击下面的图片，然后它就会显示在右上角。谢谢！_

[![Stargazers repo roster for @alexbelgium/hassio-addons](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/.github/stars2.svg)](https://github.com/alexbelgium/hassio-addons/stargazers)

![下载趋势](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/fireflyiii/stats.png)

## 关于

["Firefly III"](https://www.firefly-iii.org) 是一个（自托管）个人财务管理器。它可以帮助您跟踪您的支出和收入，以便您可以花得更少，存得更多。
此插件基于 docker 镜像 https://hub.docker.com/r/fireflyiii/core

## 配置

使用插件的 `env_vars` 选项来传递额外的环境变量（大写或小写名称）。有关详细信息，请参阅 https://github.com/alexbelgium/hassio-addons/wiki/Add-Environment-variables-to-your-Addon-2。

WebUI 可在 <http://homeassistant:PORT> 或通过侧边栏使用入口找到。
除了以下选项之外，所有配置都可以通过应用 WebUI 完成。

**⚠️ 重要提示**：在第一次启动之前更改您的 `APP_KEY`！之后您将无法更改它，除非重置数据库。

### 选项

| 选项 | 类型 | 默认值 | 描述 |
|------|------|---------|------|
| `APP_KEY` | str | `CHANGEME_32_CHARS_EuC5dfn3LAPzeO` | **关键**：32 个字符的加密密钥 - 在第一次运行之前更改！ |
| `CONFIG_LOCATION` | str | `/config/addons_config/fireflyiii/config.yaml` | 额外配置文件的位置 |
| `DB_CONNECTION` | list | `sqlite_internal` | 数据库类型（sqlite_internal/mariadb_addon/mysql/pgsql） |
| `DB_HOST` | str | | 数据库主机（对于外部数据库） |
| `DB_PORT` | str | | 数据库端口（对于外部数据库） |
| `DB_DATABASE` | str | | 数据库名称（对于 mariadb_addon 默认为 `firefly`） |
| `DB_USERNAME` | str | | 数据库用户名（如果设置，将覆盖 MariaDB 插件服务发现） |
| `DB_PASSWORD` | str | | 数据库密码（如果设置，将覆盖 MariaDB 插件服务发现） |
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

可以使用 config.yaml 文件配置额外的环境变量。请参阅：
- [添加环境变量指南](https://github.com/alexbelgium/hassio-addons/wiki/Add-Environment-variables-to-your-Addon)
- [完整的 Firefly III 环境变量](https://raw.githubusercontent.com/firefly-iii/firefly-iii/main/.env.example)

## 安装

此插件的安装非常简单，与安装任何其他插件没有区别。

1. 将我的插件仓库添加到您的 Home Assistant 实例中（在 supervisor 插件存储的右上角，或点击下面的按钮如果您已配置我的 HA）
   [![打开您的 Home Assistant 实例并显示具有特定仓库 URL 预填充的添加插件仓库对话框](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2Falexbelgium%2Fhassio-addons)
1. 安装此插件。
1. 点击“保存”按钮以存储您的配置。
1. 将插件选项设置为您的偏好。
1. 启动插件。
1. 检查插件的日志以查看一切是否顺利。
1. 打开 WebUI 并调整软件选项

## 支持

在 github 上创建一个问题

## 图解

![图解](https://raw.githubusercontent.com/firefly-iii/firefly-iii/develop/.github/assets/img/imac-complete.png)

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
