# Home Assistant 附加组件：n8n

n8n 是一个可扩展的工作流自动化工具。采用公平码分发模型，n8n 将始终具有可见源代码，可供自托管，并允许您添加自己的自定义函数、逻辑和应用程序。n8n 基于节点的架构使其具有高度灵活性，使您能够连接一切与一切。

功能未测试，但附加组件可以正常运行

_感谢所有星标我的仓库的人！为了星标它，请点击下方的图片，它将显示在右上角。谢谢！_

[![Stars repo 队列 for @jdeath/homeassistant-addons](https://reporoster.com/stars/jdeath/homeassistant-addons)](https://github.com/jdeath/homeassistant-addons/stargazers)

## 关于此附加组件

此附加组件使用 [docker 镜像](https://github.com/n8n-io/n8n)。

## 安装

1. 将 [我的 Hass.io 附加组件仓库][repository] 添加到您的 Hass.io 实例中。
1. 点击 `Save` 按钮以保存配置。
1. 启动附加组件。
1. 附加组件将失败，这没关系。
1. SSH 进入您的 Home Assistant 并运行 `chmod 2777 /addon_configs/2effc9b9_n8n`。
1. 再次启动附加组件。
1. 查看附加组件日志，确认一切是否正常。
1. 打开 Web 界面应在 <your-ip>:port 正常运行。
1. 设置管理员账户。
1. 设置将位于 /addon_configs/2effc9b9_n8n。

## 配置

您可以选择通过环境文件来设置附加组件。请注意使用 `/home/node` 作为基础路径，它将映射到 /addon_configs/2effc9b9_n8n。

您需要自行创建该文件，并将其设为您希望配置的以下环境列表之一：
```
DB_SQLITE_POOL_SIZE=10
N8N_ENFORCE_SETTINGS_FILE_PERMISSIONS=false
```

```
port : 5678 # 您要在上面运行的端口。
```

Web 界面位于 `<your-ip>:port`。

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
