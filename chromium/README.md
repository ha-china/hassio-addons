# Home Assistant 附加组件：Chromium

_在 Home Assistant 内部运行 Chromium 浏览器，以便从家庭访问本地或外部网站。_

![Supports aarch64 Architecture][aarch64-shield]
![Supports amd64 Architecture][amd64-shield]

## 关于

Chromium 是一个免费开源的网页浏览器项目，主要由 Google 开发和维护。它是 Google Chrome 浏览器及许多其他浏览器所基于的开源代码库。

此附加组件基于 [docker 镜像](https://github.com/jlesage/docker-chromium)，由 [Jocelyn Le Sage](https://github.com/jlesage) 提供。

非常感谢他为创建了这些优秀的容器所做的工作。  
他是真正的英雄，需要被 [支持](https://github.com/sponsors/jlesage)。

## 与原始容器的区别

为了使它与 Home Assistant 持久性兼容，Chromium 配置文件被重新映射到附加组件的 `/data` 卷，下载文件则映射到 `/share/chromium` 文件夹。该重映射发生在容器初始化过程中，因此 Chromium 本身以非特权用户运行，且启用沙箱保护。

## 使用方法

只需安装，启动容器，然后点击“打开 Web UI"。您可以使用“显示在侧边栏”以便快速访问。您在 Chromium 中进行的所有操作都会被持久化存储，即使您停止附加组件或重启 Home Assistant 主机也是如此。

## 文件浏览器和终端

基础镜像包含集成的网页文件管理器和网页终端。两者默认均关闭，可通过附加组件的配置选项卡（`WEB_FILE_MANAGER` 和 `WEB_TERMINAL`）启用。

## GPU 加速

该附加组件被授予访问主机 GPU（`/dev/dri`）的权限，因此显示可以借助硬件加速渲染，而不是软件渲染。这需要主机端开源内核驱动程序（Intel `i915`、AMD `amdgpu` 或 `nouveau`）；专有 NVIDIA 驱动程序不受支持。附加组件在启动时会报告是否检测到可用的 GPU。有关详细信息，请参阅 [上游文档](https://github.com/jlesage/docker-chromium#gpu-acceleration-support)。

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
