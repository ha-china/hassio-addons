# Home assistant 插件：SilverBullet

SilverBullet 是一款为具有黑客思维模式的人优化的笔记应用程序。我们都需要做笔记。市面上简直有数百万种笔记应用。难道拥有一个不仅仅是普通文本文件的应用不是再好不过的吗？难道拥有一个本质上成为数据库、可以查询，并在此基础上构建自定义知识应用的笔记应用程序不是再好不过的吗？如果你愿意，就是一款可定制的笔记本吧？

_感谢大家星标我的仓库！要星标它，点击下面的图片，它将显示在右上方。谢谢！_

[![Star 统计仓库 @jdeath/homeassistant-addons](https://reporoster.com/stars/jdeath/homeassistant-addons)](https://github.com/jdeath/homeassistant-addons/stargazers)

## 关于

该插件基于 [docker 镜像](https://github.com/silverbulletmd/silverbullet)。

## 安装

安装此插件非常简单，与其他所有的 Hass.io 插件安装方式没有区别。

1. [添加我的 Hass.io 插件仓库][repository] 到您的 Hass.io 实例中。
1. 安装此插件。
1. 点击 `Save` 按钮保存配置。
1. 如果您想要密码保护，请将 SB_HOME 字段设置为 UserName:Password，例如 Mike:Pass123。
1. 启动插件。
1. 检查插件日志以确认一切正常。
1. 打开 WebUI 将可以通过 ingress 或 <your-ip>:port 访问。
1. 数据将存储于 /addon_config/2effc9b9_silverbullet 目录中。

## 配置

```
port : 8081 # 您想运行的端口。
```

WebUI 可在 `<your-ip>:port` 访问。

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
