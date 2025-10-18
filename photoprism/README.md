# Home assistant add-on: Photoprism

[![Donate][donation-badge]](https://www.buymeacoffee.com/alexbelgium)
[![Donate][paypal-badge]](https://www.paypal.com/donate/?hosted_button_id=DZFULJZTP3UQA)

![Version](https://img.shields.io/badge/dynamic/yaml?label=版本&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fphotoprism%2Fconfig.yaml)
![Ingress](https://img.shields.io/badge/dynamic/yaml?label=Ingress&query=%24.ingress&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fphotoprism%2Fconfig.yaml)
![Arch](https://img.shields.io/badge/dynamic/yaml?color=success&label=Arch&query=%24.arch&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fphotoprism%2Fconfig.yaml)

[![Codacy Badge](https://app.codacy.com/project/badge/Grade/9c6cf10bdbba45ecb202d7f579b5be0e)](https://www.codacy.com/gh/alexbelgium/hassio-addons/dashboard?utm_source=github.com&utm_medium=referral&utm_content=alexbelgium/hassio-addons&utm_campaign=Badge_Grade)
[![GitHub Super-Linter](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/weekly-supelinter.yaml?label=Lint%20code%20base)](https://github.com/alexbelgium/hassio-addons/actions/workflows/weekly-supelinter.yaml)
[![Builder](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/onpush_builder.yaml?label=Builder)](https://github.com/alexbelgium/hassio-addons/actions/workflows/onpush_builder.yaml)

[donation-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee%20(no%20paypal)-%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white
[paypal-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee%20with%20Paypal-0070BA?logo=paypal&style=flat&logoColor=white

所需最小配置：2个核心和4 GB内存

_感谢所有给我的仓库点赞的人！要点赞，请点击下面的图片，然后它会在右上角。谢谢！_

[![Stargazers repo roster for @alexbelgium/hassio-addons](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/.github/stars2.svg)](https://github.com/alexbelgium/hassio-addons/stargazers)

![下载趋势](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/photoprism/stats.png)

## 关于

一个基于服务器的应用程序，用于浏览、组织和共享您的个人照片收藏。

项目主页：https://github.com/photoprism/photoprism

基于的Docker镜像：https://hub.docker.com/r/photoprism/photoprism

## 安装

这个插件的安装非常简单，与安装任何其他Hass.io插件没有区别。

1. [将我的Hass.io插件仓库][repository]添加到您的Hass.io实例。
1. 安装这个插件。
1. 点击`保存`按钮以保存您的配置。
1. 启动插件。
1. 检查插件的日志，看看是否一切顺利。
1. 仔细配置插件以满足您的偏好，请参阅官方文档。

## 配置

Web UI可以在<http://homeassistant:2342>或通过Ingress在侧边栏中找到。
配置可以通过应用程序Web UI进行，除了以下选项。

**系统要求**：至少2个核心和4GB RAM
**默认凭证**：
- 用户名：admin
- 密码：请更改密码

**WebDAV访问**：使用URL `http://local-ip:addon-port/api/hassio.../originals`（请查看插件日志以获取完整路径）

### 选项

| 选项 | 类型 | 默认值 | 描述 |
|------|------|--------|-------|
| `ssl` | 布尔 | `false` | 启用Web界面的HTTPS |
| `certfile` | 字符串 | `fullchain.pem` | SSL证书文件（必须位于/ssl） |
| `keyfile` | 字符串 | `privkey.pem` | SSL密钥文件（必须位于/ssl） |
| `DB_TYPE` | 列表 | `sqlite` | 数据库类型（sqlite/mariadb_addon/external） |
| `ORIGINALS_PATH` | 字符串 | `/share/photoprism/originals` | 照片和视频集合路径 |
| `STORAGE_PATH` | 字符串 | `/share/photoprism/storage` | 缓存、数据库和sidecar文件路径 |
| `IMPORT_PATH` | 字符串 | `/share/photoprism/import` | 导入文件路径 |
| `BACKUP_PATH` | 字符串 | `/share/photoprism/backup` | 备份存储路径 |
| `UPLOAD_NSFW` | 布尔 | `true` | 允许可能冒犯性的上传 |
| `CONFIG_LOCATION` | 字符串 | | 额外配置.yaml的位置 |
| `graphic_drivers` | 列表 | | 图形驱动（mesa） |
| `ingress_disabled` | 布尔 | | 禁用Ingress以直接通过IP:端口访问 |
| `localdisks` | 字符串 | | 挂载的本地驱动器（例如，`sda1,sdb1,MYNAS`） |
| `networkdisks` | 字符串 | | 要挂载的SMB共享（例如，`//SERVER/SHARE`） |
| `cifsusername` | 字符串 | | 用于网络共享的SMB用户名 |
| `cifspassword` | 字符串 | | 用于网络共享的SMB密码 |
| `cifsdomain` | 字符串 | | 用于网络共享的SMB域 |

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

可以在`/config/addons_config/photoprism/config.yaml`中配置额外的选项。
完整列表：https://github.com/photoprism/photoprism/blob/develop/docker-compose.yml

### 外部数据库设置

对于外部数据库，添加到`addons_config/photoprism/config.yaml`：

```yaml
PHOTOPRISM_DATABASE_DRIVER: "mysql"
PHOTOPRISM_DATABASE_SERVER: "IP:PORT"
PHOTOPRISM_DATABASE_NAME: "photoprism"
PHOTOPRISM_DATABASE_USER: "USERNAME"
PHOTOPRISM_DATABASE_PASSWORD: "PASSWORD"
```

### 挂载驱动器

这个插件支持挂载本地驱动器和远程SMB共享：

- **本地驱动器**：请参阅[在插件中挂载本地驱动器](https://github.com/alexbelgium/hassio-addons/wiki/Mounting-Local-Drives-in-Addons)
- **远程共享**：请参阅[在插件中挂载远程共享](https://github.com/alexbelgium/hassio-addons/wiki/Mounting-remote-shares-in-Addons)

## 使用Photoprism命令行界面

Photoprism还提供了一个命令行界面：

https://docs.photoprism.app/getting-started/docker-compose/#command-line-interface

您可以通过Portainer插件或执行`docker exec -it <photoprism container id> bash`通过_ssh_访问它。

:warning: 不要使用`docker exec <photoprism container id> photoprism`，因为这会导致不可预测的行为。

## 插图

![1622396210_840_560](https://user-images.githubusercontent.com/44178713/127819841-2281ac79-ea96-4b41-9704-522957c5b9c3.jpg)

## 支持

在github上创建问题

[repository]: https://github.com/alexbelgium/hassio-addons