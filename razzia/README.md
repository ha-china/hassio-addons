# Home Assistant 插件：Razzia

Razzia 是一个简单且开源的测验平台，允许用户在自身的服务器上 hosted 该平台，用于小型活动。

_感谢所有为我仓库星标（Star）的朋友！要星标它，点击下方图片，它就会显示在右上角。感谢！_

[![Stargazers repo roster for @jdeath/homeassistant-addons](https://reporoster.com/stars/jdeath/homeassistant-addons)](https://github.com/jdeath/homeassistant-addons/stargazers)

## 关于

该插件使用 [docker 镜像](https://github.com/Ralex91/Razzia)。

## 安装

此插件的安装过程非常简单，与其他任何 Hass.io 插件的安装方式没有区别。

1. [将我的 Hass.io 插件仓库][repository] 添加到您的 Hass.io 实例中。
1. 点击 `保存 (Save)` 按钮以存储您的配置。
1. 启动该插件。
1. 通过 `<your-ip>:port` 打开 Web UI。
1. 您应该会收到一个登录错误提示。
1. 查看日志以查找客户端 IP 地址，并将其添加至极限白名单（whitelist）部分。
1. 进入 `/addon_configs/2effc9b9_razzia`。
1. 编辑 `/addon_configs/2effc9b9_razzia/game.json` 并添加密码。
1. 重启插件。
1. 访问 `http://localhost:3000/manager` 管理界面。
1. 输入管理密码（来自 game.json）。
1. 与参与者共享游戏 URL (`http://localhost:3000`) 和房间码。
1. 等待玩家加入。
1. 点击“开始 (Start)"按钮以开始游戏。

## 配置

```
port : 8000 # 您想要运行的端口。
```

Web UI 可查看于 `<your-ip>:port`。

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
