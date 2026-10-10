# Home Assistant 附加组件：Unpackerr

我在空闲时间维护此及其他 Home Assistant 附加组件：跟上上游变更、HA 变更以及在实际硬件上进行测试需要大量时间（以及一些金钱）。我使用的附加组件大约有 5-10 个来自 110 多个，因此我会定期安装测试机（并购买一些我不亲自使用的测试服务，如 VPN）来排查问题和改进附加组件。

如果您使用此附加组件节省了时间或简化了您的设置，我將不胜感激您的支持！

[![Buy me a coffee][donation-badge]](https://www.buymeacoffee.com/alexbelgium)
[![Donate via PayPal][paypal-badge]](https://www.paypal.com/donate/?hosted_button_id=DZFULJZTP3UQA)

##附加组件信息

![版本](https://img.shields.io/badge/dynamic/yaml?label=Version&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Funpackerr%2Fconfig.yaml)
![Ingress](https://img.shields.io/badge/dynamic/yaml?label=Ingress&query=%24.ingress&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Funpackerr%2Fconfig.yaml)
![架构](https://img.shields.io/badge/dynamic/yaml?color=success&label=Arch&query=%24.arch&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Funpackerr%2Fconfig.yaml)

[![Codacy Badge](https://app.codacy.com/project/badge/Grade/9c6cf10bdbba45ecb202d7f579b5be0e)](https://www.codacy.com/gh/alexbelgium/hassio-addons/dashboard?utm_source=github.com&utm_medium=referral&utm_content=alexbelgium/hassio-addons&utm_campaign=Badge_Grade)
[![GitHub Super-Linter](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/weekly-supelinter.yaml?label=Lint code base)](https://github.com/alexbelgium/hassio-addons/actions/workflows/weekly-supelinter.yaml)
[![Builder](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/onpush_builder.yaml?label=Builder)](https://github.com/alexbelgium/hassio-addons/actions/workflows/onpush_builder.yaml)

[donation-badge]: https://img.shields.io/badge/Buy me a coffee-#d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white
[paypal-badge]: https://img.shields.io/badge/Donate via PayPal-0070BA?logo=paypal&style=flat&logoColor=white

_感谢所有为我仓库星标的人！让您的仓库位于右上角：点击下方图片进行星标。谢谢！_

[![Stargazers repo roster for @alexbelgium/hassio-addons](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/.github/stars2.svg)](https://github.com/alexbelgium/hassio-addons/stargazers)

![downloads evolution](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/unpackerr/stats.png)

## 关于

---
摘自作者 GitHub 页面：
[unpackerr](https://github.com/unpackerr/unpackerr) 运行在您下载主机上的守护进程。它检查已完成的下载，并将文件提取出来以便 Lidarr、Radarr、Readarr 或 Sonarr 导入。市面上有几种工具和选项可以在您的客户端下载文件后提取和删除文件。

此附加组件基于 Docker 镜像 https://hub.docker.com/r/hotio/unpackerr

## 安装

---
此附加组件的安装非常直接，与其他附加组件的安装没有区别。

1. 将我的附加组件仓库添加到您的 Home Assistant 实例中（在 Supervisor 附加组件商店右上角点击，或者如果您已配置了我的 HA，可以点击下方的按钮）
   [![打开您的 Home Assistant 实例并显示带有预填充特定仓库 URL 的添加附加组件仓库对话框。](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2Falexbelgium%2Fhassio-addons)
2. 安装此附加组件。
3. 点击 `保存` 按钮以保存配置。
4. 设置附加组件选项以符合您的偏好。
5. 启动附加组件。
6. 查看附加组件的日志以确认一切是否正常。
7. 打开 WebUI 并调整软件选项。

## 配置

此附加组件没有 Web 界面——它作为后台服务运行。
Unpackerr 监控已完成的下载并自动提取归档文件。

### 设置步骤

1. 配置您的下载客户端，将已完成的下载保存到提取路径
2. 设置监控路径，提取的文件应放置于此
3. 配置 *arr 应用程序，以便监控监控路径寻找导入
4. 启动附加组件，并在日志中监控活动

### 选项

| 选项 | 类型 | 默认值 | 描述 |
|--------|------|---------|-------------|
| `PGID` | int | `1000` | 文件权限的组 ID |
| `PUID` | int | `1000` | 文件权限的用户 ID |
| `TZ` | str | | 时区 (例如，`Europe/London`) |
| `extraction_path` | str | `/share/downloads_packed` | 下载的归档文件所在路径 |
| `watch_path` | str | `/share/downloads_unpacked` | 提取的文件放置的路径 |
| `localdisks` | str | | 本地驱动器挂载路径 (例如，`sda1,sdb1`) |
| `networkdisks` | str | | SMB 共享挂载路径 (例如，`//SERVER/SHARE`) |
| `cifsusername` | str | | SMB 网络共享用户的用户名 |
| `cifspassword` | str | | SMB 网络共享用户的密码 |
| `cifsdomain` | str | | SMB 网络共享的域 |

### 配置示例

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

配置您的应用程序以使用合适的路径：
- **下载客户端**: 将已完成的下载保存到 `extraction_path`
- **Sonarr/Radarr/Lidarr**: 监控 `watch_path` 寻找导入
- **文件结构**: 保持一致的目录结构

### 挂载驱动器

此附加组件支持挂载本地驱动器和网络 SMB 共享：

- **本地驱动器**: 参见 [在附加组件中挂载本地驱动器](https://github.com/alexbelgium/hassio-addons/wiki/Mounting-Local-Drives-in-Addons)
- **远程共享**: 参见 [在附加组件中挂载远程共享](https://github.com/alexbelgium/hassio-addons/wiki/Mounting-remote-shares-in-Addons)

### 自定义脚本和环境变量

此附加组件支持通过 `addon_config` 映射执行自定义脚本和注入环境变量：

- **自定义脚本**: 参见 [在附加组件中运行自定义脚本](https://github.com/alexbelgium/hassio-addons/wiki/Running-custom-scripts-in-Addons)
- **env_vars 选项**: 使用附加组件的 `env_vars` 选项传递额外的环境变量（大小写字母均可）。详见 https://github.com/alexbelgium/hassio-addons/wiki/Add-Environment-variables-to-your-Addon-2。

在 `/addon_configs/db21ed7f_unpackerr/unpackerr.conf` 中，您可以根据需要设置所有环境变量：https://github.com/davidnewhall/unpackerr

## 支持

在 GitHub 上创建问题

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
