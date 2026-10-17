# Home Assistant Add-on：Immich CUDA

⚠️ 项目正在积极开发中，请预期会有 Bug 和变更。请勿将其作为存储照片和视频的唯一方式！(来自开发者)

我在业余时间维持此及其他 Home Assistant add-on：跟进上游更新、HA 更新以及在实际硬件上进行测试需要大量时间（以及一些金钱）。我大约使用我 110 多个 add-on 中的 5-10 个，所以我定期设置测试机器（并购买一些我自己不使用的测试服务，如 vpn）来排查问题和改进 add-on。

如果这个 add-on 节省了您的时间或使您的设置更简单，我将不胜感激您的支持！

[![Buy me a coffee][donation-badge]](https://www.buymeacoffee.com/alexbelgium)
[![Donate via PayPal][paypal-badge]](https://www.paypal.com/donate/?hosted_button_id=DZFULJZTP3UQA)

## Addon 信息

![Version](https://img.shields.io/badge/dynamic/yaml?label=Version&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fimmich_cuda%2Fconfig.yaml)
![Ingress](https://img.shields.io/badge/dynamic/yaml?label=Ingress&query=%24.ingress&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fimmich_cuda%2Fconfig.yaml)
![Arch](https://img.shields.io/badge/dynamic/yaml?color=success&label=Arch&query=%24.arch&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fimmich_cuda%2Fconfig.yaml)

[![Codacy Badge](https://app.codacy.com/project/badge/Grade/9c6cf10bdbba45ecb202d7f579b5be0e)](https://www.codacy.com/gh/alexbelgium/hassio-addons/dashboard?utm_source=github.com&utm_medium=referral&utm_content=alexbelgium/hassio-addons&utm_campaign=Badge_Grade)
[![GitHub Super-Linter](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/weekly-supelinter.yaml?label=Lint%20code%20base)](https://github.com/alexbelgium/hassio-addons/actions/workflows/weekly-supelinter.yaml)
[![Builder](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/onpush_builder.yaml?label=Builder)](https://github.com/alexbelgium/hassio-addons/actions/workflows/onpush_builder.yaml)

[donation-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee-%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white
[paypal-badge]: https://img.shields.io/badge/Donate%20via%20PayPal-0070BA?logo=paypal&style=flat&logoColor=white

_感谢所有为我仓库星标的朋友们！要星标它，请点击下图，它就会被显示在右上角。谢谢！_

[![Stargazers repo roster for @alexbelgium/hassio-addons](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/.github/stars2.svg)](https://github.com/alexbelgium/hassio-addons/stargazers)

![downloads evolution](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/immich_cuda/stats.png)

## 概述

支持 CUDA 硬件加速的来自手机端的自托管照片和视频备份解决方案。这是启用 CUDA 以提供使用 NVIDIA GPU 执行机器学习任务硬件加速的 Immich 变体。

此 add-on 基于 imagegenius 的 [docker 镜像](https://github.com/imagegenius/docker-immich)，并启用了 CUDA 支持以增强性能。

## Immich v3

此 add-on 跟踪 **Immich v3**（基于 `ghcr.io/imagegenius/immich:3-cuda` 镜像行构建）。

- **数据库**：Immich v3 需要带有 **VectorChord (`vchord`)** 扩展的 PostgreSQL (14–17)；上游 `pgvecto.rs` 支持已被移除。本仓库中的 `Postgres 15` 和 `Postgres 17` add-on 已提供支持 VectorChord 的数据库，是首选选择（您也可以使用官方 `ghcr.io/immich-app/postgres:*-vectorchord*` 镜像）。
- **从 Immich v2 升级**：保留您现有的支持 VectorChord 的数据库，以便 Immich 能自动迁移其数据。如果数据库仍持有旧 `pgvecto.rs` 扩展中的数据，请将保留该扩展，直到 Immich 完成向 VectorChord 的迁移。
- **CPU**：在 `amd64` 架构上，Immich v3 需要 x86-64-v2 或更新版本的 CPU。

有关详细信息，请参阅官方 [v3 迁移指南](https://immich.app/blog/v3-migration)。

## 硬件需求

- **NVIDIA GPU**：兼容带有 CUDA 支持的 NVIDIA 显卡
- **CUDA 驱动程序**：主机系统必须正确安装 NVIDIA 驱动程序
- **架构**：仅支持 AMD64（ARM 架构不可用 CUDA 支持）

## 配置

Web 界面可在 `<your-ip>:8080` 处找到。PostgreSQL 可以是内部或外部的。

### 选项

| 选项 | 类型 | 默认值 | 描述 |
| :--- | :--- | :--- | :--- |
| `data_location` | str | `/share/immich` | Immich 数据存储路径 |
| `library_location` | str | | 照片/视频库路径 |
| `TZ` | str | | 时区（例如：`Europe/London`） |
| `localdisks` | str | | 本地驱动器挂载路径（例如：`sda1,sdb1,MYNAS`）。在驱动器后添加文件夹仅挂载该文件夹，例如 `MYNAS/public` 仅挂载该文件夹，路径为 `/mnt/MYNAS/public`。文件夹挂载需要 2026-09-19 之后发布的 add-on 版本。 |
| `networkdisks` | str | | 要挂载的 SMB 共享路径（例如：`//SERVER/SHARE`） |
| `cifsusername` | str | | SMB 网络共享用户名 |
| `cifspassword` | str | | SMB 网络共享密码 |
| `cifsdomain` | str | | SMB 网络共享域 |
| `DB_HOSTNAME` | str | `homeassistant.local` | 数据库主机名 |
| `DB_USERNAME` | str | `postgres` | 数据库用户名 |
| `DB_PASSWORD` | str | `homeassistant` | 数据库密码 |
| `DB_DATABASE_NAME` | str | `immich` | 数据库名称 |
| `DB_PORT` | int | `5432` | 数据库端口 |
| `DB_ROOT_PASSWORD` | str | | 数据库 root 密码 |
| `JWT_SECRET` | str | | 用于身份验证的 JWT 密钥 |
| `DISABLE_MACHINE_LEARNING` | bool | `false` | 禁用 ML 功能（对于 CUDA 变体不推荐） |
| `MACHINE_LEARNING_WORKERS` | int | `1` | ML 工作者数量（使用 CUDA 时可以增加） |
| `MACHINE_LEARNING_WORKER_TIMEOUT` | int | `120` | ML 工作者超时时间（秒） |
| `VIPS_NOVECTOR` | bool | `false` | 设置为 `true` 以使 `VIPS_NOVECTOR=1` 并绕过 aarch64 缩略图生成问题 |
| `skip_permissions_check` | bool | `false` | 跳过文件权限检查 |

### 配置示例

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

此 add-on 支持挂载本地驱动器和远程 SMB 共享：

- **本地驱动器**：参见 [Addon 中的挂载本地驱动器](https://github.com/alexbelgium/hassio-addons/wiki/Mounting-Local-Drives-in-Addons)
- **远程共享**：参见 [Addon 中的挂载远程共享](https://github.com/alexbelgium/hassio-addons/wiki/Mounting-remote-shares-in-Addons)

#### 使用本地磁盘存储 Immich 数据

要将 Immich 数据存储到挂载的本地磁盘：

1. 将 `localdisks` 选项设置为您的驱动器名称（例如 `sda1`）。驱动器将挂载到 `/mnt/sda1`。要仅挂载驱动器中的一个文件夹，请在名称后添加它，例如 `sda1/immich` 仅在该路径 `/mnt/sda1/immich` 挂载该文件夹。文件夹挂载需要 2026-09-19 之后发布的 add-on 版本。
2. 将 `data_location` 选项设置为挂载驱动器上的路径，例如 `/mnt/sda1/immich`。

配置示例：

```yaml
localdisks: "sda1"
data_location: "/mnt/sda1/immich"
```

### 自定义脚本和环境变量

此 add-on 通过 `app_config` 映射支持自定义脚本和环境变量：

- **自定义脚本**：参见 [Addon 中运行自定义脚本](https://github.com/alexbelgium/hassio-addons/wiki/Running-custom-scripts-in-Addons)
- **env_vars 选项**：使用 add-on 的 `env_vars` 选项传递额外环境变量（大写或小写字母名称均可）。有关详细信息，请参阅 https://github.com/alexbelgium/hassio-addons/wiki/Add-Environment-variables-to-your-Addon-2。

## 安装

此 add-on 的安装非常简单，与安装任何其他 Hass.io add-on 没有区别。

**前置要求：**
- 带有 CUDA 支持的 NVIDIA GPU
- 主机系统已安装 NVIDIA 驱动程序
- AMD64 架构（ARM 不受支持）

**步骤：**
1. 将我的 add-on 仓库添加到您的 Home Assistant 实例中（在 supervisor 的 add-on 商店右上角，或如果您已配置了我的 HA，则点击下方按钮）
   [![打开您的 Home Assistant 实例并显示带有特定仓库 URL 预填充的添加 add-on 仓库对话框。](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2Falexbelgium%2Fhassio-addons)
1. 安装此 add-on。
1. 点击 `保存` 按钮以存储您的配置。
1. 启动 add-on。
1. 检查 add-on 日志以查看一切是否正常。
1. 根据您的偏好仔细配置 add-on，详见官方文档。

**数据库设置：**
请注意，您需要安装单独的 postgres add-on 才能连接数据库。您可以直接在 my 仓库中安装 postgres add-on。
注意，在启动之前更改密码；之后将无法更改。

## 支持

在 github 上创建 issue，或询问 [home assistant thread](https://community.home-assistant.io/t/home-assistant-addon-immich/282108/3)

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
