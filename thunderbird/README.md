# Home Assistant 插件：Thunderbird

_作为邮件客户端在 Home Assistant 内部运行 Thunderbird，以此从你的家中访问邮件匣。_

![支持 aarch64 架构][aarch64-shield]
![支持 amd64 架构][amd64-shield]

## 简介

Thunderbird 是由 MZLA Technologies Corporation（Mozilla  Foundation 的子公司）开发的免费开源邮件、日历和即时通讯客户端。

此插件基于 [docker 镜像](https://github.com/jlesage/docker-thunderbird)，由 [Jocelyn Le Sage](https://github.com/jlesage) 提供。

非常感谢他为创建和维护这些优秀的容器所做的一切。
他是真正的英雄，需要 [获得支持](https://github.com/sponsors/jlesage)。

## 与原始容器的区别

为了使它与 Home Assistant 持久化兼容，Thunderbird 配置文件（邮件账户、本地文件夹、设置）被重新映射到插件的 `/data` 卷，并提供了一个指向 `/share/thunderbird` 的 `downloads` 文件夹用于保存附件。此重新映射发生在容器初始化期间，因此 Thunderbird 本身以无特权用户身份运行。

## 如何使用

只需安装、启动容器并在浏览器中点击“打开 Web UI"。您可以使用“侧边栏显示”进行快速访问。在插件或重启 Home Assistant 主机后，您对 Thunderbird 所进行的一切操作都会得到保存。

如需将附件保存到其他插件和主机都可以访问的位置，请使用 `downloads` 文件夹（它映射到 `/share/thunderbird`）。

## 文件浏览器和终端

基础镜像包含一个集成的 Web 文件管理器和一个 Web 终端。这两项默认均已禁用，可以在插件的“配置”标签页中启用它们（`WEB_FILE_MANAGER` 和 `WEB_TERMINAL`）。

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
