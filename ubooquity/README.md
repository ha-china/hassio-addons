# Home assistant add-on: Ubooquity

[![Donate][donation-badge]](https://www.buymeacoffee.com/alexbelgium)
[![Donate][paypal-badge]](https://www.paypal.com/donate/?hosted_button_id=DZFULJZTP3UQA)

![Version](https://img.shields.io/badge/dynamic/yaml?label=版本&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fubooquity%2Fconfig.yaml)
![Ingress](https://img.shields.io/badge/dynamic/yaml?label=Ingress&query=%24.ingress&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fubooquity%2Fconfig.yaml)
![Arch](https://img.shields.io/badge/dynamic/yaml?color=success&label=Arch&query=%24.arch&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fubooquity%2Fconfig.yaml)

[![Codacy Badge](https://app.codacy.com/project/badge/Grade/9c6cf10bdbba45ecb202d7f579b5be0e)](https://www.codacy.com/gh/alexbelgium/hassio-addons/dashboard?utm_source=github.com&utm_medium=referral&utm_content=alexbelgium/hassio-addons&utm_campaign=Badge_Grade)
[![GitHub Super-Linter](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/weekly-supelinter.yaml?label=Lint%20code%20base)](https://github.com/alexbelgium/hassio-addons/actions/workflows/weekly-supelinter.yaml)
[![Builder](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/onpush_builder.yaml?label=Builder)](https://github.com/alexbelgium/hassio-addons/actions/workflows/onpush_builder.yaml)

[donation-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee%20(no%20paypal)-%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white
[paypal-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee%20with%20Paypal-0070BA?logo=paypal&style=flat&logoColor=white

_感谢所有给我仓库星标的人！要给星标，请点击下面的图片，然后它会在右上角。谢谢！_

[![Stargazers repo roster for @alexbelgium/hassio-addons](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/.github/stars2.svg)](https://github.com/alexbelgium/hassio-addons/stargazers)

![下载趋势](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/ubooquity/stats.png)

## 关于

---

[Ubooquity by vaemendis](https://vaemendis.net/ubooquity/) 是一个免费、轻量级且易于使用的家庭服务器，用于管理您的漫画和电子书。这个插件基于 [docker 镜像](https://github.com/linuxserver/docker-ubooquity) 由 [linuxserver.io](https://www.linuxserver.io/) 提供。

Ubooquity 支持多种文件类型，尤其偏好 ePUB、CBZ、CBR 和 PDF 文件。它还支持来自图书馆管理软件 Calibre 和 ComicRack 的元数据。Ubooquity 允许您创建用户账户并为每个共享文件夹设置访问权限。

这个插件有几个可配置的选项：

- 允许挂载本地外部驱动器，或从插件中挂载 SMB 共享（会降低性能）
- **非常重要，可能会崩溃系统**：设置 Java 的最大内存使用量。分配给 Ubooquity 的内存量取决于您运行它的硬件。如果这个量太小，您可能会在执行内存密集型操作时饱和它，并得到 "java.lang.OutOfMemoryError: Java heap space" 错误。如果分配的量对于您的系统太高，它将崩溃 Home Assistant，您需要手动重启。值是以兆字节为单位的数字（只需输入数字，不要加 MB）。

建议启用 OPDS 服务器选项，然后您可以通过移动应用连接到您的漫画/电子书服务器（我在 iOS 上使用 [Chunky](https://apps.apple.com/fr/app/chunky-comic-reader/id663567628)（付费），在 Android 上使用 [Kuboo](https://play.google.com/store/apps/details?id=com.sethchhim.kuboo&hl=fr&gl=US)（免费））。

## 安装

这个插件的安装非常简单，与安装任何其他 Hass.io 插件没有区别。

1. [将我的 Hass.io 插件仓库][repository] 添加到您的 Hass.io 实例。
1. 安装这个插件。
1. 点击 `保存` 按钮以保存您的配置。
1. 启动插件。
1. 检查插件的日志以查看是否一切正常。
1. 打开 WebUI，设置管理员密码并调整管理选项

## 配置

Webui 可以在 <http://homeassistant:PORT> 或通过 Ingress 通过侧边栏访问。
默认的用户名/密码在启动日志中描述。
配置可以通过 WebUI 应用进行，除了以下选项。

### 选项

| 选项 | 类型 | 默认 | 描述 |
|------|------|------|------|
| `PGID` | int | `0` | 文件权限的组 ID |
| `PUID` | int | `0` | 文件权限的用户 ID |
| `TZ` | str | | 时区（例如，`Europe/London`） |
| `maxmem` | int | `200` | Java 的最大内存使用量（MB） - **关键设置** |
| `ssl` | bool | `false` | 为 Web 界面启用 HTTPS |
| `certfile` | str | `fullchain.pem` | TLS 证书的路径 |
| `keyfile` | str | `privkey.pem` | TLS 密钥文件的路径 |
| `theme` | list | `default` | 主题选择（default/comixology2/plextheme-master） |
| `localdisks` | str | | 要挂载的本地驱动器（例如，`sda1,sdb1,MYNAS`） |
| `networkdisks` | str | | 要挂载的 SMB 共享（例如，`//SERVER/SHARE`） |
| `cifsusername` | str | | SMB 网络共享的用户名 |
| `cifspassword` | str | | SMB 网络共享的密码 |
| `cifsdomain` | str | | SMB 网络共享的域 |
| `smbv1` | bool | `false` | 启用 SMB v1 协议 |

**重要**：`maxmem` 设置控制 Java 堆空间。太低会导致 OutOfMemoryError；太高可能会崩溃 Home Assistant。默认 200MB 对于 RPi3B+，2GB+ 内存的系统建议 512MB。

### 示例配置

```yaml
PGID: 0
PUID: 0
TZ: "Europe/London"
maxmem: 512
ssl: false
certfile: "fullchain.pem"
keyfile: "privkey.pem"
theme: "comixology2"
localdisks: "sda1,sdb1"
networkdisks: "//192.168.1.100/comics,//nas.local/books"
cifsusername: "comicuser"
cifspassword: "password123"
cifsdomain: "workgroup"
smbv1: false
```

### 挂载驱动器

这个插件支持挂载本地驱动器和远程 SMB 共享：

- **本地驱动器**：参见 [在插件中挂载本地驱动器](https://github.com/alexbelgium/hassio-addons/wiki/Mounting-Local-Drives-in-Addons)
- **远程共享**：参见 [在插件中挂载远程共享](https://github.com/alexbelgium/hassio-addons/wiki/Mounting-remote-shares-in-Addons)

网络磁盘挂载到 `/mnt/share_name`。

## 支持

在 [repository github][repository] 上创建问题，或在 [home assistant 论坛](https://community.home-assistant.io/t/home-assistant-addon-ubooquity/283811) 上提问

## 插图

---

![alt text](https://vaemendis.net/ubooquity/data/images/screenshots/books_library.jpg)

[repository]: https://github.com/alexbelgium/hassio-addons