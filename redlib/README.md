# Home Assistant 插件：Redlib

Redlib 是一个类似于 [Invidious](https://github.com/iv-org/invidious) 的私有前端，但针对 Reddit。无需被 [跟踪](#reddit) 即可浏览 [r/unpopularopinion](https://redlib.matthew.science/r/unpopularopinion) 上的冷门观点。

- 🚀 快速：使用 Rust 编写，以实现极速速度和内存安全
- ☁️ 轻量：无 JavaScript、无广告、无跟踪、无冗余
- 🕵️‍♂️ 隐私：所有请求都通过服务器代理，包括媒体
- 🔒 安全：强大的 [内容安全策略](https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP) 防止浏览器向 Reddit 发送请求

_感谢各位将我的仓库 Star！要 Star，请点击下面的图片，然后它就会出现在右上角。谢谢！_

[![Star 数量统计 @jdeath/homeassistant-addons](https://reporoster.com/stars/jdeath/homeassistant-addons)](https://github.com/jdeath/homeassistant-addons/stargazers)

## 关于

此插件基于 [docker 镜像](https://github.com/redlib-org/redlib)。

## 安装

此插件的安装非常简单，与安装任何其他 Hass.io 插件没有区别。

1. 将我的 Hass.io 插件仓库 [repository][repository] 添加到您的 Hass.io 实例。
1. 安装此插件。
2. 点击 `保存` 按钮以存储您的配置。
3. 启动插件。
4. 检查插件的日志，以查看一切是否顺利。
5. 打开 WebUI 应该可以通过入口或 <your-ip>:port 访问。

## 配置

```
port : 8081 # 想要运行的端口。
```

WebUI 可以在 `<your-ip>:port` 找到。

## 自定义

在插件第一次运行后，在插件配置文件夹（addon_configs/2effc9b9_redlib）中会生成一个 custom.sh 文件，在其中您可以添加自己的命令。

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
