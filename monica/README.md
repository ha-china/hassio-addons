# Home Assistant 插件：Monica

我利用业余时间维护此及其他 Home Assistant 插件：跟进上游变更、HA 变更，以及在真实硬件上进行测试耗费了大量时间（及一些金钱）。我大约 would use 5-10 个超过 110 个插件中5-10，所以我会定期安装测试机器（并购买一些我自己不使用但用于调试和改进插件的测试服务，如 vpn）

如果您使用此插件节省了时间或让配置更简单，您的支持将令我非常感激！

[![Buy me a coffee][donation-badge]](https://www.buymeacoffee.com/alexbelgium)
[![Donate via PayPal][paypal-badge]](https://www.paypal.com/donate/?hosted_button_id=DZFULJZTP3UQA)

## 插件信息

![Version](https://img.shields.io/badge/dynamic/yaml?label=Version&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fmonica%2Fconfig.yaml)
![Ingress](https://img.shields.io/badge/dynamic/yaml?label=Ingress&query=%24.ingress&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fmonica%2Fconfig.yaml)
![Arch](https://img.shields.io/badge/dynamic/yaml?color=success&label=Arch&query=%24.arch&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fmonica%2Fconfig.yaml)

[![Codacy Badge](https://app.codacy.com/project/badge/Grade/9c6cf10bdbba45ecb202d7f579b5be0e)](https://www.codacy.com/gh/alexbelgium/hassio-addons/dashboard?utm_source=github.com&utm_medium=referral&utm_content=alexbelgium/hassio-addons&utm_campaign=Badge_Grade)
[![GitHub Super-Linter](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/weekly-supelinter.yaml?label=Lint%20code%20base)](https://github.com/alexbelgium/hassio-addons/actions/workflows/weekly-supelinter.yaml)
[![Builder](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/onpush_builder.yaml?label=Builder)](https://github.com/alexbelgium/hassio-addons/actions/workflows/onpush_builder.yaml)

[donation-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee-%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white
[paypal-badge]: https://img.shields.io/badge/Donate%20via%20PayPal-0070BA?logo=paypal&style=flat&logoColor=white

_感谢所有给仓库打上星标的人！要给它打上星标，请点击图片下方的链接，它将显示在右上角。谢谢！_

[![Stargazers repo roster for @alexbelgium/hassio-addons](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/.github/stars2.svg)](https://github.com/alexbelgium/hassio-addons/stargazers)

![downloads evolution](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/monica/stats.png)

## 关于

[Monica](https://www.monicahq.com/) 是一个个人关系经理（PRM），帮助您组织社交生活并跟踪与朋友、家人和同事的关系。它就像是一个 CRM，但是针对您的个人生活。

主要功能：
- 跟踪对话、活动和重要日期
- 存储联系信息和关系详情
- 为生日、周年纪念日和后续跟进设置提醒
- 记录收到的礼物
- 跟踪债务和人情
- 整理关于人的笔记和记忆
- 日记功能
- 礼物想法跟踪
- 多种数据库选项（SQLite、MariaDB、MySQL）
- 内置 Meilisearch 全文搜索引擎

此插件基于官方 [Monica](https://github.com/monicahq/monica) 应用程序构建。

## 配置

Webui 地址为 `<your-ip>:8181`。

### 选项

| Option | Type | Default | Description |
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
| `MAIL_FROM_NAME` | str | | 发件人名称 |

### 配置示例

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

**SQLite（默认）：**
- 无需额外配置
- 数据存储在插件目录中
- 适合单用户环境

**MariaDB 插件：**
- 将 `database` 设置为 `MariaDB_addon`
- 需要安装并运行 MariaDB 插件
- 插件将自动配置数据库连接

**外部 MySQL/MariaDB：**
- 将 `database` 设置为 `Mysql_external`
- 用您的数据库详情配置所有 `DB_*` 选项

### 邮箱配置

配置 SMTP 设置以启用：
- 密码重置邮件
- 邀请邮件
- 通知邮件
- 提醒邮件

### 自定义脚本和环境变量

此插件通过 `addon_config` 映射支持自定义脚本和环境变量：

- **Meilisearch 全文搜索**：插件内置了一个 [Meilisearch](https://www.meilisearch.com/) 服务供 Monica 默认使用。搜索 API 在容器内监听 `http://127.0.0.1:7700`。如果更喜欢使用外部 Meilisearch 实例，可以通过 `env_vars` 覆盖 `MEILISEARCH_URL`——初始化脚本将检测到这一点并跳过启动捆绑的守护进程。如果需要，您可以通过 `env_vars` 选项定义额外的环境变量来进一步微调 Meilisearch。如需在不使用自定义 env 变量的情况下安全（或禁用）Meilisearch 身份验证，设置 `meilisearch_key` 插件选项；初始化脚本将将其传递给 Monica 和捆绑的 Meilisearch 实例。如果您更喜欢自己管理密钥，也可以提供 `MEILI_MASTER_KEY` 通过 `env_vars`，当未配置 `meilisearch_key` 时，插件现在将其用作回退方案。当两者均未设置（或长度太短）时，插件现在会在 `/data/meilisearch_master_key` 生成持久的 32 字节密钥，确保 Meilisearch 始终拥有有效的主密钥。
- **自定义脚本**：参见 [在插件中运行自定义脚本](https://github.com/alexbelgium/hassio-addons/wiki/Running-custom-scripts-in-Addons)
- **env_vars 选项**：使用插件 `env_vars` 选项传递额外的环境变量（大小写名称均可）。详细信息请参阅 https://github.com/alexbelgium/hassio-addons/wiki/Add-Environment-variables-to-your-Addon-2。

## 安装

此插件的安装非常简单，与其他任何 Hass.io 插件的安装方式没有不同。

1. 将我的插件仓库添加到您的 home assistant 实例中（在 supervisor addons store 右上角，或如果您已配置我的 HA 则点击下方按钮）
   [![Open your Home Assistant instance and show the add add-on repository dialog with a specific repository URL pre-filled.](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2Falexbelgium%2Fhassio-addons)
1. 安装此插件。
1. 根据需要配置数据库和邮箱设置。
1. 点击 `Save` 按钮保存配置。
1. 启动插件。
1. 检查插件日志以查看一切是否顺利。
1. 打开 Webui 以设置您的 Monica 账户。

## 首次设置

安装和启动后：

1. 打开 `<your-ip>:8181` 处的 Webui
2. 创建第一个用户账户
3. 完成设置向导
4. 开始添加联系人和关系

## 支持

在 github 上创建问题，或在 [home assistant 社区论坛](https://community.home-assistant.io/) 提问

关于 Monica 的更多信息请访问：https://www.monicahq.com/

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
