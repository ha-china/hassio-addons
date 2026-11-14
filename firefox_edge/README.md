# Home Assistant 附加组件：Firefox (Edge)

_在 Home Assistant 内部运行 Firefox 浏览器，以从您的家中访问本地或外部网站。_

![Supports aarch64 Architecture][aarch64-shield]
![Supports amd64 Architecture][amd64-shield]

## 关于

Mozilla Firefox 是由 Mozilla 基金会及其子公司 Mozilla 公司开发的一款免费、开源的网页浏览器。

此附加组件基于 Jocelyn Le Sage [编写的 docker 镜像](https://github.com/jlesage/docker-firefox) [Jocelyn Le Sage](https://github.com/jlesage)。

衷心感谢他为制作了并维护这些优秀的容器所做出的贡献。
他是需要被 [支持](https://github.com/sponsors/jlesage) 的真正英雄。

## 与原始容器的区别

有几个区别是必须为了使此容器作为附加组件运行而做出的，或者是基于我个人偏好进行的微调：

- **Edge 版本**：此容器不是基于 Alpine **Stable**，而是基于 Alpine **Edge**。主要原因是为了获得可用的最新 Firefox 版本。在启动期间，日志中可能会显示 Firefox 的旧版本，可以忽略。每次启动容器时，它都会尝试更新 Firefox。
- 为了使它兼容 Home Assistant 持久化存储，Firefox 配置文件在容器初始化期间重新映射到 `/data`，下载目录映射到 `/share/firefox`。与稳定版附加组件类似，Firefox 本身以无特权用户身份运行。
- 与稳定版附加组件不同，此变体每次启动时（在 init 期间，以 root 身份）都会运行 `apk update && apk upgrade`，以从 Alpine edge 拉取最新的 Firefox。如果升级失败（例如没有网络连接），附加组件仍然会使用镜像中预制的 Firefox 版本启动。

## 使用方法

只需安装、启动容器并点击“打开 Web UI"。您可以使用“侧边栏显示”以便快速访问。即使停止附加组件或重启 Home Assistant 主机操作系统，您在 Firefox 中做的所有内容都会被持久化存储。

## 文件浏览器和终端

底层镜像包含集成的网络文件管理器和网络终端。两者默认均被禁用，可以在附加组件的配置选项卡 (`WEB_FILE_MANAGER` 和 `WEB_TERMINAL`) 中启用。

## GPU 加速

附加组件被授予访问主机 GPU (`/dev/dri`) 的权限，因此可以使用硬件加速来渲染显示器，而不是使用软件渲染。这需要主机端（Intel `i915`、AMD `amdgpu` 或 `nouveau`）的开源内核驱动程序；不支持专有 NVIDIA 驱动程序。附加组件在启动时会报告是否检测到 GPU 以及是否可用作 GPU。有关详细信息，请参阅 [上游文档](https://github.com/jlesage/docker-firefox#gpu-acceleration-support)。

## 下载

在 Firefox 中下载的文件会自动存储到您的 `/share/firefox` 文件夹中。

## 上传

如果您需要通过 Firefox 附加组件上传文件，您可以使用 [文件编辑附加组件](https://github.com/home-assistant/addons/blob/master/configurator/) 将文件上传到您的 `/share/firefox` 文件夹中。
这些文件将在附加组件的 `downloads` 文件夹中可访问。选择文件进行上传时，您可以浏览到此位置。

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
