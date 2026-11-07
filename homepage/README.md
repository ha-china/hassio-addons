# 首页
![版本][版本]
![首页更新徽章]

![支持 aarch64 架构][aarch64 徽章]
![支持 amd64 架构][amd64 徽章]

## 简介
此插件基于 [gethomepage.dev](https://gethomepage.dev) - [Homepage/Github](https://github.com/gethomepage/homepage)。

## 注意事项
1. **HOMEPAGE_ALLOWED_HOSTS**
   - 默认情况下，此插件对 HOMEPAGE_ALLOWED_HOSTS 使用通配符 (*)。
   - 对于典型的 Home Assistant 设置，这是安全的，因为该插件在一个隔离的容器中运行，不直接暴露给互联网。
   - 安全提示：如果您将来将容器暴露到外部网络，使用通配符可能会允许不受欢迎的外部请求。在这种情况下，建议明确指定允许的主机。
   - 更多详细信息：https://gethomepage.dev/installation/#homepage_allowed_hosts

2. 如果您需要访问 `/var/run/docker.sock`（可选，用于 Docker 集成），请确保在此插件上禁用保护模式。
   - 关于 homepage 中 `/var/run/docker.sock` 的更多信息：https://gethomepage.dev/installation/docker/

3. 自定义图标和图片
   - 您可以使用 "文件浏览" 插件或 SFTP 上传自定义图标和图片。
   - 由于无法在 HaOS 中挂载 `/app/public/icons` 供 homepage 使用，因此这里提供一个替代方案，使用更加便捷。
   - 在 `/config/www/` 目录中创建一个映射，例如：`/config/www/homepage/icons` 或 `/config/www/homepage/images`
   - 自定义 Homepage 资产的目录示例：
     ```
       /config/www/homepage/
       ├─ icons/         ← 将此处的书签图标放置在这里
       ├─ images/        ← 将此处的其他自定义图片放置在这里
       └─ backgrounds/   ← 将此处的背景图片放置在这里
     ```
   - 在 homepage YAML 配置文件中引用完整 HA URL：
     `http://iphaos:porthaos/local/homepage/icons/example.ico` (示例 URL: http://192.168.254.212:8123/local/homepage/icons/sonarr.ico)
   - bookmarks.yaml 配置示例：
     ```
     - 组 A:
       - Sonarr:
         icon: http://192.168.254.212:8123/local/homepage/icons/sonarr.ico
         href: http://sonarr.host/
         description: 剧集管理
     ```
   - 关于图标/图片/背景的更多信息：https://gethomepage.dev/configs/services/#icons 和 https://gethomepage.dev/configs/settings/#background-image

4. 版本编号：
   - 使用 **Vx.x.x.x** 格式。
   - 前三个数字遵循官方 Homepage 版本（例如 `1.5.0`）。
   - 最后一个数字用于 Home Assistant 插件内的更改（例如 `1.5.0.1`）。

## 已知问题
- 目前尚无。

## 安装
1. [添加我的插件仓库][仓库] 到您的 Home Assistant 插件中。
2. 安装此插件。
3. 根据需要编辑插件配置。目前，您只能更改暴露的端口，默认为 3000。
4. 如果您需要 `/var/run/docker.sock` 或自定义图标/图片，请参阅上述注意事项。
5. 启动插件。
6. 完成，享受！

## 编辑 Homepage 配置文件
1. 使用 "文件编辑器" 插件或通过 SFTP 连接 Home Assistant。
2. 导航到 addon_config 文件夹。
3. 打开 Homepage 插件的文件夹，例如 xxxxxxx_homepage (xxxxxxx 是随机数字)。
4. 文件夹结构应类似于：`/addon_config/abcd123_homepage/`。
5. 编辑 Homepage 的配置文件。更多关于 Homepage 配置的信息，请访问：https://gethomepage.dev/configs/

## 故障排除

| 问题 | 可能原因 | 解决方案 |
|---------|----------------|----------|
| **插件启动后只显示“启动”按钮（首次或干净安装后）** | Home Assistant Supervisor UI 在某些情况下在首次安装后无法正确刷新 | 刷新页面 (F5) 或再次点击**启动**。此时将显示完整控制 (`停止`, `重启`, `卸载`, `重建`, `打开 Web 界面`)。 |
| **使用 `/local/homepage/icons/...` 时出现 404** | 文件未位于正确的主机目录，或 Home Assistant 尚未重新加载静态文件 | 确保文件位于 `/config/www/homepage/icons/` 中。重启 Home Assistant (核心) 以使 `/local/` 的静态文件重新加载。 |
| **旧图标或图片仍然显示** | 浏览器或服务器缓存 | 在浏览器中强制硬刷新 (Ctrl+F5) 或重命名文件（例如，`favicon_v2.ico`）。 |
| **首页上不显示图标/图片** | Homepage 容器无法访问 `http://<ha-ip>:8123/local/...` 或 URL 不正确 | 在 YAML 配置中，对于所有图标/图片，应始终使用包含端口 8123 的完整 Home Assistant URL。 |
| **无法上传文件** | 权限问题或上传位置错误 | 确保您拥有对 `/config/www/homepage/...` 的写入权限，可通过 SFTP、文件编辑器或其他文件管理器访问。 |
| **路径不正确或拼写错误** | 文件夹或文件名拼写错误 | 仔细检查文件夹名称、文件扩展名以及大小写敏感性（Linux 路径区分大小写）。 |

## 截图

![预览][预览]

<!--
资产
-->

[aarch64 徽章]: https://img.shields.io/badge/aarch64-yes-green.svg
[amd64 徽章]: https://img.shields.io/badge/amd64-yes-green.svg

[版本]: https://img.shields.io/badge/version-v2.7.0--0-blue.svg

[首页更新徽章]: https://img.shields.io/badge/Updated%20on-2026--10--26-blue.svg

[仓库]: https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https://github.com/bytenoodle/hassioaddon
[预览]: https://raw.githubusercontent.com/gethomepage/homepage/refs/heads/dev/images/1.png

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
