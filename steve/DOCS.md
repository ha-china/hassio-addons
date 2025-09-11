# Home Assistant 插件：SteVe

SteVe OCPP 服务器用于与充电点进行通信

![支持 aarch64 架构][aarch64-shield] ![支持 amd64 架构][amd64-shield]

## 关于

重要提示：此插件要求 MariaDB 插件已安装并运行！

此插件为实验性插件。
SteVe 是一个用于与充电点进行通信的 OCPP 服务器。

## 安装

按照以下步骤在系统上安装插件：

添加仓库 `https://github.com/erik73/hassio-addons`。
找到“SteVe”插件并单击它。
点击“安装”按钮。

## 如何使用

### 启动插件

安装后，您将看到默认配置。

重要提示：此插件要求 MariaDB 插件已安装并运行！

所需的唯一配置是提供 admin_user 和 admin_password。
通过点击“保存”按钮来保存插件配置。
启动插件。

## 配置

重要提示：此插件要求 MariaDB 插件已安装并运行！

示例配置：

```yaml
admin_user: admin
admin_password: admin
```

请注意：此插件消耗大量内存。
主机上安装的最低要求为 4GB RAM。
根据其他已安装的插件，4GB 可能不够。

还需注意，admin_user 和 admin_password 在插件第一次启动后无法更改，因为 MariaDB 数据库是在插件首次启动时使用这些凭据创建的。

没有入口支持，因此要访问 SteVe 网络界面，您必须将浏览器指向 http://<your.homeassistant.host.ip>:8180 登录 SteVe。

## 支持

有问题吗？

您可以在 [GitHub 上这里打开一个问题][issue]。

[aarch64-shield]: https://img.shields.io/badge/aarch64-yes-green.svg
[amd64-shield]: https://img.shields.io/badge/amd64-yes-green.svg