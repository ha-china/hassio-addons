# Home assistant add-on: WireGuard Easy Version 15+

You have found the easiest way to install & manage WireGuard on any Linux host!

This runs version 15+ of WG Easy with Home Assistant ingress support.

**Issue: 23 June 2026 Look at this thread for directions to work on HAOS 18** https://github.com/jdeath/homeassistant-addons/issues/86#issuecomment-4778605817

**HA Supervised on Raspberry Pi OS (Bookworm) needs this fix** https://github.com/jdeath/homeassistant-addons/issues/88

Remember, you need a reverse proxy in front of the UI to be secure. This version enables non-secure access for setup, but you should not use it unless on your local network.

_Thanks to everyone having starred my repo! To star it click on the image below, then it will be on top right. Thanks!_

[![Stargazers repo roster for @jdeath/homeassistant-addons](https://reporoster.com/stars/jdeath/homeassistant-addons)](https://github.com/jdeath/homeassistant-addons/stargazers)

## About

This addon is based on the [docker image](https://github.com/wg-easy/wg-easy). 


* All-in-one: WireGuard + Web UI.
* Ingress support via HA sidebar.
* Ingress works for basic commands (new client, display QR code), but cannot download a configuration file.
* Easy installation, simple to use.
* List, create, edit, delete, enable & disable clients.
* Show a client's QR code.
* Download a client's configuration file.
* Statistics for which clients are connected.
* Tx/Rx charts for each connected client.
* Gravatar support.

## Installation

The installation of this add-on is pretty straightforward and not different in
comparison to installing any other Hass.io add-on.

1. [Add my Hass.io add-ons repository][repository] to your Hass.io instance.
1. Install this add-on.
1. Set your ports (or leave the default)
1. Forward the TCP and UDP ports on your router. Forward the same ports, do not try to make them different.
1. Start the addon. This addon takes a while to start. Give it time and hit reload a few times
1. To setup the addon, you must first go to non-Ingress and change the URL
1. To to `http://HomeAssistantIPAddress:Port/` (port will probably be 51821)
1. It will reload the URL to something like `http://192.168.1.XXX:51821/login`
1. Remove `login` and make it `setup/1`
1. Go through the wizard and set everything up
1. Close the web browser tab
1. Go back to home assistant apps.
1. Open WebUI (ingress) or directly at port 51821
1. Enter your login and should work like normal
1. If you go to http://port:ip and cannot login, make sure url looks like `http://192.168.1.XXX:51821/login`
1. If you messed something up. shutdown app, clear `/addon_configs/2effc9b9_wgeasy15plus`, restart, and do the `setup/1` trick
   
## Configuration

your configuration will be saved in /addon_configs/2effc9b9_wgeasy15plus

> If want to use Adguard Home Addon https://github.com/hassio-addons/addon-wireguard , set DNS to 172.30.32.1

[repository]: https://github.com/jdeath/homeassistant-addons

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
