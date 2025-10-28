# 口袋 ID 插件

## 概述

[Pocket ID](https://pocket-id.org/) 是一个简单且易于使用的 **OIDC（OpenID Connect）提供者**，它允许使用密钥进行身份验证。它允许为您的服务提供无缝且安全的用户身份验证，而无需依赖传统密码。

此插件作为 Home Assistant 插件运行，在您的网络中提供一个 **身份提供者**。

## 支持的架构

此插件支持以下架构：

- `amd64`
- `aarch64`

## 配置

**注意**：_更改配置时请记住重新启动插件。_

示例插件配置：

```yaml
APP_URL: https://id.domain.com
TRUST_PROXY: true
```

### 选项：`APP_URL`

`APP_URL` 选项设置 Pocket ID 实例的面向公众的 URL。这必须是 HTTPS，并且客户端可以访问它以正常进行身份验证。

### 选项：`TRUST_PROXY`

如果设置为 `true`，Pocket ID 将信任代理头，如 `X-Forwarded-For`。当在反向代理后面运行时，这很有用。

### 选项：`MAXMIND_LICENSE_KEY`

MaxMind GeoIP 数据库集成的可选许可证密钥。如果提供，它将启用基于地理位置的功能。

## 使用方法

1. **在 Home Assistant 中安装插件**。
2. **根据需要配置选项**，通过插件设置。
3. **启动插件**以启动 Pocket ID。
4. **使用配置的 `APP_URL`**，以与您的 OIDC 兼容应用程序集成。

## 故障排除

- 确保 `APP_URL` 设置正确且可访问。
- 如果使用反向代理，将 `TRUST_PROXY` 设置为 `true` 以避免身份验证问题。
- 如果需要地理位置功能，获取并配置 MaxMind 许可证密钥。

## 更多信息

有关更多详细信息，请访问官方 Pocket ID 资源：

- **网站**：[Pocket ID](https://pocket-id.org/)
- **文档**：[入门指南](https://pocket-id.org/docs/introduction/)