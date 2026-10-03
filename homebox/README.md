# Home assistant 插件：Homebox

Homebox 是为家庭用户设计的库存和整理系统。注重简单和易用性，Homebox 是解决您的家庭库存、整理和管理需求的完美方案。在开发此项目时，我尝试遵循以下原则：

- _简单_ - Homebox 旨在简单易用。无需复杂的设置或配置。您可以使用单个 docker 容器，或者根据您的首选平台编译二进制文件进行自行部署。
- _极速_ - Homebox 使用 Go 语言编写，使其运行速度极快，且部署所需的资源极少。通常情况下，整个容器的空闲内存使用量小于 50MB。
- _便携_ - Homebox 设计为可移植，可在任何地方运行。我们使用 SQLite 和嵌入式 Web UI，使其易于部署、使用和数据备份。

_Due 到 everyone 给我的仓库点了 Star！要开始它，请点击下面的图片，然后它将显示在右上角。谢谢！_

[![Stargazers repo roster for @jdeath/homeassistant-addons](https://reporoster.com/stars/jdeath/homeassistant-addons)](https://github.com/jdeath/homeassistant-addons/stargazers)

## 关于

此插件使用 [docker 镜像](https://github.com/sysadminsmedia/homebox)。

## 安装

此插件的安装非常简单，与其他任何 Hass.io 插件的安装方式没有不同。

1. 将 [我的 Hass.io 插件仓库][repository] 添加到您的 Hass.io 实例中。
1. 安装此插件。
1. 在配置中，如果您要公开到互联网，请将 `HBOX_AUTH_API_KEY_PEPPER` 设置为 `openssl rand -base64 48` 的输出。否则，默认密钥即可。
1. 点击 `Save` 按钮以保存您的配置。
1. 启动插件。
1. 检查插件的日志，确认一切是否正常。
1. 打开 Web UI，可以通过 `<your-ip>:port` 或 ingress 访问。
1. 注册一个用户
1. 如需要，前往插件配置并禁用用户注册。
## 配置

```
port : 7745 # 您想要运行的端口。
```

### SSO/OIDC 设置

详见 [HomeBox 文档](https://homebox.software/en/quick-start/configure/oidc/)。

Web UI 可在 `<your-ip>:port` 处找到。

[repository]: https://github.com/jdeath/homeassistant-addons

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
