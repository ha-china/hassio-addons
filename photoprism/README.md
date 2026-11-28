# Home Assistant 附加组件：Photoprism

我利用业余时间维护此及其他 Home Assistant 附加组件：紧跟上游变更、HA 的变化以及在实际硬件上测试需要花费大量时间（和一定的金钱）。我大约有 5-10 个超过 110 个附加组件中使用，因此我经常安装测试机器（并购买一些测试服务如 vpn），即使我自己不使用，也要进行测试和修复以提高附加组件性能。

如果此附加组件为您节省时间或让您的设置更简单，我将不胜感激您的支持！

[![Buy me a coffee][donation-badge]](https://www.buymeacoffee.com/alexbelgium)
[![Donate via PayPal][paypal-badge]](https://www.paypal.com/donate/?hosted_button_id=DZFULJZTP3UQA)

## 附加组件信息

![版本](https://img.shields.io/badge/dynamic/yaml?label=Version&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fphotoprism%2Fconfig.yaml)
![Ingress](https://img.shields.io/badge/dynamic/yaml?label=Ingress&query=%24.ingress&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fphotoprism%2Fconfig.yaml)
![架构 (Arch)](https://img.shields.io/badge/dynamic/yaml?color=success&label=Arch&query=%24.arch&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fphotoprism%2Fconfig.yaml)

[![Codacy 徽章](https://app.codacy.com/project/badge/Grade/9c6cf10bdbba45ecb202d7f579b5be0e)](https://www.codacy.com/gh/alexbelgium/hassio-addons/dashboard?utm_source=github.com&utm_medium=referral&utm_content=alexbelgium/hassio-addons&utm_campaign=Badge_Grade)
[![GitHub Super-Linter](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/weekly-supelinter.yaml?label=Lint%20code%20base)](https://github.com/alexbelgium/hassio-addons/actions/workflows/weekly-supelinter.yaml)
[![构建者](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/onpush_builder.yaml?label=Builder)](https://github.com/alexbelgium/hassio-addons/actions/workflows/onpush_builder.yaml)

[donation-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee-%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white
[paypal-badge]: https://img.shields.io/badge/Donate%20via%20PayPal-0070BA?logo=paypal&style=flat&logoColor=white

**最低配置要求**：2 个核心和 4 GB 内存

_感谢所有为我仓库 starred (加分星) 的朋友们！要给它加分，点击下方图片，然后它就会被推到右上角。谢谢！_

[![为 @alexbelgium/hassio-addons 分星的主库列表](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/.github/stars2.svg)](https://github.com/alexbelgium/hassio-addons/stargazers)

![下载量增长趋势](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/photoprism/stats.png)

## 关于

这是一个用于浏览、整理和分享个人照片收藏集的基于服务器的应用程序。

项目主页：https://github.com/photoprism/photoprism

基于 docker 镜像：https://hub.docker.com/r/photoprism/photoprism

## 安装

此附加组件的安装非常简单，与其他任何 Hass.io 附加组件的安装没有区别。

1. 将我的附加组件仓库添加到您的 home assistant 实例中（在 supervisor 附加组件商店的右上角，或者如果您已配置了我的 HA，请点击下方的按钮）
   [![打开您的 Home Assistant 实例并显示带有特定仓库 URL 预填充的添加附加组件仓库对话框。](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2Falexbelgium%2Fhassio-addons)
1. 安装此附加组件。
1. 点击 `保存` 按钮以存储您的配置。
1. 启动附加组件。
1. 检查附加组件的日志，以查看一切是否正常。
1. 仔细根据您的偏好配置附加组件，详见官方文档。

## 配置

使用附加组件的 `env_vars` 选项传递额外的环境变量（大小写字母均可）。详见 https://github.com/alexbelgium/hassio-addons/wiki/Add-Environment-variables-to-your-Addon-2 以了解详情。

WebUI 可在 <http://homeassistant:2342> 或通过侧边栏的 Ingress 访问。
配置可以通过应用程序 WebUI 进行，除了以下选项。

**系统要求**：最低 2 个核心和 4GB 内存
**默认凭据**：
- 用户名：admin
- 密码：请修改密码

**WebDAV 访问**：使用 URL `http://local-ip:addon-port/api/hassio.../originals`（在附加组件日志中查看完整路径）

### 选项

| 选项 | 类型 | 默认值 | 描述 |
|------|------|---------|------|
| `ssl` | bool | `false` | 为网页界面启用 HTTPS |
| `certfile` | str | `fullchain.pem` | SSL 证书文件（必须位于 /ssl 下） |
| `keyfile` | str | `privkey.pem` | SSL 私钥文件（必须位于 /ssl 下） |
| `DB_TYPE` | list | `sqlite` | 数据库类型 (sqlite/mariadb_addon/external) |
| `ORIGINALS_PATH` | str | `/share/photoprism/originals` | 照片和视频收藏路径 |
| `STORAGE_PATH` | str | `/share/photoprism/storage` | 缓存、数据库和 Sidecar 文件路径 |
| `IMPORT_PATH` | str | `/share/photoprism/import` | 导入文件路径 |
| `BACKUP_PATH` | str | `/share/photoprism/backup` | 备份存储路径 |
| `UPLOAD_NSFW` | bool | `true` | 允许可能冒犯性内容的上传 |
| `graphic_drivers` | list | | 图形驱动 (mesa) |
| `ingress_disabled` | bool | | 禁用 Ingress 以直接通过 IP:端口访问 |
| `localdisks` | str | | 本地驱动器挂载（例如，`sda1,sdb1,MYNAS`）。要挂载特定文件夹，请在驱动器后添加文件夹，例如 `MYNAS/public` 仅挂载该文件夹，路径为 `/mnt/MYNAS/public`。文件夹挂载需要 2026-09-19 之后发布的附加组件版本。 |
| `networkdisks` | str | | 要挂载的 SMB 共享（例如，`//SERVER/SHARE`） |
| `cifsusername` | str | | SMB 网络共享用户名 |
| `cifspassword` | str | | SMB 网络共享密码 |
| `cifsdomain` | str | | SMB 网络共享域 |

⚠ **迁移通知**：配置文件现在位于 `/app_configs/xxx-photoprism/`。附加组件将尝试自动从旧位置 `/config/addons_config/photoprism/` 迁移文件。但任何固定路径的脚本或指向旧位置的备份需要更新。在升级前请备份，以防自定义路径或权限导致迁移失败。

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

额外的选项可以在 `/app_configs/xxx-photoprism/config.yaml` 中配置。
完整列表：https://github.com/photoprism/photoprism/blob/develop/docker-compose.yml

### 外部数据库设置

对于外部数据库，请将以下内容添加到 `/app_configs/xxx-photoprism/config.yaml`：

```yaml
PHOTOPRISM_DATABASE_DRIVER: "mysql"
PHOTOPRISM_DATABASE_SERVER: "IP:PORT"
PHOTOPRISM_DATABASE_NAME: "photoprism"
PHOTOPRISM_DATABASE_USER: "USERNAME"
PHOTOPRISM_DATABASE_PASSWORD: "PASSWORD"
```

### 挂载驱动器

此附加组件支持挂载本地驱动器及远程 SMB 共享：

- **本地驱动器**：参见 [附加组件中挂载本地驱动器](https://github.com/alexbelgium/hassio-addons/wiki/Mounting-Local-Drives-in-Addons)
- **远程共享**：参见 [附加组件中挂载远程共享](https://github.com/alexbelgium/hassio-addons/wiki/Mounting-remote-shares-in-Addons)

## 使用 Photoprism 命令行界面

Photoprism 还提供命令行接口：

https://docs.photoprism.app/getting-started/docker-compose/#command-line-interface

您可以通过 portainer 附加组件或通过 _ssh_ 执行 `docker exec -it <photoprism container id> bash` 来访问它。

:warning: 请勿使用 `docker exec <photoprism container id> photoprism`，因为这会导致不可预测的行为。

## 插图

![1622396210_840_560](https://user-images.githubusercontent.com/44178713/127819841-2281ac79-ea96-4b41-9704-522957c5b9c3.jpg)

## 支持

在 github 上创建 Issue

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
