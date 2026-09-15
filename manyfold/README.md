# Manyfold Home Assistant 扩展插件

该扩展插件为 Home Assistant OS 提供了持续存储空间和可配置的宿主机后端媒体路径，用于封装 `ghcr.io/manyfold3d/manyfold-solo`。

文档: [manyfold.app/get-started](https://manyfold.app/get-started/)

## 功能特性

- 在端口 `3214` 上运行 Manyfold。
- 将所有应用程序数据、数据库、缓存和配置保存在 `/config` (`app_config`) 下。
- 使用 Home Assistant 宿主机存储上的可配置库路径。
- 如果配置的路径解析结果不在 `/share`、`/media` 或 `/config` 下，则拒绝启动。
- 不需要外部 PostgreSQL 或 Redis。
- 支持 `amd64` 和 `aarch64` 架构。
- 包含基础版 AppArmor 配置文件。

## 默认路径

- 库路径：`/share/manyfold/models`
- 缩略图路径：`/config/thumbnails`

## 安装步骤

1. 将扩展插件仓库添加到您的 Home Assistant 实例中（在 supervisor 扩展插件商店右上角，或者如果您已配置了 hass 的很多地方，点击下方按钮）
   [![打开您的 Home Assistant 实例并显示带特定仓库 URL 预填充的添加扩展插件商店对话框。](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2Falexbelgium%2Fhassio-addons)
2. 刷新扩展插件商店并安装 **Manyfold**。
3. 配置选项（默认值适合首次运行）：
   - `library_path`: `/share/manyfold/models`
   - `secret_key_base`: 留空以自动生成
   - `puid` / `pgid`: 设置为非 root UID/GID（见下方的 "修复 root 警告 (PUID/PGID)"）
   - 可选择在下方 "小型服务器调优" 中调整 worker/线程和上传限制
4. 启动扩展插件。
5. 打开 `http://<HA_IP>:3214`。

首次启动前，请确保您的库文件夹存在于宿主机上：

```bash
mkdir -p /share/manyfold/models
```

在 Home Assistant 宿主机上的本地开发替代方案：

1. 将 `manyfold/` 复制到 `/addons/manyfold`。
2. 在扩展插件商店菜单 (`...`) 中，点击 "检查更新"。
3. 从本地扩展插件安装并运行 **Manyfold**。

## 库/索引工作流程

1. 在宿主机上将 STL/3MF 等文件放置到 `/share/manyfold/models`。
2. 在 Manyfold UI 中配置一个库，使其指向相同的容器路径。
3. 缩略图和索引工件将持久化在 `/config/thumbnails` 中。

## 选项

- `secret_key_base`: Rails 用于签名/加密会话和令牌的应用秘密。参见下方的 [密钥基](#secret-key-base)。
- `public_hostname`: 用于生成链接（邮件和 "在切片器中打开" 下载 URL）的浏览器名称或服务器 IP。留空以从 Home Assistant 配置的外部 URL 自动检测，回退到 `homeassistant.local`。
- `puid` / `pgid`: 应用于可写映射目录 (`/config` 路径) 的所有权。
- `multiuser`: 切换 Manyfold 多用户模式。
- `library_path`: 扫描/索引的路径。
- `thumbnails_path`: 持久存储缩略图/索引工件（必须位于 `/config` 下）。
- `log_level`: `info`, `debug`, `warn`, `error`。
- `web_concurrency`: Puma worker 进程数量。
- `rails_max_threads`: 每个 Puma worker 的最大线程数。
- `default_worker_concurrency`: Sidekiq 默认队列并发数。
- `performance_worker_concurrency`: Sidekiq 性能队列并发数。
- `max_file_upload_size`: 最大上传压缩包大小（字节）。
- `max_file_extract_size`: 最大提取压缩包大小（字节）。

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

**原理：**
- `web_concurrency: 1` — 单个 Puma worker（一个进程）可在 Pi 上节省内存。
- `rails_max_threads: 4` — 每个 worker 四个线程对于单用户浏览来说就够了。
- `default_worker_concurrency: 1` — 串行后台作业处理（索引生成、缩略图生成）。
- `performance_worker_concurrency: 1` — 单个高性能 worker 以避免在 STL 处理过程中出现 CPU 抖动。
- `multiuser: false` — 禁用认证和多用户功能以便于个人使用。
- `max_file_upload_size: 128 MB` — 适合 Pi 存储和网络管理的合理限制。
- `max_file_extract_size: 256 MB` — 提取的压缩包始终保持可控大小。

## 修复 root 警告 (PUID/PGID)

如果 Manyfold 显示：

`Manyfold is running as root, which is a security risk.`

（Manyfold 以 root 身份运行，这存在安全风险。）

请在扩展插件配置选项卡中设置非 root UID/GID 的 `puid` 和 `pgid`。

例如：

```yaml
puid: 1000
pgid: 1000
```

如何在 Home Assistant 中找到正确的值：

1. 打开 **Terminal & SSH** 扩展插件（或通过 SSH 连接到 HA 主机）。
2. 如果您知道目标 Linux 用户名，运行：

```bash
id <username>
```

将 `uid=` 的值用于 `puid`，将 `gid=` 的值用于 `pgid`。

如果您没有特定的用户名，使用 Manyfold 文件夹的所有者：

```bash
stat -c '%u %g' /share/manyfold/models
```

将 `puid`/`pgid` 设置为这些数字。

更改值后：

1. 保存扩展插件配置。
2. 重启 Manyfold 扩展插件。
3. 检查日志以查找 `puid:pgid=<uid>:<gid>` 并确认警告已消失。

## 验证行为

- 如果 `library_path` 或 `thumbnails_path` 解析结果不在映射存储根目录下，则启动失败。
- `thumbnails_path` 必须解析到 `/config` 下以确保持久性。
- 如果 `library_path` 不可读，则启动失败。

## 密钥基

`secret_key_base` 是用于签名和加密用户会话和令牌所需的 Rails 秘密。更改它将会使所有活跃会话失效，并将所有人注销。

**工作原理：**

| 场景 | 行为 |
|----------|-----------|
| **新安装**，选项留空 | 自动生成长随机密钥并保存到 `/config/secret_key_base` |
| **扩展更新**，选项仍留空 | 重使用前保存的 `/config/secret_key_base` — 不会导致数据丢失 |
| **选项人为设置** | 使用扩展选项中的值并保存到 `/config/secret_key_base` |
| **选项曾设置，更新后清除** | 生成新的密钥 — **会话将失效** |

**建议：** 首次安装时保持 `secret_key_base` 留空，之后不要更改它。在 `/config/secret_key_base` 中生成的自动值会持续存在于更新中，该文件包含在 Home Assistant 备份中。

## 从之前的安装迁移

如果您正在重新安装此扩展插件或从另一个 Manyfold 扩展插件迁移（例如不同的代号/仓库），您的数据存储在与主机上的先前扩展插件的配置目录中。为了在不丢失数据的情况下进行迁移：

1. SSH 到您的 Home Assistant 主机。
2. 将数据库和秘密复制到新的扩展插件配置目录：

```bash
cp /app_configs/<old_slug>/manyfold.sqlite3 /app_configs/<new_slug>/manyfold.sqlite3
cp /app_configs/<old_slug>/secret_key_base /app_configs/<new_slug>/secret_key_base
chown 1000:1000 /app_configs/<new_slug>/manyfold.sqlite3 /app_configs/<new_slug>/secret_key_base
chown 1000:1000 /app_configs/<new_slug>/
chmod 600 /app_configs/<new_slug>/secret_key_base
```

请将 `<old_slug>` 和 `<new_slug>` 替换为实际的目录名称（例如 `db21ed7f_manyfold` 和 `088d77ac_manyfold_solo`）。使用 `ls /app_configs/` 列出它们。

3. 启动新的扩展插件 — 它将自动拾取现有的数据库和秘密。

## 备注

- 此基础版本避开了 Home Assistant ingress 并保持直接端口访问。
- 如果 `puid`/`pgid` 更改，请重启扩展插件以重新应用到映射目录的所有权。

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
