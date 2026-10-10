# Home Assistant 附加组件：Postgres

我利用闲暇时间维护此及其他 Home Assistant 附加组件：跟进上游更改、HA 更改以及在实际硬件上测试耗费了大量时间（以及一些 money）。我使用约 5-10 个我超过 110 个附加组件中常用的添加，因此我安装测试机器（并购买一些我自己不使用的测试服务，如 vpn）来排查问题和改进附加组件

如果此附加组件为您节省时间或使您的设置更轻松，我将不胜感激，希望您能给予支持！

[![Buy me a coffee][donation-badge]](https://www.buymeacoffee.com/alexbelgium)
[![Donate via PayPal][paypal-badge]](https://www.paypal.com/donate/?hosted_button_id=DZFULJZTP3UQA)

## 附加组件信息

![版本](https://img.shields.io/badge/dynamic/yaml?label=版本&query=%24.版本&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fpostgres%2F配置.yaml)
![入口](https://img.shields.io/badge/dynamic/yaml?label=入口&query=%24。入口&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fpostgres%2F配置.yaml)
![架构](https://img.shields.io/badge/dynamic/yaml?color=success&label=架构&query=%24。架构&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fpostgres%2F配置.yaml)

[![Codacy Badge](https://app.codacy.com/project/badge/Grade/9c6cf10bdbba45ecb202d7f579b5be0e)](https://www.codacy.com/gh/alexbelgium/hassio-addons/dashboard?utm_source=github.com&utm_medium=referral&utm_content=alexbelgium/hassio-addons&utm_campaign=Badge_Grade)
[![GitHub Super-Linter](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/weekly-supelinter.yaml?label=代码库 Lint)](https://github.com/alexbelgium/hassio-addons/actions/workflows/weekly-supelinter.yaml)
[![构建者](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/onpush_builder.yaml?label=构建者)](https://github.com/alexbelgium/hassio-addons/actions/workflows/onpush_builder.yaml)

[donation-badge]: https://img.shields.io/badge/给我买杯咖啡-%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white
[paypal-badge]: https://img.shields.io/badge/通过 PayPal 捐赠-0070BA?logo=paypal&style=flat&logoColor=white

_感谢大家给我的仓库点点赞！点击下方的图片点赞，它就会在右上角。谢谢！_

[![Stargazers repo roster for @alexbelgium/hassio-addons](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/.github/stars2.svg)](https://github.com/alexbelgium/hassio-addons/stargazers)

![下载量进化](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/postgres/stats.png)

## 关于

PostgreSQL，通常简称为"Postgres"，是一个强调可扩展性和标准符合性的对象 relational 数据库管理系统 (ORDBMS)。作为数据库服务器，其主要功能是安全地存储数据，支持最佳实践，并根据其他软件应用程序的请求 later 检索数据，无论这些应用程序是运行在同一台计算机上还是在网络（包括互联网）上的另一台计算机上运行。它可以处理从小型单台机器应用程序到具有许多并发用户的大型面向互联网应用程序的工作负载。最新版本还提供了数据库自身的复制功能，以提高安全性和可扩展性。

此附加组件基于官方镜像：https://hub.docker.com/_/postgres

## 配置

Postgres 端口默认为 5432 并将暴露到主机网络。
默认用户：`postgres`，密码：由 `POSTGRES_PASSWORD` 设置

### 选项

| 选项 | 类型 | 默认值 | 描述 |
|------|------|-------|------|
| `POSTGRES_PASSWORD` | 密码 | `homeassistant` | postgres 用户的密码 |
| `POSTGRES_USER` | string | | 可选的自定义用户名 |
| `POSTGRES_DB` | string | | 可选的默认数据库名称 |
| `POSTGRES_INITDB_ARGS` | string | | initdb 的额外参数 |
| `POSTGRES_HOST_AUTH_METHOD` | string | | 主机认证方法 |

### 示例配置

```yaml
POSTGRES_PASSWORD: "your-secure-password"
POSTGRES_USER: "myuser"
POSTGRES_DB: "mydatabase"
POSTGRES_INITDB_ARGS: "--encoding=UTF8 --lc-collate=C --lc-ctype=C"
POSTGRES_HOST_AUTH_METHOD: "md5"
```

更多信息，请查看 [官方 PostgreSQL 镜像文档](https://hub.docker.com/_/postgres)。

### 自定义脚本和环境变量

此附加组件通过 `addon_config` 映射支持自定义脚本和环境变量：

- **自定义脚本**：见 [附加组件中运行自定义脚本](https://github.com/alexbelgium/hassio-addons/wiki/Running-custom-scripts-in-Addons)
- **env_vars 选项**：使用附加组件的 `env_vars` 选项传递额外的环境变量（大写字母或小写字母名称均可）。详见 https://github.com/alexbelgium/hassio-addons/wiki/Add-Environment-variables-to-your-Addon-2。

**配置文件**：默认情况下，`postgresql.conf` 存储于 `/config/postgresql.conf`，可被其他附加组件和 Home Assistant 访问。您可以使用文件编辑器附加组件进行修改。出于更好的安全性考虑，将 `CONFIG_LOCATION` 更改为 `/data/orig/postgresql.conf` 使其仅可供此附加组件访问。

## 安装

此附加组件的安装非常简单，与其他附加组件的安装相比没有任何不同。

1. 将我的附加组件仓库添加到您的 Home Assistant 实例中（在 supervisor 附加组件商店右上角，或如果您已配置我的 HA 则点击下方按钮）
   [![打开您的 Home Assistant 实例并显示带有特定仓库 URL 预填充的添加附加组件仓库对话框。](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2Falexbelgium%2Fhassio-addons)
2. 安装此附加组件。
3. 点击 `保存` 按钮以存储您的配置。
4. 将附加组件选项设置为您的偏好设置，至少需要 `POSTGRES_PASSWORD`。
5. 启动附加组件。
6. 检查附加组件的日志以查看一切是否顺利。
7. 使用任何 Postgres 客户端进行连接，例如连接到 `homeassistant.local:5432`

## 安全性

默认情况下，Postgres 将在您的主机系统的本地网络上可达。为了提高安全性，您可以禁用此行为并使 Postgres 仅在其他 Home Assistant 附加组件内可用。

1. 配置所有使用 Postgres 的连接附加组件通过内部 DNS 名称：`db21ed7f-postgres:5432` 进行连接。
2. 进入 **设置 → 附加组件 → Postgres 15 → 配置**，在 **网络** 下，通过清除文本字段删除端口 `5432`。
3. 点击 **保存** 并重新启动附加组件。
4. Postgres 现在仅可从其他附加组件访问，不再可从您的本地网络访问（例如，笔记本电脑、物联网设备等）。

## 支持

在 github 上创建问题

[仓库]: https://github.com/alexbelgium/hassio-addons

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
