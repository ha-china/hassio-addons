ARG BUILD_FROM
FROM $BUILD_FROM AS build-image

ARG BUILD_HYDROQC2MQTT_VERSION
RUN apk add --no-cache python3 && \
apk add --no-cache --virtual .build-dependencies gcc musl-dev curl py3-pip python3-dev git libffi-dev openssl-dev rust cargo
RUN git clone --depth 1 --branch ${BUILD_HYDROQC2MQTT_VERSION} https://gitlab.com/hydroqc/hydroqc2mqtt.git /usr/src/app/hydroqc2mqtt

WORKDIR /usr/src/app/hydroqc2mqtt

ENV NAME_HYDROQC2MQTT_VERSION=${BUILD_HYDROQC2MQTT_VERSION}
ENV CARGO_NET_GIT_FETCH_WITH_CLI=true

ENV UV_NO_CACHE=true
RUN pip install --upgrade uv && \
    uv venv /opt/venv
ENV VIRTUAL_ENV=/opt/venv
# ENV UV_INDEX_URL="https://pypi.org/simple"
# This removes the https://wheels.home-assistant.io/musllinux-index/ inherited from the base container which cause issue with installations
ENV UV_EXTRA_INDEX_URL=""

RUN echo "------- Building H2M ${BUILD_HYDROQC2MQTT_VERSION} ($(git rev-parse --short HEAD)) -------" && \
 uv pip install --upgrade pip setuptools_scm && \
 git describe --all > .describe && \
 if grep -q "tags/" .describe; then export SETUPTOOLS_SCM_PRETEND_VERSION_FOR_HYDROQC2MQTT=$(cat .describe | cut -d'/' -f2); else \
 export SETUPTOOLS_SCM_PRETEND_VERSION_FOR_HYDROQC2MQTT=$(python3 -m setuptools_scm); fi && \
 uv pip install .


# Start from a clean image, and import only required files
FROM $BUILD_FROM as addon-image

LABEL org.opencontainers.image.title="Home Assistant Add-on: Hydroqc"
LABEL org.opencontainers.image.description="Hydroqc-hass-addon"
LABEL org.opencontainers.image.source="https://gitlab.com/hydroqc/hydroqc-hass-addons"
LABEL org.opencontainers.image.authors="Mathieu Dallaire - mdallaire@hydroqc.ca"
LABEL org.opencontainers.image.licenses="Apache License 2.0"

ARG BUILD_ARCH
COPY --from=build-image /opt/venv /opt/venv
COPY --from=build-image /usr/src/app/hydroqc2mqtt /usr/src/app/hydroqc2mqtt
COPY --from=build-image /opt/venv/bin/hydroqc2mqtt /opt/venv/bin/hydroqc2mqtt
WORKDIR /usr/src/app/hydroqc2mqtt
COPY . .

RUN chmod +x ./entrypoint.sh

CMD [ "./entrypoint.sh" ]
