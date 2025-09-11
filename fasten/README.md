# 家庭助理插件：Fasten

## 描述
Fasten 安全地将您的医疗提供者连接在一起，创建一个不会离开您手中的个人健康记录。

_感谢所有收藏我库的人！要收藏，请点击下面的图片，然后它会在右上角。谢谢！_

[![Stargazers repo roster for @jdeath/homeassistant-addons](https://reporoster.com/stars/jdeath/homeassistant-addons)](https://github.com/jdeath/homeassistant-addons/stargazers)

## 安装

此插件需要一些额外的步骤。

1. [将我的 Hass.io 插件库][repository] 添加到您的 Hass.io 实例。
1. 安装此插件。
1. 点击 `保存` 按钮以存储您的配置。
1. 启动插件，它会失败，这是正常的。
1. 转到 /addon-configs/2effc9b9_fasten
1. 从 `https://raw.githubusercontent.com/fastenhealth/fasten-onprem/main/config.yaml` 下载基础配置文件。
1. 将此文件复制到 `/addon-configs/2effc9b9_fasten`。
1. 编辑 `/addon-configs/2effc9b9_fasten\config.yaml` 并将 `database->location` 条目更改为 `/config/fasten.db`。
1. 您还应该更改 jwt 令牌。

[repository]: https://github.com/jdeath/homeassistant-addons