Enter your Primary and then Secondary Inverter details

Sensor Creation can be activated as desired.
This addon is setup as a Oneshot app.
Therefore it must be restarted to send subsequent messages, Although really SBFspot you only be needed beyond your initial deployment.

It would be wise to be familiar with MQTT explorer to find what Topic and Messages your SBFspot is currently publishing.
You can then use this addon to match the topics and messages for MQTT dicovery.

Once your have your Discovery Messages set and your Devices have shown up in the Home Assistant MQTT Integration

If Plantname 2 and Plantname 3 are blank, Discovery Messages should be appended to {Primary_Inverter_Plantname_Inverter_Two}

Send Messages, when enabled, will only activate if the serial numbers are populated.

Test_Message will populate from your configuration and, when enabled and the Serials are set, will send out corresponding full data MQTT messages to Inverter Ones Plantname Topic.

Typical multi inverter SBFspot MQTT messaging is:

homeassistant/sbfspot_Your_Plantname/sbfspot_Inverter_Serial

When using multiple Inverters MQTT messages are published as follows

Inverter One:

```
Topic: homeassistant/sbfspot_Plantname_Inverter_One/sbfspot_InvSerial

            Message: {Inverter:One, Key1:Value1, Key2:Value2}
```

Inverter two, then publishes it's message to Inverter Ones Topic using Inverter Two data. The same is true for Inverter Three

Inverter Two:
Topic: homeassistant/sbfspot_Plantname_Inverter_One/sbfspot_InvSerial_Two
Message: {Inverter:Two, Key1:Value1, Key2:Value2}

MQTT Discovery requires Unique messages for Devices and entities.
With this addon Sensor Generation should be simplified for Mulit inverter setups.
