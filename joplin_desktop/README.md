# Home Assistant 附加组件：Joplin 桌面版

我利用业余时间维护此及其他 Home Assistant 附加组件：跟踪上游变更、HA 变更以及在真实硬件上进行测试花费了大量时间（和一些金钱）。我使用了超过 110 个附加组件中的约 5-10 个进行常规测试，因此我安装了一些测试机器（并购买了一些测试服务如 VPN），我自己不使用，仅用于故障排除和改进附加组件。

如果您使用该附加组件节省了时间或使您的设置更简单，我会非常感激您的支持！

[![Buy me a coffee][donation-badge]](https://www.buymeacoffee.com/alexbelgium)
[![Donate via PayPal][paypal-badge]](https://www.paypal.com/donate/?hosted_button_id=DZFULJZTP3UQA)

## 附加组件信息

![版本](https://img.shields.io/badge/dynamic/yaml?label=Version&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fjoplin_desktop%2Fconfig.yaml)
![入口](https://img.shields.io/badge/dynamic/yaml?label=Ingress&query=%24.ingress&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fjoplin_desktop%2Fconfig.yaml)
![架构](https://img.shields.io/badge/dynamic/yaml?color=success&label=Arch&query=%24.arch&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fjoplin_desktop%2Fconfig.yaml)

[![Codacy Badge](https://app.codacy.com/project/badge/Grade/9c6cf10bdbba45ecb202d7f579b5be0e)](https://www.codacy.com/gh/alexbelgium/hassio-addons/dashboard?utm_source=github.com&utm_medium=referral&utm_content=alexbelgium/hassio-addons&utm_campaign=Badge_Grade)
[![GitHub Super-Linter](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/weekly-supelinter.yaml?label=Lint%20code%20base)](https://github.com/alexbelgium/hassio-addons/actions/workflows/weekly-supelinter.yaml)
[![Builder](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/onpush_builder.yaml?label=Builder)](https://github.com/alexbelgium/hassio-addons/actions/workflows/onpush_builder.yaml)

[donation-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee-%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white
[paypal-badge]: https://img.shields.io/badge/Donate%20via%20PayPal-0070BA?logo=paypal&style=flat&logoColor=white

_感谢所有星标我的仓库的人！要星标它，点击下方的图片，它将显示在右上角。谢谢！_

[![Stargazers repo roster for @alexbelgium/hassio-addons](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/.github/stars2.svg)](https://github.com/alexbelgium/hassio-addons/stargazers)

![下载量趋势](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/joplin_desktop/stats.png)

## 简介

[Joplin](https://joplinapp.org) 是一款开源的记事本和待办事项应用程序。此附加组件运行完整的 Joplin **桌面**应用程序，并通过 Selkies 将其流媒体传输到您的浏览器，因此您可以从任何设备使用它，而无需安装任何东西。

该附加组件基于 Docker 镜像 <https://github.com/linuxserver/docker-joplin>。

如果您只需要在自己的 Joplin 应用程序之间同步笔记，[Joplin 服务器](https://github.com/alexbelgium/hassio-addons/tree/master/joplin) 附加组件更轻量。两者可以协同工作：在 Joplin 的同步设置中，将此桌面应用程序指向您的 Joplin 服务器。

仅支持 amd64 架构，因为 Joplin 未发布 Linux arm64 版本。

## 配置

推荐的配置方式是通过入口（侧边栏面板）。您还可以在附加组件网络设置中启用端口 3001 的 HTTPS，并打开 <https://homeassistant:3001>；浏览器流媒体功能需要 HTTPS，因此请勿直接使用纯 HTTP 端口 3000 打开它——它仅用于置于您自己的 TLS 反向代理之后。如果您打开端口，请设置 `PASSWORD`：然后网页界面会请求用户 `abc` 及该密码。这种基本认证仅适用于受信任的地方网络；对于来自互联网的访问，请使用具有更强认证的反向代理。

Joplin 的配置档案（笔记、设置、插件）存储在 `data_location` 中，默认值为 `/config/data`，这是位于 `/addon_configs/` 下 Home Assistant 主机上的附加组件自有文件夹。该档案会在重启和更新后保留，并包含在备份中。

使用附加组件的 `env_vars` 选项来传递额外的环境变量（大小写名称均可）。详细信息请参见 <https://github.com/alexbelgium/hassio-addons/wiki/Add-Environment-variables-to-your-Addon-2>。

```yaml
PUID: 1000 # 桌面用户 ID 及数据文件夹所有者
PGID: 1000 # 桌面用户组 ID
TZ: Europe/Paris # 时区，根据 https://manpages.ubuntu.com/manpages/trusty/man3/DateTime::TimeZone::Catalog.3pm.html 填写国家/城市
KEYBOARD: fr-fr-azerty # 键盘布局
PASSWORD: "mypassword" # 网页界面的基本认证（用户 abc）。如果您启用端口 3001，请设置此项；仅限受信任的地方网络
DRINODE: /dev/dri/renderD128 # 用于渲染和编码的 GPU 设备，如果默认不 work 可更改
data_location: /config/data # Joplin 配置档案存储位置；必须位于 /config, /share, /data 或 /mnt
additional_apps: "" # 每次启动时安装的逗号分隔 apt 软件包（否则不持久化）
use_own_certs: false # 对于端口 3001 的 HTTPS，使用 /ssl 中的自签名证书
certfile: fullchain.pem # /ssl 中的证书文件
keyfile: privkey.pem # /ssl 中的密钥文件
DNS_server: 8.8.8.8 # 留空以使用路由器 DNS
localdisks: sda1 # 输入要挂载的驱动器硬件名称，用逗号分隔，或其标签。例如：sda1, sdb1, MYNAS... 若要挂载特定文件夹，仅添加该文件夹，例如：MYNAS/public 将挂载到 /mnt/MYNAS/public
networkdisks: "//SERVER/SHARE" # 可选，SMB 服务器列表，用逗号分隔
cifsusername: "username" # 可选，SMB 用户名，适用于所有 SMB 共享
cifspassword: "password" # 可选，SMB 密码
cifsdomain: "domain" # 可选，允许为 SMB 共享设置域
```

### 有用的上游变量

这些变量由 LinuxServer Selkies 基础镜像读取，可以通过 `env_vars` 设置。完整列表在 <https://docs.linuxserver.io/images/docker-joplin>。

| 变量 | 效果 |
| --- | --- |
| `RESTART_APP` | `true` 表示如果 Joplin 窗口关闭则自动重启 Joplin |
| `NO_DECOR` | 任何值移除窗口装饰，使 Joplin 像网页应用一样填充浏览器 |
| `NO_FULL` | 任何值阻止窗口管理器最大化窗口 |
| `HARDEN_DESKTOP` | `true` 禁用终端、sudo、xdg-open 和 Selkies 文件传输，仅保留 Joplin |
| `SELKIES_AUDIO_ENABLED`, `SELKIES_MICROPHONE_ENABLED` | `false` 禁用音频或麦克风流媒体 |
| `SELKIES_FRAMERATE` | 流媒体帧率上限，例如 `30` |

## 安装

此附加组件的安装非常直接，与其他附加组件的安装方式没有区别。

1. 将我提供的附加组件仓库添加到 Home Assistant 实例中（在 supervisor 附加组件商店右上角，或如果您已配置 HA 请点击下方按钮）
   [![打开您的 Home Assistant 实例并显示带有特定仓库 URL 预填充的“添加附加组件仓库”对话框。](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2Falexbelgium%2Fhassio-addons)
1. 安装此附加组件。
1. 点击 `保存` 按钮以存储您的配置。
1. 将附加组件选项设置为您的偏好设置。
1. 启动附加组件。
1. 检查附加组件的日志以查看是否一切顺利。
1. 打开 webUI 并调整软件选项。

## 支持

在 GitHub 上创建问题。

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
