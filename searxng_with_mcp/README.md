# Home assistant add-on: searxng w/ mcp


## About

[SearXNG](https://docs.searxng.org/index.html) is a free internet metasearch engine which aggregates results from up to 247 search services. Users are neither tracked nor profiled. Additionally, SearXNG can be used over Tor for online anonymity.

Home Assistant addon adapted from https://github.com/DDanii/HA-Add-ons-by-DDanii/tree/master/searxng

This includes a lightweight MCP server that gives llama.cpp (and any other MCP-compatible client) web search via a private [SearXNG](https://github.com/searxng/searxng) instance. 

MCP server adapted from https://github.com/jdeath/mcp-searxng-enhanced to give an FastMCP IP endpoint (used Ai to edit). For with MCP code at `https://github.com/jdeath/mcp-searxng-enhanced`

If you just want SearXNG use @DDanii addon

## Configuration

Configure your SearXNG port and your MCP Port

SearXNG must be configured in the `addon_configs/2effc9b9_searxng_with_mcp/settings.yml` file

To use the MCP server you must add `- json` the formats section in settings.yml to
```
formats:
    - html
    - json
```

You should **not** need edit the MCP server settings in `addon_configs/2effc9b9_searxng_with_mcp/ods_config.json` file, but you can. The server/ports/host should not be touched.


Restart the addon

Point your llama.cpp MCP server to: http://IP:MCPPORT/mcp 
Add the MCP server to claude code: `claude mcp add --transport http searxng http://IP:MCPPORT/mcp`

If you installed the @Danni Valkey addon you can connect to it by setting the Valkey url in the settings.yml to:
```
  url: valkey://57fef649-valkey:6379/0
```

For convenience there is one addon configuration option:

```yaml
"set_base_url_for_ingress": true
```

If the set_base_url_for_ingress enabled it sets the SEARXNG_BASE_URL environment variable which is needed for ingress usage and it overrides the base_url variable in settings.yml

## Customization

After the first run in the addon config folder (addon_configs/2effc9b9_searxng_with_mcp) there will be a custom.sh file in witch you can add your own commands


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
