# Home assistant 附加组件：Immich OpenVINO

⚠️ 该项目正处于非常活跃的 development 阶段。请预期会出现错误和变更。请勿将其作为存储您的照片和视频的唯一方式！（摘自开发者）

我用业余时间维护此及其他 Home Assistant 附加组件：跟踪上游变更、HA 变更，以及在真实硬件上进行测试需要大量时间（和一些金钱）。我使用大约 5-10 个我的 >110 个附加组件，因此我定期安装测试机器（并购买一些我自己不使用的测试服务，如 vpn）来调试和改进附加组件。

如果这个附加组件为您节省了时间或使您的设置更容易，我将非常感谢您的支持！

[![Buy me a coffee][donation-badge]](https://www.buymeacoffee.com/alexbelgium)
[![Donate via PayPal][paypal-badge]](https://www.paypal.com/donate/?hosted_button_id=DZFULJZTP3UQA)

## Addon 信息

![Version](https://img.shields.io/badge/dynamic/yaml?label=Version&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fimmich_openvino%2Fconfig.yaml)
![Ingress](https://img.shields.io/badge/dynamic/yaml?label=Ingress&query=%24.ingress&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fimmich_openvino%2Fconfig.yaml)
![Arch](https://img.shields.io/badge/dynamic/yaml?color=success&label=Arch&query=%24.arch&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fimmich_openvino%2Fconfig.yaml)

[![Codacy Badge](https://app.codacy.com/project/badge/Grade/9c6cf10bdbba45ecb202d7f579b5be0e)](https://www.codacy.com/gh/alexbelgium/hassio-addons/dashboard?utm_source=github.com&utm_medium=referral&utm_content=alexbelgium/hassio-addons&utm_campaign=Badge_Grade)
[![GitHub Super-Linter](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/weekly-supelinter.yaml?label=Lint%20code%20base)](https://github.com/alexbelgium/hassio-addons/actions/workflows/weekly-supelinter.yaml)
[![Builder](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/onpush_builder.yaml?label=Builder)](https://github.com/alexbelgium/hassio-addons/actions/workflows/onpush_builder.yaml)

[donation-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee-%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white
[paypal-badge]: https://img.shields.io/badge/Donate%20via%20PayPal-0070BA?logo=paypal&style=flat&logoColor=white

_感谢所有为我的仓库点赞的人们！要通过点赞让我置顶，请点击下面的图像。谢谢！_

[![Stargazers repo roster for @alexbelgium/hassio-addons](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/.github/stars2.svg)](https://github.com/alexbelgium/hassio-addons/stargazers)

![downloads evolution](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/immich_openvino/stats.png)

## 关于

这是一个基于手机的免 hostsed 照片和视频备份解决方案，支持 OpenVINO 硬件加速。这是 Immich 的 OpenVINO 启用版本，它使用 Intel GPU 和 CPU 为机器学习任务提供硬件加速。

此附加组件基于 [docker 镜像](https://github.com/imagegenius/docker-immich)，并启用了 OpenVINO 支持，以在 Intel 硬件上提供更好的性能。

## Immich v3

此附加组件跟踪 **Immich v3**（基于 `ghcr.io/imagegenius/immich:3-openvino` 镜像行构建）。

- **数据库**: Immich v3 需要 PostgreSQL (14–17) 并带有 **VectorChord (`vchord`)** 扩展；上游 `pgvecto.rs` 支持已被移除。本仓库中的 `Postgres 15` 和 `Postgres 17` 附加组件已提供具备 VectorChord 功能的数据库，并且是推荐的选择（您也可以使用官方 `ghcr.io/immich-app/postgres:*-vectorchord*` 镜像）。
- **从 Immich v2 升级**: 保留您现有的具备 VectorChord 功能的数据库，以便 Immich 可以自动迁移其数据。如果您的数据库仍持有旧扩展 `pgvecto.rs` 中的数据，请保留该扩展，直到 Immich 完成向 VectorChord 的迁移。
- **CPU**: 在 `amd64` 架构上，Immich v3 需要 x86-64-v2（或更新版本）的 CPU。

有关详细信息，请参阅官方 [v3 迁移指南](https://immich.app/blog/v3-migration)。

## 硬件要求

- **Intel 硬件**: 兼容的 Intel CPU 或 Intel 集成分离式 GPU
- **OpenVINO 支持**: 具有 OpenVINO 工具包兼容性的 Intel 硬件
- **架构**: 仅限 AMD64（OpenVINO 支持针对 Intel x86-64 架构进行了优化）
- **Intel GPU 驱动**: 主机系统上正确安装的 Intel GPU 驱动程序（用于 Intel GPU 加速）

## 配置

Webui 可在 `<your-ip>:8080` 下找到。PostgreSQL 可以是内部的也可以是外部的。

### 选项

| 选项 | 类型 | 默认值 | 描述 |
|--------|------|---------|-------------|
| `data_location` | str | `/share/immich` | Immich 数据存储的位置 |
| `library_location` | str | | 照片/视频库路径 |
| `TZ` | str | | 时区（例如，`Europe/London`） |
| `localdisks` | str | | 要挂载的本地磁盘（例如，`sda1,sdb1,MYNAS`）。要在磁盘后添加文件夹仅挂载该文件夹，例如 `MYNAS/public` 将仅挂载该文件夹，位于 `/mnt/MYNAS/public`。文件夹挂载需要 2026-09-19 之后发布的附加组件版本。 |
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
| `JWT_SECRET` | str | | 用于身份认证的 JWT 密钥 |
| `DISABLE_MACHINE_LEARNING` | bool | `false` | 禁用机器学习功能（对于 OpenVINO 版本不推荐） |
| `MACHINE_LEARNING_WORKERS` | int | `1` | 机器学习工作进程数量（可与 OpenVINO 一起增加） |
| `MACHINE_LEARNING_WORKER_TIMEOUT` | int | `120` | ML 工作进程超时（秒） |
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
DISABLE_MACHINE_LEARNING: false
MACHINE_LEARNING_WORKERS: 2
MACHINE_LEARNING_WORKER_TIMEOUT: 180
```

### 挂载磁盘

此附加组件支持挂载本地磁盘和远程 SMB 共享：

- **本地磁盘**: 参见 [在附加组件中挂载本地磁盘](https://github.com/alexbelgium/hassio-addons/wiki/Mounting-Local-Drives-in-Addons)
- **远程共享**: 参见 [在附加组件中挂载远程共享](https://github.com/alexbelgium/hassio-addons/wiki/Mounting-remote-shares-in-Addons)

#### 使用本地磁盘存储 Immich 数据

将 Immich 数据保存到挂载的本地磁盘：

1. 将 `localdisks` 选项设置为您的驱动名称（例如，`sda1`）。驱动器将挂载在 `/mnt/sda1`。要仅挂载驱动器上的一个文件夹，请在名称后添加它，例如 `sda1/immich` 将仅挂载该文件夹，位于 `/mnt/sda1/immich`。文件夹挂载需要 2026-09-19 之后发布的附加组件版本。
2. 将 `data_location` 选项设置为挂载驱动器上的路径，例如 `/mnt/sda1/immich`。

示例配置：

```yaml
localdisks: "sda1"
data_location: "/mnt/sda1/immich"
```

### 自定义脚本和环境变量

此附加组件支持通过 `app_config` 映射使用自定义脚本和环境变量：

- **自定义脚本**: 参见 [在附加组件中运行自定义脚本](https://github.com/alexbelgium/hassio-addons/wiki/Running-custom-scripts-in-Addons)
- **env_vars 选项**: 使用附加组件的 `env_vars` 选项传递额外的环境变量（大写字母或小写字母名称）。详见 https://github.com/alexbelgium/hassio-addons/wiki/Add-Environment-variables-to-your-Addon-2。

## 安全性

`DB_PASSWORD` 选项默认值为 `homeassistant`，如果数据库可从网络访问，这将使您能够访问 Immich 数据库。请在您的 Postgres 服务器上更改密码，然后在附加组件选项中设置相同的值。附加组件将在默认值仍然设置时在其启动日志中打印警告。

## 安装

此附加组件的安装非常简单，与其他任何 Hass.io 附加组件的安装没有不同。

**先决条件**:
- 用于 OpenVINO 加速的 Intel CPU 或 Intel GPU
- AMD64 架构（不支持 ARM）
- 安装了 Intel GPU 驱动程序（如果使用的是 Intel GPU 加速）

**步骤**:
1. 将我的附加组件仓库添加到您的 Home Assistant 实例中（在 supervisor addons store 右上角，或如果您已配置我的 HA 则点击下面的按钮）
   [![Open your Home Assistant instance and show the add add-on repository dialog with a specific repository URL pre-filled.](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2Falexbelgium%2Fhassio-addons)
2. 安装此附加组件。
3. 点击 `保存` 按钮以保存您的配置。
4. 启动附加组件。
5. 检查附加组件的日志，确认一切是否顺利。
6. 根据您的偏好仔细配置附加组件，详见官方文档。

**数据库设置**:
请注意，您需要安装独立的 postgres 附加组件才能连接数据库。您可以安装我仓库中的 postgres 附加组件。
请务身在启动之前更改密码；之后无法更改。

## 支持

在 github 上创建 issue，或在 [home assistant thread](https://community.home-assistant.io/t/home-assistant-addon-immich/282108/3) 中提问

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
