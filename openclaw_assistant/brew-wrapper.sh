#!/usr/bin/env bash
# Wrapper script for brew that runs as linuxbrew user when called by root
# This is needed because Homebrew refuses to run as root

REAL_BREW="/home/linuxbrew/.linuxbrew/bin/brew"

if [ "$(id -u)" = "0" ]; then
    # Running as root - use sudo to run as linuxbrew user
    # Preserve necessary environment variables and properly pass all arguments
    exec sudo -u linuxbrew \
        HOMEBREW_NO_AUTO_UPDATE="${HOMEBREW_NO_AUTO_UPDATE:-1}" \
        HOMEBREW_NO_ANALYTICS="${HOMEBREW_NO_ANALYTICS:-1}" \
        HOME="/home/linuxbrew" \
        PATH="/home/linuxbrew/.linuxbrew/bin:/home/linuxbrew/.linuxbrew/sbin:$PATH" \
        "$REAL_BREW" "$@"
else
    # Not root - run directly
    exec "$REAL_BREW" "$@"
fi
