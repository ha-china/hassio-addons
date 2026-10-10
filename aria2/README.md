# aria2 与 webui 的 hass.io 插件


## 描述

此插件提供一个 [aria2](https://aria2.github.io/) 和 [webui-aria2](https://github.com/ziahamza/webui-aria2) 前端容器，适用于 hass.io。

`rpc` 已启用，且会将会话保存在 `/data` 中。

## 配置

### downloads (字符串)

用于下载存储的目录路径。默认为 `/share/aria2`。

### secret (字符串)

rpc 连接的密钥。默认为 `123456789`。

### options (字典列表)

传递给 aria2c 的附加选项。必须以字典列表的格式输入，格式为： `{"name": "...", "value": "..."}`。

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
感谢您的支持与鼓励！