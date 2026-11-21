# Home Assistant 附加组件：sabnzbd

我在业余时间维护此及其他 Home Assistant 附加组件：跟踪上游更改、HA 更改，并在真实硬件上进行测试需要花费大量时间（以及部分金钱）。我在大约 110 个附加组件中的 5-10 个上经常操作，因此我经常安装测试机器（并购买一些用于测试的服务，如 vpn），以进行故障排查和改进附加组件。

如果您使用该附加组件节省了我的时间或使您的设置更加简单，我将非常感激您的支持！

[![Buy me a coffee][donation-badge]](https://www.buymeacoffee.com/alexbelgium)
[![Donate via PayPal][paypal-badge]](https://www.paypal.com/donate/?hosted_button_id=DZFULJZTP3UQA)

## 附加组件信息

![Version](https://img.shields.io/badge/dynamic/yaml?label=Version&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fsabnzbd%2Fconfig.yaml)
![Ingress](https://img.shields.io/badge/dynamic/yaml?label=Ingress&query=%24.ingress&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fsabnzbd%2Fconfig.yaml)
![Arch](https://img.shields.io/badge/dynamic/yaml?color=success&label=Arch&query=%24.arch&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fsabnzbd%2Fconfig.yaml)

[![Codacy Badge](https://app.codacy.com/project/badge/Grade/9c6cf10bdbba45ecb202d7f579b5be0e)](https://www.codacy.com/gh/alexbelgium/hassio-addons/dashboard?utm_source=github.com&utm_medium=referral&utm_content=alexbelgium/hassio-addons&utm_campaign=Badge_Grade)
[![GitHub Super-Linter](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/weekly-supelinter.yaml?label=Lint%20code%20base)](https://github.com/alexbelgium/hassio-addons/actions/workflows/weekly-supelinter.yaml)
[![Builder](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/onpush_builder.yaml?label=Builder)](https://github.com/alexbelgium/hassio-addons/actions/workflows/onpush_builder.yaml)

[donation-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee-%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white
[paypal-badge]: https://img.shields.io/badge/Donate%20via%20PayPal-0070BA?logo=paypal&style=flat&logoColor=white

_感谢所有人将我的仓库列为星标！请点击下图将其列为星标，之后它将显示在右上角。谢谢！_

[![Stargazers repo roster for @alexbelgium/hassio-addons](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/.github/stars2.svg)](https://github.com/alexbelgium/hassio-addons/stargazers)

![downloads evolution](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/sabnzbd/stats.png)

## 介绍

[sabnzbd](http://sabnzbd.net/) 是一个用 C++ 编写的 Usenet 下载器，专为性能而设计，旨在通过使用极少的系统资源实现最大的下载速度。
此附加组件基于 Docker 镜像 https://github.com/linuxserver/docker-sabnzbd。

## 配置

Web 界面可在 <http://homeassistant:PORT> 或通过侧边栏使用 Ingress 访问。
默认用户名/密码：登录:`sabnzbd`，密码:`tegbzn6789`。
配置可通过应用 Web UI 进行，但以下选项除外。

### 选项

| 选项 | 类型 | 默认值 | 描述 |
|--------|------|---------|-------------|
| `PGID` | int | `0` | 文件权限组 ID |
| `PUID` | int | `0` | 文件权限用户 ID |
| `TZ` | str | | 时区（例如，`Europe/London`） |
| `localdisks` | str | | 要挂载的本地驱动器（例如，`sda1,sdb1,MYNAS`） |
| `networkdisks` | str | | 要挂载的 SMB 共享（例如，`//SERVER/SHARE`） |
| `cifsusername` | str | | 网络共享的 SMB 用户名 |
| `cifspassword` | str | | 网络共享的 SMB 密码 |
| `cifsdomain` | str | | 网络共享的 SMB 域 |

### 配置示例

```yaml
PGID: 0
PUID: 0
TZ: "Europe/London"
localdisks: "sda1,sdb1"
networkdisks: "//192.168.1.100/downloads,//nas.local/usenet"
cifsusername: "downloader"
cifspassword: "password123"
cifsdomain: "workgroup"
```

### 挂载驱动器

此附加组件支持挂载本地驱动器和远程 SMB 共享：

- **本地驱动器**：参见 [Add 多挂载本地驱动器](https://github.com/alexbelgium/hassio-addons/wiki/Mounting-Local-Drives-in-Addons)
- **远程共享**：参见 [Add 多挂载远程共享](https://github.com/alexbelgium/hassio-addons/wiki/Mounting-remote-shares-in-Addons)

### 自定义脚本和环境变量

此附加组件支持通过 `app_config` 映射使用自定义脚本和环境变量：

- **自定义脚本**：参见 [运行自定义脚本](https://github.com/alexbelgium/hassio-addons/wiki/Running-custom-scripts-in-Addons)
- **env_vars 选项**：使用附加组件的 `env_vars` 选项传递额外的环境变量（名称可大写或小写）。详情参见 https://github.com/alexbelgium/hassio-addons/wiki/Add-Environment-variables-to-your-Addon-2。

## 安装

此附加组件的安装非常直观，与其他附加组件的安装没有区别。

1. 将我的附加组件仓库添加到您的 Home Assistant 实例（在 supervisor 附加组件商店的右上角，或者如果您已配置了 HA，则点击下方的按钮）
   [![打开 Home Assistant 实例并显示添加工具箱仓库对话框，其中预填充了特定仓库 URL。](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2Falexbelgium%2Fhassio-addons)
2. 安装此附加组件。
3. 单击 `Save` 按钮以保存配置。
4. 将附加组件选项设置为您的偏好设置。
5. 启动附加组件。
6. 查看附加组件的日志，确认一切正常。
7. 打开 Web 界面并调整软件选项。

## 支持

在 GitHub 上创建问题。

## 插图

![illustration](https://sabnzbd.com/img/slider/artistdetails.png)

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
