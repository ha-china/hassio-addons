# Home assistant 附加组件：Mind Spark

MindSpark 是一款你实际上拥有所有权、开源的思维导图应用程序——无需账户，无需付费墙，无需功能限制，无需使用限制。只需一条命令即可自行托管，在浏览器中免费运行，每张映射都保存到你自己的私有 GitHub 仓库中；或者添加一个小小的 Cloudflare Worker 来解锁实时共享和协作功能。它基于原生 JavaScript，无运行时依赖，采用 MIT 协议授权，并得到 AI 辅助开发；你可以自行运行、修改和扩展它。

_感谢所有为我的仓库 starred（星标）大家！要星标它，请点击下图中的图片，它将显示在右上角。非常感谢！_

[![Stargazers repo roster for @jdeath/homeassistant-addons](https://reporoster.com/stars/jdeath/homeassistant-addons)](https://github.com/jdeath/homeassistant-addons/stargazers)

## 关于

该附加组件使用了 [docker 镜像](https://github.com/prasadpatil25/MindSpark)。

## 安装

该附加组件的安装非常简单，与安装任何其他 Hass.io 附加组件没有不同。

1. 将 [我的 Hass.io 附加组件仓库][repository] 添加到你的 Hass.io 实例中。
2. 点击 `Save` 按钮以保存你的配置。
3. 启动附加组件。
4. 附加组件将失败。
5. 通过 `chmod 2777 /addon_configs/local_mindspark/` 登录 home assistant。
6. 重新启动附加组件。
7. 检查附加组件的日志以确认一切是否顺利。
8. 通过 ingress 或 `<your-ip>:port` 打开 WebUI 应可正常工作。

## 配置

```
port : 3000 #你希望运行的端口。
```

WebUI 位于 `<your-ip>:port`。

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
