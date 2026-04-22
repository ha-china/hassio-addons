# Home Assistant 扩展：Seerr

## 关于

此扩展包包含了 [Seerr](https://seerr.dev/)，一个开源的媒体请求和发现管理器，适用于 Jellyfin、Plex 和 Emby。

此扩展基于现有的 Overseerr 扩展结构，针对 Seerr 上游项目和容器镜像进行了适配。它通过内部 NGINX 反向代理支持 Home Assistant Ingress。

已审查的上游仓库：
- Overseerr: https://github.com/sct/overseerr
- Seerr: https://github.com/seerr-team/seerr

## 安装

1. 将我的扩展仓库添加到您的 Home Assistant 实例中（在右上角的监督器扩展存储中，或如果您已配置我的 HA，则点击下面的按钮）。
   ![打开您的 Home Assistant 实例并显示带有特定仓库 URL 预填充的添加扩展仓库对话框](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)(https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2Falexbelgium%2Fhassio-addons)
2. 安装 **Seerr**。
3. 配置选项，然后启动扩展。
4. 在端口 `5055` 或通过 Home Assistant Ingress 打开 Web UI。

## 配置

使用 `env_vars` 在需要时传递额外的环境变量。Seerr 配置存储在 `/config` 中。

### 选项

| 选项 | 类型 | 默认值 | 描述 |
|------|------|--------|------|
| `NODE_MEMORY_LIMIT` | int | `512` | Node.js 堆内存的最大值（以 MB 为单位）。如果 Seerr 因大型库而崩溃，则增加；在内存受限的系统上减少。 |
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

Seerr 与 Overseerr 的数据格式兼容。要迁移现有配置：

1. 停止 **Overseerr** 扩展。
2. 安装并启动 **Seerr** 扩展一次以创建其配置目录（`/addon_configs/db21ed7f_seerr/`），然后停止它。
3. 打开 **[文件浏览器](https://github.com/alexbelgium/hassio-addons/tree/master/filebrowser)** 扩展（或任何可以访问 `/addon_configs/` 的文件管理器）。
4. 导航到 `/addon_configs/db21ed7f_overseerr/` 并将所有文件复制到 `/addon_configs/db21ed7f_seerr/`。
5. 启动 **Seerr** 扩展。您的现有设置、用户和请求将被保留。

---

### 从 Jellyseerr 迁移

Seerr 与 Jellyseerr 的数据格式兼容。要迁移现有配置：

1. 停止 **Jellyseerr** 扩展。
2. 安装并启动 **Seerr** 扩展一次以创建其配置目录（`/addon_configs/db21ed7f_seerr/`），然后停止它。
3. 打开 **[文件浏览器](https://github.com/alexbelgium/hassio-addons/tree/master/filebrowser)** 扩展（或任何可以访问 `/addon_configs/` 的文件管理器）。
4. 导航到 `/addon_configs/db21ed7f_jellyseerr/` 并将所有文件复制到 `/addon_configs/db21ed7f_seerr/`。
5. 启动 **Seerr** 扩展。您的现有设置、用户和请求将被保留。

---

### 从 Ombi 迁移

Ombi 使用不同的数据格式，没有自动迁移路径到 Seerr。您需要从头配置 Seerr：

1. 记录您的 Ombi 配置（媒体服务器、用户、通知设置等）。
2. 停止 **Ombi** 扩展。
3. 安装并启动 **Seerr** 扩展。
4. 使用 Seerr Web UI 重新连接您的媒体服务器并重新配置您的首选项。

---

## 支持

如果您发现了一个错误，请在此存储库中打开一个 issue。
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
