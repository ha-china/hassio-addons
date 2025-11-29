# Home assistant插件：SilverBullet

SilverBullet是一个为具有黑客思维的人优化的笔记应用。我们都记笔记。现在有成千上万的笔记应用。字面意义上的。如果有一个笔记应用，让你的笔记不仅仅是纯文本文件，让你的笔记本质上成为一个你可以查询的数据库；你可以在其上构建自定义知识应用？一个可定制的笔记本，如果你愿意的话？

_感谢大家给我的仓库加星！要加星，请点击下面的图片，它将在右上角。谢谢！_

[![@jdeath/homeassistant-addons仓库的Star列表](https://reporoster.com/stars/jdeath/homeassistant-addons)](https://github.com/jdeath/homeassistant-addons/stargazers)

## 关于

这个插件基于[docker镜像](https://github.com/silverbulletmd/silverbullet)。

## 安装

这个插件的安装非常直接，与安装任何其他Hass.io插件没有什么不同。

1. 将我的Hass.io插件仓库[repository]添加到你的Hass.io实例。
1. 安装这个插件。
1. 点击“保存”按钮以保存你的配置。
1. 如果你想设置密码保护，将SB_HOME字段设置为用户名：密码，例如Mike:Pass123
1. 启动插件。
1. 检查插件的日志以查看是否一切正常。
1. 应该可以通过ingress或<your-ip>:port打开WebUI。
1. 数据应该存储在/addon_config/2effc9b9_silverbullet

## 配置

```
port : 8081 #你想要运行的端口。
```

Webui可以在<your-ip>:port找到。

[repository]: https://github.com/jdeath/homeassistant-addons
**⚠️ This resource is intended to help Chinese Home Assistant users more easily install excellent add-ons. If you are not a Chinese user, please read repository readme first**



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
