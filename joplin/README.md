## ⚠️ 开启请求 : [✨ [请求] [Joplin] 添加入口 (已开启 2025-06-15)](https://github.com/alexbelgium/hassio-addons/issues/1913) 由 [@aluavin](https://github.com/aluavin)
# Home assistant 插件：Joplin


我在业余时间维护这个和其他 Home Assistant 插件：跟上上游变化、HA 变化，并在真实硬件上测试需要大量时间（和一些钱）。我大约使用我超过 110 个插件中的 5-10 个，因此我安装了测试机器（和一些我自身不使用的测试服务，例如 VPN）来排错和改进插件。

如果这个插件为您节省时间或使您的设置更简单，我将非常感谢您的支持！

[![请我喝咖啡](https://img.shields.io/badge/Buy%20me%20a%20coffee-%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white)](https://www.buymeacoffee.com/alexbelgium)
[![通过 PayPal 捐赠](https://img.shields.io/badge/Donate%20via%20PayPal-0070BA?logo=paypal&style=flat&logoColor=white)](https://www.paypal.com/donate/?hosted_button_id=DZFULJZTP3UQA)

## 插件信息

![版本](https://img.shields.io/badge/dynamic/yaml?label=版本&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fjoplin%2Fconfig.yaml)
![入口](https://img.shields.io/badge/dynamic/yaml?label=入口&query=%24.ingress&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fjoplin%2Fconfig.yaml)
![架构](https://img.shields.io/badge/dynamic/yaml?color=success&label=架构&query=%24.arch&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fjoplin%2Fconfig.yaml)

[![Codacy 徽章](https://app.codacy.com/project/badge/Grade/9c6cf10bdbba45ecb202d7f579b5be0e)](https://www.codacy.com/gh/alexbelgium/hassio-addons/dashboard?utm_source=github.com&utm_medium=referral&utm_content=alexbelgium/hassio-addons&utm_campaign=Badge_Grade)
[![GitHub Super-Linter](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/weekly-supelinter.yaml?label=Lint%20code%20base)](https://github.com/alexbelgium/hassio-addons/actions/workflows/weekly-supelinter.yaml)
[![构建器](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/onpush_builder.yaml?label=构建器)](https://github.com/alexbelgium/hassio-addons/actions/workflows/onpush_builder.yaml)

[donation-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee-%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white
[paypal-badge]: https://img.shields.io/badge/Donate%20via%20PayPal-0070BA?logo=paypal&style=flat&logoColor=white

_感谢所有给我的仓库点赞的人！要点赞，请点击下面的图片，它将出现在右上角。谢谢！_

[![@alexbelgium/hassio-addons 的星标仓库列表](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/.github/stars2.svg)](https://github.com/alexbelgium/hassio-addons/stargazers)

![下载趋势](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/joplin/stats.png)

## 关于

[Joplin Server](https://github.com/laurent22/joplin) 是一个免费、开源的笔记和待办事项同步应用程序，它可以处理大量组织成笔记本的笔记。使用此服务器，您可以在所有设备上同步所有笔记。Joplin 支持端到端加密、Markdown 编辑、网络剪辑器扩展以及与各种云服务的同步。

这个插件基于 [docker 镜像](https://hub.docker.com/r/etechonomy/joplin-server) 来自 etechonomy。

感谢 @poudenes 帮助开发！

## 配置

Webui 可以在 `<your-ip>:22300` 找到。

### 选项

| 选项 | 类型 | 默认 | 描述 |
|------|------|------|------|
| `APP_BASE_URL` | 字符串 | `http://your_domain:port` | 服务将运行的公共基本 URL |
| `data_location` | 字符串 | `/config/addons_config/joplin` | Joplin 数据存储的路径 |
| `DB_CLIENT` | 字符串 | | 数据库客户端类型（例如，`pg` 为 PostgreSQL） |
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

Joplin Server 默认使用 SQLite，但生产使用推荐 PostgreSQL：

1. 安装和配置 PostgreSQL 插件（例如，MariaDB 插件）
2. 为 Joplin 创建数据库和用户
3. 在 Joplin 插件中配置 PostgreSQL 选项
4. 重新启动插件

确保提供的数据库和用户存在，因为服务器不会自动创建它们。

### 邮件配置

要启用用户注册和通知的电子邮件功能：

1. 配置您的 SMTP 服务器详细信息
2. 将 `MAILER_ENABLED` 设置为 `1`
3. 提供认证凭据
4. 通过注册新用户来测试配置

### 自定义脚本和环境变量

此插件支持通过 `addon_config` 映射的自定义脚本和环境变量：

- **自定义脚本**：查看 [在插件中运行自定义脚本](https://github.com/alexbelgium/hassio-addons/wiki/Running-custom-scripts-in-Addons)
- **env_vars 选项**：使用插件的 `env_vars` 选项传递额外的环境变量（大写或小写名称）。详细信息请查看 [为您的插件添加环境变量](https://github.com/alexbelgium/hassio-addons/wiki/Add-Environment-variables-to-your-Addon-2)

## 安装

这个插件的安装非常简单，与安装任何其他 Hass.io 插件没有区别。

1. 将我的 Hass.io 插件仓库 [repository] 添加到您的 Hass.io 实例。
1. 安装此插件。
1. 点击 `保存` 按钮以保存您的配置。
1. 启动插件。
1. 检查插件的日志以查看是否一切正常。
1. 导航到 Web 界面以完成初始设置。

## 设置步骤

1. **初始设置**：启动插件后，导航到 Web 界面
2. **创建管理员账户**：创建您的第一个管理员用户账户
3. **配置同步**：设置您的 Joplin 客户端与服务器同步
4. **可选数据库**：考虑切换到 PostgreSQL 以获得更好的性能
5. **电子邮件服务**：配置电子邮件服务以用于用户管理功能

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
