## &#9888; 开放请求 : [✨ [请求] [Joplin] 添加 Ingress (于 2025-06-15 提出)](https://github.com/alexbelgium/hassio-addons/issues/1913) 由 [@aluavin](https://github.com/aluavin) 提出
# Home Assistant 插件：Joplin

我利用空闲时间维护此 Home Assistant 插件以及其他插件：跟进上游更改、HA 更改更改以及在实际硬件上测试消耗大量时间（并且需要一些金钱）。我使用我 110 多个插件中的 5-10 个，因此我定期检查测试机器（并为自己不经使用的某些测试服务购买商品，如 vpn），以便排查和提高插件。

如果此插件为您节省时间或使您的设置更简单，我将不胜感激您的支持！

[![买我一杯咖啡][donation-badge]](https://www.buymeacoffee.com/alexbelgium)
[![通过 PayPal 捐赠][paypal-badge]](https://www.paypal.com/donate/?hosted_button_id=DZFULJZTP3UQA)

## 插件信息

![版本](https://img.shields.io/badge/dynamic/yaml?label=Version&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fjoplin%2Fconfig.yaml)
![Ingress](https://img.shields.io/badge/dynamic/yaml?label=Ingress&query=%24.ingress&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fjoplin%2Fconfig.yaml)
![架构](https://img.shields.io/badge/dynamic/yaml?color=success&label=Arch&query=%24.arch&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fjoplin%2Fconfig.yaml)

[![Codacy 徽章](https://app.codacy.com/project/badge/Grade/9c6cf10bdbba45ecb202d7f579b5be0e)](https://www.codacy.com/gh/alexbelgium/hassio-addons/dashboard?utm_source=github.com&utm_medium=referral&utm_content=alexbelgium/hassio-addons&utm_campaign=Badge_Grade)
[![GitHub Super-Linter](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/weekly-supelinter.yaml?label=Lint%20code%20base)](https://github.com/alexbelgium/hassio-addons/actions/workflows/weekly-supelinter.yaml)
[![构建者](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/onpush_builder.yaml?label=Builder)](https://github.com/alexbelgium/hassio-addons/actions/workflows/onpush_builder.yaml)

[donation-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee-%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white
[paypal-badge]: https://img.shields.io/badge/Donate%20via%20PayPal-0070BA?logo=paypal&style=flat&logoColor=white

_感谢大家给我的仓库点赞！请点击上方图片点赞，它就会出现在右上方。谢谢！_

[![@alexbelgium/hassio-addons スターゲイザー仓库名册](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/.github/stars2.svg)](https://github.com/alexbelgium/hassio-addons/stargazers)

![downloads evolution](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/joplin/stats.png)

## 概述

[Joplin Server](https://github.com/laurent22/joplin) 是一款免费的开源笔记和待办事项同步应用程序，可处理大量组织成笔记本的笔记。使用此服务器您可以在所有设备上同步所有笔记。Joplin 支持端到端加密、Markdown 编辑、网络剪贴板扩展以及通过各种云服务进行同步。

该插件基于 etechonomy 的 [docker 镜像](https://hub.docker.com/r/etechonomy/joplin-server)。

感谢 @poudenes 协助开发！

## 配置

WebUI 可在 `<your-ip>:22300` 访问。

### 选项

| 选项 | 类型 | 默认值 | 描述 |
|--------|------|---------|-------------|
| `APP_BASE_URL` | str | `http://your_domain:port` | 服务运行的基础公共 URL |
| `data_location` | str | `/config/addons_config/joplin` | Joplin 数据存储的路径 |
| `DB_CLIENT` | str | | 数据库客户端类型。仅支持 `pg` (PostgreSQL)。不支持 MariaDB/MySQL。 |
| `POSTGRES_HOST` | str | | PostgreSQL 服务器主机名 |
| `POSTGRES_PORT` | int | | PostgreSQL 服务器端口 |
| `POSTGRES_DATABASE` | str | | PostgreSQL 数据库名 |
| `POSTGRES_USER` | str | | PostgreSQL 用户名 |
| `POSTGRES_PASSWORD` | str | | PostgreSQL 密码 |
| `MAILER_ENABLED` | int | | 启用邮件服务 (1=是，0=否) |
| `MAILER_HOST` | str | | SMTP 服务器主机名 |
| `MAILER_PORT` | int | | SMTP 服务器端口 |
| `MAILER_SECURITY` | str | | SMTP 安全性 (none, tls, starttls) |
| `MAILER_AUTH_USER` | str | | SMTP 认证用户名 |
| `MAILER_AUTH_PASSWORD` | str | | SMTP 认证密码 |
| `MAILER_NOREPLY_NAME` | str | | 邮件发送者名字 |
| `MAILER_NOREPLY_EMAIL` | str | | 邮件发送者地址 |

### 配置示例

```yaml
APP_BASE_URL: "http://192.168.1.100:22300"
data_location: "/config/addons_config/joplin"
DB_CLIENT: "pg"
POSTGRES_HOST: "your-postgres-host"
POSTGRES_PORT: 5432
POSTGRES_DATABASE: "joplin"
POSTGRES_USER: "joplin"
POSTGRES_PASSWORD: "secure_password"
MAILER_ENABLED: 1
MAILER_HOST: "smtp.gmail.com"
MAILER_PORT: 587
MAILER_SECURITY: "starttls"
MAILER_AUTH_USER: "your-email@gmail.com"
MAILER_AUTH_PASSWORD: "your-app-password"
MAILER_NOREPLY_NAME: "Joplin Server"
MAILER_NOREPLY_EMAIL: "noreply@yourdomain.com"
```

### 数据库设置

Joplin Server 默认使用 SQLite，但对于生产环境，建议使用 PostgreSQL。

> **重要：** Joplin Server 仅支持 **PostgreSQL** 作为外部数据库。MariaDB/MySQL **不支持**。您必须安装 PostgreSQL 插件（而不是 MariaDB 插件），并将其 `DB_CLIENT` 设置为 `pg`。

1. 安装并配置 PostgreSQL 插件
2. 在 PostgreSQL 中为 Joplin 创建数据库和用户
3. 在 Joplin 插件中配置 PostgreSQL 选项（使用端口 `5432`，而不是 `3306`）
4. 重新启动插件

确保提供的数据库和用户存在，因为服务器不会自动创建它们。

### 邮件配置

若要启用用于用户注册和通知的邮件功能：

1. 配置您的 SMTP 服务器详情
2. 将 `MAILER_ENABLED` 设置为 `1`
3. 提供认证凭据
4. 通过注册新用户测试配置

### 自定义脚本和环境变量

该插件通过现有的 `config:rw` 映射支持自定义脚本和环境变量：

- **自定义脚本**：请参阅 [在插件中运行自定义脚本](https://github.com/alexbelgium/hassio-addons/wiki/Running-custom-scripts-in-Addons)
- **env_vars 选项**：使用插件的 `env_vars` 选项传递额外的环境变量（名称的大小写均可）。详见 https://github.com/alexbelgium/hassio-addons/wiki/Add-Environment-variables-to-your-Addon-2

## 安装

此插件的安装非常 straightforward，與安装任何其他 Hass.io 插件并无不同。

1. 将我的插件仓库添加到您的 home assistant 实例（在 supervisor addons store 右上角，或者如果您已配置了我的 HA，请点击下方按钮）
   [![打开您的 Home Assistant 实例并显示带有特定仓库 URL 预填充的添加插件仓库对话框。](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2Falexbelgium%2Fhassio-addons)
1. 安装此插件。
1. 点击 `保存` 按钮以存储您的配置。
1. 启动插件。
1. 检查插件日志以查看一切是否进展顺利。
1. 导航到 Web 界面以完成初始设置。

## 设置步骤

1. **初始设置**：启动插件后，导航到 Web 界面
2. **创建管理账户**：创建您的第一个管理用户账户
3. **配置同步**：设置您的 Joplin 客户端以与服务器同步
4. **可选数据库**：考虑到更好的性能，考虑切换到 PostgreSQL
5. **邮件服务**：为用户管理功能配置邮件服务

## 支持

在 [GitHub](https://github.com/alexbelgium/hassio-addons/issues) 上创建问题。

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
