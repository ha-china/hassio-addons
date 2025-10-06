ARG BUILD_FROM=${BUILD_FROM}

FROM $BUILD_FROM

# Set shell
SHELL ["/bin/bash", "-o", "pipefail", "-c"]

# setup base system
ARG BUILD_ARCH=amd64

RUN apt-get update \
  && apt-get install -qq -y \
  default-jdk

RUN apt-get update \
  && apt-get install -qq -y \
  default-jre

# Copy root filesystem
COPY rootfs /

RUN dpkg --install /tmp/PharosControl-2.0.2-ub14.noarch.deb

RUN mkdir -p /var/lock/subsys

# cleanup
RUN rm -fr \
      /tmp/* \
      /var/{cache,log}/* \
      /var/lib/apt/lists/*

CMD ["/usr/bin/run.sh"]

# Build arguments
ARG BUILD_DATE
ARG BUILD_REF
ARG BUILD_VERSION

# Labels
LABEL \
    io.hass.name="pharos" \
    io.hass.description="Control TPLink CPE Wifi Devices" \
    io.hass.arch="${BUILD_ARCH}" \
    io.hass.type="addon" \
    io.hass.version=${BUILD_VERSION} \
    maintainer="David C Martin <github@dcmartin.com>" \
    org.label-schema.description="TPLink CPE controller" \
    org.label-schema.build-date=${BUILD_DATE} \
    org.label-schema.name="cpu2msghub" \
    org.label-schema.schema-version="1.0" \
    org.label-schema.url="https://addons.community" \
    org.label-schema.usage="https://ghfast.top/github.com/dcmartin/hassio-addons/pharos/tree/master/README.md" \
    org.label-schema.vcs-ref=${BUILD_REF} \
    org.label-schema.vcs-url="https://ghfast.top/github.com/dcmartin/hassio-addons/pharos" \
    org.label-schema.vendor="DCMARTIN"
