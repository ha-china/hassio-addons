# Home assistant add-on: Omada v3

[![Donate][donation-badge]](https://www.buymeacoffee.com/alexbelgium)
[![Donate][paypal-badge]](https://www.paypal.com/donate/?hosted_button_id=DZFULJZTP3UQA)

![Version](https://img.shields.io/badge/dynamic/yaml?label=版本&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fomada_v3%2Fconfig.yaml)
![Ingress](https://img.shields.io/badge/dynamic/yaml?label=Ingress&query=%24.ingress&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fomada_v3%2Fconfig.yaml)
![Arch](https://img.shields.io/badge/dynamic/yaml?color=success&label=架构&query=%24.arch&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fomada_v3%2Fconfig.yaml)

[![Codacy Badge](https://app.codacy.com/project/badge/Grade/9c6cf10bdbba45ecb202d7f579b5be0e)](https://www.codacy.com/gh/alexbelgium/hassio-addons/dashboard?utm_source=github.com&utm_medium=referral&utm_content=alexbelgium/hassio-addons&utm_campaign=Badge_Grade)
[![GitHub Super-Linter](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/weekly-supelinter.yaml?label=Lint%20code%20base)](https://github.com/alexbelgium/hassio-addons/actions/workflows/weekly-supelinter.yaml)
[![Builder](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/onpush_builder.yaml?label=Builder)](https://github.com/alexbelgium/hassio-addons/actions/workflows/onpush_builder.yaml)

[donation-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee%20(no%20paypal)-%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white
[paypal-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee%20with%20Paypal-0070BA?logo=paypal&style=flat&logoColor=white

_感谢所有给我的仓库点赞的人！要点赞，请点击下面的图片，然后它会在右上角。谢谢！_

[![Stargazers repo roster for @alexbelgium/hassio-addons](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/.github/stars2.svg)](https://github.com/alexbelgium/hassio-addons/stargazers)

![下载趋势](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/omada_v3/stats.png)

## ⚠️ 迁移通知

**这个旧版插件（v3）不再积极维护。**

**建议：** 请备份您的数据库并迁移到这个专用插件：https://github.com/jkunczik/home-assistant-omada

推荐的替代方案：
- 专门用于 Omada 功能  
- 在积极开发中
- 应该更稳定和功能完整
- 拥有更好的社区支持
- 支持更新的 Omada 控制器版本

## 关于

这个插件提供了旧版 TP-Link Omada 控制器 v3.x，用于管理旧的 TP-Link Omada 网络设备。这个版本已经过时，只能用于无法升级的旧系统。

**注意：** 这是旧版 v3 版本。请考虑迁移到当前的 Omada 插件或推荐的第三方插件，以获得更好的性能和支持。

## 迁移说明

**对于旧系统（v3）：**
1. 备份当前的 v3 配置
2. 考虑将 Omada 设备升级以支持新的控制器版本
3. 迁移到推荐的插件：https://github.com/jkunczik/home-assistant-omada

**迁移路径：**
1. **从 v3 控制器备份当前数据**
2. **从第三方仓库安装推荐的插件**
3. **导入配置并重新连接设备**
4. **在移除这个旧版插件之前验证功能**

## 旧版支持

这个插件仅为了兼容性而维护。将不会添加新功能。

如需迁移或推荐替代品的支持：访问 https://github.com/jkunczik/home-assistant-omada

[repository]: https://github.com/alexbelgium/hassio-addons