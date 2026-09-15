# Nginx Proxy Manager + 静态网页服务器

[Nginx Proxy Manager](https://nginxproxymanager.com/) 结合可配置的静态文件服务器，用于 Home Assistant。通过 Web UI（端口 81）管理反向代理和 SSL 证书，同时从您的 HA 存储中（端口 80）提供静态文件。

## 为什么需要此附加组件？

Home Assistant 内置的文件夹服务器存在以下限制：

- 只能同时从单个文件夹提供服务
- 没有反向代理功能
- 不支持 SSL/HTTPS
- HTTP 头和缓存控制有限
- 不支持 URL 重写或高级路由

此附加组件结合了完整的反向代理和合适的静态文件服务器，允许您从单个界面托管多个站点、管理 SSL 证书并将流量代理到其他服务。

[![打开您的 Home Assistant 实例并显示添加附加组件存储库对话框，其中已预先填写特定存储库 URL。](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2Falexbelgium%2Fhassio-addons)

## 功能

- 反向代理管理器（端口 81 上的 Web UI）
- 静态文件服务器（端口 80）
- HTTPS 支持（端口 443）
- 持久配置和 SSL 证书
- 支持 amd64 和 aarch64 架构

## 安装

1. 通过设置 → 附加组件 → 附加组件商店 → ⋮ → 管理存储库将此存储库添加到 Home Assistant（或使用上面的按钮）。
2. 安装 Nginx Proxy Manager + 静态网页服务器。
3. 配置选项（默认设置适用于首次运行）。
4. 启动附加组件。
5. 打开 `http://<HA_IP>:81` 以访问管理 UI。

## 配置

| 选项 | 默认值 | 描述 |
|--------|---------|-------------|
| `static_site_enabled` | `true` | 启用或禁用端口 80 上的静态文件服务器 |
| `static_site_root` | `/share/www` | 服务的静态文件路径 |
| `static_site_prefix` | `/` | 静态站点的 URL 前缀（例如，`/www` 对应 `http://host/www`） |
| `log_level` | `info` | 日志详细程度：`info`、`debug`、`warn` 或 `error` |

## 默认凭证

首次登录（端口 81）：

- 邮箱：`admin@example.com`
- 密码：`changeme`

首次登录后请更改这些凭证。

## 路径验证

路径在启动时进行验证以确保安全访问：

- `/share`、`/media`、`/config` – 完全支持（HA 会自动映射这些路径）
- `/mnt` – 允许但 HA 不会映射。如果文件不可访问，请在 `/share` 或 `/media` 下创建一个符号链接。
- `/`、`/etc`、`/bin`、`/lib`、`/proc`、`/sys` – 受阻（将阻止启动）

## 示例

**反向代理：**

1. 在 `http://<HA_IP>:81` 打开管理 UI
2. 添加指向另一个服务的代理主机
3. 通过 Let's Encrypt 配置 SSL（可选）

**静态网站：**

1. 将文件放置在 `/share/www`（或您配置的 `static_site_root`）
2. 在 `http://<HA_IP>:80/`（或您配置的 `static_site_prefix`）访问

您可以在同一端口上同时运行两者。

## 注意事项

- 包装 `jc21/nginx-proxy-manager` 上游镜像
- 状态持久化在 `/data`（由 HA Supervisor 管理）
- 自定义 AppArmor 配置文件限制系统访问
- 如有必要，可以直接通过 SSH 编辑 NPM 的数据库

## 问题

对于此附加组件的问题（而非上游 NPM 软件），请打开一个问题并标记 @ToledoEM。
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
