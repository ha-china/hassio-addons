# Home Assistant 插件：SilverBullet

SilverBullet 是一款针对拥有黑客思维的用户优化的笔记应用程序。我们都会做笔记。市面上有数百万款笔记应用程序，就这一点而言。难道 không 会让人想要有一款应用程序，其中笔记不仅仅是纯文本文件吗？其中你的笔记基本上可以成为一个可以查询的数据库；你可以在此之上构建自定义知识应用程序吗？或者一言以蔽之，一款可自定义的笔记本？

_感谢大家为我仓库点赞！要点赞，点击下面的图片，它将显示在右上角。感谢！_

[![Stargazers repo roster for @jdeath/homeassistant-addons](https://reporoster.com/stars/jdeath/homeassistant-addons)](https://github.com/jdeath/homeassistant-addons/stargazers)

## 简介

此插件基于 [Docker 镜像](https://github.com/silverbulletmd/silverbullet)。

## 安装

此插件的安装非常简单，与其他 Hass.io 插件的安装方式相比并无二致。

1. 将我的 Hass.io 插件仓库 [repository] 添加到你的 Hass.io 实例中。
1. 安装此插件。
1. 点击“保存”按钮以保存你的配置。
1. 如果你想设置密码，请将 SB_HOME 字段设置为 UserName:Password，例如 Mike:Pass123。
1. 启动插件。
1. 查看插件日志以查看一切是否正常。
1. 通过 <your-ip>:port 打开 WebUI。
1. 数据将存储在 /addon_config/2effc9b9_silverbullet 目录中。

## 配置

```python
port : 8081 # 你要运行的端口
```

WebUI 可访问 `<your-ip>:port`。

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
