# Home Assistant 插件：Firefox

在 Home Assistant 中运行 Firefox 浏览器，以便从家中访问本地或外部网页。

![支持 aarch64 架构][aarch64-shield]
![支持 amd64 架构][amd64-shield]

## 关于介绍

Mozilla Firefox 是由 Mozilla 基金会及其子公司 Mozilla 公司开发的一款免费、开源的网页浏览器。

此插件基于 [Jocelyn Le Sage](https://github.com/jlesage) 的 [docker 镜像](https://github.com/jlesage/docker-firefox)。

衷心感谢他为创建和维护这些出色的容器所做的贡献。他是真正的英雄，值得得到 [支持](https://github.com/sponsors/jlesage)。

## 与原始容器的区别

为了使它与 Home Assistant 持久化兼容，Firefox 配置文件重映射到了插件的 `/data` 卷，下载地址映射到 `/share/firefox` 文件夹。此重映射发生在容器初始化期间，因此 Firefox 本身在运行特权用户时启动。

## 如何使用

只需安装、启动容器并点击“打开网页界面”。您可以使用“侧边栏显示”功能进行快速访问。在 Firefox 中执行的所有操作都会被持久化存储，即使您停止插件或重启 Home Assistant 主操作系统也是如此。

## 文件浏览器和终端

底层的镜像集成了一个网络文件管理器和一个网络终端。这些功能默认禁用，可以从插件的配置选项卡（`WEB_FILE_MANAGER` 和 `WEB_TERMINAL`）中启用。

## 下载

Firefox 中下载的文件会自动存储到您的 `/share/firefox` 文件夹中。

## 上传

如果需要通过 Firefox 插件上传文件，您可以使用 [文件编辑器插件](https://github.com/home-assistant/addons/blob/master/configurator/) 将文件上传到您的 `/share/firefox` 文件夹。下载的文件将放在插件的 `downloads` 文件夹中。当您选择要上传的文件时，可以浏览到此位置。

## 导入书签

您可以通过将 `bookmarks.html` 文件拖放到您的 `/share/firefox` 文件夹中，然后在 Firefox 中导入该 `bookmarks.html` 文件来导入书签。

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
