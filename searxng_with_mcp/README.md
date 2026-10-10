# Home Assistant 插件：包含 mcp 的 searxng

## 关于

[SearXNG](https://docs.searxng.org/index.html) 是一个免费的互联网元搜索引擎，它聚合了多达 247 个搜索引擎的结果。用户既不会遭受跟踪也不会被画像。此外，SearXNG 还可以用于 Tor 以实现在线匿名性。

本 Home Assistant 插件改编自 https://github.com/DDanii/HA-Add-ons-by-DDanii/tree/master/searxng

本插件包含一个轻量级的 MCP 服务器，它可以通过私有的 [SearXNG](https://github.com/searxng/searxng) 实例为 llama.cpp（以及其他任何兼容 MCP 的客户）提供网络搜索功能。

MCP 服务器改编自 https://github.com/jdeath/mcp-searxng-enhanced，用于提供 FastMCP IP 端点（已用于 AI 编辑）。MCP 代码位于 https://github.com/jdeath/mcp-searxng-enhanced

如果您只是想使用 SearXNG，请使用 @DDanii 的插件。

## 配置

配置您的 SearXNG 端口和 MCP 端口。

SearXNG 必须配置在 `addon_configs/2effc9b9_searxng_with_mcp/settings.yml` 文件中。

要使用 MCP 服务器，您需要在 `settings.yml` 的 `formats` 部分中添加 `- json`：

```yaml
formats:
    - html
    - json
```

您通常**不需要**修改 `addon_configs/2effc9b9_searxng_with_mcp/ods_config.json` 文件中的 MCP 服务器设置，但可以。请不要修改 server/ports/host 配置。

重启插件。

将您的 llama.cpp MCP 服务器指向：http://IP:MCPPORT/mcp  
在 claude code 中添加 MCP 服务器：`claude mcp add --transport http searxng http://IP:MCPPORT/mcp`

如果您安装了 @Danni Valkey 插件，可以通过在 `settings.yml` 中设置 Valkey 地址将其连接：

```yaml
  url: valkey://57fef649-valkey:6379/0
```

为了便利，提供了一个插件配置选项：

```yaml
"set_base_url_for_ingress": true
```

如果启用了 `set_base_url_for_ingress`，它会将 `SEARXNG_BASE_URL` 环境变量设置为必需的 ingress 使用值，并覆盖 `settings.yml` 中的 `base_url` 变量。

## 自定义

在插件首次运行后的配置文件夹（addon_configs/2effc9b9_searxng_with_mcp）中，将有一个 `custom.sh` 文件，您可以在其中添加自己的命令。

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
