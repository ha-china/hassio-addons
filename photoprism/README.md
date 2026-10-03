# Home Assistant 附加功能：Photoprism

我在空闲时间维护此及其他 Home Assistant 附加功能：跟进上游更新、Home Assistant 的更新以及在真实硬件上进行测试需要大量时间（以及一些金钱）。我使用了超过 110 个附加功能中的大约 5-10 个，我定期安装测试机器（并购买一些我自己不使用的测试服务，如 VPN）来帮助排查和改进步附加功能。

如果此附加功能为您节省了时间或简化了您的设置，我将不胜感激您的支持！

[![Buy me a coffee][donation-badge]](https://www.buymeacoffee.com/alexbelgium)
[![Donate via PayPal][paypal-badge]](https://www.paypal.com/donate/?hosted_button_id=DZFULJZTP3UQA)

## 附加功能信息

![版本](https://img.shields.io/badge/dynamic/yaml?label=Version&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fphotoprism%2Fconfig.yaml)
![Ingress](https://img.shields.io/badge/dynamic/yaml?label=Ingress&query=%24.ingress&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fphotoprism%2Fconfig.yaml)
![架构](https://img.shields.io/badge/dynamic/yaml?color=success&label=Arch&query=%24.arch&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fphotoprism%2Fconfig.yaml)

[![Codacy Badge](https://app.codacy.com/project/badge/Grade/9c6cf10bdbba45ecb202d7f579b5be0e)](https://www.codacy.com/gh/alexbelgium/hassio-addons/dashboard?utm_source=github.com&utm_medium=referral&utm_content=alexbelgium/hassio-addons&utm_campaign=Badge_Grade)
[![GitHub Super-Linter](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/weekly-supelinter.yaml?label=Lint%20code%20base)](https://github.com/alexbelgium/hassio-addons/actions/workflows/weekly-supelinter.yaml)
[![Builder](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/onpush_builder.yaml?label=Builder)](https://github.com/alexbelgium/hassio-addons/actions/workflows/onpush_builder.yaml)

[donation-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee-%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white
[paypal-badge]: https://img.shields.io/badge/Donate%20via%20PayPal-0070BA?logo=paypal&style=flat&logoColor=white

最小配置要求：2 个核心和 4 GB 内存

_感谢所有给我仓库点星星的人！要星星，请点击下方的图片，然后它将在右上角。谢谢！_

[![Stargazers repo roster for @alexbelgium/hassio-addons](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/.github/stars2.svg)](https://github.com/alexbelgium/hassio-addons/stargazers)

![下载演变](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/photoprism/stats.png)

## 简介

基于服务器的应用程序，用于浏览、组织和共享您的个人照片收藏。

项目主页：https://github.com/photoprism/photoprism

基于的 Docker 镜像：https://hub.docker.com/r/photoprism/photoprism

## 安装

此附加功能的安装非常简单，与安装任何其他 Hass.io 附加功能没有区别。

1. 将我的附加功能仓库添加到您的 Home Assistant 实例中（在 supervisor 附加功能商店中点击右上角，或者如果您已配置了我的 HA，则点击下方的按钮）
   [![打开您的 Home Assistant 实例并显示带有特定仓库 URL 预填充的添加附加功能仓库对话框。](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2Falexbelgium%2Fhassio-addons)
1. 安装此附加功能。
1. 点击 `保存` 按钮以存储您的配置。
1. 启动附加功能。
1. 检查附加功能的日志以查看一切是否顺利。
1. 根据您的偏好仔细配置附加功能，请访问官方文档查看详细信息。

## 配置

使用附加功能的 `env_vars` 选项来传递额外的环境变量（大写或小写名称均可）。详情请见 https://github.com/alexbelgium/hassio-addons/wiki/Add-Environment-variables-to-your-Addon-2。

Web 界面可在 <http://homeassistant:2342> 或通过侧边栏使用 Ingress 访问。
除了以下选项外，配置可以通过应用程序 Web UI 完成。

**系统要求：** 2 个核心和 4GB RAM 为最低要求
**默认凭据：**
- 用户名：admin
- 密码：请更改密码

**WebDAV 访问：** 使用 URL `http://本地 IP:附加功能端口/api/hassio.../originals`（在附加功能日志中查看完整路径）

### 选项

| 选项 | 类型 | 默认值 | 描述 |
|--------|------|---------|----------------|
| `ssl` | bool | `false` | 为 Web 界面启用 HTTPS |
| `certfile` | str | `fullchain.pem` | SSL 证书文件（必须位于 /ssl 中） |
| `keyfile` | str | `privkey.pem` | SSL 私钥文件（必须位于 /ssl 中） |
| `DB_TYPE` | list | `sqlite` | 数据库类型 (sqlite/mariadb_addon/external) |
| `ORIGINALS_PATH` | str | `/share/photoprism/originals` | 照片和视频收藏路径 |
| `STORAGE_PATH` | str | `/share/photoprism/storage` | 缓存、数据库和侧边车文件路径 |
| `IMPORT_PATH` | str | `/share/photoprism/import` | 导入文件路径 |
| `BACKUP_PATH` | str | `/share/photoprism/backup` | 备份存储路径 |
| `UPLOAD_NSFW` | bool | `true` | 允许可能令人冒犯的上传 |
| `graphic_drivers` | list | | 图形驱动程序 (mesa) |
| `ingress_disabled` | bool | | 禁用 Ingress 以直接通过 IP:端口访问 |
| `localdisks` | str | | 本地驱动器挂载路径（例如，`sda1,sdb1,MYNAS`）。在驱动器后添加文件夹仅挂载该文件夹，例如 `MYNAS/public` 仅挂载该文件夹，路径为 `/mnt/MYNAS/public`。文件夹挂载需要 2026-09-19 之后发布的附加功能版本。 |
| `networkdisks` | str | | 要将网络上挂载的 SMB 共享（例如，`//SERVER/SHARE`） |
| `cifsusername` | str | | 网络共享的 SMB 用户名 |
| `cifspassword` | str | | 网络共享的 SMB 密码 |
| `cifsdomain` | str | | 网络共享的 SMB 域 |

⚠ **迁移提示：** 配置文件现在位于 `/app_configs/xxx-photoprism/`。附加功能将尝试自动从旧位置 `/config/addons_config/photoprism/` 迁移文件，但任何硬编码路径、脚本或指向旧位置的备份都需要更新。在升级之前请备份，以防自定义路径或权限导致迁移失败。

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

可以在 `/app_configs/xxx-photoprism/config.yaml` 中配置额外选项。
完整列表：https://github.com/photoprism/photoprism/blob/develop/docker-compose.yml

### 外部数据库设置

对于外部数据库，请在 `/app_configs/xxx-photoprism/config.yaml` 中添加：

```yaml
PHOTOPRISM_DATABASE_DRIVER: "mysql"
PHOTOPRISM_DATABASE_SERVER: "IP:PORT"
PHOTOPRISM_DATABASE_NAME: "photoprism"
PHOTOPRISM_DATABASE_USER: "USERNAME"
PHOTOPRISM_DATABASE_PASSWORD: "PASSWORD"
```

### 挂载驱动器

此附加功能支持挂载本地驱动器和网络 SMB 共享：

- **本地驱动器：** 请参阅 [在附加功能中挂载本地驱动器](https://github.com/alexbelgium/hassio-addons/wiki/Mounting-Local-Drives-in-Addons)
- **远程共享：** 请参阅 [在附加功能中挂载远程共享](https://github.com/alexbelgium/hassio-addons/wiki/Mounting-remote-shares-in-Addons)

## 使用 Photoprism 命令行界面

Photoprism 还提供命令行界面：

https://docs.photoprism.app/getting-started/docker-compose/#command-line-interface

您可以通过 Portainer 附加功能或通过 SSH 执行 `docker exec -it <photoprism 容器 ID> bash` 访问它。

:warning: 请勿使用 `docker exec <photoprism 容器 ID> photoprism`，因为这会导致不可预测的行为。

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
