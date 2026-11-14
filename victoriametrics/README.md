# 非官方 Home Assistant 插件：Victoria Metrics

Victoria Metrics (<https://github.com/VictoriaMetrics/VictoriaMetrics>) 已捆绑为一个 Home Assistant 插件。

![aarch64-shield](https://img.shields.io/badge/aarch64-yes-green)
![amd64-shield](https://img.shields.io/badge/amd64-yes-green)
![armv7-shield](https://img.shields.io/badge/armv7-yes-green)
![i386-shield](https://img.shields.io/badge/i386-yes-green)

## 安装

按照以下步骤将插件安装到您的系统：

1. 在 Home Assistant 前端中导航到 **Supervisor -> Add-on Store**（插件商店）
1. 通过 URL 添加此新仓库（`https://github.com/bluemaex/home-assistant-addons`)
1. 找到"Unpoller"插件并点击它。
1. 点击"INSTALL"（安装）按钮
1. 阅读插件内的文档
1. 根据您的喜好调整配置
1. 开始进行长期数据跟踪 👍

## 关于 Victoria Metrics

Victoria Metrics 是一种快速、具有高成本效益且可扩展的监控解决方案和时间序列数据库。如果您希望对 Home Assistant 数据进行长期存储，并执行超过默认 Home Assistant 保留时间的自定义评估，这是一个绝佳的选择。

您可以通过以下两种方式使用此插件：

### 服务器模式

即使在低配置的计算设备（如 Raspberry Pi）上，运行一个完整的
[高效时间序列数据库](https://github.com/VictoriaMetrics/VictoriaMetrics#prominent-features) 服务器。

### 代理模式

此插件可以方便地在本地收集（即抓取）指标，将其缓存在本地临时数据库中，并在一旦数据库可访问时立即将其发送到集中式的 Victoria Metrics 时间序列数据库服务器，从而确保即使在数据库暂时关闭或不可达的情况下也能拥有完整的数据。

## 最后说明

关于如何配置此插件的信息，请访问插件页面内的
[文档](DOCS.md)。

本项目与 Victoria Metrics 及其维护团队无关，仅仅是社区的努力。Victoria Metrics 本身采用
[Apache License 2.0](https://github.com/VictoriaMetrics/VictoriaMetrics/blob/master/LICENSE) 协议分发。

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
