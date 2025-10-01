## 环境变量

<!-- markdownlint-disable MD007 MD010 MD030 MD033 -->

Whoogle 实例提供了一些可选的环境变量以进行自定义。这些变量可以手动设置，也可以复制到 `whoogle.env` 文件中，并针对您的首选部署方法启用：

- 本地运行：在运行之前设置 `WHOOGLE_DOTENV=1`
- 使用 `docker-compose`：取消注释 `env_file` 选项
- 使用 `docker build/run`：在命令中添加 `--env-file ./whoogle.env`

| 变量                 | 描述                                                                                  |
| ------------------------ | -------------------------------------------------------------------------------------------- |
| WHOOGLE_DOTENV           | 在 `whoogle.env` 文件中加载环境变量                                                  |
| WHOOGLE_USER             | 基本认证的用户名。如果使用，也需要设置 `WOOGLGE_PASS`。                                  |
| WHOOGLE_PASS             | 基本认证的密码。如果使用，也需要设置 `WOOGLGE_USER`。                                  |
| WHOOGLE_PROXY_USER       | 代理服务器的用户名。                                                                |
| WHOOGLE_PROXY_PASS       | 代理服务器的密码。                                                                |
| WHOOGLE_PROXY_TYPE       | 代理服务器的类型。可以是 "socks5"、"socks4" 或 "http"。                              |
| WHOOGLE_PROXY_LOC        | 代理服务器的位置（主机或 IP）。                                                       |
| EXPOSE_PORT              | Whoogle 将暴露的端口。                                                              |
| HTTPS_ONLY               | 强制使用 HTTPS。（参见 [这里](https://github.com/benbusby/whoogle-search#https-enforcement)） |
| WHOOGLE_ALT_TW           | 当配置中启用网站替代时，使用的 twitter.com 替代方案。                                |
| WHOOGLE_ALT_YT           | 当配置中启用网站替代时，使用的 youtube.com 替代方案。                                |
| WHOOGLE_ALT_IG           | 当配置中启用网站替代时，使用的 instagram.com 替代方案。                              |
| WHOOGLE_ALT_RD           | 当配置中启用网站替代时，使用的 reddit.com 替代方案。                                  |
| WHOOGLE_ALT_TL           | 使用的 Google 翻译替代方案。这用于所有 "translate \_\_\_\_" 搜索。                     |
| WHOOGLE_ALT_MD           | 当配置中启用网站替代时，使用的 medium.com 替代方案。                                  |
| WHOOGLE_AUTOCOMPLETE     | 控制自动完成/搜索建议的可见性。默认开启 -- 使用 '0' 禁用                             |
| WHOOGLE_MINIMAL          | 从所有搜索查询中移除所有内容，只保留基本结果卡片。                                     |
| WHOOGLE_CSP              | 设置默认的 'Content-Security-Policy' 头部                                               |
| WHOOGLE_RESULTS_PER_PAGE | 设置每页结果的数量                                                           |

### 配置环境变量

这些环境变量允许设置默认的配置值，但可以通过使用主页配置菜单手动覆盖。这些允许快速将实例破坏/重建到相同的配置状态。

| 变量                       | 描述                                                   |
| ------------------------------ | ------------------------------------------------------------- |
| WHOOGLE_CONFIG_DISABLE         | 隐藏配置并禁止客户端更改配置                               |
| WHOOGLE_CONFIG_COUNTRY         | 按托管国家过滤结果                                         |
| WHOOGLE_CONFIG_LANGUAGE        | 设置界面语言                                            |
| WHOOGLE_CONFIG_SEARCH_LANGUAGE | 设置搜索结果语言                                          |
| WHOOGLE_CONFIG_BLOCK           | 从搜索结果中阻止网站（使用逗号分隔的列表）                 |
| WHOOGLE_CONFIG_THEME           | 设置主题模式（亮色、暗色或系统）                           |
| WHOOGLE_CONFIG_SAFE            | 启用安全搜索                                              |
| WHOOGLE_CONFIG_ALTS            | 使用社交媒体网站替代方案（nitter、invidious 等）            |
| WHOOGLE_CONFIG_NEAR            | 仅限制特定城市的结果                                       |
| WHOOGLE_CONFIG_TOR             | 使用 Tor 路由（如果可用）                                  |
| WHOOGLE_CONFIG_NEW_TAB         | 总是在新标签页中打开结果                                  |
| WHOOGLE_CONFIG_VIEW_IMAGE      | 启用查看图片选项                                          |
| WHOOGLE_CONFIG_GET_ONLY        | 仅使用 GET 请求进行搜索                                  |
| WHOOGLE_CONFIG_URL             | 实例的根 URL（`https://<your url>/`）                      |
| WHOOGLE_CONFIG_STYLE           | 用于样式的自定义 CSS（应为单行）                         |

## 使用方法

与大多数搜索引擎相同，例外是按时间范围过滤。

要按时间范围过滤，将 `:past <time>` 追加到搜索的末尾，其中 `<time>` 可以是 `hour`、`day`、`month` 或 `year`。示例：`coronavirus updates :past hour`

## 额外步骤

### 将 Whoogle 设置为您的默认搜索引擎

_注意：如果您使用反向代理运行 Whoogle Search，请确保在执行这些步骤之前，主页上的“根 URL”配置选项设置为您的 URL。_

浏览器设置：

- Firefox（桌面版）
  - 版本 89+
    - 导航到您的应用 URL，右键单击地址栏，并选择“添加搜索引擎”。
  - 旧版本
    - 导航到您的应用 URL，并单击地址栏中的 3 点菜单。在底部，应该有一个选项为“添加搜索引擎”。
  - 添加新的搜索引擎后，打开 Firefox 首选项菜单，在左侧菜单中单击“搜索”，并使用可用的下拉菜单从列表中选择“Whoogle”。
  - **注意**：如果您的 Whoogle 实例使用 Firefox 容器，您需要 [按照这些步骤操作](https://github.com/benbusby/whoogle-search/blob/main/README.md#using-with-firefox-containers) 以正确运行。

- Firefox（iOS）
  - 在移动应用的设置页面中，在“常规”部分中单击“搜索”。应该有一个标题为“添加搜索引擎”的选项来选择。它应该提示您输入标题和搜索查询 URL - 使用以下元素填写表单：
    - 标题： "Whoogle"
    - URL: `http[s]://\<your whoogle url\>/search?q=%s`

- Firefox（Android）
  - 版本 <79.0.0
    - 导航到您的应用 URL
    - 长按搜索文本字段
    - 单击“添加搜索引擎”菜单项
      - 选择一个名称并单击确定
    - 单击右上角的 3 点菜单
    - 导航到设置菜单并选择“搜索”子菜单
    - 选择 Whoogle 并按“设为默认”

  - 版本 >=79.0.0
    - 单击右上角的 3 点菜单
    - 导航到设置菜单并选择“搜索”子菜单
    - 单击“添加搜索引擎”
    - 选择“其他”单选按钮
      - 名称： "Whoogle"
      - 搜索字符串： `https://\<your whoogle url\>/search?q=%s`

- [Alfred](https://www.alfredapp.com/)（Mac OS X）

  1.  转到 `Alfred Preferences` > `Features` > `Web Search` 并单击 `Add Custom Search`。然后配置这些设置

      - 搜索 URL： `https://\<your whoogle url\>/search?q={query}`
      - 标题： `Whoogle for '{query}'`（或您想要的任何内容）
      - 关键词： `whoogle`

  2.  转到 `Default Results` 并单击 `Setup fallback results` 按钮。单击 `+` 并添加 Whoogle，然后将其拖到顶部。

- Chrome/Chromium 基于浏览器
  - 自动
    - 访问您的 Whoogle Search 实例的主页 -- 这可能会自动将搜索引擎添加到您的搜索引擎列表中。如果没有，您可以手动添加。
  - 手动
    - 在搜索引擎 > 管理搜索引擎 > 添加下，手动输入您的 Whoogle 实例详细信息，并使用 `<whoogle url>/search?q=%s` 格式的搜索 URL。