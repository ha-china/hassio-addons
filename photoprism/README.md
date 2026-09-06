# Home Assistant 插件：Photoprism

我在业余时间维护此遥控器及其其他 Home Assistant 插件：跟进上游更改、HA 更改，并在真实硬件上进行测试花费了大量时间（以及一些金钱）。我使用了约 5-10 个我拥有 >110 个插件的遥控器，为了定期解决问题和改进插件，我经常安装测试机器（并购买一些测试服务，如 vpn），而这些机器我自己并不使用。

如果这个插件能为您节省时间，或者让您的设置更容易，我会非常感谢您的支持！

[![Buy me a coffee][donation-badge]](https://www.buymeacoffee.com/alexbelgium)
[![Donate via PayPal][paypal-badge]](https://www.paypal.com/donate/?hosted_button_id=DZFULJZTP3UQA)

## 插件信息

![Version](https://img.shields.io/badge/dynamic/yaml?label=Version&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fphotoprism%2Fconfig.yaml)
![Ingress](https://img.shields.io/badge/dynamic/yaml?label=Ingress&query=%24.ingress&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fphotoprism%2Fconfig.yaml)
![Arch](https://img.shields.io/badge/dynamic/yaml?color=success&label=Arch&query=%24.arch&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fphotoprism%2Fconfig.yaml)

[![Codacy Badge](https://app.codacy.com/project/badge/Grade/9c6cf10bdbba45ecb202d7f579b5be0e)](https://www.codacy.com/gh/alexbelgium/hassio-addons/dashboard?utm_source=github.com&utm_medium=referral&utm_content=alexbelgium/hassio-addons&utm_campaign=Badge_Grade)
[![GitHub Super-Linter](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/weekly-supelinter.yaml?label=Lint%20code%20base)](https://github.com/alexbelgium/hassio-addons/actions/workflows/weekly-supelinter.yaml)
[![Builder](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/onpush_builder.yaml?label=Builder)](https://github.com/alexbelgium/hassio-addons/actions/workflows/onpush_builder.yaml)

[donation-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee-%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white
[paypal-badge]: https://img.shields.io/badge/Donate%20via%20PayPal-0070BA?logo=paypal&style=flat&logoColor=white

MINIMUM CONFIG REQUIRED : 2 cores and 4 GB of memory

_感谢您再次我的仓库！请点击下方图片将其星标，这样可以将其显示在右上角。感谢！_

[![Stargazers repo roster for @alexbelgium/hassio-addons](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/.github/stars2.svg)](https://github.com/alexbelgium/hassio-addons/stargazers)

![downloads evolution](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/photoprism/stats.png)

## 关于 Photoprism

基于服务器端应用程序，用于浏览、整理和分享您的个人照片收藏。

项目主页：https://github.com/photoprism/photoprism

基于 Docker 镜像：https://hub.docker.com/r/photoprism/photoprism

## 安装

此插件的安装非常直接，与安装任何其他 Hass.io 插件没有区别。

1. 将我的插件仓库添加到您的 Home Assistant 实例中（在 supervisor 插件存储顶部右侧，或者如果您已配置过我的 HA，请点击下方按钮）
   [![Open your Home Assistant instance and show the add add-on repository dialog with a specific repository URL pre-filled.](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2Falexbelgium%2Fhassio-addons)
1. 安装此插件。
1. 点击 `Save` 按钮以存储您的配置。
1. 启动插件。
1. 检查插件日志以查看是否一切顺利。
1. 仔细根据偏好配置插件，关于此请参阅官方文档。

## 配置

使用插件 `env_vars` 选项传递额外的环境变量（大写或小写名称均可）。有关详细信息，请参阅 https://github.com/alexbelgium/hassio-addons/wiki/Add-Environment-variables-to-your-Addon-2。

Web 界面可通过 <http://homeassistant:2342> 访问或通过在侧边栏使用 Ingress 访问。
除了以下选项外，配置可通过应用 WebUI 完成。

**系统要求**：最低 2 核心和 4GB RAM
**默认凭据**：
- 用户名：admin
- 密码：请修改密码

**WebDAV 访问**：使用 URL `http://local-ip:addon-port/api/hassio.../originals`（查看插件日志以获取完整路径）

### 选项

| 选项 | 类型 | 默认值 | 描述 |
|--------|------|---------|-------------|
| `ssl` | bool | `false` | 为 Web 界面启用 HTTPS |
| `certfile` | str | `fullchain.pem` | SSL 证书文件（必须位于 /ssl） |
| `keyfile` | str | `privkey.pem` | SSL 私钥文件（必须位于 /ssl） |
| `DB_TYPE` | list | `sqlite` | 数据库类型 (sqlite/mariadb_addon/external) |
| `ORIGINALS_PATH` | str | `/share/photoprism/originals` | 照片和视频收藏路径 |
| `STORAGE_PATH` | str | `/share/photoprism/storage` | 缓存、数据库和侧车文件路径 |
| `IMPORT_PATH` | str | `/share/photoprism/import` | 导入文件路径 |
| `BACKUP_PATH` | str | `/share/photoprism/backup` | 备份存储路径 |
| `UPLOAD_NSFW` | bool | `true` | 允许可能令人反感的上传 |
| `graphic_drivers` | list | | 图形驱动程序 (mesa) |
| `ingress_disabled` | bool | | 禁用 Ingress 以允许直接 IP:端口访问 |
| `localdisks` | str | | 要挂载的本地磁盘（例如，`sda1,sdb1,MYNAS`） |
| `networkdisks` | str | | 要挂载的 SMB 共享（例如，`//SERVER/SHARE`） |
| `cifsusername` | str | | SMB 网络共享用户名 |
| `cifspassword` | str | | SMB 网络共享密码 |
| `cifsdomain` | str | | SMB 网络共享域 |

⚠ **迁移通知**：配置文件现在位于 `/addon_configs/xxx-photoprism/`。插件将试图自动从旧的 `/config/addons_config/photoprism/` 位置迁移文件，但任何硬编码的路径、脚本或指向旧位置的备份都需要更新。在升级之前请进行备份，以防自定义路径或权限导致迁移失败。

### 配置示例

```yaml
ssl: false
certfile: "fullchain.pem"
keyfile: "privkey.pem"
DB_TYPE: "mariadb_addon"
ORIGINALS_PATH: "/media/photos"
STORAGE_PATH: "/share/photoprism/storage"
IMPORT_PATH: "/share/photoprism/import"
BACKUP_PATH: "/share/photoprism/backup"
UPLOAD_NSFW: true
localdisks: "sda1,sdb1"
networkdisks: "//192.168.1.100/photos"
cifsusername: "photouser"
cifspassword: "password123"
cifsdomain: "workgroup"
```

### 高级配置

可以在 `/addon_configs/xxx-photoprism/config.yaml` 中配置额外选项。
完整列表：https://github.com/photoprism/photoprism/blob/develop/docker-compose.yml

### 外部数据库设置

对于外部数据库，请添加到 `/addon_configs/xxx-photoprism/config.yaml`：

```yaml
PHOTOPRISM_DATABASE_DRIVER: "mysql"
PHOTOPRISM_DATABASE_SERVER: "IP:PORT"
PHOTOPRISM_DATABASE_NAME: "photoprism"
PHOTOPRISM_DATABASE_USER: "USERNAME"
PHOTOPRISM_DATABASE_PASSWORD: "PASSWORD"
```

### 挂载磁盘

此插件支持挂载本地磁盘和远程 SMB 共享：

- **本地磁盘**：请参阅 [在插件中挂载本地磁盘](https://github.com/alexbelgium/hassio-addons/wiki/Mounting-Local-Drives-in-Addons)
- **远程共享**：请参阅 [在插件中挂载远程共享](https://github.com/alexbelgium/hassio-addons/wiki/Mounting-remote-shares-in-Addons)

## 使用 Photoprism 命令行接口

Photoprism 还提供命令行接口：

https://docs.photoprism.app/getting-started/docker-compose/#command-line-interface

您可以通过 Portainer 插件访问它，或通过 _ssh_ 执行 `docker exec -it <photoprism container id> bash`。

:warning: 请勿使用 `docker exec <photoprism container id> photoprism`，因为这会导致不可预测的行为。

## 插图

![1622396210_840_560](https://user-images.githubusercontent.com/44178713/127819841-2281ac79-ea96-4b41-9704-522957c5b9c3.jpg)

## 支持

在 github 上创建问题

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
