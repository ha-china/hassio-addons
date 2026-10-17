# Home Assistant 补充程序：思源

思源是一个以隐私为主的个人知识库系统，支持细粒度的区块引用和 Markdown 所见即所得编辑器。

看起来很受欢迎，但包含订阅版补充程序和可选的中国数据中心。请谨慎使用

_感谢大家给的项目/repository 投简历！想给它投简历，请点击下方的图片，它将出现在右上角。谢谢！_

[![Stargazers repo roster for @jdeath/homeassistant-addons](https://reporoster.com/stars/jdeath/homeassistant-addons)](https://github.com/jdeath/homeassistant-addons/stargazers)

## 关于

此补充程序基于 [docker 镜像](https://github.com/siyuan-note/siyuan)。

## 安装

此补充程序的安装过程非常简单，与其他任何 Hass.io 补充程序的安装方式没有不同。

1. 将 [我的 Hass.io 补充程序仓库][repository] 添加到您的 Hass.io 实例中。
1. 安装此补充程序。
1. 设置访问代码和端口。
1. 点击 `保存` 按钮以保存您的配置。
1. 启动补充程序。
2. 检查补充程序的日志以查看一切是否正常。
1. 通过 <您的 IP>: 端口 打开 WebUI 应该可以正常工作。
1. 数据将存储在 /addon_config/2effc9b9_siyuan。

## 配置

```
port : 6806 # 您想运行的端口。
```

WebUI 可通过 `<您的 IP>: 端口` 找到。

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
