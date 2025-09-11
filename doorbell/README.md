# Home Assistant 插件：海康威视门铃

<p align="center">
   <a href="https://img.shields.io/badge/amd64-yes-green.svg">
      <img alt="支持 amd64 架构" src="https://img.shields.io/badge/amd64-yes-green.svg">
   </a>
   <a href="https://img.shields.io/badge/aarch64-yes-green.svg">
      <img alt="支持 aarch64 架构" src="https://img.shields.io/badge/aarch64-yes-green.svg">
   </a>
   <a href="https://img.shields.io/badge/i386-yes-green.svg">
      <img alt="支持 i386 架构" src="https://img.shields.io/badge/i386-yes-green.svg">
   </a>
</p>

将您的海康威视 IP 门铃连接到 Home Assistant，以接收事件（如运动检测或来电）并发送命令（如打开连接到门铃继电器的门或拒接来电）。

__注意__：这是插件的稳定版本。
我们非常欢迎您的反馈！如果您有任何疑问，想报告问题或简单的交流，请查看 [Github Issues 页面](https://github.com/pergolafabio/Hikvision-Addons/issues) 并给我们留言！

## 功能
- 捕获门铃 **事件**：_门铃响_ / _运动检测_ / _门解锁_ / _篡改报警_
- **打开** 连接到门铃的门（_适用于80端口被阻塞且`ISAPI`不可用的旧设备_）
- 远程操作，如 **接听** / **拒接** 电话，**挂断**。

   _这可以在 Home Assistant 自动化中利用。例如，当一个 Zigbee 门传感器发送门已打开的信号时，室内设备和 Hik-Connect 设备的响铃会停止。有关更多详细信息，请参见文档。_
- **重启** 门铃
- 远程场景支持，如 **在家** / **外出** / **就寝** / **自定义**

### 示例

以下是一个设置示例，显示两个门铃，一个室内单元和一个室外单元：

<p align="center">
   <img src="https://raw.githubusercontent.com/pergolafabio/Hikvision-Addons/dev/hikvision-doorbell/assets/docs_sensors.png" width="500px">
</p>

确保在此处阅读完整文档！ [Readme](DOCS.md)

## 立即开始

**注意**：**海康威视门铃** 需要一个 MQTT 代理才能正常工作。请参考插件的 **文档** 标签以了解如何设置官方的 **Mosquitto 插件**。

__注意__：要使用此 _稳定_ 版本，请在您的 Home Assistant 配置文件中启用 __高级模式__：
   - 点击您的用户名（在 Home Assistant UI 左下角）
   - 向下滚动配置文件页面并切换 __高级模式__
     <p align="center">
     <img src="https://user-images.githubusercontent.com/4510647/221361317-a9076a72-9762-4320-8302-24414e6019f2.png" width="600">
     </p>
- 点击以下按钮以自动在您的 Home Assistant UI 中打开插件：
   <p align="center">
      <a href="https://my.home-assistant.io/redirect/supervisor_addon/?addon=aff2db71_hikvision_doorbell_beta&repository_url=https%3A%2F%2Fgithub.com%2Fpergolafabio%2FHikvision-Addons" target="_blank">
         <img src="https://my.home-assistant.io/badges/supervisor_addon.svg" alt="打开您的 Home Assistant 实例并显示 Supervisor 插件的仪表板。" />
      </a>
   </p>

   如果您遇到问题，这里是手动步骤：
   - 打开您的 Home Assistant 界面，并导航到 `设置` -> `插件` -> `插件商店` -> `仓库`（在右上角）
   - 在输入框中粘贴以下 URL：`https://github.com/pergolafabio/Hikvision-Addons`
   - 点击 **添加** 确认对话框。
   - **海康威视门铃（Beta）** 应在您的 Home Assistant 的 _插件商店_ 中可用。（如果几分钟后仍不可见，请通过导航到 _设置_ -> _插件_ -> _插件商店_ 重新加载商店页面）。
- 选择 **海康威视门铃（Beta）** 插件，然后点击 **安装**。
- 查看插件的 **文档** 标签以设置所需的配置，并了解如何将该插件集成到 Home Assistant 中。
（文档也可以在 [Github 代码库](DOCS.md) 中在线浏览）。

## 支持的设备
这些设备已被其他 Home Assistant 用户报告为可用。
如果您的设备不在列表中，我们很高兴将其加入。只需在 GitHub 上 [打开一个问题](https://github.com/pergolafabio/Hikvision-Addons/issues) 并告诉我们您拥有的设备类型。

- DS-KV8413
- DS-KD8003
- DS-KV8113
- DS-KV8213
- DS-KV6113
- DS-K1T34X
- DS-K1T67X
- DS-K1T670M
- DS-KB8113
- DS-KV9503（没有来电事件）
- 似乎其他品牌设备确认可用，如：Metzler 制造的 VDM10 
- ...
- 这只是一个用户确认的列表，可能还有其他设备也能工作...
- DS-KV8102-IM（第一代不支持，仅可开锁）
- DS-K1T502DBFWX（完全不支持）
- DS-HD1 和 DS-HD2 不支持？它们不支持 ISAPI？

确保在此处阅读完整文档！ [Readme](DOCS.md)

## 其他资源
- [Home Assistant 社区论坛](https://community.home-assistant.io/t/add-on-hikvision-doorbell-integration/532796)

## 贡献

这是一个活跃的开源项目。我们始终欢迎希望使用或贡献代码的人。感谢您的参与！:heart_eyes:

请查看 [文档文件夹](docs/) 获取更多信息。

### 贡献者
<a href="https://github.com/pergolafabio/Hikvision-Addons/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=pergolafabio/Hikvision-Addons" />
</a>

使用 [contrib.rocks](https://contrib.rocks) 制作。

## 捐赠
喜欢我的工作？您可以随时 [给我捐款](https://paypal.me/pergolafabio)。

## 鸣谢
这个插件最初灵感来自于 [这个脚本](https://github.com/laszlojakab/hikvision-intercom-python-demo)。