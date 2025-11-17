# Home Assistant Community Add-on: xqrepack
![支持aarch64架构][aarch64-shield] ![支持amd64架构][amd64-shield] ![支持armhf架构][armhf-shield] ![支持armv7架构][armv7-shield] ![支持i386架构][i386-shield]
![项目维护][maintenance-shield]

xqrepack - 打包并重新构建MiWifi镜像以获得SSH访问权限和其他功能。

## 关于

这些脚本允许您修改Xiaomi R3600 (AX3600) / rm1800 (AX1800) 固件镜像，以确保SSH和UART访问始终启用。

默认的root密码是password。请在升级后登录路由器并更改该密码。您的路由器设置，如IP地址和SSID，存储在nvram中，应保持不变。

⚠ 脚本也会尽力移除或禁用电话回家二进制文件，以及智能控制器（AIoT）部分，使您得到一个（接近）OpenWRT路由器，您可以通过UCI或/etc/config进行配置。在保留原始功能和隐私问题之间，我会更倾向于谨慎处理，宁愿牺牲一些功能，以连接到一个我更有信心连接到互联网的路由器。

请注意，为了最初获得对路由器的SSH访问权限，您需要降级到1.0.17版本并利用它。一旦您有了SSH，您可以使用这种重新打包方法来维持新版本的SSH访问权限。<br />

请访问@geekman的原始程序仓库：<https://github.com/geekman/xqrepack>

## 安装

[![FaserF Homeassistant Addons](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2FFaserF%2Fhassio-addons)
<br />
这个插件的安装非常简单，与安装任何其他自定义Home Assistant插件没有区别。<br />
只需点击上面的链接或将我的仓库添加到hassio插件仓库：<https://github.com/FaserF/hassio-addons>

新的固件将位于您的"firmware_path"文件夹中，并命名为"r3600-raw-img.bin"

## 配置

**注意**: _在更改配置时，请记得重启插件。_

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

**注意**: _这只是一个示例，不要复制和粘贴它！创建您自己的！_

### 选项: `firmware_path`

此选项是必需的。根据您的固件文件文件夹的位置进行更改。<br />

注意：它必须在/share文件夹中的某个位置！其他文件夹对此插件不可见。

### 选项: `firmware_name`

此选项是必需的。根据您的固件文件的名称进行更改。<br />
注意：如果您使用的是AX1800的镜像，请在固件文件中保留rm1800的名称。这是必需的，因为AX1800的修改过程与AX3600不同！

## 支持

有问题或问题？

您可以在此处[打开问题][issue] GitHub。<br />
请注意，此软件仅在运行在Raspberry Pi 4上的armv7上进行了测试。

## 作者和贡献者

原始程序来自@geekman。有关更多信息，请访问此页面：<https://github.com/geekman/xqrepack>
hassio插件由[FaserF]提供。

## 许可证

xqrepack根据3条款（修改版）的BSD许可证进行许可。

版权（C）2020-2025 Darell Tan / FaserF 用于HA插件

源代码和二进制形式的重新分发和使用，无论是否修改，均被允许，前提是满足以下条件：

源代码的重新分发必须保留上述版权声明、此条件列表和以下免责声明。
二进制形式的重新分发必须在提供的文档和/或其他材料中复制上述版权声明、此条件列表和以下免责声明。
作者的名字不得用于未经特定事先书面许可推广或支持由本软件派生的产品。
本软件由作者按“原样”提供，任何明示或暗示的保证，包括但不限于对适销性和特定用途适用性的暗示保证，均不适用。在任何情况下，作者均不对任何直接、间接、偶然、特殊、示例或后果性损害（包括但不限于替代商品或服务的采购；使用、数据或利润的损失；或业务中断）负责，无论何种原因，也不论责任理论如何，无论是合同、严格责任还是侵权（包括疏忽或其他）在任何方式上使用本软件的结果，即使已被告知此类损害的可能性。

[maintenance-shield]: https://img.shields.io/maintenance/yes/2023.svg
[aarch64-shield]: https://img.shields.io/badge/aarch64-yes-green.svg
[amd64-shield]: https://img.shields.io/badge/amd64-yes-green.svg
[armhf-shield]: https://img.shields.io/badge/armhf-yes-green.svg
[armv7-shield]: https://img.shields.io/badge/armv7-yes-green.svg
[i386-shield]: https://img.shields.io/badge/i386-yes-green.svg
[FaserF]: https://github.com/FaserF/
[issue]: https://github.com/FaserF/hassio-addons/issues
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
