# Home Assistant 添加组件：Solumati

反滑动革命 - 一个专注于有意义的匹配的自托管约会平台。

![支持 aarch64 架构](https://img.shields.io/badge/aarch64-yes-green.svg)
![支持 amd64 架构](https://img.shields.io/badge/amd64-yes-green.svg)

## 关于

Solumati 是一个革命性的约会平台，旨在将意义带回到匹配中。
通过托管这个添加组件，您可以在您的 Home Assistant 服务器上直接运行 Solumati 平台的实例。

## 功能

- **自托管**：您的数据保留在您的服务器上。
- **集成数据库**：附带预配置的 PostgreSQL 数据库。
- **自动配置**：数据库连接的无配置设置。
- **测试模式**：可选模式，用于测试匹配算法和功能。
- **安全**：
  - 管理员密码在首次启动时自动生成。
  - 数据库密码由内部管理并随机化。
  - 进程级安全修复（隐藏凭证）。

## 安装

1. 将此仓库添加到您的 Home Assistant 添加组件商店。
1. 安装 **Solumati** 添加组件。
1. 启动添加组件。

## 配置

**注意**：数据库密码由内部管理，不需要配置。
应用程序密钥由系统自动处理。

### 选项

| 选项      | 类型    | 默认 | 描述                                                                     |
|:----------|:-------|:-----|:-------------------------------------------------------------------------|
| `test_mode` | 布尔值 | `false` | 启用应用程序的测试模式。适用于开发或调试。                                |
| `log_level` | 字符串  | `info`  | 控制日志的详细程度（跟踪、调试、信息、警告、错误、致命）。                  |

## 使用

### 首次启动 & 管理员密码

当您首次启动 Solumati 添加组件（或如果数据库被重置）时，
应用程序将生成一个安全的 **管理员密码**。

1. 启动添加组件。
1. 检查添加组件的 **日志** 选项卡。
1. 查找指示生成的管理员凭证的消息（例如，“管理员用户已创建，密码：...”）。
1. 立即复制此密码并安全存储。

### 访问界面

启动后，点击 **打开 Web UI** 以访问 Solumati 界面。

## 支持

有问题？
您可以在此处 [打开问题](https://github.com/FaserF/hassio-addons/issues)。

## 作者与贡献者

原始 Solumati 程序由 **FaserF** 创建。
添加组件由 [FaserF] 维护。

## 许可证

知识共享署名-非商业性使用-相同方式共享 4.0 国际 (CC BY-NC-SA 4.0)
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
