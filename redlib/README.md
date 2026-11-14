# Homeassistant 插件：Redlib

Redlib 是一个类似 [Invidious](https://github.com/iv-org/invidious) 的私人前端，但针对 Reddit。无需 [追踪](#reddit)，即可浏览 [r/unpopularopinion](https://redlib.matthew.science/r/unpopularopinion) 上最寒冷的观点。

- 🚀 快速：用 Rust 编写，拥有极速性能和内存安全性
- ☁️ 轻量：无 JavaScript，无广告，无追踪，无臃肿组件
- 🕵 私隐：包括媒体在内，所有请求均通过服务器代理
- 🔒 安全：强制定 [内容安全策略](https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP) 阻止浏览器向 Reddit 发起请求

_感谢所有人给到我的仓库加星！要加星，点击下方的图片，它将会出现在右上角。谢谢！_

[![Stargazers repo roster for @jdeath/homeassistant-addons](https://reporoster.com/stars/jdeath/homeassistant-addons)](https://github.com/jdeath/homeassistant-addons/stargazers)

## 简介

使用分叉版本打包的二进制文件：https://github.com/Nachtalb/redlib

## 安装

此插件的安装非常直接，与安装任何其他 Hass.io 插件类似。

1. [将我的 Hass.io 插件仓库][repository] 添加到您的 Hass.io 实例中。
1. 安装此插件。
1. 点击 `保存` 按钮以存储您的配置。
1. 启动插件。
1. 检查插件日志以确认一切正常。
1. 可通过 Ingress 或 `<your-ip>:port` 打开 Web 界面。
1. 如果您是从早期版本升级的，请删除 `/addon_configs/2effc9b9_redlib/config.sh` 文件。

## 配置

```
port : 8081 #指定要运行的端口。
```

Web 界面位于 `<your-ip>:port`。

## 自定义

在插件的首次运行配置文件夹（addon_configs/2effc9b9_redlib）中，将有一个 custom.sh 文件，您可以在其中添加自定义命令。

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
