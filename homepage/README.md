# 首页
![版本][version]
![首页更新盾牌]

![支持aarch64架构][aarch64-shield]
![支持amd64架构][amd64-shield]

## 关于
此插件基于 [gethomepage.dev](https://gethomepage.dev) - [Homepage/Github](https://github.com/gethomepage/homepage) 。

## 注意事项
1. HOMEPAGE_ALLOWED_HOSTS
   - 默认情况下，此插件为 HOMEPAGE_ALLOWED_HOSTS 使用通配符 (*)。
   - 对于典型的 Home Assistant 设置，这是安全的，因为插件在隔离容器中本地运行，并未直接暴露给互联网。
   - 安全提示：如果您将此容器暴露给外部网络，使用通配符可能会允许不受欢迎的请求。在这种情况下，建议明确指定允许的主机。
   - 更多信息请参考：https://gethomepage.dev/installation/#homepage_allowed_hosts

2. 如果您需要使用 /var/run/docker.sock（可选，用于 Docker 集成），请确保为此插件禁用保护模式。
   - 关于 homepage 中的 /var/run/docker.sock 的更多信息请参考：https://gethomepage.dev/installation/docker/

3. 自定义图标和图片
   - 您可以通过文件浏览器插件或 SFTP 上传自定义图标和图片。
   - 由于无法在 haos 中挂载 `/app/public/icons` 以供 homepage 使用，以下是一个 workaround，也更容易使用。
   - 在 `/config/www/` 中创建一个映射 [示例：`/config/www/homepage/icons` 或 `/config/www/homepage/images`]
   - 自定义首页资源的目录示例：
     ```
       /config/www/homepage/
       ├─ icons/         ← 将书签图标放置于此
       ├─ images/        ← 将其他自定义图片放置于此
       └─ backgrounds/   ← 将背景图片放置于此
     ```
     在您的首页 YAML 中使用完整的 HA URL 引用文件：
     `http://iphaos:porthaos/local/homepage/icons/example.ico (示例 URL：http://192.168.254.212:8123/local/homepage/icons/sonarr.ico`
   - bookmarks.yaml 的示例：
     ```
     - Group A:
      - Sonarr:
        icon: http://192.168.254.212:8123/local/homepage/icons/sonarr.ico
        href: http://sonarr.host/
        description: 系列管理
     ```
   - 更多关于图标/图片/背景图的 info 请参考：https://gethomepage.dev/configs/services/#icons 和 https://gethomepage.dev/configs/settings/#background-image

4. 版本号：
   - 使用 **Vx.x.x.x** 格式。
   - 前三个数字遵循官方 Homepage 版本（例如 `1.5.0`）。
   - 最后一个数字是此 Home Assistant 插件内的更改（例如 `1.5.0.1`）。

## 已知问题
- 目前没有。

## 安装
1. 将我的插件存储库 [添加到 Home Assistant 插件][repository]。
2. 安装此插件。
3. 根据需要编辑插件配置。目前您只能更改暴露的端口，默认为 3000。
4. 如果您需要 /var/run/docker.sock 或自定义图标/图片，请参考上面的注意事项。
5. 启动插件。
6. 完成，享受吧！

## 编辑首页配置文件
1. 使用文件编辑器插件或通过 SFTP 连接到您的 Home Assistant。
2. 导航到 addon_config 文件夹。
3. 打开 Homepage 插件的文件夹，例如，xxxxxx_homepage（xxxxxx 是随机数字）。
4. 文件夹结构应如下所示：/addon_config/abcd123_homepage/。
5. 编辑首页的配置文件。有关首页配置的更多信息，请参阅：https://gethomepage.dev/configs/

## 故障排除

| 问题 | 可能原因 | 解决方案 |
|---------|----------------|----------|
| **启动后第一次/全新安装后插件只显示“启动”按钮** | HA Supervisor UI 有时在第一次安装后不会正确刷新 | 刷新页面（F5）或再次点击 **启动**。然后会出现完整的控制按钮（`停止`、`重启`、`卸载`、`重建`、`打开 WebUI`）。 |
| **使用 `/local/homepage/icons/...` 时出现 404** | 文件未位于正确的宿主机目录中，或 HA 尚未重新加载静态文件 | 确保文件放置在 `/config/www/homepage/icons/` 中。重新启动 Home Assistant（核心）以重新加载 `/local/` 静态文件。 |
| **旧图标或图片仍然显示** | 浏览器或服务器缓存 | 在浏览器中强制进行硬刷新（Ctrl+F5）或重命名文件（例如，`favicon_v2.ico`）。 |
| **图标/图片在首页上不显示** | Homepage 容器无法访问 `http://<ha-ip>:8123/local/...` 或 URL 错误 | 在您的 YAML 配置中始终使用包含端口 8123 的完整的 Home Assistant URL。 |
| **无法上传文件** | 权限问题或上传位置错误 | 确保您通过 SFTP、文件编辑器或另一个文件管理器具有对 `/config/www/homepage/...` 的写入权限。 |
| **路径不正确或存在错别字** | 文件夹或文件名中存在错别字 | 请检查文件夹名、文件扩展名和大小写敏感性（Linux 路径是区分大小写的）。 |

## 截图

![预览][preview]

[![aarch64-shield]][aarch64-shield]
[![amd64-shield]][amd64-shield]

[![version]][version]

[![Homepage-update-shield]][Homepage-update-shield]

[repository]: https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https://github.com/bytenoodle/hassioaddon
[preview]: https://raw.githubusercontent.com/gethomepage/homepage/refs/heads/dev/images/1.png
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
