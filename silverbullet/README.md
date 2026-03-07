# Home Assistant 插件：SilverBullet

SilverBullet 是一个针对黑客思维定式的人士优化的笔记应用。我们都会做笔记。实际上，市面上有成千上万的笔记应用。真的。如果有一个应用，你的笔记不仅仅是纯文本文件，那岂不是很好？你的笔记本质上变成一个你可以查询的数据库；你可以在其上构建自定义的知识应用？一个可黑客化的笔记本，如果你愿意的话？

_感谢所有为我仓库点星的人！要点星，请点击下面的图片，然后它就会显示在右上角。谢谢！_

![Stargazers repo roster for @jdeath/homeassistant-addons](https://reporoster.com/stars/jdeath/homeassistant-addons)](https://github.com/jdeath/homeassistant-addons/stargazers)

## 关于

此插件基于 [docker 镜像](https://github.com/silverbulletmd/silverbullet)。

## 安装

此插件的安装非常简单，与安装任何其他 Hass.io 插件没有区别。

1. 将我的 Hass.io 插件仓库[repository]添加到你的 Hass.io 实例中。
1. 安装此插件。
1. 点击 `保存` 按钮以存储你的配置。
1. 如果你需要密码保护，将 SB_HOME 字段设置为 用户名:密码，例如 Mike:Pass123
1. 启动插件。
1. 检查插件的日志，以查看是否一切顺利。
1. 通过 ingress 或 <你的 IP>:端口 打开 WebUI 应该可以工作。
1. 数据应存储在 /addon_config/2effc9b9_silverbullet

## 配置

```
port : 8081 # 你想要运行的端口。
```

WebUI 可以在 `<你的 IP>:端口` 找到。

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
