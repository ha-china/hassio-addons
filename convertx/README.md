# Home assistant插件：ConvertX

一个自托管的在线文件转换器。支持831种不同格式。使用TypeScript、Bun和Elysia编写

_感谢大家给我的仓库加星！要加星，请点击下面的图片，它将出现在右上角。谢谢！_

[![@jdeath/homeassistant-addons仓库的Star贡献者列表](https://reporoster.com/stars/jdeath/homeassistant-addons)](https://github.com/jdeath/homeassistant-addons/stargazers)

## 关于

这个插件使用[docker镜像](https://github.com/C4illin/ConvertX)。

## 安装

这个插件的安装非常简单，与安装任何其他Hass.io插件没有什么不同。

1. 将我的Hass.io插件仓库[repository]添加到你的Hass.io实例。
1. 安装这个插件。2 GB的镜像需要一段时间来下载。
1. 点击`保存`按钮来保存你的配置。
1. 启动插件。
1. 检查插件的日志，看看是否一切正常。
1. 通过ingress或<your-ip>:port应该可以打开WebUI。
1. 数据将在/addon_configs/2effc9b9_convertx中。

## 配置

```
port : 3000 #你想要运行的端口。
```

Webui可以在<your-ip>:port找到。

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
