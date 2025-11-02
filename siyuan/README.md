# Home assistant add-on: SiYuan

SiYuan 是一个注重隐私的个人知识管理系统，支持细粒度的块级引用和 Markdown WYSIWYG。

看起来很受欢迎，但有订阅的 add-ons 和可选的中国数据中心。请谨慎使用

_感谢所有给我仓库加星标的人！要加星标，请点击下面的图片，它将在右上角显示。谢谢！_

[![Stargazers repo roster for @jdeath/homeassistant-addons](https://reporoster.com/stars/jdeath/homeassistant-addons)](https://github.com/jdeath/homeassistant-addons/stargazers)

## 关于

这个 add-on 基于以下 [docker 镜像](https://github.com/siyuan-note/siyuan)。

## 安装

这个 add-on 的安装过程非常简单，与安装任何其他 Hass.io add-on 没有区别。

1. 将我的 Hass.io add-ons 仓库 [repository] 添加到你的 Hass.io 实例。
1. 安装这个 add-on。
1. 设置访问代码和端口
1. 点击 `保存` 按钮来存储你的配置。
1. 启动 add-on。
1. 检查 add-on 的日志，看看是否一切正常。
1. 应该可以通过 <your-ip>:port 打开 WebUI。
1. 数据应该存储在 /addon_config/2effc9b9_siyuan

## 配置

```
port : 6806 #你想要运行的端口。
```

Webui 可以在 `<your-ip>:port` 找到。

[repository]: https://github.com/jdeath/homeassistant-addons
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
