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

_感谢所有给我的仓库星标的人！要星标它，请点击下面的图片，它将在右上角显示。谢谢！_

[![Stargazers repo roster for @alexbelgium/hassio-addons](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/.github/stars2.svg)](https://github.com/alexbelgium/hassio-addons/stargazers)

![下载趋势](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/grampsweb/stats.png)

## 关于

---

[Gramps Web](https://github.com/gramps-project/gramps-web) 是一个用于创建和共享家谱的Web应用程序。它是Gramps的Web前端，Gramps是一款免费且开源的家谱软件。

Gramps Web提供：
- 现代化的家谱研究Web界面
- 多用户支持与用户管理
- 丰富的媒体支持（照片、文档等）
- 高级搜索和过滤功能
- 图表和报告生成
- 多种格式的导入/导出功能
- RESTful API用于集成

这个插件基于官方的Gramps Web项目：https://github.com/gramps-project/gramps-web

## 配置

---

Webui位于 <http://homeassistant:5000>。

### 选项

| 选项 | 类型 | 默认值 | 描述 |
|------|------|--------|------|
| `CELERY_NUM_WORKERS` | int | `2` | 背景任务的Celery工作线程数量 |
| `GUNICORN_NUM_WORKERS` | int | `8` | Web请求的Gunicorn工作线程数量 |
| `GRAMPSWEB_SECRET_KEY` | str | - | 会话安全密钥（如果未设置，则自动生成） |
| `GRAMPSWEB_BASE_URL` | str | - | 应用程序的基URL |
| `ssl` | bool | `false` | 启用SSL/TLS |
| `certfile` | str | `fullchain.pem` | SSL证书文件 |
| `keyfile` | str | `privkey.pem` | SSL私钥文件 |

### 邮件配置（可选）

| 选项 | 类型 | 描述 |
|------|------|------|
| `GRAMPSWEB_EMAIL_HOST` | str | SMTP服务器主机名 |
| `GRAMPSWEB_EMAIL_PORT` | int | SMTP服务器端口 |
| `GRAMPSWEB_EMAIL_USE_TLS` | bool | 使用TLS加密 |
| `GRAMPSWEB_EMAIL_HOST_USER` | str | SMTP用户名 |
| `GRAMPSWEB_EMAIL_HOST_PASSWORD` | str | SMTP密码 |
| `GRAMPSWEB_DEFAULT_FROM_EMAIL` | str | 默认发件人电子邮件地址 |

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

这个插件通过 `addon_config` 映射支持自定义脚本和环境变量：

- **自定义脚本**：参见 [在插件中运行自定义脚本](https://github.com/alexbelgium/hassio-addons/wiki/Running-custom-scripts-in-Addons)
- **环境变量**：参见 [为你的插件添加环境变量](https://github.com/alexbelgium/hassio-addons/wiki/Add-Environment-variables-to-your-Addon)

## 安装

---

这个插件的安装非常简单，与安装任何其他插件没有区别。

1. 将我的插件仓库添加到你的home assistant实例（在supervisor插件商店的右上角，或如果你已经配置了我的HA，点击下面的按钮）
   [![打开你的Home Assistant实例并显示添加插件仓库对话框，预填充特定的仓库URL。](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2Falexbelgium%2Fhassio-addons)
1. 安装这个插件。
1. 点击 `保存` 按钮以存储你的配置。
1. 设置插件选项以符合你的偏好。
1. 启动插件。
1. 检查插件的日志以查看是否一切正常。
1. 打开WebUI并设置你的第一个用户账户

## 首次设置

---

第一次启动插件后：

1. 导航到Web界面
2. 创建一个管理员用户账户
3. 设置你的家谱数据库
4. 导入现有的GEDCOM文件或开始创建你的家谱
5. 配置用户权限和共享设置

## 数据存储

插件在 `/config` 目录的多个位置存储数据：
- **数据库**：`/config/config/` - 主要的Gramps数据库文件
- **媒体**：`/config/media/` - 照片、文档和其他媒体文件
- **用户**：`/config/users/` - 用户账户和认证数据
- **缓存**：`/config/cache/` - 临时文件和报告
- **搜索索引**：`/config/indexdir/` - 搜索索引数据

## 备份建议

为了数据安全，定期备份：
- 整个 `/config` 目录（包含所有数据）
- 从Web界面导出GEDCOM文件
- 记录你的用户账户和权限

## 性能调优

- **CELERY_NUM_WORKERS**：根据你的系统CPU核心数量调整
- **GUNICORN_NUM_WORKERS**：增加以支持更多并发用户
- 考虑使用外部MySQL/PostgreSQL数据库以提高性能

## 支持

在github上创建问题

[repository]: https://github.com/alexbelgium/hassio-addons
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
