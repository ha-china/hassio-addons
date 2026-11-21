# Home assistant add-on: Radarr

我利用闲暇时间为我的社区维护这个及其他 Home Assistant add-ons：跟进上游更改、Home Assistant 更改以及在实际硬件上测试耗费了大量时间（以及部分费用）。我大约使用了我的 110 个 add-ons 中的 5-10 个，因此我安装测试机器（并购买一些测试服务，如 vpn）来辅助调试和改善这些 add-ons。

如果这个 add-on 为您节省了时间或使设置变得更加容易，您的支持将对我而言非常感谢！

[![Buy me a coffee][donation-badge]](https://www.buymeacoffee.com/alexbelgium)
[![Donate via PayPal][paypal-badge]](https://www.paypal.com/donate/?hosted_button_id=DZFULJZTP3UQA)

## Addon informations

![Version](https://img.shields.io/badge/dynamic/yaml?label=Version&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fradarr%2Fconfig.yaml)
![Ingress](https://img.shields.io/badge/dynamic/yaml?label=Ingress&query=%24.ingress&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fradarr%2Fconfig.yaml)
![Arch](https://img.shields.io/badge/dynamic/yaml?color=success&label=Arch&query=%24.arch&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fradarr%2Fconfig.yaml)

[![Codacy Badge](https://app.codacy.com/project/badge/Grade/9c6cf10bdbba45ecb202d7f579b5be0e)](https://www.codacy.com/gh/alexbelgium/hassio-addons/dashboard?utm_source=github.com&utm_medium=referral&utm_content=alexbelgium/hassio-addons&utm_campaign=Badge_Grade)
[![GitHub Super-Linter](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/weekly-supelinter.yaml?label=Lint%20code%20base)](https://github.com/alexbelgium/hassio-addons/actions/workflows/weekly-supelinter.yaml)
[![Builder](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/onpush_builder.yaml?label=Builder)](https://github.com/alexbelgium/hassio-addons/actions/workflows/onpush_builder.yaml)

[donation-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee-%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white
[paypal-badge]: https://img.shields.io/badge/Donate%20via%20PayPal-0070BA?logo=paypal&style=flat&logoColor=white

_感谢大家关注我的仓库！点击下面的图片即可 star 它，它将显示在右上角。谢谢！_

[![Stargazers repo roster for @alexbelgium/hassio-addons](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/.github/stars2.svg)](https://github.com/alexbelgium/hassio-addons/stargazers)

![downloads evolution](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/radarr/stats.png)

## About

---

[Radarr](https://radarr.video/) Radarr 是一个专为用户族系和 BitTorrent 用户设计的电影集合管理器。它可以监控多个 RSS  feed 以获取新电影，并提供界面与客户端和索引器交互以下载、排序和重命名文件。它也可以配置为在库中现有文件出现更高质量的格式变体时自动升级文件质量。
此 add-on 基于 docker 镜像 https://github.com/linuxserver/docker-radarr

## Installation

---

此 add-on 的安装非常直接，与其他 add-on 的安装方式没有区别。

1. 将我的 add-ons 仓库添加到您的 home assistant 实例中（在 supervisor addons store 右上角，或者如果您已配置了 HA，请点击下方按钮）
   [![Open your Home Assistant instance and show the add add-on repository dialog with a specific repository URL pre-filled.](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2Falexbelgium%2Fhassio-addons)
1. 安装此 add-on。
1. 点击 `Save` 按钮以保存配置。
1. 将 add-on 选项设置为您的偏好设置。
1. 启动 add-on。
1. 检查 add-on 的日志以查看一切是否正常。
1. 打开 webUI 并调整软件选项。

## Configuration

使用 add-on `env_vars` 选项来传递额外的环境变量（大小写名称均可）。详见 https://github.com/alexbelgium/hassio-addons/wiki/Add-Environment-variables-to-your-Addon-2

Webui 可以找到在 `<http://homeassistant:PORT>` 或通过在 sidebar 中使用的 Ingress 访问。
配置可以通过 WebUI 的应用程序部分完成，但以下选项除外。

### Options

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `PGID` | int | `0` | 文件权限的 Group ID |
| `PUID` | int | `0` | 文件权限的 User ID |
| `TZ` | str | | 时区（例如，`Europe/London`） |
| `connection_mode` | list | `ingress_noauth` | 连接模式（ingress_noauth/noingress_auth/ingress_auth） |
| `localdisks` | str | | 本地挂载的驱动器（例如，`sda1,sdb1,MYNAS`）。在驱动器后添加文件夹以仅挂载该文件夹，例如 `MYNAS/public` 仅挂载该文件夹，到 `/mnt/MYNAS/public`。文件夹挂载需要 add-on 版本在 2026-09-19 之后发布。 |
| `networkdisks` | str | | 挂载的 SMB 共享（例如，`//SERVER/SHARE`） |
| `cifsusername` | str | | 网络共享的 SMB 用户名 |
| `cifspassword` | str | | 网络共享的 SMB 密码 |
| `cifsdomain` | str | | 网络共享的 SMB 域 |

### Connection Modes

- `ingress_noauth` - 默认模式，禁用认证以实现无缝的 Ingress 集成
- `noingress_auth` - 禁用 Ingress 和移除外部 URL，并移除外部（无登录）模式；在应用本身设置登录（见 Security）
- `ingress_auth` - 启用 Ingress 并移除外部（无登录）模式；在应用本身设置登录（见 Security）

### Example Configuration

```yaml
PGID: 0
PUID: 0
TZ: "Europe/London"
connection_mode: "ingress_noauth"
localdisks: "sda1,sdb1"
networkdisks: "//192.168.1.100/downloads,//nas.local/movies"
cifsusername: "mediauser"
cifspassword: "password123"
cifsdomain: "workgroup"
```

### Mounting Drives

此 add-on 支持挂载本地驱动器和远程 SMB 共享：

- **Local drives**: 参见 [Mounting Local Drives in Addons](https://github.com/alexbelgium/hassio-addons/wiki/Mounting-Local-Drives-in-Addons)
- **Remote shares**: 参见 [Mounting Remote Shares in Addons](https://github.com/alexbelgium/hassio-addons/wiki/Mounting-remote-shares-in-Addons)

## Security

在默认 `connection_mode: ingress_noauth` 下，Radarr 将运行在无认证模式下，并同时发布其直接端口（7878）。网络中任何能够访问该端口的人都可以无需登录和使用其设置。当此情况发生时，add-on 将在启动时记录警告。要增强安全性，请将 `connection_mode` 设置为 `ingress_auth` 并在 Radarr 中设置登录（Settings > General > Security，将 Authentication Required 设置为 Enabled，不要为本地地址禁用），或者在 add-on 的 Network 设置中禁用端口并使用 Ingress。

## Support

在 github 创建 issue

## Illustration

---

![illustration](https://dausruddin.com/wp-content/uploads/2020/05/radarr-v3-1024x515.png)

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
