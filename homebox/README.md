# Home Assistant 附加组件：Homebox

Homebox 是为家庭用户打造的库存和组织系统！专注于简单和易用，Homebox 是满足您的家庭库存、组织和管理的完美解决方案。在开发这个项目时，我尝试牢记以下原则：

- **简单** - Homebox 旨在简单易用。无需复杂的设置或配置。使用单个 Docker 容器，或者通过为您的首选平台编译二进制文件自行部署。
- **极快** - Homebox 使用 Go 语言编写，这使得它极快且部署所需的资源极少。通常情况下，整个容器的空闲内存使用量小于 50MB。
- **便携** - Homebox 旨在便携并在任何地方运行。我们使用 SQLite 和嵌入式 Web UI，使其易于部署、使用和备份。

_感谢所有给我的仓库点星的人！要给它点星，请点击下方的图片，它就会出现在右上角。谢谢！_

[![Stargazers repo roster for @jdeath/homeassistant-addons](https://reporoster.com/stars/jdeath/homeassistant-addons)](https://github.com/jdeath/homeassistant-addons/stargazers)

## 关于

此附加组件使用 [docker 镜像](https://github.com/sysadminsmedia/homebox)。

## 安装

此附加组件的安装非常简单，与其他任何 Hass.io 附加组件的安装相比没有区别。

1. 将 [我的 Hass.io 附加组件仓库][repository] 添加到您的 Hass.io 实例中。
1. 安装此附加组件。
1. 点击 `保存` 按钮以存储您的配置。
1. 启动附加组件。
1. 检查附加组件的日志以查看一切是否正常。
1. 打开 WebUI 应该可以通过 ingress 或 <your-ip>:port 访问。
1. 注册一个用户
1. 如果您希望的话，请转到附加组件配置并禁用用户注册
## 配置

```
port : 7745 # 您想要运行的端口。
```

WebUI 可以在 `<your-ip>:port` 处找到。

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
