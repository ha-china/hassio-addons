# Home Assistant Add-on: Terrastate

Terrastate — an HTTP state backend for Terraform / OpenTofu with locking.

## Installation

1. Add this add-on repository to your Home Assistant instance.
2. Install the "Terrastate" add-on.
3. Set a `password` in the add-on configuration (required — the add-on will not
   start without one).
4. Start the add-on.

## Configuration

Example add-on options:

```yaml
log_level: info
username: terraform
password: "a-long-random-secret"
env_vars: []
```

### Option: `log_level`

Log verbosity of terrastate. One of `debug`, `info`, `warn`, `error`.

### Option: `username`

Basic-auth username clients must present. Default `terraform`.

### Option: `password` (required)

Basic-auth password clients must present. There is no default — set a strong
value (e.g. `openssl rand -hex 32`). The add-on refuses to start if empty.

### Option: `env_vars`

Optional list of extra `KEY=value` environment variables injected into the
terrastate process, for advanced flags not exposed above (e.g. metrics token).

## Networking

Terrastate listens on port **8445** over plain HTTP. Terminate TLS in front of
it — the [Traefik add-on](../traefik) is the recommended way — and point a
hostname at Home Assistant. Do not expose port 8445 directly to untrusted
networks without TLS, since basic-auth credentials would travel in clear text.

## Client configuration

Point Terraform / OpenTofu at the backend with a standard `http` backend block.
Each workspace gets its own path under `/remote/<name>`:

```hcl
terraform {
  backend "http" {
    address        = "https://<your-host>/remote/incus_infra"
    lock_address   = "https://<your-host>/remote/incus_infra"
    unlock_address = "https://<your-host>/remote/incus_infra"
  }
}
```

Supply the basic-auth credentials via environment variables so they never land
on disk:

```sh
export TF_HTTP_USERNAME="terraform"
export TF_HTTP_PASSWORD="a-long-random-secret"
terraform init
```

Locking uses the HTTP `LOCK`/`UNLOCK` methods; a held lock returns HTTP `423`.

## Persistence & backups

State lives in the add-on's private `/data` volume at
`/data/terrastate/storage/`. Each workspace is a flat file
`storage/<name>/terraform.tfstate` (plus a `terraform.lock` while locked).
This volume is not reachable via the Samba or SSH add-ons.

Every Home Assistant backup that includes this add-on contains the state. The
add-on uses cold backups: it is stopped for the few seconds the backup takes,
so no state file is captured mid-write. Terraform runs during that window fail
and can simply be retried. To restore, restore the add-on from a backup.

**Home Assistant backups are your only copy** unless you add something more —
configure an off-site backup location so your Terraform state has an
independent backup, not just a local one.
