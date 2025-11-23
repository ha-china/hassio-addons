# Home assistant插件：CommaFeed

受Google Reader启发的自托管RSS阅读器，基于Quarkus和React/TypeScript。

_感谢所有将我的仓库标记为星标的人！要标记它，请点击下面的图片，它将在右上角显示。谢谢！_

[![@jdeath/homeassistant-addons的星标者仓库列表](https://reporoster.com/stars/jdeath/homeassistant-addons)](https://github.com/jdeath/homeassistant-addons/stargazers)

## 关于

这个插件使用[docker镜像](https://github.com/Athou/commafeed/)。

## 安装

这个插件的安装非常简单，与安装任何其他Hass.io插件没有什么不同。

1. 将我的Hass.io插件仓库[repository]添加到您的Hass.io实例中。
1. 点击`保存`按钮以保存您的配置。
1. 启动插件。
1. 检查插件的日志以查看是否一切正常。
1. 应该可以通过`<your-ip>:port`和ingress打开WebUI。默认用户名:密码是admin:admin
1. 设置将在`/addon_configs/2effc9b9_commafeed`中。

## 配置
您可以设置插件使用环境文件。注意使用'/commafeed/data'作为基本路径，这将映射到`/addon_configs/2effc9b9_commafeed`。

UI中的配置文件将是`/commafeed/data/config.env`，但你可以在` addon_configs/2effc9b9_commafeed/config.env` 创建文件。
你需要自己创建文件，并使其成为你想要设置的列表，例如：
```
COMMAFEED_USERS_ALLOW_REGISTRATIONS=true
```
```
port : 8082 #你想要运行的端口。
```

Webui可以在`<your-ip>:port`找到。

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
