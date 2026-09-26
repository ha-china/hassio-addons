# Home Assistant Add-on: Thunderbird

_在 Home Assistant 内运行 Thunderbird 作为电子邮件客户端，以便从家中访问您的邮箱。_

![Supports aarch64 Architecture][aarch64-shield]
![Supports amd64 Architecture][amd64-shield]

## 关于

Thunderbird 是由 Mozilla Foundation 的附属公司 MZLA 技术公司开发的免费开源电子邮件、日历和聊天客户端。

此附加组件基于来自 [Jocelyn Le Sage](https://github.com/jlesage) 的 [docker 镜像](https://github.com/jlesage/docker-thunderbird)。

非常感谢他为创建和维持这些优秀的容器所做的工作。
他是我们需要 [支持](https://github.com/sponsors/jlesage) 的真正英雄。

## 与原始容器的区别

为了确保与 Home Assistant 持久化兼容，Thunderbird 配置文件（邮件账户、本地文件夹、设置）已映射到附加组件的 `/data` 卷，并提供了一个指向 `/share/thunderbird` 的 `downloads` 文件夹用于保存附件。此映射在容器初始化时发生，因此 Thunderbird 本身以无权限用户运行。

## 如何使用

只需安装、启动容器并点击“打开 Web 界面”。您可以使用“在侧边栏显示”以便快速访问。即使停止附加组件或重启 Home Assistant 宿主，您在 Thunderbird 中的所有操作都会被持久化保存。

为了将附件保存到其他附加组件和宿主机可以访问的位置，请使用 `downloads` 文件夹（它映射到 `/share/thunderbird`）。

## 文件浏览器和终端

底层镜像包含集成的网络文件管理器和网络终端。两者默认均被禁用，可以从附加组件的配置选项卡（`WEB_FILE_MANAGER` 和 `WEB_TERMINAL`）中启用。

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
