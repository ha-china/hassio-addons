# prometheus_node_exporter

[![Lint](https://github.com/loganmarchione/hassos-addons/actions/workflows/lint.yaml/badge.svg)](https://github.com/loganmarchione/hassos-addons/actions/workflows/lint.yaml)
[![Build](https://github.com/loganmarchione/hassos-addons/actions/workflows/build.yaml/badge.svg)](https://github.com/loganmarchione/hassos-addons/actions/workflows/build.yaml)

由 \*NIX 内核暴露的硬件和 OS 指标的 Prometheus [Node Exporter](https://github.com/prometheus/node_exporter)。

## 安装

1. 添加我的 [仓库](https://github.com/loganmarchione/hassos-addons)。URL 是 `https://github.com/loganmarchione/hassos-addons`。
2. 在 Supervisor 插件商店中搜索 "Prometheus Node Exporter" 插件并安装它。
3. 在插件面板中禁用 "保护模式"。
4. 可选 - 检查插件的 "配置" 选项卡以进行任何更改。
5. 启动插件。
6. 检查插件的 "日志" 选项卡以查看是否一切顺利。
7. 要验证指标是否可用，请在浏览器中访问 `http://your_home_assistant_ip_address:9100/metrics`，或使用 curl：`curl -X GET http://your_home_assistant_ip_address:9100/metrics`。

## 配置

默认情况下，Prometheus Node Exporter 监听 TCP 端口 9100。

### HTTP 基本认证

[HTTP 基本认证](https://en.wikipedia.org/wiki/Basic_access_authentication)默认是禁用的。如果您想启用 HTTP 基本认证：

1. 将 `enable_basic_auth` 设置为 true
2. 输入 `basic_auth_user` 和 `basic_auth_pass`

### TLS

TLS 默认是禁用的。如果您想启用 TLS：

1. 将 `enable_tls` 设置为 true
2. 输入 `cert_file` 和 `cert_key`

⚠️ 注意：`cert_file` 和 `cert_key` 需要分别是一个 `/path/to/fullchain.pem` 和 `/path/to/privkey.pem` 的路径（`/config` 和 `/ssl` 被映射到这个插件）⚠️

### 命令行参数

此选项允许您直接将命令行参数传递给 Prometheus Node Exporter。这对于调整运行的 [收集器](https://github.com/prometheus/node_exporter/#collectors) 特别有用。例如，要禁用所有收集器（除了 `cpu` 收集器），可以使用此字符串：`--collector.disable-defaults --collector.cpu`。

## 使用（在 Prometheus 服务器中）

将以下内容添加到您 Prometheus 服务器上的 `/etc/prometheus/prometheus.yml` 配置文件：

```
scrape_configs:
  ...
  ...
  ...
  - job_name: 'homeassistant'
    static_configs:
    - targets: ['your_home_assistant_ip_address:9100']
    basic_auth:
      username: username_goes_here
      password: password_goes_here
```

以下 Prometheus 查询应该会返回数据：

```
node_uname_info{job="homeassistant"}
```

## 支持

- 在 `amd64` 和 `aarch64`（树莓派 4B）平台上进行了测试

## 许可证

进行中

## 已知问题

- [ ] "打开 Web UI" 按钮在 Home Assistant 后面有反向代理时不起作用。
- [x] 只在 `amd64` 构建上进行了测试。

## TODO

- [x] 添加 HTTP 基本认证
- [x] 添加输入纯文本密码而不是 bcyrpt-ed 哈希的能力
- [x] 添加 TLS
- [x] 根据 [这个评论](https://community.home-assistant.io/t/hello-world-example-addon-from-developer-docs-stopped-working-s6-overlay-issue/421486/7)，在仓库中设置容器镜像（DockerHub 或 GitHub）以便用户不必在每次安装时构建容器（这可以防止 [这个问题](https://github.com/loganmarchione/hassos-addons/issues/2)）
- [x] 调查此仓库的 CI/CD，特别是 [这个](https://github.com/home-assistant/actions) 和 [这个](https://github.com/hassio-addons/addon-glances/blob/main/.github/workflows/ci.yaml) 作为示例
- [ ] 调查删除 API 访问（例如，`hassio_api`、`homeassistant_api`、`auth_api`）以提升我的评分

## 常见问题解答

- Home Assistant 已经有 Prometheus 集成吗？
  - 是的，但官方集成 [https://www.home-assistant.io/integrations/prometheus/](https://www.home-assistant.io/integrations/prometheus/) 只暴露与实体相关的指标，而不是主机相关的指标。
- 已经有一个 Prometheus 插件吗？
  - 是的，但那个 [插件](https://github.com/hassio-addons/addon-prometheus) 是用于 Prometheus 服务器的，而不是节点导出器。
- 为什么这个插件需要这么多权限？
  - 该插件需要访问主机级别的指标（CPU、内存、磁盘等）。因此，我请求了所有可能的权限。请在运行此插件之前检查该插件的代码。
- 当我在 `http://your_home_assistant_ip_address:9100/metrics` 查看 my scrape 配置时，为什么看到 `nodename="0d869efa-prometheus-node-exporter"`？有关更多详细信息，请参阅 [这个问题](https://github.com/loganmarchione/hassos-addons/issues/21)，但据我所知，它不能在插件内更改。相反，您应该更新您的 Prometheus 服务器配置以添加一个 `nodename` 标签：
  ```
    - job_name: 'homeassistant'
    static_configs:
      - targets: ['hass02.internal.mydomain.com:9100']
        labels:
          nodename: 'homeassistant'
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
