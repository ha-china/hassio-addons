# Home Assistant 附加组件：Livebook

Livebook 是一个用于编写交互式代码笔记本的 Web 应用程序，支持协作开发。

_感谢所有关注我的仓库的人！要关注它，请点击下图，它将出现在右上角。谢谢！_

[![支持仓库人员名单 - @jdeath/homeassistant-addons](https://reporoster.com/stars/jdeath/homeassistant-addons)](https://github.com/jdeath/homeassistant-addons/stargazers)

## 关于

此附加组件使用 [docker 镜像](https://github.com/livebook-dev/livebook)。

## 安装

安装此附加组件非常简单，与其他任何 Hass.io 附加组件的安装方式基本一致。

1. 将 [我的 Hass.io 附加组件仓库][repository] 添加到您的 Hass.io 实例中。
2. 点击 `保存` 按钮以保存配置。
3. 启动该附加组件。
4. 查看附加组件日志以确认是否运行正常。
5. 通过 `<your-ip>:port` 打开 Web 界面应可正常工作。
6. 数据文件将存储在 `/addon_configs/2effc9b9_livebook`。

## 配置

```
port : 8080 #指定要运行的端口号。
```

Web 界面地址为 `<your-ip>:port`。

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
