# Home Assistant 扩展：Postgres

我在空闲时间维护此 Home Assistant 扩展及其他扩展：跟进上游变更、HA 变更以及实测实机需要大量时间（以及一些金钱）。我使用约 5-10 个我的 >110 个扩展，因为我经常安装测试机（甚至购买一些我自己不使用的测试服务如 vpn）来排查和改良这些扩展。

如果此扩展为您节省时间或使您的部署更简便，我将非常感激您的支持！

[![Buy me a coffee][donation-badge]](https://www.buymeacoffee.com/alexbelgium)
[![Donate via PayPal][paypal-badge]](https://www.paypal.com/donate/?hosted_button_id=DZFULJZTP3UQA)

## 扩展信息

![版本](https://img.shields.io/badge/dynamic/yaml?label=版本&query=%24.version&url=https %3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fpostgres%2Fconfig.yaml)
![Ingress](https://img.shields.io/badge/dynamic/yaml?label=Ingress&query=%24. inggress&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fpostgres%2Fconfig.yaml)
![架构](https://img.shields.io/badge/dynamic/yaml?color=success&label=架构&query=%24.arch&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fpostgres%2Fconfig.yaml)

[![Codacy Badge](https://app.codacy.com/project/badge/Grade/9c6cf10bdbba45ecb202d7f579b5be0e)](https://www.codacy.com/gh/alexbelgium/hassio-addons/dashboard?utm_source=github.com&utm_medium=referral&utm_content=alexbelgium/hassio-addons&utm_campaign=Badge_Grade)
[![GitHub Super-Linter](https://img.shields.io/github/actions/workflows/status/alexbelgium/hassio-addons/weekly-supelinter.yaml?label=检查 代码库)](https://github.com/alexbelgium/hassio-addons/actions/workflows/weekly-supelinter.yaml)
[![构建者](https://img.shields.io/github/actions/workflows/status/alexbelgium/hassio-addons/onpush_builder.yaml?label=构建))](https://github.com/alexbelgium/hassio-addons/actions/workflows/onpush_builder.yaml)

[donation-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee-%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white
[paypal-badge]: https://img.shields.io/badge/Donate%20via%20PayPal-0070BA?logo=paypal&style=flat&logoColor=white

_感谢所有星标了我的仓库的人！想星标它点击下方图片，它将显示在右上角。谢谢！_

[![Stargazers repo roster for @alexbelgium/hassio-addons](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/.github/stars2.svg)](https://github.com/alexbelgium/hassio-addons/stargazers)

![下载量演变](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/postgres/stats.png)

## 概述

PostgreSQL，通常简称为"Postgres"，是一个强调扩展性和标准兼容性的对象关系数据库管理系统 (ORDBMS)。作为数据库服务器，其主要功能是安全地存储数据（并遵循最佳实践），以便后续应其他软件应用程序的要求进行检索，这些应用程序可能运行在同一台计算机上，也可能运行在通过网络（包括互联网）的另一台计算机上。它可以处理的工作负载范围从小的单机应用程序到大型面向互联网且有大量并发用户的应用程序。最近版本还提供数据库本身的复制，以增强安全性和可扩展性。

此扩展基于官方镜像：https://hub.docker.com/_/postgres

## 配置

Postgres 端口默认是 5432，并暴露到宿主机网络。

默认用户：`postgres`
密码：`由 POSTGRES_PASSWORD 设置`

您可以配置以下选项：

```yaml
POSTGRES_PASSWORD
POSTGRES_USER
POSTGRES_DB
POSTGRES_INITDB_ARGS
POSTGRES_HOST_AUTH_METHOD
```

更多信息请查看 [基础镜像文档](https://hub.docker.com/_/postgres)。

默认情况下，`postgresql.conf` 存储在体积中，可供其他扩展和 Home Assistant 访问，因此您可以方便地通过例如文件编辑扩展来修改它。如果您更喜欢更好的安全性，请将 `CONFIG_LOCATION` 更改为例如 `/data/orig/postgresql.conf`，这样它将仅对该扩展可见，但您需要使用 [Hassio SSH](https://developers.home-assistant.io/docs/operating-system/debugging/) 来修改它。

### 自定义脚本和环境变量

此扩展通过 `addon_config` 映射支持自定义脚本和环境变量：

- **自定义脚本**：见 [在扩展中运行自定义脚本](https://github.com/alexbelgium/hassio-addons/wiki/Running-custom-scripts-in-Addons)
- **env_vars 选项**：使用附加的“环境变量”选项传递额外的环境变量（支持大写或小写名称名称）。详情请见 https://github.com/alexbelgium/hassio-addons/wiki/Add-Environment-variables-to-your-Addon-2。

## 安装

此扩展的安装非常简单，与安装任何其他扩展没有区别。

1. 将我的扩展仓库添加到 Home Assistant 实例中（在 supervisor 扩展商店顶部右侧，或如果您配置了我的 HA 则点击下方按钮）
   [![打开您的 Home Assistant 实例并显示带有特定仓库 URL 预填充的添加扩展仓库对话框](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2Falexbelgium%2Fhassio-addons)
2. 安装此扩展。
3. 点击 `保存` 按钮以存储您的配置。
4. 设置扩展选项为您偏好的设置，至少需要 `POSTGRES_PASSWORD`。
5. 启动扩展。
6. 检查扩展日志以查看一切是否正常。
7. 使用任何 Postgres 客户端进行连接，例如连接到 `homeassistant.local:5432`

从 Postgres 15 迁移：

- 停止 postgres 15 扩展
- 使用文件浏览扩展将从 `/addon_configs/xxx-postgres` 复制数据库文件夹到 `/addon_configs/xxx-postgres_latest`
- 启动 postgres 17 扩展。数据库升级应该会继续进行。如果未进行，您的数据在任何情况下都在 postgres 15 扩展中是安全的。

## 安全性

默认情况下，Postgres 将可在宿主机系统的本地网络中访问。为了提高安全性，您可以禁用此行为，并仅使 Postgres 可用于 Home Assistant 内的其他扩展。

1. 配置所有使用 Postgres 并通过内部 DNS 名称 `db21ed7f-postgres-latest:5432` 连接的扩展。
2. 进入 **设置 → 扩展 → Postgres 17 → 配置**，在 **网络** 部分下，通过清空文本字段移除端口 `5432`。
3. 点击 **保存** 并重启扩展。
4. 现在 Postgres 仅可从其他扩展访问，再也无法从本地网络（例如笔记本电脑、IoT 设备等）访问。

## 支持

在 github 创建问题

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
