# Home Assistant 插件：n8n

n8n 是一款可扩展的工作流自动化工具。采用“随时开放源代码”的发行模式，n8n 的代码始终可公开获取，支持自托管，并允许你添加自定义函数、逻辑和应用。n8n 基于节点的架构使其极具灵活性，让你可以将任何内容连接到任何内容。

功能未经测试，但插件可以运行

_感谢所有给项目星标的人！要星标该项目，请点击下方图片，然后它将会出现在右上角。感谢大家！_

[![Stargazers repo roster for @jdeath/homeassistant-addons](https://reporoster.com/stars/jdeath/homeassistant-addons)](https://github.com/jdeath/homeassistant-addons/stargazers)

## 关于

此插件使用 [docker 镜像](https://github.com/n8n-io/n8n)。

## 安装

1. [将我的 Hass.io 插件仓库](https://github.com/jdeath/homeassistant-addons) 添加到你当前的 Hass.io 实例。
1. 点击“保存（Save）”按钮以存储配置。
1. 启动插件。
1. 插件会启动失败，这没关系。
1. 通过 SSH 连接到 homeassistant，并运行 `chmod 2777 /addon_configs/2effc9b9_n8n`。
1. 重新启动插件。
1. 检查插件日志，确认一切是否正常工作。
1. Web 界面应可通过 <your-ip>:port 访问。
1. 配置管理员账户。
1. 设置保存在 /addon_configs/2effc9b9_n8n。

## 配置

你也可以选择为插件设置环境变量文件。请注意，基础路径应设为 '/home/node'，它将被映射到 /addon_configs/2effc9b9_n8n。

你需要自行创建该文件，并将其配置为包含你想要设置的变量列表，例如：
```
DB_SQLITE_POOL_SIZE=10
N8N_ENFORCE_SETTINGS_FILE_PERMISSIONS=false
```

```
port : 5678 # 你希望运行的端口。
```

Web 界面可通过 `<your-ip>:port` 访问。

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
