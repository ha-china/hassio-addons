# Music Assistant DEV 应用

Music Assistant 的一个特殊开发应用，允许开发人员直接在 Home Assistant 中快速测试 Music Assistant 的具体分支、Pull Request 甚至托管的副本（fork）。

## 目的

此应用旨在用于：

- 合并前测试 Pull Request
- 开发和新功能进行调试
- 测试 Music Assistant 的托管副本
- 运行专用的测试分支

## 工作原理

与使用预构建发布的常规 Music Assistant 应用不同，此 DEV 应用：

1. 从指定的 Git 源（分支、PR 或托管副本）构建并安装服务器
2. 从指定的 Git 源（分支、PR 或托管副本）构建并安装前端
3. 加载其自有仓库的提供商（providers），例如使用 [社区提供商模板](https://github.com/music-assistant/community-provider-template) 创建的仓库
4. 使用您的自定义代码启动 Music Assistant

构建过程：

1. 从指定的 Git 引用安装服务器包
2. 从其锁定文件（lockfile）中检测到的包管理器（pnpm、yarn 或 npm）构建前端
3. 将前端作为 Python 包进行安装（重用默认的默认前端）
4. 启动 Music Assistant

该应用运行服务器的开发镜像（`ghcr.io/music-assistant/server:dev`），该镜像基于每晚发布的服务器镜像构建，因此依赖项集、捆绑的应用程序变量以及 `cliairplay` 二进制文件已经就位。仅安装分支时，只需应用与每晚发布版本实际不同的部分。`server_repo`、`frontend_repo` 和 `provider_repo` 选项作为 `SERVER_REPO`、`FRONTEND_REPO` 和 `PROVIDER_REPO` 传递给该镜像。

## 配置

### 基础配置

```yaml
log_level: info
safe_mode: false
```

### 服务器仓库配置

使用 `server_repo` 选项来指定要安装的 Music Assistant 服务器版本：

**格式**：`owner/repo@reference` 或仅 `reference`

- **分支**：`dev`、`main` 或任何分支名称，包括带有斜杠的分支名称，如 `feature/new-player`
- **Pull Request**：`pr-123`（会检出 PR #123）
- **托管副本**：`username/server@branch-name`，或 `username/server` 以使用该托管副本的默认分支
- **提交**：完整的提交 SHA
- **空/空白**：使用内置于应用镜像中的每晚构建（快速模式 - 无需安装）

**示例**：

```yaml
# 使用应用镜像中的每晚构建（快速 - 无需安装）
server_repo: ""

# 使用 dev 分支
server_repo: dev

# 使用特定分支
server_repo: feature/new-player

# 测试一个 Pull Request
server_repo: pr-456

# 测试一个托管副本
server_repo: someuser/server@experimental-feature

# 使用特定提交
server_repo: abc123def456...
```

**默认值**：`""`（空 - 使用内置于应用镜像中的每晚构建）

> **注意**：当 `server_repo` 留空或空白时，应用运行内置于镜像中的每晚构建，因此启动时不会下载任何内容。若要移动到更新的每晚版本，请重新构建应用。

### 前端仓库配置

使用 `frontend_repo` 选项来指定要安装的 Music Assistant 前端版本：

**格式**：与 `server_repo` 相同 - `owner/repo@reference` 或仅 `reference`

- **分支**：`main`、`dev` 或任何分支名称，包括带有斜杠的分支名称，如 `feature/new-ui`
- **Pull Request**：`pr-789`（会检出 PR #789）
- **托管副本**：`username/frontend@branch-name`，或 `username/frontend` 以使用该托管副本的默认分支
- **提交**：完整的提交 SHA
- **空/空白**：跳过前端构建（使用捆绑的前端）

**示例**：

```yaml
# 跳过前端构建（快速 - 使用捆绑的前端）
frontend_repo: ""

# 使用 main 分支
frontend_repo: main

# 使用特定分支
frontend_repo: feature/new-ui

# 测试一个 Pull Request
frontend_repo: pr-789

# 测试一个托管副本
frontend_repo: someuser/frontend@redesign

# 使用特定提交
frontend_repo: abc123def456...
```

**默认值**：`""`（空 - 使用捆绑的前端，无需构建）

> **注意**：当 `frontend_repo` 留空或空白时，前端构建将**完全跳过**。这大大缩短了启动时间，非常适合仅测试后端功能。相反，将使用与服务器安装捆绑的前端。

### 提供商仓库配置

使用 `provider_repo` 选项来加载其自有仓库的提供商。该仓库包含一个或多个提供商文件夹（包含 `manifest.json` 的文件夹），正如 [社区提供商模板](https://github.com/music-assistant/community-provider-template) 所做的那样。每次启动时都会重新获取它，然后服务器将以该文件夹为提供商文件夹在开发模式下运行。

**格式**：总是 `owner/repo`，没有默认的仓库

- **默认分支**：`owner/repo`
- **分支、标签或提交**：`owner/repo@ref`
- **Pull Request**：`owner/repo@pr-12`（该仓库的第 12 个 Pull Request）
- **空/空白**：不加载任何提供商仓库

**示例**：

```yaml
# 不加载任何提供商仓库
provider_repo: ""

# 您的提供商仓库的默认分支
provider_repo: yourusername/your-provider

# 其中的一个分支
provider_repo: yourusername/your-provider@my-feature

# 测试其上的一个 Pull Request
provider_repo: yourusername/your-provider@pr-12
```

**默认值**：`""`（空 - 不加载提供商仓库）

## 完整配置示例

### 快速模式（仅后端测试）
```yaml
log_level: info
safe_mode: false
server_repo: ""
frontend_repo: ""
```
运行应用镜像中的每晚构建，无需安装。启动时间最快。

### 后端开发模式
```yaml
log_level: debug
safe_mode: false
server_repo: dev
frontend_repo: ""
```
从 `dev` 分支构建服务器，跳过前端构建。适合快速测试后端更改。

### 完整开发模式
```yaml
log_level: debug
safe_mode: false
server_repo: pr-456
frontend_repo: pr-789
```
从源代码构建服务器（PR #456）和前端（PR #789）。全面测试提供完全控制权。

## 重要说明

### 构建时间

构建时间取决于您的配置：
- **两者都为空** (`server_repo: ""` 和 `frontend_repo: ""`)：最快 - 无需安装，运行镜像中的每晚构建
- **仅指定 `server_repo`**：中等 - 仅构建服务器，跳过前端（适合后端测试）
- **两者都指定**：最慢 - 从源代码构建服务器和前端（完整开发模式）

**提示**：仅测试后端功能时，将 `frontend_repo` 留空可大幅缩短启动时间！

### 安全模式

- 如果您需要在不加载提供商的情况下启动 Music Assistant，请设置 `safe_mode: true`
- 用于调试任何启动问题

### Pull Request 语法

指定 Pull Request 时，使用 `pr-NUMBER`（例如 `pr-123`、`pr-456`）。应用将自动获取并检出该 Pull Request。

## 故障排除

### 应用无法启动

1. 检查应用日志以查找构建错误
2. 验证分支/PR/托管副本是否存在且可访问
3. 尝试使用已知良好的分支，如 `dev` 或 `main`
4. 启用 `safe_mode: true` 以绕过提供商加载

### 构建失败

- 确保指定的 Git 引用存在 - 日志将显示其无法达到的仓库和引用
- 检查分支中是否存在依赖项冲突
- 前端构建需要 Node.js - 构建失败可能表明前端代码不兼容

### 性能问题

- 从源代码构建会消耗更多资源
- 仅将此应用用于开发测试，不要将其作为日常驱动器

## 开发人员工作流程

### 测试 PR

1. 查找 PR 编号（例如 #456）
2. 配置：`server_repo: pr-456`
3. 重启应用
4. 测试更改

### 开发功能

1. 将您的分支推送到您的托管副本
2. 配置：`server_repo: yourusername/server@your-branch`
3. 重启应用
4. 测试并迭代

### 测试服务器和前端的更改

```yaml
server_repo: pr-456
frontend_repo: pr-789
```

这允许您测试两个仓库之间协调的更改。

## 支持

这是开发人员工具，不面向普通用户提供支持。如果您遇到问题：

- 检查应用日志
- 验证您的 Git 引用是否正确
- 首先测试默认分支
- 在 Music Assistant 开发人员 Discord 频道询问

## 与常规应用的区别

| 特性 | 常规应用 | DEV 应用（每晚模式） | DEV 应用（源代码模式） |
| :--- | :--- | :--- | :--- |
| 安装 | 预构建发布 | 镜像中的每晚构建 | 从源代码构建 |
| 启动时间 | 快速 | 快速 | 较慢（构建时间） |
| 稳定性 | 稳定版发布 | 每晚构建 | 开发代码 |
| 前端 | 捆绑 | 捆绑 | 从源代码构建 |
| 更新 | 自动 | 手动（重启） | 手动（更改配置） |
| 用例 | 生产 | 快速后端测试 | 全面开发/测试 |

**配置模式**：
- **快速模式**：两个仓库均保持空白 - 运行镜像中的每晚构建，无需安装
- **后端开发模式**：仅指定 `server_repo` - 构建服务器，使用捆绑的前端
- **完整开发模式**：两个仓库均指定 - 从源代码构建所有内容

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
