# Home Assistant Add-on: Solumati

反滑动革命 - 一个专注于有意义的匹配的自托管约会平台。

![支持 aarch64 架构](https://img.shields.io/badge/aarch64-yes-green.svg)
![支持 amd64 架构](https://img.shields.io/badge/amd64-yes-green.svg)

## 关于

Solumati 是一个革命性的约会平台，旨在让匹配回归意义。
通过托管这个插件，你可以在你的 Home Assistant 服务器上直接运行 Solumati 平台的实例。

## 功能

- **Home Assistant Ingress**: 通过 HA 侧边栏安全访问（无需端口转发）
- **自托管**: 你的数据保留在你的服务器上
- **集成数据库**: 附带预配置的 PostgreSQL 数据库
- **自动配置**: 数据库连接的零配置设置
- **测试模式**: 可选模式，用于使用虚拟用户数据进行测试
- **OAuth/SMTP 支持**: 在首次登录后通过管理面板进行配置
- **安全**:
  - 管理员密码在首次启动时自动生成
  - 数据库密码由内部管理和随机化
  - Ingress 提供安全的认证访问

## 安装

1. 将此存储库添加到你的 Home Assistant Add-on Store。
2. 安装 **Solumati** 插件。
3. 配置选项（见下文）。
4. 启动插件。
5. 点击 "打开 Web UI" 或通过侧边栏访问。

## 配置

所有选项都通过 Home Assistant UI 进行配置。数据库自动管理。

### 选项

| 选项                   | 类型    | 默认 | 描述                                                                  |
| :----------------------- | :------ | :------ | :------------------------------------------------------------------- |
| `log_level`              | select  | `info`  | 日志详细程度：跟踪，调试，信息，警告，错误，致命                     |
| `test_mode`              | boolean | `false` | 启用测试模式，使用虚拟用户数据进行测试                              |
| `app_base_url`           | string  | (auto)  | 应用的基本 URL（用于电子邮件/链接）。如果为空，则自动从 Ingress 检测 |
| `marketing_page_enabled` | boolean | `false` | 启用营销页面                                                    |

> **注意**: OAuth 提供商和 SMTP 设置在首次登录后在管理面板中配置，而不是在这里。

### ⚠️ 工厂重置（危险区域）

| 选项          | 类型    | 默认 | 描述                                           |
| :------------ | :------ | :------ | :-------------------------------------------- |
| `factory_reset` | boolean | `false` | **危险！** 在下次启动时永久删除所有数据 |

> **警告**: 启用 `factory_reset` 将 **永久删除**:
>
> - 所有用户账户和资料
> - 所有消息和对话
> - 所有上传的图片
> - 所有设置和配置
>
> 这无法撤销！重置后，你必须手动禁用此选项，否则每次重启时你的数据将被清除。

## 使用

### 首次启动 & 管理员密码

当你首次启动插件时：

1. 启动插件
2. 检查 **日志** 选项卡
3. 查找：`Admin user created with password: ...`
4. 立即复制此密码并安全存储！

### 访问界面

- **推荐**: 点击 Home Assistant 侧边栏中的 Solumati 图标（Ingress）
- **替代**: 点击 "打开 Web UI" 或访问 `http://homeassistant.local:8099`

### 测试模式

启用 `test_mode` 以生成虚拟用户以测试匹配算法。
在生产环境中禁用它以防止虚假资料。

## 支持

有问题吗？[在这里打开问题](https://github.com/FaserF/hassio-addons/issues)。

## 作者与贡献者

[原始 Solumati 软件](https://github.com/FaserF/Solumati) 由 **FaserF** 创建。

## 许可证

GNU AFFERO GENERAL PUBLIC LICENSE (AGPL)
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
