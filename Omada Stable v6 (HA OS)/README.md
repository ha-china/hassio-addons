# Omada Controller Stable v6 (HA OS 版)

此版本专为 **运行 Home Assistant OS 的 Raspberry Pi 5 用户** 设计。

## 适用场景

| 设置 | 用途 |
|---|---|
| Raspberry Pi 5 + Home Assistant OS | **本版本** |
| Raspberry Pi 5 + HA Supervised (Pi OS + Docker) | Omada Stable v6 |
| x86-64（任何 HA 安装） | Omada Stable v6 |
| 不支持 AVX 的旧版 x86-64 | Omada Stable v6 NO-AVX |

## 为何设立独立版本？

标准 Stable v6 镜像使用的 MongoDB 8.0依赖其内存分配器（tcmalloc）进行 1 GB 对齐的 `mmap` 区域分配。Home Assistant OS 运行的附加包以容器形式存在，其安全措施阻止了此类内存分配。这会导致 MongoDB 在启动时发生崩溃，并输出以下错误信息：

```
MmapAligned() failed - unable to allocate with tag
FATAL ERROR: Out of memory trying to allocate internal tcmalloc data
```

本版本使用 **MongoDB 7.0**（基于 Ubuntu 22.04 发行版），无需该对齐要求，且可在全功能 Home Assistant OS 容器内正常工作。

在 Raspberry Pi OS 上运行 HA Supervised 的用户不受此问题影响，应继续使用标准的 Stable v6 附加包，以避免 MongoDB 数据格式兼容性问题。

## 配置

配置选项与标准 Stable v6 版本相同。详情请参见 [主 README](../README.md)。

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
