# Home assistant 插件：CommaFeed

基于 Quarkus 和 React/TypeScript 开发的、受 Google Reader 启作的自托管 RSS 阅读器。

_感谢所有为我仓库点赞的人！若想点赞请点下图，它将会出现在右上角。感谢大家！_

[![Stargazers repo roster for @jdeath/homeassistant-addons](https://reporoster.com/stars/jdeath/homeassistant-addons)](https://github.com/jdeath/homeassistant-addons/stargazers)

## 关于

该插件使用 [docker 镜像](https://github.com/Athou/commafeed/)。

## 安装

该插件的安装非常直接，与其他安装 Hass.io 插件的过程不同。

1. [将我的 Hass.io 插件仓库][repository] 添加到您的 Hass.io 实例中。
1.点击 `保存` 按钮以保存您的配置。
1. 启动插件。
1. 检查插件日志，确认一切正常。
1. 通过 <your-ip>:port 和 ingress 打开 Web 界面。默认用户/密码为 admin:admin
1. 设置将存储在 /addon_configs/2effc9b9_commafeed

## 配置

您可以选择使用环境变量文件。注意使用 /commafeed/data 作为基础路径，该路径将映射到 /addon_configs/2effc9b9_commafeed。

UI 中的配置文件位于 /commafeed/data/config.env，但您应创建位于 addon_configs/2effc9b9_commafeed/config.env 的文件。

您需要自行创建该文件，并将其设置为清单列表，例如：
```
COMMAFEED_USERS_ALLOW_REGISTRATIONS=true
```

```
port : 8082 # 您想要运行的端口。
```

Web 界面位于 `<your-ip>:port`。

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
