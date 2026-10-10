# Music Assistant DEV App

这是 Music Assistant 的一个专用开发 App，允许开发者快速测试 Music Assistant 的特定分支、拉取请求（pull requests）甚至对 Hook，并直接在 Home Assistant 中试用。

## 目的

此 App 专为以下场景设计：

- 在合并前测试拉取请求
- 开发和新特性调试
- 测试 Music Assistant 的分叉库（forks）
- 运行用于测试的自定义分支

## 工作原理

与使用预构建发布的常规 Music Assistant App 不同，此 DEV App：

1. 从指定的 Git 来源（分支、PR 或分叉库）构建并安装服务器
2. 从指定的 Git 来源（分支、PR 或分叉库）构建并安装前端
3. 使用您自定义的代码启动 Music Assistant

构建流程如下：

1. 从指定的 Git 引用安装服务器包
2. 检测到其 lockfile 中的包管理器（pnpm、yarn 或 npm），构建前端
3. 将前端作为 Python 包安装（覆盖默认前端）
4. 启动 Music Assistant

App 镜像是基于 nightly 服务器镜像构建的，因此依赖项、捆绑的 app 变量和 cliairplay 二进制文件已经就位。安装分支只需应用与 nightly 不同的更改。

## 配置

### 基本配置

```yaml
log_level: info
safe_mode: false
```

### 服务器仓库配置

使用 `server_repo` 选项指定要安装的 Music Assistant 服务器版本：

**格式**：`owner/repo@reference` 或仅 `reference`

- **分支**：`dev`、`main` 或任何分支名称，包括像 `feature/new-player` 这样带有斜线的分支名
- **拉取请求**：`pr-123`（将检出 PR #123）
- **分叉库**：`username/server@branch-name`，或仅使用该分叉库的默认分支 `username/server`
- **提交**：完整的提交 SHA
- **空/留白**：使用 App 镜像中预置的 nightly 构建（快速模式 - 无需安装）

**示例**：

```yaml
# 使用来自 App 镜像的 nightly 构建（FAST - 无需安装）
server_repo: ""

# 使用开发分支
server_repo: dev

# 使用特定分支
server_repo: feature/new-player

# 测试一个拉取请求
server_repo: pr-456

# 测试一个分叉库
server_repo: someuser/server@experimental-feature

# 使用特定提交
server_repo: abc123def456...
```

**默认值**：`""`（空 - 使用 App 镜像中预置的 nightly 构建）

> **注意**：如果留空 `server_repo``，App 将运行已安装在镜像中的 nightly 构建，因此启动时不需要下载任何东西。更新 App 以使用更新的 nightly。

### 前端仓库配置

使用 `frontend_repo` 选项指定要安装的 Music Assistant 前端版本：

**格式**：与 `server_repo` 相同 - `owner/repo@reference` 或仅 `reference`

- **分支**：`main`、`dev` 或任何分支名称，包括像 `feature/new-ui` 这样带有斜线的分支名
- **拉取请求**：`pr-789`（将检出 PR #789）
- **分叉库**：`username/frontend@branch-name`，或仅使用该分叉库的默认分支 `username/frontend`
- **提交**：完整的提交 SHA
- **空/留白**：跳过前端构建（使用捆绑的前端）

**示例**：

```yaml
# 跳过前端构建（FAST - 使用捆绑的前端）
frontend_repo: ""

# 使用主分支
frontend_repo: main

# 使用特定分支
frontend_repo: feature/new-ui

# 测试一个拉取请求
frontend_repo: pr-789

# 测试一个分叉库
frontend_repo: someuser/frontend@redesign

# 使用特定提交
frontend_repo: abc123def456...
```

**默认值**：`""`（空 - 使用捆绑的前端，无需构建）

> **注意**：如果留空 `frontend_repo`，前端构建将**完全跳过**。这大大减少了启动时间，非常适合仅需测试后端特性的场景。此时将使用该服务器安装捆绑的前端。

## 完整配置示例

### 快速模式（仅后端测试）
```yaml
log_level: info
safe_mode: false
server_repo: ""
frontend_repo: ""
```
运行 App 镜像中的 nightly 构建，无需安装。启动速度最快。

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
从源构建服务器（PR #456）和前端（PR #789）。提供全面测试的完全控制权。

## 重要说明

### 构建时间

构建时间取决于您的配置：
- **两者均为空** (`server_repo: ""` 和 `frontend_repo: ""`)：最快 - 无需安装，运行镜像中的 nightly 构建
- **仅指定 `server_repo`**：中等 - 仅构建服务器，跳过前端（适合后端测试）
- **均指定**：最慢 - 从源构建服务器和前端（完整开发模式）

**提示**：当仅需测试后端功能时，请留空 `frontend_repo` 以显著减少启动时间！

### 安全模式

- 如果需要在不加载提供者的情况下启动 Music Assistant，请设置 `safe_mode: true`
- 调试启动问题时有用

### 拉取请求语法

指定拉取请求时，请使用 `pr-NUMBER`（例如 `pr-123`、`pr-456`）。App 将自动获取并检出 PR。

## 故障排查

### App 无法启动

1. 检查 App 日志以查看构建错误
2. 验证分支/PR/分叉库是否存在且可访问
3. 尝试使用已知良好的分支，如 `dev` 或 `main`
4. 启用 `safe_mode: true` 以绕过提供者加载

### 构建失败

- 确保指定的 Git 引用存在 - 日志将命名库并指出其无法达到的副本
- 检查分支中是否存在依赖冲突
- 前端构建需要 Node.js，构建失败可能表示前端代码不兼容

### 性能问题

- 从源构建消耗更多资源
- 此 App 仅用于开发测试，不要作为日常驱动器

## 开发者工作流程

### 测试一个 PR

1. 找到 PR 编号（例如 #456）
2. 配置：`server_repo: pr-456`
3. 重启 App
4. 测试更改

### 开发功能

1. 将您的分支推送到您的分叉库
2. 配置：`server_repo: yourusername/server@your-branch`
3. 重启 App
4. 测试和迭代

### 测试服务器和前端的更改

```yaml
server_repo: pr-456
frontend_repo: pr-789
```
这允许您测试两个仓库之间的协调更改。

## 支持

这是一个开发者工具，不面向普通用户支持。如果遇到问题：

- 查看 App 日志
- 验证您的 Git 引用是否正确
- 首先测试默认分支
- 在 Music Assistant 开发者 Discord 频道中询问

## 与常规 App 的区别

| 特性      | 常规 App       | DEV App (Nightly 模式)    | DEV App (Source 模式)    |
| ----------|----------------|---------------------------|--------------------------|
| 安装方式   | 预构建发布       | 镜像中的 nightly 构建      | 从源构建                 |
| 启动时间   | 快               | 快                        | 较慢（构建时间）          |
| 稳定性     | 稳定版本         | nightly 构建              | 开发代码                 |
| 前端       | 捆绑             | 捆绑                      | 从源构建                 |
| 更新方式   | 自动              | 手动（重启）              | 手动（更改配置）          |
| 用途       | 生产环境         | 快速后端测试              | 完整开发/测试            |

**配置模式**：
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
