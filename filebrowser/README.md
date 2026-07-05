# Home Assistant 扩展：文件浏览器

我在业余时间维护这个以及其他 Home Assistant 扩展：跟进上游更改、Home Assistant 更新和在实际硬件上进行测试都需要花费很多时间（以及一些金钱）。我经常使用 5-10 个我的 >110 个扩展，所以我安装了测试机器（并购买了一些我不使用的测试服务，如 VPN），用于调试和改进这些扩展。

如果这个扩展为您节省了时间或使您的设置更加简单，我将非常感激您的支持！

[![请给我买杯咖啡][donation-badge]](https://www.buymeacoffee.com/alexbelgium)
[![通过 PayPal 捐赠][paypal-badge]](https://www.paypal.com/donate/?hosted_button_id=DZFULJZTP3UQA)

## 扩展信息

![版本](https://img.shields.io/badge/dynamic/yaml?label=Version&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Ffilebrowser%2Fconfig.yaml)
![入口](https://img.shields.io/badge/dynamic/yaml?label=Ingress&query=%24.ingress&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Ffilebrowser%2Fconfig.yaml)
![架构](https://img.shields.io/badge/dynamic/yaml?color=success&label=Arch&query=%24.arch&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Ffilebrowser%2Fconfig.yaml)

[![Codacy 徽章](https://app.codacy.com/project/badge/Grade/9c6cf10bdbba45ecb202d7f579b5be0e)](https://www.codacy.com/gh/alexbelgium/hassio-addons/dashboard?utm_source=github.com&utm_medium=referral&utm_content=alexbelgium/hassio-addons&utm_campaign=Badge_Grade)
[![GitHub Super-Linter](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/weekly-supelinter.yaml?label=Lint%20code%20base)](https://github.com/alexbelgium/hassio-addons/actions/workflows/weekly-supelinter.yaml)
[![Builder](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/onpush_builder.yaml?label=Builder)](https://github.com/alexbelgium/hassio-addons/actions/workflows/onpush_builder.yaml)

[donation-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee-%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white
[paypal-badge]: https://img.shields.io/badge/Donate%20via%20PayPal-0070BA?logo=paypal&style=flat&logoColor=white

_感谢所有为我的仓库点星的人！要点星，请点击下面的图片，然后它将显示在右上角。谢谢！_

[![Stargazers repo roster for @alexbelgium/hassio-addons](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/.github/stars2.svg)](https://github.com/alexbelgium/hassio-addons/stargazers)

![下载趋势](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/filebrowser/stats.png)

## 关于

基于 Web 的文件管理界面，提供了一种安全的方式浏览、上传、下载、编辑和管理您的 Home Assistant 系统上的文件。Filebrowser 提供了一个干净、现代的界面，通过 Web 浏览器处理您的文件，支持多种文件格式、预览功能以及全面的文件操作。

此扩展基于官方 Filebrowser 项目的 [docker 镜像](https://hub.docker.com/r/filebrowser/filebrowser)。

## 安装

此扩展的安装非常简单，与安装任何其他 Home Assistant 扩展没有区别。

1. 将我的扩展仓库添加到您的 Home Assistant 实例中（在管理员控制台右上角的扩展存储中，或点击下面的按钮如果您已经配置了我的 HA）
   [![打开您的 Home Assistant 实例并显示添加扩展仓库对话框，其中预填了特定的仓库 URL。](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2Falexbelgium%2Fhassio-addons)
1. 安装此扩展。
1. 点击“保存”按钮以存储您的配置。
1. 启动扩展。
1. 检查扩展日志以查看一切是否顺利。
1. 通过侧边栏或 `<your-ip>:8071` 访问 Web 界面。

## 配置

Web 界面可以在 `<your-ip>:8071` 或使用入口时通过 Home Assistant 侧边栏访问。

**默认凭据：**
- 用户名：`admin`
- 密码：`admin`

**重要：** 首次登录后，请立即更改默认凭据以提高安全性。

### 选项

| 选项 | 类型 | 默认 | 描述 |
|--------|------|---------|-------------|
| `ssl` | bool | `false` | 启用 Web 界面的 HTTPS |
| `certfile` | str | `fullchain.pem` | SSL 证书文件（位于 `/ssl/`） |
| `keyfile` | str | `privkey.pem` | SSL 私钥文件（位于 `/ssl/`） |
| `NoAuth` | bool | `true` | 禁用身份验证（更改时重置数据库） |
| `disable_thumbnails` | bool | `true` | 禁用缩略图生成以提高性能 |
| `base_folder` | str | _(可选)_ | 文件浏览器的根文件夹（默认为所有映射的文件夹） |
| `localdisks` | str | _(可选)_ | 要挂载的本地驱动器（例如，`sda1,sdb1,MYNAS`） |
| `networkdisks` | str | _(可选)_ | 要挂载的 SMB 共享（例如，`//SERVER/SHARE`） |
| `cifsusername` | str | _(可选)_ | 网络共享的 SMB 用户名 |
| `cifspassword` | str | _(可选)_ | 网络共享的 SMB 密码 |
| `cifsdomain` | str | _(可选)_ | 网络共享的 SMB 域 |

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

1. 启动扩展并等待其初始化。
1. 通过 Home Assistant 侧边栏或 `<your-ip>:8071` 访问 Web 界面。
1. 使用默认凭据登录：
   - 用户名：`admin`
   - 密码：`admin`
1. **重要：** 通过点击“设置”>“用户管理”立即更改默认密码。
1. 通过 Web 界面配置您首选的设置。
1. 如果禁用了身份验证（`NoAuth: true`），将跳过登录屏幕。

### 挂载驱动器

此扩展支持挂载本地驱动器和远程 SMB 共享：

- **本地驱动器**：请参阅 [在扩展中挂载本地驱动器](https://github.com/alexbelgium/hassio-addons/wiki/Mounting-Local-Drives-in-Addons)
- **远程共享**：请参阅 [在扩展中挂载远程共享](https://github.com/alexbelgium/hassio-addons/wiki/Mounting-remote-shares-in-Addons)

### 自定义脚本和环境变量

此扩展通过 `addon_config` 映射支持自定义脚本和环境变量：

- **自定义脚本**：请参阅 [在扩展中运行自定义脚本](https://github.com/alexbelgium/hassio-addons/wiki/Running-custom-scripts-in-Addons)
- **env_vars 选项**：使用扩展 `env_vars` 选项传递额外的环境变量（使用大写或小写名称）。请参阅 https://github.com/alexbelgium/hassio-addons/wiki/Add-Environment-variables-to-your-Addon-2 获取详细信息。

## 支持

在 GitHub 上创建问题，或在 [Home Assistant 社区论坛](https://community.home-assistant.io/t/home-assistant-addon-filebrowser/282108/3) 上提问。

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
