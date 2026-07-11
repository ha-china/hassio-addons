# Home Assistant 扩展：Firefox (Edge)

在 Home Assistant 中以浏览器的方式运行 Firefox，以便从您的家中访问本地或外部网站。

![支持 aarch64 架构][aarch64-shield]
![支持 amd64 架构][amd64-shield]
![支持 armv7 架构][armv7-shield]
![支持 i386 架构][i386-shield]

## 关于

Mozilla Firefox 是由 Mozilla Foundation 及其子公司 Mozilla Corporation 开发的一款免费开源网页浏览器。

此扩展基于 [docker 镜像](https://github.com/jlesage/docker-firefox) 由 [Jocelyn Le Sage](https://github.com/jlesage) 提供。

非常感谢他创建和维护了这些优秀的容器。他是真正的英雄，需要我们的 [支持](https://github.com/sponsors/jlesage)。

## 与原始容器的区别

以下是一些与原始容器不同的地方，这些差异是为了使此容器作为扩展使用或仅基于我的个人偏好的调整：

- Edge 版本：此容器不是基于 Alpine **Stable**，而是基于 Alpine **Edge**。主要原因是为了从最新的 Firefox 版本中获益。在启动过程中，容器可能在日志中显示较旧的 Firefox 版本，这可以忽略。它尝试在每次容器启动时更新 Firefox。
- 为了与 Home Assistant 持久性兼容，Firefox 配置文件在容器初始化时被重新映射到 `/data`，下载文件到 `/share/firefox`。与稳定扩展一样，Firefox 本身以非特权用户运行。
- 与稳定扩展不同，此变体在每次启动（在初始化过程中，以 root 用户身份）时都会运行 `apk update && apk upgrade` 以从 Alpine edge 中获取最新的 Firefox。如果升级失败（例如，没有网络），扩展仍然会使用图像中烘焙的 Firefox 版本启动。

## 使用方法

只需安装，启动容器，然后点击“打开 Web UI”。您可以使用“在侧边栏中显示”以方便访问。您在 Firefox 中所做的所有操作都会被持久化，即使您停止扩展或重启 Home Assistant 主机操作系统。

## 文件浏览器和终端

底层镜像包括一个集成的网络文件管理器和网络终端。默认情况下，两者都被禁用，您可以从扩展的配置标签（`WEB_FILE_MANAGER` 和 `WEB_TERMINAL`）中启用。

## 下载

在 Firefox 中下载的文件会自动存储到您的 `/share/firefox` 文件夹。

## 上传

如果您需要通过 Firefox 扩展上传文件，您可以使用 [文件编辑器扩展](https://github.com/home-assistant/addons/blob/master/configurator/) 将文件上传到您的 `/share/firefox` 文件夹。文件将在扩展的 `downloads` 文件夹中可用。当您选择上传文件时，可以浏览到该位置。

## 导入书签

您可以通过将 `bookmarks.html` 文件拖放到您的 `/share/firefox` 文件夹中，然后在 Firefox 中导入 `bookmarks.html` 文件来导入书签。

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
