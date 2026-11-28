# Home Assistant 附加组件：FileBrowser Quantum

我利用业余时间维护和更新这个 Home Assistant 附加组件及其他组件：跟进上游更改、适配 Home Assistant 的更新以及在真实硬件上进行测试需要耗费大量时间（以及一些金钱）。我每周花费约 5-10 个小时用于此事项。如果此附加组件为您节省了时间或简化了您的设置，我将不胜感激！

[![Buy me a coffee][donation-badge]](https://www.buymeacoffee.com/alexbelgium)
[![Donate via PayPal][paypal-badge]](https://www.paypal.com/donate/?hosted_button_id=DZFULJZTP3UQA)

## 附加组件信息

![Version](https://img.shields.io/badge/dynamic/yaml?label=Version&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Ffilebrowser_quantum%2Fconfig.yaml)
![Ingress](https://img.shields.io/badge/dynamic/yaml?label=Ingress&query=%24.ingress&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Ffilebrowser_quantum%2Fconfig.yaml)
![Arch](https://img.shields.io/badge/dynamic/yaml?color=success&label=Arch&query=%24.arch&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Ffilebrowser_quantum%2Fconfig.yaml)

[![Codacy Badge](https://app.codacy.com/project/badge/Grade/9c6cf10bdbba45ecb202d7f579b5be0e)](https://www.codacy.com/gh/alexbelgium/hassio-addons/dashboard?utm_source=github.com&utm_medium=referral&utm_content=alexbelgium/hassio-addons&utm_campaign=Badge_Grade)
[![GitHub Super-Linter](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/weekly-supelinter.yaml?label=Lint%20code%20base)](https://github.com/alexbelgium/hassio-addons/actions/workflows/weekly-supelinter.yaml)
[![Builder](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/onpush_builder.yaml?label=Builder)](https://github.com/alexbelgium/hassio-addons/actions/workflows/onpush_builder.yaml)

[donation-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee-%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white
[paypal-badge]: https://img.shields.io/badge/Donate%20via%20PayPal-0070BA?logo=paypal&style=flat&logoColor=white

_感谢大家为我仓库星标（Star）！点击下表所示的图像即可星标，它将显示在右上角。谢谢！_

[![Stargazers repo roster for @alexbelgium/hassio-addons](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/.github/stars2.svg)](https://github.com/alexbelgium/hassio-addons/stargazers)

![downloads evolution](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/filebrowser_quantum/stats.png)

## 关于

FileBrowser Quantum 是一个现代化的、响应式的多源文件管理器，具备实时索引、高级共享功能和扩展的认证选项（密码、代理、OIDC 或无认证）。它是原始 FileBrowser 项目的维护分支。

本附加组件基于 FileBrowser Quantum 项目的 [docker 镜像](https://hub.docker.com/r/gtstef/filebrowser)。

## 安装

本附加组件的安装非常直接，与安装任何其他 Home Assistant 附加组件的不同之处不多。

1. 将我的附加组件存储库添加到您的 Home Assistant 实例中（在 supervisor 添加附加组件商店右上角，或如果您已配置了我的 HA，则点击下方的按钮）
   [![打开您的 Home Assistant 实例并显示包含特定存储库 URL 预填充对话框的添加附加组件存储库对话框。](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2Falexbelgium%2Fhassio-addons)
1. 安装此附加组件。
1. 点击 `Save` 按钮以保存您的配置。
1. 启动附加组件。
1. 检查附加组件日志以确认一切正常。
1. 通过侧边栏或 `<your-ip>:8071` 访问 Web UI。

## 配置

Web UI 可访问 `<your-ip>:8071` 或通过 Ingress 在 Home Assistant 侧边栏中访问。如果直接访问，将重定向到附加组件配置的基路径，因此地址栏中将显示比您输入的更长的 URL。

**默认凭据**（仅用于 `auth_method: password`）：
- 用户名：`admin`
- 密码：旧版本中为 `admin`。最新的上游版本在新鲜安装时生成随机初始密码，并在附加组件日志中打印一次，因此请先检查日志。

**重要：** 首次登录后请立即更改默认凭据以确保安全。

### 选项

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `auth_method` | list | `noauth` | 认证方法 (`password`, `noauth`, `proxy`, `oidc`) |
| `default_user_scope` | str | `/` | 用作 FileBrowser 源和用户默认作用域的根文件系统路径。必须是现有的绝对目录路径（例如 `/share`, `/media`）。 |
| `localdisks` | str | _(optional)_ | 要挂载的本地驱动器（例如，`sda1,sdb1,MYNAS`）。在驱动器后方添加文件夹以仅挂载该文件夹，例如 `MYNAS/public` 仅挂载该文件夹，路径为 `/mnt/MYNAS/public`。文件夹挂载功能需要 2026-09-19 之后发布的附加组件版本。 |
| `networkdisks` | str | _(optional)_ | 要挂载的 SMB 共享（例如，`//SERVER/SHARE`） |
| `cifsusername` | str | _(optional)_ | 网络共享的 SMB 用户名 |
| `cifspassword` | str | _(optional)_ | 网络共享的 SMB 密码 |
| `cifsdomain` | str | _(optional)_ | 网络共享的 SMB 域 |

## 安全

默认情况下，FileBrowser Quantum (`auth_method: noauth`) 在不进行身份验证的情况下运行，并且其直接端口 (8071) 已发布。网络中任何能够到达该端口的人都可以读取、修改和删除附加组件中的所有所有映射文件夹，包括您的 Home Assistant 配置和备份。在这种情况发生时，附加组件在启动时记录警告。

为了加强安全，请将 `auth_method` 设置为 `password`，或在附加组件网络设置中禁用端口并使用 Ingress。

## 设置

1. 启动附加组件并等待其初始化。
1. 通过 Home Assistant 侧边栏或 `<your-ip>:8071` 访问 Web 界面。
1. 使用默认 `auth_method: noauth` 时没有登录（见上方的安全内容）。如需登录，请将 `auth_method` 设置为 `password`，重启，并使用上述默认凭据以 `admin` 身份登录（`admin`，或在最近版本中生成的密码，已在附加组件日志中打印一次）。
1. **重要：** 然后立即通过点击“设置” > “用户管理”更改默认密码。
1. 通过附加组件选项或 Web 界面配置额外的源和认证设置。

### 挂载驱动器

本附加组件支持挂载本地驱动器和网络远程 SMB 共享：

- **本地驱动器**：见 [附加组件中挂载本地驱动器](https://github.com/alexbelgium/hassio-addons/wiki/Mounting-Local-Drives-in-Addons)
- **远程共享**：见 [附加组件中挂载远程共享](https://github.com/alexbelgium/hassio-addons/wiki/Mounting-remote-shares-in-Addons)

### 自定义脚本和环境变量

本附加组件通过 `app_config` 映射支持自定义脚本和环境变量：

- **自定义脚本**：见 [附加组件中运行自定义脚本](https://github.com/alexbelgium/hassio-addons/wiki/Running-custom-scripts-in-Addons)
- **env_vars 选项**：使用附加组件的 `env_vars` 选项来传递额外的环境变量（名称为大写或小写）。见 https://github.com/alexbelgium/hassio-addons/wiki/Add-Environment-variables-to-add-ons

## 支持

在 GitHub 上创建问题，或在 [Home Assistant 社区线程](https://community.home-assistant.io/t/home-assistant-addon-filebrowser/282108/3) 中提问。

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
