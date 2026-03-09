# Home Assistant 扩展：SilverBullet

SilverBullet 是一个针对黑客心态的人士优化的笔记应用。我们都做笔记。实际上，市面上有成千上万的笔记应用。真的。难道不是很好有一个，你的笔记不仅仅是纯文本文件吗？你的笔记本质上变成一个你可以查询的数据库；你可以在其上构建自定义知识应用？这就是一个可黑客化的笔记本，如果可以这样说的話？

_感谢所有给我的仓库点星的人！要点星，请点击下面的图片，然后它就会出现在右上角。谢谢！_

![Stargazers repo roster for @jdeath/homeassistant-addons](https://reporoster.com/stars/jdeath/homeassistant-addons)

[![Stargazers repo roster for @jdeath/homeassistant-addons](https://reporoster.com/stars/jdeath/homeassistant-addons)](https://github.com/jdeath/homeassistant-addons/stargazers)

## 关于

此扩展基于 [docker 镜像](https://github.com/silverbulletmd/silverbullet)。

## 安装

此扩展的安装相当简单，与安装任何其他Hass.io扩展没有区别。

1. [将我的Hass.io扩展仓库][repository] 添加到您的Hass.io实例中。
1. 安装此扩展。
2. 点击“保存”按钮以存储您的配置。
3. 如果您想设置密码保护，请将SB_HOME字段设置为用户名：密码，例如 Mike:Pass123。
4. 启动扩展。
5. 检查扩展的日志以查看是否一切顺利。
6. 通过ingress或 <your-ip>:port 打开WebUI。
7. 数据应存储在 /addon_config/2effc9b9_silverbullet 中。

## 配置

```
port : 8081 # 您想要运行在的端口。
```

WebUI 可以在 `<your-ip>:port` 找到。

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
