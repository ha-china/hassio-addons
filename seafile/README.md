# Home assistant add-on: seafile


我利用业余时间维护这个和其他Home Assistant add-ons：跟上上游的变化、HA的变化，以及在真实硬件上测试需要大量时间（和一些金钱）。我大约使用我超过110个add-ons中的5-10个，因此我安装了一些测试机器（和一些我自己的测试服务，如vpn），以便我可以在不使用的情况下进行故障排除和改进add-ons。

如果这个add-on为您节省了时间或使您的设置更简单，我将非常感谢您的支持！

[![Buy me a coffee][donation-badge]](https://www.buymeacoffee.com/alexbelgium)
[![Donate via PayPal][paypal-badge]](https://www.paypal.com/donate/?hosted_button_id=DZFULJZTP3UQA)

## Addon informations

![Version](https://img.shields.io/badge/dynamic/yaml?label=Version&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fseafile%2Fconfig.yaml)
![Ingress](https://img.shields.io/badge/dynamic/yaml?label=Ingress&query=%24.ingress&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fseafile%2Fconfig.yaml)
![Arch](https://img.shields.io/badge/dynamic/yaml?color=success&label=Arch&query=%24.arch&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fseafile%2Fconfig.yaml)

[![Codacy Badge](https://app.codacy.com/project/badge/Grade/9c6cf10bdbba45ecb202d7f579b5be0e)](https://www.codacy.com/gh/alexbelgium/hassio-addons/dashboard?utm_source=github.com&utm_medium=referral&utm_content=alexbelgium/hassio-addons&utm_campaign=Badge_Grade)
[![GitHub Super-Linter](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/weekly-supelinter.yaml?label=Lint%20code%20base)](https://github.com/alexbelgium/hassio-addons/actions/workflows/weekly-supelinter.yaml)
[![Builder](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/onpush_builder.yaml?label=Builder)](https://github.com/alexbelgium/hassio-addons/actions/workflows/onpush_builder.yaml)

[donation-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee-%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white
[paypal-badge]: https://img.shields.io/badge/Donate%20via%20PayPal-0070BA?logo=paypal&style=flat&logoColor=white

_感谢所有给我的仓库点赞的人！点击下面的图片给它点赞，它就会出现在右上角。谢谢！_

[![Stargazers repo roster for @alexbelgium/hassio-addons](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/.github/stars2.svg)](https://github.com/alexbelgium/hassio-addons/stargazers)

![downloads evolution](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/seafile/stats.png)

## About

---

高性能文件同步和共享，同时还有Markdown WYSIWYG编辑、Wiki、文件标签和其他知识管理功能。

这个add-on基于的docker镜像 [https://hub.docker.com/r/franchetti/seafile-arm](https://hub.docker.com/r/franchetti/seafile-arm)

## Installation

---

这个add-on的安装非常简单，与安装任何其他add-on没有区别。

1. 将我的add-ons仓库添加到您的Home Assistant实例中（在supervisor add-ons商店右上角，或者如果您已经配置了我的HA，请点击下面的按钮）
   [![打开您的Home Assistant实例并显示添加add-on仓库对话框，其中预填充了特定的仓库URL。](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2Falexbelgium%2Fhassio-addons)
1. 安装这个add-on。
1. 点击`Save`按钮以保存您的配置。
1. 设置add-on选项以符合您的偏好
1. 启动add-on。
1. 检查add-on的日志以查看是否一切正常。
1. 打开webUI并调整软件选项

## Configuration

使用add-on的`env_vars`选项传递额外的环境变量（大小写名称）。有关详细信息，请参阅 https://github.com/alexbelgium/hassio-addons/wiki/Add-Environment-variables-to-your-Addon-2。

Webui可以在<http://homeassistant:8000>（Seahub）和<http://homeassistant:8082>（文件服务器）找到。

### Setup Steps

1. 默认登录：`me@example.com` / `a_very_secret_password`
2. 首次登录后更改管理员凭据
3. 配置数据库（默认为SQLite，推荐在生产环境中使用MariaDB）
4. 设置正确的文件服务器根URL以供外部访问

> **文件服务器URL**：这个add-on现在直接将`SERVICE_URL`和`FILE_SERVER_ROOT`写入`conf/seahub_settings.py`。`SERVICE_URL`使用设置时的`url`选项（否则为`SERVER_IP`端口`8000`），而`FILE_SERVER_ROOT`遵循`FILE_SERVER_ROOT`选项（默认为`http://<your host>:8082`）。保持`FILE_SERVER_ROOT`与您的可访问文件服务器端点一致，以便下载链接正确解析。

### Options

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `PGID` | int | `1000` | 文件权限的组ID |
| `PUID` | int | `1000` | 文件权限的用户ID |
| `TZ` | str | `Europe/Paris` | 时区（例如，`Europe/London`） |
| `SEAFILE_ADMIN_EMAIL` | email | `me@example.com` | 管理员电子邮件地址 |
| `SEAFILE_ADMIN_PASSWORD` | password | `a_very_secret_password` | 管理员密码 |
| `SERVER_IP` | str | `homeassistant.local` | 服务器IP或主机名 |
| `FILE_SERVER_ROOT` | str | `http://homeassistant.local:8082` | 文件服务器根URL |
| `PORT` | str | `8082` | 文件服务器端口 |
| `url` | str | | Seafile的外部URL |
| `database` | list | `sqlite` | 数据库类型（sqlite/mariadb_addon） |
| `data_location` | str | `/share/seafile` | 数据存储位置 |
| `CONFIG_LOCATION` | str | | 自定义配置文件位置 |
| `localdisks` | str | | 要挂载的本地驱动器（例如，`sda1,sdb1`） |
| `networkdisks` | str | | 要挂载的SMB共享（例如，`//SERVER/SHARE`） |
| `cifsusername` | str | | SMB网络共享的用户名 |
| `cifspassword` | str | | SMB网络共享的密码 |
| `cifsdomain` | str | | 网络共享的SMB域 |

### Example Configuration

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

### Mounting Drives

这个add-on支持挂载本地驱动器和远程SMB共享：

- **本地驱动器**：参见 [在Add-ons中挂载本地驱动器](https://github.com/alexbelgium/hassio-addons/wiki/Mounting-Local-Drives-in-Addons)
- **远程共享**：参见 [在Add-ons中挂载远程共享](https://github.com/alexbelgium/hassio-addons/wiki/Mounting-remote-shares-in-Addons)

**重要**：如果将数据库存储在挂载的驱动器上，请确保SQLite数据库也托管在那里，以防止挂载问题时数据丢失。

## Support

在github上创建问题

## Illustration

---

![illustration](https://seafile.com/img/slider/artistdetails.png)

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
