# Netboot.xyz

![Logo](logo.png)

[![Open your Home Assistant instance and show the add-on dashboard.](https://my.home-assistant.io/badges/supervisor_addon.svg)](https://my.home-assistant.io/redirect/supervisor_addon/?addon=c1e285b7_netboot-xyz)
[![Home Assistant Add-on](https://img.shields.io/badge/home%20assistant-addon-blue.svg)](https://www.home-assistant.io/addons/)
[![Docker Image](https://img.shields.io/badge/docker-2.1.3-blue.svg?logo=docker&style=flat-square)](https://github.com/FaserF/hassio-addons/pkgs/container/hassio-addons-netboot-xyz)
![Project Maintenance](https://img.shields.io/badge/maintainer-FaserF-blue?style=flat-square)

> PXE服务器，用于在本地网络中部署操作系统

---

## 📖 关于

## 示例配置

一个示例 `menu.ipxe` 配置文件可以在 [这里](examples/menu.ipxe) 找到。
这个文件展示了如何配置 Windows 11、Linux Mint 和 SystemRescue 的自定义启动条目。

> PXE服务器，用于在本地网络中部署操作系统

如果您在使用此插件时遇到任何问题，请使用下面的链接报告它们。问题表单将预填入插件信息，以帮助我们更快地解决问题。

如果您有新功能或改进的想法，请使用下面的链接提交功能请求。表单将预填入插件信息。

## 🐛 报告错误

如果您在使用此插件时遇到任何问题，请使用下面的链接报告它们。问题表单将预填入插件信息，以帮助我们更快地解决问题。

**[报告错误](https://github.com/FaserF/hassio-addons/issues/new?template=bug_report.yml&version_integration=2.0.0&log_information=Please+paste+the+addon+log+output+here%3A%0A%0A)**

> [!NOTE]
> 请使用上面的链接报告问题。这确保了所有必要信息（插件名称、版本等）会自动包含在您的错误报告中。

## 💡 功能请求

如果您有新功能或改进的想法，请使用下面的链接提交功能请求。表单将预填入插件信息。

**[请求功能](https://github.com/FaserF/hassio-addons/issues/new?template=feature_request.yml&addon_name=netboot-xyz)**

> [!NOTE]
> 请使用上面的链接请求功能。这确保了插件名称会自动包含在您的功能请求中。

这个项目是开源的，并在MIT许可证下提供。
由 **FaserF** 维护。

---

## ⚙️ 配置

通过 Home Assistant 插件页面中的 **配置** 选项卡配置插件。

### 选项

```yaml
dhcp_range: 192.168.1.200
path: /media/netboot/image
path_config: /media/netboot/config
```

---

## 👨‍💻 致谢 & 许可证

这个项目是开源的，并在MIT许可证下提供。
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
