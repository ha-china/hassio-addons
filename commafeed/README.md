# Home Assistant 附加组件：CommaFeed

基于 Quarkus 和 React/TypeScript 的，受 Google Reader 启发的自托管 RSS 阅读器。

_感谢所有为我仓库点亮 stars 的人！点击上方图片点亮 stars，它就会出现在右上角。感谢大家！_

[![Stargazers repo roster for @jdeath/homeassistant-addons](https://reporoster.com/stars/jdeath/homeassistant-addons)](https://github.com/jdeath/homeassistant-addons/stargazers)

## 关于

该附加组件使用 [docker 镜像](https://github.com/Athou/commafeed/)。

## 安装

该附加组件的安装非常简单，与安装任何其他的 Hass.io 附加组件没有区别。

1. [将我 Hass.io 附加组件仓库][repository] 添加到您的 Hass.io 实例中。
1. 点击 `Save` 按钮以保存您的配置。
1. 启动附加组件。
1. 查看附加组件的日志以确认一切是否正常。
1. WebUI 应能通过 <your-ip>:port 和 ingress 访问。默认用户名/密码为 admin:admin
1. 设置位于 /addon_configs/2effc9b9_commafeed

## 配置
如果您选择使用环境文件，您可以将附加组件设置为使用它。请注意将 '/commafeed/data' 作为 base 路径，这将映射到 /addon_configs/2effc9b9_commafeed。

UI 中的配置文件应为 `/commafeed/data/config.env`，但您应创建文件 `addon_configs/2effc9b9_commafeed/config.env`。
您需要自己创建文件，并设为您想要设置的变量列表，例如：
```
COMMAFEED_USERS_ALLOW_REGISTRATIONS=true
```
```
port : 8082 # 您想要运行的端口。
```

WebUI 可通过 `<your-ip>:port` 访问。

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
