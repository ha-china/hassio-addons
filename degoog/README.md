# Home assistant 插件：degoog

这是一个搜索聚合器，可查询多个搜索引擎，并在一个地方显示结果。您可以添加自定义搜索引擎、命令扩展 (bang-command plugins)、位槽扩展 (slot plugins，即位于搜索结果上方或下方或侧边栏中以查询触发的面板) 和传输层 (transports，如 curl、FlareSolverr 或您自己定义的自定义 HTTP 获取策略)。最理想的愿景是将来有一天建立一个由用户制作的插件/搜索引擎市场。

_感谢 everyone 给我的仓库点了星标！要星标它，请点击下面的图片，这样它就会显示在右上角。谢谢！_

[![Stargazers repo roster for @jdeath/homeassistant-addons](https://reporoster.com/stars/jdeath/homeassistant-addons)](https://github.com/jdeath/homeassistant-addons/stargazers)

## 关于

该插件使用 [`docker image`](https://github.com/degoog-org/degoog)。

## 安装

该插件的安装相当简单，与安装任何其他 Hass.io 插件没有区别。

1. [将我的 Hass.io 插件存储库][repository] 添加到您的 Hass.io 实例中。
1. 点击 `保存` 按钮以保存您的配置。
1. 启动插件。
1. 检查插件的日志，以查看一切是否正常。
1. 打开 Web 界面 —— 可通过 Home Assistant ingress (侧边栏) 或 `<your-ip>:4445` 访问。

## 配置

配置文件位于 `\addon_configs\2effc9b9_degoog\`
```
port : 4445 #您想要运行的端口号。不能是 4444
```

Web 界面可在 `<your-ip>:port` 处找到。

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
