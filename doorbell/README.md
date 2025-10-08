# Home Assistant Add-on: Hikvision Doorbell

<p align="center">
   <a href="https://img.shields.io/badge/amd64-yes-green.svg">
      <img alt="Supports amd64 Architecture" src="https://img.shields.io/badge/amd64-yes-green.svg">
   </a>
   <a href="https://img.shields.io/badge/aarch64-yes-green.svg">
      <img alt="Supports aarch64 Architecture" src="https://img.shields.io/badge/aarch64-yes-green.svg">
   </a>
   <a href="https://img.shields.io/badge/i386-yes-green.svg">
      <img alt="Supports i386 Architecture" src="https://img.shields.io/badge/i386-yes-green.svg">
   </a>
</p>

将您的Hikvision IP门铃连接到Home Assistant，以接收事件（如运动检测或来电）并发送命令（如打开连接到门铃继电器的门或拒绝来电）。

__注意__：这是该插件的稳定版本。
我们非常欢迎您的反馈！如果您有任何疑问，希望报告问题或仅参与讨论，请查看[GitHub问题页面](https://github.com/pergolafabio/Hikvision-Addons/issues)并给我们留言！

## 功能
- 捕获门铃**事件**：_门铃响铃_ /_运动检测_ /_门已解锁_ / _破坏警报_
- **打开**连接到门铃的门（_对于较旧的设备，端口80被封锁且`ISAPI`不可用，这很有用_）
- 远程操作，如**接听**/**拒绝**来电、**挂断**。

   _这可以在HA自动化中加以利用。例如，当Zigbee门传感器信号门已打开时，室内站和Hik-Connect设备上的响铃将停止。有关更多详细信息，请参阅文档。_
- **重启**门铃站
- 远程场景支持，如**在家**/**外出**/**去睡觉**/**自定义**

### 示例

这里是一个示例设置，显示两个门铃，一个室内和一个室外单元：

<p align="center">
   <img src="https://raw.githubusercontent.com/pergolafabio/Hikvision-Addons/dev/hikvision-doorbell/assets/docs_sensors.png" width="500px">
</p>

请确保在此处阅读完整文档！[Readme](DOCS.md)

## 入门指南

**注意**：**Hikvision Doorbell**需要一个MQTT代理才能正常运行。请参阅该插件的**文档**选项卡，了解如何设置官方的**Mosquitto插件**。

__注意__：要使用此_稳定_版本，请在您的Home Assistant配置文件中启用__高级模式__：
   - 点击您的用户名（Home Assistant UI的左下角）
   - 向下滚动配置文件页面并切换__高级模式__
     <p align="center">
     <img src="https://user-images.githubusercontent.com/4510647/221361317-a9076a72-9762-4320-8302-24414e6019f2.png" width="600">
     </p>
- 点击以下按钮自动在您的Home Assistance UI中打开插件：
   <p align="center">
      <a href="https://my.home-assistant.io/redirect/supervisor_addon/? addon=aff2db71_hikvision_doorbell_beta&repository_url=https%3A%2F%2Fgithub.com%2Fpergolafabio%2FHikvision-Addons" target="_blank">
         <img src="https://my.home-assistant.io/badges/supervisor_addon.svg" alt="打开您的Home Assistant实例并显示Supervisor插件的仪表板。" />
      </a>
   </p>

   如果您遇到问题，请查看以下手动步骤：
   - 打开您的Home Assistance界面，并导航到`设置` -> `插件` -> `插件商店` -> `仓库`（在右上角）
   - 在输入字段中粘贴以下URL：`https://github.com/pergolafabio/Hikvision-Addons`
   - 通过点击**添加**确认对话框。
   - **Hikvision Doorbell (Beta)** 应在您的 Home Assistant 的_插件商店_中可用。（如果几分钟后仍然不可见，请通过导航到_设置_ -> _插件_ -> _插件商店_重新加载商店页面）。
- 选择**Hikvision Doorbell (Beta)**插件，然后点击**安装**。
- 查看插件的**文档**选项卡，了解如何设置所需的配置以及如何将此插件集成到 Home Assistant 中
（文档也可以在[GitHub仓库](DOCS.md)中在线浏览）。

## 支持的设备
其他 Home Assistant 用户报告这些设备可以正常工作。
如果您的设备不在列表中，我们很乐意将其包含在内。只需在GitHub上[打开一个问题](https://github.com/pergolafabio/Hikvision-Addons/issues)并告诉我们您拥有的设备类型。

- DS-KV8413
- DS-KD8003
- DS-KV8113
- DS-KV8213
- DS-KV6113
- DS-K1T34X
- DS-K1T67X
- DS-K1T670M
- DS-KB8113
- DS-KV9503（无来电事件）
- 似乎其他重新命名的设备也确认可以工作，如由Metzler制造的VDM10
- ...
- 这只是一个用户确认的列表，很可能其他设备也可以工作...
- DS-KV8102-IM（第一代不受支持，仅开门锁功能有效）
- DS-K1T502DBFWX（完全不受支持）
- DS-HD1和DS-HD2不受支持？它们不支持ISAPI？

请确保在此处阅读完整文档！[Readme](DOCS.md)

## 其他资源
- [Home Assistant社区论坛](https://community.home-assistant.io/t/add-on-hikvision-doorbell-integration/532796)

## 贡献

这是一个活跃的开源项目。我们始终欢迎想要使用代码或为其做出贡献的人。感谢您的参与！ :heart_eyes:

请查看[文档文件夹](docs/)以获取更多信息。

### 贡献者
<a href="https://github.com/pergolafabio/Hikvision-Addons/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=pergolafabio/Hikvision-Addons" />
</a>

使用[contrib.rocks](https://contrib.rocks)制作。

## 捐赠
喜欢我的工作？您可以随时[向我捐赠](https://paypal.me/pergolafabio)。

## 致谢
此插件最初受[此脚本](https://github.com/laszlojakab/hikvision-intercom-python-demo)的启发。