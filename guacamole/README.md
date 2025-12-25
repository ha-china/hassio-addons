# Home assistant 添加组件：Guacamole


我在业余时间维护这个和其他 Home Assistant 添加组件：跟上上游的变化，HA 的变化，并在真实硬件上测试需要很多时间（和一些钱）。我大约使用我 >110 个添加组件中的 5-10 个，所以我会安装一些我不使用的测试机器（和购买一些测试服务，如 VPN）来调试和改进这些添加组件。

如果这个添加组件为你节省了时间或使你的设置更简单，我将非常感谢你的支持！

[![给我买咖啡][donation-badge]](https://www.buymeacoffee.com/alexbelgium)
[![通过 PayPal 捐赠][paypal-badge]](https://www.paypal.com/donate/?hosted_button_id=DZFULJZTP3UQA)

## 添加组件信息

![版本](https://img.shields.io/badge/dynamic/yaml?label=版本&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fguacamole%2Fconfig.yaml)
![入口](https://img.shields.io/badge/dynamic/yaml?label=入口&query=%24.ingress&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fguacamole%2Fconfig.yaml)
![架构](https://img.shields.io/badge/dynamic/yaml?color=success&label=架构&query=%24.arch&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fguacamole%2Fconfig.yaml)

[![Codacy 徽章](https://app.codacy.com/project/badge/Grade/9c6cf10bdbba45ecb202d7f579b5be0e)](https://www.codacy.com/gh/alexbelgium/hassio-addons/dashboard?utm_source=github.com&utm_medium=referral&utm_content=alexbelgium/hassio-addons&utm_campaign=Badge_Grade)
[![GitHub Super-Linter](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/weekly-supelinter.yaml?label=Lint%20code%20base)](https://github.com/alexbelgium/hassio-addons/actions/workflows/weekly-supelinter.yaml)
[![构建器](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/onpush_builder.yaml?label=构建器)](https://github.com/alexbelgium/hassio-addons/actions/workflows/onpush_builder.yaml)

[donation-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee-%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white
[paypal-badge]: https://img.shields.io/badge/Donate%20via%20PayPal-0070BA?logo=paypal&style=flat&logoColor=white

_感谢所有给我的仓库点赞的人！要点赞，请点击下面的图片，然后它会在右上角。谢谢！_

[![@alexbelgium/hassio-addons 的星标者仓库名册](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/.github/stars2.svg)](https://github.com/alexbelgium/hassio-addons/stargazers)

![下载演变](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/guacamole/stats.png)

## 关于

[Apache Guacamole](https://guacamole.apache.org/) 是一个无客户端的远程桌面网关，支持标准协议如 VNC、RDP 和 SSH。它提供了一个基于 Web 的界面，用于访问远程系统，而无需用户设备上安装任何客户端软件。Guacamole 作为代理，在基于 Web 的前端和实际的远程桌面协议之间进行转换。

这个添加组件结合了 Guacamole 服务器（guacd）和 Web 应用组件，并集成了 PostgreSQL 数据库，用于存储连接配置和用户管理。该解决方案提供了一个完整的远程桌面网关，可以通过 Web 浏览器从任何地方安全地访问计算机和服务器。

这个添加组件基于以下 Docker 镜像：https://github.com/abesnier/docker-guacamole

## 配置

Webui 可以在 `<your-ip>:8080` 或通过侧边栏使用入口找到。

默认用户名是 `guacadmin`，密码是 `guacadmin`。强烈建议在首次登录后立即更改此密码。

### 选项

| 选项 | 类型 | 默认 | 描述 |
|------|------|------|------|
| `EXTENSIONS` | str | `auth-totp` | 要启用的 Guacamole 扩展（例如，`auth-totp`，`history-recording-storage`） |
| `recording_search_path` | str | `/config/recordings` | 添加到 `guacamole.properties` 作为历史记录存储扩展使用的 `recording-search-path` 的目录 |
| `TZ` | str | | 时区（例如，`Europe/London`） |

### 示例配置

```yaml
EXTENSIONS: "auth-totp,history-recording-storage"
recording_search_path: "/config/recordings"
TZ: "Europe/London"
```

### 数据库设置

添加组件自动配置一个 PostgreSQL 数据库，用于存储 Guacamole 配置、用户和连接。数据库文件存储在 `/config/postgres` 中，并在首次启动时自动创建。

### 自定义脚本和环境变量

这个添加组件通过 `addon_config` 映射支持自定义脚本和环境变量：

- **自定义脚本**：请参阅 [在添加组件中运行自定义脚本](https://github.com/alexbelgium/hassio-addons/wiki/Running-custom-scripts-in-Addons)
- **env_vars 选项**：使用添加组件的 `env_vars` 选项传递额外的环境变量（大小写名称）。请参阅 https://github.com/alexbelgium/hassio-addons/wiki/Add-Environment-variables-to-your-Addon-2 了解详细信息。

## 安装

这个添加组件的安装非常简单，与安装任何其他 Hass.io 添加组件没有区别。

1. [将我的 Hass.io 添加组件仓库][repository] 添加到你的 Hass.io 实例。
1. 安装这个添加组件。
1. 点击 `保存` 按钮来存储你的配置。
1. 启动添加组件。
1. 检查添加组件的日志，看看是否一切正常。
1. 前往 Web 界面，使用默认凭据（`guacadmin`/`guacadmin`）登录。
1. 立即更改默认密码以确保安全。
1. 通过 Guacamole Web 界面配置你的远程连接。

## 设置

安装并首次登录后：

1. **更改默认密码**：进入设置 → 用户 → guacadmin 并更改密码
2. **创建连接**：使用 Web 界面添加 RDP、VNC 或 SSH 连接到你的远程系统
3. **配置扩展**：如果使用 TOTP 身份验证，请在用户设置中配置它
4. **用户管理**：创建其他用户并根据需要分配连接权限

## 支持

在 [GitHub][repository] 上创建问题

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
