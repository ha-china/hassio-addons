# Home Assistant 插件：searxng 与 mcp

## 关于

[SearXNG](https://docs.searxng.org/index.html) 是一个免费的互联网元搜索引擎，可以聚合多达 247 个搜索服务的搜索结果。用户既不会被追踪也不会被建立档案。此外，SearXNG 还可以通过 Tor 进行使用以实现在线匿名。

此 Home Assistant 插件改编自 https://github.com/DDanii/HA-Add-ons-by-DDanii/tree/master/searxng

它包括一个轻量级的 MCP 服务器，可以为 llama.cpp（以及任何其他 MCP 兼容客户端）提供通过私有 [SearXNG](https://github.com/searxng/searxng) 实例的网页搜索。

MCP 服务器改编自 https://github.com/jdeath/mcp-searxng-enhanced，以提供快速 MCP IP 端点（使用人工智能进行编辑）。有关 MCP 代码，请参阅 `https://github.com/jdeath/mcp-searxng-enhanced`。

如果您只想使用 SearXNG，请使用 @DDanii 插件。

## 配置

配置您的 SearXNG 端口和您的 MCP 端口

SearXNG 必须在 `addon_configs/2effc9b9_searxng_with_mcp/settings.yml` 文件中进行配置

要使用 MCP 服务器，您必须在 settings.yml 中的格式部分添加 `- json`：
```
formats:
    - html
    - json
```

您通常不需要编辑 `addon_configs/2effc9b9_searxng_with_mcp/ods_config.json` 文件中的 MCP 服务器设置，但您可以。服务器/端口/主机不应被修改。


重启插件

将您的 llama.cpp MCP 服务器指向：http://IP:MCPPORT/mcp 
将 MCP 服务器添加到 claude 代码：`claude mcp add --transport http searxng http://IP:MCPPORT/mcp`

如果您安装了 @Danni Valkey 插件，您可以通过设置 settings.yml 中的 Valkey url 来连接它：
```
  url: valkey://57fef649-valkey:6379/0
```

为了方便，有一个插件配置选项：

```yaml
"set_base_url_for_ingress": true
```

如果启用 set_base_url_for_ingress，它将设置 SEARXNG_BASE_URL 环境变量，这对于 ingress 使用是必需的，并且会覆盖 settings.yml 中的 base_url 变量。

## 自定义

在插件配置文件夹（addon_configs/2effc9b9_searxng_with_mcp）的第一次运行后，将会有一个 custom.sh 文件，您可以在其中添加自己的命令。
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
