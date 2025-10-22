# Home assistant add-on: Webtop KDE Alpine

[![Donate][donation-badge]](https://www.buymeacoffee.com/alexbelgium)
[![Donate][paypal-badge]](https://www.paypal.com/donate/?hosted_button_id=DZFULJZTP3UQA)

![Version](https://img.shields.io/badge/dynamic/yaml?label=版本&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fwebtop%2Fconfig.yaml)
![Ingress](https://img.shields.io/badge/dynamic/yaml?label=Ingress&query=%24.ingress&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fwebtop%2Fconfig.yaml)
![Arch](https://img.shields.io/badge/dynamic/yaml?color=success&label=Arch&query=%24.arch&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fwebtop%2Fconfig.yaml)

[![Codacy Badge](https://app.codacy.com/project/badge/Grade/9c6cf10bdbba45ecb202d7f579b5be0e)](https://www.codacy.com/gh/alexbelgium/hassio-addons/dashboard?utm_source=github.com&utm_medium=referral&utm_content=alexbelgium/hassio-addons&utm_campaign=Badge_Grade)
[![GitHub Super-Linter](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/weekly-supelinter.yaml?label=Lint%20code%20base)](https://github.com/alexbelgium/hassio-addons/actions/workflows/weekly-supelinter.yaml)
[![Builder](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/onpush_builder.yaml?label=Builder)](https://github.com/alexbelgium/hassio-addons/actions/workflows/onpush_builder.yaml)

[donation-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee%20(no%20paypal)-%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white
[paypal-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee%20with%20Paypal-0070BA?logo=paypal&style=flat&logoColor=white

_感谢所有给我的仓库点赞的人！要点赞，请点击下面的图片，然后它就会在右上角。谢谢！_

[![Stargazers repo roster for @alexbelgium/hassio-addons](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/.github/stars2.svg)](https://github.com/alexbelgium/hassio-addons/stargazers)

![downloads evolution](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/webtop/stats.png)

## 关于

[webtop](https://github.com/webtop/webtop) 是一个可通过任何现代网络浏览器访问的完整桌面环境。
这个插件基于 Docker 镜像 https://github.com/linuxserver/docker-webtop

## 配置

Webui 可以通过 Ingress 或在 <http://homeassistant:PORT> 找到。端口默认是禁用的，但可以通过插件选项启用。

默认情况下，镜像基于 abc 用户，我们建议使用这个用户，因为所有的 init/config 都基于它。默认密码也是 abc。如果你要更改这个密码并在访问界面时需要认证，只需在 webtop 中的图形终端中运行 passwd。然后当访问网络界面时使用路径：

http://localhost:3000/?login=true

应用程序的安装不是持久的，你需要通过插件选项来安装它们。然而，它们的配置是持久的。

如果图形设备不工作，使用 DRINODE 功能来选择你的图形设备。

查看所有潜在的环境变量：https://docs.linuxserver.io/images/docker-webtop#optional-environment-variables

### 选项

| 选项 | 类型 | 默认值 | 描述 |
|------|------|--------|------|
| `PGID` | 整数 | `0` | 文件权限的组 ID |
| `PUID` | 整数 | `0` | 文件权限的用户 ID |
| `TZ` | 字符串 | | 时区（例如，`Europe/London`） |
| `additional_apps` | 字符串 | `engrampa,libreoffice` | 要安装的应用（用逗号分隔） |
| `DRINODE` | 字符串 | `/dev/dri/renderD128` | 图形设备路径 |
| `DNS_server` | 字符串 | `8.8.8.8` | 自定义 DNS 服务器 |
| `KEYBOARD` | 字符串 | `en-us-qwerty` | 键盘布局 |
| `PASSWORD` | 字符串 | | 自定义网络界面的密码 |
| `data_location` | 字符串 | | 自定义数据存储路径 |
| `localdisks` | 字符串 | | 要挂载的本地驱动器（例如，`sda1,sdb1`） |
| `networkdisks` | 字符串 | | 要挂载的 SMB 共享（例如，`//SERVER/SHARE`） |
| `cifsusername` | 字符串 | | SMB 共享的网络用户名 |
| `cifspassword` | 字符串 | | SMB 共享的网络密码 |
| `cifsdomain` | 字符串 | | SMB 共享的网络域 |

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

这个插件支持挂载本地驱动器和远程 SMB 共享：

- **本地驱动器**：参见 [在插件中挂载本地驱动器](https://github.com/alexbelgium/hassio-addons/wiki/Mounting-Local-Drives-in-Addons)
- **远程共享**：参见 [在插件中挂载远程共享](https://github.com/alexbelgium/hassio-addons/wiki/Mounting-remote-shares-in-Addons)

### 自定义脚本和环境变量

这个插件支持自定义脚本执行和环境变量注入：

- **自定义脚本**：参见 [在插件中运行自定义脚本](https://github.com/alexbelgium/hassio-addons/wiki/Running-custom-scripts-in-Addons)
- **环境变量**：参见 [向你的插件添加环境变量](https://github.com/alexbelgium/hassio-addons/wiki/Add-Environment-variables-to-your-Addon)

### 其他资源

查看所有潜在的环境变量：https://docs.linuxserver.io/images/docker-webtop#optional-environment-variables

## 安装

这个插件的安装非常简单，与安装其他插件没有区别。

1. 将我的插件仓库添加到你的 home assistant 实例中（在 supervisor 插件商店的右上角，或如果你已经配置了我的 HA，点击下面的按钮）
   [![打开你的 Home Assistant 实例并显示带有特定仓库 URL 预填充的添加插件仓库对话框。](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2Falexbelgium%2Fhassio-addons)
2. 安装这个插件。
3. 点击 `保存` 按钮以保存你的配置。
4. 设置插件选项以符合你的偏好。
5. 启动插件。
6. 检查插件的日志以查看是否一切正常。
7. 打开网络界面并调整软件选项

## 支持

在 github 上创建一个问题

## 插图

![illustration](https://www.linuxserver.io/user/pages/content/images/2021/05/menu.png)

[repository]: https://github.com/alexbelgium/hassio-addons