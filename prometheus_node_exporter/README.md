# prometheus_node_exporter

[![CI](https://github.com/loganmarchione/hassos-addons/actions/workflows/main.yml/badge.svg)](https://github.com/loganmarchione/hassos-addons/actions/workflows/main.yml)

Prometheus [Node Exporter](https://github.com/prometheus/node_exporter) for hardware and OS metrics exposed by \*NIX kernels.

## 安装

1. 添加我的 [仓库](https://github.com/loganmarchione/hassos-addons)。URL 是 `https://github.com/loganmarchione/hassos-addons`。
1. 在 Supervisor 插件商店中搜索 "Prometheus Node Exporter" 插件并安装它。
1. 在插件面板中禁用 "Protection mode"。
1. 可选 - 检查插件的 `Configuration` 标签，以进行任何您想要的变化。
1. 启动插件。
1. 检查插件的 `Logs` 标签，查看是否一切正常。
1. 要验证指标是否可用，请在浏览器中访问 `http://your_home_assistant_ip_address:9100/metrics`，或使用 curl：`curl -X GET http://your_home_assistant_ip_address:9100/metrics`。

## 配置

默认情况下，Prometheus Node Exporter 在 TCP 端口 9100 上监听。

### HTTP 基本认证

[HTTP Basic Auth](https://en.wikipedia.org/wiki/Basic_access_authentication) 默认禁用。如果您想启用 HTTP Basic Auth：

1. 将 `enable_basic_auth` 设置为 true
1. 输入 `basic_auth_user` 和 `basic_auth_pass`

### TLS

TLS 默认禁用。如果您想启用 TLS：

1. 将 `enable_tls` 设置为 true
1. 输入 `cert_file` 和 `cert_key`

⚠️ 注意 `cert_file` 和 `cert_key` 需要是 `/path/to/fullchain.pem` 和 `/path/to/privkey.pem`，分别 (`/config` 和 `/ssl` 映射到此插件) ⚠️

### 命令行参数

此选项允许您直接将命令行参数传递给 Prometheus Node Exporter。这对于调整运行的 [收集器](https://github.com/prometheus/node_exporter/#collectors) 特别有用。例如，要禁用所有收集器，除了 `cpu` 收集器，您可以使用此字符串：`--collector.disable-defaults --collector.cpu`。

## 使用（在 Prometheus 服务器中）

将以下内容添加到您的 Prometheus 服务器的 `/etc/prometheus/prometheus.yml` 配置文件中：

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

以下 Prometheus 查询应返回数据：

```
node_uname_info{job="homeassistant"}
```

## 支持

- 测试于 `amd64` 和 `aarch64`（Raspberry Pi 4B）平台

## 许可证

WIP

## 已知问题

- [ ] 当 Home Assistant 在反向代理后面时，"Open Web UI" 按钮不起作用。
- [x] 仅在 `amd64` 构建上测试。

## 待办事项

- [x] 添加 HTTP Basic Auth
- [x] 添加输入明文密码而不是 bcrypt 哈希的能力
- [x] 添加 TLS
- [x] 根据 [此评论](https://community.home-assistant.io/t/hello-world-example-addon-from-developer-docs-stopped-working-s6-overlay-issue/421486/7)，在注册表（DockerHub 或 GitHub）上设置容器镜像，以便用户在每次安装时不需要构建容器（这将防止 [此问题](https://github.com/loganmarchione/hassos-addons/issues/2)）
- [x] 调查此仓库的 CI/CD，特别是 [这个](https://github.com/home-assistant/actions) 和 [这个](https://github.com/hassio-addons/addon-glances/blob/main/.github/workflows/ci.yaml) 作为示例
- [ ] 调查减少 API 访问（例如 `hassio_api`、`homeassistant_api`、`auth_api`），以提高我的评分

## 常见问题

- Home Assistant 不已经有 Prometheus 集成了吗？
  - 是的，但 [官方集成](https://www.home-assistant.io/integrations/prometheus/) 仅暴露与实体相关的指标，而不是与主机相关的指标。
- 不已经有 Prometheus 插件了吗？
  - 是的，但那个 [插件](https://github.com/hassio-addons/addon-prometheus) 是用于 Prometheus 服务器，而不是节点导出器的。
- 为什么这个插件需要这么多权限？
  - 插件需要访问主机级指标（CPU、内存、磁盘等...）。因此，我请求了所有可能的权限。请在运行此插件之前检查此插件的代码。
- 当我在 `http://your_home_assistant_ip_address:9100/metrics` 查看我的 scrape 配置时，为什么 `nodename="0d869efa-prometheus-node-exporter"`？有关更多详细信息，请查看 [此问题](https://github.com/loganmarchione/hassos-addons/issues/21)，但据我所知，它不能从插件内部更改。相反，您应该更新您的 Prometheus 服务器配置以添加 `nodename` 标签：
  ```
    - job_name: 'homeassistant'
    static_configs:
      - targets: ['hass02.internal.mydomain.com:9100']
        labels:
          nodename: 'homeassistant'