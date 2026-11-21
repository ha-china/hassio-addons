# Home Assistant 插件：qbittorrent

我在业余时间维护此插件和其他 Home Assistant 插件：跟踪上游变更、HA 变更以及在实际硬件上进行测试耗费了大量时间（以及一些金钱）。我会使用大约 5-10 个超过 110 个插件中的一部分，因此我会安装测试机器（并购买一些测试服务，如VPN），但不亲自使用它们，以便排查和改进行为插件的问题。

如果此插件为您节省了时间或让您的设置更简单，我很感激您的支持！

[![Buy me a coffee][donation-badge]](https://www.buymeacoffee.com/alexbelgium)
[![Donate via PayPal][paypal-badge]](https://www.paypal.com/donate/?hosted_button_id=DZFULJZTP3UQA)

## 插件信息

![Version](https://img.shields.io/badge/dynamic/yaml?label=Version&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fqbittorrent%2Fconfig.yaml)
![Ingress](https://img.shields.io/badge/dynamic/yaml?label=Ingress&query=%24.ingress&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fqbittorrent%2Fconfig.yaml)
![Arch](https://img.shields.io/badge/dynamic/yaml?color=success&label=Arch&query=%24.arch&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fqbittorrent%2Fconfig.yaml)

[![Codacy Badge](https://app.codacy.com/project/badge/Grade/9c6cf10bdbba45ecb202d7f579b5be0e)](https://www.codacy.com/gh/alexbelgium/hassio-addons/dashboard?utm_source=github.com&utm_medium=referral&utm_content=alexbelgium/hassio-addons&utm_campaign=Badge_Grade)
[![GitHub Super-Linter](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/weekly-supelinter.yaml?label=Lint%20code%20base)](https://github.com/alexbelgium/hassio-addons/actions/workflows/weekly-supelinter.yaml)
[![Builder](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/onpush_builder.yaml?label=Builder)](https://github.com/alexbelgium/hassio-addons/actions/workflows/onpush_builder.yaml)

[donation-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee-%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white
[paypal-badge]: https://img.shields.io/badge/Donate%20via%20PayPal-0070BA?logo=paypal&style=flat&logoColor=white

_感谢所有给我仓库星标的人！请点击下方图片给它星标，它将显示在右上角。感谢！_

[![Stargazers repo roster for @alexbelgium/hassio-addons](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/.github/stars2.svg)](https://github.com/alexbelgium/hassio-addons/stargazers)

![downloads evolution](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/qbittorrent/stats.png)

## 关于

---

[Qbittorrent](https://github.com/qbittorrent/qBittorrent) 是一个跨平台的免费开源 BitTorrent 客户端。此插件基于 [linuxserver.io](https://www.linuxserver.io/) 的 Docker 镜像。

此插件具有以下可配置选项：

- 允许挂载本地外部驱动器，或从插件挂载 smb 共享
- [替代 webUI](https://github.com/qbittorrent/qBittorrent/wiki/List-of-known-alternate-WebUIs)
- 使用 ssl
- 入口 (ingress)
- 可选的 OpenVPN 或 WireGuard 支持
- 允许设置特定的 DNS 服务器

## 配置

---

Webui 可在 <http://homeassistant:8080> 找到，或者在侧边栏中使用 Ingress。默认用户名/密码在启动日志中描述。

网络驱动器挂载到 `/mnt/<share_name>`。为了实现最佳速度和连接性，您需要在路由器中映射暴露的端口。

### 选项

| 选项 | 类型 | 默认值 | 描述 |
|--------|------|---------|-------------|
| `PGID` | int | `0` | 文件权限的组 ID |
| `PUID` | int | `0` | 文件权限的用户 ID |
| `TZ` | str | | 时区（例如，`Europe/London`） |
| `Username` | str | `admin` | Web 界面管理用户名 |
| `SavePath` | str | `/share/qBittorrent` | 默认下载目录 |
| `ssl` | bool | `false` | 为 Web 界面启用 HTTPS |
| `certfile` | str | `fullchain.pem` | SSL 证书文件（位于 `/ssl/`） |
| `keyfile` | str | `privkey.pem` | SSL 私钥文件（位于 `/ssl/`） |
| `whitelist` | str | `localhost,127.0.0.1,...` | 无需密码的 IP 子网 |
| `customUI` | list | `vuetorrent` | 替代 Web UI（default/vuetorrent/qbit-matUI/qb-web/custom） |
| `DNS_server` | str | `8.8.8.8,1.1.1.1` | 自定义 DNS 服务器 |
| `localdisks` | str | | 本地驱动器挂载列表（例如，`sda1,sdb1,MYNAS`）。在驱动器后添加文件夹以仅挂载该文件夹，例如 `MYNAS/public` 仅挂载该文件夹，位于 `/mnt/MYNAS/public`。文件夹挂载需要 2026-09-19 之后发布的插件版本。 |
| `networkdisks` | str | | 要挂载的 SMB 共享列表（例如，`//SERVER/SHARE`） |
| `cifsusername` | str | | 网络共享的 SMB 用户名 |
| `cifspassword` | str | | 网络共享的 SMB 密码 |
| `cifsdomain` | str | | 网络共享的 SMB 域 |
| `openvpn_enabled` | bool | `false` | 启用 OpenVPN 连接 |
| `openvpn_config` | str | | OpenVPN 配置文件名（位于 `/app_configs/db21ed7f_qbittorrent/openvpn/`） |
| `openvpn_username` | str | | OpenVPN 用户名 |
| `openvpn_password` | str | | OpenVPN 密码 |
| `openvpn_alt_mode` | bool | `false` | 在容器级别而不是应用级别进行绑定 |
| `wireguard_enabled` | bool | `false` | 启用 WireGuard 隧道 |
| `wireguard_config` | str | _(空)_ | 仅包含 WireGuard 配置文件名（例如 `ABC.conf`，存储在插件内部的 `/app_configs/db21ed7f_qbittorrent/wireguard/` 中） |
| `vpn_proxy_enabled` | bool | `false` | 在端口 `8118` 上运行 HTTP 代理，供其他插件使用，这些数据流通过 VPN 离开。需要 OpenVPN 或 WireGuard（请参阅 [其他插件的 VPN 代理](#vpn-proxy-for-other-add-ons)） |
| `qbit_manage` | bool | `false` | 启用 qBit Manage 集成 |
| `run_duration` | str | | 运行时长（例如，`12h`, `5d`） |
| `silent` | bool | `false` | 抑制调试消息 |

### WireGuard 设置

WireGuard 配置文件必须存储在**插件容器内**的 `/config/wireguard` 目录中（在 Home Assistant OS 上，这是插件配置共享目录，通常是 `/app_configs/<addon_slug>/wireguard/`，例如 `/app_configs/db21ed7f_qbittorrent/wireguard/`）。
将 `wireguard_config` 设置为**文件名仅**（例如 `ABC.conf`，而不是完整路径）。如果存在多个 `.conf` 文件，请将 `wireguard_config` 设置为要使用的文件名（例如 `wg0.conf`）。在插件选项中暴露 UDP 端口 `51820`，并仅在隧道期望接收入站对等体时从您的路由器转发它（例如，站点到站点设置）。仅单向出站商业 VPN 提供商通常不需要映射端口。运行时配置现在保留 IPv4 和 IPv6 条目，因此如果您的终点支持它们，可以使用双栈 WireGuard 对等体。

### 其他插件的 VPN 代理

私有追踪器通常要求搜索（Prowlarr, Sonarr, Radarr...）和下载来自相同的 IP。此插件可以运行一个 HTTP 代理，其流量通过其 VPN 隧道离开，因此其他插件的搜索来自与 qBittorrent 相同的 VPN IP。默认情况下禁用此功能。

1. 在此插件中配置 OpenVPN (`openvpn_enabled`) 或 WireGuard (`wireguard_enabled`)，并检查日志以确认 VPN 已连接。
2. 设置 `vpn_proxy_enabled: true` 并重启插件。日志会显示 `Starting VPN proxy on port 8118: outgoing traffic leaves through <interface> (<VPN address>)`。
3. 在其他插件中，设置 HTTP 代理，主机名 `db21ed7f-qbittorrent`，端口 `8118`，没有用户名或密码。在 Prowlarr、Sonarr 和 Radarr 中，这是 `Settings > General > Proxy`，输入 `HTTP`。保持“仅限本地地址绕过代理”启用，以便它们仍能直接到达 qBittorrent 和彼此。
4. 检查结果：在其他插件的日志中，或使用测试索引器，网站看到的 IP 是 VPN IP。

行为限制：

- 代理仅在 VPN 运行时运行。如果 VPN 未连接，代理不会启动，日志显示 `VPN proxy NOT started: the VPN is not up`。如果 VPN 断开或重新连接到其他地址（检查 OpenVPN 宕机时，以及每 5 秒），代理停止，日志显示 `VPN proxy STOPPED`，并在 VPN 恢复后重新启动。在停止期间，其他插件会收到连接错误；它们的请求不会从您的真实 IP 发送。
- 如果设置了 `vpn_proxy_enabled` 但没有 VPN，日志会显示警告且未启动代理。
- 代理没有密码，仅可通过其他插件在内部 Home Assistant 网络范围内访问；它未暴露在您的 LAN 上。
- 仅支持 IPv4。

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
cifspassword: "password"
openvpn_enabled: false
wireguard_enabled: false
```

### 挂载驱动器

此插件支持同时挂载本地驱动器和远程 SMB 共享：

- **本地驱动器**：请参阅 [插件中挂载本地驱动器](https://github.com/alexbelgium/hassio-addons/wiki/Mounting-Local-Drives-in-Addons)
- **远程共享**：请参阅 [插件中挂载远程共享](https://github.com/alexbelgium/hassio-addons/wiki/Mounting-remote-shares-in-Addons)

### 自定义脚本和环境变量

此插件通过 `app_config` 映射支持自定义脚本和环境变量：

- **自定义脚本**：请参阅 [插件中运行自定义脚本](https://github.com/alexbelgium/hassio-addons/wiki/Running-custom-scripts-in-Addons)
- **env_vars 选项**：使用插件 `env_vars` 选项传递额外的环境变量（大小写名称均可）。详见 https://github.com/alexbelgium/hassio-addons/wiki/Add-Environment-variables-to-your-Addon-2

## 安装

---

此插件的安装非常简单，与其他插件安装没有区别。

1. 将我的插件仓库添加到 Home Assistant 实例中（在 supervisor 添加插件商店右上角，或点击下方按钮，如果您已配置了我的 HA）
   [![Open your Home Assistant instance and show the add add-on repository dialog with a specific repository URL pre-filled.](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2Falexbelgium%2Fhassio-addons)
2. 安装此插件。
3. 点击 `Save` 按钮以存储您的配置。
4. 将插件选项设置为您的偏好设置。
5. 启动插件。
6. 检查插件日志以确认一切正常。
7. 打开 webUI 并调整软件选项

## 与 HA 的集成

使用 [qBittorrent 集成](https://www.home-assistant.io/integrations/qbittorrent/)

您可以使用以下代码片段来检查和设置替代速度（上述 HA 集成对此不需要）

```bash
shell_command:
  toggle_torrent_speed: curl -X POST https://<YOUR HA IP>:8081/api/v2/transfer/toggleSpeedLimitsMode -k
sensor:
  - platform: command_line
    name: get_torrent_speed
    command: curl https://<YOUR HA IP>:8081/api/v2/transfer/speedLimitsMode -k
```

如果您不使用 SSL 选项，您可以跳过 `-k` 参数，并在 URL 中使用 http 代替 https

这些行将暴露一个 `sensor.get_torrent_speed`，每 60 秒更新一次，如果启用了替代速度模式返回 1，否则返回 0，以及一个 `shell_command.toggle_torrent_speed`，您可以在自动化的服务中调用它

## 常见问题

<details>
  <summary>### openvpn 的 ipv6 问题 (@happycoo)</summary>
将此代码添加到您的 .ovpn 配置中

```bash
# 不要通过将 LAN 路由到 VPN
route 192.168.1.0 255.255.255.0 net_gateway

# 禁用 ipv6
pull-filter ignore "dhcp-option DNS6"
pull-filter ignore "tun-ipv6"
pull-filter ignore "ifconfig-ipv6"
```

</details>

<details>
  <summary>### 100% cpu</summary>
删除 `/config` 目录中的 nova3 文件夹并重启 qBittorrent

</details>

<details>
  <summary>### WireGuard 连接失败</summary>

- 如果您的部署期望接收入站对等体，请验证插件选项中暴露的 UDP 端口是否映射 51820/udp，并由您的路由器转发。对于仅单向出站的商业 VPN 提供商，可跳过此步骤。
- 确认 `/config/wireguard` 中选择的配置文件与 `wireguard_config` 选项匹配（仅文件名，例如 `ABC.conf`，或者当只有一个 `.conf` 文件存在时留空）。
- 检查插件日志以查看启动例程打印的详细 `wg-quick` 错误消息。
- 缺少 iptables `comment` 内核模块的主机会自动重试，不带注释匹配，并在可用时使用旧的 iptables 后端。如果您看到 iptables-restore 错误，请检查日志以查看有关这些回落的消息。
- 支持双栈 WireGuard 对等体。如果您看到 ip6tables-restore 错误，请确认您的主机提供 IPv6 防火墙支持，或调整配置以匹配您的环境。
- 启动脚本会抑制某些主机由 `wg-quick` 发出的 `net.ipv4.conf.all.src_valid_mark` sysctl 失败错误，因此日志中的持久错误通常指向配置或连接问题。

</details>

<details>
  <summary>### 监控文件夹 (@FaliseDotCom)</summary>

- 进入 `config\addons_config\qBittorrent`
- 找到（或创建）文件 `watched_folders.json`
- 粘贴或调整为以下内容：

```json
{
  "folder/to/watch": {
    "add_torrent_params": {
      "category": "",
      "content_layout": "Original",
      "download_limit": -1,
      "download_path": "[folder/for/INCOMPLETE_downloads]",
      "operating_mode": "AutoManaged",
      "ratio_limit": -2,
      "save_path": "[folder/for/COMPLETED_downloads]",
      "seeding_time_limit": -2,
      "skip_checking": false,
      "stopped": false,
      "tags": [],
      "upload_limit": -1,
      "use_auto_tmm": false,
      "use_download_path": true
    },
    "recursive": false
  }
}
```

</details>

<details>
  <summary>### nginx 错误代码 (@Nanianmichaels)</summary>

> [cont-init.d] 30-nginx.sh: executing...
> [cont-init.d] 30-nginx.sh: exited 1.

等待几分钟并重启插件，可能是 github 暂时不可用

### 本地挂载的无效参数 (@antonio1475)

> [cont-init.d] 00-local_mounts.sh: executing...
> Local Disks mounting...
> mount: mounting /dev/sda1 on /mnt/sda1 failed: Invalid argument
> [19:19:44] FATAL: Unable to mount local drives! Please check the name.
> [cont-init.d] 00-local_mounts.sh: exited 0.

尝试通过将分区标签放在 "localdisks" 选项中的硬件名称来挂载

</details>

<details>
  <summary>### 几天后 openvpn 下元数据获取丢失 (@almico)</summary>

在您的 config.ovpn 中添加 `ping-restart 60`

</details>

<details>
  <summary>### 小尺寸窗口上 Downloads 信息为空 (@aviadlevy)</summary>

当我窗口宽度低于 960 像素时，我的下载是空的。
解决方案是重置 Vuetorrent 设置。

</details>

## 支持

在 github 上创建问题，或在 [Home Assistant thread](https://community.home-assistant.io/t/home-assistant-addon-qbittorrent/279247) 上询问

---

![illustration](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/qbittorrent/illustration.png)

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
