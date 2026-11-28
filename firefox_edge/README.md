# Home Assistant 插件：Firefox

在 Home Assistant 中运行 Firefox 作为浏览器，以访问您家中的本地或外部网站。

![支持 aarch64 架构][aarch64-shield]
![支持 amd64 架构][amd64-shield]

## 关于

Mozilla Firefox 是由 Mozilla 基金会及其子公司 Mozilla Corporation 开发的一个免费且开源的 Web 浏览器。

此插件基于 [Jocelyn Le Sage](https://github.com/jlesage) 提供的 [docker 图像](https://github.com/jlesage/docker-firefox)。
非常感谢他为创建和维护这些极佳容器所做的工作。
他是真正需要得到 [支持](https://github.com/sponsors/jlesage) 的英雄。

## 与原始容器的区别

有一些差异是使这个容器作为插件工作所必需的，或者基于我的偏好我所做的调整：

- Edge 版本：此容器不是基于 Alpine **Stable**，而是基于 Alpine **Edge**。主要原因是为了利用最新版本可用的 Firefox。在启动期间，日志中可能会显示旧版本的 Firefox，可以忽略。它每次容器启动时都会尝试更新 Firefox。
- 为了使它能与 Home Assistant 持久化兼容，在容器初始化期间，Firefox 配置文件被映射到 `/data`，下载存储到 `/share/firefox`。与稳定版插件一样，Firefox 本身以无权限用户运行。
- 与稳定版插件不同，此变体在每次启动时（在 init 阶段，作为 root 用户）运行 `apk update && apk upgrade`，以从 Alpine Edge 拉取最新的 Firefox。如果升级失败（例如，没有网络连接），插件仍会使用镜像中内置的 Firefox 版本启动。

## 如何使用

只需安装、启动容器，然后点击“打开 Web 界面”。您可以使用“在侧边栏显示”以便轻松访问。您对 Firefox 所做的任何操作都会持久化存储，即使您停止插件或重启 Home Assistant 主机操作系统也是如此。

## 文件浏览器和终端

底层镜像包含一个集成的 Web 文件管理器和一个 Web 终端。默认情况下两者均处于关闭状态，可以在插件的配置标签页中启用它们（`WEB_FILE_MANAGER` 和 `WEB_TERMINAL`）。

## 下载

在 Firefox 中下载的文件会自动存储到您的 `/share/firefox` 文件夹中。

## 上传

如果您需要通过 Firefox 插件上传文件，可以使用 [文件编辑器插件](https://github.com/home-assistant/addons/blob/master/configurator/) 将文件上传到您的 `/share/firefox` 文件夹。
文件将在插件的 `downloads` 文件夹中可用。选择要上传的文件时，您可以浏览到此位置。

## 导入书签

您可以通过将其拖放到您的 `/share/firefox` 文件夹中，然后在 Firefox 中导入 `bookmarks.html` 文件来导入书签文件。

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
