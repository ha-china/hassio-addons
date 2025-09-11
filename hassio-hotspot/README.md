# hassio-hotspot（以前称为 hassio-hostapd-extended）
通过 USB WiFi 网卡（或板载 WiFi）为您的 IoT 设备在 Home Assistant 上启用一个接入点（带嵌入式 DHCP 服务器）。USB WiFi 特别有用，如果您希望 IoT 设备拥有不同的网络基础设施，而 RPI 的板载 WiFi 不可用或不稳定。

它允许使用外部 USB WiFi 网卡 **Ralink、Atheros 等** 创建一个接入点 **可选搭配 DHCP 服务器**，用于您的 IoT 设备。它起初是 hostapd 插件的一个分支，我重新命名了，因为它现在的功能超过了此：它为热点上的设备添加了可选择的互联网接入的 DHCP 服务器。它还为外部 USB 网卡增加了支持，以启用一个稳定的接入点，众所周知 RPI 上的板载 Broadcomm WiFi 操作不稳定，无法提供所需的可靠性。

## 安装

要在您自己的 Hass.io 安装中使用此存储库，请按照 Home Assistant 网站上 [官方说明](https://www.home-assistant.io/hassio installing_third_party_addons/) 的以下 URL：

```txt
https://github.com/joaofl/hassio-addons
```

### 配置

可用的配置选项如下所示。确保根据您的需要进行编辑：

```json
{
    "ssid": "WIFI_NAME",
    "wpa_passphrase": "WIFI_PASSWORD",
    "channel": "0",
    "address": "192.168.2.1",
    "netmask": "255.255.255.0",
    "broadcast": "192.168.2.254",
    "interface": "",
    "interface_internet": "eth0",
    "allow_internet": false,
    "dhcp_server": true,
    "dhcp_start": "192.168.2.100",
    "dhcp_end": "192.168.2.200",
    "dhcp_dns": "1.1.1.1",
    "dhcp_subnet": "255.255.255.0",
    "dhcp_router": "192.168.2.1",
    "hide_ssid": false,
    "lease_time": 864000,
    "static_leases": [
        {
            "mac": "00:11:22:33:44:55",
            "ip": "192.168.2.10",
            "name": "客厅灯"
        }
    ]
}
```

当频道设置为 0 时，它会自动找到最佳频道。

当 `interface` 选项留空时，将在日志中打印检测到的 wlan 接口列表，插件将终止。请在配置中设置正确的 `interface` 值，然后重启插件。

### DHCP 配置

#### 租约时间
`lease_time` 选项设置 DHCP 分配的 IP 地址保持有效的时间（以秒为单位）。默认值为 864000 秒（10 天）。

#### 静态租约
配置静态租约时，确保 IP 地址在您的 DHCP 范围之外（由 `dhcp_start` 和 `dhcp_end` 定义），以避免 IP 冲突。

例如：如果您的 DHCP 范围是 192.168.2.100 到 192.168.2.200，则您的静态 IP 应低于 .100 或高于 .200。

`static_leases` 选项允许您：
- 为基于其 MAC 地址的设备保留特定 IP 地址
- 可选为设备分配友好的名称以便识别
- 确保设备始终获得相同的 IP 地址

每个静态租约条目需要：
- `mac`：设备的 MAC 地址（格式：XX:XX:XX:XX:XX:XX）
- `ip`：要分配的 IP 地址
- `name`：（可选）用于识别设备的友好名称