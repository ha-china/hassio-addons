# Home Assistant 附加组件：Chromium  

在 Home Assistant 内部运行 Chromium 浏览器，以便在家中访问本地或外部网站。  

![支持 aarch64 架构][aarch64-shield]  
![支持 amd64 架构][amd64-shield]  

## 关于  

Chromium 是一个免费且开源的网页浏览器项目，主要由 Google 开发和维护。它是 Google Chrome 浏览器及其他许多浏览器所基于的开源代码库。  

此附加组件基于 [Jocelyn Le Sage](https://github.com/jlesage) 提供的 [docker 镜像] (https://github.com/jlesage/docker-chromium)。  

衷心感谢他创建和维护的优秀容器。  
他是真正值得 [支持] (https://github.com/sponsors/jlesage) 的英雄人物。  

## 与原始容器的区别  

为了使它与 Home Assistant 持久化功能兼容，Chromium 配置文件被重映射到附加组件的 `/data` 卷，而下载文件则保存在 `/share/chromium` 文件夹中。此重映射发生在容器初始化时，因此 Chromium 本身以非特权用户运行，并启用了沙箱机制。  

## 如何使用  

只需安装、启动容器，然后点击“打开网页界面”。您可以使用“显示在侧边栏”以便快速访问。您对 Chromium 所做的所有操作都会被持久化保存，即使您停止附加组件或重启 Home Assistant 主机也是如此。  

## 文件浏览器和终端  

底层镜像包含集成的网络文件管理器和网络终端。这些功能默认处于禁用状态，可以从附加组件的“配置”标签页中启用（`WEB_FILE_MANAGER` 和 `WEB_TERMINAL`）。  

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
