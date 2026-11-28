# Manyfold Home Assistant 附加组件

此附加组件将 `ghcr.io/manyfold3d/manyfold-solo` 包裹在 Home Assistant OS 中，提供持久化存储和可配置的主机后端媒体路径。

文档：[manyfold.app/get-started](https://manyfold.app/get-started/)

## 特性

- 在端口 `3214` 上运行 Manyfold。
- 在 `/config`（`app_config`）下持久化应用数据、数据库、缓存和设置。
- 使用 homeassistant 主机存储上的可配置库路径。
- 如果配置的解析路径位于 `/share`、`/media` 或 `/config` 之外则拒绝启动。
- 不需要外部 PostgreSQL 或 Redis。
- 支持 `amd64` 和 `aarch64`。
- 包含一个基础的 AppArmor 配置文件。

## 默认路径

- 库路径：`/share/manyfold/models`
- 缩略图路径：`/config/thumbnails`

## 安装

1. 将我的附加组件库添加到你的 Home Assistant 实例中（在 supervisor 附加组件商店点击右上角，或如果您的 HA 已配置了我的 HA 则点击下方按钮）
   [![打开您的 Home Assistant 实例并显示带有预填充特定仓库 URL 的添加附加组件存储对话框。](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2Falexbelgium%2Fhassio-addons)
2. 刷新附加组件存储并安装 **Manyfold**。
3. 配置选项（默认值对于首次运行是安全的）：
   - `library_path`: `/share/manyfold/models`
   - `secret_key_base`: 留空以自动生成
   - `puid` / `pgid`: 设置为非 root UID/GID（见下方的"修复 root 警告 (PUID/PGID)"）
   - 可在此处下方"小服务器调节"中选项调整 worker/thread 和上传限制
4. 启动附加组件。
5. 打开 `http://<HA_IP>:3214`。

在首次启动之前，请确保主机上存在库文件夹：

```bash
mkdir -p /share/manyfold/models
```

HA 主机上的本地开发替代方案：

1. 将 `manyfold/` 复制到 `/addons/manyfold`。
2. 在附加组件存储菜单（`...`）中，点击“检查更新”。
3. 从本地附加组件安装并运行 **Manyfold**。

## 库/index 工作流程

1. 将 STL/3MF 等文件下载到主机上的 `/share/manyfold/models`。
2. 在 Manyfold UI 中，配置一个指向同一容器路径的库。
3. 缩略图和索引工件在 `/config/thumbnails` 中持久化。

## 选项

- `secret_key_base`: Rails 用于签名/加密会话和令牌的应用秘密。参见下方的 [Secret Key Base](#secret-key-base)。
- `public_hostname`: 用于生成链接（邮件和“在切片器中打开”下载 URL）的主机名或服务器 IP。留空以自动检测 Home Assistant 配置的公网 URL，回退到 `homeassistant.local`。
- `puid` / `pgid`: 应用至可写映射目录（`/config` 路径）的所有权。
- `multiuser`: 切换 Manyfold 多用户模式。
- `library_path`: 扫描/索引路径。
- `thumbnails_path`: 持久化缩略图/索引工件（必须位于 `/config` 下）。
- `log_level`: `info`, `debug`, `warn`, `error`。
- `web_concurrency`: Puma 进程工作计数。
- `rails_max_threads`: 每个 Puma 进程的最大线程数。
- `default_worker_concurrency`: Sidekiq 默认队列并发度。
- `performance_worker_concurrency`: Sidekiq Performance 队列并发度。
- `max_file_upload_size`: 最大上传归档大小（字节）。
- `max_file_extract_size`: 最大提取归档大小（字节）。

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

**理由 (Rationale):**
- `web_concurrency: 1` — 单个 Puma 进程（工作进程）可节省 Pi 的 RAM。
- `rails_max_threads: 4` — 每个工作进程的 4 个线程对于单用户浏览来说已足够。
- `default_worker_concurrency: 1` — 串行后台作业处理（索引、缩略图生成）。
- `performance_worker_concurrency: 1` — 单个性能工作进程，以避免在执行 STL 处理期间 CPU 震荡。
- `multiuser: false` — 对于个人使用禁用认证/多用户功能。
- `max_file_upload_size: 128 MB` — 适合 Pi 存储和网络的大小上限。
- `max_file_extract_size: 256 MB` — 提取的归档保持小且易管理。

## 修复 root 警告 (PUID/PGID)

如果 Manyfold 显示：

`Manyfold is running as root, which is a security risk.`

请在附加组件配置选项卡中将 `puid` 和 `pgid` 设置为非 root UID/GID。

示例：

```yaml
puid: 1000
pgid: 1000
```

在 Home Assistant 中找到正确值的方法：

1. 打开 **Terminal & SSH** 附加组件（或通过 SSH 进入 HA 主机）。
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

1. 保存附加组件配置。
2. 重新启动 Manyfold 附加组件。
3. 检查日志中的 `puid:pgid=<uid>:<gid>` 并确认警告已消失。

## 验证行为

- 如果 `library_path` 或 `thumbnails_path` 解析到映射存储根之外，则启动失败。
- `thumbnails_path` 必须解析在 `/config` 下以保证持久性。
- 如果 `library_path` 不可读，则启动失败。

## Secret Key Base

`secret_key_base` 是一项必需的 Rails 秘密，用于签名和加密用户会话和令牌。更改它将使所有活动会话无效并将所有人登出。

**工作原理：**

| 场景 | 行为 |
|----------|-----------|
| **新安装**，选项留空 | 自动生成一个随机秘密并保存到 `/config/secret_key_base` |
| **附加组件更新**，选项仍留空 | 重用先前保存的 `/config/secret_key_base` — 无数据丢失 |
| **选项手动设置** | 使用附加组件选项中的值并保存到 `/config/secret_key_base` |
| **选项已设置，然后在更新时清除** | 生成新的秘密 — **会话将无效** |

**建议：** 首次安装时留空 `secret_key_base`，之后永远不要更改它。自动生成的值会持久保存在 `/config/secret_key_base` 中，该文件包含在 Home Assistant 备份中。

## 从之前的安装迁移

如果您正在重新安装此附加组件或从另一个 Manyfold 附加组件迁移（例如，不同的 slug/仓库），您的数据存储在 HA 主机上之前的附加组件配置目录中。为了不丢失数据进行迁移：

1. SSH 进入您的 Home Assistant 主机。
2. 将数据库和秘密复制到新的附加组件配置目录：

```bash
cp /app_configs/<old_slug>/manyfold.sqlite3 /app_configs/<new_slug>/manyfold.sqlite3
cp /app_configs/<old_slug>/secret_key_base /app_configs/<new_slug>/secret_key_base
chown 1000:1000 /app_configs/<new_slug>/manyfold.sqlite3 /app_configs/<new_slug>/secret_key_base
chown 1000:1000 /app_configs/<new_slug>/
chmod 600 /app_configs/<new_slug>/secret_key_base
```

将 `<old_slug>` 和 `<new_slug>` 替换为实际的目录名称（例如 `db21ed7f_manyfold` 和 `088d77ac_manyfold_solo`）。使用 `ls /app_configs/` 列出它们。

3. 启动新的附加组件 — 它将自动拾取现有的数据库和秘密。

## 说明

- 此基线避免了 Home Assistant 进入并直接保留端口访问。
- 如果 `puid`/`pgid` 更改，请重新启动附加组件以重新应用映射目录的所有权。

---

**⚠️ This resource is intended to help Chinese Home Assistant users more easily install excellent add-ons. If you are not a Chinese user, please read repository readme first**

**⚠️ 这个资源用来帮助中国Home Assistant用户更容易地安装优秀的插件。如果您不是中国用户，请先阅读仓库的README，以下为收集者（汉化，加速）信息，非原作者信息**

---

## 📱 关注我

扫描下面二维码，关注我。有需要可以随时给我留言：

<img src="https://raw.gitcode.com/ha-china/ha-apps/raw/main/WeChat_QRCode.png" width="50%" /> 📲

## ☕ 赞助支持

如果您觉得我花费大量时间维护这个库对您有帮助，欢迎请我喝杯奶茶，您的支持将是我持续改进的动力！

<div style="display: flex; justify-content: space-between;">
  <img src="https://raw.gitcode.com/ha-china/ha-apps/raw/main/1_readme/Ali_Pay.jpg" height="350px" />
  <img src="https://raw.gitcode.com/ha-china/ha-apps/raw/main/1_readme/WeChat_Pay.jpg" height="350px" />
</div> 💖

感谢您的支持与鼓励！
