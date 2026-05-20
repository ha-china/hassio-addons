# Home Assistant 时间机器

Home Assistant 时间机器是一个基于网页的工具，充当你的 Home Assistant 配置的“时间机器”。浏览自动化、脚本、Lovelace 仪表板、ESPHome 文件和软件包的 YAML 备份，然后有信心地将单个项目恢复到你的实时设置中。

## 新增功能！

*   **备份锁定、删除和导出：** 添加了新的备份锁定功能，以防止意外删除快照。现在，你也可以使用新的右键单击上下文菜单手动删除或导出单个备份作为 .tar.gz 归档，直接从网页 UI 中操作。
*   **HACS 集成：** 现在可以通过 HACS 作为伴侣集成！使用原生传感器跟踪备份状态，并使用 `time_machine.backup_now` 服务触发备份。
*   **键盘导航：** 使用箭头键导航备份和项目！使用上/下键更改选择，使用左/右键切换面板。在项目上按 Enter 键查看其差异。
*   **基于清单的备份和恢复：** 每个备份现在都包含详细的文件清单，确保恢复和变更检测完美了解文件所在位置，并将文件自动放回 YAML 结构中的确切位置。
*   **Docker 环境变量：** 为 Docker 安装添加了对 `ESPHOME_CONFIG_PATH` 环境变量的支持，允许自定义 ESPHome 配置文件的位置。
*   **分割配置支持：** 优化了使用 `!include`、`!include_dir_list` 和其他分割配置方法的复杂 Home Assistant 设置。

![截图 1](https://raw.githubusercontent.com/saihgupr/HomeAssistantTimeMachine/main/images/1.png)
![截图 2](https://raw.githubusercontent.com/saihgupr/HomeAssistantTimeMachine/main/images/2.png)
![截图 3](https://raw.githubusercontent.com/saihgupr/HomeAssistantTimeMachine/main/images/3.png)
![截图 4](https://raw.githubusercontent.com/saihgupr/HomeAssistantTimeMachine/main/images/4.png)
![截图 5](https://raw.githubusercontent.com/saihgupr/HomeAssistantTimeMachine/main/images/5.png)
![截图 6](https://raw.githubusercontent.com/saihgupr/HomeAssistantTimeMachine/main/images/6.png)

## 功能

*   **浏览备份：**轻松浏览你的 Home Assistant 备份 YAML 文件。
*   **查看更改和差异调色板：**使用 8 种鲜艳的颜色调色板查看侧边差异。
*   **恢复单个项目：**无需恢复整个备份即可恢复单个自动化或脚本。
*   **智能备份：**增量备份模式只保存已更改的文件，显著减少存储使用量。
*   **仅显示更改：**筛选备份，仅显示与实时配置相比包含更改或已删除项目的快照。
*   **安全第一：**在恢复任何内容之前自动创建备份。
*   **重新加载 Home Assistant：**在恢复后直接从 UI 中重新加载自动化或脚本。
*   **计划备份：**按计划配置自动备份。
*   **服务调用支持：**使用 `hassio.addon_stdin` 服务从 Home Assistant 自动化或脚本中触发备份。
*   **多语言支持：**支持英语、西班牙语、德语、法语、荷兰语和意大利语。
*   **入口支持：**无需端口转发即可通过 Home Assistant UI 访问。
*   **Lovelace、ESPHome 和软件包：**全面支持备份和恢复仪表板、ESPHome 文件和软件包配置。
*   **最大备份和灵活位置：**控制保留限制并将备份存储在 `/share`、`/backup`、`/media` 或远程共享中。
*   **备份锁定和上下文菜单：**通过锁定你的最爱备份来防止意外删除。右键单击任何备份以即时锁定、解锁、导出或删除它。
*   **REST API：**完整的 API 用于程序化备份管理。

## 安装

有两种方式可以安装 Home Assistant 时间机器：作为 Home Assistant 插件或作为独立的 Docker 容器。

### 1. Home Assistant 插件（推荐用于大多数用户）

1.  **添加存储库：**
    点击下面的按钮将存储库添加到你的 Home Assistant 实例：

    ![打开你的 Home Assistant 实例并显示插件商店](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)(https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https://github.com/saihgupr/ha-addons)

    **或手动添加它：**
    - 导航到**设置**→**插件**→**插件商店**
    - 点击右上角的三个点（⋮）并选择**存储库**
    - 添加存储库 URL：
      ```
      https://github.com/saihgupr/ha-addons
      ```

2.  **安装插件：**
    “Home Assistant 时间机器”插件现在将出现在商店中。点击它，然后点击“安装”。

<details>
<summary><h3>2. 独立 Docker 安装</h3></summary>

对于不使用 Home Assistant 插件的 Docker 用户，你有三种部署选项：

**选项 A：Docker Compose（推荐）：**

1. 下载 compose.yaml 文件：
   ```bash
   curl -o compose.yaml https://github.com/saihgupr/HomeAssistantTimeMachine/raw/branch/main/compose.yaml
   ```

2. 编辑文件以设置路径和凭据：
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
  -e ESPHOME_CONFIG_PATH="/path/to/esphome/config"
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
