# Home assistant 附加组件：degoog

这是一个搜索引擎聚合器，它可以查询多个搜索引擎，并将结果显示在一个地方。您可以添加自定义搜索引擎、bang 命令插件、插槽插件（结果上方/下方或侧边栏中由查询触发的面板），以及传输器（自定义 HTTP 获取策略，如 curl、FlareSolverr 或您自己的）。理想的未来是具有由用户制作的插件/搜索引擎市场。

_感谢所有给项目点 별간의朋友！请点击下面的图片来星标它，它将显示在右上角。感谢！_

[![Stargazers repo roster for @jdeath/homeassistant-addons](https://reporoster.com/stars/jdeath/homeassistant-addons)](https://github.com/jdeath/homeassistant-addons/stargazers)

## 关于

该附加组件使用了 [docker 镜像](https://github.com/degoog-org/degoog)。

## 安装

该附加组件的安装非常简单，安装过程与其他 Hass.io 附加组件没有差异。

1. [添加我的 Hass.io 附加组件存储库][repository] 到您的 Hass.io 实例。
1. 点击 `Save` 按钮以保存您的配置。
1. 启动附加组件。
1. 检查附加组件的日志，以确认一切是否运作正常。
1. 打开 WebUI——可以通过 Home Assistant 转 Indeix（侧边栏）或 `<your-ip>:4445` 访问。

## 配置
data 文件位于 \addon_configs\2effc9b9_degoog\
```yaml
port : 4445 #您想运行的端口号。不能是 4444
```
Webui 可以在 `<your-ip>:port` 处找到。

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
