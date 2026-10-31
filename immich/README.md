# Home assistant add-on: immich

⚠️ 该项目正在非常活跃的维护中。请预期会出现错误和变更。请勿将其作为存储照片和视频的唯一方式！（来自开发者）

我利用业余时间维护 Home Assistant add-on：跟进上游变更、HA 变更，并在真实硬件上进行测试非常耗时（甚至需要花费钱）。我大约使用了 5-10 个由我维护的 >110 个 addon 中有用的 addon。因此，我会频繁地安装测试机器（并购买一些我不亲自使用的测试服务，如 vpn），以便用于故障排查和改进 addon。

如果这个 add-on 节省了您的时间或让您的设置变得更容易，我将不胜感激您的支持！

[![Buy me a coffee][donation-badge]](https://www.buymeacoffee.com/alexbelgium)
[![Donate via PayPal][paypal-badge]](https://www.paypal.com/donate/?hosted_button_id=DZFULJZTP3UQA)

## Addon 信息

![Version](https://img.shields.io/badge/dynamic/yaml?label=Version&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fimmich%2Fconfig.yaml)
![Ingress](https://img.shields.io/badge/dynamic/yaml?label=Ingress&query=%24.ingress&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fimmich%2Fconfig.yaml)
![Arch](https://img.shields.io/badge/dynamic/yaml?color=success&label=Arch&query=%24.arch&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fimmich%2Fconfig.yaml)

[![Codacy Badge](https://app.codacy.com/project/badge/Grade/9c6cf10bdbba45ecb202d7f579b5be0e)](https://www.codacy.com/gh/alexbelgium/hassio-addons/dashboard?utm_source=github.com&utm_medium=referral&utm_content=alexbelgium/hassio-addons&utm_campaign=Badge_Grade)
[![GitHub Super-Linter](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/weekly-supelinter.yaml?label=Lint%20code%20base)](https://github.com/alexbelgium/hassio-addons/actions/workflows/weekly-supelinter.yaml)
[![Builder](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/onpush_builder.yaml?label=Builder)](https://github.com/alexbelgium/hassio-addons/actions/workflows/onpush_builder.yaml)

[donation-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee-%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white
[paypal-badge]: https://img.shields.io/badge/Donate%20via%20PayPal-0070BA?logo=paypal&style=flat&logoColor=white

_感谢所有为我 repo 点赞的人！要点赞请点击下图，它将被放在右上角。谢谢！_

[![Stargazers repo roster for @alexbelgium/hassio-addons](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/.github/stars2.svg)](https://github.com/alexbelgium/hassio-addons/stargazers)

![downloads evolution](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/immich/stats.png)

## 简介

基于 Web 的文件浏览器。
此 addon 基于 imagegenius 的 [docker 镜像](https://github.com/imagegenius/docker-immich)。

## Immich v3

此 add-on 跟踪 **Immich v3**（基于 `ghcr.io/imagegenius/immich:3` 镜像系列构建）。

- **数据库**：Immich v3 需要 PostgreSQL (14–17)，并伴有 **VectorChord (`vchord`)** 扩展；上游 `pgvecto.rs` 的支持已被移除。此仓库中的 `Postgres 15` 和 `Postgres 17` add-on 已提供可支持 VectorChord 的数据库，是推荐选择（您也可以使用官方的 `ghcr.io/immich-app/postgres:*-vectorchord*` 镜像）。
- **从 Immich v2 升级**：保留现有的可支持 VectorChord 的数据库，以便 Immich 可以自动迁移其数据。如果您的数据存储的旧 `pgvecto.rs` 扩展中，请保留该扩展，直到 Immich 完成迁移到 VectorChord。
- **CPU**：在 `amd64` 上，Immich v3 需要 x86-64-v2（或更新）的 CPU。

有关详细信息，请参阅官方的 [v3 迁移指南](https://immich.app/blog/v3-migration)。

## 配置

Webui 可以在 `<your-ip>:8080` 上找到。PostgreSQL 可以是内部的也可以是外部的。

### 选项

| 选项 | 类型 | 默认值 | 描述 |
|--------|------|---------|-------------|
| `data_location` | str | `/share/immich` | Immich 数据存储的位置 |
| `library_location` | str | | 照片/视频库路径 |
| `TZ` | str | | 时区（例如，`Europe/London`） |
| `localdisks` | str | | 本地驱动器映射 (e.g., `sda1,sdb1,MYNAS`)。在驱动器后添加文件夹以仅映射该文件夹，e.g. `MYNAS/public` 仅映射该文件夹，路径为 `/mnt/MYNAS/public`。文件夹映射需要 2026-09-19 之后发布的 add-on 版本。 |
| `networkdisks` | str | | SMB 共享映射 (e.g., `//SERVER/SHARE`) |
| `cifsusername` | str | | SMB 用户名（用于网络共享） |
| `cifspassword` | str | | SMB 密码（用于网络共享） |
| `cifsdomain` | str | | SMB 域（用于网络共享） |
| `DB_HOSTNAME` | str | `localhost` | 数据库主机名 |
| `DB_USERNAME` | str | `immich` | 数据库用户名 |
| `DB_PASSWORD` | str | | 数据库密码 |
| `DB_DATABASE_NAME` | str | `immich` | 数据库名称 |
| `DB_PORT` | int | `5432` | 数据库端口 |
| `DB_ROOT_PASSWORD` | str | | 数据库 root 密码 |
| `JWT_SECRET` | str | | 认证 JWT 密钥 |
| `DISABLE_MACHINE_LEARNING` | bool | `false` | 禁用机器学习功能 |
| `MACHINE_LEARNING_WORKERS` | int | `1` | 机器学习 workers 数量 |
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

### 挂载驱动器

此 add-on 支持同时挂载本地驱动器和远程 SMB 共享：

- **本地驱动器**：请参阅 [在 Addons 中挂载本地驱动器](https://github.com/alexbelgium/hassio-addons/wiki/Mounting-Local-Drives-in-Addons)
- **远程共享**：请参阅 [在 Addons 中挂载远程共享](https://github.com/alexbelgium/hassio-addons/wiki/Mounting-remote-shares-in-Addons)

#### 使用本地磁盘存储 Immich 数据

将 Immich 数据保存到已挂载的本地磁盘：

1. 将 `localdisks` 选项设置为您的驱动器名称（例如，`sda1`）。驱动器将在 `/mnt/sda1` 处挂载。要为驱动器中的单个文件夹添加它，e.g. `sda1/immich` 将仅在该驱动器中挂载此文件夹，路径为 `/mnt/sda1/immich`。文件夹映射需要 2026-09-19 之后发布的 add-on 版本。
2. 将 `data_location` 选项设置为挂载驱动器上的路径，例如 `/mnt/sda1/immich`。

示例配置：

```yaml
localdisks: "sda1"
data_location: "/mnt/sda1/immich"
```

### 自定义脚本和环境变量

此 add-on 支持通过 `app_config` 映射自定义脚本和环境变量：

- **自定义脚本**：请参阅 [在 Addons 中运行自定义脚本](https://github.com/alexbelgium/hassio-addons/wiki/Running-custom-scripts-in-Addons)
- **env_vars 选项**：使用 add-on 的 `env_vars` 选项来传递额外的环境变量（大小写不限的名称）。详见 https://github.com/alexbelgium/hassio-addons/wiki/Add-Environment-variables-to-your-Addon-2。

## 安装

此 add-on 的安装非常简单，与其他任何 Hass.io add-on 的安装没有区别。

1. 将我的 add-ons 库添加到您的 home assistant 实例（在 supervisor addons store 的右上角，或如果您配置了我的 HA 则点击下方的按钮）
   [![Open your Home Assistant instance and show the add add-on repository dialog with a specific repository URL pre-filled.](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2Falexbelgium%2Fhassio-addons)
1. 安装此 add-on。
1. 点击 `Save` 按钮以保存您的配置。
1. 启动 add-on。
1. 检查 add-on 的日志，看看是否一切顺利。
1. 根据偏好仔细配置 add-on，请参阅官方文档。

请注意，您需要安装单独的 postgres add-on 才能连接数据库。您可以预先安装我仓库中的 postgres add-on。
注意：在启动之前更改密码；启动后无法更改。

## 支持

在 github 上创建 issue，或询问 [home assistant thread](https://community.home-assistant.io/t/home-assistant-addon-immich/282108/3)

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
