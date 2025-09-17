# eWeLink-Remote Gateway Add-on


![支持 armv7 架构](https://img.shields.io/badge/armv7-yes-green.svg)
![支持 aarch64 架构](https://img.shields.io/badge/aarch64-yes-green.svg)
![支持 amd64 架构](https://img.shields.io/badge/amd64-yes-green.svg)


## 关于
eWeLink-Remote Gateway add-on 是一个支持添加 eWeLink-Remote 子设备并将子设备同步到 Home Assistant 的 eWeLink-Remote Gateway 网关，例如 **[R5](https://sonoff.tech/product/smart-wall-switches/r5/),[R5W](https://sonoff.tech/product/smart-wall-switches/r5/),[S-Mate](https://sonoff.tech/product/diy-smart-switches/s-mate/),[S-Mate2](https://sonoff.tech/product/diy-smart-switches/s-mate/)**。您可以在 Home Assistant 自动化中选择 eWeLink-Remote 子设备，并通过 eWeLink-Remote Gateway 子设备报告的单击、双击和长按事件触发自动化。


## 前置条件
一个可用的蓝牙，可以是运行 Home Assistant 的硬件上的蓝牙、蓝牙接收器或蓝牙代理设备 

### 非蓝牙代理
- 进入设置 -> 选择设备和服务 -> 启用蓝牙集成
- 要启用蓝牙被动扫描：进入蓝牙集成 > 配置 > 配置蓝牙选项，勾选被动扫描，然后点击提交。

### 使用蓝牙代理
#### 安装 ble_passthrough 自定义集成
- 安装 HACS
- 打开 HACS → 右上角菜单 → 自定义仓库。
- 添加仓库 URL：https://github.com/iHost-Open-Source-Project/ble_passthrough。选择 *集成* 作为类别
- 在 HACS 中搜索 BLE Passthrough 并安装它。
- 安装后，在您的 configuration.yaml 中添加以下内容
```yaml
ble_passthrough:
```
- 保存文件并重启 Home Assistant。

## 安装
1. 进入添加组件商店 → 点击右上角的 **更多** 按钮 (⋮) → 选择 **仓库**  
2. 粘贴以下 URL:  
   [https://github.com/iHost-Open-Source-Project/hassio-ihost-addon](https://github.com/iHost-Open-Source-Project/hassio-ihost-addon)  
3. 或者，直接点击下面的按钮自动添加：

[![添加仓库](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2FiHost-Open-Source-Project%2Fhassio-ihost-addon)