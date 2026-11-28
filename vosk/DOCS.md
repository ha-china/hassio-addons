# 家庭助理插件：vosk

## 安装

按照以下步骤在您的系统上安装插件：

1. 在您的家庭助理前端导航到 **设置** -> **附加组件** -> **附加组件商店**。
2. 添加商店 https://github.com/rhasspy/hassio-addons
3. 找到 "vosk" 插件并点击它。
4. 点击 "安装" 按钮。

## 如何使用

安装并运行此插件后，它将被家庭助理中的怀俄明集成自动发现。要完成设置，请点击以下我的按钮：

[![打开您的家庭助理实例并开始设置新的集成。](https://my.home-assistant.io/badges/config_flow_start.svg)](https://my.home-assistant.io/redirect/config_flow_start/?domain=wyoming)

另外，您也可以手动安装怀俄明集成，请参阅
[怀俄明集成文档](https://www.home-assistant.io/integrations/wyoming/)
以获取更多信息。

## 模型

模型会自动从 [HuggingFace](https://huggingface.co/rhasspy/vosk-models) 下载，但它们最初来自 [Alpha Cephei](https://alphacephei.com/vosk/models)。请查看您使用的每个模型的许可证（[模型列表](https://github.com/rhasspy/wyoming-vosk/blob/master/wyoming_vosk/download.py)）。

## 模式

有三种操作模式：

1. 开放式 - 可以说任何句子，但与 [Whisper](https://github.com/rhasspy/wyoming-faster-whisper) 相比，识别效果非常差。
2. 校正 - 强制类似于 [模板](#sentence-templates) 的句子匹配。
3. 限制 - 只能说来自 [模板](#sentence-templates) 的句子。

### 开放式

这是默认模式：直接使用 [vosk](https://alphacephei.com/vosk) 的转录。

与 [Whisper](https://github.com/rhasspy/wyoming-faster-whisper) 相比，识别效果非常差，除非使用 [更大模型](https://alphacephei.com/vosk/models)。
要使用特定模型，例如 `vosk-model-en-us-0.21` (1.6GB):

1. 在 `/share/vosk/models` 中创建一个以模型语言命名的目录（例如，`en`）
2. 下载并解压模型
3. 将以模型命名的目录内容复制到 `/share/vosk/models/<LANGUAGE>`

在英语示例中，提取的 `vosk-model-en-us-0.21` 目录中的所有文件 **内部** 将放入 `/share/vosk/models/en`，因此您将会有一个名为 `/share/vosk/models/en/am/final.mdl` 的文件。

### 校正

通过提前指定将要说的句子，可以使用 [rapidfuzz](https://github.com/maxbachmann/RapidFuzz) 校正 vosk 的转录。

创建您的 [句子模板](#sentence-templates) 并将其保存在名为 `/share/vosk/sentences/<LANGUAGE>.yaml` 的文件中，其中 `<LANGUAGE>` 是 [支持的语言代码](#supported-languages) 之一。例如，英语句子应保存在 `/share/vosk/sentences/en.yaml` 中。

您可以调整 `correct_sentences` 配置值为：

* 0 - 强制转录为模板句子之一
* 大于 0 - 允许更多与模板不相似的句子通过

当 `correct_sentences` 较大时，语音识别实际上再次变为开放式。尝试不同的值，以找到可以让您说句子而不牺牲准确度的值。

如果您有一组特定模式的句子希望跳过校正，请将它们添加到您的 [不校正模式](#no-correct-patterns) 中。

### 限制

按照 [校正模式](#corrected) 的说明创建您的句子模板，然后启用 `limit_sentences` 配置选项。

这将告诉 vosk 仅仅可以说来自您模板的句子。仍然需要句子校正（由于 vosk 的内部工作方式），但它将确保不能发送模板以外的句子。

这种模式将为您提供尽可能高的准确性，缺点是您不能说模板以外的句子。

## 句子模板

每种语言可以有一个 YAML 文件，其中包含 [句子模板](https://github.com/home-assistant/hassil#sentence-templates)。
大多数语法都是支持的，包括：

* 可选单词，用 `[方括号]` 包围
* 备选单词，`(被|括|号)` 
* 值的列表，通过 `{name}` 引用
* 扩展规则，通过 `<name>` 插入

一种语言的 YAML 文件的通用格式是：

``` yaml
sentences:
  - 这是一个普通句子
  - 这是一个包含 {list} 和 <rule> 的句子
lists:
  list:
    values:
      - 值 1
      - 值 2
expansion_rules:
  rule: 规则的内容
```

句子还有一种特殊的 `in/out` 形式，让您可以说一个词（`in`），但在转录中放入另一个词（`out`）。

例如：

``` yaml
sentences:
  - in: lou mo ss  # lumos
    out: 开启所有的灯
  - in: knocks   # nox
    out: 关闭所有的灯
```

让您可以说 "lumos" 发送 "开启所有的灯"，说 "nox" 发送 "关闭所有的灯"。
请注意，我们使用了听起来像 "lumos" 和 "nox" 的单词，因为默认英语模型的 [词汇](https://huggingface.co/rhasspy/vosk-models/tree/main/_vocab) 是有限的 (`vosk-model-small-en-us-0.15`)。

`in` 键也可以接收多个句子的列表，都输出相同的 `out` 字符串。

### 列表

列表在句子中有许多可能的单词/短语时很有用。

例如：

``` yaml
sentences:
  - 设置灯为 {color}
lists:
  color:
    values:
      - 红色
      - 绿色
      - 蓝色
      - 橙色
      - 黄色
      - 紫色
```

让您可以将灯设置为六种颜色中的一种。

这也可以写为 `设置灯为 (红色|绿色|蓝色|橙色|黄色|紫色)`，但列表更易于管理，可以在句子之间共享。

列表值具有特殊的 `in/out` 形式，让您可以说一个词（`in`），但在转录中放入另一个词（`out`）。

例如：

``` yaml
sentences:
  - 开 (启|关) {device}
lists:
  device:
    values:
      - in: 电视
        out: 客厅电视
      - in: 灯
        out: 卧室灯
```

让您可以说 "开启电视" 来开启客厅电视，和 "关闭灯" 来关闭卧室灯。

### 扩展规则

句子模板的重复部分可以抽象为扩展规则。

例如：

``` yaml
sentences:
  - 开 <the> 灯
  - 关 <the> 灯
expansion_rules:
  the: [the|my]
```

让您可以说 "开启灯" 或 "关闭我的灯"，而不必重复可选部分。

## 不校正模式

当您 [校正句子](#correct-sentences) 时，您希望将分数截止保持尽可能低，以避免让无效句子通过。但如果您只是想要 *一些* 开放式句子，例如 "给我画一幅图..." 并将其转发给图像生成器？

在您的句子 YAML 文件中添加以下内容：

``` yaml
sentences:
  ...
no_correct_patterns:
  - <正则表达式>
  - <正则表达式>
  ...
```

您可以向 `no_correct_patterns` 添加尽可能多的正则表达式。如果转录与这些模式中的任何一个匹配，它将被发送，而不再进行任何进一步的校正。这有效地让您在句子模板中 "打孔"，以允许某些句子通过。

## 允许未知

使用 `--allow-unknown`，您可以启用检测模型词汇之外的 "未知" 单词/短语。被标记为 "未知" 的转录将被设置为空字符串，以表明没有被识别。当与 [限制句子](#limited) 结合时，这让您可以区分领域内和领域外的句子。

## 支持的语言

* 阿拉伯语 (`ar`)
* 加泰罗尼亚语 (`ca`)
* 捷克语 (`cz`)
    * 不与 [允许未知](#allow-unknown) 一起使用
* 德语 (`de`)
    * 不与 [允许未知](#allow-unknown) 一起使用
* 英语 (`en`)
* 西班牙语 (`es`)
    * 不与 [允许未知](#allow-unknown) 一起使用
* 波斯语 (`fa`)
    * 不与 [允许未知](#allow-unknown) 一起使用
* 法语 (`fr`)
* 印地语 (`hi`)
    * 不与 [允许未知](#allow-unknown) 一起使用
* 意大利语 (`it`)
    * 不与 [允许未知](#allow-unknown) 一起使用
* 韩语 (`ko`)
    * 不与 [允许未知](#allow-unknown) 一起使用
* 荷兰语 (`nl`)
* 波兰语 (`pl`)
    * 不与 [允许未知](#allow-unknown) 一起使用
* 葡萄牙语 (`pt`)
    * 不与 [允许未知](#allow-unknown) 一起使用
* 俄语 (`ru`)
    * 不与 [允许未知](#allow-unknown) 一起使用
* 瑞典语 (`sv`)
    * 不与 [限制句子](#limited) 和 [允许未知](#allow-unknown) 一起使用
* 乌克兰语 (`uk`)
* 越南语 (`vn`)
* 中文 (`zh`)

未测试（在家庭助理中尚无意图支持）：

* 布列塔尼语 (`br`)
* 世界语 (`eo`)
* 日语 (`ja`)
* 哈萨克语 (`kz`)
* 他加禄语 (`tl`)
* 乌兹别克语 (`uz`)

## 配置

### 选项： `correct_sentences`

在校正句子时的严格程度，其中 0 是最严格的，且较大的值逐渐不那么严格。仅在语言的 YAML 文件存在于 `/share/vosk/sentences/<LANGUAGE>.yaml` 时使用。

### 选项： `limit_sentences`

启用时，仅能说来自文件 `/share/vosk/sentences/<LANGUAGE>.yaml` 的句子。

### 选项： `allow_unknown`

启用时与 `limit_sentences` 一起，非模板部分（或 "不校正" 模式）的句子将返回为空字符串。

### 选项： `preload_language`

预加载选定语言的语音转文本模型。其他模型在请求时加载。

### 选项： `debug_logging`

启用调试日志记录。用于查看卫星连接和每个唤醒词检测的日志。

## 支持

有什么问题？

您有几种选择可以获得答案：

- [家庭助理 Discord 聊天服务器][discord]。
- 家庭助理 [社区论坛][forum]。
- 加入 [Reddit 子版块][reddit] 在 [/r/homeassistant][reddit]

如果您发现了错误，请 [在 GitHub 上打开问题][issue]。

[discord]: https://discord.gg/c5DvZ4e
[forum]: https://community.home-assistant.io
[issue]: https://github.com/home-assistant/addons/issues
[reddit]: https://reddit.com/r/homeassistant
[repository]: https://github.com/hassio-addons/repository