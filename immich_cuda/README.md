# Home assistant 附加组件：Immich CUDA

⚠️ 该项目正在进行非常活跃的开发。请预期存在错误和更改。请勿将其作为存储照片和视频的唯一方式！(来自开发者)

我在业余时间维护此及其他 Home Assistant 附加组件：跟踪上游变更、适配 HA 变更以及在真实硬件上进行测试需要大量时间（以及一些金钱）。我的 110 多个附加组件中，我大约使用 5-10 个，因此我通常会安装试验机器（并购买一些试验服务如 vpn）， myself 不使用的，以进行故障排除和改进附加组件

如果该附加组件为您节省了时间或使您的设置更简单，我将不胜感激您的支持！

[![Buy me a coffee][donation-badge]](https://www.buymeacoffee.com/alexbelgium)
[![Donate via PayPal][paypal-badge]](https://www.paypal.com/donate/?hosted_button_id=DZFULJZTP3UQA)

## 附加组件信息

![版本](https://img.shields.io/badge/dynamic/yaml?label=Version&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fimmich_cuda%2Fconfig.yaml)
![入口] (https://img.shields.io/badge/dynamic/yaml?label=Ingress&query=%24.ingress&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fimmich_cuda%2Fconfig.yaml)
![架构](https://img.shields.io/badge/dynamic/yaml?color=success&label=Arch&query=%24.arch&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fimmich_cuda%2Fconfig.yaml)

[![Codacy Badge](https://app.codacy.com/project/badge/Grade/9c6cf10bdbba45ecb202d7f579b5be0e)](https://www.codacy.com/gh/alexbelgium/hassio-addons/dashboard?utm_source=github.com&utm_medium=referral&utm_content=alexbelgium/hassio-addons&utm_campaign=Badge_Grade)
[![GitHub Super-Linter](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/weekly-supelinter.yaml?label=Lint%20code%20base)](https://github.com/alexbelgium/hassio-addons/actions/workflows/weekly-supelinter.yaml)
[![Builder](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/onpush_builder.yaml?label=Builder)](https://github.com/alexbelgium/hassio-addons/actions/workflows/onpush_builder.yaml)

[donation-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee-%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white
[paypal-badge]: https://img.shields.io/badge/Donate%20via%20PayPal-0070BA?logo=paypal&style=flat&logoColor=white

_谢谢所有人给我的仓库点星！如果您要点星，请点击下图，之后它 will 显示在右上角。谢谢！_

[![Stargazers repo roster for @alexbelgium/hassio-addons](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/.github/stars2.svg)](https://github.com/alexbelgium/hassio-addons/stargazers)

![下载量趋势](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/immich_cuda/stats.png)

## 概述

带有 CUDA 硬件加速支持的从手机直接进行自有托管的照片和视频备份解决方案。这是使用 NVIDIA GPU 为机器学习任务提供硬件加速的 Immich CUDA 版本。

该附加组件基于 imagegenius 的 [Docker 镜像](https://github.com/imagegenius/docker-immich)，并启用了 CUDA 支持以提升性能。

## Immich v3

此附加组件追踪 **Immich v3**（基于 `ghcr.io/imagegenius/immich:3-cuda` 镜像系列构建）。

- **数据库**：Immich v3 需要 PostgreSQL (14–17) 并带有 **VectorChord (`vchord`)** 扩展；上游 `pgvecto.rs` 支持已被移除。本仓库中的 `Postgres 15` 和 `Postgres 17` 附加组件已经提供了支持 VectorChord 的数据库，是推荐的选择（您也可以使用官方的 `ghcr.io/immich-app/postgres:*-vectorchord*` 镜像）。
- **从 Immich v2 升级**：保留您现有的支持 VectorChord 的数据库，以便 Immich 可以自动迁移数据。如果您的数据库仍包含旧 `pgvecto.rs` 扩展中的数据，请保留该扩展，直到 Immich 完成向 VectorChord 的迁移。
- **CPU**：在 `amd64` 架构上，Immich v3 需要 x86-64-v2（或更新）的 CPU。

有关详细信息，请查看官方的 [v3 迁移指南](https://immich.app/blog/v3-migration)。

## 硬件要求

- **NVIDIA GPU**：兼容 CUDA 支持的 NVIDIA 图形卡
- **CUDA 驱动程序**：必须在主机系统上正确安装 NVIDIA 驱动程序
- **架构**：仅支持 AMD64（ARM 架构不可用 CUDA 支持）

## 配置

WebUI 可访问 `<your-ip>:8080`。PostgreSQL 可以是内部或外部的。

### 选项

| 选项 | 类型 | 默认值 | 描述 |
|--------|------|---------|-------------|
| `data_location` | str | `/share/immich` | Immich 数据存储的位置 |
| `library_location` | str | | 照片/视频库的位置 |
| `TZ` | str | | 时区（例如，`Europe/London`） |
| `localdisks` | str | | 要挂载的本地驱动器（例如，`sda1,sdb1,MYNAS`）。在驱动器后添加一个文件夹仅挂载该文件夹，例如 `MYNAS/public` 仅挂载该文件夹，位于 `/mnt/MYNAS/public`。文件夹挂载需要附加组件版本在 2026-09-19 之后发布。 |
| `networkdisks` | str | | 要挂载的 SMB 共享（例如，`//SERVER/SHARE`） |
| `cifsusername` | str | | SMB 网络共享的用户名 |
| `cifspassword` | str | | SMB 网络共享的密码 |
| `cifsdomain` | str | | SMB 网络共享的域 |
| `DB_HOSTNAME` | str | `homeassistant.local` | 数据库主机名 |
| `DB_USERNAME` | str | `postgres` | 数据库用户名 |
| `DB_PASSWORD` | str | `homeassistant` | 数据库密码 |
| `DB_DATABASE_NAME` | str | `immich` | 数据库名称 |
| `DB_PORT` | int | `5432` | 数据库端口 |
| `DB_ROOT_PASSWORD` | str | | 数据库 root 密码 |
| `JWT_SECRET` | str | | 用于身份验证的 JWT 密钥 |
| `DISABLE_MACHINE_LEARNING` | bool | `false` | 禁用 ML 功能（不建议用于 CUDA 版本） |
| `MACHINE_LEARNING_WORKERS` | int | `1` | ML 工作机数量（使用 CUDA 时可以增加） |
| `MACHINE_LEARNING_WORKER_TIMEOUT` | int | `120` | ML 机超时时间（秒） |
| `VIPS_NOVECTOR` | bool | `false` | 设置为 `true` 以导出 `VIPS_NOVECTOR=1` 并解决 aarch64 缩略图生成问题 |
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

此附加组件支持挂载本地驱动器及远程 SMB 共享：

- **本地驱动器**：参见 [附加组件中挂载本地驱动器](https://github.com/alexbelgium/hassio-addons/wiki/Mounting-Local-Drives-in-Addons)
- **远程共享**：参见 [附加组件中挂载远程共享](https://github.com/alexbelgium/hassio-addons/wiki/Mounting-remote-shares-in-Addons)

#### 使用本地磁盘进行 Immich 存储

将 Immich 数据保存至挂载的本地磁盘：

1. 将 `localdisks` 选项设置为驱动器名称（例如，`sda1`）。驱动器将挂载在 `/mnt/sda1`。若要仅挂载驱动器的一个文件夹，请在名称后添加它，例如 `sda1/immich` 仅挂载该文件夹，位于 `/mnt/sda1/immich`。文件夹挂载需要附加组件版本在 2026-09-19 之后发布。
2. 将 `data_location` 选项设置为挂载驱动器上的路径，例如 `/mnt/sda1/immich`。

配置示例：

```yaml
localdisks: "sda1"
data_location: "/mnt/sda1/immich"
```

### 自定义脚本和环境变量

此附加组件通过 `app_config` 映射支持自定义脚本和环境变量：

- **自定义脚本**：参见 [附加组件中运行自定义脚本](https://github.com/alexbelgium/hassio-addons/wiki/Running-custom-scripts-in-Addons)
- **env_vars 选项**：使用附加组件 `env_vars` 选项传递额外的环境变量（大小写名称均可）。有关详细信息，请访问 https://github.com/alexbelgium/hassio-addons/wiki/Add-Environment-variables-to-your-Addon-2。

## 安装

此附加组件的安装非常简单，与安装任何其他 Hass.io 附加组件没有区别。

**前提条件：**
- 带有 CUDA 支持的 NVIDIA GPU
- 主机系统上已安装 NVIDIA 驱动程序
- AMD64 架构（不支持 ARM）

**步骤：**
1. 将我的附加组件仓库添加到 Home Assistant 实例（在上方的 supervisor 附加组件存储中，或如果您已配置我的 HA 则点击下方的按钮）
   [![打开您的 Home Assistant 实例并显示带有特定仓库 URL 预填的附加组件仓库对话框。](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2Falexbelgium%2Fhassio-addons)
2. 安装此附加组件。
3. 点击 `保存` 按钮以存储您的配置。
4. 启动附加组件。
5. 检查附加组件的日志，确认一切是否顺利。
6. 仔细配置附加组件以满足您的偏好，有关详细信息，请查看官方文档。

**数据库设置：**
请注意，您需要安装单独的 postgres 附加组件才能连接数据库。您可以安装本仓库中的 postgres 附加组件。
请注意，在启动之前更改密码；无法在之后更改。

## 支持

在 github 上创建问题，或访问 [home assistant 论坛](https://community.home-assistant.io/t/home-assistant-addon-immich/282108/3) 提问

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
