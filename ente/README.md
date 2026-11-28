# Home Assistant 附加组件：Ente

我利用空闲时间维护此及其他 Home Assistant 附加组件：跟进上游更新、适配 Home Assistant 更改以及在真实硬件上进行测试需要大量时间（以及一些费用）。我使用约 5-10 种我拥有的 >110 种附加组件，因此我经常安装测试机器（并采购一些测试服务，如 VPN）来协助排查问题和改进这些附加组件。

如果您使用此附加组件节省了我的时间或让您的设置变得更简单，我将不胜感激，非常感谢您提供的支持！

[![Buy me a coffee][donation-badge]](https://www.buymeacoffee.com/alexbelgium)
[![Donate via PayPal][paypal-badge]](https://www.paypal.com/donate/?hosted_button_id=DZFULJZTP3UQA)

## 附加组件信息

![Version](https://img.shields.io/badge/dynamic/yaml?label=Version&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fente%2Fconfig.yaml)
![Ingress](https://img.shields.io/badge/dynamic/yaml?label=Ingress&query=%24.ingress&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fente%2Fconfig.yaml)
![Arch](https://img.shields.io/badge/dynamic/yaml?color=success&label=Arch&query=%24.arch&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fente%2Fconfig.yaml)

[![Codacy Badge](https://app.codacy.com/project/badge/Grade/9c6cf10bdbba45ecb202d7f579b5be0e)](https://www.codacy.com/gh/alexbelgium/hassio-addons/dashboard?utm_source=github.com&utm_medium=referral&utm_content=alexbelgium/hassio-addons&utm_campaign=Badge_Grade)
[![GitHub Super-Linter](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/weekly-supelinter.yaml?label=Lint%20code%20base)](https://github.com/alexbelgium/hassio-addons/actions/workflows/weekly-supelinter.yaml)
[![Builder](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/onpush_builder.yaml?label=Builder)](https://github.com/alexbelgium/hassio-addons/actions/workflows/onpush_builder.yaml)

[donation-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee-%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white
[paypal-badge]: https://img.shields.io/badge/Donate%20via%20PayPal-0070BA?logo=paypal&style=flat&logoColor=white

_感谢所有星标我的仓库的朋友们！要星标它，请点击下图，然后它会出现在右上角。谢谢！_

[![Stargazers repo roster for @alexbelgium/hassio-addons](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/.github/stars2.svg)](https://github.com/alexbelgium/hassio-addons/stargazers)

![downloads evolution](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/ente/stats.png)

## 关于

---

[Ente](https://github.com/ente/ente) 是一个自托管的、端到端加密的照片和视频存储解决方案。此附加组件提供了一个完整的 Ente 服务器设置，包括博物馆 API 服务器和 MinIO S3 兼容存储后端。

Ente 提供：
- 端到端加密的照片和视频备份
- 人脸识别和搜索
- 多平台移动和桌面应用程序
- 从移动设备自动备份照片
- 与家人和朋友共享相册
- 通过自托管对您的数据拥有完全控制权

此附加组件基于官方 Ente 服务器：https://github.com/ente/ente/tree/main/server

## 配置

---

Web UI 的地址为 <http://homeassistant:PORT>。

### 选项

| 选项 | 类型 | 默认值 | 描述 |
|--------|------|---------|-------------|
| `ENTE_ENDPOINT_URL` | str | `http://homeassistant.local:8280` | Ente API 可访问的 URL（用于 Web UI） |
| `DB_PASSWORD` | str | `ente` | 内部 PostgreSQL 数据库的密码 |
| `USE_EXTERNAL_DB` | bool | `false` | 使用外部 PostgreSQL 数据库 |
| `TZ` | str | `Europe/Paris` | 时区设置 |
| `localdisks` | str | | 按名称或标签挂载的本地驱动器（如 `sda1,MYNAS`）。在驱动器后添加文件夹以仅挂载该文件夹，例如 `MYNAS/public` 仅挂载该文件夹，路径为 `/mnt/MYNAS/public`。文件夹挂载需要附加组件版本在 2026 年 9 月 19 日之后发布。 |

### 外部数据库配置

如果您想使用外部 PostgreSQL 数据库，请将 `USE_EXTERNAL_DB` 设置为 `true`，并配置以下内容：

| 选项 | 类型 | 描述 |
|--------|------|------|
| `DB_HOSTNAME` | str | PostgreSQL 服务器主机名 |
| `DB_PORT` | int | PostgreSQL 服务器端口（默认：5432） |
| `DB_USERNAME` | str | PostgreSQL 用户名 |
| `DB_DATABASE_NAME` | str | PostgreSQL 数据库名 |

### 示例配置

```yaml
ENTE_ENDPOINT_URL: "http://homeassistant.local:8280"
DB_PASSWORD: "securepassword"
TZ: "America/New_York"
```

### 自定义脚本和环境变量

此附加组件通过 `app_config` 映射支持自定义脚本和环境变量：

- **自定义脚本**：参见 [在附加组件中运行自定义脚本](https://github.com/alexbelgium/hassio-addons/wiki/Running-custom-scripts-in-Addons)
- **env_vars 选项**：使用附加组件的 `env_vars` 选项传递额外的环境变量（名称可为大写或小写）。详见 https://github.com/alexbelgium/hassio-addons/wiki/Add-Environment-variables-to-your-Addon-2

### 挂载驱动器

此附加组件支持挂载本地驱动器和远程 SMB 共享：

- **本地驱动器**：参见 [在附加组件中挂载本地驱动器](https://github.com/alexbelgium/hassio-addons/wiki/Mounting-Local-Drives-in-Addons)
- **远程共享**：参见 [在附加组件中挂载远程共享](https://github.com/alexbelgium/hassio-addons/wiki/Mounting-remote-shares-in-Addons)

## 安装

---

此附加组件的安装非常简单，与其他附加组件的安装方式基本相同。

1. 将我的附加组件仓库添加到您的 Home Assistant 实例中（在 supervisor 附加组件商店右上角，或如果您已配置了我的 HA，则点击下面的按钮）
   [![Open your Home Assistant instance and show the add add-on repository dialog with a specific repository URL pre-filled.](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2Falexbelgium%2Fhassio-addons)
1. 安装此附加组件。
1. 点击 `Save` 按钮以保存您的配置。
1. 将附加组件选项设置为您自己的偏好。
1. 启动附加组件。
1. 检查附加组件的日志以确认一切是否正常工作。

## 首次设置

---

首次启动附加组件后：

1. 从以下位置下载 Ente 移动应用：
   - [iOS App Store](https://apps.apple.com/app/ente-photos/id1542026904)
   - [Google Play Store](https://play.google.com/store/apps/details?id=io.ente.photos)
   - [F-Droid](https://f-droid.org/packages/io.ente.photos.fdroid/)

2. 在安装应用时，选择 "Use custom server" 并输入您的附加组件 URL：`http://your-homeassistant-ip:8280`

3. 使用移动应用创建新账户

4. **重要**：自托管实例无法通过电子邮件发送订阅代码。请检查附加组件日志查找验证代码：
   ```
   Verification code: xxxxxx
   ```

5. 使用日志中的验证代码完成账户设置

## 端口

该附加组件暴露以下端口：

- **8300** (3000/tcp): Ente Web UI
- **8305** (3005/tcp): Ente Share
- **8306** (3006/tcp): Ente Embed
- **8307** (3007/tcp): Ente Paste
- **8308** (3008/tcp): Ente Locker
- **8309** (3009/tcp): Ente Memories
- **8280** (8080/tcp): Ente API 服务器 (museum) - 应用程序的主要端点

MinIO S3 仅在内部使用 (127.0.0.1:3200)，不对外暴露，因为博物馆代理处理所有 S3 操作。

## 数据存储

默认情况下，照片和视频存储于 `/config/minio-data`。您可以使用 `MINIO_DATA_LOCATION` 选项更改该位置，或挂载外部存储以容纳更多数据。

该附加组件包含：
- PostgreSQL 数据库用于元数据
- MinIO S3 兼容存储用于实际的照片/视频
- Ente 博物馆 API 服务器用于客户端通信

## 备份建议

为确保数据安全，请定期备份：
- `/config/minio-data`（或您的自定义存储位置）- 包含所有照片/视频
- PostgreSQL 数据库（由附加组件自动处理）
- 附加组件配置

## 支持

在 github 上创建问题

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
