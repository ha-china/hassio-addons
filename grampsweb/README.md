# Home Assistant 插件：Grampsweb

我在业余时间维护这个和其他 Home Assistant 插件：跟踪上游更改、HA 更改以及在实际硬件上的测试需要花费很多时间（以及一些金钱）。我经常使用我 >110 个插件中的 5-10 个，所以我安装了测试机器（并购买了一些我本人不使用的测试服务，如 vpn），用于故障排除和改进插件。

如果这个插件为您节省了时间或使您的设置变得更简单，我将非常感激您的支持！

[![给我买杯咖啡][donation-badge]](https://www.buymeacoffee.com/alexbelgium)
[![通过 PayPal 捐赠][paypal-badge]](https://www.paypal.com/donate/?hosted_button_id=DZFULJZTP3UQA)

## 插件信息

![版本](https://img.shields.io/badge/dynamic/yaml?label=Version&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fgrampsweb%2Fconfig.yaml)
![入口](https://img.shields.io/badge/dynamic/yaml?label=Ingress&query=%24.ingress&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fgrampsweb%2Fconfig.yaml)
![架构](https://img.shields.io/badge/dynamic/yaml?color=success&label=Arch&query=%24.arch&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fgrampsweb%2Fconfig.yaml)

[![Codacy 徽章](https://app.codacy.com/project/badge/Grade/9c6cf10bdbba45ecb202d7f579b5be0e)](https://www.codacy.com/gh/alexbelgium/hassio-addons/dashboard?utm_source=github.com&utm_medium=referral&utm_content=alexbelgium/hassio-addons&utm_campaign=Badge_Grade)
[![GitHub Super-Linter](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/weekly-supelinter.yaml?label=Lint%20code%20base)](https://github.com/alexbelgium/hassio-addons/actions/workflows/weekly-supelinter.yaml)
[![Builder](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/onpush_builder.yaml?label=Builder)](https://github.com/alexbelgium/hassio-addons/actions/workflows/onpush_builder.yaml)

[donation-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee-%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white
[paypal-badge]: https://img.shields.io/badge/Donate%20via%20PayPal-0070BA?logo=paypal&style=flat&logoColor=white

_感谢所有为我仓库加星的人！要加星，请点击下面的图片，然后它将出现在右上角。谢谢！_

[![Stargazers repo roster for @alexbelgium/hassio-addons](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/.github/stars2.svg)](https://github.com/alexbelgium/hassio-addons/stargazers)

![下载趋势](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/grampsweb/stats.png)

## 关于

---

[Gramps Web](https://github.com/gramps-project/gramps-web) 是一个用于创建和共享家谱的 Web 应用程序。它是免费和开源的族谱软件 Gramps 的 Web 前端。

Gramps Web 提供以下功能：
- 现代化的族谱研究 Web 界面
- 多用户支持，具有用户管理功能
- 支持丰富的媒体（照片、文档等）
- 先进的搜索和过滤功能
- 生成图表和报告
- 支持多种格式的导入/导出功能
- 提供 RESTful API 以实现集成

此插件基于官方 Gramps Web 项目：https://github.com/gramps-project/gramps-web

## 配置

---

Webui 可以在 <http://homeassistant:5000> 找到。

### 选项

| 选项 | 类型 | 默认值 | 描述 |
|------|------|---------|------|
| `CELERY_NUM_WORKERS` | int | `2` | 后台任务的 Celery 工作进程数量 |
| `GUNICORN_NUM_WORKERS` | int | `8` | Web 请求的 Gunicorn 工作进程数量 |
| `GRAMPSWEB_SECRET_KEY` | str | - | 用于会话安全的密钥（未设置时自动生成） |
| `GRAMPSWEB_BASE_URL` | str | - | 应用的基础 URL |
| `ssl` | bool | `false` | 启用 SSL/TLS |
| `certfile` | str | `fullchain.pem` | SSL 证书文件 |
| `keyfile` | str | `privkey.pem` | SSL 私钥文件 |

### 邮件配置（可选）

| 选项 | 类型 | 描述 |
|------|------|------|
| `GRAMPSWEB_EMAIL_HOST` | str | SMTP 服务器主机名 |
| `GRAMPSWEB_EMAIL_PORT` | int | SMTP 服务器端口 |
| `GRAMPSWEB_EMAIL_USE_SSL` | bool | 使用 SSL 加密（适用于端口 465） |
| `GRAMPSWEB_EMAIL_USE_STARTTLS` | bool | 使用 STARTTLS 加密（适用于端口 587） |
| `GRAMPSWEB_EMAIL_HOST_USER` | str | SMTP 用户名 |
| `GRAMPSWEB_EMAIL_HOST_PASSWORD` | str | SMTP 密码 |
| `GRAMPSWEB_DEFAULT_FROM_EMAIL` | str | 默认发送者电子邮件地址 |

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
GRAMPSWEB_EMAIL_USE_STARTTLS: true
GRAMPSWEB_EMAIL_HOST_USER: "your-email@gmail.com"
GRAMPSWEB_EMAIL_HOST_PASSWORD: "your-app-password"
GRAMPSWEB_DEFAULT_FROM_EMAIL: "gramps@example.com"
```

### 自定义脚本和环境变量

此插件通过 `addon_config` 映射支持自定义脚本和环境变量：

- **自定义脚本**：请参阅 [在插件中运行自定义脚本](https://github.com/alexbelgium/hassio-addons/wiki/Running-custom-scripts-in-Addons)
- **env_vars 选项**：使用插件的 `env_vars` 选项传递额外的环境变量（使用大写或小写名称）。请参阅 https://github.com/alexbelgium/hassio-addons/wiki/Add-Environment-variables-to-your-Addon-2 获取详细信息。

## 安装

---

此插件的安装相当简单，与安装任何其他插件没有区别。

1. 将我的插件仓库添加到您的 Home Assistant 实例中（在 supervisor 插件存储的右上角，或点击下面的按钮如果您已配置我的 HA）
   [![打开您的 Home Assistant 实例并显示带有特定仓库 URL 预填充的添加插件仓库对话框](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2Falexbelgium%2Fhassio-addons)
1. 安装此插件。
1. 点击 `保存` 按钮以存储您的配置。
1. 将插件选项设置为您的偏好设置
1. 启动插件。
1. 检查插件的日志以查看一切是否顺利。
1. 打开 WebUI 并设置您的第一个用户帐户

## 首次设置

---

启动插件后的第一次：

1. 导航到 Web 界面
2. 创建管理员用户帐户
3. 设置您的族谱数据库
4. 导入现有的 GEDCOM 文件或开始创建您的家谱
5. 配置用户权限和共享设置

## 数据存储

此插件在 `/config` 目录的几个位置存储数据：
- **数据库**：`/config/config/` - 主要 Gramps 数据库文件
- **媒体**：`/config/media/` - 照片、文档和其他媒体文件
- **用户**：`/config/users/` - 用户帐户和身份验证数据
- **缓存**：`/config/cache/` - 临时文件和报告
- **搜索索引**：`/config/indexdir/` - 搜索索引数据

## 备份建议

为了数据安全，请定期备份：
- 整个 `/config` 目录（包含所有数据）
- 从 Web 界面导出 GEDCOM 文件
- 记录您的用户帐户和权限

## 性能调整

- **CELERY_NUM_WORKERS**：根据您的系统 CPU 核心数进行调整
- **GUNICORN_NUM_WORKERS**：对于更多并发用户，增加数量
- 考虑使用外部 MySQL/PostgreSQL 数据库以获得更好的性能

## 支持

在 github 上创建问题

[仓库](https://github.com/alexbelgium/hassio-addons)
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
