#!/usr/bin/with-contenv bashio
# ==============================================================================
# Prepare OctoPrint
# s6-overlay docs: https://github.com/just-containers/s6-overlay
# ==============================================================================
export BASEDIR="--basedir /data/config/octoprint"

{ # Check if OctoPrint is installed.
    octoprint $BASEDIR --version
} || { # Otherwise install it.
    { # Check if Python is available (at `/data/python/octoprint`, set by PATH in Dockerfile)
        python --version
    } || { # Otherwise create Python virtual environment.
        python3 -m venv /data/python/octoprint
        # Install wheel to speed up future installs.
        pip install wheel
    }
    pip install octoprint==$OCTOPRINT_VERSION
}

# Create initial OctoPrint config, if missing.
if [ ! -f /data/config/octoprint/config.yaml ]; then
    mkdir -p /data/config/octoprint
fi

# Update OctoPrint config with settings for the addon to behave properly.
updateConfig()
{
    # octoprint $BASEDIR config set --bool api.allowCrossOrigin true
    octoprint $BASEDIR config set folder.generated "/tmp/octoprint/generated"
    octoprint $BASEDIR config set folder.timelapse_tmp "/tmp/octoprint/timelapse/tmp"
    # octoprint $BASEDIR config set --bool server.allowFraming true
    octoprint $BASEDIR config set server.commands.serverRestartCommand "/scripts/octoprint_restart.sh"
    octoprint $BASEDIR config set server.commands.systemRestartCommand "/scripts/system_restart.sh"
    octoprint $BASEDIR config set server.commands.systemShutdownCommand "/scripts/system_shutdown.sh"
    octoprint $BASEDIR config set webcam.ffmpeg "/usr/bin/ffmpeg"
}
updateConfig

# Other setting changes, if needed. E.g. creating a user.
# Update OctoPrint config with customized settings, not strictly required for addon to work but helps with features.
# updateConfigCustom() {
    # Add user, if needed.
    # { # Make sure Ingress user for OctoPrint exists.
    #     bashio::log.notice "Ensure Ingress user (homeassistant) exist."
    #     if ! octoprint --basedir /data/config/octoprint user list | grep -q 'homeassistant'; then
    #         new_password=$(date +%s | sha256sum | base64 | head -c 32 ; echo)
    #         octoprint --basedir /data/config/octoprint user add --password "$new_password" --admin homeassistant # 2> /dev/null
    #     fi
    # } || { # catch
    #     bashio::log.warning "Failed to ensure Ingress user exists, may not be able to launch."
    # }
    # Trusted networks, access control etc.
# }
