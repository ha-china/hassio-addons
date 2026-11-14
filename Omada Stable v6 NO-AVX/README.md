# Home Assistant Omada 插件 v6 (无 AVX)

该插件将 Omada 控制器 v6 直接集成到 Home Assistant 中。

**这是一个特殊的变体，使用不需要 AVX 指令的 MongoDB 二进制文件进行编译。**
这使得您可以在较旧的 CPU（如较旧的 Celeron、Pentium 或某些 Xenon）上运行 Omada 控制器 v6，而这些 CPU 否则与 Omada v6 所需的 MongoDB 5.0+ 不兼容。

## 兼容性

- **支持：** 不支持 AVX 的 x86_64 (amd64) CPU。
- **还支持：** 标准的 x86_64 CPU。
- **ARM64：** 该插件支持满足 MongoDB 5.0+ 要求的 ARM64 设备（ARMv8.2-A 或更新版本）。
  - **适用：** Raspberry Pi 5、较新的 Rockchip 主板。
  - **不适用：** Raspberry Pi 4、Raspberry Pi 3。这些设备缺少用于 MongoDB 5.0+ 所需的 ARMv8.2 指令。请使用 v5 插件。

## 贡献

该插件最初受 Matt Bentley 的
[docker-omada-controller](https://github.com/mbentley/docker-omada-controller)
和 jkunczik [home-assistant-omada](https://github.com/jkunczik/home-assistant-omada) 的启发。
它集成了来自 [fenio/omada-controller-no-avx](https://github.com/fenio/omada-controller-no-avx) 的无 AVX MongoDB 构建版本。

除了原始的 Docker Omada 控制器外，
该插件将所有持久化数据存储在 /data 目录中，
因此它可以与 Home Assistant 兼容。
没有其他人的努力，这个插件是不可能实现的。
欢迎随时提交版本更新或新功能的拉取请求。
特别感谢 DraTrav 推动该插件的发展！

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
