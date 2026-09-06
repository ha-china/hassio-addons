# Sambanas2 测试

此目录包含 Sambanas2 Home Assistant 插件的测试脚本。

## 测试脚本

### 二进制升级测试

两个测试脚本验证 `check-srat-update/run` 中的二进制自我升级逻辑：

#### 1. 单元测试 (`test-binary-upgrade.sh`)

纯 bash 单元测试，用于版本提取、比较和升级决策逻辑。

**要求：**
- 基础 bash 工具 (`sort`, `sed`, `tr`)
- 不需要编译器

**测试内容：**
- Semver 验证（带/不带 'v' 前缀，预发布标签）
- 版本规范化
- 使用 `sort -V` 进行版本比较
- 升级决策工作流程

**运行方法：**
```bash
./test-binary-upgrade.sh
```

**示例输出：**
```
=== 测试 semver 验证 ===
✓ 有效 semver: 1.2.3
✓ 有效 semver with 'v': v1.2.3
✓ 有效 semver with prerelease: v2025.12.0-dev.8

=== 测试摘要 ===
Passed: 19
Failed: 0

所有测试通过！
```

#### 2. 集成测试 (`test-binary-upgrade-integration.sh`)

使用包含 `.note.metadata` 部分的实际 ELF 二进制文件的端到端测试。

**要求：**
- `gcc`（编译测试二进制文件）
- `objdump`（来自 binutils）

**测试内容：**
- 创建包含嵌入式版本元数据的 ELF 二进制文件
- 使用 `objdump` 从 `.note.metadata` 提取版本
- 完整的升级工作流程：
  - 新版本将被升级
  - 旧版本不会被升级
  - 从真实二进制文件中提取版本

**运行方法：**
```bash
./test-binary-upgrade-integration.sh
```

如果 `gcc` 不可用，测试将优雅地跳过并显示消息。

**示例输出：**
```
=== 创建带有版本的模拟二进制文件 ===
✓ 创建源二进制文件：srat-cli v2025.12.0
✓ 创建升级二进制文件：srat-cli v2025.12.1（较新）

=== 模拟升级工作流程 ===
  将 srat-cli 从 2025.12.0 升级到 2025.12.1
  跳过 srat-server（1.4.0 不比 1.5.0 新）
✓ 正确升级了 1 个二进制文件（srat-cli）
✓ 正确跳过了 1 个二进制文件（srat-server - 更旧版本）

所有集成测试通过！
```

## 其他测试脚本

### ZFS 输出测试 (`test-zfs-support-output.sh`)

用于 `modprobe/run` 的 ZFS 支持输出逻辑的单元测试。

**测试内容：**
- 使用 `zpool` 版本输出明确提供时 ZFS 可用
- 当 `zpool` 版本不可用时，从内核检测到 ZFS 可用
- 当文件系统条目缺失时 ZFS 不可用

**运行方法：**
```bash
./test-zfs-support-output.sh
```

### `buildLocal.sh`
在本地构建插件容器镜像以进行测试。

### `runLocal.sh`
使用测试配置运行本地构建的插件容器。

### `options.json`
本地测试的示例配置。

## 运行所有测试

要运行升级测试：

```bash
# 单元测试（始终可用）
./test-binary-upgrade.sh

# 集成测试（需要 gcc + objdump）
./test-binary-upgrade-integration.sh

# ZFS 输出单元测试
./test-zfs-support-output.sh
```

## CI/CD 集成

这些测试可以添加到 CI 管道中：

```yaml
# 示例 GitHub Actions 任务
test:
  runs-on: ubuntu-latest
  steps:
    - uses: actions/checkout@v3
    - name: 安装依赖
      run: sudo apt-get update && sudo apt-get install -y binutils gcc
    - name: 运行单元测试
      run: ./sambanas2/test/test-binary-upgrade.sh
    - name: 运行集成测试
      run: ./sambanas2/test/test-binary-upgrade-integration.sh
    - name: 运行 ZFS 输出测试
      run: ./sambanas2/test/test-zfs-support-output.sh
```

## 使用真实二进制文件进行手动测试

要手动测试升级逻辑：

1. **准备带有嵌入式版本的测试二进制文件：**
   ```bash
   # 您的 srat 二进制文件应该有 .note.metadata 部分
   objdump -s --section .note.metadata /usr/local/bin/srat-cli
   ```

2. **设置升级目录：**
   ```bash
   mkdir -p /data/upgrade
   # 将 srat-cli 的新版本复制到那里
   cp /path/to/newer/srat-cli /data/upgrade/
   ```

3. **触发升级检查：**
   - 重启插件
   - 检查日志中的升级消息：
     ```
     [INFO] 将 srat-cli 从 2025.12.0 升级到 2025.12.1
     ```

## 故障排除

**"objdump 未找到"**
- 安装 binutils：`apt-get install binutils`（Debian/Ubuntu）或 `apk add binutils`（Alpine）

**"gcc 不可用"**
- 集成测试将优雅地跳过
- 如果您需要完整的测试，请安装 gcc：`apt-get install gcc`

**版本提取返回空**
- 验证二进制文件有 `.note.metadata` 部分：`objdump -s --section .note.metadata <binary>`
- 检查该部分包含带有 "version" 字段的 JSON

**版本比较不正确**
- 确保版本遵循 semver：`MAJOR.MINOR.PATCH`（可选 `v` 前缀和 `-prerelease`）
- 检查 `sort -V` 在您系统上的行为（版本排序）
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
