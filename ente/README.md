# Home Assistant 插件：Ente

我利用业余时间维护此及其他 Home Assistant 插件：跟进上游更改、适配 Home Assistant 的变更以及在实际硬件上进行测试需要大量时间（和一些金钱）。我常用的约 5-10 个插件超过我的 110 个插件总数，因此我有时会安装测试机器（并购买一些测试服务，如 vpn），即使我自己不使用，也用于故障排查和改进插件维护。

如果此插件为您节省时间或让设置更简单，我将不胜感激！

[![Buy me a coffee][donation-badge]](https://www.buymeacoffee.com/alexbelgium)
[![Donate via PayPal][paypal-badge]](https://www.paypal.com/donate/?hosted_button_id=DZFULJZTP3UQA)

## 插件信息

![版本](https://img.shields.io/badge/dynamic/yaml?label=版本&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fente%2Fconfig.yaml)
![Ingress](https://img.shields.io/badge/dynamic/yaml?label=Ingress&query=%24.ingress&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fente%2Fconfig.yaml)
![架构](https://img.shields.io/badge/dynamic/yaml?color=success&label=架构&query=%24.arch&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fente%2Fconfig.yaml)

[![Codacy 徽章](https://app.codacy.com/project/badge/Grade/9c6cf10bdbba45ecb202d7f579b5be0e)](https://www.codacy.com/gh/alexbelgium/hassio-addons/dashboard?utm_source=github.com&utm_medium=referral&utm_content=alexbelgium/hassio-addons&utm_campaign=Badge_Grade)
[![GitHub Super-Linter](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/weekly-supelinter.yaml?label=代码检查)](https://github.com/alexbelgium/hassio-addons/actions/workflows/weekly-supelinter.yaml)
[![构建者](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/onpush_builder.yaml?label=构建者)](https://github.com/alexbelgium/hassio-addons/actions/workflows/onpush_builder.yaml)

[donation-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee-%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white
[paypal-badge]: https://img.shields.io/badge/Donate%20via%20PayPal-0070BA?logo=paypal&style=flat&logoColor=white

_感谢各位为我仓库星标！要星标它，请点击下图，它将会显示在右上角。谢谢！_

[![@alexbelgium/hassio-addons 仓库星标列表](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/.github/stars2.svg)](https://github.com/alexbelgium/hassio-addons/stargazers)

![下载趋势](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/ente/stats.png)

## 关于

---

[Ente](https://github.com/ente/ente) 是一个自托管的端到端加密照片和视频存储解决方案。此插件提供完整的 Ente 服务器设置，包括博物馆 API 服务器和 MinIO S3 兼容存储后端。

Ente 提供：
- 端到端加密的照片和视频备份
- 人脸识别和搜索
- 跨平台的移动和桌面应用程序
- 来自移动设备的自动照片备份
- 与家人和朋友共享相册
- 通过自托管完全控制您的数据

此插件基于官方 Ente 服务器：https://github.com/ente/ente/tree/main/server

## 配置

---

Web 界面地址为 <http://homeassistant:PORT>。

### 选项

| 选项 | 类型 | 默认值 | 描述 |
|--------|------|---------|-------------|
| `ENTE_ENDPOINT_URL` | str | `http://homeassistant.local:8280` | Ente API 可访问的网址（web UI 使用） |
| `DB_PASSWORD` | str | `ente` | 内部 PostgreSQL 数据库密码 |
| `USE_EXTERNAL_DB` | bool | `false` | 使用外部 PostgreSQL 数据库 |
| `TZ` | str | `Europe/Paris` | 时区设置 |
| `localdisks` | str | | 按名称或标签挂载的本地磁盘（例如 `sda1,MYNAS`）。在磁盘后添加文件夹以仅挂载该文件夹，例如 `MYNAS/public` 仅挂载该文件夹，路径为 `/mnt/MYNAS/public`。文件夹挂载需要 2026-09-19 之后发布的插件版本。 |

### 外部数据库配置

如果您想使用外部 PostgreSQL 数据库，请设置 `USE_EXTERNAL_DB: true` 并配置：

| 选项 | 类型 | 描述 |
|--------|------|------|
| `DB_HOSTNAME` | str | PostgreSQL 服务器主机名 |
| `DB_PORT` | int | PostgreSQL 服务器端口（默认：5432） |
| `DB_USERNAME` | str | PostgreSQL 用户名 |
| `DB_DATABASE_NAME` | str | PostgreSQL 数据库名称 |

### 示例配置

```yaml
ENTE_ENDPOINT_URL: "http://homeassistant.local:8280"
DB_PASSWORD: "securepassword"
TZ: "America/New_York"
```

### 自定义脚本和环境变量

此插件通过 `app_config` 映射支持自定义脚本和环境变量：

- **自定义脚本**：参见 [Plugins 中运行自定义脚本](https://github.com/alexbelgium/hassio-addons/wiki/Running-custom-scripts-in-Addons)
- **env_vars 选项**：使用插件的 `env_vars` 选项传递额外的环境变量（大写或小写名称均可）。详情参见 https://github.com/alexbelgium/hassio-addons/wiki/Add-Environment-variables-to-your-Addon-2

### 挂载磁盘

此插件支持挂载本地磁盘和远程 SMB 共享：

- **本地磁盘**：参见 [Plugins 中挂载本地磁盘](https://github.com/alexbelgium/hassio-addons/wiki/Mounting-Local-Drives-in-Addons)
- **远程共享**：参见 [Plugins 中挂载远程共享](https://github.com/alexbelgium/hassio-addons/wiki/Mounting-remote-shares-in-Addons)

## 安装

---

此插件的安装非常简便，与其他插件安装没有太大区别。

1. 将我的插件仓库添加到您的 Home Assistant 实例（在 Supervisor 插件商店右上角，或如果您已配置了 Home Assistant，请点击下方按钮）
   [![打开您的 Home Assistant 实例并显示添加插件仓库对话框，且预填充特定仓库 URL。](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2Falexbelgium%2Fhassio-addons)
1. 安装此插件。
1. 点击 `保存` 按钮以保存您的配置。
1. 将插件选项设置为您的偏好设置
1. 启动插件。
1. 检查插件日志，查看一切是否正常。

## 首次设置

---

首次启动插件后：

1. 从以下地址下载 Ente 移动应用程序：
   - [iOS 应用商店](https://apps.apple.com/app/ente-photos/id1542026904)
   - [Google Play 商店](https://play.google.com/store/apps/details?id=io.ente.photos)
   - [F-Droid](https://f-droid.org/packages/io.ente.photos.fdroid/)

2. 在应用设置过程中，选择“使用自定义服务器”并输入插件 URL：`http://your-homeassistant-ip:8280`

3. 使用移动应用程序创建新账户

4. **重要**：自托管实例无法通过电子邮件发送订阅代码。请在插件日志中查找验证代码：
   ```
   验证代码：xxxxxx
   ```

5. 使用日志中的验证代码完成账户设置

## 端口

插件暴露以下端口：

- **8300** (3000/tcp): Ente Web UI
- **8305** (3005/tcp): Ente Share
- **8306** (3006/tcp): Ente Embed
- **8307** (3007/tcp): Ente Paste
- **8308** (3008/tcp): Ente Locker
- **8309** (3009/tcp): Ente Memories
- **8280** (8080/tcp): Ente API 服务器（博物馆）- 应用程序主要入口点

MinIO S3 仅内部使用（127.0.0.1:3200），不对外暴露，因为博物馆代理所有 S3 操作。

## 数据存储

默认情况下，照片和视频存储在 `/config/minio-data`。您可以通过 `MINIO_DATA_LOCATION` 选项更改此位置，或挂载外部存储以获得更大的容量。

插件包括：
- PostgreSQL 数据库用于元数据
- MinIO S3 兼容存储用于实际照片/视频
- Ente 博物馆 API 服务器用于客户端通信

## 备份建议

出于数据安全考虑，请定期备份：
- `/config/minio-data`（或您的自定义存储位置）- 包含所有照片/视频
- PostgreSQL 数据库（插件自动处理）
- 插件配置

## 支持

在 GitHub 上创建问题

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
