# Home Assistant Omada Add-On v6 (No-AVX)

This add-on brings the Omada Controller v6 directly into Home Assistant.

**This is a special variant compiled with a MongoDB binary that does NOT require AVX instructions.**
This allows running Omada Controller v6 on older CPUs (like older Celerons, Pentiums, or some Xeons) that are otherwise incompatible with the standard MongoDB 5.0+ required by Omada v6.

## Compatibility

- **Supported:** x86_64 (amd64) CPUs without AVX support.
- **Also Supported:** Standard x86_64 CPUs.
- **ARM64:** This add-on supports ARM64 devices that meet MongoDB 5.0+ requirements (ARMv8.2-A or newer).
  - **Works on:** Raspberry Pi 5, newer Rockchip boards.
  - **Does NOT work on:** Raspberry Pi 4, Raspberry Pi 3. These devices lack the required ARMv8.2 instructions for MongoDB 5.0+. Use the v5 add-on instead.

## Contribution

This add-on was originally inspired by Matt Bentley’s
[docker-omada-controller](https://github.com/mbentley/docker-omada-controller)
and jkunczik [home-assistant-omada](https://github.com/jkunczik/home-assistant-omada).
It incorporates the No-AVX MongoDB build from [fenio/omada-controller-no-avx](https://github.com/fenio/omada-controller-no-avx).

Other than in the original docker omada controller,
this add-on stores all persistent data in the /data directory,
so that it is compatible with Home Assistant.
This Add-On would not be possible without the effort of other people.
Pull requests for version updates or new features are always more than welcome.
Special thanks goes to DraTrav for pushing this Add-On forward!

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
