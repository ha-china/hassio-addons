#!/bin/sh
# ------------------------------------------
# Run script for Bambulab AMS Spoolman FilamentStatus
# Reads configuration from Add-on UI (/data/options.json)
# Stores data in /config/app and symlinks to /app for NodeJS compatibility
# ------------------------------------------

BASE_DIR="/config"
PRINTERS_DIR="$BASE_DIR/app/printers"
LOGS_DIR="$BASE_DIR/app/logs"
PRINTERS_FILE="$PRINTERS_DIR/printers.json"
OPTIONS_FILE="/data/options.json"

# Read Add-on UI options
if [ -f "$OPTIONS_FILE" ]; then
    echo "[INFO] Loading configuration from $OPTIONS_FILE..."
    PRINTER_ID=$(jq -r '.PRINTER_ID // ""' "$OPTIONS_FILE")
    PRINTER_CODE=$(jq -r '.PRINTER_CODE // ""' "$OPTIONS_FILE")
    PRINTER_IP=$(jq -r '.PRINTER_IP // ""' "$OPTIONS_FILE")
    SPOOLMAN_ENDPOINT=$(jq -r '.SPOOLMAN_ENDPOINT // ""' "$OPTIONS_FILE")
    UPDATE_INTERVAL=$(jq -r '.UPDATE_INTERVAL // 120000' "$OPTIONS_FILE")
    NEVER_MERGE_IF_TAG=$(jq -r '.NEVER_MERGE_IF_TAG // false' "$OPTIONS_FILE")
    DEBUG=$(jq -r '.DEBUG // false' "$OPTIONS_FILE")
    MODE=$(jq -r '.MODE // "manual"' "$OPTIONS_FILE")
else
    echo "[WARN] $OPTIONS_FILE not found, using default empty values."
    PRINTER_ID=""
    PRINTER_CODE=""
    PRINTER_IP=""
    SPOOLMAN_ENDPOINT=""
    UPDATE_INTERVAL=""
    NEVER_MERGE_IF_TAG=""
    DEBUG=""
    MODE=""
fi

export PRINTER_ID PRINTER_CODE PRINTER_IP SPOOLMAN_ENDPOINT UPDATE_INTERVAL NEVER_MERGE_IF_TAG DEBUG MODE

# Create required directories
echo "[INFO] Checking/creating directories..."
mkdir -p "$PRINTERS_DIR" "$LOGS_DIR"
chown -R 1000:1000 "$PRINTERS_DIR" "$LOGS_DIR"
chmod -R 775 "$PRINTERS_DIR" "$LOGS_DIR"

# Create printers.json if it does not exist
if [ ! -f "$PRINTERS_FILE" ]; then
    echo "[INFO] printers.json not found, creating default file..."
    cat > "$PRINTERS_FILE" <<EOL
[
  {
    "name": "Printer 1",
    "id": "$PRINTER_ID",
    "code": "$PRINTER_CODE",
    "ip": "$PRINTER_IP"
  }
]
EOL
    chown 1000:1000 "$PRINTERS_FILE"
    chmod 775 "$PRINTERS_FILE"
else
    echo "[INFO] printers.json already exists, not overwriting."
fi

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

# Backup & Update ONLY Printer 1 from UI
BACKUP_FILE="${PRINTERS_DIR}/printers.json.bak"

if cp "$PRINTERS_FILE" "$BACKUP_FILE"; then
    echo "[INFO] Backup created at $BACKUP_FILE (only most recent backup kept)"
else
    echo "[WARN] Failed to create backup, continuing..."
fi

echo "[INFO] Updating Printer 1 from UI in printers.json..."
tmpfile="${PRINTERS_FILE}.tmp"

jq \
  --arg id "$PRINTER_ID" \
  --arg code "$PRINTER_CODE" \
  --arg ip "$PRINTER_IP" \
  '.[0].id = $id | .[0].code = $code | .[0].ip = $ip' \
  "$PRINTERS_FILE" > "$tmpfile" && mv "$tmpfile" "$PRINTERS_FILE"

chown 1000:1000 "$PRINTERS_FILE"
chmod 775 "$PRINTERS_FILE"
echo "[INFO] Printer 1 updated."

# Print configuration summary
echo "[INFO] Configuration summary:"
echo "       PRINTER_ID=$PRINTER_ID"
echo "       PRINTER_CODE=$PRINTER_CODE"
echo "       PRINTER_IP=$PRINTER_IP"
echo "       SPOOLMAN_ENDPOINT=$SPOOLMAN_ENDPOINT"
echo "       UPDATE_INTERVAL=$UPDATE_INTERVAL"
echo "       NEVER_MERGE_IF_TAG=$NEVER_MERGE_IF_TAG"
echo "       DEBUG=$DEBUG"
echo "       MODE=$MODE"

# Start NodeJS application
echo "[INFO] Starting the application (entrypoint.js)..."
exec node /app/entrypoint.js
