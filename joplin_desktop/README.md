# Home Assistant 附加组件：Joplin Desktop

我是在业余时间维护此及其他 Home Assistant 附加组件的开发者：跟踪上游变更、跟进 HA 的更新以及在真实硬件上测试耗费了大量时间（以及一些金钱）。我大约使用了超过 110 个附加组件中的 5-10 个，因此我定期安装测试机器（并购买某些测试服务例如 vpn），即使我自己不使用它们，也用于调试和改进附加组件。

如果这个附加组件能为您节省时间或使您的设置更简单，我将非常感激您的支持！

[![Buy me a coffee][donation-badge]](https://www.buymeacoffee.com/alexbelgium)
[![Donate via PayPal][paypal-badge]](https://www.paypal.com/donate/?hosted_button_id=DZFULJZTP3UQA)

## 附加组件信息

![版本](https://img.shields.io/badge/dynamic/yaml?label=Version&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fjoplin_desktop%2Fconfig.yaml)
![Ingress](https://img.shields.io/badge/dynamic/yaml?label=Ingress&query=%24.ingress&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fjoplin_desktop%2Fconfig.yaml)
![Arch](https://img.shields.io/badge/dynamic/yaml?color=success&label=Arch&query=%24.arch&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fjoplin_desktop%2Fconfig.yaml)

[![Codacy Badge](https://app.codacy.com/project/badge/Grade/9c6cf10bdbba45ecb202d7f579b5be0e)](https://www.codacy.com/gh/alexbelgium/hassio-addons/dashboard?utm_source=github.com&utm_medium=referral&utm_content=alexbelgium/hassio-addons&utm_campaign=Badge_Grade)
[![GitHub Super-Linter](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/weekly-supelinter.yaml?label=Lint%20code%20base)](https://github.com/alexbelgium/hassio-addons/actions/workflows/weekly-supelinter.yaml)
[![Builder](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/onpush_builder.yaml?label=Builder)](https://github.com/alexbelgium/hassio-addons/actions/workflows/onpush_builder.yaml)

[donation-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee-%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white
[paypal-badge]: https://img.shields.io/badge/Donate%20via%20PayPal-0070BA?logo=paypal&style=flat&logoColor=white

_感谢所有星标我的仓库的朋友们！要星标它，请点击下图，然后它就会显示在右上角。感谢大家！_

[![Stargazers repo roster for @alexbelgium/hassio-addons](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/.github/stars2.svg)](https://github.com/alexbelgium/hassio-addons/stargazers)

![下载量趋势](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/joplin_desktop/stats.png)

## 简介

[Joplin](https://joplinapp.org) 是一款开源笔记和待办事项应用程序。此附加组件运行完整的 Joplin **桌面版**应用，并通过 Selkies 将其流式传输到您的浏览器，使您无需安装任何内容即可在任何设备上使用它。

此附加组件基于 docker 镜像 <https://github.com/linuxserver/docker-joplin>

如果您只需要同步您自己 Joplin 应用程序之间的笔记，[Joplin Server](https://github.com/alexbelgium/hassio-addons/tree/master/joplin) 附加组件更轻量。两者可以协同工作：在 Joplin 的同步设置中，将该桌面应用指向您的 Joplin Server。

仅支持 amd64 架构，因为 Joplin 未发布 Linux arm64 版本。

## 配置

推荐的配置方式是通过 ingress（侧边栏面板）。您也可以在附加组件网络设置中启用 https 端口 3001，并打开 <https://homeassistant:3001>；浏览器流式传输功能需要 HTTPS，因此不要直接使用普通 http 端口 3000——它仅旨在位于您自己的 TLS 反向代理之后。如果您打开端口，请设置 `PASSWORD`：则 Web 界面将要求用户 `abc` 及该密码。此基本认证仅适用于受信任的本地网络；对于来自互联网的连接，请使用具有更强认证机制的反向代理。

Joplin 的配置文件（笔记、设置、插件）存储在 `data_location` 中，默认为 `/config/data`，这是 Home Assistant 主机上 `/addon_configs/` 下的附加组件自己的文件夹。该文件夹会在重启和更新期间保持，并包含在备份中。

使用附加组件的 `env_vars` 选项来传递额外的环境变量（名称可以是大写或小写）。有关详细信息，请查看 <https://github.com/alexbelgium/hassio-addons/wiki/Add-Environment-variables-to-your-Addon-2>。

```yaml
PUID: 1000 # 桌面用户的用户 ID 和数据文件夹的所有者
PGID: 1000 # 桌面用户的组 ID
TZ: Europe/Paris # 时区，根据国家/城市设置，参考 https://manpages.ubuntu.com/manpages/trusty/man3/DateTime::TimeZone::Catalog.3pm.html
KEYBOARD: fr-fr-azerty # 键盘布局
PASSWORD: "mypassword" # Web 界面的基本认证（用户为 abc）。仅当如果您打开端口 3001 时才设置此值；仅适用于受信任的本地网络
DRINODE: /dev/dri/renderD128 # 用于渲染和编解码的 GPU 设备，如果默认值不工作则使用此选项
data_location: /config/data # Joplin 配置文件存储的位置；必须在 /config、/share、/data 或 /mnt 中
additional_apps: "" # 每次启动时安装的逗号为分隔符的 apt 软件包（否则不持久化）
use_own_certs: false # 使用 /ssl 的自-generated 证书用于 https 端口 3001
certfile: fullchain.pem # /ssl 中的证书文件
keyfile: privkey.pem # /ssl 中的私钥文件
DNS_server: 8.8.8.8 # 保持空白以使用路由器的 DNS
localdisks: sda1 # 输入您要挂载的磁盘设备名称，用逗号分隔，或其标签。例如：sda1, sdb1, MYNAS...若要仅挂载一个文件夹，例如 MYNAS/public，则挂载路径将为 /mnt/MYNAS/public
networkdisks: "//SERVER/SHARE" # 可选的，按逗号分隔的 SMB 服务器列表
cifsusername: "username" # 可选的，SMB 用户名（所有 SMB 共享共用）
cifspassword: "password" # 可选的，SMB 密码
cifsdomain: "domain" # 可选的，允许为 SMB 共享设置域
```

### 有用的上游变量

这些变量由 LinuxServer Selkies 基础镜像读取，可通过 `env_vars` 设置。完整列表位于 <https://docs.linuxserver.io/images/docker-joplin>。

| 变量名 | 效果 |
| --- | --- |
| `RESTART_APP` | `true` 会重新启动 Joplin，如果其窗口被关闭 |
| `NO_DECOR` | 任何值都会移除窗口装饰，使 Joplin 像一个 Web 应用程序一样填充浏览器 |
| `NO_FULL` | 任何值都将阻止窗口管理器最大化窗口 |
| `HARDEN_DESKTOP` | `true` 会禁用终端、sudo、xdg-open 和 Selkies 文件传输，仅保留 Joplin |
| `SELKIES_AUDIO_ENABLED`, `SELKIES_MICROPHONE_ENABLED` | `false` 禁用音频或麦克风流式传输 |
| `SELKIES_FRAMERATE` | 流式传输帧率上限，例如 `30` |

## 安装

此附加组件的安装非常简单，与其他任何附加组件的安装并无太大不同。

1. 将我的附加组件仓库添加到您的 Home Assistant 实例中（在监督器附加组件商店的右上角，或者如果您配置了我的 HA，则点击下方按钮）
   [![打开您的 Home Assistant 实例并显示带有预填充特定仓库 URL 的添加附加组件仓库对话框。](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2Falexbelgium%2Fhassio-addons)
1. 安装此附加组件。
1. 点击 `保存` 按钮以保存配置。
1. 将附加组件选项设置为您的偏好设置。
1. 启动附加组件。
1. 检查附加组件日志以确认一切是否正常。
1. 打开 Web UI 并调整软件选项。

## 支持

在 GitHub 上创建问题

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
