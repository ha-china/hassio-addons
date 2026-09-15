# Home assistant 插件：ConvertX

一个自托管的在线文件转换器。支持 831 种不同的格式。使用 TypeScript、Bun 和 Elysia 编写

_感谢每一位为我仓库点赞的人！要点赞，请点击下面的图片，然后它就会显示在右上角。谢谢！_

![Stargazers repo roster for @jdeath/homeassistant-addons](https://reporoster.com/stars/jdeath/homeassistant-addons)](https://github.com/jdeath/homeassistant-addons/stargazers)

## 关于

此插件使用 [docker 镜像](https://github.com/C4illin/ConvertX)。

## 安装

此插件的安装相当简单，与安装任何其他 Hass.io 插件没有太大区别。

1. 将我的 Hass.io 插件仓库 [repository] 添加到您的 Hass.io 实例中。
1. 安装此插件。2 GB 的镜像下载可能需要一些时间。
1. 点击 `保存` 按钮以存储您的配置。
1. 启动插件。
1. 检查插件的日志，以查看是否一切顺利。
1. 通过 ingress 或 <your-ip>:port 打开 WebUI 应该可以工作。
1. 数据将存储在 /addon_configs/2effc9b9_convertx 中。

## 配置

```
port : 3000 #您想要运行的端口号。
```

WebUI 可以在 `<your-ip>:port` 找到。

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
