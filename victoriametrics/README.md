# 非官方 Home Assistant 附加组件：Victoria Metrics

Victoria Metrics (<https://github.com/VictoriaMetrics/VictoriaMetrics>) 捆绑为一个 Home Assistant 附加组件。

![aarch64-shield](https://img.shields.io/badge/aarch64-yes-green)
![amd64-shield](https://img.shields.io/badge/amd64-yes-green)
![armv7-shield](https://img.shields.io/badge/armv7-yes-green)
![i386-shield](https://img.shields.io/badge/i386-yes-green)

## 安装

按照以下步骤将附加组件安装到您的系统：

1. 在您 Home Assistant 前端中，进入 **Supervisor -> Add-on Store**
1. 通过 URL 添加此新存储库
   (`https://github.com/bluemaex/home-assistant-addons`)
1. 找到"Unpoller"附加组件并点击它。
1. 点击"INSTALL"（安装）按钮
1. 阅读附加组件内的文档
1. 根据您的喜好调整配置
1. 开始长期跟踪 👍

## 关于 Victoria Metrics

Victoria Metrics 是一款快速、成本效益高且可扩展的监控解决方案和时间序列数据库。如果您希望对 HomeAssistant 数据进行长期存储，并希望进行超过默认 HomeAssistant 保留时间的自定义评估，这是一个很好的选择。

您可以以两种不同的方式使用此附加组件：

### 服务器

即使是在低配置的电脑（如 Raspberry Pi）上，也可以运行一个完整的
[超高效时间序列数据库](https://github.com/VictoriaMetrics/VictoriaMetrics#prominent-features)
服务器。

### 代理

此附加组件使得轻松获取（即检索）本地指标变得简单，可以将其缓存在本地临时数据库中，并在数据库就绪时立即将它们发送到集中化的 Victoria Metrics 时间序列数据库服务器，从而实现即使数据库有时无法访问或断开连接也能拥有完整数据。

## 最终说明

有关如何配置此附加组件的详细信息，请参阅附加组件页面内的
[文档](DOCS.md)

本项目与 Victoria Metrics、Victoria Metrics 维护团队并无关联，只是一个社区 efforts（合作）。Victoria Metrics 本身遵循
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
