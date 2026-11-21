# Home Assistant 附加组件：Prowlarr

我在业余时间维护此及其他 Home Assistant 附加组件：跟踪上游更改、Home Assistant 本身的更改，以及在真实硬件上的测试都需要耗费大量时间（以及一些金钱）。我使用约 5-10 个我拥有的 >110 个附加组件，因此我经常安装测试机器（并购买一些测试服务，例如 VPN），即使我自己不常用的它们，也能用于故障排除和改进附加组件。

如果该附加组件为您节省时间或使您的设置更加轻松，我会非常感谢您！

[![Buy me a coffee][donation-badge]](https://www.buymeacoffee.com/alexbelgium)
[![Donate via PayPal][paypal-badge]](https://www.paypal.com/donate/?hosted_button_id=DZFULJZTP3UQA)

## 附加组件信息

![版本](https://img.shields.io/badge/dynamic/yaml?label=Version&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fprowlarr%2Fconfig.yaml)
![Ingress](https://img.shields.io/badge/dynamic/yaml?label=Ingress&query=%24.ingress&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fprowlarr%2Fconfig.yaml)
![架构](https://img.shields.io/badge/dynamic/yaml?color=success&label=Arch&query=%24.arch&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fprowlarr%2Fconfig.yaml)

[![Codacy 徽章](https://app.codacy.com/project/badge/Grade/9c6cf10bdbba45ecb202d7f579b5be0e)](https://www.codacy.com/gh/alexbelgium/hassio-addons/dashboard?utm_source=github.com&utm_medium=referral&utm_content=alexbelgium/hassio-addons&utm_campaign=Badge_Grade)
[![GitHub Super-Linter](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/weekly-supelinter.yaml?label=Check%20code%20base)](https://github.com/alexbelgium/hassio-addons/actions/workflows/weekly-supelinter.yaml)
[![构建者](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/onpush_builder.yaml?label=Builder)](https://github.com/alexbelgium/hassio-addons/actions/workflows/onpush_builder.yaml)

[donation-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee-%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white
[paypal-badge]: https://img.shields.io/badge/Donate%20via%20PayPal-0070BA?logo=paypal&style=flat&logoColor=white

_感谢所有人给我仓库点了 Star！如果您想点亮它，请点击下面的图片，它将显示在右上角。谢谢！_

[![alexbelgium/hassio-addons 的 Stargazers repository roster](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/.github/stars2.svg)](https://github.com/alexbelgium/hassio-addons/stargazers)

![下载量演变](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/prowlarr/stats.png)

## 关于

---

[Prowlarr](https://github.com/Prowlarr/Prowlarr) 是一个基于流行 arr .net/reactjs 基础栈构建的索引器管理器/代理，旨在与您的各种 PVR 应用程序进行集成。
此附加组件基于 docker 镜像 https://github.com/linuxserver/docker-prowlarr。

## 安装

---

此附加组件的安装相当简单，与其他任何附加组件的安装没有区别。

1. 将我的附加组件仓库添加到您的 Home Assistant 实例（在 supervisor 附加组件商店的右上角，或如果您已配置了我的 HA，则点击下方的按钮）
   [![打开您的 Home Assistant 实例并显示带有特定仓库 URL 预填充对话框的附加组件仓库对话框。](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2Falexbelgium%2Fhassio-addons)
1. 安装此附加组件。
1. 点击 `保存` 按钮以保存您的配置。
1. 将附加组件选项设置为您的偏好设置。
1. 启动附加组件。
1. 查看附加组件的日志，以查看一切是否顺利。
1. 打开 Web UI 并调整软件选项。

## 配置

使用附加组件 `env_vars` 选项传递额外的环境变量（名称区分大小写均可）。有关详细信息，请访问 https://github.com/alexbelgium/hassio-addons/wiki/Add-Environment-variables-to-your-Addon-2。

可通过 <http://homeassistant:PORT> 或通过侧边栏使用 Ingress 访问 Web UI。
配置文件可以通过应用程序 Web UI 进行配置，除了以下选项外。

### 选项

| 选项 | 类型 | 默认值 | 描述 |
|--------|------|---------|------|
| `PGID` | int | `0` | 文件权限的组 ID |
| `PUID` | int | `0` | 文件权限的用户 ID |
| `TZ` | str | | 时区（例如，`Europe/London`） |
| `connection_mode` | list | `ingress_noauth` | 连接模式（ingress_noauth/noingress_auth/ingress_auth） |
| `localdisks` | str | | 挂载的本地驱动器（例如，`sda1,sdb1,MYNAS`）。在驱动器后添加文件夹仅挂载该文件夹，例如 `MYNAS/public` 仅挂载该文件夹，路径为 `/mnt/MYNAS/public`。文件夹挂载需要 2026-09-19 之后发布的附加组件版本。 |
| `networkdisks` | str | | 要挂载的 SMB 共享（例如，`//SERVER/SHARE`） |
| `cifsusername` | str | | 网络共享的 SMB 用户名 |
| `cifspassword` | str | | 网络共享的 SMB 密码 |
| `cifsdomain` | str | | 网络共享的 SMB 域 |
| `smbv1` | bool | `false` | 启用 SMB v1 协议 |

### 连接模式

- `ingress_noauth` - 默认设置，为无缝的 Ingress 集成禁用身份验证。
- `noingress_auth` - 禁用 Ingress 用于外部 URL 并移除外部（无需登录）模式；在应用程序本身中设置登录（参见 Security）。
- `ingress_auth` - 启用 Ingress 并移除外部（无需登录）模式；在应用程序本身中设置登录（参见 Security）。

### 示例配置

```yaml
PGID: 0
PUID: 0
TZ: "Europe/London"
connection_mode: "ingress_noauth"
localdisks: "sda1,sdb1"
networkdisks: "//192.168.1.100/indexers"
cifsusername: "indexer"
cifspassword: "password123"
cifsdomain: "workgroup"
smbv1: false
```

### 挂载驱动器

此附加组件支持挂载本地驱动器和远程 SMB 共享：

- **本地驱动器**：请参阅 [附加组件中的本地驱动器挂载](https://github.com/alexbelgium/hassio-addons/wiki/Mounting-Local-Drives-in-Addons)。
- **远程共享**：请参阅 [附加组件中的远程共享挂载](https://github.com/alexbelgium/hassio-addons/wiki/Mounting-remote-shares-in-Addons)。

## 安全性

使用默认的 `connection_mode: ingress_noauth` 时，Prowlarr 无需身份验证即可运行，其直接端口（9696）已发布。网络中任何能够访问该端口的人都可以使用且无需登录即可更改其设置。在此情况下，附加组件在启动时会记录警告。为了安全起见，请将 `connection_mode` 设置为 `ingress_auth` 并在 Prowlarr 中设置登录（设置 > 常规 > 安全性，将 Authentication Required 设置为 Enabled，不要针对本地地址禁用），或在附加组件的网络设置中禁用端口并使用 Ingress。

## 支持

在 GitHub 上创建问题。

## 插图

---

![插图](https://wiki.servarr.com/assets/prowlarr/hist_1_history.png)

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
