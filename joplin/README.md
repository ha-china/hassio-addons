## &#9888; 新请求：[✨ [请求] [Joplin] 添加 Ingress (打开于 2025-06-15)](https://github.com/alexbelgium/hassio-addons/issues/1913) 由 [@aluavin](https://github.com/aluavin)
# Home Assistant 附加组件：Joplin

我在空闲时间维护此及其他 Home Assistant 附加组件：跟进上游更改、Home Assistant 更改以及在真实硬件上进行测试需要大量时间（以及一些金钱）。我使用了约 5-10 个 >110 个附加组件中的组件，因此我定期安装测试机器（并购买一些我自己不使用的测试服务，如 vpn）来排查和改进附加组件

如果这个附加组件为您节省了时间或让您的设置更加简单，我非常感谢您的支持！

[![买我一杯咖啡][donation-badge]](https://www.buymeacoffee.com/alexbelgium)
[![通过 PayPal 捐赠][paypal-badge]](https://www.paypal.com/donate/?hosted_button_id=DZFULJZTP3UQA)

## 附加组件信息

![版本](https://img.shields.io/badge/dynamic/yaml?label=Version&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fjoplin%2Fconfig.yaml)
![Ingress](https://img.shields.io/badge/dynamic/yaml?label=Ingress&query=%24.ingress&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fjoplin%2Fconfig.yaml)
![架构](https://img.shields.io/badge/dynamic/yaml?color=success&label=Arch&query=%24.arch&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fjoplin%2Fconfig.yaml)

[![Codacy 徽章](https://app.codacy.com/project/badge/Grade/9c6cf10bdbba45ecb202d7f579b5be0e)](https://www.codacy.com/gh/alexbelgium/hassio-addons/dashboard?utm_source=github.com&utm_medium=referral&utm_content=alexbelgium/hassio-addons&utm_campaign=Badge_Grade)
[![GitHub Super-Linter](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/weekly-supelinter.yaml?label=Lint%20code%20base)](https://github.com/alexbelgium/hassio-addons/actions/workflows/weekly-supelinter.yaml)
[![构建者](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/onpush_builder.yaml?label=Builder)](https://github.com/alexbelgium/hassio-addons/actions/workflows/onpush_builder.yaml)

[donation-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee-%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white
[paypal-badge]: https://img.shields.io/badge/Donate%20via%20PayPal-0070BA?logo=paypal&style=flat&logoColor=white

_感谢所有人点亮我的仓库星标！要点亮它，点击下方图片，然后它就会显示在右上角。谢谢！_

[![@alexbelgium/hassio-addons 的 Star 者名单](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/.github/stars2.svg)](https://github.com/alexbelgium/hassio-addons/stargazers)

![下载量随时间变化](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/joplin/stats.png)

## 关于

[Joplin Server](https://github.com/laurent22/joplin) 是一个免费的、开源的笔记和待办事项同步应用程序，可以处理大量按笔记本组织的笔记。借助此服务器，您可以将所有笔记在所有设备上同步。Joplin 支持端到端加密、Markdown 编辑、网页剪贴板扩展以及与各种云服务同步。

此附加组件基于 etechonomy 的 [docker 镜像](https://hub.docker.com/r/etechonomy/joplin-server)。

感谢 @poudenes 帮助开发！

## 配置

Web 管理界面位于 `<your-ip>:22300`。

### 选项

| 选项 | 类型 | 默认值 | 描述 |
|------|------|--------|------|
| `APP_BASE_URL` | str | `http://your_domain:port` | 服务运行的基础公共 URL |
| `data_location` | str | `/config/addons_config/joplin` | Joplin 数据存储的位置路径 |
| `ssl` | bool | `false` | 在 22300 端口上通过 https 提供 Web 界面 |
| `certfile` | str | `fullchain.pem` | `/ssl` 中的证书文件（当 `ssl` 为 true 时使用） |
| `keyfile` | str | `privkey.pem` | `/ssl` 中的私钥文件（当 `ssl` 为 true 时使用） |
| `DB_CLIENT` | str | | 数据库客户端类型。仅支持 `pg` (PostgreSQL)。不支持 MariaDB/MySQL。 |
| `POSTGRES_HOST` | str | | PostgreSQL 服务器主机名 |
| `POSTGRES_PORT` | int | | PostgreSQL 服务器端口 |
| `POSTGRES_DATABASE` | str | | PostgreSQL 数据库名称 |
| `POSTGRES_USER` | str | | PostgreSQL 用户名 |
| `POSTGRES_PASSWORD` | str | | PostgreSQL 密码 |
| `MAILER_ENABLED` | int | | 启用邮件服务 (1=true, 0=false) |
| `MAILER_HOST` | str | | SMTP 服务器主机名 |
| `MAILER_PORT` | int | | SMTP 服务器端口 |
| `MAILER_SECURITY` | str | | SMTP 安全性 (none, tls, starttls) |
| `MAILER_AUTH_USER` | str | | SMTP 认证用户名 |
| `MAILER_AUTH_PASSWORD` | str | | SMTP 认证密码 |
| `MAILER_NOREPLY_NAME` | str | | 邮件发送者名称 |
| `MAILER_NOREPLY_EMAIL` | str | | 邮件发送者邮箱地址 |

### 示例配置

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

### HTTPS

Joplin Server 仅接受与 `APP_BASE_URL` 精确匹配的请求（包括主机和端口）。要从外部安全访问它：

1. 将证书和密钥放到 `/ssl`（DuckDNS 和 Let's Encrypt 附加组件已经在那里写入 `fullchain.pem` 和 `privkey.pem`）。
2. 设置 `ssl: true`（如果您的文件名称不同，还需要设置 `certfile`/`keyfile`）。
3. 设置 `APP_BASE_URL` 为您将输入的确切 URL，例如 `https://yourname.duckdns.org:22300`。
4. 在路由器上转发 22300 端口到 Home Assistant，重启附加组件，并在浏览器和 Joplin 客户端中使用相同的 URL。在同局域网（LAN）上也使用它：如果在家里失败，说明您的路由器缺少 hairpin NAT；因此添加一条本地 DNS 条目，将该域名指向您的 Home Assistant IP。

### 数据库设置

Joplin Server 默认使用 SQLite，但对于生产用途，推荐使用 PostgreSQL。

> **重要：** Joplin Server 仅支持 **PostgreSQL** 作为外部数据库。MariaDB/MySQL **不** 受支持。您必须安装 PostgreSQL 附加组件（而不是 MariaDB 附加组件）并将 `DB_CLIENT` 设置为 `pg`。

1. 安装并配置 PostgreSQL 附加组件
2. 在 PostgreSQL 中为 Joplin 创建数据库和用户
3. 在 Joplin 附加组件中配置 PostgreSQL 选项（使用端口 `5432`，而不是 `3306`）
4. 重启附加组件

请确保提供的数据库和用户存在，因为服务器不会自动创建它们。

### 邮件配置

为用户注册和通知启用邮件功能：

1. 配置您的 SMTP 服务器详细信息
2. 将 `MAILER_ENABLED` 设置为 `1`
3. 提供认证凭据
4. 通过注册新用户来测试配置

### 自定义脚本和环境变量

此附加组件通过现有的 `config:rw` 映射支持自定义脚本和环境变量：

- **自定义脚本**：请参阅 [附加组件中运行自定义脚本](https://github.com/alexbelgium/hassio-addons/wiki/Running-custom-scripts-in-Addons)
- **env_vars 选项**：使用附加组件 `env_vars` 选项传递额外环境变量（大小写名称均可）。详见 https://github.com/alexbelgium/hassio-addons/wiki/Add-Environment-variables-to-your-Addon-2 了解详细信息。

## 安装

此附加组件的安装非常简单，与其他任何 Hass.io 附加组件的安装没有不同。

1. 将附加组件仓库添加到您的 Home Assistant 实例中（在 supervisor 附加组件商店点击右上角，或如果您已配置我的 HA，则点击下方的按钮）
   [![打开您的 Home Assistant 实例并显示添加附加组件仓库对话框，特备预填充特定仓库 URL。](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2Falexbelgium%2Fhassio-addons)
1. 安装此附加组件。
1. 点击 `Save` 按钮以保存您的配置。
1. 启动附加组件。
1. 检查附加组件的日志以查看一切是否顺利。
1. 导航到 Web 界面以完成初始设置。

## 设置步骤

1. **初始设置**：启动附加组件后，导航到 Web 界面
2. **创建管理员账户**：创建您的第一个管理员用户账户
3. **配置同步**：设置您的 Joplin 客户端与服务器同步
4. **可选数据库**：考虑切换到 PostgreSQL 以获得更好的性能
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

<img src="https://raw.gitcode.com/ha-china/ha-apps/raw/main/WeChat_QRCode.png" width="50%" /> 📲

## ☕ 赞助支持

如果您觉得我花费大量时间维护这个库对您有帮助，欢迎请我喝杯奶茶，您的支持将是我持续改进的动力！

<div style="display: flex; justify-content: space-between;">
  <img src="https://raw.gitcode.com/ha-china/ha-apps/raw/main/1_readme/Ali_Pay.jpg" height="350px" />
  <img src="https://raw.gitcode.com/ha-china/ha-apps/raw/main/1_readme/WeChat_Pay.jpg" height="350px" />
</div> 💖

感谢您的支持与鼓励！
