# Home Assistant 插件：Immich OpenVINO

⚠️ 该项目正在非常积极地开发中。请预期会有错误和功能变更。不要仅将其作为存储您的照片和视频的唯一方式！（开发者提供）

我在业余时间维护这些及其他 Home Assistant 插件：跟踪上游更改、Home Assistant 变更以及在真实硬件上进行测试需要大量时间（和一些金钱）。我使用了约 5-10 个我拥有的 110+ 个插件，所以我定期安装测试机器（并购买一些我不自己使用的测试服务，如 VPN）来调试和改进插件。

如果这个插件为您节省了时间或让您的设置更容易，我将非常感激您的支持！

[![Buy me a coffee][donation-badge]](https://www.buymeacoffee.com/alexbelgium)
[![Donate via PayPal][paypal-badge]](https://www.paypal.com/donate/?hosted_button_id=DZFULJZTP3UQA)

## 插件信息

![Version](https://img.shields.io/badge/dynamic/yaml?label=Version&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fimmich_openvino%2Fconfig.yaml)
![Ingress](https://img.shields.io/badge/dynamic/yaml?label=Ingress&query=%24.ingress&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fimmich_openvino%2Fconfig.yaml)
![Arch](https://img.shields.io/badge/dynamic/yaml?color=success&label=Arch&query=%24.arch&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fimmich_openvino%2Fconfig.yaml)

[![Codacy Badge](https://app.codacy.com/project/badge/Grade/9c6cf10bdbba45ecb202d7f579b5be0e)](https://www.codacy.com/gh/alexbelgium/hassio-addons/dashboard?utm_source=github.com&utm_medium=referral&utm_content=alexbelgium/hassio-addons&utm_campaign=Badge_Grade)
[![GitHub Super-Linter](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/weekly-supelinter.yaml?label=Lint%20code%20base)](https://github.com/alexbelgium/hassio-addons/actions/workflows/weekly-supelinter.yaml)
[![Builder](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/onpush_builder.yaml?label=Builder)](https://github.com/alexbelgium/hassio-addons/actions/workflows/onpush_builder.yaml)

[donation-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee-%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white
[paypal-badge]: https://img.shields.io/badge/Donate%20via%20PayPal-0070BA?logo=paypal&style=flat&logoColor=white

*感谢给我的仓库点赞的每一个人！要点赞，请点击下面的图像，然后它就会显示在右上角。谢谢！*

[![Stargazers repo roster for @alexbelgium/hassio-addons](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/.github/stars2.svg)](https://github.com/alexbelgium/hassio-addons/stargazers)

![downloads evolution](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/immich_openvino/stats.png)

## 关于

自带 Photo 和视频备份解决方案，直接从手机开始，支持 OpenVINO 硬件加速。这是 Enable OpenVINO 版本 Immich，为机器学习任务在 Intel GPU 和 CPU上使用硬件加速。

此插件基于 imagegenius 的 [docker 镜像](https://github.com/imagegenius/docker-immich)，并启用了 OpenVINO 支持，以提高在 Intel 硬件上的性能。

## Immich v3

此插件跟踪 **Immich v3**（基于 `ghcr.io/imagegenius/immich:3-openvino` 镜像行构建）。

- **数据库**：Immich v3 需要 PostgreSQL (14–17) 并带有 **VectorChord (`vchord`)** 扩展；上游的 `pgvecto.rs` 支持已被移除。此仓库中的 `Postgres 15` 和 `Postgres 17` 插件已提供具备 VectorChord 能力的数据库，是首选方案（您也可以使用官方的 `ghcr.io/immich-app/postgres:*-vectorchord*` 镜像）。
- **从 Immich v2 升级**：保留您现有的 VectorChord 兼容数据库，以便 Immich 可以自动迁移其数据。如果您的数据库仍持有旧 `pgvecto.rs` 扩展中的数据，请将保留该扩展，直到 Immich 完成向 VectorChord 的迁移。
- **CPU**：在 `amd64` 架构上，Immich v3 需要 x86-64-v2（或更新）的 CPU。

请参阅官方 [v3 迁移指南](https://immich.app/blog/v3-migration) 了解详细信息。

## 硬件要求

- **Intel 硬件**：兼容的 Intel CPU 或 Intel 集成/离模 GPU
- **OpenVINO 支持**：带有 OpenVINO 工具包兼容性的 Intel 硬件
- **架构**：仅限 AMD64（OpenVINO 支持针对 Intel x86-64 架构进行了优化）
- **Intel GPU 驱动程序**：在安装主机系统时正确安装了 Intel GPU 驱动程序（用于 Intel GPU 加速）

## 配置

Web 界面可在 `<your-ip>:8080` 找到。PostgreSQL 可以是内置的也可以是外的。

### 选项

| 选项 | 类型 | 默认值 | 描述 |
|--------|------|---------|-------------|
| `data_location` | str | `/share/immich` | Immich 数据存储路径 |
| `library_location` | str | | 照片/视频库路径 |
| `TZ` | str | | 时区（例如，`Europe/London`） |
| `localdisks` | str | | 本地挂载驱动器（例如，`sda1,sdb1,MYNAS`）。在驱动器名称后添加文件夹以仅挂载该文件夹，例如 `MYNAS/public` 仅挂载该文件夹，路径为 `/mnt/MYNAS/public`。文件夹挂载需要 2026-09-19 之后发布的插件版本。 |
| `networkdisks` | str | | 要挂载的 SMB 共享（例如，`//SERVER/SHARE`） |
| `cifsusername` | str | | 网络共享的 SMB 用户名称 |
| `cifspassword` | str | | 网络共享的 SMB 密码 |
| `cifsdomain` | str | | 网络共享的 SMB 域名 |
| `DB_HOSTNAME` | str | `homeassistant.local` | 数据库主机名 |
| `DB_USERNAME` | str | `postgres` | 数据库用户名称 |
| `DB_PASSWORD` | str | `homeassistant` | 数据库密码 |
| `DB_DATABASE_NAME` | str | `immich` | 数据库名称 |
| `DB_PORT` | int | `5432` | 数据库端口 |
| `DB_ROOT_PASSWORD` | str | | 数据库 root 密码 |
| `JWT_SECRET` | str | | 用于身份验证的 JWT 密钥 |
| `DISABLE_MACHINE_LEARNING` | bool | `false` | 禁用机器学习功能（对于 OpenVINO 变体不推荐） |
| `MACHINE_LEARNING_WORKERS` | int | `1` | 机器学习中 worker 数量（可以通过 OpenVINO 增加） |
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
DISABLE_MACHINE_LEARNING: false
MACHINE_LEARNING_WORKERS: 2
MACHINE_LEARNING_WORKER_TIMEOUT: 180
```

### 挂载驱动器

此插件支持挂载本地驱动器和远程 SMB 共享：

- **本地驱动器**：请参阅 [在插件中挂载本地驱动器](https://github.com/alexbelgium/hassio-addons/wiki/Mounting-Local-Drives-in-Addons)
- **远程共享**：请参阅 [在插件中挂载远程共享](https://github.com/alexbelgium/hassio-addons/wiki/Mounting-remote-shares-in-Addons)

#### 使用本地磁盘存储 Immich

将 Immich 数据保存到挂载的本地磁盘：

1. 将 `localdisks` 选项设置为驱动器名称（例如，`sda1`）。驱动器将在 `/mnt/sda1` 挂载。要仅挂载驱动器的一个文件夹，请在名称后添加它，例如 `sda1/immich` 仅挂载该文件夹，路径为 `/mnt/sda1/immich`。文件夹挂载需要 2026-09-19 之后发布的插件版本。
2. 将 `data_location` 选项设置为挂载驱动器上的路径，例如 `/mnt/sda1/immich`。

示例配置：

```yaml
localdisks: "sda1"
data_location: "/mnt/sda1/immich"
```

### 自定义脚本和环境变量

此插件通过 `app_config` 映射支持自定义脚本和环境变量：

- **自定义脚本**：请参阅 [在插件中运行自定义脚本](https://github.com/alexbelgium/hassio-addons/wiki/Running-custom-scripts-in-Addons)
- **env_vars 选项**：使用插件 `env_vars` 选项传递额外的环境变量（大写或小写字母名称）。请参阅 https://github.com/alexbelgium/hassio-addons/wiki/Add-Environment-variables-to-your-Addon-2 了解详细信息。

## 安装

安装此插件非常简单，与其他 Hass.io 插件的安装没有区别。

**前提条件：**
- Intel CPU 或 Intel GPU，用于 OpenVINO 加速
- AMD64 架构（不支持 ARM）
- 已安装 Intel GPU 驱动程序（如果使用 Intel GPU 加速）

**步骤：**
1. 将我添加的插件仓库添加到您的 Home Assistant 实例中（在 supervisor 插件存储栏右上方，或者如果您已配置 HA，则点击下面的按钮）
   [![Open your Home Assistant instance and show the add add-on repository dialog with a specific repository URL pre-filled.](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2Falexbelgium%2Fhassio-addons)
2. 安装此插件。
3. 点击 `Save` 按钮以保存您的配置。
4. 启动插件。
5. 检查插件日志以查看一切是否顺利进行。
6. 仔细配置插件以适应您的偏好，请参阅官方文档以了解该方法。

**数据库设置：**
请注意，您需要安装单独的 postgres 插件才能连接数据库。您可以安装我已经放在仓库中的 postgres 插件。
请注意，在启动之前更改密码；之后无法更改。

## 支持

在 github 上创建一个问题，或询问 [Home Assistant 论坛](https://community.home-assistant.io/t/home-assistant-addon-immich/282108/3)

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
