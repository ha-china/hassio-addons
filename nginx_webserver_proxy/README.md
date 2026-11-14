# Nginx Proxy Manager + 静态 Web 服务器

这是一个为 Home Assistant 配置的 Nginx Proxy Manager [Nginx Proxy Manager](https://nginxproxymanager.com/)，带有可配置的静态文件服务器。可以通过 Web 界面（端口 81）管理反向代理和 SSL 证书，同时从 HA 存储（端口 80）提供静态文件服务。

## 为什么要使用这个附加组件？

Home Assistant 内置的文件夹服务器存在以下限制：

- 一次只能从一个文件夹提供服务
- 无反向代理功能
- 不支持 SSL/HTTPS
- HTTP 头部和缓存控制的有限支持
- 不支持 URL 重写或高级路由

该附加组件将完整的反向代理与正规的静态文件服务器结合在一起，允许您在一个界面中托管多个网站、管理 SSL 证书，并将流量代理到其他服务。

[![打开您的 Home Assistant 实例并显示附加组件仓库对话框，且预填充了特定仓库 URL。](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2Falexbelgium%2Fhassio-addons)

## 功能特性

- 反向代理管理器（Web 界面位于端口 81）
- 静态文件服务器（端口 80）
- HTTPS 支持（端口 443）
- 持久化配置和 SSL 证书
- 兼容 amd64 和 aarch64 架构

## 安装步骤

1. 通过 设置 → 附加组件 → 附加组件商店 → ⋮ → 管理仓库（或使用上方按钮）将此仓库添加到 Home Assistant。
2. 安装 Nginx Proxy Manager + 静态 Web 服务器。
3. 配置选项（首次运行默认选项即可使用）。
4. 启动附加组件。
5. 打开 `http://<HA_IP>:81` 访问管理界面。

## 配置选项

| 选项 | 默认值 | 描述 |
|--------|---------|-------------|
| `static_site_enabled` | `true` | 启用或禁用端口 80 上的静态文件服务器 |
| `static_site_root` | `/share/www` | 提供静态文件服务的路径 |
| `static_site_prefix` | `/` | 静态网站的 URL 前缀（例如 `/www` 对应 `http://host/www`） |
| `log_level` | `info` | 日志详细程度：`info`、`debug`、`warn` 或 `error` |

## 默认凭据

首次登录（端口 81）：

- 邮箱：`admin@example.com`
- 密码：`changeme`

请在首次登录后修改这些凭据。

## 路径验证

启动时对路径进行验证以确保安全访问：

- `/share`、`/media`、`/config` – 完全支持（HA 自动映射这些路径）
- `/mnt` – 允许但不会被 HA 映射。如果文件无法访问，请在 `/share` 或 `/media` 下创建软链接。
- `/`、`/etc`、`/bin`、`/lib`、`/proc`、`/sys` – 被阻止（将会阻止启动）

## 示例

**反向代理：**

1. 在 `http://<HA_IP>:81` 打开管理界面
2. 添加指向其他服务的代理主机
3. 通过 Let's Encrypt 配置 SSL（可选）

**静态网站：**

1. 将文件放置在 `/share/www`（或您配置的 `static_site_root`）
2. 在 `http://<HA_IP>:80/`（或您配置的 `static_site_prefix`）访问

您可以在相同的端口上同时运行这两种模式。

## 注意事项

- 封装了 `jc21/nginx-proxy-manager` 上游镜像
- 状态存储在 `/data`（由 HA Supervisor 管理）
- 自定义 AppArmor 配置文件限制了系统访问权限
- 如需编辑，可通过 SSH 直接修改 NPM 的数据库

## 问题反馈

对于此附加组件（非上游 NPM 软件）的问题，请开启 Issue 并标记 @ToledoEM。

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
