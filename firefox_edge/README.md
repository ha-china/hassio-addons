# Home Assistant 插件：Firefox (Edge)

_可在 Home Assistant 内运行 Firefox 浏览器，以便从您家中访问本地或外部网站。_

![支持 aarch64 架构][aarch64-shield]
![支持 amd64 架构][amd64-shield]

## 简介

Mozilla Firefox 是由 Mozilla 基金会及其子公司 Mozilla 开发的一种免费开源网页浏览器。

此插件基于 [docker 镜像](https://github.com/jlesage/docker-firefox)，由 [Jocelyn Le Sage](https://github.com/jlesage) 提供。

衷心感谢他为创建和维护这些优秀的容器所做的一切。
他是真正需要获得 [支持](https://github.com/sponsors/jlesage) 的英雄。

## 与原始容器的区别

为了使此容器作为插件运行，或是出于个人偏好，有一些差异：

- Edge 版本：此容器基于 Alpine **Edge**，而非 Alpine **Stable**。主要原因是为了能获取最新的 Firefox 版本。容器启动时，日志中可能会显示一个较旧的 Firefox 版本，这可以忽略。每次容器启动时，它都会尝试更新 Firefox。
- 为了让其与 Home Assistant 的持久化存储兼容，Firefox 档案已被重新映射到 `/data`，而下载文件则被重新映射到 `/share/firefox`（在容器初始化期间）。与稳定版插件类似，Firefox 本身运行为非特权用户。
- 与稳定版插件不同，此变体在每次启动时（init 阶段，作为 root 用户）运行`apk update && apk upgrade`，以从 Alpine edge 获取最新的 Firefox。如果升级失败（例如没有网络连接），该插件仍会使用镜像中嵌入的 Firefox 版本启动。

## 如何使用

只需安装、启动容器，然后点击“打开 Web UI”。您可以使用“在侧边栏显示”以便快速访问。您在 Firefox 中进行的所有操作都会持久化，即使您停止插件或重启 Home Assistant 宿主操作系统也是如此。

## 文件浏览器和终端

底层镜像包含一个集成的网络文件管理器和一个网络终端。两者默认均被禁用，您可以在插件的配置选项卡中启用它们 (`WEB_FILE_MANAGER` 和 `WEB_TERMINAL`)。

## 下载

在 Firefox 中下载的文件会自动存储到您的`/share/firefox` 文件夹中。

## 上传

如果您需要通过 Firefox 插件上传文件，可以使用 [文件编辑器插件](https://github.com/home-assistant/addons/blob/master/configurator/) 将文件上传到您的`/share/firefox` 文件夹。
文件将在插件的 `downloads` 文件夹中变得可用。当您选择要上传的文件时，可以浏览到此位置。

## 导入书签

您可以通过将 `bookmarks.html` 文件拖放到您的`/share/firefox` 文件夹中，然后在 Firefox 中导入该文件来导入书签。

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
