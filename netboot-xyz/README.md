# Netboot.xyz

![Netboot.xyz Logo](https://raw.githubusercontent.com/FaserF/hassio-addons/master/netboot-xyz/logo.png) width="100"

[![打开您的 Home Assistant 实例并显示附加组件仪表板。](https://my.home-assistant.io/badges/supervisor_addon.svg)](https://my.home-assistant.io/redirect/supervisor_addon/?addon=c1e285b7_netboot-xyz)
[![Home Assistant 应用](https://img.shields.io/badge/home%20assistant-addon-blue.svg)](https://www.home-assistant.io/addons/)
[![Docker 镜像](https://img.shields.io/badge/docker-2.3.1-blue.svg?logo=docker&style=flat-square)](https://github.com/FaserF/hassio-addons/pkgs/container/hassio-addons-netboot-xyz)
![项目维护](https://img.shields.io/badge/maintainer-FaserF-blue?style=flat-square)

> PXE-Server 用于在您的本地网络中部署操作系统

---

## 📖 关于

## ❤️ 支持此项目

> 我在业余时间维护这些附加组件，同时还有一份全职工作。测试设备需要花钱，每一笔捐赠都能帮助我保持独立并投入更多时间到开源工作中。
>
> 捐赠完全是自愿的——但我得到的支持越多，我就越不依赖其他收入，并有更多时间投入到这些项目中。

<div align="center">
</div>

## 示例配置

一个示例 `menu.ipxe` 配置文件可以在 [示例目录中找到](examples/menu.ipxe)。
该文件演示了如何为 Windows 11、Linux Mint 和 SystemRescue 配置自定义启动条目。

> PXE-Server 用于在您的本地网络中部署操作系统

## 🐛 报告错误

如果您在使用此应用时遇到任何问题，请使用下面的链接报告它们。问题表单将预先填写应用信息，以帮助我们更快地解决问题。

**[报告错误](https://github.com/FaserF/hassio-addons/issues/new?template=bug_report.yml&version_integration=2.0.0&log_information=请在此处粘贴应用日志输出：%0A%0A)**

> [!NOTE]
> 请使用上面的链接报告问题。这确保了所有必要信息（应用名称、版本等）都会自动包含在您的错误报告中。

## 💡 功能请求

如果您有关于新功能或改进的想法，请使用下面的链接提交功能请求。表单将预先填写应用信息。

**[请求功能](https://github.com/FaserF/hassio-addons/issues/new?template=feature_request.yml&App_name=netboot-xyz)**

> [!NOTE]
> 请使用上面的链接请求功能。这确保了应用名称会自动包含在您的功能请求中。

此项目是开源的，并在 MIT 许可证下提供。
由 **FaserF** 维护。

---

## ⚙️ 配置

通过 Home Assistant 应用页面中的 **配置** 选项卡配置附加组件。

### 选项

```yaml
dhcp_range: 192.168.1.200
log_level: info
path: /media/netboot/image
path_config: /media/netboot/config
```

---

## 👨‍💻 致谢 & 许可证

此项目是开源的，并在 MIT 许可证下提供。
由 **FaserF** 维护。
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
