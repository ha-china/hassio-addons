# Manyfold Home Assistant Add-on

这个插件包装了 `ghcr.io/manyfold3d/manyfold-solo` 用于 Home Assistant OS，并具有持久存储和可配置的主机媒体路径。

文档：[manyfold.app/get-started](https://manyfold.app/get-started/)

## 功能

- 在端口 `3214` 上运行 Manyfold。
- 在 `/config` (`addon_config`) 下持久化应用数据、数据库、缓存和设置。
- 使用 Home Assistant 主机存储上的可配置库路径。
- 如果配置的路径解析到 `/share`、`/media` 或 `/config` 之外，则拒绝启动。
- 无需外部 PostgreSQL 或 Redis。
- 支持 `amd64` 和 `aarch64`。
- 包含基本的 AppArmor 配置文件。

## 默认路径

- 库路径：`/share/manyfold/models`
- 缩略图路径：`/config/thumbnails`

## 安装

1. 在 Home Assistant OS 插件商店中，打开菜单 (`...`) -> `存储库`。
2. 添加此插件存储库根目录的 Git 存储库 URL（存储库包含 `repository.yaml` 和 `manyfold/`）。
3. 刷新插件商店并安装 **Manyfold**。
4. 配置选项（默认值适用于首次运行）：
   - `library_path`: `/share/manyfold/models`
   - `secret_key_base`: 留空以自动生成
   - `puid` / `pgid`: 设置为非根 UID/GID（见下文“修复根警告（PUID/PGID）”）
   - 可选地调整工作线程/上传限制，见下文“小型服务器调优”
5. 启动插件。
6. 打开 `http://<HA_IP>:3214`。

在首次启动前，确保主机上存在库文件夹：

```bash
mkdir -p /share/manyfold/models
```

在 HA 主机上进行本地开发替代方案：

1. 将 `manyfold/` 复制到 `/addons/manyfold`。
2. 在插件商店菜单 (`...`) 中，点击 `检查更新`。
3. 从本地插件安装并运行 **Manyfold**。

## 库/索引工作流程

1. 将 STL/3MF 等文件拖放到主机上的 `/share/manyfold/models`。
2. 在 Manyfold UI 中，配置一个指向相同容器路径的库。
3. 缩略图和索引文件持久化存储在 `/config/thumbnails`。

## 选项

- `secret_key_base`: 应用密钥。当为空时，自动生成并持久化到 `/config/secret_key_base`。
- `puid` / `pgid`: 应用于可写映射目录（`/config` 路径）的所有权。
- `multiuser`: 切换 Manyfold 多用户模式。
- `library_path`: 扫描/索引路径。
- `thumbnails_path`: 持久化缩略图/索引文件（必须在 `/config` 下）。
- `log_level`: `info`、`debug`、`warn`、`error`。
- `web_concurrency`: Puma 工作进程数量。
- `rails_max_threads`: 每个 Puma 工作进程的最大线程数。
- `default_worker_concurrency`: Sidekiq 默认队列并发性。
- `performance_worker_concurrency`: Sidekiq 性能队列并发性。
- `max_file_upload_size`: 最大上传存档大小（字节）。
- `max_file_extract_size`: 最大提取存档大小（字节）。

## 小型服务器调优

对于低内存的 HAOS 主机，从以下配置开始：

```yaml
web_concurrency: 1
rails_max_threads: 5
default_worker_concurrency: 2
performance_worker_concurrency: 1
max_file_upload_size: 268435456
max_file_extract_size: 536870912
```

然后重启插件，并仅在需要时逐渐增加。

## 修复根警告（PUID/PGID）

如果 Manyfold 显示：

`Manyfold 正在以 root 身份运行，存在安全风险。`

在插件的配置选项卡中设置 `puid` 和 `pgid` 为非根 UID/GID。

示例：

```yaml
puid: 1000
pgid: 1000
```

如何在 Home Assistant 中找到正确的值：

1. 打开 **终端 & SSH** 插件（或 SSH 到 HA 主机）。
2. 如果你知道目标 Linux 用户名，运行：

```bash
id <username>
```

使用 `uid=` 值作为 `puid`，`gid=` 值作为 `pgid`。

如果你没有特定的用户名，使用 Manyfold 文件夹的所有者：

```bash
stat -c '%u %g' /share/manyfold/models
```

将 `puid`/`pgid` 设置为这些数字。

更改值后：

1. 保存插件配置。
2. 重启 Manyfold 插件。
3. 检查日志中 `puid:pgid=<uid>:<gid>` 并确认警告已消失。

## 验证行为

- 如果 `library_path` 或 `thumbnails_path` 解析到映射存储根之外，启动失败。
- `thumbnails_path` 必须在 `/config` 下解析以确保持久化。
- 如果 `library_path` 不可读，启动失败。

## 注意事项

- 此基础配置避免了 Home Assistant 入口并保持直接端口访问。
- 如果 `puid`/`pgid` 发生变化，重启插件以重新应用所有权到映射目录。
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
