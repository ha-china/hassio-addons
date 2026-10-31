# 家庭自动化附加组件：Chromium

_在家庭自动化中运行 Chromium 浏览器，以便从家中访问本地或外部网站。_

![支持 aarch64 架构][aarch64-shield]
![支持 amd64 架构][amd64-shield]

## 关于

Chromium 是一个自由和开源的网页浏览器项目，主要由 Google 开发和维护。它是 Google Chrome 及其他许多浏览器所使用的开源代码库的基础。

此附加组件基于 [Jocelyn Le Sage](https://github.com/jlesage) 的 [docker 镜像](https://github.com/jlesage/docker-chromium)。

衷心感谢他为创建和维护这些优秀的容器所做的工作。
他就是那位值得我们 [支持](https://github.com/sponsors/jlesage) 的真正英雄。

## 与原始容器有何不同

为了使它能兼容家庭自动化的持久化存储，Chromium 配置文件被重新映射到附加组件的 `/data` 挂载卷，下载文件则存储于 `/share/chromium` 文件夹中。此重新映射在容器初始化时完成，因此 Chromium 本身运行于非特权用户，并启用了沙盒机制。

## 如何使用

只需安装、启动容器并点击“打开网页界面”。您可以使用“显示在侧边栏”以便轻松访问。即使停止附加组件或重启家庭自动化主机，您在 Chromium 中进行的所有操作都会被持久化保存。

## 文件浏览器和终端

底层镜像包括内置的 Web 文件管理器和 Web 终端。默认情况下这两个功能均处于禁用状态，您可以在附加组件的配置页签（`WEB_FILE_MANAGER` 和 `WEB_TERMINAL`）中启用它们。

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
