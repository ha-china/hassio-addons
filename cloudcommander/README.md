# Home Assistant 附加组件：Cloudcommander

我利用业余时间维护本添加组件及其他 Home Assistant 附加组件：追踪上游更改、HA 更改，并在真实硬件上进行测试会花费大量时间（和一些金钱）。我使用大约 5-10 个附加组件，因此我安装测试机器（并购买一些测试服务如 vpn），即使我自己不使用它们，也用于排查问题和改进附加组件。

如果您通过使用此附加组件节省了时间或使您的设置变得更简便，我将非常感激您的支持！

[![Buy me a coffee][donation-badge]](https://www.buymeacoffee.com/alexbelgium)
[![Donate via PayPal][paypal-badge]](https://www.paypal.com/donate/?hosted_button_id=DZFULJZTP3UQA)

## 附加组件信息

![版本](https://img.shields.io/badge/dynamic/yaml?label=Version&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fcloudcommander%2Fconfig.yaml)
![Ingress](https://img.shields.io/badge/dynamic/yaml?label=Ingress&query=%24.ingress&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fcloudcommander%2Fconfig.yaml)
![架构](https://img.shields.io/badge/dynamic/yaml?color=success&label=Arch&query=%24.arch&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fcloudcommander%2Fconfig.yaml)

[![Codacy Badge](https://app.codacy.com/project/badge/Grade/9c6cf10bdbba45ecb202d7f579b5be0e)](https://www.codacy.com/gh/alexbelgium/hassio-addons/dashboard?utm_source=github.com&utm_medium=referral&utm_content=alexbelgium/hassio-addons&utm_campaign=Badge_Grade)
[![GitHub Super-Linter](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/weekly-supelinter.yaml?label=Lint%20code%20base)](https://github.com/alexbelgium/hassio-addons/actions/workflows/weekly-supelinter.yaml)
[![Builder](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/onpush_builder.yaml?label=Builder)](https://github.com/alexbelgium/hassio-addons/actions/workflows/onpush_builder.yaml)

[donation-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee-%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white
[paypal-badge]: https://img.shields.io/badge/Donate%20via%20PayPal-0070BA?logo=paypal&style=flat&logoColor=white

_感谢所有给我仓库加星标 (Star) 的人！想给它加星标，请点击下方的图片，它就会出现在右上角。感谢！_

[![Stargazers repo roster for @alexbelgium/hassio-addons](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/.github/stars2.svg)](https://github.com/alexbelgium/hassio-addons/stargazers)

![下载趋势](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/cloudcommander/stats.png)

## 关于

[Cloud Commander](https://github.com/coderaiser/cloudcmd) 是一个带有控制台和编辑器的 Web 文件管理器。
此附加组件基于 [Docker 镜像](https://hub.docker.com/r/coderaiser/cloudcmd)。

## 配置

Web 界面可通过 <http://homeassistant:8000> 或侧边栏的 Ingress 访问。
配置可以通过应用 Web 界面完成，但以下选项除外。

### 选项

| 选项 | 类型 | 默认值 | 描述 |
|------|------|--------|------|
| `CUSTOM_OPTIONS` | str | | 自定义命令行选项（例如，`--name Homeassistant`） |
| `DROPBOX_TOKEN` | str | | Dropbox 集成令牌（参见 https://cloudcmd.io/） |
| `localdisks` | str | | 要挂载的本地驱动器（例如，`sda1,sdb1,MYNAS`）。在驱动器后添加文件夹以仅挂载该文件夹，例如 `MYNAS/public` 仅挂载该文件夹，路径为 `/mnt/MYNAS/public`。文件系统挂载需要 2026-09-19 之后发布的附加组件版本。 |
| `networkdisks` | str | | 要挂载的网络 SMB 共享（例如，`//SERVER/SHARE`） |
| `cifsusername` | str | | 网络共享的 SMB 用户名 |
| `cifspassword` | str | | 网络共享的 SMB 密码 |
| `cifsdomain` | str | | 网络共享的 SMB 域 |
| `smbv1` | bool | `false` | 启用 SMB v1 协议 |

### 示例配置

```yaml
CUSTOM_OPTIONS: "--name Homeassistant"
DROPBOX_TOKEN: "your-dropbox-token"
localdisks: "sda1,sdb1"
networkdisks: "//192.168.1.100/files"
cifsusername: "fileuser"
cifspassword: "password123"
cifsdomain: "workgroup"
smbv1: false
```

### 挂载驱动器

此附加组件支持挂载本地驱动器和远程 SMB 共享：

- **本地驱动器**：请参阅 [附加组件中的本地驱动器挂载](https://github.com/alexbelgium/hassio-addons/wiki/Mounting-Local-Drives-in-Addons)
- **远程共享**：请参阅 [附加组件中的远程共享挂载](https://github.com/alexbelgium/hassio-addons/wiki/Mounting-remote-shares-in-Add-ons)

### 自定义脚本和环境变量

此附加组件支持自定义脚本和环境变量：

- **自定义脚本**：请参阅 [附加组件中运行自定义脚本](https://github.com/alexbelgium/hassio-addons/wiki/Running-custom-scripts-in-Addons)
- **env_vars 选项**：使用附加组件的 `env_vars` 选项传递额外的环境变量（大小写名称均可）。详细内容请参阅 https://github.com/alexbelgium/hassio-addons/wiki/Add-Environment-variables-to-your-Addon-2。

## 安全

默认情况下，Cloud Commander 不带认证运行，且其直接端口（8000）已发布。您可以在网络中访问该端点的任何人可以读取、修改和删除附加组件中映射的每个文件夹，包括您的 Home Assistant 配置和备份。在这种情况下，附加组件会在启动时记录一条警告信息。

要保护它，请在 `CUSTOM_OPTIONS` 中添加 `--auth --username <user> --password <password>`，或者在附加组件的网络设置中禁用心端口并使用 Ingress。

## 安装

此附加组件的安装非常简单，与安装任何其他 Hass.io 附加组件没有什么不同。

1. 将我的附加组件库添加到您的 Home Assistant 实例（在 supervisor 附加组件商店的右上角，或者如果您已配置了我的 HA，请单击下方的按钮）
   [![打开您的 Home Assistant 实例并显示已预填特定仓库 URL 的附加组件库对话框。](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2Falexbelgium%2Fhassio-addons)
2. 安装此附加组件。
3. 单击 `Save` 按钮以保存您的配置。
4. 启动附加组件。
5. 查看附加组件的日志，以确认一切是否正常。

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
