# Home Assistant Community Add-on: Netboot.xyz
![Supports aarch64 Architecture][aarch64-shield] ![Supports amd64 Architecture][amd64-shield] ![Supports armhf Architecture][armhf-shield] ![Supports armv7 Architecture][armv7-shield] ![Supports i386 Architecture][i386-shield]
![Project Maintenance][maintenance-shield]

Netboot.xyz PXE Server for Homeassistant OS

## About

netboot.xyz 是一个从 BIOS 中通过 PXE 启动各种操作系统安装程序或工具的方法，无需去获取运行工具的媒体。iPXE 用于在 BIOS 中提供用户友好的菜单，让您可以轻松选择所需的操作系统以及任何特定类型的版本或可引导标志。

您可以将 ISO 远程附加到服务器，在 Grub 中将其设置为救援选项，甚至设置您的家庭网络默认启动到它，以便它始终可用。

## 安装

[![FaserF Homeassistant Addons](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2FFaserF%2Fhassio-addons)
<br />
此插件的安装过程非常简单，与安装任何其他自定义 Home Assistant 插件没有区别。<br />
只需点击上面的链接或向 hassio 插件仓库添加我的仓库： <https://github.com/FaserF/hassio-addons>

## 配置

**注意**: _更改配置时请记得重启插件。_

示例插件配置：

```yaml
path: /media/netboot/image
path_config: /media/netboot/config
dhcp_range: 192.168.178.200
```
<br />

**注意**: _这只是一个示例，不要复制粘贴！创建您自己的！_

### 选项: `path`

此选项是必需的。根据您的 ISO 文件和其他文件的位置进行更改。

注意：它必须在 /media 文件夹中的某个位置！其他文件夹对此插件不可见。

### 选项: `path_config`

此选项是必需的。根据您的 netboot.xyz 配置文件和其他文件的位置进行更改。

注意：它必须在 /media 文件夹中的某个位置！其他文件夹对此插件不可见。

### 选项: `dhcp_range`

此选项是必需的。根据您的网络进行更改。尝试在最后范围中使用更高的 IP（例如 100 或 200）

## Ingress

此插件支持 Homeassistant Ingress。但它似乎存在一些问题。

## 安装后

在首次启动之前，我建议查看 netboot 配置。<br />
前往 <http://YOUR-HOMEASSISTANT-IP:3000> -> 菜单 -> boot.cfg<br />

### Windows

1. 根据您的 WinPE 位置更改以下行：<br />
   set win_base_url <http://YOUR-SERVER-IP:PortForTheNGINXserver/WinPE> <br />

   如果您直接在 netboot.xyz 服务器上托管提取的文件，并且您的 IP 地址是 192.168.178.2：<br />
   set win_base_url <http://192.168.178.2:85/WinPE> <br />

2. 将 Windows PE 文件复制到您的 $path 文件夹 -> WinPE -> x64<br />
   示例：/media/netboot/image/WinPE/x64<br />

3. 提取 Windows ISO 并将文件复制到您的 $path 文件夹中的任何位置，例如：<br />
   /media/netboot/image/windows<br />

4. 安装 Samba 分享 Homeassistant 插件并启动它<br />
   用于向 winPE 提供 win10 ISO

5. 在启动 WinPE 后输入以下行<br />
net use Z: \ \YOUR-SERVER-IP\$path /user:YOUR-SERVER-IP\mySambaUser myPassword<br />
net use Z: \ \192.168.178.2\media\netboot\image\windows /user:192.168.178.2\mySambaUser myPassword<br />
Z:\setup.exe <br />

更多信息： <br />
<https://netboot.xyz/faq/windows/>

### 自动化此 Windows 安装过程

修改您的 WinPE：<br />
1. 在 WinPE 位置的新文件夹 "Scripts" 中创建一个 Main.cmd 文件 <br />
   例如 /media/netboot/image/WinPE/x64/Scripts/Start.cmd<br />
   然后将上述两行添加到该脚本中<br />
   然后修改 wpeinit 以使用该脚本。
2. 创建一个 autounattend.xml 文件。您可以在这里找到一些示例： <https://github.com/FaserF/WindowsPostInstaller/tree/master/autounattend><br />

查看 <https://github.com/netbootxyz/netboot.xyz/discussions/757><br />

## 支持

有问题或问题？

您可以在 GitHub 上 [打开问题][issue]。
请注意，此软件仅在 armv7 上运行于 Raspberry Pi 4 上经过测试。

### 已知问题
1. 如果您不在路由器设置中配置 PXE DHCP 选项，PXE 启动后将会遇到多个超时<br />
2. 对 boot.cfg 的更改似乎被 netboot.xyz 忽略。它将始终使用默认配置。 <https://github.com/netbootxyz/netboot.xyz/discussions/861> <br />

## 作者和贡献者

原始程序来自 Netboot.xyz 项目。更多信息请访问此页面： <https://netboot.xyz/>
hassio 插件由 [FaserF] 提供。

## 许可证

MIT 许可证

版权所有 (c) 2019-2025 FaserF & Netboot.xyz 项目

特此免费授予任何获得此软件及其相关文档文件（“软件”）副本的人，在软件上自由处理的权限，不受任何限制，包括但不限于使用、复制、修改、合并、发布、分发、再许可和/或出售软件副本的权限，并允许向提供软件的人这样做，但须遵守以下条件：

上述版权声明和本许可声明应包含在软件的所有副本或重要部分中。

软件按“原样”提供，不提供任何形式的保证，包括但不限于对适销性、特定用途适用性和非侵权性的保证。在任何情况下，作者或版权持有人均不对任何索赔、损害赔偿或其他责任负责，无论是由合同、侵权或其他行为引起的，均与软件或软件的使用或其他交易无关。

[maintenance-shield]: https://img.shields.io/maintenance/yes/2025.svg
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
