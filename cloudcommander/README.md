# Home Assistant 扩展：Cloudcommander

我在业余时间维护此扩展及其他 Home Assistant 扩展：跟踪上游更改、HA 更改的变化以及在真实硬件上进行测试需要大量时间（和一些金钱）。我日常使用的扩展数量在 5-10 个左右，所以我安装测试机器（并购买一些 myself 不使用的测试服务，如 vpn），以便用于故障排查和改进扩展。

如果您使用此扩展节省时间或让您的设置更简单，我将非常感激您给予支持！

[![Buy me a coffee][donation-badge]](https://www.buymeacoffee.com/alexbelgium)
[![Donate via PayPal][paypal-badge]](https://www.paypal.com/donate/?hosted_button_id=DZFULJZTP3UQA)

## 扩展信息

![版本](https://img.shields.io/badge/dynamic/yaml?label=Version&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fcloudcommander%2Fconfig.yaml)
![Ingress](https://img.shields.io/badge/dynamic/yaml?label=Ingress&query=%24.ingress&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fcloudcommander%2Fconfig.yaml)
![架构](https://img.shields.io/badge/dynamic/yaml?color=success&label=Arch&query=%24.arch&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fcloudcommander%2Fconfig.yaml)

[![Codacy 徽章](https://app.codacy.com/project/badge/Grade/9c6cf10bdbba45ecb202d7f579b5be0e)](https://www.codacy.com/gh/alexbelgium/hassio-addons/dashboard?utm_source=github.com&utm_medium=referral&utm_content=alexbelgium/hassio-addons&utm_campaign=Badge_Grade)
[![GitHub Super-Linter](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/weekly-supelinter.yaml?label=代码库检查)](https://github.com/alexbelgium/hassio-addons/actions/workflows/weekly-supelinter.yaml)
[![构建者](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/onpush_builder.yaml?label=构建者)](https://github.com/alexbelgium/hassio-addons/actions/workflows/onpush_builder.yaml)

[donation-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee-%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white
[paypal-badge]: https://img.shields.io/badge/Donate%20via%20PayPal-0070BA?logo=paypal&style=flat&logoColor=white

_感谢所有人给我的仓库加星！点击下方图片给星，它就会被显示在右上角。谢谢！_

[![@alexbelgium/hassio-addons 的 Star 者仓库名单](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/.github/stars2.svg)](https://github.com/alexbelgium/hassio-addons/stargazers)

![下载量走势图](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/cloudcommander/stats.png)

## 关于

[Cloud Commander](https://github.com/coderaiser/cloudcmd) 是一个带有控制台和编辑器的网络文件管理器。
此扩展基于 [docker 镜像](https://hub.docker.com/r/coderaiser/cloudcmd)。

## 配置

Webui 可以找到在 <http://homeassistant:8000> 或通过侧边栏使用 Ingress。
配置可以通过 app webUI 进行，除了以下选项。

### 选项

| 选项 | 类型 | 默认值 | 描述 |
|--------|------|---------|-------------|
| `CUSTOM_OPTIONS` | str | | 自定义 CLI 选项（例如，`--name Homeassistant`） |
| `DROPBOX_TOKEN` | str | | Dropbox 集成 token（参见 https://cloudcmd.io/） |
| `localdisks` | str | | 要挂载的本地驱动器（例如，`sda1,sdb1,MYNAS`）。在驱动器后添加文件夹以仅挂载该文件夹，例如 `MYNAS/public` 仅挂载该文件夹，路径为 `/mnt/MYNAS/public`。文件夹挂载需要 2026-09-19 之后发布的扩展版本。 |
| `networkdisks` | str | | 要挂载的 SMB 共享（例如，`//SERVER/SHARE`） |
| `cifsusername` | str | | 用于网络共享的 SMB 用户名 |
| `cifspassword` | str | | 用于网络共享的 SMB 密码 |
| `cifsdomain` | str | | 用于网络共享的 SMB 域名 |
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

此扩展支持挂载本地驱动器和远程 SMB 共享：

- **本地驱动器**：见 [附加组件中挂载本地驱动器](https://github.com/alexbelgium/hassio-addons/wiki/Mounting-Local-Drives-in-Addons)
- **远程共享**：见 [附加组件中挂载远程共享](https://github.com/alexbelgium/hassio-addons/wiki/Mounting-remote-shares-in-Addons)

### 自定义脚本和环境变量

此扩展支持自定义脚本和环境变量：

- **自定义脚本**：见 [运行附加组件中的自定义脚本](https://github.com/alexbelgium/hassio-addons/wiki/Running-custom-scripts-in-Addons)
- **env_vars 选项**：使用附加组件的 `env_vars` 选项来传递额外的环境变量（大小写名称均可）。有关详细信息，请参见 https://github.com/alexbelgium/hassio-addons/wiki/Add-Environment-variables-to-your-Addon-2。

## 安全

默认情况下，Cloud Commander 不带身份验证运行，其直接端口（8000）已发布。网络中任何可以访问该端口的人都可以读取、修改和删除附加组件中映射的所有文件夹，包括您的 Home Assistant 配置和备份。在此情况下，附加组件在启动时记录警告。

要对其进行保护，请将 `--auth --username <user> --password <password>` 添加到 `CUSTOM_OPTIONS`，或者在附加组件网络设置中禁用端口并使用 Ingress。

## 安装

此附加组件的安装非常简单，与其他任何 Hass.io 附加组件的安装没有区别。

1. 将我的附加组件仓库添加到 Home Assistant 实例（在 supervisor 扩展商店右上角，或者如果您已配置了我的 HA，请点击下方按钮）
   [![打开您的 Home Assistant 实例并显示带有特定仓库 URL 预填的附加组件仓库对话框。](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2Falexbelgium%2Fhassio-addons)
1. 安装此附加组件。
1. 点击 `保存` 按钮以存储您的配置。
1. 启动附加组件。
1. 检查附加组件日志，看看是否一切正常。

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
