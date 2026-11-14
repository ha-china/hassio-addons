# Home Assistant 插件：calibre

我利用业余时间维护此及其他 Home Assistant 插件：跟踪上游更新、适配 Home Assistant 变更以及在实际硬件上的测试需要耗费大量时间（和一些资金）。我大约使用了其中 5-10 个超过 110 个插件，因此我通常会安装测试机器（并购买一些测试服务，如 vpn），而我个人不使用它们来进行插件的故障排除和改进。

如果此插件为您节省时间或简化您的设置，我将非常感激您的支持！

[![Buy me a coffee][donation-badge]](https://www.buymeacoffee.com/alexbelgium)
[![Donate via PayPal][paypal-badge]](https://www.paypal.com/donate/?hosted_button_id=DZFULJZTP3UQA)

## 插件信息

![版本](https://img.shields.io/badge/dynamic/yaml?label=Version&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fcalibre%2Fconfig.yaml)
![端口转发](https://img.shields.io/badge/dynamic/yaml?label=Ingress&query=%24.ingress&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fcalibre%2Fconfig.yaml)
![架构](https://img.shields.io/badge/dynamic/yaml?color=success&label=Arch&query=%24.arch&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fcalibre%2Fconfig.yaml)

[![Codacy 徽章](https://app.codacy.com/project/badge/Grade/9c6cf10bdbba45ecb202d7f579b5be0e)](https://www.codacy.com/gh/alexbelgium/hassio-addons/dashboard?utm_source=github.com&utm_medium=referral&utm_content=alexbelgium/hassio-addons&utm_campaign=Badge_Grade)
[![GitHub Super-Linter](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/weekly-supelinter.yaml?label=Lint%20code%20base)](https://github.com/alexbelgium/hassio-addons/actions/workflows/weekly-supelinter.yaml)
[![构建者](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/onpush_builder.yaml?label=Builder)](https://github.com/alexbelgium/hassio-addons/actions/workflows/onpush_builder.yaml)

[donation-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee-%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white
[paypal-badge]: https://img.shields.io/badge/Donate%20via%20PayPal-0070BA?logo=paypal&style=flat&logoColor=white

_感谢所有人给我的仓库点上星标！要给它打上星标，点击下面的图像，然后它会显示在右上角。谢谢！_

[![@alexbelgium/hassio-addons 的星标列表](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/.github/stars2.svg)](https://github.com/alexbelgium/hassio-addons/stargazers)

![下载量趋势](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/calibre/stats.png)

## 关于

---

[Calibre](https://calibre-ebook.com/) 是一款强大且易于使用的电子书管理器。用户都说它非常出色且必备。它将允许您完成几乎所有的事情，并且超越普通电子书软件的功能。它完全免费、开源，非常适合休闲用户和计算机专家。

此插件基于 Docker 镜像 https://github.com/linuxserver/docker-calibre 构建。

## 安装

---

此插件的安装非常简单，与其他插件的安装没有区别。

1. 将我的插件仓库添加到您的 Home Assistant 实例（在 supervisor 插件存储区的右上角，或如果您已配置我的 HA，可以点击下方的按钮）
   [![打开您的 Home Assistant 实例并显示带有预填特定仓库 URL 的添加插件仓库对话框。](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2Falexbelgium%2Fhassio-addons)
1. 安装此插件。
1. 点击 `保存` 按钮以存储您的配置。
1. 将插件选项设置为您偏好的选项
1. 启动插件。
1. 检查插件日志以查看一切是否顺利。
1. 打开 Web UI 并调整软件选项

## 配置

---

Web UI 位于 <http://homeassistant:PORT> 或通过侧边栏使用 Ingress 访问。
请读取上游容器文档以获取更多信息：https://github.com/linuxserver/docker-calibre#application-setup

**注意**：Web 服务和无线连接需要从桌面应用程序手动启用，分别使用 8081 和 9090 端口。

### 选项

| 选项 | 类型 | 默认值 | 描述 |
|------|------|--------|------|
| `PGID` | int | `0` | 文件权限的组 ID |
| `PUID` | int | `0` | 文件权限的用户 ID |
| `TZ` | str | | 时区（例如，`Europe/London`） |
| `PASSWORD` | str | | 图形界面访问的可选密码 |
| `CLI_ARGS` | str | | Calibre 的可选命令行启动参数 |
| `localdisks` | str | | 本地磁盘挂载路径（例如，`sda1,sdb1,MYNAS`）。在驱动器后添加一个文件夹以仅挂载该文件夹，例如 `MYNAS/public` 仅挂载该文件夹，路径为 `/mnt/MYNAS/public`。文件夹挂载需要插件版本在 2026-09-19 之后发布。 |
| `networkdisks` | str | | 要挂载的 SMB 共享路径（例如，`//SERVER/SHARE`） |
| `cifsusername` | str | | 网络共享的 SMB 用户名 |
| `cifspassword` | str | | 网络共享的 SMB 密码 |
| `cifsdomain` | str | | 网络共享的 SMB 域名 |

### 示例配置

```yaml
PGID: 0
PUID: 0
TZ: "Europe/London"
PASSWORD: "secure-password"
CLI_ARGS: "--with-library=/books"
localdisks: "sda1,sdb1"
networkdisks: "//192.168.1.100/books"
cifsusername: "bookuser"
cifspassword: "password123"
cifsdomain: "workgroup"
```

### 挂载驱动器

此插件支持挂载本地驱动器和网络 SMB 共享：

- **本地驱动器**：请参阅 [插件中挂载本地驱动器](https://github.com/alexbelgium/hassio-addons/wiki/Mounting-Local-Drives-in-Addons)
- **远程共享**：请参阅 [插件中挂载远程共享](https://github.com/alexbelgium/hassio-addons/wiki/Mounting-remote-shares-in-Addons)

### 自定义脚本和环境变量

此插件通过 `app_config` 映射支持自定义脚本和环境变量：

- **自定义脚本**：请参阅 [插件中运行自定义脚本](https://github.com/alexbelgium/hassio-addons/wiki/Running-custom-scripts-in-Addons)
- **env_vars 选项**：使用插件 `env_vars` 选项传递额外的环境变量（名称可以是大写或小写）。请参阅 https://github.com/alexbelgium/hassio-addons/wiki/Add-Environment-variables-to-your-Addon-2 了解详细信息。

## 支持

在 GitHub 上创建一个问题

## 插图

---

![插图](https://calibre.com/img/slider/artistdetails.png)

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
