# Home assistant 附加组件：degoog

这是一个聚合搜索引擎，可同时查询多个引擎并将结果显示在一个页面上。您可以添加自定义搜索引擎、bang 命令插件、插槽插件（在结果上方/下方或侧边栏中触发查询的面板），以及传输模块（自定义 HTTP 抓取策略，如 curl、FlareSolverr 或您自己的）。未来的理想愿景是建立一个供用户制作插件/引擎的市场平台。

_感谢所有为我仓库竖起大拇指的人！要竖起大拇指，请点击下图，它将显示在右上角。谢谢！_

[![@jdeath/homeassistant-addons 仓库星标 Regenewal](https://reporoster.com/stars/jdeath/homeassistant-addons)](https://github.com/jdeath/homeassistant-addons/stargazers)

## 关于

此附加组件使用 [Docker 镜像](https://github.com/degoog-org/degoog)。

## 安装

此附加组件的安装非常简单，与安装其他任何 Hass.io 附加组件并无不同。

1. 将 [我的 Hass.io 附加组件仓库][repository] 添加到您的 Hass.io 实例。
1. 点击 `保存` 按钮以存储您的配置。
1. 启动附加组件。
1. 查看附加组件的日志，确认一切正常。
1. 打开 Web 界面——可以通过 Home Assistant 的入口点（侧边面板）或 `<your-ip>:4445` 访问。

## 配置

配置文件位于 `\addon_configs\2effc9b9_degoog\` 目录。
```
port : 4445 # 您想要的运行端口。不能是 4444
```

Web 界面可以在 `<your-ip>:port` 访问。

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
