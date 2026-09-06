# 首页
![版本][版本]
![首页更新盾牌]

![支持 aarch64 架构][aarch64 盾牌]
![支持 amd64 架构][amd64 盾牌]

## 关于
此插件基于 [gethomepage.dev](https://gethomepage.dev) 及 [Homepage/Github](https://github.com/gethomepage/homepage) 开发。

## 注意事项
1. **HOMEPAGE_ALLOWED_HOSTS**
   - 默认情况下，此插件使用通配符 (*) 作为 HOMEPAGE_ALLOWED_HOSTS。
   - 对于典型的 Home Assistant 设置，这是安全的，因为插件在孤立的容器中运行，不会直接暴露在互联网上。
   - **安全提示**：如果您将来将此容器暴露到外部网络，使用通配符可能会允许不受请求。在这种情况下，建议明确指定允许的 hosts。
   - 更多信息请访问：https://gethomepage.dev/installation/#homepage_allowed_hosts

2. 如果需要使用 `/var/run/docker.sock`（可选，用于 Docker 集成），请确保禁用此插件的保护模式。
   - 关于 homepage 中 `/var/run/docker.sock` 的更多信息：https://gethomepage.dev/installation/docker/

3. 自定义图标和图像
   - 您可以通过 File Browser 插件或 SFTP 上传自定义图标和图像。
   - 由于无法在 haos 中挂载 `/app/public/icons` 以便在此处用于 homepage，因此有一个替代方案，使用更方便。
   - 在 `/config/www/` 下创建一个映射：[例如：`/config/www/homepage/icons` 或 `/config/www/homepage/images`]
   - 自定义 Homepage 资产的目录示例：
     ```
       /config/www/homepage/
       ├─ icons/         ← 将书签图标放置于此
       ├─ images/        ← 放置其他自定义图像
       └─ backgrounds/   ← 放置背景图像
     ```
     在您的 homepage YAML 中使用完整的 HA URL 引用相关文件：
     `http://iphaos:porthaos/local/homepage/icons/example.ico (示例网址：http://192.168.254.212:8123/local/homepage/icons/sonarr.ico`
   - bookmarks.yaml 示例：
     ```
     - Group A:
       - Sonarr:
         icon: http://192.168.254.212:8123/local/homepage/icons/sonarr.ico
         href: http://sonarr.host/
         description: 系列管理
     ```
   - 有关图标/图像/背景的更多信息：https://gethomepage.dev/configs/services/#icons 和 https://gethomepage.dev/configs/settings/#background-image

4. 版本编号：
   - 使用 **Vx.x.x.x** 格式。
   - 前三位数字遵循官方 Homepage 版本（例如 `1.5.0`）。
   - 最后一位用于 Home Assistant 插件内的变更（例如 `1.5.0.1`）。

## 已知问题
- 目前无。

## 安装
1. [添加我的插件仓库][仓库] 到 Home Assistant 插件库。
2. 安装此插件。
3. 根据需要编辑插件配置。目前您可以更改暴露的端口，默认为 3000。
4. 如果您需要 `/var/run/docker.sock` 或自定义图标/图像，请参阅上方笔记。
5. 启动插件。
6. 完成，享受！

## 编辑 Homepage 配置文件
1. 使用 File Editor 插件或通过 SFTP 连接到您的 Home Assistant。
2. 导航到 addon_config 文件夹。
3. 打开 Homepage 插件文件夹，例如 xxxxxxx_homepage（xxxxxxx 为随机数字）。
4. 目录结构应如下：/addon_config/abcd123_homepage/.
5. 编辑 Homepage 配置文件。有关 Homepage 配置的更多详细信息，请访问：https://gethomepage.dev/configs/

## 故障排除

| 问题 | 可能原因 | 解决方案 |
|---------|----------------|----------|
| **插件启动后仅显示“启动”按钮** | 首次/全新安装后，HA Supervisor UI 刷新可能不正确 | 刷新页面 (F5) 或再次点击 **启动**。此时将显示完整控制选项（`停止`、`重启`、`卸载`、`重新构建`、`打开 Web UI`）。 |
| **使用 `/local/homepage/icons/...` 时出现 404 错误** | 文件未位于正确的主机目录，或 HA 尚未重新加载静态文件 | 确保将文件放置在 `/config/www/homepage/icons/`。重启 Home Assistant (core) 以使 `/local/` 静态文件重新加载。 |
| **旧的图标或图像仍显示** | 浏览器或服务器缓存 | 在浏览器中执行强制硬刷新 (Ctrl+F5) 或重命名文件（例如 `favicon_v2.ico`）。 |
| **图标/图像在 Homepage 上不显示** | Homepage 容器无法访问 `http://<ha-ip>:8123/local/...` 或 URL 不正确 | 图标/图像总是在 YAML 配置中使用包含端口 8123 的完整 Home Assistant URL。 |
| **无法上传文件** | 权限问题或上传位置错误 | 确保通过 SFTP、File Editor 或其他文件管理器具有对 `/config/www/homepage/...` 的写入权限。 |
| **路径错误或拼写错误** | 文件夹或文件名拼写错误 | 仔细检查文件夹名、文件扩展名以及大小写敏感性（Linux 路径对大小写敏感）。 |

## 截图

![预览][预览]

<!--
资源
-->

[aarch64 盾牌]: https://img.shields.io/badge/aarch64-yes-green.svg
[amd64 盾牌]: https://img.shields.io/badge/amd64-yes-green.svg

[版本]: https://img.shields.io/badge/version-v2.2.0--0-blue.svg

[首页更新盾牌]: https://img.shields.io/badge/Updated%20on-2026--09--02-blue.svg

[仓库]: https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https://github.com/bytenoodle/hassioaddon
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
