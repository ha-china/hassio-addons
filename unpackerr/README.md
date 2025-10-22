# Home assistant add-on: Unpackerr

[![Donate][donation-badge]](https://www.buymeacoffee.com/alexbelgium)
[![Donate][paypal-badge]](https://www.paypal.com/donate/?hosted_button_id=DZFULJZTP3UQA)

![Version](https://img.shields.io/badge/dynamic/yaml?label=版本&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Funpackerr%2Fconfig.yaml)
![Ingress](https://img.shields.io/badge/dynamic/yaml?label=Ingress&query=%24.ingress&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Funpackerr%2Fconfig.yaml)
![Arch](https://img.shields.io/badge/dynamic/yaml?color=success&label=Arch&query=%24.arch&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Funpackerr%2Fconfig.yaml)

[![Codacy Badge](https://app.codacy.com/project/badge/Grade/9c6cf10bdbba45ecb202d7f579b5be0e)](https://www.codacy.com/gh/alexbelgium/hassio-addons/dashboard?utm_source=github.com&utm_medium=referral&utm_content=alexbelgium/hassio-addons&utm_campaign=Badge_Grade)
[![GitHub Super-Linter](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/weekly-supelinter.yaml?label=Lint%20code%20base)](https://github.com/alexbelgium/hassio-addons/actions/workflows/weekly-supelinter.yaml)
[![Builder](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/onpush_builder.yaml?label=Builder)](https://github.com/alexbelgium/hassio-addons/actions/workflows/onpush_builder.yaml)

[donation-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee%20(no%20paypal)-%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white
[paypal-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee%20with%20Paypal-0070BA?logo=paypal&style=flat&logoColor=white

_感谢所有给我的仓库点赞的人！要点赞，请点击下面的图片，然后它将出现在右上角。谢谢！_

[![Stargazers repo roster for @alexbelgium/hassio-addons](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/.github/stars2.svg)](https://github.com/alexbelgium/hassio-addons/stargazers)

![下载量趋势](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/unpackerr/stats.png)

## 关于

---
从作者的GitHub中提取：
[unpackerr](https://github.com/unpackerr/unpackerr) 在您的下载主机上作为守护进程运行。它会检查完成的下载并将其提取出来，以便Lidarr、Radarr、Readarr、Sonarr可以导入它们。在客户端下载文件后进行提取和删除文件的选择有很多。

这个插件基于以下Docker镜像：https://hub.docker.com/r/hotio/unpackerr

## 安装

---

这个插件的安装非常简单，与安装其他插件没有区别。

1. 将我的插件仓库添加到您的home assistant实例中（在supervisor插件商店的右上角，或者如果您已经配置了我的HA，请点击下面的按钮）
   [![打开您的Home Assistant实例并显示带有特定仓库URL预填的添加插件仓库对话框。](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2Falexbelgium%2Fhassio-addons)
1. 安装这个插件。
1. 点击“保存”按钮以保存您的配置。
1. 设置插件的选项以符合您的偏好。
1. 启动插件。
1. 检查插件的日志以查看是否一切正常。
1. 打开WebUI并调整软件选项

## 配置

这个插件没有Web界面 - 它作为后台服务运行。
Unpackerr监控完成的下载并自动提取存档。

### 设置步骤

1. 配置您的下载客户端以将完成的下载保存到提取路径
2. 设置提取文件应放置的监控路径
3. 配置*arr应用程序以监控监控路径以进行导入
4. 启动插件并监控日志以查看活动

### 选项

| 选项 | 类型 | 默认 | 描述 |
|------|------|------|------|
| `PGID` | int | `1000` | 文件权限的组ID |
| `PUID` | int | `1000` | 文件权限的用户ID |
| `TZ` | str | | 时区（例如，`Europe/London`） |
| `extraction_path` | str | `/share/downloads_packed` | 下载存档所在的路径 |
| `watch_path` | str | `/share/downloads_unpacked` | 提取文件放置的路径 |
| `localdisks` | str | | 要挂载的本地驱动器（例如，`sda1,sdb1`） |
| `networkdisks` | str | | 要挂载的SMB共享（例如，`//SERVER/SHARE`） |
| `cifsusername` | str | | SMB网络共享的用户名 |
| `cifspassword` | str | | SMB网络共享的密码 |
| `cifsdomain` | str | | SMB网络共享的域 |

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

### 与*arr应用程序的集成

配置您的应用程序以使用适当的路径：
- **下载客户端**：将完成的下载保存到`extraction_path`
- **Sonarr/Radarr/Lidarr**：监控`watch_path`以进行导入
- **文件结构**：保持一致的文件夹结构

### 挂载驱动器

这个插件支持挂载本地驱动器和远程SMB共享：

- **本地驱动器**：参见[在插件中挂载本地驱动器](https://github.com/alexbelgium/hassio-addons/wiki/Mounting-Local-Drives-in-Addons)
- **远程共享**：参见[在插件中挂载远程共享](https://github.com/alexbelgium/hassio-addons/wiki/Mounting-remote-shares-in-Addons)

### 自定义脚本和环境变量

这个插件支持通过`addon_config`映射执行自定义脚本和环境变量注入：

- **自定义脚本**：参见[在插件中运行自定义脚本](https://github.com/alexbelgium/hassio-addons/wiki/Running-custom-scripts-in-Addons)
- **环境变量**：参见[向您的插件添加环境变量](https://github.com/alexbelgium/hassio-addons/wiki/Add-Environment-variables-to-your-Addon)

在 /addon_configs/db21ed7f_unpackerr/unpackerr.conf中，您可以按照这个环境变量列表设置所有变量：https://github.com/davidnewhall/unpackerr

## 支持

在github上创建问题

[repository]: https://github.com/alexbelgium/hassio-addons