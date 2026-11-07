## &#9888; 开放式请求：[✨ [请求] [Joplin] 添加入站配置 (于 2025-06-15 打开)](https://github.com/alexbelgium/hassio-addons/issues/1913) 由 [@aluavin](https://github.com/aluavin) 提交

# Home Assistant 附加组件：Joplin

我在空闲时间维护 Home Assistant 附加组件及其他组件：跟进上游更改、Home Assistant 更改，以及在实际硬件上进行测试耗费了大量时间（和一部分金钱）。我使用大约 5-10 个超过 110 个附加组件，所以我定期安装测试机器（并购买一些我自己不使用的测试服务，如 VPN）来排查问题并改进附加组件。

如果这个附加组件为您节省了时间或使您的设置更简单，我将不胜感激您的支持！

[![Buy me a coffee][donation-badge]](https://www.buymeacoffee.com/alexbelgium)
[![Donate via PayPal][paypal-badge]](https://www.paypal.com/donate/?hosted_button_id=DZFULJZTP3UQA)

## 附加组件信息

![Version](https://img.shields.io/badge/dynamic/yaml?label=Version&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fjoplin%2Fconfig.yaml)
![Ingress](https://img.shields.io/badge/dynamic/yaml?label=Ingress&query=%24.ingress&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fjoplin%2Fconfig.yaml)
![Arch](https://img.shields.io/badge/dynamic/yaml?color=success&label=Arch&query=%24.arch&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fjoplin%2Fconfig.yaml)

[![Codacy Badge](https://app.codacy.com/project/badge/Grade/9c6cf10bdbba45ecb202d7f579b5be0e)](https://www.codacy.com/gh/alexbelgium/hassio-addons/dashboard?utm_source=github.com&utm_medium=referral&utm_content=alexbelgium/hassio-addons&utm_campaign=Badge_Grade)
[![GitHub Super-Linter](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/weekly-supelinter.yaml?label=Lint%20code%20base)](https://github.com/alexbelgium/hassio-addons/actions/workflows/weekly-supelinter.yaml)
[![Builder](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/onpush_builder.yaml?label=Builder)](https://github.com/alexbelgium/hassio-addons/actions/workflows/onpush_builder.yaml)

[donation-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee-%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white
[paypal-badge]: https://img.shields.io/badge/Donate%20via%20PayPal-0070BA?logo=paypal&style=flat&logoColor=white

*感谢所有为我仓库点星的用户！点击上方图像点星，它会显示在右上角。感谢！*

[![Stargazers repo roster for @alexbelgium/hassio-addons](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/.github/stars2.svg)](https://github.com/alexbelgium/hassio-addons/stargazers)

![downloads evolution](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/joplin/stats.png)

## 关于

[Joplin Server](https://github.com/laurent22/joplin) 是一款免费、开源的笔记和待办事项同步应用程序，可以处理按笔记本组织的大量笔记。使用该服务器，您可以在所有设备间同步您的所有笔记。Joplin 支持端到端加密、Markdown 编辑、网络剪贴板扩展程序以及与各种云服务同步。

此附加组件基于 etechonomy 的 [docker 镜像](https://hub.docker.com/r/etechonomy/joplin-server)。

感谢 @poudenes 协助开发！

## 配置

Web 界面位于 `<your-ip>:22300`。

### 选项

| 选项 | 类型 | 默认值 | 描述 |
|--------|------|---------|-------------|
| `APP_BASE_URL` | str | `http://your_domain:port` | 服务将运行的基础公共 URL |
| `data_location` | str | `/config/addons_config/joplin` | Joplin 数据存储的位置 |
| `ssl` | bool | `false` | 在 22300 端口上通过 https 提供 web 界面 |
| `certfile` | str | `fullchain.pem` | `/ssl` 路径中的证书文件（当 `ssl` 为 true 时使用） |
| `keyfile` | str | `privkey.pem` | `/ssl` 路径中的私钥文件（当 `ssl` 为 true 时使用） |
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
| `MAILER_NOREPLY_NAME` | str | | 邮件发送方名称 |
| `MAILER_NOREPLY_EMAIL` | str | | 邮件发送方地址 |

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

Joplin Server 仅接受主机和端口完全匹配 `APP_BASE_URL` 的请求。要从外部安全访问：

1. 将证书和关键信息放入 `/ssl`（DuckDNS 和 Let's Encrypt 附加组件已在其中写入 `fullchain.pem` 和 `privkey.pem`）。
2. 设置 `ssl: true`（如果您的文件名称不同，还需要设置 `certfile`/`keyfile`）。
3. 设置 `APP_BASE_URL` 为您将输入的准确 URL，例如 `https://yourname.duckdns.org:22300`。
4. 在路由器上转发 22300 端口到 Home Assistant，重启附加组件，并在浏览器和 Joplin 客户端中使用该相同的 URL。在您的局域网中使用它：如果在 homes 失败，说明您的路由器缺少 hairpin NAT，因此将域名指向您的 Home Assistant IP 添加本地 DNS 条目。

### 数据库设置

Joplin Server 默认可使用 SQLite，但对于生产环境，建议改用 PostgreSQL。

> **注意：** Joplin Server 仅支持 **PostgreSQL** 作为外部数据库。MariaDB/MySQL **不被**支持。您必须安装 PostgreSQL 附加组件（而不是 MariaDB 附加组件）并将 `DB_CLIENT` 设置为 `pg`。

1. 安装并配置一个 PostgreSQL 附加组件
2. 在 PostgreSQL 中为 Joplin 创建数据库和用户
3. 配置 Joplin 附加组件中的 PostgreSQL 选项（使用端口 `5432`，而不是 `3306`）
4. 重启附加组件

确保提供的数据库和用户存在，因为服务器不会自动创建它们。

### 邮件配置

以启用用户注册和通知的邮件功能：

1. 配置您的 SMTP 服务器详细信息
2. 将 `MAILER_ENABLED` 设置为 `1`
3. 提供认证凭据
4. 通过注册新用户测试配置

### 自定义脚本和环境变量

此附加组件通过现有的 `config:rw` 映射支持自定义脚本和环境变量：

- **自定义脚本**：请参阅 [Run Custom Scripts in Addons](https://github.com/alexbelgium/hassio-addons/wiki/Running-custom-scripts-in-Addons)
- **env_vars 选项**：使用附加组件的 `env_vars` 选项传递额外的环境变量（大写或小写名称）。详见 https://github.com/alexbelgium/hassio-addons/wiki/Add-Environment-variables-to-your-Addon-2

## 安装

此附加组件的安装非常简单，与其他 Hass.io 附加组件并无不同。

1. 将我的附加组件仓库添加到您的 Home Assistant 实例中（在 supervisor 附加组件商店点击右上角，或在您已配置我的 HA 时点击下方按钮）
   [![Open your Home Assistant instance and show the add add-on repository dialog with a specific repository URL pre-filled.](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2Falexbelgium%2Fhassio-addons)
2. 安装此附加组件。
3. 点击 `Save` 按钮保存您的配置。
4. 启动附加组件。
5. 检查附加组件日志以查看是否一切顺利。
6. 导航到 Web 界面以完成初始设置。

## 设置步骤

1. **初始设置**：启动附加程序后，导航到 Web 界面
2. **创建管理员账户**：创建您的第一个管理员用户账户
3. **配置同步**：设置您的 Joplin 客户端以与服务器同步
4. **可选数据库**：考虑切换到 PostgreSQL 以获得更好的性能
5. **邮件服务**：配置邮件服务以启用用户管理功能

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
