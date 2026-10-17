# Home Assistant 添加组件：5etools

一套为 D&D 5e 玩家和 DM（游戏主持人）提供的基于浏览器的工具。下载的图像来自 5etools GitHub。不在此库中托管或发布任何图像或内容。不支持，因为家庭助手添加组件的创建者不使用此服务。自托管的图像可能会落后于 5etools 网站。图像大小为 4 GB，因此安装时间较长，请耐心等待。

_感谢所有为我仓库点赞的人！要点赞，请点击下图，它将被移至右上角。谢谢！_

[![Stargazers repo roster for @jdeath/homeassistant-addons](https://reporoster.com/stars/jdeath/homeassistant-addons)](https://github.com/jdeath/homeassistant-addons/stargazers)

## 关于

此添加组件使用 [docker 镜像](https://github.com/5etools-mirror-2/5etools-mirror-2.github.io)。

## 安装

此添加组件的安装非常简单，与安装任何其他 Hass.io 添加组件没有区别。

1. 将 [我的 Hass.io 添加组件存储库][repository] 添加到您的 Hass.io 实例中。
2. 安装此添加组件。4 GB 镜像需要一些时间下载。
3. 点击 `Save` 按钮以保存您的配置。
4. 启动添加组件。
5. 检查添加组件的日志，查看一切是否正常。
6. 通过 ingress 或 `<your-ip>:port` 打开 WebUI 应该可以工作。

## 配置

```
port : 8080 #您想运行的端口。
```

WebUI 位于 `<your-ip>:port`。

[repository]: https://github.com/jdeath/homeassistant-addons

---

**⚠️ This resource is intended to help Chinese Home Assistant users more easily install excellent add-ons. If you are not a Chinese user, please read repository readme first**

**⚠️ 这个资源用来帮助中国Home Assistant用户更容易地安装优秀的插件。如果您不是中国用户，请先阅读仓库的README，以下为收集者（汉化，加速）信息，非原作者信息**

---

## 📱 关注我

扫描下面二维码，关注我。有需要可以随时给我留言：

<img src="https://raw.gitcode.com/ha-china/ha-apps/raw/main/WeChat_QRCode.png" width="50%" /> 📲

## ☕ 赞助支持

如果您觉得我花费大量时间维护这个库对您有帮助，欢迎请我喝杯奶茶，您的支持将是我持续改进的动力！

<div style="display: flex; justify-content: space-between;">
  <img src="https://raw.gitcode.com/ha-china/ha-apps/raw/main/1_readme/Ali_Pay.jpg" height="350px" />
  <img src="https://raw.gitcode.com/ha-china/ha-apps/raw/main/1_readme/WeChat_Pay.jpg" height="350px" />
</div> 💖

感谢您的支持与鼓励！
