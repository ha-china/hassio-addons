# 多重 Home Assistant 扩展

此扩展将 `ghcr.io/manyfold3d/manyfold-solo` 包装在 Home Assistant OS 中，并带有持久存储和可配置的主机媒体路径。

文档：[manyfold.app/get-started](https://manyfold.app/get-started/)

## 功能

- 在端口 `3214` 上运行 Manyfold。
- 将应用程序数据、数据库、缓存和设置持久化存储在 `/config` (`addon_config`) 下。
- 使用 Home Assistant 主机存储上的可配置库路径。
- 如果配置的路径解析到 `/share`、`/media` 或 `/config` 之外，则拒绝启动。
- 不需要外部 PostgreSQL 或 Redis。
- 支持 `amd64` 和 `aarch64`。
- 包含一个基线 AppArmor 配置文件。

## 默认路径

- 库路径：`/share/manyfold/models`
- 缩略图路径：`/config/thumbnails`

## 安装

1. 将我的扩展存储库添加到您的 Home Assistant 实例中（在右上角的监督器扩展存储库中，或如果您已配置我的 HA，则单击下面的按钮）：
   ![打开您的 Home Assistant 实例并显示带有特定存储库 URL 预填充的添加扩展存储库对话框](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)(https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2Falexbelgium%2Fhassio-addons)
2. 刷新扩展存储库并安装 **Manyfold**。
3. 配置选项（默认值适用于首次运行）：
   - `library_path`：`/share/manyfold/models`
   - `secret_key_base`：留空以自动生成
   - `puid` / `pgid`：设置为非根 UID/GID（见下文“修复 root 警告 (PUID/PGID)”）
   - 可选地调整“小型服务器调整”下的工作进程/线程和上传限制
4. 启动扩展。
5. 打开 `http://<HA_IP>:3214`。

在首次启动之前，请确保您的库文件夹在主机上存在：

```bash
mkdir -p /share/manyfold/models
```

在 HA 主机上的本地开发替代方案：

1. 将 `manyfold/` 复制到 `/addons/manyfold`。
2. 在扩展存储库菜单（`...`），单击 `Check for updates`。
3. 从本地扩展安装并运行 **Manyfold**。

## Library/index 工作流程

1. 将 STL/3MF 等文件放入主机上的 `/share/manyfold/models`。
2. 在 Manyfold UI 中，配置一个指向同一容器路径的库。
3. 缩略图和索引工件持久化存储在 `/config/thumbnails`。

## 选项

- `secret_key_base`：Rails 用于签名/加密会话和令牌的应用程序密钥。见下文“Secret Key Base”。
- `puid` / `pgid`：应用于可写映射目录（`/config` 路径）的所有权。
- `multiuser`：切换 Manyfold 多用户模式。
- `library_path`：扫描/索引路径。
- `thumbnails_path`：持久化缩略图/索引工件（必须在 `/config` 之下）。
- `log_level`：`info`、`debug`、`warn`、`error`。
- `web_concurrency`：Puma 工作进程数量。
- `rails_max_threads`：每个 Puma 工作进程的线程数。
- `default_worker_concurrency`：Sidekiq 默认队列并发数。
- `performance_worker_concurrency`：Sidekiq 性能队列并发数。
- `max_file_upload_size`：以字节为单位的最大上传归档大小。
- `max_file_extract_size`：以字节为单位的最大提取归档大小。

## 小型服务器调整

对于内存较低的 HAOS 主机，从以下配置开始：

```yaml
web_concurrency: 1
rails_max_threads: 5
default_worker_concurrency: 2
performance_worker_concurrency: 1
max_file_upload_size: 268435456
max_file_extract_size: 536870912
```

然后重启扩展，仅在需要时逐步增加。

## 修复 root 警告（PUID/PGID）

如果 Manyfold 显示：

`Manyfold 正在以 root 用户运行，这是一个安全风险。`

在扩展配置选项卡中将 `puid` 和 `pgid` 设置为非根 UID/GID。

示例：


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
