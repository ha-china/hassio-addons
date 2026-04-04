# Home Assistant 插件：FileBrowser Quantum

我在业余时间维护这个以及其他 Home Assistant 插件：跟进上游变更、Home Assistant 变更以及在实际硬件上进行测试需要花费大量时间（以及一些金钱）。我经常使用我超过 110 个插件中的 5-10 个，因此我会安装测试机器（并购买一些我自身不使用的测试服务，例如 VPN）来排查问题和改进插件。

如果这个插件为您节省了时间或使您的设置变得更加容易，我将非常感激您的支持！

[![买我一杯咖啡][捐赠徽章]](https://www.buymeacoffee.com/alexbelgium)
[![通过 PayPal 捐赠][paypal徽章]](https://www.paypal.com/donate/?hosted_button_id=DZFULJZTP3UQA)

## 插件信息

![版本](https://img.shields.io/badge/dynamic/yaml?label=版本&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Ffilebrowser_quantum%2Fconfig.yaml)
![入口](https://img.shields.io/badge/dynamic/yaml?label=入口&query=%24.ingress&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Ffilebrowser_quantum%2Fconfig.yaml)
![架构](https://img.shields.io/badge/dynamic/yaml?color=success&label=架构&query=%24.arch&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Ffilebrowser_quantum%2Fconfig.yaml)

[![Codacy 徽章](https://app.codacy.com/project/badge/Grade/9c6cf10bdbba45ecb202d7f579b5be0e)](https://www.codacy.com/gh/alexbelgium/hassio-addons/dashboard?utm_source=github.com&utm_medium=referral&utm_content=alexbelgium/hassio-addons&utm_campaign=Badge_Grade)
[![GitHub Super-Linter](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/weekly-supelinter.yaml?label=代码检查)](https://github.com/alexbelgium/hassio-addons/actions/workflows/weekly-supelinter.yaml)
[![Builder](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/onpush_builder.yaml?label=构建器)](https://github.com/alexbelgium/hassio-addons/actions/workflows/onpush_builder.yaml)

[捐赠徽章]: https://img.shields.io/badge/Buy%20me%20a%20coffee-%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white
[paypal徽章]: https://img.shields.io/badge/Donate%20via%20PayPal-0070BA?logo=paypal&style=flat&logoColor=white

_感谢所有给我的仓库点星的人！要星标它，请点击下面的图片，然后它就会出现在右上角。谢谢！_

[![Stargazers 仓库列表 for @alexbelgium/hassio-addons](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/.github/stars2.svg)](https://github.com/alexbelgium/hassio-addons/stargazers)

![下载趋势](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/filebrowser_quantum/stats.png)

## 关于

FileBrowser Quantum 是一个现代、响应式、多源文件管理器，具有实时索引、高级共享和扩展的认证选项（密码、代理、OIDC 或无认证）。它是原始 Filebrowser 项目的重大分支，旨在实现更快的浏览和更丰富的预览。

此插件基于 [FileBrowser Quantum 项目](https://hub.docker.com/r/gtstef/filebrowser) 的 [docker 镜像](https://hub.docker.com/r/gtstef/filebrowser)。

## 安装

此插件的安装非常简单，与安装任何其他 Home Assistant 插件没有区别。

1. 将我的插件仓库添加到您的 Home Assistant 实例中（在管理器插件存储的右上角，或点击下面的按钮如果您已经配置了我的 HA）
   [![打开您的 Home Assistant 实例并显示带有特定仓库 URL 预填充的添加插件仓库对话框](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2Falexbelgium%2Fhassio-addons)
1. 安装此插件。
1. 点击“保存”按钮以存储您的配置。
1. 启动插件。
1. 检查插件的日志以查看是否一切顺利。
1. 通过侧边栏或 `<your-ip>:8071` 访问 Web UI。

## 配置

Web UI 可在 `<your-ip>:8071` 或通过使用入口时通过 Home Assistant 侧边栏访问。

**默认凭据：**
- 用户名：`admin`
- 密码：`admin`

**重要提示：** 首次登录后立即更改默认凭据以提高安全性。

### 选项

| 选项 | 类型 | 默认值 | 描述 |
|--------|------|---------|-------------|
| `auth_method` | 列表 | `password` | 认证方法 (`password`, `noauth`, `proxy`, `oidc`) |
| `localdisks` | 字符串 | _(可选)_ | 要挂载的本地驱动器（例如，`sda1,sdb1,MYNAS`） |
| `networkdisks` | 字符串 | _(可选)_ | 要挂载的 SMB 共享（例如，`//SERVER/SHARE`） |
| `cifsusername` | 字符串 | _(可选)_ | 网络共享的 SMB 用户名 |
| `cifspassword` | 字符串 | _(可选)_ | 网络共享的 SMB 密码 |
| `cifsdomain` | 字符串 | _(可选)_ | 网络共享的 SMB 域 |

## 设置

1. 启动插件并等待其初始化。
1. 通过 Home Assistant 侧边栏或 `<your-ip>:8071` 访问 Web 界面。
1. 使用默认凭据登录：
   - 用户名：`admin`
   - 密码：`admin`
1. **重要提示：** 立即通过点击“设置”>“用户管理”更改默认密码。
1. 通过插件选项或 Web 界面配置额外的源和认证设置。

### 挂载驱动器

此插件支持挂载本地驱动器和远程 SMB 共享：

- **本地驱动器**：请参阅 [插件中挂载本地驱动器](https://github.com/alexbelgium/hassio-addons/wiki/Mounting-Local-Drives-in-Addons)
- **远程共享**：请参阅 [插件中挂载远程共享](https://github.com/alexbelgium/hassio-addons/wiki/Mounting-remote-shares-in-Addons)

### 自定义脚本和环境变量

此插件通过 `addon_config` 映射支持自定义脚本和环境变量：

- **自定义脚本**：请参阅 [插件中运行自定义脚本](https://github.com/alexbelgium/hassio-addons/wiki/Running-custom-scripts-in-Addons)
- **env_vars 选项**：使用插件的 `env_vars` 选项传递额外的环境变量（大写或小写名称）。请参阅 https://github.com/alexbelgium/hassio-addons/wiki/Add-Environment-variables-to-your-Addon-2 获取详细信息。

## 支持帮助

在 GitHub 上创建一个问题，或在 [Home Assistant 社区线程](https://community.home-assistant.io/t/home-assistant-addon-filebrowser/282108/3) 上提问。

[仓库](https://github.com/alexbelgium/hassio-addons)
[aarch64-盾牌]: https://img.shields.io/badge/aarch64-yes-green.svg
[amd64-盾牌]: https://img.shields.io/badge/amd64-yes-green.svg
[armv7-盾牌]: https://img.shields.io/badge/armv7-yes-green.svg
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
