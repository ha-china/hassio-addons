#!/bin/bash

# SIGTERM-handler this funciton will be executed when the container receives the SIGTERM signal (when stopping)
reset_interfaces(){
    ifdown $INTERFACE
    sleep 1
    ip link set $INTERFACE down
    ip addr flush dev $INTERFACE
}

term_handler(){
    echo "Resseting interfaces"
    reset_interfaces
    echo "Stopping..."
    exit 0
}

# Setup signal handlers
trap 'term_handler' SIGTERM

echo "Starting..."

CONFIG_PATH=/data/options.json

SSID=$(jq --raw-output ".ssid" $CONFIG_PATH)
WPA_PASSPHRASE=$(jq --raw-output ".wpa_passphrase" $CONFIG_PATH)
CHANNEL=$(jq --raw-output ".channel" $CONFIG_PATH)
ADDRESS=$(jq --raw-output ".address" $CONFIG_PATH)
NETMASK=$(jq --raw-output ".netmask" $CONFIG_PATH)
BROADCAST=$(jq --raw-output ".broadcast" $CONFIG_PATH)
INTERFACE=$(jq --raw-output ".interface" $CONFIG_PATH)
INTERNET_IF=$(jq --raw-output ".internet_interface" $CONFIG_PATH)
ALLOW_INTERNET=$(jq --raw-output ".allow_internet" $CONFIG_PATH)
HIDE_SSID=$(jq --raw-output ".hide_ssid" $CONFIG_PATH)

DHCP_SERVER=$(jq --raw-output ".dhcp_enable" $CONFIG_PATH)
DHCP_START=$(jq --raw-output ".dhcp_start" $CONFIG_PATH)
DHCP_END=$(jq --raw-output ".dhcp_end" $CONFIG_PATH)
DHCP_DNS=$(jq --raw-output ".dhcp_dns" $CONFIG_PATH)
DHCP_SUBNET=$(jq --raw-output ".dhcp_subnet" $CONFIG_PATH)
DHCP_ROUTER=$(jq --raw-output ".dhcp_router" $CONFIG_PATH)

LEASE_TIME=$(jq --raw-output ".lease_time" $CONFIG_PATH)
STATIC_LEASES=$(jq -r '.static_leases[] | "\(.mac),\(.ip),\(.name)"' $CONFIG_PATH)

# Enforces required env variables
required_vars=(SSID WPA_PASSPHRASE CHANNEL ADDRESS NETMASK BROADCAST)
for required_var in "${required_vars[@]}"; do
    if [[ -z ${!required_var} ]]; then
        echo >&2 "Error: $required_var env variable not set."
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

# Configure iptables to enable/disable internet
RULE_3="POSTROUTING -o ${INTERNET_IF} -j MASQUERADE"
RULE_4="FORWARD -i ${INTERNET_IF} -o ${INTERFACE} -m state --state RELATED,ESTABLISHED -j ACCEPT"
RULE_5="FORWARD -i ${INTERFACE} -o ${INTERNET_IF} -j ACCEPT"

echo "Deleting iptables"
iptables -v -t nat -D $(echo ${RULE_3})
iptables -v -D $(echo ${RULE_4})
iptables -v -D $(echo ${RULE_5})

if test ${ALLOW_INTERNET} = true; then
    echo "Configuring iptables for NAT"
    iptables -v -t nat -A $(echo ${RULE_3})
    iptables -v -A $(echo ${RULE_4})
    iptables -v -A $(echo ${RULE_5})
fi


# Setup hostapd.conf
HCONFIG="/hostapd.conf"

echo "Setup hostapd ..."
echo "ssid=${SSID}" >> ${HCONFIG}
echo "wpa_passphrase=${WPA_PASSPHRASE}" >> ${HCONFIG}
echo "channel=${CHANNEL}" >> ${HCONFIG}
echo "interface=${INTERFACE}" >> ${HCONFIG}
echo "" >> ${HCONFIG}

if test ${HIDE_SSID} = true; then
    echo "Hidding SSID"
    echo "ignore_broadcast_ssid=1" >> ${HCONFIG}
fi

# Setup interface
IFFILE="/etc/network/interfaces"

echo "Setup interface ..."
echo "" > ${IFFILE}
echo "iface ${INTERFACE} inet static" >> ${IFFILE}
echo "  address ${ADDRESS}" >> ${IFFILE}
echo "  netmask ${NETMASK}" >> ${IFFILE}
echo "  broadcast ${BROADCAST}" >> ${IFFILE}
echo "" >> ${IFFILE}

echo "Resseting interfaces"
reset_interfaces
ifup ${INTERFACE}
sleep 1

if test ${DHCP_SERVER} = true; then
    # Create leases directory and file
    mkdir -p /var/lib/udhcpd
    touch /var/lib/udhcpd/udhcpd.leases

    # Calculate max leases from DHCP range
    START_IP_LAST_OCTET=$(echo ${DHCP_START} | cut -d. -f4)
    END_IP_LAST_OCTET=$(echo ${DHCP_END} | cut -d. -f4)
    MAX_LEASES=$((END_IP_LAST_OCTET - START_IP_LAST_OCTET + 1))

    # Setup hdhcpd.conf
    UCONFIG="/etc/udhcpd.conf"

    echo "Setup udhcpd ..."
    echo "interface    ${INTERFACE}"     >> ${UCONFIG}
    echo "start        ${DHCP_START}"    >> ${UCONFIG}
    echo "end          ${DHCP_END}"      >> ${UCONFIG}
    echo "max_leases   ${MAX_LEASES}"    >> ${UCONFIG}
    echo "opt dns      ${DHCP_DNS}"      >> ${UCONFIG}
    echo "opt subnet   ${DHCP_SUBNET}"   >> ${UCONFIG}
    echo "opt router   ${DHCP_ROUTER}"   >> ${UCONFIG}
    echo "opt lease    ${LEASE_TIME}"    >> ${UCONFIG}
    echo ""                              >> ${UCONFIG}

    # Add static leases
    while IFS=, read -r mac ip name; do
        if [ ! -z "$mac" ] && [ ! -z "$ip" ]; then
            echo "static_lease ${mac} ${ip}  # ${name}" >> ${UCONFIG}
        fi
    done <<< "${STATIC_LEASES}"

    echo "Starting DHCP server..."
    udhcpd -f &
fi

sleep 1

echo "Starting HostAP daemon ..."
hostapd ${HCONFIG} &

while true; do 
    echo "Interface stats:"
    ifconfig | grep ${INTERFACE} -A6
    sleep 3600
done
