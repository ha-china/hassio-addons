# 非官方Home Assistant插件：Victoria Metrics

Victoria Metrics (<https://github.com/VictoriaMetrics/VictoriaMetrics>) 作为Home Assistant插件捆绑。

![aarch64-shield](https://img.shields.io/badge/aarch64-yes-green)
![amd64-shield](https://img.shields.io/badge/amd64-yes-green)
![armv7-shield](https://img.shields.io/badge/armv7-yes-green)
![i386-shield](https://img.shields.io/badge/i386-yes-green)

## 安装

按照以下步骤将插件安装到您的系统：

1. 在Home Assistant前端导航到 **Supervisor -> 插件商店**
1. 通过URL添加此新仓库 (`https://github.com/bluemaex/home-assistant-addons`)
1. 查找“Unpoller”插件并点击它。
1. 点击“安装”按钮
1. 阅读插件内的文档
1. 根据您的喜好调整配置
1. 开始长期跟踪 👍

## 关于

Victoria Metrics是一个快速、经济高效且可扩展的监控解决方案和时间序列数据库。如果您希望对HomeAssistant数据进行长期存储，并执行比默认HomeAssistant保留时间更长的自定义评估，它是一个很好的选择。

您可以通过两种方式运行此插件：

### 服务器

在低配置计算机上（如Raspberry PI）运行一个完整的
[超高效时间序列数据库](https://github.com/VictoriaMetrics/VictoriaMetrics#prominent-features)
服务器。

### 代理

此插件使您能够轻松地本地抓取（即获取）指标，将它们缓存在本地的临时数据库中，并在可访问时将它们发送到您的集中式Victoria Metrics时间序列数据库服务器，从而即使在数据库有时不可用或无法访问的情况下也能拥有完整的数据。

## 最后的注意事项

有关如何配置此插件的详细信息，请参阅插件页面内的
[文档](DOCS.md)。

此项目与Victoria Metrics、Victoria Metrics维护团队无关，而是一个社区的努力。Victoria Metrics本身是在
[Apache License 2.0](https://github.com/VictoriaMetrics/VictoriaMetrics/blob/master/LICENSE) 许可下分发的。
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
