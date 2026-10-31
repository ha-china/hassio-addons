# Home Assistant 附加组件：SiYuan

SiYuan 是一个优先考虑隐私的个人知识管理系统，支持细粒度块级引用和 Markdown 所见即所得编辑。

看起来很流行，但有订阅附加组件和可选的中国数据中心。请谨慎使用

_感谢所有人给我的仓库投星！点击下面的图片投星，它将会显示在右上角。感谢！_[![Stargazers repo roster for @jdeath/homeassistant-addons](https://reporoster.com/stars/jdeath/homeassistant-addons)](https://github.com/jdeath/homeassistant-addons/stargazers)

## 关于

此附加组件基于 [Docker 镜像](https://github.com/siyuan-note/siyuan)。

## 安装

此附加组件的安装非常简单，与安装任何其他 Hass.io 附加组件没有区别。

1. [将我添加 Hass.io 附加组件仓库][repository] 到您的 Hass.io 实例中。
2. 安装此附加组件。
3. 设置访问代码和端 port
4. 点击 `Save` 按钮以保存您的配置。
5. 启动附加组件。
6. 检查附加组件的日志以查看一切是否顺利。
7. 可以通过 <your-ip>:port 打开 Web 界面。
8. 数据将存储在 /addon_config/2effc9b9_siyuan

## 配置

```
port : 6806 # 您想运行的端口。
```

Web 界面可以在 `<your-ip>:port` 找到。

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
