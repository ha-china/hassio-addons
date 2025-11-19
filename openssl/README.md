# Home Assistant Community Add-on: OpenSSL
![Supports aarch64 Architecture][aarch64-shield] ![Supports amd64 Architecture][amd64-shield] ![Supports armhf Architecture][armhf-shield] ![Supports armv7 Architecture][armv7-shield] ![Supports i386 Architecture][i386-shield]
![Project Maintenance][maintenance-shield]

OpenSSL - 自签名证书 for Homeassistant OS

## 关于

OpenSSL 是一个用于应用程序的软件库，用于在计算机网络上安全地通信，防止窃听或需要识别另一端的人员。它被大多数互联网服务器广泛使用，包括大多数 HTTPS 网站。

OpenSSL 包含了 SSL 和 TLS 协议的开源实现。核心库是用 C 编程语言编写的，实现了基本的加密功能，并提供各种实用功能。有各种包装器允许在多种计算机语言中使用 OpenSSL 库。

OpenSSL 软件基金会（OSF）在大多数法律方面代表 OpenSSL 项目，包括贡献者许可协议、管理捐赠等。OpenSSL 软件服务（OSS）也代表 OpenSSL 项目，用于支持合同。

## 安装

[![FaserF Homeassistant Addons](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2FFaserF%2Fhassio-addons)
<br />
此插件的安装非常简单，与安装任何其他自定义 Home Assistant 插件没有区别。<br />
只需点击上面的链接或将我的仓库添加到 hassio 插件仓库： <https://github.com/FaserF/hassio-addons>

启动插件后，将创建自签名证书，并将其放置在：
/ssl/key_openssl.pem
/ssl/cert_openssl.pem

这些证书然后可以被其他插件使用，例如我的 apache2 网络服务器插件。
如果证书即将过期，只需重新启动插件一次，新的证书将被创建。
警告：重新启动插件后，上述旧证书将被删除并覆盖！

## 配置

**注意**：_更改配置时请重新启动插件。_

示例插件配置：

```yaml
website_name: mywebsite.ddns.net
```

**注意**：_这只是一个示例，不要复制粘贴！创建你自己的！_

### 选项：`website_name`

此选项是必需的。这将作为自签名证书的网站名称。

## 支持

有问题吗？

你可以在 [这里打开问题][issue] GitHub。
请注意，此软件仅在 armv7 运行在 Tinkerboard 上进行过测试。

## 作者和贡献者

原始程序来自 OpenSSL 项目。更多信息请访问此页面： <https://www.openssl.org/>
hassio 插件由 [FaserF] 提供。

## 许可证

MIT 许可证

版权所有 (c) 2019-2025 FaserF & The OpenSSL Project

特此免费授予任何获得此软件和关联文档文件（“软件”）副本的人
在软件中自由处理的权限，包括但不限于使用、复制、修改、合并、发布、分发、再许可和/或销售软件副本
的权限，并允许提供软件的人这样做，但须遵守以下条件：

上述版权声明和本许可声明应包含在软件的所有副本或重要部分中。

软件按“原样”提供，不提供任何明示或暗示的保证，包括但不限于对适销性、特定用途适用性和非侵权的保证。在任何情况下，作者或版权持有人均不对任何索赔、损害或其他责任承担责任，无论是合同行为、侵权行为还是其他行为，这些责任均源于、来自或与软件的使用或其他交易有关。

[aarch64-shield]: https://img.shields.io/badge/aarch64-yes-green.svg
[amd64-shield]: https://img.shields.io/badge/amd64-yes-green.svg
[armhf-shield]: https://img.shields.io/badge/armhf-yes-green.svg
[armv7-shield]: https://img.shields.io/badge/armv7-yes-green.svg
[FaserF]: https://github.com/FaserF/
[i386-shield]: https://img.shields.io/badge/i386-yes-green.svg
[issue]: https://github.com/FaserF/hassio-addons/issues
[maintenance-shield]: https://img.shields.io/maintenance/yes/2025.svg
**⚠️ This resource is intended to help Chinese Home Assistant users more easily install excellent add-ons. If you are not a Chinese user, please read repository readme first**



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
