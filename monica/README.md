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

_感谢所有给我的仓库点赞的人！要点赞，请点击下面的图片，然后它会在右上角显示。谢谢！_

[![Stargazers repo roster for @alexbelgium/hassio-addons](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/.github/stars2.svg)](https://github.com/alexbelgium/hassio-addons/stargazers)

![downloads evolution](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/monica/stats.png)

## 关于

[Monica](https://www.monicahq.com/) 是一个个人关系管理 (PRM) 工具，帮助您组织社交生活并跟踪与朋友、家人和同事的关系。它就像一个 CRM，但用于您的个人生活。

主要功能：
- 跟踪对话、活动和重要日期
- 存储联系人信息和关系细节
- 设置生日、周年纪念和跟进提醒
- 记录赠送和收到的礼物
- 跟踪债务和恩惠
- 组织关于人们的笔记和回忆
- 日记功能
- 礼物想法跟踪
- 多种数据库选项（SQLite、MariaDB、MySQL）
- 内置 Meilisearch 全文搜索引擎

这个插件基于官方的 [Monica](https://github.com/monicahq/monica) 应用程序。

## 配置

Webui 可以在 `<your-ip>:8181` 找到。

### 选项

| 选项 | 类型 | 默认值 | 描述 |
|------|------|--------|-------|
| `database` | 列表 | `sqlite` | 数据库类型（sqlite/MariaDB_addon/Mysql_external） |
| `APP_KEY` | 字符串 | | 应用程序加密密钥（如果为空则自动生成） |
| `DB_DATABASE` | 字符串 | | 数据库名称（用于外部 MySQL/MariaDB） |
| `DB_HOST` | 字符串 | | 数据库主机名（用于外部 MySQL/MariaDB） |
| `DB_USERNAME` | 字符串 | | 数据库用户名（用于外部 MySQL/MariaDB） |
| `DB_PASSWORD` | 字符串 | | 数据库密码（用于外部 MySQL/MariaDB） |
| `DB_PORT` | 整数 | | 数据库端口（用于外部 MySQL/MariaDB） |
| `MAIL_MAILER` | 字符串 | `log` | 邮件驱动（smtp/log/sendmail） |
| `MAIL_HOST` | 字符串 | | SMTP 服务器主机名 |
| `MAIL_PORT` | 字符串 | | SMTP 服务器端口 |
| `MAIL_USERNAME` | 字符串 | | SMTP 用户名 |
| `MAIL_PASSWORD` | 字符串 | | SMTP 密码 |
| `MAIL_ENCRYPTION` | 字符串 | | SMTP 加密（tls/ssl） |
| `MAIL_FROM_ADDRESS` | 字符串 | | 发件人电子邮件地址 |
| `MAIL_FROM_NAME` | 字符串 | | 发件人电子邮件名称 |

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

**SQLite（默认）:**
- 无需额外配置
- 数据存储在插件目录中
- 适用于单用户设置

**MariaDB 插件:**
- 将 `database` 设置为 `MariaDB_addon`
- 需要安装并运行 MariaDB 插件
- 插件将自动配置数据库连接

**外部 MySQL/MariaDB:**
- 将 `database` 设置为 `Mysql_external`
- 使用您的数据库详细信息配置所有 `DB_*` 选项

### 电子邮件配置

配置 SMTP 设置以启用：
- 密码重置电子邮件
- 邀请电子邮件
- 通知电子邮件
- 提醒电子邮件

### 自定义脚本和环境变量

此插件通过 `addon_config` 映射支持自定义脚本和环境变量：

- **Meilisearch 全文搜索**：插件随附一个嵌入式 [Meilisearch](https://www.meilisearch.com/) 服务，Monica 默认使用该服务。搜索 API 在容器内的 `http://127.0.0.1:7700` 上监听。如果您更喜欢外部 Meilisearch 实例，可以通过 `env_vars` 覆盖 `MEILISEARCH_URL`——初始化脚本将检测到这一点并跳过启动捆绑的守护进程。如果需要，您可以通过 `env_vars` 选项定义额外的环境变量来进一步调整 Meilisearch。要保护（或禁用）Meilisearch 认证而不使用自定义环境变量，请设置 `meilisearch_key` 插件选项；初始化脚本将将其传递给 Monica 和捆绑的 Meilisearch 实例。
- **自定义脚本**：请参阅 [在插件中运行自定义脚本](https://github.com/alexbelgium/hassio-addons/wiki/Running-custom-scripts-in-Addons)
- **env_vars 选项**：使用插件 `env_vars` 选项传递额外的环境变量（大写或小写名称）。请参阅 https://github.com/alexbelgium/hassio-addons/wiki/Add-Environment-variables-to-your-Addon-2 以获取详细信息。

## 安装

此插件的安装非常简单，与安装任何其他 Hass.io 插件没有区别。

1. 将我的 Hass.io 插件仓库 [repository] 添加到您的 Hass.io 实例。
2. 安装此插件。
3. 根据需要配置数据库和电子邮件设置。
4. 点击 `保存` 按钮以保存您的配置。
5. 启动插件。
6. 检查插件的日志以查看是否一切正常。
7. 打开 WebUI 以设置您的 Monica 账户。

## 初次设置

安装并启动后：

1. 在 `<your-ip>:8181` 打开 WebUI
2. 创建您的第一个用户账户
3. 完成设置向导
4. 开始添加您的联系人和关系

## 支持

在 github 上创建问题，或在 [home assistant 社区论坛](https://community.home-assistant.io/) 上提问

有关 Monica 的更多信息，请访问：https://www.monicahq.com/

[repository]: https://github.com/alexbelgium/hassio-addons
**⚠️ This resource is intended to help Chinese Home Assistant users more easily install excellent add-ons. If you are not a Chinese user, please read repository readme first**



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
