## 环境变量

<!-- markdownlint-disable MD007 MD010 MD030 MD033 -->

有一些可选的环境变量可以用于自定义 Whoogle 实例。这些可以手动设置，或复制到 `whoogle.env` 中并根据您的首选部署方式启用：

- 本地运行：在运行之前设置 `WHOOGLE_DOTENV=1`
- 使用 `docker-compose`：取消注释 `env_file` 选项
- 使用 `docker build/run`：在您的命令中添加 `--env-file ./whoogle.env`

| 变量                      | 描述                                                                                      |
| ------------------------- | ----------------------------------------------------------------------------------------- |
| WHOOGLE_DOTENV            | 从 `whoogle.env` 加载环境变量                                                             |
| WHOOGLE_USER              | 基本身份验证的用户名。如果使用，必须同时设置 WHOOGLE_PASS。                                 |
| WHOOGLE_PASS              | 基本身份验证的密码。如果使用，必须同时设置 WHOOGLE_USER。                                 |
| WHOOGLE_PROXY_USER        | 代理服务器的用户名。                                                                      |
| WHOOGLE_PROXY_PASS        | 代理服务器的密码。                                                                        |
| WHOOGLE_PROXY_TYPE        | 代理服务器的类型。可以是 "socks5"、"socks4" 或 "http"。                                   |
| WHOOGLE_PROXY_LOC         | 代理服务器的位置（主机或 IP）。                                                            |
| EXPOSE_PORT               | Whoogle 将被暴露的端口。                                                                  |
| HTTPS_ONLY                | 强制使用 HTTPS。 （参见 [这里](https://github.com/benbusby/whoogle-search#https-enforcement)） |
| WHOOGLE_ALT_TW            | 当配置中启用站点替代时要使用的 twitter.com 替代。                                          |
| WHOOGLE_ALT_YT            | 当配置中启用站点替代时要使用的 youtube.com 替代。                                        |
| WHOOGLE_ALT_IG            | 当配置中启用站点替代时要使用的 instagram.com 替代。                                      |
| WHOOGLE_ALT_RD            | 当配置中启用站点替代时要使用的 reddit.com 替代。                                         |
| WHOOGLE_ALT_TL            | 要使用的 Google 翻译替代。这用于所有 "translate \_\_\_\_" 搜索。                          |
| WHOOGLE_ALT_MD            | 当配置中启用站点替代时要使用的 medium.com 替代。                                         |
| WHOOGLE_AUTOCOMPLETE      | 控制自动完成/搜索建议的可见性。默认开启 -- 使用 '0' 禁用                                 |
| WHOOGLE_MINIMAL           | 从所有搜索查询中移除除基本结果卡片以外的所有内容。                                        |
| WHOOGLE_CSP               | 设置一组默认的 'Content-Security-Policy' 头部                                          |
| WHOOGLE_RESULTS_PER_PAGE   | 设置每页的结果数量                                                                        |

### 配置环境变量

这些环境变量允许设置默认配置值，但可以通过主页配置菜单手动覆盖。这允许快捷方式在每次销毁/重建实例时保持相同的配置状态。

| 变量                           | 描述                                          |
| ------------------------------ | --------------------------------------------- |
| WHOOGLE_CONFIG_DISABLE         | 从 UI 隐藏配置并禁止客户端对配置进行更改      |
| WHOOGLE_CONFIG_COUNTRY         | 按托管国家过滤结果                            |
| WHOOGLE_CONFIG_LANGUAGE        | 设置界面语言                                  |
| WHOOGLE_CONFIG_SEARCH_LANGUAGE | 设置搜索结果语言                              |
| WHOOGLE_CONFIG_BLOCK           | 从搜索结果中屏蔽网站（使用逗号分隔的列表）  |
| WHOOGLE_CONFIG_THEME           | 设置主题模式（亮色、暗色或系统）            |
| WHOOGLE_CONFIG_SAFE            | 启用安全搜索                                  |
| WHOOGLE_CONFIG_ALTS            | 使用社交媒体网站替代（nitter, invidious, 等） |
| WHOOGLE_CONFIG_NEAR            | 将结果限制为仅靠近特定城市的结果            |
| WHOOGLE_CONFIG_TOR             | 使用 Tor 路由（如果可用）                    |
| WHOOGLE_CONFIG_NEW_TAB         | 始终在新标签中打开结果                       |
| WHOOGLE_CONFIG_VIEW_IMAGE      | 启用查看图像选项                              |
| WHOOGLE_CONFIG_GET_ONLY        | 仅使用 GET 请求进行搜索                      |
| WHOOGLE_CONFIG_URL             | 实例的根 URL (`https://<your url>/`)         |
| WHOOGLE_CONFIG_STYLE           | 用于样式的自定义 CSS（应为单行）              |

## 用法

与大多数搜索引擎相同，唯一的例外是按时间范围过滤。

要按时间范围过滤，请在搜索末尾附加 ":past <time>"，其中 <time> 可以是 `hour`、`day`、`month` 或 `year`。示例：`coronavirus updates :past hour`

## 额外步骤

### 设置 Whoogle 为您的主要搜索引擎

_注意：如果您使用反向代理来运行 Whoogle Search，请确保首页上的 "根 URL" 配置选项已设置为您的 URL，然后再进行以下步骤。_

浏览器设置：

- Firefox（桌面版）
  - 版本 89+
    - 导航到您的应用程序 URL，右键单击地址栏，并选择 "添加搜索引擎"。
  - 以前的版本
    - 导航到您的应用程序 URL，然后单击地址栏中的三个点菜单。在底部，应该有一个 "添加搜索引擎" 的选项。
  - 添加新的搜索引擎后，打开 Firefox 首选项菜单，点击左侧菜单中的 "搜索"，并使用可用下拉菜单从列表中选择 "Whoogle"。
  - **注意**：如果您的 Whoogle 实例使用 Firefox 容器，您需要 [按照这里的步骤操作](https://github.com/benbusby/whoogle-search/blob/main/README.md#using-with-firefox-containers) 以使其正常工作。
- Firefox（iOS）
  - 在移动应用的设置页面中，点击 "常规" 部分中的 "搜索"。应有一个名为 "添加搜索引擎" 的选项供您选择。它应该提示您输入标题和搜索查询 URL - 使用以下元素填写表单：
    - 标题："Whoogle"
    - URL：`http[s]://\<your whoogle url\>/search?q=%s`
- Firefox（Android）
  - 版本 <79.0.0
    - 导航到您的应用程序 URL
    - 长按搜索文本字段
    - 单击 "添加搜索引擎" 菜单选项
      - 选择一个名称并单击确认
    - 单击右上角的三个点菜单
    - 导航到设置菜单并选择 "搜索" 子菜单
    - 选择 Whoogle 并按 "设为默认"
  - 版本 >=79.0.0
    - 单击右上角的三个点菜单
    - 导航到设置菜单并选择 "搜索" 子菜单
    - 单击 "添加搜索引擎"
    - 选择 '其他' 单选按钮
      - 名称："Whoogle"
      - 使用的搜索字符串：`https://\<your whoogle url\>/search?q=%s`
- [Alfred](https://www.alfredapp.com/)（Mac OS X）

  1. 转到 `Alfred Preferences` > `Features` > `Web Search` 并点击 `Add Custom Search`。然后配置以下设置

      - 搜索 URL：`https://\<your whoogle url\>/search?q={query}`
      - 标题：`Whoogle for '{query}'`（或您想要的任何内容）
      - 关键字：`whoogle`

  2. 转到 `Default Results`，单击 `Setup fallback results` 按钮。单击 `+` 并添加 Whoogle，然后将其拖至顶部。

- Chrome/基于 Chromium 的浏览器
  - 自动
    - 访问您的 Whoogle Search 实例的主页 -- 这可能会自动将搜索引擎添加到您的搜索引擎列表中。如果没有，您可以手动添加。
  - 手动
    - 在搜索引擎 > 管理搜索引擎 > 添加中，手动输入您的 Whoogle 实例详细信息，使用 `<whoogle url>/search?q=%s` 格式的搜索 URL。