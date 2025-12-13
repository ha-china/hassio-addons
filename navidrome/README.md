# Home assistant 插件：Navidrome

我利用业余时间维护这个和其他 Home Assistant 插件：跟上上游的更改、HA 的更改，并在真实硬件上进行测试需要花费大量时间（和一些金钱）。我大约使用我超过 110 个插件中的 5-10 个，因此我安装了测试机器（和购买了一些我自己不使用的测试服务，如 VPN），以用来调试和改进插件。

如果这个插件节省了您的时间或使您的设置更简单，我将非常感谢您的支持！

[![给我买咖啡][donation-badge]](https://www.buymeacoffee.com/alexbelgium)
[![通过 PayPal 捐赠][paypal-badge]](https://www.paypal.com/donate/?hosted_button_id=DZFULJZTP3UQA)

## 插件信息

![版本](https://img.shields.io/badge/dynamic/yaml?label=版本&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fnavidrome%2Fconfig.yaml)
![Ingress](https://img.shields.io/badge/dynamic/yaml?label=Ingress&query=%24.ingress&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fnavidrome%2Fconfig.yaml)
![架构](https://img.shields.io/badge/dynamic/yaml?color=success&label=架构&query=%24.arch&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fnavidrome%2Fconfig.yaml)

[![Codacy 徽章](https://app.codacy.com/project/badge/Grade/9c6cf10bdbba45ecb202d7f579b5be0e)](https://www.codacy.com/gh/alexbelgium/hassio-addons/dashboard?utm_source=github.com&utm_medium=referral&utm_content=alexbelgium/hassio-addons&utm_campaign=Badge_Grade)
[![GitHub Super-Linter](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/weekly-supelinter.yaml?label=Lint%20code%20base)](https://github.com/alexbelgium/hassio-addons/actions/workflows/weekly-supelinter.yaml)
[![构建器](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/onpush_builder.yaml?label=构建器)](https://github.com/alexbelgium/hassio-addons/actions/workflows/onpush_builder.yaml)

[donation-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee-%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white
[paypal-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee%20Paypal-%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white

_感谢所有给我的仓库星标！要给星标，请点击下面的图片，然后它会在右上角。谢谢！_

[![@alexbelgium/hassio-addons 的星标仓库罗盘](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/.github/stars2.svg)](https://github.com/alexbelgium/hassio-addons/stargazers)

![下载趋势](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/navidrome/stats.png)

## 关于

各种调整和配置选项的添加。
这个插件基于 [docker 镜像](https://hub.docker.com/r/deluan/navidrome)。

## 配置

Webui 可以在 <http://homeassistant:PORT> 或通过 Ingress 在侧边栏中访问。
配置可以通过应用 WebUI 进行，除了以下选项。

查看 https://www.navidrome.org/docs/usage/configuration-options/ 获取更多配置详细信息。

### 选项

| 选项 | 类型 | 默认值 | 描述 |
|------|------|--------|-------|
| `base_url` | 字符串 | `/` | 配置 Navidrome 在代理后面的基本 URL |
| `music_folder` | 字符串 | `/data/music` | 存储您音乐库的文件夹 |
| `data_folder` | 字符串 | `/data` | 存储应用程序数据（数据库）的文件夹 |
| `log_level` | 字符串 | `info` | 日志级别（error, warn, info, debug, trace） |
| `ssl` | 布尔值 | `false` | 为 Web 界面启用 HTTPS |
| `certfile` | 字符串 | | TLS 证书的路径 |
| `keyfile` | 字符串 | | TLS 密钥文件的路径 |
| `default_language` | 字符串 | | 界面的默认语言 |
| `image_cache_size` | 字符串 | | 图像缓存的大小 |
| `transcoding_cache_size` | 字符串 | | 转码缓存的大小 |
| `scan_schedule` | 字符串 | | 自动库扫描的 Cron 表达式 |
| `password_encryption_key` | 字符串 | | 密码加密的密钥 |
| `welcome_message` | 字符串 | | 自定义欢迎消息 |
| `lastfm_api_key` | 字符串 | | Last.fm API 密钥用于播客 |
| `lastfm_secret` | 字符串 | | Last.fm 密密用于播客 |
| `spotify_id` | 字符串 | | Spotify 客户端 ID 用于元数据 |
| `spotify_secret` | 字符串 | | Spotify 客户端密钥用于元数据 |
| `localdisks` | 字符串 | | 要挂载的本地驱动器（例如，`sda1,sdb1,MYNAS`） |
| `networkdisks` | 字符串 | | 要挂载的 SMB 共享（例如，`//SERVER/SHARE`） |
| `cifsusername` | 字符串 | | SMB 用户名用于网络共享 |
| `cifspassword` | 字符串 | | SMB 密码用于网络共享 |
| `cifsdomain` | 字符串 | | SMB 域用于网络共享 |

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

这个插件支持挂载本地驱动器和远程 SMB 共享：

- **本地驱动器**：查看 [在插件中挂载本地驱动器](https://github.com/alexbelgium/hassio-addons/wiki/Mounting-Local-Drives-in-Addons)
- **远程共享**：查看 [在插件中挂载远程共享](https://github.com/alexbelgium/hassio-addons/wiki/Mounting-remote-shares-in-Addons)

### 自定义脚本和环境变量

这个插件支持自定义脚本和环境变量：

- **自定义脚本**：查看 [在插件中运行自定义脚本](https://github.com/alexbelgium/hassio-addons/wiki/Running-custom-scripts-in-Addons)
- **env_vars 选项**：使用插件的 `env_vars` 选项来传递额外的环境变量（大写或小写名称）。查看 https://github.com/alexbelgium/hassio-addons/wiki/Add-Environment-variables-to-your-Addon-2 获取详细信息。

## 安装

这个插件的安装非常简单，与安装任何其他 Hass.io 插件没有区别。

1. [将我的 Hass.io 插件仓库][repository] 添加到您的 Hass.io 实例。
1. 安装这个插件。
1. 点击 `保存` 按钮以保存您的配置。
1. 启动插件。
1. 检查插件的日志，看看是否一切正常。
1. 转到 WebUI，您将初始化应用程序
1. 重新启动插件，以应用任何应该应用的选项

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
