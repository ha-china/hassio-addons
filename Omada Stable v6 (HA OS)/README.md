# Omada Controller 稳定版 v6 (高可用操作系统)

此版本适用于**运行 Home Assistant OS 的 Raspberry Pi 5 用户**。

## 何时使用此版本

| 设置 | 使用 |
|---|---|
| Raspberry Pi 5 + Home Assistant OS | **此版本** |
| Raspberry Pi 5 + HA Supervised (Pi OS + Docker) | Omada 稳定版 v6 |
| x86-64 (任何 HA 安装) | Omada 稳定版 v6 |
| 较旧的 x86-64（无 AVX） | Omada 稳定版 v6 NO-AVX |

## 为什么需要单独的版本？

MongoDB 8.0（标准稳定版 v6 图像所使用）要求内存分配器（tcmalloc）的 `mmap` 区域必须对 1 GB 进行对齐。HA OS 在容器中运行附加组件，并受到安全限制，这阻止了这些分配的成功，导致 MongoDB 在启动时崩溃，并显示以下错误：

```
MmapAligned() failed - unable to allocate with tag
FATAL ERROR: Out of memory trying to allocate internal tcmalloc data
```

此版本使用 **MongoDB 7.0**（基于 Ubuntu 22.04），它没有这个要求，并且可以在 HA OS 容器中正常工作。

在 Raspberry Pi OS 上运行 HA Supervised 的用户不受此问题的影响，应继续使用标准的稳定版 v6 附加组件，以避免 MongoDB 数据格式兼容性问题。

## 配置

配置选项与标准稳定版 v6 变体相同。有关详细信息，请参阅[主 README](../README.md)。
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
