# Home Assistant 补充包：Ente

我在空闲时间维护这个和其他的 Home Assistant 补充包：跟进上游变更、HA 变更，以及在真实硬件上进行测试会花费大量时间（以及一些资金）。我使用的补充包大约为 5-10 个（我拥有的超过 110 个），因此我会频繁安装测试机器（并购买一些我自用的测试服务如vpn），以便在我不使用它们的情况下进行故障排除和改进补充包。

如果这个补充包能为您节省时间或让您的设置变得更简单，您的支持将不胜感激！

[![Buy me a coffee][donation-badge]](https://www.buymeacoffee.com/alexbelgium)
[![Donate via PayPal][paypal-badge]](https://www.paypal.com/donate/?hosted_button_id=DZFULJZTP3UQA)

## 补充包信息

![Version](https://img.shields.io/badge/dynamic/yaml?label=Version&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fente%2Fconfig.yaml)
![Ingress](https://img.shields.io/badge/dynamic/yaml?label=Ingress&query=%24.ingress&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fente%2Fconfig.yaml)
![Arch](https://img.shields.io/badge/dynamic/yaml?color=success&label=Arch&query=%24.arch&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fente%2Fconfig.yaml)

[![Codacy Badge](https://app.codacy.com/project/badge/Grade/9c6cf10bdbba45ecb202d7f579b5be0e)](https://www.codacy.com/gh/alexbelgium/hassio-addons/dashboard?utm_source=github.com&utm_medium=referral&utm_content=alexbelgium/hassio-addons&utm_campaign=Badge_Grade)
[![GitHub Super-Linter](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/weekly-supelinter.yaml?label=Lint%20code%20base)](https://github.com/alexbelgium/hassio-addons/actions/workflows/weekly-supelinter.yaml)
[![Builder](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/onpush_builder.yaml?label=Builder)](https://github.com/alexbelgium/hassio-addons/actions/workflows/onpush_builder.yaml)

[donation-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee-%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white
[paypal-badge]: https://img.shields.io/badge/Donate%20via%20PayPal-0070BA?logo=paypal&style=flat&logoColor=white

非常感谢所有星标我的仓库的人！如果您要星标它，请点击下面的图片，然后它就会显示在右上角。谢谢！

[![Stargazers repo roster for @alexbelgium/hassio-addons](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/.github/stars2.svg)](https://github.com/alexbelgium/hassio-addons/stargazers)

![downloads evolution](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/ente/stats.png)

## 关于

---

[Ente](https://github.com/ente/ente) 是一个自托管的端到端加密的照片和视频存储解决方案。此补充包提供了一个完整的 Ente 服务器设置，包括博物馆 API 服务器和 MinIO S3 兼容存储后端。

Ente 提供：
- 端到端加密的照片和视频备份
- 人脸识别和搜索
- 跨平台移动和桌面应用
- 移动设备的自动照片备份
- 与家人和朋友分享相册
- 通过自托管完全掌控您的数据

此补充包基于官方的 Ente 服务器：https://github.com/ente/ente/tree/main/server

## 配置

---

Web 界面可在 <http://homeassistant:PORT> 找到。

### 选项

| 选项 | 类型 | 默认值 | 描述 |
|--------|------|---------|-------------|
| `ENTE_ENDPOINT_URL` | str | `http://homeassistant.local:8280` | Ente API 可访问的 URL（由 Web UI 使用） |
| `DB_PASSWORD` | str | `ente` | 内部 PostgreSQL 的数据库密码 |
| `USE_EXTERNAL_DB` | bool | `false` | 使用外部 PostgreSQL 数据库 |
| `TZ` | str | `Europe/Paris` | 时区设置 |
| `localdisks` | str | | 按名称或标签挂载的本地驱动器（例如 `sda1,MYNAS`）。在驱动器后添加文件夹仅挂载该文件夹，例如 `MYNAS/public` 仅挂载该文件夹，位于 `/mnt/MYNAS/public`。文件夹挂载需要补充包发布在 2026-09-19 之后的版本。 |

### 外部数据库配置

如果您想使用外部 PostgreSQL 数据库，设置 `USE_EXTERNAL_DB: true` 并配置：

| 选项 | 类型 | 描述 |
|--------|------|-----|
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

此补充包通过 `app_config` 映射支持自定义脚本和环境变量：

- **自定义脚本**：参见 [在补充包中运行自定义脚本](https://github.com/alexbelgium/hassio-addons/wiki/Running-custom-scripts-in-Addons)
- **env_vars 选项**：使用补充包的 `env_vars` 选项传递额外的环境变量（大小写字母名称均可）。详见 https://github.com/alexbelgium/hassio-addons/wiki/Add-Environment-variables-to-your-Addon-2。

### 挂载驱动器

此补充包支持挂载本地驱动器和远程 SMB 共享：

- **本地驱动器**：参见 [在补充包中挂载本地驱动器](https://github.com/alexbelgium/hassio-addons/wiki/Mounting-Local-Drives-in-Addons)
- **远程共享**：参见 [在补充包中挂载远程共享](https://github.com/alexbelgium/hassio-addons/wiki/Mounting-remote-shares-in-Addons)

## 安装

---

此补充包的安装非常简单，与其他任何补充包的安装没有不同。

1. 将我的补充包仓库添加到您的 Home Assistant 实例中（在 Supervisor 补充包存储右上角，或如果您已配置我的 HA 则点击下方按钮）
   [![打开您的 Home Assistant 实例并显示添加补充包仓库对话框，预填充特定的仓库地址。](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2Falexbelgium%2Fhassio-addons)
1. 安装此补充包。
1. 点击 `Save` 按钮以保存您的配置。
1. 将补充包选项设置为您的偏好设置
1. 启动补充包。
1. 检查补充包的日志以查看一切是否顺利。

## 首次设置

---

在首次启动补充包之后：

1. 从以下位置下载 Ente 移动应用：
   - [iOS App Store](https://apps.apple.com/app/ente-photos/id1542026904)
   - [Google Play Store](https://play.google.com/store/apps/details?id=io.ente.photos)
   - [F-Droid](https://f-droid.org/packages/io.ente.photos.fdroid/)

2. 在应用设置期间，选择“使用自定义服务器”并输入您的补充包 URL：`http://your-homeassistant-ip:8280`

3. 使用移动应用创建新账户

4. **重要**：自托管实例无法通过电子邮件发送订阅代码。请在补充包日志中查找验证码：
   ```
   Verification code: xxxxxx
   ```

5. 使用日志中的验证码完成账户设置

## 端口

此补充包暴露以下端口：

- **8300** (3000/tcp)：Ente Web UI
- **8305** (3005/tcp)：Ente Share
- **8306** (3006/tcp)：Ente Embed
- **8307** (3007/tcp)：Ente Paste
- **8308** (3008/tcp)：Ente Locker
- **8309** (3009/tcp)：Ente Memories
- **8280** (8080/tcp)：Ente API 服务器（博物馆）- 应用程序的主要端点

MinIO S3 仅在内部使用（127.0.0.1:3200），由于博物馆代理所有 S3 操作，因此未对外暴露。

## 数据存储

默认情况下，照片和视频存储在与 `/config/minio-data` 相同的路径。您可以使用 `MINIO_DATA_LOCATION` 选项更改此位置，或挂载外部存储以获得更大容量。

此补充包包含：
- 用于元数据的 PostgreSQL 数据库
- 用于实际照片/视频的 MinIO S3 兼容存储
- 用于客户端通信的 Ente 博物馆 API 服务器

## 备份推荐

为确保数据安全，定期备份：
- `/config/minio-data`（或您的自定义存储位置）- 包含所有照片/视频
- PostgreSQL 数据库（由补充包自动处理）
- 补充包配置

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
