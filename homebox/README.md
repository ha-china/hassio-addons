# 家庭助手插件：Homebox

Homebox 是专为家庭用户设计的库存和组织系统！它专注于简单性和易用性，是您家庭库存、组织和管理的完美解决方案。在开发这个项目的过程中，我努力坚持以下原则：

- _简单_ - Homebox 设计得简单易用。无需复杂的设置或配置。您可以选择使用单个 Docker 容器，或者为您的平台编译二进制文件自行部署。
- _极速_ - Homebox 使用 Go 语言编写，使其运行极快且资源占用极小。一般来说，整个容器的空闲内存使用量小于 50MB。
- _便携_ - Homebox 设计得易于移植和运行在任何地方。我们使用 SQLite 和内置的 Web UI，使其易于部署、使用和备份。

_感谢 everyone 为我的仓库 star！要 star 它，请点击下面的图片，然后它将出现在右上角。谢谢！_

![Stargazers repo roster for @jdeath/homeassistant-addons](https://reporoster.com/stars/jdeath/homeassistant-addons)

[![Stargazers repo roster for @jdeath/homeassistant-addons](https://reporoster.com/stars/jdeath/homeassistant-addons)](https://github.com/jdeath/homeassistant-addons/stargazers)

## 关于

此插件使用 [docker 镜像](https://github.com/sysadminsmedia/homebox)。

## 安装

此插件的安装非常简单，与安装其他 Hass.io 插件没有区别。

1. [将我的 Hass.io 插件仓库添加到您的 Hass.io 实例中][repository]。
1. 安装此插件。
1. 在配置中，如果将 Homebox 暴露给互联网，则将 HBOX_AUTH_API_KEY_PEPPER 设置为 `openssl rand -base64 48` 的输出。如果不是，则默认密钥即可。
1. 点击“保存”按钮以存储您的配置。
1. 启动插件。
1. 检查插件的日志，以查看一切是否顺利。
1. 通过 <your-ip>:port 打开 WebUI。
1. 注册一个用户
1. 如果您希望，请转到插件配置并禁用用户注册
## 配置

```
port : 7745 #您希望运行的端口号。
```

WebUI 可在 <your-ip>:port 找到。

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
