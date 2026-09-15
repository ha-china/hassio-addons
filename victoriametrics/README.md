# 非官方 Home Assistant 附加组件：Victoria Metrics

Victoria Metrics (<https://github.com/VictoriaMetrics/VictoriaMetrics>) 打包为 Home Assistant 附加组件。

![aarch64-shield](https://img.shields.io/badge/aarch64-yes-green)
![amd64-shield](https://img.shields.io/badge/amd64-yes-green)
![armv7-shield](https://img.shields.io/badge/armv7-yes-green)
![i386-shield](https://img.shields.io/badge/i386-yes-green)

## 安装

请按以下步骤将附加组件安装到您的系统：

1. 导航至您的 Home Assistant 前端 **Supervisor -> 附加组件商店**
1. 通过 URL 添加此新存储库
   (`https://github.com/bluemaex/home-assistant-addons`)
1. 找到 "Unpoller" 附加组件并点击它。
1. 点击 "INSTALL" (安装) 按钮
1. 阅读附加组件内的文档
1. 根据您的喜好调整配置
1. 开始进行长期跟踪 👍

## 关于

Victoria Metrics 是一种高效、成本效益高且具有可扩展性的监控解决方案和时间序列数据库。如果您希望为 HomeAssistant 数据进行长期存储，并执行超过默认 HomeAssistant 保留时间的自定义评估，它是一个不错的选择。

您可以通过两种方式运行此附加组件：

### 服务器

即使在性能较低的计算机（如树莓派）上，也可以运行一个完整的 [超高效时间序列数据库服务器](https://github.com/VictoriaMetrics/VictoriaMetrics#prominent-features)。

### 代理 (Agent)

此附加组件使其易于在本地抓取（即获取）指标，在本地临时数据库中缓存它们，并一旦能够访问就将其发送到集中式的 Victoria Metrics 时间序列数据库服务器，从而确保即使数据库暂时宕机或无法访问，也能拥有完整的数据。

## 最后说明

关于如何配置此附加组件，请参阅附加组件页面内的 [文档](DOCS.md)

本项目与 Victoria Metrics 或其维护团队无关，仅是社区的努力。Victoria Metrics 本身分发在
[Apache License 2.0](https://github.com/VictoriaMetrics/VictoriaMetrics/blob/master/LICENSE) 协议下。

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
