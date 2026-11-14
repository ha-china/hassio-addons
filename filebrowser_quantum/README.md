# 家庭自动化加载项：FileBrowser Quantum

我在空闲时间维护此加载项及其他家庭自动化加载项：跟进上游更改、家庭自动化平台更新以及在实际硬件上进行测试需要大量时间（和一些金钱）。我每周为此花费约 5-10 小时。如果此加载项能为您节省时间或使您的设置更简便，我将非常感激您的支持！

[![Buy me a coffee][donation-badge]](https://www.buymeacoffee.com/alexbelgium)
[![Donate via PayPal][paypal-badge]](https://www.paypal.com/donate/?hosted_button_id=DZFULJZTP3UQA)

## 加载项信息

![版本](https://img.shields.io/badge/dynamic/yaml?label=版本&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Ffilebrowser_quantum%2Fconfig.yaml)
![入口网关](https://img.shields.io/badge/dynamic/yaml?label=入口网关&query=%24.ingress&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Ffilebrowser_quantum%2Fconfig.yaml)
![架构](https://img.shields.io/badge/dynamic/yaml?color=success&label=架构&query=%24.arch&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Ffilebrowser_quantum%2Fconfig.yaml)

[![Codacy Badge](https://app.codacy.com/project/badge/Grade/9c6cf10bdbba45ecb202d7f579b5be0e)](https://www.codacy.com/gh/alexbelgium/hassio-addons/dashboard?utm_source=github.com&utm_medium=referral&utm_content=alexbelgium/hassio-addons&utm_campaign=Badge_Grade)
[![GitHub Super-Linter](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/weekly-supelinter.yaml?label=代码库代码格式化)](https://github.com/alexbelgium/hassio-addons/actions/workflows/weekly-supelinter.yaml)
[![构建者](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/onpush_builder.yaml?label=构建者)](https://github.com/alexbelgium/hassio-addons/actions/workflows/onpush_builder.yaml)

[donation-badge]: https://img.shields.io/badge/买我杯咖啡-%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white
[paypal-badge]: https://img.shields.io/badge/通过 PayPal 捐赠-0070BA?logo=paypal&style=flat&logoColor=white

_感谢 everyone 星标我的仓库！想星标它，请点击下方的图片，它会出现在右上角。谢谢！_

[![Stargazers repo roster for @alexbelgium/hassio-addons](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/.github/stars2.svg)](https://github.com/alexbelgium/hassio-addons/stargazers)

![下载量演变](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/filebrowser_quantum/stats.png)

## 关于

FileBrowser Quantum 是一个现代、响应式、多源的文件管理器，具有实时索引、高级共享功能以及扩展的认证选项（密码、代理、OIDC 或无认证）。它是原始 FileBrowser 项目的维护分支。

此加载项基于 FileBrowser Quantum 项目的 [Docker 镜像](https://hub.docker.com/r/gtstef/filebrowser)。

## 安装

此加载项的安装非常简单，与安装任何其他家庭自动化加载项没有区别。

1. 将我的加载项仓库添加到您的家庭自动化实例中（在 Supervisor 中添加加载项商店的右上角，或者如果您已配置了我的家庭自动化平台，请点击下方按钮）
   [![打开您的家庭自动化实例并显示带有预填充特定仓库 URL 的添加加载项仓库对话框。](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2Falexbelgium%2Fhassio-addons)
1. 安装此加载项。
1. 点击 `Save` 按钮以存储您的配置。
1. 启动加载项。
1. 检查加载项日志以确认是否一切顺利。
1. 通过侧边栏或在 `<your-ip>:8071` 访问 Web 用户界面。

## 配置

Web 用户界面可以通过 `<your-ip>:8071` 访问，或者在使用入口网关时通过家庭自动化侧边栏访问。直接访问会重定向到加载项配置的基础路径，因此地址栏显示的 URL 会比您输入的要长。

**默认凭据：**
- 用户名：`admin`
- 密码：`admin`

**重要：** 首次登录后请立即更改默认凭据以确保安全。

### 选项

| 选项 | 类型 | 默认值 | 描述 |
|--------|------|---------|-------------|
| `auth_method` | list | `password` | 认证方法（`password`, `noauth`, `proxy`, `oidc`） |
| `default_user_scope` | str | `/` | 用作 FileBrowser 源和所有用户默认范围的根文件系统路径。必须是现有的绝对目录路径（例如 `/share`, `/media`）。 |
| `localdisks` | str | _(可选)_ | 要挂载的本地驱动器（例如，`sda1,sdb1,MYNAS`）。驱动器后添加文件夹可仅挂载该文件夹，例如 `MYNAS/public` 仅挂载该文件夹，位于 `/mnt/MYNAS/public`。文件夹挂载需要在 2026-09-19 之后发布的加载项版本中支持。 |
| `networkdisks` | str | _(可选)_ | 要挂载的 SMB 共享（例如，`//SERVER/SHARE`） |
| `cifsusername` | str | _(可选)_ | SMB 网络共享用户名 |
| `cifspassword` | str | _(可选)_ | SMB 网络共享密码 |
| `cifsdomain` | str | _(可选)_ | SMB 网络共享域 |

## 设置

1. 启动加载项并等待其初始化。
1. 通过家庭自动化侧边栏或在 `<your-ip>:8071` 访问 Web 界面。
1. 使用默认凭据登录：
   - 用户名：`admin`
   - 密码：`admin`
1. **重要：** 立即通过点击“设置”>“用户管理”更改默认密码。
1. 通过加载项选项或 Web 界面配置额外的来源和认证设置。

### 挂载驱动器

此加载项支持挂载本地驱动器和华为 SMB 共享：

- **本地驱动器**：参见 [在加载项中挂载本地驱动器](https://github.com/alexbelgium/hassio-addons/wiki/Mounting-Local-Drives-in-Addons)
- **远程共享**：参见 [在加载项中挂载远程共享](https://github.com/alexbelgium/hassio-addons/wiki/Mounting-remote-shares-in-Addons)

### 自定义脚本和环境变量

此加载项通过 `app_config` 映射支持自定义脚本和环境变量：

- **自定义脚本**：参见 [在加载项中运行自定义脚本](https://github.com/alexbelgium/hassio-addons/wiki/Running-custom-scripts-in-Addons)
- **env_vars 选项**：使用加载项 `env_vars` 选项传递额外的环境变量（大小写不敏感名称）。参见 https://github.com/alexbelgium/hassio-addons/wiki/Add-Environment-variables-to-add-ons

## 支持

在 GitHub 创建问题，或在 [家庭自动化社区讨论区](https://community.home-assistant.io/t/home-assistant-addon-filebrowser/282108/3) 提问。

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

<img src="https://raw.gitcode.com/ha-china/ha-apps/raw/main/WeChat_QRCode.png" width="50%" /> 📲

## ☕ 赞助支持

如果您觉得我花费大量时间维护这个库对您有帮助，欢迎请我喝杯奶茶，您的支持将是我持续改进的动力！

<div style="display: flex; justify-content: space-between;">
  <img src="https://raw.gitcode.com/ha-china/ha-apps/raw/main/1_readme/Ali_Pay.jpg" height="350px" />
  <img src="https://raw.gitcode.com/ha-china/ha-apps/raw/main/1_readme/WeChat_Pay.jpg" height="350px" />
</div> 💖

感谢您的支持与鼓励！
