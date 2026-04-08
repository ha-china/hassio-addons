# OpenBao Home Assistant Add-on

OpenBao is an open-source, community-driven fork of HashiCorp Vault. It
provides identity-based secrets management, dynamic credentials, and
encryption-as-a-service for your homelab.

## First Start

On the very first start, the addon automatically:

1. Creates data directories under `/data/openbao/`
2. Generates the server configuration from your options
3. Starts the OpenBao server
4. **Initializes** the Raft storage backend (single key share, 1-of-1 threshold)
5. Saves the root token and unseal key to `/data/openbao/init.json`
6. **Unseals** the vault (if `auto_unseal: true`)

**After the first start, immediately back up `/data/openbao/init.json`.**
This file contains your root token and unseal key. If lost, your secrets are
unrecoverable.

## Getting the Root Token

The init file is at `/data/openbao/init.json` in the addon's data volume.
In Home Assistant, this maps to:

```text
/addon_configs/local_openbao/init.json
```

To read it via the Terminal addon or SSH:

```bash
cat /addon_configs/local_openbao/init.json | jq .
```

The JSON structure:

```json
{
  "unseal_keys_b64": ["<base64-encoded-unseal-key>"],
  "unseal_keys_hex": ["<hex-encoded-unseal-key>"],
  "unseal_shares": 1,
  "unseal_threshold": 1,
  "recovery_keys_b64": [],
  "recovery_keys_hex": [],
  "recovery_keys_shares": 0,
  "recovery_keys_threshold": 0,
  "root_token": "hvs.XXXXXXXXXXXXXXXX"
}
```

Use `root_token` to log in to the UI or CLI.

## Accessing the UI

Access the UI at `http://<homeassistant-ip>:8200/ui/`. For encrypted access,
place a reverse proxy (e.g. Traefik) in front of port 8200.

Log in with the root token from `init.json`.

## Creating Scoped Tokens

Never use the root token for day-to-day automation. Create scoped tokens
instead.

### Enable the KV v2 Secrets Engine

```bash
export VAULT_ADDR="http://<homeassistant-ip>:8200"
export VAULT_TOKEN="<root-token>"

bao secrets enable -path=secret kv-v2
```

### Create a Policy

```bash
bao policy write homelab-rw - <<EOF
path "secret/data/*" {
  capabilities = ["create", "read", "update", "delete", "list"]
}
path "secret/metadata/*" {
  capabilities = ["list"]
}
EOF
```

### Create a Token with the Policy

```bash
bao token create -policy=homelab-rw -ttl=8760h -renewable=true
```

## AppRole Auth (Recommended for Automation)

AppRole is preferred for Terraform, Ansible, and other automation tools
because credentials can be rotated independently.

### Setup

```bash
# Enable AppRole auth
bao auth enable approle

# Create an AppRole for your automation
bao write auth/approle/role/terraform \
    token_policies="homelab-rw" \
    token_ttl=1h \
    token_max_ttl=4h

# Get the Role ID (static, can be stored in your repo)
bao read auth/approle/role/terraform/role-id

# Generate a Secret ID (rotate this periodically)
bao write -f auth/approle/role/terraform/secret-id
```

### Login

```bash
bao write auth/approle/login \
    role_id="<role-id>" \
    secret_id="<secret-id>"
```

## Working with Secrets

```bash
# Write a secret
bao kv put secret/myapp/db password="s3cr3t" username="admin"

# Read a secret
bao kv get secret/myapp/db

# Read a specific field
bao kv get -field=password secret/myapp/db

# List secrets
bao kv list secret/
```

## Raft Snapshot Backup/Restore

OpenBao's Raft backend stores all data in `/data/openbao/data/`. HA snapshots
will include this directory automatically. For manual Raft-level snapshots:

```bash
# Save snapshot
bao operator raft snapshot save /data/openbao/backup.snap

# Restore snapshot (requires unsealed vault)
bao operator raft snapshot restore /data/openbao/backup.snap
```

## TLS Configuration

By default, TLS is disabled. For encrypted access, use Traefik or another
reverse proxy in front of OpenBao.

To enable TLS directly on OpenBao:

1. Place your certificate files in `/ssl/openbao/`:
   - `fullchain.pem` — certificate chain
   - `privkey.pem` — private key

2. Set `tls_disable: false` in the addon options

3. Restart the addon

With TLS enabled, use `https://<homeassistant-ip>:8200` for direct access.

## Using with Terraform

```hcl
terraform {
  required_providers {
    vault = {
      source  = "hashicorp/vault"
      version = "~> 4.0"
    }
  }
}

provider "vault" {
  address = "http://<homeassistant-ip>:8200"
  auth_login {
    path = "auth/approle/login"
    parameters = {
      role_id   = var.vault_role_id
      secret_id = var.vault_secret_id
    }
  }
}

data "vault_kv_secret_v2" "db" {
  mount = "secret"
  name  = "myapp/db"
}
```

The `hashicorp/vault` Terraform provider is fully compatible with OpenBao.

## Using with Ansible

```yaml
- name: Get database password
  ansible.builtin.set_fact:
    db_pass: "{{ lookup('community.hashi_vault.hashi_vault',
      'secret=secret/data/myapp/db:password
       url=http://<homeassistant-ip>:8200
       auth_method=approle
       role_id=' ~ vault_role_id ~ '
       secret_id=' ~ vault_secret_id) }}"
```

Requires the `community.hashi_vault` Ansible collection:

```bash
ansible-galaxy collection install community.hashi_vault
```

## Configuration Options

| Option | Default | Description |
| -------- | --------- | ----------- |
| `log_level` | `info` | Log verbosity level |
| `auto_unseal` | `true` | Auto-unseal on startup using key from `init.json` |
| `tls_disable` | `true` | Disable TLS (use a reverse proxy for encryption) |
| `env_vars` | `[]` | Extra environment variables for the OpenBao process |

## Security Notes

- The `auto_unseal` option stores the unseal key in `/data/openbao/init.json`.
  Anyone with filesystem access to your HA instance can unseal OpenBao.
- For higher security environments, set `auto_unseal: false` and supply the
  unseal key manually after each restart via the UI or CLI.
- The root token should be used only for initial setup. Create scoped tokens
  or AppRole credentials for ongoing use.
- Raft data and `init.json` are both in the `data` volume, so HA snapshots
  back them up together.
