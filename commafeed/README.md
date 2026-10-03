# Home Assistant 附加组件：CommaFeed

基于 Quarkus 和 React/TypeScript 的 Google Reader 启用的自托管 RSS 阅读器。

_感谢给项目星标的所有人！若要星标它，请点击下方图片，它将显示在右上角。感谢！_

[![Stargazers repo roster for @jdeath/homeassistant-addons](https://reporoster.com/stars/jdeath/homeassistant-addons)](https://github.com/jdeath/homeassistant-addons/stargazers)

## 关于

该附加组件使用 [Docker 镜像](https://github.com/Athou/commafeed/)。

## 安装

安装此附加组件非常简单，与其他任何 Hass.io 附加组件的安装方式没有区别。

1.  [添加我的 Hass.io 附加组件存储库][repository] 到您的 Hass.io 实例。
1.  点击 `保存` 按钮以保存配置。
1.  启动附加组件。
1.  查看附加组件的日志以确认一切正常。
1.  通过 `<您的IP 地址>:端口` 和 Ingress 访问 WebUI。默认用户/密码为 admin:admin。
1.  设置位于 `/addon_configs/2effc9b9_commafeed`。

## 配置

如果您选择，可以设置附加组件使用环境变量文件。请注意使用 '/commafeed/data' 作为基础路径，它将映射到 /addon_configs/2effc9b9_commafeed。

UI 中的配置文件应为 `/commafeed/data/config.env`，但您应该将文件创建在 `addon_configs/2effc9b9_commafeed/config.env` 位置。您需要手动创建此文件，并将其设为期望设置的环境列表，例如：

```
COMMAFEED_USERS_ALLOW_REGISTRATIONS=true
```

```
port : 8082 #您想运行的端口。
```

WebUI 可以通过 `<您的 IP> : 端口` 访问。

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
