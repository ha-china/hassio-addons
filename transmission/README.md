# Home Assistant 插件：Transmission

我在空闲时间维护此插件和其他 Home Assistant 插件：跟进上游更新、HA 更新以及在真实硬件上进行测试需要耗费大量时间（以及一些金钱）。我使用约 5-10 个我拥有的 >110 个插件，因此我经常安装测试机器（并购买一些我自己不使用的测试服务，如 vpn）来排查和改进行为插件。

如果您使用此插件节省了时间或让设置更简单，我将不胜感激！

[![Buy me a coffee][donation-badge]](https://www.buymeacoffee.com/alexbelgium)
[![Donate via PayPal][paypal-badge]](https://www.paypal.com/donate/?hosted_button_id=DZFULJZTP3UQA)

## 插件信息

![版本](https://img.shields.io/badge/dynamic/yaml?label=版本&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Ftransmission%2Fconfig.yaml)
![Ingress](https://img.shields.io/badge/dynamic/yaml?label=Ingress&query=%24.ingress&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Ftransmission%2Fconfig.yaml)
![Arch](https://img.shields.io/badge/dynamic/yaml?color=success&label=Arch&query=%24.arch&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Ftransmission%2Fconfig.yaml)

[![Codacy Badge](https://app.codacy.com/project/badge/Grade/9c6cf10bdbba45ecb202d7f579b5be0e)](https://www.codacy.com/gh/alexbelgium/hassio-addons/dashboard?utm_source=github.com&utm_medium=referral&utm_content=alexbelgium/hassio-addons&utm_campaign=Badge_Grade)
[![GitHub Super-Linter](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/weekly-supelinter.yaml?label=Lint%20code%20base)](https://github.com/alexbelgium/hassio-addons/actions/workflows/weekly-supelinter.yaml)
[![Builder](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/onpush_builder.yaml?label=Builder)](https://github.com/alexbelgium/hassio-addons/actions/workflows/onpush_builder.yaml)

[donation-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee-%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white
[paypal-badge]: https://img.shields.io/badge/Donate%20via%20PayPal-0070BA?logo=paypal&style=flat&logoColor=white

_感谢 everyone 给我的仓库点星！要点星，请点击下方的图片，它将显示在右上角。感谢！_

[![Stargazers repo roster for @alexbelgium/hassio-addons](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/.github/stars2.svg)](https://github.com/alexbelgium/hassio-addons/stargazers)

![downloads evolution](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/transmission/stats.png)

## 关于

Transmission 是一个 bittorrent 客户端。
此插件基于 linuxserver.io 的 [docker 镜像](https://github.com/linuxserver/docker-transmission)。

## 安装

此插件的安装非常简单，与安装任何其他 Hass.io 插件没有区别。

1. 将我的插件存储库添加到您的 home assistant 实例（在 supervisor 插件商店右上角，或者如果您已配置了我的 HA，请点击下方的按钮）
   [![Open your Home Assistant instance and show the add add-on repository dialog with a specific repository URL pre-filled.](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2Falexbelgium%2Fhassio-addons)
1. 安装此插件。
1. 点击 `保存` 按钮以保存您的配置。
1. 启动插件。
1. 查看插件日志以确认一切正常。
1. 根据偏好仔细配置插件，有关详细信息请参阅官方文档。

## 配置

使用插件的 `env_vars` 选项传递额外的环境变量（大小写不分）。有关详细信息，请参见 https://github.com/alexbelgium/hassio-addons/wiki/Add-Environment-variables-to-your-Addon-2。

Webui 位于 <http://homeassistant:9091> 或通过侧边栏使用 Ingress 访问。
配置可以通过应用 Webui 完成，除了以下选项外。

### 选项

| 选项 | 类型 | 默认值 | 描述 |
|--------|------|---------|-------------|
| `PGID` | int | `0` | 文件权限的组 ID |
| `PUID` | int | `0` | 文件权限的用户 ID |
| `TZ` | str | | 时区（例如，`Europe/London`） |
| `download_dir` | str | `/share/downloads` | 已完成下载的目录 |
| `incomplete_dir` | str | `/share/incomplete` | 未完成的下载目录 |
| `incomplete_dir_enabled` | bool | `true` | 设置为 `false` 以永久禁用不完整下载目录。由于每个插件重启都会覆盖 Transmission 自身的 Webui 对此的切换，因此请使用此选项 |
| `watch_dir` | str | | 监控 torrent 文件的目录 |
| `customUI` | list | `flood-for-transmission` | Webui 界面 (standard/transmission-web-control/kettu/flood-for-transmission) |
| `user` | str | | Webui 用户名 |
| `pass` | str | | Webui 密码 |
| `whitelist` | str | | web 访问的 IP 白名单 |
| `DNS_server` | str | `8.8.8.8,1.1.1.1` | DNS 服务器 |
| `localdisks` | str | | 要挂载的本地驱动器（例如，`sda1,sdb1,MYNAS`）。在驱动器后添加文件夹以仅挂载该文件夹，例如 `MYNAS/public` 仅挂载该文件夹，路径为 `/mnt/MYNAS/public`。文件夹挂载需要 2026-09-19 之后发布的插件版本。|
| `networkdisks` | str | | 要挂载的 SMB 共享（例如，`//SERVER/SHARE`） |
| `cifsusername` | str | | 网络共享的 SMB 用户名 |
| `cifspassword` | str | | 网络共享的 SMB 密码 |
| `cifsdomain` | str | | 网络共享的 SMB 域 |
| `smbv1` | bool | | 启用 SMB v1 协议 |

### 示例配置

```yaml
PGID: 0
PUID: 0
TZ: "Europe/London"
download_dir: "/media/downloads"
incomplete_dir: "/media/incomplete"
watch_dir: "/media/torrents"
customUI: "flood-for-transmission"
user: "transmission"
pass: "secure_password"
localdisks: "sda1,sdb1"
networkdisks: "//192.168.1.100/downloads"
cifsusername: "dluser"
cifspassword: "password123"
cifsdomain: "workgroup"
```

### 挂载驱动器

此插件支持挂载本地驱动器和远程 SMB 共享：

- **本地驱动器**：请参阅 [在插件中挂载本地驱动器](https://github.com/alexbelgium/hassio-addons/wiki/Mounting-Local-Drives-in-Addons)
- **远程共享**：请参阅 [在插件中挂载远程共享](https://github.com/alexbelgium/hassio-addons/wiki/Mounting-remote-shares-in-Addons)

**高级设置**：完整的 transmission 设置位于 `/share/transmission/settings.json`。在修改之前请停止插件，因为Transmission 在关闭时会覆盖设置。

## 问题

# 如果 settings.json 在日志中重置 https://github.com/alexbelgium/hassio-addons/issues/1269
- 安装 Filebrowser 插件
- 删除 /homeassistant/addons_config/transmission 和 /homeassistant/addons_config/transmission-ls 文件夹

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
