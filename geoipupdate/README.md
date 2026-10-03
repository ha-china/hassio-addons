# GeoIP 更新助手：GeoIP Update

GeoIP Update 程序执行 GeoIP2 和 GeoLite2 二进制数据库的自动更新。

设计用于与 Home Assistant 的 @einschmidt Caddy2 插件配合使用 `https://github.com/einschmidt/hassio-addons`

注意：最近的 Caddy-2 更新（v2.0）将配置路径更改为 `/addon_configs/c80c7555_caddy-2`。如果您正在使用 v1.x，请保存此插件的配置，卸载并重新安装，然后替换配置文件，但将目录更改为上述路径。这是因为插件需要重新构建才能看到新的目录。

还需要一个带有 `https://github.com/porech/caddy-maxmind-geolocation` 设置的自定义 caddy 二进制文件。使用我的 `Caddy Builder` 插件来创建一个。

必须在 maxmind.com 上设置许可证密钥。

_感谢所有星标我的仓库的人！要星标，请点击下面的图片，然后它将出现在右上角。谢谢！_

[![Stargazers repo roster for @jdeath/homeassistant-addons](https://reporoster.com/stars/jdeath/homeassistant-addons)](https://github.com/jdeath/homeassistant-addons/stargazers)

## 关于

Docker 镜像是通过环境变量配置的。以下变量是必需的：

* `GEOIPUPDATE_EDITION_IDS` - 空格分隔的数据库版本 ID 列表。
  版本 ID 可以由字母、数字和破折号组成。默认为 "GeoLite2-ASN GeoLite2-City GeoLite2-Country"。

* `GEOIPUPDATE_ACCOUNT_ID` - 您的 MaxMind 账户 ID（不是您的用户名）。

* `GEOIPUPDATE_LICENSE_KEY` - 您的 MaxMind 许可证密钥（区分大小写）（不是您的密码）。

* `GEOIPUPDATE_FREQUENCY` - `geoipupdate` 运行之间的小时数。
  如果此变量未设置或设置为 `0`，则 `geoipupdate` 将运行一次并退出。

* `GEOIPUPDATE_DB_DIR` - `geoipupdate` 将下载数据库的目录。默认为 `/addon_configs/c80c7555_caddy-2`，以与新 caddy-2 插件保持一致。

[仓库](https://github.com/jdeath/homeassistant-addons)

## 使用方法
制作一个自定义的 caddy 构建，包含 `--with github.com/porech/caddy-maxmind-geolocation` 并将其放置在 `/share/caddy/`（v1.x）的 `caddy` 文件中，或在 `/addon_configs/c80c7555_caddy-2`（v2.0）。

编辑 `/share/caddy/Caddyfile`

添加一个 GEOFilter 块以允许某些国家和您的本地 IP 地址。我是在网上找到这个的，所以如果您需要帮助，请在 Caddy 论坛上询问。

```
(GEOFILTER) {
        @geofilter {
                not maxmind_geolocation {
                        db_path "/share/caddy/GeoLite2-Country.mmdb"
                        allow_countries IT FR
                }
                not remote_ip private_ranges
        }
        respond @geofilter 403
}
```

然后在这条 `reverse_proxy` 指令之前添加此行
```
import GEOFILTER
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
