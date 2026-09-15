# Home Assistant 附加组件：SilverBullet

SilverBullet 是一款为具有黑客思维的人优化的笔记应用程序。我们都会做笔记。市面上有数百万款笔记应用。实实在在地。难道不有一个让你的笔记不仅仅是普通文本文件就好了吗？让你的笔记本质上成为一个你可以查询的数据库；在上面构建自定义知识应用程序？一个可被黑客破解的笔记本，如果可以的话？

_谢谢大家给我的仓库点星！想要给它点星请点击下面的图片，然后它会在右上角。谢谢！_

[![Star 截图仓库对于 @jdeath/homeassistant-addons 的星罗队](https://reporoster.com/stars/jdeath/homeassistant-addons)](https://github.com/jdeath/homeassistant-addons/stargazers)

## 关于

此附加组件基于 [Docker 镜像](https://github.com/silverbulletmd/silverbullet)。

## 安装

此附加组件的安装非常简单，与安装任何其他 Hass.io 附加组件没有区别。

1. [加入我的 Hass.io 附加组件库][repository] 到您的 Hass.io 实例中。
1. 安装此附加组件。
1. 点击 `Save` 按钮以存储您的配置。
1. 如果您想要密码保护，将 SB_HOME 字段设置为 UserName:Password，例如：Mike:Pass123
1. 启动附加组件。
1. 检查附加组件的日志，看看一切是否顺利。
1. Webui 可以通过 Ingress 或 <your-ip>:port 打开。
1. 数据将存储在 /addon_config/2effc9b9_silverbullet。

## 配置

```
port : 8081 #您要运行的端口。
```

Webui 可在 `<your-ip>:port` 处找到。

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
