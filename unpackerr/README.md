# Home Assistant 附加组件：Unpackerr

我在闲暇时间维护此及其他 Home Assistant 附加组件：跟进上游变更、HA 变更，并在真实硬件上进行测试（需要大量时间，甚至一些金钱）。我使用的附加组件大约有 5-10 个（在 110+ 个之中），因此我经常安装测试机（并购买一些我不自己使用的测试服务，如 vpn），以便诊断和改进附加组件。

如果您使用此附加组件节省了时间或简化了您的设置，我将不胜感激您的支持！

[![Buy me a coffee][donation-badge]](https://www.buymeacoffee.com/alexbelgium)
[![Donate via PayPal][paypal-badge]](https://www.paypal.com/donate/?hosted_button_id=DZFULJZTP3UQA)

## 附加组件信息

![版本](https://img.shields.io/badge/dynamic/yaml?label=Version&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Funpackerr%2Fconfig.yaml)
![Ingress](https://img.shields.io/badge/dynamic/yaml?label=Ingress&query=%24.ingress&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Funpackerr%2Fconfig.yaml)
![架构](https://img.shields.io/badge/dynamic/yaml?color=success&label=Arch&query=%24.arch&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Funpackerr%2Fconfig.yaml)

[![Codacy Badge](https://app.codacy.com/project/badge/Grade/9c6cf10bdbba45ecb202d7f579b5be0e)](https://www.codacy.com/gh/alexbelgium/hassio-addons/dashboard?utm_source=github.com&utm_medium=referral&utm_content=alexbelgium/hassio-addons&utm_campaign=Badge_Grade)
[![GitHub Super-Linter](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/weekly-supelinter.yaml?label=Lint%20code%20base)](https://github.com/alexbelgium/hassio-addons/actions/workflows/weekly-supelinter.yaml)
[![Builder](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/onpush_builder.yaml?label=Builder)](https://github.com/alexbelgium/hassio-addons/actions/workflows/onpush_builder.yaml)

[donation-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee-%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white
[paypal-badge]: https://img.shields.io/badge/Donate%20via%20PayPal-0070BA?logo=paypal&style=flat&logoColor=white

_感谢所有人星标了我的仓库！要星标它，请点击下面的图片，然后它就会显示在右上角。感谢！_

[![Stargazers repo roster for @alexbelgium/hassio-addons](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/.github/stars2.svg)](https://github.com/alexbelgium/hassio-addons/stargazers)

![download evolution](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/unpackerr/stats.png)

## 关于

---
出自作者 github 仓库说明：
[unpackerr](https://github.com/unpackerr/unpackerr) 作为守护进程运行在下载主机上。它会检查完成的下载并提取它们，以便 Lidarr、Radarr、Readarr 和 Sonarr 可以导入它们。目前有一些工具可供选择，用于在下载客户端完成后提取和删除文件。

此附加组件基于 docker 镜像：https://hub.docker.com/r/hotio/unpackerr

## 安装

---

此附加组件的安装非常直接，与其他附加组件的安装方式没有区别。

1. 将我的附加组件仓库添加到您的 Home Assistant 实例中（在 supervisor 附加组件商店右上角，或者如果您已配置好我的 HA，请点击下方的按钮）
   [![Open your Home Assistant instance and show the add add-on repository dialog with a specific repository URL pre-filled.](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2Falexbelgium%2Fhassio-addons)
1. 安装此附加组件。
1. 点击 `Save` 按钮以保存配置。
1. 将附加组件选项设置为您的偏好设置。
1. 启动附加组件。
1. 检查附加组件的日志，以确认一切正常。
1. 打开 webUI 并调整软件选项。

## 配置

此附加组件没有 Web 界面——它运行在后台服务中。Unpackerr 会监控完成的下载并自动提取归档文件。

### 设置步骤

1. 配置您的下载客户端，将完成的下载保存到提取路径
2. 设置监控路径，提取的文件应放置于此
3. 配置 *arr 应用程序，监控监控路径以实现导入
4. 启动附加组件，监控日志以确认活动

### 选项

| 选项 | 类型 | 默认值 | 描述 |
|--------|------|---------|-------------|
| `PGID` | int | `1000` | 文件权限的组 ID |
| `PUID` | int | `1000` | 文件权限的用户 ID |
| `TZ` | str | | 时区（例如，`Europe/London`） |
| `extraction_path` | str | `/share/downloads_packed` | 下载的归档文件所在的位置 |
| `watch_path` | str | `/share/downloads_unpacked` | 放置提取文件的路径 |
| `localdisks` | str | | 本地磁盘挂载点（例如，`sda1,sdb1`）。在磁盘后添加文件夹仅挂载该文件夹。例如，`MYNAS/public` 仅挂载该文件夹，位于 `/mnt/MYNAS/public`。文件夹挂载需要 2026-09-19 之后发布的附加组件版本。 |
| `networkdisks` | str | | SMB 共享挂载点（例如，`//SERVER/SHARE`） |
| `cifsusername` | str | | SMB 共享的用户名 |
| `cifspassword` | str | | SMB 共享的密码 |
| `cifsdomain` | str | | SMB 共享的域 |

### 示例配置

```yaml
PGID: 1000
PUID: 1000
TZ: "Europe/London"
extraction_path: "/share/downloads/completed"
watch_path: "/share/downloads/extracted"
localdisks: "sda1,sdb1"
networkdisks: "//192.168.1.100/downloads"
cifsusername: "dluser"
cifspassword: "password123"
cifsdomain: "workgroup"
```

### 与 *arr 应用程序集成

配置您的应用程序以使用合适的路径：
- **下载客户端**：将完成的下载保存到 `extraction_path`
- **Sonarr/Radarr/Lidarr**：监控 `watch_path` 以实现导入
- **文件结构**：保持一致的文件文件夹结构

### 挂载磁盘

此附加组件支持挂载本地磁盘和远程 SMB 共享：

- **本地磁盘**：请参阅 [附加组件中的本地磁盘挂载](https://github.com/alexbelgium/hassio-addons/wiki/Mounting-Local-Drives-in-Addons)
- **远程共享**：请参阅 [附加组件中的远程共享挂载](https://github.com/alexbelgium/hassio-addons/wiki/Mounting-remote-shares-in-Addons)

### 自定义脚本和环境变量

此附加组件支持通过 `app_config` 映射执行自定义脚本和环境变量注入：

- **自定义脚本**：请参阅 [附加组件中的自定义脚本运行](https://github.com/alexbelgium/hassio-addons/wiki/Running-custom-scripts-in-Addons)
- **env_vars 选项**：使用附加组件的 `env_vars` 选项传递额外的环境变量（名称可大写或小写）。详情请见 https://github.com/alexbelgium/hassio-addons/wiki/Add-Environment-variables-to-your-Addon-2

在 `/app_configs/db21ed7f_unpackerr/unpackerr.conf` 中，您可以按照此环境变量列表设置所有变量：https://github.com/davidnewhall/unpackerr

## 支持

在 github 上创建问题

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
