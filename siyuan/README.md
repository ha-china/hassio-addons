# Home assistant 插件：SiYuan

SiYuan 是一个以隐私为核心的个人知识管理系统，支持精细的块级引用和 Markdown 所见即所得编辑。

看起来很流行，但存在订阅插件和可选的中国数据中心。请谨慎使用。

_感谢大家给我的仓库点个 star！点击下图即可为它打星，它将出现在右上角。谢谢！_

[![Stargazers repo roster for @jdeath/homeassistant-addons](https://reporoster.com/stars/jdeath/homeassistant-addons)](https://github.com/jdeath/homeassistant-addons/stargazers)

## 关于

该插件基于 [docker 镜像](https://github.com/siyuan-note/siyuan)。

## 安装

该插件的安装非常简单，与其他任何 Hass.io 插件的安装方式无异。

1. [将我的 Hass.io 插件仓库][repository] 添加到你的 Hass.io 实例中。
2. 安装此插件。
3. 设置访问码和端口。
4. 点击 `Save` 按钮以保存配置。
5. 启动该插件。
6. 检查插件的日志，确认一切是否运行正常。
7. 可通过 `<your-ip>:port` 打开 Web 界面。
8. 数据将保存在 `/addon_config/2effc9b9_siyuan` 目录。

## 配置

```
port : 6806 # 你要运行的端口号。
```

Web 界面可在 `<your-ip>:port` 访问。

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
