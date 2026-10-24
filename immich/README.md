# Home Assistant 附加组件：immich

⚠️ 该项目正在进行非常活跃的开发。请预期会出现 Bug 和变更。请勿将其作为存储照片和视频的唯一方式！（来自开发者）

我利用业余时间为 Home Assistant 维护此及其他附加组件：跟进上游变更、适应 Home Assistant 的更新以及在实际硬件上进行测试需要大量时间（以及一些金钱）。我使用的附加组件大约有 5-10 个，因此我会定期安装测试机器（并购买一些我不亲自使用的测试服务，如 vpn）来进行故障排查和改进附加组件。

如果此附加组件为您节省了时间或让您的设置更便捷，我将不胜感激您的支持！

[![Buy me a coffee][donation-badge]](https://www.buymeacoffee.com/alexbelgium)
[![Donate via PayPal][paypal-badge]](https://www.paypal.com/donate/?hosted_button_id=DZFULJZTP3UQA)

## 附加组件信息

![Version](https://img.shields.io/badge/dynamic/yaml?label=Version&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fimmich%2Fconfig.yaml)
![Ingress](https://img.shields.io/badge/dynamic/yaml?label=Ingress&query=%24.ingress&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fimmich%2Fconfig.yaml)
![Arch](https://img.shields.io/badge/dynamic/yaml?color=success&label=Arch&query=%24.arch&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fimmich%2Fconfig.yaml)

[![Codacy Badge](https://app.codacy.com/project/badge/Grade/9c6cf10bdbba45ecb202d7f579b5be0e)](https://www.codacy.com/gh/alexbelgium/hassio-addons/dashboard?utm_source=github.com&utm_medium=referral&utm_content=alexbelgium/hassio-addons&utm_campaign=Badge_Grade)
[![GitHub Super-Linter](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/weekly-supelinter.yaml?label=Lint%20code%20base)](https://github.com/alexbelgium/hassio-addons/actions/workflows/weekly-supelinter.yaml)
[![Builder](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/onpush_builder.yaml?label=Builder)](https://github.com/alexbelgium/hassio-addons/actions/workflows/onpush_builder.yaml)

[donation-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee-%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white
[paypal-badge]: https://img.shields.io/badge/Donate%20via%20PayPal-0070BA?logo=paypal&style=flat&logoColor=white

_感谢所有为我的仓库星标的朋友！要星标它，请点击下方的图片，它将会出现在右上角。谢谢 !_

[![Stargazers repo roster for @alexbelgium/hassio-addons](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/.github/stars2.svg)](https://github.com/alexbelgium/hassio-addons/stargazers)

![downloads evolution](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/immich/stats.png)

## 关于

基于文件的 Web 浏览器。
此附加组件基于 [docker 镜像](https://github.com/imagegenius/docker-immich)（由 imagegenius 提供）。

## Immich v3

此附加组件跟踪 **Immich v3**（基于 `ghcr.io/imagegenius/immich:3` 图像系列构建）。

- **数据库**：Immich v3 需要 PostgreSQL (14–17)，并需要 **VectorChord (`vchord`)** 扩展；上游 `pgvecto.rs` 支持已被移除。本存储库中的 `Postgres 15` 和 `Postgres 17` 附加组件已提供具有 VectorChord 功能的数据库，是首选方案（您也可以使用官方 `ghcr.io/immich-app/postgres:*-vectorchord*` 镜像）。
- **从 Immich v2 升级**：请保留现有的具有 VectorChord 功能的数据库，以便 Immich 能自动迁移其数据。如果数据仍包含旧 `pgvecto.rs` 扩展中的数据，请保留该扩展，直到 Immich 完成向 VectorChord 的迁移。
- **CPU**：在 `amd64` 架构上，Immich v3 需要 x86-64-v2（或更新）的 CPU。

有关详细信息，请参阅官方 [v3 迁移指南](https://immich.app/blog/v3-migration)。

## 配置

Web 界面位于 `<your-ip>:8080`。PostgreSQL 可以是内部或外部的。

### 选项

| 选项 | 类型 | 默认值 | 描述 |
|--------|------|---------|-------------|
| `data_location` | str | `/share/immich` | Immich 数据存储路径 |
| `library_location` | str | | 照片/视频库路径 |
| `TZ` | str | | 时区（例如，`Europe/London`） |
| `localdisks` | str | | 本地驱动挂载（例如，`sda1,sdb1,MYNAS`）。要在挂载后添加文件夹以仅挂载该文件夹，例如 `MYNAS/public` 仅挂载该文件夹到 `/mnt/MYNAS/public`。文件夹挂载需要 2026-09-19 之后发布的附加组件版本。 |
| `networkdisks` | str | | 挂载的 SMB 共享（例如，`//SERVER/SHARE`） |
| `cifsusername` | str | | SMB 共享用户名 |
| `cifspassword` | str | | SMB 共享密码 |
| `cifsdomain` | str | | SMB 共享域名 |
| `DB_HOSTNAME` | str | `localhost` | 数据库主机名 |
| `DB_USERNAME` | str | `immich` | 数据库用户名 |
| `DB_PASSWORD` | str | | 数据库密码 |
| `DB_DATABASE_NAME` | str | `immich` | 数据库名称 |
| `DB_PORT` | int | `5432` | 数据库端口 |
| `DB_ROOT_PASSWORD` | str | | 数据库 root 密码 |
| `JWT_SECRET` | str | | 用于认证的 JWT 密钥 |
| `DISABLE_MACHINE_LEARNING` | bool | `false` | 禁用 ML 功能 |
| `MACHINE_LEARNING_WORKERS` | int | `1` | ML -workers 数量 |
| `MACHINE_LEARNING_WORKER_TIMEOUT` | int | `120` | ML worker 超时（秒） |
| `VIPS_NOVECTOR` | bool | `false` | 设置为 `true` 以导出 `VIPS_NOVECTOR=1` 并绕过 aarch64 缩略图生成问题 |
| `skip_permissions_check` | bool | `false` | 跳过文件权限检查 |

### 示例配置

```yaml
data_location: "/share/immich"
library_location: "/media/photos"
TZ: "Europe/London"
localdisks: "sda1,sdb1"
networkdisks: "//192.168.1.100/photos"
cifsusername: "photouser"
cifspassword: "password123"
DB_HOSTNAME: "core-mariadb"
DB_USERNAME: "immich"
DB_PASSWORD: "secure_password"
DB_DATABASE_NAME: "immich"
JWT_SECRET: "your-secret-key-here"
```

### 挂载驱动

此附加组件支持挂载本地驱动和远程 SMB 共享：

- **本地驱动**：请参阅 [Addons 中挂载本地驱动](https://github.com/alexbelgium/hassio-addons/wiki/Mounting-Local-Drives-in-Addons)
- **远程共享**：请参阅 [Addons 中挂载远程共享](https://github.com/alexbelgium/hassio-addons/wiki/Mounting-remote-shares-in-Addons)

#### 使用本地磁盘存储 Immich 数据

将 Immich 数据保存到挂载的本地磁盘：

1. 将 `localdisks` 选项设置为您的驱动器名称（例如，`sda1`）。驱动器将挂载到 `/mnt/sda1`。要仅挂载驱动器的一个文件夹，请在名称后添加它，例如 `sda1/immich` 仅将文件夹挂载到 `/mnt/sda1/immich`。文件夹挂载需要 2026-09-19 之后发布的附加组件版本。
2. 将 `data_location` 选项设置为挂载驱动器上的路径，例如 `/mnt/sda1/immich`。

示例配置：

```yaml
localdisks: "sda1"
data_location: "/mnt/sda1/immich"
```

### 自定义脚本和环境变量

此附加组件支持通过 `app_config` 映射使用自定义脚本和环境变量：

- **自定义脚本**：请参阅 [Addons 中运行自定义脚本](https://github.com/alexbelgium/hassio-addons/wiki/Running-custom-scripts-in-Addons)
- **env_vars 选项**：使用附加组件的 `env_vars` 选项来传递额外的环境变量（名称可以是小写或大写）。详见 https://github.com/alexbelgium/hassio-addons/wiki/Add-Environment-variables-to-your-Addon-2

## 安装

此附加组件的安装非常简单，与安装任何其他 Hass.io 附加组件没有不同。

1. 将我的附加组件存储库添加到 Home Assistant 实例（在 supervisor 附加组件商店的右上角，或如果您已配置了我的 HA，则点击下方的按钮）
   [![打开您的 Home Assistant 实例并显示预填有特定存储库 URL 的添加附加组件存储库对话框。](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2Falexbelgium%2Fhassio-addons)
1. 安装此附加组件。
1. 点击 `Save` 按钮以保存您的配置。
1. 启动附加组件。
1. 检查附加组件的日志以查看一切是否正常。
1. 仔细根据您的偏好配置附加组件，请参考官方文档以获取更多信息。

请注意，您需要安装单独的 postgres 附加组件才能连接数据库。您可以安装我存储库中已存在的 postgres 附加组件。
请注意，在启动之前更改密码；启动后无法更改。

## 支持

在 github 上创建问题，或在 [home assistant 线程](https://community.home-assistant.io/t/home-assistant-addon-immich/282108/3) 中提问

[repository]: https://github.com/alexbelgium/hassio-addons
[aarch64-shield]: https://img.shields.io/badge/aarch64-yes-green.svg
[amd64-shield]: https://img.shields.io/badge/amd64-yes-green.svg
[armv7-shield]: https://img.shields.io/badge/armv7-yes-green.svg

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
