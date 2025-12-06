# Home assistant add-on: Photoprism

我利用业余时间维护这个和其他 Home Assistant add-on：跟上上游的变更、HA的变更，并在真实硬件上测试需要大量时间（和一些金钱）。我大约使用我超过110个add-on中的5-10个，所以我安装了测试机器（和购买了一些我自己不使用的测试服务，如VPN）来调试和改进这些add-on。

如果这个add-on节省了你的时间或使你的设置更简单，我将非常感谢你的支持！

[![Buy me a coffee][donation-badge]](https://www.buymeacoffee.com/alexbelgium)
[![Donate via PayPal][paypal-badge]](https://www.paypal.com/donate/?hosted_button_id=DZFULJZTP3UQA)

## Addon informations

![Version](https://img.shields.io/badge/dynamic/yaml?label=Version&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fphotoprism%2Fconfig.yaml)
![Ingress](https://img.shields.io/badge/dynamic/yaml?label=Ingress&query=%24.ingress&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fphotoprism%2Fconfig.yaml)
![Arch](https://img.shields.io/badge/dynamic/yaml?color=success&label=Arch&query=%24.arch&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fphotoprism%2Fconfig.yaml)

[![Codacy Badge](https://app.codacy.com/project/badge/Grade/9c6cf10bdbba45ecb202d7f579b5be0e)](https://www.codacy.com/gh/alexbelgium/hassio-addons/dashboard?utm_source=github.com&utm_medium=referral&utm_content=alexbelgium/hassio-addons&utm_campaign=Badge_Grade)
[![GitHub Super-Linter](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/weekly-supelinter.yaml?label=Lint%20code%20base)](https://github.com/alexbelgium/hassio-addons/actions/workflows/weekly-supelinter.yaml)
[![Builder](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/onpush_builder.yaml?label=Builder)](https://github.com/alexbelgium/hassio-addons/actions/workflows/onpush_builder.yaml)

[donation-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee-%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white
[paypal-badge]: https://img.shields.io/badge/Donate%20via%20PayPal-0070BA?logo=paypal&style=flat&logoColor=white

MINIMUM CONFIG REQUIRED : 2 cores and 4 GB of memory

_Thanks to everyone having starred my repo! To star it click on the image below, then it will be on top right. Thanks!_

[![Stargazers repo roster for @alexbelgium/hassio-addons](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/.github/stars2.svg)](https://github.com/alexbelgium/hassio-addons/stargazers)

![downloads evolution](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/photoprism/stats.png)

## About

一个基于服务器的应用程序，用于浏览、组织和共享您的个人照片收藏。

项目主页：https://github.com/photoprism/photoprism

基于的docker镜像：https://hub.docker.com/r/photoprism/photoprism

## Installation

这个add-on的安装非常简单，与安装任何其他Hass.io add-on没有区别。

1. [将我的Hass.io add-ons仓库][repository]添加到你的Hass.io实例。
1. 安装这个add-on。
1. 点击“保存”按钮以保存你的配置。
1. 启动add-on。
1. 检查add-on的日志，看看是否一切正常。
1. 仔细配置add-on以符合你的偏好，查看官方文档以获取详细信息。

## Configuration

使用add-on的`env_vars`选项来传递额外的环境变量（名称可以是大小写）。详细信息请参阅：https://github.com/alexbelgium/hassio-addons/wiki/Add-Environment-variables-to-your-Addon-2。

Webui可以在<http://homeassistant:2342>或通过Ingress在侧边栏中找到。
配置可以通过app的WebUI进行，除了以下选项。

**系统要求**：至少2核和4GB RAM
**默认凭证**：
- 用户名：admin
- 密码：请更改密码

**WebDAV访问**：使用URL `http://local-ip:addon-port/api/hassio.../originals`（请查看add-on日志以获取完整路径）

### Options

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `ssl` | bool | `false` | 启用web界面的HTTPS |
| `certfile` | str | `fullchain.pem` | SSL证书文件（必须位于/ssl） |
| `keyfile` | str | `privkey.pem` | SSL密钥文件（必须位于/ssl） |
| `DB_TYPE` | list | `sqlite` | 数据库类型（sqlite/mariadb_addon/external） |
| `ORIGINALS_PATH` | str | `/share/photoprism/originals` | 照片和视频收藏路径 |
| `STORAGE_PATH` | str | `/share/photoprism/storage` | 缓存、数据库和sidecar文件路径 |
| `IMPORT_PATH` | str | `/share/photoprism/import` | 导入文件路径 |
| `BACKUP_PATH` | str | `/share/photoprism/backup` | 备份存储路径 |
| `UPLOAD_NSFW` | bool | `true` | 允许上传可能令人反感的文件 |
| `CONFIG_LOCATION` | str | | 额外config.yaml的位置 |
| `graphic_drivers` | list | | 图形驱动（mesa） |
| `ingress_disabled` | bool | | 禁用Ingress以直接通过IP:端口访问 |
| `localdisks` | str | | 要挂载的本地驱动（例如，`sda1,sdb1,MYNAS`） |
| `networkdisks` | str | | 要挂载的SMB共享（例如，`//SERVER/SHARE`） |
| `cifsusername` | str | | SMB网络共享的用户名 |
| `cifspassword` | str | | SMB网络共享的密码 |
| `cifsdomain` | str | | 网络共享的SMB域 |

### Example Configuration

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

### Advanced Configuration

可以在`/config/addons_config/photoprism/config.yaml`中配置额外的选项。
完整列表：https://github.com/photoprism/photoprism/blob/develop/docker-compose.yml

### External Database Setup

对于外部数据库，添加到`addons_config/photoprism/config.yaml`：

```yaml
PHOTOPRISM_DATABASE_DRIVER: "mysql"
PHOTOPRISM_DATABASE_SERVER: "IP:PORT"
PHOTOPRISM_DATABASE_NAME: "photoprism"
PHOTOPRISM_DATABASE_USER: "USERNAME"
PHOTOPRISM_DATABASE_PASSWORD: "PASSWORD"
```

### Mounting Drives

这个add-on支持挂载本地驱动和远程SMB共享：

- **本地驱动**：参见[在Add-ons中挂载本地驱动](https://github.com/alexbelgium/hassio-addons/wiki/Mounting-Local-Drives-in-Addons)
- **远程共享**：参见[在Add-ons中挂载远程共享](https://github.com/alexbelgium/hassio-addons/wiki/Mounting-remote-shares-in-Addons)

## Using Photoprism Command-Line Interface

Photoprism还提供了命令行界面：

https://docs.photoprism.app/getting-started/docker-compose/#command-line-interface

你可以通过portainer add-on访问它，或通过执行`docker exec -it <photoprism container id> bash`通过_ssh_访问。

:warning: 不要使用`docker exec <photoprism container id> photoprism`，因为这会导致不可预测的行为。

## Illustration

![1622396210_840_560](https://user-images.githubusercontent.com/44178713/127819841-2281ac79-ea96-4b41-9704-522957c5b9c3.jpg)

## Support

在github上创建问题

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
