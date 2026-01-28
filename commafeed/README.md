# Home Assistant 附加组件：CommaFeed

基于 Quarkus 和 React/TypeScript 的受 Google Reader 启发的自托管 RSS 阅读器。

_感谢所有给我的仓库点星的人！要给它点星，请点击下面的图片，它就会出现在右上角。谢谢！_

[![@jdeath/homeassistant-addons 的 Star 者列表](https://reporoster.com/stars/jdeath/homeassistant-addons)](https://github.com/jdeath/homeassistant-addons/stargazers)

## 关于

该附加组件使用 [docker 镜像](https://github.com/Athou/commafeed/)。

## 安装

该附加组件的安装非常简单，与其他任何 Hass.io 附加组件的安装相比并无不同。

1. 将我的 Hass.io 附加组件仓库 [添加][repository] 到你的 Hass.io 实例中。
1. 点击 `保存` 按钮以存储你的配置。
1. 启动附加组件。
1. 检查附加组件的日志以查看一切是否顺利。
1. 打开 WebUI，它应该可以通过 <your-ip>:port 和 ingress 访问。默认用户名:密码 为 admin:admin
1. 设置将在 /addon_configs/2effc9b9_commafeed

## 配置
如果你愿意，你可以设置附加组件使用环境变量文件。请注意使用 '/commafeed/data' 作为基础路径，它将映射到 /addon_configs/2effc9b9_commafeed

UI 中的配置文件在 `/commafeed/data/config.env`，但你需要创建文件 `addon_configs/2effc9b9_commafeed/config.env`
你需要自己创建该文件，并使其成为你想要设置的环境列表，例如：
```
COMMAFEED_USERS_ALLOW_REGISTRATIONS=true
```
```
port : 8082 # 你想运行在的端口。
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
