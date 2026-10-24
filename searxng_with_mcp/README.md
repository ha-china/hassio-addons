# Home Assistant 添加组件：searxng w/ mcp

## 简介

[SearXNG](https://docs.searxng.org/index.html) 是一个免费的互联网元搜索引擎，它聚合来自多达 247 个搜索服务的结果。用户不会被追踪或档案化。此外，SearXNG 可以通过 Tor 使用以实现在线匿名性。

Home Assistant 添加组件（Addon）改编自 https://github.com/DDanii/HA-Add-ons-by-DDanii/tree/master/searxng，并包含一个轻量级 MCP 服务器，该服务器可通过私有 [SearXNG](https://github.com/searxng/searxng) 实例为 llama.cpp（以及任何兼容 MCP 的客户端）提供网络搜索功能。

MCP 服务器改编自 [https://github.com/jdeath/mcp-searxng-enhanced](https://github.com/jdeath/mcp-searxng-enhanced)（此处用于通过 AI 进行编辑），实现了一个 FastMCP IP 端点，MCP 代码位于 `https://github.com/jdeath/mcp-searxng-enhanced`。

如果您只需要 SearXNG，请使用 @DDanii 的添加组件。

## 配置

配置您的 SearXNG 端口和 MCP 端口。

必须在 `addon_configs/2effc9b9_searxng_with_mcp/settings.yml` 文件中配置 SearXNG。

若要使用 MCP 服务器，必须在 settings.yml 的 formats 部分添加 `- js`（注：原文为 `- json`，此处保留原文逻辑，但通常格式列表中 html 后跟 json 即可）。

```yaml
formats:
    - html
    - json
```

您通常**无需**编辑 `addon_configs/2effc9b9_searxng_with_mcp/ods_config.json` 文件中的 MCP 服务器设置，但也可以编辑。请勿更改 server/ports/host 部分。

重启添加组件。

将您的 llama.cpp MCP 服务器指向：`http://IP:MCPPORT/mcp`。

将 MCP 服务器添加到 Claude Code（claude code）中：`claude mcp add --transport http searxng http://IP:MCPPORT/mcp`

如果您安装了 @Danni Valkey 添加组件，可以通过在 settings.yml 中设置 Valkey URL 来连接它：

```yaml
url: valkey://57fef649-valkey:6379/0
```

为了方便起见，提供了一个添加组件配置选项：

```yaml
"set_base_url_for_ingress": true
```

如果启用了 `set_base_url_for_ingress`，它将设置 `SEARXNG_BASE_URL` 环境变量（用于 ingress 功能时必需），并覆盖 settings.yml 中的 `base_url` 变量。

## 自定义

在添加组件配置目录（addon_configs/2effc9b9_searxng_with_mcp）中首次运行后，该文件夹中将包含一个 `custom.sh` 文件，您可以在其中添加自己的命令。

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
