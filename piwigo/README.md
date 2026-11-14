# Home Assistant 附加组件：Piwigo

我在业余时间维护此及其他的 Home Assistant 附加组件：跟踪上游更改、Home Assistant 更新以及对真实硬件进行测试花费了大量时间（和一些金钱）。我大约使用了 110 个以上的附加组件中 5-10 个，因此我安装了一些测试机器（并购买了如 vpn 之类的测试服务）供我自己不使用的地方进行故障排查和改进附加组件

如果这个附加组件节省了您的时间或让您的设置更简单，我将非常感激您的支持！

[![Buy me a coffee][donation-badge]](https://www.buymeacoffee.com/alexbelgium)
[![Donate via PayPal][paypal-badge]](https://www.paypal.com/donate/?hosted_button_id=DZFULJZTP3UQA)

## 附加组件信息

![版本](https://img.shields.io/badge/dynamic/yaml?label=版本&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fpiwigo%2Fconfig.yaml)
![Ingress](https://img.shields.io/badge/dynamic/yaml?label=Ingress&query=%24.ingress&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fpiwigo%2Fconfig.yaml)
![架构](https://img.shields.io/badge/dynamic/yaml?color=success&label=架构&query=%24.arch&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fpiwigo%2Fconfig.yaml)

[![Codacy Badge](https://app.codacy.com/project/badge/Grade/9c6cf10bdbba45ecb202d7f579b5be0e)](https://www.codacy.com/gh/alexbelgium/hassio-addons/dashboard?utm_source=github.com&utm_medium=referral&utm_content=alexbelgium/hassio-addons&utm_campaign=Badge_Grade)
[![GitHub Super-Linter](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/weekly-supelinter.yaml?label=Lint%20code%20base)](https://github.com/alexbelgium/hassio-addons/actions/workflows/weekly-supelinter.yaml)
[![构建者](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/onpush_builder.yaml?label=构建者)](https://github.com/alexbelgium/hassio-addons/actions/workflows/onpush_builder.yaml)

[donation-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee-%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white
[paypal-badge]: https://img.shields.io/badge/Donate%20via%20PayPal-0070BA?logo=paypal&style=flat&logoColor=white

_感谢大家给我的仓库点星！要给它点星，请点击下面的图片，然后它将被放在右上角。谢谢！_

[![Stargazers repo roster for @alexbelgium/hassio-addons](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/.github/stars2.svg)](https://github.com/alexbelgium/hassio-addons/stargazers)

![下载量演变](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/piwigo/stats.png)

## 关于

Piwigo 是一款 Web 网页图片 Gallery 软件。
该附加组件基于来自 linuxserver.io 的 [docker 镜像](https://github.com/linuxserver/piwigo)。

## 安装

此附加组件的安装非常简单，与安装任何其他的 Hass.io 附加组件没有区别。

1. 将我的附加组件存储库添加到您的 Home Assistant 实例中（在 supervisor 附加组件商店的右上角，或如果您配置了我的 Home Assistant 然后点击下方的按钮）
   [![打开您的 Home Assistant 实例并显示带有预填充特定存储库 URL 的附加组件存储库对话框。](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2Falexbelgium%2Fhassio-addons)
1. 安装此附加组件。
1. 点击 `保存` 按钮以存储您的配置。
1. 启动附加组件。
1. 检查附加组件的日志，看看一切是否正常。
1. 按照您的偏好仔细配置附加组件，关于此请查看官方文档。

## 配置

使用附加组件 `env_vars` 选项来传递额外的环境变量（大写或小写字母名称）。有关详细信息，请访问 https://github.com/alexbelgium/hassio-addons/wiki/Add-Environment-variables-to-your-Addon-2。

Web 界面可以找到在 <http://homeassistant:81> 或通过 sidebar 使用 Ingress。
配置可以通过应用 webUI 完成，除了以下选项。

### 设置步骤

1. 在 MySQL/MariaDB 服务器上为 Piwigo 创建用户和数据库
2. 在数据库设置页面中，使用 IP 地址而不是主机名
3. 编辑 `/config/piwigo/nginx/site-confs` 中的 nginx 配置以 SSL（端口 443）
4. 自签名密钥在 `/data/keys` 中（如果需要请用您的替换）
5. 编辑 `/config/piwigo` 中的配置文件以邮箱设置

### 选项

| 选项 | 类型 | 默认值 | 描述 |
|--------|------|---------| ------------- |
| `PGID` | int | `0` | 文件权限的组 ID |
| `PUID` | int | `0` | 文件权限的用户 ID |
| `TZ` | str | | 时区（例如，`Europe/London`） |
| `localdisks` | str | | 本地磁盘挂载（例如，`sda1,sdb1,MYNAS`）。在磁盘后添加文件夹以仅挂载该文件夹，例如 `MYNAS/public` 仅挂载该文件夹，在 `/mnt/MYNAS/public`。文件夹挂载需要 2026-09-19 之后的附加组件版本。 |
| `networkdisks` | str | | SMB 共享挂载（例如，`//SERVER/SHARE`） |
| `cifsusername` | str | | 网络共享的 SMB 用户名 |
| `cifspassword` | str | | 网络共享的 SMB 密码 |
| `cifsdomain` | str | | 网络共享的 SMB 域 |

### 示例配置

```yaml
PGID: 1000
PUID: 1000
TZ: "Europe/London"
localdisks: "sda1,sdb1"
networkdisks: "//192.168.1.100/gallery"
cifsusername: "galleryuser"
cifspassword: "password123"
cifsdomain: "workgroup"
```

### 挂载驱动器

此附加组件支持挂载本地磁盘和远程 SMB 共享：

- **本地磁盘**：见 [附加组件中挂载本地磁盘](https://github.com/alexbelgium/hassio-addons/wiki/Mounting-Local-Drives-in-Addons)
- **远程共享**：见 [附加组件中挂载远程共享](https://github.com/alexbelgium/hassio-addons/wiki/Mounting-remote-shares-in-Addons)

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
