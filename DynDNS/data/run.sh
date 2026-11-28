#!/usr/bin/with-contenv bashio

WORK_DIR=/data/workdir

if bashio::config.has_value "ipv4"; then IPV4=$(bashio::config 'ipv4'); else IPV4=""; fi
if bashio::config.has_value "ipv6"; then IPV6=$(bashio::config 'ipv6'); else IPV6=""; fi
if bashio::config.has_value "dnsServiceUsername"; then DNS_SERVICE_USERNAME=$(bashio::config 'dnsServiceUsername'); else DNS_SERVICE_USERNAME=""; fi
if bashio::config.has_value "dnsServicePassword"; then DNS_SERVICE_PASSWORD=$(bashio::config 'dnsServicePassword'); else DNS_SERVICE_PASSWORD=""; fi
UPDATE_URL=$(bashio::config 'updateUrl')
if bashio::config.has_value "secondUpdateUrl"; then SECOND_UPDATE_URL=$(bashio::config 'secondUpdateUrl'); else SECOND_UPDATE_URL=""; fi
WAIT_TIME=$(bashio::config 'seconds')
curlCommand="curl -s --write-out \n%{http_code}"

# Add authentication if provided
if [ -n "${DNS_SERVICE_USERNAME}" ] && [ -n "${DNS_SERVICE_PASSWORD}" ]; then
    curlCommand="${curlCommand} -u ${DNS_SERVICE_USERNAME}:${DNS_SERVICE_PASSWORD}"
fi

# Function to update DNS
perform_dns_update() {
    local url="$1"

    # Replace variable calls with the values
    url_with_variables=$(eval "echo \"${url}\"")

    # Request
    response=$(${curlCommand} "${url_with_variables}&verbose=true")

    # Check that the command was executed successfully
    if [ $? -eq 0 ]; then
        # The last line contains the status code
        http_code=$(tail -n1 <<< "$response")
        # All lines except the last one
        answer=$(sed '$ d' <<< "$response")
      
        # Check if the HTTP code is 200
        if [ "${http_code}" -eq 200 ]; then
            # Check that there is no error in the response message
            if [ "${answer}" != 'KO' ]; then
                # Check for "no changed" message
                if [[ "${answer}" == *NOCHANGE* ]] || [[ "${answer}" == *nochg* ]]; then
                    bashio::log.debug "${answer}"
                else
                    bashio::log.info "${answer}"
                fi
            else
                bashio::log.warning "${answer}"
            fi
        else
            bashio::log.warning "HTTP-Anfragecode war ${http_code}. Antwort: ${answer}"
        fi
    else
        bashio::log.warning "${answer}"
    fi
}

# Run DynDNS
while true; do

    # Option to get ips over an url call like 
    [[ ${IPV4} != *:/* ]] && ipv4=${IPV4} || ipv4=$(curl -s -m 10 "${IPV4}")
    [[ ${IPV6} != *:/* ]] && ipv6=${IPV6} || ipv6=$(curl -s -m 10 "${IPV6}")
    
    # Get IPv6-address from host interface
    if [[ -n "$IPV6" && ${ipv6} != *:* ]]; then
        ipv6=
        bashio::cache.flush_all
        for addr in $(bashio::network.ipv6_address "$IPV6"); do
            # Skip non-global addresses
            if [[ ${addr} != fe80:* && ${addr} != fc* && ${addr} != fd* ]]; then
                ipv6=${addr%/*}
                break
            fi
        done
    fi
    
    # Get IPv4-address from host interface
    if [[ -n "$IPV4" && "$IPV4" != "none" && ${ipv4} != *:* ]]; then
        ipv4=
        bashio::cache.flush_all
        for addr in $(bashio::network.ipv4_address "$IPV4"); do
            ipv4=${addr%/*}
            break
        done
    fi
    
    if [[ ${ipv6} == *:* ]] || [[ -z ${ipv4} || ${ipv4} == *.* ]]; then
        perform_dns_update "${UPDATE_URL}"
        
        if [[ -n "$SECOND_UPDATE_URL" ]]; then
            perform_dns_update "${SECOND_UPDATE_URL}"
        fi
    fi

    sleep "${WAIT_TIME}"
done

bashio::exit.ok
