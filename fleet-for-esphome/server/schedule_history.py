"""Persisted schedule history ring buffer (SU.6 / SU.7 / #70).

Stores the last N fire events per target as JSON on disk so history
survives server restarts. Loaded on import, saved after each mutation.
"""

from __future__ import annotations

import json
import logging
from collections import deque
from datetime import datetime
from pathlib import Path

logger = logging.getLogger(__name__)

_MAX_PER_TARGET = 50
_HISTORY_FILE = Path("/data/schedule_history.json")

_history: dict[str, deque[tuple[datetime, str, str]]] = {}


def _load() -> None:
    """Load history from disk on startup."""
    try:
        if not _HISTORY_FILE.exists():
            return
        data = json.loads(_HISTORY_FILE.read_text(encoding="utf-8"))
        for target, entries in data.items():
            dq: deque[tuple[datetime, str, str]] = deque(maxlen=_MAX_PER_TARGET)
            for fired_iso, job_id, outcome in entries:
                dq.append((datetime.fromisoformat(fired_iso), job_id, outcome))
            _history[target] = dq
        logger.info("Loaded schedule history: %d target(s)", len(_history))
    except Exception:
        logger.debug("Failed to load schedule history", exc_info=True)


def _save() -> None:
    """Persist history to disk."""
    try:
        data: dict[str, list[list[str]]] = {}
        for target, entries in _history.items():
            data[target] = [
                [fired_at.isoformat(), job_id, outcome]
                for fired_at, job_id, outcome in entries
            ]
        _HISTORY_FILE.parent.mkdir(parents=True, exist_ok=True)
        tmp = _HISTORY_FILE.with_suffix(".json.tmp")
        tmp.write_text(json.dumps(data), encoding="utf-8")
        tmp.replace(_HISTORY_FILE)
    except Exception:
        logger.debug("Failed to save schedule history", exc_info=True)


def record(target: str, fired_at: datetime, job_id: str, outcome: str = "enqueued") -> None:
    """Record a scheduler fire event and persist."""
    _history.setdefault(target, deque(maxlen=_MAX_PER_TARGET)).append(
        (fired_at, job_id, outcome)
    )
    _save()


def update_outcome(job_id: str, outcome: str) -> None:
    """Update the outcome of a previously recorded fire event by job_id."""
    for entries in _history.values():
        for i, (fired_at, jid, _old_outcome) in enumerate(entries):
            if jid == job_id:
                entries[i] = (fired_at, jid, outcome)
                _save()
                return


def get(target: str) -> list[tuple[datetime, str, str]]:
    """Return fire history for a target as [(fired_at, job_id, outcome), ...]."""
    return list(_history.get(target, []))


def get_all() -> dict[str, list[tuple[datetime, str, str]]]:
    """Return all history entries."""
    return {k: list(v) for k, v in _history.items()}


def clear() -> None:
    """Clear all history (used in tests)."""
    _history.clear()


# Load on import
_load()
