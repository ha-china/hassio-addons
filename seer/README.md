# Home Assistant 插件: Seer

## 关于

该插件打包了 [Seerr](https://seerr.dev/)，这是一个用于 Jellyfin、Plex 和 Emby 的开源媒体请求和发现管理器。

该插件基于现有的 Overseerr 插件结构，已针对 Seerr 上游项目和容器镜像进行了适配。

已审查的上游仓库：
- Overseerr: https://github.com/sct/overseerr
- Seerr: https://github.com/seerr-team/seerr

## 安装

1. 将此仓库添加到 Home Assistant。
2. 安装 **Seer**。
3. 配置选项，然后启动插件。
4. 在端口 `5055` 上打开 Web 界面。

## 配置

使用 `env_vars` 在需要时传递额外的环境变量。Seer 的配置存储在 `/config` 中。

### 选项

| 选项 | 类型 | 默认值 | 描述 |
|--------|------|---------|-------------|
| `PGID` | int | `0` | 文件权限的组 ID |
| `PUID` | int | `0` | 文件权限的用户 ID |
| `TZ` | str | | 时区（例如 `Europe/London`） |

### 示例

```yaml
env_vars: []
PGID: 0
PUID: 0
TZ: Europe/London
```

## 支持

如果你发现错误，请在此仓库中打开一个 issue。
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
