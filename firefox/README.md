# Home Assistant 附加组件：Firefox

将 Firefox 作为浏览器运行在 Home Assistant 内部，以便从您家中访问本地或外部网站。

![支持 aarch64 架构][aarch64-shield]
![支持 amd64 架构][amd64-shield]

## 关于

Mozilla Firefox 是由 Mozilla 基金会及其子公司 Mozilla 公司开发的一个免费且开源的网页浏览器。

此附加组件基于 [Jocelyn Le Sage](https://github.com/jlesage) 的 [docker 镜像](https://github.com/jlesage/docker-firefox)。

对他创建的并加以维护的优秀容器深表感谢。
他是真正的英雄，值得得到 [支持](https://github.com/sponsors/jlesage)。

## 与原容器的区别

为了使其能够与 Home Assistant 持久化兼容，Firefox 配置文件已映射到附加组件的 `/data` 卷，下载也指向 `/share/firefox` 文件夹。此映射在容器初始化期间发生，因此 Firefox 本身会以无privileged（未授权）用户身份运行。

## 如何使用

只需安装、启动容器并点击"打开网页界面"。您可以在侧边栏中使用"显示在侧边栏"以便快速访问。您所做的所有内容都会持久化存储到 Firefox 中，即使您停止附加组件或重启 Home Assistant 主机操作系统也是如此。

## 文件浏览器和终端

底层镜像集成了网页文件管理器和网页终端。默认情况下两者均被禁用，您可以在附加组件的配置选项卡（`WEB_FILE_MANAGER` 和 `WEB_TERMINAL`）中启用它们。

## 下载

在 Firefox 中下载的文件会自动存储到您的 `/share/firefox` 文件夹。

## 上传

如果您需要通过 Firefox 附加组件上传文件，您可以使用 [文件编辑器附加组件](https://github.com/home-assistant/addons/blob/master/configurator/) 将文件上传到您的 `/share/firefox` 文件夹。文件将在附加组件的 `downloads` 文件夹中可用。当您选择要上传的文件时，可以浏览到此位置。

## 导入书签

您可以通过将它们拖放到您的 `/share/firefox` 文件夹以及在 Firefox 中导入 `bookmarks.html` 文件来导入书签。

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
