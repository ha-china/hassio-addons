ARG BUILD_ARCH=amd64
# Define base images for different architectures
FROM ghcr.nju.edu.cn/home-assistant/amd64-base-ubuntu:24.04 AS base-amd64
FROM ghcr.nju.edu.cn/home-assistant/aarch64-base-ubuntu:24.04 AS base-arm64

# Select the correct base image based on TARGETARCH (injected by buildx)
# TARGETARCH is 'amd64' or 'arm64'
ARG TARGETARCH
FROM base-${TARGETARCH}

COPY install.sh /
COPY healthcheck.sh /

# Home Assistant adds BUILD_ARCH, and buildx adds TARGETARCH; save the right one as ARCH
ARG TARGETARCH
ARG BUILD_ARCH
ARG ARCH=${TARGETARCH:-${BUILD_ARCH:-}}

# install version (major.minor or full version); OMADA_URL set in install.sh
ARG INSTALL_VER

# install omada controller (instructions taken from install.sh)
RUN /install.sh && rm /install.sh

# copy entrypoint after the installation, to avoid rebuilding whole image
# entrypoint-rootless.sh is not needed for Home Assistant
COPY entrypoint.sh /

# Copy rootfs
COPY rootfs /

WORKDIR /opt/tplink/EAPController/lib
EXPOSE 8088 8043 8843 29810/udp 29811 29812 29813 29814
HEALTHCHECK --start-period=6m CMD /healthcheck.sh
VOLUME ["/data"]
ENTRYPOINT ["/init"]
