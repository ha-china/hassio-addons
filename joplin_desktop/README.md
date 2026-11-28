# Home assistant 插件：Joplin Desktop

我利用空闲时间维护此及其他 Home Assistant 插件：追踪上游更改、适应 Home Assistant 更新并在真实硬件上测试非常耗时（且花了一些钱）。我大约使用了超过 110 个插件中的 5-10 个，因此我经常安装测试用机（并购买一些测试服务，如 vpn），即使我不亲自使用它们，也用来调试和改进插件。

如果此插件为您节省时间或使 setup 更简单，我将不胜感激，非常感谢您的支持！

[![Buy me a coffee][donation-badge]](https://www.buymeacoffee.com/alexbelgium)
[![Donate via PayPal][paypal-badge]](https://www.paypal.com/donate/?hosted_button_id=DZFULJZTP3UQA)

## 插件信息

![Version](https://img.shields.io/badge/dynamic/yaml?label=Version&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fjoplin_desktop%2Fconfig.yaml)
![Ingress](https://img.shields.io/badge/dynamic/yaml?label=Ingress&query=%24.ingress&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fjoplin_desktop%2Fconfig.yaml)
![Arch](https://img.shields.io/badge/dynamic/yaml?color=success&label=Arch&query=%24.arch&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fjoplin_desktop%2Fconfig.yaml)

[![Codacy Badge](https://app.codacy.com/project/badge/Grade/9c6cf10bdbba45ecb202d7f579b5be0e)](https://www.codacy.com/gh/alexbelgium/hassio-addons/dashboard?utm_source=github.com&utm_medium=referral&utm_content=alexbelgium/hassio-addons&utm_campaign=Badge_Grade)
[![GitHub Super-Linter](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/weekly-supelinter.yaml?label=Lint%20code%20base)](https://github.com/alexbelgium/hassio-addons/actions/workflows/weekly-supelinter.yaml)
[![Builder](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/onpush_builder.yaml?label=Builder)](https://github.com/alexbelgium/hassio-addons/actions/workflows/onpush_builder.yaml)

[donation-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee-%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white
[paypal-badge]: https://img.shields.io/badge/Donate%20via%20PayPal-0070BA?logo=paypal&style=flat&logoColor=white

_感谢大家给我的Repo星标！要给它星标，请点击下方的图片，然后它将被移至右上角。谢谢！_

[![Stargazers repo roster for @alexbelgium/hassio-addons](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/.github/stars2.svg)](https://github.com/alexbelgium/hassio-addons/stargazers)

![downloads evolution](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/joplin_desktop/stats.png)

## 简介

[Joplin](https://joplinapp.org) 是一个开源的笔记和待办应用程序。此插件运行完整的 Joplin **桌面版**应用，并通过 Selkies 将其传输到您的浏览器，这样您就可以在任何设备上使用它，而无需安装任何东西。

此插件基于 Docker 镜像 <https://github.com/linuxserver/docker-joplin>。

如果您只需要在不同 Joplin 应用之间同步笔记，[Joplin Server](https://github.com/alexbelgium/hassio-addons/tree/master/joplin) 插件更轻量。两者配合使用：请在 Joplin 的同步设置中将此桌面应用指向您的 Joplin Server。

仅支持 amd64 架构，因为 Joplin 没有发布 Linux arm64 构建。

## 配置

推荐的配置方式是通过 ingress（侧边栏面板）。您还可以在插件的网络设置中启用 HTTPS 端口 3001，并打开 <https://homeassistant:3001>；浏览器传输功能需要 HTTPS，因此请勿直接使用纯 HTTP 端口 3000——它仅 meant 放在您自己的 TLS 反向代理之后。如果您打开一个端口，请设置 `PASSWORD`：此时 Web 界面将要求用户 `abc` 及其密码。这种基本身份验证仅适用于受信任的本地网络；如需从 Internet 访问，请使用具有更强认证的反向代理。

Joplin 的用户配置文件（笔记、设置、插件）存储在 `data_location`，默认为 `/config/data`，这是您在 Home Assistant 主机上 `/addon_configs/` 目录下的插件文件夹。它在重启和更新期间保持存在，并包含在备份中。

使用插件的 `env_vars` 选项传递额外的环境变量（大写或小写名称均可）。详细信息请参阅 <https://github.com/alexbelgium/hassio-addons/wiki/Add-Environment-variables-to-your-Addon-2>。

```yaml
PUID: 1000 # 桌面用户及其数据文件夹的所有者用户 ID
PGID: 1000 # 桌面用户的组 ID
TZ: Europe/Paris # 时区，按照国家/城市设置，参考 https://manpages.ubuntu.com/manpages/trusty/man3/DateTime::TimeZone::Catalog.3pm.html
KEYBOARD: fr-fr-azerty # 键盘布局
PASSWORD: "mypassword" # Web 界面上的基本身份验证（用户 abc）。如果您打开端口 3001，请设置此项；仅受信任的本地网络
DRINODE: /dev/dri/renderD128 # 用于渲染和编码的 GPU 设备，如果默认值不起用
data_location: /config/data # Joplin 用户配置文件存储的位置；必须位于 /config, /share, /data 或 /mnt 内
additional_apps: "" # 每次启动时安装的逗号分隔 apt 软件包（否则不持久化）
use_own_certs: false # 使用 /ssl 中的自有证书用于 HTTPS 端口 3001
certfile: fullchain.pem # /ssl 中的证书文件
keyfile: privkey.pem # /ssl 中的密钥文件
DNS_server: 8.8.8.8 # 保持空白以使用路由器的 DNS
localdisks: sda1 # 放您需要挂载的硬盘名称，用逗号分隔，或使用其标签。例如 sda1, sdb1, MYNAS... 仅挂载文件夹时添加，例如 MYNAS/public 挂载到 /mnt/MYNAS/public
networkdisks: "//SERVER/SHARE" # 可选，列出要挂载的 smb 服务器，用逗号分隔
cifsusername: "username" # 可选，smb 用户名，对所有 smb 共享通用
cifspassword: "password" # 可选，smb 密码
cifsdomain: "domain" # 可选，允许为 smb 共享设置域
```

### 有用的上游变量

这些由 LinuxServer Selkies 基础镜像读取，可通过 `env_vars` 设置。完整列表位于 <https://docs.linuxserver.io/images/docker-joplin>。

| 变量 | 效果 |
| --- | --- |
| `RESTART_APP` | `true` 会在 Joplin 窗口关闭时自动重启 Joplin |
| `NO_DECOR` | 任何值都会移除窗口装饰，使 Joplin 像 Web 应用一样填充浏览器 |
| `NO_FULL` | 任何值都会阻止窗口管理器将窗口最大化 |
| `HARDEN_DESKTOP` | `true` 会禁用终端、sudo、xdg-open 和 Selkies 文件传输，仅保留 Joplin |
| `SELKIES_AUDIO_ENABLED`, `SELKIES_MICROPHONE_ENABLED` | `false` 会禁用音频或麦克风传输 |
| `SELKIES_FRAMERATE` | 传输帧率上限，例如 `30` |

## 安装

此插件的安装非常简单，与其他任何插件的安装方式没有不同。

1. 将我的插件仓库添加到您的 home assistant 实例中（在 supervisor 插件商店右上角，或如果您已配置了我的 HA，请点击下方的按钮）
   [![Open your Home Assistant instance and show the add add-on repository dialog with a specific repository URL pre-filled.](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2Falexbelgium%2Fhassio-addons)
2. 安装此插件。
3. 点击 `Save` 按钮以保存配置。
4. 将插件选项设置为您的偏好设置。
5. 启动插件。
6. 查看插件日志，确认一切正常。
7. 打开 Web 界面，调整软件选项

## 支持

在 github 上创建问题

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
