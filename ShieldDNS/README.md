# ShieldDNS

![ShieldDNS logo](https://raw.githubusercontent.com/FaserF/hassio-addons/master/ShieldDNS/logo.png) 

[![打开你的 Home Assistant 实例并显示附加组件仪表板](https://my.home-assistant.io/badges/supervisor_addon.svg)](https://my.home-assistant.io/redirect/supervisor_addon/?addon=c1e285b7_ShieldDNS)
[![Home Assistant 应用](https://img.shields.io/badge/home%20assistant-addon-blue.svg)](https://www.home-assistant.io/addons/)
[![Docker 镜像](https://img.shields.io/badge/docker-2.3.1-blue.svg?logo=docker&style=flat-square)](https://github.com/FaserF/hassio-addons/pkgs/container/hassio-addons-shielddns)
![项目维护者](https://img.shields.io/badge/maintainer-FaserF-blue?style=flat-square)

> 高性能 DoT 代理，用于 AdGuard Home

---

## 📖 关于

## ❤️ 支持本项目

> 我在**兼职工作之余**维护所有这些附加组件。测试设备需要花费资金，而每一次的捐赠都帮助我保持独立，并能投入更多时间到开源工作中。
>
> 捐赠是完全自愿的——但是，我收到的支持越多，就越少依赖于其他收入，我能投入到这些项目中的时间就越多。

<div align="center">

</div>

## 🐛 报告错误

如果你在这个应用程序中遇到任何问题，请通过以下链接报告。问题表单将预先填写应用程序信息，以帮助我们更快地解决问题。

**[报告错误](https://github.com/FaserF/hassio-addons/issues/new?template=bug_report.yml&version_integration=2.0.0&log_information=请+在此处+粘贴+应用程序+日志输出%3A%0A%0A)**

> [!NOTE]
> 请使用上面的链接来报告问题。这确保了所有必要的信息（应用程序名称、版本等）自动包含在你的错误报告中。

## 💡 特性请求

如果你有一个新特性或改进的想法，请使用以下链接提交特性请求。表单将预先填写应用程序信息。

**[请求特性](https://github.com/FaserF/hassio-addons/issues/new?template=feature_request.yml&App_name=ShieldDNS)**

> [!NOTE]
> 请使用上面的链接来请求特性。这确保了应用程序名称自动包含在你的特性请求中。

本项目是开源的，并使用 MIT 许可证。
由 **FaserF** 维护。

---

## ⚙️ 配置

通过 Home Assistant 应用程序的**配置**标签配置此附加组件。

### 选项

```yaml
certfile: fullchain.pem
cloudflare_tunnel_token: ''
doh_port: 3443
dot_port: 8853
enable_info_page: false
fallback_dns: false
fallback_dns_server: 1.1.1.1
keyfile: privkey.pem
log_level: info
upstream_dns: 192.168.1.2
```

---

## 👨‍💻 信用与许可

本项目是开源的，并使用 MIT 许可证。
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
