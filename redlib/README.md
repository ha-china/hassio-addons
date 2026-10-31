# Home Assistant 插件：Redlib

Redlib 是一个类似 [Invidious](https://github.com/iv-org/invidious) 的私有前端，但适用于 Reddit。无需 [跟踪](#reddit) 即可查看 [r/unpopularopinion](https://redlib.matthew.science/r/unpopularopinion) 上最冷门的观点。

- 🚀 **快速**：使用 Rust 编写，提供极速且内存安全的性能
- ☁️ **轻量**：无 JavaScript、无广告、无跟踪、无臃肿代码
- 🕵️ **私密**：所有请求（包括媒体）均通过该服务器代理
- 🔒 **安全**：严格的 [内容安全策略](https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP) 防止浏览器向 Reddit 发送请求

_感谢所有给我项目点赞的人！想点赞请点击下方图片，它将显示在右上角。谢谢！_

[![Stargazers repo roster for @jdeath/homeassistant-addons](https://reporoster.com/stars/jdeath/homeassistant-addons)](https://github.com/jdeath/homeassistant-addons/stargazers)

## 关于

该插件基于 [docker 镜像](https://github.com/redlib-org/redlib) 构建。

## 安装

此插件的安装非常简单，与其他任何 Hass.io 插件的安装方式并无不同。

1. [将我的 Hass.io 插件库][repository] 添加到您的 Hass.io 实例中。
1. 安装此插件。
1. 点击 `保存` 按钮以存储配置。
1. 启动插件。
2. 检查插件日志以确认一切是否正常。
1. 通过 Ingress 或 `<your-ip>:port` 打开 WebUI 即可工作。

## 配置

```
port : 8081 # 您想运行的端口号。
```

WebUI 可在 `<your-ip>:port` 处访问。

## 自定义

在插件首次运行后，在配置文件夹（addon_configs/2effc9b9_redlib）中有一个 custom.sh 文件，您可以在该文件中添加您的自定义命令。

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
