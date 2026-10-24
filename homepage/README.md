# 主页
![版本][version]
![主页更新徽章]

![支持 ARM64 架构][aarch64-shield]
![支持 AMD64 架构][amd64-shield]

## 简介
此扩展是基于 [gethomepage.dev](https://gethomepage.dev) - [Homepage 仓库](https://github.com/gethomepage/homepage) 构建的。

## 说明
1. **HOMEPAGE_ALLOWED_HOSTS**
   - 默认情况下，此扩展使用通配符 (*) 作为 HOMEPAGE_ALLOWED_HOSTS。
   - 对于典型的 Home Assistant 设置，这是安全的，因为该扩展运行在本地隔离的容器中，并未直接暴露在互联网上。
   - **安全提示**：如果您将容器暴露给外部网络，使用通配符可能会允许未经授权的请求。在这种情况下，建议明确指定允许的站点。
   - 更多相关信息：https://gethomepage.dev/installation/#homepage_allowed_hosts

2. 如果您需要使用 `/var/run/docker.sock`（可选，用于 Docker 集成功能），请确保为该扩展关闭保护模式。
   - 关于 `/var/run/docker.sock` 在 Homepage 中的更多信息：https://gethomepage.dev/installation/docker/

3. **自定义图标和图片**
   - 您可以通过 File Browser 扩展或 SFTP 上传自定义图标和图片。
   - 由于无法在 HAOS 中挂载 `/app/public/icons` 以被 Homepage 调用，这里提供一个替代方案，使用更加简单。
   - 在 `/config/www/` 中创建映射目录 **[例如：`/config/www/homepage/icons` 或 `/config/www/homepage/images`]**。
   - 自定义 Homepage 资源的目录示例：
     ```
       /config/www/homepage/
       ├─ icons/         ← 将书签图标放置在此
       ├─ images/        ← 将其他自定义图片放置在此
       └─ backgrounds/   ← 将背景图片放置在此
     ```
   - 在您的 homepage YAML 中引用文件时使用完整的 Home Assistant URL：
     `http://iphaos:porthaos/local/homepage/icons/example.ico (示例网址: http://192.168.254.212:8123/local/homepage/icons/sonarr.ico)`
   - **bookmarks.yaml** 示例：
     ```
     - Group A:
      - Sonarr:
        icon: http://192.168.254.212:8123/local/homepage/icons/sonarr.ico
        href: http://sonarr.host/
        description: 影视管理
     ```
   - 关于图标/图片/背景的更多信息：https://gethomepage.dev/configs/services/#icons 和 https://gethomepage.dev/configs/settings/#background-image

4. **版本号**：
   - 使用 **Vx.x.x.x** 格式。
   - 前三个数字遵循官方 Homepage 版本（例如 `1.5.0`）。
   - 最后一个数字用于 Home Assistant 扩展内的更改（例如 `1.5.0.1`）。

## 已知问题
- 目前尚无。

## 安装
1. 将 **[我的扩展库][repository]** 添加到您的 Home Assistant 扩展中。
2. 安装此扩展。
3. 根据需要编辑扩展配置。目前您可以更改打开的端口，默认端口为 3000。
4. 如果您需要 `/var/run/docker.sock` 或自定义图标/图片，请参阅上述说明。
5. 启动扩展。
6. 完成，享受吧！

## 编辑 Homepage 配置文件
1. 使用 File Editor 扩展或通过 SFTP 连接到您的 Home Assistant。
2. 导航到 addon_config 文件夹。
3. 打开 Homepage 扩展的文件夹，例如 xxxxxxx_homepage（xxxxxxx 为随机数字）。
4. 文件夹结构应如下所示：/addon_config/abcd123_homepage/。
5. 编辑 Homepage 的配置文件。关于 Homepage 配置的更多信息，请访问：https://gethomepage.dev/configs/

## 故障排除

| 问题 | 可能原因 | 解决方案 |
|---------|----------------|----------|
| **添加后仅显示“开始”按钮（首次/全新安装后）** | Home Assistant Supervisor 界面在首次安装后有时无法正确刷新 | 刷新页面（F5）或再次点击 **开始**。然后完整的控制项（`停止`、`重启`、`卸载`、`重建`、`打开 Web UI`）将出现。 |
| **使用 `/local/homepage/icons/...` 时报 404** | 文件未位于正确的主机目录，或 HA 尚未重新加载静态文件 | 确保文件已放置在 `/config/www/homepage/icons/` 中。重启 Home Assistant (core) 以重新加载 `/local/` 静态文件。 |
| **旧版图标或图片仍然显示** | 浏览器或服务器缓存 | 在浏览器中强制硬刷新（Ctrl+F5）或重命名文件（例如 `favicon_v2.ico`）。 |
| **Homepage 上不显示图标/图片** | Homepage 容器无法访问 `http://<ha-ip>:8123/local/...` 或 URL 不正确 | 对于图标/图片，请在 YAML 配置中始终使用带有 8123 端口的完整 Home Assistant URL。 |
| **无法上传文件** | 权限问题或上传位置错误 | 确保您通过 SFTP、File Editor 或其他文件管理器对 `/config/www/homepage/...` 具有写入权限。 |
| **路径错误或拼写错误** | 文件夹或文件名中的拼写错误 | 仔细检查文件夹名称、文件扩展名以及大小写敏感性（Linux 路径区分大小写）。 |

## 截图

![预览][preview]

<!--
资源
-->

[aarch64-shield]: https://img.shields.io/badge/aarch64-yes-green.svg
[amd64-shield]: https://img.shields.io/badge/amd64-yes-green.svg

[version]: https://img.shields.io/badge/version-v2.6.0--0-blue.svg

[Homepage-update-shield]: https://img.shields.io/badge/Updated%20on-2026--10--19-blue.svg

[repository]: https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https://github.com/bytenoodle/hassioaddon
[preview]: https://raw.githubusercontent.com/gethomepage/homepage/refs/heads/dev/images/1.png

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
