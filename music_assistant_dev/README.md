# Music Assistant DEV 应用

这是一个专为 Music Assistant 开发的特殊开发应用，允许开发者直接在 Home Assistant 中快速测试 Music Assistant 的特定分支、代码提交甚至分叉版本。

## 目的

此应用专为以下场景设计：

- 在合并前测试代码提交
- 开发和新功能进行调试
- 测试 Music Assistant 的分叉版本
- 运行用于测试的自定义分支

## 工作原理

与使用预发布版本包的标准 Music Assistant 应用不同，DEV 应用：

1. 从指定的 Git 源（分支、代码提交或分叉）构建并安装服务器
2. 从指定的 Git 源（分支、代码提交或分叉）构建并安装前端界面
3. 加载其自身存储库中的提供者，例如 [社区提供者模板]((https://github.com/music-assistant/community-provider-template))
4. 启动您的自定义代码运行的 Music Assistant

构建过程：

1. 安装来自指定 Git 引用服务器的软件包
2. 从其锁文件中检测到的包管理器（pnpm、yarn 或 npm）构建前端
3. 作为 Python 包安装前端（覆盖默认前端）
4. 启动 Music Assistant

该应用运行服务器的开发镜像（`ghcr.io/music-assistant/server:dev`），该镜像基于夜间版本（nightly）服务器镜像构建，因此依赖项集合、捆绑的应用变量和 `cliairplay` 二进制文件已就位。仅安装一个分支只需应用与夜间版本实际不同的部分。`SERVER_REPO`、`FRONTEND_REPO` 和 `PROVIDER_REPO` 选项被传递给该镜像。

## 配置

### 基本配置

```yaml
log_level: info
safe_mode: false
```

### 服务器存储库配置

使用 `server_repo` 选项指定要安装的 Music Assistant 服务器版本：

**格式**：`owner/repo@reference` 或仅为 `reference`

- **分支**：`dev`、`main` 或任何分支名称，包括带有斜杠的名称，如 `feature/new-player`
- **代码提交 (Pull Request)**：`pr-123`（将检出代码提交 #123）
- **分叉**：`username/server@branch-name`，或 `username/server` 以使用该分叉的默认分支
- **代码提交 (Commit)**：完整的代码提交 SHA
- **空白/空**：使用捆绑在应用镜像中的夜间构建（快速模式 - 无需安装）

**示例**：

```yaml
# 使用来自应用镜像的夜间构建（FAST - 无需安装）
server_repo: ""

# 使用dev分支
server_repo: dev

# 使用特定分支
server_repo: feature/new-player

# 测试一个代码提交
server_repo: pr-456

# 测试一个分叉
server_repo: someuser/server@experimental-feature

# 使用特定的代码提交
server_repo: abc123def456...
```

**默认值**：`""`（空 - 使用捆绑在应用镜像中的夜间构建）

> **注意**：当 `server_repo` 留空或为空白时，应用将运行已安装在镜像中的夜间构建，因此启动时不会下载任何内容。若要切换到更新的夜间构建，请重建应用。

### 前端存储库配置

使用 `frontend_repo` 选项指定要安装的 Music Assistant 前端界面版本：

**格式**：与 `server_repo` 相同 - `owner/repo@reference` 或仅为 `reference`

- **分支**：`main`、`dev` 或任何分支名称，包括带有斜杠的名称，如 `feature/new-ui`
- **代码提交 (Pull Request)**：`pr-789`（将检出代码提交 #789）
- **分叉**：`username/frontend@branch-name`，或 `username/frontend` 以使用该分叉的默认分支
- **代码提交 (Commit)**：完整的代码提交 SHA
- **空白/空**：跳过前端构建（使用捆绑的前端）

**示例**：

```yaml
# 跳过前端构建（FAST - 使用捆绑的前端）
frontend_repo: ""

# 使用main分支
frontend_repo: main

# 使用特定分支
frontend_repo: feature/new-ui

# 测试一个代码提交
frontend_repo: pr-789

# 测试一个分叉
frontend_repo: someuser/frontend@redesign

# 使用特定的代码提交
frontend_repo: abc123def456...
```

**默认值**：`""`（空 - 使用捆绑的前端，无需构建）

> **注意**：当 `frontend_repo` 留空或为空白时，前端构建将被**完全跳过**。这将显著减少启动时间，并且非常适合仅测试后端功能的应用。此时将使用与服务器安装捆绑起来的前端。

### 提供者存储库配置

使用 `provider_repo` 选项加载其自身存储库中的提供者。该存储库包含一个或多个提供者文件夹（包含 `manifest.json` 的文件夹），就像 [社区提供者模板](https://github.com/music-assistant/community-provider-template) 那样。每次启动时都会重新获取，然后服务器将以其作为提供者文件夹运行开发模式。

**格式**：始终为 `owner/repo`，没有默认存储库

- **默认分支**：`owner/repo`
- **分支、标签或代码提交**：`owner/repo@ref`
- **代码提交 (Pull Request)**：`owner/repo@pr-12`（该存储库中的代码提交 12）
- **空白/空**：加载无提供者存储库

**示例**：

```yaml
# 加载无提供者存储库
provider_repo: ""

# 您的提供者存储库的默认分支
provider_repo: yourusername/your-provider

# 它的一个分支
provider_repo: yourusername/your-provider@my-feature

# 测试其上的代码提交
provider_repo: yourusername/your-provider@pr-12
```

**默认值**：`""`（空 - 无提供者存储库）

## 完整配置示例

### 快速模式（仅后端测试）
```yaml
log_level: info
safe_mode: false
server_repo: ""
frontend_repo: ""
```
在应用镜像中运行夜间构建，无需安装。启动最快。

### 后端开发模式
```yaml
log_level: debug
safe_mode: false
server_repo: dev
frontend_repo: ""
```
从 `dev` 分支构建服务器，跳过前端构建。非常适合快速测试后端更改。

### 完整开发模式
```yaml
log_level: debug
safe_mode: false
server_repo: pr-456
frontend_repo: pr-789
```
从源代码同时构建服务器（代码提交 #456）和前端（代码提交 #789）。提供全面的测试控制。

## 重要说明

### 构建时间

构建时间取决于您的配置：
- **两者均为空** (`server_repo: ""` 和 `frontend_repo: ""`)：最快 - 无需安装，运行来自镜像的夜间构建
- **仅指定 `server_repo`**：中等 - 仅构建服务器，跳过前端（适合后端测试的理想选择）
- **两者均指定**：最慢 - 从源代码同时构建服务器和前端（完整开发模式）

**提示**：当仅测试后端功能时，请将 `frontend_repo` 留空，以显著减少启动时间！

### 安全模式

- 如果需要在不加载提供者的情况下启动 Music Assistant，请设置 `safe_mode: true`
- 对于调试任何启动问题很有用

### 代码提交语法

在指定代码提交时，使用 `pr-NUMBER`（例如，`pr-123`，`pr-456`）。应用将自动获取并检出代码提交。

## 故障排除

### 应用无法启动

1. 检查应用日志中的构建错误
2. 验证分支/代码提交/分叉是否存在且可访问
3. 尝试使用已知的良好分支，如 `dev` 或 `main`
4. 启用 `safe_mode: true` 以绕过提供者加载

### 构建失败

- 确保指定的 Git 引用存在 - 日志名称存储库并指出其无法访问的引用
- 检查分支中是否存在依赖项冲突
- 前端构建需要 Node.js - 构建失败可能表明前端代码不兼容

### 性能问题

- 从源代码构建会消耗更多资源
- 仅将此应用用于开发测试，不要作为日常驱动器使用

## 开发者工作流程

### 测试一个代码提交

1. 查找代码提交编号（例如，#456）
2. 配置：`server_repo: pr-456`
3. 重启应用
4. 测试更改

### 开发新功能

1. 将您的分支推送至您的分叉版本
2. 配置：`server_repo: yourusername/server@your-branch`
3. 重启应用
4. 测试并迭代

### 测试服务器和前端更改

```yaml
server_repo: pr-456
frontend_repo: pr-789
```

允许您测试两个存储库之间的协调更改。

## 支持

这是一个开发者工具，不支持普通用户。如果您遇到问题：

- 检查应用日志
- 验证您的 Git 引用是否正确
- 首先测试默认分支
- 在 Music Assistant 开发者 Discord 频道询问

## 与普通应用的区别

| 功能          | 普通应用            | DEV 应用（夜间模式）  | DEV 应用（源代码模式） |
| ------------- | ------------------- | ------------------- | --------------------- |
| 安装          | 预发布版本          | 镜像中的夜间构建     | 从源代码构建          |
| 启动时间      | 快速                | 快速                | 较慢（构建时间）       |
| 稳定性        | 稳定版本            | 夜间构建             | 开发代码               |
| 前端          | 捆绑                | 捆绑                 | 从源代码构建          |
| 更新          | 自动                | 手动（重启）         | 手动（更改配置）       |
| 用例          | 生产环境            | 快速后端测试          | 完整开发/测试          |

**配置模式：**
- **快速模式**：两个存储库均为空 - 运行来自镜像的夜间构建，无需安装
- **后端开发模式**：仅指定 `server_repo` - 构建服务器，使用捆绑的前端
- **完整开发模式**：两个存储库均指定 - 从源代码构建所有内容

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
