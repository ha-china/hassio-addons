# Home Assistant 插件：Firefox

_在 Home Assistant 中运行 Firefox 作为浏览器，以便从您的家庭访问本地或外部网站。_

![Supports aarch64 Architecture][aarch64-shield]
![Supports amd64 Architecture][amd64-shield]

## 关于

Mozilla Firefox 是由 Mozilla 基金会及其子公司 Mozilla 公司开发的免费开源网络浏览器。

此插件基于 [docker 镜像](https://github.com/jlesage/docker-firefox)，由 [Jocelyn Le Sage](https://github.com/jlesage) 提供帮助。

衷心感谢他创建了这些牧师并维护。
他是真正的英雄，需要 [支持](https://github.com/sponsors/jlesage)。

## 与原始容器的不同

为了使它与 Home Assistant 持续存储兼容，Firefox 配置文件被重映射到插件的 `/data` 卷，下载存储到 `/share/firefox` 文件夹。此重映射在容器初始化期间发生，因此 Firefox 本身运行为非特权用户。

## 如何使用

只需安装、启动容器并点击“打开 Web UI"。您可以使用“显示在侧边栏”进行快速访问。您所做的操作都会在 Firefox 中持续存储，即使您停止该插件或重启 Home Assistant 宿主机操作系统。

## 文件浏览器和终端

底层图像包括集成的 Web 文件管理器和网络终端。两者默认禁用，可以从插件的配置选项卡中启用（`WEB_FILE_MANAGER` 和 `WEB_TERMINAL`）。

## 下载

Firefox 中下载的文件会自动存储到您的 `/share/firefox` 文件夹。

## 上传

如果您需要通过 Firefox 插件上传文件，您可以使用 [文件编辑器插件](https://github.com/home-assistant/addons/blob/master/configurator/) 将文件上传到您的 `/share/firefox` 文件夹。
文件将在插件的 `downloads` 文件夹中可用。当您选择要上传的文件时，可以浏览到此位置。

## 导入书签

您可以通过将它们拖放到您的 `/share/firefox` 文件夹并在 Firefox 中导入 `bookmarks.html` 文件来导入 `bookmarks.html` 文件。

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
