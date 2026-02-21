# Home Assistant 插件：Seerr

## 关于

此插件打包了 [Seerr](https://seerr.dev/)，一个用于 Jellyfin、Plex 和 Emby 的开源媒体请求和发现管理器。

此插件基于现有的 Overseerr 插件结构，针对 Seerr 上游项目和容器镜像进行了适配。它通过内部 NGINX 反向代理支持 Home Assistant Ingress。

上游仓库已审核：
- Overseerr: https://github.com/sct/overseerr
- Seerr: https://github.com/seerr-team/seerr

## 安装

1. 将此仓库添加到 Home Assistant。
2. 安装 **Seerr**。
3. 配置选项，然后启动插件。
4. 在端口 `5055` 上打开 Web UI 或通过 Home Assistant Ingress。

## 配置

使用 `env_vars` 在需要时传递额外的环境变量。Seerr 配置存储在 `/config`。

### 选项

| 选项 | 类型 | 默认值 | 描述 |
|------|------|--------|------|
| `PGID` | 整数 | `0` | 文件权限的组 ID |
| `PUID` | 整数 | `0` | 文件权限的用户 ID |
| `TZ` | 字符串 | | 时区（例如 `Europe/London`） |

### 示例

```yaml
env_vars: []
PGID: 0
PUID: 0
TZ: Europe/London
```

## 迁移

### 从 Overseerr

Seerr 与 Overseerr 的数据格式兼容。要迁移现有配置：

1. 停止 **Overseerr** 插件。
2. 安装并启动 **Seerr** 插件一次以创建其配置目录（`/addon_configs/db21ed7f_seerr/`），然后停止它。
3. 打开 **[Filebrowser](https://github.com/alexbelgium/hassio-addons/tree/master/filebrowser)** 插件（或任何可以访问 `/addon_configs/` 的文件管理器）。
4. 导航到 `/addon_configs/db21ed7f_overseerr/` 并将所有文件复制到 `/addon_configs/db21ed7f_seerr/`。
5. 启动 **Seerr** 插件。您的现有设置、用户和请求将被保留。

---

### 从 Jellyseerr

Seerr 与 Jellyseerr 的数据格式兼容。要迁移现有配置：

1. 停止 **Jellyseerr** 插件。
2. 安装并启动 **Seerr** 插件一次以创建其配置目录（`/addon_configs/db21ed7f_seerr/`），然后停止它。
3. 打开 **[Filebrowser](https://github.com/alexbelgium/hassio-addons/tree/master/filebrowser)** 插件（或任何可以访问 `/addon_configs/` 的文件管理器）。
4. 导航到 `/addon_configs/db21ed7f_jellyseerr/` 并将所有文件复制到 `/addon_configs/db21ed7f_seerr/`。
5. 启动 **Seerr** 插件。您的现有设置、用户和请求将被保留。

---

### 从 Ombi

Ombi 使用不同的数据格式，并且没有到 Seerr 的自动迁移路径。您需要从零开始配置 Seerr：

1. 记下您的 Ombi 配置（媒体服务器、用户、通知设置等）。
2. 停止 **Ombi** 插件。
3. 安装并启动 **Seerr** 插件。
4. 使用 Seerr 的 Web UI 重新连接您的媒体服务器并重新配置您的偏好设置。

---

## 支持

如果您发现一个错误，请在该仓库中打开一个问题。
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
