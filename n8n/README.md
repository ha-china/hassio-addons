# Home assistant 插件：n8n

n8n 是一款可扩展的工作流程自动化工具。凭借其公平的代码分发模式，n8n 始终会提供可见的源代码，可供自行托管，并允许您添加自己的自定义函数、逻辑和应用。n8n 基于节点的实现方式使其具有极高的灵活性，使您能够连接任何事物以服务于任何事物。

功能未经测试，但插件运行正常

_感谢大家为我库点赞！要点赞，请点击下图，然后点击即可。谢谢！_

[![Stargazers repo roster for @jdeath/homeassistant-addons](https://reporoster.com/stars/jdeath/homeassistant-addons)](https://github.com/jdeath/homeassistant-addons/stargazers)

## 关于

此插件使用 [Docker 镜像](https://github.com/n8n-io/n8n)。

## 安装

1. [将我 Hass.io 的附加组件仓库][repository] 添加到您的 Hass.io 实例中。
2. 点击 `保存` 按钮以存储您的配置。
3. 启动附加组件。
4. 附加组件将失败，这是正常的。
5. 通过 ssh 连接到您的 Home Assistant，并运行 `chmod 2777 /addon_configs/2effc9b9_n8n`。
6. 启动附加组件。
7. 检查附加组件的日志，查看一切是否正常运行。
8. WebUI 应可通过 <您的 IP 地址>:端口 访问。
9. 配置管理员账户。
10. 设置将位于 /addon_configs/2effc9b9_n8n。

## 配置

如果您选择，可以将附加组件设置为使用环境变量文件。注意：使用 `/home/node` 作为基础路径，它将映射到 /addon_configs/2effc9b9_n8n。

您需要自己创建该文件，并将其设置为您想要设置的环境变量列表，如下所示：

```
DB_SQLITE_POOL_SIZE=10
N8N_ENFORCE_SETTINGS_FILE_PERMISSIONS=false
```

```
port : 5678 #您想要运行的端口
```

WebUI 可在 `<您的 IP 地址>:端口` 处找到。

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
