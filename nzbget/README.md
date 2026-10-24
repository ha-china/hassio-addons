# Home Assistant 插件：nzbget

我在闲暇时间维护此插件和其他 Home Assistant 插件：跟踪上游更改、Home Assistant 更改以及在真实硬件上进行测试需要大量时间（甚至需要一些金钱）。我使用的我的 110+ 个插件中的 5-10 个，所以我会规律性地安装测试机器（并购买一些我自己不使用的测试服务，如 vpn），以用于故障排查和改进插件。

如果此插件能为您节省时间或让您的配置更简单，我将不胜感激您的支持！

[![Buy me a coffee][donation-badge]](https://www.buymeacoffee.com/alexbelgium)
[![Donate via PayPal][paypal-badge]](https://www.paypal.com/donate/?hosted_button_id=DZFULJZTP3UQA)

## 插件信息

![版本](https://img.shields.io/badge/dynamic/yaml?label=Version&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fnzbget%2Fconfig.yaml)
![Ingress](https://img.shields.io/badge/dynamic/yaml?label=Ingress&query=%24.ingress&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fnzbget%2Fconfig.yaml)
![架构](https://img.shields.io/badge/dynamic/yaml?color=success&label=Arch&query=%24.arch&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fnzbget%2Fconfig.yaml)

[![Codacy Badge](https://app.codacy.com/project/badge/Grade/9c6cf10bdbba45ecb202d7f579b5be0e)](https://www.codacy.com/gh/alexbelgium/hassio-addons/dashboard?utm_source=github.com&utm_medium=referral&utm_content=alexbelgium/hassio-addons&utm_campaign=Badge_Grade)
[![GitHub Super-Linter](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/weekly-supelinter.yaml?label=Lint%20code%20base)](https://github.com/alexbelgium/hassio-addons/actions/workflows/weekly-supelinter.yaml)
[![Builder](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/onpush_builder.yaml?label=Builder)](https://github.com/alexbelgium/hassio-addons/actions/workflows/onpush_builder.yaml)

[donation-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee-%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white
[paypal-badge]: https://img.shields.io/badge/Donate%20via%20PayPal-0070BA?logo=paypal&style=flat&logoColor=white

_感谢大家为我 repo 点赞！点击上方图片点赞，它将显示在右上角。谢谢！_

[![Stargazers repo roster for @alexbelgium/hassio-addons](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/.github/stars2.svg)](https://github.com/alexbelgium/hassio-addons/stargazers)

![下载量变化趋势](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/nzbget/stats.png)

## 关于

[nzbget](http://nzbget.net/) 是一个使用 C++ 编写的 Usenet 下载器，旨在以最小的系统资源实现最高的下载速度。此插件基于 Docker 镜像 https://github.com/linuxserver/docker-nzbget。

## 配置

Web UI 位于 <http://homeassistant:PORT> 或通过侧边栏的 Ingress。
默认用户名/密码：登录 `nzbget`，密码 `tegbzn6789`。
除了以下选项外，其他配置可以通过应用 Web UI 完成。

### 选项

| 选项 | 类型 | 默认值 | 描述 |
|------|------|--------|------|
| `PGID` | int | `0` | 文件权限的组 ID |
| `PUID` | int | `0` | 文件权限的用户 ID |
| `TZ` | str | | 时区（例如，`Europe/London`） |
| `localdisks` | str | | 本地驱动分区（挂载路径，例如，`sda1,sdb1,MYNAS`）。在驱动器后添加一个文件夹仅挂载该文件夹，例如，挂载 `MYNAS/public` 仅该文件夹，位于 `/mnt/MYNAS/public`。文件夹挂载需要 2026-09-19 之后发布的插件版本。 |
| `networkdisks` | str | | SMB 共享挂载（例如，`//SERVER/SHARE`） |
| `cifsusername` | str | | SMB 网络共享用户名 |
| `cifspassword` | str | | SMB 网络共享密码 |
| `cifsdomain` | str | | SMB 网络共享域 |

### 示例配置

```yaml
PGID: 0
PUID: 0
TZ: "Europe/London"
localdisks: "sda1,sdb1"
networkdisks: "//192.168.1.100/downloads,//nas.local/usenet"
cifsusername: "downloader"
cifspassword: "password123"
cifsdomain: "workgroup"
```

### 挂载驱动器

此插件支持挂载本地驱动分区和远程 SMB 共享：

- **本地驱动分区**：请参阅 [插件中的本地驱动分区挂载](https://github.com/alexbelgium/hassio-addons/wiki/Mounting-Local-Drives-in-Addons)
- **远程共享**：请参阅 [插件中的远程共享挂载](https://github.com/alexbelgium/hassio-addons/wiki/Mounting-remote-shares-in-Addons)

### 自定义脚本和环境变量

此插件通过 `app_config` 映射支持自定义脚本和环境变量：

- **自定义脚本**：请参阅 [插件中的自定义脚本运行](https://github.com/alexbelgium/hassio-addons/wiki/Running-custom-scripts-in-Addons)
- **env_vars 选项**：使用插件的 `env_vars` 选项传递额外的环境变量（大小写名称均可）。详情请见 https://github.com/alexbelgium/hassio-addons/wiki/Add-Environment-variables-to-your-Addon-2。

## 安装

此插件的安装非常简单直观，与其他插件安装并无不同。

1. 将我的插件仓库添加到您的 home assistant 实例中（在 supervisor 插件商店右上角，或如果您已配置了我的 HA，请点击下方按钮）
   [![打开您的 Home Assistant 实例并显示带特定仓库 URL 预填的添加插件仓库对话框。](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2Falexbelgium%2Fhassio-addons)
1. 安装此插件。
1. 点击 `Save` 按钮以保存您的配置。
1. 将插件选项设置为您的偏好设置。
1. 启动插件。
1. 检查插件日志以查看一切是否正常。
1. 打开 Web UI 并调整软件选项

## 支持

在 github 上创建一个问题。

## 插图

![插图](https://nzbget.com/img/slider/artistdetails.png)

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
