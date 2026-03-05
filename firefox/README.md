# Home Assistant 插件：Firefox

_在 Home Assistant 中运行 Firefox 浏览器，以便从家中访问本地或外部网站。_

![支持 aarch64 架构][aarch64-shield]
![支持 amd64 架构][amd64-shield]
![支持 armv7 架构][armv7-shield]
![支持 i386 架构][i386-shield]

## 关于

Mozilla Firefox 是由 Mozilla 基金会及其子公司 Mozilla Corporation 开发的免费开源网络浏览器。

该插件基于 [Jocelyn Le Sage](https://github.com/jlesage) 的 [docker 镜像](https://github.com/jlesage/docker-firefox)。

非常感谢他创建了如此出色的容器并一直维护。
他是真正的英雄，需要得到 [支持](https://github.com/sponsors/jlesage)。

## 与原容器的区别

为了使其与 Home Assistant 的持久化兼容，我需要重新映射文件夹。为此，启动脚本以 `root` 身份运行。我将在未来尝试避免这种情况。

## 如何使用

只需安装、启动容器并点击“打开 Web UI”。您可以使用“显示在侧边栏”以便轻松访问。您在 Firefox 中的所有操作都会被持久化保存。即使您停止插件或重启 Home Assistant 主机操作系统。

## 下载

在 Firefox 中下载的文件会自动存储到您的 `/share/firefox` 文件夹中。

## 上传

如果您需要通过 Firefox 插件上传文件，可以使用 [文件编辑器插件](https://github.com/home-assistant/addons/blob/master/configurator/) 将文件上传到您的 `/share/firefox` 文件夹。
文件将可在插件的 `downloads` 文件夹中找到。当您选择要上传的文件时，可以浏览到该位置。

## 导入书签

您可以将 `bookmarks.html` 文件拖放到 `/share/firefox` 文件夹中，然后在 Firefox 中导入该文件。

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
