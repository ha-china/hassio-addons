# Home assistant add-on: SilverBullet

SilverBullet 是一款为具有黑客思维的人优化的笔记应用程序。我们都记笔记。有数百万种笔记应用程序。字面意义上。 wouldn’t it be nice to have one where your notes are more than plain text files? Where your notes essentially become a database that you can query; that you can build custom knowledge applications on top of? A hackable notebook, if you will?

_感谢大家给我的仓库加星！要加星，请点击下面的图片，然后它就会在右上角。谢谢！_

[![Stargazers repo roster for @jdeath/homeassistant-addons](https://reporoster.com/stars/jdeath/homeassistant-addons)](https://github.com/jdeath/homeassistant-addons/stargazers)

## About

这个插件基于 [docker 镜像](https://github.com/silverbulletmd/silverbullet)。

## Installation

这个插件的安装非常直接，与其他任何 Hass.io 插件的安装方式相同。

1. [将我的 Hass.io 插件仓库][repository] 添加到你的 Hass.io 实例。
1. 安装这个插件。
1. 点击 `保存` 按钮来保存你的配置。
1. 如果你想设置密码保护，将 SB_HOME 字段设置为 UserName:Password，例如 Mike:Pass123
1. 启动插件。
1. 检查插件的日志，看看是否一切正常。
1. 应该可以通过 ingress 或 <your-ip>:port 打开 WebUI。
1. 数据应该存储在 /addon_config/2effc9b9_silverbullet

## Configuration

```
port : 8081 #你想要运行的端口。
```

Webui 可以在 `<your-ip>:port` 找到。

[repository]: https://github.com/jdeath/homeassistant-addons
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
