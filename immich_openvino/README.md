# Home Assistant 附加组件：Immich OpenVINO

⚠️ 该项目处于非常活跃的开发阶段。请预期会出现错误和变更。请勿仅以此方式存储您的照片和视频！（开发者注明）

我在业余时间维护此及其他 Home Assistant 附加组件：追踪上游变更、HA 变更以及在实际硬件上测试耗时费钱（大约需要一些时间和一些金钱）。我使用的附加组件约有 5-10 个，因此我经常安装测试机器（并为我自己不使用的服务购买测试服务，如 VPN），以便在不使用的情况下调试和改进附加组件。

如果这个附加组件为您节省了时间或简化了您的设置，我将不胜感激支持！

[![Buy me a coffee][donation-badge]](https://www.buymeacoffee.com/alexbelgium)
[![Donate via PayPal][paypal-badge]](https://www.paypal.com/donate/?hosted_button_id=DZFULJZTP3UQA)

## 附加组件信息

![Version](https://img.shields.io/badge/dynamic/yaml?label=Version&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fimmich_openvino%2Fconfig.yaml)
![Ingress](https://img.shields.io/badge/dynamic/yaml?label=Ingress&query=%24.ingress&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fimmich_openvino%2Fconfig.yaml)
![Arch](https://img.shields.io/badge/dynamic/yaml?color=success&label=Arch&query=%24.arch&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fimmich_openvino%2Fconfig.yaml)

[![Codacy Badge](https://app.codacy.com/project/badge/Grade/9c6cf10bdbba45ecb202d7f579b5be0e)](https://www.codacy.com/gh/alexbelgium/hassio-addons/dashboard?utm_source=github.com&utm_medium=referral&utm_content=alexbelgium/hassio-addons&utm_campaign=Badge_Grade)
[![GitHub Super-Linter](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/weekly-supelinter.yaml?label=Lint%20code%20base)](https://github.com/alexbelgium/hassio-addons/actions/workflows/weekly-supelinter.yaml)
[![Builder](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/onpush_builder.yaml?label=Builder)](https://github.com/alexbelgium/hassio-addons/actions/workflows/onpush_builder.yaml)

[donation-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee-%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white
[paypal-badge]: https://img.shields.io/badge/Donate%20via%20PayPal-0070BA?logo=paypal&style=flat&logoColor=white

_感谢所有星标了我的仓库的人！要星标，请点击下面的图片，然后它将在右上角显示。谢谢！_

[![Stargazers repo roster for @alexbelgium/hassio-addons](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/.github/stars2.svg)](https://github.com/alexbelgium/hassio-addons/stargazers)

![downloads evolution](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/immich_openvino/stats.png)

## 关于

使用 OpenVINO 硬件加速支持，直接从智能手机进行自托管照片和视频备份解决方案。这是 Immich 的 OpenVINO 版本，针对机器学习任务使用 Intel 显卡和 CPU 提供硬件加速。

此附加组件基于 imagegenius 的 [docker 镜像](https://github.com/imagegenius/docker-immich)，并启用了 OpenVINO 支持，以在 Intel 硬件上实现更佳的性能。

## Immich v3

此附加组件追踪 **Immich v3**（基于 `ghcr.io/imagegenius/immich:3-openvino` 镜像行构建）。

- **数据库**: Immich v3 需要带有 **VectorChord (`vchord`)** 插件的 PostgreSQL (14–17)。上游 `pgvecto.rs` 支持已移除。此仓库中的 `Postgres 15` 和 `Postgres 17` 附加组件已提供具备 VectorChord 能力的数据库，是首选（您也可以使用官方 `ghcr.io/immich-app/postgres:*-vectorchord*` 镜像）。
- **从 Immich v2 升级**: 保留您现有的具备 VectorChord 能力的数据库，使 Immich 可以自动迁移数据。如果您的数据库仍保留旧的 `pgvecto.rs` 扩展中的数据，请保留该扩展，直到 Immich 完成迁移到 VectorChord 为止。
- **CPU**: 在 `amd64` 上，Immich v3 需要 x86-64-v2 或更新版本的 CPU。

详见官方 [v3 迁移指南](https://immich.app/blog/v3-migration)。

## 硬件要求

- **Intel 硬件**: 兼容的 Intel CPU 或 Intel 整合/独立显卡
- **OpenVINO 支持**: 支持 OpenVINO 工具包的 Intel 硬件
- **架构**: 仅限 AMD64（OpenVINO 支持针对 Intel x86-64 架构进行了优化）
- **Intel GPU 驱动**: 主机系统上已正确安装 Intel GPU 驱动程序（用于 Intel GPU 加速）

## 配置

Webui 可在 `<your-ip>:8080` 访问。PostgreSQL 可以是内部或外部的。

### 选项

| 选项 | 类型 | 默认值 | 描述 |
|------|------|--------|------|
| `data_location` | str | `/share/immich` | Immich 数据存储路径 |
| `library_location` | str | | 照片/视频库路径 |
| `TZ` | str | | 时区（例如 `Europe/London`） |
| `localdisks` | str | | 本地挂载的磁盘（例如 `sda1,sdb1,MYNAS`） |
| `networkdisks` | str | | 挂载的 SMB 共享（例如 `//SERVER/SHARE`） |
| `cifsusername` | str | | SMB 共享用户名 |
| `cifspassword` | str | | SMB 共享密码 |
| `cifsdomain` | str | | SMB 共享域 |
| `DB_HOSTNAME` | str | `homeassistant.local` | 数据库主机名 |
| `DB_USERNAME` | str | `postgres` | 数据库用户名 |
| `DB_PASSWORD` | str | `homeassistant` | 数据库密码 |
| `DB_DATABASE_NAME` | str | `immich` | 数据库名称 |
| `DB_PORT` | int | `5432` | 数据库端口 |
| `DB_ROOT_PASSWORD` | str | | 数据库 root 密码 |
| `JWT_SECRET` | str | | 用于身份验证的 JWT 密钥 |
| `DISABLE_MACHINE_LEARNING` | bool | `false` | 禁用 ML 功能（OpenVINO 版本不建议禁用） |
| `MACHINE_LEARNING_WORKERS` | int | `1` | ML 工作线程数（可使用 OpenVINO 增加） |
| `MACHINE_LEARNING_WORKER_TIMEOUT` | int | `120` | ML 工作线程超时时间（秒） |
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

- **本地磁盘**: 参阅 [附加组件中挂载本地磁盘](https://github.com/alexbelgium/hassio-addons/wiki/Mounting-Local-Drives-in-Addons)
- **远程共享**: 参阅 [附加组件中挂载远程共享](https://github.com/alexbelgium/hassio-addons/wiki/Mounting-remote-shares-in-Addons)

#### 使用本地磁盘存储 Immich 数据

为了将 Immich 数据保存到挂载的本地磁盘：

1. 将 `localdisks` 选项设置为磁盘名称（例如 `sda1`）。磁盘将挂载到 `/mnt/sda1`。
2. 将 `data_location` 选项设置为挂载盘上的路径，例如 `/mnt/sda1/immich`。

示例配置：

```yaml
localdisks: "sda1"
data_location: "/mnt/sda1/immich"
```

### 自定义脚本和环境变量

此附加组件通过 `addon_config` 映射支持自定义脚本和环境变量：

- **自定义脚本**: 参阅 [附加组件中运行自定义脚本](https://github.com/alexbelgium/hassio-addons/wiki/Running-custom-scripts-in-Addons)
- **env_vars 选项**: 使用附加组件的 `env_vars` 选项传递额外的环境变量（支持大写或小写名称）。详见 https://github.com/alexbelgium/hassio-addons/wiki/Add-Environment-variables-to-your-Addon-2。

## 安装

安装此附加组件非常简单，与其他 Hass.io 附加组件的安装相比并无不同。

**前置要求：**
- Intel CPU 或 Intel GPU 用于 OpenVINO 加速
- AMD64 架构（不支持 ARM）
- 如果使用了 Intel GPU 加速，需安装 Intel GPU 驱动程序

**步骤：**
1. 将我的附加组件仓库添加到您的 Home Assistant 实例（在 supervisor 附加组件商店右上角，或如果您已配置了我的 HA，请点击下述按钮）
   [![Open your Home Assistant instance and show the add add-on repository dialog with a specific repository URL pre-filled.](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2Falexbelgium%2Fhassio-addons)
1. 安装此附加组件。
1. 点击 `保存` 按钮以存储您的配置。
1. 启动附加组件。
1. 检查附加组件日志，确认一切顺利。
1. 仔细配置附加组件以满足您的需求，请参阅官方文档。

**数据库设置：**
请注意，您需要安装单独的 postgres 附加组件才能连接数据库。您可以安装我已存入仓库的后加组件。
请注意，在启动之前修改密码；启动后无法更改。

## 支持

在 github 创建问题 ISSUE，或询问 [home assistant 论坛](https://community.home-assistant.io/t/home-assistant-addon-immich/282108/3)

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
