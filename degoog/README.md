# Home assistant Add-on: degoog

一个聚合搜索引擎，可查询多个引擎并将结果统一显示在同一个界面。您可以自定义搜索引擎、Bang 命令插件、占位插件（位于搜索结果上方/下方或侧边栏的查询触发面板），以及传输工具（如 curl、FlareSolverr 或您自定义的 HTTP 获取策略）。最终梦想是建立一个用户创建的插件/引擎市场。

_感谢所有人 Star 了我的仓库！点击上方图片 Star，它将显示在右上角。谢谢！_

[![Stargazers repo roster for @jdeath/homeassistant-addons](https://reporoster.com/stars/jdeath/homeassistant-addons)](https://github.com/jdeath/homeassistant-addons/stargazers)

## 关于

此 Add-on 使用 [docker 镜像](https://github.com/degoog-org/degoog)。

## 安装

此 Add-on 的安装非常简单，与安装其他任何 Hass.io Add-on 没有太大区别。

1. 将 [我的 Hass.io Add-on 仓库][repository] 添加到您的 Hass.io 实例中。
1. 点击 `Save` 按钮以保存配置。
1. 启动 Add-on。
1. 检查 Add-on 的日志，查看是否一切正常。
1. 打开 WebUI —— 可通过 Home Assistant 入口（侧边栏）或 `<your-ip>:4445` 访问。

## 配置

数据文件位于 \addon_configs\2effc9b9_degoog\
```
port : 4445 # 您想要运行的端口号。不能为 4444
```

WebUI 可通过 `<your-ip>:port` 访问。

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
