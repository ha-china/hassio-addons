# Home assistant add-on: Filebrowser


我利用业余时间维护这个Home Assistant插件以及其他插件：跟进上游变化、Home Assistant的变化，并在真实硬件上测试，这需要大量时间（并且需要一些钱）。我大约使用了我超过110个插件中的5到10个，因此我安装了测试机器（并购买了一些我自己不使用的测试服务，如VPN）来调试和改进插件。

如果这个插件为您节省了时间或简化了设置，我将非常感谢您的支持！

[![买我一杯咖啡][donation-badge]](https://www.buymeacoffee.com/alexbelgium)
[![通过PayPal捐赠][paypal-badge]](https://www.paypal.com/donate/?hosted_button_id=DZFULJZTP3UQA)

## 插件信息

![版本](https://img.shields.io/badge/dynamic/yaml?label=版本&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Ffilebrowser%2Fconfig.yaml)
![入口](https://img.shields.io/badge/dynamic/yaml?label=入口&query=%24.ingress&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Ffilebrowser%2Fconfig.yaml)
![架构](https://img.shields.io/badge/dynamic/yaml?color=success&label=架构&query=%24.arch&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Ffilebrowser%2Fconfig.yaml)

[![Codacy徽章](https://app.codacy.com/project/badge/Grade/9c6cf10bdbba45ecb202d7f579b5be0e)](https://www.codacy.com/gh/alexbelgium/hassio-addons/dashboard?utm_source=github.com&utm_medium=referral&utm_content=alexbelgium/hassio-addons&utm_campaign=Badge_Grade)
[![GitHub Super-Linter](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/weekly-supelinter.yaml?label=Lint%20code%20base)](https://github.com/alexbelgium/hassio-addons/actions/workflows/weekly-supelinter.yaml)
[![构建器](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/onpush_builder.yaml?label=构建器)](https://github.com/alexbelgium/hassio-addons/actions/workflows/onpush_builder.yaml)

[donation-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee-%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white
[paypal-badge]: https://img.shields.io/badge/Donate%20via%20PayPal-0070BA?logo=paypal&style=flat&logoColor=white

_感谢所有给我仓库点赞的人！要点赞，请点击下面的图片，然后它将在右上角。谢谢！_

[![Stargazers repo roster for @alexbelgium/hassio-addons](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/.github/stars2.svg)](https://github.com/alexbelgium/hassio-addons/stargazers)

![下载趋势](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/filebrowser/stats.png)

## 关于

基于Web的文件管理界面，提供了一种安全的方式，用于在您的Home Assistant系统上浏览、上传、下载、编辑和管理文件。Filebrowser提供了一个干净、现代的界面，通过Web浏览器处理文件，支持多种文件格式、预览功能和全面的文件操作。

这个插件基于官方Filebrowser项目的[docker镜像](https://hub.docker.com/r/filebrowser/filebrowser)。

## 安装

这个插件的安装非常简单，与安装任何其他Home Assistant插件没有区别。

1. 将我的Home Assistant插件仓库[repository]添加到您的Home Assistant实例中。
2. 安装这个插件。
3. 点击`保存`按钮以保存您的配置。
4. 启动插件。
5. 检查插件的日志以查看是否一切正常。
6. 通过侧边栏或在`<your-ip>:8071`访问Web界面。

## 配置

Web界面可以在`<your-ip>:8071`或使用入口时通过Home Assistant侧边栏访问。

**默认凭证：**
- 用户名：`admin`
- 密码：`admin`

**重要：**首次登录后立即更改默认凭证以提高安全性。

### 选项

| 选项 | 类型 | 默认 | 描述 |
|------|------|------|------|
| `ssl` | 布尔 | `false` | 为Web界面启用HTTPS |
| `certfile` | 字符串 | `fullchain.pem` | SSL证书文件（在`/ssl/`中） |
| `keyfile` | 字符串 | `privkey.pem` | SSL私钥文件（在`/ssl/`中） |
| `NoAuth` | 布尔 | `true` | 禁用身份验证（更改时重置数据库） |
| `disable_thumbnails` | 布尔 | `true` | 禁用缩略图生成以提高性能 |
| `base_folder` | 字符串 | _(可选)_ | 文件浏览器的根文件夹（默认为所有映射文件夹） |
| `localdisks` | 字符串 | _(可选)_ | 要挂载的本地驱动器（例如，`sda1,sdb1,MYNAS`） |
| `networkdisks` | 字符串 | _(可选)_ | 要挂载的SMB共享（例如，`//SERVER/SHARE`） |
| `cifsusername` | 字符串 | _(可选)_ | SMB网络共享的用户名 |
| `cifspassword` | 字符串 | _(可选)_ | SMB网络共享的密码 |
| `cifsdomain` | 字符串 | _(可选)_ | SMB网络共享的域 |

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

1. 启动插件并等待其初始化。
2. 通过Home Assistant侧边栏或在`<your-ip>:8071`访问Web界面。
3. 使用默认凭证登录：
   - 用户名：`admin`
   - 密码：`admin`
4. **重要：**通过点击“设置”>“用户管理”立即更改默认密码。
5. 通过Web界面配置您喜欢的设置。
6. 如果禁用身份验证（`NoAuth: true`），将跳过登录屏幕。

### 挂载驱动器

这个插件支持挂载本地驱动器和远程SMB共享：

- **本地驱动器**：参见[在插件中挂载本地驱动器](https://github.com/alexbelgium/hassio-addons/wiki/Mounting-Local-Drives-in-Addons)
- **远程共享**：参见[在插件中挂载远程共享](https://github.com/alexbelgium/hassio-addons/wiki/Mounting-remote-shares-in-Addons)

### 自定义脚本和环境变量

这个插件支持通过` addon_config`映射自定义脚本和环境变量：

- **自定义脚本**：参见[在插件中运行自定义脚本](https://github.com/alexbelgium/hassio-addons/wiki/Running-custom-scripts-in-Addons)
- **env_vars选项**：使用插件的`env_vars`选项传递额外的环境变量（大小写名称）。参见 https://github.com/alexbelgium/hassio-addons/wiki/Add-Environment-variables-to-your-Addon-2 获取详细信息。

## 支持

在GitHub上创建问题，或在[Home Assistant社区讨论](https://community.home-assistant.io/t/home-assistant-addon-filebrowser/282108/3)上提问。

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
