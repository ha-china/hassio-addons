# hassio-router
这是一个基于 https://github.com/garywill/linux-router 的 home assistant 插件。

它使用其丰富的脚本启动一个接入点，并提供了多种自定义和配置选项，这些选项由 linux-router 项目提供。
## 安装

要使用此存储库与您的 Hass.io 安装一起使用，请按照 Home Assistant 网站上的[官方说明](https://www.home-assistant.io/hassio installing_third_party_addons/)进行操作，以下面的 URL 为准：

```txt
https://github.com/joaofl/hassio-addons
```

### 配置

可用的配置选项如下。请确保根据您的需求进行编辑：

```
{
    "ssid": "WIFI_NAME",
    "passphrase": "WIFI_PASS",
    "channel": "0",
    "address": "192.168.2.1",
    "interface": ""
    "allow_internet": false
    "hide_ssid": false
}

```
当通道设置为 0 时，它将自动找到最佳通道。

当 `interface` 选项留空时，将在日志中打印出检测到的 wlan 接口列表，并且插件将终止。然后在配置中设置正确的 `interface` 值，然后重新启动插件。
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
