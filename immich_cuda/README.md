# Home Assistant 插件：Immich CUDA

⚠️ 该项目正在非常积极地进行开发。请预期会出现错误和更改。请不要将其作为存储照片和视频的唯一方式！(来自开发者)

我利用空闲时间维护本及其他 Home Assistant 插件：跟进上游更改、HA 更改，以及在真实硬件上进行测试需要耗费大量时间（和一些金钱）。我日常使用的约 5-10 个插件多达 110 个，因此我安装一些我自己不用的测试机（购买一些测试服务如 vpn）来辅助调试和改进插件。

如果您节省了我的时间或使您的设置更简单，我将非常感激您的支持！

[![Buy me a coffee][donation-badge]](https://www.buymeacoffee.com/alexbelgium)
[![Donate via PayPal][paypal-badge]](https://www.paypal.com/donate/?hosted_button_id=DZFULJZTP3UQA)

## 插件信息

![Version](https://img.shields.io/badge/dynamic/yaml?label=Version&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fimmich_cuda%2Fconfig.yaml)
![Ingress](https://img.shields.io/badge/dynamic/yaml?label=Ingress&query=%24.ingress&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fimmich_cuda%2Fconfig.yaml)
![Arch](https://img.shields.io/badge/dynamic/yaml?color=success&label=Arch&query=%24.arch&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fimmich_cuda%2Fconfig.yaml)

[![Codacy Badge](https://app.codacy.com/project/badge/Grade/9c6cf10bdbba45ecb202d7f579b5be0e)](https://www.codacy.com/gh/alexbelgium/hassio-addons/dashboard?utm_source=github.com&utm_medium=referral&utm_content=alexbelgium/hassio-addons&utm_campaign=Badge_Grade)
[![GitHub Super-Linter](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/weekly-supelinter.yaml?label=Lint%20code%20base)](https://github.com/alexbelgium/hassio-addons/actions/workflows/weekly-supelinter.yaml)
[![Builder](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/onpush_builder.yaml?label=Builder)](https://github.com/alexbelgium/hassio-addons/actions/workflows/onpush_builder.yaml)

[donation-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee-%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white
[paypal-badge]: https://img.shields.io/badge/Donate%20via%20PayPal-0070BA?logo=paypal&style=flat&logoColor=white

_感谢所有人给我的仓库点赞！点击下图它会显示在右上角。谢谢！_

[![Stargazers repo roster for @alexbelgium/hassio-addons](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/.github/stars2.svg)](https://github.com/alexbelgium/hassio-addons/stargazers)

![downloads evolution](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/immich_cuda/stats.png)

## 关于本插件

这是一个带有 CUDA 硬件加速支持的、直接从手机进行的自 hosted 照片和视频备份解决方案。这是 Immich 带有 CUDA 支持的变体，使用 NVIDIA GPU 为机器学习任务提供硬件加速。

该插件基于 imagegenius 提供的 [docker 镜像](https://github.com/imagegenius/docker-immich)，并启用了 CUDA 支持以提升性能。

## Immich v3

此插件追踪 **Immich v3**（基于 `ghcr.io/imagegenius/immich:3-cuda` 镜像）。

- **Database (数据库)**: Immich v3 需要 PostgreSQL (14–17) 以及 **VectorChord (`vchord`)** 扩展；上游 `pgvecto.rs` 支持已被移除。本仓库中的 `Postgres 15` 和 `Postgres 17` 插件已提供具备 VectorChord 能力的数据库，是首选方案（您也可以使用官方 `ghcr.io/immich-app/postgres:*-vectorchord*` 镜像）。
- **Upgrading from Immich v2 (从 Immich v2 升级)**: 请保留您现有的具备 VectorChord 能力的数据库，以便 Immich 自动迁移数据。如果您的数据库仍使用旧的 `pgvecto.rs` 扩展，请保留该扩展，直到 Immich 完成迁移到 VectorChord。
- **CPU**: 在 `amd64` 架构上，Immich v3 需要 x86-64-v2（或更新）的 CPU。

请参阅官方 [v3 迁移指南](https://immich.app/blog/v3-migration) 了解详情。

## 硬件要求

- **NVIDIA GPU**: 兼容且支持 CUDA 的 NVIDIA 显卡
- **CUDA Drivers **(驱动): 必须在主机系统上正确安装 NVIDIA 驱动
- **Architecture (架构)**: 仅限 AMD64（ARM 架构不支持 CUDA 支持）

## 配置

Webui 可访问 `<your-ip>:8080`。PostgreSQL 可以是内部或外部的。

### 选项

| Option (选项) | Type (类型) | Default (默认值) | Description (描述) |
|--------|------|---------|-------------|
| `data_location` | str | `/share/immich` | 存储 Immich 数据的路径 |
| `library_location` | str | | 照片/视频库路径 |
| `TZ` | str | | 时区 (例如 `Europe/London`) |
| `localdisks` | str | | 本地驱动器挂载选项 (例如 `sda1,sdb1,MYNAS`) |
| `networkdisks` | str | | 远程 SMB 共享挂载选项 (例如 `//SERVER/SHARE`) |
| `cifsusername` | str | | 网络共享的 SMB 用户名 |
| `cifspassword` | str | | 网络共享的 SMB 密码 |
| `cifsdomain` | str | | 网络共享的 SMB 域 |
| `DB_HOSTNAME` | str | `homeassistant.local` | 数据库主机名 |
| `DB_USERNAME` | str | `postgres` | 数据库用户名 |
| `DB_PASSWORD` | str | `homeassistant` | 数据库密码 |
| `DB_DATABASE_NAME` | str | `immich` | 数据库名称 |
| `DB_PORT` | int | `5432` | 数据库端口 |
| `DB_ROOT_PASSWORD` | str | | 数据库 root 密码 |
| `JWT_SECRET` | str | | 身份验证的 JWT 密钥 |
| `DISABLE_MACHINE_LEARNING` | bool | `false` | 禁用 ML 功能 (不推荐用于 CUDA 变体) |
| `MACHINE_LEARNING_WORKERS` | int | `1` | ML worker 数量 (CUDA 下可增加) |
| `MACHINE_LEARNING_WORKER_TIMEOUT` | int | `120` | ML worker 超时 (秒) |
| `VIPS_NOVECTOR` | bool | `false` | 设置 `true` 以导出 `VIPS_NOVECTOR=1` 并解决 aarch64 缩略图生成问题 |
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
DISABLE_MACHINE_LEARNING: false
MACHINE_LEARNING_WORKERS: 2
MACHINE_LEARNING_WORKER_TIMEOUT: 180
```

### 挂载驱动器

此插件支持同时挂载本地驱动器和远程 SMB 共享：

- **Local drives **(本地驱动器): 参见 [在插件中挂载本地驱动器](https://github.com/alexbelgium/hassio-addons/wiki/Mounting-Local-Drives-in-Addons)
- **Remote shares **(远程共享): 参见 [在插件中挂载远程共享](https://github.com/alexbelgium/hassio-addons/wiki/Mounting-remote-shares-in-Addons)

#### 使用本地磁盘存储 Immich 数据

要将 Immich 数据保存到挂载的本地磁盘：

1. 将 `localdisks` 选项设置为驱动器名称（例如 `sda1`）。驱动器将安装在 `/mnt/sda1`。
2. 将 `data_location` 选项设置为挂载驱动器上的路径，例如 `/mnt/sda1/immich`。

示例配置：

```yaml
localdisks: "sda1"
data_location: "/mnt/sda1/immich"
```

### 自定义脚本和环境变量

此插件支持通过 `addon_config` 映射自定义脚本和环境变量：

- **Custom scripts **(自定义脚本): 参见 [在插件中运行自定义脚本](https://github.com/alexbelgium/hassio-addons/wiki/Running-custom-scripts-in-Addons)
- **env_vars option **(环境变量选项): 使用插件的 `env_vars` 选项传递额外的环境变量（名称可为大写或小写）。请参见 https://github.com/alexbelgium/hassio-addons/wiki/Add-Environment-variables-to-your-Addon-2 了解详情。

## 安装

安装此插件非常简单，与其他 Hass.io 插件的安装方式没有不同。

**Prerequisites (前置条件)**:
- 支持 CUDA 的 NVIDIA GPU
- 主机系统上已安装 NVIDIA 驱动
- AMD64 架构（不支持 ARM）

**Steps (步骤)**:
1. 将我的插件仓库添加到您的 home assistant 实例中（在 supervisor addons store 中点击右上角，或如果您已配置我的 HA，则点击下方按钮）
   [![Open your Home Assistant instance and show the add add-on repository dialog with a specific repository URL pre-filled.](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2Falexbelgium%2Fhassio-addons)
1. 安装此插件。
1. 点击 `Save` 按钮保存您的配置。
1. 启动插件。
1. 检查插件日志以确认一切正常。
1. 仔细阅读并根据您的喜好配置插件，查看官方文档。

**Database Setup (数据库设置)**:
请注意，您需要单独安装一个 postgres 插件才能连接数据库。您可以安装我仓库中的 postgres 插件。
请注意，在启动前**务必**更改密码，之后将无法修改。

## 支持

在 github 上创建 issue，或到 [home assistant 论坛](https://community.home-assistant.io/t/home-assistant-addon-immich/282108/3) 提问。

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
