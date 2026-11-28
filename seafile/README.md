# Home assistant add-on: seafile

我在业余时间维护此 Home Assistant add-on 及其他 add-on：追赶上游更改、适配 HA 变更以及在真实硬件上进行测试消耗了大量时间（甚至包含一些钱）。我大约使用了超过 110 个 add-on 中的 5-10 个，因此我经常安装测试机器（并购买一些测试服务，如 VPN）来用于排查问题和改进 add-on。

如果这个 add-on 为您节省了时间或简化了您的部署，我将不胜感激您的支持！

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

_感谢所有人给我的仓库星标！请点击上方图片来星标它，这样它就会显示在右上角。谢谢！_

[![Stargazers repo roster for @alexbelgium/hassio-addons](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/.github/stars2.svg)](https://github.com/alexbelgium/hassio-addons/stargazers)

![downloads evolution](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/seafile/stats.png)

## About

---

高性能文件同步和分享，同时具备 Markdown 所见即所得 (WYSIWYG) 编辑、Wiki、文件标签及其他知识管理功能。

此 add-on 基于 docker 镜像 https://hub.docker.com/r/franchetti/seafile-arm

## Installation

---

此 add-on 的安装非常简单，与其他 add-on 的安装没有太大区别。

1. 将我的 add-on 仓库添加到 Home Assistant 实例中（在 Supervisor Add-on 商店顶部右侧，或者如果您已配置好我的 HA，请点击下方按钮）
   [![Open your Home Assistant instance and show the add add-on repository dialog with a specific repository URL pre-filled.](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2Falexbelgium%2Fhassio-addons)
2. 安装此 add-on。
3. 点击 `Save` 按钮以保存配置。
4. 设置 add-on 选项以符合您的偏好
5. 启动 add-on。
6. 查看 add-on 的日志，确认一切正常。
7. 打开 Web 界面并调整软件选项

## Configuration

使用 add-on 的 `env_vars` 选项来传递额外的环境变量（支持大写或小写名称）。详细信息请见 https://github.com/alexbelgium/hassio-addons/wiki/Add-Environment-variables-to-your-Addon-2。

Webui 地址为 <http://homeassistant:8000> (Seahub) 和 <http://homeassistant:8082> (File server)。

### Setup Steps

1. 默认登录：`me@example.com` / `a_very_secret_password`
2. 首次登录后更改管理员凭据
3. 配置数据库（默认 SQLite，生产环境推荐使用 MariaDB）
4. 为外部访问设置正确的文件服务器根 URL

> **文件服务器 URL**：此 add-on 现在会将 `SERVICE_URL` 和 `FILE_SERVER_ROOT` 直接写入 `conf/seahub_settings.py`。`SERVICE_URL` 使用 `url` 选项（如果已设置），否则使用 `SERVER_IP` 并附带端口 `8000`；而 `FILE_SERVER_ROOT` 遵循 `FILE_SERVER_ROOT` 选项（默认为 `http://<your host>:8082`）。请保持 `FILE_SERVER_ROOT` 与可访问的文件服务器端点一致，以便下载链接能正确解析。

### Options

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `PGID` | int | `1000` | 文件权限的组 ID |
| `PUID` | int | `1000` | 文件权限的用户 ID |
| `TZ` | str | `Europe/Paris` |时域（例如 `Europe/London`） |
| `SEAFILE_ADMIN_EMAIL` | email | `me@example.com` | 管理员邮箱地址 |
| `SEAFILE_ADMIN_PASSWORD` | password | `a_very_secret_password` | 管理员密码 |
| `SERVER_IP` | str | `homeassistant.local` | 服务器 IP 或主机名 |
| `FILE_SERVER_ROOT` | str | `http://homeassistant.local:8082` | 文件服务器根 URL |
| `PORT` | str | `8082` | 文件服务器端口 |
| `url` | str | | Seafile 的外部 URL |
| `database` | list | `sqlite` | 数据库类型 (sqlite/mariadb_addon) |
| `data_location` | str | `/share/seafile` | 数据存储位置 |
| `CONFIG_LOCATION` | str | | 自定义配置文件位置 |
| `localdisks` | str | | 本地挂载盘（例如 `sda1,sdb1`）。在驱动器后添加文件夹仅挂载该文件夹，例如 `MYNAS/public` 仅挂载该文件夹，路径为 `/mnt/MYNAS/public`。文件夹挂载功能需要 add-on 版本在 2026-09-19 之后发布。 |
| `networkdisks` | str | | 挂载的 SMB 共享（例如 `//SERVER/SHARE`） |
| `cifsusername` | str | | 网络共享的 SMB 用户名 |
| `cifspassword` | str | | 网络共享的 SMB 密码 |
| `cifsdomain` | str | | 网络共享的 SMB 域 |

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

此 add-on 支持挂载本地盘和远程 SMB 共享：

- **本地盘**: 参见 [Addons 中挂载本地盘](https://github.com/alexbelgium/hassio-addons/wiki/Mounting-Local-Drives-in-Addons)
- **远程盘**: 参见 [Addons 中挂载远程盘](https://github.com/alexbelgium/hassio-addons/wiki/Mounting-remote-shares-in-Addons)

**重要提示**：如果将数据库存储在挂载盘上，请确保 SQLite 数据库也托管在该处，以防在挂载出问题时导致数据丢失。

## Security

`SEAFILE_ADMIN_PASSWORD` 选项默认值为 `a_very_secret_password`。Seafile 利用它创建管理员账户，因此除非该账户的密码已被更改，否则任何能访问端口 8000 或 8082 的人都可以登录为管理员并读取所有存储的文件。该选项仅在使用管理员账户创建时使用，因此对于现有安装，请在 Seafile Web 界面中更改管理员密码（后来更改该选项不会更改它）。启动警告仅检查该选项，因此它无法判断账户密码是否已更改。当默认值仍设置时，add-on 会在启动日志中打印警告。

## Support

在 github 上创建 issue

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

<img src="https://raw.gitcode.com/ha-china/ha-apps/raw/main/WeChat_QRCode.png" width="50%" /> 📲

## ☕ 赞助支持

如果您觉得我花费大量时间维护这个库对您有帮助，欢迎请我喝杯奶茶，您的支持将是我持续改进的动力！

<div style="display: flex; justify-content: space-between;">
  <img src="https://raw.gitcode.com/ha-china/ha-apps/raw/main/1_readme/Ali_Pay.jpg" height="350px" />
  <img src="https://raw.gitcode.com/ha-china/ha-apps/raw/main/1_readme/WeChat_Pay.jpg" height="350px" />
</div> 💖

感谢您的支持与鼓励！
