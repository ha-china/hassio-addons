# Home assistant 附加组件：n8n

n8n 是一个可扩展的工作流程自动化工具。开源许可证模式确保 n8n 始终拥有可见的源码、可供自行托管，并允许你添加自己的自定义函数、逻辑和应用。n8n 基于节点的架构使其极具灵活性，能够连接一切事物。

功能未经测试，但附加组件可以运行

_感谢大家为我仓库点星！要点星，请点击下方的图片，它将被显示在右上角。谢谢大家！_

[![Stargazers repo roster for @jdeath/homeassistant-addons](https://reporoster.com/stars/jdeath/homeassistant-addons)](https://github.com/jdeath/homeassistant-addons/stargazers)

## 关于本附加组件

本附加组件使用 [Docker 镜像](https://github.com/n8n-io/n8n)。

## 安装

1. 将 [我的 Hass.io 附加组件存储库][repository] 添加到你的 Hass.io 实例中。
1. 点击 `Save` 按钮以保存配置。
1. 启动附加组件。
1. 附加组件将失败，这没关系。
1. 通过 SSH 连接到你的 homeassistant，并运行 `chmod 2777 /addon_configs/2effc9b9_n8n`
1. 启动附加组件。
1. 检查附加组件的日志以确认一切是否正常。
1. WebUI 可通过 <your-ip>:port 访问。
1. 设置管理员账户。
1. 设置存储位于 /addon_configs/2effc9b9_n8n

## 配置

如果你选择的话，可以将附加组件设置用于环境文件。注意将根路径设置为 '/home/node'，这将映射到 /addon_configs/2effc9b9_n8n。

你需要自己创建该文件，并将其设置为想要设置的列表，例如：
```
DB_SQLITE_POOL_SIZE=10
N8N_ENFORCE_SETTINGS_FILE_PERMISSIONS=false
```

```
port : 5678 # 你希望运行的端口号。
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
