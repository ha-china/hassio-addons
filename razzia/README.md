# Home assistant 插件：Razzia

Razzial 是一个简单且开源的问答平台，允许用户在自有服务器上为小型活动进行托管。

_感谢所有人对我仓库的点点赞！如需点赞，请点击下图，它将被置于右上角。谢谢！_

[![Stargazers repo roster for @jdeath/homeassistant-addons](https://reporoster.com/stars/jdeath/homeassistant-addons)](https://github.com/jdeath/homeassistant-addons/stargazers)

## 关于

此插件使用 [docker 镜像](https://github.com/Ralex91/Razzia)。

## 安装

此插件的安装非常简单，与其他任何 Hass.io 插件的安装方式大致相同。

1. 将我的 Hass.io 插件仓库 [ repository] 添加到您的 Hass.io 实例中。
1. 点击 `Save` 按钮以保存您的配置。
1. 启动插件。
1. 通过 <your-ip>:port 打开 WebUI。
1. 您应该会出现登录错误
1. 检查日志以找到 client IP 地址并将其添加到白名单中
1. 进入 /addon_configs/2effc9b9_razzia
1. 编辑 /addon_configs/2effc9b9_razzia/game.json 添加密码
1. 重启插件
1. 访问 http://localhost:3000/manager 管理界面
1. 输入管理密码 (game.json)
1. 将游戏 URL (http://localhost:3000) 和房间代码共享给参与者
1. 等待玩家加入
1. 点击开始按钮以开始游戏


## 配置

```
port : 8000 # 您想在此端口上运行的端口。
```

WebUI 位于 `<your-ip>:port`。

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
