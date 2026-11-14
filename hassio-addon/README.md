# Tunet

一个具有可配置卡片、页面和主题的 Home Assistant 仪表板。

## 首次存储更新之前

**使用 1.25.1 或更早版本？在保存配置文件之前，请关闭 Tunet 的自动更新。** 不要依赖新添加的破坏性版本标记来保护已安装版本。

旧版插件将数据库存储在容器内部。Home Assistant 在更新时会替换该容器，旧版数据库不会包含在常规的 Home Assistant 备份中。下一次发布将修复未来的更新存储功能，但此后无法从旧容器中恢复数据。

您可以将仪表板完全保留在浏览器中：

1. 打开 **系统 → 配置文件 → 导出为文件**，以保存当前的仪表板。
2. 加载您想要保留的每个已保存的配置文件，并将其导出到单独的文件中。每个 Home Assistant 用户都需要为自己的配置文件执行此操作。
3. 如果出于设置历史记录的需要使用旧版布局，还需要加载并导出该布局。这些文件包含仪表板快照，而不是完整的数据库或历史记录备份。
4. 更新后，导入每个文件并再次将其保存为配置文件。最后，导入您最初导出的当前仪表板。

如果网站数据被保留，您的活动仪表板将保持在相同的浏览器中。新安装和普通 Docker Compose 安装不需要此步骤。

一旦插件使用持久化存储，后续的更新将保留配置文件和设置。

---

**⚠️ This resource is intended to help Chinese Home Assistant users more easily install excellent add-ons. If you are not a Chinese user, please read repository readme first**

**⚠️ 这个资源用来帮助中国Home Assistant用户更容易地安装优秀的插件。如果您不是中国用户，请先阅读仓库的README，以下为收集者（汉化，加速）信息，非原作者信息**

---

## 📱 关注我

扫描下面二维码，关注我。有需要可以随时给我留言：

<img src="https://raw.gitcode.com/ha-china/ha-apps/raw/main/WeChat_QRCode.png" width="50%" /> 📲

## ☕ 赞助支持

如果您觉得我花费大量时间维护这个库对您有帮助，欢迎请我喝杯奶茶，您的支持将是我持续改进的动力！

<div style="display: flex; justify-content: space-between;">
  <img src="https://raw.gitcode.com/ha-china/ha-apps/raw/main/1_readme/Ali_Pay.jpg" height="350px" />
  <img src="https://raw.gitcode.com/ha-china/ha-apps/raw/main/1_readme/WeChat_Pay.jpg" height="350px" />
</div> 💖

感谢您的支持与鼓励！
