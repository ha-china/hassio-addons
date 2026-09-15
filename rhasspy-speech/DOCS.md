# Home Assistant 插件： rhasspy-speech

![logo](logo.png)

[Rhasspy speech](https://github.com/rhasspy/rhasspy-speech) 是一个语音转文本系统，可以从一组预定义的句子中识别你所说的话。它针对低端硬件，如树莓派 4。

## 支持的语言

* 加泰罗尼亚语 (`ca`)
* 捷克语 (`cz`)
* 德语 (`de`)
* 希腊语 (`el`)
* 英语 (`en`)
* 西班牙语 (`es`)
* 巴斯克语 (`eu`)
* 波斯语 (`fa`)
* 芬兰语 (`fi`)
* 法语 (`fr`)
* 印地语 (`hi`)
* 意大利语 (`it`)
* 格鲁吉亚语 (`ka`)
* 蒙古语 (`mn`)
* 荷兰语 (`nl`)
* 波兰语 (`pl`)
* 葡萄牙语 (`pt`)
* 罗马尼亚语 (`ro`)
* 俄语 (`ru`)
* 斯洛文尼亚语 (`sl`)
* 斯瓦希里语 (`sw`)
* 泰米尔语 (`ta`)
* 泰语 (`th`)
* 土耳其语 (`tr`)

提供了一组 [内置句子](https://github.com/rhasspy/wyoming-rhasspy-speech/tree/master/wyoming_rhasspy_speech/sentences)，针对 Home Assistant 中的 [内置意图](https://developers.home-assistant.io/docs/intent_builtin)。

你的 [暴露的](https://www.home-assistant.io/voice_control/voice_remote_expose_devices/) 实体、区域和楼层的名称会在训练过程中自动添加。

你也可以添加你自己的 [自定义语音命令](#custom-voice-commands) 以及 [自定义单词发音](#word-pronunciations)。

## 安装

按照以下步骤在你的系统上安装插件：

1. 在你的 Home Assistant 前端导航至 **设置** -> **附加组件** -> **附加组件商店**。
2. 添加商店 https://github.com/rhasspy/hassio-addons
2. 找到 "rhasspy-speech" 插件并点击它。
3. 点击 "安装" 按钮。

## 如何使用

在安装并运行该插件后，它应该会根据配置的语言（默认是英语）自动进行训练。检查插件日志以查看是否报告“准备就绪”。

你可以随时访问插件的 Web 界面以重新训练它或添加新的语音命令。

一旦你有了训练好的模型，它将被 Home Assistant 中的 Wyoming 集成自动发现。要完成设置，点击以下我的按钮：

[![打开你的 Home Assistant 实例并开始设置新的集成。](https://my.home-assistant.io/badges/config_flow_start.svg)](https://my.home-assistant.io/redirect/config_flow_start/?domain=wyoming)

另外，你也可以手动安装 Wyoming 集成，见 [Wyoming 集成文档](https://www.home-assistant.io/integrations/wyoming/) 了解更多信息。

## 内置语音命令

默认情况下，插件会使用一组有限的语音命令进行训练以用于 Home Assistant（“包含内置意图”设置）。你的暴露实体、区域和楼层包含在这些命令中（“下载 Home Assistant 实体”设置）。

在插件的 Web 界面中，访问“意图”页面以浏览可用的语音命令。使用主页面上的“编辑句子”按钮添加自定义语音命令。

## 自定义语音命令

在“编辑句子”页面，添加你的自定义语音命令如下：

```yaml
sentences:
  - "打开(或|关闭)[the] 灯"
```

**提示：** 始终在语音命令周围使用引号，以避免 YAML 奇怪的情况。

这将添加 4 个可能的语音命令：

* 打开灯
* 关闭灯
* 打开灯
* 关闭灯

大多数来自 [hassil](https://github.com/home-assistant/hassil) 的模板语法都可以使用。有许多不同的选项可用：

```yaml
sentences:
  - 基本语音命令

  # 更改输出文本
  - in: "这就是你所说的"
    out: "这就是 Home Assistant 所看到的"
    
  # 使用列表（见下面的 'lists' 部分）。
  # 排除 {name} 中的覆盖实体。
  - in: "打开(或|关闭)[the] {name}"
    excludes_context:
      domain: cover
  
  # 仅包括 {name} 中的覆盖实体。
  - in: "(打开|关闭)[the] {name}"
    requires_context:
      domain: cover
      
  # 输出文本可以包含列表引用
  - in: "世界在 {minutes} 分钟内结束"
    out: "设置计时器为 {minutes} 分钟"
  
lists:
  name:
    values:
      - in: "天花板灯"
        context:
          domain: light
      - in: "车库门"
        context:
          domain: cover
  minutes:
    range:
      from: 5
      to: 100
      step: 5
```

`{name}`、`{area}` 和 `{floor}` 列表会自动填充你暴露的实体、区域和楼层。如果你不想这样，请关闭“下载 Home Assistant 实体”配置选项。

如果你想使用待办事项列表，可以指定可能的项目：

```yaml
lists:
  todo_item:
    values:
      - 苹果
      - 香蕉
      - 橙子
```

### 未识别句子

当句子未被识别时，默认情况下会向 Home Assistant 返回一个空文本字符串。你可以在自定义句子中覆盖这一点：

```yaml
unknown_sentence_response: "我的自定义响应"
```

你需要在 Home Assistant 中有一个 [自定义句子](https://www.home-assistant.io/voice_control/custom_sentences/) 才能对响应进行处理。

### 单词发音

你也可以自定义单词的发音：

```yaml
sentences:
  # 你的句子
  
words:
  Beyoncé: "bee yawn say"
  HVAC: "h [vac]uum"
```

使用方括号意味着你只想要一个单词发音的部分。例如，`[vac]uum` 只是 “vac” 部分。

也可以直接使用 [音素](https://www.ipachart.com/)（每种语言不同）：

```yaml
words:
  raxacoricofallipatorius: "/ɹ ˈæ k s ə k ˌɔ ɹ ɪ k ˌɔ f ˈæ l ə p ə t ˈɔ ɹ i ə s/"
```

注意使用 `/` 将音素包围起来。

在 Web 界面中使用“查找单词”按钮检查/猜测发音。

## 数据

模型和训练数据存储在 `/share/rhasspy-speech`。如果你想备份你的句子，它们存储在 `/share/rhasspy-speech/train/<model>/sentences.yaml`。

## 支持

有问题吗？

你有几种选择可以得到答案：

- [Home Assistant Discord 聊天服务器][discord]。
- Home Assistant [社区论坛][forum]。
- 加入 [Reddit 子版块][reddit] 在 [/r/homeassistant][reddit]

如果你发现了一个错误，请 [在我们的 GitHub 上打开一个问题][issue]。

[discord]: https://discord.gg/c5DvZ4e
[forum]: https://community.home-assistant.io
[issue]: https://github.com/home-assistant/addons/issues
[reddit]: https://reddit.com/r/homeassistant
[repository]: https://github.com/rhasspy/hassio-addons