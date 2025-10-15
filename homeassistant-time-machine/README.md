# Home Assistant 时间机器

Home Assistant 时间机器是一个基于网络的工具，它充当您 Home Assistant 配置的“时间机器”。它允许您浏览现有的基于文件的备份，并将单个自动化脚本恢复到您的实时配置中。

## 截图

![截图 1](https://i.imgur.com/tckqmy8.png)
![截图 2](https://i.imgur.com/KOqjUYD.png)
![截图 4](https://i.imgur.com/GWWwkht.png)
![截图 3](https://i.imgur.com/LbjZobV.png)

## 功能

*   **浏览备份：** 轻松浏览您现有的 Home Assistant 备份。
*   **查看更改：** 查看备份项和实时版本之间的更改对比。
*   **恢复单个项目：** 无需恢复整个备份即可恢复单个自动化脚本。
*   **安全第一：** 在恢复任何内容之前，它会自动在您的备份文件夹中创建您的 yaml 文件的备份。
*   **重新加载 Home Assistant：** 恢复后，直接从 UI 重新加载 Home Assistant 中的自动化脚本。
*   **计划备份：** 直接从 UI 配置您的 Home Assistant 配置的自动备份。

## 安装

1.  导航到您的 Home Assistant 实例中的添加组件商店。
2.  点击右上角的三点，并选择“仓库”。
3.  粘贴此仓库的 URL 并点击“添加”：
    ```
    https://github.com/saihgupr/HomeAssistantTimeMachine
    ```
4.  “Home Assistant 时间机器”组件现在将出现在商店中。点击它，然后点击“安装”。

## 使用

1.  **配置组件：** 在组件的配置选项卡中，设置 Web 界面的端口。
2.  **启动组件。**
3.  **打开 Web UI 或在浏览器中访问 http://homeassistant.local:3000。**
4.  **应用内设置：**
    *   在 Web UI 中，进入设置菜单。
    *   **实时 Home Assistant 文件夹路径：** 设置您的 Home Assistant 配置目录的路径（例如，`/config`）。
    *   **备份文件夹路径：** 设置存储备份的目录的路径。
    *   **Home Assistant URL & 令牌：** 设置您的 Home Assistant 实例的 URL 和一个长寿命访问令牌。这是在恢复后重新加载 Home Assistant 的功能所需的。
    *   **启用计划备份：** 切换此选项以启用或禁用自动备份。
    *   **频率：** 选择您希望备份运行的频率（例如，每小时、每天、每周）。
    *   **时间：** 如果选择了每天或每周频率，请指定备份运行的时间。

## 创建备份

此组件依赖于您 Home Assistant 配置的基于文件的备份。您现在可以直接在 UI 中设置计划备份。如果您更喜欢在外部管理备份，这里是一个您可以用来创建带有时间戳的 YAML 文件备份的简单 shell 脚本示例：

```bash
#!/bin/bash

# 您存储 Home Assistant 配置的目录。
# 调整此设置以匹配您的配置。
CONFIG_DIR="/config"

# 您希望存储备份的根目录。
# 这应与您在组件的 UI 中设置的“备份文件夹路径”相匹配。
BACKUP_DIR="/media/backups/yaml"

# 为新的备份创建一个带有时间戳的目录。
DATE=$(date +%Y-%m-%d-%H%M%S)
YEAR=$(date +%Y)
MONTH=$(date +%m)
BACKUP_PATH="$BACKUP_DIR/$YEAR/$MONTH/$DATE"
mkdir -p "$BACKUP_PATH"

# 将 YAML 文件复制到备份目录。
cp "$CONFIG_DIR"/*.yaml "$BACKUP_PATH"

echo "备份创建于 $BACKUP_PATH"
```

**重要提示：**
*   您需要调整脚本中的 `CONFIG_DIR` 和 `BACKUP_DIR` 变量以匹配您的 Home Assistant 设置。
*   您应该定期运行此脚本（例如，每 24 小时一次）以保持最新的备份。您可以在主机机器上使用 `cron` 任务或使用带有 `shell_command` 集成的 Home Assistant 自动化来自动化此操作。

## 配置

组件可以通过 Home Assistant UI 进行配置。

*   **Web 界面端口：** 您主机机器上映射到组件 Web 界面的端口。

所有其他配置都在应用程序的 Web UI 中完成。