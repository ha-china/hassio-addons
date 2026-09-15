# Grampsweb 插件

我在业余时间维护此 Home Assistant 插件及其他插件：跟进上游更改、Home Assistant 本身的更改，以及在实际硬件上进行测试需要花费大量时间（和金钱）。我使用大约 5-10 个超过 110 个插件中的一部分，因此我通常会安装测试机器（并购买一些我自己不使用的测试服务，如 vpn）来排查和改良插件。

如果此插件为您节省了时间或使您的设置更简单，我将不胜感激！

[![Buy me a coffee][donation-badge]](https://www.buymeacoffee.com/alexbelgium)
[![Donate via PayPal][paypal-badge]](https://www.paypal.com/donate/?hosted_button_id=DZFULJZTP3UQA)

## 插件信息

![版本](https://img.shields.io/badge/dynamic/yaml?label=版本&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fgrampsweb%2Fconfig.yaml)
![入口点](https://img.shields.io/badge/dynamic/yaml?label=入口点&query=%24.ingress&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fgrampsweb%2Fconfig.yaml)
![架构](https://img.shields.io/badge/dynamic/yaml?color=success&label=架构&query=%24.arch&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fgrampsweb%2Fconfig.yaml)

[![Codacy 徽章](https://app.codacy.com/project/badge/Grade/9c6cf10bdbba45ecb202d7f579b5be0e)](https://www.codacy.com/gh/alexbelgium/hassio-addons/dashboard?utm_source=github.com&utm_medium=referral&utm_content=alexbelgium/hassio-addons&utm_campaign=Badge_Grade)
[![GitHub Super-Linter](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/weekly-supelinter.yaml?label=代码库检查)](https://github.com/alexbelgium/hassio-addons/actions/workflows/weekly-supelinter.yaml)
[![构建器](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/onpush_builder.yaml?label=构建器)](https://github.com/alexbelgium/hassio-addons/actions/workflows/onpush_builder.yaml)

[donation-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee-%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white
[paypal-badge]: https://img.shields.io/badge/Donate%20via%20PayPal-0070BA?logo=paypal&style=flat&logoColor=white

_感谢所有给我这个项目添加星标的人！要添加星标，请点击下方的图片，它就会显示在右上角。谢谢！_

[![@alexbelgium/hassio-addons 星号仓库轮盘展示](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/.github/stars2.svg)](https://github.com/alexbelgium/hassio-addons/stargazers)

![下载量趋势图](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/grampsweb/stats.png)

## 简介

---

[Gramps Web](https://github.com/gramps-project/gramps-web) 是一个用于创建和共享家谱的 Web 应用程序。它是 Gramps 的 Web 前端，Gramps 是一种免费开源的族谱软件。

Gramps Web 提供：
- 现代化的 Web 界面，用于族谱研究
- 支持多用户功能，具备用户管理
- 丰富的媒体支持（照片、文档等）
- 高级搜索和过滤功能
- 图表和报告生成
- 多种格式的导入/导出功能
- 用于集成的 RESTful API

此插件基于官方的 Gramps Web 项目：https://github.com/gramps-project/gramps-web

## 配置

---

Web 界面位于 <http://homeassistant:5000>。

### 选项

| 选项 | 类型 | 默认值 | 描述 |
|--------|------|---------|-------------|
| `CELERY_NUM_WORKERS` | int | `2` | 用于后台任务的 Celery 工作者数量 |
| `GUNICORN_NUM_WORKERS` | int | `8` | 用于 Web 请求的 Gunicorn 工作者数量 |
| `GRAMPSWEB_SECRET_KEY` | str | - | 用于会话安全的密钥（未设置时自动生成） |
| `GRAMPSWEB_BASE_URL` | str | - | 应用程序的基础 URL |
| `ssl` | bool | `false` | 启用 SSL/TLS |
| `certfile` | str | `fullchain.pem` | SSL 证书文件 |
| `keyfile` | str | `privkey.pem` | SSL 私钥文件 |

### 电子邮件配置（可选）

| 选项 | 类型 | 描述 |
|--------|------|-------------|
| `GRAMPSWEB_EMAIL_HOST` | str | SMTP 服务器主机名 |
| `GRAMPSWEB_EMAIL_PORT` | int | SMTP 服务器端口 |
| `GRAMPSWEB_EMAIL_USE_SSL` | bool | 使用 SSL 加密（端口 465） |
| `GRAMPSWEB_EMAIL_USE_STARTTLS` | bool | 使用 STARTTLS 加密（端口 587） |
| `GRAMPSWEB_EMAIL_HOST_USER` | str | SMTP 用户名 |
| `GRAMPSWEB_EMAIL_HOST_PASSWORD` | str | SMTP 密码 |
| `GRAMPSWEB_DEFAULT_FROM_EMAIL` | str | 默认发件人邮箱地址 |

### 配置示例

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

### 自定义脚本和环境变量

此插件通过 `addon_config` 映射支持自定义脚本和环境变量：

- **自定义脚本**：请参阅 [插件中运行自定义脚本](https://github.com/alexbelgium/hassio-addons/wiki/Running-custom-scripts-in-Addons)
- **env_vars 选项**：使用插件的 `env_vars` 选项传递额外的环境变量（大小写字母均可）。详见 https://github.com/alexbelgium/hassio-addons/wiki/Add-Environment-variables-to-your-Addon-2 了解更多细节。

## 安装

---

此插件的安装非常简单，与其他插件安装没有不同。

1. 将我的插件仓库添加到您的 Home Assistant 实例（在 Supervisor 插件商店顶部右侧，或者如果您已配置了我的 Home Assistant 可点击下方按钮）
   [![打开您的 Home Assistant 实例并显示添加插件仓库对话框，其中包含特定的仓库 URL。](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2Falexbelgium%2Fhassio-addons)
1. 安装此插件。
1. 点击 `保存` 按钮以保存您的配置。
1. 将插件选项设置为您的偏好设置。
1. 启动插件。
1. 检查插件日志查看一切是否正常运行。
1. 打开 Web 界面并设置您的第一个用户账户。

## 首次设置

---

首次启动插件后：

1. 导航到 Web 界面
2. 创建管理员用户账户
3. 设置您的族谱数据库
4. 导入现有的 GEDCOM 文件或开始创建您的家谱
5. 配置用户权限和共享设置

## 数据存储

插件在 `/config` 目录内的几个位置存储数据：
- **数据库**：`/config/config/` - Gramps 主要数据库文件
- **媒体**：`/config/media/` - 照片、文档和其他媒体文件
- **用户**：`/config/users/` - 用户账户和认证数据
- **缓存**：`/config/cache/` - 临时文件和报告
- **搜索索引**：`/config/indexdir/` - 搜索索引数据

## 备份建议

为了确保数据安全，定期备份：
- 整个 `/config` 目录（包含所有数据）
- 从 Web 界面导出 GEDCOM 文件
- 记录您的用户账户和权限

## 性能调整

- **CELERY_NUM_WORKERS**：根据您的系统 CPU 核心数进行调整
- **GUNICORN_NUM_WORKERS**：如需更多并发用户则增加数量
- 如需更好的性能，考虑使用外部 MySQL/PostgreSQL 数据库

## 支持

在 GitHub 上创建问题

[仓库]: https://github.com/alexbelgium/hassio-addons

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
