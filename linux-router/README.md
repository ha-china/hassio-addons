# hassio-router
这是一个基于 [linux-router](https://github.com/garywill/linux-router) 的家庭助手插件。

它使用其广泛的脚本来启动接入点，并提供多种自定义和配置选项，具体由 linux-router 项目提供。
## 安装

要在您的 Hass.io 安装中使用此存储库，请按照[官方说明](https://www.home-assistant.io/hassio installing_third_party_addons/)操作，并使用以下 URL：

```txt
https://github.com/joaofl/hassio-addons
```

### 配置

可用的配置选项如下所示。根据您的需求确保进行编辑：

```
{
    "ssid": "WIFI_NAME",
    "passphrase": "WIFI_PASS",
    "channel": "0",
    "address": "192.168.2.1",
    "interface": "",
    "allow_internet": false,
    "hide_ssid": false
}
```
当频道设置为 0 时，它会自动找到最佳频道。

当 `interface` 选项留空时，日志中将打印检测到的 wlan 接口列表，并且插件会终止。然后在配置中设置正确的 `interface` 值，重启插件。