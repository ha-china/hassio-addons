ARG BUILD_FROM
FROM $BUILD_FROM

LABEL João Loureiro <joaofl@gmail.com>

# Set shell
SHELL ["/bin/bash", "-o", "pipefail", "-c"]

ENV LANG C.UTF-8

# Install requirements for add-on
RUN apk update && apk add --no-cache    \
    bash jq                             \
    busybox-extras                      \
    hostapd networkmanager-cli iptables \
    procps-ng iw dnsmasq net-tools      \
    linux-firmware-other                \
    linux-firmware-ath6k                \
    linux-firmware-ath10k               \
    linux-firmware-ath9k_htc &&         \
    rm -rf /var/cache/apk/*

COPY run.sh /
RUN chmod a+x /run.sh

COPY lnxrouter /
RUN chmod a+x /lnxrouter

CMD [ "/run.sh" ]
