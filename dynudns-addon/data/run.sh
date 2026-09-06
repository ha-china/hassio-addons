#!/usr/bin/with-contenv bashio

#bashio::log.level "debug"

source dns_dynu.sh


CERT_DIR=/data/letsencrypt
WORK_DIR=/data/workdir

# Let's encrypt
LE_UPDATE="0"

# DynuDNS
if bashio::config.has_value "ipv4"; then ipv4_fixed=$(bashio::config 'ipv4'); else ipv4_fixed=""; fi
if bashio::config.has_value "ipv6"; then ipv6_fixed=$(bashio::config 'ipv6'); else ipv6_fixed=""; fi
QUERY_URL_IPV4="https://ipv4.text.wtfismyip.com"
QUERY_URL_IPV6="https://ipv6.text.wtfismyip.com"
TOKEN=$(bashio::config 'token')
DOMAINS=$(bashio::config 'domains')
WAIT_TIME=$(bashio::config 'seconds')

export Dynu_Token=$TOKEN 
bashio::log.debug "Token:" "$Dynu_Token"

# Function that performe a renew
function le_renew() {
    local domain_args=()
    local aliases=''

    # Prepare domain for Let's Encrypt
    for domain in ${DOMAINS}; do
        for alias in $(jq --raw-output --exit-status "[.aliases[]|{(.alias):.domain}]|add.\"${domain}\" | select(. != null)" /data/options.json) ; do
            aliases="${aliases} ${alias}"
        done
    done

    aliases="$(echo "${aliases}" | tr ' ' '\n' | sort | uniq)"

    bashio::log.info "Renew certificate for domains: $(echo -n "${DOMAINS}") and aliases: $(echo -n "${aliases}")"

    for domain in $(echo "${DOMAINS}" "${aliases}" | tr ' ' '\n' | sort | uniq); do
        domain_args+=("--domain" "${domain}")
    done

    dehydrated --cron --hook ./hooks.sh --challenge dns-01 "${domain_args[@]}" --out "${CERT_DIR}" --config "${WORK_DIR}/config" || true
    LE_UPDATE="$(date +%s)"
}   

bashio::log.info "Initializing Dynu DNS Home Assistant Add-On for Domain(s): $(echo -n "${DOMAINS}")"

# Register/generate certificate if terms accepted
if bashio::config.true 'lets_encrypt.accept_terms'; then
    # Init folder structs
    mkdir -p "${CERT_DIR}"
    mkdir -p "${WORK_DIR}"

    # Clean up possible stale lock file
    if [ -e "${WORK_DIR}/lock" ]; then
        rm -f "${WORK_DIR}/lock"
        bashio::log.warning "Reset dehydrated lock file"
    fi

    # Generate new certs
    if [ ! -d "${CERT_DIR}/live" ]; then
        # Create empty dehydrated config file so that this dir will be used for storage
        touch "${WORK_DIR}/config"

        dehydrated --register --accept-terms --config "${WORK_DIR}/config"
    fi
fi

bashio::log.info "Entering main Dynu DNS loop"
# Run dynu
while true; do

    # Determine IPv4 Address
    if [[ -n "$ipv4_fixed" ]]; then # use fixed IPv4 address
        bashio::log.info "Using parsed argument for fixed IPv4: ${ipv4_fixed}"
        if [[ ${ipv4_fixed} == *.* ]]; then
            ipv4=${ipv4_fixed}
        else
            bashio::log.error "It appears the Add-On Argument: ipv4_fixed is not an IP address "
            exit 1
        fi
    else  # Ask external server for my IPv4 address, since HA probably doesn't know it.
        ipv4_queried=$(curl -s -f -m 10 "${QUERY_URL_IPV4}")
        if [[ ${ipv4_queried} == *.* ]]; then
            bashio::log.info "According to: ${QUERY_URL_IPV4} , IPv4 address is ${ipv4_queried}"
            ipv4=${ipv4_queried}
        else
            bashio::log.warning "It appears ipv4_queried: ${ipv4_queried} returned from ${QUERY_URL_IPV4} is not an IP address "
            sleep 5
            continue
        fi

    fi

    # Determine IPv6 Address
    if [[ -n "$ipv6_fixed" ]]; then # use fixed IPv6 address
        bashio::log.info "Using parsed argument for fixed IPv6: ${ipv6_fixed}"
        if [[ ${ipv6_fixed} == *.* ]]; then
            ipv6=${ipv6_fixed}
        else
            bashio::log.error "It appears the Add-On Argument: ipv6_fixed is not an IP address "
            sleep 5
            exit 1
        fi
    else  # Get IPv6 address from HA API, since add-on container does not have IPv6 address.
        ipv6=
        bashio::cache.flush_all
        for addr in $(bashio::network.ipv6_address); do
	    # Skip non-global addresses
	    if [[ ${addr} != fe80:* && ${addr} != fc* && ${addr} != fd* ]]; then
              ipv6=${addr%/*}
              bashio::log.info "According to the HA Supervisor API, IPv6 address is ${ipv6}"
              break
            fi
        done
    fi

    # Update each domain
    for domain in ${DOMAINS}; do

        # Get current domain configuration
        _get_domain_id "${domain}"
        bashio::log.info "Getting current domain configuration for domain: ${domain}"
        bashio::log.debug "DynuDnsId: ${DynuDnsId}"

        current_domain_config="$(curl -s -f -H "API-Key: $TOKEN" -H "Content-Type: application/json" "https://api.dynu.com/v2/dns/$DynuDnsId")"
        current_ipv4_address=$(echo "$current_domain_config" | jq -r '.ipv4Address')
        current_ipv6_address=$(echo "$current_domain_config" | jq -r '.ipv6Address')
        statusCode=$(echo "$current_domain_config" | jq '.statusCode')

        # Create new domain configuration
        new_domain_config=$current_domain_config
        if  [ "$statusCode" -eq 200 ]; then
            bashio::log.info "  - Dynu DNS get config Success. \"statusCode\": $statusCode"
            if  [[ "${ipv4}" == *.* ]]; then # Replace ipv4Address and ipv4 fields
                new_domain_config=$(echo "$new_domain_config" | jq ".ipv4Address = \"${ipv4}\" | .ipv4 = true")
            fi
            if  [[ "${ipv6}" == *:* ]]; then # Replace ipv6Address and ipv6 fields
                new_domain_config=$(echo "$new_domain_config" | jq ".ipv6Address = \"${ipv6}\" | .ipv6 = true")
            fi
        else
            bashio::log.warning "  - Dynu DNS get config failed, not \"statusCode:\" ${statusCode}. It answered: ${answer}"
            break
        fi

        # Update Domain config if it's different
        bashio::log.info "Updating Dynu DNS: ${domain} IP addresses"
        if [[ "$current_ipv4_address" != "$ipv4" ]] || [[ "$current_ipv6_address" != "$ipv6" ]] ; then

            answer="$(curl -s -f -X POST -H "API-Key: $TOKEN" -H "Content-Type: application/json" "https://api.dynu.com/v2/dns/$DynuDnsId" -d "${new_domain_config}")"
            statusCode=$(echo "$answer" | jq '.statusCode')

            if [ "$statusCode" -eq 200 ]; then
                bashio::log.info "  - Dynu DNS IP update Success: "statusCode:" ${statusCode}"
            else
                bashio::log.warning "  - Dynu DNS IP update did not succeed. "statusCode:" "$statusCode" . It answered: ${answer}"
            fi
        else
            bashio::log.info "  - Skipping IP update since the IPv4 and IPv6 addresses are the same as on Dynu DNS."

        fi
    done

    now="$(date +%s)"
    if bashio::config.true 'lets_encrypt.accept_terms' && [ $((now - LE_UPDATE)) -ge 43200 ]; then
        le_renew
    fi

    sleep "${WAIT_TIME}"
done
