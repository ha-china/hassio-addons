# Home Assistant Omada Add-On v6 (无AVX)

此插件将Omada Controller v6直接引入Home Assistant。

**这是一个特殊变体，使用无需AVX指令的MongoDB二进制文件编译而成。**
这允许在旧CPU（如较老的Celeron、Pentium或某些Xeon）上运行Omada Controller v6，这些CPU在其他情况下与Omada v6所需的MongoDB 5.0+标准不兼容。

## 兼容性

- **支持：** 无AVX支持的x86_64 (amd64) CPU。
- **也支持：** 标准x86_64 CPU。
- **ARM64：** 此插件支持符合MongoDB 5.0+要求的ARM64设备（ARMv8.2-A或更新）。
  - **适用于：** Raspberry Pi 5，较新的Rockchip板。
  - **不适用于：** Raspberry Pi 4，Raspberry Pi 3。这些设备缺少MongoDB 5.0+所需的ARMv8.2指令。请使用v5插件。
  
## 贡献

此插件最初灵感来源于Matt Bentley的
[docker-omada-controller](https://github.com/mbentley/docker-omada-controller)
以及jkunczik的 [home-assistant-omada](https://github.com/jkunczik/home-assistant-omada)。
它集成了来自[fenio/omada-controller-no-avx](https://github.com/fenio/omada-controller-no-avx)的No-AVX MongoDB构建。

除了原始的docker omada controller，
此插件将所有持久数据存储在/data目录中，
以便与Home Assistant兼容。
如果没有其他人的努力，此插件将无法实现。
对于版本更新或新功能的拉取请求始终欢迎。
特别感谢DraTrav推动此插件的发展！
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
