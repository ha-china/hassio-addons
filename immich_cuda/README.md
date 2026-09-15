# Home Assistant 附加功能：Immich CUDA

⚠️ 该项目正在进行非常活跃的开发。请预期会有错误和更改。不要将其作为存储照片和视频的唯一方式！（来自开发者）

我利用闲暇时间维护此及其他 Home Assistant 附加功能：跟进上游更改、Home Assistant 更改以及在实际硬件上测试结果繁多，这需要大量时间（以及一些金钱）。我会使用大约 5-10 个超出我使用的 110 个附加功能中的 10 个附件，我安装测试机器（并购买某些我本人不使用的测试服务，如 vpn），用于故障排除和改进附加功能。

如果这个附加功能为您节省时间或使设置更容易，我将不胜感激您的支持！

[![Buy me a coffee][donation-badge]](https://www.buymeacoffee.com/alexbelgium)
[![Donate via PayPal][paypal-badge]](https://www.paypal.com/donate/?hosted_button_id=DZFULJZTP3UQA)

## 附加功能信息

![版本](https://img.shields.io/badge/dynamic/yaml?label=Version&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fimmich_cuda%2Fconfig.yaml)
![端口转发](https://img.shields.io/badge/dynamic/yaml?label=Ingress&query=%24.ingress&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fimmich_cuda%2Fconfig.yaml)
![架构](https://img.shields.io/badge/dynamic/yaml?color=success&label=Arch&query=%24.arch&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fimmich_cuda%2Fconfig.yaml)

[![Codacy 徽章](https://app.codacy.com/project/badge/Grade/9c6cf10bdbba45ecb202d7f579b5be0e)](https://www.codacy.com/gh/alexbelgium/hassio-addons/dashboard?utm_source=github.com&utm_medium=referral&utm_content=alexbelgium/hassio-addons&utm_campaign=Badge_Grade)
[![GitHub Super-Linter](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/weekly-supelinter.yaml?label=Lint%20code%20base)](https://github.com/alexbelgium/hassio-addons/actions/workflows/weekly-supelinter.yaml)
[![构建者](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/onpush_builder.yaml?label=Builder)](https://github.com/alexbelgium/hassio-addons/actions/workflows/onpush_builder.yaml)

[donation-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee-%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white
[paypal-badge]: https://img.shields.io/badge/Donate%20via%20PayPal-0070BA?logo=paypal&style=flat&logoColor=white

_谢谢大家为我仓库星标！点击下方的图片来星标它，它将出现在右上角。谢谢！_

[![@alexbelgium/hassio-addons 的星标存储库名单](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/.github/stars2.svg)](https://github.com/alexbelgium/hassio-addons/stargazers)

![下载量趋势](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/immich_cuda/stats.png)

## 关于

这是一个适用于移动手机的自助照片和视频备份解决方案，并支持 CUDA 硬件加速。这是基于 Immich CUDA 加速的版本，为机器学习任务提供基于 NVIDIA GPU 的硬件加速。

该附加功能基于 [docker 镜像](https://github.com/imagegenius/docker-immich)，已启用 CUDA 支持以增强性能。

## Immich v3

此附加功能跟踪 **Immich v3**（基于 `ghcr.io/imagegenius/immich:3-cuda` 镜像系列构建）。

- **数据库**：Immich v3 需要 PostgreSQL (14–17)，带 **VectorChord (`vchord`)** 扩展；上游 `pgvecto.rs` 支持已被移除。此存储库中的 `Postgres 15` 和 `Postgres 17` 附加功能已提供具有 VectorChord 能力的数据库，是首选选择（您也可以使用官方的 `ghcr.io/immich-app/postgres:*-vectorchord*` 镜像）。
- **从 Immich v2 升级**：保持现有的具有 VectorChord 能力的数据库，以便 Immich 可以自动迁移其数据。如果您的数据库仍保存有旧的 `pgvecto.rs` 扩展中的数据，请将保留该扩展，直到 Immich 完成向 VectorChord 的迁移。
- **CPU**：在 `amd64` 上，Immich v3 需要 x86-64-v2（或更新）CPU。

有关详情，请参阅官方 [v3 迁移指南](https://immich.app/blog/v3-migration)。

## 硬件要求

- **NVIDIA GPU**：兼容的带有 CUDA 支持的 NVIDIA 显卡
- **CUDA 驱动程序**：必须在主机系统上正确安装 NVIDIA 驱动程序
- **架构**：仅支持 AMD64（ARM 架构不支持 CUDA）

## 配置

Web 界面可在 `<your-ip>:8080` 上找到。PostgreSQL 可以是内部的也可以是外部的。

### 选项

| 选项 | 类型 | 默认值 | 描述 |
|--------|------|---------|-------------|
| `data_location` | str | `/share/immich` | Immich 数据存储路径 |
| `library_location` | str | | 照片/视频库路径 |
| `TZ` | str | | 时区（例如，`Europe/London`） |
| `localdisks` | str | | 本地驱动器挂载路径（例如，`sda1,sdb1,MYNAS`） |
| `networkdisks` | str | | SMB 共享挂载路径（例如，`//SERVER/SHARE`） |
| `cifsusername` | str | | SMB 网络共享用户名 |
| `cifspassword` | str | | SMB 网络共享密码 |
| `cifsdomain` | str | | SMB 网络共享域 |
| `DB_HOSTNAME` | str | `homeassistant.local` | 数据库主机名 |
| `DB_USERNAME` | str | `postgres` | 数据库用户名 |
| `DB_PASSWORD` | str | `homeassistant` | 数据库密码 |
| `DB_DATABASE_NAME` | str | `immich` | 数据库名称 |
| `DB_PORT` | int | `5432` | 数据库端口 |
| `DB_ROOT_PASSWORD` | str | | 数据库根密码 |
| `JWT_SECRET` | str | | 身份验证 JWT 密钥 |
| `DISABLE_MACHINE_LEARNING` | bool | `false` | 禁用机器学习功能（不推荐用于 CUDA 版本） |
| `MACHINE_LEARNING_WORKERS` | int | `1` | 机器学习工作者数量（如果可以使用 CUDA 增加） |
| `MACHINE_LEARNING_WORKER_TIMEOUT` | int | `120` | 机器学习工作者超时（秒） |
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

### 挂载驱动器

此附加功能支持挂载本地驱动器和远程 SMB 共享：

- **本地驱动器**：参见 [在附加功能中挂载本地驱动器](https://github.com/alexbelgium/hassio-addons/wiki/Mounting-Local-Drives-in-Addons)
- **远程共享**：参见 [在附加功能中挂载远程共享](https://github.com/alexbelgium/hassio-addons/wiki/Mounting-remote-shares-in-Addons)

#### 使用本地驱动器存储 Immich 数据

将 Immich 数据存储到挂载的本地驱动器：

1. 设置 `localdisks` 选项为驱动器名称（例如，`sda1`）。驱动器将挂载在 `/mnt/sda1`。
2. 设置 `data_location` 选项为挂载驱动器上的路径，例如 `/mnt/sda1/immich`。

示例配置：

```yaml
localdisks: "sda1"
data_location: "/mnt/sda1/immich"
```

### 自定义脚本和环境变量

此附加功能通过在 `app_config` 映射中支持自定义脚本和环境变量：

- **自定义脚本**：参见 [在附加功能中运行自定义脚本](https://github.com/alexbelgium/hassio-addons/wiki/Running-custom-scripts-in-Addons)
- **env_vars 选项**：使用附加功能的 `env_vars` 选项传递额外的环境变量（大写或小写字名）。请参阅 https://github.com/alexbelgium/hassio-addons/wiki/Add-Environment-variables-to-your-Addon-2 了解详情。

## 安装

此附加功能的安装非常简单，与安装任何其他 Hass.io 附加功能没有区别。

**先决条件**：
- 带有 CUDA 支持的 NVIDIA GPU
- 在主机系统上安装了 NVIDIA 驱动程序
- AMD64 架构（不支持 ARM）

**步骤**：
1. 将我的附加功能存储库添加到您的 home assistant 实例中（在 supervisor 附加功能商店的右上角，或在您已配置我的 HA 的情况下点击下方的按钮）
   [![打开您的 Home Assistant 实例并显示带有特定存储库 URL 预填充的附加添加附加功能存储库对话框。](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2Falexbelgium%2Fhassio-addons)
1. 安装此附加功能。
1. 点击 `Save` 按钮存储您的配置。
1. 启动附加功能。
1. 检查附加功能的日志，看看一切是否正常。
1. 仔细配置附加功能以满足您的偏好，请参阅官方文档以获取相关内容。

**数据库设置**：
注意，您需要安装单独的 postgres 附加功能才能连接数据库。您可以预先在 我的存储库中安装 postgres 附加功能。
注意，在启动前修改密码，启动后无法修改。

## 支持

在 github 上创建问题，或在其上提问 [home assistant 主题](https://community.home-assistant.io/t/home-assistant-addon-immich/282108/3)

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
