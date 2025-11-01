# Home assistant add-on: fireflyiii

[![Donate][donation-badge]](https://www.buymeacoffee.com/alexbelgium)
[![Donate][paypal-badge]](https://www.paypal.com/donate/?hosted_button_id=DZFULJZTP3UQA)

![Version](https://img.shields.io/badge/dynamic/yaml?label=版本&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Ffireflyiii%2Fconfig.yaml)
![Ingress](https://img.shields.io/badge/dynamic/yaml?label=Ingress&query=%24.ingress&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Ffireflyiii%2Fconfig.yaml)
![Arch](https://img.shields.io/badge/dynamic/yaml?color=success&label=Arch&query=%24.arch&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Ffireflyiii%2Fconfig.yaml)

[![Codacy Badge](https://app.codacy.com/project/badge/Grade/9c6cf10bdbba45ecb202d7f579b5be0e)](https://www.codacy.com/gh/alexbelgium/hassio-addons/dashboard?utm_source=github.com&utm_medium=referral&utm_content=alexbelgium/hassio-addons&utm_campaign=Badge_Grade)
[![GitHub Super-Linter](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/weekly-supelinter.yaml?label=Lint%20code%20base)](https://github.com/alexbelgium/hassio-addons/actions/workflows/weekly-supelinter.yaml)
[![Builder](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/onpush_builder.yaml?label=Builder)](https://github.com/alexbelgium/hassio-addons/actions/workflows/onpush_builder.yaml)

[donation-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee%20(no%20paypal)-%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white
[paypal-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee%20with%20Paypal-0070BA?logo=paypal&style=flat&logoColor=white

_感谢所有给我的仓库星标的人！要星标它，请点击下面的图片，它将在右上角。谢谢！_

[![Stargazers repo roster for @alexbelgium/hassio-addons](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/.github/stars2.svg)](https://github.com/alexbelgium/hassio-addons/stargazers)

![下载量趋势](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/fireflyiii/stats.png)

## 关于

["Firefly III"](https://www.firefly-iii.org) 是一个（自托管）的个人财务管理工具。它可以帮助你跟踪你的支出和收入，这样你就可以少花钱多存钱。
这个插件基于 Docker 镜像 https://hub.docker.com/r/fireflyiii/core

## 配置

Webui 可以在 <http://homeassistant:PORT> 或通过 Ingress 侧边栏访问。
配置可以通过应用 WebUI 进行，以下选项除外。

**⚠️ 重要提示**： 在首次启动之前更改你的 `APP_KEY`！你将无法在不重置数据库的情况下更改它。

### 选项

| 选项 | 类型 | 默认值 | 描述 |
|------|------|--------|------|
| `APP_KEY` | 字符串 | `CHANGEME_32_CHARS_EuC5dfn3LAPzeO` | **关键**： 32 字符加密密钥 - 首次运行前更改！ |
| `CONFIG_LOCATION` | 字符串 | `/config/addons_config/fireflyiii/config.yaml` | 附加配置文件的位置 |
| `DB_CONNECTION` | 列表 | `sqlite_internal` | 数据库类型（sqlite_internal/mariadb_addon/mysql/pgsql） |
| `DB_HOST` | 字符串 | | 数据库主机（用于外部数据库） |
| `DB_PORT` | 字符串 | | 数据库端口（用于外部数据库） |
| `DB_DATABASE` | 字符串 | | 数据库名称（用于外部数据库） |
| `DB_USERNAME` | 字符串 | | 数据库用户名（用于外部数据库） |
| `DB_PASSWORD` | 字符串 | | 数据库密码（用于外部数据库） |
| `Updates` | 列表 | | 自动更新计划（hourly/daily/weekly） |
| `silent` | 布尔值 | `true` | 静默模式 - 设置为 false 以获取调试信息 |

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

可以使用 config.yaml 文件配置额外的环境变量。查看：
- [添加环境变量指南](https://github.com/alexbelgium/hassio-addons/wiki/Add-Environment-variables-to-your-Addon)
- [完整的 Firefly III 环境变量](https://raw.githubusercontent.com/firefly-iii/firefly-iii/main/.env.example)

## 安装

这个插件的安装非常简单，与安装任何其他插件没有什么不同。

1. 将我的插件仓库添加到你的 Home Assistant 实例中（在 Supervisor 插件商店的右上角，或者如果你已经配置了我的 HA，点击下面的按钮）
   [![打开你的 Home Assistant 实例并显示带有特定仓库 URL 预填的添加插件仓库对话框。](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2Falexbelgium%2Fhassio-addons)
1. 安装这个插件。
1. 点击 `保存` 按钮以保存你的配置。
1. 将插件选项设置为你的偏好。
1. 启动插件。
1. 检查插件的日志，看看是否一切正常。
1. 打开 WebUI 并调整软件选项

## 支持

在 github 上创建问题

## 插图

![插图](https://raw.githubusercontent.com/firefly-iii/firefly-iii/develop/.github/assets/img/imac-complete.png)

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
