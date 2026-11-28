# Home Assistant 插件：Chromium

_在 Home Assistant 中运行 Chromium 浏览器，以便从您的家庭访问本地或外部网站。_

![支持 aarch64 架构][aarch64-shield]
![支持 amd64 架构][amd64-shield]

## 关于

Chromium 是一个免费开源的浏览器项目，主要由 Google 开发和维护。它是 Google Chrome 和许多其他浏览器构建的基础开源代码库。

此插件基于 [Jocelyn Le Sage](https://github.com/jlesage) 提供的 [docker 镜像](https://github.com/jlesage/docker-chromium)。

对他创建的容器给予极大的感谢。他是这位需要被 [支持](https://github.com/sponsors/jlesage) 的真正英雄。

## 与原始容器的区别

为了使其与 Home Assistant 持久化兼容，Chromium 的配置文件被重新映射到插件的 `/data` 卷，下载文件则存储至 `/share/chromium` 文件夹。此重新映射发生在容器初始化期间，因此 Chromium 自身以未授权用户运行，并启用了沙箱机制。

## 使用方法

只需安装、启动容器，然后点击“打开网页界面”。您可以使用“在侧边栏显示”以便快速访问。您在 Chromium 中的所有操作都将被持久化存储，即使您停止插件或重启 Home Assistant 主机也是如此。

## 文件浏览器和终端

底层镜像包含集成的网页文件管理器和网页终端。两者默认均被禁用，可以从插件的配置选项卡（`WEB_FILE_MANAGER` 和 `WEB_TERMINAL`）中启用。

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
