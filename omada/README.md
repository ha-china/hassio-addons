# Home assistant插件：Omada

[![捐赠][donation-badge]](https://www.buymeacoffee.com/alexbelgium)
[![捐赠][paypal-badge]](https://www.paypal.com/donate/?hosted_button_id=DZFULJZTP3UQA)

![版本](https://img.shields.io/badge/dynamic/yaml?label=版本&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fomada%2Fconfig.yaml)
![入口](https://img.shields.io/badge/dynamic/yaml?label=入口&query=%24.ingress&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fomada%2Fconfig.yaml)
![架构](https://img.shields.io/badge/dynamic/yaml?color=success&label=架构&query=%24.arch&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fomada%2Fconfig.yaml)

[![Codacy徽章](https://app.codacy.com/project/badge/Grade/9c6cf10bdbba45ecb202d7f579b5be0e)](https://www.codacy.com/gh/alexbelgium/hassio-addons/dashboard?utm_source=github.com&utm_medium=referral&utm_content=alexbelgium/hassio-addons&utm_campaign=Badge_Grade)
[![GitHub Super-Linter](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/weekly-supelinter.yaml?label=Lint%20code%20base)](https://github.com/alexbelgium/hassio-addons/actions/workflows/weekly-supelinter.yaml)
[![构建器](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/onpush_builder.yaml?label=构建器)](https://github.com/alexbelgium/hassio-addons/actions/workflows/onpush_builder.yaml)

[donation-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee%20(no%20paypal)-%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white
[paypal-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee%20with%20Paypal-0070BA?logo=paypal&style=flat&logoColor=white

_感谢所有给我仓库星标的人！要星标它，请点击下面的图片，然后它会在右上角。谢谢！_

[![Stargazers repo roster for @alexbelgium/hassio-addons](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/.github/stars2.svg)](https://github.com/alexbelgium/hassio-addons/stargazers)

![下载趋势](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/omada/stats.png)

## ⚠️ 迁移通知

**此插件不再积极维护。**

**建议：** 请备份您的数据库并迁移到此专用插件：https://github.com/jkunczik/home-assistant-omada

推荐的替代方案：
- 专门用于Omada功能
- 在积极开发中
- 应该更稳定和功能完善
- 拥有更好的社区支持

## 关于

此插件提供了TP-Link Omada控制器，用于通过集中的网络界面管理TP-Link Omada网络设备，包括接入点、交换机和路由器。

Omada控制器允许您：
- 管理多个TP-Link Omada设备
- 配置无线网络和VLAN
- 监控网络性能和使用情况
- 设置访客网络和访问控制
- 管理固件更新
- 生成网络报告

## 迁移说明

1. **备份当前数据：**
   - 访问当前的Omada控制器
   - 导出您的配置和设置
   - 记下所有您的网络配置

2. **安装推荐的插件：**
   - 添加仓库：https://github.com/jkunczik/home-assistant-omada
   - 安装新的Omada插件
   - 跟随他们的设置说明

3. **导入数据：**
   - 导入您备份的配置
   - 验证所有设备是否正确连接
   - 测试您的网络功能

## 传统配置

如果您仍然需要暂时使用此插件：

Webui可以在 `<your-ip>:8088` (HTTP) 或 `<your-ip>:8043` (HTTPS) 找到。

### 自定义脚本和环境变量

此插件支持通过 `addon_config` 映射的自定义脚本和环境变量：

- **自定义脚本**：参见 [在插件中运行自定义脚本](https://github.com/alexbelgium/hassio-addons/wiki/Running-custom-scripts-in-Addons)
- **环境变量**：参见 [为您的插件添加环境变量](https://github.com/alexbelgium/hassio-addons/wiki/Add-Environment-variables-to-your-Addon)

## 支持

对于此传统插件：在github上创建问题

对于推荐的替代方案：访问 https://github.com/jkunczik/home-assistant-omada

[repository]: https://github.com/alexbelgium/hassio-addons