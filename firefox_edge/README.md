# Home Assistant Add-on: Firefox (Edge)

在家庭自动化内部运行 Firefox 浏览器以访问本地或外部网站。

![Supports aarch64 Architecture][aarch64-shield]
![Supports amd64 Architecture][amd64-shield]

## 关于

Mozilla Firefox 是由 Mozilla 基金会及其子公司 Mozilla Corporation 开发的一款免费且开源的网络浏览器。

此附加组件基于 [docker 镜像] (https://github.com/jlesage/docker-firefox)，由 [Jocelyn Le Sage] (https://github.com/jlesage) 提供。

对他创建的并维护的优秀容器表示衷心感谢。
他是真正的英雄，需要得到 [支持] (https://github.com/sponsors/jlesage)。

## 与原容器的区别

有几点不同，这些区别是为了让此容器作为附加组件工作所必需的，或者是基于个人偏好的微调：

- **Edge 版本**：此容器不是基于 Alpine **Stable**，而是基于 Alpine **Edge**。主要目的是为了使用可获得的最新 Firefox 版本。在启动期间，容器日志中可能会显示较旧的 Firefox 版本，可以忽略。每次启动容器时，它会尝试更新 Firefox。
- **为了使其与 Home Assistant 持久化兼容**：Firefox 档案被映射到 `/data`，下载路径在容器初始化期间指向 `/share/firefox`。与稳定版附加组件一样，Firefox 本身运行在特权较低的用户账户下。
- **与稳定版附加组件不同**：此变体在每次启动时（在 init 阶段，作为 root 用户）运行 `apk update && apk upgrade` 以从 Alpine edge 拉取最新的 Firefox。如果升级失败（例如没有网络连接），附加组件仍会启动，并使用镜像中预装的 Firefox 版本。

## 如何使用

只需安装、启动容器并点击"Web 界面”。您可以使用“显示在侧边栏”以便快速访问。您在 Firefox 中进行的所有操作都会持久保存，即使您停止附加组件或重新启动 Home Assistant 主机操作系统也是如此。

## 文件浏览器和终端

底层镜像包含集成的网络文件管理器和网络终端。默认情况下两者均处于禁用状态，可以在附加组件的配置选项卡 (`WEB_FILE_MANAGER` 和 `WEB_TERMINAL`) 中启用。

## 下载

在 Firefox 中下载的文件会自动存储到您的 `/share/firefox` 文件夹。

## 上传

如果您需要通过 Firefox 附加组件上传文件，您可以使用 [文件编辑器附加组件] (https://github.com/home-assistant/addons/blob/master/configurator/) 将文件上传到您的 `/share/firefox` 文件夹。
文件将可以在附加组件的 `downloads` 文件夹中访问。当您选择要上传的文件时，可以浏览到此位置。

## 导入书签

您可以通过将 `bookmarks.html` 文件拖入您的 `/share/firefox` 文件夹，然后在 Firefox 中导入 `bookmarks.html` 文件。

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
