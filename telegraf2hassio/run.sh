#!/usr/bin/with-contenv bashio
# ==============================================================================
# Home Assistant Community Add-on: telegraf2hassio
# ==============================================================================

bashio::log.info "Starting Telegraf2Hassio"

term_handler(){
    echo "Stopping..."
    exit 0
}

# Setup signal handlers
trap 'term_handler' SIGTERM


CONFIG_PATH=/data/options.json

MQTT_BROKER=$(bashio::config 'mqtt_broker')
MQTT_PORT=$(bashio::config 'mqtt_port')
MQTT_USER=$(bashio::config 'mqtt_user')
MQTT_PASS=$(bashio::config 'mqtt_pass')
TELEGRAF_TOPIC=$(bashio::config 'telegraf_topic')
CALC_RATE=$(bashio::config 'calc_rate')
LOG_LEVEL=$(bashio::config 'log_level')

# Enforces required env variables
required_vars=(MQTT_BROKER MQTT_USER MQTT_PASS TELEGRAF_TOPIC)
for required_var in "${required_vars[@]}"; do
    if [[ -z ${!required_var} ]]; then
        echo >&2 "Error: $required_var env variable not set."
        exit 1
    fi
done

python3 /opt/telegraf2hassio/main.py \
                    --broker-ip=${MQTT_BROKER} \
                    --port=${MQTT_PORT}        \
                    --user=${MQTT_USER}        \
                    --pass=${MQTT_PASS}        \
                    --topic=${TELEGRAF_TOPIC}  \
                    --calc=${CALC_RATE}        \
                    --log-level=${LOG_LEVEL}
