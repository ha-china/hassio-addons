# hassio-hotspot（之前称为hassio-hostapd-extended）
使用USB WiFi网卡（或板载）为您的Home Assistant物联网设备启用接入点（带嵌入式DHCP服务器）。USB WiFi主要用于您希望为物联网设备使用不同的网络基础设施，而RPI板载WiFi不可用或不稳定。

它允许使用外部USB WiFi网卡（Ralink、Atheros等）为您的物联网设备创建**可选的DHCP服务器**接入点。它开始了一个hostapd插件的分支，我将其重命名，因为现在它不仅限于这一点：它为热点上的设备添加了带可选互联网访问的DHCP服务器。它还增加了对外部USB网卡的支持，以启用稳定的接入点，众所周知，RPI板载Broadcomm WiFi运行不稳定，并且无法提供所需的可靠性。

## 安装

要使用此存储库与您的Hass.io安装一起使用，请按照Home Assistant网站上的[官方说明](https://www.home-assistant.io/hassio installing_third_party_addons/)进行操作，以下是URL：

```txt
https://github.com/joaofl/hassio-addons
```

### 配置

可用的配置选项如下。请确保根据您的需求进行编辑：

```json
{
    "ssid": "WIFI_NAME",
    "wpa_passphrase": "WIFI_PASSWORD",
    "channel": "0",
    "address": "192.168.2.1",
    "netmask": "255.255.255.0",
    "broadcast": "192.168.2.254"
    "interface": ""
    "interface_internet": "eth0"
    "allow_internet": false
    "dhcp_server": true
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
            "name": "Living Room Light"
        }
    ]
}
```

当频道设置为0时，它将自动找到最佳频道。

当`interface`选项留空时，将在日志中打印出检测到的wlan接口列表，并且插件将终止。然后在配置中设置正确的`interface`值，然后重新启动插件。

### DHCP配置

#### 租赁时间
`lease_time`选项设置DHCP分配的IP地址的有效时间（以秒为单位）。默认为864000秒（10天）。

#### 静态租赁
配置静态租赁时，请确保IP地址不在您的DHCP范围内（由`dhcp_start`和`dhcp_end`定义），以避免IP冲突。

示例：如果您的DHCP范围是192.168.2.100到192.168.2.200，您的静态IP应低于.100或高于.200。

`static_leases`选项允许您：
- 根据设备的MAC地址为设备保留特定的IP地址
- 可选地为设备分配友好的名称以进行识别
- 确保设备始终获得相同的IP地址

每个静态租赁条目需要：
- `mac`：设备的MAC地址（格式：XX:XX:XX:XX:XX:XX）
- `ip`：要分配的IP地址
- `name`：（可选）用于识别设备的友好名称
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
