# 音乐助手开发版应用

这是一个为音乐助手专门设计的开发版应用，允许开发者快速在Home Assistant中测试音乐助手的特定分支、拉取请求，甚至是音乐助手的分支。

## 目的

本应用旨在：

- 在合并前测试拉取请求
- 开发和调试新功能
- 测试音乐助手的分支
- 运行用于测试的定制分支

## 工作原理

与使用预构建发布的常规音乐助手应用不同，这个开发版应用：

1. 从指定的Git源（分支、PR或分支）构建和安装服务器
2. 从指定的Git源（分支、PR或分支）构建和安装前端
3. 使用您的自定义代码启动音乐助手

构建过程：

1. 从指定的Git引用安装服务器包
2. 根据其构建过程构建前端（npm构建）
3. 将前端作为Python包安装（覆盖默认前端）
4. 启动音乐助手

## 配置

### 基本配置

```yaml
log_level: info
safe_mode: false
```

### 服务器仓库配置

使用`server_repo`选项来指定要安装的音乐助手服务器的版本：

**格式**：`owner/repo@reference`或仅`reference`

- **分支**：`dev`、`main`或任何分支名称
- **拉取请求**：`pr-123`（将检出PR #123）
- **分支**：`username/server@branch-name`
- **提交**：完整的提交SHA
- **空/空白**：使用GitHub上的最新夜间发布版（快速模式 - 无需构建）

**示例**：

```yaml
# 使用最新的夜间发布版（快速 - 无需构建）
server_repo: ""

# 使用dev分支
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

**默认**：`""`（空 - 使用GitHub上的最新夜间发布版）

> **注意**：当`server_repo`为空或空白时，应用将安装GitHub发布中的最新夜间发布轮。这是最快的选项，因为不需要服务器构建。

### 前端仓库配置

使用`frontend_repo`选项来指定要安装的音乐助手前端的版本：

**格式**：与服务器仓库相同 - `owner/repo@reference`或仅`reference`

- **分支**：`main`、`dev`或任何分支名称
- **拉取请求**：`pr-789`（将检出PR #789）
- **分支**：`username/frontend@branch-name`
- **提交**：完整的提交SHA
- **空/空白**：跳过前端构建（使用捆绑的前端）

**示例**：

```yaml
# 跳过前端构建（快速 - 使用捆绑的前端）
frontend_repo: ""

# 使用main分支
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

**默认**：`""`（空 - 使用捆绑的前端，无构建）

> **注意**：当`frontend_repo`为空或空白时，前端构建将**完全跳过**。这显著减少了启动时间，当您只需要测试后端功能时非常理想。将使用服务器安装捆绑的前端。

## 完整配置示例

### 快速模式（仅后端测试）
```yaml
log_level: info
safe_mode: false
server_repo: ""
frontend_repo: ""
```
使用GitHub上的最新夜间发布版，无需构建。启动时间最快。

### 后端开发模式
```yaml
log_level: debug
safe_mode: false
server_repo: dev
frontend_repo: ""
```
从`dev`分支构建服务器，跳过前端构建。快速测试后端更改的理想选择。

### 完整开发模式
```yaml
log_level: debug
safe_mode: false
server_repo: pr-456
frontend_repo: pr-789
```
从源构建服务器（PR #456）和前端（PR #789）。对全面测试具有完全控制权。

## 重要说明

### 构建时间

构建时间根据您的配置而变化：
- **两者都为空**（`server_repo: ""`和`frontend_repo: ""`）：最快 - 无需构建，使用最新夜间发布版
- **仅指定`server_repo`**：中等 - 仅构建服务器，跳过前端（理想的后端测试）
- **两者都指定**：最慢 - 从源构建服务器和前端（完整开发模式）

**提示**：当仅测试后端功能时，请将`frontend_repo`留空以显著减少启动时间！

### 安全模式

- 如果您需要在不加载提供者的情况下启动音乐助手，请设置`safe_mode: true`
- 对于调试任何启动问题非常有用

### 拉取请求语法

当指定拉取请求时，使用`pr-NUMBER`（例如，`pr-123`、`pr-456`）。应用将自动获取和检出PR。

## 故障排除

### 应用无法启动

1. 检查应用日志以查找构建错误
2. 验证分支/PR/分支是否存在并可访问
3. 尝试使用已知良好的分支，如`dev`或`main`
4. 启用`safe_mode: true`以跳过提供者加载

### 构建失败

- 确保指定的Git引用存在
- 检查分支中是否存在依赖冲突
- 前端构建需要Node.js - 构建失败可能表明不兼容的前端代码

### 性能问题

- 从源构建使用更多资源
- 仅用于开发测试，不要作为日常驱动程序使用

## 开发者工作流程

### 测试PR

1. 查找PR编号（例如，#456）
2. 配置：`server_repo: pr-456`
3. 重新启动应用
4. 测试更改

### 开发功能

1. 将您的分支推送到您的分支
2. 配置：`server_repo: yourusername/server@your-branch`
3. 重新启动应用
4. 测试和迭代

### 测试服务器和前端更改

```yaml
server_repo: pr-456
frontend_repo: pr-789
```

这允许您测试两个存储库之间的协调更改。

## 支持

这是一个开发者工具，不支持常规用户。如果您遇到问题：

- 检查应用日志
- 验证您的Git引用是否正确
- 首先使用默认分支进行测试
- 在音乐助手开发者Discord频道中提问

## 与常规应用的差异

| 特性      | 常规应用       | 开发版应用（夜间模式）    | 开发版应用（源模式）    |
| ------------ | ----------------- | ------------------------- | ------------------------ |
| 安装       | 预构建发布       | 最新夜间轮        | 从源构建        |
| 启动时间   | 快速              | 快速                      | 较慢（构建时间）      |
| 稳定性    | 稳定发布         | 夜间构建            | 开发代码         |
| 前端       | 捆绑           | 捆绑                   | 从源构建        |
| 更新       | 自动             | 手动（重启）          | 手动（更改配置）   |
| 用例       | 生产             | 快速后端测试         | 全面开发/测试   |

**配置模式**：
- **快速模式**：两个存储库都为空 - 使用最新夜间发布版，无构建
- **后端开发模式**：仅指定`server_repo` - 构建服务器，使用捆绑的前端
- **完整开发模式**：两个存储库都指定 - 从源构建一切
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
