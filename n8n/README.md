# Home Assistant 组件：n8n

n8n 是一种可扩展的自动化流程工具。采用公平的代码分发模式，n8n 始终会将源代码透明化，支持自行托管，并允许您添加自定义函数、逻辑和应用程序。n8n 的基于节点的架构使其极具灵活性，能够连接任何事物到任何事物。

功能尚未测试，但组件确实能运行

_感谢所有为我的仓库星星的人！要为该仓库星星，请点击下方图片，它将显示在右上角。感谢您的支持！_

[![@jdeath/homeassistant-addons 仓库星星人员列表](https://reporoster.com/stars/jdeath/homeassistant-addons)](https://github.com/jdeath/homeassistant-addons/stargazers)

## 关于

此组件使用 [Docker 镜像](https://github.com/n8n-io/n8n)。

## 安装

1. 将 [我的 Hass.io 组件仓库][repository] 添加到您的 Hass.io 实例中。
1. 点击 `Save` 按钮以保存您的配置。
1. 启动组件。
1. 组件将启动失败，这没关系。
1. SSH 到您的 Home Assistant 运行 `chmod 2777 /addon_configs/2effc9b9_n8n`。
1. 重新启动组件。
1. 查看组件日志，确认一切顺利。
1. 打开 Web 界面，应可通过 <your-ip>:port 访问。
1. 设置管理员账户。
1. 配置文件位于 /addon_configs/2effc9b9_n8n。

## 配置

如果您选择使用环境变量文件，可以将组件设置为使用该文件。请将其基础路径设置为 `/home/node`，该路径将映射到 `/addon_configs/2effc9b9_n8n`。

您需要自行创建该文件，并将其添加为您想要配置的环境变量，例如：
```
DB_SQLITE_POOL_SIZE=10
N8N_ENFORCE_SETTINGS_FILE_PERMISSIONS=false
```

```
port : 5678 # 您想运行的端口。
```

Web 界面位于 `<your-ip>:port`。

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
