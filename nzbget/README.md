# Home Assistant 插件：nzbget

我利用业余时间维护此及其他 Home Assistant 插件：跟踪上游更改、HA 更改以及在真实硬件上进行测试需要花费大量时间（以及一些金钱）。我常用的约十个插件来自我超过一百个插件中的五个，因此我经常会安装测试机器（并购买一些不亲自使用的测试服务，如 VPN）来调试和改进插件。

如果此插件为您节省时间或使您的设置更简单，我将非常感激您的支持！

[![Buy me a coffee][donation-badge]](https://www.buymeacoffee.com/alexbelgium)
[![Donate via PayPal][paypal-badge]](https://www.paypal.com/donate/?hosted_button_id=DZFULJZTP3UQA)

## Addon 信息

![Version](https://img.shields.io/badge/dynamic/yaml?label=Version&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fnzbget%2Fconfig.yaml)
![Ingress](https://img.shields.io/badge/dynamic/yaml?label=Ingress&query=%24.ingress&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fnzbget%2Fconfig.yaml)
![Arch](https://img.shields.io/badge/dynamic/yaml?color=success&label=Arch&query=%24.arch&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fnzbget%2Fconfig.yaml)

[![Codacy Badge](https://app.codacy.com/project/badge/Grade/9c6cf10bdbba45ecb202d7f579b5be0e)](https://www.codacy.com/gh/alexbelgium/hassio-addons/dashboard?utm_source=github.com&utm_medium=referral&utm_content=alexbelgium/hassio-addons&utm_campaign=Badge_Grade)
[![GitHub Super-Linter](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/weekly-supelinter.yaml?label=Lint%20code%20base)](https://github.com/alexbelgium/hassio-addons/actions/workflows/weekly-supelinter.yaml)
[![Builder](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/onpush_builder.yaml?label=Builder)](https://github.com/alexbelgium/hassio-addons/actions/workflows/onpush_builder.yaml)

[donation-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee-%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white
[paypal-badge]: https://img.shields.io/badge/Donate%20via%20PayPal-0070BA?logo=paypal&style=flat&logoColor=white

_感谢所有人给我的仓库点了星！要入星，请点击下方的图片，它将会显示在右上角。感谢！_

[![Stargazers repo roster for @alexbelgium/hassio-addons](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/.github/stars2.svg)](https://github.com/alexbelgium/hassio-addons/stargazers)

![downloads evolution](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/nzbget/stats.png)

## 关于

[nzbget](http://nzbget.net/) 是一个用 C++ 编写的 usenet 下载器，其设计专注于性能，利用极少的系统资源实现最大的下载速度。
此插件基于 https://github.com/linuxserver/docker-nzbget 的 docker 镜像。

## 配置

Webui 可以在 <http://homeassistant:PORT> 访问，或通过侧边栏使用 Ingress 访问。
默认用户名/密码：登录:`nzbget`，密码:`tegbzn6789`
配置可以通过应用 webUI 完成，除了以下选项（需通过配置文件设置）。

### Options

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `PGID` | int | `0` | 文件权限组 ID |
| `PUID` | int | `0` | 文件权限用户 ID |
| `TZ` | str | | 时区（例如，`Europe/London`） |
| `localdisks` | str | | 本地挂载驱动器（例如，`sda1,sdb1,MYNAS`） |
| `networkdisks` | str | | 网络共享挂载（例如，`//SERVER/SHARE`） |
| `cifsusername` | str | | 网络共享 SMB 用户名 |
| `cifspassword` | str | | 网络共享 SMB 密码 |
| `cifsdomain` | str | | 网络共享 SMB 域 |

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

此插件支持挂载本地驱动器及远程 SMB 共享：

- **本地驱动器**：请参阅 [Addons 中挂载本地驱动器](https://github.com/alexbelgium/hassio-addons/wiki/Mounting-Local-Drives-in-Addons)
- **远程共享**：请参阅 [Addons 中挂载远程共享](https://github.com/alexbelgium/hassio-addons/wiki/Mounting-remote-shares-in-Addons)

### 自定义脚本和环境变量

此插件通过 `addon_config` 映射支持自定义脚本和环境变量：

- **自定义脚本**：请参阅 [Addons 中运行自定义脚本](https://github.com/alexbelgium/hassio-addons/wiki/Running-custom-scripts-in-Addons)
- **env_vars 选项**：使用插件 `env_vars` 选项传递额外的环境变量（名称支持大写或小写）。详见 https://github.com/alexbelgium/hassio-addons/wiki/Add-Environment-variables-to-your-Addon-2。

## 安装

此插件的安装非常简单，与其他插件安装没有区别。

1. 将我的插件仓库添加到您的 Home Assistant 实例（在 supervisor addons 商店点击右上角，或如果您已配置我的 HA，则点击下方按钮）
   [![Open your Home Assistant instance and show the add add-on repository dialog with a specific repository URL pre-filled.](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2Falexbelgium%2Fhassio-addons)
1. 安装此插件。
1. 点击 `Save` 按钮以存储您的配置。
1. 将插件选项设置为您的偏好设置。
1. 启动插件。
1. 查看插件日志以确认一切正常。
1. 打开 webUI 并调整软件选项。

## 支持

在 github 上创建 issue。

## 插图

![illustration](https://nzbget.com/img/slider/artistdetails.png)

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
