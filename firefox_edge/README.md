# Home Assistant Add-on: Firefox (Edge)

_Run Firefox as a browser inside Home Assistant to access local or external web sites from your home._

![Supports aarch64 Architecture][aarch64-shield]
![Supports amd64 Architecture][amd64-shield]
![Supports armv7 Architecture][armv7-shield]
![Supports i386 Architecture][i386-shield]

## About

Mozilla Firefox is a free and open-source web browser developed by Mozilla Foundation and its subsidiary, Mozilla Corporation.

This add-on is based on the [docker image](https://github.com/jlesage/docker-firefox) from [Jocelyn Le Sage](https://github.com/jlesage).

A huge thank to him for the great containers created and maintained.
He's the real hero who needs to be [supported](https://github.com/sponsors/jlesage).

## Differences with the original container

There are a few differences that were either required for this container to work as an Add-on or just my own tweaks based on my preferences:

- Edge version: this container is not based on Alpine **Stable** but Alpine **Edge**. The main reason was to benefit from the latest Firefox version available. During the startup, the container may show in the log an older version of Firefox, it can be ignored. It attempts to update Firefox each time the container starts.
- To make it compatible with Home Assistant persistence, I needed to remap folders and to do so, the startup script runs as `root`. I will try to avoid this in the future.

## How to use

Just install, start the container and click on "Open Web UI". You can use "Show in sidebar" for easy access. Everything you do is persisted in Firefox. Even if you stop the Add-on or restart Home Assistant host OS.

## Downloads

The files downloaded in Firefox are automatically stored to your `/share/firefox` folder.

## Uploads

If you need to upload files through the Firefox add-on, you can use the [File editor add-on](https://github.com/home-assistant/addons/blob/master/configurator/) to upload the files to your `/share/firefox` folder.
The files will be available in the `downloads` folder of the add-on. You can browse to this location when you select the files to upload.

## Import bookmarks

You can import `bookmarks.html` file by dropping them in your `/share/firefox` folder and import the `bookmarks.html` file in Firefox.

[aarch64-shield]: https://img.shields.io/badge/aarch64-yes-green.svg
[amd64-shield]: https://img.shields.io/badge/amd64-yes-green.svg
[armv7-shield]: https://img.shields.io/badge/armv7-yes-green.svg
[i386-shield]: https://img.shields.io/badge/i386-yes-green.svg

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
