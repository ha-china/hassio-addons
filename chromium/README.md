# Home Assistant 附加组件：Chromium

_在 Home Assistant 内部运行 Chromium 浏览器，以便从您的家居设备访问本地或外部网站。_

![支持 aarch64 架构][aarch64-shield]
![支持 amd64 架构][amd64-shield]

## 关于

Chromium 是一个自由且开源的 Web 浏览器项目，主要由 Google 开发和维护。它是 Google Chrome 和许多其他浏览器赖以生存的开源代码基础。

本附加组件基于 [docker 镜像](https://github.com/jlesage/docker-chromium)，来自 [Jocelyn Le Sage](https://github.com/jlesage)。

衷心感谢他为创建和维护优秀容器所做的工作。
他是真正值得 [支持](https://github.com/sponsors/jlesage) 的英雄。

## 与原始容器的区别

为了确保与 Home Assistant 持久化兼容，Chromium 配置文件重映射到附加组件的 `/data` 卷，下载文件重映射到 `/share/chromium` 文件夹。此重映射发生在容器初始化期间，因此 Chromium 本身以非特权用户身份运行，并启用其沙箱机制。

## 如何使用

只需安装、启动容器并点击“打开 Web UI"。您可以使用“显示在侧边栏”以便快速访问。您在此进行的所有操作都会持久化保存，即使停止附加组件或重启 Home Assistant 主机也是如此。

## 文件浏览器和终端

底层镜像包含集成的 Web 文件管理器和 Web 终端。两者默认禁用，可以在附加组件的“配置”选项卡中启用（`WEB_FILE_MANAGER` 和 `WEB_TERMINAL`）。

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
