# Home assistant add-on: Transmission

[![Donate][donation-badge]](https://www.buymeacoffee.com/alexbelgium)
[![Donate][paypal-badge]](https://www.paypal.com/donate/?hosted_button_id=DZFULJZTP3UQA)

![Version](https://img.shields.io/badge/dynamic/yaml?label=版本&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Ftransmission%2Fconfig.yaml)
![Ingress](https://img.shields.io/badge/dynamic/yaml?label=Ingress&query=%24.ingress&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Ftransmission%2Fconfig.yaml)
![Arch](https://img.shields.io/badge/dynamic/yaml?color=success&label=Arch&query=%24.arch&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Ftransmission%2Fconfig.yaml)

[![Codacy Badge](https://app.codacy.com/project/badge/Grade/9c6cf10bdbba45ecb202d7f579b5be0e)](https://www.codacy.com/gh/alexbelgium/hassio-addons/dashboard?utm_source=github.com&utm_medium=referral&utm_content=alexbelgium/hassio-addons&utm_campaign=Badge_Grade)
[![GitHub Super-Linter](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/weekly-supelinter.yaml?label=Lint%20code%20base)](https://github.com/alexbelgium/hassio-addons/actions/workflows/weekly-supelinter.yaml)
[![Builder](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/onpush_builder.yaml?label=Builder)](https://github.com/alexbelgium/hassio-addons/actions/workflows/onpush_builder.yaml)

[donation-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee%20(no%20paypal)-%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white
[paypal-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee%20with%20Paypal-0070BA?logo=paypal&style=flat&logoColor=white

_感谢所有给我仓库星标的人！要给星标，请点击下面的图片，然后它就会在右上角。谢谢！_

[![Stargazers repo roster for @alexbelgium/hassio-addons](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/.github/stars2.svg)](https://github.com/alexbelgium/hassio-addons/stargazers)

![下载量趋势](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/transmission/stats.png)

## 关于

Transmission 是一个 BitTorrent 客户端。
此插件基于 linuxserver.io 的 [Docker 镜像](https://github.com/linuxserver/docker-transmission)。

## 安装

此插件的安装非常简单，与安装任何其他 Hass.io 插件没有区别。

1. [将我的 Hass.io 插件仓库][repository]添加到您的 Hass.io 实例。
1. 安装此插件。
1. 点击 `保存` 按钮以保存您的配置。
1. 启动插件。
1. 检查插件的日志，看看是否一切正常。
1. 仔细配置插件以满足您的需求，请参阅官方文档进行配置。

## 配置

Web UI 可以在 <http://homeassistant:9091> 或通过 Ingress 在侧边栏中访问。
配置可以通过 Web UI 进行，但以下选项除外。

### 选项

| 选项 | 类型 | 默认值 | 描述 |
|------|------|--------|-------|
| `PGID` | 整数 | `0` | 文件权限的组 ID |
| `PUID` | 整数 | `0` | 文件权限的用户 ID |
| `TZ` | 字符串 | | 时区（例如，`Europe/London`） |
| `download_dir` | 字符串 | `/share/downloads` | 完成下载的目录 |
| `incomplete_dir` | 字符串 | `/share/incomplete` | 不完整下载的目录 |
| `watch_dir` | 字符串 | | 要监视的种子文件目录 |
| `customUI` | 列表 | `flood-for-transmission` | Web UI（标准/transmission-web-control/kettu/flood-for-transmission） |
| `user` | 字符串 | | Web UI 用户名 |
| `pass` | 字符串 | | Web UI 密码 |
| `whitelist` | 字符串 | | Web 访问的 IP 白名单 |
| `DNS_server` | 字符串 | `8.8.8.8,1.1.1.1` | DNS 服务器 |
| `localdisks` | 字符串 | | 要挂载的本地驱动器（例如，`sda1,sdb1,MYNAS`） |
| `networkdisks` | 字符串 | | 要挂载的 SMB 共享（例如，`//SERVER/SHARE`） |
| `cifsusername` | 字符串 | | SMB 共享的网络用户名 |
| `cifspassword` | 字符串 | | SMB 共享的网络密码 |
| `cifsdomain` | 字符串 | | SMB 共享的网络域 |
| `smbv1` | 布尔值 | | 启用 SMB v1 协议 |

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

**高级设置**：完整的 transmission 设置可以在 `/share/transmission/settings.json` 中找到。在修改之前停止插件，因为 Transmission 在关闭时会覆盖设置。

## 问题

# 如果 settings.json 在日志中重置了 https://github.com/alexbelgium/hassio-addons/issues/1269
- 安装 Filebrowser 插件
- 删除文件夹 /homeassistant/addons_config/transmission 和 /homeassistant/addons_config/transmission-ls

[repository]: https://github.com/alexbelgium/hassio-addons