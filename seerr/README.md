# Home Assistant 附加组件：Seerr

## 关于

此附加组件封装了 [Seerr](https://seerr.dev/)，这是一个为 Jellyfin、Plex 和 Emby 开源的媒体请求和发现管理器。

此附加组件基于现有的 Overseerr 附加组件结构，已适配至 Seerr 上游项目和容器镜像。它支持通过内部 NGINX 反向代理实现 Home Assistant Ingress。

已审查的上游存储库：
- Overseerr: https://github.com/sct/overseerr
- Seerr: https://github.com/seerr-team/seerr

## 安装

1. 将我的附加组件仓库添加到您的 Home Assistant 实例中（在 supervisor 附加组件商店右上角，或如果您已配置了此 HA，则点击下方按钮）。
   [![打开您的 Home Assistant 实例并显示带预填特定存储库 URL 的附加组件仓库对话框。](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2Falexbelgium%2Fhassio-addons)
2. 安装 **Seerr**。
3. 配置选项，然后启动附加组件。
4. 在端口 `5055` 上或通过 Home Assistant Ingress 打开 Web UI。

## 配置

使用 `env_vars` 在需要时传递额外的环境变量。Seerr 配置存储在 `/config` 中。

### 选项

| 选项 | 类型 | 默认值 | 描述 |
|------|------|--------|------|
| `NODE_MEMORY_LIMIT` | int | `512` | Node.js 堆内存的最大值（MB）。如果 Seerr 因大型库而崩溃，请增加此值；对于内存受限的系统，请减小此值。 |
| `PGID` | int | `0` | 文件权限的组 ID |
| `PUID` | int | `0` | 文件权限的用户 ID |
| `TZ` | str | | 时区（例如 `Europe/London`） |

### 示例

```yaml
NODE_MEMORY_LIMIT: 512
env_vars: []
PGID: 0
PUID: 0
TZ: Europe/London
```

## 迁移

### 从 Overseerr

Seerr 兼容 Overseerr 的数据格式。要迁移现有配置：

1. 停止 **Overseerr** 附加组件。
2. 安装并启动一次 **Seerr** 附加组件以创建其配置目录（`/app_configs/db21ed7f_seerr/`），然后停止它。
3. 打开 **[Filebrowser](https://github.com/alexbelgium/hassio-addons/tree/master/filebrowser)** 附加组件（或任何可访问 `/app_configs/` 的文件管理器）。
4. 导航至 `/app_configs/db21ed7f_overseerr/` 并将所有文件复制到 `/app_configs/db21ed7f_seerr/`。
5. 启动 **Seerr** 附加组件。您的现有设置、用户和请求将被保留。

---

### 从 Jellyseerr

Seerr 兼容 Jellyseerr 的数据格式。要迁移现有配置：

1. 停止 **Jellyseerr** 附加组件。
2. 安装并启动一次 **Seerr** 附加组件以创建其配置目录（`/app_configs/db21ed7f_seerr/`），然后停止它。
3. 打开 **[Filebrowser](https://github.com/alexbelgium/hassio-addons/tree/master/filebrowser)** 附加组件（或任何可访问 `/app_configs/` 的文件管理器）。
4. 导航至 `/app_configs/db21ed7f_jellyseerr/` 并将所有文件复制到 `/app_configs/db21ed7f_seerr/`。
5. 启动 **Seerr** 附加组件。您的现有设置、用户和请求将被保留。

---

### 从 Ombi

Ombi 使用不同的数据格式，且没有通往 Seerr 的自动化迁移路径。您需要从头开始配置 Seerr：

1. 记录您的 Ombi 配置（媒体服务器、用户、通知设置等）。
2. 停止 **Ombi** 附加组件。
3. 安装并启动 **Seerr** 附加组件。
4. 使用 Seerr 的 Web UI 重新连接您的媒体服务器并根据需要重新配置偏好设置。

---

## 支持

如果发现 bug，请在此存储库中打开一个问题。

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
