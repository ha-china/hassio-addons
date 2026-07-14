# Home Assistant 插件：Firefox

在 Home Assistant 内运行 Firefox 浏览器，以便从您的家中访问本地或外部网站。

![支持 aarch64 架构][aarch64-shield]
![支持 amd64 架构][amd64-shield]

## 关于

Mozilla Firefox 是由 Mozilla Foundation 及其子公司 Mozilla Corporation 开发的一款免费开源网络浏览器。

此插件基于 [docker 镜像](https://github.com/jlesage/docker-firefox) 由 [Jocelyn Le Sage](https://github.com/jlesage) 提供。

非常感谢他为创建和维护这些优秀的容器而付出的努力。他是真正的英雄，需要得到 [支持](https://github.com/sponsors/jlesage)。

## 与原始容器的区别

为了与 Home Assistant 持久性兼容，Firefox 配置文件被重新映射到插件的 `/data` 卷，下载被保存到 `/share/firefox` 文件夹。此重新映射发生在容器初始化期间，因此 Firefox 本身以非特权用户身份运行。

## 使用方法

只需安装，启动容器，然后点击“打开 Web UI”。您可以使用“在侧边栏显示”以便于访问。您在 Firefox 中所做的所有操作都将持久保存，即使您停止插件或重启 Home Assistant 主机操作系统。

## 文件浏览器和终端

基础镜像包含一个集成的网络文件管理器和网络终端。默认情况下，这两个功能都是禁用的，您可以从插件的配置选项卡（`WEB_FILE_MANAGER` 和 `WEB_TERMINAL`）中启用它们。

## 下载

在 Firefox 中下载的文件将自动存储到您的 `/share/firefox` 文件夹。

## 上传

如果您需要通过 Firefox 插件上传文件，您可以使用 [文件编辑器插件](https://github.com/home-assistant/addons/blob/master/configurator/) 将文件上传到您的 `/share/firefox` 文件夹。文件将在插件的 `downloads` 文件夹中可用。当您选择上传文件时，可以浏览到该位置。

## 导入书签

您可以通过将 `bookmarks.html` 文件拖放到您的 `/share/firefox` 文件夹中，并在 Firefox 中导入 `bookmarks.html` 文件来导入书签。

[aarch64-shield]: https://img.shields.io/badge/aarch64-yes-green.svg
[amd64-shield]: https://img.shields.io/badge/amd64-yes-green.svg
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
