# Home Assistant 插件：Sonarr

我在空闲时间维护此插件及其他 Home Assistant 插件：跟上上游变更、HA 变更，并在真实硬件上测试需要大量时间（以及一些金钱）。我使用约 5-10 个我的 110+ 个插件，因此我安装测试机器（并购买一些测试服务如 vpn），这些我不自己使用，以便调试和改进插件

如果此插件为您节省时间或使您的设置更简单，我将不胜感激您的支持！

[![Buy me a coffee][donation-badge]](https://www.buymeacoffee.com/alexbelgium)
[![Donate via PayPal][paypal-badge]](https://www.paypal.com/donate/?hosted_button_id=DZFULJZTP3UQA)

## 插件信息

![Version](https://img.shields.io/badge/dynamic/yaml?label=Version&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fsonarr%2Fconfig.yaml)
![Ingress](https://img.shields.io/badge/dynamic/yaml?label=Ingress&query=%24.ingress&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fsonarr%2Fconfig.yaml)
![Arch](https://img.shields.io/badge/dynamic/yaml?color=success&label=Arch&query=%24.arch&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fsonarr%2Fconfig.yaml)

[![Codacy Badge](https://app.codacy.com/project/badge/Grade/9c6cf10bdbba45ecb202d7f579b5be0e)](https://www.codacy.com/gh/alexbelgium/hassio-addons/dashboard?utm_source=github.com&utm_medium=referral&utm_content=alexbelgium/hassio-addons&utm_campaign=Badge_Grade)
[![GitHub Super-Linter](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/weekly-supelinter.yaml?label=Lint%20code%20base)](https://github.com/alexbelgium/hassio-addons/actions/workflows/weekly-supelinter.yaml)
[![Builder](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/onpush_builder.yaml?label=Builder)](https://github.com/alexbelgium/hassio-addons/actions/workflows/onpush_builder.yaml)

[donation-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee-%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white
[paypal-badge]: https://img.shields.io/badge/Donate%20via%20PayPal-0070BA?logo=paypal&style=flat&logoColor=white

_感谢大家给我的仓库赐星！要赐星，点击下方的图片，它将显示在右上角。谢谢！_

[![Stargazers repo roster for @alexbelgium/hassio-addons](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/.github/stars2.svg)](https://github.com/alexbelgium/hassio-addons/stargazers)

![downloads evolution](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/sonarr/stats.png)

## 简介

---

[Sonarr](https://sonarr.tv/) 是面向 Usenet 和 BitTorrent 用户的 PVR。它可以监控多个 RSS 频道以获取您最喜欢的电视剧集的最新节目，并将抓取、排序和重命名它们。它还可以配置为在获得更好的质量格式时，自动升级已下载文件的质量。
此插件基于 docker 镜像 https://github.com/linuxserver/docker-sonarr

## 安装

---

此插件的安装非常简单，与其他插件安装相比并无不同。

1. 将我的插件仓库添加到您的 home assistant 实例中（在 supervisor addons 商店右上角，或者如果您已配置我的 HA，请单击下方按钮）
   [![Open your Home Assistant instance and show the add add-on repository dialog with a specific repository URL pre-filled.](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2Falexbelgium%2Fhassio-addons)
1. 安装此插件。
1. 单击 `Save` 按钮以保存您的配置。
1. 将插件选项设置为您的首选设置
1. 启动插件。
1. 检查插件日志以确保一切正常。
1. 打开 webUI 并调整软件选项

## 配置

使用插件 `env_vars` 选项传递额外的环境变量（大写或小写名称均可）。详见 https://github.com/alexbelgium/hassio-addons/wiki/Add-Environment-variables-to-your-Addon-2 了解更多细节。

Webui 可以通过 <http://homeassistant:PORT> 找到，或通过使用 Ingress 的侧边栏访问。
配置可以通过 app webUI 完成，除了以下选项外均为如此。

### 选项

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `PGID` | int | `0` | 文件权限的组 ID |
| `PUID` | int | `0` | 文件权限的用户 ID |
| `TZ` | str | | 时区（例如，`Europe/London`） |
| `connection_mode` | list | `ingress_noauth` | 连接模式（ingress_noauth/noingress_auth/ingress_auth） |
| `localdisks` | str | | 本地驱动器（例如，`sda1,sdb1,MYNAS`）。在驱动器后添加文件夹以仅挂载该文件夹，例如 `MYNAS/public` 仅挂载该文件夹，路径为 `/mnt/MYNAS/public`。文件夹挂载需要在 2026-09-19 之后发布的插件版本中支持。 |
| `networkdisks` | str | | 挂载的 SMB 共享（例如，`//SERVER/SHARE`） |
| `cifsusername` | str | | SMB 共享的网络用户名 |
| `cifspassword` | str | | SMB 共享的密码 |
| `cifsdomain` | str | | SMB 共享的域 |

### 连接模式

- `ingress_noauth` - 默认，禁用以无缝集成 ingress 的认证
- `noingress_auth` - 禁用 ingress 以使用外部 URL 并移除外部（无登录）模式；在应用内设置登录（见安全）
- `ingress_auth` - 启用 ingress 并移除外部（无登录）模式；在应用内设置登录（见安全）

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

此插件支持挂载本地驱动器和安全远程 SMB 共享：

- **本地驱动器**：参见 [在插件中挂载本地驱动器](https://github.com/alexbelgium/hassio-addons/wiki/Mounting-Local-Drives-in-Addons)
- **远程共享**：参见 [在插件中挂载远程共享](https://github.com/alexbelgium/hassio-addons/wiki/Mounting-remote-shares-in-Addons)

## 安全

默认 `connection_mode: ingress_noauth` 模式下，Sonarr 运行时无需认证，且其直接端口（8989）已发布。网络中任何能够访问该端口的人都可以无需登录并更改其设置。插件在启动时对此情况记录警告。要确保安全，请将 `connection_mode` 设置为 `ingress_auth` 并在 Sonarr 中设置登录（设置 > 通用 > 安全，将 Authentication Required 设置为 Enabled，不要为本地地址禁用），或在插件网络设置中禁用端口并使用 Ingress。

## 支持

在 github 上创建问题

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
