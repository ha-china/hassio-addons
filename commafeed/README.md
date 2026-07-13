# Home Assistant 扩展：CommaFeed

受 Google Reader 启发的自托管 RSS 阅读器，基于 Quarkus 和 React/TypeScript。

_感谢所有为我仓库点赞的人！要点赞，请点击下面的图片，然后它就会显示在右上角。谢谢！_

[![Stargazers repo roster for @jdeath/homeassistant-addons](https://reporoster.com/stars/jdeath/homeassistant-addons)](https://github.com/jdeath/homeassistant-addons/stargazers)

## 关于

此扩展使用 [docker 镜像](https://github.com/Athou/commafeed/)。

## 安装

安装此扩展非常简单，与安装任何其他 Hass.io 扩展没有区别。

1. 将我的 Hass.io 扩展仓库 [repository] 添加到您的 Hass.io 实例中。
1. 点击 `保存` 按钮以存储您的配置。
1. 启动扩展。
1. 检查扩展的日志，以查看是否一切顺利。
1. 通过 <your-ip>:port 和 ingress 打开 WebUI 应该可以工作。默认用户名/密码是 admin:admin
1. 设置将在 /addon_configs/2effc9b9_commafeed 中。

## 配置

您可以选择将扩展设置为使用环境文件。注意使用 '/commafeed/data' 作为基本路径，它将映射到 /addon_configs/2effc9b9_commafeed 

UI 中的配置文件将是 `/commafeed/data/config.env`，但您可以将文件命名为 `addon_configs/2effc9b9_commafeed/config.env` 
您需要自己创建此文件，并将其设置为要设置的环境的列表，例如：
```
COMMAFEED_USERS_ALLOW_REGISTRATIONS=true
```
```
port : 8082 #您想要运行的端口。
```

WebUI 可以在 `<your-ip>:port` 上找到。

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
