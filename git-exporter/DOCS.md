# 配置

```yaml
repository:
  url: <你的代码库路径>
  username: user
  password: pass
  pull_before_push: true
  commit_message: 'Home Assistant Git Exporter'
  branch_name: 'main'
export:
  lovelace: true
  addons: true
  esphome: true
  node_red: true
checks:
  enabled: true
  check_for_secrets: true
  check_for_ips: true
exclude:
  - '*.db'
  - '*.log'
  - __pycache__
  - deps/
  - known_devices.yaml
  - tts/
  - '*.db-shm'
  - '*.db-wal'
  - '*.gz'
secrets: []
allowed_secrets: []
dry_run: false
```

### `repository.url`

任何指向你的git代码库的https URL。(目前不支持SSH)

### `repository.email`（可选）

提交作者使用的电子邮件地址。

### `repository.username`

你的https认证用户名。

### `repository.password`

你的代码库的密码或[__访问令牌__](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens)。

### `repository.pull_before_push`

是否应该先拉取代码库并在顶部提交新状态？

### `repository.commit_message`

下一个提交的提交信息。

### `repository.branch_name`

代码库的工作分支。

### `repository.ssl_verification`（可选，默认为true）

使用此选项禁用ssl验证。可用于自签名证书。__仅在你知道自己在做什么时使用此选项__


### `export.lovelace`

启用/禁用对lovelace配置的导出。

### `export.addons`

启用/禁用对supervisor addons配置的导出。

### `export.esphome`

启用/禁用对esphome配置的导出。

### `export.node_red`

启用/禁用对Node-RED流程的导出。
使用[node-red-contrib-credentials](https://flows.nodered.org/node/node-red-contrib-credentials)来保护你的凭据。


### `checks.enabled`

启用/禁用导出文件中的检查。

### `checks.check_for_secrets`

将你的秘密值添加到检查中。

### `checks.check_for_ips`

将ip和mac地址的模式添加到搜索中。


### `exclude`

应从配置导出中排除的文件/文件夹。

默认情况下，以下文件夹和文件会被排除同步：

* `secrets.yaml`（秘密已被清除）
* `.cloud`
* `.storage`

### `secrets`

将检查的额外秘密。

### `allowed_secrets`

将被允许的额外秘密，不会导致秘密检查失败。

### `dry_run`

仅显示更改，不进行提交或推送。


## 已知限制

`check_for_secrets`使用一个git插件，该插件使用正则表达式进行模式匹配。
该插件的一个限制是，使用括号（如`[`，`]`，`{`，`}`，`(`和`)`）的秘密可能会导致意外行为和崩溃。

如果在秘密检查期间addon失败，并且错误来自grep（即`grep: Unmatched [, [^, [:, [., or [=`），
请更改包含括号的密码或将`check_for_secrets`设置为`false`。