# Home Assistant Add-on : HydroQC

This addon will fetch the data available from your Hydro-Quebec account using your portal credentials and make the resulting data available to Home-Assistant via MQTT.\
You can find the source of the addon here: [https://gitlab.com/hydroqc/hydroqc-hass-addons](https://gitlab.com/hydroqc/hydroqc-hass-addons) \
More details and information on the sensors provided is available in the [project documentation](https://hydroqc.ca)

## Donations

We put a lot of heart and effort in this project, any contribution is greatly appreciated!

[![Donate](https://img.shields.io/badge/Donate-Hydroqc-green)](https://hydroqc.ca/en/donations)

## Blueprints for Winter Credits and Flex D

We also provide Blueprints for use with the Winter Credits option and for Flex D.

https://github.com/hydroqc/hass-blueprint-hydroqc

Installation:

**Winter Credit** : [![Open your Home Assistant instance and show the blueprint import dialog with a specific blueprint pre-filled.](https://my.home-assistant.io/badges/blueprint_import.svg)](https://my.home-assistant.io/redirect/blueprint_import/?blueprint_url=https%3A%2F%2Fraw.githubusercontent.com%2Fhydroqc%2Fhass-blueprint-hydroqc%2Fmain%2Fhydroqc-winter-credits.yaml)

**Flex D** : [![Open your Home Assistant instance and show the blueprint import dialog with a specific blueprint pre-filled.](https://my.home-assistant.io/badges/blueprint_import.svg)](https://my.home-assistant.io/redirect/blueprint_import/?blueprint_url=https%3A%2F%2Fraw.githubusercontent.com%2Fhydroqc%2Fhass-blueprint-hydroqc%2Fmain%2Fhydroqc-flex-d.yaml)

Make sure to consult the [documentation](https://hydroqc.ca/en/docs) for more information on how to use the Blueprints.

## Configuration values

The base configuration is to provide only a NAME, RATE and RATE_OPTION if applicable. This will give you the winter peak data from Hydro-Québec open-data portal.

You can also provide your Hydro-Québec account information and obtain information specific to your account such as your balance and hourly consumption.

More advanced configuration are available if needed.

#### hq_name

Name for the contract (maison, chalet, duplex,etc)
```maison```

#### hq_rate
Rate of the contract. Possible values can be found here https://hydroqc.ca/fr/docs/overview/supported-accounts/

```D```
```DPC```
```DT```

#### hq_rate_option
Rate option of the contract. Possible values can be found here https://hydroqc.ca/fr/docs/overview/supported-accounts/. \
Will most likely remain emtpy unless you are on winter credits.
```CPC```


#### hq_username

```email@domain.tld```

#### hq_password

```YourPortalPassword```

#### hq_customer

Customer number (Numéro de client) from your invoice.\
10 digits, you may need to add a leading 0 to the value!!!\
Ex: '987 654 321' will be '0987654321'

```'0987654321'```

#### hq_account

Account Number (Numéro de compte) from your invoice

```'654321987654'```

#### hq_contract
Contract Number (Numéro de contrat) from your invoice\
10 digits, you may need to add a leading 0 to the value!!!\
Ex: '123 456 789' will be '0123456789'

```'0123456789'```

#### sync_hourly_consumption
A boolean that enable or disable the hourly consumption feature\
that can be used in HASS Energy Dashboard.

```true```

#### preheat_duration_minutes
Define how much time (minutes) in advance
the preheating should start before a peak event

```180```

### mqtt

The MQTT configuration will be done automatically to use your MQTT addon in Home-Assistant OS. \
You only need to change this section if you have an external MQTT server.

```
mqtt:
  mqtt_discovery_data_topic: "homeassistant"
  mqtt_data_root_topic: "hydroqc"
  mqtt_username: 'login'
  mqtt_password: 'password'
  mqtt_server: '192.168.0.23'
  mqtt_port: '1883'

```

#### mqtt_discovery_data_topic

The mqtt discovery topic for homeassistant. Change at your own risks

```"homeassistant"```

#### mqtt_data_root_topic

The root mqtt topic where the hydroqc generated values will be published

```"hydroqc"```

### advanced

Advanced settings should probably not be touched unless you know what you are doing.

#### ha_url

The websocket url to HASS Core.

#### ha_token

The supervisor token to access the HASS websocket core api.

#### timezone

Your timezone, for most of Hydro-Quebec's customer the default "America/Toronto" is fine but we have the options for our friends in Blanc Sablon.

#### log_level

Log level of the output. Can be either DEBUG, INFO, WARNING, ERROR or CRITICAL

#### hydroqc_config_file

We use a default file. If you know what you are doing and want to provide your own file this is where you should set it's path.

## Energy Dashboard Configuration

To configure the HASS Energy Dashboard with Hydro-Quebec power consumption data, follow the steps described [here](https://hydroqc.ca/en/docs/configuration/home-assistant-specific/).
