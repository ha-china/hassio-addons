#!/usr/bin/python3

import logging
from paho.mqtt import client as mqtt_client
from bridge import telegraf_mqtt_bridge
import argparse

# This function is called when a message is received from the MQTT broker.
# The message is then passed to the telegraf_mqtt_bridge
# for processing, which in turn will call the data_transmit
# function to publish the modified data to the MQTT broker
# to be consumed by Home Assistant.
def data_received(client, userdata, data):
    tp.send(data)

def data_transmit(topic, payload, retain=False):
    # logging.debug(f"Publishing to {topic} the payload {payload}")
    client.publish(topic, payload, retain=retain)

def on_connect(client, userdata, flags, rc):
    if rc == 0:
        logging.info("Connected to MQTT Broker!")
    else:
        logging.info("Failed to connect, return code %d\n", rc)


# logger = logging.getLogger(__name__)
logging.basicConfig(
    format='[%(asctime)s] %(levelname)-2s %(message)s',
    level=logging.INFO,
    datefmt='%H:%M:%S')


# Construct an argument parser
all_args = argparse.ArgumentParser()

# Add arguments to the parser
all_args.add_argument("--user", required=False)
all_args.add_argument("--pass", required=False)
all_args.add_argument("--broker-ip", required=False, default="192.168.1.5")
all_args.add_argument("--port", required=False, default=1883)
all_args.add_argument("--topic", required=False, default="telegraf/#")
all_args.add_argument("--calc", required=False, default="")
all_args.add_argument("--log-level", required=False, default="info")

args = vars(all_args.parse_args())

## Configure client
client = mqtt_client.Client("telegraf2mqtt")
# client.enable_logger(logger)
client.username_pw_set(args['user'], args['pass'])
client.on_connect = on_connect
client.on_message = data_received

# Connect to HA broker, and subscribe to telegraf topics
client.connect(args['broker_ip'], int(args['port']))
client.subscribe(args['topic'])

# Pass the data transmit callback and the list of
# values to calculate
tp = telegraf_mqtt_bridge(data_transmit, args['calc'])

logging.info("Setup finished")

client.loop_forever()
