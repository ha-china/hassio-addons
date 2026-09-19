# Home Assistant 附加组件：Seerr

## 简介

此附加组件封装了 [Seerr](https://seerr.dev/)，它是 Jellyfin、Plex 和 Emby 的开源媒体请求和发现管理器。

此附加组件基于现有的 Overseerr 附加组件结构，已适配 Seerr 上游项目和容器镜像。它支持通过内部 NGINX 反向代理实现 Home Assistant 入口管理 (Ingress)。

已审查的上游仓库：
- Overseerr: https://github.com/sct/overseerr
- Seerr: https://github.com/seerr-team/seerr

## 安装

1. 将我的附加组件仓库添加到您的 Home Assistant 实例中（在 supervisor 附加组件商店右上角，或如果您已配置我的 HA，请单击下方按钮）
   ![打开您的 Home Assistant 实例并显示带有特定仓库 URL 预填充的“添加附加组件仓库”对话框。](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)
2. 安装 **Seerr**。
3. 配置选项，然后启动附加组件。
4. 通过端口 `5055` 或 Home Assistant 入口管理打开 Web UI。

## 配置

必要时使用 `env_vars` 传递额外的环境变量。Seerr 配置存储在 `/config` 目录中。

### 选项

| 选项 | 类型 | 默认值 | 描述 |
|------|------|--------|------|
| `NODE_MEMORY_LIMIT` | int | `512` | Node.js 堆内存的最大值（MB）。如果 Seerr 因大型库而崩溃，请增加；在内存受限的系统上请减少。 |
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

### 从 Overseerr 迁移

Seerr 兼容 Overseerr 的数据格式。若要迁移现有配置：

1. 停止 **Overseerr** 附加组件。
2. 安装并启动 **Seerr** 附加组件一次以创建其配置目录（`/addon_configs/db21ed7f_seerr/`），然后停止它。
3. 打开 **[Filebrowser](https://github.com/alexbelgium/hassio-addons/tree/master/filebrowser)** 附加组件（或任何可访问 `/addon_configs/` 的文件管理器）。
4. 导航到 `/addon_configs/db21ed7f_overseerr/` 并将所有文件复制到 `/addon_configs/db21ed7f_seerr/`。
5. 启动 **Seerr** 附加组件。您的现有设置、用户和请求将被保留。

---

### 从 Jellyseerr 迁移

Seerr 兼容 Jellyseerr 的数据格式。若要迁移现有配置：

1. 停止 **Jellyseerr** 附加组件。
2. 安装并启动 **Seerr** 附加组件一次以创建其配置目录（`/addon_configs/db21ed7f_seerr/`），然后停止它。
3. 打开 **[Filebrowser](https://github.com/alexbelgium/hassio-addons/tree/master/filebrowser)** 附加组件（或任何可访问 `/addon_configs/` 的文件管理器）。
4. 导航到 `/addon_configs/db21ed7f_jellyseerr/` 并将所有文件复制到 `/addon_configs/db21ed7f_seerr/`。
5. 启动 **Seerr** 附加组件。您的现有设置、用户和请求将被保留。

---

### 从 Ombi 迁移

Ombi 使用不同的数据格式，且没有到 Seerr 的自动化迁移路径。您将需要从头配置 Seerr：

1. 记录 Ombi 的配置（媒体服务器、用户、通知设置等）。
2. 停止 **Ombi** 附加组件。
3. 安装并启动 **Seerr** 附加组件。
4. 使用 Seerr Web UI 重新连接您的媒体服务器并重新配置偏好设置。

---

## 支持

如果您发现错误，请在本仓库中打开问题。

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
