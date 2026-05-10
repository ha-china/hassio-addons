# Nginx代理管理器+静态网页服务器

[Nginx代理管理器](https://nginxproxymanager.com/) 与可配置的静态文件服务器，适用于Home Assistant。通过Web界面（端口81）管理反向代理和SSL证书，同时从您的HA存储（端口80）提供静态文件。

## 为什么需要此附加组件？

Home Assistant内置的文件夹服务器存在以下限制：

- 只能一次从单个文件夹提供服务
- 没有反向代理功能
- 没有SSL/HTTPS支持
- HTTP头部和缓存控制有限
- 不支持URL重写或高级路由

此附加组件结合了完整的反向代理和适当的静态文件服务器，允许您从单个界面托管多个站点、管理SSL证书并将流量代理到其他服务。

[![打开您的Home Assistant实例并显示带有预填充特定存储库URL的添加附加组件存储库对话框](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2Falexbelgium%2Fhassio-addons)

## 功能

- 反向代理管理器（端口81上的Web UI）
- 静态文件服务器（端口80）
- HTTPS支持（端口443）
- 持久配置和SSL证书
- 支持amd64和aarch64

## 安装

1. 通过设置→附加组件→附加组件商店→⋮→管理存储库将此存储库添加到Home Assistant（或使用上面的按钮）。
2. 安装Nginx代理管理器+静态网页服务器。
3. 配置选项（默认设置适用于首次运行）。
4. 启动附加组件。
5. 打开 `http://<HA_IP>:81` 以访问管理UI。

## 配置

| 选项 | 默认值 | 描述 |
|------|--------|------|
| `static_site_enabled` | `true` | 启用或禁用端口80上的静态文件服务器 |
| `static_site_root` | `/share/www` | 从中提供静态文件的路径 |
| `static_site_prefix` | `/` | 静态站点的URL前缀（例如，`/www` 对应于 `http://host/www`） |
| `log_level` | `info` | 日志详细程度：`info`、`debug`、`warn` 或 `error` |

## 默认凭证

首次登录（端口81）：

- 邮箱：`admin@example.com`
- 密码：`changeme`

首次登录后更改这些凭证。

## 路径验证

在启动时验证路径以确保安全访问：

- `/share`、`/media`、`/config` – 完全支持（HA会自动映射这些路径）
- `/mnt` – 允许但不会被HA映射。如果文件不可访问，请在 `/share` 或 `/media` 下创建一个符号链接。
- `/`、`/etc`、`/bin`、`/lib`、`/proc`、`/sys` – 被阻止（将阻止启动）

## 示例

**反向代理：**

1. 在 `http://<HA_IP>:81` 打开管理UI
2. 添加一个指向另一个服务的代理主机
3. 通过Let's Encrypt配置SSL（可选）

**静态网站：**

1. 将文件放置在 `/share/www`（或您配置的 `static_site_root`）
2. 在 `http://<HA_IP>:80/`（或您配置的 `static_site_prefix`）上访问

您可以在同一端口上同时运行两者。

## 注意事项

- 包装 `jc21/nginx-proxy-manager` 上游镜像
- 状态持久化在 `/data`（由HA Supervisor管理）
- 定制的AppArmor配置文件限制系统访问
- 如有必要，可以直接通过SSH编辑NPM的数据库

## 问题

对于此附加组件的问题（非上游NPM软件），请打开一个问题并标记 @ToledoEM。
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
