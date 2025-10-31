# Home Assistant 时间机器

Home Assistant 时间机器是一个基于网络的工具，它充当您 Home Assistant 配置的“时间机器”。浏览自动化、脚本、Lovelace 仪表板、ESPHome 文件和包的 YAML 备份，然后可以自信地将单个项目恢复到您的实时设置中。

## 新功能！

*   **Ingress 支持：** 完全支持 Home Assistant ingress，允许通过 Home Assistant UI 无需端口转发即可无缝访问。
*   **Lovelace 备份支持：** 为您的 Lovelace UI 配置提供全面的备份和恢复功能，确保您的仪表板始终安全。
*   **ESPHome & 包备份支持：** 通过添加组件配置中的切换按钮，启用 ESPHome 和包的备份。
*   **立即备份按钮：** 通过 UI 单击直接触发 Home Assistant 配置的立即备份。这利用了一个新的 API 进行程序化备份，与计划备份功能共享。
*   **最大备份数：** 设置保留的备份数量限制。
*   **身份验证：** 通过 Home Assistant 身份验证集成进行安全访问，在可用时自动通过 Supervisor 代理。
*   **Docker 容器安装：** 通过专门的 Docker 容器选项简化安装过程，为没有 Home Assistant 添加组件商店的用户提供更多灵活性。
*   **优化大小和性能：** 该组件现在缩小了 4 倍，并使用了 6 倍更少的内存，使其下载和运行更快。
*   **暗/亮模式：** 在配置中选择暗色和亮色主题。
*   **灵活的备份位置：** 现在可以将备份存储在 `/share` `/backup` `/config` 或 `/media` 中。文件夹将自动创建，并支持远程共享备份。
*   **REST API：** 提供全面的 API 来管理备份、恢复和配置。

## 截图

![截图 1](https://raw.githubusercontent.com/saihgupr/HomeAssistantTimeMachine/main/images/1.png)
![截图 2](https://raw.githubusercontent.com/saihgupr/HomeAssistantTimeMachine/main/images/2.png)
![截图 3](https://raw.githubusercontent.com/saihgupr/HomeAssistantTimeMachine/main/images/3.png)
![截图 4](https://raw.githubusercontent.com/saihgupr/HomeAssistantTimeMachine/main/images/4.png)
![截图 5](https://raw.githubusercontent.com/saihgupr/HomeAssistantTimeMachine/main/images/5.png)

## 功能

*   **浏览备份：** 轻松浏览您的 Home Assistant 备份 YAML 文件。
*   **查看更改：** 查看备份项目与实时版本之间更改的并排差异。
*   **恢复单个项目：** 无需恢复整个备份即可恢复单个自动化或脚本。
*   **安全第一：** 在恢复任何内容之前，它会自动在您的备份文件夹中创建 YAML 文件的备份。
*   **重新加载 Home Assistant：** 在恢复后，直接从 UI 重新加载 Home Assistant 中的自动化或脚本。
*   **计划备份：** 直接从 UI 配置您的 Home Assistant 配置的自动备份。

## 安装

安装 Home Assistant 时间机器有两种方法：作为 Home Assistant 添加组件或作为独立的 Docker 容器。

### 1. Home Assistant 添加组件（推荐大多数用户）

1.  导航到您的 Home Assistant 实例中的添加组件商店。
2.  点击右上角的三点，选择“存储库”。
3.  粘贴此存储库的 URL 并点击“添加”：
    ```
    https://github.com/saihgupr/HomeAssistantTimeMachine
    ```
4.  “Home Assistant 时间机器”添加组件现在将出现在商店中。点击它，然后点击“安装”。

### 2. 独立 Docker 安装

在您不使用 Home Assistant 添加组件时，本地构建和运行容器。

**克隆、构建和启动（推荐）：**

```bash
git clone https://github.com/saihgupr/HomeAssistantTimeMachine.git
cd HomeAssistantTimeMachine/homeassistant-time-machine
docker build -t ha-time-machine .

docker run -d \
  -p 54000:54000 \
  -e HOME_ASSISTANT_URL="http://your-ha-instance:8123" \
  -e LONG_LIVED_ACCESS_TOKEN="your-long-lived-access-token" \
  -v /path/to/your/ha/config:/config \
  -v /path/to/your/backups:/media \
  -v ha-time-machine-data:/data \
  --name ha-time-machine \
  ha-time-machine
```

提供 URL 和令牌可将凭证从 UI 中排除。这些环境变量是可选的——如果您设置了它们，设置字段将只读；如果您省略了它们，可以在 Web UI 中输入凭证。

**替代方法：** 省略环境变量，使用相同的卷启动容器，然后访问 `http://localhost:54000` 以在设置模态中输入凭证。它们存储在 `/data/docker-ha-credentials.json` 中。

#### 在 Docker 中更改选项

容器运行后，您可以通过向应用设置 API 发送 POST 请求来切换 ESPHome 支持、调整文本样式并在亮色/暗色模式之间切换。这将值持久化到 `/data/homeassistant-time-machine/docker-app-settings.json`，以便在重新加载时 UI 能反映它：

```bash
curl -X POST http://localhost:54000/api/app-settings \
  -H 'Content-Type: application/json' \
  -d '{
        "liveConfigPath": "/config",
        "backupFolderPath": "/media/timemachine",
        "textStyle": "default",
        "theme": "dark",
        "esphomeEnabled": true,
        "packagesEnabled": true
      }'
```

如果需要不同的路径、主题、文本样式或想要启用/禁用功能（`"esphomeEnabled": true|false`, `"packagesEnabled": true|false`, `"theme": light|dark`, `"textStyle": default|pirate|hacker|noir_detective|personal_trainer|scooby_doo`），请调整负载。

#### 访问 Web 界面

启动容器后，在 `http://localhost:54000`（或您的服务器 IP/端口）访问 Web 界面。

**注意：** 如果通过环境变量配置，设置中的 HA URL 和令牌字段将是只读的，如果通过 Web UI 配置，则可以编辑。

## 使用

> **提示：** 如果您公开端口 `54000/tcp`（例如，通过添加组件的配置选项卡），可以直接在 `http://your-host:54000` 打开 UI，而无需依赖 ingress。

### Home Assistant 添加组件

1.  **配置添加组件：** 在添加组件的配置选项卡中，设置 Home Assistant URL 和长寿命访问令牌。
2.  **启动添加组件。**
3.  **打开 Web UI：**
    *   使用从添加组件面板中的 **打开 Web UI** 来启动 ingress（当外部端口禁用时默认推荐）。
    *   或者，如果您在添加组件配置中启用了端口 `54000/tcp`，请浏览到 `http://homeassistant.local:54000`（或您配置的主机/端口）。
4.  **应用内设置：**
    *   在 Web UI 中，转到设置菜单。
    *   **实时 Home Assistant 文件夹路径：** 设置您的 Home Assistant 配置目录的路径（例如，`/config`）。
    *   **备份文件夹路径：** 设置存储备份的目录的路径（例如，`/media/timemachine`）。

### Docker 容器

1.  **启动容器** 并使用所需的卷挂载（参见上述 Docker 安装）。
2.  **打开 Web UI** 在 `http://localhost:54000`（或您的服务器 IP/端口）。
3.  **应用内设置：**
    *   在 Web UI 中，转到设置菜单。
    *   **实时 Home Assistant 文件夹路径：** 设置为 `/config`（这是挂载的卷）。
    *   **备份文件夹路径：** 设置为 `/media/timemachine`（这是挂载的卷）。

## 备份到远程共享

要配置备份到远程共享，首先在 Home Assistant 中设置网络存储（设置 > 系统 > 存储 > “添加网络存储”）。将共享命名为“backups”并设置其使用为“媒体”。配置后，您可以在 Home Assistant 时间机器设置中指定备份路径为 `/media/backups`，这将指导备份到您的远程共享。

## 创建备份

此组件依赖于您 Home Assistant 配置的基于文件的备份。现在，您可以直接在 UI 中设置计划备份。如果您更喜欢在外部管理备份，以下是一个简单的 shell 脚本示例，您可以使用它来创建带时间戳的 YAML 文件备份：

> **重要：** 此脚本中的路径（例如，`/homeassistant`）是占位符。根据您的实际 Home Assistant 配置目录（例如 HAOS 上的 `/config`）进行调整。

> **重要：** 此脚本中的路径（例如，`/homeassistant`）是占位符。根据您的实际 Home Assistant 配置目录（例如 HAOS 上的 `/config`）进行调整。

```bash
#!/bin/bash

DATE=$(date +%Y-%m-%d-%H%M%S)

YEAR=$(date +%Y)

MONTH=$(date +%m)

### HOME ASSISTANT ###
mkdir -p  /media/timemachine/$YEAR/$MONTH/"$DATE"
cp /homeassistant/*.yaml /media/timemachine/$YEAR/$MONTH/"$DATE"

### Lovelace ###
mkdir -p  /media/timemachine/$YEAR/$MONTH/"$DATE"/.storage
cp /homeassistant/.storage/lovelace /media/timemachine/$YEAR/$MONTH/"$DATE"/.storage
cp /homeassistant/.storage/lovelace_dashboards /media/timemachine/$YEAR/$MONTH/"$DATE"/.storage
cp /homeassistant/.storage/lovelace_resources /media/timemachine/$YEAR/$MONTH/"$DATE"/.storage
cp /homeassistant/.storage/lovelace.* /media/timemachine/$YEAR/$MONTH/"$DATE"/.storage

### ESPHOME ###
mkdir -p  /media/timemachine/$YEAR/$MONTH/"$DATE"/esphome
cp /homeassistant/esphome/*.yaml /media/timemachine/$YEAR/$MONTH/"$DATE"/esphome

### PACKAGES ###
mkdir -p  /media/timemachine/$YEAR/$MONTH/"$DATE"/packages
cp /homeassistant/packages/*.yaml /media/timemachine/$YEAR/$MONTH/"$DATE"/packages
```

**重要：**
*   定期运行此脚本（例如，每 24 小时）以保持备份最新。您可以在主机上使用 `cron` 任务或使用 `shell_command` 集成创建 Home Assistant 自动化来自动化它。

## API 端点

- **POST /api/backup-now**：触发立即备份（需要 `liveFolderPath` 和 `backupFolderPath`）。
- **POST /api/restore-automation** / **POST /api/restore-script**：在创建安全备份后恢复单个自动化或脚本。
- **POST /api/restore-lovelace-file** / **POST /api/restore-esphome-file** / **POST /api/restore-packages-file**：恢复 Lovelace、ESPHome 或包文件，并自动进行预恢复备份。
- **POST /api/get-backup-* ** & **/api/get-live-* ** 系列：从备份或实时配置中获取特定项目（自动化、脚本、Lovelace、ESPHome、包）。
- **GET /api/schedule-backup** / **POST /api/schedule-backup**：检查或更新计划备份作业。
- **POST /api/scan-backups**：扫描备份目录树并列出发现的备份。
- **POST /api/validate-path** / **POST /api/validate-backup-path**：验证提供的目录是否存在并包含 Home Assistant 数据/备份。
- **POST /api/test-home-assistant-connection**：在保存之前确认存储的 Home Assistant 凭证是否有效。
- **POST /api/reload-home-assistant**：调用 Home Assistant 重载服务（例如，`automation.reload`）。
- **GET /api/health**：简单的状态端点，公开版本、ingress 状态和时间戳。

示例用法：
```bash
# 触发备份
curl -X POST http://localhost:54000/api/backup-now \
  -H "Content-Type: application/json" \
  -d '{"liveFolderPath": "/config", "backupFolderPath": "/media/timemachine"}'

# 获取计划作业
curl http://localhost:54000/api/schedule-backup

# 扫描备份
curl -X POST http://localhost:54000/api/scan-backups \
  -H "Content-Type: application/json" \
  -d '{"backupRootPath": "/media/timemachine"}'
```

## 支持、反馈与贡献

- 在 [GitHub 问题](https://github.com/saihgupr/HomeAssistantTimeMachine/issues) 中提交问题或功能请求。
- 欢迎拉取请求——检查现有问题或提出改进建议。
- 分享可用性反馈，以便我们能够不断完善备份工作流程。
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
