# Home Assistant Community Add-on: Matterbridge
![Supports aarch64 Architecture][aarch64-shield] ![Supports amd64 Architecture][amd64-shield] ![Supports armhf Architecture][armhf-shield] ![Supports armv7 Architecture][armv7-shield]
![Project Maintenance][maintenance-shield]

Matterbridge for Homeassistant OS

## About

A simple chat bridge<br />
Letting people be where they want to be.<br />
Bridges between a growing number of protocols.<br />

## Installation

[![FaserF Homeassistant Addons](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2FFaserF%2Fhassio-addons)
<br />
The installation of this add-on is pretty straightforward and not different in comparison to installing any other custom Home Assistant add-on.<br />
Just click the link above or add my repo to the hassio addons repositorys: <https://github.com/FaserF/hassio-addons>

Put your website files to /share/htdocs<br />
Example File where your index.html should be: /share/htdocs/index.html <br />

If you want to integrate your website with a mariadb database. Please ensure that the MariaDB Addon is installed!

## Configuration

**Note**: _Remember to restart the add-on when the configuration is changed._

Example add-on configuration:

```yaml
config_path: /share/matterbridge.toml
```

**Note**: _This is just an example, don't copy and paste it! Create your own!_

### Option: `config_path`

The path to your matterbridge config file. Have a look at the example config here: <https://github.com/42wim/matterbridge/blob/master/matterbridge.toml.sample>

**Note**: _It has to be put somewhere in the /share folder!_

## Support

Got questions or problems?

You can [open an issue here][issue] GitHub.
Please keep in mind, that this software is only tested on armv7 running on a Raspberry Pi 4.

## Authors & contributors

The original program is from the 42wim. For more informatios please visit this page: <https://github.com/42wim/matterbridge><br />
The hassio addon is brought to you by [FaserF].

## License

MIT License

Copyright (c) 2019-2025 FaserF & 42wim

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

[maintenance-shield]: https://img.shields.io/maintenance/yes/2025.svg
[aarch64-shield]: https://img.shields.io/badge/aarch64-yes-green.svg
[amd64-shield]: https://img.shields.io/badge/amd64-yes-green.svg
[armhf-shield]: https://img.shields.io/badge/armhf-yes-green.svg
[armv7-shield]: https://img.shields.io/badge/armv7-yes-green.svg
[FaserF]: https://github.com/FaserF/
[issue]: https://github.com/FaserF/hassio-addons/issues
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
