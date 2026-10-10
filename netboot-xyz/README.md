# Netboot.xyz

<img src="https://raw.githubusercontent.com/FaserF/hassio-addons/master/netboot-xyz/logo.png" width="100" alt="Logo" />

[![在 Home Assistant 实例中打开应用程序仪表板。](https://my.home-assistant.io/badges/supervisor_addon.svg)](https://my.home-assistant.io/redirect/supervisor_addon/?addon=605cee21_netboot-xyz)
[![Home Assistant 应用程序](https://img.shields.io/badge/home%20assistant-app-blue.svg)](https://www.home-assistant.io/apps/)
[![Docker 镜像](https://img.shields.io/badge/docker-2.4.3-blue.svg?logo=docker&style=flat-square)](https://github.com/FaserF/hassio-addons/pkgs/container/hassio-addons-netboot-xyz)
![项目维护](https://img.shields.io/badge/maintainer-FaserF-blue?style=flat-square)

> PXE 服务器，用于在网络内部署操作系统

---

## 📖 概况

## 示例配置

示例 `menu.ipxe` 配置文件可在 [examples 目录](examples/menu.ipxe) 中找到。
该文件演示了如何为 Windows 11、Linux Mint 和 SystemRescue 配置自定义启动项。

> PXE 服务器，用于在网络内部署操作系统

---

## ⚙️ 配置

通过在 Home Assistant App 页面的 **Configuration** 选项卡中配置应用程序。

### 选项

```yaml
dhcp_range: 192.168.1.200
log_level: info
menu_version: latest
path: /media/netboot/image
path_config: /media/netboot/config
```

---

## 👨‍💻 致谢与许可

此项目是开源软件，采用 MIT 许可协议。
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
