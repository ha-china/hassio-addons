# Home Assistant 插件：Firefox

_在 Home Assistant 内部运行 Firefox 浏览器，以便从家中访问本地或外部网站。_

![支持 aarch64 架构][aarch64-shield]
![支持 amd64 架构][amd64-shield]

## 简介

Mozilla Firefox 是由 Mozilla 基金会及其子公司 Mozilla 公司开发的一款免费和开源的网络浏览器。

此插件基于 [jocelyn le sage](https://github.com/jlesage) 提供的 [docker 镜像](https://github.com/jlesage/docker-firefox)。

衷心感谢他为创建和维护这些出色容器所付出的努力。
他是真正的英雄，需要获得 [支持](https://github.com/sponsors/jlesage)。

## 与原始容器的区别

为了使其与 Home Assistant 的持久化功能兼容，Firefox 配置文件已重新映射到插件的 `/data` 卷，下载内容存储到 `/share/firefox` 文件夹中。此重新映射发生在容器初始化过程中，因此 Firefox 本身以非特权用户身份运行。

## 如何使用

只需安装、启动容器并点击“打开 Web UI"。您可以使用“显示在侧边栏”以便快速访问。您在 Firefox 中执行的所有操作都会得到持久化，即使停止插件或重启 Home Assistant 主机操作系统也是如此。

## 文件浏览器和终端

底层镜像包含集成的网络文件管理器和一个网络终端。这两项默认均处于禁用状态，并可以在插件的配置选项卡中启用（`WEB_FILE_MANAGER` 和 `WEB_TERMINAL`）。

## 下载

在 Firefox 中下载的文件会自动存储到您的 `/share/firefox` 文件夹中。

## 上传

如果您需要通过 Firefox 插件上传文件，可以使用 [编辑器插件](https://github.com/home-assistant/addons/blob/master/configurator/) 将文件上传到您的 `/share/firefox` 文件夹。文件将存储在插件的 `downloads` 文件夹中。在选择要上传的文件时，您可以导航到此位置。

## 导入书签

您可以通过将 `bookmarks.html` 文件拖放到您的 `/share/firefox` 文件夹中，然后在 Firefox 中导入该文件来进行导入。

[aarch64-shield]: https://img.shields.io/badge/aarch64-yes-green.svg
[amd64-shield]: https://img.shields.io/badge/amd64-yes-green.svg

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
