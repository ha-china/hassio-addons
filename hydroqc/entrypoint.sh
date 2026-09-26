#!/usr/bin/with-contenv bashio

export MQTT_USERNAME=$(bashio::config 'mqtt_username')
export MQTT_PASSWORD=$(bashio::config 'mqtt_password')
export MQTT_HOST=$(bashio::config 'mqtt_server')
export MQTT_PORT=$(bashio::config 'mqtt_port')
export MQTT_DISCOVERY_DATA_TOPIC=$(bashio::config 'mqtt_discovery_data_topic')
export MQTT_DATA_ROOT_TOPIC=$(bashio::config 'mqtt_data_root_topic')
export CONFIG_YAML=$(bashio::config 'hydroqc_config_file')
export TZ=$(bashio::config 'timezone')


# Don't populate env variables if config file is used
# avoid having config items in 2 places (https://gitlab.com/hydroqc/hydroqc2mqtt/-/blob/main/hydroqc2mqtt/daemon.py#L124)
# From https://gitlab.com/hydroqc/hydroqc-hass-addons/-/merge_requests/26
if ! bashio::config.exists 'hydroqc_config_file'; then
        export HQ2M_CONTRACTS_0_NAME=$(bashio::config 'hq_name')
        export HQ2M_CONTRACTS_0_RATE=$(bashio::config 'hq_rate')
        # Only export rate option if rate is set
        if bashio::config.exists 'hq_rate_option'; then
                export HQ2M_CONTRACTS_0_RATE_OPTION=$(bashio::config 'hq_rate_option')
        fi
        # Only export portal access configs if set
        if bashio::config.exists 'hq_username'; then
                export HQ2M_CONTRACTS_0_USERNAME=$(bashio::config 'hq_username')
                export HQ2M_CONTRACTS_0_PASSWORD=$(bashio::config 'hq_password')
                export HQ2M_CONTRACTS_0_CUSTOMER=$(bashio::config 'hq_customer')
                export HQ2M_CONTRACTS_0_ACCOUNT=$(bashio::config 'hq_account')
                export HQ2M_CONTRACTS_0_CONTRACT=$(bashio::config 'hq_contract')
                export HQ2M_CONTRACTS_0_SYNC_HOURLY_CONSUMPTION_ENABLED=$(bashio::config 'sync_hourly_consumption')
                if ! bashio::config.exists 'ha_url'; then
                        export HQ2M_CONTRACTS_0_HOME_ASSISTANT_WEBSOCKET_URL="ws://supervisor/core/websocket"
                else
                        export HQ2M_CONTRACTS_0_HOME_ASSISTANT_WEBSOCKET_URL=$(bashio::config 'ha_url')
                fi
                if ! bashio::config.exists 'ha_token'; then
                      export HQ2M_CONTRACTS_0_HOME_ASSISTANT_TOKEN=$SUPERVISOR_TOKEN
                else
                      export HQ2M_CONTRACTS_0_HOME_ASSISTANT_TOKEN=$(bashio::config 'ha_token')
                fi
        fi
        export HQ2M_CONTRACTS_0_LOG_LEVEL=$(bashio::config 'log_level')
        export HQ2M_CONTRACTS_0_HTTP_LOG_LEVEL=$(bashio::config 'log_level')
        export HQ2M_CONTRACTS_0_PREHEAT_DURATION_MINUTES=$(bashio::config 'preheat_duration_minutes')


fi



# Try Hassio MQTT Auto-Configuration
if ! bashio::services.available "mqtt" && ! bashio::config.exists 'mqtt_server'; then
    bashio::exit.nok "No internal MQTT service found and no MQTT server defined. Please install Mosquitto broker or specify your own."
else
    bashio::log.info "MQTT available, fetching server detail ..."
    if ! bashio::config.exists 'mqtt_server'; then
        bashio::log.info "MQTT server settings not configured, trying to auto-discovering ..."
        # MQTT_PREFIX="mqtt://"
        # if [ $(bashio::services mqtt "ssl") = true ]; then
        #     MQTT_PREFIX="mqtts://"
        # fi
        # MQTT_SERVER="$MQTT_PREFIX$(bashio::services mqtt "host"):$(bashio::services mqtt "port")"
        export MQTT_HOST=$(bashio::services mqtt "host")
        export MQTT_PORT=$(bashio::services mqtt "port")
        bashio::log.info "Configuring '$MQTT_HOST' mqtt server"
    fi
    if ! bashio::config.exists 'mqtt_username'; then
        bashio::log.info "MQTT credentials not configured, trying to auto-discovering ..."
        export MQTT_USERNAME=$(bashio::services mqtt "username")
        export MQTT_PASSWORD=$(bashio::services mqtt "password")
        bashio::log.info "Configuring '$MQTT_USERNAME' mqtt user"
    fi
fi


# Default values for optional fields
if ! bashio::config.exists 'timezone'; then
        export TZ="America/Toronto"
fi
if ! bashio::config.exists 'log_level'; then
        export HQ2M_CONTRACTS_0_LOG_LEVEL="INFO"
        export HQ2M_CONTRACTS_0_HTTP_LOG_LEVEL="INFO"
fi
if ! bashio::config.exists 'mqtt_discovery_data_topic'; then
        export MQTT_DISCOVERY_DATA_TOPIC="homeassistant"
fi
if ! bashio::config.exists 'mqtt_data_root_topic'; then
        export MQTT_DATA_ROOT_TOPIC="hydroqc"
fi

. /opt/venv/bin/activate
/opt/venv/bin/hydroqc2mqtt
