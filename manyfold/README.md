# Manyfold Home Assistant 插件

此插件封装了 `ghcr.io/manyfold3d/manyfold-solo` 以适用于 Home Assistant OS，并提供了持久存储和可配置的主机媒体路径。

文档：[manyfold.app/get-started](https://manyfold.app/get-started/)

## 功能

- 在端口 `3214` 上运行 Manyfold。
- 将应用数据、数据库、缓存和设置持久存储在 `/config` (`addon_config`) 下。
- 使用 Home Assistant 主机存储上的可配置库路径。
- 如果配置路径解析到 `/share`、`/media` 或 `/config` 之外，则拒绝启动。
- 不需要外部 PostgreSQL 或 Redis。
- 支持 `amd64` 和 `aarch64`。
- 包含基准 AppArmor 配置文件。

## 默认路径

- 库路径：`/share/manyfold/models`
- 缩略图路径：`/config/thumbnails`

## 安装

1. 将我的插件仓库添加到您的 Home Assistant 实例中（在管理员的插件商店顶部右侧，或如果您已配置我的 HA，请点击下面的按钮）：
   ![打开您的 Home Assistant 实例并显示带有特定仓库 URL 预填充的添加插件仓库对话框](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)(https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2Falexbelgium%2Fhassio-addons)
2. 刷新插件商店并安装 **Manyfold**。
3. 配置选项（默认值适用于首次运行）：
   - `library_path`：`/share/manyfold/models`
   - `secret_key_base`：留空以自动生成
   - `puid` / `pgid`：设置为非根 UID/GID（见下文“修复 root 警告 (PUID/PGID)”）
   - 可选地在下方的“小型服务器调整”中调整工作进程/线程和上传限制
4. 启动插件。
5. 打开 `http://<HA_IP>:3214`。

首次启动前，请确保主机上的库文件夹存在：

```bash
mkdir -p /share/manyfold/models
```

在 HA 主机上的本地开发替代方案：

1. 将 `manyfold/` 复制到 `/addons/manyfold`。
2. 在插件商店菜单（`...`），点击“检查更新”。
3. 从本地插件安装并运行 **Manyfold**。

## Library/index 工作流程

1. 将 STL/3MF 等文件放入主机上的 `/share/manyfold/models`。
2. 在 Manyfold UI 中，配置一个指向相同容器路径的库。
3. 缩略图和索引工件持久存储在 `/config/thumbnails`。

## 选项

- `secret_key_base`：Rails 用于签名/加密会话和令牌的应用密钥。见下文“密钥基础”。
- `puid` / `pgid`：应用于可写映射目录（`/config` 路径）的所有权。
- `multiuser`：切换 Manyfold 多用户模式。
- `library_path`：扫描/索引路径。
- `thumbnails_path`：持久缩略图/索引工件（必须在 `/config` 下）。
- `log_level`：`info`、`debug`、`warn`、`error`。
- `web_concurrency`：Puma 工作进程计数。
- `rails_max_threads`：每个 Puma 工作进程的线程数。
- `default_worker_concurrency`：Sidekiq 默认队列并发数。
- `performance_worker_concurrency`：Sidekiq 性能队列并发数。
- `max_file_upload_size`：最大上传存档大小（以字节为单位）。
- `max_file_extract_size`：最大提取存档大小（以字节为单位）。

### Raspberry Pi（单用户）示例

对于运行单个用户 Manyfold 实例且库大小适中的 Raspberry Pi 4 或 Pi 5：

```yaml
puid: 1000
pgid: 1000
multiuser: false
library_path: /share/manyfold/models
thumbnails_path: /config/thumbnails
log_level: info
web_concurrency: 1
rails_max_threads: 4
default_worker_concurrency: 1
performance_worker_concurrency: 1
max_file_upload_size: 134217728
max_file_extract_size: 268435456
```

**理由：**
- `web_concurrency: 1` — 单个 Puma 工作进程（一个进程）节省 Pi 的 RAM。
- `rails_max_threads: 4` — 每个工作进程四个线程对于单用户浏览来说是足够的。
- `default_worker_concurrency: 1` — 序列后台作业处理（索引、缩略图生成）。
- `performance_worker_concurrency: 1` — 单个性能工作进程以避免 STL 处理期间的 CPU 摧毁。
- `multiuser: false` — 禁用身份验证/多用户功能以供个人使用。
- `max_file_upload_size: 128 MB` — 对 Pi 存储和网络来说是一个合理的限制。
- `max_file_extract_size: 256 MB` — 提取的存档保持可管理。

## 修复 root 警告（PUID/PGID）

如果 Manyfold 显示：

`Manyfold 正以 root 身份运行，这是一个安全风险。`

在插件的配置标签页中将 `puid` 和 `pgid` 设置为非根 UID/GID。

示例：

```yaml
puid: 1000
pgid: 1000
```

如何在 Home Assistant 中找到正确的值：

1. 打开 **终端 & SSH** 插件（或通过 SSH 连接到 HA 主机）。
2. 如果您知道目标 Linux 用户名，请运行：

```bash
id <username>
```

使用 `uid=` 值作为 `puid`，使用 `gid=` 值作为 `pgid`。

如果您没有特定的用户名，请使用 Manyfold 文件夹的所有者：

```bash
stat -c '%u %g' /share/manyfold/models
```

将 `puid`/`pgid` 设置为这些数字。

更改值后：

1. 保存插件配置。
2. 重新启动 Manyfold 插件。
3. 检查日志以确认 `puid:pgid=<uid>:<gid>` 警告已消失。

## 验证行为

- 如果 `library_path` 或 `thumbnails_path` 解析到映射存储根之外，则启动失败。
- `thumbnails_path` 必须解析到 `/config` 以保证持久性。
- 如果 `library_path` 不可读，则启动失败。

## 密钥基础

`secret_key_base` 是 Rails 所需的密钥，用于签名和加密用户会话和令牌。更改它将使所有活动会话无效，并使所有人注销。

**工作原理：**

| 场景 | 行为 |
|------|------|
| **新安装**，选项留空 | 自动生成随机密钥并保存到 `/config/secret_key_base` |
| **插件更新**，选项仍留空 | 之前保存的 `/config/secret_key_base` 被重用 — 无数据丢失 |
| **手动设置选项** | 使用插件选项中的值并保存到 `/config/secret_key_base` |
| **选项设置后，在更新时清除** | 生成新的密钥 — **会话将被无效化** |

**建议：** 在首次安装时留空 `secret_key_base`，之后永远不要更改它。自动生成的值在 `/config/secret_key_base` 中持久存在，包含在 Home Assistant 备份中。

## 从先前的安装迁移

如果您正在重新安装此插件或从另一个 Manyfold 插件（例如不同的 slug/repository）迁移，您的数据存储在 HA 主机上的先前插件的配置目录中。要迁移而不丢失数据：

1. 通过 SSH 连接到您的 Home Assistant 主机。
2. 将数据库和密钥复制到新的插件配置目录：

```bash
cp /addon_configs/<old_slug>/manyfold.sqlite3 /addon_configs/<new_slug>/manyfold.sqlite3
cp /addon_configs/<old_slug>/secret_key_base /addon_configs/<new_slug>/secret_key_base
chown 1000:1000 /addon_configs/<new_slug>/manyfold.sqlite3 /addon_configs/<new_slug>/secret_key_base
chown 1000:1000 /addon_configs/<new_slug>/
chmod 600 /addon_configs/<new_slug>/secret_key_base
```

将 `<old_slug>` 和 `<new_slug>` 替换为实际的目录名称（例如 `db21ed7f_manyfold` 和 `088d77ac_manyfold_solo`）。使用 `ls /addon_configs/` 列出它们。

3. 启动新的插件 — 它将自动获取现有的数据库和密钥。

## 注意事项

- 此基准避免 Home Assistant 入口并保持直接端口访问。
- 如果 `puid`/`pgid` 发生更改，请重新启动插件以重新应用映射目录的所有权。
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
