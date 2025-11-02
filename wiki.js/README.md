# Home Assistant Community Add-on: Wiki.js
![Supports aarch64 Architecture][aarch64-shield] ![Supports amd64 Architecture][amd64-shield] ![Supports armhf Architecture][armhf-shield] ![Supports armv7 Architecture][armv7-shield]
![Project Maintenance][maintenance-shield]

Wiki.js for Homeassistant OS

## 关于

最强大且可扩展的开源 Wiki 软件。
使用 Wiki.js 美丽且直观的界面，让编写文档成为一种乐趣！

## 安装

[![FaserF Homeassistant Addons](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2FFaserF%2Fhassio-addons)
<br />
这个插件的安装非常简单，与安装任何其他自定义 Home Assistant 插件没有区别。<br />
只需点击上面的链接或添加我的仓库到 hassio 插件仓库： <https://github.com/FaserF/hassio-addons>

请确保安装了 MariaDB 插件！

## 配置

**注意**：_更改配置时，请记得重启插件。_

示例插件配置：

```yaml
ssl: true
certfile: fullchain.pem
keyfile: privkey.pem
```

**注意**：_这只是个示例，不要复制粘贴！自己创建！_

### 选项：`ssl`

启用/禁用 Web 界面的 SSL (HTTPS)。将其设置为 `true` 以启用，`false` 否则。

如果您需要一个自签名证书，请查看我的 openssl 插件： <https://github.com/FaserF/hassio-addons/tree/master/openssl>

**注意**：_文件必须存储在 `/ssl/`，这是默认的路径。_

### 选项：`reset_database`

启用重置 pterodactyl 的数据库文件。请注意，此操作无法撤销！请谨慎使用。

## Ingress

这个插件目前不完全支持 ingress！希望很快就会支持。

## 支持

有问题或问题？

您可以在 GitHub 上 [打开问题][issue]。
请记住，这个软件只测试在 armv7 上运行的 Raspberry Pi 4 上。

## 作者和贡献者

原始程序来自 Requarks 团队 [NGPixel][NGPixel]。更多信息，请访问此页面： <https://github.com/Requarks/wiki>
hassio 插件由 [FaserF] 提供。

## 许可证

MIT 许可证

版权 (c) 2025 FaserF & Requarks

特此授予任何获得此软件及其相关文档文件（“软件”）副本的人，在软件中自由处理的权限，不受任何限制，包括但不限于使用、复制、修改、合并、发布、分发、再许可和/或销售软件副本的权利，并允许提供软件的人这样做，但须遵守以下条件：

上述版权声明和本许可声明应包含在软件的所有副本或重要部分中。

软件按“原样”提供，不提供任何形式的保证，无论是明示的还是暗示的，包括但不限于对适销性、特定用途适用性和非侵权性的保证。在任何情况下，作者或版权持有人均不对任何索赔、损害或其他责任承担责任，无论是由合同、侵权或其他行为引起的，也不论是由软件本身或软件的使用或其他交易引起的。
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
