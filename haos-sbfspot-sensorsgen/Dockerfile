ARG BUILD_FROM=ghcr.nju.edu.cn/hassio-addons/base:18.1.1
FROM $BUILD_FROM

# Set shell
SHELL ["/bin/bash", "-o", "pipefail", "-c"]

# hadolint ignore=DL3018
RUN apk update && apk add --no-cache \
    mosquitto-clients \
    nano

WORKDIR /etc/s6-overlay/s6-rc.d/

# Copy addon root filesystem and then set permissions of all files. 
COPY rootfs /

RUN chmod -Rv a+x /etc/s6-overlay/s6-rc.d/**


# Build arguments  # --test  <<<< Need to remove this to build or add to build_arch to ignore builder
ARG BUILD_ARCH  
ARG BUILD_DATE
ARG BUILD_DESCRIPTION
ARG BUILD_NAME
ARG BUILD_REF
ARG BUILD_REPOSITORY
ARG BUILD_VERSION

# Labels
LABEL \
    io.hass.name="${BUILD_NAME}" \
    io.hass.description="${BUILD_DESCRIPTION}" \
    io.hass.arch="${BUILD_ARCH}" \
    io.hass.type="addon" \
    io.hass.version=${BUILD_VERSION} \
    maintainer="Hasqt <https://community.home-assistant.io/u/hasqt>" \
    org.opencontainers.image.title="${BUILD_NAME}" \
    org.opencontainers.image.description="${BUILD_DESCRIPTION}" \
    org.opencontainers.image.vendor="Hasqt" \
    org.opencontainers.image.authors="Hasqt <https://community.home-assistant.io/u/hasqt>" \
    org.opencontainers.image.licenses="MIT" \
    org.opencontainers.image.url="https://ghfast.top/github.com/habuild/hassio-addons/tree/main/haos-sbfspot-sensorsgen" \
    org.opencontainers.image.source="https://ghfast.top/github.com/${BUILD_REPOSITORY}" \
    org.opencontainers.image.documentation="https://ghfast.top/github.com/${BUILD_REPOSITORY}/blob/main/README.md" \
    org.opencontainers.image.created=${BUILD_DATE} \
    org.opencontainers.image.revision=${BUILD_REF} \
    org.opencontainers.image.version=${BUILD_VERSION}
