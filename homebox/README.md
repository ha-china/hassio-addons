# Home Assistant 扩展：Homebox

Homebox 是为家庭用户构建的库存和组织系统！它专注于简洁性和易用性，是您家庭库存、组织和管理的完美解决方案。在开发此项目时，我试图牢记以下原则：

- _简单_ - Homebox 被设计得简单易用。无需复杂的设置或配置。可以使用单个 Docker 容器，或者根据您选择的平台编译二进制文件自行部署。
- _飞速_ - Homebox 使用 Go 语言编写，这使得它非常快，并且部署时资源消耗最小。一般来说，整个容器的空闲内存使用量不到 50MB。
- _便携_ - Homebox 被设计成便携式，可以在任何地方运行。我们使用 SQLite 和嵌入式 Web UI，使其易于部署、使用和备份。

_感谢 everyone 为我的仓库点赞！要点赞，请点击下面的图片，然后它就会显示在右上角。谢谢！_

[![Stargazers repo roster for @jdeath/homeassistant-addons](https://reporoster.com/stars/jdeath/homeassistant-addons)](https://github.com/jdeath/homeassistant-addons/stargazers)

## 关于

此扩展使用 [docker 镜像](https://github.com/sysadminsmedia/homebox)。

## 安装

此扩展的安装非常简单，与安装任何其他 Hass.io 扩展没有区别。

1. [将我的 Hass.io 扩展仓库][repository] 添加到您的 Hass.io 实例。
1. 安装此扩展。
2. 点击 `保存` 按钮以存储您的配置。
3. 启动扩展。
4. 检查扩展的日志，以查看一切是否顺利。
5. 打开 WebUI 应该可以通过 ingress 或 <your-ip>:port 访问。
6. 注册一个用户。
7. 前往扩展配置，如果您希望，可以禁用用户注册。

## 配置

```
port : 7745 #您想要运行的端口。
```

Webui 可以在 `<your-ip>:port` 上找到。

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
