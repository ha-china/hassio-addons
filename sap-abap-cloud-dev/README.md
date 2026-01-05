# SAP ABAP Cloud Developer Trial

![Logo](logo.png)

[![打开您的 Home Assistant 实例并显示附加组件仪表板。](https://my.home-assistant.io/badges/supervisor_addon.svg)](https://my.home-assistant.io/redirect/supervisor_addon/?addon=c1e285b7_sap-abap-cloud-dev)
[![Home Assistant 附加组件](https://img.shields.io/badge/home%20assistant-addon-blue.svg)](https://www.home-assistant.io/addons/)
[![Docker 镜像](https://img.shields.io/badge/docker-0.0.1-blue.svg?logo=docker&style=flat-square)](https://github.com/FaserF/hassio-addons/pkgs/container/hassio-addons-sap-abap-cloud-dev)
![项目维护](https://img.shields.io/badge/maintainer-FaserF-blue?style=flat-square)

> SAP ABAP 平台试用版，用于本地 ABAP 开发

---

> [!CAUTION]
> **实验性 / Beta 状态**
>
> 此附加组件仍在开发中，且主要开发用于个人使用。
> 它尚未经过广泛测试，但预计基本功能可以正常工作。

---

## 📖 关于

SAP ABAP Cloud Developer Trial for Home Assistant OS

## ⚠️ 重要免责声明

> **未提供许可证**: 此附加组件不包含任何 SAP 许可证。您必须从 SAP 获取自己的许可证并同意 SAP 的使用条款。

> **无担保**: 此附加组件按“原样”提供，不提供任何担保。维护者对数据丢失、系统损坏或使用此附加组件引起的任何其他问题不承担责任。

> **仅供测试**: 此附加组件仅用于个人学习、技能开发和测试 SAP ABAP。它**不**适用于生产环境。

> **SAP 许可证条款**: 您必须遵守所有 SAP 许可证条款和条件。详情请访问 [SAP 的条款](https://www.sap.com/about/legal/disclaimer.html)。

此附加组件提供官方的 SAP ABAP Cloud Developer Trial 环境，允许您在 SAP HANA 2.0 上直接从 Home Assistant 运行完整的 SAP ABAP 平台。

**功能:**

- SAP ABAP 平台试用版，包含 SAP HANA 数据库
- SAP Fiori Launchpad
- 用于学习 ABAP 的示例应用程序

**应用场景:**

- 学习 ABAP 编程
- 提升 SAP 开发技能
- 在沙盒环境中测试 SAP 集成

## 要求

> ⚠️ **硬件要求:**
>
> - **最低 RAM:** 16 GB（推荐 32 GB）
> - **最低 CPU:** 4 核
> - **最低磁盘空间:** 150 GB 可用空间
> - **架构:** 仅限 amd64（x86_64）

## 安装

1. 将此仓库添加到您的 Home Assistant 附加组件商店
2. 安装“SAP ABAP Cloud Developer Trial”附加组件
3. **阅读并接受** SAP 许可证条款
4. 在配置中设置 `agree_to_license: true`
5. 启动附加组件（初始启动需要 5-10 分钟）

---

## ⚙️ 配置

通过 Home Assistant 附加组件页面中的**配置**选项卡配置附加组件。

### 选项

```yaml
agree_to_license: false
ignore_requirements: false
```

---

## 👨‍💻 致谢 & 许可证

本项目是开源的，并在 MIT 许可证下提供。
由 **FaserF** 维护。
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
