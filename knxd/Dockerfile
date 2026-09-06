ARG BUILD_FROM
FROM ${BUILD_FROM}

ENV LANG C.UTF-8
ARG KNXD_VERSION
ARG KNXD_REPO
RUN set -xe \
    && apk update \
    && apk add --no-cache --virtual .build-dependencies \
                build-base \
                gcc \
                git \
                abuild \
                binutils \
                automake \
                autoconf \
                libtool \
                argp-standalone \
                linux-headers \
                libev-dev \
                libusb-dev \
                cmake \
                dev86 \
     && apk add --no-cache \
                udev \
                libusb \
                libev \
				libgcc \
				libstdc++ \
     && git clone --branch "${KNXD_VERSION}" --depth 1 "${KNXD_REPO}" \
     && cd knxd \
     && ash ./bootstrap.sh \
     && ./configure --disable-systemd --enable-tpuart --enable-usb --enable-eibnetipserver --enable-eibnetip --enable-eibnetserver --enable-eibnetiptunnel \
     && mkdir -p src/include/sys && ln -s /usr/lib/bcc/include/sys/cdefs.h src/include/sys \
     && make \
     && make install \
     && make clean \
     && cd .. \
     && rm -rf knxd \
     && apk del --purge .build-dependencies

# add local files
COPY rootfs/ /