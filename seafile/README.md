## ⚠️ 开启问题 : [🐛 [Seafile] 12.0.14 未启动 (于 2025-09-15 开启)](https://github.com/alexbelgium/hassio-addons/issues/2104) 由 [@KoalaMontana](https://github.com/KoalaMontana)
# Home assistant 插件：seafile

[![捐赠](https://img.shields.io/badge/Buy%20me%20a%20coffee%20(no%20paypal)%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white)](https://www.buymeacoffee.com/alexbelgium)
[![捐赠](https://img.shields.io/badge/Buy%20me%20a%20coffee%20with%20Paypal%200070BA?logo=paypal&style=flat&logoColor=white)](https://www.paypal.com/donate/?hosted_button_id=DZFULJZTP3UQA)

![版本](https://img.shields.io/badge/dynamic/yaml?label=版本&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fseafile%2Fconfig.yaml)
![入口](https://img.shields.io/badge/dynamic/yaml?label=入口&query=%24.ingress&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fseafile%2Fconfig.yaml)
![架构](https://img.shields.io/badge/dynamic/yaml?color=success&label=架构&query=%24.arch&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fseafile%2Fconfig.yaml)

[![Codacy 徽章](https://app.codacy.com/project/badge/Grade/9c6cf10bdbba45ecb202d7f579b5be0e)](https://www.codacy.com/gh/alexbelgium/hassio-addons/dashboard?utm_source=github.com&utm_medium=referral&utm_content=alexbelgium/hassio-addons&utm_campaign=Badge_Grade)
[![GitHub Super-Linter](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/weekly-supelinter.yaml?label=Lint%20code%20base)](https://github.com/alexbelgium/hassio-addons/actions/workflows/weekly-supelinter.yaml)
[![构建器](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/onpush_builder.yaml?label=构建器)](https://github.com/alexbelgium/hassio-addons/actions/workflows/onpush_builder.yaml)

[donation-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee%20(no%20paypal)%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white
[paypal-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee%20with%20Paypal%200070BA?logo=paypal&style=flat&logoColor=white

_感谢所有给我的仓库点亮星星的人！点击下面的图片即可点亮，它将出现在右上角。谢谢！_

[![Stargazers repo roster for @alexbelgium/hassio-addons](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/.github/stars2.svg)](https://github.com/alexbelgium/hassio-addons/stargazers)

![下载趋势](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/seafile/stats.png)

## 关于

---

高性能文件同步和共享，同时支持 Markdown WYSIWYG 编辑、Wiki、文件标签和其他知识管理功能。

这个插件基于的 Docker 镜像 [https://hub.docker.com/r/franchetti/seafile-arm](https://hub.docker.com/r/franchetti/seafile-arm)

## 安装

---

这个插件的安装非常简单，与安装其他插件的方法相同。

1. 将我的插件仓库添加到你的 Home Assistant 实例中（在 supervisor 插件商店的右上角，或如果你已经配置了我的 HA，点击下面的按钮）
   [![打开你的 Home Assistant 实例并显示添加插件仓库对话框，其中预填了特定的仓库 URL。](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2Falexbelgium%2Fhassio-addons)
1. 安装这个插件。
1. 点击 `保存` 按钮来保存你的配置。
1. 设置插件的选项以符合你的偏好。
1. 启动插件。
1. 检查插件的日志以查看是否一切正常。
1. 打开 WebUI 并调整软件选项。

## 配置

Webui 可以在 <http://homeassistant:8000> (Seahub) 和 <http://homeassistant:8082> (文件服务器) 找到。

### 设置步骤

1. 默认登录：`me@example.com` / `a_very_secret_password`
2. 登录后更改管理员凭证
3. 配置数据库（默认为 SQLite，推荐生产环境使用 MariaDB）
4. 设置外部访问的文件服务器根 URL

### 选项

| 选项 | 类型 | 默认 | 描述 |
|------|------|------|------|
| `PGID` | int | `1000` | 文件权限的组 ID |
| `PUID` | int | `1000` | 文件权限的用户 ID |
| `TZ` | str | `Europe/Paris` | 时区（例如，`Europe/London`） |
| `SEAFILE_ADMIN_EMAIL` | email | `me@example.com` | 管理员邮箱地址 |
| `SEAFILE_ADMIN_PASSWORD` | password | `a_very_secret_password` | 管理员密码 |
| `SERVER_IP` | str | `homeassistant.local` | 服务器 IP 或主机名 |
| `FILE_SERVER_ROOT` | str | `http://homeassistant.local:8082` | 文件服务器根 URL |
| `PORT` | str | `8082` | 文件服务器端口 |
| `url` | str | | Seafile 的外部 URL |
| `database` | list | `sqlite` | 数据库类型（sqlite/mariadb_addon） |
| `data_location` | str | `/share/seafile` | 数据存储位置 |
| `CONFIG_LOCATION` | str | | 自定义配置文件位置 |
| `localdisks` | str | | 挂载的本地驱动（例如，`sda1,sdb1`） |
| `networkdisks` | str | | 要挂载的 SMB 共享（例如，`//SERVER/SHARE`） |
| `cifsusername` | str | | SMB 共享的网络用户名 |
| `cifspassword` | str | | SMB 共享的网络密码 |
| `cifsdomain` | str | | SMB 共享的网络域 |

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

### 挂载驱动

这个插件支持挂载本地驱动和远程 SMB 共享：

- **本地驱动**：参见 [在插件中挂载本地驱动](https://github.com/alexbelgium/hassio-addons/wiki/Mounting-Local-Drives-in-Addons)
- **远程共享**：参见 [在插件中挂载远程共享](https://github.com/alexbelgium/hassio-addons/wiki/Mounting-remote-shares-in-Addons)

**重要提示**：如果数据库存储在挂载的驱动上，请确保 SQLite 数据库也在那里，以防止挂载问题时数据丢失。

## 支持

在 github 上创建问题

## 插图

---

![插图](https://seafile.com/img/slider/artistdetails.png)

[repository]: https://github.com/alexbelgium/hassio-addons