# Home assistant 附加组件：Fusion RSS

一个轻量级的 RSS  feeds 聚合器和阅读器。

主要功能包括：

- 分组、书签、搜索、自动嗅探 feeds
- 导入/导出 OPML 文件
- 支持 RSS、Atom、JSON 类型的 feeds
- 响应式设计、浅色/深色模式、PWA
- 轻量级，适合自建
  - 使用 Golang 和 SQLite 构建，使用单个二进制文件部署
  - 预构建的 Docker 镜像
  - 占用约 80MB 内存

_感谢所有为我 repo 点星的朋友们！点击下方的图片为我 repo 点星，它将显示在右上角。谢谢！_

[![Stargazers repo roster for @jdeath/homeassistant-addons](https://reporoster.com/stars/jdeath/homeassistant-addons)](https://github.com/jdeath/homeassistant-addons/stargazers)

## 关于

此附加组件基于 [Docker 镜像](https://github.com/0x2E/fusion)。

## 安装

此附加组件的安装非常简单，与其他任何 Hass.io 附加组件的安装没有区别。

1. [将我添加的 Hass.io 附加组件仓库](https://github.com/jdeath/homeassistant-addons) 添加到你的 Hass.io 实例。
1. 安装此附加组件。
1. 点击 `保存` 按钮以存储配置。
1. 启动附加组件。
1. 检查附加组件的日志，看看是否一切正常。
1. WebUI 可以通过 ing ress 或 `<your-ip>:port` 访问。
1. 您的数据存储于 `/addon_configs/2effc9b9_fusionrss`

## 配置

```
port : 8080 # 您希望运行的端口。
```

WebUI 可以在 `<your-ip>:port` 找到。

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
