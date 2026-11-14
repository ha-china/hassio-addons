# 首页 HA 应用
![Version][version]
![Homepage-update-shield]

![支持 aarch64 架构][aarch64-shield]
![支持 amd64 架构][amd64-shield]

## 关于
此附加组件基于 [gethomepage.dev](https://gethomepage.dev) - [Homepage/Github](https://github.com/gethomepage/homepage)。

## 注意
1. **HOMEPAGE_ALLOWED_HOSTS**
   - 默认情况下，此附加组件对 HOMEPAGE_ALLOWED_HOSTS 使用通配符 (*)。
   - 由于附加组件在本地在隔离容器内运行且未直接暴露给互联网，这对于典型的 Home Assistant 设置是安全的。
   - 安全提示：如果您将来将此容器暴露到外部网络，使用通配符可能会允许未经想要的请求。在这种情况下，建议明确指定允许的站点。
   - 更多信息请参阅：https://gethomepage.dev/installation/#homepage_allowed_hosts

2. 如果您需要使用 `/var/run/docker.sock`（可选，用于 Docker 集成），请确保为此附加组件禁用保护模式。
   - 关于 homepage 中 `/var/run/docker.sock` 的更多信息：https://gethomepage.dev/installation/docker/

3. 自定义图标和图像
   - 您可以使用文件浏览器附加组件或 SFTP 上传自定义图标和图像。
   - 由于无法挂载 `/app/public/icons` 到 haos 以供 homepage 使用，因此这里提供一个变通方法和更易于使用的方法。
   - 在 `/config/www/` 中创建一个映射 [示例：`/config/www/homepage/icons` 或 `/config/www/homepage/images`]
   - 自定义 Homepage 资产的目录示例：
     ```
       /config/www/homepage/
       ├─ icons/         ← 将书签图标放置在此处
       ├─ images/        ← 将其他自定义图像放置在此处
       └─ backgrounds/   ← 将背景图像放置在此处
     ```
   - 在 homepage YAML 中使用完整的 HA URL 作为参考文件：
     `http://iphaos:porthaos/local/homepage/icons/example.ico (示例 URL: http://192.168.254.212:8123/local/homepage/icons/sonarr.ico`
   - bookmarks.yaml 的示例：
     ```
     - Group A:
      - Sonarr:
        icon: http://192.168.254.212:8123/local/homepage/icons/sonarr.ico
        href: http://sonarr.host/
        description: Series management
     ```
   - 关于图标/图像/背景的更多信息：https://gethomepage.dev/configs/services/#icons 和 https://gethomepage.dev/configs/settings/#background-image

4. 版本号：
   - 使用 **Vx.x.x.x** 格式。
   - 前三个数字遵循官方 Homepage 版本（例如 `1.5.0`）。
   - 最后一个数字用于 Home Assistant 附加组件内的更改（例如 `1.5.0.1`）。

## 已知问题
- 目前尚无。

## 安装
1. 将 [Add my add-ons repository][repository] 添加到您的 Home Assistant 附加组件中。
2. 安装此附加组件。
3. 根据需要编辑附加组件配置。目前只能更改暴露的端口，默认为 3000。
4. 如果您需要 `/var/run/docker.sock` 或自定义图标/图像，请参阅上方的注意事项。
5. 启动附加组件。
6. 完成，享受吧！

## 编辑 Homepage 配置文件
1. 使用文件编辑器附加组件或通过 SFTP 连接到您的 Home Assistant。
2. 导航到 addon_config 文件夹。
3. 打开 Homepage 附加组件的文件夹，例如 xxxxxxx_homepage（xxxxxxx 是随机数字）。
4. 文件夹结构应如下所示：/addon_config/abcd123_homepage/。
5. 编辑 Homepage 的配置文件。有关 Homepage 配置的更多信息，请参阅：https://gethomepage.dev/configs/

## 故障排除

| 问题 | 可能原因 | 解决方案 |
|---------|----------------|----------|
| **附加组件在首次/全新安装后启动后仅显示“开始”按钮** | HA Supervisor UI 在首次安装后偶尔无法正确刷新 | 刷新页面 (F5) 或再次点击 **开始**。然后会出现完整的控制项（`停止`、`重启`、`卸载`、`重建`、`打开 WebUI`）。 |
| **使用 `/local/homepage/icons/...` 时出现 404** | 文件未位于正确的主机目录中，或 HA 尚未重新加载静态文件 | 确保文件位于 `/config/www/homepage/icons/` 中。重启 Home Assistant (core)，以便重新加载 `/local/` 静态文件。 |
| **旧图标或图像仍然显示** | 浏览器或服务器缓存 | 在浏览器中强制刷新 (Ctrl+F5) 或重命名文件（例如 `favicon_v2.ico`）。 |
| **Homepage 上不显示图标/图像** | Homepage 容器无法访问 `http://<ha-ip>:8123/local/...` 或 URL 不正确 | 对于图标/图像，请在 YAML 配置中始终使用包含 8123 端口的完整 Home Assistant URL。 |
| **无法上传文件** | 权限问题或上传位置不正确 | 确保通过 SFTP、文件编辑器或其他文件管理工具拥有 `/config/www/homepage/...` 的写入权限。 |
| **路径错误或拼写错误** | 文件夹或文件名中的拼写错误 | 仔细检查文件夹名称、文件扩展名和大小写敏感性（Linux 路径是区分大小写的）。 |

## 截图

![Preview][preview]

<!--
Assets
-->

[aarch64-shield]: https://img.shields.io/badge/aarch64-yes-green.svg
[amd64-shield]: https://img.shields.io/badge/amd64-yes-green.svg

[version]: https://img.shields.io/badge/version-v2.8.0--0-blue.svg

[Homepage-update-shield]: https://img.shields.io/badge/Updated%20on-2026--11--14-blue.svg

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
