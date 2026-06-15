# 家庭助手插件：Homebox

Homebox 是为家庭用户构建的库存和组织系统！它以简洁易用为核心，是满足您家庭库存、组织和管理的完美解决方案。在开发这个项目的过程中，我尝试遵循以下原则：

- _简单_ - Homebox 设计得简单易用，无需复杂的设置或配置。您可以使用单个 Docker 容器，或者编译适用于您平台的二进制文件自行部署。
- _飞速_ - Homebox 使用 Go 语言编写，使其非常快速且资源占用最小。通常，整个容器的空闲内存使用量不到 50MB。
- _便携_ - Homebox 设计得便于携带，可在任何地方运行。我们使用 SQLite 和嵌入式 Web UI，使其易于部署、使用和备份。

_感谢所有为我仓库点赞的人！要点赞，请点击下面的图片，然后它就会显示在右上角。谢谢！_

[![Stargazers repo roster for @jdeath/homeassistant-addons](https://reporoster.com/stars/jdeath/homeassistant-addons)](https://github.com/jdeath/homeassistant-addons/stargazers)

## 关于

此插件使用 [docker 镜像](https://github.com/sysadminsmedia/homebox)。

## 安装

此插件的安装非常简单，与安装其他 Hass.io 插件没有区别。

1. 将我的 Hass.io 插件仓库 [repository] 添加到您的 Hass.io 实例。
1. 安装此插件。
1. 点击 `保存` 按钮以存储您的配置。
1. 启动插件。
1. 检查插件的日志，以查看是否一切顺利。
1. 打开 WebUI 应该可以通过 ingress 或 <您的 IP>:端口号 访问。
1. 注册用户
1. 前往插件配置并禁用用户注册，如果您希望这样做的话

## 配置

```
port : 7745 # 您想要运行的端口号。
```

Web UI 可在 `<您的 IP>:端口号` 访问。

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
