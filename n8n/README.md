# Home Assistant 附加组件：n8n

n8n 是一款可扩展的工作流自动化工具。凭借开源代码的许可模式，n8n 将始终公开源代码、可供自托管，并允许您添加自己的自定义函数、逻辑和应用。n8n 的基于节点的方法使其极具灵活性，使您能够连接任何对象。

【功能未经测试，但附加组件可以运行】

_感谢大家为我仓库点赞！要点赞，请点击下方的图片，它将被显示在右上角。谢谢！_

[![@jdeath/homeassistant-addons 仓库点赞者名单](https://reporoster.com/stars/jdeath/homeassistant-addons)](https://github.com/jdeath/homeassistant-addons/stargazers)

## 关于

该附加组件使用 [Docker 镜像](https://github.com/n8n-io/n8n)。

## 安装

1. 将 [我的 Hass.io 附加组件仓库][repository] 添加到您的 Hass.io 实例中。
2. 点击 `Save` 按钮以保存您的配置。
3. 启动附加组件。
4. 附加组件将失败，这没关系。
5. SSH 进入您的 Home Assistant 并运行 `chmod 2777 /addon_configs/2effc9b9_n8n`。
6. 再次启动附加组件。
7. 检查附加组件的日志以查看一切是否顺利。
8. 通过 `<your-ip>:port` 打开 WebUI。
9. 设置管理员账户。
10. 配置设置将位于 /addon_configs/2effc9b9_n8n。

## 配置

如果您选择，可以将附加组件设置为使用环境文件。请注意将 `/home/node` 作为基路径，它对应于 `/addon_configs/2effc9b9_n8n`。

您需要自行创建文件，并使其包含您想要设置的环境列表，例如：

```
DB_SQLITE_POOL_SIZE=10
N8N_ENFORCE_SETTINGS_FILE_PERMISSIONS=false
```

```
port : 5678 # 您想要运行的端口。
```

WebUI 位于 `<your-ip>:port`。

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
