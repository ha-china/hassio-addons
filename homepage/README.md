# 主页
![版本][version]
![主页更新盾牌]
![生产就绪][production-ready]
![支持aarch64架构][aarch64-shield]
![支持amd64架构][amd64-shield]

## 关于
这个附加组件基于 [gethomepage/homepage](https://hub.docker.com/r/gethomepage/homepage/) - [gethomepage.dev](https://gethomepage.dev)。

## 注意事项
1. HOMEPAGE_ALLOWED_HOSTS
   - 默认情况下，这个附加组件使用通配符 (*) 来设置 HOMEPAGE_ALLOWED_HOSTS。
   - 对于典型的 Home Assistant 设置来说这是安全的，因为附加组件在隔离的容器中本地运行，并且不会直接暴露给互联网。
   - 安全提示：如果你将来将这个容器暴露给外部网络，使用通配符可能会允许不希望的请求。在这种情况下，建议明确指定允许的主机名。
   - 更多信息：https://gethomepage.dev/installation/#homepage_allowed_hosts

2. 如果你需要使用 /var/run/docker.sock（可选，用于Docker集成），请确保此附加组件的防护模式已禁用。
   - 更多信息：https://gethomepage.dev/installation/docker/ 中的 /var/run/docker.sock

3. 自定义图标和图片
   - 你可以通过使用文件浏览器附加组件或SFTP上传自定义图标和图片。
   - 由于在haos中无法挂载 `/app/public/icons` 以便与主页一起使用，这里提供了一个解决方案，并且更易于使用。
   - 在 `/config/www/` 中创建一个映射 [示例：`/config/www/homepage/icons 或/和 /config/www/homepage/images`]
   - 自定义主页资产的目录示例：
     ```
       /config/www/homepage/
       ├─ icons/         ← 将书签图标放在这里
       ├─ images/        ← 将其他自定义图片放在这里
       └─ backgrounds/   ← 将背景图片放在这里
     ```
       使用完整的HA URL引用主页YAML文件中的文件：
       `http://iphaos:porthaos/local/homepage/icons/example.ico (示例URL：http://192.168.254.212:8123/local/homepage/icons/sonarr.ico`
   - 书签yaml示例：
     ```
     - 组A:
      - Sonarr:
        icon: http://192.168.254.212:8123/local/homepage/icons/sonarr.ico
        href: http://sonarr.host/
        description: 系列管理
     ```
   - 更多关于图标/图片/背景的信息：https://gethomepage.dev/configs/services/#icons 和 https://gethomepage.dev/configs/settings/#background-image

4. 版本编号：
   - 使用 **Vx.x.x.x** 格式。
   - 前三个数字遵循官方主页版本（例如：`1.5.0`）。
   - 最后一个数字用于此Home Assistant附加组件的更改（例如：`1.5.0.1`）。

## 已知问题
- 目前没有。

## 安装
1. [添加我的附加组件仓库][repository] 到你的 Home Assistant 附加组件。
2. 安装这个附加组件。
3. 根据需要编辑附加组件配置。目前你只能更改暴露端口，默认为3000。
4. 如果你需要 /var/run/docker.sock 或自定义图标/图片，请参考上述注意事项。
5. 启动附加组件。
6. 完成，享受！

## 编辑主页配置文件
1. 使用文件编辑器附加组件或通过SFTP连接到你的 Home Assistant。
2. 导航到 addon_config 文件夹。
3. 打开主页附加组件的文件夹，例如，xxxxxxx_homepage（xxxxxxx是随机数字）。
4. 文件夹结构应该如下：/addon_config/abcd123_homepage/。
5. 编辑主页的配置文件。有关主页配置的更多信息，请参阅：https://gethomepage.dev/configs/

## 故障排除

| 问题 | 可能的原因 | 解决方案 |
|---------|----------------|----------|
| **附加组件在首次/全新安装后只显示“开始”按钮** | Home Assistant Supervisor UI 在首次安装后有时无法正确刷新 | 刷新页面（F5）或再次点击 **开始**。然后，完整的控制按钮（`停止`、`重启`、`卸载`、`重建`、`打开WebUI`）将出现。 |
| **使用 `/local/homepage/icons/...` 时出现404** | 文件不在正确的宿主机目录中，或者 Home Assistant 尚未重新加载静态文件 | 确保文件放置在 `/config/www/homepage/icons/`。重启 Home Assistant（核心），以便重新加载 `/local/` 静态文件。 |
| **旧的图标或图片仍然显示** | 浏览器或服务器缓存 | 在浏览器中强制硬刷新（Ctrl+F5）或重命名文件（例如，`favicon_v2.ico`）。 |
| **主页上图标/图片未显示** | 主页容器无法访问 `http://<ha-ip>:8123/local/...` 或URL不正确 | 对于图标/图片，始终在YAML配置中使用完整的Home Assistant URL和端口8123。 |
| **无法上传文件** | 权限问题或上传位置错误 | 确保你通过SFTP、文件编辑器或其他文件管理器具有对 `/config/www/homepage/...` 的写权限。 |
| **路径或拼写错误** | 文件夹或文件名中的拼写错误 | 仔细检查文件夹名、文件扩展名和大小写敏感性（Linux路径是大小写敏感的）。 |

## 屏幕截图

![预览][preview]

<!--
资产
-->

[aarch64-shield]: https://img.shields.io/badge/aarch64-yes-green.svg
[amd64-shield]: https://img.shields.io/badge/amd64-yes-green.svg


[version]: https://img.shields.io/badge/version-v1.7.0--0-blue.svg
[production-ready]: https://img.shields.io/badge/Production%20ready-yes-green.svg

[Homepage-update-shield]: https://img.shields.io/badge/Updated%20on-2025--11--12-blue.svg

[repository]: https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https://github.com/bytenoodle/hassioaddon
[preview]: https://raw.githubusercontent.com/gethomepage/homepage/refs/heads/dev/images/1.png
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
