# Home Assistant 附加组件：Prowlarr

我在业余时间维护这个及其他 Home Assistant 附加组件：跟踪上游更改、HA 更改以及在真实硬件上进行测试耗费了大量时间（以及一些金钱）。我使用其中 5-10 个超过 110 个附加组件，经常安装测试机（并购买一些无需本人使用的测试服务，如 vpn）来调试和改进附加组件。

如果这个附加组件帮我省下了时间或让我的设置更简单，我真的很感激您的支持！

[![Buy me a coffee][donation-badge]](https://www.buymeacoffee.com/alexbelgium)
[![Donate via PayPal][paypal-badge]](https://www.paypal.com/donate/?hosted_button_id=DZFULJZTP3UQA)

## 附加组件信息

![版本](https://img.shields.io/badge/dynamic/yaml?label=版本&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fprowlarr%2Fconfig.yaml)
![入口 (Ingress)](https://img.shields.io/badge/dynamic/yaml?label=入口&query=%24.ingress&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fprowlarr%2Fconfig.yaml)
![架构 (Arch)](https://img.shields.io/badge/dynamic/yaml?color=success&label=架构&query=%24.arch&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fprowlarr%2Fconfig.yaml)

[![Codacy 徽章](https://app.codacy.com/project/badge/Grade/9c6cf10bdbba45ecb202d7f579b5be0e)](https://www.codacy.com/gh/alexbelgium/hassio-addons/dashboard?utm_source=github.com&utm_medium=referral&utm_content=alexbelgium/hassio-addons&utm_campaign=徽章等级)
[![GitHub Super-Linter](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/weekly-supelinter.yaml?label=lint 代码库)](https://github.com/alexbelgium/hassio-addons/actions/workflows/weekly-supelinter.yaml)
[![Builder](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/onpush_builder.yaml?label=Builder)](https://github.com/alexbelgium/hassio-addons/actions/workflows/onpush_builder.yaml)

[donation-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee-%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white
[paypal-badge]: https://img.shields.io/badge/Donate%20via%20PayPal-0070BA?logo=paypal&style=flat&logoColor=white

_感谢所有人关注我 repository！点开下方的图片星标它，它将显示在右上角。谢谢！_

[![ @alexbelgium/hassio-addons 的星标仓库名单](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/.github/stars2.svg)](https://github.com/alexbelgium/hassio-addons/stargazers)

![下载量演变](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/prowlarr/stats.png)

## 简介

---

[Prowlarr](https://github.com/Prowlarr/Prowlarr) 是一个基于流行的 arr .net/reactjs 基础栈构建的索引器管理器/代理工具，旨在与您的各种 PVR 应用集成。
此附加组件基于 docker 镜像 https://github.com/linuxserver/docker-prowlarr。

## 安装

---

此附加组件的安装非常简单，与其他任何附加组件的安装方式并无不同。

1. 将我附加组件仓库添加到您的 home assistant 实例中（在 supervisor addons 商店右上角，或者如果您已配置了您的 HA，请点击下方按钮）
   [![打开您的 Home Assistant 实例并显示添加附加组件仓库对话框，并且预填充特定的仓库 URL。](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2Falexbelgium%2Fhassio-addons)
1. 安装此附加组件。
1. 点击 `Save` 按钮以保存您的配置。
1. 将附加组件选项设置为您的偏好设置。
1. 启动附加组件。
1. 检查附加组件的日志以查看一切是否顺利。
1. 打开 web 界面并根据需要调整软件选项

## 配置

使用附加组件的 `env_vars` 选项传递额外环境变量（名称区分大小写）。详见 https://github.com/alexbelgium/hassio-addons/wiki/Add-Environment-variables-to-your-Addon-2。

Web 界面可在 <http://homeassistant:PORT> 或通过侧边栏使用入口 (Ingress) 访问。
配置可通过应用 web 界面进行，除了以下选项。

### 选项

| 选项 | 类型 | 默认值 | 描述 |
|--------|------|---------|-------------|
| `PGID` | int | `0` | 文件权限的组 ID |
| `PUID` | int | `0` | 文件权限的用户 ID |
| `TZ` | str | | 时区（例如，`Europe/London`） |
| `connection_mode` | list | `ingress_noauth` | 连接模式（ingress_noauth/noingress_auth/ingress_auth） |
| `localdisks` | str | | 本地驱动器挂载点（例如，`sda1,sdb1,MYNAS`） |
| `networkdisks` | str | | SMB 共享挂载点（例如，`//SERVER/SHARE`） |
| `cifsusername` | str | | SMB 网络共享用户名 |
| `cifspassword` | str | | SMB 网络共享密码 |
| `cifsdomain` | str | | SMB 网络共享域名 |
| `smbv1` | bool | `false` | 启用 SMB v1 协议 |

### 连接模式

- `ingress_noauth` - 默认，禁用认证以无缝集成入口 (Ingress)
- `noingress_auth` - 禁用入口，用于外部 URL，启用认证
- `ingress_auth` - 启用入口和认证

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

此附加组件支持挂载本地磁盘和远程 SMB 共享：

- **本地磁盘**：请参阅 [附加组件中挂载本地磁盘](https://github.com/alexbelgium/hassio-addons/wiki/Mounting-Local-Drives-in-Addons)
- **远程共享**：请参阅 [附加组件中挂载远程共享](https://github.com/alexbelgium/hassio-addons/wiki/Mounting-remote-shares-in-Addons)

## 支持

在 github 上创建问题报告 (issue)

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

<img src="https://gitee.com/desmond_GT/hassio-addons/raw/main/WeChat_QRCode.png" width="50%" /> 📲

## ☕ 赞助支持

如果您觉得我花费大量时间维护这个库对您有帮助，欢迎请我喝杯奶茶，您的支持将是我持续改进的动力！

<div style="display: flex; justify-content: space-between;">
  <img src="https://gitee.com/desmond_GT/hassio-addons/raw/main/1_readme/Ali_Pay.jpg" height="350px" />
  <img src="https://gitee.com/desmond_GT/hassio-addons/raw/main/1_readme/WeChat_Pay.jpg" height="350px" />
</div> 💖

感谢您的支持与鼓励！
