# Home Assistant 插件：SiYuan

SiYuan 是一个以隐私为首的个人知识管理系统，支持细粒度分块引用和 Markdown 所见即所得编辑。

看起来很受欢迎，但需要订阅插件和可选的中国数据中心。请谨慎使用。

_感谢所有人给我仓库点赞！要点击下方的图片进行点赞，它将被显示在右上角。感谢大家！_

[![Stargazers repo roster for @jdeath/homeassistant-addons](https://reporoster.com/stars/jdeath/homeassistant-addons)](https://github.com/jdeath/homeassistant-addons/stargazers)

## 关于

该插件基于 [docker 镜像](https://github.com/siyuan-note/siyuan)。

## 安装

该插件的安装非常直接，与安装任何其他 Hass.io 添加组件的方式基本相同。

1. [将我的 Hass.io 附加组件存储库][repository] 添加到您的 Hass.io 实例中。
1. 安装此插件。
1. 设置访问代码和端口。
1. 点击 `保存` 按钮以保存您的配置。
1. 启动附加组件。
1. 检查附加组件的日志，查看一切是否正常。
1. 打开 WebUI 可通过 <your_ip>:port 访问。
1. 数据将存储在 /addon_config/2effc9b9_siyuan 目录。

## 配置

```yaml
port : 6806 # 您想要运行的端口。
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
