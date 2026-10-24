#!/usr/bin/with-contenv bashio

#Token
#Dynu_Token=""
#
#Endpoint
Dynu_EndPoint="https://api.dynu.com/v2"
#
#Author: Dynu Systems, Inc.
#Report Bugs here: https://github.com/shar0119/acme.sh
#
########  Public functions #####################

#Usage: add _acme-challenge.www.domain.com "XKrxpRBosdIKFzxW_CT3KLZNf6q0HG9i01zxXp5CPBs"
dns_dynu_add() {
  fulldomain=$1
  txtvalue=$2

  if [ -z "$Dynu_Token" ]; then
    bashio::log.error "Missing Dynu token."
    return 1
  fi

  bashio::log.info "Get domain ID"
  if ! _get_domain_id "$fulldomain"; then
    bashio::log.error "Invalid domain."
    return 1
  fi

  bashio::log.info "Creating TXT record."
  if ! _dynu_rest POST "dns/$DynuDnsId/record" "{\"domainId\":\"$DynuDnsId\",\"nodeName\":\"_acme-challenge\",\"recordType\":\"TXT\",\"textData\":\"$txtvalue\",\"state\":true,\"ttl\":90}"; then
    return 1
  fi

  if ! _contains "$response" "200"; then
    bashio::log.error "Could not add TXT record."
    return 1
  fi

  return 0
}

#Usage: rm _acme-challenge.www.domain.com "XKrxpRBosdIKFzxW_CT3KLZNf6q0HG9i01zxXp5CPBs"
dns_dynu_rm() {
  fulldomain=$1
  txtvalue=$2

  if [ -z "$Dynu_Token" ]; then
    bashio::log.error "Missing Dynu token."
    return 1
  fi

  bashio::log.info "Get domain ID"
  if ! _get_domain_id "$fulldomain"; then
    bashio::log.error "Invalid domain."
    return 1
  fi

  bashio::log.info "Checking for TXT record."
  if ! _get_recordid "$fulldomain" "$txtvalue"; then
    bashio::log.error "Could not get TXT record id."
    return 1
  fi

  if [ "$_dns_record_id" = "" ]; then
    bashio::log.error "TXT record not found."
    return 1
  fi

  bashio::log.info "Removing TXT record."
  if ! _delete_txt_record "$_dns_record_id"; then
    bashio::log.error "Could not remove TXT record $_dns_record_id."
  fi

  return 0
}

_get_domain_id() {
  domain=$1
  if ! _dynu_rest GET "dns" ""; then
    bashio::log.warning "DynuDNS GET dns API call failed."
    return 1
  fi

  bashio::log.debug "$domain" "$response"

  if jq --arg name "$domain" 'any(.domains[]; .name == $name)'; then
    DynuDnsId=$(echo $response | jq --arg name "$domain" '.domains[] | select(.name == $name) | .id')
    bashio::log.debug "Fetched DynuDnsId: " "${DynuDnsId}"
    return 0
  fi
  
  bashio::log.warning "Failed to get DynuDNS domain id"
  return 1

}

_get_recordid() {
  fulldomain=$1
  txtvalue=$2

  if ! _dynu_rest GET "dns/$DynuDnsId/record" ""; then
    return 1
  fi

  if ! _contains "$response" "$txtvalue"; then
    _dns_record_id=0
    return 0
  fi

  _dns_record_id=$(printf "%s" "$response" | sed -e 's/[^{]*\({[^}]*}\)[^{]*/\1\n/g' | grep "\"textData\":\"$txtvalue\"" | sed -e 's/.*"id":\([^,]*\).*/\1/')
  return 0
}

_delete_txt_record() {
  _dns_record_id=$1

  if ! _dynu_rest DELETE "dns/$DynuDnsId/record/$_dns_record_id" ""; then
    return 1
  fi

  if ! _contains "$response" "200"; then
    return 1
  fi

  return 0
}

_dynu_rest() {
  m=$1
  ep="$2"
  data="$3"
  bashio::log.debug "$ep"

  _H1="API-Key: $Dynu_Token"
  _H2="Content-Type: application/json"

   bashio::log.debug "$m" "$Dynu_EndPoint/$ep"
  if [ "$data" ]; then
    response=$(curl -s -H "$_H1" -H "$_H2" -X $m "$Dynu_EndPoint/$ep" -d $data)
  else
    response=$(curl -s -H "$_H1" -H "$_H2" -X $m "$Dynu_EndPoint/$ep")
  fi

  if [ "$?" != "0" ]; then
    bashio::log.error " _dynu_rest error is:  $ep"
    return 1
  fi
  bashio::log.debug " _dynu_rest response is: $response"
  return 0
}

_contains() {
  _str="$1"
  _sub="$2"
  echo "$_str" | grep -- "$_sub" >/dev/null 2>&1
}
