# Home Assistant 插件：qbittorrent

我在业余时间维护这个和其他 Home Assistant 插件：跟踪上游更改、Home Assistant 更改以及在实际硬件上进行测试都需要花费大量时间（以及一些金钱）。我经常使用 5-10 个我 >110 个插件中的几个，所以我安装了测试机器（并购买了一些我本人不使用的测试服务，如 vpn），用于故障排除和改进插件。

如果这个插件为您节省了时间或使您的设置更简单，我将非常感激您的支持！

[![请给我买杯咖啡][donation-badge]](https://www.buymeacoffee.com/alexbelgium)
[![通过 PayPal 捐赠][paypal-badge]](https://www.paypal.com/donate/?hosted_button_id=DZFULJZTP3UQA)

## 插件信息

![版本](https://img.shields.io/badge/dynamic/yaml?label=Version&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fqbittorrent%2Fconfig.yaml)
![入口](https://img.shields.io/badge/dynamic/yaml?label=Ingress&query=%24.ingress&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fqbittorrent%2Fconfig.yaml)
![架构](https://img.shields.io/badge/dynamic/yaml?color=success&label=Arch&query=%24.arch&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fqbittorrent%2Fconfig.yaml)

[![Codacy 徽章](https://app.codacy.com/project/badge/Grade/9c6cf10bdbba45ecb202d7f579b5be0e)](https://www.codacy.com/gh/alexbelgium/hassio-addons/dashboard?utm_source=github.com&utm_medium=referral&utm_content=alexbelgium/hassio-addons&utm_campaign=Badge_Grade)
[![GitHub Super-Linter](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/weekly-supelinter.yaml?label=Lint%20code%20base)](https://github.com/alexbelgium/hassio-addons/actions/workflows/weekly-supelinter.yaml)
[![Builder](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/onpush_builder.yaml?label=Builder)](https://github.com/alexbelgium/hassio-addons/actions/workflows/onpush_builder.yaml)

[donation-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee-%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white
[paypal-badge]: https://img.shields.io/badge/Donate%20via%20PayPal-0070BA?logo=paypal&style=flat&logoColor=white

_感谢所有为我仓库点星的人！要星标它，请点击下面的图片，然后它就会显示在右上角。谢谢！_

[![Stargazers repo roster for @alexbelgium/hassio-addons](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/.github/stars2.svg)](https://github.com/alexbelgium/hassio-addons/stargazers)

![下载趋势](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/qbittorrent/stats.png)

## 关于

---

[Qbittorrent](https://github.com/qbittorrent/qBittorrent) 是一个跨平台的免费开源 BitTorrent 客户端。
此插件基于 [linuxserver.io](https://www.linuxserver.io/) 的 docker 镜像。

此插件具有几个可配置的选项：

- 允许从插件挂载本地外部驱动器或 smb 共享
- [替代 WebUI](https://github.com/qbittorrent/qBittorrent/wiki/List-of-known-alternate-WebUIs)
- 使用 ssl
- 入口
- 可选 OpenVPN 或 WireGuard 支持
- 允许设置特定的 DNS 服务器

## 配置

---

WebUI 可在 <http://homeassistant:8080> 找到，或通过入口在侧边栏中使用。
默认用户名/密码在启动日志中描述。

网络磁盘挂载到 `/mnt/<share_name>`。您需要映射路由器中暴露的端口以获得最佳速度和连接性。

### 选项

| 选项 | 类型 | 默认值 | 描述 |
|------|------|---------|-------------|
| `PGID` | int | `0` | 文件权限的组 ID |
| `PUID` | int | `0` | 文件权限的用户 ID |
| `TZ` | str | | 时区（例如，`Europe/London`） |
| `Username` | str | `admin` | Web 界面的管理员用户名 |
| `SavePath` | str | `/share/qBittorrent` | 默认下载目录 |
| `ssl` | bool | `false` | 启用 Web 界面的 HTTPS |
| `certfile` | str | `fullchain.pem` | SSL 证书文件（在 `/ssl/` 中） |
| `keyfile` | str | `privkey.pem` | SSL 私钥文件（在 `/ssl/` 中） |
| `whitelist` | str | `localhost,127.0.0.1,...` | 不需要密码的 IP 子网 |
| `customUI` | list | `vuetorrent` | 替代 Web UI（默认/vuetorrent/qbit-matUI/qb-web/custom） |
| `DNS_server` | str | `8.8.8.8,1.1.1.1` | 自定义 DNS 服务器 |
| `localdisks` | str | | 要挂载的本地驱动器（例如，`sda1,sdb1,MYNAS`） |
| `networkdisks` | str | | 要挂载的 SMB 共享（例如，`//SERVER/SHARE`） |
| `cifsusername` | str | | 网络共享的 SMB 用户名 |
| `cifspassword` | str | | 网络共享的 SMB 密码 |
| `cifsdomain` | str | | 网络共享的 SMB 域 |
| `openvpn_enabled` | bool | `false` | 启用 OpenVPN 连接 |
| `openvpn_config` | str | | OpenVPN 配置文件名（在 `/addon_configs/db21ed7f_qbittorrent/openvpn/` 中） |
| `openvpn_username` | str | | OpenVPN 用户名 |
| `openvpn_password` | str | | OpenVPN 密码 |
| `openvpn_alt_mode` | bool | `false` | 在容器级别而不是应用级别绑定 |
| `wireguard_enabled` | bool | `false` | 启用 WireGuard 隧道 |
| `wireguard_config` | str | _(空)_ | WireGuard 配置文件名（仅文件名，例如 `ABC.conf`，存储在插件内部的 `/addon_configs/db21ed7f_qbittorrent/wireguard/` 中） |
| `qbit_manage` | bool | `false` | 启用 qBit Manage 集成 |
| `run_duration` | str | | 运行持续时间（例如，`12h`，`5d`） |
| `silent` | bool | `false` | 抑制调试消息 |

### WireGuard 设置

WireGuard 配置文件必须存储在插件容器内的 `/config/wireguard` 中（在 Home Assistant OS 中这是插件配置共享，通常是 `/addon_configs/<addon_slug>/wireguard/`，例如 `/addon_configs/db21ed7f_qbittorrent/wireguard/`）。
将 `wireguard_config` 设置为 **仅文件名**（例如 `ABC.conf`，不是完整路径）。如果有多个 `.conf` 文件，请将 `wireguard_config` 设置为您要使用的文件名（例如 `wg0.conf`）。在插件选项中暴露 UDP 端口 `51820`，并仅在您的隧道期望传入对等方时从您的路由器转发它（例如，站点到站点设置）。仅出站商业 VPN 提供商通常不需要映射端口。运行时配置现在保留 IPv4 和 IPv6 条目，因此当您的端点支持时，您可以使用双栈 WireGuard 对等方。

### 示例配置

```yaml
PGID: 0
PUID: 0
TZ: "Europe/London"
Username: "admin"
SavePath: "/share/qBittorrent"
ssl: true
certfile: "fullchain.pem"
keyfile: "privkey.pem"
whitelist: "localhost,192.168.0.0/16"
customUI: "vuetorrent"
DNS_server: "8.8.8.8,1.1.1.1"
localdisks: "sda1,sdb1"
networkdisks: "//192.168.1.100/downloads"
cifsusername: "username"
cifspassword
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
