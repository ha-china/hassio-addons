# Home assistant 扩展插件：immich

⚠️ 该项目正处于非常活跃的开发阶段。请预期会出现 bug 和变更。不要将其作为存储您照片和视频的唯一方式！（来自开发者）

我在空闲时间维护本插件及其他 Home Assistant 扩展插件：跟踪上游变更、HA 变更，并在真实硬件上测试需要大量时间（以及一些金钱）。我大约有 5-10 个我的 110+ 个插件这样使用，因此我安装测试机器（并购买一些测试服务，例如 VPN）的我不自行使用，以故障排除和改进插件。

如果这个插件为您节省时间或使您的设置更简单，我将不胜感激您提供支持！

[![Buy me a coffee][donation-badge]](https://www.buymeacoffee.com/alexbelgium)
[![Donate via PayPal][paypal-badge]](https://www.paypal.com/donate/?hosted_button_id=DZFULJZTP3UQA)

## 插件信息

![版本](https://img.shields.io/badge/dynamic/yaml?label=Version&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fimmich%2Fconfig.yaml)
![Ingress](https://img.shields.io/badge/dynamic/yaml?label=Ingress&query=%24.ingress&url=https://img.shields.io/badge/dynamic/yaml?label=Ingress&query=%24.ingress&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fimmich%2Fconfig.yaml)  
![架构](https://img.shields.io/badge/dynamic/yaml?color=success&label=Arch&query=%24.arch&url=https://img.shields.io/badge/dynamic/yaml?color=success&label=Arch&query=%24.arch&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fimmich%2Fconfig.yaml)

[![Codacy Badge](https://app.codacy.com/project/badge/Grade/9c6cf10bdbba45ecb202d7f579b5be0e)](https://www.codacy.com/gh/alexbelgium/hassio-addons/dashboard?utm_source=github.com&utm_medium=referral&utm_content=alexbelgium/hassio-addons&utm_campaign=Badge_Grade)
[![GitHub Super-Linter](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/weekly-supelinter.yaml?label=Lint%20code%20base)](https://github.com/alexbelgium/hassio-addons/actions/workflows/weekly-supelinter.yaml)
[![Builder](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/onpush_builder.yaml?label=Builder)](https://github.com/alexbelgium/hassio-addons/actions/workflows/onpush_builder.yaml)

[donation-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee-%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white
[paypal-badge]: https://img.shields.io/badge/Donate%20via%20PayPal-0070BA?logo=paypal&style=flat&logoColor=white

_感谢所有人星标我的仓库！要星标它，请点击下面的图像，然后它将在右上角。谢谢！_

[![Stargazers repo roster for @alexbelgium/hassio-addons](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/.github/stars2.svg)](https://github.com/alexbelgium/hassio-addons/stargazers)

![downloads evolution](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/immich/stats.png)

## 关于

基于 Web 的文件浏览器。
此插件基于 imagegenius 的 [docker 镜像](https://github.com/imagegenius/docker-immich)。

## Immich v3

此插件跟踪 **Immich v3**（基于 `ghcr.io/imagegenius/immich:3` 镜像行构建）。

- **数据库**：Immich v3 需要 PostgreSQL（14–17），并带有 **VectorChord (`vchord`)** 扩展；上游 `pgvecto.rs` 支持已被移除。本仓库中的 `Postgres 15` 和 `Postgres 17` 插件已提供具有 VectorChord 功能的数据库并是推荐选择（您也可以使用官方 `ghcr.io/immich-app/postgres:*-vectorchord*` 镜像）。
- **从 Immich v2 升级**：保留现有的具有 VectorChord 功能的数据库，以便 Immich 可以自动迁移其数据。如果您的数据库仍然保留在旧的 `pgvecto.rs` 扩展中的数据，请保留该扩展直到 Immich 完成向 VectorChord 的迁移。
- **CPU**：在 `amd64` 架构上，Immich v3 需要 x86-64-v2（或更新）的 CPU。

有关详细信息，请参阅官方的 [v3 迁移指南](https://immich.app/blog/v3-migration)。

## 配置

Web UI 位于 `<your-ip>:8080`。PostgreSQL 可以是内部或外部。

### 选项

| 选项 | 类型 | 默认值 | 描述 |
|------|------|--------|------|
| `data_location` | str | `/share/immich` | Immich 数据存储的位置 |
| `library_location` | str | | 照片/视频库路径 |
| `TZ` | str | | 时区（例如，`Europe/London`） |
| `localdisks` | str | | 要挂载的本地驱动器（例如，`sda1,sdb1,MYNAS`） |
| `networkdisks` | str | | 要挂载的 SMB 共享（例如，`//SERVER/SHARE`） |
| `cifsusername` | str | | 网络共享的 SMB 用户名 |
| `cifspassword` | str | | 网络共享的 SMB 密码 |
| `cifsdomain` | str | | 网络共享的 SMB 域 |
| `DB_HOSTNAME` | str | `localhost` | 数据库主机名 |
| `DB_USERNAME` | str | `immich` | 数据库用户名 |
| `DB_PASSWORD` | str | | 数据库密码 |
| `DB_DATABASE_NAME` | str | `immich` | 数据库名称 |
| `DB_PORT` | int | `5432` | 数据库端口 |
| `DB_ROOT_PASSWORD` | str | | 数据库根密码 |
| `JWT_SECRET` | str | | 用于身份验证的 JWT 密钥 |
| `DISABLE_MACHINE_LEARNING` | bool | `false` | 禁用机器学习功能 |
| `MACHINE_LEARNING_WORKERS` | int | `1` | 机器学习工作进程数量 |
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
```

### 挂载驱动器

此插件支持挂载本地驱动器和一些远程 SMB 共享：

- **本地驱动器**：请参阅 [addons 中挂载本地驱动器](https://github.com/alexbelgium/hassio-addons/wiki/Mounting-Local-Drives-in-Addons)
- **远程共享**：请参阅 [addons 中挂载远程共享](https://github.com/alexbelgium/hassio-addons/wiki/Mounting-remote-shares-in-Addons)

#### 使用本地磁盘存储 Immich 数据

为了将 Immich 数据保存到挂载的本地磁盘：

1. 设置 `localdisks` 选项为您的驱动器名称（例如，`sda1`）。该驱动器将挂载到 `/mnt/sda1`。
2. 设置 `data_location` 选项为挂载驱动器上的路径，例如 `/mnt/sda1/immich`。

示例配置：

```yaml
localdisks: "sda1"
data_location: "/mnt/sda1/immich"
```

### 自定义脚本和环境变量

此插件通过 `app_config` 映射支持自定义脚本和环境变量：

- **自定义脚本**：请参阅 [运行 addons 中的自定义脚本](https://github.com/alexbelgium/hassio-addons/wiki/Running-custom-scripts-in-Addons)
- **env_vars 选项**：使用-addon `env_vars` 选项传递额外的环境变量（大小写名称均可）。有关详细信息，请参阅 https://github.com/alexbelgium/hassio-addons/wiki/Add-Environment-variables-to-your-Addon-2。

## 安装

本插件的安装非常直接，与其他安装任何 Hass.io 插件相比没有不同。

1. 将我的扩展插件库添加到您的 home assistant 实例中（在 supervisor 插件商店顶部右侧，或如果您已配置了我的 HA，则点击下面的按钮）
   [![打开您的 Home Assistant 实例并显示带有特定仓库 URL 预填充的添加插件库对话框。](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2Falexbelgium%2Fhassio-addons)
2. 安装此插件。
3. 点击 `Save` 按钮以保存您的配置。
4. 启动插件。
5. 检查插件日志以确定一切是否顺利进行。
6. 仔细根据您的偏好配置插件，并参见官方文档。

注意：您需要安装单独的 postgres 插件才能连接数据库。您可以在我的仓库中已安装 postgres 插件。
注意：在启动之前更改密码；之后将无法更改。

## 支持

在 GitHub 上创建问题，或询问 [home assistant 线程](https://community.home-assistant.io/t/home-assistant-addon-immich/282108/3)

[repository]: https://github.com/alexbelgium/hassio-addons
[aarch64-shield]: https://img.shields.io/badge/aarch64-yes-green.svg
[amd64-shield]: https://img.shields.io/badge/amd64-yes-green.svg
[armv7-shield]: https://img.shields.io/badge/armv7-yes-green.svg

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
