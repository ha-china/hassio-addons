# Home Assistant 插件：SilverBullet

SilverBullet 是一款专为黑客思维人士优化的笔记应用程序。我们都在记笔记。市面上有数百万款笔记软件。真的。难道没有一款让您的笔记不仅仅是普通文本文件好吗？让您的笔记本质上成为您可以查询的数据库？让您在上面构建自定义知识应用程序的数据库？换句话说，一款可破解的笔记本，好吗？

_感谢大家对仓库的 star！如果想 star 它，请点击下面的图片，然后它会出现在右上角。谢谢！_

[![Stargazers repo roster for @jdeath/homeassistant-addons](https://reporoster.com/stars/jdeath/homeassistant-addons)](https://github.com/jdeath/homeassistant-addons/stargazers)

## 简介

该插件基于以下 [Docker 镜像](https://github.com/silverbulletmd/silverbullet)。

## 安装

此插件的安装非常简单，与安装任何其他 Hass.io 插件的差异不大。

1. [将我提供的 Hass.io 插件仓库][repository] 添加到您的 Hass.io 实例中。
1. 安装此插件。
1. 点击“保存”按钮以存储配置。
1. 如果您想要密码保护，请将 SB_HOME 字段设置为 UserName:Password，例如 Mike:Pass123。
1. 启动插件。
1. 检查插件的日志以确认一切是否正常。
1. 打开 WebUI 将通过 Ingress 或 <your-ip>:port 使用。
1. 数据将存储于 /addon_config/2effc9b9_silverbullet 目录中。

## 配置

```
port : 8081 #您希望运行的端口。
```

WebUI 可位于 `<your-ip>:port`。

> [repository]: https://github.com/jdeath/homeassistant-addons

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
