# Sambanas2 测试

此目录包含 Sambanas2 Home Assistant 插件的测试脚本。

## 测试脚本

### 二进制升级测试

两个测试脚本验证 `check-srat-update/run` 中的二进制自升级逻辑：

#### 1. 单元测试 (`test-binary-upgrade.sh`)

用于版本号提取、比较和升级决策逻辑的纯 Bash 单元测试。

**要求：**
- 基本 Bash 工具（`sort`、`sed`、`tr`）
- 不需要编译器

**测试内容：**
- Semver 验证（带/不带'v'前缀，含预发布标签）
- 版本归一化
- 使用 `sort -V` 进行版本比较
- 升级决策工作流

**运行方式：**
```bash
./test-binary-upgrade.sh
```

**示例输出：**
```
=== Testing semver validation ===
✓ Valid semver: 1.2.3
✓ Valid semver with 'v': v1.2.3
✓ Valid semver with prerelease: v2025.12.0-dev.8

=== Test Summary ===
Passed: 19
Failed: 0

All tests passed!
```

#### 2. 集成测试 (`test-binary-upgrade-integration.sh`)

带有包含 `.note.metadata` 段的实际 ELF 二进制文件的端到端测试。

**要求：**
- `gcc`（用于编译测试二进制文件）
- `objdump`（来自 binutils）

**测试内容：**
- 创建带有嵌入式版本信息的 ELF 二进制文件
- 使用 `objdump` 从 `.note.metadata` 中提取版本号
- 完整升级工作流：
  - 新版本**会**被升级
  - 旧版本**不会**被升级
  - 从真实二进制中提取版本

**运行方式：**
```bash
./test-binary-upgrade-integration.sh
```
如果未安装 `gcc`，测试将友好地跳过并显示消息。

**示例输出：**
```
=== Creating mock binaries with versions ===
✓ Created source binary: srat-cli v2025.12.0
✓ Created upgrade binary: srat-cli v2025.12.1 (newer)

=== Simulating upgrade workflow ===
  Upgraded srat-cli from 2025.12.0 to 2025.12.1
  Skipped srat-server (1.4.0 not newer than 1.5.0)
✓ Correctly upgraded 1 binary (srat-cli)
✓ Correctly skipped 1 binary (srat-server - older version)

All integration tests passed!
```

## 其他测试脚本

### ZFS 输出测试 (`test-zfs-support-output.sh`)

用于 `modprobe/run` 的 ZFS 支持输出逻辑的单元测试。

**测试内容：**
- 带有显式 `zpool` 版本输出的可用 ZFS
- 当 `zpool` 版本不可用时，从内核检测获取的可用 ZFS
- 当文件系统条目缺失时，ZFS 不可用

**运行方式：**
```bash
./test-zfs-support-output.sh
```

### `buildLocal.sh`
在本地构建加-ons 镜像以进行测试。

### `runLocal.sh`
使用测试配置运行本地构建的加-ons 容器。

### `options.json`
本地测试的示例配置。

## 运行所有测试

运行两个升级测试：

```bash
# 单元测试（始终可用）
./test-binary-upgrade.sh

# 集成测试（需要 gcc + objdump）
./test-binary-upgrade-integration.sh

# ZFS 输出单元测试
./test-zfs-support-output.sh
```

## CI/CD 集成

这些测试可以添加到 CI 流水线中：

```yaml
# 示例 GitHub Actions 工作流
test:
  runs-on: ubuntu-latest
  steps:
    - uses: actions/checkout@v3
    - name: Install dependencies
      run: sudo apt-get update && sudo apt-get install -y binutils gcc
    - name: Run unit tests
      run: ./sambanas2/test/test-binary-upgrade.sh
    - name: Run integration tests
      run: ./sambanas2/test/test-binary-upgrade-integration.sh
    - name: Run ZFS output tests
      run: ./sambanas2/test/test-zfs-support-output.sh
```

## 使用真实二进制文件进行手动测试

手动测试升级逻辑：

1. **准备带有嵌入版本的测试二进制文件：**
   ```bash
   # 您的 srat 二进制文件应包含 .note.metadata 段
   objdump -s --section .note.metadata /usr/local/bin/srat-cli
   ```

2. **设置升级目录：**
   ```bash
   mkdir -p /data/upgrade
   # 将新版本的 srat-cli 复制到哪里
   cp /path/to/newer/srat-cli /data/upgrade/
   ```

3. **触发升级检查：**
   - 重启插件
   - 查看日志中的升级消息：
     ```
     [INFO] Upgraded srat-cli from 2025.12.0 to 2025.12.1
     ```

## 故障排除

**"objdump not found"**
- 安装 binutils：`apt-get install binutils` (Debian/Ubuntu) 或 `apk add binutils` (Alpine)

**"gcc not available"**
- 集成测试将友好地跳过
- 如果需要完整测试，安装 gcc：`apt-get install gcc`

**版本提取返回空值**
- 验证二进制文件是否包含 `.note.metadata` 段：`objdump -s --section .note.metadata <binary>`
- 检查该段是否包含包含 "version" 字段的 JSON

**版本比较不正确**
- 确保版本号遵循 Semver 格式：`MAJOR.MINOR.PATCH`（可选 'v' 前缀和 `-prerelease`）
- 检查您系统上的 `sort -V` 行为（版本排序）

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
