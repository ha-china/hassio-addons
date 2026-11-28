# 非官方 Home Assistant 插件：Victoria Metrics

Victoria Metrics (<https://github.com/VictoriaMetrics/VictoriaMetrics>) 已打包为 Home Assistant 插件。

![aarch64-shield](https://img.shields.io/badge/aarch64-yes-green)
![amd64-shield](https://img.shields.io/badge/amd64-yes-green)
![armv7-shield](https://img.shields.io/badge/armv7-yes-green)
![i386-shield](https://img.shields.io/badge/i386-yes-green)

## 安装

按照以下步骤将插件安装到您的系统上：

1. 在 Home Assistant 前端导航到 **Supervisor -> Add-on Store**
1. 通过 URL 添加此新仓库
   (`https://github.com/bluemaex/home-assistant-addons`)
1. 查找名为 "Unpoller" 的插件并点击它。
1. 点击"INSTALL"按钮。
1. 在插件内阅读文档。
1. 根据您的喜好调整配置。
1. 开始进行长期追踪 👍

## 关于

Victoria Metrics 是一种快速、成本效益高且可扩展的监控解决方案和时间序列数据库。如果您希望为 HomeAssistant 数据存储长期数据，并且希望执行超过 HomeAssistant 默认保留时间的自定义评估，这是一个绝佳选择。

您可以通过以下两种方式使用此插件：

### Server

运行一个完整的
[超高效时间序列数据库](https://github.com/VictoriaMetrics/VictoriaMetrics#prominent-features)
服务器，即使在性能较低的计算机（如 Raspberry PI）上也能运行。

### Agent

此插件可以轻松抓取（即获取）本地指标，将其缓存在本地临时数据库中，并在能够访问时立即将其发送到集中式的 Victoria Metrics 时间序列数据库服务器，从而确保即使数据库处于断开连接或无法访问状态时也能拥有完整的数据。

## 最后说明

有关配置此插件的信息，请参阅插件页面内的
[文档](DOCS.md)

本项目与 Victoria Metrics 及其维护团队无关，仅仅是一个社区项目。Victoria Metrics 本身遵循
[Apache License 2.0](https://github.com/VictoriaMetrics/VictoriaMetrics/blob/master/LICENSE) 许可分发。

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
