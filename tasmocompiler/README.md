# Home Assistant 附加组件：tasmocompiler

TasmCompiler 是一个简单的 Web GUI，允许您使用自定义设置编译出色的 Tasmota 固件。

_感谢所有人给我的仓库加星！要加星，请点击下面的图片，它将显示在右上角。谢谢大家！_

[![Stargazers repo roster for @jdeath/homeassistant-addons](https://reporoster.com/stars/jdeath/homeassistant-addons)](https://github.com/jdeath/homeassistant-addons/stargazers)

## 关于

此附加组件基于 [Docker 镜像](https://hub.docker.com/r/benzino77/tasmocompiler)

## 安装

此附加组件的安装非常直接，与其他任何 Hass.io 附加组件的安装方式没有区别。

1. [将我的 Hass.io 附加组件仓库][repository] 添加到您的 Hass.io 实例中。
2. 安装此附加组件。
3. 点击 `保存` 按钮以保存您的配置。
4. 启动附加组件。
5. 查看附加组件的日志，确认一切是否运行正常。
6. 访问本地 IP:端口。此处因某种原因 Ingress 无法工作。
7. 查阅官方文档以获取配置支持：https://github.com/benzino77/tasmocompiler

## 配置

```
port: 3000 # 您希望前端运行的端口
```

Web 界面可在 `<your-ip>:port` 处找到。

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
