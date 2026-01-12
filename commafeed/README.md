# Home assistant add-on: CommaFeed

一个受Google Reader启发的自托管RSS阅读器，基于Quarkus和React/TypeScript。

_感谢大家给我的仓库点赞！点击下面的图片点赞，它将出现在右上角。谢谢！_

[![Stargazers repo roster for @jdeath/homeassistant-addons](https://reporoster.com/stars/jdeath/homeassistant-addons)](https://github.com/jdeath/homeassistant-addons/stargazers)

## 关于

这个插件使用的是 [docker镜像](https://github.com/Athou/commafeed/)。

## 安装

这个插件的安装非常简单，与安装任何其他Hass.io插件没有区别。

1. [将我的Hass.io插件仓库][repository]添加到你的Hass.io实例中。
1. 点击`保存`按钮以保存你的配置。
1. 启动插件。
1. 检查插件的日志以查看是否一切顺利。
1. 通过`<你的IP>:端口`和ingress可以打开WebUI。默认用户名:密码是admin:admin
1. 设置将在`/addon_configs/2effc9b9_commafeed`中。

## 配置
你可以选择让插件使用一个环境文件。注意使用`/commafeed/data`作为基本路径，这将映射到`/addon_configs/2effc9b9_commafeed`。

UI中的配置文件将是`/commafeed/data/config.env`，但你可以在`addon_configs/2effc9b9_commafeed/config.env`中创建这个文件。
你需要自己创建这个文件，并设置你想要的配置项，例如：
```
COMMAFEED_USERS_ALLOW_REGISTRATIONS=true
```
```
port : 8082 #你想要运行的端口。
```

Webui可以在`<你的IP>:端口`找到。

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
