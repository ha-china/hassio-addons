# Music Assistant DEV App

这是一个用于 Music Assistant 的特殊开发 App，允许开发者快速在 Home Assistant 中测试特定的分支、Pull Requests 甚至 Music Assistant 的分叉库（fork）。

## 目的

此 App 专为以下场景设计：

- 在合并之前测试 Pull Requests
- 开发和调试新功能
- 测试 Music Assistant 的分叉库（forks）
- 运行用于测试的自定义分支

## 工作原理

与普通 Music Assistant App（使用预构建发布版）不同，此 Dev App：

1. 从指定的 Git 来源（分支、PR 或分叉库）构建并安装服务器
2. 从指定的 Git 来源（分支、PR 或分叉库）构建并安装前端
3. 使用您的自定义代码启动 Music Assistant

构建过程：

1. 从指定的 Git 引用中安装服务器包
2. 使用从锁定文件（lockfile）中检测到的包管理器（pnpm、yarn 或 npm）构建前端
3. 将前端安装为 Python 包（覆盖默认前端）
4. 启动 Music Assistant

App 镜像是基于每日夜版（nightly）服务器镜像构建的，因此依赖集、打包的应用变量以及 cliairplay 二进制文件已就位。安装分支只需应用与 Nightly 的实际差异部分。

## 配置

### 基本配置

```yaml
log_level: info
safe_mode: false
```

### 服务器仓库配置

使用 `server_repo` 选项指定要安装的 Music Assistant 服务器版本：

**格式**：`owner/repo@reference` 或仅 `reference`

- **分支**：`dev`、`main` 或任何分支名称，包括带斜杠的分支，如 `feature/new-player`
- **Pull Request**：`pr-123`（将检出 #123）
- **分叉库**：`username/server@branch-name`，或 `username/server` 以使用该分叉库的默认分支
- **提交**：完整的提交 SHA
- **空/空白**：使用 App 镜像中内置的每日夜版构建（快速模式 - 无需安装）

**示例**：

```yaml
# 使用 App 镜像中的每日夜版构建 (FAST - 无需安装)
server_repo: ""

# 使用 dev 分支
server_repo: dev

# 使用特定分支
server_repo: feature/new-player

# 测试一个 Pull Request
server_repo: pr-456

# 测试一个分叉库
server_repo: someuser/server@experimental-feature

# 使用特定提交
server_repo: abc123def456...
```

**默认值**：`""`（空 - 使用 App 镜像中内置的每日夜版构建）

> **注意**：当 `server_repo` 留空或空白时，App 将运行时镜像中已安装的每日夜版构建，启动时不会下载任何内容。若要切换到更新的每日夜版，请重建 App。

### 前端仓库配置

使用 `frontend_repo` 选项指定要安装的 Music Assistant 前端版本：

**格式**：与 `server_repo` 相同 - `owner/repo@reference` 或仅 `reference`

- **分支**：`main`、`dev` 或任何分支名称，包括带斜杠的分支，如 `feature/new-ui`
- **Pull Request**：`pr-789`（将检出 #789）
- **分叉库**：`username/frontend@branch-name`，或 `username/frontend` 以使用该分叉库的默认分支
- **提交**：完整的提交 SHA
- **空/空白**：跳过前端构建（使用捆绑的前端）

**示例**：

```yaml
# 跳过前端构建 (FAST - 使用捆绑的前端)
frontend_repo: ""

# 使用 main 分支
frontend_repo: main

# 使用特定分支
frontend_repo: feature/new-ui

# 测试一个 Pull Request
frontend_repo: pr-789

# 测试一个分叉库
frontend_repo: someuser/frontend@redesign

# 使用特定提交
frontend_repo: abc123def456...
```

**默认值**：`""`（空 - 使用捆绑的前端，无需构建）

> **注意**：当 `frontend_repo` 留空或空白时，前端构建将**完全跳过**。这显著减少了启动时间，并且仅需要测试后端功能时非常理想。将使用与服务器安装捆绑的前端。

## 完整配置示例

### 快速模式（仅后端测试）
```yaml
log_level: info
safe_mode: false
server_repo: ""
frontend_repo: ""
```
运行 App 镜像中的每日夜版构建，无需安装。启动速度最快。

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
从源代码同时构建服务器（PR #456）和前端（PR #789）。提供全面的完整控制权进行测试。

## 重要说明

### 构建时间

构建时间取决于您的配置：
- **两者均为空** (`server_repo: ""` 和 `frontend_repo: ""`)：最快 - 无需安装，运行镜像中的每日夜版构建
- **仅指定 `server_repo`**：中等 - 仅构建服务器，跳过前端（非常适合后端测试）
- **两者均指定**：最慢 - 从源代码同时构建服务器和前端（完整开发模式）

**提示**：仅测试后端功能时，请将 `frontend_repo` 留空，以显著减少启动时间！

### 安全模式

- 如果需要在不加载提供程序的情况下启动 Music Assistant，请设置 `safe_mode: true`
- 对于调试任何启动问题非常有用

### Pull Request 语法

在指定 Pull Request 时，使用 `pr-NUMBER` 格式（例如，`pr-123`、`pr-456`）。App 将自动获取并检出对应的 PR。

## 故障排除

### App 无法启动

1. 检查 App 日志以查看构建错误
2. 验证分支/PR/分叉库存在且可访问
3. 尝试使用已知的良好分支，如 `dev` 或 `main`
4. 启用 `safe_mode: true` 以绕过提供程序加载

### 构建失败

- 确保指定的 Git 引用存在 - 日志将命名仓库并指出其无法访问的引用
- 检查分支中是否存在依赖冲突
- 前端构建需要 Node.js - 构建失败可能表明前端代码不兼容

### 性能问题

- 从源代码构建会消耗更多资源
- 仅将此 App 用于开发测试，不要将其用作日常驱动器

## 开发者工作流

### 测试 PR

1. 找到 PR 号码（例如，#456）
2. 配置：`server_repo: pr-456`
3. 重启 App
4. 测试更改

### 开发功能

1. 将您的分支推送到您的分叉库
2. 配置：`server_repo: yourusername/server@your-branch`
3. 重启 App
4. 测试并迭代

### 测试服务器和前端的更改

```yaml
server_repo: pr-456
frontend_repo: pr-789
```

这允许您在两个仓库之间测试协调的更改。

## 支持

这是一个开发者工具，不提供给普通用户的支持。如果您遇到问题：

- 检查 App 日志
- 验证您的 Git 引用是否正确
- 首先测试默认分支
- 在 Music Assistant 开发者 Discord 频道中提问

## 与常规 App 的区别

| 特性        | 常规 App      | DEV App (Nightly 模式)   | DEV App (Source 模式)    |
| ----------- | ------------- | ------------------------- | ------------------------ |
| 安装方式    | 预构建发行版  | 镜像中的每日夜版构建      | 从源代码构建             |
| 启动时间    | 快            | 快                        | 较慢（构建时间）          |
| 稳定性      | 稳定版本      | 每日夜版构建              | 开发代码                 |
| 前端        | 捆绑          | 捆绑                      | 从源代码构建              |
| 更新        | 自动          | 手动（重启）              | 手动（更改配置）          |
| 用途        | 生产环境      | 快速后端测试              | 完整开发/测试             |

**配置模式**：
- **快速模式**：两个仓库均为空 - 运行时镜像中的每日夜版构建，无需安装
- **后端开发模式**：仅指定 `server_repo` - 构建服务器，使用捆绑的前端
- **完整开发模式**：两个仓库均指定 - 从源代码构建所有组件

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
