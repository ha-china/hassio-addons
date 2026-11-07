# Home Assistant 附加功能：Immich CUDA

⚠️ 该项目处于非常活跃的开发中。请预期会出现错误和更改。不要将其作为存储照片和视频的唯一方式！(来自开发者)

我利用业余时间维护此及其他 Home Assistant 附加功能：跟进上游更改、支持 Home Assistant 的更新以及在实际硬件上测试都需要大量时间（和一些金钱）。我使用大约 5-10 个我的 >110 个附加功能，所以我定期安装一些我自己不使用的测试机（并购买一些测试服务如 dns、域名）来调试和改进附加功能

如果您使用此附加功能节省了时间或使您的设置更简单，您的支持将对我非常有帮助!

[![Buy me a coffee][donation-badge]](https://www.buymeacoffee.com/alexbelgium)
[![Donate via PayPal][paypal-badge]](https://www.paypal.com/donate/?hosted_button_id=DZFULJZTP3UQA)

## 附加功能信息

![版本](https://img.shields.io/badge/dynamic/yaml?label=Version&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fimmich_cuda%2Fconfig.yaml)
![入口点](https://img.shields.io/badge/dynamic/yaml?label=Ingress&query=%24.ingress&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fimmich_cuda%2Fconfig.yaml)
![架构](https://img.shields.io/badge/dynamic/yaml?color=success&label=Arch&query=%24.arch&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fimmich_cuda%2Fconfig.yaml)

[![Codacy 徽章](https://app.codacy.com/project/badge/Grade/9c6cf10bdbba45ecb202d7f579b5be0e)](https://www.codacy.com/gh/alexbelgium/hassio-addons/dashboard?utm_source=github.com&utm_medium=referral&utm_content=alexbelgium/hassio-addons&utm_campaign=Badge_Grade)
[![GitHub Super-Linter](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/weekly-supelinter.yaml?label=Lint%20code%20base)](https://github.com/alexbelgium/hassio-addons/actions/workflows/weekly-supelinter.yaml)
[![构建者](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/onpush_builder.yaml?label=Builder)](https://github.com/alexbelgium/hassio-addons/actions/workflows/onpush_builder.yaml)

[donation-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee-%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white
[paypal-badge]: https://img.shields.io/badge/Donate%20via%20PayPal-0070BA?logo=paypal&style=flat&logoColor=white

_感谢所有星标我的仓库的朋友们！要星标它，请点击下方的图片，然后它将被置于右上角。感谢!_

[![@alexbelgium/hassio-addons 仓库星等排名](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/.github/stars2.svg)](https://github.com/alexbelgium/hassio-addons/stargazers)

![下载演变](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/immich_cuda/stats.png)

## 关于

支持 CUDA 硬件加速的从您的手机直接进行的自制照片和视频备份解决方案。这是 Immich 的 CUDA 增强版，提供使用 NVIDIA GPU 进行机器学习任务的硬件加速。

此附加功能基于 imagegenius 的 [docker 镜像](https://github.com/imagegenius/docker-immich)，并启用了 CUDA 支持以增强性能。

## Immich v3

此附加功能跟踪 **Immich v3** (基于 `ghcr.io/imagegenius/immich:3-cuda` 镜像系列)。

- **数据库**：Immich v3 需要 PostgreSQL (14–17) 以及 **VectorChord (`vchord`)** 扩展；上游 `pgvecto.rs` 支持已被移除。此仓库中的 `Postgres 15` 和 `Postgres 17` 附加功能已提供具备 VectorChord 能力的数据库，是首选选择（您也可以使用官方 `ghcr.io/immich-app/postgres:*-vectorchord*` 镜像）。
- **从 Immich v2 升级**：保留您现有的具备 VectorChord 能力的数据库，以便 Immich 可以自动迁移其数据。如果您的数据库仍然保留 `pgvecto.rs` 扩展中的数据，请保留该扩展直到 Immich 完成迁移到 VectorChord。
- **CPU**：在 `amd64` 上，Immich v3 需要 x86-64-v2 或更新的 CPU。

请参阅官方的 [v3 迁移指南](https://immich.app/blog/v3-migration) 了解详情。

## 硬件要求

- **NVIDIA GPU**：兼容的带有 CUDA 支持的 NVIDIA 显卡
- **CUDA 驱动程序**：主机系统上必须正确安装 NVIDIA 驱动程序
- **架构**：仅限 AMD64（ARM 架构不支持 CUDA 支持）

## 配置

Webui 可在 `<your-ip>:8080` 找到。PostgreSQL 可以是内部或外部的。

### 选项

| 选项 | 类型 | 默认 | 描述 |
|--------|------|---------|-------------|
| `data_location` | str | `/share/immich` | 存储 Immich 数据的路径 |
| `library_location` | str | | 照片/视频库的路径 |
| `TZ` | str | | 时区 (例如，`Europe/London`) |
| `localdisks` | str | | 本地挂载驱动器列表 (例如，`sda1,sdb1,MYNAS`)。在驱动器名称后添加文件夹以仅挂载该文件夹，例如 `MYNAS/public` 仅在 `/mnt/MYNAS/public` 挂载该文件夹；需要于 2026-09-19 之后发布的附加功能版本。 |
| `networkdisks` | str | | 要挂载的 SMB 共享 (例如，`//SERVER/SHARE`) |
| `cifsusername` | str | | SMB 网络共享的用户名 |
| `cifspassword` | str | | SMB 网络共享的密码 |
| `cifsdomain` | str | | SMB 网络共享的域 |
| `DB_HOSTNAME` | str | `homeassistant.local` | 数据库主机名 |
| `DB_USERNAME` | str | `postgres` | 数据库用户名 |
| `DB_PASSWORD` | str | `homeassistant` | 数据库密码 |
| `DB_DATABASE_NAME` | str | `immich` | 数据库名称 |
| `DB_PORT` | int | `5432` | 数据库端口 |
| `DB_ROOT_PASSWORD` | str | | 数据库管理账号密码 |
| `JWT_SECRET` | str | | 身份验证的 JWT 密钥 |
| `DISABLE_MACHINE_LEARNING` | bool | `false` | 禁用了 ML 功能 (对于 CUDA 版本不推荐) |
| `MACHINE_LEARNING_WORKERS` | int | `1` | ML 工作进程数量 (使用 CUDA 可以增) |
| `MACHINE_LEARNING_WORKER_TIMEOUT` | int | `120` | ML 工作进程的超时 (秒) |
| `VIPS_NOVECTOR` | bool | `false` | 设为`true` 以导出 `VIPS_NOVECTOR=1` 并解决 aarch64 缩略图生成问题 |
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

此附加功能支持挂载本地驱动器及远程 SMB 共享：

- **本地驱动器**：请参阅 [附加功能中的挂载本地驱动器](https://github.com/alexbelgium/hassio-addons/wiki/Mounting-Local-Drives-in-Addons)
- **远程共享**：请参阅 [附加功能中的挂载远程共享](https://github.com/alexbelgium/hassio-addons/wiki/Mounting-remote-shares-in-Addons)

#### 使用本地磁盘存储 Immich 数据

将 Immich 数据保存到已挂载的本地磁盘：

1. 将 `localdisks` 选项设置为您的驱动器名称（例如，`sda1`）。该驱动器将在 `/mnt/sda1` 处挂载。若要仅挂载驱动器的一部分文件夹，请在名称后添加它，例如 `sda1/immich` 将在 `/mnt/sda1/immich` 仅挂载该文件夹。此功能需要于 2026-09-19 之后发布的附加功能版本。
2. 将 `data_location` 选项设置为已挂载驱动器上的路径，例如 `/mnt/sda1/immich`。

配置示例：

```yaml
localdisks: "sda1"
data_location: "/mnt/sda1/immich"
```

### 自定义脚本和环境变量

此附加功能支持通过 `app_config` 映射自定义脚本和环境变量：

- **自定义脚本**：请参阅 [附加功能中的运行自定义脚本](https://github.com/alexbelgium/hassio-addons/wiki/Running-custom-scripts-in-Addons)
- **env_vars 选项**：使用附加功能的 `env_vars` 选项传递额外的环境变量（大写或小写字母名称均适用）。详见 https://github.com/alexbelgium/hassio-addons/wiki/Add-Environment-variables-to-your-Addon-2。

## 安装

此附加功能的安装非常简单，与安装任何其他 Hass.io 附加功能没有不同。

**先决条件:**
- 带有 CUDA 支持的 NVIDIA GPU
- 主机系统上安装有 NVIDIA 驱动程序
- AMD64 架构（不支持 ARM）

**步骤:**
1. 将我的附加功能仓库添加到您的 Home Assistant 实例（在 supervisor addons 商店右上角，或如果您配置了我的 HA，请点击下方按钮）
   [![打开您的 Home Assistant 实例并显示带有特定仓库 URL 预填充对话框的“添加附加功能仓库”对话框。](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2Falexbelgium%2Fhassio-addons)
1. 安装此附加功能。
1. 点击 `保存` 按钮以保存您的配置。
1. 启动附加功能。
1. 检查附加功能的日志，确认一切是否正常。
1. 仔细配置附加功能以满足您的偏好，查看官方文档了解该方式。

**数据库设置:**
请注意，您需要安装单独的 postgres 附加功能以连接数据库。您可以安装我仓库中已包含的 postgres 附加功能。
请注意在启动之前更改密码；之后将无法更改。

## 支持

在 github 上创建问题，或在 [home assistant 讨论](https://community.home-assistant.io/t/home-assistant-addon-immich/282108/3) 上询问

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
