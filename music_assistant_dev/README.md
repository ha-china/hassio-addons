# Music Assistant DEV App

这是一个专为 Music Assistant 构建的特殊开发应用，允许开发人员快速在 Home Assistant 中测试特定的分支、拉取请求（pull requests）甚至 Music Assistant 的镜像库（fork）。

## 目的

此应用适用于：

- 合并前测试拉取请求
- 开发和新特性调试
- 测试 Music Assistant 的镜像库
- 运行自定义分支进行测试

## 工作原理

与使用预发布版本的常规 Music Assistant 应用不同，此 Dev 应用：

1. 从指定的 Git 源（分支、PR 或镜像库）构建并安装服务器
2. 从指定的 Git 源（分支、PR 或镜像库）构建并安装前端
3. 使用您的自定义代码启动 Music Assistant

构建过程：

1. 从指定的 Git 引用中安装服务器包
2. 从 lockfile 中检测出包管理器（pnpm、yarn 或 npm），并据此构建前端
3. 将前端作为 Python 包安装（覆盖默认前端）
4. 启动 Music Assistant

该应用镜像是在夜间版本（nightly）服务器镜像的基础上构建的，因此依赖设置、捆绑的应用变量以及 cliairplay 二进制文件已经就绪。安装分支只需应用与夜间版本实际不同的部分。

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
- **拉取请求**：`pr-123`（将检出 PR #123）
- **镜像库**：`username/server@branch-name`，或 `username/server` 使用该镜像库的默认分支
- **提交**：完整的提交 SHA
- **空/空白**：使用内置于应用镜像中的夜间构建（快速模式 - 无需安装）

**示例**：

```yaml
# 使用应用镜像中的夜间构建（FAST - 无需安装）
server_repo: ""

# 使用 dev 分支
server_repo: dev

# 使用特定分支
server_repo: feature/new-player

# 测试拉取请求
server_repo: pr-456

# 测试镜像库
server_repo: someuser/server@experimental-feature

# 使用特定提交
server_repo: abc123def456...
```

**默认值**：`""`（空 - 使用内置于应用镜像中的夜间构建）

> **注意**：当 `server_repo` 留空或留白时，应用将运行已安装在其镜像中的夜间构建，因此在启动时不会下载任何内容。请重建应用以过渡到更新的夜间版本。

### 前端仓库配置

使用 `frontend_repo` 选项指定要安装的 Music Assistant 前端版本：

**格式**：与 server_repo 相同 - `owner/repo@reference` 或仅 `reference`

- **分支**：`main`、`dev` 或任何分支名称，包括带斜杠的分支，如 `feature/new-ui`
- **拉取请求**：`pr-789`（将检出 PR #789）
- **镜像库**：`username/frontend@branch-name`，或 `username/frontend` 使用该镜像库的默认分支
- **提交**：完整的提交 SHA
- **空/空白**：跳过前端构建（使用捆绑的前端）

**示例**：

```yaml
# 跳过前端构建（FAST - 使用捆绑的前端）
frontend_repo: ""

# 使用 main 分支
frontend_repo: main

# 使用特定分支
frontend_repo: feature/new-ui

# 测试拉取请求
frontend_repo: pr-789

# 测试镜像库
frontend_repo: someuser/frontend@redesign

# 使用特定提交
frontend_repo: abc123def456...
```

**默认值**：`""`（空 - 使用捆绑的前端，无需构建）

> **注意**：当 `frontend_repo` 留空或留白时，前端构建将**完全跳过**。这大大缩短了启动时间，且仅在需要测试后端功能时最为理想。相反，将使用与服务器安装捆绑的前端。

## 完整配置示例

### 快速模式（仅后端测试）
```yaml
log_level: info
safe_mode: false
server_repo: ""
frontend_repo: ""
```
使用应用镜像中的夜间构建，无需安装。启动速度最快。

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
从源代码构建服务器（PR #456）和前端（PR #789）。全面测试所需的全控模式。

## 重要说明

### 构建时间

构建时间因配置而异：
- **两者均为空** (`server_repo: ""` 和 `frontend_repo: ""`)：最快 - 无需安装，运行图像中的夜间构建
- **仅指定 `server_repo`**：中等 - 仅构建服务器，跳过前端（适合后端测试）
- **两者均指定**：最慢 - 从源代码同时构建服务器和前端（完整开发模式）

**提示**：仅在测试后端功能时将 `frontend_repo` 留空，可显著减少启动时间！

### 安全模式

- 如果需要在不加载提供程序的情况下启动 Music Assistant，请设置 `safe_mode: true`
- 可用于调试任何启动问题

### 拉取请求语法

在指定拉取请求时，使用 `pr-NUMBER`（例如 `pr-123`、`pr-456`）。应用将自动获取并检出 PR。

## 故障排除

### 应用无法启动

1. 检查应用日志中的构建错误
2. 验证分支/PR/镜像库存在且可访问
3. 尝试使用已知正常的分支，如 `dev` 或 `main`
4. 启用 `safe_mode: true` 以绕过提供程序加载

### 构建失败

- 确保指定的 Git 引用存在 - 日志中将命名该引用并指出其无法访问的位置
- 检查分支中是否存在依赖冲突
- 前端构建需要 Node.js - 构建失败可能表明前端代码不兼容

### 性能问题

- 从源代码构建会占用更多资源
- 此应用仅用于开发测试，不要将其作为日常驾驶应用

## 开发人员工作流

### 测试 PR

1. 找到 PR 编号（例如 #456）
2. 配置：`server_repo: pr-456`
3. 重启应用
4. 测试更改

### 开发功能

1. 将您的分支推送到您的镜像库
2. 配置：`server_repo: yourusername/server@your-branch`
3. 重启应用
4. 测试并迭代

### 测试服务器和前端的更改

```yaml
server_repo: pr-456
frontend_repo: pr-789
```

这允许您测试两个仓库之间的协调更改。

## 支持

这是一个开发人员工具，普通用户不受支持。如果您遇到问题：

- 检查应用日志
- 验证您的 Git 引用是否正确
- 首先使用默认分支进行测试
- 在 Music Assistant 开发 Discord 频道中提问

## 与常规应用的区别

| 功能        | 常规应用       | DEV 应用 (夜间模式)    | DEV 应用 (源码模式)    |
| ----------- | -------------- | --------------------- | --------------------- |
| 安装        | 预发布版本     | 镜像中的夜间构建      | 从源代码构建          |
| 启动时间    | 快速           | 快速                  | 较慢（包含构建时间）   |
| 稳定性      | 稳定版本       | 夜间构建              | 开发代码              |
| 前端        | 捆绑           | 捆绑                  | 从源代码构建          |
| 更新        | 自动           | 手动（重启）          | 手动（更改配置）      |
| 用途        | 生产环境       | 快速后端测试          | 完整开发/测试         |

**配置模式**：
- **快速模式**：两个仓库均为空 - 运行图像中的夜间构建，无需安装
- **后端开发模式**：仅指定 `server_repo` - 构建服务器，使用捆绑的前端
- **完整开发模式**：两个仓库均指定 - 一切都从源代码构建

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
