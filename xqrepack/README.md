# Home Assistant社区插件：xqrepack
![支持aarch64架构][aarch64-shield] ![支持amd64架构][amd64-shield] ![支持armhf架构][armhf-shield] ![支持armv7架构][armv7-shield] ![支持i386架构][i386-shield]
![项目维护][maintenance-shield]

xqrepack - 重新打包和重建MiWifi镜像以获取SSH访问权限及其他功能。

## 关于

这些脚本允许您修改小米R3600（AX3600）/ rm1800（AX1800）固件镜像，以确保SSH和UART访问始终启用。

默认的根密码是password。请记得在升级后登录路由器并更改该密码。您的路由器设置如IP地址和SSID存储在nvram中，并应保持不变。

⚠ 本脚本还尽力移除或禁用打电话的二进制文件，以及智能控制器（AIoT）部分，让您拥有一个（接近）OpenWRT的路由器，您可以通过UCI或/etc/config进行配置。在保留原有功能和隐私问题之间，我会偏向谨慎，更倾向于牺牲某些功能，以获得一个我更有信心连接到互联网的路由器。

请注意，为了首次获得SSH访问权限，您需要降级到版本1.0.17并首先对其进行利用。一旦您拥有SSH，您可以使用此打包方法来维护新版本的SSH访问权限。<br />

请访问@geekman该程序的原始库：<https://github.com/geekman/xqrepack>

## 安装

[![FaserF Homeassistant Addons](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2FFaserF%2Fhassio-addons)
<br />
这个插件的安装相当简单，与安装其他自定义Home Assistant插件没有什么不同。<br />
只需点击上面的链接或者将我的库添加到hassio插件库：<https://github.com/FaserF/hassio-addons>

新的固件将位于您的“firmware_path”文件夹中，名为“r3600-raw-img.bin”。

## 配置

**注意**：_在配置更改时，请记得重启插件。_

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

**注意**：_这只是一个示例，请不要复制和粘贴！创建您自己的！_

### 选项：`firmware_path`

这个选项是必需的。根据您的固件文件夹的位置进行更改。<br />

注意：它必须位于/share文件夹中的某个地方！其他文件夹对该插件不可见。

### 选项：`firmware_name`

这个选项是必需的。根据您的固件文件的名称进行更改。<br />
注意：如果您使用的是AX1800的镜像，请保持固件文件名中有rm1800。这是必要的，因为AX1800的修改过程与AX3600不同！

## 支持

有问题或疑问吗？

您可以在这里[开一个问题][issue] GitHub。<br />
请记住，这个软件仅在Raspberry Pi 4上运行armv7时经过测试。

## 作者和贡献者

该程序的原作者是@geekman。如需更多信息，请访问此页面：<https://github.com/geekman/xqrepack>
hassio插件由[FaserF]提供。

## 许可证

xqrepack根据3条款（“修改过的”）BSD许可证授权。

版权所有 (C) 2020-2023 Darell Tan / FaserF 适用于HA插件

允许以源代码和二进制形式进行再分发和使用，带或不带修改，只要满足以下条件：

源代码的再分发必须保留上述版权声明、此条件列表和以下免责声明。
二进制形式的再分发必须在文档和/或随分发提供的其他材料中复制上述版权声明、此条件列表和以下免责声明。
作者的名字不得用于支持或宣传源自本软件的产品，未经特定事先书面许可。
本软件是由作者“按原样”提供的，且不提供任何明确或暗示的担保，包括但不限于对适销性和特定用途的暗示担保。作者在任何情况下均不对因使用本软件而产生的任何直接、间接、附带、特殊、惩戒性或后果性损害（包括但不限于替代商品或服务的采购、使用、数据或利润的损失；或业务中断）承担任何责任，无论是基于合同、严格责任还是侵权（包括过失或其他原因）的任何理论，即使已被告知可能发生此类损害。

[maintenance-shield]: https://img.shields.io/maintenance/yes/2023.svg
[aarch64-shield]: https://img.shields.io/badge/aarch64-yes-green.svg
[amd64-shield]: https://img.shields.io/badge/amd64-yes-green.svg
[armhf-shield]: https://img.shields.io/badge/armhf-yes-green.svg
[armv7-shield]: https://img.shields.io/badge/armv7-yes-green.svg
[i386-shield]: https://img.shields.io/badge/i386-yes-green.svg
[FaserF]: https://github.com/FaserF/
[issue]: https://github.com/FaserF/hassio-addons/issues