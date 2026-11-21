# Home Assistant 附加组件：Navidrome

我在空闲时间维护此及其他 Home Assistant 附加组件：跟踪上游更改、HA 更改以及在真实硬件上进行测试需要花费大量时间（和一些资金）。我使用我超过 110 个附加组件中的 5-10 个，因此我定期安装测试机（并购买一些测试服务，如 vpn），这些机器我自己不使用，以便排查和改进附加组件。

如果这个附加组件能为您节省时间或使您的设置更简便，我将不胜感激！

[![Buy me a coffee][donation-badge]](https://www.buymeacoffee.com/alexbelgium)
[![Donate via PayPal][paypal-badge]](https://www.paypal.com/donate/?hosted_button_id=DZFULJZTP3UQA)

## 附加组件信息

![Version](https://img.shields.io/badge/dynamic/yaml?label=Version&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fnavidrome%2Fconfig.yaml)
![Ingress](https://img.shields.io/badge/dynamic/yaml?label=Ingress&query=%24.ingress&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fnavidrome%2Fconfig.yaml)
![Arch](https://img.shields.io/badge/dynamic/yaml?color=success&label=Arch&query=%24.arch&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fnavidrome%2Fconfig.yaml)

[![Codacy Badge](https://app.codacy.com/project/badge/Grade/9c6cf10bdbba45ecb202d7f579b5be0e)](https://www.codacy.com/gh/alexbelgium/hassio-addons/dashboard?utm_source=github.com&utm_medium=referral&utm_content=alexbelgium/hassio-addons&utm_campaign=Badge_Grade)
[![GitHub Super-Linter](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/weekly-supelinter.yaml?label=Lint%20code%20base)](https://github.com/alexbelgium/hassio-addons/actions/workflows/weekly-supelinter.yaml)
[![Builder](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/onpush_builder.yaml?label=Builder)](https://github.com/alexbelgium/hassio-addons/actions/workflows/onpush_builder.yaml)

[donation-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee-%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white
[paypal-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee%20Paypal-%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white

_感谢所有人给我的仓库点赞！点击下面的图片即可点赞，之后它将显示在右上角。谢谢！_

[![Stargazers repo roster for @alexbelgium/hassio-addons](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/.github/stars2.svg)](https://github.com/alexbelgium/hassio-addons/stargazers)

![downloads evolution](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/navidrome/stats.png)

## 关于

添加了各种修正和配置选项。
此附加组件基于以下 [docker 镜像](https://hub.docker.com/r/deluan/navidrome)。

## 配置

WebUI 可通过 <http://homeassistant:PORT> 访问，或通过侧边栏使用 Ingress 访问。
配置可以通过应用 WebUI 进行，除了以下选项。

详见 https://www.navidrome.org/docs/usage/configuration-options/ 获取更多配置详情。

### 选项

| 选项 | 类型 | 默认值 | 描述 |
|--------|------|---------|-------------|
| `base_url` | str | `/` | 配置代理后的 Navidrome 基础 URL |
| `music_folder` | str | `/data/music` | 存储音乐库的文件夹 |
| `data_folder` | str | `/data` | 存储应用数据（数据库）的文件夹 |
| `log_level` | str | `info` | 日志级别（error, warn, info, debug, trace） |
| `ssl` | bool | `false` | 为 Web 界面启用 HTTPS |
| `certfile` | str | | TLS 证书的路径 |
| `keyfile` | str | | TLS 私钥文件的路径 |
| `default_language` | str | | 界面的默认语言 |
| `image_cache_size` | str | | 图像缓存大小 |
| `transcoding_cache_size` | str | | 转码缓存大小 |
| `scan_schedule` | str | | 自动库扫描的 Cron 表达式 |
| `password_encryption_key` | str | | 密码加密密钥 |
| `welcome_message` | str | | 自定义欢迎消息 |
| `lastfm_api_key` | str | | 用于签到的 Last.fm API 密钥 |
| `lastfm_secret` | str | | 用于签到的 Last.fm 秘密密钥 |
| `spotify_id` | str | | 用于元数据的 Spotify 客户端 ID |
| `spotify_secret` | str | | 用于元数据的 Spotify 客户端秘密 |
| `localdisks` | str | | 本地驱动器挂载路径（例如，`sda1,sdb1,MYNAS`）。在驱动器后添加文件夹仅挂载该文件夹，例如 `MYNAS/public` 仅挂载该文件夹，路径为 `/mnt/MYNAS/public`。文件夹挂载需要 2026-09-19 之后发布的附加组件版本。 |
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

此附加组件支持挂载本地驱动器和远程 SMB 共享：

- **本地驱动器**：参见 [附加组件中的本地驱动器挂载](https://github.com/alexbelgium/hassio-addons/wiki/Mounting-Local-Drives-in-Addons)
- **远程共享**：参见 [附加组件中的远程共享挂载](https://github.com/alexbelgium/hassio-addons/wiki/Mounting-remote-shares-in-Addons)

### 自定义脚本和环境变量

此附加组件支持自定义脚本和环境变量：

- **自定义脚本**：参见 [运行附加组件中的自定义脚本](https://github.com/alexbelgium/hassio-addons/wiki/Running-custom-scripts-in-Addons)
- **env_vars 选项**：使用附加组件的 `env_vars` 选项传递额外环境变量（名称可为大写或小写）。详见 https://github.com/alexbelgium/hassio-addons/wiki/Add-Environment-variables-to-your-Addon-2。

## 安装

此附加组件的安装非常 straightforward（简单直接），与安装任何其他 Hass.io 附加组件相比并无不同。

1. 将我的附加组件存储库添加到您的 home assistant 实例（在 supervisor 附加组件商店点击右上角，或如果您已配置我的 HA，则点击下方按钮）
   [![Open your Home Assistant instance and show the add add-on repository dialog with a specific repository URL pre-filled.](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2Falexbelgium%2Fhassio-addons)
1. 安装此附加组件。
1. 点击 `Save` 按钮以保存配置。
1. 启动附加组件。
1. 检查附加组件的日志，查看一切是否正常。
1. 进入 WebUI，您将在此初始化应用。
1. 重启附加组件，以应用任何应已应用的选项

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
