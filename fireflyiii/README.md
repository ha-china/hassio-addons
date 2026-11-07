# Home assistant 附加组件：fireflyiii

我利用业余时间维护此 Home Assistant 附加组件及其他组件：追踪上游更新、适配 Home Assistant 变更以及在真实硬件上进行测试需要大量时间（和一些金钱）。我经常使用超过 5-10 个 >110 的附加组件，因此我安装测试设备（并购买一些个人测试服务，如 vpn），即使我自己不使用，也用于故障排查和改进附加组件。

如果这个附加组件能为您节省时间或简化您的设置，我将不胜感激您的支持！

[![Buy me a coffee][donation-badge]](https://www.buymeacoffee.com/alexbelgium)
[![Donate via PayPal][paypal-badge]](https://www.paypal.com/donate/?hosted_button_id=DZFULJZTP3UQA)

## 附加组件信息

![版本](https://img.shields.io/badge/dynamic/yaml?label=Version&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Ffireflyiii%2Fconfig.yaml)
![入口点](https://img.shields.io/badge/dynamic/yaml?label=Ingress&query=%24.ingress&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Ffireflyiii%2Fconfig.yaml)
![架构](https://img.shields.io/badge/dynamic/yaml?color=success&label=Arch&query=%24.arch&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Ffireflyiii%2Fconfig.yaml)

[![Codacy 徽章](https://app.codacy.com/project/badge/Grade/9c6cf10bdbba45ecb202d7f579b5be0e)](https://www.codacy.com/gh/alexbelgium/hassio-addons/dashboard?utm_source=github.com&utm_medium=referral&utm_content=alexbelgium/hassio-addons&utm_campaign=Badge_Grade)
[![GitHub Super-Lint 检查](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/weekly-supelinter.yaml?label=Lint%20code%20base)](https://github.com/alexbelgium/hassio-addons/actions/workflows/weekly-supelinter.yaml)
[![Builder](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/onpush_builder.yaml?label=Builder)](https://github.com/alexbelgium/hassio-addons/actions/workflows/onpush_builder.yaml)

[donation-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee-%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white
[paypal-badge]: https://img.shields.io/badge/Donate%20via%20PayPal-0070BA?logo=paypal&style=flat&logoColor=white

_谢谢所有给我项目加上星标的人！在下方图片上点击给它加上星标，它将显示在右上角。谢谢！_

[![Stargazers 项目成员清单 @alexbelgium/hassio-addons](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/.github/stars2.svg)](https://github.com/alexbelgium/hassio-addons/stargazers)

![下载量增长趋势](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/fireflyiii/stats.png)

## 关于

["Firefly III"](https://www.firefly-iii.org) 是一个用于管理个人财务的（自托管）工具。它可以帮助您跟踪支出和收入，从而减少开支，增加储蓄。
本附加组件基于 Docker 镜像运行，镜像地址为：https://hub.docker.com/r/fireflyiii/core

## 配置

使用附加组件的 `env_vars` 选项来传递额外的环境变量（名称可为大写或小写）。详细信息请访问 https://github.com/alexbelgium/hassio-addons/wiki/Add-Environment-variables-to-your-Addon-2。

Webui 可在 <http://homeassistant:PORT> 访问，或通过左侧菜单使用 Ingress 访问。
配置可以通过应用程序网面 UI 完成，除了以下选项。

**⚠️ 重要提示**：首次启动前必须修改您的 `APP_KEY`！之后无法更改该值，除非重置数据库。

### 选项

| 选项 | 类型 | 默认值 | 描述 |
|------|------|--------|------|
| `APP_KEY` | str | `CHANGEME_32_CHARS_EuC5dfn3LAPzeO` | **关键**：32 字符加密密钥 - 首次运行前必须修改！ |
| `CONFIG_LOCATION` | str | `/config/addons_config/fireflyiii/config.yaml` | 附加配置文件位置 |
| `DB_CONNECTION` | list | `sqlite_internal` | 数据库类型（sqlite_internal/mariadb_addon/mysql/pgsql） |
| `DB_HOST` | str | | 数据库主机（用于外部数据库） |
| `DB_PORT` | str | | 数据库端口（用于外部数据库） |
| `DB_DATABASE` | str | | 数据库名称（对于 mariadb_addon 默认为 `firefly`） |
| `DB_USERNAME` | str | | 数据库用户名（若设置，将覆盖 mariadb 附加组件的服务发现） |
| `DB_PASSWORD` | str | | 数据库密码（若设置，将覆盖 mariadb 附加组件的服务发现） |
| `Updates` | list | | 自动更新时间表（每小时/每天/每周） |
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

此附加组件的安装非常直接，与安装任何其他附加组件没有区别。

1. 将我的附加组件库添加到您的 Home Assistant 实例中（在 supervisor 附加组件商店右上角，或如果您已配置我的 HA 则点击下方按钮）
   [![打开您的 Home Assistant 实例并显示预填充特定库 URL 的添加附加组件库对话框。](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2Falexbelgium%2Fhassio-addons)
1. 安装此附加组件。
1. 点击 `Save` 按钮以保存您的配置。
1. 将附加组件选项设置为您的偏好
1. 启动附加组件。
1. 检查附加组件日志以查看是否一切正常。
1. 打开网面 UI 并调整软件选项

## 支持

在 github 上创建问题报告

## 插图

![插图](https://raw.githubusercontent.com/firefly-iii/firefly-iii/develop/.github/assets/img/imac-complete.png)

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
