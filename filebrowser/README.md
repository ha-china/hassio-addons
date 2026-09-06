# Home Assistant 插件：Filebrowser

我利用业余时间维护此及其他 Home Assistant 插件：跟进上游更改、Home Assistant 变更，以及在真实硬件上进行测试需要花费大量时间（以及一些金钱）。我日常使用的 5-10 个插件是我拥有的 110 多个插件中的，因此我安装了我不亲自使用但用于故障排除和改进插件的测试机器（并购买了一些测试服务，如 vpn）。

如果这个插件为您节省时间或让您的设置更容易，我会非常感谢您的支持！

[![Buy me a coffee][donation-badge]](https://www.buymeacoffee.com/alexbelgium)
[![Donate via PayPal][paypal-badge]](https://www.paypal.com/donate/?hosted_button_id=DZFULJZTP3UQA)

## 插件信息

![Version](https://img.shields.io/badge/dynamic/yaml?label=Version&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Ffilebrowser%2Fconfig.yaml)
![Ingress](https://img.shields.io/badge/dynamic/yaml?label=Ingress&query=%24.ingress&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Ffilebrowser%2Fconfig.yaml)
![Arch](https://img.shields.io/badge/dynamic/yaml?color=success&label=Arch&query=%24.arch&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Ffilebrowser%2Fconfig.yaml)

[![Codacy Badge](https://app.codacy.com/project/badge/Grade/9c6cf10bdbba45ecb202d7f579b5be0e)](https://www.codacy.com/gh/alexbelgium/hassio-addons/dashboard?utm_source=github.com&utm_medium=referral&utm_content=alexbelgium/hassio-addons&utm_campaign=Badge_Grade)
[![GitHub Super-Linter](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/weekly-supelinter.yaml?label=Lint%20code%20base)](https://github.com/alexbelgium/hassio-addons/actions/workflows/weekly-supelinter.yaml)
[![Builder](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/onpush_builder.yaml?label=Builder)](https://github.com/alexbelgium/hassio-addons/actions/workflows/onpush_builder.yaml)

[donation-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee-%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white
[paypal-badge]: https://img.shields.io/badge/Donate%20via%20PayPal-0070BA?logo=paypal&style=flat&logoColor=white

_感谢所有为我仓库点赞的人！要点赞请点击下面的图片，之后它就会显示在右上角。谢谢！_

[![Stargazers repo roster for @alexbelgium/hassio-addons](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/.github/stars2.svg)](https://github.com/alexbelgium/hassio-addons/stargazers)

![downloads evolution](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/filebrowser/stats.png)

## 介绍

基于 Web 的文件管理界面，为您提供一种安全的方式来浏览、上传、下载、编辑和管理您的 Home Assistant 系统上的文件。Filebrowser 提供了一个干净、现代的 Web 浏览器界面来处理您的文件，支持多种文件格式、预览功能以及全面的文件操作。

此插件基于 [官方 Filebrowser 项目的 docker 镜像](https://hub.docker.com/r/filebrowser/filebrowser)。

## 安装

此插件的安装过程非常简单，与其他 Home Assistant 插件的安装没有不同。

1. 将我的插件仓库添加到您的 Home Assistant 实例中（在 supervisor 插件商店右上角点击，或者如果您已配置了 HA，请点击下方按钮）
   [![打开您的 Home Assistant 实例并显示带有特定仓库 URL 预填充的添加插件仓库对话框。](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2Falexbelgium%2Fhassio-addons)
1. 安装此插件。
1. 点击 `保存` 按钮以存储您的配置。
1. 启动插件。
1. 检查插件日志以查看一切是否顺利。
1. 通过侧边栏或在 `<your-ip>:8071` 访问 Web UI。

## 配置

Web UI 可以位于 `<your-ip>:8071`，或者在使用 Ingress 时通过 Home Assistant 侧边栏访问。

**默认凭据：**
- 用户名：`admin`
- 密码：`admin`

**重要：** 首次登录后立即更改默认凭据以确保安全。

### 选项

| 选项 | 类型 | 默认值 | 描述 |
|--------|------|---------|-------------|
| `ssl` | bool | `false` | 启用 Web 界面的 HTTPS |
| `certfile` | str | `fullchain.pem` | SSL 证书文件（位于 `/ssl/`） |
| `keyfile` | str | `privkey.pem` | SSL 私钥文件（位于 `/ssl/`） |
| `NoAuth` | bool | `true` | 禁用身份验证（更改时会重置数据库） |
| `disable_thumbnails` | bool | `true` | 禁用缩略图生成以提升性能 |
| `base_folder` | str | _(可选)_ | 文件浏览器的根目录（默认为所有映射的文件夹） |
| `localdisks` | str | _(可选)_ | 若要挂载的地方驱动器（例如，`sda1,sdb1,MYNAS`） |
| `networkdisks` | str | _(可选)_ | 若要挂载的 SMB 共享（例如，`//SERVER/SHARE`） |
| `cifsusername` | str | _(可选)_ | 网络共享的 SMB 用户名 |
| `cifspassword` | str | _(可选)_ | 网络共享的 SMB 密码 |
| `cifsdomain` | str | _(可选)_ | 网络共享的 SMB域 |

### 示例配置

```yaml
ssl: true
certfile: "fullchain.pem"
keyfile: "privkey.pem"
NoAuth: false
disable_thumbnails: false
base_folder: "/share"
localdisks: "sda1,sdb1"
networkdisks: "//192.168.1.100/files,//nas.local/documents"
cifsusername: "fileuser"
cifspassword: "password123"
cifsdomain: "workgroup"
```

## 设置

1. 启动插件并等待初始化完成。
1. 通过 Home Assistant 侧边栏或在 `<your-ip>:8071` 访问 Web 界面。
1. 使用默认凭据登录：
   - 用户名：`admin`
   - 密码：`admin`
1. **重要：** 立即通过点击“设置”>“用户管理”更改默认密码。
1. 通过 Web 界面配置您偏好的设置。
1. 如果禁用了身份验证（`NoAuth: true`），则跳过登录屏幕。

### 挂载驱动器

此插件支持挂载本地驱动器和网络 SMB 共享：

- **本地驱动器**：请参阅 [插件中挂载本地驱动器](https://github.com/alexbelgium/hassio-addons/wiki/Mounting-Local-Drives-in-Addons)
- **远程共享**：请参阅 [插件中挂载远程共享](https://github.com/alexbelgium/hassio-addons/wiki/Mounting-remote-shares-in-Addons)

### 自定义脚本和环境变量

此插件通过`addon_config`映射支持自定义脚本和环境变量：

- **自定义脚本**：请参阅 [插件中运行自定义脚本](https://github.com/alexbelgium/hassio-addons/wiki/Running-custom-scripts-in-Addons)
- **env_vars 选项**：使用插件的`env_vars`选项传递额外的环境变量（大写或小写字名）。详见 https://github.com/alexbelgium/hassio-addons/wiki/Add-Environment-variables-to-your-Addon-2 了解详细信息。

## 支持

在 GitHub 创建问题，或加入 [Home Assistant 社区讨论](https://community.home-assistant.io/t/home-assistant-addon-filebrowser/282108/3)。

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
