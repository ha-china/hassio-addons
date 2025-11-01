# Home Assistant Community Add-on: xqrepack
![支持 aarch64 架构][aarch64-shield] ![支持 amd64 架构][amd64-shield] ![支持 armhf 架构][armhf-shield] ![支持 armv7 架构][armv7-shield] ![支持 i386 架构][i386-shield]
![项目维护状态][maintenance-shield]

xqrepack - 重新打包和重建 MiWifi 图像以获得 SSH 访问和其他功能。

## 关于

这些脚本允许您修改 Xiaomi R3600 (AX3600) / rm1800 (AX1800) 固件图像，以确保 SSH 和 UART 访问始终启用。

默认的 root 密码是 password。请记得在升级后登录路由器并更改它。您的路由器设置，如 IP 地址和 SSIDs，存储在 nvram 中，应保持不变。

⚠ 脚本会尽力移除或禁用“电话回家”二进制文件，以及智能控制器（AIoT）部分，让您得到一个（接近）OpenWRT 路由器，您可以通过 UCI 或 /etc/config 进行配置。在保留原始功能和隐私考虑之间，我更倾向于谨慎处理，宁愿牺牲一些功能，以便连接到一个我更有信心接入互联网的路由器。

请注意，为了最初获得对路由器的 SSH 访问，您需要降级到 1.0.17 版本并利用它。一旦您有了 SSH，您就可以使用这种方法来维护新版本的 SSH 访问。<br />

请访问 @geekman 原始程序仓库：<https://github.com/geekman/xqrepack>

## 安装

[![FaserF Homeassistant Addons](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2FFaserF%2Fhassio-addons)
<br />
这个插件的安装非常简单，与其他自定义 Home Assistant 插件的安装方式相同。<br />
只需点击上面的链接或添加我的仓库到 hassio 插件仓库：<https://github.com/FaserF/hassio-addons>

新的固件将位于您的 "firmware_path" 文件夹中，并命名为 "r3600-raw-img.bin"

## 配置

**注意**: _更改配置时请重启插件。_

示例插件配置：

### AX3600

```yaml
firmware_path: /share/miwifi_firmware/
firmware_name: miwifi_r3600_firmware_02d97_1.1.15.bin
```
<br />

### AX1800

```yaml
firmware_path: /share/miwifi_firmware/
firmware_name: miwifi_rm1800_firmware_df7e3_1.0.385.bin
```
<br />

**注意**: _这只是一个示例，不要复制粘贴！创建自己的！_

### 选项: `firmware_path`

这个选项是必需的。根据您的固件文件文件夹位置进行更改。<br />

注意：它必须在 /share 文件夹中的某个位置！其他文件夹对这个插件不可见。

### 选项: `firmware_name`

这个选项是必需的。根据您的固件文件名称进行更改。<br />
注意：如果您使用 AX1800 的图像，请确保固件文件中包含 rm1800。这是必需的，因为 AX1800 的修改过程与 AX3600 不同！

## 支持

有问题或问题？

您可以在这里 [打开问题][issue] GitHub。<br />
请注意，这个软件只在 armv7 运行在 Raspberry Pi 4 上进行过测试。

## 作者和贡献者

原始程序来自 @geekman。更多信息请访问此页面：<https://github.com/geekman/xqrepack>
hassio 插件由 [FaserF] 提供。

## 许可证

xqrepack 在 3 条款（修改）BSD 许可证下授权。

版权 (C) 2020-2025 Darell Tan / FaserF 用于 HA 插件

源代码和二进制形式的重新分发和使用，无论是否修改，都是允许的，但必须满足以下条件：

重新分发的源代码必须保留上述版权声明、此条件列表和以下免责声明。
二进制形式的重新分发必须在提供的文档和/或其他材料中复制上述版权声明、此条件列表和以下免责声明。
作者的名字不得用于未经特定事先书面许可推广或支持由此软件派生的产品。
此软件由作者按“原样”提供，任何明示或暗示的保证，包括但不限于适销性和特定用途适用性的暗示保证，均不适用。在任何情况下，作者都不对任何直接、间接、偶然、特殊、示范性或后果性损害（包括但不限于替代商品或服务的采购；使用、数据或利润的损失；或业务中断）负责，无论何种原因，也不论责任理论如何，无论是合同责任、严格责任还是侵权（包括疏忽或其他）责任，均源于此软件的任何使用方式，即使已被告知此类损害的可能性。

[maintenance-shield]: https://img.shields.io/maintenance/yes/2023.svg
[aarch64-shield]: https://img.shields.io/badge/aarch64-yes-green.svg
[amd64-shield]: https://img.shields.io/badge/amd64-yes-green.svg
[armhf-shield]: https://img.shields.io/badge/armhf-yes-green.svg
[armv7-shield]: https://img.shields.io/badge/armv7-yes-green.svg
[i386-shield]: https://img.shields.io/badge/i386-yes-green.svg
[FaserF]: https://github.com/FaserF/
[issue]: https://github.com/FaserF/hassio-addons/issues
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
