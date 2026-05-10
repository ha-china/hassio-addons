# Home Assistant 插件：Searxng-mcp-server

一个轻量级的 MCP 服务器，它通过一个私有的 [SearXNG](https://github.com/searxng/searxng) 实例为 llama.cpp（以及任何其他兼容 MCP 的客户端）提供网页搜索功能。

MCP 服务器是从 https://github.com/jdeath/mcp-searxng-enhanced 调整而来，以提供 FastMCP IP 端点（使用 AI 进行了编辑）。独立的 MCP 代码在 https://github.com/jdeath/mcp-searxng-enhanced。

如果您已经有一个 SearXNG 安装，请使用此插件。如果您还没有安装，请使用我的另一个插件，因为它将 MCP 服务器包含在 SearXNG 容器内 `https://github.com/jdeath/homeassistant-addons/tree/main/searxng_with_mcp`。

_感谢所有给我的仓库点星的人！要点星，请点击下面的图片，然后它就会显示在右上角。谢谢！_

[![Stargazers repo roster for @jdeath/homeassistant-addons](https://reporoster.com/stars/jdeath/homeassistant-addons)](https://github.com/jdeath/homeassistant-addons/stargazers)


## 安装


1. 将我的 Hass.io 插件仓库 [repository] 添加到您的 Hass.io 实例中。
1. 设置 SearXNG。我使用了 home assistant 插件：https://github.com/DDanii/HA-Add-ons-by-DDanii
1. 确保在 SearXNG 服务器配置 config.yaml 中允许 json 格式。
1. 在配置选项卡下设置选项。指向您的 SearXNG 实例的 URL。确保以 `/search` 结尾。
1. 启动插件。
1. 检查插件的日志，以查看是否一切顺利。
1. 您不需要编辑 addon_configs/2effc9b9_searxng_mcp_server/ods_config.json 文件中的 MCP 服务器设置，但您可以选择编辑。服务器/端口/主机不应被修改。
1. 将 llama.cpp MCP 服务器指向 http://IP:PORT/mcp。
1. 将 claude 命令行指向：MCP 服务器到 http://IP:PORT/mcp，使用 `claude mcp add --transport http searxng http://IP:PORT/mcp`。
1. 在 claude 代码搜索中：搜索 XXX。
1. 在 llama.cpp 中，搜索应该像正常一样工作。

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
