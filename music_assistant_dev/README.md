# Music Assistant DEV App

这是一个特殊的 Music Assistant 开发应用，允许开发者直接在家自动化（Home Assistant）中快速测试 Music Assistant 的具体分支、拉取请求（pull requests）甚至分叉（fork）。

## 目的

此应用专为以下用途设计：

- 合并前测试拉取请求
- 开发和调试新功能
- 测试 Music Assistant 的分叉版本
- 运行用于测试的自定义分支

## 工作原理

与使用预构建发布的常规 Music Assistant 应用不同，此开发应用：

1. 从指定的 Git 来源（分支、PR 或分叉）构建并安装服务器
2. 从指定的 Git 来源（分支、PR 或分叉）构建并安装前端
3. 用您的自定义代码启动 Music Assistant

构建流程如下：

1. 从指定的 Git 引用安装服务器包
2. 检测到其锁文件（lockfile）中的包管理器（pnpm、yarn 或 npm），并使用该包管理器构建前端
3. 将前端安装为 Python 包（覆盖默认前端）
4. 启动 Music Assistant

应用程序镜像是基于夜间服务器镜像构建的，因此依赖项集、捆绑的应用程序变量以及 cliairplay 二进制文件已经就位。安装分支只需应用与夜间版本实际不同的部分即可。

## 配置

### 基本配置

```yaml
log_level: info
safe_mode: false
```

### 服务器仓库配置

使用 `server_repo` 选项来指定要安装的 Music Assistant 服务器的版本：

**格式**：`owner/repo@reference` 或仅 `reference`

- **分支**：`dev`、`main` 或任何分支名称，包括带有斜杠的名称，如 `feature/new-player`
- **拉取请求**：`pr-123`（将检出 PR #123）
- **分叉**：`username/server@branch-name`，或使用该分叉的默认分支 `username/server`
- **提交**：完整的提交 SHA
- **空/空白**：使用内置于应用镜像中的夜间构建（快速模式 - 无需安装）

**示例**：

```yaml
# 使用来自应用镜像的夜间构建（快速 - 无需安装）
server_repo: ""

# 使用 dev 分支
server_repo: dev

# 使用特定分支
server_repo: feature/new-player

# 测试一个拉取请求
server_repo: pr-456

# 测试一个分叉
server_repo: someuser/server@experimental-feature

# 使用特定提交
server_repo: abc123def456...
```

**默认值**：`""`（空 - 使用内置于应用镜像中的夜间构建）

> **注意**：当 `server_repo` 留空或为空白时，应用将运行其镜像中已安装的夜间构建，因此启动时不会下载任何内容。请重建应用以切换到新的夜间版本。

### 前端仓库配置

使用 `frontend_repo` 选项来指定要安装的 Music Assistant 前端的版本：

**格式**：与 `server_repo` 相同 - `owner/repo@reference` 或仅 `reference`

- **分支**：`main`、`dev` 或任何分支名称，包括带有斜杠的名称，如 `feature/new-ui`
- **拉取请求**：`pr-789`（将检出 PR #789）
- **分叉**：`username/frontend@branch-name`，或使用该分叉的默认分支 `username/frontend`
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

# 测试一个拉取请求
frontend_repo: pr-789

# 测试一个分叉
frontend_repo: someuser/frontend@redesign

# 使用特定提交
frontend_repo: abc123def456...
```

**默认值**：`""`（空 - 使用捆绑的前端，无需构建）

> **注意**：当 `frontend_repo` 留空或为空白时，前端构建将被**完全跳过**。这显着减少了启动时间，仅当您需要测试后端功能时非常理想。相反，将使用与服务器安装捆绑的前端。

## 完整配置示例

### 快速模式（仅后端测试）
```yaml
log_level: info
safe_mode: false
server_repo: ""
frontend_repo: ""
```
运行应用镜像中的夜间构建，无需安装。启动速度最快。

### 后端开发模式
```yaml
log_level: debug
safe_mode: false
server_repo: dev
frontend_repo: ""
```
从 `dev` 分支构建服务器，跳过前端构建。适合迅速测试后端更改。

### 完整开发模式
```yaml
log_level: debug
safe_mode: false
server_repo: pr-456
frontend_repo: pr-789
```
从头构建服务器（PR #456）和前端（PR #789）。完全控制以实现全面测试。

## 重要说明

### 构建时间

构建时间会根据您的配置而定：
- **两者都为空** (`server_repo: ""` 和 `frontend_repo: ""`)：最快 - 无安装，运行来自镜像的夜间构建
- **仅指定 `server_repo`**：中等 - 仅构建服务器，跳过前端（适合后端测试）
- **两者均指定**：最慢 - 从头构建服务器和前端（完整开发模式）

**提示**：仅测试后端功能时，将 `frontend_repo` 留空可以显着减少启动时间！

### 安全模式

- 如果需要在不加载提供者的情况下启动 Music Assistant，请设置 `safe_mode: true`
- 用于调试任何启动问题

### 拉取请求语法

指定拉取请求时，请使用 `pr-NUMBER`（例如，`pr-123`、`pr-456`）。应用将自动检索并检出该 PR。

## 故障排除

### 应用无法启动

1. 检查应用的构建错误日志
2. 验证分支/PR/分叉是否存在且可访问
3. 尝试使用已知的良好分支，如 `dev` 或 `main`
4. 启用 `safe_mode: true` 以绕过提供者加载

### 构建失败

- 确保指定的 Git 引用存在 - 日志会命名该引用并指出其无法达到的位置
- 检查分支中是否存在依赖项冲突
- 前端构建需要 Node.js - 构建失败可能表示前端代码不兼容

### 性能问题

- 从头构建会消耗更多资源
- 此应用仅用于开发测试，不要作为日常驱动程序使用

## 开发者工作流程

### 测试 PR

1. 找到 PR 编号（例如，#456）
2. 配置：`server_repo: pr-456`
3. 重启应用
4. 测试更改

### 开发功能

1. 将您的分支推送到您的分叉仓库
2. 配置：`server_repo: yourusername/server@your-branch`
3. 重启应用
4. 测试和迭代

### 测试服务器和前端更改

```yaml
server_repo: pr-456
frontend_repo: pr-789
```

这允许您测试跨两个仓库的协调更改。

## 支持

这是一个开发者工具，不支持常规用户。如果您遇到问题是：

- 检查应用日志
- 验证您的 Git 引用是否正确
- 先使用默认分支进行测试
- 在 Music Assistant 开发者 Discord 频道提问

## 与常规应用的区别

| 特性 | 常规应用 | DEV App (夜间模式) | DEV App (源码模式) |
| :--- | :--- | :--- | :--- |
| 安装 | 预发布发行版 | 镜像中的夜间构建 | 从源码构建 |
| 启动时间 | 快 | 快 | 较慢（构建时间） |
| 稳定性 | 稳定版发布 | 夜间构建 | 开发代码 |
| 前端 | 捆绑 | 捆绑 | 从源码构建 |
| 更新 | 自动 | 手动（重启） | 手动（更改配置） |
| 用例 | 生产环境 | 快速后端测试 | 全面开发/测试 |

**配置模式**：
- **快速模式**：两个仓库均为空 - 运行镜像中的夜间构建，无需安装
- **后端开发模式**：仅指定 `server_repo` - 构建服务器，使用捆绑的前端
- **完整开发模式**：指定两个仓库 - 所有资源均从头构建

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
