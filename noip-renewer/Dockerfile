FROM simaofsilva/noip-renewer:latest

# Copy root filesystem
COPY rootfs /

WORKDIR /app
RUN chmod -Rv a+x /app/**

FROM ghcr.nju.edu.cn/home-assistant/base:latest AS builder 

# Set shell
SHELL ["/bin/bash", "-o", "pipefail", "-c"]

# hadolint ignore=DL3018
RUN apk update && apk add --no-cache \
    mosquitto-clients \
    nano

COPY rootfs /

WORKDIR /etc/noip-renewer/

RUN chmod -Rv a+x /etc/noip-renewer/**

ENTRYPOINT ["/bin/bash"]
CMD ["/etc/noip-renewer/run"]

# Build arguments    <<<< Need to remove this to build or add to build_arch to ignore builder
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
    io.hass.version="${BUILD_VERSION}" \
    maintainer="Hasqt <https://community.home-assistant.io/u/hasqt>" \
    org.opencontainers.image.title="${BUILD_NAME}" \
    org.opencontainers.image.description="${BUILD_DESCRIPTION}" \
    org.opencontainers.image.vendor="Hasqt" \
    org.opencontainers.image.authors="Hasqt <https://community.home-assistant.io/u/hasqt>" \
    org.opencontainers.image.licenses="MIT" \
    org.opencontainers.image.url="https://gh-proxy.org/github.com/habuild/hassio/tree/main/noip-renewer" \
    org.opencontainers.image.source="https://gh-proxy.org/github.com/${BUILD_REPOSITORY}" \
    org.opencontainers.image.documentation="https://gh-proxy.org/github.com/${BUILD_REPOSITORY}/blob/main/noip-renewer/README.md" \
    org.opencontainers.image.created=${BUILD_DATE} \
    org.opencontainers.image.revision=${BUILD_REF} \
    org.opencontainers.image.version=${BUILD_VERSION}
