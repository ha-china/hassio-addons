ARG BUILD_FROM=${BUILD_FROM}

FROM $BUILD_FROM

# Set shell
SHELL ["/bin/bash", "-o", "pipefail", "-c"]

# setup base system
ARG BUILD_ARCH=amd64

RUN apt-get update -qq -y

RUN apt-get install -qq -y --no-install-recommends \
  openjdk-8-jdk

RUN apt-get install -qq -y --no-install-recommends \
  openjdk-8-jre-headless

# Copy root filesystem
COPY rootfs /

RUN apt install -qq -y --no-install-recommends wget jsvc curl gnupg software-properties-common

RUN wget -qO - https://www.mongodb.org/static/pgp/server-4.4.asc | apt-key add -
RUN add-apt-repository "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu bionic/mongodb-org/4.4 multiverse"
RUN apt update -qq -y
RUN apt install -qq -y mongodb

# cleanup
RUN rm -fr \
      /tmp/* \
      /var/{cache,log}/* \
      /var/lib/apt/lists/*

RUN \
  mkdir /opt/omada \
  && \
  wget -qO - https://static.tp-link.com/2020/202008/20200805/Omada_SDN_Controller_v4.1.5_linux_x64.tar.gz \
    | tar xzf - -C /opt/omada 

CMD ["/usr/bin/run.sh"]

# Build arguments
ARG BUILD_DATE
ARG BUILD_REF
ARG BUILD_VERSION

# Labels
LABEL \
    io.hass.name="tpeap" \
    io.hass.description="Control TPLink EAP WiFi Devices" \
    io.hass.arch="${BUILD_ARCH}" \
    io.hass.type="addon" \
    io.hass.version=${BUILD_VERSION} \
    maintainer="David C Martin <github@dcmartin.com>" \
    org.label-schema.description="TPLink EAP controller" \
    org.label-schema.build-date=${BUILD_DATE} \
    org.label-schema.name="tpeap" \
    org.label-schema.schema-version="1.0" \
    org.label-schema.url="https://addons.community" \
    org.label-schema.usage="https://ghfast.top/github.com/dcmartin/hassio-addons/tpeap/tree/master/README.md" \
    org.label-schema.vcs-ref=${BUILD_REF} \
    org.label-schema.vcs-url="https://ghfast.top/github.com/dcmartin/hassio-addons/tpeap" \
    org.label-schema.vendor="DCMARTIN"
