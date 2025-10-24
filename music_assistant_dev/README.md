# Music Assistant DEV Add-on

这是一个专门为 Music Assistant 开发的特殊开发插件，允许开发人员快速测试特定的分支、拉取请求，甚至直接在 Home Assistant 中测试 Music Assistant 的分支。

## 目的

这个插件是为以下目的设计的：

- 在合并之前测试拉取请求
- 开发和调试新功能
- 测试 Music Assistant 的分支
- 运行用于测试的自定义分支

## 工作原理

与使用预构建发布的常规 Music Assistant 插件不同，这个开发插件：

1. 从指定的 Git 源（分支、PR 或分支）构建和安装服务器
2. 从指定的 Git 源（分支、PR 或分支）构建和安装前端
3. 使用您的自定义代码启动 Music Assistant

构建过程：

1. 从指定的 Git 引用安装服务器包
2. 根据其构建过程（npm build）构建前端
3. 将前端作为 Python 包安装（覆盖默认前端）
4. 启动 Music Assistant

## 配置

### 基本配置

```yaml
log_level: info
safe_mode: false
```

### 服务器仓库配置

使用 `server_repo` 选项来指定要安装的 Music Assistant 服务器的版本：

**格式**： `owner/repo@reference` 或只是 `reference`

- **分支**： `dev`、`main` 或任何分支名称
- **拉取请求**： `pr-123`（将检出 PR #123）
- **分支**： `username/server@branch-name`
- **提交**： 完整的提交 SHA

**示例**：

```yaml
# 使用 dev 分支（默认）
server_repo: dev

# 使用特定分支
server_repo: feature/new-player

# 测试拉取请求
server_repo: pr-456

# 测试分支
server_repo: someuser/server@experimental-feature

# 使用特定提交
server_repo: abc123def456...
```

**默认**： `dev`（使用 `music-assistant/server@dev`）

### 前端仓库配置

使用 `frontend_repo` 选项来指定要安装的 Music Assistant 前端的版本：

**格式**： 与 server_repo 相同 - `owner/repo@reference` 或只是 `reference`

**示例**：

```yaml
# 使用 main 分支（默认）
frontend_repo: main

# 使用特定分支
frontend_repo: feature/new-ui

# 测试拉取请求
frontend_repo: pr-789

# 测试分支
frontend_repo: someuser/frontend@redesign

# 使用特定提交
frontend_repo: abc123def456...
```

**默认**： `main`（使用 `music-assistant/frontend@main`）

## 完整配置示例

```yaml
log_level: debug
safe_mode: false
server_repo: pr-456
frontend_repo: someuser/frontend@custom-ui
```

这将测试服务器上的 PR #456，并使用来自分支的自定义 UI。

## 重要说明

### 构建时间

- 启动需要一段时间，因为需要构建代码

### 安全模式

- 如果您需要在不加载提供者的情况下启动 Music Assistant，请设置 `safe_mode: true`
- 对于调试任何启动问题非常有用

### 拉取请求语法

在指定拉取请求时，使用 `pr-NUMBER`（例如，`pr-123`、`pr-456`）。插件将自动获取并检出 PR。

## 故障排除

### 插件无法启动

1. 检查插件日志中的构建错误
2. 验证分支/PR/分支是否存在并且可以访问
3. 尝试使用已知良好的分支，如 `dev` 或 `main`
4. 启用 `safe_mode: true` 以绕过提供者加载

### 构建失败

- 确保指定的 Git 引用存在
- 检查分支中是否存在依赖冲突
- 前端构建需要 Node.js - 构建失败可能表示前端代码不兼容

### 性能问题

- 从源代码构建使用更多资源
- 仅将此插件用于开发测试，而不是日常使用

## 开发者工作流程

### 测试 PR

1. 找到 PR 编号（例如，#456）
2. 配置：`server_repo: pr-456`
3. 重新启动插件
4. 测试更改

### 开发功能

1. 将您的分支推送到您的分支
2. 配置：`server_repo: yourusername/server@your-branch`
3. 重新启动插件
4. 测试并迭代

### 测试服务器和前端更改

```yaml
server_repo: pr-456
frontend_repo: pr-789
```

这允许您测试两个存储库之间的协调更改。

## 支持

这是一个开发者工具，不适用于普通用户。如果您遇到问题：

- 检查插件日志
- 验证您的 Git 引用是否正确
- 首先使用默认分支进行测试
- 在 Music Assistant 开发者 Discord 频道中提问

## 与常规插件的差异

| 功能      | 常规插件    | DEV 插件             |
| ------------ | ----------------- | ---------------------- |
| 安装       | 预构建发布 | 从源构建      |
| 启动时间   | 快速          | 较慢（构建时间）    |
| 稳定性    | 稳定发布   | 开发代码       |
| 更新       | 自动         | 手动（更改配置） |
| 用途       | 生产        | 开发/测试    |