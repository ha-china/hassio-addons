# Home assistant 附加组件：tasmocompiler

TasmoCompiler 是一个简单的 Web GUI，允许您使用自己的设置编译出色的 Tasmota 固件。

_感谢所有人给我仓库点星！点击下方的图片来点星，它就会出现在右上角。感谢！_

[![Stargazers repo roster for @jdeath/homeassistant-addons](https://reporoster.com/stars/jdeath/homeassistant-addons)](https://github.com/jdeath/homeassistant-addons/stargazers)

## 关于

该附加组件基于 [docker 镜像](https://hub.docker.com/r/benzino77/tasmocompiler) 构建。

## 安装

此附加组件的安装非常简单，与其他任何 Hass.io 附加组件的安装方式并无不同。

1.  [将我的 Hass.io 附加组件仓库添加到 Hass.io 实例][repository]。
1.  安装此附加组件。
1.  点击 `保存` 按钮以保存您的配置。
1.  启动附加组件。
1.  检查附加组件的日志，以查看是否一切顺利。
1.  访问本地 IP:端口。由于某种原因，Ingress 不起作用。
1.  咨询官方文档以获取设置支持：https://github.com/benzino77/tasmocompiler

## 配置

```
port: 3000 # 您要在其上运行前端界面的端口
```

Webui 位于 `<your-ip>:port`。

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
