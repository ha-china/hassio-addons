## ⚠️ Open Issue : [🐛 [Seafile] 12.0.14 未启动（已打开 2025-09-15）](https://github.com/alexbelgium/hassio-addons/issues/2104) by [@KoalaMontana](https://github.com/KoalaMontana)
# Home assistant 插件：seafile

我利用业余时间维护这个和其他 Home Assistant 插件：跟上上游的更改、HA 的更改，并在真实硬件上测试需要大量时间（和一些金钱）。我大约使用我 110 多个插件中的 5 到 10 个，所以我会安装测试机器（和一些我自己的测试服务，如 VPN）来调试和改进插件。

如果这个插件节省了您的时间或使您的设置更简单，我将非常感谢您的支持！

[![给我买咖啡][donation-badge]](https://www.buymeacoffee.com/alexbelgium)
[![通过 PayPal 捐赠][paypal-badge]](https://www.paypal.com/donate/?hosted_button_id=DZFULJZTP3UQA)

## 插件信息

![版本](https://img.shields.io/badge/dynamic/yaml?label=版本&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fseafile%2Fconfig.yaml)
![入口](https://img.shields.io/badge/dynamic/yaml?label=入口&query=%24.ingress&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fseafile%2Fconfig.yaml)
![架构](https://img.shields.io/badge/dynamic/yaml?color=success&label=架构&query=%24.arch&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fseafile%2Fconfig.yaml)

[![Codacy 徽章](https://app.codacy.com/project/badge/Grade/9c6cf10bdbba45ecb202d7f579b5be0e)](https://www.codacy.com/gh/alexbelgium/hassio-addons/dashboard?utm_source=github.com&utm_medium=referral&utm_content=alexbelgium/hassio-addons&utm_campaign=Badge_Grade)
[![GitHub Super-Linter](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/weekly-supelinter.yaml?label=Lint%20code%20base)](https://github.com/alexbelgium/hassio-addons/actions/workflows/weekly-supelinter.yaml)
[![构建者](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/onpush_builder.yaml?label=构建者)](https://github.com/alexbelgium/hassio-addons/actions/workflows/onpush_builder.yaml)

[donation-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee-%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white
[paypal-badge]: https://img.shields.io/badge/Donate%20via%20PayPal-0070BA?logo=paypal&style=flat&logoColor=white

_感谢所有给我的仓库加星的人！要加星，请点击下面的图片，然后它将在右上角。谢谢！_

[![@alexbelgium/hassio-addons 的星标者仓库列表](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/.github/stars2.svg)](https://github.com/alexbelgium/hassio-addons/stargazers)

![下载趋势](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/seafile/stats.png)

## 关于

---

高性能文件同步和共享，还支持 Markdown WYSIWYG 编辑、维基、文件标签和其他知识管理功能。

这个插件基于 Docker 镜像 [https://hub.docker.com/r/franchetti/seafile-arm](https://hub.docker.com/r/franchetti/seafile-arm)

## 安装

---

这个插件的安装非常直接，与安装任何其他插件没有区别。

1. 将我的插件仓库添加到您的 Home Assistant 实例中（在 supervisor 插件商店的右上角，或者如果您已经配置了我的 HA，请点击下面的按钮）
   [![打开您的 Home Assistant 实例并显示带有特定仓库 URL 预填充的添加插件仓库对话框。](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2Falexbelgium%2Fhassio-addons)
1. 安装这个插件。
1. 点击 `保存` 按钮以保存您的配置。
1. 设置插件的选项以符合您的偏好
1. 启动插件。
1. 检查插件的日志以查看是否一切正常。
1. 打开 WebUI 并调整软件选项

## 配置

使用插件的 `env_vars` 选项传递额外的环境变量（名称大小写均可）。有关详细信息，请参阅 https://github.com/alexbelgium/hassio-addons/wiki/Add-Environment-variables-to-your-Addon-2。

Webui 位于 <http://homeassistant:8000>（Seahub）和 <http://homeassistant:8082>（文件服务器）。

### 设置步骤

1. 默认登录：`me@example.com` / `a_very_secret_password`
2. 首次登录后更改管理员凭据
3. 配置数据库（默认为 SQLite，推荐生产环境使用 MariaDB）
4. 设置正确的文件服务器根 URL 以供外部访问

> **文件服务器 URL**：插件现在直接将 `SERVICE_URL` 和 `FILE_SERVER_ROOT` 写入 `conf/seahub_settings.py`。`SERVICE_URL` 使用设置时的 `url` 选项（否则为 `SERVER_IP` 并使用端口 `8000`），而 `FILE_SERVER_ROOT` 遵循 `FILE_SERVER_ROOT` 选项（默认为 `http://<your host>:8082`）。保持 `FILE_SERVER_ROOT` 与您的可访问文件服务器端点一致，以便下载链接正确解析。

### 选项

| 选项 | 类型 | 默认 | 描述 |
|------|------|------|------|
| `PGID` | int | `1000` | 文件权限的组 ID |
| `PUID` | int | `1000` | 文件权限的用户 ID |
| `TZ` | str | `Europe/Paris` | 时区（例如，`Europe/London`） |
| `SEAFILE_ADMIN_EMAIL` | email | `me@example.com` | 管理员电子邮件地址 |
| `SEAFILE_ADMIN_PASSWORD` | password | `a_very_secret_password` | 管理员密码 |
| `SERVER_IP` | str | `homeassistant.local` | 服务器 IP 或主机名 |
| `FILE_SERVER_ROOT` | str | `http://homeassistant.local:8082` | 文件服务器根 URL |
| `PORT` | str | `8082` | 文件服务器端口 |
| `url` | str | | Seafile 的外部 URL |
| `database` | list | `sqlite` | 数据库类型（sqlite/mariadb_addon） |
| `data_location` | str | `/share/seafile` | 数据存储位置 |
| `CONFIG_LOCATION` | str | | 自定义配置文件位置 |
| `localdisks` | str | | 要挂载的本地驱动器（例如，`sda1,sdb1`） |
| `networkdisks` | str | | 要挂载的 SMB 共享（例如，`//SERVER/SHARE`） |
| `cifsusername` | str | | SMB 网络共享的用户名 |
| `cifspassword` | str | | SMB 网络共享的密码 |
| `cifsdomain` | str | | SMB 网络共享的域 |

### 示例配置

```yaml
PGID: 1000
PUID: 1000
TZ: "Europe/London"
SEAFILE_ADMIN_EMAIL: "admin@mydomain.com"
SEAFILE_ADMIN_PASSWORD: "SecurePassword123"
SERVER_IP: "192.168.1.100"
FILE_SERVER_ROOT: "https://seafile.mydomain.com:8082"
url: "seafile.mydomain.com"
database: "mariadb_addon"
data_location: "/share/seafile"
localdisks: "sda1,sdb1"
networkdisks: "//nas.local/seafile"
cifsusername: "seafileuser"
cifspassword: "password123"
cifsdomain: "workgroup"
```

### 挂载驱动器

这个插件支持挂载本地驱动器和远程 SMB 共享：

- **本地驱动器**：请参阅 [在插件中挂载本地驱动器](https://github.com/alexbelgium/hassio-addons/wiki/Mounting-Local-Drives-in-Addons)
- **远程共享**：请参阅 [在插件中挂载远程共享](https://github.com/alexbelgium/hassio-addons/wiki/Mounting-remote-shares-in-Addons)

**重要**：如果将数据库存储在挂载的驱动器上，请确保 SQLite 数据库也托管在那里，以防止挂载问题时数据丢失。

## 支持

在 github 上创建问题

## 插图

---

![插图](https://seafile.com/img/slider/artistdetails.png)

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
