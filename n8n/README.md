# Home Assistant 插件: n8n

n8n 是一个可扩展的工作流自动化工具。凭借公平代码分发模式，n8n 将始终拥有可见的源代码，可供自托管，并允许你添加自己的自定义函数、逻辑和应用程序。n8n 基于节点的方法使其非常灵活，使你能够将任何事物连接到任何事物。

功能未经测试，但插件确实可以运行

_感谢所有给仓库加星标的人！要给它加星标，请点击下面的图片，它就会出现在右上角。谢谢！_

[![Stargazers repo roster for @jdeath/homeassistant-addons](https://reporoster.com/stars/jdeath/homeassistant-addons)](https://github.com/jdeath/homeassistant-addons/stargazers)

## 关于

此插件使用 [Docker 镜像](https://github.com/n8n-io/n8n)。

## 安装


1. 将我的 Hass.io 插件仓库 [repository] 添加到你的 Hass.io 实例中。
1. 点击 `Save` 按钮以保存你的配置。
1. 启动插件。
1. 插件将会失败，这是正常的。
1. SSH 登录你的 Home Assistant 并运行 `chmod 2777 /addon_configs/2effc9b9_n8n`
1. 启动插件
1. 检查插件的日志，看看一切是否顺利。
1. 打开 WebUI，应该可以通过 <your-ip>:port 访问。
1. 设置管理员账户
1. 设置将位于 /addon_configs/2effc9b9_n8n
## 配置

你可以选择让插件使用环境文件。注意使用 '/home/node' 作为基础路径，它会映射到 /addon_configs/2effc9b9_n8n 

你需要自己创建文件，并将其设置为你要设置的环境列表，例如：
```
DB_SQLITE_POOL_SIZE=10
N8N_ENFORCE_SETTINGS_FILE_PERMISSIONS=false
```

```
port : 5678 # 你想运行在的端口。
```

WebUI 可以在 <your-ip>:port 找到。

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
