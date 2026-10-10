# Home Assistant App: 海康威视门铃

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

将您的海康威视 IP 门铃与 Home Assistant 连接，以便接收事件（如运动检测或 incoming 呼叫）并发送指令（如打开连接上门铃继电器门的门或拒绝呼叫）。

请务必阅读完整的文档！[README](DOCS.md)

__注意:__ 这是该应用的稳定版。
我们非常欢迎您的反馈！如果您有任何疑问，想要报告问题或只是想加入讨论，请务必查看 [GitHub Issues 页面](https://github.com/pergolafabio/Hikvision-Addons/issues) 并给我们留言！


## 功能特性
- 捕获门铃 **事件**: _门铃响铃_ /_运动检测_ /_门已解开_ / _撬动警报_
- **开启**与门铃连接的门 (_适用于端口 80 被阻止且 `ISAPI` 不可用的旧设备_)
- 远程操作，例如 **接听**/**拒绝**呼叫，**挂断**。

   _此功能可用于 HA 自动化。例如，当 Zigbee 门传感器信号门被打开时，室内站的响铃和 Hik-Connect 设备的响铃将被停止。查看文档以获取更多细节。_
- **重启**门铃站
- 支持室内站的远程场景/警报/区域，如 **atHome**/**goOut**/**goToBed**/**custom**
- 对 incoming 呼叫拍摄快照
- 控制您户外站的背光灯
- 向室内站广播音频文件
- 使用内部面板进行带音频的呼叫
- ...

### 示例

以下是一个包含一个室内单元和一个户外单元的两个门铃的示例配置：

<p align="center">
   <img src="https://raw.githubusercontent.com/pergolafabio/Hikvision-Addons/main/hikvision-doorbell/assets/docs_sensors.png" width="500px">
</p>

请务必阅读完整的文档！[README](DOCS.md)

## 开始使用

**提示**: **海康威视门铃**需要使用 MQTT 代理才能正常工作。请参考应用中 **文档**标签页来学习如何设置官方的 **Mosquitto 应用**。

__注意:__ 要使用此 _稳定_ 版本，请在您的 Home Assistant 个人资料中启用 __高级模式__:
   - 点击您的用户名（在 Home Assistant UI 的左下角）
   - 向下滚动到个人资料页面并切换 __高级模式__
     <p align="center">
     <img src="https://user-images.githubusercontent.com/4510647/221361317-a9076a72-9762-4320-8302-24414e6019f2.png" width="600">
     </p>
- 点击以下按钮以在您的 Home Assistant UI 中自动打开应用：
   <p align="center">
      <a href="https://my.home-assistant.io/redirect/supervisor_addon/?addon=aff2db71_hikvision_doorbell_beta&repository_url=https%3A%2F%2Fgithub.com%2Fpergolafabio%2FHikvision-Addons" target="_blank">
         <img src="https://my.home-assistant.io/badges/supervisor_addon.svg" alt="打开您的 Home Assistant 实例并显示 Supervisor 应用的仪表板。" />
      </a>
   </p>

   如果您遇到问题，请尝试手动步骤：
   - 打开您的 Home Assistant 界面，导航到 `设置` -> `应用` -> `应用商店` -> `仓库`（右上角）
   - 在输入框中粘贴以下 URL: `https://github.com/pergolafabio/Hikvision-Addons`
   - 点击 **添加** 确认对话框。
   - **海康威视门铃 (Beta)** 应该在您 Home Assistant 的 _应用商店_ 中可用。 (如果过几分钟仍然不可见，请导航到 _设置_ -> _应用_ -> _应用商店_ 重新加载商店页面)。
- 选择 **海康威视门铃** 应用，然后点击 **安装**。
- 查看应用的 **文档** 标签页来设置所需的配置并了解如何将此应用集成到 Home Assistant
(也可在 [GitHub 仓库](DOCS.md) 在线浏览文档)。

## 支持的设备
以下设备据说是其他 HA 用户报告可工作的设备。
如果您的设备不在列表中，我们将很乐意将其包含在内。只需在此处 [打开一个问题](https://github.com/pergolafabio/Hikvision-Addons/issues) 并告诉我们您拥有的设备类型。

- DS-KV8413
- DS-KD8003
- DS-KV8113
- DS-KV8213
- DS-KV6113
- DS-K1T34X
- DS-K1T67X
- DS-K1T670M
- DS-KB8113
- DS-KV9503 (无呼叫事件)
- DS-K1T344
- 似乎其他重新品牌的设备也确认可用，如 Metzler 制造的 VDM10
- ...
- 这只是一个确认列表，可能还有其他设备也可以工作...
- DS-KV8102-IM (第一代不支持，仅支持开门锁)
- DS-K1T502DBFWX (完全不支持)
- DS-HD1 和 DS-HD2 不支持？它们不支持 ISAPI？

请务必阅读完整的文档！[README](DOCS.md)

## 其他资源
- [Home Assistant 社区论坛](https://community.home-assistant.io/t/hikvision-doorbell-videointercom-integration/532796)

## 贡献

这是一个活跃的开源项目。我们总是欢迎想要使用代码或为项目做贡献的人。感谢您的参与！：heart_eyes:


### 贡献者
<a href="https://github.com/pergolafabio/Hikvision-Addons/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=pergolafabio/Hikvision-Addons" />
</a>

由 [contrib.rocks](https://contrib.rocks) 制作。

## 捐赠
喜欢我的工作？您可以随时 [向我捐赠](https://paypal.me/pergolafabio)。

## 鸣谢
此应用最初受 [脚本文档](https://github.com/laszlojakab/hikvision-intercom-python-demo) 启发。

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
