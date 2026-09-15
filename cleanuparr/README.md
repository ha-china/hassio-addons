# Home Assistant 插件：Cleanuparr

佳华（*arr）应用的停滞、停滞和未期望的下载，以及下载客户端（qBittorrent, Deluge, Transmission, NZBGet, SABnzbd）。

## 关于

Cleanuparr 监控您的下载队列，并应用可配置规则以：
- 移除停滞或停滞的下载
- 清理未期望的文件
- 通过 Apprise 推送通知（Discord, Telegram, Slack, 电子邮件及 60 多项功能）

支持的功能：
- **佳华（*arr）**：Sonarr, Radarr, Lidarr, Readarr, Whisparr
- **下载客户端**：qBittorrent, Deluge, Transmission, NZBGet, SABnzbd

## 安装

1. 将存储库添加到 Home Assistant。
2. 安装 **Cleanuparr** 插件。
3. 启动插件。
4. 在端口 `11011` 上打开 Web 界面。

## 配置

| 选项 | 描述 |
|--------|-------------|
| `TZ` | 时区（例如 `Europe/Paris`）。默认为 `Europe/London`。 |
| `PUID` | 以该用户 ID 运行的进程。默认为 `0`（root）。 |
| `PGID` | 以该组 ID 运行的进程。默认为 `0`（root）。 |
| `env_vars` | 传递给容器的额外环境变量。 |

## 数据

持久化配置存储在 Home Assistant 附加组件配置目录中，并保留在附加组件更新和重新安装之后。

## 支持

- [Cleanuparr 上游项目](https://github.com/Cleanuparr/Cleanuparr)
- [附加组件存储库问题](https://github.com/alexbelgium/hassio-addons/issues)

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
