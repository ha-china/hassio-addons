# Home Assistant 扩展：Chromium

在 Home Assistant 内运行 Chromium 浏览器，以便从您的家中访问本地或外部的网站。

![支持 aarch64 架构][aarch64-shield]
![支持 amd64 架构][amd64-shield]

## 关于

Chromium 是一个免费和开源的网页浏览器项目，主要由 Google 开发和维护。它是 Google Chrome 和许多其他浏览器所构建的开源代码库。

此扩展基于 [docker 镜像](https://github.com/jlesage/docker-chromium) 由 [Jocelyn Le Sage](https://github.com/jlesage) 提供。

非常感谢他创建了和维护了这些优秀的容器。
他是真正的英雄，需要得到 [支持](https://github.com/sponsors/jlesage)。

## 与原始容器的区别

为了使其与 Home Assistant 持久性兼容，Chromium 配置文件被重新映射到扩展的 `/data` 卷，并下载到 `/share/chromium` 文件夹。此重映射发生在容器初始化期间，因此 Chromium 本身作为一个无特权的用户运行，并启用了其沙盒功能。

## 如何使用

只需安装，启动容器，然后点击“打开 Web UI”。您可以使用“在侧边栏显示”来方便访问。您在 Chromium 中所做的所有操作都将持久化，即使您停止扩展或重启 Home Assistant 主机。

## 文件浏览器和终端

基础镜像包含一个集成的网页文件管理器和网页终端。这两个功能默认都是禁用的，可以从扩展的配置标签（`WEB_FILE_MANAGER` 和 `WEB_TERMINAL`）中启用。

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
