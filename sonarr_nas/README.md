# Home Assistant 附加应用：Sonarr

我在空闲时间维护此及其他 Home Assistant 附加应用：跟进上游变更、Home Assistant 的变更，以及在真实硬件上进行测试需要耗费大量时间（以及部分金钱）。我大约使用了超过 110 个附加应用中的 5-10 个，因此我经常安装测试机器（并购买一些测试服务，如 VPN），以便自行不使用这些机器来测试和改进附加应用

如果您觉得这个附加应用节省了您的时间，或者让您的设置变得更容易，我会非常感激您的支持！

[![Buy me a coffee][donation-badge]](https://www.buymeacoffee.com/alexbelgium)
[![Donate via PayPal][paypal-badge]](https://www.paypal.com/donate/?hosted_button_id=DZFULJZTP3UQA)
[![Buy me a coffee](https://img.shields.io/badge/Buy%20me%20a%20coffee-%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white)](https://www.buymeacoffee.com/alexbelgium)
[![Donate via PayPal](https://img.shields.io/badge/Donate%20via%20PayPal-0070BA?logo=paypal&style=flat&logoColor=white)](https://www.paypal.com/donate/?hosted_button_id=DZFULJZTP3UQA)

## 附加应用信息

![版本](https://img.shields.io/badge/dynamic/yaml?label=Version&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fsonarr%2Fconfig.yaml)
![Ingress](https://img.shields.io/badge/dynamic/yaml?label=Ingress&query=%24.ingress&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fsonarr%2Fconfig.yaml)
![Arch](https://img.shields.io/badge/dynamic/yaml?color=success&label=Arch&query=%24.arch&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fsonarr%2Fconfig.yaml)

[![Codacy Badge](https://app.codacy.com/project/badge/Grade/9c6cf10bdbba45ecb202d7f579b5be0e)](https://www.codacy.com/gh/alexbelgium/hassio-addons/dashboard?utm_source=github.com&utm_medium=referral&utm_content=alexbelgium/hassio-addons&utm_campaign=Badge_Grade)
[![GitHub Super-Linter](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/weekly-supelinter.yaml?label=Lint%20code%20base)](https://github.com/alexbelgium/hassio-addons/actions/workflows/weekly-supelinter.yaml)
[![Builder](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/onpush_builder.yaml?label=Builder)](https://github.com/alexbelgium/hassio-addons/actions/workflows/onpush_builder.yaml)

[donation-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee-%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white
[paypal-badge]: https://img.shields.io/badge/Donate%20via%20PayPal-0070BA?logo=paypal&style=flat&logoColor=white

_谢谢所有为我仓库星标 (star) 的朋友们！想要星标，请点击下方的图片，那样它就会出现在右上角。谢谢！_

[![Stargazers repo roster for @alexbelgium/hassio-addons](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/.github/stars2.svg)](https://github.com/alexbelgium/hassio-addons/stargazers)

![downloads evolution](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/sonarr/stats.png)

## 关于

---

[Sonarr](https://sonarr.tv/) 是一个面向 Usenet 和 BitTorrent 用户的 PVR（个人录像机）。它可以监控多个 RSS 源，获取您最喜欢的剧集的新剧集，并以抓取、排序和重命名的方式处理它们。此外，还可以配置它在下载后如果有更高品质的格式可用时自动升级现有文件的品质。
此附加应用基于 docker 镜像 https://github.com/linuxserver/docker-sonarr

## 安装

---

此附加应用的安装非常简单直观，与其他任何附加应用的安装没有区别。

1. 将我的附加应用仓库添加到您的 Home Assistant 实例中（在 supervisor 附加应用商店右上角，或者如果您已配置了 Home Assistant，请点击下方的按钮）
   [![Open your Home Assistant instance and show the add add-on repository dialog with a specific repository URL pre-filled.](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2Falexbelgium%2Fhassio-addons)
1. 安装此附加应用。
1. 点击 `保存` 按钮以存储您的配置。
1. 将附加应用的选项设置为您首选项。
1. 启动附加应用。
1. 检查附加应用的日志，以查看一切是否正常。
1. 打开 Web 界面并调整软件相关选项。

## 配置

使用附加应用 `env_vars` 选项传递额外的环境变量（大小写不限）。详见 https://github.com/alexbelgium/hassio-addons/wiki/Add-Environment-variables-to-your-Addon-2。

Web 界面可在 <http://homeassistant:PORT> 或通过侧边栏的 Ingress 访问。
配置可以通过应用 Web 界面完成，除了以下选项外：

### 选项

| 选项 | 类型 | 默认值 | 描述 |
|------|------|--------|------|
| `PGID` | int | `0` | 文件权限的组 ID |
| `PUID` | int | `0` | 文件权限的用户 ID |
| `TZ` | str | | 时区（例如 `Europe/London`） |
| `connection_mode` | list | `ingress_noauth` | 连接模式（ingress_noauth/noingress_auth/ingress_auth） |
| `localdisks` | str | | 本地分区要挂载的路径（例如 `sda1,sdb1,MYNAS`）。在分区后附加文件夹仅挂载该文件夹，例如 `MYNAS/public` 仅挂载该文件夹，路径为 `/mnt/MYNAS/public`。需要 2026-09-19 之后发布的附加应用版本。 |
| `networkdisks` | str | | 要挂载的 SMB 共享（例如 `//SERVER/SHARE`） |
| `cifsusername` | str | | 网络共享的 SMB 用户名 |
| `cifspassword` | str | | 网络共享的 SMB 密码 |
| `cifsdomain` | str | | 网络共享的 SMB 域 |

### 连接模式

- `ingress_noauth` - 默认模式，禁用身份验证以支持无缝的 Ingress 集成功能
- `noingress_auth` - 禁用 Ingress 支持外部 URL，启用身份验证
- `ingress_auth` - 启用 Ingress 和身份验证

### 示例配置

```yaml
PGID: 0
PUID: 0
TZ: "Europe/London"
connection_mode: "ingress_noauth"
localdisks: "sda1,sdb1"
networkdisks: "//192.168.1.100/downloads,//nas.local/tv"
cifsusername: "mediauser"
cifspassword: "password123"
cifsdomain: "workgroup"
```

### 挂载分区

此附加应用支持同时挂载本地分区和远程 SMB 共享：

- **本地分区**：请参阅 [附加应用中挂载本地分区](https://github.com/alexbelgium/hassio-addons/wiki/Mounting-Local-Drives-in-Addons)
- **远程共享**：请参阅 [附加应用中挂载远程共享](https://github.com/alexbelgium/hassio-addons/wiki/Mounting-remote-shares-in-Addons)

## 支持

在 GitHub 上创建问题 (issue)

## 插图

---

![illustration](https://b0b.fr/wp-content/uploads/2016/02/Sonarr-1-1000x924.jpg)

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
