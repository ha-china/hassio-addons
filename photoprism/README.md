# Home assistant add-on: Photoprism


我利用业余时间维护这个 Home Assistant 插件以及其他插件：跟上上游的变化、Home Assistant 的变化，并在真实硬件上进行测试都需要大量时间（并且还需要一些金钱）。我大约使用我超过 110 个插件中的 5 到 10 个，因此我安装了一些用于测试的机器（以及购买了一些我本人不使用的测试服务，例如 VPN），以便进行故障排除和改进插件。

如果这个插件节省了您的时间或使您的设置更简单，我将非常感谢您的支持！

[![Buy me a coffee][donation-badge]](https://www.buymeacoffee.com/alexbelgium)
[![Donate via PayPal][paypal-badge]](https://www.paypal.com/donate/?hosted_button_id=DZFULJZTP3UQA)

## 插件信息

![版本](https://img.shields.io/badge/dynamic/yaml?label=版本&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fphotoprism%2Fconfig.yaml)
![入口](https://img.shields.io/badge/dynamic/yaml?label=入口&query=%24.ingress&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fphotoprism%2Fconfig.yaml)
![架构](https://img.shields.io/badge/dynamic/yaml?color=success&label=架构&query=%24.arch&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fphotoprism%2Fconfig.yaml)

[![Codacy Badge](https://app.codacy.com/project/badge/Grade/9c6cf10bdbba45ecb202d7f579b5be0e)](https://www.codacy.com/gh/alexbelgium/hassio-addons/dashboard?utm_source=github.com&utm_medium=referral&utm_content=alexbelgium/hassio-addons&utm_campaign=Badge_Grade)
[![GitHub Super-Linter](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/weekly-supelinter.yaml?label=Lint%20code%20base)](https://github.com/alexbelgium/hassio-addons/actions/workflows/weekly-supelinter.yaml)
[![构建者](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/onpush_builder.yaml?label=构建者)](https://github.com/alexbelgium/hassio-addons/actions/workflows/onpush_builder.yaml)

[donation-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee-%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white
[paypal-badge]: https://img.shields.io/badge/Donate%20via%20PayPal-0070BA?logo=paypal&style=flat&logoColor=white

所需最小配置：2 个核心和 4 GB 内存

_感谢所有给我的仓库点赞的人！要点赞，请点击下面的图片，然后它就会出现在右上角。谢谢！_

[![Stargazers repo roster for @alexbelgium/hassio-addons](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/.github/stars2.svg)](https://github.com/alexbelgium/hassio-addons/stargazers)

![下载趋势](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/photoprism/stats.png)

## 关于

一个基于服务器的应用程序，用于浏览、组织和共享您的个人照片收藏。

项目主页：https://github.com/photoprism/photoprism

基于的 Docker 镜像：https://hub.docker.com/r/photoprism/photoprism

## 安装

这个插件的安装非常简单，与安装任何其他 Hass.io 插件没有区别。

1. [将我的 Hass.io 插件仓库][repository]添加到您的 Home Assistant 实例。
1. 安装此插件。
1. 点击 `保存` 按钮以保存您的配置。
1. 启动插件。
1. 检查插件的日志以查看是否一切正常。
1. 仔细配置插件以满足您的偏好，请参阅官方文档以了解详细信息。

## 配置

使用插件的 `env_vars` 选项传递额外的环境变量（名称大小写均可）。详情请见 https://github.com/alexbelgium/hassio-addons/wiki/Add-Environment-variables-to-your-Addon-2。

Web UI 可以在 <http://homeassistant:2342> 或通过 Ingress 在侧边栏中访问。
配置可以通过应用 Web UI 进行，除了以下选项。

**系统要求**：最小 2 个核心和 4GB 内存
**默认凭证**：
- 用户名：admin
- 密码：请更改密码

**WebDAV 访问**：使用 URL `http://local-ip:addon-port/api/hassio.../originals`（请参阅插件日志以获取完整路径）

### 选项

| 选项 | 类型 | 默认值 | 描述 |
|------|------|--------|------|
| `ssl` | 布尔 | `false` | 为 Web 界面启用 HTTPS |
| `certfile` | 字符串 | `fullchain.pem` | SSL 证书文件（必须位于 /ssl） |
| `keyfile` | 字符串 | `privkey.pem` | SSL 密钥文件（必须位于 /ssl） |
| `DB_TYPE` | 列表 | `sqlite` | 数据库类型（sqlite/mariadb_addon/external） |
| `ORIGINALS_PATH` | 字符串 | `/share/photoprism/originals` | 照片和视频集合路径 |
| `STORAGE_PATH` | 字符串 | `/share/photoprism/storage` | 缓存、数据库和副文件路径 |
| `IMPORT_PATH` | 字符串 | `/share/photoprism/import` | 导入文件路径 |
| `BACKUP_PATH` | 字符串 | `/share/photoprism/backup` | 备份存储路径 |
| `UPLOAD_NSFW` | 布尔 | `true` | 允许上传可能令人反感的文件 |
| `CONFIG_LOCATION` | 字符串 | | 额外配置文件 `config.yaml` 的位置 |
| `graphic_drivers` | 列表 | | 图形驱动（mesa） |
| `ingress_disabled` | 布尔 | | 禁用入口以进行直接 IP:端口访问 |
| `localdisks` | 字符串 | | 要挂载的本地驱动（例如，`sda1,sdb1,MYNAS`） |
| `networkdisks` | 字符串 | | 要挂载的 SMB 共享（例如，`//SERVER/SHARE`） |
| `cifsusername` | 字符串 | | SMB 用户名用于网络共享 |
| `cifspassword` | 字符串 | | SMB 密码用于网络共享 |
| `cifsdomain` | 字符串 | | SMB 域用于网络共享 |

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

额外的选项可以在 `/config/addons_config/photoprism/config.yaml` 中配置。
完整列表：https://github.com/photoprism/photoprism/blob/develop/docker-compose.yml

### 外部数据库设置

对于外部数据库，添加到 `addons_config/photoprism/config.yaml`：

```yaml
PHOTOPRISM_DATABASE_DRIVER: "mysql"
PHOTOPRISM_DATABASE_SERVER: "IP:PORT"
PHOTOPRISM_DATABASE_NAME: "photoprism"
PHOTOPRISM_DATABASE_USER: "USERNAME"
PHOTOPRISM_DATABASE_PASSWORD: "PASSWORD"
```

### 挂载驱动

此插件支持挂载本地驱动和远程 SMB 共享：

- **本地驱动**：请参阅 [在插件中挂载本地驱动](https://github.com/alexbelgium/hassio-addons/wiki/Mounting-Local-Drives-in-Addons)
- **远程共享**：请参阅 [在插件中挂载远程共享](https://github.com/alexbelgium/hassio-addons/wiki/Mounting-remote-shares-in-Addons)

## 使用 Photoprism 命令行界面

Photoprism 还提供了命令行界面：

https://docs.photoprism.app/getting-started/docker-compose/#command-line-interface

您可以通过 Portainer 插件访问它，或通过执行 `docker exec -it <photoprism container id> bash` 通过 _ssh_ 访问。

:warning: 不要使用 `docker exec <photoprism container id> photoprism`，因为这会导致不可预测的行为。

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
