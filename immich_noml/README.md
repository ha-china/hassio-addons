# Home Assistant 扩展：无机器学习的 Immich

⚠️ 该项目处于非常活跃的开发阶段。预期会有 bug 和变更。请**不要**将其用作存储照片和视频的唯一方式！（来自开发者）

我利用业余时间维护此及其他 Home Assistant 扩展：跟上上游变更、HA 变更，并在真实硬件上进行测试（这耗费大量时间和一些金钱）。我日常使用的 110 多个扩展中只有 5-10 个，因此我会安装测试机器（甚至购买一些我自己不用的测试服务，如 VPN）来排查问题和改进这些扩展。

如果此扩展为您节省了时间或让您的设置更简单，我将非常感谢您提供支持！

[![Buy me a coffee][donation-badge]](https://www.buymeacoffee.com/alexbelgium)
[![Donate via PayPal][paypal-badge]](https://www.paypal.com/donate/?hosted_button_id=DZFULJZTP3UQA)

## 扩展信息

![版本](https://img.shields.io/badge/dynamic/yaml?label=版本&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fimmich_noml%2Fconfig.yaml)
![Ingress](https://img.shields.io/badge/dynamic/yaml?label=Ingress&query=%24.ingress&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fimmich_noml%2Fconfig.yaml)
![架构](https://img.shields.io/badge/dynamic/yaml?color=success&label=架构&query=%24.arch&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fimmich_noml%2Fconfig.yaml)

[![Codacy 徽章](https://app.codacy.com/project/badge/Grade/9c6cf10bdbba45ecb202d7f579b5be0e)](https://www.codacy.com/gh/alexbelgium/hassio-addons/dashboard?utm_source=github.com&utm_medium=referral&utm_content=alexbelgium/hassio-addons&utm_campaign=Badge_Grade)
[![GitHub Super-Linter](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/weekly-supelinter.yaml?label=代码检查)](https://github.com/alexbelgium/hassio-addons/actions/workflows/weekly-supelinter.yaml)
[![构建者](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/onpush_builder.yaml?label=构建者)](https://github.com/alexbelgium/hassio-addons/actions/workflows/onpush_builder.yaml)

[donation-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee-%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white
[paypal-badge]: https://img.shields.io/badge/Donate%20via%20PayPal-0070BA?logo=paypal&style=flat&logoColor=white

_感谢所有人给我仓库星标！点击下方的图片即可星标它，它将显示在右上角。感谢！_

[![@alexbelgium/hassio-addons 仓库星标所有者名单](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/.github/stars2.svg)](https://github.com/alexbelgium/hassio-addons/stargazers)

![下载趋势](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/immich_noml/stats.png)

## 关于

这是一个直接从手机进行自托管的照片和视频备份解决方案。这是专为非机器学习系统或希望因提高性能或资源管理原因而禁用 ML 功能的用户设计的 Immich 的 NoML（无机器学习）版本。

此扩展基于 imagegenius 的 [Docker 镜像](https://github.com/imagegenius/docker-immich)，并排除了机器学习组件，以减少资源消耗并提高与资源受限系统的兼容性。

## Immich v3

此扩展跟踪 **Immich v3**（基于 `ghcr.io/imagegenius/immich:3-noml` 图像系列）。已排除机器学习，但下面的数据库要求仍然适用。

- **数据库**：Immich v3 需要 PostgreSQL（14–17）以及 **VectorChord (`vchord`)** 扩展；上游的 `pgvecto.rs` 支持已被移除。本存储库中的 `Postgres 15` 和 `Postgres 17` 扩展类已经提供了支持 VectorChord 的数据库，也是首选方案（您也可以使用官方 `ghcr.io/immich-app/postgres:*-vectorchord*` 镜像）。
- **从 Immich v2 升级**：保留现有的支持 VectorChord 的数据库，以便 Immich 能够自动迁移数据。如果您的数据库中仍持有旧的 `pgvecto.rs` 扩展中的残留数据，则在完成迁移到 VectorChord 前请保留该扩展。
- **CPU**：在 `amd64` 架构上，Immich v3 需要 x86-64-v2（或更新）的 CPU。

有关详细信息，请参阅官方 [v3 迁移指南](https://immich.app/blog/v3-migration)。

## 用例

NoML 变体特别适用于以下场景：

- **资源受限系统**：无需 ML 开销即可降低 CPU 和内存使用量
- **注重隐私的部署**：无人脸识别或物体检测处理
- **简单照片存储**：无需高级 AI 功能的基础照片和视频备份
- **遗留硬件**：难以应对机器学习工作负载的系统
- **极简设置**：偏好基础照片管理而无需 AI 增强的用户

## 配置

Webui 可在 `<your-ip>:8080` 处访问。PostgreSQL 可以是内联网或外联网。

### 选项

| 选项 | 类型 | 默认值 | 描述 |
|--------|------|---------|-------------|
| `data_location` | str | `/share/immich` | Immich 数据存储路径 |
| `library_location` | str | | 照片/视频库路径 |
| `TZ` | str | | 时区（例如，`Europe/London`） |
| `localdisks` | str | | 本地驱动器挂载名称（例如，`sda1,sdb1,MYNAS`）。在驱动器名称后添加文件夹以仅挂载该文件夹，例如 `MYNAS/public` 仅挂载该文件夹到 `/mnt/MYNAS/public`。文件夹挂载需要 2026-09-19 之后发布的扩展类版本。 |
| `networkdisks` | str | | 要挂载的 SMB 共享（例如，`//SERVER/SHARE`） |
| `cifsusername` | str | | SMB 共享的用户名 |
| `cifspassword` | str | | SMB 共享的密码 |
| `cifsdomain` | str | | SMB 共享的域 |
| `DB_HOSTNAME` | str | `homeassistant.local` | 数据库主机名 |
| `DB_USERNAME` | str | `postgres` | 数据库用户名 |
| `DB_PASSWORD` | str | `homeassistant` | 数据库密码 |
| `DB_DATABASE_NAME` | str | `immich` | 数据库名称 |
| `DB_PORT` | int | `5432` | 数据库端口 |
| `DB_ROOT_PASSWORD` | str | | 数据库根密码 |
| `JWT_SECRET` | str | | 用于身份验证的 JWT 密钥 |
| `DISABLE_MACHINE_LEARNING` | bool | `false` | 禁用 ML 功能（推荐用于 NoML 变体） |
| `MACHINE_LEARNING_WORKERS` | int | `1` | ML 工作程序数量（对于 NoML 保持为 1） |
| `MACHINE_LEARNING_WORKER_TIMEOUT` | int | `120` | ML 工作程序超时（秒） |
| `VIPS_NOVECTOR` | bool | `false` | 设置为 `true` 以导出 `VIPS_NOVECTOR=1` 并绕过 aarch64 缩略图生成问题 |
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
DISABLE_MACHINE_LEARNING: true
MACHINE_LEARNING_WORKERS: 1
MACHINE_LEARNING_WORKER_TIMEOUT: 120
```

### 挂载驱动器

此扩展支持挂载本地驱动器及远程 SMB 共享：

- **本地驱动器**：请参阅 [在扩展类中挂载本地驱动器](https://github.com/alexbelgium/hassio-addons/wiki/Mounting-Local-Drives-in-Addons)
- **远程共享**：请参阅 [在扩展类中挂载远程共享](https://github.com/alexbelgium/hassio-addons/wiki/Mounting-remote-shares-in-Addons)

#### 使用本地磁盘存储 Immich 数据

要将 Immich 数据保存到挂载的本地磁盘：

1. 将 `localdisks` 选项设置为驱动器名称（例如，`sda1`）。驱动器将挂载到 `/mnt/sda1`。要仅挂载驱动器中的一个文件夹，请在驱动器名称后添加它，例如 `sda1/immich` 仅将该文件夹挂载到 `/mnt/sda1/immich`。文件夹挂载需要 2026-09-19 之后发布的扩展类版本。
2. 将 `data_location` 选项设置为挂载驱动器上的路径，例如 `/mnt/sda1/immich`。

配置示例：

```yaml
localdisks: "sda1"
data_location: "/mnt/sda1/immich"
```

### 自定义脚本和环境变量

此扩展通过 `app_config` 映射支持自定义脚本和环境变量：

- **自定义脚本**：请参阅 [在扩展类中运行自定义脚本](https://github.com/alexbelgium/hassio-addons/wiki/Running-custom-scripts-in-Addons)
- **env_vars 选项**：使用扩展类的 `env_vars` 选项传递额外的环境变量（名称可大写或小写）。请参阅 https://github.com/alexbelgium/hassio-addons/wiki/Add-Environment-variables-to-your-Addon-2 了解更多详情。

## 安装

安装此扩展非常直截了当，与安装任何其他 Hass.io 扩展并无不同。

**步骤：**
1. 添加我的扩展类存储库到您的 Home Assistant 实例（在 supervisor addons 商店右上角，或如果您已配置了我的 HA 则点击下方按钮）
   [![打开您的 Home Assistant 实例并显示带有特定存储库 URL 预填充的添加扩展类存储库对话框。](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2Falexbelgium%2Fhassio-addons)
1. 安装此扩展。
1. 点击 `Save` 按钮保存您的配置。
1. 启动扩展。
1. 检查扩展日志以查看一切是否顺利。
1. 仔细根据您的偏好配置扩展，请参阅官方文档了解更多详情。

**数据库设置：**
请注意，您需要安装单独的 postgres 扩展才能连接数据库。您可以安装我存储库中已存在的 postgres 扩展。
请注意，在启动它之前更改密码；之后将无法更改。

## 支持

在 GitHub 上创建问题，或在 [Home Assistant 主题](https://community.home-assistant.io/t/home-assistant-addon-immich/282108/3) 提问

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
