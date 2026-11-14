# Home assistant 附加组件：Razzia

Razzia 是一个简单且开源的测验平台，允许用户在自己的服务器上为其举办的小型活动托管该平台。

_感谢所有为我仓库点亮星标的人! 要点亮星标，请点击下图，它将显示在右上角。谢谢!_

[![@jdeath/homeassistant-addons 仓库星标者名单](https://reporoster.com/stars/jdeath/homeassistant-addons)](https://github.com/jdeath/homeassistant-addons/stargazers)

## 关于

此附加组件使用 [docker 镜像](https://github.com/Ralex91/Razzia)。

## 安装

此附加组件的安装非常简单，与其他任何 Hass.io 附加组件的安装方式没有区别。

1. [添加我的 Hass.io 附加组件仓库][repository] 到您的 Hass.io 实例。
1. 点击 `保存` 按钮以存储您的配置。
1. 启动附加组件。
1. 通过 `<your-ip>:port` 打开 Web UI。
1. 您应该会收到一个登录错误
1. 查看日志以查找要添加到白名单部分的客户端 IP 地址
1. 进入 /addon_configs/2effc9b9_razzia
1. 编辑 /addon_configs/2effc9b9_razzia/game.json 并添加密码
1. 重新启动附加组件
1. 访问 http://localhost:3000/manager 管理界面
1. 输入管理员密码 (game.json)
1. 与参与者分享游戏 URL (http://localhost:3000) 和房间代码
1. 等待玩家加入
1. 点击开始按钮以开始游戏

## 配置

```
port : 8000 # 您要运行的端口。
```

Web UI 位于 `<your-ip>:port`。

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
