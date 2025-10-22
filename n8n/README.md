# Home assistant add-on: n8n

n8n 是一个可扩展的工作流自动化工具。通过公平的代码分发模式，n8n 将始终有可见的源代码，可以自行托管，并允许您添加自己的自定义函数、逻辑和应用程序。n8n 的基于节点的方法使其具有高度的多功能性，使您能够将任何东西连接到任何地方。

功能尚未测试，但插件确实可以运行

_感谢所有给我的仓库添加星标的人！要添加星标，请点击下面的图片，它将在右上角显示。谢谢！_

[![Stargazers repo roster for @jdeath/homeassistant-addons](https://reporoster.com/stars/jdeath/homeassistant-addons)](https://github.com/jdeath/homeassistant-addons/stargazers)

## 关于

这个插件使用的是 [docker 镜像](https://github.com/n8n-io/n8n)。

## 安装


1. [将我的 Hass.io 插件仓库][repository] 添加到您的 Hass.io 实例。
1. 点击 `保存` 按钮来存储您的配置。
1. 启动插件。
1. 插件会失败，这是正常的
1. 通过 ssh 进入您的 homeassistant 并运行 `chmod 2777 /addon_configs/2effc9b9_n8n`
1. 重新启动插件
1. 检查插件的日志以查看是否一切正常。
1. 应该可以通过 <your-ip>:port 打开 WebUI。
1. 设置管理员账户
1. 设置将在 /addon_configs/2effc9b9_n8n 中

## 配置

如果您选择使用环境文件，可以设置插件。注意使用 '/home/node' 作为基本路径，这将映射到 /addon_configs/2effc9b9_n8n 

您需要自己创建文件，并使其成为您想要设置的路径列表，例如：
```
DB_SQLITE_POOL_SIZE=10
N8N_ENFORCE_SETTINGS_FILE_PERMISSIONS=false
```

```
port : 5678 #您想要运行的端口。
```

Webui 可以在 `<your-ip>:port` 找到。

[repository]: https://github.com/jdeath/homeassistant-addons