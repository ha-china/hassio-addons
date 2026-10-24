# Home assistant 附加组件：SiYuan

SiYuan 是一个注重隐私的个人知识库系统，支持精细化的块级引用和 Markdown WYSIWYG。

看起来人气很高，但有付费附加组件，并且可选中国数据中心。请使用需谨慎。

_Thanks to everyone having starred my repo! To star it click on the image below, then it will be on top right. Thanks!_
[![Stargazers repo roster for @jdeath/homeassistant-addons](https://reporoster.com/stars/jdeath/homeassistant-addons)](https://github.com/jdeath/homeassistant-addons/stargazers)

## 关于

此附加组件基于 [docker 镜像](https://github.com/siyuan-note/siyuan)。

## 安装

此附加组件的安装过程非常简单，与其他任何 Hass.io 附加组件的安装方式没有不同。

1. [将我的 Hass.io 附加组件仓库][repository] 添加到你的 Hass.io 实例中。
1. 安装此附加组件。
1. 设置访问密码和端口。
1. 点击 `Save` 按钮保存配置。
1. 启动附加组件。
1. 检查附加组件的日志以确认一切是否正常。
1. 打开 WebUI，可通过 <your-ip>:port 访问。
1. 数据将存储于 /addon_config/2effc9b9_siyuan。

## 配置

```
port : 6806 # 要运行的端口。
```

WebUI 位于 `<your-ip>:port`。

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
