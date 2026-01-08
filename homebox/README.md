# Home assistant add-on: Homebox

Homebox 是为家庭用户构建的库存和组织系统！Homebox 以简单易用为焦点，是您家庭库存、组织和管理的完美解决方案。在开发这个项目时，我试图遵循以下原则：

- _简单_ - Homebox 设计得简单易用。无需复杂的设置或配置。您可以使用单个 Docker 容器，或者通过为您的首选平台编译二进制文件来部署自己。
- _极快_ - Homebox 是用 Go 编写的，这使得它非常快速，并且部署所需的资源很少。通常，整个容器的空闲内存使用量不到 50MB。
- _便携_ - Homebox 设计得便携，可以在任何地方运行。我们使用 SQLite 和嵌入式 Web UI，使其易于部署、使用和备份。

_感谢大家给我的仓库加星！要加星，请点击下面的图片，然后它就会出现在右上角。谢谢！_

[![Stargazers repo roster for @jdeath/homeassistant-addons](https://reporoster.com/stars/jdeath/homeassistant-addons)](https://github.com/jdeath/homeassistant-addons/stargazers)

## 关于

这个 add-on 使用了 [docker 镜像](https://github.com/sysadminsmedia/homebox)。

## 安装

这个 add-on 的安装非常直接，与安装任何其他 Hass.io add-on 没有区别。

1. 将我的 Hass.io add-ons 仓库 [repository] 添加到您的 Hass.io 实例。
1. 安装这个 add-on。
1. 点击 `保存` 按钮来存储您的配置。
1. 启动 add-on。
1. 检查 add-on 的日志，看看是否一切正常。
1. WebUI 应该可以通过 ingress 或 <your-ip>:port 来工作。
1. 注册一个用户
1. 转到 add-on 配置并禁用用户注册（如果您需要）

## 配置

```
port : 7745 #您想要运行的端口。
```

Webui 可以在 `<your-ip>:port` 找到。

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
