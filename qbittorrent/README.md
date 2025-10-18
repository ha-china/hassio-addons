# Home assistant add-on: qbittorrent

[![Donate][donation-badge]](https://www.buymeacoffee.com/alexbelgium)
[![Donate][paypal-badge]](https://www.paypal.com/donate/?hosted_button_id=DZFULJZTP3UQA)

![Version](https://img.shields.io/badge/dynamic/yaml?label=Version&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fqbittorrent%2Fconfig.yaml)
![Ingress](https://img.shields.io/badge/dynamic/yaml?label=Ingress&query=%24.ingress&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fqbittorrent%2Fconfig.yaml)
![Arch](https://img.shields.io/badge/dynamic/yaml?color=success&label=Arch&query=%24.arch&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fqbittorrent%2Fconfig.yaml)

[![Codacy Badge](https://app.codacy.com/project/badge/Grade/9c6cf10bdbba45ecb202d7f579b5be0e)](https://www.codacy.com/gh/alexbelgium/hassio-addons/dashboard?utm_source=github.com&utm_medium=referral&utm_content=alexbelgium/hassio-addons&utm_campaign=Badge_Grade)
[![GitHub Super-Linter](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/weekly-supelinter.yaml?label=Lint%20code%20base)](https://github.com/alexbelgium/hassio-addons/actions/workflows/weekly-supelinter.yaml)
[![Builder](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/onpush_builder.yaml?label=Builder)](https://github.com/alexbelgium/hassio-addons/actions/workflows/onpush_builder.yaml)

[donation-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee%20(no%20paypal)-%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white
[paypal-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee%20with%20Paypal-0070BA?logo=paypal&style=flat&logoColor=white

_感谢所有星标我的仓库的人！要星标它，请点击下面的图片，然后它将在右上角。谢谢！_

[![Stargazers repo roster for @alexbelgium/hassio-addons](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/.github/stars2.svg)](https://github.com/alexbelgium/hassio-addons/stargazers)

![downloads evolution](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/qbittorrent/stats.png)

## 关于

---

[Qbittorrent](https://github.com/qbittorrent/qBittorrent) 是一个跨平台的免费开源 BitTorrent 客户端。
这个插件基于 [linuxserver.io](https://www.linuxserver.io/) 的 Docker 镜像。

这个插件有几个可配置的选项：

- 允许挂载本地外部驱动器，或从插件中挂载 SMB 共享
- [替代 WebUI](https://github.com/qbittorrent/qBittorrent/wiki/List-of-known-alternate-WebUIs)
- 使用 SSL
- Ingress
- 可选的 OpenVPN 支持
- 允许设置特定的 DNS 服务器

## 配置

---

Webui 可以在 <http://homeassistant:8080> 找到，或在 Ingress 使用的侧边栏中找到。
默认的用户名/密码在启动日志中描述。

网络磁盘挂载到 `/mnt/<share_name>`。您需要在路由器中映射暴露的端口以获得最佳速度和连接性。

### 选项

| 选项 | 类型 | 默认 | 描述 |
|------|------|------|------|
| `PGID` | int | `0` | 文件权限的组 ID |
| `PUID` | int | `0` | 文件权限的用户 ID |
| `TZ` | str | | 时区（例如，`Europe/London`） |
| `Username` | str | `admin` | Web 界面的管理员用户名 |
| `SavePath` | str | `/share/qBittorrent` | 默认下载目录 |
| `ssl` | bool | `false` | 为 Web 界面启用 HTTPS |
| `certfile` | str | `fullchain.pem` | SSL 证书文件（在 `/ssl/` 中） |
| `keyfile` | str | `privkey.pem` | SSL 私有密钥文件（在 `/ssl/` 中） |
| `whitelist` | str | `localhost,127.0.0.1,...` | 不需要密码的 IP 子网 |
| `customUI` | list | `vuetorrent` | 替代 Web UI（默认/vuetorrent/qbit-matUI/qb-web/custom） |
| `DNS_server` | str | `8.8.8.8,1.1.1.1` | 自定义 DNS 服务器 |
| `localdisks` | str | | 要挂载的本地驱动器（例如，`sda1,sdb1,MYNAS`） |
| `networkdisks` | str | | 要挂载的 SMB 共享（例如，`//SERVER/SHARE`） |
| `cifsusername` | str | | SMB 共享的 SMB 用户名 |
| `cifspassword` | str | | SMB 共享的 SMB 密码 |
| `cifsdomain` | str | | SMB 共享的 SMB 域 |
| `openvpn_enabled` | bool | `false` | 启用 OpenVPN 连接 |
| `openvpn_config` | str | | OpenVPN 配置文件名（在 `/config/openvpn/` 中） |
| `openvpn_username` | str | | OpenVPN 用户名 |
| `openvpn_password` | str | | OpenVPN 密码 |
| `openvpn_alt_mode` | bool | `false` | 在容器级别而不是应用程序级别绑定 |
| `qbit_manage` | bool | `false` | 启用 qBit Manage 集成 |
| `run_duration` | str | | 运行持续时间（例如，`12h`, `5d`） |
| `silent` | bool | `false` | 隐藏调试消息 |

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
```

### 挂载驱动器

这个插件支持挂载本地驱动器和远程 SMB 共享：

- **本地驱动器**：参见 [在插件中挂载本地驱动器](https://github.com/alexbelgium/hassio-addons/wiki/Mounting-Local-Drives-in-Addons)
- **远程共享**：参见 [在插件中挂载远程共享](https://github.com/alexbelgium/hassio-addons/wiki/Mounting-remote-shares-in-Addons)

### 自定义脚本和环境变量

这个插件通过 `addon_config` 映射支持自定义脚本和环境变量：

- **自定义脚本**：参见 [在插件中运行自定义脚本](https://github.com/alexbelgium/hassio-addons/wiki/Running-custom-scripts-in-Addons)
- **环境变量**：参见 [为您的插件添加环境变量](https://github.com/alexbelgium/hassio-addons/wiki/Add-Environment-variables-to-your-Addon)

## 安装

---

这个插件的安装非常简单，与安装任何其他插件没有区别。

1. 将我的插件仓库添加到您的 home assistant 实例中（在 Supervisor 插件商店的右上角，或如果您已经配置了我的 HA，请点击下面的按钮）
   [![打开您的 Home Assistant 实例并显示添加插件仓库对话框，预填充特定的仓库 URL。](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2Falexbelgium%2Fhassio-addons)
1. 安装这个插件。
1. 点击 `保存` 按钮以保存您的配置。
1. 设置插件选项以符合您的偏好。
1. 启动插件。
1. 检查插件的日志以查看是否一切正常。
1. 打开 WebUI 并调整软件选项

## 与 HA 集成

使用 [qBittorrent 集成](https://www.home-assistant.io/integrations/qbittorrent/)

您可以使用以下片段来检查和设置替代速度（上面的 HA 集成不需要这个）

```bash
shell_command:
  toggle_torrent_speed: curl -X POST https://<YOUR HA IP>:8081/api/v2/transfer/toggleSpeedLimitsMode -k
sensor:
  - platform: command_line
    name: get_torrent_speed
    command: curl https://<YOUR HA IP>:8081/api/v2/transfer/speedLimitsMode -k
```

如果您不使用 SSL 选项，可以跳过 `-k` 参数，并在 URL 中使用 http 而不是 https

这些行将暴露一个 `sensor.get_torrent_speed`，每 60 秒更新一次，如果替代速度模式已启用则返回 1，否则返回 0，以及一个 `shell_command.toggle_torrent_speed`，您可以在自动化中作为服务调用

## 常见问题

<details>
  <summary>### ipv6 与 openvpn 的问题 (@happycoo)</summary>
在您的 .ovpn 配置中添加此代码

```bash
# 不要通过 VPN 路由 lan
route 192.168.1.0 255.255.255.0 net_gateway

# 停用 ipv6
pull-filter ignore "dhcp-option DNS6"
pull-filter ignore "tun-ipv6"
pull-filter ignore "ifconfig-ipv6"
```

</details>

<details>
  <summary>### 100% cpu</summary>
删除您在 /config 中的 nova3 文件夹并重启 qBittorrent

</details>

<details>
  <summary>### 监控文件夹 (@FaliseDotCom)</summary>

- 前往 config\addons_config\qBittorrent
- 找到（或创建）文件 watched_folders.json
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

等待几分钟并重启插件，这可能是 GitHub 的暂时不可用

### 本地挂载无效参数 (@antonio1475)

> [cont-init.d] 00-local_mounts.sh: executing...
> Local Disks mounting...
> mount: mounting /dev/sda1 on /mnt/sda1 failed: Invalid argument
> [19:19:44] FATAL: Unable to mount local drives! Please check the name.
> [cont-init.d] 00-local_mounts.sh: exited 0.

尝试通过在 "localdisks" 选项中放置分区标签而不是硬件名称来挂载

</details>

<details>
  <summary>### 使用 openvpn 后几天元数据获取丢失 (@almico)</summary>

在您的 config.ovpn 中添加 `ping-restart 60`

</details>

<details>
  <summary>### 小规模窗口下载信息为空 (@aviadlevy)</summary>

当我的窗口宽度小于 960 像素时，我的下载为空。
解决方案是重置 Vuetorrent 设置。

</details>

## 支持

在 github 上创建问题，或在 [home assistant 版本](https://community.home-assistant.io/t/home-assistant-addon-qbittorrent/279247) 中提问

---

![插图](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/qbittorrent/illustration.png)