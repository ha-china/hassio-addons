# Home Assistant Community Add-on: Bluetooth-MQTT-Gateway
![Supports aarch64 Architecture][aarch64-shield] ![Supports amd64 Architecture][amd64-shield] ![Supports armhf Architecture][armhf-shield] ![Supports armv7 Architecture][armv7-shield] ![Supports i386 Architecture][i386-shield]
![Project Maintenance][maintenance-shield]

# Project has been deprecated by the original creator, therefore this Addon won't receive new features
Please have a look [here](https://github.com/zewelor/bt-mqtt-gateway), it is recommended to use Bluetooth Proxy.

Bluetooth-MQTT-Gateway for Homeassistant OS

## About

A simple Python script which provides a Bluetooth to MQTT gateway, easily extensible via custom workers.
See [Wiki](https://github.com/zewelor/bt-mqtt-gateway/wiki) for more information (supported devices, features and much more).

This can be used to improve the reliability of Bluetooth thermostats. See <https://github.com/home-assistant/core/issues/28601> for more information.

## Installation

The installation of this add-on is quite straightforward and not different from installing any other custom Home Assistant add-on.
Just add my repo to the hassio addons repository: <https://github.com/FaserF/hassio-addons>

Put your config file to /share/bt-mqtt-gateway.yaml
Please make sure that a MQTT add-on is already installed.

## Configuration

**Note**: _Remember to restart the add-on when the configuration is changed._
Until now, these config options do NOTHING! they are not implemented yet, but planned!!!

Example add-on configuration:

```yaml
config_path: /share/bt-mqtt-gateway.yaml
debug: true
```

**Note**: _This is just an example, don't copy and paste it! Create your own!_

### Option: `config_path`

This option is required. Change it depending on where your config file is located in your Home Assistant installation.

### Option: `debug`

Setting this option to "true" will start the add-on in debugging mode. Default: false
-> To enable debugging mode, please create an empty file at /share/bt-mqtt-gateway-debug.txt

## Support

Got questions?

You can [open an issue here][issue] on GitHub.
Please keep in mind that this software is only tested on armv7 running on a Raspberry Pi 4.

## Authors & contributors

The original program is from @zewelor. For more information, please visit this page: <https://github.com/zewelor/bt-mqtt-gateway>
The hassio add-on is brought to you by [FaserF].

## License

MIT License

Copyright (c) 2022 FaserF & zewelor

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

[aarch64-shield]: https://img.shields.io/badge/aarch64-yes-green.svg
[amd64-shield]: https://img.shields.io/badge/amd64-yes-green.svg
[armhf-shield]: https://img.shields.io/badge/armhf-yes-green.svg
[armv7-shield]: https://img.shields.io/badge/armv7-yes-green.svg
[FaserF]: https://github.com/FaserF/
[i386-shield]: https://img.shields.io/badge/i386-yes-green.svg
[issue]: https://github.com/FaserF/hassio-addons/issues
[maintenance-shield]: https://img.shields.io/maintenance/no/2024.svg
**⚠️ This resource is intended to help Chinese Home Assistant users more easily install excellent add-ons. If you are not a Chinese user, please read repository readme first**



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
