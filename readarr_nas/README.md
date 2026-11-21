# Home assistant 附加组件：readarr

我在空闲时间维护此及其他 Home Assistant 附加组件：跟踪上游更改、HA 更改，以及在真实硬件上进行测试需要大量时间（以及一些金钱）。我使用的加组件约为 110 个中的 5-10 个，所以我经常安装测试机（并购买某些测试服务，如 vpn），即使我不亲自使用它们，也会用于排查问题和改进附加组件。

如果您能因此节省时间或使您的设置更易于操作，我将不胜感激！

[![Buy me a coffee][donation-badge]](https://www.buymeacoffee.com/alexbelgium)
[![Donate via PayPal][paypal-badge]](https://www.paypal.com/donate/?hosted_button_id=DZFULJZTP3UQA)

## 附加组件信息

![版本](https://img.shields.io/badge/dynamic/yaml?label=版本&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Freadarr%2Fconfig.yaml)
![Ingress](https://img.shields.io/badge/dynamic/yaml?label=Ingress&query=%24.ingress&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Freadarr%2Fconfig.yaml)
![架构](https://img.shields.io/badge/dynamic/yaml?color=success&label=架构&query=%24.arch&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Freadarr%2Fconfig.yaml)

[![Codacy 徽章](https://app.codacy.com/project/badge/Grade/9c6cf10bdbba45ecb202d7f579b5be0e)](https://www.codacy.com/gh/alexbelgium/hassio-addons/dashboard?utm_source=github.com&utm_medium=referral&utm_content=alexbelgium/hassio-addons&utm_campaign=Badge_Grade)
[![GitHub Super-Linter](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/weekly-supelinter.yaml?label=代码审查)](https://github.com/alexbelgium/hassio-addons/actions/workflows/weekly-supelinter.yaml)
[![构建者](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/onpush_builder.yaml?label=构建者)](https://github.com/alexbelgium/hassio-addons/actions/workflows/onpush_builder.yaml)

[donation-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee-%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white
[paypal-badge]: https://img.shields.io/badge/Donate%20via%20PayPal-0070BA?logo=paypal&style=flat&logoColor=white

_感谢所有给我 repo 点星的人！要给我点星，请点击下面的图片，然后它就会出现在右上角。感谢！_

[![@alexbelgium/hassio-addons 的 Stargazers 库名单](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/.github/stars2.svg)](https://github.com/alexbelgium/hassio-addons/stargazers)

![下载量趋势](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/readarr/stats.png)

## 关于

---

[Readarr](https://github.com/Readarr/Readarr) 是为 Usenet 和 BitTorrent 用户设计的电子书收集管理器。它可以监测多个 RSS .feed 以查找来自您喜爱的作者的新书，并会与客户端和索引器进行交互，以获取、排序和重命名它们。它是一个电子书管理器及自动化工具（Sonarr for Ebooks）。

此附加组件基于 Docker 镜像 https://github.com/linuxserver/docker-readarr。

## 安装

---

此附加组件的安装非常简单直观，与其他任何附加组件的安装方式并无不同。

1. 将我的附加组件存储库添加到您的 Home Assistant 实例中（在 supervisor 附加组件商店顶部右侧，如果您已配置了我的 HA，点击下面的按钮）
   [![打开 Home Assistant 实例并显示带有预填充的特定存储库 URL 的添加附加组件存储库对话框。](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2Falexbelgium%2Fhassio-addons)
1. 安装此附加组件。
1. 点击“保存”按钮以保存您的配置。
1. 将附加组件选项设置为您偏好的内容
1. 启动附加组件。
1. 检查附加组件的日志，看一切是否正常。
1. 打开 webUI 并调整软件选项

## 配置

WebUI 可在 <http://homeassistant:8787/readarr> 或通过侧边栏使用 Ingress 访问。除了以下选项外，配置均可通过应用 webUI 完成。

### 选项

| 选项 | 类型 | 默认值 | 描述 |
|------|------|--------|------|
| `PGID` | int | `0` | 文件权限的组 ID |
| `PUID` | int | `0` | 文件权限的用户 ID |
| `TZ` | str | | 时区（例如，`Europe/London`） |
| `connection_mode` | list | `ingress_noauth` | 连接模式（ingress_noauth/noingress_auth/ingress_auth） |
| `localdisks` | str | | 本地挂载驱动器（例如，`sda1,sdb1,MYNAS`）。在驱动器名称后添加要仅挂载该文件夹，例如 `MYNAS/public` 仅挂载该文件夹，位于 `/mnt/MYNAS/public`。文件夹挂载需要 2026-09-19 之后发布的附加组件版本。 |
| `networkdisks` | str | | 挂载的 SMB 共享（例如，`//SERVER/SHARE`） |
| `cifsusername` | str | | 网络共享的 SMB 用户名 |
| `cifspassword` | str | | 网络共享的 SMB 密码 |
| `cifsdomain` | str | | 网络共享的 SMB 域 |

### 连接模式

- `ingress_noauth` - 默认模式，禁用认证以实现无缝的 Ingress 集成
- `noingress_auth` - 禁用 Ingress 以停止使用外部 URL 并移除外部（无登录）模式；在应用程序本身中设置登录（请参见安全）
- `ingress_auth` - 启用 Ingress 并移除外部（无登录）模式；在应用程序本身中设置登录（请参见安全）

### 示例配置

```yaml
PGID: 0
PUID: 0
TZ: "Europe/London"
connection_mode: "ingress_noauth"
localdisks: "sda1,sdb1"
networkdisks: "//192.168.1.100/books,//nas.local/ebooks"
cifsusername: "bookuser"
cifspassword: "password123"
cifsdomain: "workgroup"
```

### 挂载驱动器

此附加组件支持挂载本地驱动器及远程 SMB 共享：

- **本地驱动器**：请参阅 [附加组件中的挂载本地驱动器](https://github.com/alexbelgium/hassio-addons/wiki/Mounting-Local-Drives-in-Addons)
- **远程共享**：请参阅 [附加组件中的挂载远程共享](https://github.com/alexbelgium/hassio-addons/wiki/Mounting-remote-shares-in-Addons)

### 自定义脚本和环境变量

此附加组件支持自定义脚本和环境变量：

- **自定义脚本**：请参阅 [运行附加组件中的自定义脚本](https://github.com/alexbelgium/hassio-addons/wiki/Running-custom-scripts-in-Addons)
- **env_vars 选项**：使用附加组件的 `env_vars` 选项传递额外的环境变量（大小写无关）。有关详细信息，请查看 https://github.com/alexbelgium/hassio-addons/wiki/Add-Environment-variables-to-your-Addon-2。

您可以通过创建 `/app_configs/xxx-readarr_nas/readarr_nas.yml` 来添加环境变量：

```yaml
TZ: Europe/Paris
```

## 安全

使用默认的 `connection_mode: ingress_noauth`，Readarr 运行时无需认证，其直接端口（8787）也已发布。您的网络中任何能够访问该端口的人员都无需登录即可使用它并更改其设置。在这种情况下，附加组件会在启动时记录警告信号。要对其进行保护，请将 `connection_mode` 设置为 `ingress_auth` 并在 Readarr 中设置登录（设置 > 常规 > 安全，将 Authentication Required 设置为 Enabled，不要禁用本地地址），或者在附加组件网络设置中禁用端口并使用 Ingress。

## 支持

在 github 上创建问题

## 图示

---

![图示](https://readarr.com/img/slider/artistdetails.png)

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
