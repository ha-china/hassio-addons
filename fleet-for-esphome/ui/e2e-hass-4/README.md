# hass-4 冒烟测试

对作者使用的 hass-4 实例（`192.168.225.112`）运行端到端冒烟测试，并针对真实 ESP 设备（`cyd-office-info`）完整测试编译（compile）+ OTA（空中下载）路径。

这些测试故意与 `../e2e/` 中的仿真实验 Playwright 测试 **分离**：

- `../e2e/` 中的仿真实验测试在每次推送时于 CI 中运行，通过 `page.route()` 模拟 API 响应。它们运行速度快，并在隔离环境中验证 UI 行为。
- 这些 hass-4 测试涉及真实状态——它们会排队真实的编译任务、刷写真实的固件，并尾随（tail）真实设备的日志。它们不在 CI 中运行。它们会在 `push-to-hass-4.sh` 成功部署后自动运行。

## 运行

```bash
cd ha-addon/ui

# 默认值：HASS4_URL=http://192.168.225.112:8765, HASS4_TARGET=cyd-office-info.yaml
npm run test:e2e:hass-4

# 覆盖目标设备
HASS4_TARGET=living-room.yaml npm run test:e2e:hass-4

# 覆盖服务器 URL（例如在本地不同主机上运行）
HASS4_URL=http://192.168.1.42:8765 npm run test:e2e:hass-4

# 头部模式（注视浏览器）
npx playwright test --config=e2e-hass-4/playwright.config.ts --headed
```

## 配置

| Env var            | 默认值                        | 描述                                             |
|--------------------|-------------------------------|--------------------------------------------------|
| `HASS4_URL`        | `http://192.168.225.112:8765` | 运行着的 Add-on 的基础 URL（不是 HA Ingress URL——直接联系 Add-on） |
| `HASS4_TARGET`     | `cyd-office-info.yaml`        | 目标 ESPHome 配置文件文件名                      |
| `COMPILE_BUDGET_MS`| `480000` (8 minutes)          | 等待编译 + OTA 完成的最大时间（以毫秒计）         |
| `EXPECTED_VERSION` | `ha-addon/VERSION` 的内容      | 套件在服务器上期望的 Add-on 版本。如果 `/ui/api/server-info` 返回不同版本，第一个测试会快速失败，防止意外针对过时的部署运行测试。 |

## 版本安全检查

在运行任何其他测试之前，套件会从工作树中读取 `ha-addon/VERSION`，并通过 `/ui/api/server-info` 断言运行中的 Add-on 报告相同的版本。这可以防止在 `git pull` 后意外针对过时的部署进行测试。如果部署已过时，请先运行 `./push-to-hass-4.sh`。

## 测试用例

测试文件 `cyd-office-info.spec.ts` 运行四个顺序进行的用例：

1. **设备标签页加载** — 头渲染，版本徽章匹配预期版本，目标设备行可见。
2. **规划升级** — 通过 `/ui/api/queue` 快照最新的作业 ID，点击该行的“升级”按钮，轮询 API 直到出现新的作业 ID，然后确认队列行在 UI 中可见。
3. **编译 + 日志尾随** — 打开日志模态框，验证行流式进入 xterm 终端，然后轮询 `/ui/api/queue` 查找特定的作业 ID 直到其达到终端状态。断言最终状态为 `success` 且包含 `ota_result=success`。
4. **实时设备日志** — 打开行的汉堡菜单，点击“实时日志”，验证设备 API 将输出流式进入模态框。

由于它们共享服务器上的全局状态，测试以 **串行** 方式运行（`workers: 1`, `fullyParallel: false`）。

## 为何不使用 HA Ingress？

Add-on 除可通过 HA Ingress 访问外，还直接暴露端口 8765 给宿主网络。当直接访问时，`/ui/api/*` 端点不需要身份验证（这一点在 `dev-plans/SECURITY_AUDIT.md` 的 F-03 发现中有所记录）。

对于这些冒烟测试，直接使用 Add-on 端口是最简单的方法：无需 HA 登录流程，无需发现 Ingress 路径，无需处理令牌。如果您想测试 Ingress 路径本身，则需要设置 HA 长期有效访问令牌并遍历 HA 前端。

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
