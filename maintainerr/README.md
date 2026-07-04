# Home Assistant 插件：Maintainerr

_"看起来和Overseerr很像，但做的是相反的事情。"_

Maintainerr 是一个基于规则的媒体管理工具，适用于您的 Plex、Jellyfin 或 Emby 生态系统。它根据可配置的规则（观看状态、年龄、评分等）创建智能集合，并且可以选择删除未观看的内容，以保持您的媒体库整洁。

## 关于

Maintainerr 集成以下服务：
- **Plex / Jellyfin / Emby** — 媒体服务器
- **Sonarr / Radarr** — 删除媒体文件
- **Overseerr / Jellyseerr** — 重置请求
- **Tautulli** — 用于高级观看统计

## 安装

1. 将存储库添加到 Home Assistant。
2. 安装 **Maintainerr** 插件。
3. 启动插件。
4. 在端口 `6246` 上打开 Web UI。

## 配置

| 选项 | 描述 |
|------|------|
| `TZ` | 时区（例如 `Europe/Paris`）。默认为 `Europe/London`。 |
| `env_vars` | 传递给容器的额外环境变量。 |

### 可用的额外环境变量

| 变量 | 默认 | 描述 |
|------|------|------|
| `UI_PORT` | `6246` | 更改监听端口 |
| `BASE_PATH` | _(空)_ | 在 URL 子路径下提供服务 |

## 数据

持久数据（数据库、配置）存储在 HA 插件配置目录中，并会在插件更新和重新安装后保留。

## 支持

- [Maintainerr 上游项目](https://github.com/maintainerr/maintainerr)
- [插件存储库问题](https://github.com/alexbelgium/hassio-addons/issues)
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
