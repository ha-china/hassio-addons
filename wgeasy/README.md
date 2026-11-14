# 家庭助手插件：WireGuard Easy

您已经找到了在任何 Linux 主机上安装和管理 WireGuard 的最简单方法！

**问题：如果插件无法启动，请确保在 YAML 中将 WG_POST_UP、WG_POST_DOWN 设置为 "" 或在 UI 中留空。最近一次更新后出现了错误。**

_感谢每位给我的仓库点星的人！要点星，请点击下方图片，然后它会在右上角。谢谢！_

[![Stargazers repo roster for @jdeath/homeassistant-addons](https://reporoster.com/stars/jdeath/homeassistant-addons)](https://github.com/jdeath/homeassistant-addons/stargazers)

## 关于

这个插件基于 [docker image](https://github.com/wg-easy/wg-easy)。源代码已从 WeeJeWel/wg-easy 进行轻微修改，以允许 ingress 和自定义 Wireguard 配置位置。我在本地重新托管了这个代码，以便重建时自动拉取最新版本的 Wireguard，但不包括 WeeJeWel/wg-easy 的 UI 更改。

* 一体化：WireGuard + Web UI。
* Ingress 正在工作 
* 安装简单，使用方便。
* 列出、创建、编辑、删除、启用和禁用客户端。
* 显示客户端的二维码。
* 下载客户端的配置文件。
* 显示已连接客户端的统计信息。
* 每个连接客户端的 Tx/Rx 图表。
* Gravatar 支持。

## 安装

安装此插件相当简单，与安装其他 Hass.io 插件没有区别。

1. [将我的 Hass.io 插件库][repository] 添加到您的 Hass.io 实例。
1. 安装此插件。
1. 根据需要编辑插件配置。只需将 WG_HOST 更改为您的外部 IP 地址。
1. 从路由器将 WG_PORT（通常为 51820）转发到您的 homeassistant IP。
1. 点击 `Save` 按钮来保存您的配置。
1. 创建目录 /ssl/wgeasy 用于存储您的配置。（如果在插件配置中更改 WGPATH，请创建不同的目录）
1. 启动插件。
1. 检查插件的日志以查看一切是否正常。
1. 打开的 WebUI 应该通过 ingress 加载。
1. 创建客户端配置，扫描二维码或下载配置文件。
1. 如果更改了设置，您可能需要重新制作客户端配置，但现在非常简单！
1. 如果您想对 UI 使用密码，请登录到您的 homeassistant 并输入：
   `docker run -it ghcr.io/wg-easy/wg-easy wgpw YOUR_PASSWORD`
1. 将单引号之间的所有内容复制到 PASSWORD_HASH 字段中。由于 UI 可通过 ingress 访问，因此其实并不需要。我不建议将此 WebUI 暴露在互联网上，但如果您敢，可以这样做！

## 配置

| Env | 默认 | 示例 | 描述 |
| - | - | - | - |
| `PASSWORD_HASH` | - | `$2a$12$XC....` | 设置后，登录 Web UI 时需要密码。见上文 |
| `WG_HOST` | - | `vpn.myserver.com` | 您的 VPN 服务器的公共主机名。 |
| `WG_PORT` | `51820` | `12345` | 您的 VPN 服务器的公共 UDP 端口。 WireGuard 在 Docker 容器内始终监听 `51820`。 在 >v14 中未使用 |
| `WG_CONFIG_PORT` | `51820` | `12345` | Home Assistant 插件使用的 UDP 端口。 您的 VPN 服务器的公共 UDP 端口。 确保在 home assistant 网络配置中网络端口相同 |
| `WG_DEVICE` | `eth0` | `eno1` | 应通过其转发 Wireguard 流量的以太网设备。 不需要使用 |
| `WG_PATH` | `/ssl/wgeasy` | `/share/wgeasy` | 在 homeassistant 上的持久存储位置 |
| `WG_PERSISTENT_KEEPALIVE` | `0` | `25` | 保持“连接”开放的秒数值。 |
| `WG_DEFAULT_ADDRESS` | `10.8.0.x` | `10.6.0.x` | 客户端 IP 地址范围。 |
| `WG_DEFAULT_DNS` | `1.1.1.1` | `8.8.8.8, 8.8.4.4` | 客户端将使用的 DNS 服务器。 |
| `WG_ALLOWED_IPS` | `0.0.0.0/0, ::/0` | `192.168.15.0/24, 10.0.1.0/24` | 客户端将使用的允许的 IP。 |
| `WG_POST_UP` | `...` | `iptables ...` | 请参见 [config.js](https://github.com/WeeJeWel/wg-easy/blob/master/src/config.js#L19) 获取默认值。 |
| `WG_POST_DOWN` | `...` | `iptables ...` | 请参见 [config.js](https://github.com/WeeJeWel/wg-easy/blob/master/src/config.js#L26) 获取默认值。 |

> 如果您更改 `WG_PORT`，请确保还更改暴露的端口。

> 如果想使用 Adguard Home 插件 https://github.com/hassio-addons/addon-wireguard，将 `WG_DEFAULT_DNS` 设置为 172.30.32.1

[repository]: https://github.com/jdeath/homeassistant-addons