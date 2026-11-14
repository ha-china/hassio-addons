# Manyfold Home Assistant 插件

该插件为 Home Assistant OS 封装了 `ghcr.io/manyfold3d/manyfold-solo`，提供持久化存储和可配置的主机后端媒体路径。

文档：[manyfold.app/get-started](https://manyfold.app/get-started/)

## 功能特性

- 在端口 `3214` 上运行 Manyfold。
- 将应用程序数据、数据库、缓存和设置持久化存储在 `/config`（`app_config`）下。
- 使用 Home Assistant 主机存储上可配置的库路径。
- 如果配置的路径解析到 `/share`、`/media` 或 `/config` 之外，将拒绝启动。
- 无需外部 PostgreSQL 或 Redis。
- 支持 `amd64` 和 `aarch64` 架构。
- 包含基础 AppArmor 配置文件。

## 默认路径

- 库路径：`/share/manyfold/models`
- 缩略图路径：`/config/thumbnails`

## 安装

1. 将我的插件仓库添加到 Home Assistant 实例中（在 Supervisor 插件商店右上角点击，或者如果您已配置了 HA，请点击下方按钮）
   [![打开您的 Home Assistant 实例并显示带有特定仓库 URL 预填充的添加插件仓库对话框。](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2Falexbelgium%2Fhassio-addons)
2. 刷新插件商店并安装 **Manyfold**。
3. 配置选项（默认值适用于首次运行）：
   - `library_path`: `/share/manyfold/models`
   - `secret_key_base`: 留空以自动生成
   - `puid` / `pgid`: 设置为非 root UID/GID（请参阅下方的“修复 root 警告 (PUID/PGID)"）
   - 可选地，在下方"Small server tuning"中调整 worker/线程和上传限制
4. 启动插件。
5. 打开 `http://<HA_IP>:3214`。

在首次启动之前，请确保主机上存在您的库文件夹：

```bash
mkdir -p /share/manyfold/models
```

Host 上本地开发的替代方案：

1. 将 `manyfold/` 复制到 `/addons/manyfold`。
2. 在插件商店菜单 (`...`) 中，点击“检查更新”。
3. 从本地插件安装并运行 **Manyfold**。

## 库/index 工作流程

1. 将 STL/3MF 等文件放入主机上的 `/share/manyfold/models`。
2. 在 Manyfold UI 中，配置指向相同容器路径的库。
3. 缩略图和索引元数据持久化存储在 `/config/thumbnails` 中。

## 选项

- `secret_key_base`: Rails 用于签署和加密会话和令牌的应用密钥。详见下方 [Secret Key Base](#secret-key-base)。
- `public_hostname`: 用于生成链接（邮件和"Open in slicer"下载 URL）的主机名或服务器 IP。留空以从 Home Assistant 配置的自定义 URL 自动检测，回退到 `homeassistant.local`。
- `puid` / `pgid`: 应用于可写映射目录（`/config` 路径）的拥有者。
- `multiuser`: 切换 Manyfold 多用户模式。
- `library_path`: 扫描/索引路径。
- `thumbnails_path`: 持久存储的缩略图/索引元数据（必须位于 `/config` 下）。
- `log_level`: `info`, `debug`, `warn`, `error`。
- `web_concurrency`: Puma 工作进程数。
- `rails_max_threads`: 每个 Puma 工线的最大线程数。
- `default_worker_concurrency`: Sidekiq 默认队列并发数。
- `performance_worker_concurrency`: Sidekiq performance 队列并发数。
- `max_file_upload_size`: 最大上传归档大小（字节）。
- `max_file_extract_size`: 最大提取归档大小（字节）。

### Raspberry Pi (单用户) 示例

对于运行单用户 Manyfold 实例且库规模适中的 Raspberry Pi 4 或 Pi 5：

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
- `web_concurrency: 1` — 单个 Puma 工线（一个进程）可节省 Pi 的内存。
- `rails_max_threads: 4` — 对于单用户浏览，每个工作线 4 个线程已足够。
- `default_worker_concurrency: 1` — 串行后台作业处理（索引、缩略图生成）。
- `performance_worker_concurrency: 1` — 单个 performance 工线，以避免 STL 处理期间的 CPU 争抢。
- `multiuser: false` — 禁用用于个人使用的身份验证和多用户特性。
- `max_file_upload_size: 128 MB` — 适用于 Pi 存储和网络的合理限制。
- `max_file_extract_size: 256 MB` — 提取的归档保持可控大小。

## 修复 root 警告 (PUID/PGID)

如果 Manyfold 显示：

`Manyfold is running as root, which is a security risk.`

请在插件配置标签中将 `puid` 和 `pgid` 设置为非 root UID/GID。

示例：

```yaml
puid: 1000
pgid: 1000
```

如何在 Home Assistant 中找到正确的值：

1. 打开 **Terminal & SSH** 插件（或通过 SSH 连接到 HA 主机）。
2. 如果您知道目标 Linux 用户名，运行：

```bash
id <username>
```

使用 `uid=` 值作为 `puid`，`gid=` 值作为 `pgid`。

如果您没有特定的用户名，请查找 Manyfold 文件夹的拥有者：

```bash
stat -c '%u %g' /share/manyfold/models
```

将 `puid`/`pgid` 设置为此数字。

更改值后：

1. 保存插件配置。
2. 重启 Manyfold 插件。
3. 检查日志，查找 `puid:pgid=<uid>:<gid>` 并确认警告已消失。

## 验证行为

- 如果 `library_path` 或 `thumbnails_path` 解析到非映射存储根目录之外，启动将失败。
- `thumbnails_path` 必须解析到 `/config` 以下以确保持久性。
- 如果 `library_path` 不可读，启动将失败。

## Secret Key Base

`secret_key_base` 是必需的 Rails 密钥，用于签署和加密用户会话和令牌。更改它将使所有活动会话失效并登出所有人。

**工作原理：**

| 场景 | 行为 |
|----------|-------------|
| **新安装**，选项留空 | 自动生成随机密钥并保存到 `/config/secret_key_base` |
| **插件更新**，选项仍为留空 | 重用先前保存的 `/config/secret_key_base` — 无数据丢失 |
| **选项手动设置** | 使用插件选项中的值并保存到 `/config/secret_key_base` |
| **选项曾设置，更新时清除** | 生成新密钥 — **会话将失效** |

**建议：** 首次安装时留空 `secret_key_base`，之后永不更改。自动生成的值在 `/config/secret_key_base` 中在更新间保持，该文件包含在 Home Assistant 备份中。

## 从之前的安装迁移

如果您重新安装此插件，或从另一个 Manyfold 插件迁移（例如不同的 slug/仓库），您的数据存储在主机上之前插件的配置目录中。要保留数据而不丢失：

1. SSH 到您的 Home Assistant 主机。
2. 将数据库和密钥复制到新插件配置目录：

```bash
cp /app_configs/<old_slug>/manyfold.sqlite3 /app_configs/<new_slug>/manyfold.sqlite3
cp /app_configs/<old_slug>/secret_key_base /app_configs/<new_slug>/secret_key_base
chown 1000:1000 /app_configs/<new_slug>/manyfold.sqlite3 /app_configs/<new_slug>/secret_key_base
chown 1000:1000 /app_configs/<new_slug>/
chmod 600 /app_configs/<new_slug>/secret_key_base
```

将 `<old_slug>` 和 `<new_slug>` 替换为实际目录名称（例如 `db21ed7f_manyfold` 和 `088d77ac_manyfold_solo`）。使用 `ls /app_configs/` 列出它们。

3. 启动新插件 — 它将自动拾取现有的数据库和密钥。

## 备注

- 此基础配置避免使用 Home Assistant ingress，并保持直接端口访问。
- 如果 `puid`/`pgid` 更改，请重启插件以重新将拥有者应用于映射目录。

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
