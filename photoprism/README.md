# 官方助手插件：Photoprism

我在业余时间为 Home Assistant 维护此及其他官方助手插件。保持上游兼容性、适配 Home Assistant 的更新以及在真实硬件上进行测试都花费了大量时间（还需要一些费用）。我使用的官方助手插件中有大约 5-10 个是我日常使用（使用数量超过 110 个）的。因此，我有时会安装测试机器（并购买一些测试服务，如 VPN），用于对我自己的插件进行故障排查和改进。

此插件为您节省了时间或简化了您的配置，我将不胜感激您的支持！

[![Buy me a coffee][donation-badge]](https://www.buymeacoffee.com/alexbelgium)
[![Donate via PayPal][paypal-badge]](https://www.paypal.com/donate/?hosted_button_id=DZFULJZTP3UQA)

## 插件信息

![版本](https://img.shields.io/badge/dynamic/yaml?label=Version&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fphotoprism%2Fconfig.yaml)
![入口](https://img.shields.io/badge/dynamic/yaml?label=Ingress&query=%24.ingress&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fphotoprism%2Fconfig.yaml)
![架构](https://img.shields.io/badge/dynamic/yaml?color=success&label=Arch&query=%24.arch&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fphotoprism%2Fconfig.yaml)

[![Codacy 徽章](https://app.codacy.com/project/badge/Grade/9c6cf10bdbba45ecb202d7f579b5be0e)](https://www.codacy.com/gh/alexbelgium/hassio-addons/dashboard?utm_source=github.com&utm_medium=referral&utm_content=alexbelgium/hassio-addons&utm_campaign=Badge_Grade)
[![GitHub 超级代码审查](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/weekly-supelinter.yaml?label=代码审查)](https://github.com/alexbelgium/hassio-addons/actions/workflows/weekly-supelinter.yaml)
[![构建者](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/onpush_builder.yaml?label=构建)](https://github.com/alexbelgium/hassio-addons/actions/workflows/onpush_builder.yaml)

[donation-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee-%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white
[paypal-badge]: https://img.shields.io/badge/Donate%20via%20PayPal-0070BA?logo=paypal&style=flat&logoColor=white

**最低配置要求**：2 个 CPU 核心和 4GB 内存

_感谢大家都在我的仓库中点击星号！点击右上角的图像即可星选，谢谢！_

[![@alexbelgium/hassio-addons 仓库星号者名单](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/.github/stars2.svg)](https://github.com/alexbelgium/hassio-addons/stargazers)

![下载量趋势](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/photoprism/stats.png)

## 关于

用于浏览、整理和分享您个人照片集合的服务器端应用程序。

项目主页：https://github.com/photoprism/photoprism

基于 Docker 镜像：https://hub.docker.com/r/photoprism/photoprism

## 安装

此插件的安装非常简单，与安装任何其他 Hass.io 插件并无不同。

1. 将我的插件仓库添加到您的 Home Assistant 实例中（在 supervisor 的 addons 商店顶部右键，或如果您已配置了我的 HA，则点击下方的按钮）
   [![打开您的 Home Assistant 实例并显示带有预填充特定仓库 URL 的添加插件仓库对话框。(https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2Falexbelgium%2Fhassio-addons)
1. 安装此插件。
1. 点击 `保存` 按钮以存储您的配置。
1. 启动插件。
1. 检查插件日志以确认一切正常。
1. 仔细根据您的偏好配置插件，有关详细信息，请参阅官方文档。

## 配置

使用插件的 `env_vars` 选项传递额外的环境变量（名称可为大写或小写）。有关详细信息，请访问 https://github.com/alexbelgium/hassio-addons/wiki/Add-Environment-variables-to-your-Addon-2。

WebUI 可以通过 <http://homeassistant:2342> 访问，或通过侧边栏使用入口访问。
除了以下选项外，均可以通过应用 WebUI 进行配置。

**系统要求**：最低 2 个核心和 4GB 内存
**默认凭据**：
- 用户名：admin
- 密码：请更改密码

**WebDAV 访问**：使用 URL `http://local-ip:addon-port/api/hassio.../originals`（请在插件日志中查看完整路径）

### 选项

| 选项 | 类型 | 默认值 | 描述 |
|--------|------|---------|----------|
| `ssl` | bool | `false` | 为 Web 接口启用 HTTPS |
| `certfile` | str | `fullchain.pem` | SSL 证书文件（必须位于 /ssl 中） |
| `keyfile` | str | `privkey.pem` | SSL 密钥文件（必须位于 /ssl 中） |
| `DB_TYPE` | list | `sqlite` | 数据库类型 (sqlite/mariadb_addon/external) |
| `ORIGINALS_PATH` | str | `/share/photoprism/originals` | 照片和视频集合路径 |
| `STORAGE_PATH` | str | `/share/photoprism/storage` | 缓存、数据库和侧边栏文件路径 |
| `IMPORT_PATH` | str | `/share/photoprism/import` | 导入文件路径 |
| `BACKUP_PATH` | str | `/share/photoprism/backup` | 备份存储路径 |
| `UPLOAD_NSFW` | bool | `true` | 允许可能具有冒犯性的上传 |
| `graphic_drivers` | list | | 图形驱动 (mesa) |
| `ingress_disabled` | bool | | 禁用入口以进行直接 IP:端口访问 |
| `localdisks` | str | | 要挂载的本地驱动器（例如，`sda1,sdb1,MYNAS`）。要在驱动器后添加文件夹以仅挂载该文件夹，例如 `MYNAS/public` 仅挂载该文件夹，位于 `/mnt/MYNAS/public`。文件夹挂载需要 2026-09-19 之后发布的插件版本。 |
| `networkdisks` | str | | 要挂载的 SMB 共享（例如，`//SERVER/SHARE`） |
| `cifsusername` | str | | SMB 网络共享的用户名 |
| `cifspassword` | str | | SMB 网络共享的密码 |
| `cifsdomain` | str | | SMB 网络共享的域 |

⚠ **迁移通知**：配置文件现在位于 `/app_configs/xxx-photoprism/`。插件将尝试自动将文件从旧的 `/config/addons_config/photoprism/` 位置迁移。任何硬编码路径、脚本或指向旧位置的备份都需要更新。在升级之前，如果自定义路径或权限会导致迁移失败，请进行备份。

### 示例配置

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

可在 `/app_configs/xxx-photoprism/config.yaml` 中配置其他选项。
完整列表：https://github.com/photoprism/photoprism/blob/develop/docker-compose.yml

### 外部数据库设置

对于外部数据库，请将其添加到 `/app_configs/xxx-photoprism/config.yaml`：

```yaml
PHOTOPRISM_DATABASE_DRIVER: "mysql"
PHOTOPRISM_DATABASE_SERVER: "IP:PORT"
PHOTOPRISM_DATABASE_NAME: "photoprism"
PHOTOPRISM_DATABASE_USER: "USERNAME"
PHOTOPRISM_DATABASE_PASSWORD: "PASSWORD"
```

### 挂载驱动器

此插件支持挂载本地驱动器以及远程 SMB 共享：

- **本地驱动器**：请参阅 [在插件中挂载本地驱动器](https://github.com/alexbelgium/hassio-addons/wiki/Mounting-Local-Drives-in-Addons)
- **远程共享**：请参阅 [在插件中挂载远程共享](https://github.com/alexbelgium/hassio-addons/wiki/Mounting-remote-shares-in-Addons)

## 使用 Photoprism 命令行接口

Photoprism 还提供命令行接口：

https://docs.photoprism.app/getting-started/docker-compose/#command-line-interface

您可以通过 Portainer 插件或执行 `docker exec -it <photoprism 容器 ID> bash` 通过 _SSH_ 进行访问。

:warning: 不要使用 `docker exec <photoprism 容器 ID> photoprism`，这将导致不可预测的行为。

## 插图

![1622396210_840_560](https://user-images.githubusercontent.com/44178713/127819841-2281ac79-ea96-4b41-9704-522957c5b9c3.jpg)

## 支持

在 GitHub 上创建问题

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
