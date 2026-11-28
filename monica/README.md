# Home assistant 附加组件：Monica

我在空闲时间维护此附加组件及其他 Home Assistant 附加组件：通过跟进上游更改、Home Assistant 更改以及在真实硬件上进行测试需要大量时间（以及一些费用）。我会使用我 100 多个附加组件中的 5-10 个，因此我会安装测试机器（并购买一些测试服务，例如 vpn）来测试和完善这些附加组件，这些测试环境我自己不使用。

如果该附加组件能为您节省时间或让您的设置更简单，我将不胜感激您的支持！

[![Buy me a coffee][donation-badge]](https://www.buymeacoffee.com/alexbelgium)
[![Donate via PayPal][paypal-badge]](https://www.paypal.com/donate/?hosted_button_id=DZFULJZTP3UQA)

## 附加组件信息

![版本](https://img.shields.io/badge/dynamic/yaml?label=Version&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fmonica%2Fconfig.yaml)
![Ingress](https://img.shields.io/badge/dynamic/yaml?label=Ingress&query=%24.ingress&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fmonica%2Fconfig.yaml)
![架构](https://img.shields.io/badge/dynamic/yaml?color=success&label=Arch&query=%24.arch&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fmonica%2Fconfig.yaml)

[![Codacy Badge](https://app.codacy.com/project/badge/Grade/9c6cf10bdbba45ecb202d7f579b5be0e)](https://www.codacy.com/gh/alexbelgium/hassio-addons/dashboard?utm_source=github.com&utm_medium=referral&utm_content=alexbelgium/hassio-addons&utm_campaign=Badge_Grade)
[![GitHub Super-Linter](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/weekly-supelinter.yaml?label=Lint%20code%20base)](https://github.com/alexbelgium/hassio-addons/actions/workflows/weekly-supelinter.yaml)
[![Builder](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/onpush_builder.yaml?label=Builder)](https://github.com/alexbelgium/hassio-addons/actions/workflows/onpush_builder.yaml)

[donation-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee-%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white
[paypal-badge]: https://img.shields.io/badge/Donate%20via%20PayPal-0070BA?logo=paypal&style=flat&logoColor=white

_感谢所有星标了我的仓库的人！要将此仓库升为星标，请点击下图，它将显示在右上角。非常感谢！_

[![Stargazers repo roster for @alexbelgium/hassio-addons](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/.github/stars2.svg)](https://github.com/alexbelgium/hassio-addons/stargazers)

![下载量演变](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/monica/stats.png)

## 关于

[Monica](https://www.monicahq.com/) 是一个个人关系管理（PRM）系统，帮助您组织社交生活并跟踪与朋友、家人和同事的关系。它就像是一个客户关系管理软件（CRM），但是为您的个人生活而设。

主要功能：
- 跟踪对话、活动和重要日期
- 存储联系信息和关系详情
- 为生日、周年纪念日及后续跟进设置提醒
- 记录赠送和接受的礼物
- 跟踪债务和人情
- 整理关于人的笔记和回忆
- 日记功能
- 礼物灵感追踪
- 多种数据库选项（SQLite、MariaDB、MySQL）
- 内置 Meilisearch 全文搜索引擎

此附加组件基于官方的 [Monica](https://github.com/monicahq/monica) 应用程序。

## 配置

Web UI 可在 `<your-ip>:8181` 访问。

### 选项

| 选项 | 类型 | 默认值 | 描述 |
|--------|------|---------|-------------|
| `database` | list | `sqlite` | 数据库类型 (sqlite/MariaDB_addon/Mysql_external) |
| `APP_KEY` | str | | 应用程序加密密钥（如果为空则自动生成） |
| `DB_DATABASE` | str | | 数据库名称（用于外部 MySQL/MariaDB） |
| `DB_HOST` | str | | 数据库主机名（用于外部 MySQL/MariaDB） |
| `DB_USERNAME` | str | | 数据库用户名（用于外部 MySQL/MariaDB） |
| `DB_PASSWORD` | str | | 数据库密码（用于外部 MySQL/MariaDB） |
| `DB_PORT` | int | | 数据库端口（用于外部 MySQL/MariaDB） |
| `MAIL_MAILER` | str | `log` | 邮件驱动 (smtp/log/sendmail) |
| `MAIL_HOST` | str | | SMTP 服务器主机名 |
| `MAIL_PORT` | str | | SMTP 服务器端口 |
| `MAIL_USERNAME` | str | | SMTP 用户名 |
| `MAIL_PASSWORD` | str | | SMTP 密码 |
| `MAIL_ENCRYPTION` | str | | SMTP 加密 (tls/ssl) |
| `MAIL_FROM_ADDRESS` | str | | 发件人邮箱地址 |
| `MAIL_FROM_NAME` | str | | 发件人姓名 |

### 配置示例

```yaml
database: "sqlite"
APP_KEY: ""  # 会自动生成
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

**SQLite（默认）**
- 无需额外配置
- 数据存储在附加组件目录中
- 适用于单人设置

**MariaDB 附加组件：**
- 将 `database` 设置为 `MariaDB_addon`
- 需要 MariaDB 附加组件已安装并运行
- 附加组件将自动配置数据库连接

**外部 MySQL/MariaDB：**
- 将 `database` 设置为 `Mysql_external`
- 使用您的数据库详情配置所有 `DB_*` 选项

### 邮件配置

配置 SMTP 设置以启用：
- 密码重置邮件
- 邀请邮件
- 通知邮件
- 提醒邮件

### 自定义脚本和环境变量

此附加组件通过 `app_config` 映射支持自定义脚本和环境变量：

- **Meilisearch 全文搜索引擎**：附加组件附带了一个嵌入的 [Meilisearch](https://www.meilisearch.com/) 服务，Monica 默认使用该服务。搜索 API 在容器内监听 `http://127.0.0.1:7700`。如果偏好外部 Meilisearch 实例，您可以通过 `env_vars` 覆盖 `MEILISEARCH_URL`——初始化脚本将检测到这一点并跳过启动附带的守护进程。如果需要使用，您可以通过 `env_vars` 选项定义额外的环境变量来进一步调整 Meilisearch。如果要安全（或禁用）Meilisearch 认证，如果没有自定义环境变量，请设置 `meilisearch_key` 附加组件选项；初始化脚本将将其传递给 Monica 和附带的 Meilisearch 实例。如果希望自行管理密钥，您也可以通过在 `env_vars` 中提供 `MEILI_MASTER_KEY`，现在附加组件会在未配置 `meilisearch_key` 时使用它作为 fallback。当两者均未设置（或它们太短）时，附加组件现在会在 `/data/meilisearch_master_key` 中生成一个持久的 32 字节密钥，以确保 Meilisearch 始终以有效的管理员密钥启动。
- **自定义脚本**：见 [在附加组件中运行自定义脚本](https://github.com/alexbelgium/hassio-addons/wiki/Running-custom-scripts-in-Addons)
- **env_vars 选项**：使用附加组件的 `env_vars` 选项传递额外的环境变量（大小写名称均可）。详见 https://github.com/alexbelgium/hassio-addons/wiki/Add-Environment-variables-to-your-Addon-2 了解详细信息。

## 安装

此附加组件的安装非常直接，与安装任何其他 Hass.io 附加组件没有区别。

1. 将我的附加组件仓库添加到您的 Home Assistant 实例中（在 supervisor 附加组件商店右上角，或如果在您的 HA 中已配置我，请点击下方按钮）
   [![打开您的 Home Assistant 实例并显示带有特定仓库 URL 预填充的“添加附加组件仓库”对话框。](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2Falexbelgium%2Fhassio-addons)
2. 安装此附加组件。
3. 根据需要配置数据库和邮件设置。
4. 点击 `Save` 按钮以保存您的配置。
5. 启动附加组件。
6. 检查附加组件日志以查看一切是否正常。
7. 打开 Web UI 以设置您的 Monica 账户。

## 初次设置

安装和启动后：

1. 在 `<your-ip>:8181` 打开 Web UI
2. 创建您的第一个用户账户
3. 完成设置向导
4. 开始添加您的联系人和关系

## 支持

在 GitHub 上创建问题，或在 [Home Assistant 社区论坛](https://community.home-assistant.io/) 提问。

有关 Monica 的更多信息，请访问：https://www.monicahq.com/

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
