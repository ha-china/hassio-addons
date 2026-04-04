# Home Assistant 插件：Navidrome

我在业余时间维护这个和其他 Home Assistant 插件：跟进上游变更、Home Assistant 变更以及在真实硬件上进行测试都需要花费大量时间（以及一些金钱）。我经常使用大约 5-10 个我超过 110 个插件中的插件，因此我安装了测试机器（并购买了些我自身不使用的测试服务，例如 VPN），用于调试和改进插件。

如果这个插件为您节省了时间或使您的设置更简单，我会非常感激您的支持！

[![买我一杯咖啡][捐赠徽章]](https://www.buymeacoffee.com/alexbelgium)
[![通过 PayPal 捐赠][paypal-徽章]](https://www.paypal.com/donate/?hosted_button_id=DZFULJZTP3UQA)

## 插件信息

![版本](https://img.shields.io/badge/dynamic/yaml?label=Version&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fnavidrome%2Fconfig.yaml)
![入口](https://img.shields.io/badge/dynamic/yaml?label=Ingress&query=%24.ingress&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fnavidrome%2Fconfig.yaml)
![架构](https://img.shields.io/badge/dynamic/yaml?color=success&label=Arch&query=%24.arch&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fnavidrome%2Fconfig.yaml)

[![Codacy 徽章](https://app.codacy.com/project/badge/Grade/9c6cf10bdbba45ecb202d7f579b5be0e)](https://www.codacy.com/gh/alexbelgium/hassio-addons/dashboard?utm_source=github.com&utm_medium=referral&utm_content=alexbelgium/hassio-addons&utm_campaign=Badge_Grade)
[![GitHub Super-Linter](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/weekly-supelinter.yaml?label=Lint%20code%20base)](https://github.com/alexbelgium/hassio-addons/actions/workflows/weekly-supelinter.yaml)
[![Builder](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/onpush_builder.yaml?label=Builder)](https://github.com/alexbelgium/hassio-addons/actions/workflows/onpush_builder.yaml)

[捐赠徽章]: https://img.shields.io/badge/Buy%20me%20a%20coffee-%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white
[paypal-徽章]: https://img.shields.io/badge/Buy%20me%20a%20coffee%20Paypal-%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white

_感谢所有为我仓库加星的人！要加星，请点击下面的图片，然后它就会出现在右上角。谢谢！_

[![Stargazers repo roster for @alexbelgium/hassio-addons](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/.github/stars2.svg)](https://github.com/alexbelgium/hassio-addons/stargazers)

![下载趋势](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/navidrome/stats.png)

## 简介

添加了各种调整和配置选项。此插件基于 [docker 镜像](https://hub.docker.com/r/deluan/navidrome)。

## 配置

Web 界面可以在 <http://homeassistant:PORT> 或通过侧边栏使用入口找到。
可以通过应用程序 Web 界面进行配置，除了以下选项之外。

有关其他配置详细信息，请参阅 https://www.navidrome.org/docs/usage/configuration-options/。

### 选项

| 选项 | 类型 | 默认值 | 描述 |
|------|------|---------|-------------|
| `base_url` | str | `/` | 配置 Navidrome 在代理后面的基本 URL |
| `music_folder` | str | `/data/music` | 存储您的音乐库的文件夹 |
| `data_folder` | str | `/data` | 存储应用程序数据（数据库）的文件夹 |
| `log_level` | str | `info` | 日志级别（error，warn，info，debug，trace）|
| `ssl` | bool | `false` | 启用 Web 界面的 HTTPS |
| `certfile` | str | | TLS 证书的路径 |
| `keyfile` | str | | TLS 密钥文件的路径 |
| `default_language` | str | | 界面的默认语言 |
| `image_cache_size` | str | | 图片缓存的尺寸 |
| `transcoding_cache_size` | str | | 转码缓存的尺寸 |
| `scan_schedule` | str | | 自动库扫描的 Cron 表达式 |
| `password_encryption_key` | str | | 密码加密的密钥 |
| `welcome_message` | str | | 自定义欢迎信息 |
| `lastfm_api_key` | str | | 用于 scrobbling 的 Last.fm API 密钥 |
| `lastfm_secret` | str | | 用于 scrobbling 的 Last.fm 密钥 |
| `spotify_id` | str | | 用于元数据的 Spotify 客户端 ID |
| `spotify_secret` | str | | 用于元数据的 Spotify 客户端密钥 |
| `localdisks` | str | | 要挂载的本地驱动器（例如，`sda1,sdb1,MYNAS`） |
| `networkdisks` | str | | 要挂载的 SMB 共享（例如，`//SERVER/SHARE`） |
| `cifsusername` | str | | 网络共享的 SMB 用户名 |
| `cifspassword` | str | | 网络共享的 SMB 密码 |
| `cifsdomain` | str | | 网络共享的 SMB 域 |

### 示例配置

```yaml
base_url: "/"
music_folder: "/data/music"
data_folder: "/data"
log_level: "info"
ssl: false
certfile: "fullchain.pem"
keyfile: "privkey.pem"
scan_schedule: "0 2 * * *"
lastfm_api_key: "your-lastfm-key"
localdisks: "sda1,sdb1"
networkdisks: "//192.168.1.100/music"
cifsusername: "musicuser"
cifspassword: "password123"
cifsdomain: "workgroup"
```

### 挂载驱动器

此插件支持挂载本地驱动器和远程 SMB 共享：

- **本地驱动器**：请参阅 [插件中挂载本地驱动器](https://github.com/alexbelgium/hassio-addons/wiki/Mounting-Local-Drives-in-Addons)
- **远程共享**：请参阅 [插件中挂载远程共享](https://github.com/alexbelgium/hassio-addons/wiki/Mounting-remote-shares-in-Addons)

### 自定义脚本和环境变量

此插件支持自定义脚本和环境变量：

- **自定义脚本**：请参阅 [插件中运行自定义脚本](https://github.com/alexbelgium/hassio-addons/wiki/Running-custom-scripts-in-Addons)
- **env_vars 选项**：使用插件的 `env_vars` 选项传递额外的环境变量（使用大写或小写名称）。请参阅 https://github.com/alexbelgium/hassio-addons/wiki/Add-Environment-variables-to-your-Addon-2 获取详细信息。

## 安装

此插件的安装相当简单，与安装任何其他 Hass.io 插件的安装方式没有太大区别。

1. 将我的插件存储库添加到您的 Home Assistant 实例中（在管理员的插件商店顶部右侧，或如果您已配置了我的 HA，请点击下面的按钮）
   [![打开您的 Home Assistant 实例并显示具有特定存储库 URL 预填充的添加插件存储库对话框](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2Falexbelgium%2Fhassio-addons)
1. 安装此插件。
1. 点击“保存”按钮以存储您的配置。
1. 启动插件。
1. 检查插件的日志以查看一切是否顺利。
1. 前往 Web 界面，在那里您将初始化应用程序
1. 重新启动插件，以应用应应用的所有选项

[存储库](https://github.com/alexbelgium/hassio-addons)
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
