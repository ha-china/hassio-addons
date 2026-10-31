![项目阶段][project-stage-shield]
![维护][maintenance-shield]
[![许可证][license-shield]](https://github.com/expaso/hassos-addon-pgadmin4/blob/main/LICENSE)

# Home Assistant 插件: [pgAdmin 4](https://www.pgadmin.org/)

<a href="https://www.buymeacoffee.com/expaso" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/default-orange.png" alt="请我喝杯咖啡" height="41" width="174"></a>

## 介绍

pgAdmin 是最受欢迎且功能最丰富的开源管理和开发平台，用于 PostgreSQL，这也是全球最先进的开源数据库。

此插件可用于控制您网络上的任何 PostgreSQL 数据库，包括通过 TimescaleDB 插件提供的数据库，后者也可以从同一插件库安装。

## 配置

示例插件配置：

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

### 选项: `ssl`

指示插件UI将从80端口还是443端口提供服务（使用提供的证书）。

### 选项: `certfile`

您在 `ssl` 文件夹中的 SSL 证书文件名。

### 选项: `keyfile`

您在 `ssl` 文件夹中的私钥文件名。

### 选项: `system_packages`

在插件启动期间将安装的可选额外的 Alpine 包。
**注意**：添加过多的包可能会导致启动时间较长。

### 选项: `init_commands`

在插件启动期间将运行的任何额外命令。

### 选项: `leave_front_door_open`

在没有 home-assistant 用户身份验证保护的情况下提供网站服务。

**警告！！**

设置此选项可能存在安全风险，应该尽量避免使用。
如果您不确定自己在做什么，请保持关闭状态。

## 支持

- 有问题？
  [在这里提出问题][issues]

- 有一般仓库问题或插件想法吗？ [在这里提出问题][repo-issues]

[issues]: https://github.com/expaso/hassos-addon-pgadmin4/issues
[repo-issues]: https://github.com/expaso/hassos-addons/issues

[project-stage-shield]: https://img.shields.io/badge/project%20stage-production%20ready-brightgreen.svg
[release-shield]: https://img.shields.io/badge/version-v4.0.0-blue.svg
[release]: https://github.com/expaso/hassos-addon-pgadmin4/tree/v4.0.0
[license-shield]: https://img.shields.io/github/license/expaso/hassos-addon-pgAdmin4.svg
[maintenance-shield]: https://img.shields.io/maintenance/yes/2024.svg