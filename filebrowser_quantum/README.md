# Home Assistant 插件：FileBrowser Quantum

我在业余时间维护此及其他 Home Assistant 插件：跟踪上游更改、HA 更改以及在实际硬件上测试需要大量时间（以及一些金钱）。每周我大约花费 5-10 个小时在这个工作上。如果此插件能为您节省时间或让您的设置更简单，我将非常感谢您的支持！

[![Buy me a coffee][donation-badge]](https://www.buymeacoffee.com/alexbelgium)
[![Donate via PayPal][paypal-badge]](https://www.paypal.com/donate/?hosted_button_id=DZFULJZTP3UQA)

## 插件信息

![版本](https://img.shields.io/badge/dynamic/yaml?label=版本&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Ffilebrowser_quantum%2Fconfig.yaml)
![Ingress](https://img.shields.io/badge/dynamic/yaml?label=Ingress&query=%24.ingress&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Ffilebrowser_quantum%2Fconfig.yaml)
![架构](https://img.shields.io/badge/dynamic/yaml?color=success&label=架构&query=%24.arch&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Ffilebrowser_quantum%2Fconfig.yaml)

[![Codacy Badge](https://app.codacy.com/project/badge/Grade/9c6cf10bdbba45ecb202d7f579b5be0e)](https://www.codacy.com/gh/alexbelgium/hassio-addons/dashboard?utm_source=github.com&utm_medium=referral&utm_content=alexbelgium/hassio-addons&utm_campaign=Badge_Grade)
[![GitHub Super-Linter](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/weekly-supelinter.yaml?label=Lint%20code%20base)](https://github.com/alexbelgium/hassio-addons/actions/workflows/weekly-supelinter.yaml)
[![Builder](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/onpush_builder.yaml?label=Builder)](https://github.com/alexbelgium/hassio-addons/actions/workflows/onpush_builder.yaml)

[donation-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee-%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white
[paypal-badge]: https://img.shields.io/badge/Donate%20via%20PayPal-0070BA?logo=paypal&style=flat&logoColor=white

_感谢大家给我的仓库 stars！请点一下下面的图片来 star 它，它就会出现在右上角。谢谢！_

[![Star 数量的仓库名单 for @alexbelgium/hassio-addons](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/.github/stars2.svg)](https://github.com/alexbelgium/hassio-addons/stargazers)

![download 趋势](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/filebrowser_quantum/stats.png)

## 关于

FileBrowser Quantum 是一个现代、响应式、多源的文件管理器，具备实时索引、高级共享功能以及扩展的认证选项（密码、代理、OIDC 或无认证）。它是原始 FileBrowser 项目的一个维护分叉版。

此插件基于 [docker 镜像](https://hub.docker.com/r/gtstef/filebrowser)，该镜像来自 FileBrowser Quantum 项目。

## 安装

此插件的安装非常简单，与其他任何 Home Assistant 插件的安装相比并无不同。

1. 将我添加的插件仓库添加到您的 Home Assistant 实例中（在 supervisor 插件商店右上角，或者如果您已配置了我的 HA，请点击下方的按钮）
   [![打开您的 Home Assistant 实例并显示带有预填充具体仓库 URL 的添加插件仓库对话框。](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2Falexbelgium%2Fhassio-addons)
1. 安装此插件。
1. 点击 `Save` 按钮以存储您的配置。
1. 启动插件。
1. 检查插件的日志以查看是否一切顺利。
1. 通过侧边栏或访问 `<your-ip>:8071` 访问 Web 界面。

## 配置

Web 界面可通过 `<your-ip>:8071` 访问，或者在使用 Ingress 时通过 Home Assistant 侧边栏访问。直接访问会重定向到插件配置的基路径，因此地址栏显示的 URL 比您输入的要长。

**默认凭据**（仅用于 `auth_method: password`）：
- 用户名：`admin`
- 密码：旧版本中为 `admin`。最近的上游版本在新鲜安装时会生成一个随机初始密码，并仅在插件日志中打印一次，所以请先检查日志。

**重要：** 首次登录后，请立即更改默认凭据以保障安全。

### 选项

| 选项 | 类型 | 默认值 | 描述 |
|------|------|--------|------|
| `auth_method` | 列表 | `noauth` | 认证方法 (`password`, `noauth`, `proxy`, `oidc`) |
| `default_user_scope` | 字符串 | `/` | 用作 FileBrowser 源和所有用户默认范围的根文件系统路径。必须是现有的绝对目录路径（例如 `/share`, `/media`）。 |
| `localdisks` | 字符串 | _(可选)_ | 要挂载的本地驱动器（例如，`sda1,sdb1,MYNAS`）。在驱动器后添加文件夹以仅挂载该文件夹，例如 `MYNAS/public` 仅挂载该文件夹，路径为 `/mnt/MYNAS/public`。需要 2026-09-19 之后发布的插件版本。 |
| `networkdisks` | 字符串 | _(可选)_ | 要挂载的 SMB 共享（例如，`//SERVER/SHARE`） |
| `cifsusername` | 字符串 | _(可选)_ | 网络共享的 SMB 用户名 |
| `cifspassword` | 字符串 | _(可选)_ | 网络共享的 SMB 密码 |
| `cifsdomain` | 字符串 | _(可选)_ | 网络共享的 SMB 域 |

## 安全

默认情况下，FileBrowser Quantum (`auth_method: noauth`) 运行时无认证，且其直接端口（8071）已发布。网络中任何能访问该端口的人都可以读取、修改和删除映射到插件的每个文件夹，包括您的 Home Assistant 配置和备份。插件在尚存此情况时会在启动时发出警告。

要确保安全，请将 `auth_method` 设置为 `password`，或者在插件的网络设置中禁用端口并使用 Ingress。

## 设置

1. 启动插件并等待其初始化。
1. 通过 Home Assistant 侧边栏或访问 `<your-ip>:8071` 访问 Web 界面。
1. 使用默认的 `auth_method: noauth` 时无需登录（见上方的“安全”部分）。如果需要登录，请将 `auth_method` 设置为 `password`，重启，并如上所述的默认凭据（`admin` 或最近版本中在插件日志中打印一次生成的密码）以 `admin` 身份登录。
1. **重要：** 登录后请立即通过点击“设置” > “用户管理”更改默认密码。
1. 通过插件选项或 Web 界面配置额外的源和认证设置。

### 挂载驱动器

此插件支持挂载本地驱动器和远程 SMB 共享：

- **本地驱动器**：见 [在插件中挂载本地驱动器](https://github.com/alexbelgium/hassio-addons/wiki/Mounting-Local-Drives-in-Addons)
- **远程共享**：见 [在插件中挂载远程共享](https://github.com/alexbelgium/hassio-addons/wiki/Mounting-remote-shares-in-Addons)

### 自定义脚本和环境变量

此插件通过 `app_config` 映射支持自定义脚本和环境变量：

- **自定义脚本**：见 [在插件中运行自定义脚本](https://github.com/alexbelgium/hassio-addons/wiki/Running-custom-scripts-in-Addons)
- **env_vars 选项**：使用插件的 `env_vars` 选项传递额外环境变量（大小写名称均可）。见 https://github.com/alexbelgium/hassio-addons/wiki/Add-Environment-variables-to-add-ons

## 支持

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

<img src="https://raw.gitcode.com/ha-china/ha-apps/raw/main/WeChat_QRCode.png" width="50%" /> 📲

## ☕ 赞助支持

如果您觉得我花费大量时间维护这个库对您有帮助，欢迎请我喝杯奶茶，您的支持将是我持续改进的动力！

<div style="display: flex; justify-content: space-between;">
  <img src="https://raw.gitcode.com/ha-china/ha-apps/raw/main/1_readme/Ali_Pay.jpg" height="350px" />
  <img src="https://raw.gitcode.com/ha-china/ha-apps/raw/main/1_readme/WeChat_Pay.jpg" height="350px" />
</div> 💖

感谢您的支持与鼓励！
