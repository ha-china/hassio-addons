# Home Assistant Add-on: Firefox

在Home Assistant中运行Firefox作为浏览器，以便从家中访问本地或外部网站。

![支持aarch64架构][aarch64-shield]
![支持amd64架构][amd64-shield]
![支持armv7架构][armv7-shield]
![支持i386架构][i386-shield]

## 关于

Mozilla Firefox是由Mozilla Foundation及其子公司Mozilla Corporation开发的一款免费且开源的网页浏览器。

此插件基于[Jocelyn Le Sage](https://github.com/jlesage)的[docker镜像](https://github.com/jlesage/docker-firefox)。

非常感谢他为创建和维护出色的容器所做的贡献。
他是需要被[支持](https://github.com/sponsors/jlesage)的真英雄。

## 与原始容器的区别

为了使其与Home Assistant的持久性兼容，我需要重新映射文件夹，为此，启动脚本以`root`身份运行。我将在未来尽量避免这一点。

## 如何使用

只需安装，启动容器，然后点击“打开Web UI”。您可以使用“在侧边栏中显示”进行轻松访问。您在Firefox中做的一切都会被持久化。即使您停止插件或重新启动Home Assistant主机操作系统。

## 下载

在Firefox中下载的文件将自动存储到您的`/share/firefox`文件夹。

## 上传

如果您需要通过Firefox插件上传文件，您可以使用[文件编辑器插件](https://github.com/home-assistant/addons/blob/master/configurator/)将文件上传到您的`/share/firefox`文件夹。
文件将在插件的`downloads`文件夹中可用。当您选择要上传的文件时，您可以浏览到此位置。

## 导入书签

您可以通过将它们放入您的`/share/firefox`文件夹中导入`bookmarks.html`文件，并在Firefox中导入`bookmarks.html`文件。

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
