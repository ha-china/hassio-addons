# Home assistant 插件：degoog

搜索聚合器，查询多个引擎并在一个地方显示结果。您可以添加自定义搜索引擎、Bang-command 插件、插槽插件（结果上方/下方或侧边栏中触发的查询面板），以及传输（自定义 HTTP 获取策略，如 curl、FlareSolverr 或您自己的）。理想的愿景是最终为用户建立一个插件/引擎的市场。

_感谢大家为我仓库星标！要星标它，请点击下方的图片，它将出现在右上角。谢谢！_

[![Stargazers repo roster for @jdeath/homeassistant-addons](https://reporoster.com/stars/jdeath/homeassistant-addons)](https://github.com/jdeath/homeassistant-addons/stargazers)

## 关于

该插件使用 [docker 镜像](https://github.com/degoog-org/degoog)。

## 安装

该插件的安装相当简单，与其他任何 Hass.io 插件的安装没有区别。

1. 将我的 Hass.io 插件仓库 [repository] 添加到您的 Hass.io 实例中。
1. 点击 `Save` 按钮以保存您的配置。
1. 启动该插件。
1. 检查插件日志，确认一切正常。
1. 打开 WebUI——可通过 Home Assistant 入口（侧边栏）或 `<your-ip>:4445` 访问。

## 配置

数据文件位于 `\addon_configs\2effc9b9_degoog\`
```
port : 4445 #您希望运行的端口。不能为 4444
```

Web 界面可从 `<your-ip>:port` 访问。

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
