# Music Assistant 开发版应用

这是一个专为 Music Assistant 设计的特殊开发应用，允许开发人员直接在 Home Assistant 中快速测试特定的代码分支、Pull 请求或甚至 Music Assistant 的分支代码（orks）。

## 目的

该应用专为以下场景设计：

- 合并前测试 Pull 请求
- 开发和调试新功能
- 测试 Music Assistant 的分支代码（forks）
- 运行用于测试的自定义代码分支

## 工作原理

与使用预构建发布的常规 Music Assistant 应用不同，该开发版应用：

1. 从指定的 Git 来源（分支、PR 或分支代码）构建并安装服务器
2. 从指定的 Git 来源（分支、PR 或分支代码）构建并安装前端
3. 使用您的自定义代码启动 Music Assistant

构建过程：

1. 从指定的 Git 引用安装服务器包
2. 根据从其锁定文件（lockfile）检测到的包管理器（pnpm、yarn 或 npm）构建前端
3. 作为 Python 包安装前端（覆盖默认前端）
4. 启动 Music Assistant

该应用镜像（App image）是在 nightly 服务器镜像基础上构建的，因此依赖集、捆绑的应用变量和 cliairplay 二进制文件已经就位。安装分支只需应用与 nightly 实际不同的部分。

## 配置

### 基本配置

```yaml
log_level: info
safe_mode: false
```

### 服务器仓库配置

使用 `server_repo` 选项来指定要安装的 Music Assistant 服务器版本：

**格式**：`owner/repo@reference` 或仅 `reference`

- **分支**：`dev`、`main` 或任何分支名称，包括像 `feature/new-player` 这样带有斜杠的分支名称
- **Pull 请求**：`pr-123`（将检出 PR #123）
- **分支代码**：`username/server@branch-name`，或 `username/server` 以使用该分支代码的默认分支
- **提交**：完整的提交 SHA
- **空白/空**：使用内置于应用镜像中的 nightly 构建（快速模式 - 无需安装）

**示例**：

```yaml
# 使用应用镜像中的 nightly 构建（FAST - 无需安装）
server_repo: ""

# 使用 dev 分支
server_repo: dev

# 使用特定分支
server_repo: feature/new-player

# 测试 pull 请求
server_repo: pr-456

# 测试分支代码
server_repo: someuser/server@experimental-feature

# 使用特定提交
server_repo: abc123def456...
```

**默认值**：`""`（空字符串 - 使用内置于应用镜像中的 nightly 构建）

> **注意**：当 `server_repo` 留空或为空白时，应用将运行已安装在镜像中的 nightly 构建，因此启动时不会下载任何内容。请重新构建应用以切换到更新的 nightly。

### 前端仓库配置

使用 `frontend_repo` 选项来指定要安装的 Music Assistant 前端版本：

**格式**：与 `server_repo` 相同 - `owner/repo@reference` 或仅 `reference`

- **分支**：`main`、`dev` 或任何分支名称，包括像 `feature/new-ui` 这样带有斜杠的分支名称
- **Pull 请求**：`pr-789`（将检出 PR #789）
- **分支代码**：`username/frontend@branch-name`，或 `username/frontend` 以使用该前端分支代码的默认分支
- **提交**：完整的提交 SHA
- **空白/空**：跳过前端构建（使用捆绑的前端）

**示例**：

```yaml
# 跳过前端构建（FAST - 使用捆绑的前端）
frontend_repo: ""

# 使用 main 分支
frontend_repo: main

# 使用特定分支
frontend_repo: feature/new-ui

# 测试 pull 请求
frontend_repo: pr-789

# 测试分支代码
frontend_repo: someuser/frontend@redesign

# 使用特定提交
frontend_repo: abc123def456...
```

**默认值**：`""`（空字符串 - 使用捆绑的前端，无需构建）

> **注意**：当 `frontend_repo` 留空或为空白时，前端构建将被**完全跳过**。这显著缩短了启动时间，并且仅在需要测试后端功能时是理想的。将使用服务器安装中捆绑而不是构建的前端。

## 完整配置示例

### 快速模式（仅后端测试）
```yaml
log_level: info
safe_mode: false
server_repo: ""
frontend_repo: ""
```
运行来自应用镜像的 nightly 构建，无需安装。启动速度最快。

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
从源构建服务器（PR #456）和前端（PR #789）。全面测试拥有完全控制权。

## 重要提示

### 构建时间

构建时间因您的配置而异：
- **两者均为空**（`server_repo: ""` 和 `frontend_repo: ""`）：最快 - 无需安装，运行镜像中的 nightly 构建
- **仅指定 `server_repo`**：中等速度 - 仅构建服务器，跳过前端（适合后端测试）
- **两者均指定**：最慢速度 - 从源构建服务器和前端（完整开发模式）

**提示**：仅在测试后端功能时，请将 `frontend_repo` 留空以显著减少启动时间！

### 安全模式

- 如果需要在不加载 Providers 的情况下启动 Music Assistant，请设置 `safe_mode: true`
- 适合调试任何启动问题

### Pull 请求语法

在指定 Pull 请求时，使用 `pr-NUMBER`（例如 `pr-123`、`pr-456`）。应用将为您自动获取并检出 Pull 请求。

## 故障排除

### 应用无法启动

1. 检查应用日志以查找构建错误
2. 验证分支/PR/分支代码是否存在且可访问
3. 尝试使用已知的良好分支，如 `dev` 或 `main`
4. 启用 `safe_mode: true` 以绕过 Provider 加载

### 构建失败

- 确保指定的 Git 引用存在 - 日志将命名该引用并指出它无法到达的仓库
- 检查分支内是否存在依赖冲突
- 前端构建需要 Node.js - 构建失败可能表明前端代码不兼容

### 性能问题

- 从源构建会消耗更多资源
- 仅将此应用用作开发测试工具，不要作为日常驱动器

## 开发者工作流

### 测试 Pull 请求

1. 找到 Pull 请求编号（例如 #456）
2. 配置：`server_repo: pr-456`
3. 重启应用
4. 测试更改

### 开发功能

1. 将您的分支推送到您的分支代码仓库
2. 配置：`server_repo: yourusername/server@your-branch`
3. 重启应用
4. 测试并迭代

### 测试服务器和前端的更改

```yaml
server_repo: pr-456
frontend_repo: pr-789
```

这允许您在两个仓库之间测试协调的更改。

## 支持

这是一个开发工具，不支持常规用户。如果遇到任何问题：

- 检查应用日志
- 验证您的 Git 引用是否正确
- 首先使用默认分支测试
- 在 Music Assistant 开发者 Discord 频道提问

## 与常规应用的区别

| 功能特性 | 常规应用 | DEV 应用 (Nightly 模式) | DEV 应用 (Source 模式) |
| :--- | :--- | :--- | :--- |
| 安装方式 | 预构建发布包 | 镜像中的 nightly 构建 | 从源构建 |
| 启动时间 | 快 | 快 | 较慢（涉及构建时间） |
| 稳定性 | 稳定版发布包 | nightly 构建 | 开发代码 |
| 前端构建 | 捆绑 | 捆绑 | 从源构建 |
| 更新方式 | 自动 | 手动（重启应用） | 手动（更改配置） |
| 使用场景 | 生产环境 | 快速后端测试 | 完整开发/测试 |

**配置模式：**
- **快速模式**：两个仓库均为空 - 运行镜像中的 nightly 构建，无需安装
- **后端开发模式**：仅指定 `server_repo` - 构建服务器，使用捆绑的前端
- **完整开发模式**：两个仓库均指定 - 从源构建所有内容

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
