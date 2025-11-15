# Home assistant add-on: Monica

[![Donate][donation-badge]](https://www.buymeacoffee.com/alexbelgium)
[![Donate][paypal-badge]](https://www.paypal.com/donate/?hosted_button_id=DZFULJZTP3UQA)

![Version](https://img.shields.io/badge/dynamic/yaml?label=版本&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fmonica%2Fconfig.yaml)
![Ingress](https://img.shields.io/badge/dynamic/yaml?label=Ingress&query=%24.ingress&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fmonica%2Fconfig.yaml)
![Arch](https://img.shields.io/badge/dynamic/yaml?color=success&label=Arch&query=%24.arch&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fmonica%2Fconfig.yaml)

[![Codacy Badge](https://app.codacy.com/project/badge/Grade/9c6cf10bdbba45ecb202d7f579b5be0e)](https://www.codacy.com/gh/alexbelgium/hassio-addons/dashboard?utm_source=github.com&utm_medium=referral&utm_content=alexbelgium/hassio-addons&utm_campaign=Badge_Grade)
[![GitHub Super-Linter](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/weekly-supelinter.yaml?label=Lint%20code%20base)](https://github.com/alexbelgium/hassio-addons/actions/workflows/weekly-supelinter.yaml)
[![Builder](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/onpush_builder.yaml?label=Builder)](https://github.com/alexbelgium/hassio-addons/actions/workflows/onpush_builder.yaml)

[donation-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee%20(no%20paypal)-%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white
[paypal-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee%20with%20Paypal-0070BA?logo=paypal&style=flat&logoColor=white

_感谢大家给我的仓库点赞！要点赞请点击下面的图片，然后它会在右上角显示。谢谢！_

[![Stargazers repo roster for @alexbelgium/hassio-addons](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/.github/stars2.svg)](https://github.com/alexbelgium/hassio-addons/stargazers)

![下载趋势](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/monica/stats.png)

## 关于

[Monica](https://www.monicahq.com/) 是一个个人关系管理（PRM）工具，帮助你组织社交生活并跟踪与朋友、家人和同事的关系。它就像一个CRM，但用于你的个人生活。

主要功能：
- 跟踪对话、活动和重要日期
- 存储联系人信息和关系详情
- 设置生日、周年纪念日和跟进提醒
- 记录赠送和收到的礼物
- 跟踪债务和人情
- 组织关于人们的笔记和回忆
- 日记功能
- 礼物建议跟踪
- 多种数据库选项（SQLite、MariaDB、MySQL）

这个插件基于官方的 [Monica](https://github.com/monicahq/monica) 应用程序。

## 配置

Webui 可以在 `<你的IP>:8181` 找到。

### 选项

| 选项 | 类型 | 默认 | 描述 |
|------|------|------|------|
| `database` | 列表 | `sqlite` | 数据库类型 (sqlite/MariaDB_addon/Mysql_external) |
| `APP_KEY` | 字符串 | | 应用加密密钥 (如果为空则自动生成) |
| `DB_DATABASE` | 字符串 | | 数据库名称 (用于外部 MySQL/MariaDB) |
| `DB_HOST` | 字符串 | | 数据库主机名 (用于外部 MySQL/MariaDB) |
| `DB_USERNAME` | 字符串 | | 数据库用户名 (用于外部 MySQL/MariaDB) |
| `DB_PASSWORD` | 字符串 | | 数据库密码 (用于外部 MySQL/MariaDB) |
| `DB_PORT` | 整数 | | 数据库端口 (用于外部 MySQL/MariaDB) |
| `MAIL_MAILER` | 字符串 | `log` | 邮件驱动 (smtp/log/sendmail) |
| `MAIL_HOST` | 字符串 | | SMTP 服务器主机名 |
| `MAIL_PORT` | 字符串 | | SMTP 服务器端口 |
| `MAIL_USERNAME` | 字符串 | | SMTP 用户名 |
| `MAIL_PASSWORD` | 字符串 | | SMTP 密码 |
| `MAIL_ENCRYPTION` | 字符串 | | SMTP 加密 (tls/ssl) |
| `MAIL_FROM_ADDRESS` | 字符串 | | 发件人邮箱地址 |
| `MAIL_FROM_NAME` | 字符串 | | 发件人邮箱名称 |

### 示例配置

```yaml
database: "sqlite"
APP_KEY: ""  # 将自动生成
MAIL_MAILER: "smtp"
MAIL_HOST: "smtp.gmail.com"
MAIL_PORT: "587"
MAIL_USERNAME: "your-email@gmail.com"
MAIL_PASSWORD: "your-app-password"
MAIL_ENCRYPTION: "tls"
MAIL_FROM_ADDRESS: "your-email@gmail.com"
MAIL_FROM_NAME: "Monica"
```

### 数据库配置

**SQLite (默认):**
- 无需额外配置
- 数据存储在插件目录中
- 适用于单用户设置

**MariaDB 插件:**
- 将 `database` 设置为 `MariaDB_addon`
- 需要安装并运行 MariaDB 插件
- 插件将自动配置数据库连接

**外部 MySQL/MariaDB:**
- 将 `database` 设置为 `Mysql_external`
- 使用所有 `DB_*` 选项配置你的数据库详情

### 邮件配置

配置 SMTP 设置以启用：
- 密码重置邮件
- 邀请邮件
- 通知邮件
- 提醒邮件

### 自定义脚本和环境变量

此插件支持通过 `addon_config` 映射的自定义脚本和环境变量：

- **自定义脚本**: 查看 [在插件中运行自定义脚本](https://github.com/alexbelgium/hassio-addons/wiki/Running-custom-scripts-in-Addons)
- **env_vars 选项**: 使用插件的 `env_vars` 选项传递额外的环境变量（大写或小写名称）。详情请参阅 https://github.com/alexbelgium/hassio-addons/wiki/Add-Environment-variables-to-your-Addon-2

## 安装

此插件的安装非常简单，与其他 Hass.io 插件安装方式相同。

1. [将我的 Hass.io 插件仓库][repository] 添加到你的 Hass.io 实例。
1. 安装此插件。
1. 根据需要配置数据库和邮件设置。
1. 点击 `保存` 按钮以保存你的配置。
1. 启动插件。
1. 检查插件的日志以查看是否一切正常。
1. 打开 WebUI 以设置你的 Monica 账户。

## 首次设置

安装和启动后：

1. 在 `<你的IP>:8181` 打开 WebUI
2. 创建你的第一个用户账户
3. 完成设置向导
4. 开始添加你的联系人和关系

## 支持

在 github 上创建问题，或在 [home assistant 社区论坛](https://community.home-assistant.io/) 上提问

有关 Monica 的更多信息，请访问：https://www.monicahq.com/

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
