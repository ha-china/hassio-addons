# Home assistant 附加组件：Grampsweb

我就时间闲暇维护此及其他 Home Assistant 附加组件：跟进上游更改、HA 更改，以及在真实硬件上进行测试需要耗费大量时间（以及一些金钱）。我使用了约 5-10 个我的 >110 个附加组件，因此我安装测试机器（并购买一些我自己不使用的测试服务，例如 vpn）来排查和改进行附加组件的问题。

If this add-on saves you time or makes your setup easier, I would be very grateful for your support!
（如果此附加组件为您节省了时间或使您的设置更容易，我将不胜感激您的支持！）

[![Buy me a coffee][donation-badge]](https://www.buymeacoffee.com/alexbelgium)
[![Donate via PayPal][paypal-badge]](https://www.paypal.com/donate/?hosted_button_id=DZFULJZTP3UQA)

## Addon informations

![Version](https://img.shields.io/badge/dynamic/yaml?label=Version&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fgrampsweb%2Fconfig.yaml)
![Ingress](https://img.shields.io/badge/dynamic/yaml?label=Ingress&query=%24.ingress&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fgrampsweb%2Fconfig.yaml)
![Arch](https://img.shields.io/badge/dynamic/yaml?color=success&label=Arch&query=%24.arch&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fgrampsweb%2Fconfig.yaml)

[![Codacy Badge](https://app.codacy.com/project/badge/Grade/9c6cf10bdbba45ecb202d7f579b5be0e)](https://www.codacy.com/gh/alexbelgium/hassio-addons/dashboard?utm_source=github.com&utm_medium=referral&utm_content=alexbelgium/hassio-addons&utm_campaign=Badge_Grade)
[![GitHub Super-Linter](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/weekly-supelinter.yaml?label=Lint%20code%20base)](https://github.com/alexbelgium/hassio-addons/actions/workflows/weekly-supelinter.yaml)
[![Builder](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/onpush_builder.yaml?label=Builder)](https://github.com/alexbelgium/hassio-addons/actions/workflows/onpush_builder.yaml)

[donation-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee-%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white
[paypal-badge]: https://img.shields.io/badge/Donate%20via%20PayPal-0070BA?logo=paypal&style=flat&logoColor=white

_感谢Everyone 为我仓库 starring！star 它请单击下面的图片，然后它将显示在右上角。非常感谢！_

[![Stargazers repo roster for @alexbelgium/hassio-addons](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/.github/stars2.svg)](https://github.com/alexbelgium/hassio-addons/stargazers)

![downloads evolution](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/grampsweb/stats.png)

## About

---

[Gramps Web](https://github.com/gramps-project/gramps-web) 是一个用于创建和共享家谱的 Web 应用程序。它是 Gramps Web 前端的 Gramps，这是一个免费开源的族谱软件。

Gramps Web 提供：
- 用于族谱研究的现代化 Web 界面
- 带有用户管理的多用户支持
- 丰富媒体支持（照片、文档等）
- 高级搜索和过滤能力
- 图表和报告生成
- 各种格式的导入/导出功能
- 用于集成的 RESTful API

此附加组件基于官方的 Gramps Web 项目：https://github.com/gramps-project/gramps-web

## Configuration

---

Webui 可以位于 <http://homeassistant:5000>。

### Options

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `CELERY_NUM_WORKERS` | int | `2` | Celery 任务后台任务的工作者数量 |
| `GUNICORN_NUM_WORKERS` | int | `8` | Web 请求 Gunicorn 工作者数量 |
| `GRAMPSWEB_SECRET_KEY` | str | - | 会话安全的密钥（如果未设置则自动生成） |
| `GRAMPSWEB_BASE_URL` | str | - | 应用程序的基 URL |
| `ssl` | bool | `false` | 启用 SSL/TLS |
| `certfile` | str | `fullchain.pem` | SSL 证书文件 |
| `keyfile` | str | `privkey.pem` | SSL 主密钥文件 |

### Email Configuration (Optional)

| Option | Type | Description |
|--------|------|-------------|
| `GRAMPSWEB_EMAIL_HOST` | str | SMTP 服务器主机名 |
| `GRAMPSWEB_EMAIL_PORT` | int | SMTP 服务器端口 |
| `GRAMPSWEB_EMAIL_USE_SSL` | bool | 使用 SSL 加密（适用于端口 465） |
| `GRAMPSWEB_EMAIL_USE_STARTTLS` | bool | 使用 STARTTLS 加密（适用于端口 587） |
| `GRAMPSWEB_EMAIL_HOST_USER` | str | SMTP 用户名 |
| `GRAMPSWEB_EMAIL_HOST_PASSWORD` | str | SMTP 密码 |
| `GRAMPSWEB_DEFAULT_FROM_EMAIL` | str | 默认发件人电子邮件地址 |

### Example Configuration

```yaml
CELERY_NUM_WORKERS: 2
GUNICORN_NUM_WORKERS: 8
GRAMPSWEB_SECRET_KEY: "your-secret-key-here"
GRAMPSWEB_BASE_URL: "https://gramps.example.com"
ssl: true
certfile: "fullchain.pem"
keyfile: "privkey.pem"
GRAMPSWEB_EMAIL_HOST: "smtp.gmail.com"
GRAMPSWEB_EMAIL_PORT: 587
GRAMPSWEB_EMAIL_USE_STARTTLS: true
GRAMPSWEB_EMAIL_HOST_USER: "your-email@gmail.com"
GRAMPSWEB_EMAIL_HOST_PASSWORD: "your-app-password"
GRAMPSWEB_DEFAULT_FROM_EMAIL: "gramps@example.com"
```

### Custom Scripts and Environment Variables

此附加组件支持通过 `app_config` 映射自定义脚本和环境变量：

- **自定义脚本**：请参阅 [在附加组件中运行自定义脚本](https://github.com/alexbelgium/hassio-addons/wiki/Running-custom-scripts-in-Addons)
- **env_vars option**：使用附加组件的 `env_vars` 选项传递额外的环境变量（名称可大写或小写）。详细说明请访问 https://github.com/alexbelgium/hassio-addons/wiki/Add-Environment-variables-to-your-Addon-2。

## Installation

---

此附加组件的安装非常直接，与其他附加组件别无二致。

1. 将我的附加组件仓库添加到您的 Home Assistant 实例（在 supervisor 附加组件存储器的右上角，或如果您已配置了我的 HA，则单击下面的按钮）
   [![Open your Home Assistant instance and show the add add-on repository dialog with a specific repository URL pre-filled.](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2Falexbelgium%2Fhassio-addons)
1. 安装此附加组件。
1. 点击 `Save` 按钮以存储您的配置。
1. 将附加组件选项设置为您自己的偏好设置
1. 启动附加组件。
1. 检查附加组件的日志以查看一切是否正常。
1. 打开 webUI 并设置您的第一个用户帐户

## First Time Setup

---

在首次启动附加组件后：

1. 浏览到 Web 界面
2. 创建管理员用户账户
3. 设置您的族谱数据库
4. 导入现有的 GEDCOM 文件或开始创建您的家谱
5. 配置用户权限和共享设置

## Data Storage

附加组件在 `/config` 目录的多个位置存储数据：
- **Database**：`/config/config/` - 主要的 Gramps 数据库文件
- **Media**：`/config/media/` - 照片、文档和其他媒体文件
- **Users**：`/config/users/` - 用户账户和认证数据
- **Cache**：`/config/cache/` - 临时文件和报告
- **Search Index**：`/config/indexdir/` - 搜索索引数据

## Backup Recommendations

为了确保数据安全，定期备份：
- 整个 `/config` 目录（包含所有数据）
- 从 Web 界面导出 GEDCOM 文件
- 记录您的用户账户和权限

## Performance Tuning

- **CELERY_NUM_WORKERS**：根据您的系统 CPU 核心进行调整
- **GUNICORN_NUM_WORKERS**：增加以支持更多并发用户
- 考虑使用外部 MySQL/PostgreSQL 数据库以获得更好的性能

## Support

在 github 上创建问题报告

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
