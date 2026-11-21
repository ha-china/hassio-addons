# Home Assistant 附加组件：Sonarr

我在空闲时间维护此及其他 Home Assistant 附加组件：跟进上游更改、Home Assistant 更改以及在真实硬件上进行测试需要大量时间（以及一些金钱）。我大约使用了超过 110 个附加组件中的 5-10 个，因此我会安装测试机（并购买一些我本人不使用的测试服务，例如vpn）来排查问题并改进附加组件。

如果您节省了我的免费时间？不，您是说如果您使用此附加组件节省了多少时间或让您的设置变得更简单，那么您极度的感激之情将不胜感激！

[![Buy me a coffee][donation-badge]](https://www.buymeacoffee.com/alexbelgium)
[![Donate via PayPal][paypal-badge]](https://www.paypal.com/donate/?hosted_button_id=DZFULJZTP3UQA)

## 附加组件信息

![版本](https://img.shields.io/badge/dynamic/yaml?label=版本&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fsonarr%2Fconfig.yaml)
![Ingress](https://img.shields.io/badge/dynamic/yaml?label=Ingress&query=%24.ingress&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fsonarr%2Fconfig.yaml)
![架构](https://img.shields.io/badge/dynamic/yaml?color=success&label=架构&query=%24.arch&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fsonarr%2Fconfig.yaml)

[![Codacy 徽章](https://app.codacy.com/project/badge/Grade/9c6cf10bdbba45ecb202d7f579b5be0e)](https://www.codacy.com/gh/alexbelgium/hassio-addons/dashboard?utm_source=github.com&utm_medium=referral&utm_content=alexbelgium/hassio-addons&utm_campaign=Badge_Grade)
[![GitHub Super-Linter](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/weekly-supelinter.yaml?label=代码库 lint)](https://github.com/alexbelgium/hassio-addons/actions/workflows/weekly-supelinter.yaml)
[![构建者](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/onpush_builder.yaml?label=Builder)](https://github.com/alexbelgium/hassio-addons/actions/workflows/onpush_builder.yaml)

[donation-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee-%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white
[paypal-badge]: https://img.shields.io/badge/Donate%20via%20PayPal-0070BA?logo=paypal&style=flat&logoColor=white

_感谢大家星标我的仓库！要星标它，请点击下图，然后它将被置于右上角。谢谢！_

[![@alexbelgium/hassio-addons 星标者仓库名册](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/.github/stars2.svg)](https://github.com/alexbelgium/hassio-addons/stargazers)

![下载变化](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/sonarr/stats.png)

## 关于

---

[Sonarr](https://sonarr.tv/) 是一个针对 Usenet 和 BitTorrent 用户的多任务 PVR 管理器。它可以监控多个 RSS 源以获取您喜爱的剧集的最新一集，并将其抓取、整理和重命名。它还允许配置为当有更高-quality格式的可用性时自动升级已下载文件的 quality。此附加组件基于 docker 镜像 https://github.com/linuxserver/docker-sonarr

## 安装

---

此附加组件的安装非常简单，与安装任何其他附加组件没有区别。

1. 将我的附加组件仓库添加到您的 Home Assistant 实例中（在 supervisor 附加组件商店的右上角，或者如果您已配置了 HA，请访问下面的按钮）
   [![打开您的 Home Assistant 实例并显示带有预填充特定仓库 URL 的添加附加组件目录对话框。](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2Falexbelgium%2Fhassio-addons)
1. 安装此附加组件。
1. 点击“保存”按钮以存储您的配置。
1. 将附加组件选项设置为您的偏好设置。
1. 启动附加组件。
1. 检查附加组件的日志以查看一切是否顺利。
1. 打开 Web 界面，并调整软件选项。

## 配置

使用附加组件的 `env_vars` 选项传递额外的环境变量（大写或小的名称）。有关详细信息，请访问 https://github.com/alexbelgium/hassio-addons/wiki/Add-Environment-variables-to-your-Addon-2。

Web 界面可在 <http://homeassistant:PORT> 或通过 Sidebar 下的 Ingress 访问。
配置可以通过应用程序 Web 界面完成，除了以下选项外。

### 选项

| 选项 | 类型 | 默认值 | 描述 |
|--------|------|---------|-------------|
| `PGID` | int | `0` | 文件权限的组 id |
| `PUID` | int | `0` | 文件权限的用户 id |
| `TZ` | str | | 时区（例如，`Europe/London`） |
| `connection_mode` | list | `ingress_noauth` | 连接模式（ingress_noauth/noingress_auth/ingress_auth） |
| `localdisks` | str | | 要挂载的本地驱动器（例如，`sda1,sdb1,MYNAS`）。在驱动器后添加文件夹仅挂载该文件夹，例如 `MYNAS/public` 仅挂载该文件夹，路径为 `/mnt/MYNAS/public`。文件夹挂载需要附加组件版本在 2026-09-19 之后发布。 |
| `networkdisks` | str | | 要挂载的 SMB 共享（例如，`//SERVER/SHARE`） |
| `cifsusername` | str | | 网络共享的 SMB 用户名 |
| `cifspassword` | str | | 网络共享的 SMB 密码 |
| `cifsdomain` | str | | 网络共享的 SMB 域 |

### 连接模式

- `ingress_noauth` - 默认模式，禁用认证以使用无缝的 Ingress 集成。
- `noingress_auth` - 禁用 ingress 用于外部 URL 并移除外部（无登录）模式；在应用程序本身中设置登录（请查看安全部分）。
- `ingress_auth` - 启用 ingress 并移除外部（无登录）模式；在应用程序本身中设置登录（请查看安全部分）。

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

### 挂载驱动器

此附加组件支持挂载本地驱动器和远程 SMB 共享：

- **本地驱动器**: 请参阅 [在附加组件中挂载本地驱动器](https://github.com/alexbelgium/hassio-addons/wiki/Mounting-Local-Drives-in-Addons)
- **远程共享**: 请参阅 [在附加组件中挂载远程共享](https://github.com/alexbelgium/hassio-addons/wiki/Mounting-remote-shares-in-Addons)

## 安全

使用默认的 `connection_mode: ingress_noauth`，Sonarr 运行不带身份验证，并且其直接端口（8989）已发布。能够在您的网络上访问该端口任何人都可以使用而不登录并更改其设置。在这种情况下，附加组件在启动时会记录警告。要确保安全，请将 `connection_mode` 设置为 `ingress_auth` 并在 Sonarr 中设置登录（设置 > 常规 > 安全，将其身份验证要求设置为启用，而不是禁用本地地址），或者在附加组件的网络设置中禁用端口并使用 Ingress。

## 支持

在 GitHub 上创建问题

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
