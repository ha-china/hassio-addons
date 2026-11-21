# Home Assistant 附加组件：Razzia

Razzia 是一个简单且开源的问答平台，允许用户在本地服务器上为小型活动托管此平台。

_感谢所有为我仓库 star 的同学！要 star 它，请点击下图，它将显示在右上角。谢谢！_

[![Stargazers repo roster for @jdeath/homeassistant-addons](https://reporoster.com/stars/jdeath/homeassistant-addons)](https://github.com/jdeath/homeassistant-addons/stargazers)

## 关于

此附加组件使用 [Docker 镜像](https://github.com/Ralex91/Razzia)。

## 安装

此附加组件的安装非常简单，与其他任何 Hass.io 附加组件的安装方式并无不同。

1.  [将我的 Hass.io 附加组件存储库][repository] 添加到您的 Hass.io 实例中。
1.  点击 `保存` 按钮以存储您的配置。
1.  启动附加组件。
1.  通过 `<您的 IP 地址>:端口` 打开 Web 界面。
1.  您可能会收到登录错误。
1.  查看日志以找到需要添加到白名单部分的客户端 IP 地址。
1.  进入 `/addon_configs/2effc9b9_razzia`。
1.  编辑 `/addon_configs/2effc9b9_razzia/game.json` 添加密码。
1.  重启附加组件。
1.  访问管理界面 `http://localhost:3000/manager`。
1.  输入管理密码（game.json 中设置的）。
1.  将游戏 URL (`http://localhost:3000`) 和房间代码分享给参与者。
1.  等待玩家加入。
1.  点击“开始”按钮以开始游戏。

## 配置

```
port : 8000 #您想要运行的端口。
```

Web 界面可在 `<您的 IP 地址>:端口` 找到。

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
