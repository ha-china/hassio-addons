# eWeLink-Remote Gateway
## 1. 简介
eWeLink-Remote Gateway 插件是一个支持添加 eWeLink-Remote 子设备并将子设备同步到 Home Assistant 的 eWeLink-Remote Gateway 网关，例如 **[R5](https://sonoff.tech/product/smart-wall-switches/r5/),[R5W](https://sonoff.tech/product/smart-wall-switches/r5/),[S-Mate](https://sonoff.tech/product/diy-smart-switches/s-mate/),[S-Mate2](https://sonoff.tech/product/diy-smart-switches/s-mate/)**。您可以在 Home Assistant 自动化中选择 eWeLink-Remote 子设备，并通过 eWeLink-Remote Gateway 子设备报告的单击、双击和长按事件触发自动化。**了解更多信息 [关于 eWeLink-Remote](https://sonoff.tech/news-and-events/what-is-ewelink-remote-control/)**。

## 2. 前置条件
一个可用的蓝牙，可以是运行 Home Assistant 的硬件上的蓝牙，也可以是蓝牙适配器或蓝牙代理设备。

### 2.1 非蓝牙代理
- 进入设置 -> 选择设备和服务 -> 启用蓝牙集成
- 要启用蓝牙被动扫描：进入蓝牙集成 > 配置 > 配置蓝牙选项，勾选被动扫描，然后点击提交。

### 2.2 使用蓝牙代理
#### 安装 ble_passthrough 自定义集成
- 安装 HACS
- 打开 HACS → 右上角菜单 → 自定义仓库。
- 添加仓库 URL: https://github.com/iHost-Open-Source-Project/ble_passthrough。选择 *集成* 作为类别
- 在 HACS 中搜索 BLE Passthrough 并安装它。
- 安装后，在您的配置文件中添加以下内容：
```yaml
ble_passthrough:
```
- 保存文件并重启 Home Assistant。

## 3. 如何安装 eWeLink-Remote Gateway 插件？
### 3.1 将 eWeLink-Remote Gateway 插件添加到仓库
如果您已经添加了此仓库的插件（例如 iHost Hardware Control），则可以跳过此步骤，直接进入插件商店安装所需的插件。
1. 通过 URL
- 导航到设置 > 插件商店> 点击右上角的三点菜单（⋮）并选择仓库
- 在输入框中输入仓库 URL：https://github.com/iHost-Open-Source-Project/hassio-ihost-addon
2. 通过按钮点击
- 点击此按钮自动添加插件    
[![打开您的 Home Assistant 实例并显示添加插件仓库对话框，并预填特定的仓库 URL。](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2FiHost-Open-Source-Project%2Fhassio-ihost-addon)
### 3.2 安装 eWeLink-Remote Gateway 插件
1. 在插件商店中搜索 eWeLink-Remote Gateway。
![](https://raw.githubusercontent.com/iHost-Open-Source-Project/hassio-ihost-addon/master/hassio-ihost-ewelink-remote/images/find.png)
2. 点击安装
![](https://raw.githubusercontent.com/iHost-Open-Source-Project/hassio-ihost-addon/master/hassio-ihost-ewelink-remote/images/install_Addon.png)
3. 等待安装完成
### 3.3 启动 eWeLink-Remote Gateway 插件
安装后，点击启动以启动插件。等待服务完全启动后再继续。
![](https://raw.githubusercontent.com/iHost-Open-Source-Project/hassio-ihost-addon/master/hassio-ihost-ewelink-remote/images/start.png)

## 4. 通过 eWeLink-Remote Gateway 插件添加设备
1. 点击“Web 界面”进入插件操作界面。
![](https://raw.githubusercontent.com/iHost-Open-Source-Project/hassio-ihost-addon/master/hassio-ihost-ewelink-remote/images/open_web_ui1.png)
![](https://raw.githubusercontent.com/iHost-Open-Source-Project/hassio-ihost-addon/master/hassio-ihost-ewelink-remote/images/open_web_ui.png)
**注意*：
- 要使用 eWeLink-Remote Gateway 插件，Home Assistant 中必须启用蓝牙。如果没有蓝牙硬件模块（可配置的蓝牙适配器）或蓝牙集成未启用，插件将无法工作；
您可以查看日志以确定插件是否因蓝牙集成未启用而失败运行。
![](https://raw.githubusercontent.com/iHost-Open-Source-Project/hassio-ihost-addon/master/hassio-ihost-ewelink-remote/images/Log-image.png)
![](https://raw.githubusercontent.com/iHost-Open-Source-Project/hassio-ihost-addon/master/hassio-ihost-ewelink-remote/images/Log-Blue.png)
- 在点击“配对”以开始添加 eWeLink-Remote 子设备之前，您需要配置并启用蓝牙“**被动扫描**”(https://www.home-assistant.io/integrations/bluetooth/#passive-scanning) 以检测和连接到 eWeLink-Remote 子设备。如果事先未启用，将出现提示页面。您可以按照提示路径（进入蓝牙集成 > 配置 > 配置蓝牙选项，勾选被动扫描，然后点击提交。）来启用它。
![](https://raw.githubusercontent.com/iHost-Open-Source-Project/hassio-ihost-addon/master/hassio-ihost-ewelink-remote/images/passive_scanning.png)
2. 点击“配对”以开始添加设备。
倒计时为 180 秒。在添加过程中，您可以手动点击“退出 xxs”以停止添加设备。在倒计时期间按子设备的任何按钮以完成设备添加。
**注意*：
- 支持 180 秒内添加多个设备
- 添加智能灯设备的上限为 50
![](https://raw.githubusercontent.com/iHost-Open-Source-Project/hassio-ihost-addon/master/hassio-ihost-ewelink-remote/images/Pair.png)
![](https://raw.githubusercontent.com/iHost-Open-Source-Project/hassio-ihost-addon/master/hassio-ihost-ewelink-remote/images/add_device.png)
3. 编辑设备列表  
点击“编辑”以管理添加的设备，选择相应的设备，然后点击“删除”以确认删除选中的设备
![](https://raw.githubusercontent.com/iHost-Open-Source-Project/hassio-ihost-addon/master/hassio-ihost-ewelink-remote/images/Edit.png)
![](https://raw.githubusercontent.com/iHost-Open-Source-Project/hassio-ihost-addon/master/hassio-ihost-ewelink-remote/images/Del.png)
![](https://raw.githubusercontent.com/iHost-Open-Source-Project/hassio-ihost-addon/master/hassio-ihost-ewelink-remote/images/Del_1.png)
![](https://raw.githubusercontent.com/iHost-Open-Source-Project/hassio-ihost-addon/master/hassio-ihost-ewelink-remote/images/device_deleted.png)

## 5. 在 Home Assistant 中查看设备
1. 在 Home Assistant 中查看设备
![](https://raw.githubusercontent.com/iHost-Open-Source-Project/hassio-ihost-addon/master/hassio-ihost-ewelink-remote/images/HA_device.png)
2. 设备添加成功后，您可以在 Home Assistant 中配置场景作为场景触发条件。
![](https://raw.githubusercontent.com/iHost-Open-Source-Project/hassio-ihost-addon/master/hassio-ihost-ewelink-remote/images/Sence.png)
**注意*：
- 在 Home Assistant 自动化中成功配置 eWeLink-Remote 子设备后，如果实体名称被更改，实体名称将在自动化配置信息中显示为“未知”，但这将不会影响自动化场景触发。
![](https://raw.githubusercontent.com/iHost-Open-Source-Project/hassio-ihost-addon/master/hassio-ihost-ewelink-remote/images/UNknow.png)