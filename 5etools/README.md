# Home Assistant 插件：5etools

是为 D&D 5e 玩家和地牢管理员（DM）提供的一组基于浏览器的工具。下载的图像来自 5etools GitHub 仓库。jdeath 的仓库中不托管或发布任何图像或内容。由于 Home Assistant 插件创建者不使用此功能，因此不提供支持。自托管的图像可能会落后于 5etools 网站版本。图像大小为 4 GB，因此安装过程会很长，请耐心等待。

感恩大家给我的仓库打分！要给它打分，请点击下方图片，它将显示在右上角。谢谢！

[![Star 排序器仓库会员列表 for @jdeath/homeassistant-addons](https://reporoster.com/stars/jdeath/homeassistant-addons)](https://github.com/jdeath/homeassistant-addons/stargazers)

## 关于

该插件使用 [Docker 镜像](https://github.com/5etools-mirror-2/5etools-mirror-2.github.io)。

## 安装

此插件的安装非常简单，与安装其他任何 Hass.io 插件没有区别。

1. [将我的 Hass.io 插件仓库加入您的实例][repository]。
2. 安装此插件。4 GB 镜像占用的下载时间较长。
3. 点击 `保存` 按钮以保存您的配置。
4. 启动插件。
5. 检查插件日志以确认一切顺利。
6. 打开 WebUI，可通过 Ingress 或 `<your-ip>:port` 访问。

## 配置

```
port : 8080 # 您想要运行的端口。
```

WebUI 可在 `<your-ip>:port` 处访问。

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
