# Home assistant add-on: Ente

我利用业余时间维护这个 Home Assistant add-on 以及其他的 add-on：跟进上游变化、Home Assistant 变化，并在真实硬件上测试，这需要花费大量时间（和一些金钱）。我大约使用我 110 多个 add-on 中 5-10 个非常频繁，所以我安装了测试机器（并且购买了一些我自身不使用的测试服务，如 VPN），以便于调试和改进这些 add-on。

如果这个 add-on 为您节省了时间或简化了您的设置，我将非常感谢您的支持！

[![Buy me a coffee][donation-badge]](https://www.buymeacoffee.com/alexbelgium)
[![Donate via PayPal][paypal-badge]](https://www.paypal.com/donate/?hosted_button_id=DZFULJZTP3UQA)

## Addon informations

![Version](https://img.shields.io/badge/dynamic/yaml?label=Version&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fente%2Fconfig.yaml)
![Ingress](https://img.shields.io/badge/dynamic/yaml?label=Ingress&query=%24.ingress&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fente%2Fconfig.yaml)
![Arch](https://img.shields.io/badge/dynamic/yaml?color=success&label=Arch&query=%24.arch&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fente%2Fconfig.yaml)

[![Codacy Badge](https://app.codacy.com/project/badge/Grade/9c6cf10bdbba45ecb202d7f579b5be0e)](https://www.codacy.com/gh/alexbelgium/hassio-addons/dashboard?utm_source=github.com&utm_medium=referral&utm_content=alexbelgium/hassio-addons&utm_campaign=Badge_Grade)
[![GitHub Super-Linter](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/weekly-supelinter.yaml?label=Lint%20code%20base)](https://github.com/alexbelgium/hassio-addons/actions/workflows/weekly-supelinter.yaml)
[![Builder](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/onpush_builder.yaml?label=Builder)](https://github.com/alexbelgium/hassio-addons/actions/workflows/onpush_builder.yaml)

[donation-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee-%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white
[paypal-badge]: https://img.shields.io/badge/Donate%20via%20PayPal-0070BA?logo=paypal&style=flat&logoColor=white

_感谢所有给我的仓库星标的人！要给星标，请点击下面的图片，然后它就会在右上角。谢谢！_

[![Stargazers repo roster for @alexbelgium/hassio-addons](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/.github/stars2.svg)](https://github.com/alexbelgium/hassio-addons/stargazers)

![downloads evolution](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/ente/stats.png)

## About

---

[Ente](https://github.com/ente-io/ente) 是一个自托管、端到端加密的照片和视频存储解决方案。这个 add-on 提供了一个完整的 Ente 服务器设置，包括博物馆 API 服务器和 MinIO S3 兼容存储后端。

Ente 提供：
- 端到端加密的照片和视频备份
- 人脸识别和搜索
- 跨平台的移动和桌面应用
- 从移动设备自动备份照片
- 与家人和朋友共享相册
- 自托管数据完全控制

这个 add-on 基于 Ente 官方服务器：https://github.com/ente-io/ente/tree/main/server

## Configuration

---

Webui 可以在 <http://homeassistant:PORT> 找到。

### Options

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `ENTE_ENDPOINT_URL` | str | `http://homeassistant.local:8280` | Ente API 可访问的 URL |
| `MINIO_ROOT_USER` | str | `minioadmin` | MinIO 根用户名 |
| `MINIO_ROOT_PASSWORD` | str | `minioadmin` | MinIO 根密码 |
| `MINIO_DATA_LOCATION` | str | `/config/minio-data` | MinIO 存储数据的路径 |
| `DB_PASSWORD` | str | `ente` | 内部 PostgreSQL 数据库的密码 |
| `DISABLE_WEB_UI` | bool | `true` | 禁用 Web UI（使用移动/桌面应用） |
| `USE_EXTERNAL_DB` | bool | `false` | 使用外部 PostgreSQL 数据库 |
| `TZ` | str | `Europe/Paris` | 时区设置 |

### External Database Configuration

如果您想使用外部 PostgreSQL 数据库，设置 `USE_EXTERNAL_DB: true` 并配置：

| Option | Type | Description |
|--------|------|-------------|
| `DB_HOSTNAME` | str | PostgreSQL 服务器主机名 |
| `DB_PORT` | int | PostgreSQL 服务器端口（默认：5432） |
| `DB_USERNAME` | str | PostgreSQL 用户名 |
| `DB_DATABASE_NAME` | str | PostgreSQL 数据库名 |

### Example Configuration

```yaml
ENTE_ENDPOINT_URL: "http://homeassistant.local:8280"
MINIO_ROOT_USER: "myuser"
MINIO_ROOT_PASSWORD: "mypassword"
MINIO_DATA_LOCATION: "/config/ente-storage"
DB_PASSWORD: "securepassword"
DISABLE_WEB_UI: false
TZ: "America/New_York"
```

### Custom Scripts and Environment Variables

这个 add-on 支持自定义脚本和环境变量，通过 `addon_config` 映射：

- **Custom scripts**: 查看 [在 Addons 中运行自定义脚本](https://github.com/alexbelgium/hassio-addons/wiki/Running-custom-scripts-in-Addons)
- **env_vars 选项**: 使用 add-on 的 `env_vars` 选项传递额外的环境变量（大小写名称）。查看 https://github.com/alexbelgium/hassio-addons/wiki/Add-Environment-variables-to-your-Addon-2 获取详细信息。

### Mounting Drives

这个 add-on 支持挂载本地驱动器和远程 SMB 共享：

- **Local drives**: 查看 [在 Addons 中挂载本地驱动器](https://github.com/alexbelgium/hassio-addons/wiki/Mounting-Local-Drives-in-Addons)
- **Remote shares**: 查看 [在 Addons 中挂载远程共享](https://github.com/alexbelgium/hassio-addons/wiki/Mounting-remote-shares-in-Addons)

## Installation

---

这个 add-on 的安装非常简单，与安装任何其他 add-on 没有区别。

1. 将我的 add-ons 仓库添加到您的 Home Assistant 实例（在 supervisor add-ons 库的右上角，或者如果您已经配置了我的 HA，请点击下面的按钮）
   [![打开您的 Home Assistant 实例并显示带有特定仓库 URL 预填的添加 add-on 仓库对话框。](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2Falexbelgium%2Fhassio-addons)
1. 安装这个 add-on。
1. 点击 `Save` 按钮保存您的配置。
1. 设置 add-on 选项以符合您的偏好
1. 启动 add-on。
1. 检查 add-on 的日志以查看是否一切正常。

## First Time Setup

---

首次启动 add-on 后：

1. 从以下地方下载 Ente 移动应用：
   - [iOS App Store](https://apps.apple.com/app/ente-photos/id1542026904)
   - [Google Play Store](https://play.google.com/store/apps/details?id=io.ente.photos)
   - [F-Droid](https://f-droid.org/packages/io.ente.photos.fdroid/)

2. 在应用设置过程中，选择 "Use custom server" 并输入您的 add-on URL: `http://your-homeassistant-ip:8280`

3. 使用移动应用创建新账户

4. **重要**: 对于自托管实例，订阅代码不能通过电子邮件发送。检查 add-on 日志以获取验证码：
   ```
   Verification code: xxxxxx
   ```

5. 使用日志中的验证码完成账户设置

## Ports

这个 add-on 暴露三个端口：

- **8300** (3000/tcp): Ente web UI（如果启用）
- **8280** (8080/tcp): Ente API 服务器（博物馆）- 应用程序的主要端点
- **8320** (3200/tcp): MinIO S3 端点（用于存储后端）

## Data Storage

默认情况下，照片和视频存储在 `/config/minio-data`。您可以使用 `MINIO_DATA_LOCATION` 选项更改此位置，或挂载外部存储以获得更大的容量。

这个 add-on 包括：
- 用于元数据的 PostgreSQL 数据库
- 用于实际照片/视频的 MinIO S3 兼容存储
- 用于客户端通信的 Ente 博物馆 API 服务器

## Backup Recommendations

为了数据安全，定期备份：
- `/config/minio-data`（或您的自定义存储位置）- 包含所有照片/视频
- PostgreSQL 数据库（由 add-on 自动处理）
- Add-on 配置

## Support

在 github 上创建问题

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
