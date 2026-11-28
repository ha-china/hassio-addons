# Home Assistant App: Hikvision Doorbell

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

连接您的海康威视 (Hikvision) IP 门口相机到 Home Assistant，以接收事件（例如运动检测或来电信号）并发送指令（例如连接门口相机继电器解锁门或拒绝通话）。

请务必阅读此处完整的文档！[Readme](DOCS.md)

__注意__：这是应用的稳定版本。
我们非常欢迎您的反馈！如果您有任何疑问，想要报告问题，或者只是想发表评论，请查看 [GitHub Issues 页面](https://github.com/pergolafabio/Hikvision-Addons/issues) 让我们知悉！


## 功能特性
- 捕获门口相机 **事件**：_门口电话响铃_ / _运动检测_ / _门锁打开_ / _破坏报警
- **打开**连接在门口相机上的门（_适用于端口 80 被封锁且未提供 `ISAPI` 的较旧设备_）
- 远程控制动作，例如 **接听**/**拒接**电话，**挂断**。

   _此功能可用于 Home Assistant 自动化。例如，当 Zigbee 门传感器信号显示门已打开时，室内站点和海康互联 (Hik-Connect) 设备上的响铃将停止。有关更多详情，请参阅文档。
- **重启**门口相机
- 支持室内站点的远程控制/警报/区域场景，例如 **atHome**/**goOut**/**goToBed**/**custom
- 应对来电信号时拍摄快照
- 控制室外站机的背光
- 向室内站点广播音频文件
- 使用室内面板带音频进行通话
- ...

### 示例

以下示例配置展示了两个门口电话，一个室内站点和一个室外单元：

<p align="center">
   <img src="https://raw.githubusercontent.com/pergolafabio/Hikvision-Addons/main/hikvision-doorbell/assets/docs_sensors.png" width="500px">
</p>

请务必阅读此处完整的文档！[Readme](DOCS.md)

## 开始使用

**注意**：**Hikvision Doorbell** 需要 MQTT  Broker 才能正常工作。请查阅此应用程序的 **Documentation** 标签页，以了解如何设置官方的 **Mosquitto 应用**。

__注意__：要使用此 _稳定_ 版本，请在您的 Home Assistant 个人资料中启用 __高级模式__：
   - 点击您的用户名（在 Home Assistant UI 的左下角）
   - 在个人资料页面向下滚动并切换 __高级模式__
     <p align="center">
     <img src="https://user-images.githubusercontent.com/4510647/221361317-a9076a72-9762-4320-8302-24414e6019f2.png" width="600">
     </p>
- 点击以下按钮以在您的 Home Assistant UI 中自动打开此应用程序：
   <p align="center">
      <a href="https://my.home-assistant.io/redirect/supervisor_addon/?addon=aff2db71_hikvision_doorbell&repository_url=https%3A%2F%2Fgithub.com%2Fpergolafabio%2FHikvision-Addons" target="_blank">
         <img src="https://my.home-assistant.io/badges/supervisor_addon.svg" alt="Open your Home Assistant instance and show the dashboard of a Supervisor app." />
      </a>
   </p>

   如果您遇到问题，请尝试手动步骤：
   - 打开您的 Home Assistance 界面，导航到 `Settings` -> `Apps` -> `Apps store` -> `Repositories`（右上角）
   - 在输入框中粘贴以下 URL：`https://github.com/pergolafabio/Hikvision-Addons`
   - 点击 **ADD** 确认对话框。
   - 在您的 Home Assistant 的 _app store_ 中应能看到 **Hikvision Doorbell**。*(如果几分钟内仍未显示，请导航到 _Settings_ -> _appss_ -> _apps store_ 重新加载商店页面)
- 选择 **Hikvision Doorbell** 应用，然后点击 **INSTALL**。
- 查阅此应用程序的 **Documentation** 标签页以设置所需的配置，并了解如何在 Home Assistant 中集成此应用
(文档也可在 [Github 仓库](DOCS.md) 中在线浏览)。

## 支持的设备
此列表上的设备已被其他 HA 用户报告可正常工作。
如果您的设备不在列表中，我们非常乐意将其加入。只需 [在此处打开一个问题](https://github.com/pergolafabio/Hikvision-Addons/issues) 并在上面告诉我们您拥有何种类型的设备。

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
- 其他重新品牌化的设备似乎也能确认工作，例如：Metzler 制造的 VDM10
- ...
- 仅此而已是已确认的列表，可能还有其他设备也能工作...
- DS-KV8102-IM (第一代不支持，仅支持开锁)
- DS-K1T502DBFWX (完全不支持)
- DS-HD1 和 DS-HD2 不支持吗？它们不支持 ISAPI 吗？

请务必阅读此处完整的文档！[Readme](DOCS.md)

## 附加资源
- [Home Assistant 社区论坛](https://community.home-assistant.io/t/hikvision-doorbell-videointercom-integration/532796)

## 贡献

这是一个活跃的开源项目。我们一直欢迎希望使用代码或为此做出贡献的人。感谢您的参与！ :heart_eyes:


### 贡献者
<a href="https://github.com/pergolafabio/Hikvision-Addons/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=pergolafabio/Hikvision-Addons" />
</a>

由 [contrib.rocks](https://contrib.rocks) 制作。

## 捐赠
喜欢我的工作？您随时可以 [给我捐赠](https://paypal.me/pergolafabio)。

## 致谢
此应用最初灵感来源于 [此脚本](https://github.com/laszlojakab/hikvision-intercom-python-demo)。

---

**⚠️ This resource is intended to help Chinese Home Assistant users more easily install excellent add-ons. If you are not a Chinese user, please read repository readme first**

**⚠️ 这个资源用来帮助中国Home Assistant用户更容易地安装优秀的插件。如果您不是中国用户，请先阅读仓库的README，以下为收集者（汉化，加速）信息，非原作者信息**

---

## 📱 关注我

扫描下面二维码，关注我。有需要可以随时给我留言：

<img src="https://raw.gitcode.com/ha-china/ha-apps/raw/main/WeChat_QRCode.png" width="50%" /> 📲

## ☕ 赞助支持

如果您觉得我花费大量时间维护这个库对您有帮助，欢迎请我喝杯奶茶，您的支持将是我持续改进的动力！

<div style="display: flex; justify-content: space-between;">
  <img src="https://raw.gitcode.com/ha-china/ha-apps/raw/main/1_readme/Ali_Pay.jpg" height="350px" />
  <img src="https://raw.gitcode.com/ha-china/ha-apps/raw/main/1_readme/WeChat_Pay.jpg" height="350px" />
</div> 💖

感谢您的支持与鼓励！
