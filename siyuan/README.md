# Home assistant 插件：SiYuan

SiYuan 是一个以隐私为优先的个人知识管理系统，支持细粒度块级引用和 Markdown 所见即所得视图。

看起来很受欢迎，但包含订阅附加组件和可选的中国数据中心。使用时请谨慎。

_感谢所有人给我的仓库点赞！要点赞，请点击下方图片，它将显示在右上角。非常感谢！_

[![Stargazers repo roster for @jdeath/homeassistant-addons](https://reporoster.com/stars/jdeath/homeassistant-addons)](https://github.com/jdeath/homeassistant-addons/stargazers)

## 关于

该附加组件基于 [docker 镜像](https://github.com/siyuan-note/siyuan)。

## 安装

此附加组件的安装非常直接，与其他任何 Hass.io 附加组件的安装方式相比并无不同。

1. [添加我的 Hass.io 附加组件库][repository] 到你的 Hass.io 实例。
1. 安装此附加组件。
1. 设置访问码和端口
1. 点击 `保存` 按钮以存储配置。
1. 启动附加组件。
1. 查看附加组件的日志，以确认一切是否正常运行。
1. 通过 `<your-ip>:port` 打开 Web 界面应能正常工作。
1. 数据将保存在 `/addon_config/2effc9b9_siyuan` 中。

## 配置

```
port : 6806 # 你想运行的端口。
```

Web 界面可位于 `<your-ip>:port`。

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
