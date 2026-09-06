# Omada Controller 稳定版 v6 (HA OS)

此版本适用于 **运行 Home Assistant OS 的 Raspberry Pi 5 用户**。

## 何时使用此版本

| 设置项 | 用途 |
|---|---|
| Raspberry Pi 5 + Home Assistant OS | **此版本** |
| Raspberry Pi 5 + HA Supervised (Pi OS + Docker) | Omada 稳定版 v6 |
| x86-64 (任何 HA 安装) | Omada 稳定版 v6 |
| 不支持 AVX 的旧版 x86-64 | Omada 稳定版 NO-AVX |

## 为什么需要独立版本？

MongoDB 8.0（标准稳定版 v6 镜像所用版本）在其内存控制器（tcmalloc）中需要 1 GB 对齐的 `mmap` 区域。Home Assistant OS 在容器中运行附加组件时，存在安全限制，会阻止这些分配操作，导致 MongoDB 在启动时崩溃，并出现以下错误：

```
MmapAligned() failed - unable to allocate with tag
FATAL ERROR: Out of memory trying to allocate internal tcmalloc data
```

此版本使用 **MongoDB 7.0**（基于 Ubuntu 22.04），该版本没有此要求，能在 HA OS 容器内正常工作。

在对 Raspberry Pi OS 上运行 HA Supervised 的用户不受此问题影响，继续使用标准稳定版 v6 附加组件可避免 MongoDB 数据格式兼容性问题。

## 配置

配置选项与标准稳定版 v6 相同。有关详细信息，请参阅 [主 README](../README.md)。

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
