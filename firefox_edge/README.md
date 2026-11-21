# Home Assistant 附加组件：Firefox (Edge)

_通过附加组件将 Firefox 作为浏览器运行在 Home Assistant 内部，以便从主机访问本地或外部网站。_

![Supports aarch64 Architecture][aarch64-shield]
![Supports amd64 Architecture][amd64-shield]

## 关于

Mozilla Firefox 是由 Mozilla 基金会及其子公司 Mozilla Corporation 开发的一款免费且开源的网络浏览器。

本附加组件基于 [Jocelyn Le Sage](https://github.com/jlesage) 的 [docker 镜像](https://github.com/jlesage/docker-firefox)。

衷心感谢他为创建并维护这些优秀的容器所做的贡献。
他是我们需要 [支持](https://github.com/sponsors/jlesage) 的真正英雄。

## 与普通容器（镜像）的区别

有几个差异，有些是为了让此容器能够作为附加组件运行所必需的，或者是基于我个人偏好所做的微调：

- Edge 版本：此容器不是基于 Alpine **Stable**，而是基于 Alpine **Edge**。主要原因是为了使用最新可用的 Firefox 版本。在启动时，日志中可能会出现一个较旧的 Firefox 版本，可以忽略不计。每次容器启动时，它都会尝试更新 Firefox。
- 为了使它与 Home Assistant 持久化兼容，Firefox 配置文件已被映射到 `/data`，并且下载目录被映射到 `/share/firefox`（在容器初始化期间）。与稳定版附加组件一样，Firefox 本身运行在不受特权用户的身份下。
- 与稳定版附加组件不同，此变体在每次启动时（在 init 期间，以 root 权限运行）执行 `apk update && apk upgrade`，以从 Alpine edge 拉取最新的 Firefox。如果升级失败（例如没有网络连接），附加组件仍将以镜像中烘焙（预先嵌入）的 Firefox 版本启动。

## 使用方法

只需安装、启动容器，然后点击“打开 Web 界面”。您可以使用“显示在侧边栏”来方便访问。您所做的所有操作都会被 Firefox 持久化存储，即使您停止附加组件或重启 Home Assistant 主机操作系统也是如此。

## 文件浏览器和终端

底层镜像包含一个集成的 Web 文件管理器和一个 Web 终端。默认情况下，这两者都被禁用，可以通过附加组件的“配置”选项卡（`WEB_FILE_MANAGER` 和 `WEB_TERMINAL`）启用它们。

## 下载

在 Firefox 中下载的文件会自动存储到您指定的 `/share/firefox` 文件夹中。

## 上传

如果您需要通过 Firefox 附加组件上传文件，您可以使用 [文件编辑器附加组件](https://github.com/home-assistant/addons/blob/master/configurator/) 将文件上传到您的 `/share/firefox` 文件夹。这些文件可在附加组件的 `downloads` 文件夹中找到。在上传文件时选择文件时，您可以浏览到该位置。

## 导入书签

您可以通过将 `bookmarks.html` 文件拖入您的 `/share/firefox` 文件夹，并在 Firefox 中导入该 `bookmarks.html` 文件来导入书签。

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
