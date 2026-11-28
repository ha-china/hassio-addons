# Changelog

## 1.0.2

- Fix `jq: error (at <stdin>:1): Cannot iterate over null (null)` and the add-on stopping when the Dynu API answers with an error payload (401/429/5xx or HTML): a missing `.domains` field is now detected, logged, and handled instead of aborting
- Log the offending Dynu response body so API-side failures are visible
- Add a 10s timeout to Dynu API calls
- `aliases` handling no longer errors out on an empty or null alias list, and no longer interpolates values into the jq program

## 1.0.1

- Fix IPv4, IPv6, and Subdomain Issues (@vittorio88)

## 1.0.0

- Initial version
