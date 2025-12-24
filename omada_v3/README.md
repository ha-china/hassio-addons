# Home assistant 添加组件：Omada v3

我在业余时间维护这个和其他 Home Assistant 添加组件：跟进上游更改、HA 更改，并在真实硬件上测试，这需要大量时间（和一些钱）。我大约使用我超过 110 个添加组件中的 5-10 个，因此我安装了测试机器（和购买了一些我自己不使用的测试服务，例如 VPN），以便我能够调试和改进添加组件。

如果这个添加组件为您节省了时间或使您的设置更简单，我将非常感谢您的支持！

[![给我买咖啡][donation-badge]](https://www.buymeacoffee.com/alexbelgium)
[![通过 PayPal 捐赠][paypal-badge]](https://www.paypal.com/donate/?hosted_button_id=DZFULJZTP3UQA)

## 添加组件信息

![版本](https://img.shields.io/badge/dynamic/yaml?label=版本&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fomada_v3%2Fconfig.yaml)
![入口](https://img.shields.io/badge/dynamic/yaml?label=入口&query=%24.ingress&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fomada_v3%2Fconfig.yaml)
![架构](https://img.shields.io/badge/dynamic/yaml?color=success&label=架构&query=%24.arch&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fomada_v3%2Fconfig.yaml)

[![Codacy 徽章](https://app.codacy.com/project/badge/Grade/9c6cf10bdbba45ecb202d7f579b5be0e)](https://www.codacy.com/gh/alexbelgium/hassio-addons/dashboard?utm_source=github.com&utm_medium=referral&utm_content=alexbelgium/hassio-addons&utm_campaign=Badge_Grade)
[![GitHub Super-Linter](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/weekly-supelinter.yaml?label=Lint%20code%20base)](https://github.com/alexbelgium/hassio-addons/actions/workflows/weekly-supelinter.yaml)
[![构建器](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/onpush_builder.yaml?label=构建器)](https://github.com/alexbelgium/hassio-addons/actions/workflows/onpush_builder.yaml)

[donation-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee-%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white
[paypal-badge]: https://img.shields.io/badge/Donate%20via%20PayPal-0070BA?logo=paypal&style=flat&logoColor=white

_感谢所有给我的仓库点赞的人！要点赞，请点击下面的图片，然后它将在右上角。谢谢！_

[![@alexbelgium/hassio-addons 的星标仓库罗盘](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/.github/stars2.svg)](https://github.com/alexbelgium/hassio-addons/stargazers)

![下载量趋势](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/omada_v3/stats.png)

## ⚠️ 迁移通知

**这个遗留添加组件（v3）不再积极维护。**

**建议：** 请备份您的数据库并迁移到这个专用添加组件：https://github.com/jkunczik/home-assistant-omada

推荐的替代方案：
- 专门用于 Omada 功能
- 在积极开发中
- 应该更稳定和功能完整
- 社区支持更好
- 支持更新的 Omada 控制器版本

## 关于

这个添加组件提供了遗留的 TP-Link Omada 控制器 v3.x，用于管理旧的 TP-Link Omada 网络设备。这个版本已被弃用，仅应用于无法升级的遗留系统。

**注意：** 这是遗留的 v3 版本。考虑迁移到当前的 Omada 添加组件或推荐的第三方添加组件，以获得更好的性能和支持。

## 迁移说明

**对于遗留系统（v3）：**
1. 备份您当前的 v3 配置
2. 考虑将您的 Omada 设备升级以支持更新的控制器版本
3. 迁移到推荐的添加组件：https://github.com/jkunczik/home-assistant-omada

**迁移路径：**
1. **从 v3 控制器备份当前数据**
2. **从第三方仓库安装推荐的添加组件**
3. **导入配置并重新连接设备**
4. **在移除这个遗留添加组件之前验证功能**

### 环境变量

使用添加组件的 `env_vars` 选项来传递额外的环境变量（大写或小写名称）。请参阅 https://github.com/alexbelgium/hassio-addons/wiki/Add-Environment-variables-to-your-Addon-2 获取详细信息。

## 遗留支持

这个添加组件仅为了兼容性而维护。不会添加新功能。

如需迁移或推荐替代方案的支持，请访问 https://github.com/jkunczik/home-assistant-omada

[repository]: https://github.com/alexbelgium/hassio-addons
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
