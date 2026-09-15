# Home Assistant 插件：Chromium

_将 Chromium 作为家庭内部浏览器运行，以便从家中访问本地或外部网站。_

![Supports aarch64 Architecture][aarch64-shield]
![Supports amd64 Architecture][amd64-shield]

## 关于

Chromium 是一个免费开源的浏览器项目，主要由 Google 开发和维护。它是 Google Chrome 和许多其他浏览器所基于的开源代码库。

此插件基于来自 [Jocelyn Le Sage](https://github.com/jlesage) 的 [docker 镜像](https://github.com/jlesage/docker-chromium)。

非常感谢他为创建了和 maintained 的出色容器所提供的帮助。
他是真正的英雄，值得 [支持](https://github.com/sponsors/jlesage)。

## 与原始容器的区别

为了更好地与 Home Assistant 持久化数据存储兼容，Chromium 的配置文件已映射到插件的 `/data` 卷，下载内容位于 `/share/chromium` 文件夹中。此映射在容器初始化时发生，因此 Chromium 本身以未经特权用户运行，并启用了沙箱。

## 使用方法

只需安装，启动容器并单击"打开网页界面"。您可以使用"显示在侧边栏"方便访问。您在 Chromium 中进行的所有操作都会持久化存储，即使停止插件或重启 Home Assistant 主机也是如此。

## 文件浏览器和终端

基础镜像包含集成的 Web 文件管理器和 Web 终端。默认情况下两者均被禁用，可以从插件的配置选项卡中启用它们（`WEB_FILE_MANAGER` 和`WEB_TERMINAL`）。

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
