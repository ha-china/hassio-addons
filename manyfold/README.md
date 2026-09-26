# Manyfold Home Assistant 插件

该插件为 Home Assistant OS 提供了一个封装，使用 `ghcr.io/manyfold3d/manyfold-solo` 作为基础，并支持持久化存储和可配置的、基于主机的媒体路径。

文档：[manyfold.app/get-started](https://manyfold.app/get-started/)

## 功能特性

- 在端口 `3214` 上运行 Manyfold。
- 将应用数据、数据库、缓存和配置保存在 `/config` (`app_config`) 下。
- 使用 Home Assistant 主机存储上可配置的库路径。
- 如果配置的路径解析结果不在 `/share`、`/media` 或 `/config` 内，则拒绝启动。
- 不需要外部 PostgreSQL 或 Redis。
- 支持 `amd64` 和 `aarch64` 架构。
- 包含基础的 AppArmor 配置文件。

## 默认路径

- 库路径：`/share/manyfold/models`
- 缩略图路径：`/config/thumbnails`

## 安装

1. 将我的插件仓库添加到您的 Home Assistant 实例中（在 supervisor 补充包STORE中点击右上角，或者如果您已配置了我的 HA，请点击下方按钮）
   [![打开您的 Home Assistant 实例并显示带有预填充特定仓库URL的添加补充包仓库对话框。](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2Falexbelgium%2Fhassio-addons)
2. 刷新补充包STORE并安装 **Manyfold**。
3. 配置选项（默认值适用于首次运行）：
   - `library_path`：`/share/manyfold/models`
   - `secret_key_base`：留空以自动生成
   - `puid` / `pgid`：设置为非 root UID/GID（见下方的“修复 root 警告 (PUID/PGID)"）
   - 可选：在下方“小型服务器调整”中调整 worker/线程和上传限制
4. 启动插件。
5. 打开 `http://<HA_IP>:3214`。

首次启动前，请确保主机上已存在您的库文件夹：

```bash
mkdir -p /share/manyfold/models
```

HA 主机上的本地开发替代方案：

1. 将 `manyfold/` 复制到 `/addons/manyfold`。
2. 在补充包STORE菜单 (`...`) 中，点击“检查更新”。
3. 从本地补充包中安装并运行 **Manyfold**。

## 库/index 工作流程

1. 将 STL/3MF 等文件拖入 `/share/manyfold/models`。
2. 在 Manyfold UI 中配置一个指向同一容器路径的库。
3. 缩略图和索引归档将保存在 `/config/thumbnails`。

## 选项

- `secret_key_base`：Rails 用于签署/加密会话和令牌的应用秘密。详见下方 [Secret Key Base](#secret-key-base)。
- `public_hostname`：用于生成链接（邮件和“在切片器中打开”下载URL）的主机名或服务器 IP。保留空白以从 Home Assistant 配置的外部 URL 自动生成，否则回退到 `homeassistant.local`。
- `puid` / `pgid`：应用于可写入映射目录（`/config` 路径）的所有权。
- `multiuser`：切换 Manyfold 多用户模式。
- `library_path`：扫描/索引的路径。
- `thumbnails_path`：持久的缩略图/index 归档（必须在 `/config` 下）。
- `log_level`：`info`、`debug`、`warn`、`error`。
- `web_concurrency`：Puma worker 进程计数。
- `rails_max_threads`：每个 Puma worker 的最大线程数。
- `default_worker_concurrency`：Sidekiq 默认队列并发数。
- `performance_worker_concurrency`：Sidekiq 性能队列并发数。
- `max_file_upload_size`：最大上传归档大小（字节）。
- `max_file_extract_size`：最大提取归档大小（字节）。

### Raspberry Pi (单用户) 示例

适用于运行单用户 Manyfold 实例且库大小适中的 Raspberry Pi 4 或 Pi 5：

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
- `web_concurrency: 1` — 单个 Puma worker（单进程）可节省 Pi 上的内存。
- `rails_max_threads: 4` — 单个用户浏览每个 worker 4 个线程已足够。
- `default_worker_concurrency: 1` — 串行后台作业处理（索引、缩略图生成）。
- `performance_worker_concurrency: 1` — 单个性能 worker，避免在 STL 处理期间导致 CPU 崩溃。
- `multiuser: false` — 禁用单用户使用中的身份验证/多用户功能。
- `max_file_upload_size: 128 MB` — 对 Pi 存储和网络而言的合理限制。
- `max_file_extract_size: 256 MB` — 提取后的归档保持 manageable。

## 修复 root 警告 (PUID/PGID)

如果 Manyfold 显示：

`Manyfold is running as root, which is a security risk.`

请在插件配置标签页中设置 `puid` 和 `pgid` 为非 root UID/GID。

示例：

```yaml
puid: 1000
pgid: 1000
```

如何在 Home Assistant 中找到正确的值：

1. 打开 **Terminal & SSH** 插件（或 SSH 进入 HA 主机）。
2. 如果您知道目标 Linux 用户名，运行：

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
2. 重启 Manyfold 插件。
3. 检查日志中是否有 `puid:pgid=<uid>:<gid>` 并确认警告已消失。

## 验证行为

- 如果 `library_path` 或 `thumbnails_path` 解析结果位于映射存储根之外，启动会失败。
- 为确保持久性，`thumbnails_path` 必须解析在 `/config` 下。
- 如果 `library_path` 不可读，启动会失败。

## Secret Key Base

`secret_key_base` 是一个必需的 Rails 秘密，用于签署和加密用户会话和令牌。更改它会使所有活动会话无效并注销所有人。

**工作原理：**

| 场景 | 行为 |
|------|------|
| **新安装**，选项留空 | 自动生成随机秘密并保存到 `/config/secret_key_base` |
| **插件更新**，选项仍留空 | 重新使用之前保存的 `/config/secret_key_base` —— 不会丢失数据 |
| **选项手动设置** | 使用插件选项中来自的值并保存到 `/config/secret_key_base` |
| **选项已设置，更新时被清空** | 生成新秘密 —— **会话将被无效化** |

**建议：** 首次安装时保留 `secret_key_base` 留空，之后永远不要更改它。自动生成值将持久保存在 `/config/secret_key_base` 中，该文件包含在 Home Assistant 备份中。

## 从之前版本迁移

如果您正在重新安装此插件，或从另一个 Manyfold 插件迁移（例如不同的 slug/仓库），您的数据存储在 HA 主机上旧插件的配置目录中。为了在不丢失数据的情况下迁移：

1. SSH 到您的 Home Assistant 主机。
2. 将数据库和秘密复制到新插件配置目录：

```bash
cp /app_configs/<old_slug>/manyfold.sqlite3 /app_configs/<new_slug>/manyfold.sqlite3
cp /app_configs/<old_slug>/secret_key_base /app_configs/<new_slug>/secret_key_base
chown 1000:1000 /app_configs/<new_slug>/manyfold.sqlite3 /app_configs/<new_slug>/secret_key_base
chown 1000:1000 /app_configs/<new_slug>/
chmod 600 /app_configs/<new_slug>/secret_key_base
```

将 `<old_slug>` 和 `<new_slug>` 替换为实际的目录名称（例如 `db21ed7f_manyfold` 和 `088d77ac_manyfold_solo`）。使用 `ls /app_configs/` 列出它们。

3. 启动新插件 —— 它将自动拾取现有的数据库和秘密。

## 备注

- 此基准配置避免了 Home Assistant ingress，并保留直接端口访问。
- 如果 `puid`/`pgid` 发生变化，请重启插件以重新应用映射目录的所有权。

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
