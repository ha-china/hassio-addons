# Home assistant 插件：5etools

一套供 D&D 5e 玩家和 DM（地下城主）使用的基于浏览器的工具套件。帖子中发布的图片来自 5etools 的 GitHub 仓库。jdeath 的仓库中没有托管或发布任何图片或内容。Home Assistant 插件的创建者不使用该项目，因此不提供支持。自托管镜像可能落后于 5etools 网站。镜像大小约为 4GB，安装时间会很长，请耐心等待。

_感谢所有给我仓库星标的朋友们！要星标它，请点击下方的图片，它就会被显示在右上角。谢谢！_

[![Stargazers repo roster for @jdeath/homeassistant-addons](https://reporoster.com/stars/jdeath/homeassistant-addons)](https://github.com/jdeath/homeassistant-addons/stargazers)

## 关于

此插件使用 [Docker 镜像](https://github.com/5etools-mirror-2/5etools-mirror-2.github.io)。

## 安装

安装此插件非常简单，与其他 Hass.io 插件的安装方式相比并无不同。

1. 将 [我的 Hass.io 插件仓库][repository] 添加到你的 Hass.io 实例中。
2. 安装此插件。4GB 的镜像下载需要一些时间。
3. 点击 `保存` 按钮以保存您的配置。
4. 启动插件。
5. 检查插件日志，确认一切正常。
6. 打开 Web 界面，可以通过 ingress 或 `<您的-ip>:端口` 访问。

## 配置

```
port : 8080 # 您希望运行的端口。
```

Web 界面地址为 `<您的-ip>:端口`。

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
