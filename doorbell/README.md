# Home Assistant 添加组件：海康威视门铃

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

将您的海康威视 IP 门站连接到 Home Assistant，以接收事件（如移动检测或来电）并发送命令（如打开与门站继电器连接的门或拒绝来电）。

__注意__：这是此添加组件的稳定版本。
非常欢迎您的反馈！如果您有任何疑问，希望报告问题或只是发表意见，请查看 [Github 问题页面](https://github.com/pergolafabio/Hikvision-Addons/issues) 并留下您的信息！

## 功能
- 捕获门铃事件：_门铃响_ /_移动检测_ /_门已解锁_ / _篡改警报_
- **打开**与门铃连接的门（_对于较旧的设备，端口 80 被封锁且 `ISAPI` 不可用，这很有用_）
- 远程操作，如**接听**/**拒绝**来电，**挂断**。

   _这可以在 HA 自动化中加以利用。例如，当 Zigbee 门传感器发出门已打开的信号时，室内站和海康连接设备上的响铃会停止。请查看文档以获取更多详细信息。_
- **重启**门站
- 远程场景支持，如 **atHome**/**goOut**/**goToBed**/**自定义**

### 示例

这是一个示例设置，展示了两个门铃，一个室内和一个室外单元：

<p align="center">
   <img src="https://raw.githubusercontent.com/pergolafabio/Hikvision-Addons/dev/hikvision-doorbell/assets/docs_sensors.png" width="500px">
</p>

请务必在此处阅读完整文档！[Readme](DOCS.md)

## 入门指南

**注意**：**海康威视门铃**需要一个 MQTT 中继器才能正常运行。请参考添加组件的**文档**标签，了解如何设置官方的**Mosquitto 添加组件**。

__注意__：要使用此 _稳定_ 版本，请在您的 Home Assistant 配置文件中启用__高级模式__：
   - 点击您的用户名（在 Home Assistant UI 的左下角）
   - 向下滚动配置文件页面并切换__高级模式__
     <p align="center">
     <img src="https://user-images.githubusercontent.com/4510647/221361317-a9076a72-9762-4320-8302-24414e6019f2.png" width="600">
     </p>
- 点击以下按钮以自动在您的 Home Assistant UI 中打开添加组件：
   <p align="center">
      <a href="https://my.home-assistant.io/redirect/supervisor_addon/?addon=aff2db71_hikvision_doorbell_beta&repository_url=https%3A%2F%2Fgithub.com%2Fpergolafabio%2FHikvision-Addons" target="_blank">
         <img src="https://my.home-assistant.io/badges/supervisor_addon.svg" alt="打开您的 Home Assistant 实例并显示 Supervisor 添加组件的仪表板。" />
      </a>
   </p>

   如果您遇到问题，请查看以下手动步骤：
   - 打开您的 Home Assistant 界面，并导航到 `设置` -> `添加组件` -> `添加组件商店` -> `仓库`（在右上角）
   - 在输入字段中粘贴以下 URL：`https://github.com/pergolafabio/Hikvision-Addons`
   - 通过点击 **添加** 确认对话框。
   - **海康威视门铃（Beta）** 应在您的 Home Assistant 的 _添加组件商店_ 中可用。（如果几分钟内不可见，请通过导航到 _设置_ -> _添加组件_ -> _添加组件商店_ 来重新加载商店页面）。
- 选择 **海康威视门铃（Beta）** 添加组件，然后点击 **安装**。
- 查看**添加组件**的**文档**标签，以设置所需的配置并了解如何将此添加组件集成到 Home Assistant
（文档也可以在 [Github 仓库](DOCS.md) 中在线浏览）。

## 支持的设备
其他 Home Assistant 用户报告称这些设备可以正常工作。
如果您的设备不在列表中，我们很乐意将其加入。请通过 [在 Github 上打开问题](https://github.com/pergolafabio/Hikvision-Addons/issues) 并告诉我们您拥有的设备类型。

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
- 似乎其他重新命名的设备也确认可以工作，如 Metzler 制造的 VDM10
- ...
- 这只是用户确认的列表，可能还有其他设备也能正常工作...
- DS-KV8102-IM（第一代不支持，只能打开锁）
- DS-K1T502DBFWX（完全不支持）
- DS-HD1 和 DS-HD2 不支持？它们不支持 ISAPI？

请务必在此处阅读完整文档！[Readme](DOCS.md)

## 其他资源
- [Home Assistant 社区论坛](https://community.home-assistant.io/t/add-on-hikvision-doorbell-integration/532796)

## 贡献

这是一个活跃的开源项目。我们始终欢迎希望使用代码或为其做出贡献的人。感谢您的参与！ :heart_eyes:

请查看 [文档文件夹](docs/) 获取更多信息。

### 贡献者
<a href="https://github.com/pergolafabio/Hikvision-Addons/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=pergolafabio/Hikvision-Addons" />
</a>

使用 [contrib.rocks](https://contrib.rocks) 制作。

## 捐赠
喜欢我的工作吗？您可以随时 [向我捐款](https://paypal.me/pergolafabio)。

## 致谢
此添加组件最初受到了 [此脚本](https://github.com/laszlojakab/hikvision-intercom-python-demo) 的启发。
---
**⚠️ This resource is intended to help Chinese Home Assistant users more easily install excellent add-ons. If you are not a Chinese user, please read repository readme first**
**⚠️ 这个资源用来帮助中国Home Assistant用户更容易地安装优秀的插件。如果您不是中国用户，请先阅读仓库的README，以下为收集者（汉化，加速）信息，非原作者信息**
---

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
