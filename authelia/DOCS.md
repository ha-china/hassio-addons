# Home Assistant 拓展程序：Authelia

## 描述

Authelia 是一个开源的身份验证和授权服务器，旨在为您的服务提供安全的访问控制。此扩展程序允许您在 Home Assistant 中运行 Authelia。

## 支持的架构

此扩展程序支持以下架构：

- `amd64`
- `aarch64`

## 安装

1. 在 Home Assistant 中导航到 **设置** > **扩展程序**。
2. 点击 **扩展程序商店** 并搜索 **Authelia**。
3. 如有必要，添加 `https://github.com/einschmidt/hassio-addons` 仓库
4. 安装扩展程序并使用下方的设置进行配置。
5. 启动扩展程序并打开日志以检查任何问题。

## 配置

在首次启动扩展程序之前，您**必须编辑 `domain`** 选项在配置中。这是一个关键步骤，因为它确保 Authelia 使用您的特定域名进行正确功能。

### 配置步骤

1. **编辑域名**  
   `domain` 选项必须在首次启动之前设置。此选项对于正确路由请求和配置会话 Cookie 至关重要。

   - 示例：
     ```yaml
     domain: yourdomain.com
     ```

2. **首次启动**  
   首次启动时，扩展程序将自动在 `addon_config` 文件夹中创建 `config.yml` 文件。此文件将被默认设置填充，包括配置的域名和其他所需设置。

3. **编辑生成的 `config.yml`**  
   首次启动后，您将在 `/addon_config` 文件夹中找到 `config.yml` 文件。**您必须编辑此文件以匹配您的个人环境**。确保所有必要设置，如域名、用户身份验证路径和其他相关选项都正确配置。

4. **重新启动扩展程序**  
   在对 `config.yml` 文件进行任何编辑后，**您必须重新启动扩展程序** 以使更改生效。此步骤对于确保更新的配置的正确应用至关重要。

### 重要提示

- `domain` 设置仅在初始配置创建时需要。
- 在首次启动后对 `config.yml` 进行任何更改都需要**重新启动扩展程序** 以应用新设置。

请确保在继续之前仔细审查和自定义 `config.yml` 以确保最佳运行。

## 更多信息

有关更多详细信息，请访问官方 Authelia 资源：

- **网站：** [Authelia](https://www.authelia.com//)
- **文档：** [入门指南](https://www.authelia.com/integration/prologue/get-started/)