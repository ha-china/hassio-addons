# Home Assistant 插件：immich

⚠️ 该项目处于非常活跃的开发中。请预期会出现错误和改进。不要将其作为存储照片和视频的唯一方式！（来自开发者）

我在空闲时间维护 Home Assistant 插件：跟进上游变更、处理 HA 更新以及在实际硬件上进行测试耗费了大量时间（和一些金钱）。我的 110 个插件中大约有 5-10 个使用频率很高，为了调试和改进这些插件，我安装了一些不自己使用的测试机器（并购买了一些测试服务，如 vpn）。

如果这个插件为您节省了时间或使您的设置更加简单，我会非常感激您的支持！

[![Buy me a coffee][donation-badge]](https://www.buymeacoffee.com/alexbelgium)
[![Donate via PayPal][paypal-badge]](https://www.paypal.com/donate/?hosted_button_id=DZFULJZTP3UQA)

## 插件信息

![Version](https://img.shields.io/badge/dynamic/yaml?label=Version&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fimmich%2Fconfig.yaml)
![Ingress](https://img.shields.io/badge/dynamic/yaml?label=Ingress&query=%24.ingress&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fimmich%2Fconfig.yaml)
![Arch](https://img.shields.io/badge/dynamic/yaml?color=success&label=Arch&query=%24.arch&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fimmich%2Fconfig.yaml)

[![Codacy Badge](https://app.codacy.com/project/badge/Grade/9c6cf10bdbba45ecb202d7f579b5be0e)](https://www.codacy.com/gh/alexbelgium/hassio-addons/dashboard?utm_source=github.com&utm_medium=referral&utm_content=alexbelgium/hassio-addons&utm_campaign=Badge_Grade)
[![GitHub Super-Linter](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/weekly-supelinter.yaml?label=Lint%20code%20base)](https://github.com/alexbelgium/hassio-addons/actions/workflows/weekly-supelinter.yaml)
[![Builder](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/onpush_builder.yaml?label=Builder)](https://github.com/alexbelgium/hassio-addons/actions/workflows/onpush_builder.yaml)

[donation-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee-%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white
[paypal-badge]: https://img.shields.io/badge/Donate%20via%20PayPal-0070BA?logo=paypal&style=flat&logoColor=white

_感谢所有为我仓库星标的用户！要星标它，请点击下方的图片，然后它将会显示在右上角。谢谢！_

[![Stargazers repo roster for @alexbelgium/hassio-addons](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/.github/stars2.svg)](https://github.com/alexbelgium/hassio-addons/stargazers)

![downloads evolution](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/immich/stats.png)

## 简介

基于 Web 的文件浏览器。
该插件基于 imagegenius 的 [docker 镜像](https://github.com/imagegenius/docker-immich)。

## Immich v3

该插件跟踪 **Immich v3**（基于 `ghcr.io/imagegenius/immich:3` 镜像系列构建）。

- **数据库**：Immich v3 需要 PostgreSQL (14–17) 并启用 **VectorChord (`vchord`)** 扩展；上游 `pgvecto.rs` 支持已被移除。此仓库中的 `Postgres 15` 和 `Postgres 17` 插件已提供支持 VectorChord 的数据库，是推荐的选择（您也可以使用官方 `ghcr.io/immich-app/postgres:*-vectorchord*` 镜像）。
- **从 Immich v2 升级**：保留现有的支持 VectorChord 的数据库，以便 Immich 能够自动迁移数据。如果您的数据库仍使用旧的 `pgvecto.rs` 扩展，请在 Immich 完成迁移到 VectorChord 之前保持该扩展所在。
- **CPU**：在 `amd64` 架构上，Immich v3 需要 x86-64-v2（或更新）的 CPU。

有关详细信息，请参阅官方 [v3 迁移指南](https://immich.app/blog/v3-migration)。

## 配置

Web 管理界面可以在 `<your-ip>:8080` 访问。PostgreSQL 可以是内部或外部的。

### 选项

| 选项 | 类型 | 默认值 | 描述 |
|--------|------|---------|-------------|
| `data_location` | str | `/share/immich` | Immich 数据存储路径 |
| `library_location` | str | | 照片/视频库路径 |
| `encoded_video_location` | str | | 转码视频路径（`encoded-video` 文件夹），例如网络磁盘 |
| `TZ` | str | | 时区（例如，`Europe/London`） |
| `localdisks` | str | | 本地驱动器挂载路径（例如，`sda1,sdb1,MYNAS`）。在驱动器后添加文件夹以仅挂载该文件夹，例如 `MYNAS/public` 仅挂载该文件夹，路径为 `/mnt/MYNAS/public`。需要 2026-09-19 之后的插件版本。 |
| `networkdisks` | str | | SMB 共享挂载路径（例如，`//SERVER/SHARE`） |
| `cifsusername` | str | | SMB 网络共享用户名 |
| `cifspassword` | str | | SMB 网络共享密码 |
| `cifsdomain` | str | | SMB 网络共享域 |
| `DB_HOSTNAME` | str | `localhost` | 数据库主机名 |
| `DB_USERNAME` | str | `immich` | 数据库用户名 |
| `DB_PASSWORD` | str | | 数据库密码 |
| `DB_DATABASE_NAME` | str | `immich` | 数据库名称 |
| `DB_PORT` | int | `5432` | 数据库端口 |
| `DB_ROOT_PASSWORD` | str | | 数据库 root 密码 |
| `JWT_SECRET` | str | | 身份验证的 JWT 密钥 |
| `DISABLE_MACHINE_LEARNING` | bool | `false` | 禁用机器学习功能 |
| `MACHINE_LEARNING_WORKERS` | int | `1` | 机器学习工作进程数 |
| `MACHINE_LEARNING_WORKER_TIMEOUT` | int | `120` | 机器学习工作进程超时（秒） |
| `VIPS_NOVECTOR` | bool | `false` | 设置为 `true` 以导出 `VIPS_NOVECTOR=1` 并解决 aarch64 缩略图生成问题 |
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

此插件支持挂载本地驱动器以及远程 SMB 共享：

- **本地驱动器**：参见 [插件中挂载本地驱动器](https://github.com/alexbelgium/hassio-addons/wiki/Mounting-Local-Drives-in-Addons)
- **远程共享**：参见 [插件中挂载远程共享](https://github.com/alexbelgium/hassio-addons/wiki/Mounting-remote-shares-in-Addons)

#### 使用本地磁盘存储 Immich 数据

将 Immich 数据保存到挂载的本地磁盘：

1. 将 `localdisks` 选项设置为驱动器名称（例如，`sda1`）。驱动器将挂载到 `/mnt/sda1`。若要仅挂载驱动器中的一个文件夹，请在名称后添加它，例如 `sda1/immich` 仅挂载该文件夹到 `/mnt/sda1/immich`。文件夹挂载需要 2026-09-19 之后发布的插件版本。
2. 将 `data_location` 选项设置为挂载驱动器上的路径，例如 `/mnt/sda1/immich`。

示例配置：

```yaml
localdisks: "sda1"
data_location: "/mnt/sda1/immich"
```

### 自定义脚本和环境变量

此插件通过 `app_config` 映射支持自定义脚本和环境变量：

- **自定义脚本**：参见 [插件中运行自定义脚本](https://github.com/alexbelgium/hassio-addons/wiki/Running-custom-scripts-in-Addons)
- **env_vars 选项**：使用插件 `env_vars` 选项传入额外的环境变量（大写或小写名称均可）。详见 https://github.com/alexbelgium/hassio-addons/wiki/Add-Environment-variables-to-your-Addon-2。

## 安全性

`DB_PASSWORD` 选项随 `homeassistant` 一起分发，这如果您的 Immich 数据库可从网络访问，则意味着您可以访问它。请在您的 PostgreSQL 服务器上更改它，然后在同一插件选项中设置相同的值。插件在默认值仍然有效时会在启动日志中打印警告。

## 安装

此插件的安装非常简单，与其他任何 Hass.io 插件的安装没有太大区别。

1. 将我的插件仓库添加到您的 Home Assistant 实例中（在 supervisor 插件商店中右上角，或者如果您已配置了我的 HA，则点击下方按钮）
   [![Open your Home Assistant instance and show the add add-on repository dialog with a specific repository URL pre-filled.](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2Falexbelgium%2Fhassio-addons)
1. 安装此插件。
1. 点击 `Save` 按钮保存您的配置。
1. 启动插件。
1. 检查插件日志以查看是否一切顺利。
1. 仔细根据您的偏好配置插件，详见官方文档。

请注意，您需要安装单独的 postgres 插件才能连接数据库。您可以安装我仓库中已有的 postgres 插件。
请注意，在启动它之前务必更改密码，它之后将不会更改。

## 支持

在 GitHub 上创建问题，或询问 [Home Assistant 讨论区](https://community.home-assistant.io/t/home-assistant-addon-immich/282108/3)

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
