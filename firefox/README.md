# Home Assistant Add-on: Firefox

_在家中通过 Home Assistant 使用 Firefox 浏览器访问本地或外部网站。_

![Supports aarch64 Architecture][aarch64-shield]
![Supports amd64 Architecture][amd64-shield]

## 关于

Mozilla Firefox 是由 Mozilla 基金会及其子公司 Mozilla Corporation 开发的一款免费开源网页浏览器。

此 Add-on 基于 [Jocelyn Le Sage](https://github.com/jlesage) 的 [docker 镜像](https://github.com/jlesage/docker-firefox)。

由衷感谢他为创建并维护这些出色的容器所做的工作。
他是真正的英雄，值得获得 [支持](https://github.com/sponsors/jlesage)。

## 与原始容器的区别

为了使其能够兼容 Home Assistant 的持久化存储，Firefox 配置文件已被映射到 Add-on 的 `/data` 卷，而下载文件则存储到 `/share/firefox` 文件夹中。此映射发生在容器初始化过程中，因此 Firefox 本身以无特权用户身份运行。

## 如何使用

只需安装、启动容器并点击“打开网页界面”。您可以使用“在侧边栏显示”功能以便快速访问。您对 Firefox 所做的所有操作都会被持久化存储，即使您停止 Add-on 或重启 Home Assistant 主机操作系统也是如此。

## 文件浏览器和终端

底层镜像包含一个集成的网络文件管理器和一个网络终端。默认情况下两者均被禁用，您可以在 Add-on 的配置页签（`WEB_FILE_MANAGER` 和 `WEB_TERMINAL`）中启用它们。

## GPU 加速

此 Add-on 被授予访问宿主 GPU（`/dev/dri`）的权限，因此可以使用硬件加速进行显示渲染，而不是软件渲染。这需要在宿主端使用开源内核驱动程序（Intel `i915`、AMD `amdgpu` 或 `nouveau`）；专有 NVIDIA 驱动程序不受支持。Add-on 日志会在启动时报告是否检测并可用到 GPU。有关详细信息，请参阅 [上游文档](https://github.com/jlesage/docker-firefox#gpu-acceleration-support)。

## 下载

在 Firefox 中下载的文件会自动存储到您的 `/share/firefox` 文件夹中。

## 上传

如果您需要通过 Firefox Add-on 上传文件，可以使用 [文件编辑器 Add-on](https://github.com/home-assistant/addons/blob/master/configurator/) 将文件上传到您的 `/share/firefirefox` 文件夹。
文件将可用于 Add-on 的 `downloads` 文件夹中。选择文件进行上传时，您可以浏览到此位置。

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

<img src="https://raw.gitcode.com/ha-china/ha-apps/raw/main/WeChat_QRCode.png" width="50%" /> 📲

## ☕ 赞助支持

如果您觉得我花费大量时间维护这个库对您有帮助，欢迎请我喝杯奶茶，您的支持将是我持续改进的动力！

<div style="display: flex; justify-content: space-between;">
  <img src="https://raw.gitcode.com/ha-china/ha-apps/raw/main/1_readme/Ali_Pay.jpg" height="350px" />
  <img src="https://raw.gitcode.com/ha-china/ha-apps/raw/main/1_readme/WeChat_Pay.jpg" height="350px" />
</div> 💖

感谢您的支持与鼓励！
