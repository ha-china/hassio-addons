# Nginx Proxy Manager + 静态 Web 服务器

带有可配置的静态文件服务器，用于 Home Assistant 的 [Nginx Proxy Manager](https://nginxproxymanager.com/)。通过 Web 界面（端口 81）管理反向代理和 SSL 证书，同时从 HA 存储（端口 80）提供静态文件服务。

## 为什么选择这个插件？

Home Assistant 内置的文件夹服务器存在以下局限性：

- 一次只能从单一文件夹提供服务
- 无法进行反向代理
- 不支持 SSL/HTTPS
- 支持的 HTTP 头和缓存控制有限
- 不支持 URL 重写或高级路由

此插件将完整的反向代理与适当的静态文件服务器结合在一起，使您能够在单一界面中托管多个站点、管理 SSL 证书，并将流量代理到其他服务。

[![打开您的 Home Assistant 实例并显示带有预-filled 特定仓库 URL 的插件仓库对话框。](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2Falexbelgium%2Fhassio-addons)

## 特性

- 反向代理管理器（端口 81 上的 Web 界面）
- 静态文件服务器（端口 80）
- HTTPS 支持（端口 443）
- 持久化的配置和 SSL 证书
- 适用于 amd64 和 aarch64 架构

## 安装

1. 通过 设置 → 附加组件 → 插件商店 → ⋮ → 管理仓库（或使用上述按钮）将此仓库添加到 Home Assistant。
2. 安装 Nginx Proxy Manager + 静态 Web 服务器。
3. 配置选项（首次运行的默认设置即可工作）。
4. 启动插件。
5. 打开 `http://<HA_IP>:81` 以访问管理界面。

## 配置

| 选项 | 默认值 | 描述 |
|------|--------|------|
| `static_site_enabled` | `true` | 启用或禁用端口 80 上的静态文件服务器 |
| `static_site_root` | `/share/www` | 提供静态文件的根路径 |
| `static_site_prefix` | `/` | 静态网站的 URL 前缀（例如，对于 `http://host/www`，使用 `/www`） |
| `log_level` | `info` | 日志详细程度：`info`、`debug`、`warn` 或 `error` |

## 默认凭据

首次登录（端口 81）：

- 邮箱：`admin@example.com`
- 密码：`changeme`

首次登录时请更改这些凭据。

## 路径验证

在启动时对路径进行验证以确保安全访问：

- `/share`、`/media`、`/config` – 完全支持（HA 会自动映射这些路径）
- `/mnt` – 允许但不由 HA 映射。如果文件无法访问，请在 `/share` 或 `/media` 下创建符号链接。
- `/`、`/etc`、`/bin`、`/lib`、`/proc`、`/sys` – 被阻止（将阻止启动）

## 示例

**反向代理：**

1. 在 `http://<HA_IP>:81` 打开管理界面
2. 添加一个指向其他服务的代理服务主机
3. 可选通过 Let's Encrypt 配置 SSL

**静态网站：**

1. 将文件置于 `/share/www`（或配置的文件 `static_site_root`）
2. 在 `http://<HA_IP>:80/`（或配置前缀）访问

您可以在相同端口上同时运行两者。

## 注意事项

- 包裹 `jc21/nginx-proxy-manager` 上游镜像
- 状态持久化存储于 `/data`（由 HA Supervisor 管理）
- 自定义 AppArmor 配置文件限制系统访问
- 如需通过 SSH 直接编辑 NPM 的数据库

## 问题反馈

如果此插件遇到问题（上游 NPM 软件除外），请创建问题并标记 @ToledoEM。

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
