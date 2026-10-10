#!/bin/sh
# ------------------------------------------
# Run script for HaspelSync
# Since v1.3.0 all settings are managed via the Web UI (settings.json)
# ------------------------------------------

BASE_DIR="/config"
PRINTERS_DIR="$BASE_DIR/app/printers"
LOGS_DIR="$BASE_DIR/app/logs"

# Create required directories
echo "[INFO] Checking/creating directories..."
mkdir -p "$PRINTERS_DIR" "$LOGS_DIR"
chown -R 1000:1000 "$PRINTERS_DIR" "$LOGS_DIR"
chmod -R 775 "$PRINTERS_DIR" "$LOGS_DIR"

# Symlinks for NodeJS compatibility
if [ ! -L /app/printers ]; then
    rm -rf /app/printers
    ln -s "$PRINTERS_DIR" /app/printers
    echo "[INFO] Created symlink /app/printers → $PRINTERS_DIR"
fi

if [ ! -L /app/logs ]; then
    rm -rf /app/logs
    ln -s "$LOGS_DIR" /app/logs
    echo "[INFO] Created symlink /app/logs → $LOGS_DIR"
fi

# Start NodeJS application
echo "[INFO] Starting HaspelSync (entrypoint.js)..."
exec node /app/entrypoint.js
