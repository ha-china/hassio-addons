# Home Assistant add-on: Seerr

## About

This add-on packages [Seerr](https://seerr.dev/), an open-source media request and discovery manager for Jellyfin, Plex, and Emby.

This add-on is based on the existing Overseerr add-on structure, adapted for the Seerr upstream project and container image. It supports Home Assistant Ingress via an internal NGINX reverse proxy.

Upstream repositories reviewed:
- Overseerr: https://github.com/sct/overseerr
- Seerr: https://github.com/seerr-team/seerr

## Installation

1. Add this repository to Home Assistant.
2. Install **Seerr**.
3. Configure options, then start the add-on.
4. Open the Web UI on port `5055` or via Home Assistant Ingress.

## Configuration

Use `env_vars` to pass extra environment variables when needed. Seerr configuration is stored in `/config`.

### Options

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `PGID` | int | `0` | Group ID for file permissions |
| `PUID` | int | `0` | User ID for file permissions |
| `TZ` | str | | Timezone (e.g. `Europe/London`) |

### Example

```yaml
env_vars: []
PGID: 0
PUID: 0
TZ: Europe/London
```

## Support

If you find a bug, open an issue in this repository.

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
