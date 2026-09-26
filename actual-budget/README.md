# Home Assistant 社区应用：Actual Budget

[![Release][release-shield]][release] ![Project Stage][project-stage-shield] ![Project Maintenance][maintenance-shield]

[![Sponsor Frenck via GitHub Sponsors][github-sponsors-shield]][github-sponsors]

[![Support Frenck on Patreon][patreon-shield]][patreon]

本地优先的个人理财与信封预算法应用。

## 关于

[Actual][actual] 是一款保持资金可见性的预算应用。它使用信封预算法：每个月，你手中持有的每一笔货币单位都有一份“工作”，并且数字能够加总，因为你只会分配你实际拥有的资金。

预算存储在你的浏览器中，并通过本应用同步，本应用是留存该预算副本的唯一位置。数据不会发送到任何其他地方，无需注册账户，也没有任何机构会出售你所消费物品的信息。

家庭中的任何成员都使用同一份预算，即使在没有信号的商店中用手机录入交易时，该预算依然可用，因为数据已存储在设备中，而不再依赖请求。

Actual 被设计为通过站点的根路径提供服务，而侧边栏并非如此，因此本应用携带了一个补丁，用于为每个请求设置基路径。这使得面板功能正常，但代价是 Actual 调用了一种不被支持的存储模式。如果这对你很重要，应用说明书将解释这意味着什么以及应如何操作。

[actual]: https://actualbudget.org/
[github-sponsors-shield]: https://frenck.dev/wp-content/uploads/2019/12/github_sponsor.png
[github-sponsors]: https://github.com/sponsors/frenck
[maintenance-shield]: https://img.shields.io/maintenance/yes/2026.svg
[patreon-shield]: https://frenck.dev/wp-content/uploads/2019/12/patreon.png
[patreon]: https://www.patreon.com/frenck
[project-stage-shield]: https://img.shields.io/badge/project%20stage-experimental-yellow.svg
[release-shield]: https://img.shields.io/badge/version-v0.1.0-blue.svg
[release]: https://github.com/hassio-addons/app-actual-budget/tree/v0.1.0

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
