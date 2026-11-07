# Home Assistant Time Machine

Home Assistant Time Machine 是一个基于 Web 的工具，充当您 Home Assistant 配置的“时间机”。您可以浏览自动化、脚本、Lovelace 仪表盘、ESPHome 文件和包之间的 YAML 备份，然后有信心地将其中的单个项目恢复到您的当前配置中。

## 新增功能！

*   **搜索所有备份：** 在搜索栏中输入并按下 Enter，或点击“搜索所有备份”，即可根据您的快照历史记录筛选包含匹配项的备份。结果将跨自动化、脚本、Lovelace、ESPHome 和包实时流式传输。
*   **移动端界面大改版：** 重新设计了边到边全屏差异查看器，实现了无触摸延迟的即时点击响应，并为手机浏览器和 Home Assistant Companion App 优化了头部布局。
*   **完整的分配置支持：** 支持带标签的区块（例如 `automation yaml:`、`script manual:`），带引号的 `!include` 目标，以及每个自动化占一文件的 `!include_dir_list` 设置。现在的每个备份都会写入清单，因此分配置项在完整备份中也将可见，且仅包含分配置文件的备份不再会消失于自动化和脚本标签页。
*   **性能大改版：** 并行化备份文件夹扫描和直接时间戳解析，将大型备份归档在外部网络共享上的初始加载时间从约 10 秒缩短至不到 1 秒。
*   **HACS 品牌素材：** 标准化了嵌入式品牌图标（256×256 和 512×512 @2x 变体），符合 Home Assistant 的品牌代理 API 要求。
*   **维护更新：** 将插件和 Docker 镜像迁移至 Node.js 24，以确保安全更新能够持续发布。

![Screenshot 1](https://raw.githubusercontent.com/saihgupr/HomeAssistantTimeMachine/main/images/1.png)
![Screenshot 2](https://raw.githubusercontent.com/saihgupr/HomeAssistantTimeMachine/main/images/2.png)
![Screenshot 3](https://raw.githubusercontent.com/saihgupr/HomeAssistantTimeMachine/main/images/3.png)
![Screenshot 4](https://raw.githubusercontent.com/saihgupr/HomeAssistantTimeMachine/main/images/4.png)
![Screenshot 5](https://raw.githubusercontent.com/saihgupr/HomeAssistantTimeMachine/main/images/5.png)
![Screenshot 6](https://raw.githubusercontent.com/saihgupr/HomeAssistantTimeMachine/main/images/6.png)

## 功能特性

*   **浏览备份：** 轻松浏览您的 Home Assistant 备份 YAML 文件。
*   **查看变化和差异调色板：** 借助 8 种鲜艳的颜色调色板之一，查看并排差异对比。
*   **恢复单个项目：** 无需恢复整个备份即可恢复单独的自动化或脚本。
*   **智能备份：** 增量备份模式，仅保存更改的文件，大幅减少存储占用。
*   **仅显示变化：** 筛选备份，仅显示包含相对于当前配置更改或删除的项目的快照。
*   **安全第一：** 在恢复任何内容之前自动创建备份。
*   **重启 Home Assistant：** 恢复后直接从 UI 重启自动化或脚本。
*   **批量备份：** 按计划配置自动备份。
*   **服务调用支持：** 使用 `hassio.addon_stdin` 服务从 Home Assistant 自动化或脚本中触发备份。
*   **多语言支持：** 支持英语、西班牙语、德语、法语、荷兰语和意大利语。
*   **Ingress 支持：** 无需端口转发即可通过 Home Assistant UI 访问。
*   **Lovelace、ESPHome 和包：** 完全支持备份和恢复仪表盘、ESPHome 文件和配置文件。
*   **最大备份数量和灵活位置：** 控制保留限制，并将备份存储到 `/share`、`/backup`、`/media` 或远程共享中。
*   **备份锁定和上下文菜单：** 通过锁定您最喜爱的备份来防止误删。右键点击任何备份即可立即锁定、解锁、导出或删除。
*   **REST API：** 用于程序化备份管理的完整 API。

## 安装

安装 Home Assistant Time Machine 有两种方式：作为 Home Assistant 插件或作为独立的 Docker 容器。

### 1. Home Assistant 插件（推荐给大多数用户）

1.  **添加仓库：**
    点击下方按钮将仓库添加到您的 Home Assistant 实例：

    [![Open your Home Assistant instance and show the add-on store](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https://github.com/saihgupr/ha-addons)

    **或手动添加：**
    - 导航至 **设置** → **插件** → **插件商店**
    - 点击右上角的三个点 (⋮) 并选择 **仓库**
    - 添加仓库 URL：
      ```
      https://github.com/saihgupr/ha-addons
      ```

2.  **安装插件：**
    “Home Assistant Time Machine"插件现已出现在商店中。点击它，然后点击“安装”。

<details>
<summary><h3>2. 独立 Docker 安装</h3></summary>

对于未使用 Home Assistant 插件的 Docker 用户，您有以下三种部署选项：

**选项 A：Docker Compose（推荐）：**

1. 下载 compose.yaml 文件：
   ```bash
   curl -o compose.yaml https://github.com/saihgupr/HomeAssistantTimeMachine/raw/branch/main/compose.yaml
   ```

2. 编辑文件以设置路径和凭证：
   ```bash
   nano compose.yaml
   ```

3. 启动服务：
   ```bash
   docker compose up -d
   ```

**选项 B：Docker Run（预构建镜像）：**

```bash
docker run -d \
  -p 54000:54000 \
  -e HOME_ASSISTANT_URL="http://your-ha-instance:8123" \
  -e LONG_LIVED_ACCESS_TOKEN="your-long-lived-access-token" \
  -e ESPHOME_CONFIG_PATH="/path/to/esphome/config" \
  -e THEME="dark" \
  -e DEBUG_LOGS="false" \
  -v /path/to/your/ha/config:/config \
  -v /path/to/your/backups:/media \
  -v ha-time-machine-data:/data \
  --name ha-time-machine \
  ghcr.io/saihgupr/homeassistanttimemachine:latest
```

**选项 C：本地构建：**

```bash
git clone https://github.com/saihgupr/HomeAssistantTimeMachine.git
cd HomeAssistantTimeMachine/homeassistant-time-machine
docker build -t ha-time-machine .

docker run -d \
  -p 54000:54000 \
  -e HOME_ASSISTANT_URL="http://your-ha-instance:8123" \
  -e LONG_LIVED_ACCESS_TOKEN="your-long-lived-access-token" \
  -e ESPHOME_CONFIG_PATH="/path/to/esphome/config" \
  -e THEME="dark" \
  -e DEBUG_LOGS="false" \
  -v /path/to/your/ha/config:/config \
  -v /path/to/your/backups:/media \
  -v ha-time-machine-data:/data \
  --name ha-time-machine \
  ha-time-machine
```

提供 URL 和令牌可以将凭证保留在界面之外。这些环境变量是可选的——如果设置它们，设置字段将变为只读；如果您省略它们，则可以在 Web UI 中输入凭证。

**替代方案：** 省略环境变量，使用相同的卷启动容器，然后访问 `http://localhost:54000` 以在设置模态框中输入凭证。它们 stored 在 `/data/docker-ha-credentials.json` 中。

#### 在 Docker 中更改选项

容器运行后，您可以通过向应用程序设置 API 发送 POST 请求来切换 ESPHome 支持、调整文本样式并切换亮/暗模式。这会将值持久化到 `/data/homeassistant-time-machine/docker-app-settings.json`，以便 UI 在重启后反映该值：

```bash
curl -X POST http://localhost:54000/api/app-settings \
  -H 'Content-Type: application/json' \
  -d '{
        "theme": "light",
        "esphomeEnabled": true,
        "packagesEnabled": true,
        "language": "de"
      }'
```

如需不同的路径、主题或启用/禁用功能，请根据需要调整负载（`"esphomeEnabled": true|false`、`"packagesEnabled": true|false`、`"theme": light|dark`、`"language": en|es|de|fr|nl|it`）。

#### 访问 Web 界面

启动容器后，访问 `http://localhost:54000`（或您服务器的 IP/端口）以访问 Web 界面。

> [!NOTE]
> 如果通过环境变量配置，设置中的 HA URL 和令牌字段将是只读的；如果通过 Web UI 配置，则它们是可编辑的。

</details>

<details>
<summary><h3>HACS Companion 集成</h3></summary>

通过 HACS 添加 Time Machine 搭档集成功能，以提升您的 Home Assistant 体验。这将提供：
- **传感器：** 直接在 Home Assistant 中跟踪备份状态和健康管理。
- **服务：** 在自动化中使用原生 `time_machine.backup_now` 服务调用触发备份。

#### 安装和设置：

<a href="https://my.home-assistant.io/redirect/hacs_repository/?owner=saihgupr&repository=HomeAssistantTimeMachine&category=integration">
  <img src="https://my.home-assistant.io/badges/hacs_repository.svg" alt="Open your Home Assistant instance and open a repository inside the Home Assistant Community Store." />
</a>

**或手动添加自定义仓库：**

1. 确保 [HACS](https://hacs.xyz/) 已安装。
2. 在 Home Assistant 中进入 **HACS** → **集成**。
3. 点击右上角的三个点 (⋮) 并选择 **自定义仓库**。
4. 将 `https://github.com/saihgupr/HomeAssistantTimeMachine` 添加为 **集成**。
5. 在 HACS 中查找 **Home Assistant Time Machine** 并点击 **下载**。
6. 进入 **设置** → **设备与服务**。
7. 点击右下角的 **添加集成** 并搜索 **Home Assistant Time Machine**。
8. 按 UI 指示操作。
   * 如果通过官方 Home Assistant 插件安装，它将自动发现实例！
   * 如果通过 Docker 安装（或自动发现失败），将被提示输入实例 URL。

> [!IMPORTANT]
> **Docker 用户：** 如果在同一网络上，请使用内部容器名（例如 `http://ha-time-machine:54000`）；如果在 separate hosts 上，则使用您服务器的 LAN IP。
> - **注意：** 如果 `sensor.time_machine_status` 显示为 `Offline`，通常意味着 Home Assistant 无法到达该地址的 Time Machine API。

#### 传感器：`sensor.time_machine_status`
在 Home Assistant 中直接监控备份系统健康状态。

| 属性 | 描述 | 示例 |
| :--- | :--- | :--- |
| `state` | 实例的当前状态 | `Online` |
| `version` | 运行版本 | `2.4.3` |
| `backup_count` | 存储的备份总数 | `764` |
| `last_backup` | 最近一次备份的时间戳 | `2026-02-17-000000` |
| `disk_total_gb` | 总存储空间 | `111.73` |
| `disk_free_gb` | 可用存储空间 | `13.68` |
| `disk_used_pct` | 存储使用百分比 | `87.8%` |
| `last_backup_status` | 最近一次运行的状态 | `success` |

#### 操作：`time_machine.backup_now`
通过服务调用来触发备份。

| 参数 | 描述 | 示例 |
| :--- | :--- | :--- |
| `url` | (可选) 您的 Time Machine 实例的 URL。如果留空，则使用集成配置的 URL。 | `http://192.168.1.4:54000` |
| `smart_backup_enabled` | 仅在检测到相对于上次快照的变化时进行备份。 | `true` |
| `max_backups_enabled` | 是否强制执行要保留的最大备份数量。 | `true` |
| `max_backups_count` | 在删除最旧的备份之前要保留的备份数量。 | `100` |
| `live_config_path` | 容器中备份的来源路径（默认是 `/config`）。 | `/config` |
| `backup_folder_path` | 容器中备份的目的地路径（默认是 `/media/timemachine`）。 | `/media/timemachine` |
| `timezone` | 用于备份文件夹名称的时间区（例如 `America/New_York`）。 | `America/New_York` |

**示例自动化：**
```yaml
action: time_machine.backup_now
data:
  smart_backup_enabled: true
  max_backups_enabled: true
  max_backups_count: 100
  timezone: "America/New_York"
```

</details>

## 使用

> [!TIP]
> 如果您暴露端口 `54000/tcp`（例如，通过插件的配置选项卡），您可以直接在 `http://your-host:54000` 打开 UI，而无需依赖 ingress。

### Home Assistant 插件

1.  **配置插件：** 在插件的配置选项卡中，设置主题、语言、ESPHome/包切换和端口。
2.  **启动插件。**
3.  **打开 Web UI：**
    * 使用插件面板中的 **打开 Web UI** 启动 ingress（当外部端口禁用时，默认推荐方式）。
    * 或者，如果您在插件配置中启用了端口 `54000/tcp`，请访问 `http://homeassistant.local:54000`（或您配置的 host/端口）。
4.  **应用程序内设置：**
    * 在 Web UI 中进入设置菜单。
    * **Live Home Assistant 文件夹路径：** 设置指向您的 Home Assistant 配置目录的路径（例如 `/config`）。
    * **备份文件夹路径：** 设置存储备份的目录路径（例如 `/media/timemachine`）。

### Docker 容器

1.  **启动容器** 并添加必要的卷挂载（参见上方的 Docker 安装部分）。
2.  在 `http://localhost:54000`（或您服务器的 IP/端口）处 **打开 Web UI**。
3.  **应用程序内设置：**
    * 在 Web UI 中进入设置菜单。
    * **Live Home Assistant 文件夹路径：** 设置为 `/config`（这是挂载的卷）。
    * **备份文件夹路径：** 设置为 `/media/timemachine`（这是挂载的卷）。

### 从自动化中触发备份

**基本方法（插件内置）：**
您可以使用 `hassio.addon_stdin` 服务从 Home Assistant 自动化或脚本中触发备份：

```yaml
service: hassio.addon_stdin
data:
  addon: 0f6ec05b_homeassistant-time-machine
  input: backup
```

> [!NOTE]
> 如果不同，请将 `0f6ec05b_homeassistant-time-machine` 替换为您插件的 slug。

若要更有控制地管理备份（例如设置自定义时区、限制最大备份数量，或仅在有变化时备份），请安装 [HACS Companion 集成](#hacs-companion-integration) 并使用 `time_machine.backup_now` 服务代替。

## 备份到远程共享

要配置备份到远程共享，首先需要在 Home Assistant 中设置网络存储（设置 > 系统 > 存储 > “添加网络存储”）。将名称设为 'backups'，并将用途设为 'Media'。配置完成后，您可以在 Home Assistant Time Machine 设置中将备份路径指定为 '/media/backups'，这将引导备份到您的远程共享。

<details>
<summary><h2>API 端点</h2></summary>

- **POST /api/backup-now**: 触发立即备份。需要 `liveFolderPath` 和 `backupFolderPath`。可选参数（`smartBackupEnabled`、`maxBackupsEnabled`、`maxBackupsCount`、`timezone`）在不提供时将回收到保存的设置中。
- **POST /api/restore-automation** / **POST /api/restore-script**: 在创建安全备份后恢复单个自动化或脚本。
- **POST /api/restore-lovelace-file** / **POST /api/restore-esphome-file** / **POST /api/restore-packages-file**: 带有自动预备份备份恢复 Lovelace、ESPHome 或包文件。
- **POST /api/get-backup-** & **/api/get-live-** 系列：从备份或当前配置中获取特定项目（自动化、脚本、Lovelace、ESPHome、包）。
- **GET /api/schedule-backup** / **POST /api/schedule-backup**: 检查或更新定时备份任务。
- **POST /api/scan-backups**: 扫描备份目录树并列出发现的备份。
- **POST /api/validate-path** / **POST /api/validate-backup-path**: 验证提供的路径是否存在并包含 Home Assistant 数据/备份。
- **POST /api/test-home-assistant-connection**: 在保存之前确认存储的 Home Assistant 凭据是否有效。
- **POST /api/reload-home-assistant**: 调用 Home Assistant 重启服务（例如 `automation.reload`）。
- **GET /api/health**: 简单的状态端点，暴露版本、ingress 状态和时间戳。

使用示例：
```bash
# 触发备份
curl -X POST http://localhost:54000/api/backup-now \
  -H "Content-Type: application/json" \
  -d '{"liveFolderPath": "/config", "backupFolderPath": "/media/timemachine"}'

# 获取定时任务
curl http://localhost:54000/api/schedule-backup

# 扫描备份
curl -X POST http://localhost:54000/api/scan-backups \
  -H "Content-Type: application/json" \
  -d '{"backupRootPath": "/media/timemachine"}'
```

</details>

## 替代方案

如果您需要由本地 Git 后端提供详细历史跟踪功能，请查看 [Home Assistant Version Control](https://github.com/saihgupr/HomeAssistantVersionControl/)。它通过跟踪您对 YAML 文件的所有更改，为您的配置提供完整的历史版本记录。

## 按与社区

感谢所有撰写关于或介绍 Home Assistant Time Machine 的人！

- [XDA Developers – "Home Assistant Time Machine tool is amazing"](https://www.xda-developers.com/home-assistant-time-machine-tool-is-amazing/)
- [Glooob Domo – YouTube Video](https://www.youtube.com/watch?v=aWZ0ON8b8io)
- [smarterkram | Olli – YouTube Video](https://www.youtube.com/watch?v=zyTExP_ebAE)

## 贡献与支持

如果您遇到错误或具有功能请求，欢迎 [打开问题](https://github.com/saihgupr/HomeAssistantTimeMachine/issues)。如果您想做出贡献，请查看 [贡献指南](CONTRIBUTING.md)。

如果找到此插件有用，请考虑给它一个 ⭐ 星标或进行 [捐赠](https://ko-fi.com/saihgupr) 以支持开发。

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
