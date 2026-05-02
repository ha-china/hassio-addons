# Home assistant 插件：Searxng-mcp-server

一个轻量级的 MCP 服务器，为 llama.cpp（以及任何其他 MCP 兼容客户端）提供通过私有 [SearXNG](https://github.com/searxng/searxng) 实例的网页搜索。使用 `/mcp` 端点上的 **streamable-HTTP** 传输。

从 https://github.com/The-AI-Workshops/searxng-mcp-server 转换而来，使用 Claude

_感谢所有为我仓库点星的人！要点星，请点击下面的图片，然后它将出现在右上角。谢谢！_

[![Stargazers repo roster for @jdeath/homeassistant-addons](https://reporoster.com/stars/jdeath/homeassistant-addons)](https://github.com/jdeath/homeassistant-addons/stargazers)


## 安装


1. 将我的 Hass.io 插件仓库 [repository] 添加到您的 Hass.io 实例中。
1. 设置 SearXNG。我使用了 home assistant 插件：https://github.com/DDanii/HA-Add-ons-by-DDanii
1. 确保在 SearXNG 的 config.yaml 设置中允许 json
1. 在配置选项卡下设置选项。指向您的 SearXNG 实例的 URL
1. 启动插件。
1. 检查插件的日志，以查看一切是否顺利。
1. 将 llama.cpp MCP 服务器指向 http://IP:PORT/mcp 
1. 将 claude 命令行指向：MCP 服务器到 http://IP:PORT/mcp，使用 `claude mcp add --transport http searxng http://IP:PORT/mcp`
1. 在 claude 代码搜索中使用：searxng search for XXX
1. 在 llama.cpp 中，搜索应该像正常一样工作


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
