# Home Assistant Omada Add-On v6 (No-AVX)

此 Add-On 将 Omada Controller v6 直接集成到 Home Assistant 中。

**这是使用不带 AVX 指令的 MongoDB 编译的特殊变体。**
这使得 Omada Controller v6 可以在其他与标准 MongoDB 5.0+（Omada v6 所需）不兼容的旧版 CPU（如旧版 Celeron、Pentium 或部分 Xeon）上运行。

## 兼容ibility

- **支持:** 不支持 AVX 的 x86_64 (amd64) CPU。
- **也支持:** 标准 x86_64 CPU。
- **ARM64:** 此 Add-On 支持满足 MongoDB 5.0+ 要求 (ARMv8.2-A 或更新版本) 的 ARM64 设备。
  - **适用器物:** Raspberry Pi 5，新款 Rockchip 主板。
  - **不适用器物:** Raspberry Pi 4, Raspberry Pi 3。这些设备缺乏 MongoDB 5.0+ 所需的 ARMv8.2 指令。请使用 v5 Add-On。

## 贡献

此 Add-On 最初受到 Matt Bentley 的 [docker-omada-controller](https://github.com/mbentley/docker-omada-controller) 和 jkunczik [home-assistant-omada](https://github.com/jkunczik/home-assistant-omada) 的启发。
它结合了 [fenio/omada-controller-no-avx](https://github.com/fenio/omada-controller-no-avx) 中的 No-AVX MongoDB 构建版本。

除了原始的 docker omada controller 外，此 Add-On 将所有持久化数据存储到 /data 目录中，
使其与 Home Assistant 兼容。没有其他人的努力，此 Add-On 将无法实现。
欢迎随时提交用于版本更新或新功能的 Pull requests。
特别感谢 DraTrav 推动此 Add-On 的发展！

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
