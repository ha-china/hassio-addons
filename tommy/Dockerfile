ARG BUILD_FROM

# Stage 1: Pull tommysense/virtual-bridge
FROM tommysense/virtual-bridge:latest AS virtual-bridge

# Stage 2: Build Home Assistant add-on
FROM $BUILD_FROM

# Copy application files from virtual bridge
COPY --from=virtual-bridge /app /app

# Install tempio templating engine
ARG TEMPIO_VERSION BUILD_ARCH
RUN \
    curl -sSLf -o /usr/bin/tempio \
    "https://ghfast.top/github.com/home-assistant/tempio/releases/download/${TEMPIO_VERSION}/tempio_${BUILD_ARCH}"

# Install Node.js and Caddy
RUN apt-get update && \
    apt-get install -y ca-certificates curl gnupg debian-keyring debian-archive-keyring apt-transport-https && \
    curl -1sLf 'https://dl.cloudsmith.io/public/caddy/stable/gpg.key' | gpg --dearmor -o /usr/share/keyrings/caddy-stable-archive-keyring.gpg && \
    curl -1sLf 'https://dl.cloudsmith.io/public/caddy/stable/debian.deb.txt' | tee /etc/apt/sources.list.d/caddy-stable.list && \
    mkdir -p /etc/apt/keyrings && \
    curl -fsSL https://deb.nodesource.com/gpgkey/nodesource-repo.gpg.key | gpg --dearmor -o /etc/apt/keyrings/nodesource.gpg && \
    echo "deb [signed-by=/etc/apt/keyrings/nodesource.gpg] https://deb.nodesource.com/node_22.x nodistro main" | tee /etc/apt/sources.list.d/nodesource.list && \
    apt-get update && \
    apt-get install -y nodejs caddy && \
    rm -rf /var/lib/apt/lists/*

# Reinstall dependencies to ensure compatibility with target architecture
RUN cd /app && \
    mv node_modules/@tommy/compute-engine /tmp/compute-engine && \
    rm -rf node_modules && \
    mkdir -p node_modules/@tommy && \
    mv /tmp/compute-engine node_modules/@tommy/compute-engine && \
    npm install --omit=dev

# Configure data directory
ENV CONFIG_DIR=/data

# Copy root filesystem
COPY rootfs /