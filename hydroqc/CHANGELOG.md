<!-- https://developers.home-assistant.io/docs/add-ons/presentation#keeping-a-changelog -->

## v2.0.0-1

- BEAKING: You now need to specify a rate and a rate option if applicable
- feat: Add new open data source for winter peaks

## v1.3.0-4

- fix: set default value of "maison" for contract name

## v1.3.0-3
- feat: add option to choose a contract name other than the default "maison"
- fix: missing name parameter following removal of config file

## v1.3.0-2

- fix: config file loading a chalet device.

## v1.3.0-1

- BREAKING: As previously announced we no longer provide builds for 32bit platforms
- build: replace pip by uv
- hydroqc2mqtt: upgraded to [`1.3.0`](https://gitlab.com/hydroqc/hydroqc2mqtt/-/releases/1.3.0)

## v1.2.0-1

- hydroqc2mqtt: upgraded to [`1.2.0`](https://gitlab.com/hydroqc/hydroqc2mqtt/-/releases/1.2.0)


## v1.1.2-1

- hydroqc2mqtt: upgraded to [`1.1.2`](https://gitlab.com/hydroqc/hydroqc2mqtt/-/releases/1.1.2)

## v1.1.1-1

Remaining issues with the new authentication are now fixed. The issue with delays in sensor update are also resolved by the authentication fix.

- hydroqc2mqtt: upgraded to [`1.1.1`](https://gitlab.com/hydroqc/hydroqc2mqtt/-/releases/1.1.1)

## v1.1.0-1

Authentication issue following the login provider change to Hydro-Québec`s portal is now fixed.

- hydroqc2mqtt: upgraded to [`1.1.0`](https://gitlab.com/hydroqc/hydroqc2mqtt/-/releases/1.1.0)

**Reminder: 32bit builds (armv7, armhf, i386) will be retired after April 1st 2024**

### 32 bit builds are reinstated
Since the changes to remove the 32bit builds have been a bit on short notice for people still on that platform we will continue building until the end of this winter credit/FlexD season. Please plan accordingly, we won't be building 32 bit starting April 1st.

- addon: re-add 32bit full builds

## v1.0.0-3

### 32 bit builds are reinstated
Since the changes to remove the 32bit builds have been a bit on short notice for people still on that platform we will continue building until the end of this winter credit/FlexD season. Please plan accordingly, we won't be building 32 bit starting April 1st.

- addon: re-add 32bit full builds

## v1.0.0-2

- addon: re-add 32bit architectures to the config.json so that hassos will build the addon itself.

## v1.0.0-1

**Breaking:** Outage information is no longer available due to changes to Hydro-Québec's outage backend.
- hydroqc2mqtt: upgraded to [`1.0.0`](https://gitlab.com/hydroqc/hydroqc2mqtt/-/releases/1.0.0)

## v0.12.5-1

**Possible breaking change : The addon is no longer signed** CAS notary is no longer available and [Home-Assistant have yet to come up with an alternative](https://github.com/home-assistant/builder/issues/162) and we no longer have the original signin key for the add-on.
We don't know how Home-Assistant will react to an upgrade of the add-on from a signed version to an unsigned one. If you encounter any issues, copy your add-on configuration, uninstall the add-on and reinstall the latest version.

- add network capability to apparmor fix #27
- add check to see if a config file has been specified before adding envs !26
- we no longer build for 32bit platforms, installation on these platform will perform the builds locally
- removed add-on signature
- hydroqc2mqtt: upgraded to [`0.12.5`](https://gitlab.com/hydroqc/hydroqc2mqtt/-/releases/0.12.5)

## v0.12.4-1
- **No addon release for this version of hydroqc2mqtt**

## v0.12.3-1

- hydroqc2mqtt: upgraded to [`0.12.3`](https://gitlab.com/hydroqc/hydroqc2mqtt/-/releases/0.12.3)

## v0.12.2-1

- hydroqc2mqtt: upgraded to [`0.12.2`](https://gitlab.com/hydroqc/hydroqc2mqtt/-/releases/0.12.2)
## v0.12.1-1

- hydroqc2mqtt: upgraded to [`0.12.1`](https://gitlab.com/hydroqc/hydroqc2mqtt/-/releases/0.12.1)
## v0.12.0-1

- hydroqc2mqtt: upgraded to [`0.12.0`](https://gitlab.com/hydroqc/hydroqc2mqtt/-/releases/0.12.0)

## v0.11.3-1

- hydroqc2mqtt: upgraded to [`0.11.3`](https://gitlab.com/hydroqc/hydroqc2mqtt/-/releases/0.11.3)
-
## v0.11.2-1

- hydroqc2mqtt: upgraded to [`0.11.2`](https://gitlab.com/hydroqc/hydroqc2mqtt/-/releases/0.11.2)
## v0.11.1-1

- hydroqc2mqtt: upgraded to [`0.11.1`](https://gitlab.com/hydroqc/hydroqc2mqtt/-/releases/0.11.1)
## v0.11.0-1

- hydroqc2mqtt: upgraded to [`0.11.0`](https://gitlab.com/hydroqc/hydroqc2mqtt/-/releases/0.11.0)

## v0.10.0-2

- addon
  - Fix rate and rate option not being optional
## v0.10.0-1

- addon
    - add rate and rate options configuration

- hydroqc2mqtt: upgraded to [`0.9.1`](https://gitlab.com/hydroqc/hydroqc2mqtt/-/releases/0.8.0)
    - Fix DPC (FlexD) pre-heat config not applied
    - Fix planned outage sensor date
    - Add logic to detect Hydro-Quebec portal outages and improve our reaction to it
## v0.9.0-2

- fix ci

From v0.9.0-1:
- hydroqc2mqtt: upgraded to [`0.9.0`](https://gitlab.com/hydroqc/hydroqc2mqtt/-/releases/0.8.0)
    - Fix DPC (FlexD) critical peak sensors
    - Add planned and unplanned outage information

## v0.9.0-1

- hydroqc2mqtt: upgraded to [`0.9.0`](https://gitlab.com/hydroqc/hydroqc2mqtt/-/releases/0.8.0)
    - Fix DPC (FlexD) critical peak sensors
    - Add planned and unplanned outage information

## v0.8.0-1

- hydroqc2mqtt: upgraded to [`0.8.0`](https://gitlab.com/hydroqc/hydroqc2mqtt/-/releases/0.8.0)
    - Add DPC (FlexD) sensors
    - Fix csv conso history import

## v0.7.1-1

- hydroqc2mqtt: upgraded to [`0.7.1`](https://gitlab.com/hydroqc/hydroqc2mqtt/-/releases/0.7.1)
    - Fix #41 (cumulated winter credits being a projection)
    - Bump hydroqc to 2.1.1

## v0.7.0-2

Fix preheat configuration not being applied in the hass-addon

## v0.7.0-1

- Library hydroqc2mqtt: upgraded to [`0.7.0`](https://gitlab.com/hydroqc/hydroqc2mqtt/-/releases/0.7.0)
    - Feat: add attribute to timestamp sensors to show critical status of the period
    - Feat: New sync schedule will update sensors at xx:00:00 to make sure winter credits related sensor showing current state are not delayed
    - Feat: Disable "availability" MQTT home-assistant discovery configurations for the winter credit related sensors to make sure they do not become unavailable if the module is offline.

## v0.6.1-1

- Library hydroqc2mqtt: upgraded to [`0.6.1`](https://gitlab.com/hydroqc/hydroqc2mqtt/-/releases/0.6.1)
    - Fix missing preheat env

**Breaking Change**

This should have been mentioned in the previous release, sorry for the invonvenience.

With the addition of regular and high consumption rate in hourly consumption history for FlexD and Dual-Energy we had to rename the existing Hourly Consumption sensor to Total Hourly Consumption. You will need to update this in your energy dashboard and reimport the history if you want.

More info in the [docs](https://hydroqc.ca/fr/docs/configuration/home-assistant-specific/#tarif-d-et-d-avec-option-cpc-cr%C3%A9dits-hivernaux)

## v0.6.0-1

- Library hydroqc2mqtt: upgraded to [`0.6.0`](https://gitlab.com/hydroqc/hydroqc2mqtt/-/releases/0.6.0)

## v0.5.0-1

- Library hydroqc2mqtt: upgraded to [`0.5.0`](https://gitlab.com/hydroqc/hydroqc2mqtt/-/releases/0.5.0)
    - Fully functional proxy accounts (Fix hydroqc#26 hydroqc#27)
    - Fix winter credit error that started on December 1st for some accounts (fix hydroqc#30 #34 hydroqc-hass-addons#13)

## v0.4.11-1

- Library hydroqc2mqtt: upgraded to [`0.4.11`](https://gitlab.com/hydroqc/hydroqc2mqtt/-/releases/0.4.11)
    - Bump hydroqc lib
    - Upgrade dependencies


## v0.4.10-1

- Library hydroqc2mqtt: upgraded to [`0.4.10`](https://gitlab.com/hydroqc/hydroqc2mqtt/-/releases/0.4.10)
    - Change: People not subscribed to Winter Credits will no longer receive the sensors [`hydroqc2mqtt#20`](https://gitlab.com/hydroqc/hydroqc2mqtt/-/issues/20)
    - Change: new pre-heat timestamp sensor for winter credits [`hydroqc2mqtt#30`](https://gitlab.com/hydroqc/hydroqc2mqtt/-/issues/30)
    - Upgrade dependencies
- Change: Allow to set the new pre-heat value from addon configuration

## v0.4.9-1

- Library hydroqc2mqtt: upgraded to [`0.4.9`](https://gitlab.com/hydroqc/hydroqc2mqtt/-/releases/0.4.9) **Make sure to read the linked release notes**
    - Bugfix: Fix timezone for hourly consumption
    - Change: add clear history button
    - Change: add config for number of days to import history for
    - Upgrade dependencies

## v0.4.8-2
- Bugfix: Fix customer, account and contract ID validation in add-on config

## v0.4.8-1
- Library hydroqc2mqtt: upgraded to [`0.4.8`](https://gitlab.com/hydroqc/hydroqc2mqtt/-/tags/0.4.8)
    - Bugfix: hydroqc2mqtt log-level was always INFO, despite the log-level set in add-on configuration [`hydroqc2mqtt!89`](https://gitlab.com/hydroqc/hydroqc2mqtt/-/merge_requests/89)
    - Change: Reduce the caching for some of the account and period values to 6h instead of 24h [`hydroqc!116`](https://gitlab.com/hydroqc/hydroqc/-/merge_requests/116)
    - Upgrade dependencies

## v0.4.7-1
- Addon change
    - Re-enable custom AppArmor profile
    - Fix fr translation
- Library hydroqc2mqtt: upgraded to [`0.4.7`](https://gitlab.com/hydroqc/hydroqc2mqtt/-/tags/0.4.7)

## v0.4.6-2
- Addon security change
    - Disable our custom AppArmor profile [`hydroqc-hass-addons!14`](https://gitlab.com/hydroqc/hydroqc-hass-addons/-/merge_requests/14)

## v0.4.6
⚠️ WARNING: requires reinstallation of the add-on
- Addon general improvements
    - The configuration is now translated (en/fr)
    - The addon is now easier to configure (breaking change)
- Addon security improvements
    - The addon is now signed, to prevent any tampering of the official image
    - An AppArmor profile has been set
- Library hydroqc2mqtt: upgraded to v0.4.6
    - Bring minor improvements

## 0.4.5
- Library hydroqc2mqtt: upgraded to v0.4.5
    - Bring minor improvements

## 0.4.4
⚠️ WARNING: requires reinstallation of the add-on
- Pre-built add-on image for the following architectures (amd64, i386, armhf, armv7, aarch64) to allow faster installation.
- The library hydroqc2mqtt has been upgraded to v0.4.4
    - This version now includes hourly consumption compatible with HASS Energy Dashboard. See docs for configuration steps

## 0.3.1
- Add new s6 overlay v3.x compatibility: fix https://gitlab.com/hydroqc/hydroqc-hass-addons/-/issues/4

## 0.3.0
- Bump hydro2mqtt to 0.3.0, fixes the following:
    - Fix error since winter credit end (April 1st)

## 0.2.4
- Bump hydro2mqtt to 0.2.2, fixes the following:
    - Fix non wintercredit accounts
    - Improve login

## 0.2.3
- Fix issue with custom MQTT server
- The structure of the configuration have changed a bit, you may have to do a complete reinstall of the addon if you encounter any issue. Make sure to copy the "hydro_quebec:" section of your config to easily reconfigure after re-install.

## 0.2.2
- hydro2mqtt 0.2.1

**Breaking Change**
- You will have to reconfigure the extension with your Hydro-Quebec information in the new format.
- With hydro2mqtt 0.2.1 the way the sensors are named changed. You will have to update your automations and lovelace configs to use the new names.
- If you have old sensors still showing try deleting the discovery topics of the old sensors in your MQTT server. All Hydroqc sensors will be under homeassistant/sensor/{yourcontractnumber} and under /homeassistant/binary_sensor/{yourcontractnumber}. If you delete all the topics they will be recreated when you restart the addon.

## 0.2.1
- Revert hydro2mqtt to 0.1.6 until 0.2.1 fix is released

## 0.2.0

**Breaking Change**
You will have to reconfigure the extension with your Hydro-Quebec information in the new format.

**New feature**

Auto-configuration for HASSOS mqtt is now available. Unless you are using a custom MQTT server the addon will be able to autodiscover and configure your MQTT addon information.

**Changes**
- addon configuration structure (beaking)
- add documentation to addon
- add home-assistant mqtt auto-discovery

## 0.1
- Initial release

Refactoring using the new Hydro Quebec API Wrapper and hydroqc2mqtt
