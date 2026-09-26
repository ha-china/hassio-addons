# Home Assistant 附加组件：Calibre-web

我利用业余时间维护此及其他 Home Assistant 附加组件：跟上上游更改、HA 更改以及在真实硬件上测试需要大量时间（和一些费用）。我使用了约 10-20 个我持有的 110+ 个附加组件，所以我定期安装测试机器（并购买一些测试服务，如 vpn），用于我自己不使用的那些，以便于调试和改进附加组件。

如果这个附加组件为您节省时间或使您的设置更简单，我会非常感谢您提供的支持！

[![Buy me a coffee][donation-badge]](https://www.buymeacoffee.com/alexbelgium)
[![Donate via PayPal][paypal-badge]](https://www.paypal.com/donate/?hosted_button_id=DZFULJZTP3UQA)

## 附加组件信息

![Version](https://img.shields.io/badge/dynamic/yaml?label=Version&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fcalibre_web%2Fconfig.yaml)
![Ingress](https://img.shields.io/badge/dynamic/yaml?label=Ingress&query=%24.ingress&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fcalibre_web%2Fconfig.yaml)
![Arch](https://img.shields.io/badge/dynamic/yaml?color=success&label=Arch&query=%24.arch&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fcalibre_web%2Fconfig.yaml)

[![Codacy Badge](https://app.codacy.com/project/badge/Grade/9c6cf10bdbba45ecb202d7f579b5be0e)](https://www.codacy.com/gh/alexbelgium/hassio-addons/dashboard?utm_source=github.com&utm_medium=referral&utm_content=alexbelgium/hassio-addons&utm_campaign=Badge_Grade)
[![GitHub Super-Linter](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/weekly-supelinter.yaml?label=Lint%20code%20base)](https://github.com/alexbelgium/hassio-addons/actions/workflows/weekly-supelinter.yaml)
[![Builder](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/onpush_builder.yaml?label=Builder)](https://github.com/alexbelgium/hassio-addons/actions/workflows/onpush_builder.yaml)

[donation-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee-%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white
[paypal-badge]: https://img.shields.io/badge/Donate%20via%20PayPal-0070BA?logo=paypal&style=flat&logoColor=white

_感谢为我仓库点星的所有人！若要点击点星，请点击下方图片，之后它将在右上角显示。谢谢！_

[![Stargazers repo roster for @alexbelgium/hassio-addons](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/.github/stars2.svg)](https://github.com/alexbelgium/hassio-addons/stargazers)

![downloads evolution](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/calibre_web/stats.png)

## 关于

---

[Calibre-web](https://github.com/janeczku/calibre-web) 是一款提供干净界面，用于浏览、阅读和下载电子书的应用程序，它使用现有的 Calibre 数据库。还可以通过应用程序自身集成 google drive，并编辑元数据和 calibre 库。

该附加组件基于 Docker 镜像 https://github.com/linuxserver/docker-calibre-web

## 安装

---

此附加组件的安装非常简单，与其他附加组件的安装相比并无不同。

1. 将在 supervisor 附加组件商店的右上角，或如果您已配置我的 HA 则点击下方按钮处，将我的附加组件仓库添加到您的 Home Assistant 实例中。
   [![Open your Home Assistant instance and show the add add-on repository dialog with a specific repository URL pre-filled.](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2Falexbelgium%2Fhassio-addons)
1. 安装此附加组件。
1. 点击 `Save` 按钮以保存您的配置。
1. 将附加组件选项设置为您的偏好设置。
1. 启动附加组件。
1. 查看附加组件的日志，以确认一切是否顺利。
1. 打开 WebUI 并调整软件选项。

## 配置

Webui 可在 <http://homeassistant:PORT> 访问或通过侧边栏的 Ingress 访问。
默认用户名/密码请参见启动日志。
除了以下选项外，配置可通过应用程序 WebUI 完成。

默认名称：admin
默认密码：admin123

### 选项

| 选项 | 类型 | 默认值 | 描述 |
|--------|------|---------|-------------|
| `PGID` | int | `0` | 文件权限组 ID |
| `PUID` | int | `0` | 文件权限用户 ID |
| `TZ` | str | | 时区（例如，`Europe/London`） |
| `DOCKER_MODS` | str | | Docker 修改列表 |
| `OAUTHLIB_RELAX_TOKEN_SCOPE` | str | | OAuth token 范围放松 |
| `ingress_user` | str | | Ingress 认证用户名 |
| `login_with_ha_user` | bool | `false` | 通过 Ingress 使用您的 Home Assistant 用户名而非 `ingress_user` 登录 |
| `localdisks` | str | | 本地驱动器挂载列表（例如，`sda1,sdb1,MYNAS`） |
| `networkdisks` | str | | SMB 共享挂载列表（例如，`//SERVER/SHARE`） |
| `cifsusername` | str | | SMB 网络共享用户名 |
| `cifspassword` | str | | SMB 网络共享密码 |
| `cifsdomain` | str | | SMB 网络共享域 |

### 示例配置

```yaml
PGID: 0
PUID: 0
TZ: "Europe/London"
DOCKER_MODS: "linuxserver/mods:universal-calibre"
ingress_user: "admin"
localdisks: "sda1,sdb1"
networkdisks: "//192.168.1.100/books"
cifsusername: "bookuser"
cifspassword: "password123"
cifsdomain: "workgroup"
```

### 挂载驱动器

此附加组件支持挂载本地驱动器及远程 SMB 共享：

- **本地驱动器**：见 [在附加组件中挂载本地驱动器](https://github.com/alexbelgium/hassio-addons/wiki/Mounting-Local-Drives-in-Addons)
- **远程共享**：见 [在附加组件中挂载远程共享](https://github.com/alexbelgium/hassio-addons/wiki/Mounting-remote-shares-in-Addons)

### 可选的 Calibre-Web 功能

Calibre-Web 文档介绍了手动安装以 `pip install calibreweb[metadata]` 方式添加的可选扩展，以及其他类似项。**您无需在此处进行任何安装**：此附加组件所基于的 LinuxServer 基础镜像已将 Calibre-Web 的 `requirements.txt` 以及其完整的 `optional-requirements.txt` 安装到应用的虚拟环境中，因此 gdrive, gmail, goodreads, ldap, oauth, metadata, comics 和 kobo 依赖项都已存在。在容器内运行 `pip install calibreweb[...]` 不是启用它们的支持方式：它在已包含这些依赖项的 Calibre-Web 安装之上安装了 PyPI 版本的 Calibre-Web，并且可能会干扰基础镜像中锁定（pinned）的版本的版本。此外，这些更改都会被丢弃，因为 Supervisor 在重启时会重新创建附加组件容器。

可选功能在 Calibre-Web Web 界面中启用，而不是在附加组件选项中，在 `Admin` -> `Basic Configuration` -> `Feature Configuration` 下（例如 `Enable Uploads`, `Enable Kobo sync`, `Use Goodreads`）。

**图书封套**。`Fetch Cover from URL` 和 `Upload Cover from Local Disk` 字段仅在 `Feature Configuration` 中勾选 `Enable Uploads` **并且** 已登录用户拥有 `Upload` 权限 (`Admin` -> 该用户 -> `Upload`) 时，才会在图书的 `Edit Metadata` 页面出现。缺少 Python 包不会隐藏它们。

**转换、元数据嵌入和其他 Calibre 集成**使用命令行二进制文件，例如 `ebook-convert`, `ebook-meta` 和 `calibredb`。这些在启动时由 `linuxserver/mods:universal-calibre` docker mod 安装，它是 `DOCKER_MODS` 选项附带的默认 mod。如果您自行设置 `DOCKER_MODS`，请将 `linuxserver/mods:universal-calibre` 保留在列表中（mods 之间用 `|` 分隔），否则这些二进制文件将消失。

**其他兼容的 Python 包**可以从附加组件的自定义脚本中安装（见下文部分）；那里的 `pip` 指向 Calibre-Web 自己的虚拟环境。该脚本会在每次启动时运行，而且必须如此，因为容器可写层不会持久化。

### 自定义脚本和环境变量

此附加组件支持自定义脚本和环境变量：

- **自定义脚本**：见 [在附加组件中运行自定义脚本](https://github.com/alexbelgium/hassio-addons/wiki/Running-custom-scripts-in-Addons)
- **env_vars 选项**：使用附加组件 `env_vars` 选项传递额外环境变量（名称可以大写或小写）。详细信息请参见 https://github.com/alexbelgium/hassio-addons/wiki/Add-Environment-variables-to-your-Addon-2

## 支持

在 github 上创建 issue

## 插图

---

![illustration](https://calibre-web.com/img/slider/artistdetails.png)

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
