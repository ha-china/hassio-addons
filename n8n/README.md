# 家居助手插件：n8n

n8n 是一个可扩展的工作流自动化工具。通过公平的代码分发模型，n8n 将始终拥有可见的源代码，可以自行托管，并允许你添加自己的自定义函数、逻辑和应用程序。n8n 的基于节点的方法使其非常灵活，能够将任何东西连接到任何其他东西。

功能尚未测试，但插件确实可以运行

_感谢所有给我的仓库点赞的人！要点赞，请点击下面的图片，它将出现在右上角。谢谢！_

[![Stargazers repo roster for @jdeath/homeassistant-addons](https://reporoster.com/stars/jdeath/homeassistant-addons)](https://github.com/jdeath/homeassistant-addons/stargazers)

## 关于

这个插件使用的是 [docker 镜像](https://github.com/n8n-io/n8n)。

## 安装


1. 将我的 Hass.io 插件仓库 [repository] 添加到你的 Hass.io 实例。
1. 点击 `保存` 按钮来存储你的配置。
1. 启动插件。
1. 插件将会失败，这是正常的
1. 通过 ssh 登录到你的 homeassistant 并运行 `chmod 2777 /addon_configs/2effc9b9_n8n`
1. 重新启动插件
1. 检查插件的日志，看看是否一切正常。
1. 应该可以通过 <你的IP>:端口 打开 WebUI。
1. 设置管理员账户
1. 设置将位于 /addon_configs/2effc9b9_n8n
## 配置

你可以选择让插件使用一个环境文件。注意使用 '/home/node' 作为基本路径，这将映射到 /addon_configs/2effc9b9_n8n 

你需要自己创建这个文件，并使其成为你想要设置的列表，例如：
```
DB_SQLITE_POOL_SIZE=10
N8N_ENFORCE_SETTINGS_FILE_PERMISSIONS=false
```

```
port : 5678 #你想要运行的端口。
```

Webui 可以在 `<你的IP>:端口` 找到。

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
