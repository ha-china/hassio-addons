# hass-4 烟雾测试

针对作者 hass-4 实例 (`192.168.225.112`) 运行的端到端烟雾测试，并针对真实的 ESP 设备 (`cyd-office-info`) 进行完整的编译 + OTA 路径测试。

这些测试有意与 `../e2e/` 中的模拟 Playwright 测试 **分开**：

- `../e2e/` 中的模拟测试在每次推送时在 CI 上运行，通过 `page.route()` 模拟 API 响应。它们运行速度快，并在隔离的环境中验证 UI 行为。
- 这些 hass-4 测试会触及真实的状态 — 它们会排队真实的编译作业，烧录真实的固件，并追踪真实的设备日志。它们不在 CI 中运行。在 `push-to-hass-4.sh` 部署成功后，它们会自动运行。

## 运行

```bash
cd ha-addon/ui

# 默认值：HASS4_URL=http://192.168.225.112:8765, HASS4_TARGET=cyd-office-info.yaml
npm run test:e2e:hass-4

# 覆盖目标设备
HASS4_TARGET=living-room.yaml npm run test:e2e:hass-4

# 覆盖服务器 URL（例如，在不同的主机上本地运行）
HASS4_URL=http://192.168.1.42:8765 npm run test:e2e:hass-4

# 带有浏览器界面的模式（监视浏览器）
npx playwright test --config=e2e-hass-4/playwright.config.ts --headed
```

## 配置

| 环境变量            | 默认值                       | 描述                                       |
|--------------------|-------------------------------|---------------------------------------------------|
| `HASS4_URL`        | `http://192.168.225.112:8765` | 运行中插件的基 URL（NOT HA Ingress URL — 直接与插件通信） |
| `HASS4_TARGET`     | `cyd-office-info.yaml`        | 目标 ESPHome 配置的文件名             |
| `COMPILE_BUDGET_MS`| `480000` (8 分钟)          | 等待编译 + OTA 完成的最大时间    |
| `EXPECTED_VERSION` | `ha-addon/VERSION` 中的内容 | 测试套件期望服务器上的插件版本。如果 `/ui/api/server-info` 返回不同的版本，第一个测试会快速失败，防止意外测试过过时的部署。 |

## 版本安全检查

在任何其他测试运行之前，套件会从工作树中读取 `ha-addon/VERSION` 并断言运行中的插件通过 `/ui/api/server-info` 报告相同的版本。这可以防止在 `git pull` 后意外测试过时的部署。如果部署过时，请首先运行 `./push-to-hass-4.sh`。

## 测试用例

测试文件 `cyd-office-info.spec.ts` 运行四个连续的测试用例：

1. **设备选项卡加载** — 标题栏渲染，版本徽章与预期版本匹配，目标设备行可见。
2. **计划升级** — 通过 `/ui/api/queue` 捕获最新的作业 ID，点击行的升级按钮，轮询 API 直至出现新的作业 ID，然后确认队列行在 UI 中可见。
3. **编译 + 日志追踪** — 打开日志对话框，验证行进入 xterm 终端，然后轮询 `/ui/api/queue` 直到特定作业 ID 达到终止状态。断言最终状态是 `success` 并且 `ota_result=success`。
4. **实时设备日志** — 打开行的汉堡菜单，点击实时日志，验证设备 API 将输出流式传输到对话框中。

测试以 **串行**（`workers: 1`，`fullyParallel: false`）的方式运行，因为它们在真实服务器上共享全局状态。

## 为什么不使用 HA Ingress？

该插件除了通过 HA Ingress 可用之外，还直接将端口 8765 暴露给主机网络。`/ui/api/*` 端点在直接访问时不需要身份验证（这在 `dev-plans/SECURITY_AUDIT.md` 中的发现 F-03 中有记录）。

对于这些烟雾测试，直接与插件端口通信是最简单的方法：没有 HA 登录流程，没有 Ingress 路径发现，没有令牌操作。如果你想要测试 Ingress 路径本身，你需要设置 HA 长期访问令牌并通过 HA 前端进行导航。
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
