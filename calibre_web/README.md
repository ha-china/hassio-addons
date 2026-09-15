# Home Assistant 附加组件：Calibre-web

我利用业余时间维护这个及其他 Home Assistant 附加组件：跟踪上游更改、HA 更改变化以及在真实硬件上测试需要大量时间（以及一部分金钱）。我大约使用了 >110 个附加组件中的 5-10 个，所以我定期安装测试机（并购买一些我不自行使用的测试服务，如VPN）来排查和改进附加组件。

如果您节省时间或使用此附加组件更容易，您的支持将不胜感激！

[![Buy me a coffee][donation-badge]](https://www.buymeacoffee.com/alexbelgium)
[![Donate via PayPal][paypal-badge]](https://www.paypal.com/donate/?hosted_button_id=DZFULJZTP3UQA)

## Addon 信息

![Version](https://img.shields.io/badge/dynamic/yaml?label=Version&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fcalibre_web%2Fconfig.yaml)
![Ingress](https://img.shields.io/badge/dynamic/yaml?label=Ingress&query=%24.ingress&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fcalibre_web%2Fconfig.yaml)
![Arch](https://img.shields.io/badge/dynamic/yaml?color=success&label=Arch&query=%24.arch&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fcalibre_web%2Fconfig.yaml)

[![Codacy Badge](https://app.codacy.com/project/badge/Grade/9c6cf10bdbba45ecb202d7f579b5be0e)](https://www.codacy.com/gh/alexbelgium/hassio-addons/dashboard?utm_source=github.com&utm_medium=referral&utm_content=alexbelgium/hassio-addons&utm_campaign=Badge_Grade)
[![GitHub Super-Linter](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/weekly-supelinter.yaml?label=Lint%20code%20base)](https://github.com/alexbelgium/hassio-addons/actions/workflows/weekly-supelinter.yaml)
[![Builder](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/onpush_builder.yaml?label=Builder)](https://github.com/alexbelgium/hassio-addons/actions/workflows/onpush_builder.yaml)

[donation-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee-%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white
[paypal-badge]: https://img.shields.io/badge/Donate%20via%20PayPal-0070BA?logo=paypal&style=flat&logoColor=white

_非常感谢您为我仓库星告！点击下面的图片进行星告，然后它就会显示在右上角。谢谢！_

[![Stargazers repo roster for @alexbelgium/hassio-addons](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/.github/stars2.svg)](https://github.com/alexbelgium/hassio-addons/stargazers)

![downloads evolution](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/calibre_web/stats.png)

## 关于

---

[Calibre-web](https://github.com/janeczku/calibre-web) 是一个 Web 应用程序，为浏览、阅读和下载电子书提供干净的界面，使用现有的 Calibre 数据库。也可以通过该应用程序集成 Google Drive、编辑元数据并通过应用程序本身编辑您的 Calibre 库。

此附加组件基于 Docker 镜像 https://github.com/linuxserver/docker-calibre-web

## 安装

---

此附加组件的安装非常简单，与其他附加组件的安装没有区别。

1. 将我附加组件的仓库添加到您的 Home Assistant 实例中（在 supervisor 附加组件商店右上角，或者如果您已配置了我的 HA，则点击下方按钮）
   [![Open your Home Assistant instance and show the add add-on repository dialog with a specific repository URL pre-filled.](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2Falexbelgium%2Fhassio-addons)
1. 安装此附加组件。
1. 点击 `保存` 按钮以存储您的配置。
1. 将附加组件选项设置为您自己的偏好。
1. 启动附加组件。
1. 检查附加组件的日志，看看一切是否正常。
1. 打开 WebUI 并调整软件选项。

## 配置

Webui 位于 <http://homeassistant:PORT> 或通过侧边栏使用 Ingress 找到。
默认的密码/登录名在启动日志中描述。
配置可以通过应用程序的 WebUI 完成，除了以下选项。

默认名称：admin
默认密码：admin123

### 选项

| 选项 | 类型 | 默认值 | 描述 |
|------|------|--------|------|
| `PGID` | int | `0` | 文件权限 Group ID |
| `PUID` | int | `0` | 文件权限 User ID |
| `TZ` | str | | 时区（例如，`Europe/London`） |
| `DOCKER_MODS` | str | | 要应用的 Docker 修改 |
| `OAUTHLIB_RELAX_TOKEN_SCOPE` | str | | OAuth 令牌作用域放松 |
| `ingress_user` | str | | 用于 Ingress 身份验证的用户名 |
| `localdisks` | str | | 本地磁盘挂载点（例如，`sda1,sdb1,MYNAS`） |
| `networkdisks` | str | | SMB 共享挂载点（例如，`//SERVER/SHARE`） |
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

### 挂载磁盘

此附加组件支持同时挂载本地磁盘和远程 SMB 共享：

- **本地磁盘**：参考 [附加组件中挂载本地磁盘](https://github.com/alexbelgium/hassio-addons/wiki/Mounting-Local-Drives-in-Addons)
- **远程共享**：参考 [附加组件中挂载远程共享](https://github.com/alexbelgium/hassio-addons/wiki/Mounting-remote-shares-in-Addons)

### 可选的 Calibre-Web 功能

Calibre-Web 文档列出了手动安装中添加额外功能的说明（通过 `pip install calibreweb[metadata]` 及类似命令）。**您无需在此处安装任何东西**：此附加组件构建的 LinuxServer 基础镜像已将 Calibre-Web 的 `requirements.txt` *和* 其完整的 `optional-requirements.txt` 安装到应用程序的虚拟环境中，因此 gdrive、gmail、goodreads、ldap、oauth、metadata、comics 和 kobo 的依赖项已存在。在容器中运行 `pip install calibreweb[...]` 不是启用它们的受支持方式：这会在已经拥有这些依赖项的安装之上安装 Calibre-Web 的 PyPI 发行版，并且它会扰乱基础镜像锁定的版本。此外，它会被关闭，因为 Supervisor 在重启时会重新创建附加组件容器。

可选功能在 Calibre-Web Web 界面中开启，而不是在附加组件选项中，位于 `Admin` -> `Basic Configuration` -> `Feature Configuration` 下（例如 `Enable Uploads`、`Enable Kobo sync`、`Use Goodreads`）。

**书籍封面**。当 `Feature Configuration` 中勾选了 `Enable Uploads` **并且** 已登录用户拥有 `Upload` 权限（`Admin` -> 用户 -> `Upload`）时，才会在书籍的 `Edit Metadata` 页面上显示 `Fetch Cover from URL` 和 `Upload Cover from Local Disk` 字段。缺少 Python 包并不是隐藏它们的原因。

**转换、元数据嵌入和其他 Calibre 集成** 使用命令行二进制文件，如 `ebook-convert`、`ebook-meta` 和 `calibredb`。这些由 `linuxserver/mods:universal-calibre` docker 模块在安装时安装，它是 `DOCKER_MODS` 选项的默认值。如果您自定义设置了 `DOCKER_MODS`，请保持在列表中 `linuxserver/mods:universal-calibre`（模块由 `|` 分隔），否则这些二进制文件将消失。

**其他兼容的 Python 包** 可以从附加组件的自定义脚本中安装（见下文部分）；该处的 `pip` 指向 Calibre-Web 自己的虚拟环境。此类脚本在每个启动时运行，必须如此，因为容器的可写层不会持久化。

### 自定义脚本和环境变量

此附加组件支持自定义脚本和环境变量：

- **自定义脚本**：参考 [在附加组件中运行自定义脚本](https://github.com/alexbelgium/hassio-addons/wiki/Running-custom-scripts-in-Addons)
- **env_vars 选项**：使用附加组件 `env_vars` 选项传递额外的环境变量（大写或小写名称）。详见 https://github.com/alexbelgium/hassio-addons/wiki/Add-Environment-variables-to-your-Addon-2 了解更多细节。

## 支持

在 github 上创建问题。

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
