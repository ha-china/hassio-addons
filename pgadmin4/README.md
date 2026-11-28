![Project Stage][project-stage-shield]
![Maintenance][maintenance-shield]
[![License][license-shield]](https://github.com/expaso/hassos-addon-pgadmin4/blob/main/LICENSE)

# Home Assistant Add-on: [pgAdmin 4](https://www.pgadmin.org/)

<a href="https://www.buymeacoffee.com/expaso" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/default-orange.png" alt="Buy Me A Coffee" height="41" width="174"></a>

## 简介

pgAdmin 是最受喜爱且功能最丰富的用于 PostgreSQL 的开源管理与开发平台。PostgreSQL 是目前世界上最高级的开源数据库。

该 Add-on 可用于控制您网络上的任意 PostgreSQL 数据库，包括 TimescaleDB Add-on 所在的数据库。该 TimescaleDB Add-on 也可以从相同的 addon-repository 中安装。

该 Add-on 支持 amd64 和 aarch64。当前的基础镜像已不再支持此前支持的 32 位 armv7 和 i386 架构。

已包含 PostgreSQL 12 至 18 版本的客户端工具。pgAdmin 9.19 支持 PostgreSQL 14 至 18 版本的服务器。

## 配置

示例 Add-on 配置：

```
{
    "ssl": true,
    "certfile": "fullchain.pem",
    "keyfile": "privkey.pem",
    "system_packages": [],
    "init_commands": [],
    "leave_front_door_open": false
}
```

### 选项：`ssl`

指示 Add-on UI 是否将通过 80 端口或 443 端口（使用提供的证书）提供服务。

### 选项：`certfile`

您在 `ssl` 文件夹中 SSL 证书的文件名。

### 选项：`certfile`

您在 `ssl` 文件夹中的私钥文件Filename。

### 选项：`system_packages`

可选的额外 Alpine 包，将在 Add-on 启动期间进行安装。
**警告**：安装大量包可能导致启动时间变长。

### 选项：`init_commands`

在 Add-on 启动期间运行的任何额外命令。

### 选项：`leave_front_door_open`

在不保护 Home Assistant 用户认证的情况下提供服务。

**警告！！**

设置此选项可能存在安全风险，应尽量避免。
如果您不知晓如何操作，请将其关闭。

## 支持

- 有问题？
  [在此打开问题][issues]

- 对于常规仓库问题或 Add-on 想法？[在此打开问题][repo-issues]

[issues]: https://github.com/expaso/hassos-addon-pgadmin4/issues
[repo-issues]: https://github.com/expaso/hassos-addons/issues



[project-stage-shield]: https://img.shields.io/badge/project%20stage-production%20ready-brightgreen.svg
[release-shield]: https://img.shields.io/badge/version-v5.0.0-blue.svg
[release]: https://github.com/expaso/hassos-addon-pgadmin4/tree/v5.0.0
[license-shield]: https://img.shields.io/github/license/expaso/hassos-addon-pgAdmin4.svg
[maintenance-shield]: https://img.shields.io/maintenance/yes/2024.svg

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
