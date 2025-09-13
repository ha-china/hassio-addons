# Home assistant add-on: Joplin

[![Donate][donation-badge]](https://www.buymeacoffee.com/alexbelgium)
[![Donate][paypal-badge]](https://www.paypal.com/donate/?hosted_button_id=DZFULJZTP3UQA)

![Version](https://img.shields.io/badge/dynamic/json?label=版本&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fjoplin%2Fconfig.json)
![Ingress](https://img.shields.io/badge/dynamic/json?label=Ingress&query=%24.ingress&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fjoplin%2Fconfig.json)
![Arch](https://img.shields.io/badge/dynamic/json?color=success&label=Arch&query=%24.arch&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fjoplin%2Fconfig.json)

[![Codacy Badge](https://app.codacy.com/project/badge/Grade/9c6cf10bdbba45ecb202d7f579b5be0e)](https://www.codacy.com/gh/alexbelgium/hassio-addons/dashboard?utm_source=github.com&utm_medium=referral&utm_content=alexbelgium/hassio-addons&utm_campaign=Badge_Grade)
[![GitHub Super-Linter](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/weekly-supelinter.yaml?label=Lint%20code%20base)](https://github.com/alexbelgium/hassio-addons/actions/workflows/weekly-supelinter.yaml)
[![Builder](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/onpush_builder.yaml?label=Builder)](https://github.com/alexbelgium/hassio-addons/actions/workflows/onpush_builder.yaml)

[donation-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee%20(no%20paypal)-%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white
[paypal-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee%20with%20Paypal-0070BA?logo=paypal&style=flat&logoColor=white

_感谢所有给我的仓库点赞的人！点击下面的图片点赞，它就会出现在右上角。谢谢！_

[![Stargazers repo roster for @alexbelgium/hassio-addons](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/.github/stars2.svg)](https://github.com/alexbelgium/hassio-addons/stargazers)

![downloads evolution](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/joplin/stats.png)

## 关于

[Joplin Server](https://github.com/laurent22/joplin) 是一个免费、开源的笔记和待办事项同步应用程序，可以处理大量组织成笔记本的笔记。使用此服务器，您可以在所有设备上同步所有笔记。Joplin 支持端到端加密、Markdown 编辑、网络剪辑器扩展以及与各种云服务的同步。

此插件基于 etechonomy 的 [Docker 镜像](https://hub.docker.com/r/etechonomy/joplin-server)。

感谢 @poudenes 协助开发！

## 配置

Webui 可以在 `<your-ip>:22300` 找到。

### 选项

| 选项 | 类型 | 默认值 | 描述 |
|------|------|--------|-------|
| `APP_BASE_URL` | 字符串 | `http://your_domain:port` | 服务运行的基础公共 URL |
| `data_location` | 字符串 | `/config/addons_config/joplin` | Joplin 数据存储的路径 |
| `DB_CLIENT` | 字符串 | | 数据库客户端类型（例如，`pg` 表示 PostgreSQL） |
| `POSTGRES_HOST` | 字符串 | | PostgreSQL 服务器主机名 |
| `POSTGRES_PORT` | 整数 | | PostgreSQL 服务器端口 |
| `POSTGRES_DATABASE` | 字符串 | | PostgreSQL 数据库名 |
| `POSTGRES_USER` | 字符串 | | PostgreSQL 用户名 |
| `POSTGRES_PASSWORD` | 字符串 | | PostgreSQL 密码 |
| `MAILER_ENABLED` | 整数 | | 启用电子邮件服务（1=true, 0=false） |
| `MAILER_HOST` | 字符串 | | SMTP 服务器主机名 |
| `MAILER_PORT` | 整数 | | SMTP 服务器端口 |
| `MAILER_SECURITY` | 字符串 | | SMTP 安全性（none, tls, starttls） |
| `MAILER_AUTH_USER` | 字符串 | | SMTP 认证用户名 |
| `MAILER_AUTH_PASSWORD` | 字符串 | | SMTP 认证密码 |
| `MAILER_NOREPLY_NAME` | 字符串 | | 邮件发送者名称 |
| `MAILER_NOREPLY_EMAIL` | 字符串 | | 邮件发送者地址 |

### 示例配置

```yaml
APP_BASE_URL: "http://192.168.1.100:22300"
data_location: "/config/addons_config/joplin"
DB_CLIENT: "pg"
POSTGRES_HOST: "core-mariadb"
POSTGRES_PORT: 3306
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

Joplin Server 默认使用 SQLite，但对于生产环境，建议使用 PostgreSQL：

1. 安装并配置一个 PostgreSQL 插件（例如，MariaDB 插件）
2. 为 Joplin 创建数据库和用户
3. 在 Joplin 插件中配置 PostgreSQL 选项
4. 重新启动插件

确保提供的数据库和用户存在，因为服务器不会自动创建它们。

### 电子邮件配置

要为用户注册和通知启用电子邮件功能：

1. 配置您的 SMTP 服务器详细信息
2. 设置 `MAILER_ENABLED` 为 `1`
3. 提供认证凭据
4. 通过注册新用户测试配置

### 自定义脚本和环境变量

此插件支持自定义脚本和环境变量，通过 `addon_config` 映射：

- **自定义脚本**：参见 [在插件中运行自定义脚本](https://github.com/alexbelgium/hassio-addons/wiki/Running-custom-scripts-in-Addons)
- **环境变量**：参见 [为您的插件添加环境变量](https://github.com/alexbelgium/hassio-addons/wiki/Add-Environment-variables-to-your-Addon)

## 安装

此插件的安装非常简单，与安装任何其他 Hass.io 插件没有区别。

1. 将我的 Hass.io 插件仓库 [repository](https://github.com/alexbelgium/hassio-addons) 添加到您的 Hass.io 实例。
2. 安装此插件。
3. 点击 `保存` 按钮以保存您的配置。
4. 启动插件。
5. 检查插件的日志，看看是否一切正常。
6. 导航到 Web 界面以完成初始设置。

## 设置步骤

1. **初始设置**：启动插件后，导航到 Web 界面
2. **创建管理员账户**：创建您的第一个管理员用户账户
3. **配置同步**：设置您的 Joplin 客户端以与服务器同步
4. **可选数据库**：考虑切换到 PostgreSQL 以获得更好的性能
5. **电子邮件服务**：配置电子邮件服务以进行用户管理功能

## 支持

在 [GitHub](https://github.com/alexbelgium/hassio-addons/issues) 上创建问题。

[repository]: https://github.com/alexbelgium/hassio-addons