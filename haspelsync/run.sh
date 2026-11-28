#!/bin/sh
# ------------------------------------------
# Run script for HaspelSync
# Persistent storage for HaspelSync 1.4.1+
# ------------------------------------------

BASE_DIR="/config"
APP_DIR="$BASE_DIR/app"
PRINTERS_DIR="$APP_DIR/printers"
LOGS_DIR="$APP_DIR/logs"

echo "[INFO] Checking/creating directories..."

mkdir -p "$PRINTERS_DIR" "$LOGS_DIR"

# Ensure persistent data belongs to node
echo "[INFO] Setting permissions for persistent data..."
chown -R 1000:1000 "$APP_DIR"

# Configure persistent storage
export DATA_DIR="$PRINTERS_DIR"
export LOG_DIR="$LOGS_DIR"

echo "[INFO] DATA_DIR=$DATA_DIR"
echo "[INFO] LOG_DIR=$LOG_DIR"

# Start HaspelSync as unprivileged node user
echo "[INFO] Starting HaspelSync as node..."
exec su-exec node:node node /app/entrypoint.js
