# Home Assistant 扩展：Unpackerr

我在业余时间维护这个和其他 Home Assistant 扩展：跟进上游变更、HA 变更以及在真实硬件上进行测试需要花费很多时间（以及一些金钱）。我经常使用我 >110 个扩展中的 5-10 个，所以我安装了测试机器（并购买了某些我本人不使用的测试服务，如 vpn），以便进行故障排除和改进扩展。

如果这个扩展节省了您的时间或使您的设置变得更简单，我将非常感激您的支持！

[![给我买杯咖啡][捐赠徽章]](https://www.buymeacoffee.com/alexbelgium)
[![通过 PayPal 捐赠][paypal-徽章]](https://www.paypal.com/donate/?hosted_button_id=DZFULJZTP3UQA)

## 扩展信息

![版本](https://img.shields.io/badge/dynamic/yaml?label=Version&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Funpackerr%2Fconfig.yaml)
![入口](https://img.shields.io/badge/dynamic/yaml?label=Ingress&query=%24.ingress&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Funpackerr%2Fconfig.yaml)
![架构](https://img.shields.io/badge/dynamic/yaml?color=success&label=Arch&query=%24.arch&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Funpackerr%2Fconfig.yaml)

[![Codacy 徽章](https://app.codacy.com/project/badge/Grade/9c6cf10bdbba45ecb202d7f579b5be0e)](https://www.codacy.com/gh/alexbelgium/hassio-addons/dashboard?utm_source=github.com&utm_medium=referral&utm_content=alexbelgium/hassio-addons&utm_campaign=Badge_Grade)
[![GitHub Super-Linter](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/weekly-supelinter.yaml?label=Lint%20code%20base)](https://github.com/alexbelgium/hassio-addons/actions/workflows/weekly-supelinter.yaml)
[![Builder](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/onpush_builder.yaml?label=Builder)](https://github.com/alexbelgium/hassio-addons/actions/workflows/onpush_builder.yaml)

[捐赠徽章]: https://img.shields.io/badge/Buy%20me%20a%20coffee-%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white
[paypal-徽章]: https://img.shields.io/badge/Donate%20via%20PayPal-0070BA?logo=paypal&style=flat&logoColor=white

_感谢所有为我仓库加星的人！要加星，请点击下面的图片，然后它就会显示在右上角。谢谢！_

[![Stargazers repo roster for @alexbelgium/hassio-addons](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/.github/stars2.svg)](https://github.com/alexbelgium/hassio-addons/stargazers)

![下载演变](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/unpackerr/stats.png)

## 关于

---
作者在 GitHub 中的简介：
[unpackerr](https://github.com/unpackerr/unpackerr) 在您的下载主机上作为守护进程运行。它检查完成的下载并提取它们，以便 Lidarr、Radarr、Readarr、Sonarr 可以导入。在提取和删除文件方面，有一些选项可供选择。

此扩展基于 Docker 镜像 https://hub.docker.com/r/hotio/unpackerr

## 安装

---

此扩展的安装非常简单，与安装任何其他扩展没有区别。

1. 将我的扩展存储库添加到您的 Home Assistant 实例中（在监督器的扩展存储库中右上角，或点击下面的按钮如果您已配置我的 HA）
   [![打开您的 Home Assistant 实例并显示添加扩展存储库对话框，其中包含预填充的特定存储库 URL。](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2Falexbelgium%2Fhassio-addons)
1. 安装此扩展。
1. 点击“保存”按钮以存储您的配置。
1. 将扩展选项设置为您的偏好。
1. 启动扩展。
1. 检查扩展日志以查看一切是否顺利。
1. 打开 WebUI 并调整软件选项

## 配置

此扩展没有 Web 界面 - 它作为后台服务运行。
Unpackerr 监控完成的下载并自动提取存档。

### 设置步骤

1. 将您的下载客户端配置为将完成的下载保存到提取路径
2. 设置提取文件应放置的监视路径
3. 将 *arr 应用程序配置为监视监视路径以进行导入
4. 启动扩展并监视日志以查看活动

### 选项

| 选项 | 类型 | 默认 | 描述 |
|------|------|------|------|
| `PGID` | int | `1000` | 文件权限的组 ID |
| `PUID` | int | `1000` | 文件权限的用户 ID |
| `TZ` | str | | 时区（例如，`Europe/London`） |
| `extraction_path` | str | `/share/downloads_packed` | 下载存档所在的路径 |
| `watch_path` | str | `/share/downloads_unpacked` | 提取文件应放置的路径 |
| `localdisks` | str | | 要挂载的本地驱动器（例如，`sda1,sdb1`） |
| `networkdisks` | str | | 要挂载的 SMB 共享（例如，`//SERVER/SHARE`） |
| `cifsusername` | str | | 网络共享的 SMB 用户名 |
| `cifspassword` | str | | 网络共享的 SMB 密码 |
| `cifsdomain` | str | | 网络共享的 SMB 域 |

### 示例配置

```yaml
PGID: 1000
PUID: 1000
TZ: "Europe/London"
extraction_path: "/share/downloads/completed"
watch_path: "/share/downloads/extracted"
localdisks: "sda1,sdb1"
networkdisks: "//192.168.1.100/downloads"
cifsusername: "dluser"
cifspassword: "password123"
cifsdomain: "workgroup"
```

### 与 *arr 应用程序的集成

配置您的应用程序以使用适当的路径：
- **下载客户端**：将完成的下载保存到 `extraction_path`
- **Sonarr/Radarr/Lidarr**：监视 `watch_path` 以进行导入
- **文件结构**：保持一致的文件夹结构

### 挂载驱动器

此扩展支持挂载本地驱动器和远程 SMB 共享：

- **本地驱动器**：见 [在扩展中挂载本地驱动器](https://github.com/alexbelgium/hassio-addons/wiki/Mounting-Local-Drives-in-Addons)
- **远程共享**：见 [在扩展中挂载远程共享](https://github.com/alexbelgium/hassio-addons/wiki/Mounting-remote-shares-in-Addons)

### 自定义脚本和环境变量

此扩展支持自定义脚本执行和环境变量注入，通过 `addon_config` 映射：

- **自定义脚本**：见 [在扩展中运行自定义脚本](https://github.com/alexbelgium/hassio-addons/wiki/Running-custom-scripts-in-Addons)
- **env_vars 选项**：使用扩展的 `env_vars` 选项传递额外的环境变量（使用大写或小写名称）。见 https://github.com/alexbelgium/hassio-addons/wiki/Add-Environment-variables-to-your-Addon-2 获取详细信息。

在 /addon_configs/db21ed7f_unpackerr/unpackerr.conf 中，您可以设置所有变量，根据以下环境变量列表：https://github.com/davidnewhall/unpackerr

## 支持

在 GitHub 上创建一个问题

[仓库](https://github.com/alexbelgium/hassio-addons)
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
