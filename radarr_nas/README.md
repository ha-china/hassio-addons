# Home Assistant 插件：Radarr

我在空闲时间维护此及其他 Home Assistant 插件：追踪上游更新、HA 版本变更以及在真实硬件上进行测试都需要大量时间（以及一些金钱）。我约在使用中 5-10 个超过 110 个插件中，因此我拥有测试机器并购买我不亲自使用的测试服务（如 VPN）来排查问题和改进插件。

如果此插件为您节省时间或使设置更简单，我将不胜感激您的支持！

[![Buy me a coffee][donation-badge]](https://www.buymeacoffee.com/alexbelgium)
[![Donate via PayPal][paypal-badge]](https://www.paypal.com/donate/?hosted_button_id=DZFULJZTP3UQA)

## 插件信息

![版本](https://img.shields.io/badge/dynamic/yaml?label=Version&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fradarr%2Fconfig.yaml)
![代理入口](https://img.shields.io/badge/dynamic/yaml?label=Ingress&query=%24.ingress&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fradarr%2Fconfig.yaml)
![架构](https://img.shields.io/badge/dynamic/yaml?color=success&label=Arch&query=%24.arch&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fradarr%2Fconfig.yaml)

[![Codacy 徽章](https://app.codacy.com/project/badge/Grade/9c6cf10bdbba45ecb202d7f579b5be0e)](https://www.codacy.com/gh/alexbelgium/hassio-addons/dashboard?utm_source=github.com&utm_medium=referral&utm_content=alexbelgium/hassio-addons&utm_campaign=Badge_Grade)
[![GitHub Super-Linter](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/weekly-supelinter.yaml?label=代码库检查)](https://github.com/alexbelgium/hassio-addons/actions/workflows/weekly-supelinter.yaml)
[![构建器](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/onpush_builder.yaml?label=构建器)](https://github.com/alexbelgium/hassio-addons/actions/workflows/onpush_builder.yaml)

[donation-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee-%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white
[paypal-badge]: https://img.shields.io/badge/Donate%20via%20PayPal-0070BA?logo=paypal&style=flat&logoColor=white

_感谢大家 starred 我的仓库！要 Star 它，点击下方图片，它将出现在右上角。谢谢！_

[![@alexbelgium/hassio-addons 仓库 Stargazers 名册](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/.github/stars2.svg)](https://github.com/alexbelgium/hassio-addons/stargazers)

![下载量趋势](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/radarr/stats.png)

## 简介

---

[Radarr](https://radarr.video/) 是面向 Usenet 和 BitTorrent 用户的电影收藏管理器。它可以监控多个 RSS  feeds 寻找新电影，并能够与客户端和索引器交互以抓取、排序和重命名文件。它还可以配置为在库中现有文件获得更高质量的格式时自动升级。
此插件基于docker镜像 https://github.com/linuxserver/docker-radarr。

## 安装

---

此插件的安装非常简单，与其他任何插件的安装没有区别。

1. 将我的插件仓库添加到您的 Home Assistant 实例（在 Supervisor 插件商店右上角，或者如果您已配置了我的 HA，请点 bikes 下方按钮）
   [![打开您的 Home Assistant 实例并显示带有预填充特定仓库 URL 的添加插件仓库对话框。](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fradarr)
   1. 安装此插件。
   1. 点击 `保存` 按钮以存储您的配置。
   1. 将插件选项设置为您的偏好设置。
   1. 启动插件。
   1. 检查插件日志以确保一切顺利。
   1. 打开 Web UI 并调整软件选项。

## 配置

使用插件的 `env_vars` 选项传递额外的环境变量（名称可为大写或小写）。有关详细信息，请参阅 https://github.com/alexbelgium/hassio-addons/wiki/在插件中添加工环境变量-2。

Web UI 可在 <http://homeassistant:PORT> 或通过侧边栏的 Ingress 找到。
配置可以通过应用程序的 Web UI 进行，除了以下选项外。

### 选项

| 选项 | 类型 | 默认值 | 描述 |
|--------|------|---------|-------------|
| `PGID` | int | `0` | 文件权限的组 ID |
| `PUID` | int | `0` | 文件权限的用户 ID |
| `TZ` | str | | 时区（例如，`Europe/London`） |
| `connection_mode` | list | `ingress_noauth` | 连接模式（ingress_noauth/noingress_auth/ingress_auth） |
| `localdisks` | str | | 要挂载的本地驱动器（例如，`sda1,sdb1,MYNAS`） |
| `networkdisks` | str | | 要挂载的 SMB 共享（例如，`//SERVER/SHARE`） |
| `cifsusername` | str | | 网络共享的 SMB 用户名 |
| `cifspassword` | str | | 网络共享的 SMB 密码 |
| `cifsdomain` | str | | 网络共享的 SMB 域 |

### 连接模式

- `ingress_noauth` - 默认模式，禁用用于无缝 Ingress 集成
- `noingress_auth` - 禁用 Ingress，启用外部 URL 启用身份验证
- `ingress_auth` - 启用 Ingress 和身份验证

### 示例配置

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

### 挂载驱动器

此插件支持挂载本地驱动器和远程 SMB 共享：

- **本地驱动器**: 请参阅 [Addons 中挂载本地驱动器](https://github.com/alexbelgium/hassio-addons/wiki/Mounting-Local-Drives-in-Addons)
- **远程共享**: 请参阅 [挂载远程共享](https://github.com/alexbelgium/hassio-addons/wiki/Mounting-remote-shares-in-Addons)

## 支持

在 Github 上创建问题

## 说明

---

![说明](https://dausruddin.com/wp-content/uploads/2020/05/radarr-v3-1024x515.png)

[repository]: https://github.com/alexbelgium/hassio-addons

---

**⚠️ This resource is intended to help Chinese Home Assistant users more easily install excellent add-ons. If you are not a Chinese user, please read repository readme first**

**⚠️ 这个资源用来帮助中国Home Assistant用户更容易地安装优秀的插件。如果您不是中国用户，请先阅读仓库的README，以下为收集者（汉化，加速）信息，非原作者信息**

---

## 📱 关注我

扫描下面二维码，关注我。有需要可以随时给我留言：

<img src="https://gitee.com/desmond_GT/hassio-addons/raw/main/WeChat_QRCode.png" width="50%" /> 📲

## ☕ 赞助支持

如果您觉得我花费大量时间维护这个库对您有帮助，欢迎请我喝杯奶茶，您的支持将是我持续改进的动力！

<div style="display: flex; justify-content: space-between;">
  <img src="https://gitee.com/desmond_GT/hassio-addons/raw/main/1_readme/Ali_Pay.jpg" height="350px" />
  <img src="https://gitee.com/desmond_GT/hassio-addons/raw/main/1_readme/WeChat_Pay.jpg" height="350px" />
</div> 💖

感谢您的支持与鼓励！
