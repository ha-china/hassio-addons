# Home assistant add-on: FileBrowser Quantum

我利用业余时间维护这个 Home Assistant add-on 以及其他的 add-on：跟进上游的变化、Home Assistant 的变化，并在真实硬件上测试，这需要大量时间（和一些金钱）。我大约使用我 110 多个 add-on 中的 5-10 个，所以我会安装一些我自己不使用的测试机器（和一些测试服务，如 VPN）来调试和改进这些 add-on。

如果这个 add-on 为您节省了时间或简化了您的设置，我将非常感谢您的支持！

[![Buy me a coffee][donation-badge]](https://www.buymeacoffee.com/alexbelgium)
[![Donate via PayPal][paypal-badge]](https://www.paypal.com/donate/?hosted_button_id=DZFULJZTP3UQA)

## Addon informations

![Version](https://img.shields.io/badge/dynamic/yaml?label=版本&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Ffilebrowser_quantum%2Fconfig.yaml)
![Ingress](https://img.shields.io/badge/dynamic/yaml?label=Ingress&query=%24.ingress&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Ffilebrowser_quantum%2Fconfig.yaml)
![Arch](https://img.shields.io/badge/dynamic/yaml?color=success&label=架构&query=%24.arch&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Ffilebrowser_quantum%2Fconfig.yaml)

[![Codacy Badge](https://app.codacy.com/project/badge/Grade/9c6cf10bdbba45ecb202d7f579b5be0e)](https://www.codacy.com/gh/alexbelgium/hassio-addons/dashboard?utm_source=github.com&utm_medium=referral&utm_content=alexbelgium/hassio-addons&utm_campaign=Badge_Grade)
[![GitHub Super-Linter](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/weekly-supelinter.yaml?label=Lint%20code%20base)](https://github.com/alexbelgium/hassio-addons/actions/workflows/weekly-supelinter.yaml)
[![Builder](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/onpush_builder.yaml?label=Builder)](https://github.com/alexbelgium/hassio-addons/actions/workflows/onpush_builder.yaml)

[donation-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee-%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white
[paypal-badge]: https://img.shields.io/badge/Donate%20via%20PayPal-0070BA?logo=paypal&style=flat&logoColor=white

_感谢所有给我仓库加星标的人！点击下面的图片给它加星标，它就会出现在右上角。谢谢！_

[![Stargazers repo roster for @alexbelgium/hassio-addons](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/.github/stars2.svg)](https://github.com/alexbelgium/hassio-addons/stargazers)

![downloads evolution](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/filebrowser_quantum/stats.png)

## About

FileBrowser Quantum 是一个现代、响应式、多源文件管理器，具有实时索引、高级共享和扩展的认证选项（密码、代理、OIDC 或无认证）。它是原始 Filebrowser 项目的重大分支，设计用于更快的浏览和更丰富的预览。

这个 add-on 基于 FileBrowser Quantum 项目的 [docker 镜像](https://hub.docker.com/r/gtstef/filebrowser)。

## Installation

这个 add-on 的安装非常简单，与安装任何其他 Home Assistant add-on 没有区别。

1. 将我的 Home Assistant add-on 仓库 [repository] 添加到您的 Home Assistant 实例中。
1. 安装这个 add-on。
1. 点击 `保存` 按钮来保存您的配置。
1. 启动 add-on。
1. 检查 add-on 的日志，看看一切是否正常。
1. 通过侧边栏或在 `<your-ip>:8071` 访问 Web UI。

## Configuration

Web UI 可以在 `<your-ip>:8071` 或通过使用 Ingress 的 Home Assistant 侧边栏找到。

**默认凭证：**
- 用户名：`admin`
- 密码：`admin`

**重要：** 首次登录后立即更改默认凭证以确保安全。

### Options

| Option | 类型 | 默认值 | 描述 |
|--------|------|---------|-------------|
| `auth_method` | 列表 | `password` | 认证方法 (`password`, `noauth`, `proxy`, `oidc`) |
| `localdisks` | 字符串 | _(可选)_ | 要挂载的本地驱动器 (例如，`sda1,sdb1,MYNAS`) |
| `networkdisks` | 字符串 | _(可选)_ | 要挂载的 SMB 共享 (例如，`//SERVER/SHARE`) |
| `cifsusername` | 字符串 | _(可选)_ | SMB 共享的 SMB 用户名 |
| `cifspassword` | 字符串 | _(可选)_ | SMB 共享的 SMB 密码 |
| `cifsdomain` | 字符串 | _(可选)_ | SMB 共享的 SMB 域 |

## Setup

1. 启动 add-on 并等待其初始化。
1. 通过 Home Assistant 侧边栏或在 `<your-ip>:8071` 访问 Web 界面。
1. 使用默认凭证登录：
   - 用户名：`admin`
   - 密码：`admin`
1. **重要：** 点击 "设置" > "用户管理" 立即更改默认密码。
1. 通过 add-on 选项或 Web 界面配置额外的源和认证设置。

### Mounting Drives

这个 add-on 支持挂载本地驱动器和远程 SMB 共享：

- **本地驱动器**：参见 [在 Add-on 中挂载本地驱动器](https://github.com/alexbelgium/hassio-addons/wiki/Mounting-Local-Drives-in-Addons)
- **远程共享**：参见 [在 Add-on 中挂载远程共享](https://github.com/alexbelgium/hassio-addons/wiki/Mounting-remote-shares-in-Addons)

### Custom Scripts and Environment Variables

这个 add-on 支持通过 `addon_config` 映射进行自定义脚本和环境变量：

- **自定义脚本**：参见 [在 Add-on 中运行自定义脚本](https://github.com/alexbelgium/hassio-addons/wiki/Running-custom-scripts-in-Addons)
- **env_vars 选项**：使用 add-on 的 `env_vars` 选项传递额外的环境变量（大小写名称）。参见 https://github.com/alexbelgium/hassio-addons/wiki/Add-Environment-variables-to-your-Addon-2 获取详细信息。

## Support

在 GitHub 上创建问题，或在 [Home Assistant 社区线程](https://community.home-assistant.io/t/home-assistant-addon-filebrowser/282108/3) 上提问。

[repository]: https://github.com/alexbelgium/hassio-addons
[aarch64-shield]: https://img.shields.io/badge/aarch64-yes-green.svg
[amd64-shield]: https://img.shields.io/badge/amd64-yes-green.svg
[armv7-shield]: https://img.shields.io/badge/armv7-yes-green.svg
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
