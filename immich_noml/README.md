# Home Assistant 附加组件：不含机器学习的 Immich

⚠️ 该项目正在非常积极的开发中。请预期会出现错误和更改。不要将其用作存储您照片和视频的唯一方式！（来自开发者）

我在空闲时间维护此及其他 Home Assistant 附加组件：跟踪上游更改、HA 更改，并在真实硬件上进行测试需要大量的时间（和一些金钱）。我大约使用 5-10 个大于 110 的附加组件，因此我会定期安装测试机器（并购买一些测试服务，如 vpn），即使我自己不使用它们，也用于故障排除和改进附加组件

如果这个附加组件为您节省时间或使您的设置更容易，我将非常感谢您的支持！

[![Buy me a coffee][donation-badge]](https://www.buymeacoffee.com/alexbelgium)
[![Donate via PayPal][paypal-badge]](https://www.paypal.com/donate/?hosted_button_id=DZFULJZTP3UQA)

## 附加组件信息

![Version](https://img.shields.io/badge/dynamic/yaml?label=Version&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fimmich_noml%2Fconfig.yaml)
![Ingress](https://img.shields.io/badge/dynamic/yaml?label=Ingress&query=%24.ingress&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fimmich_noml%2Fconfig.yaml)
![Arch](https://img.shields.io/badge/dynamic/yaml?color=success&label=Arch&query=%24.arch&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fimmich_noml%2Fconfig.yaml)

[![Codacy Badge](https://app.codacy.com/project/badge/Grade/9c6cf10bdbba45ecb202d7f579b5be0e)](https://www.codacy.com/gh/alexbelgium/hassio-addons/dashboard?utm_source=github.com&utm_medium=referral&utm_content=alexbelgium/hassio-addons&utm_campaign=Badge_Grade)
[![GitHub Super-Linter](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/weekly-supelinter.yaml?label=Lint%20code%20base)](https://github.com/alexbelgium/hassio-addons/actions/workflows/weekly-supelinter.yaml)
[![Builder](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/onpush_builder.yaml?label=Builder)](https://github.com/alexbelgium/hassio-addons/actions/workflows/onpush_builder.yaml)

[donation-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee-%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white
[paypal-badge]: https://img.shields.io/badge/Donate%20via%20PayPal-0070BA?logo=paypal&style=flat&logoColor=white

_感谢所有人给我一个 repo 的星标！要为其增加星标，请点击下方的图片，这样它就会出现在右上角。谢谢！_

[![Stargazers repo roster for @alexbelgium/hassio-addons](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/.github/stars2.svg)](https://github.com/alexbelgium/hassio-addons/stargazers)

![downloads evolution](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/immich_noml/stats.png)

## 关于

这是一个直接从手机进行的自托管照片和视频备份解决方案。这是 Immich 的 NoML（无机器学习）版本，专为没有机器学习能力的系统或用户设计，他们更喜欢出于性能或资源管理原因禁用 ML 功能。

此附加组件基于 imagegenius 的 [docker 镜像](https://github.com/imagegenius/docker-immich)，并排除了机器学习组件，以减少资源消耗并提高与受限系统的兼容性。

## Immich v3

此附加组件跟踪 **Immich v3**（基于 `ghcr.io/imagegenius/immich:3-noml` 镜像行构建）。排除了机器学习，但以下数据库要求仍然适用。

- **数据库**: Immich v3 需要 PostgreSQL (14–17) 并带有 **VectorChord (`vchord`)** 扩展；上游的 `pgvecto.rs` 支持已被移除。此仓库中的 `Postgres 15` 和 `Postgres 17` 附加组件已提供具有 VectorChord 能力的数据库，是推荐的选择（您也可以使用官方的 `ghcr.io/immich-app/postgres:*-vectorchord*` 镜像）。
- **从 Immich v2 升级**: 保持您现有的 VectorChord 能力数据库，这样 Immich 就可以自动迁移其数据。如果您的数据库仍然持有旧 `pgvecto.rs` 扩展中的数据，请保留该扩展，直到 Immich 完成向 VectorChord 的迁移。
- **CPU**: 在 `amd64` 上，Immich v3 需要 x86-64-v2（或更新）CPU。

请参阅官方的 [v3 迁移指南](https://immich.app/blog/v3-migration) 了解详情。

## 使用场景

NoML 版本理想用于：

- **资源受限的系统**: 降低 CPU 和内存使用量，无需考虑 ML 开销
- **重视隐私的部署**: 无需面部识别或物体检测处理
- **简单的照片存储**: 基础的照片和视频备份，无需高级 AI 功能
- **旧硬件**: 难以处理机器学习工作负载的系统
- **极简主义设置**: 喜欢基本照片管理而无需 AI 增强的用户

## 配置

Webui 可在 `<your-ip>:8080` 找到。PostgreSQL 可以是内部或外部的。

### 选项

| 选项 | 类型 | 默认值 | 描述 |
|--------|------|---------|-------------|
| `data_location` | str | `/share/immich` | Immich 数据存储路径 |
| `library_location` | str | | 照片/视频库路径 |
| `TZ` | str | | 时区（例如，`Europe/London`） |
| `localdisks` | str | | 本地驱动器挂载（例如，`sda1,sdb1,MYNAS`）。在驱动器后添加一个文件夹以仅挂载该文件夹，例如 `MYNAS/public` 仅挂载该文件夹于 `/mnt/MYNAS/public`。文件夹挂载需要 2026-09-19 之后发布的附加组件版本。 |
| `networkdisks` | str | | 挂载 SMB 共享（例如，`//SERVER/SHARE`） |
| `cifsusername` | str | | SMB 用户名用于网络共享 |
| `cifspassword` | str | | SMB 密码用于网络共享 |
| `cifsdomain` | str | | SMB 域用于网络共享 |
| `DB_HOSTNAME` | str | `homeassistant.local` | 数据库主机名 |
| `DB_USERNAME` | str | `postgres` | 数据库用户名 |
| `DB_PASSWORD` | str | `homeassistant` | 数据库密码 |
| `DB_DATABASE_NAME` | str | `immich` | 数据库名称 |
| `DB_PORT` | int | `5432` | 数据库端口 |
| `DB_ROOT_PASSWORD` | str | | PostgreSQL root 密码 |
| `JWT_SECRET` | str | | 用于身份验证的 JWT 密钥 |
| `DISABLE_MACHINE_LEARNING` | bool | `false` | 禁用 ML 功能（推荐用于 NoML 版本） |
| `MACHINE_LEARNING_WORKERS` | int | `1` | ML worker 数量（保持为 1 用于 NoML） |
| `MACHINE_LEARNING_WORKER_TIMEOUT` | int | `120` | ML worker 超时（秒） |
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
DISABLE_MACHINE_LEARNING: true
MACHINE_LEARNING_WORKERS: 1
MACHINE_LEARNING_WORKER_TIMEOUT: 120
```

### 挂载驱动器

此附加组件支持挂载本地驱动器和远程 SMB 共享：

- **本地驱动器**: 参见 [附加组件中的挂载本地驱动器](https://github.com/alexbelgium/hassio-addons/wiki/Mounting-Local-Drives-in-Addons)
- **远程共享**: 参见 [附加组件中的挂载远程共享](https://github.com/alexbelgium/hassio-addons/wiki/Mounting-remote-shares-in-Addons)

#### 使用本地磁盘存储 Immich 数据

将 Immich 数据保存到挂载的本地磁盘：

1. 将 `localdisks` 选项设置为驱动器名称（例如，`sda1`）。驱动器将挂载于 `/mnt/sda1`。若要仅挂载驱动器的单个文件夹，请在名称后添加它，例如 `sda1/immich` 仅挂载该文件夹于 `/mnt/sda1/immich`。文件夹挂载需要 2026-09-19 之后发布的附加组件版本。
2. 将 `data_location` 选项设置为挂载驱动器上的路径，例如 `/mnt/sda1/immich`。

示例配置：

```yaml
localdisks: "sda1"
data_location: "/mnt/sda1/immich"
```

### 自定义脚本和环境变量

此附加组件通过 `app_config` 映射支持自定义脚本和环境变量：

- **自定义脚本**: 参见 [在附加组件中运行自定义脚本](https://github.com/alexbelgium/hassio-addons/wiki/Running-custom-scripts-in-Addons)
- **env_vars 选项**: 使用附加组件的 `env_vars` 选项传递额外的环境变量（大小写名称均可）。有关详细信息，请访问 https://github.com/alexbelgium/hassio-addons/wiki/Add-Environment-variables-to-your-Addon-2。

## 安全性

`DB_PASSWORD` 选项随附带 `homeassistant`，如果可从网络上访问 Immich 数据库，则可获得对该数据库的访问权限。在您的 PostgreSQL 服务器上更改它，然后在附加组件选项中设置相同的值。附加组件在其启动日志中打印警告，只要默认值仍然设置。

## 安装

此附加组件的安装相当直接，与其他任何 Hass.io 附加组件安装没有不同。

**步骤：**
1. 将我的附加组件库添加到您的 Home Assistant 实例（在 supervisor 附加组件商店右上角，或如果您已配置了 HA，请点击下方按钮）
   [![Open your Home Assistant instance and show the add add-on repository dialog with a specific repository URL pre-filled.](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2Falexbelgium%2Fhassio-addons)
1. 安装此附加组件。
1. 点击 `保存` 按钮以保存您的配置。
1. 启动附加组件。
1. 检查附加组件的日志，看看一切是否顺利。
1. 仔细根据您的偏好配置附加组件，有关官方文档请参见。

**数据库设置:**
请注意，您需要安装单独的 postgres 附加组件才能连接数据库。您可以安装我已经存在于我仓库中的 postgres 附加组件。
注意：在启动之前更改密码；之后无法更改。

## 支持

在 github 上创建问题，或在 [home assistant 线程](https://community.home-assistant.io/t/home-assistant-addon-immich/282108/3) 提问

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
