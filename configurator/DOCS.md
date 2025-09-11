# Home Assistant 插件：文件编辑器

## 安装

按照以下步骤在您的系统上安装该插件：

1. 在您的 Home Assistant 前端导航到 **设置** -> **插件** -> **插件商店**。
2. 找到“文件编辑器”插件并点击它。
3. 点击“安装”按钮。

## 使用方法

通常情况下，此插件不需要您进行任何配置。

1. 切换“在侧边栏显示”选项，这将把文件编辑器添加到主菜单。
2. 启动插件。
3. 刷新您的浏览器，侧边栏现在可见“文件编辑器”。
4. 点击“文件编辑器”菜单选项并开始配置！

## 配置

插件配置：

```yaml
dirsfirst: false
enforce_basepath: false
git: true
ignore_pattern:
  - __pycache__
ssh_keys: []
```

### 选项：`dirsfirst`（必需）

此选项允许您在文件浏览器树中优先列出目录。

将其设置为 `true` 以首先列出目录，否则设置为 `false`。

### 选项：`enforce_basepath`（必需）

如果设置为 `true`，则访问限制在 `/homeassistant` 目录内的文件
（也称为 Home Assistant 本身内部的 `/config` 文件夹）。

### 选项：`git`（必需）

如果设置为 `true`，插件将为支持的目录初始化 git。

### 选项：`ignore_pattern`（必需）

此选项允许您在文件浏览器树中隐藏文件和文件夹。
默认情况下，它隐藏 `__pycache__` 文件夹。

### 选项：`ssh_keys`（必需）

包含 SSH 私钥的文件名列表。这些可以用于允许访问远程 git 仓库。

## 已知问题和限制

- 此插件只能通过 Ingress 使用，没有直接访问权限。

## 支持

有问题吗？

您有多种方式可以解答您的问题：

- [Home Assistant Discord 聊天服务器][discord]。
- Home Assistant [社区论坛][forum]。
- 加入 [Reddit 子版块][reddit] 在 [/r/homeassistant][reddit]

如果您发现了一个错误，请 [在我们的 GitHub 上打开一个问题][issue]。

[discord]: https://discord.gg/c5DvZ4e
[forum]: https://community.home-assistant.io
[issue]: https://github.com/home-assistant/addons/issues
[reddit]: https://reddit.com/r/homeassistant