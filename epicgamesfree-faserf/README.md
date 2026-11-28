# Epic Games Freebies Claimer

<img src="https://raw.githubusercontent.com/FaserF/hassio-addons/master/epicgamesfree/logo.png" width="100" alt="Logo" />

[![Open your Home Assistant instance and show the app dashboard.](https://my.home-assistant.io/badges/supervisor_addon.svg)](https://my.home-assistant.io/redirect/supervisor_addon/?addon=605cee21_epicgamesfree)
[![Home Assistant App](https://img.shields.io/badge/home%20assistant-app-blue.svg)](https://www.home-assistant.io/apps/)
[![Docker Image](https://img.shields.io/badge/docker-0.1.3-blue.svg?logo=docker&style=flat-square)](https://github.com/FaserF/hassio-addons/pkgs/container/hassio-addons-epicgamesfree)
![Project Maintenance](https://img.shields.io/badge/maintainer-FaserF-blue?style=flat-square)

> 自动登录，将会话持久化保存在 `/data`，并从 Epic Games Store 领取宣传免费游戏

---

> [!CAUTION]
> **仅限边缘通道的开发中附加组件 (In-Development Add-on)**
>
> 该附加组件目前正在积极开发中，且未包含在稳定库的通道中。
> 虽然 Home Assistant 附加组件包装器本身可能功能正常，但其上游软件要么处于早期开发阶段，要么托管在私有仓库中。
>
> ### 📦 如何通过边缘通道安装
>
> 1. 点击以添加边缘仓库：
>    [![Add Edge Repository](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2FFaserF%2Fhassio-addons%23edge)
> 2. 或在 Home Assistant 中手动添加仓库 (**设置** → **附加组件** → **附加组件商店** → **⋮** → **仓库**)：
>
>    ```text
>    https://github.com/FaserF/hassio-addons#edge
>    ```
>
> 3. 刷新附加组件商店 (⋮ → **检查更新)**，在 **FaserF 的 Home Assistant Apps (Edge)** 下找到此附加组件，并点击 **安装**。

---

## 📖 简介

## 🌟 功能特性

- 🔄 **持久化会话存储**：将身份验证会话 Cookie 和令牌存储在 `/data/session.json` 中。您只需登录一次，即使附加组件重启或计划运行，也能保持身份认证。
- ⏰ **自动化领取调度器**：根据您的 cron 调度计划自动领取免费游戏（默认在 new free games go live 时为 **周四 17:10 (Europe/Berlin)**）。
- 🌐 **Ingress Web 仪表板**：在 Home Assistant 侧边栏内直接提供交互式 UI（端口 3000）。查看当前领取状态、手动触发领取或检查商店商品。
- 🔌 **REST API 桥接**：为 [Home Assistant Epic Games Integration (`ha-epicgames`)](https://github.com/FaserF/ha-epicgames) 提供原生 REST 端点 (`/api/status`, `/api/claim`, `/api/games`, `/api/auth`)。
- 🛡️ **容器隔离**：在其自己的 Docker 环境中安全运行，不会污染 Home Assistant Core。

## 📦 安装

1. 将此仓库添加到您的 Home Assistant 附加组件商店：

   ```text
   https://github.com/FaserF/hassio-addons
   ```

2. 搜索 **Epic Games Freebies Claimer** 并点击 **安装**。
3. 如有需要，请在附加组件配置标签中配置选项。
4. 启动附加组件，并通过侧边栏入口链接打开 **Web UI**。

## 🔗 架构与 Home Assistant 集成

该附加组件旨在独立运行，或与 **[ha-epicgames 自定义集成](https://github.com/FaserF/ha-epicgames)** 协同工作。

| 功能                                |   仅附加组件    | 独立集成  | 集成 + 附加组件 (推荐) |
| :------------------------------------- | :--------------: | :---------------------: | :--------------------------------: |
| 免费游戏日历与传感器          | ❌ (仅 Web UI) |           ✅            |                 ✅                 |
| 后台自动领取               |        ✅        | ⚠️ (需要 HA 运行) |                 ✅                 |
| Ingress Web 仪表板与验证码求解器 |        ✅        |           ❌            |                 ✅                 |
| HA 中一键 "立即领取" 按钮     |        ❌        | ⚠️ (需要 API 令牌) |                 ✅                 |
| 持久化令牌存储 (`/data`)     |        ✅        |   ❌ (在 HA 存储中)    |                 ✅                 |

## 📜 许可证

MIT 许可证。开源且免费。

---

## ⚙️ 配置

通过 Home Assistant App 页面中的 **配置 (Configuration)** 标签配置应用程序。

### 选项

```yaml
auto_claim: true
cron_schedule: 10 17 * * 4
log_level: info
```

---

## 👨‍💻 致谢与许可证

该项目是开源的，并按 MIT 许可证提供。
由 **FaserF** 维护。

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
