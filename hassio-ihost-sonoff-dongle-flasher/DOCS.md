# SONOFF Dongle Flasher

![Supports armv7 Architecture](https://img.shields.io/badge/armv7-yes-green.svg) ![Supports aarch64 Architecture](https://img.shields.io/badge/aarch64-yes-green.svg) ![Supports amd64 Architecture](https://img.shields.io/badge/amd64-yes-green.svg)

## 1. 简介
SONOFF Dongle Flasher 支持iHost MG21芯片和SONOFF Dongle系列（ZBDongle-P、ZBDongle-E、Dongle-M、Dongle-PMG24）的在线固件烧录。

## 2. 前置条件
在使用附加组件之前，请确保串口未被使用（通常被Zigbee2MQTT或ZHA等服务占用）。
在固件烧录过程中，附加组件将尝试连接到设备并自动检查串口是否被占用。
如果被占用，附加组件将尝试为您停止冲突的服务。
[操作指南 >](https://github.com/iHost-Open-Source-Project/ha-operating-system?tab=readme-ov-file#readme)

## 3. 如何安装SONOFF Dongle Flasher附加组件？
### 3.1 将SONOFF Dongle Flasher附加组件添加到仓库
如果您已经添加了此仓库的附加组件（例如iHost硬件控制），请跳过此步骤，直接前往附加组件商店安装所需的附加组件。
1. 通过URL
- 导航到设置 > 附加组件商店 > 点击右上角的三点菜单（⋮）并选择仓库
- 将仓库URL输入到输入框中：https://github.com/iHost-Open-Source-Project/hassio-ihost-addon
2. 通过按钮点击
- 点击此按钮自动添加附加组件 

[![打开您的Home Assistant实例并显示带有预填写的特定仓库URL的添加附加组件仓库对话框。](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2FiHost-Open-Source-Project%2Fhassio-ihost-addon)
### 3.2 安装SONOFF Dongle Flasher附加组件
1. 在附加组件商店中搜索SONOFF Dongle Flasher。
![](https://raw.githubusercontent.com/iHost-Open-Source-Project/hassio-ihost-addon/master/hassio-ihost-sonoff-dongle-flasher/images/find.png)
2. 点击安装
![](https://raw.githubusercontent.com/iHost-Open-Source-Project/hassio-ihost-addon/master/hassio-ihost-sonoff-dongle-flasher/images/install_button.png)
3. 等待安装完成
### 3.3 启动SONOFF Dongle Flasher附加组件
安装完成后，点击**启动**以启动附加组件。等待服务完全启动后再继续。
![](https://raw.githubusercontent.com/iHost-Open-Source-Project/hassio-ihost-addon/master/hassio-ihost-sonoff-dongle-flasher/images/start_button.png)
## 4. 使用**SONOFF Dongle Flasher附加组件**烧录Zigbee固件

打开Web界面并点击**连接**。工具将自动扫描运行Home Assistant的设备上的iHost MG21芯片和连接的Zigbee Dongles。
（目前仅支持**SONOFF ZBDongle-P**、**SONOFF ZBDongle-E**、**SONOFF Dongle-M**和**SONOFF Dongle-PMG24**。）

![](https://raw.githubusercontent.com/iHost-Open-Source-Project/hassio-ihost-addon/master/hassio-ihost-sonoff-dongle-flasher/images/MG21_connect_button.png)
![](https://raw.githubusercontent.com/iHost-Open-Source-Project/hassio-ihost-addon/master/hassio-ihost-sonoff-dongle-flasher/images/MG21_connect_scan.png) 

> </font><font color="red">注意*</font> 在点击**连接**之前，请确保**Zigbee2MQTT**和**ZHA**已停止。烧录需要访问串口，当前，附加组件将在您点击**连接**时自动检查iHost串口是否被Zigbee2MQTT或ZHA占用。
> 
> 如果任一服务正在运行，附加组件将自动尝试停止它们。
> 
> 如果在烧录之前未停止Zigbee2MQTT或ZHA，您可能会在烧录过程中遇到设备连接失败的问题。*

### 4.1 将Zigbee NCP固件烧录到iHost内部MG21芯片
1. 选择iHost的MG21芯片并点击**确认**。
![](https://raw.githubusercontent.com/iHost-Open-Source-Project/hassio-ihost-addon/master/hassio-ihost-sonoff-dongle-flasher/images/MG21_connect_scan_confirm_button.png)
2. 等待连接建立。
![](https://raw.githubusercontent.com/iHost-Open-Source-Project/hassio-ihost-addon/master/hassio-ihost-sonoff-dongle-flasher/images/MG21_connect_scan_Waiting%20for%20success.png)
3. 接下来，选择要烧录的Zigbee固件版本。（目前支持的版本包括：6.10.9、7.4.1、7.4.3、7.4.4、8.0.2。此列表仅供参考，可能会随时间更新。）
![](https://raw.githubusercontent.com/iHost-Open-Source-Project/hassio-ihost-addon/master/hassio-ihost-sonoff-dongle-flasher/images/MG21_Select%20Firmware.png)
4. 点击**烧录**以开始烧录固件。
![](https://raw.githubusercontent.com/iHost-Open-Source-Project/hassio-ihost-addon/master/hassio-ihost-sonoff-dongle-flasher/images/MG21_Flash.png)
5. 等待烧录过程完成。
![](https://raw.githubusercontent.com/iHost-Open-Source-Project/hassio-ihost-addon/master/hassio-ihost-sonoff-dongle-flasher/images/MG21_Flash_success.png)
></font><font color="red">注意*</font> 如果您计划将iHost从Home Assistant切换回CUBE系统，请首先将Zigbee固件烧录回**版本6.10.9**。否则，可能会出现数据丢失或兼容性问题。
>
> 或者，如果您直接将固件升级到**版本7.4或更高版本**，请确保最初配置Zigbee2MQTT使用**ezsp**适配器。只有当Zigbee2MQTT成功使用ezsp启动后，您才可以重新配置它使用**ember**适配器。
>
> **不要跳过此过程并直接使用ember适配器**，否则您可能会遇到以下风险：*使用ember适配器启动Zigbee2MQTT可能会触发错误：*"备份文件是从不受支持的EZSP版本创建的。"*这可能会迫使您重新配置整个Zigbee网络。
> 
> **详细信息**：请参阅[GitHub上关于v7.4+固件兼容性的讨论](https://github.com/Koenkk/zigbee2mqtt/discussions/22919)。


![](https://raw.githubusercontent.com/iHost-Open-Source-Project/hassio-ihost-addon/master/hassio-ihost-sonoff-dongle-flasher/images/MG21_ewelink_cube.png)
### 4.2 自动扫描SONOFF ZBDongle-P或ZBDongle-E并烧录Zigbee固件

<font color="blue">在烧录之前，请将SONOFF ZBDongle-P或SONOFF ZBDongle-E插入运行Home Assistant的设备的USB端口。</font>。
1. 打开Web界面并点击"连接"。它将自动扫描连接到运行Home Assistant的设备的Zigbee Dongle。
![](https://raw.githubusercontent.com/iHost-Open-Source-Project/hassio-ihost-addon/master/hassio-ihost-sonoff-dongle-flasher/images/Dongle_Auto_scan.png)
2. 选择您要烧录的Dongle并点击**确认**。
![](https://raw.githubusercontent.com/iHost-Open-Source-Project/hassio-ihost-addon/master/hassio-ihost-sonoff-dongle-flasher/images/Dongle_Auto_confirm.png)
3. 选择您要烧录的Zigbee固件版本。
![](https://raw.githubusercontent.com/iHost-Open-Source-Project/hassio-ihost-addon/master/hassio-ihost-sonoff-dongle-flasher/images/Dongle_Auto_Select%20Firmware.png)
4. 点击**烧录**以开始烧录固件过程。
![](https://raw.githubusercontent.com/iHost-Open-Source-Project/hassio-ihost-addon/master/hassio-ihost-sonoff-dongle-flasher/images/Dongle_Auto_flash.png)
5. 等待烧录过程完成。
![](https://raw.githubusercontent.com/iHost-Open-Source-Project/hassio-ihost-addon/master/hassio-ihost-sonoff-dongle-flasher/images/Dongle_Auto_Flash%20complet.png)
### 4.3 手动定位SONOFF ZBDongle-P或ZBDongle-E并烧录Zigbee固件
<font color="blue">在烧录之前，请将SONOFF ZBDongle-P或SONOFF ZBDongle-E插入运行Home Assistant的设备的USB端口。</font>

1. 如果在自动扫描期间找不到Dongle，您可以点击扫描页面的**手动添加设备**选项来手动定位它。
![](https://raw.githubusercontent.com/iHost-Open-Source-Project/hassio-ihost-addon/master/hassio-ihost-sonoff-dongle-flasher/images/Dongle_Manually.png)

2. 选择"设备型号"和"波特率"，输入"串口路径"，然后点击"确认"。
![](https://raw.githubusercontent.com/iHost-Open-Source-Project/hassio-ihost-addon/master/hassio-ihost-sonoff-dongle-flasher/images/Dongle_Manually_Information.png)
您可以按照提示：**"请前往设置 > 系统 > 硬件 > 所有硬件"**，找到您要添加的硬件设备的**串口路径**。
![](https://raw.githubusercontent.com/iHost-Open-Source-Project/hassio-ihost-addon/master/hassio-ihost-sonoff-dongle-flasher/images/Dongle_Manually_hint1.png)
![](https://raw.githubusercontent.com/iHost-Open-Source-Project/hassio-ihost-addon/master/hassio-ihost-sonoff-dongle-flasher/images/Dongle_Manually_hint2.png)
3. 选择您要烧录的Zigbee固件版本。
![](https://raw.githubusercontent.com/iHost-Open-Source-Project/hassio-ihost-addon/master/hassio-ihost-sonoff-dongle-flasher/images/Dongle_Manual_Select%20Firmware.png)

4. 点击**烧录**以开始烧录固件。
![](https://raw.githubusercontent.com/iHost-Open-Source-Project/hassio-ihost-addon/master/hassio-ihost-sonoff-dongle-flasher/images/Dongle_Manual_flash.png)

5. 等待烧录完成。（在烧录过程中，请禁用ZHA和Zigbee2MQTT。烧录完成后可以重新启动它们。）
![](https://raw.githubusercontent.com/iHost-Open-Source-Project/hassio-ihost-addon/master/hassio-ihost-sonoff-dongle-flasher/images/Dongle_Manual_Flash%20complet.png)

> </font><font color="red">注意*</font> 在手动将固件烧录到ZBDongle-P时，进度有时可能会卡在0%。
> 
> **可能的原因：**
> - 型号不匹配：选择的设备型号是ZBDongle-E，但连接到指定串口的是ZBDongle-P。
> - 因此，串口被占用，无法再次使用。
> 
> **请尝试：**
> - 重启附加组件以释放串口。
> - 验证并选择与您的设备匹配的正确型号（ZBDongle-P）。
> - 再次烧录固件。