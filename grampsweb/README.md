# 家居助理插件：Grampsweb


我在业余时间维护这个以及其他Home Assistant插件：跟进上游更改、HA更改以及在实际硬件上进行测试需要花费大量的时间和金钱。我经常使用大约5-10个我的>110个插件，所以我安装了测试机器（并购买了一些我自己不使用的测试服务，如vpn），用于调试和改进插件。

如果这个插件为您节省了时间或使您的设置更简单，我将非常感激您的支持！

[![给我买杯咖啡][捐赠徽章]](https://www.buymeacoffee.com/alexbelgium)
[![通过PayPal捐赠][paypal徽章]](https://www.paypal.com/donate/?hosted_button_id=DZFULJZTP3UQA)

## 插件信息

![版本](https://img.shields.io/badge/dynamic/yaml?label=Version&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fgrampsweb%2Fconfig.yaml)
![入口](https://img.shields.io/badge/dynamic/yaml?label=Ingress&query=%24.ingress&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fgrampsweb%2Fconfig.yaml)
![架构](https://img.shields.io/badge/dynamic/yaml?color=success&label=Arch&query=%24.arch&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fgrampsweb%2Fconfig.yaml)

[![Codacy徽章](https://app.codacy.com/project/badge/Grade/9c6cf10bdbba45ecb202d7f579b5be0e)](https://www.codacy.com/gh/alexbelgium/hassio-addons/dashboard?utm_source=github.com&utm_medium=referral&utm_content=alexbelgium/hassio-addons&utm_campaign=Badge_Grade)
[![GitHub Super-Linter](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/weekly-supelinter.yaml?label=Lint%20code%20base)](https://github.com/alexbelgium/hassio-addons/actions/workflows/weekly-supelinter.yaml)
[![Builder](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/onpush_builder.yaml?label=Builder)](https://github.com/alexbelgium/hassio-addons/actions/workflows/onpush_builder.yaml)

[捐赠徽章]: https://img.shields.io/badge/Buy%20me%20a%20coffee-%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white
[paypal徽章]: https://img.shields.io/badge/Donate%20via%20PayPal-0070BA?logo=paypal&style=flat&logoColor=white

_感谢所有为我仓库点赞的人！要给它点赞，请点击下面的图片，然后它就会显示在右上角。谢谢！_

[![Stargazers repo roster for @alexbelgium/hassio-addons](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/.github/stars2.svg)](https://github.com/alexbelgium/hassio-addons/stargazers)

![下载趋势](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/grampsweb/stats.png)

## 关于

---

[Gramps Web](https://github.com/gramps-project/gramps-web) 是一个创建和共享家谱的网页应用。它是免费开源的家谱软件Gramps的网页前端。

Gramps Web提供：
- 适用于家谱研究的现代化网页界面
- 多用户支持，带有用户管理
- 支持丰富媒体（照片、文档等）
- 先进的搜索和过滤功能
- 图表和报告生成
- 支持多种格式的导入/导出功能
- 用于集成的RESTful API

此插件基于官方Gramps Web项目：https://github.com/gramps-project/gramps-web

## 配置

---

Webui可以在 <http://homeassistant:5000> 找到。

### 选项

| 选项 | 类型 | 默认值 | 描述 |
|--------|------|---------|-------------|
| `CELERY_NUM_WORKERS` | int | `2` | 后台任务的Celery工作进程数 |
| `GUNICORN_NUM_WORKERS` | int | `8` | 网页请求的Gunicorn工作进程数 |
| `GRAMPSWEB_SECRET_KEY` | str | - | 用于会话安全的密钥（未设置时自动生成） |
| `GRAMPSWEB_BASE_URL` | str | - | 应用程序的基本URL |
| `ssl` | bool | `false` | 启用SSL/TLS |
| `certfile` | str | `fullchain.pem` | SSL证书文件 |
| `keyfile` | str | `privkey.pem` | SSL私钥文件 |

### 邮件配置（可选）

| 选项 | 类型 | 描述 |
|--------|------|-------------|
| `GRAMPSWEB_EMAIL_HOST` | str | SMTP服务器主机名 |
| `GRAMPSWEB_EMAIL_PORT` | int | SMTP服务器端口 |
| `GRAMPSWEB_EMAIL_USE_SSL` | bool | 使用SSL加密（用于端口465） |
| `GRAMPSWEB_EMAIL_USE_STARTTLS` | bool | 使用STARTTLS加密（用于端口587） |
| `GRAMPSWEB_EMAIL_HOST_USER` | str | SMTP用户名 |
| `GRAMPSWEB_EMAIL_HOST_PASSWORD` | str | SMTP密码 |
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

此插件通过`addon_config`映射支持自定义脚本和环境变量：

- **自定义脚本**：请参阅[在插件中运行自定义脚本](https://github.com/alexbelgium/hassio-addons/wiki/Running-custom-scripts-in-Addons)
- **env_vars选项**：使用插件的`env_vars`选项传递额外的环境变量（使用大写或小写名称）。请参阅https://github.com/alexbelgium/hassio-addons/wiki/Add-Environment-variables-to-your-Addon-2 获取详细信息。

## 安装

---

此插件的安装非常简单，与安装任何其他插件没有太大区别。

1. 将我的插件存储库添加到您的Home Assistant实例中（在supervisor插件存储库的右上角，或点击下面的按钮如果您已经配置了HA）
   [![打开您的Home Assistant实例并显示具有特定存储库URL预先填充的添加插件存储库对话框](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2Falexbelgium%2Fhassio-addons)
1. 安装此插件。
1. 点击`保存`按钮以存储您的配置。
1. 将插件选项设置为您的偏好。
1. 启动插件。
1. 检查插件的日志以查看一切是否顺利。
1. 打开WebUI并设置您的第一个用户帐户

## 首次设置

---

在首次启动插件后：

1. 导航到Web界面
2. 创建一个管理员用户帐户
3. 设置您的家谱数据库
4. 导入现有的GEDCOM文件或开始创建您的家谱
5. 配置用户权限和共享设置

## 数据存储

插件在`/config`目录中的多个位置存储数据：
- **数据库**：`/config/config/` - 主Gramps数据库文件
- **媒体**：`/config/media/` - 照片、文档和其他媒体文件
- **用户**：`/config/users/` - 用户帐户和认证数据
- **缓存**：`/config/cache/` - 临时文件和报告
- **搜索索引**：`/config/indexdir/` - 搜索索引数据

## 备份建议

为了数据安全，请定期备份：
- 整个`/config`目录（包含所有数据）
- 从Web界面导出GEDCOM文件
- 记录您的用户帐户和权限

## 性能调整

- **CELERY_NUM_WORKERS**：根据您的系统CPU核心数进行调整
- **GUNICORN_NUM_WORKERS**：增加以支持更多并发用户
- 考虑使用外部MySQL/PostgreSQL数据库以提高性能

## 支持

在github上创建问题

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
