# Home Assistant 附加组件：Webtop KDE Alpine

我在业余时间维护此及其他 Home Assistant 附加组件：跟进上游更改、HA 更改，并在真实硬件上进行测试需要大量时间（和一些金钱）。我使用我超过 110 个附加组件中大约 5-10 个，我经常安装测试机（并为我自己不使用的服务购买一些测试服务，如 vpn），以便以便排错和改进附加组件。

如果此附加组件为您节省了时间或使您的设置更简单，我将非常感激您的支持！

[![Buy me a coffee][donation-badge]](https://www.buymeacoffee.com/alexbelgium)
[![Donate via PayPal][paypal-badge]](https://www.paypal.com/donate/?hosted_button_id=DZFULJZTP3UQA)

## 附加组件信息

![Version](https://img.shields.io/badge/dynamic/yaml?label=Version&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fwebtop%2Fconfig.yaml)
![Ingress](https://img.shields.io/badge/dynamic/yaml?label=Ingress&query=%24.ingress&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fwebtop%2Fconfig.yaml)
![Arch](https://img.shields.io/badge/dynamic/yaml?color=success&label=Arch&query=%24.arch&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fwebtop%2Fconfig.yaml)

[![Codacy Badge](https://app.codacy.com/project/badge/Grade/9c6cf10bdbba45ecb202d7f579b5be0e)](https://www.codacy.com/gh/alexbelgium/hassio-addons/dashboard?utm_source=github.com&utm_medium=referral&utm_content=alexbelgium/hassio-addons&utm_campaign=Badge_Grade)
[![GitHub Super-Linter](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/weekly-supelinter.yaml?label=Lint%20code%20base)](https://github.com/alexbelgium/hassio-addons/actions/workflows/weekly-supelinter.yaml)
[![Builder](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/onpush_builder.yaml?label=Builder)](https://github.com/alexbelgium/hassio-addons/actions/workflows/onpush_builder.yaml)

[donation-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee-%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white
[paypal-badge]: https://img.shields.io/badge/Donate%20via%20PayPal-0070BA?logo=paypal&style=flat&logoColor=white

_感谢 everyone 为我仓库星标！请点击下图将其星标，它将显示在右上角。谢谢！_

[![Stargazers repo roster for @alexbelgium/hassio-addons](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/.github/stars2.svg)](https://github.com/alexbelgium/hassio-addons/stargazers)

![downloads evolution](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/webtop/stats.png)

## 关于

[webtop](https://github.com/webtop/webtop) 是一个可通过任何现代 Web 浏览器访问的完整桌面环境。
此附加组件基于 docker 镜像 https://github.com/linuxserver/docker-webtop

## 配置

Webui 可通过 ingress 或 <http://homeassistant:PORT> 找到。端口默认禁用，但可通过附加组件选项启用。

默认情况下，该图像基于 abc 用户，我们推荐使用此用户，因为所有的 init/config 都是基于它。默认密码也是 abc。如果您想要更改此密码并需要在访问界面时要求身份验证，请 simply 在 webtop 中的 gui 终端内执行 passwd。然后，在访问 Web 界面时，使用以下路径：

http://localhost:3000/?login=true

应用安装不是持久的，您需要通过附加组件选项执行。然而，它们的配置是持久的。

如果图形不工作，请使用 DRINODE 功能选择您的图形设备。

查看所有可能的 ENV 变量：https://docs.linuxserver.io/images/docker-webtop#optional-environment-variables

### 选项

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `PGID` | int | `0` | 文件权限的组 ID |
| `PUID` | int | `0` | 文件权限的用户 ID |
| `TZ` | str | | 时区（例如，`Europe/London`） |
| `additional_apps` | str | `engrampa,libreoffice` | 要安装的应用（逗号分隔） |
| `DRINODE` | str | `/dev/dri/renderD128` | 图形设备路径 |
| `DNS_server` | str | `8.8.8.8` | 自定义 DNS 服务器 |
| `KEYBOARD` | str | `en-us-qwerty` | 键盘布局 |
| `PASSWORD` | str | | Web 界面的自定义密码 |
| `data_location` | str | | 自定义数据存储路径 |
| `localdisks` | str | | 本地驱动器挂载路径（例如，`sda1,sdb1`） |
| `networkdisks` | str | | 要挂载的 SMB 共享（例如，`//SERVER/SHARE`） |
| `cifsusername` | str | | SMB 网络共享的用户名 |
| `cifspassword` | str | | SMB 网络共享的密码 |
| `cifsdomain` | str | | SMB 网络共享的域 |

### 示例配置

```yaml
PGID: 1000
PUID: 1000
TZ: "Europe/London"
additional_apps: "firefox,gimp,vlc"
DRINODE: "/dev/dri/card0"
KEYBOARD: "fr-fr-azerty"
localdisks: "sda1,sdb1"
networkdisks: "//192.168.1.100/media"
cifsusername: "mediauser"
cifspassword: "password123"
cifsdomain: "workgroup"
```

### 挂载驱动器

此附加组件支持挂载本地驱动器和远程 SMB 共享：

- **本地驱动器**：请参阅 [附加组件中挂载本地驱动器](https://github.com/alexbelgium/hassio-addons/wiki/Mounting-Local-Drives-in-Addons)
- **远程共享**：请参阅 [附加组件中挂载远程共享](https://github.com/alexbelgium/hassio-addons/wiki/Mounting-remote-shares-in-Addons)

### 自定义脚本和环境变量

此附加组件支持自定义脚本执行和环境变量注入：

- **自定义脚本**：请参阅 [附加组件中运行自定义脚本](https://github.com/alexbelgium/hassio-addons/wiki/Running-custom-scripts-in-Addons)
- **env_vars 选项**：使用附加组件的 `env_vars` 选项传递额外的环境变量（大写或小写字母名称）。详见 https://github.com/alexbelgium/hassio-addons/wiki/Add-Environment-variables-to-your-Addon-2。

### 其他资源

查看所有可能的环境变量：https://docs.linuxserver.io/images/docker-webtop#optional-environment-variables

## 安装

此附加组件的安装非常简单，与其他附加组件安装没有区别。

1. 将我的附加组件库添加到您的 Home Assistant 实例（在 supervisor 附加组件商店右上角，或如果您已配置了 HA，请点击下方按钮）
   [![Open your Home Assistant instance and show the add add-on repository dialog with a specific repository URL pre-filled.](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2Falexbelgium%2Fhassio-addons)
1. 安装此附加组件。
1. 点击 `Save` 按钮以保存您的配置。
1. 将附加组件选项设置为您的偏好设置
1. 启动附加组件。
1. 检查附加组件的日志，以查看一切是否正常。
1. 打开 WebUI 并调整软件选项

## 支持

在 github 创建问题

## 插图

![illustration](https://www.linuxserver.io/user/pages/content/images/2021/05/menu.png)

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
