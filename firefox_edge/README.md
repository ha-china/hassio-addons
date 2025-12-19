# Home Assistant 插件：Firefox (Edge)

在 Home Assistant 中以浏览器形式运行 Firefox，以便从家中访问本地或外部网站。

![支持 aarch64 架构][aarch64-shield]
![支持 amd64 架构][amd64-shield]
![支持 armv7 架构][armv7-shield]
![支持 i386 架构][i386-shield]

## 关于

Mozilla Firefox 是由 Mozilla 基金会及其子公司 Mozilla 公司开发的一款免费开源网页浏览器。

此插件基于 [docker 镜像](https://github.com/jlesage/docker-firefox) 由 [Jocelyn Le Sage](https://github.com/jlesage) 提供。

非常感谢他创建和维护了这些出色的容器。
他是需要 [支持](https://github.com/sponsors/jlesage) 的真正英雄。

## 与原始容器的差异

有一些差异是为了使此容器作为插件工作而必需的，或者只是基于我的偏好进行的调整：

- Edge 版本：此容器不是基于 Alpine **稳定版**，而是基于 Alpine **Edge版**。主要原因是为了使用最新的 Firefox 版本。在启动时，容器可能在日志中显示较旧版本的 Firefox，可以忽略。每次容器启动时，它都会尝试更新 Firefox。
- 为了使其与 Home Assistant 持久化兼容，我需要重新映射文件夹，为此，启动脚本以 `root` 用户运行。我将在未来尽量避免这种情况。

## 如何使用

只需安装、启动容器，然后点击“打开 Web UI”。您可以使用“在侧边栏中显示”以方便访问。您在 Firefox 中所做的所有操作都会被持久化。即使您停止插件或重启 Home Assistant 主机操作系统。

## 下载

在 Firefox 中下载的文件将自动存储到您的 `/share/firefox` 文件夹中。

## 上传

如果您需要通过 Firefox 插件上传文件，您可以使用 [文件编辑器插件](https://github.com/home-assistant/addons/blob/master/configurator/) 将文件上传到您的 `/share/firefox` 文件夹。
文件将在插件的 `downloads` 文件夹中可用。当您选择要上传的文件时，可以浏览到该位置。

## 导入书签

您可以通过将它们拖放到您的 `/share/firefox` 文件夹中来导入 `bookmarks.html` 文件，并在 Firefox 中导入 `bookmarks.html` 文件。

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
