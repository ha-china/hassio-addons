"""DQ.2 — persistent store of per-worker disk-quota overrides.

Each worker runs an LRU eviction engine that bounds disk usage under
``/esphome-versions/`` to a byte budget. The fleet-wide default lives
in :class:`AppSettings` (``default_worker_disk_quota_bytes``); this
store holds per-worker *overrides* that win over that default.

Storage shape (JSON, ``/data/worker-disk-quotas.json``)::

    {"version": 1, "quotas": {"<identity>": <int> | null, ...}}

``<identity>`` is the worker's hostname, falling back to its persistent
``client_id`` (mirrors :mod:`worker_tags`'s identity scheme so a single
worker is keyed the same way across both stores). A value of ``None``
or absence both mean "no override — inherit the fleet default."

Seed semantics (mirrors :mod:`worker_tags`): the *first* registration
for an identity seeds the entry from ``RegisterRequest.disk_quota_bytes``
(the value baked into ``-e WORKER_DISK_QUOTA_GB=N`` on the docker run
command). Every later registration is server-side-wins so a UI quota
edit isn't clobbered by the next worker restart.
"""

from __future__ import annotations

import json
import logging
import os
import threading
from pathlib import Path
from typing import Optional

logger = logging.getLogger(__name__)

_SCHEMA_VERSION = 1


class WorkerDiskQuotaStore:
    """JSON-backed store keyed by worker identity.

    The store is small (one entry per worker the server has ever seen)
    and accessed on a slow path (worker registration, UI edit, every
    heartbeat for the effective-value lookup). A single coarse lock is
    plenty.
    """

    def __init__(self, path: str | Path) -> None:
        self._path = Path(path)
        self._lock = threading.Lock()
        self._quotas: dict[str, Optional[int]] = self._load()

    # ------------------------------------------------------------------
    # Persistence
    # ------------------------------------------------------------------

    def _load(self) -> dict[str, Optional[int]]:
        try:
            raw = self._path.read_text(encoding="utf-8")
        except FileNotFoundError:
            return {}
        except OSError as exc:
            logger.warning("worker-disk-quotas read failed (%s) — starting empty", exc)
            return {}
        try:
            data = json.loads(raw)
        except json.JSONDecodeError:
            logger.warning(
                "worker-disk-quotas file is corrupt — starting empty "
                "(will rewrite on next save)"
            )
            return {}
        if not isinstance(data, dict) or data.get("version") != _SCHEMA_VERSION:
            logger.warning(
                "worker-disk-quotas file has unknown schema version %r — starting empty",
                data.get("version") if isinstance(data, dict) else None,
            )
            return {}
        quotas_obj = data.get("quotas")
        if not isinstance(quotas_obj, dict):
            return {}
        out: dict[str, Optional[int]] = {}
        for ident, val in quotas_obj.items():
            if not isinstance(ident, str):
                continue
            if val is None:
                out[ident] = None
            elif isinstance(val, int) and val > 0:
                out[ident] = val
            # silently drop garbage values; the file may have been
            # hand-edited and a malformed entry shouldn't break the rest
        return out

    def _save(self) -> None:
        payload = {"version": _SCHEMA_VERSION, "quotas": self._quotas}
        tmp = self._path.with_suffix(self._path.suffix + ".tmp")
        try:
            self._path.parent.mkdir(parents=True, exist_ok=True)
            # fsync before rename so a crash mid-write doesn't silently
            # blank the quota store and let re-registration re-seed from
            # WORKER_DISK_QUOTA_GB. Mirrors WorkerTagStore._save.
            with tmp.open("w", encoding="utf-8") as f:
                json.dump(payload, f, indent=2, sort_keys=True)
                f.flush()
                os.fsync(f.fileno())
            tmp.replace(self._path)
        except OSError as exc:
            logger.error("worker-disk-quotas save failed: %s", exc)

    # ------------------------------------------------------------------
    # Public API
    # ------------------------------------------------------------------

    def load_or_seed(
        self,
        identity: str,
        seed_quota_bytes: Optional[int],
    ) -> Optional[int]:
        """Resolve a worker's disk-quota override at registration time.

        - First time we see this identity: seed from ``seed_quota_bytes``
          (which may be ``None`` meaning "no override; use default").
          Persists.
        - Subsequent times: return the persisted value; ignore
          ``seed_quota_bytes``. (Server-side-wins — same semantics as
          :class:`WorkerTagStore`.)
        """
        with self._lock:
            if identity in self._quotas:
                if seed_quota_bytes is not None and seed_quota_bytes != self._quotas[identity]:
                    logger.debug(
                        "worker %s registered with WORKER_DISK_QUOTA_GB=%r but server "
                        "already has %r; keeping server-side",
                        identity, seed_quota_bytes, self._quotas[identity],
                    )
                return self._quotas[identity]
            self._quotas[identity] = seed_quota_bytes
            self._save()
            return seed_quota_bytes

    def set_quota(self, identity: str, quota_bytes: Optional[int]) -> Optional[int]:
        """Set the override from the UI. Authoritative; clobbers any prior value.

        ``quota_bytes=None`` clears the override (worker inherits the fleet default).
        """
        with self._lock:
            self._quotas[identity] = quota_bytes
            self._save()
            return quota_bytes

    def get_quota(self, identity: str) -> Optional[int]:
        """Return the persisted override, or ``None`` if no override is set."""
        with self._lock:
            return self._quotas.get(identity)
