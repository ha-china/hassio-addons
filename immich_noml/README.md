# Home Assistant 附加组件：无需机器学习的 Immich

⚠️ 该项目处于非常活跃的开发阶段。预计会出现错误和变更。请勿仅将其作为存储照片和视频的唯一方式！（来自开发者说明）

我在空闲时间维护此加其他 Home Assistant 附加组件：跟进上游变更、Home Assistant 变更，并用真实硬件进行测试（这花费大量时间和一些金钱）。我使用的附加组件大约有 5-10 个，所以我定期安装测试机器（并购买一些自己不使用的服务，如 VPN），用于调试和改进附加组件。

如果这个附加组件为您节省了时间或使您的配置更简单，我将不胜感激地接受您的支持！

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

_感谢所有为我的仓库星标的人！如果想给它星标，点击下面的图像，它就会显示在右上角。谢谢！_

[![Stargazers repo roster for @alexbelgium/hassio-addons](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/.github/stars2.svg)](https://github.com/alexbelgium/hassio-addons/stargazers)

![downloads evolution](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/immich_noml/stats.png)

## 关于

这是一个直接从您手机中执行的自托管照片和视频备份解决方案。这是 Immich 的 NoML（无机器学习）版本，专为没有机器学习能力的系统或用户而设计，后者出于性能或资源管理原因希望禁用 ML 功能。

该附加组件基于 imagegenius 的 [docker 镜像](https://github.com/imagegenius/docker-immich)，并排除了机器学习组件，以减少资源消耗并提高与资源受限系统的兼容性。

## Immich v3

此附加组件跟踪 **Immich v3**（基于 `ghcr.io/imagegenius/immich:3-noml` 镜像行构建）。已排除机器学习功能，但下面的数据库要求仍然适用。

- **数据库**：Immich v3 需要 PostgreSQL（14–17）和 **VectorChord (`vchord`)** 扩展；上游 `pgvecto.rs` 支持已被移除。此存储库中的 `Postgres 15` 和 `Postgres 17` 附加组件已提供支持 VectorChord 的数据库，并是首选选择（您也可以使用官方的 `ghcr.io/immich-app/postgres:*-vectorchord*` 镜像）。
- **从 Immich v2 升级**：保留您现有的支持 VectorChord 的数据库，以便 Immich 可以自动迁移其数据。如果您的数据库中仍保留旧 `pgvecto.rs` 扩展的数据，请在完全迁移到 VectorChord 之前保留该扩展。
- **CPU**：在 `amd64` 平台上，Immich v3 需要 x86-64-v2（或更新）的处理程序。

有关详细信息，请参阅官方 [v3 迁移指南](https://immich.app/blog/v3-migration)。

## 用例

NoML 变体非常适合：

- **资源受限的系统**：在不使用机器学习的情况下降低 CPU 和内存使用量
- **注重隐私的部署**：无需面部识别或物体检测处理
- **简单照片存储**：基本的照片和视频备份，无需高级 AI 功能
- **旧硬件**：难以处理机器学习工作负载的系统
- **极简主义配置**：偏好基本照片管理而无 AI 增强的用户

## 配置

Webui 地址为 `<your-ip>:8080`。PostgreSQL 可以是内部的也可以是外部的。

### 选项

| 选项 | 类型 | 默认值 | 描述 |
|--------|------|---------|-------------|
| `data_location` | str | `/share/immich` | Immich 数据存储的路径 |
| `library_location` | str | | 照片/视频库的路径 |
| `TZ` | str | | 时区（例如，`Europe/London`） |
| `localdisks` | str | | 要挂载的本地驱动器（例如，`sda1,sdb1,MYNAS`）。在驱动器后添加文件夹以仅挂载该文件夹，例如 `MYNAS/public` 仅挂载该文件夹，位于 `/mnt/MYNAS/public`。文件夹挂载需要 2026-09-19 之后发布的附加组件版本。 |
| `networkdisks` | str | | 要挂载的 SMB 共享（例如，`//SERVER/SHARE`） |
| `cifsusername` | str | | SMB 网络共享的用户名 |
| `cifspassword` | str | | SMB 网络共享的密码 |
| `cifsdomain` | str | | SMB 网络共享的域名 |
| `DB_HOSTNAME` | str | `homeassistant.local` | 数据库主机名 |
| `DB_USERNAME` | str | `postgres` | 数据库用户名 |
| `DB_PASSWORD` | str | `homeassistant` | 数据库密码 |
| `DB_DATABASE_NAME` | str | `immich` | 数据库名称 |
| `DB_PORT` | int | `5432` | 数据库端口 |
| `DB_ROOT_PASSWORD` | str | | 数据库 root 密码 |
| `JWT_SECRET` | str | | 用于身份验证的 JWT 秘密 |
| `DISABLE_MACHINE_LEARNING` | bool | `false` | 禁用 ML 功能（NoML 变体推荐） |
| `MACHINE_LEARNING_WORKERS` | int | `1` | 机器学习工作者数量（NoML 请保持为 1） |
| `MACHINE_LEARNING_WORKER_TIMEOUT` | int | `120` | 机器学习工作者超时（秒） |
| `VIPS_NOVECTOR` | bool | `false` | 设置为 `true` 以导出 `VIPS_NOVECTOR=1` 并规避 aarch64 缩略图生成问题 |
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

此附加组件支持挂载本地驱动器和网络 SMB 共享：

- **本地驱动器**：请参阅 [附加组件中挂载本地驱动器](https://github.com/alexbelgium/hassio-addons/wiki/Mounting-Local-Drives-in-Addons)
- **远程共享**：请参阅 [附加组件中挂载远程共享](https://github.com/alexbelgium/hassio-addons/wiki/Mounting-remote-shares-in-Addons)

#### 使用本地磁盘存储 Immich 数据

要将 Immich 数据保存到挂载的本地磁盘：

1. 设置 `localdisks` 选项为您的驱动器名称（例如，`sda1`）。驱动器将挂载于 `/mnt/sda1`。若要仅挂载驱动器的一段，请在名称后添加它，例如 `sda1/immich` 仅挂载该文件夹，位于 `/mnt/sda1/immich`。文件夹挂载需要 2026-09-19 之后发布的附加组件版本。
2. 设置 `data_location` 选项为挂载驱动器上的路径，例如 `/mnt/sda1/immich`。

示例配置：

```yaml
localdisks: "sda1"
data_location: "/mnt/sda1/immich"
```

### 自定义脚本和环境变量

此附加组件通过 `app_config` 映射支持自定义脚本和环境变量：

- **自定义脚本**：请参阅 [在附加组件中运行自定义脚本](https://github.com/alexbelgium/hassio-addons/wiki/Running-custom-scripts-in-Addons)
- **env_vars 选项**：使用附加组件的 `env_vars` 选项来传递额外的环境变量（大小写名称均可）。详见 https://github.com/alexbelgium/hassio-addons/wiki/Add-Environment-variables-to-your-Addon-2 以获取详细信息。

## 安装

此附加组件的安装非常简单，与安装任何其他 Hass.io 附加组件没有区别。

**步骤：**
1. 将我的附加组件仓库添加到您的 Home Assistant 实例中（在 supervisor 添加到附加组件存储中点击右上角，或如果您已配置了我的 HA，则点击下面的按钮）
   [![打开您的 Home Assistant 实例并显示带有特定仓库 URL 预填料的附加组件仓库对话框。](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2Falexbelgium%2Fhassio-addons)
2. 安装此附加组件。
3. 点击 `Save` 按钮以保存您的配置。
4. 启动附加组件。
5. 检查附加组件的日志，看看一切是否顺利。
6. 根据您的偏好仔细配置附加组件，有关详细信息，请参阅官方文档。

**数据库设置：**
请注意，您需要安装单独的 postgres 附加组件才能连接数据库。我可以安装 postgres 附加组件在仓库中。
请注意，在首次启动前更改密码；启动后无法更改

## 支持

在 github 上创建 issue，或在 [home assistant 线程](https://community.home-assistant.io/t/home-assistant-addon-immich/282108/3) 中提问

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
