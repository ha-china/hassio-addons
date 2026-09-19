# Home Assistant 附加组件：Chromium

_运行 Chromium 网页浏览器，在 Home Assistant 内部访问本地或外部网站。_

![支持 aarch64 架构][aarch64-shield]
![支持 amd64 架构][amd64-shield]

## 关于

Chromium 是一个免费且开源的网页浏览器项目，主要由 Google 开发和维护。它是 Google Chrome 和其他许多浏览器所基于的开源代码库。

该附加组件基于 [Jocelyn Le Sage](https://github.com/jlesage) 的 [docker 镜像](https://github.com/jlesage/docker-chromium)。

衷心感谢他创建和维护这些优秀的容器。
他是那些需要 [获得支持](https://github.com/sponsors/jlesage) 的真正英雄。

## 与原容器的区别

为了与 Home Assistant 的持久化功能兼容，Chromium 配置文件已映射到附加组件的 `/data` 卷，下载文件将保存到 `/share/chromium` 文件夹。此映射发生在容器初始化期间，因此 Chromium 本身以受限用户运行，沙箱功能已启用。

## 如何使用

只需安装、启动容器并点击“打开网页界面”。您可以使用“在侧边栏显示”以便于访问。您进行的所有操作都会在 Chromium 中持久化存储，即使您停止附加组件或重新启动 Home Assistant 主机也是如此。

## 文件浏览器和终端

底层镜像包含内置的网页文件管理器和一个网页终端。两者默认均处于禁用状态，您可以在附加组件的“配置”（`WEB_FILE_MANAGER` 和 `WEB_TERMINAL`）中启用。

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
