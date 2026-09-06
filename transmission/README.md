# Home Assistant 扩展：Transmission

我在业余时间维护这个和其他 Home Assistant 扩展：跟踪上游变更、Home Assistant 变更以及在真实硬件上测试都需要花费大量的时间（以及一些金钱）。我经常使用我超过 110 个扩展中的 5-10 个，所以我安装了测试机器（并购买了一些我自身不使用的测试服务，如 VPN），以便进行故障排除和改进扩展。

如果这个扩展为您节省了时间或使您的设置变得更简单，我将非常感激您的支持！

[![给我买杯咖啡][donation-badge]](https://www.buymeacoffee.com/alexbelgium)
[![通过 PayPal 捐赠][paypal-badge]](https://www.paypal.com/donate/?hosted_button_id=DZFULJZTP3UQA)

## 扩展信息

![版本](https://img.shields.io/badge/dynamic/yaml?label=Version&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Ftransmission%2Fconfig.yaml)
![入口](https://img.shields.io/badge/dynamic/yaml?label=Ingress&query=%24.ingress&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Ftransmission%2Fconfig.yaml)
![架构](https://img.shields.io/badge/dynamic/yaml?color=success&label=Arch&query=%24.arch&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Ftransmission%2Fconfig.yaml)

[![Codacy 徽章](https://app.codacy.com/project/badge/Grade/9c6cf10bdbba45ecb202d7f579b5be0e)](https://www.codacy.com/gh/alexbelgium/hassio-addons/dashboard?utm_source=github.com&utm_medium=referral&utm_content=alexbelgium/hassio-addons&utm_campaign=Badge_Grade)
[![GitHub Super-Linter](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/weekly-supelinter.yaml?label=Lint%20code%20base)](https://github.com/alexbelgium/hassio-addons/actions/workflows/weekly-supelinter.yaml)
[![Builder](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/onpush_builder.yaml?label=Builder)](https://github.com/alexbelgium/hassio-addons/actions/workflows/onpush_builder.yaml)

[donation-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee-%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white
[paypal-badge]: https://img.shields.io/badge/Donate%20via%20PayPal-0070BA?logo=paypal&style=flat&logoColor=white

_感谢所有为我仓库加星的人！要加星，请点击下面的图片，然后它将出现在右上角。谢谢！_

[![Stargazers repo roster for @alexbelgium/hassio-addons](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/.github/stars2.svg)](https://github.com/alexbelgium/hassio-addons/stargazers)

![下载趋势](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/transmission/stats.png)

## 关于

Transmission 是一个 BitTorrent 客户端。
此扩展基于 [docker 镜像](https://github.com/linuxserver/docker-transmission) from linuxserver.io。

## 安装

此扩展的安装非常简单，与安装任何其他 Hass.io 扩展没有区别。

1. 将我的扩展存储库添加到您的 Home Assistant 实例中（在 supervisor 扩展存储库的右上角，或点击下面的按钮如果您已配置我的 HA）
   [![打开您的 Home Assistant 实例并显示具有特定存储库 URL 预填充的添加扩展存储库对话框](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2Falexbelgium%2Fhassio-addons)
1. 安装此扩展。
1. 点击“保存”按钮以存储您的配置。
1. 启动扩展。
1. 检查扩展的日志以查看一切是否顺利。
1. 仔细配置扩展以满足您的偏好，有关详细信息请参阅官方文档。

## 配置

使用扩展的 `env_vars` 选项传递额外的环境变量（大写或小写名称）。有关详细信息，请参阅 https://github.com/alexbelgium/hassio-addons/wiki/Add-Environment-variables-to-your-Addon-2。

Webui 可在 <http://homeassistant:9091> 或通过 Ingress 侧边栏访问。
除了以下选项之外，所有配置都可以通过应用 WebUI 完成。

### 选项

| 选项 | 类型 | 默认 | 描述 |
|--------|------|---------|-------------|
| `PGID` | int | `0` | 文件权限的组 ID |
| `PUID` | int | `0` | 文件权限的用户 ID |
| `TZ` | str | | 时区（例如，`Europe/London`） |
| `download_dir` | str | `/share/downloads` | 完成下载的目录 |
| `incomplete_dir` | str | `/share/incomplete` | 不完整下载的目录 |
| `watch_dir` | str | | 监视 torrent 文件的目录 |
| `customUI` | list | `flood-for-transmission` | Web UI（standard/transmission-web-control/kettu/flood-for-transmission） |
| `user` | str | | Web UI 用户名 |
| `pass` | str | | Web UI 密码 |
| `whitelist` | str | | Web 访问的 IP 白名单 |
| `DNS_server` | str | `8.8.8.8,1.1.1.1` | DNS 服务器 |
| `localdisks` | str | | 要挂载的本地驱动器（例如，`sda1,sdb1,MYNAS`） |
| `networkdisks` | str | | 要挂载的 SMB 共享（例如，`//SERVER/SHARE`） |
| `cifsusername` | str | | 网络共享的 SMB 用户名 |
| `cifspassword` | str | | 网络共享的 SMB 密码 |
| `cifsdomain` | str | | 网络共享的 SMB 域 |
| `smbv1` | bool | | 启用 SMB v1 协议 |

### 示例配置

```yaml
PGID: 0
PUID: 0
TZ: "Europe/London"
download_dir: "/media/downloads"
incomplete_dir: "/media/incomplete"
watch_dir: "/media/torrents"
customUI: "flood-for-transmission"
user: "transmission"
pass: "secure_password"
localdisks: "sda1,sdb1"
networkdisks: "//192.168.1.100/downloads"
cifsusername: "dluser"
cifspassword: "password123"
cifsdomain: "workgroup"
```

### 挂载驱动器

此扩展支持挂载本地驱动器和远程 SMB 共享：

- **本地驱动器**：请参阅 [在扩展中挂载本地驱动器](https://github.com/alexbelgium/hassio-addons/wiki/Mounting-Local-Drives-in-Addons)
- **远程共享**：请参阅 [在扩展中挂载远程共享](https://github.com/alexbelgium/hassio-addons/wiki/Mounting-remote-shares-in-Addons)

**高级设置**：完整的 Transmission 设置可在 `/share/transmission/settings.json` 中找到。修改前请停止扩展，因为 Transmission 在关闭时将覆盖设置。

## 问题

# 如果日志中的 settings.json 被重置 https://github.com/alexbelgium/hassio-addons/issues/1269
- 安装 Filebrowser 扩展
- 删除文件夹 /homeassistant/addons_config/transmission 和 /homeassistant/addons_config/transmission-ls

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
