# Home Assistant 附加组件：Seerr

## 简介

此附加组件打包了 [Seerr](https://seerr.dev/)，这是一个开源的 Jellyfin、Plex 和 Emby 媒体请求和发现管理器。

此附加组件基于现有的 Overseerr 附加组件结构构建，已适配 Seerr 上游项目和容器镜像。它支持通过内部 NGINX 反向代理实现 Home Assistant Ingress 功能。

已审查的上游存储库：
- Overseerr: https://github.com/sct/overseerr
- Seerr: https://github.com/seerr-team/seerr

## 安装

1. 将我的附加组件存储库添加到您的 Home Assistant 实例中（在 supervisor 附加组件商店的右上角，或者如果您已配置了我的 HA，则点击下方按钮）
   [![打开 Home Assistant 实例并显示预填充特定存储库 URL 的附加组件存储库对话框。](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2Falexbelgium%2Fhassio-addons)
2. 安装 **Seerr**。
3. 配置选项，然后启动附加组件。
4. 在端口 `5055` 或通过 Home Assistant Ingress 打开 Web 界面。

## 配置

当需要时，使用 `env_vars` 传递额外的环境变量。Seerr 配置存储在 `/config` 中。

### 选项

| 选项 | 类型 | 默认值 | 描述 |
|------|------|--------|------|
| `NODE_MEMORY_LIMIT` | int | `512` | Node.js 堆内存的最大值（MB）。如果 Seerr 因处理大型库而崩溃，请增加此值；在内存受限的系统上请减小此值。 |
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

Seerr 兼容 Overseerr 的数据格式。要将现有配置迁移过来：

1. 停止 **Overseerr** 附加组件。
2. 安装并启动 **Seerr** 附加组件一次以创建其配置目录（`/app_configs/db21ed7f_seerr/`），然后停止它。
3. 打开 **[Filebrowser](https://github.com/alexbelgium/hassio-addons/tree/master/filebrowser)** 附加组件（或任何能够访问 `/app_configs/` 的文件管理工具）。
4. 导航至 `/app_configs/db21ed7f_overseerr/` 并将所有文件复制到 `/app_configs/db21ed7f_seerr/`。
5. 启动 **Seerr** 附加组件。您的现有设置、用户和请求将被保留。

---

### 从 Jellyseerr

Seerr 兼容 Jellyseerr 的数据格式。要将现有配置迁移过来：

1. 停止 **Jellyseerr** 附加组件。
2. 安装并启动 **Seerr** 附加组件一次以创建其配置目录（`/app_configs/db21ed7f_seerr/`），然后停止它。
3. 打开 **[Filebrowser](https://github.com/alexbelgium/hassio-addons/tree/master/filebrowser)** 附加组件（或任何能够访问 `/app_configs/` 的文件管理工具）。
4. 导航至 `/app_configs/db21ed7f_jellyseerr/` 并将所有文件复制到 `/app_configs/db21ed7f_seerr/`。
5. 启动 **Seerr** 附加组件。您的现有设置、用户和请求将被保留。

---

### 从 Ombi

Ombi 使用不同的数据格式，且不存在自动化的到 Seerr 的迁移路径。您将需要从零配置 Seerr：

1. 记录您的 Ombi 配置（媒体服务器、用户、通知设置等）。
2. 停止 **Ombi** 附加组件。
3. 安装并启动 **Seerr** 附加组件。
4. 使用 Seerr 的 Web UI 重新连接您的媒体服务器（或多个），并重新配置您的偏好设置。

---

## 支持

如果您发现任何错误，请在此存储库中打开问题。

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
