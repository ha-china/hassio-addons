# Home Assistant 扩展：Cleanuparr

自动从您的 \*arr 应用程序（Sonarr、Radarr、Lidarr、Readarr、Whisparr）和下载客户端（qBittorrent、Deluge、Transmission、NZBGet、SABnzbd）中删除卡住、停滞和不想要的下载。

## 关于

Cleanuparr 监控您的下载队列，并应用可配置的规则：
- 删除停滞或卡住的下载
- 清理不需要的文件
- 通过 Apprise（Discord、Telegram、Slack、电子邮件等60多种）通知

支持的集成：
- **\*arr**：Sonarr、Radarr、Lidarr、Readarr、Whisparr
- **下载客户端**：qBittorrent、Deluge、Transmission、NZBGet、SABnzbd

## 安装

1. 将仓库添加到 Home Assistant。
2. 安装 **Cleanuparr** 扩展。
3. 启动扩展。
4. 在端口 `11011` 上打开 Web UI。

## 配置

| 选项 | 描述 |
|------|------|
| `TZ` | 时区（例如 `Europe/Paris`）。默认为 `Europe/London`。 |
| `PUID` | 以该用户 ID 运行进程。默认为 `0`（root）。 |
| `PGID` | 以该组 ID 运行进程。默认为 `0`（root）。 |
| `env_vars` | 传递给容器的额外环境变量。 |

## 数据

持久性配置存储在 HA 扩展配置目录中，并在扩展更新和重新安装后持续存在。

## 支持

- [Cleanuparr 上游项目](https://github.com/Cleanuparr/Cleanuparr)
- [扩展仓库问题](https://github.com/alexbelgium/hassio-addons/issues)
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
