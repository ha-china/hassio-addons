# Home Assistant 附加组件：Filebrowser

我在业余时间维护这个和其他 Home Assistant 附加组件：紧跟上游变更、HA 变更，并在真实硬件上测试耗费了大量时间（和一些金钱）。我使用约 5-10 个我拥有 100+ 附加组件中的附加组件，因此我经常安装测试机器（并购买一些测试服务，如 VPN），以便我自己不用时用于故障排除和改进附加组件。

如果这个附加组件为您节省时间或使您的设置更简单，我会非常感谢您的支持！

[![Buy me a coffee][donation-badge]](https://www.buymeacoffee.com/alexbelgium)
[![Donate via PayPal][paypal-badge]](https://www.paypal.com/donate/?hosted_button_id=DZFULJZTP3UQA)

## Addon 信息

![版本](https://img.shields.io/badge/dynamic/yaml?label=版本&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Ffilebrowser%2Fconfig.yaml)
![Ingress] (https://img.shields.io/badge/dynamic/yaml?label=Ingress&query=%24.ingress&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Ffilebrowser%2Fconfig.yaml)
![架构](https://img.shields.io/badge/dynamic/yaml?color=success&label=架构&query=%24.arch&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Ffilebrowser%2Fconfig.yaml)

[![Codacy 徽章](https://app.codacy.com/project/badge/Grade/9c6cf10bdbba45ecb202d7f579b5be0e)](https://www.codacy.com/gh/alexbelgium/hassio-addons/dashboard?utm_source=github.com&utm_medium=referral&utm_content=alexbelgium/hassio-addons&utm_campaign=Badge_Grade)
[![GitHub Super-Linter](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/weekly-supelinter.yaml?label=代码库检查)](https://github.com/alexbelgium/hassio-addons/actions/workflows/weekly-supelinter.yaml)
[![构建者](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/onpush_builder.yaml?label=构建者)](https://github.com/alexbelgium/hassio-addons/actions/workflows/onpush_builder.yaml)

[donation-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee-%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white
[paypal-badge]: https://img.shields.io/badge/Donate%20via%20PayPal-0070BA?logo=paypal&style=flat&logoColor=white

_感谢所有在我的仓库中点 star 的人！要 star 它，请点击下图，然后它就会显示在右上角。谢谢！_

[![@alexbelgium/hassio-addons 的 Star 者仓库名单](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/.github/stars2.svg)](https://github.com/alexbelgium/hassio-addons/stargazers)

![下载量演变](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/filebrowser/stats.png)

## 关于

这是一个基于 Web 的文件管理界面，为您的 Home Assistant 系统提供安全浏览、上传、下载、编辑和管理文件的方式。Filebrowser 提供了一个简洁、现代的基于 Web 浏览器界面来处理文件，支持多种文件格式、预览功能以及全面的操作。

该附加组件基于官方 Filebrowser 项目的 [docker 镜像](https://hub.docker.com/r/filebrowser/filebrowser)。

## 安装

该附加组件的安装非常简单，与其他 Home Assistant 附加组件的安装相比没有区别。

1. 将我的附加组件库添加到您的 Home Assistant 实例中（在 supervisor 附加组件商店右上角，或者如果您已配置了我的 HA，则点击下方按钮）
   [![打开您的 Home Assistant 实例并显示带有预填充特定仓库 URL 的添加附加组件库对话框](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2Falexbelgium%2Fhassio-addons)
1. 安装此附加组件。
1. 点击 `保存`按钮以存储您的配置。
1. 启动附加组件。
1. 检查附加组件的日志，查看一切是否顺利。
1. 通过侧边栏或访问 `<your-ip>:8071` 访问 Web UI。

## 配置

Web UI 可通过 `<your-ip>:8071` 访问，或者在使用 Ingress 时通过 Home Assistant 侧边栏访问。

**默认凭据：**
- 用户名：`admin`
- 密码：`admin`

**重要：** 在首次登录后立即更改默认凭据以确保安全。

### 选项

| 选项 | 类型 | 默认值 | 描述 |
|------|------|--------|------|
| `ssl` | bool | `false` | 为 Web 界面启用 HTTPS |
| `certfile` | str | `fullchain.pem` | SSL 证书文件（位于 `/ssl/`） |
| `keyfile` | str | `privkey.pem` | SSL 私钥文件（位于 `/ssl/`） |
| `NoAuth` | bool | `true` | 禁用身份验证（更改时重置数据库） |
| `disable_thumbnails` | bool | `true` | 禁用缩略图生成以提高性能 |
| `base_folder` | str | _(可选)_ | 文件浏览器的根文件夹（默认为所有已映射的文件夹） |
| `localdisks` | str | _(可选)_ | 本地驱动器（例如，`sda1,sdb1,MYNAS`）。在驱动器后添加文件夹以仅挂载该文件夹，例如 `MYNAS/public` 仅挂载该文件夹到 `/mnt/MYNAS/public`。文件夹挂载需要 2026-09-19 以后发布的附加组件版本。 |
| `networkdisks` | str | _(可选)_ | 挂载的 SMB 共享（例如，`//SERVER/SHARE`） |
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

## 安全

默认情况下 Filebrowser（`NoAuth` 已启用）在无身份验证模式下运行，其直接端口（8071）已发布。网络中任何能够访问该端口的人都必须读写、修改和删除附加组件中的所有已映射文件夹，包括您的 Home Assistant 配置和备份。附加组件会在启动时记录此情况的警告。

要安全使用，请禁用 `NoAuth` 选项并更改管理密码，或者在附加组件的网络设置中禁用端口并使用 Ingress。

## 设置

1. 启动附加组件并等待其初始化。
2. 通过 Home Assistant 侧边栏或访问 `<your-ip>:8071` 访问 Web 界面。
3. 使用默认凭据登录：
   - 用户名：`admin`
   - 密码：`admin`
4. **重要：** 立即点击“设置”>“用户管理”更改默认密码。
5. 通过 Web 界面配置您偏好的设置。
6. 如果禁用了身份验证 (`NoAuth: true`)，将跳过登录屏幕。

### 挂载驱动器

该附加组件支持挂载本地驱动器和本地 SMB 共享：

- **本地驱动器：** 参见 [附加组件中挂载本地驱动器](https://github.com/alexbelgium/hassio-addons/wiki/Mounting-Local-Drives-in-Addons)
- **远程共享：** 参见 [附加组件中挂载远程共享](https://github.com/alexbelgium/hassio-addons/wiki/Mounting-remote-shares-in-Addons)

### 自定义脚本和环境变量

该附加组件通过 `app_config` 映射支持自定义脚本和环境变量：

- **自定义脚本：** 参见 [在附加组件中运行自定义脚本](https://github.com/alexbelgium/hassio-addons/wiki/Running-custom-scripts-in-Addons)
- `env_vars` 选项：使用附加组件的 `env_vars` 选项传递额外的环境变量（大小写名称均可）。详情参见 https://github.com/alexbelgium/hassio-addons/wiki/Add-Environment-variables-to-your-Addon-2。

## 支持

在 GitHub 上创建issue，或在 [Home Assistant 社区线程](https://community.home-assistant.io/t/home-assistant-addon-filebrowser/282108/3) 提问。

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
