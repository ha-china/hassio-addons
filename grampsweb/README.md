# Home assistant add-on: Grampsweb

[![Donate][donation-badge]](https://www.buymeacoffee.com/alexbelgium)
[![Donate][paypal-badge]](https://www.paypal.com/donate/?hosted_button_id=DZFULJZTP3UQA)

![Version](https://img.shields.io/badge/dynamic/yaml?label=版本&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fgrampsweb%2Fconfig.yaml)
![Ingress](https://img.shields.io/badge/dynamic/yaml?label=Ingress&query=%24.ingress&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fgrampsweb%2Fconfig.yaml)
![Arch](https://img.shields.io/badge/dynamic/yaml?color=success&label=Arch&query=%24.arch&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fgrampsweb%2Fconfig.yaml)

[![Codacy Badge](https://app.codacy.com/project/badge/Grade/9c6cf10bdbba45ecb202d7f579b5be0e)](https://www.codacy.com/gh/alexbelgium/hassio-addons/dashboard?utm_source=github.com&utm_medium=referral&utm_content=alexbelgium/hassio-addons&utm_campaign=Badge_Grade)
[![GitHub Super-Linter](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/weekly-supelinter.yaml?label=Lint%20code%20base)](https://github.com/alexbelgium/hassio-addons/actions/workflows/weekly-supelinter.yaml)
[![Builder](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/onpush_builder.yaml?label=Builder)](https://github.com/alexbelgium/hassio-addons/actions/workflows/onpush_builder.yaml)

[donation-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee%20(no%20paypal)-%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white
[paypal-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee%20with%20Paypal-0070BA?logo=paypal&style=flat&logoColor=white

_感谢大家给我的仓库点赞！点击下面的图片点赞，它将出现在右上角。谢谢！_

[![Stargazers repo roster for @alexbelgium/hassio-addons](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/.github/stars2.svg)](https://github.com/alexbelgium/hassio-addons/stargazers)

![downloads evolution](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/grampsweb/stats.png)

## 关于

---

[Gramps Web](https://github.com/gramps-project/gramps-web) 是一个用于创建和共享家谱的网页应用程序。它是 Gramps 的网页前端，Gramps 是一款免费开源的家谱软件。

Gramps Web 提供：
- 现代化的家谱研究网页界面
- 多用户支持与用户管理
- 丰富的媒体支持（照片、文档等）
- 高级搜索和过滤功能
- 图表和报告生成
- 各种格式的导入/导出功能
- RESTful API 用于集成

这个插件基于官方的 Gramps Web 项目：https://github.com/gramps-project/gramps-web

## 配置

---

Webui 可以在 <http://homeassistant:5000> 上找到。

### 选项

| 选项 | 类型 | 默认值 | 描述 |
|------|------|--------|------|
| `CELERY_NUM_WORKERS` | 整数 | `2` | 用于后台任务的 Celery 工作线程数量 |
| `GUNICORN_NUM_WORKERS` | 整数 | `8` | 用于网页请求的 Gunicorn 工作线程数量 |
| `GRAMPSWEB_SECRET_KEY` | 字符串 | - | 会话安全密钥（如果未设置，将自动生成） |
| `GRAMPSWEB_BASE_URL` | 字符串 | - | 应用程序的基本 URL |
| `ssl` | 布尔值 | `false` | 启用 SSL/TLS |
| `certfile` | 字符串 | `fullchain.pem` | SSL 证书文件 |
| `keyfile` | 字符串 | `privkey.pem` | SSL 私有密钥文件 |

### 邮件配置（可选）

| 选项 | 类型 | 描述 |
|------|------|------|
| `GRAMPSWEB_EMAIL_HOST` | 字符串 | SMTP 服务器主机名 |
| `GRAMPSWEB_EMAIL_PORT` | 整数 | SMTP 服务器端口 |
| `GRAMPSWEB_EMAIL_USE_TLS` | 布尔值 | 使用 TLS 加密 |
| `GRAMPSWEB_EMAIL_HOST_USER` | 字符串 | SMTP 用户名 |
| `GRAMPSWEB_EMAIL_HOST_PASSWORD` | 字符串 | SMTP 密码 |
| `GRAMPSWEB_DEFAULT_FROM_EMAIL` | 字符串 | 默认发件人电子邮件地址 |

### 示例配置

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
GRAMPSWEB_EMAIL_USE_TLS: true
GRAMPSWEB_EMAIL_HOST_USER: "your-email@gmail.com"
GRAMPSWEB_EMAIL_HOST_PASSWORD: "your-app-password"
GRAMPSWEB_DEFAULT_FROM_EMAIL: "gramps@example.com"
```

### 自定义脚本和环境变量

这个插件支持自定义脚本和环境变量，通过 `addon_config` 映射：

- **自定义脚本**：参见 [在插件中运行自定义脚本](https://github.com/alexbelgium/hassio-addons/wiki/Running-custom-scripts-in-Addons)
- **环境变量**：参见 [为您的插件添加环境变量](https://github.com/alexbelgium/hassio-addons/wiki/Add-Environment-variables-to-your-Addon)

## 安装

---

这个插件的安装非常简单，与其他插件的安装方式相同。

1. 将我的插件仓库添加到您的 home assistant 实例中（在 supervisor 插件商店的右上角，或者如果您已配置我的 HA，点击下面的按钮）
   [![打开您的 Home Assistant 实例并显示添加插件仓库对话框，并预填特定的仓库 URL。](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2Falexbelgium%2Fhassio-addons)
1. 安装此插件。
1. 点击 `保存` 按钮以保存您的配置。
1. 根据您的偏好设置插件选项。
1. 启动插件。
1. 检查插件的日志，看看是否一切正常。
1. 打开 WebUI 并设置您的第一个用户账户

## 首次设置

---

首次启动插件后：

1. 导航到网页界面。
2. 创建一个管理员用户账户。
3. 设置您的家谱数据库。
4. 导入现有的 GEDCOM 文件或开始创建您的家族树。
5. 配置用户权限和共享设置

## 数据存储

插件在 `/config` 目录的多个位置存储数据：
- **数据库**：`/config/config/` - 主 Gramps 数据库文件
- **媒体**：`/config/media/` - 照片、文档和其他媒体文件
- **用户**：`/config/users/` - 用户账户和认证数据
- **缓存**：`/config/cache/` - 临时文件和报告
- **搜索索引**：`/config/indexdir/` - 搜索索引数据

## 备份建议

为了数据安全，定期备份：
- 整个 `/config` 目录（包含所有数据）
- 从网页界面导出 GEDCOM 文件
- 记录您的用户账户和权限

## 性能调优

- **CELERY_NUM_WORKERS**：根据您的系统 CPU 核心数量调整
- **GUNICORN_NUM_WORKERS**：增加以支持更多并发用户
- 考虑使用外部的 MySQL/PostgreSQL 数据库以提高性能

## 支持

在 github 上创建问题

[repository]: https://github.com/alexbelgium/hassio-addons