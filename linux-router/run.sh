#!/bin/bash

# SIGTERM-handler this funciton will be executed when the container receives the SIGTERM signal (when stopping)
term_handler(){
    echo "Stopping..."
    exit 0
}

# Setup signal handlers
trap 'term_handler' SIGTERM

echo "Starting..."

CONFIG_PATH=/data/options.json

SSID=$(jq --raw-output ".ssid" $CONFIG_PATH)
PASSPHRASE=$(jq --raw-output ".passphrase" $CONFIG_PATH)
CHANNEL=$(jq --raw-output ".channel" $CONFIG_PATH)
ADDRESS=$(jq --raw-output ".address" $CONFIG_PATH)
INTERFACE=$(jq --raw-output ".interface" $CONFIG_PATH)
ALLOW_INTERNET=$(jq --raw-output ".allow_internet" $CONFIG_PATH)
BAN_PRIV=$(jq --raw-output ".allow_lan" $CONFIG_PATH)
HIDE_SSID=$(jq --raw-output ".hide_ssid" $CONFIG_PATH)
USER_ARGS=$(jq --raw-output ".user_args" $CONFIG_PATH)


# Enforces required variables
required_vars=(SSID PASSPHRASE CHANNEL ADDRESS)
for required_var in "${required_vars[@]}"; do
    if [[ -z ${!required_var} ]]; then
        echo >&2 "Error: $required_var variable not set."
        exit 1
    fi
done


INTERFACES_AVAILABLE="$(ifconfig -a | grep '^wl' | cut -d ':' -f '1')"
UNKNOWN=true

if [[ -z ${INTERFACE} ]]; then
    echo >&2 "Network interface not set. Please set one of the available:"
    echo >&2 "${INTERFACES_AVAILABLE}"
    exit 1
fi

for OPTION in ${INTERFACES_AVAILABLE}; do
    if [[ ${INTERFACE} == ${OPTION} ]]; then
        UNKNOWN=false
    fi
done

if [[ ${UNKNOWN} == true ]]; then
    echo >&2 "Unknown network interface ${INTERFACE}. Please set one of the available:"
    echo >&2 "${INTERFACES_AVAILABLE}"
    exit 1
fi

echo "Set nmcli managed no"
nmcli dev set ${INTERFACE} managed no

echo "Network interface set to ${INTERFACE}"


EXTRA_ARGS=""

if [[ "$CHANNEL" -gt 0 ]]; then
    EXTRA_ARGS+="-c ${CHANNEL} "
fi

if [[ ${ALLOW_INTERNET} = false ]]; then
    EXTRA_ARGS+="-n "
fi

if [[ ${BAN_PRIV} == false ]]; then
    EXTRA_ARGS+="--ban-priv "
fi

if [[ ${HIDE_SSID} = true ]]; then
    EXTRA_ARGS+="--hidden "
fi

EXTRA_ARGS+="-g ${ADDRESS} "

./lnxrouter --ap ${INTERFACE} ${SSID} --password ${PASSPHRASE} ${EXTRA_ARGS} ${USER_ARGS}
