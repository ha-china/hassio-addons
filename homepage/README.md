# 主页
![版本][版本]
![主页更新徽章]

![支持 aarch64 架构][aarch64 徽章]
![支持 amd64 架构][amd64 徽章]

## 关于
此插件基于 [gethomepage.dev](https://gethomepage.dev) - [Homepage/Github](https://github.com/gethomepage/homepage) 开发。

## 注意事项
1. HOMEPAGE_ALLOWED_HOSTS
   - 默认情况下，此插件使用通配符 (*) 作为 HOMEPAGE_ALLOWED_HOSTS。
   - 对于典型的 Home Assistant 设置，这是安全的，因为该插件在隔离的容器中本地运行，并非直接暴露在网络上。
   - 安全提示：如果您将此容器暴露到外网络，使用通配符可能会允许 unwanted 请求。在这种情况下，建议明确指定允许的主机。
   - 更多信息：https://gethomepage.dev/installation/#homepage_allowed_hosts

2. 如果需要使用 /var/run/docker.sock（可选，用于 Docker 集成），请确保此插件已禁用保护模式。
   - 关于 /var/run/docker.sock 的更多信息：https://gethomepage.dev/installation/docker/

3. 自定义图标和图像
   - 您可以通过 File Browser 插件或 SFTP 上传自定义图标和图像。
   - 由于无法在 haos 中挂载 `/app/public/icons` 以便 homepage 使用，这里提供简化操作的变通方案。
   - 在 `/config/www/` 中创建一个映射：[示例：`/config/www/homepage/icons` 或者 `/config/www/homepage/images`]
   - 自定义 Homepage 资产的目录示例：
     ```
       /config/www/homepage/
       ├─ icons/         ← 在此处放置书签图标
       ├─ images/        ← 在此处放置其他自定义图像
       └─ backgrounds/  ← 在此处放置背景图像
     ```
     在您的 homepage YAML 中使用完整的 HA URL 引用文件：
     `http://iphaos:porthaos/local/homepage/icons/example.ico (示例网址：http://192.168.254.212:8123/local/homepage/icons/sonarr.ico`
   - bookmarks.yaml 示例：
     ```
     - Group A:
      - Sonarr:
        icon: http://192.168.254.212:8123/local/homepage/icons/sonarr.ico
        href: http://sonarr.host/
        description: 系列管理
     ```
   - 关于图标/图像/背景的更多信息：https://gethomepage.dev/configs/services/#icons 和 https://gethomepage.dev/configs/settings/#background-image

4. 版本编号：
   - 使用 **Vx.x.x.x** 格式。
   - 前三个数字遵循官方 Homepage 版本（例如 `1.5.0`）。
   - 最后一个数字用于 Home Assistant 插件内的更改（例如 `1.5.0.1`）。

## 已知问题
- 暂无。

## 安装
1. [添加我的插件仓库][repository] 到 Home Assistant 插件。
2. 安装此插件。
3. 根据需要编辑插件配置。目前您只能更改暴露端口，默认为 3000。
4. 如果需要 /var/run/docker.sock 或自定义图标/图像，请参考上面的注意事项。
5. 启动插件。
6. 完成，享受！

## 编辑 Homepage 配置文件
1. 使用文件编辑器插件或通过 SFTP 连接到您的 Home Assistant。
2. 导航到 addon_config 文件夹。
3. 打开 Homepage 插件的文件夹，例如 xxxxxxx_homepage（xxxxxxx 是随机数字）。
4. 目录结构应如下：/addon_config/abcd123_homepage/。
5. 编辑 Homepage 的配置文件。更多资讯关于Homepage的配置，见：https://gethomepage.dev/configs/

## 故障排除

| 问题 | 可能原因 | 解决方案 |
|---------|----------------|----------|
| **插件首次或全新安装启动后仅显示“启动”按钮** | HA Supervisor UI 可能在首次安装后无法正确刷新 | 刷新页面 (F5) 或再次点击 **启动**。然后会出现完整控制面板（`停止`, `重启`, `卸载`, `重建`, `打开 Web UI`）。 |
| **使用 `/local/homepage/icons/...` 时出现 404 错误** | 文件不在正确的主机目录中，或 HA 尚未重新加载静态文件 | 确保文件放置在 `/config/www/homepage/icons/` 中。重启 Home Assistant (core) 以便重新加载 `/local/` 静态文件。 |
| **仍然显示旧的图标或图像** | 浏览器或服务器缓存 | 在浏览器中强制执行硬刷新 (Ctrl+F5) 或重命名文件（例如 `favicon_v2.ico`）。 |
| **图标/图像在主页上不显示** | Homepage 容器无法访问 `http://<ha-ip>:8123/local/...` 或 URL 不正确 | 对于图标/图像，请在 YAML 配置中始终使用包含 8123 端口的完整 Home Assistant URL。 |
| **无法上传文件** | 权限问题或上传位置错误 | 确保通过 SFTP、文件编辑器或其他文件管理器具有 `/config/www/homepage/...` 的写入权限。 |
| **路径错误或拼写错误** | 文件夹或文件名拼写错误 | 仔细检查文件夹名称、文件扩展名和大小写敏感性（Linux 路径是大小写敏感的）。 |

## 截图

![预览][预览]

<!--
资产
-->

[aarch64 徽标]: https://img.shields.io/badge/aarch64-yes-green.svg
[amd64 徽标]: https://img.shields.io/badge/amd64-yes-green.svg

[版本]: https://img.shields.io/badge/version-v2.2.0--0-blue.svg

[主页更新徽章]: https://img.shields.io/badge/Updated%20on-2026--09--02-blue.svg

[repository]: https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https://github.com/bytenoodle/hassioaddon
[预览]: https://raw.githubusercontent.com/gethomepage/homepage/refs/heads/dev/images/1.png

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
