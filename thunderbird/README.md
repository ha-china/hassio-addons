# Home Assistant 附加组件：Thunderbird

_在 Home Assistant 内部运行 Thunderbird 作为电子邮件客户端，从而从家中访问您的邮件账户。_

![支持 aarch64 架构][aarch64-shield]
![支持 amd64 架构][amd64-shield]

## 关于

Thunderbird 是由 Mozilla 基金会子公司 MZLA Technologies Corporation 开发的一个免费、开源的电子邮件、日历和聊天客户端。

此附加组件基于来自 [Jocelyn Le Sage](https://github.com/jlesage) 的 [Docker 镜像](https://github.com/jlesage/docker-thunderbird)。

对于创建和维护的优秀容器，我们向他致以最崇高的敬意。
他是我们需要 [支持](https://github.com/sponsors/jlesage) 的真正英雄。

## 与原始容器的区别

为了使其与 Home Assistant 持久化兼容，Thunderbird 配置文件（邮件账户、本地文件夹、设置）已重新映射到附加组件的 `/data` 卷，并提供一个指向 `/share/thunderbird` 的 `downloads` 文件夹用于保存附件。此重映射发生在容器初始化期间，因此 Thunderbird 本身运行为用户权限较低的用户。

## 如何使用

只需安装，启动容器，然后点击“打开 Web UI"。您可以使用“显示在侧边栏”以便快速访问。您做的任何事情都会持久化保存在 Thunderbird 中，即使您停止此附加组件或重新启动 Home Assistant 主机也是如此。

要将附件保存到其他附加组件和主机可以访问的位置，请使用 `downloads` 文件夹（它映射到 `/share/thunderbird`）。

## 文件浏览器和终端

底层的镜像包含集成的 Web 文件管理器和 Web 终端。两者默认均被禁用，可以从附加组件的配置选项卡中启用（`WEB_FILE_MANAGER` 和 `WEB_TERMINAL`）。

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
