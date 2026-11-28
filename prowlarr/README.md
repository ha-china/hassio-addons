# Home Assistant 插件：Prowlarr

我在闲暇时间维护此及其他 Home Assistant 插件：跟进上游更改、HA 更改以及在真实硬件上测试非常耗时（还需要花费一些金钱）。我日常使用大约 5-10 个 >110 个插件，所以我经常安装测试机器（并购买一些测试服务，如 vpn），即使我不自己使用它们，也用来排查问题和改进插件

如果这个插件为您节省时间或使您的设置变得更简单，您的支持将不胜感激！

[![Buy me a coffee][donation-badge]](https://www.buymeacoffee.com/alexbelgium)
[![Donate via PayPal][paypal-badge]](https://www.paypal.com/donate/?hosted_button_id=DZFULJZTP3UQA)

## 插件信息

![版本](https://img.shields.io/badge/dynamic/yaml?label=Version&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fprowlarr%2Fconfig.yaml)
![Ingress](https://img.shields.io/badge/dynamic/yaml?label=Ingress&query=%24.ingress&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fprowlarr%2Fconfig.yaml)
![架构平台](https://img.shields.io/badge/dynamic/yaml?color=success&label=Arch&query=%24.arch&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fprowlarr%2Fconfig.yaml)

[![Codacy Badge](https://app.codacy.com/project/badge/Grade/9c6cf10bdbba45ecb202d7f579b5be0e)](https://www.codacy.com/gh/alexbelgium/hassio-addons/dashboard?utm_source=github.com&utm_medium=referral&utm_content=alexbelgium/hassio-addons&utm_campaign=Badge_Grade)
[![GitHub Super-Linter](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/weekly-supelinter.yaml?label=Lint%20code%20base)](https://github.com/alexbelgium/hassio-addons/actions/workflows/weekly-supelinter.yaml)
[![Builder](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/onpush_builder.yaml?label=Builder)](https://github.com/alexbelgium/hassio-addons/actions/workflows/onpush_builder.yaml)

[donation-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee-%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white
[paypal-badge]: https://img.shields.io/badge/Donate%20via%20PayPal-0070BA?logo=paypal&style=flat&logoColor=white

_感谢所有人点赞过我的仓库！要点赞，请点击下面的图片，它将被移至右上角。谢谢！_

[![Stargazers repo roster for @alexbelgium/hassio-addons](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/.github/stars2.svg)](https://github.com/alexbelgium/hassio-addons/stargazers)

![下载量趋势](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/prowlarr/stats.png)

## 关于

---

[Prowlarr](https://github.com/Prowlarr/Prowlarr) 是一个基于流行的 arr .net/reactjs 基础架构构建的索引器管理器/端口代理，用于集成您的各种 PVR 应用。
该插件基于 Docker 镜像 https://github.com/linuxserver/docker-prowlarr

## 安装

---

此插件的安装非常直接，与其他插件的安装相比没有不同。

1. 将我的插件仓库添加到您的 Home Assistant 实例中（在 supervisor 附加组件商店右上角，或如果您已配置了我的 HA，则点击下面的按钮）
   [![打开您的 Home Assistant 实例并显示带有预填充特定仓库 URL 的添加插件仓库对话框。](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2Falexbelgium%2Fhassio-addons)
1. 安装此插件。
1. 点击 `保存` 按钮以存储您的配置。
1. 将插件选项设置为您偏好的选项。
1. 启动插件。
1. 检查插件日志以查看一切是否正常。
1. 打开 Web 界面并根据需要调整软件选项

## 配置

使用插件 `env_vars` 选项传递额外的环境变量（大小写名称均可）。详细了解请参阅 https://github.com/alexbelgium/hassio-addons/wiki/Add-Environment-variables-to-your-Addon-2。

Web 界面可访问 <http://homeassistant:PORT>，或通过侧边栏使用 Ingress 访问。
配置可通过应用程序 Web 界面完成，除了以下选项外。

### 选项

| 选项 | 类型 | 默认值 | 描述 |
|--------|------|---------|-------------|
| `PGID` | int | `0` | 文件权限的组 ID |
| `PUID` | int | `0` | 文件权限的用户 ID |
| `TZ` | str | | 时区（例如，`Europe/London`） |
| `connection_mode` | list | `ingress_noauth` | 连接模式 (ingress_noauth/noingress_auth/ingress_auth) |
| `localdisks` | str | | 本地驱动挂载（例如，`sda1,sdb1,MYNAS`）。在驱动器后添加一个文件夹仅挂载该文件夹，例如 `MYNAS/public` 仅在 `/mnt/MYNAS/public` 挂载该文件夹。文件夹挂载需要 2026-09-19 之后发布的插件版本。 |
| `networkdisks` | str | | 挂载 SMB 共享（例如，`//SERVER/SHARE`） |
| `cifsusername` | str | | 网络共享的 SMB 用户名 |
| `cifspassword` | str | | 网络共享的 SMB 密码 |
| `cifsdomain` | str | | 网络共享的 SMB 域 |
| `smbv1` | bool | `false` | 启用 SMB v1 协议 |

### 连接模式

- `ingress_noauth` - 默认，禁用认证以实现无缝 Ingress 集成
- `noingress_auth` - 禁用 Ingress 并移除外部 URL，移除外部（无登录）模式；在应用程序本身中设置登录（请参阅安全性）
- `ingress_auth` - 启用 Ingress 并移除外部（无登录）模式；在应用程序本身中设置登录（请参阅安全性）

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

此插件支持挂载本地驱动器和网络 SMB 共享：

- **本地驱动器**：请参阅 [插件中挂载本地驱动器](https://github.com/alexbelgium/hassio-addons/wiki/Mounting-Local-Drives-in-Addons)
- **远程共享**：请参阅 [插件中挂载远程共享](https://github.com/alexbelgium/hassio-addons/wiki/Mounting-remote-shares-in-Addons)

## 安全性

使用默认的 `connection_mode: ingress_noauth`，Prowlarr 运行时无需认证，其直接端口（9696）已发布。您的网络中的任何人都可以访问该端口，而无需登录即可使用并更改其设置。在这种情况下，插件启动时会记录警告。要确保安全，请将 `connection_mode` 设置为 `ingress_auth` 并在 Prowlarr 中设置登录（设置 > 常规 > 安全性，将 Authentication Required 设置为 Enabled，不要设置为禁用的本地地址），或者在插件网络设置中禁用端口并仅使用 Ingress。

## 支持

在 github 上创建问题

## 插图

---

![illustration](https://wiki.servarr.com/assets/prowlarr/hist_1_history.png)

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
