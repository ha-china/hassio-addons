# Home Assistant Community Add-on: Grocy

[Grocy][grocy] - 超出您冰箱的ERP是一个强大的家庭杂货和家庭管理解决方案，提供以下功能：

- 库存管理
- 购物清单
- 食谱
- 家务和任务
- 库存
- 还有更多。

[试用Grocy的在线演示][grocy-demo]。

## 安装

此附加组件的安装非常简单，与安装任何其他Home Assistant附加组件没有区别。

1. 点击下面的Home Assistant My按钮以打开您的Home Assistant实例中的附加组件。

   [![在您的Home Assistant实例中打开此附加组件。][addon-badge]][addon]

2. 点击“安装”按钮以安装附加组件。
3. 启动“Grocy”附加组件。
4. 检查“Grocy”附加组件的日志，以查看一切是否正常。
5. 点击“打开WEB界面”按钮进入Grocy的界面。
6. 默认登录为用户：`admin` 密码：`admin`。
7. 享受此附加组件！

## 配置

**注意**：_更改配置时，请记得重新启动附加组件。_

附加组件配置示例：

```yaml
culture: en
currency: USD
entry_page: stock
features:
  batteries: true
  calendar: true
  chores: true
  equipment: true
  recipes: true
  shoppinglist: true
  stock: true
  tasks: true
tweaks:
  chores_assignment: true
  multiple_shopping_lists: true
  stock_best_before_date_tracking: true
  stock_location_tracking: true
  stock_price_tracking: true
  stock_product_freezing: true
  stock_product_opened_tracking: true
  stock_count_opened_products_against_minimum_stock_amount: true
log_level: info
ssl: false
certfile: fullchain.pem
keyfile: privkey.pem
```

**注意**：_这只是一个示例，请勿复制粘贴！创建您自己的！_

### 选项：`log_level`

`log_level`选项控制附加组件的日志输出级别，可以更改为更详细或更简洁，这在您处理未知问题时可能很有用。可能值为：

- `trace`：显示每个细节，如所有调用的内部函数。
- `debug`：显示详细的调试信息。
- `info`：正常（通常）有趣的事件。
- `warning`：不属于错误的特殊情况。
- `error`：运行时错误，不需要立即采取行动。
- `fatal`：出现严重错误。附加组件变得无法使用。

请注意，每个级别自动包括来自更严重级别的日志消息，例如，`debug`还显示`info`消息。默认情况下，`log_level`设置为`info`，这是推荐的设置，除非您正在排查问题。

### 选项：`ssl`

启用/禁用Grocy面板的SSL（HTTPS）。设置为`true`以启用，设置为`false`则禁用。

### 选项：`certfile`

用于SSL的证书文件。

**注意**：_文件必须存储在`/ssl/`中，这是默认值_

### 选项：`keyfile`

用于SSL的私钥文件。

**注意**：_文件必须存储在`/ssl/`中，这是默认值_

### 选项：`culture`

用于设置语言。可选择：

- `ca`（加泰罗尼亚语）
- `cs`（捷克语）
- `da`（丹麦语）
- `de`（德语）
- `el_GR`（希腊语 - 希腊）
- `en`（英语）
- `en_GB`（英语 - 英国）
- `es`（西班牙语）
- `fi`（芬兰语）
- `fr`（法语）
- `he_IL`（希伯来语 - 以色列）
- `hu`（匈牙利语）
- `it`（意大利语）
- `ja`（日语）
- `ko_KR`（韩语 - 韩国）
- `nl`（荷兰语）
- `no`（挪威语）
- `pl`（波兰语）
- `pt_BR`（葡萄牙语 - 巴西）
- `pt_PT`（葡萄牙语 - 葡萄牙）
- `ru`（俄语）
- `sk_SK`（斯洛伐克语 - 斯洛伐克）
- `sv_SE`（瑞典语 - 瑞典）
- `ta`（泰米尔语）
- `tr`（土耳其语）
- `zh_CN`（中文 - 中国）
- `zh_TW`（中文 - 台湾）

### 选项：`currency`

确定在Grocy界面中显示的货币，由ISO4217三位数货币代码指定。

示例：`USD`、`CAD`、`GBP`或`EUR`。

### 选项：`entry_page`

如有需要，允许您指定自定义主页。

您可以使用以下值之一：

- `batteries`
- `calendar`
- `chores`
- `equipment`
- `mealplan`
- `recipes`
- `shoppinglist`
- `stock`
- `tasks`

默认情况下，主页设置为库存概览。

### 选项：`features`

用于启用或禁用Grocy中的功能。禁用的功能在网页界面中隐藏。可以启用或禁用以下功能：

- `batteries`
- `calendar`
- `chores`
- `equipment`
- `recipes`
- `shoppinglist`
- `stock`
- `tasks`

设置为`true`以启用，设置为`false`则禁用。

### 选项：`tweaks`

这些选项用于调整Grocy的核心行为的某些部分。可以启用或禁用以下子特性：

- `chores_assignment`
- `multiple_shopping_lists`
- `stock_best_before_date_tracking`
- `stock_location_tracking`
- `stock_price_tracking`
- `stock_product_freezing`
- `stock_product_opened_tracking`
- `stock_count_opened_products_against_minimum_stock_amount`

设置为`true`以启用，设置为`false`则禁用。

以下子特性可指定一个星期几（0-6），其中0表示星期日：

- `calendar_first_day_of_week`
- `meal_plan_first_day_of_week`

### 选项：`grocy_ingress_user`

允许您指定一个默认的入口用户（例如`admin`）。

如果未设置入口用户，则使用默认的登录身份验证。

## 已知问题和限制

- Grocy支持提供自定义查找资源，以根据产品条形码在互联网上查找信息。当前尚未得到附加组件的支持。

## 更新日志和发布

本仓库使用[GitHub的发布][releases]功能来保持变更日志。

发布基于[语义版本控制][semver]，并采用`MAJOR.MINOR.PATCH`格式。简而言之，版本将根据以下内容进行递增：

- `MAJOR`：不兼容或重大更改。
- `MINOR`：向后兼容的新功能和增强。
- `PATCH`：向后兼容的错误修复和软件包更新。

## 支持

有问题吗？

您有几种选择可以获得答案：

-  [Home Assistant Community Add-ons Discord聊天服务器][discord]，用于附加组件支持和功能请求。
-  [Home Assistant Discord聊天服务器][discord-ha]，用于一般的Home Assistant讨论和问题。
-  Home Assistant [社区论坛][forum]。
-  加入[Reddit子版块][reddit]中的[/r/homeassistant][reddit]。

您也可以在这里[打开一个问题][issue] GitHub。

## 作者与贡献者

本仓库的原始设置由[Franck Nijhof][frenck]完成。

有关所有作者和贡献者的完整列表，
请查看[贡献者页面][contributors]。

## 许可证

MIT许可证

版权所有 (c) 2019-2025 Franck Nijhof

特此免费授权，任何获得本软件及相关文档文件（“软件”）副本的人，可以不受限制地处理该软件，包括但不限于使用、复制、修改、合并、发布、分发、再许可和/或出售该软件的副本，并允许被提供软件的人这样做，前提是满足以下条件：

上述版权声明和本权限声明应包含在所有副本或软件的实质性部分中。

本软件按“原样”提供，不做任何种类的担保，无论明示或暗示，包括但不限于对适销性、特定用途的适用性和不侵权的担保。在任何情况下，作者或版权持有人均不对因使用本软件或与本软件的其他交易而造成的任何索赔、损害或其他责任承担责任，无论是在合同诉讼、侵权诉讼或其他情况下。

[addon-badge]: https://my.home-assistant.io/badges/supervisor_addon.svg
[addon]: https://my.home-assistant.io/redirect/supervisor_addon/?addon=a0d7b954_grocy&repository_url=https%3A%2F%2Fgithub.com%2Fhassio-addons%2Frepository
[alpine-packages]: https://pkgs.alpinelinux.org/packages
[contributors]: https://github.com/hassio-addons/addon-grocy/graphs/contributors
[discord-ha]: https://discord.gg/c5DvZ4e
[discord]: https://discord.me/hassioaddons
[forum]: https://community.home-assistant.io/t/home-assistant-community-add-on-grocy/112422?u=frenck
[frenck]: https://github.com/frenck
[grocy-demo]: https://demo-en.grocy.info
[grocy]: https://grocy.info/
[issue]: https://github.com/hassio-addons/addon-grocy/issues
[python-packages]: https://pypi.org/
[reddit]: https://reddit.com/r/homeassistant
[releases]: https://github.com/hassio-addons/addon-grocy/releases
[semver]: https://semver.org/spec/v2.0.0.html