"""TG.2 — routing-rule storage + evaluator.

Routing rules decide which workers may claim jobs for which devices,
based on user-managed tags. The model is K8s-flavoured:

  * A rule is a *conditional* — "WHEN a device matches `device_match`,
    THE WORKER must also match `worker_match`."
  * A rule that doesn't apply to a device (its `device_match` doesn't
    hold) imposes no constraint — every worker remains eligible for
    that device under that rule.
  * `is_eligible(device_tags, worker_tags, rules)` ANDs every rule.
    A single failing rule disqualifies the worker.

Storage shape (``/data/routing-rules.json``)::

    {"version": 1, "rules": [{
      "id": "kitchen-only",
      "name": "Kitchen devices need a worker tagged kitchen",
      "severity": "required",
      "device_match": [{"op": "all_of", "tags": ["kitchen"]}],
      "worker_match": [{"op": "all_of", "tags": ["kitchen"]}]
    }]}

Severity is reserved for future expansion (`preferred` with weights);
only ``"required"`` is accepted by the API in 1.7.0 — anything else is
rejected at load / create time.

Per-device additive rules (``routing_extra`` in the YAML metadata
comment block) compose in via simple list concat in the caller —
``effective_rules = global_rules + device.routing_extra`` — so this
module stays a pure-data primitive.
"""

from __future__ import annotations

import json
import logging
import os
import threading
from dataclasses import dataclass, field
from pathlib import Path
from typing import Iterable, Literal

logger = logging.getLogger(__name__)

_SCHEMA_VERSION = 1

# Operators a clause can use against a tag set. Ordered by frequency;
# new operators land at the end with explicit semantics.
ClauseOp = Literal["all_of", "any_of", "none_of"]
_VALID_OPS = ("all_of", "any_of", "none_of")
_VALID_SEVERITIES = ("required",)


class RoutingRuleError(ValueError):
    """Raised on malformed rules — unknown op, bad severity, empty clause tags, etc."""


@dataclass
class Clause:
    """One predicate against a tag set.

    ``all_of`` — every tag in ``tags`` must be present.
    ``any_of`` — at least one tag must be present.
    ``none_of`` — none of the tags may be present.
    """

    op: ClauseOp
    tags: list[str]


@dataclass
class Rule:
    """A K8s-style "when-then" routing rule.

    ``device_match`` clauses are ANDed; ``worker_match`` clauses are ANDed;
    the overall rule passes when EITHER the device fails to match (rule
    doesn't apply) OR the device AND the worker both match. See
    ``evaluate_rule``.
    """

    id: str
    name: str
    severity: Literal["required"]
    device_match: list[Clause] = field(default_factory=list)
    worker_match: list[Clause] = field(default_factory=list)


# ---------------------------------------------------------------------------
# Pure evaluation
# ---------------------------------------------------------------------------


def evaluate_clause(clause: Clause, tag_set: Iterable[str] | set[str]) -> bool:
    """True iff ``clause`` holds against ``tag_set``."""
    if not isinstance(tag_set, set):
        tag_set = set(tag_set)
    if clause.op == "all_of":
        return all(t in tag_set for t in clause.tags)
    if clause.op == "any_of":
        return any(t in tag_set for t in clause.tags)
    if clause.op == "none_of":
        return not any(t in tag_set for t in clause.tags)
    raise RoutingRuleError(f"unknown clause operator: {clause.op!r}")


def _matches_side(clauses: list[Clause], tag_set: set[str]) -> bool:
    """True iff every clause holds (clauses ANDed within a side)."""
    return all(evaluate_clause(c, tag_set) for c in clauses)


def evaluate_rule(rule: Rule, device_tags: list[str], worker_tags: list[str]) -> bool:
    """True iff ``rule`` passes for the (device, worker) pair.

    Conditional semantics: a rule that doesn't apply to the device
    (``device_match`` fails) automatically passes — the rule is silent
    on workers for devices it doesn't target. A rule that DOES apply
    requires the worker to match ``worker_match``.
    """
    dt = set(device_tags)
    wt = set(worker_tags)
    if not _matches_side(rule.device_match, dt):
        return True  # rule doesn't apply
    return _matches_side(rule.worker_match, wt)


def is_eligible(
    device_tags: list[str],
    worker_tags: list[str],
    rules: list[Rule],
) -> bool:
    """True iff every rule passes — a single failing rule blocks the worker."""
    return all(evaluate_rule(r, device_tags, worker_tags) for r in rules)


def _summarize_clauses(clauses: list[Clause]) -> str:
    """Human-readable one-line summary of a clause list (worker_match / device_match).

    Used in :class:`Job.blocked_reason` to populate the Queue tooltip
    (TG.9): "Blocked by rule '{name}' — no online worker matches `{summary}`."
    """
    if not clauses:
        return "(any)"
    parts: list[str] = []
    for c in clauses:
        joined = ", ".join(c.tags)
        if c.op == "all_of":
            parts.append(f"all of [{joined}]")
        elif c.op == "any_of":
            parts.append(f"any of [{joined}]")
        elif c.op == "none_of":
            parts.append(f"none of [{joined}]")
        else:
            parts.append(f"{c.op} [{joined}]")
    return " AND ".join(parts)


def find_blocking_rule(
    device_tags: list[str],
    worker_tags_list: list[list[str]],
    rules: list[Rule],
) -> tuple[bool, dict | None]:
    """TG.3 helper for ``re_evaluate_routing``.

    Decides whether *device* has at least one eligible worker among the
    candidates in *worker_tags_list*. Returns ``(True, None)`` when so;
    otherwise ``(False, blocked_reason)`` where ``blocked_reason`` names
    the *first applicable rule* that no worker satisfies — same surface
    the Queue's BLOCKED tooltip renders.

    Conditional semantics: a rule whose ``device_match`` doesn't apply to
    *device* never blocks anyone, no matter how strict its ``worker_match``.
    """
    if any(is_eligible(device_tags, wt, rules) for wt in worker_tags_list):
        return (True, None)
    dt = set(device_tags)
    for rule in rules:
        if not _matches_side(rule.device_match, dt):
            continue  # rule doesn't apply to this device
        # Rule applies. Does any worker match its worker_match?
        if any(_matches_side(rule.worker_match, set(wt)) for wt in worker_tags_list):
            continue  # not the blocker — some worker satisfies this rule
        return (False, {
            "rule_id": rule.id,
            "rule_name": rule.name,
            "summary": _summarize_clauses(rule.worker_match),
        })
    # Defensive: every rule on the (device, worker) graph has someone
    # satisfying it, yet no single worker satisfies all of them. The
    # rules ANDed together produced an empty intersection. Return a
    # generic reason that points at the rule list as a whole.
    return (False, {
        "rule_id": "",
        "rule_name": "(combined rules)",
        "summary": "no online worker matches every applicable rule",
    })


# ---------------------------------------------------------------------------
# Validation — used by both the store and the API layer (TG.4)
# ---------------------------------------------------------------------------


def validate_rule(rule: Rule) -> None:
    """Raise :class:`RoutingRuleError` if ``rule`` is malformed.

    Rules are validated at create / update time — we do NOT defensively
    re-validate on every evaluate call; the hot path stays a pure dict
    walk.
    """
    if rule.severity not in _VALID_SEVERITIES:
        raise RoutingRuleError(
            f"severity must be one of {_VALID_SEVERITIES!r}, got {rule.severity!r}",
        )
    for side_name, clauses in (("device_match", rule.device_match), ("worker_match", rule.worker_match)):
        for c in clauses:
            if c.op not in _VALID_OPS:
                raise RoutingRuleError(
                    f"{side_name}: unknown clause operator {c.op!r} "
                    f"(expected one of {_VALID_OPS!r})",
                )
            if not c.tags:
                raise RoutingRuleError(
                    f"{side_name}: clause with op={c.op!r} has empty tags list — "
                    "drop the clause instead, or add at least one tag",
                )


# ---------------------------------------------------------------------------
# Serialisation
# ---------------------------------------------------------------------------


def _clause_to_dict(c: Clause) -> dict:
    return {"op": c.op, "tags": list(c.tags)}


def _rule_to_dict(r: Rule) -> dict:
    return {
        "id": r.id,
        "name": r.name,
        "severity": r.severity,
        "device_match": [_clause_to_dict(c) for c in r.device_match],
        "worker_match": [_clause_to_dict(c) for c in r.worker_match],
    }


def _clause_from_dict(d: dict) -> Clause:
    op = d.get("op")
    tags = d.get("tags") or []
    if not isinstance(tags, list) or not all(isinstance(t, str) for t in tags):
        raise RoutingRuleError(f"clause tags must be a list of strings: {d!r}")
    if op not in _VALID_OPS:
        raise RoutingRuleError(f"unknown clause operator {op!r} (expected one of {_VALID_OPS!r})")
    return Clause(op=op, tags=list(tags))


def _rule_from_dict(d: dict) -> Rule:
    return Rule(
        id=str(d.get("id") or ""),
        name=str(d.get("name") or ""),
        severity=d.get("severity") or "required",
        device_match=[_clause_from_dict(c) for c in (d.get("device_match") or [])],
        worker_match=[_clause_from_dict(c) for c in (d.get("worker_match") or [])],
    )


# ---------------------------------------------------------------------------
# RoutingRuleStore — JSON-backed CRUD
# ---------------------------------------------------------------------------


class RoutingRuleStore:
    """JSON file-backed list of global routing rules.

    Tiny in size (a fleet of 10s of rules max), accessed on the slow path
    (rule create / update / delete from the UI) and on the eligibility
    hot path (read-only list reads). A single coarse lock around
    list / save is plenty.
    """

    def __init__(self, path: str | Path) -> None:
        self._path = Path(path)
        self._lock = threading.Lock()
        self._rules: list[Rule] = self._load()

    # ------------------------------------------------------------------
    # Persistence
    # ------------------------------------------------------------------

    def _load(self) -> list[Rule]:
        try:
            raw = self._path.read_text(encoding="utf-8")
        except FileNotFoundError:
            return []
        except OSError as exc:
            logger.warning("routing-rules read failed (%s) — starting empty", exc)
            return []
        try:
            data = json.loads(raw)
        except json.JSONDecodeError:
            logger.warning("routing-rules file is corrupt — starting empty")
            return []
        if not isinstance(data, dict) or data.get("version") != _SCHEMA_VERSION:
            logger.warning(
                "routing-rules file has unknown schema version %r — starting empty",
                data.get("version") if isinstance(data, dict) else None,
            )
            return []
        rules_raw = data.get("rules") or []
        out: list[Rule] = []
        for r in rules_raw:
            if not isinstance(r, dict):
                continue
            try:
                rule = _rule_from_dict(r)
                # Strict validation on load — a corrupt rule that snuck in
                # by direct file edit gets dropped with a warning rather
                # than poisoning every claim-job evaluation.
                validate_rule(rule)
                out.append(rule)
            except RoutingRuleError as exc:
                logger.warning("dropping malformed rule %r: %s", r.get("id"), exc)
        return out

    def _save_locked(self) -> None:
        payload = {
            "version": _SCHEMA_VERSION,
            "rules": [_rule_to_dict(r) for r in self._rules],
        }
        tmp = self._path.with_suffix(self._path.suffix + ".tmp")
        try:
            self._path.parent.mkdir(parents=True, exist_ok=True)
            # fsync before rename so an OOM-kill / power loss between the
            # write and the rename doesn't silently empty the rule set on
            # next boot via _load's graceful-corruption fallback.
            with tmp.open("w", encoding="utf-8") as f:
                json.dump(payload, f, indent=2, sort_keys=True)
                f.flush()
                os.fsync(f.fileno())
            tmp.replace(self._path)
        except OSError as exc:
            logger.error("routing-rules save failed: %s", exc)

    # ------------------------------------------------------------------
    # Public API
    # ------------------------------------------------------------------

    def list_rules(self) -> list[Rule]:
        """Snapshot of the current rule list. Safe for callers to iterate."""
        with self._lock:
            return list(self._rules)

    def get_rule(self, rule_id: str) -> Rule | None:
        with self._lock:
            for r in self._rules:
                if r.id == rule_id:
                    return r
        return None

    def create_rule(self, rule: Rule) -> Rule:
        validate_rule(rule)
        if not rule.id:
            raise RoutingRuleError("rule id is required for global rules")
        with self._lock:
            if any(r.id == rule.id for r in self._rules):
                raise RoutingRuleError(f"rule id {rule.id!r} is already in use")
            self._rules.append(rule)
            self._save_locked()
            return rule

    def update_rule(self, rule_id: str, new: Rule) -> Rule:
        validate_rule(new)
        with self._lock:
            for i, r in enumerate(self._rules):
                if r.id == rule_id:
                    # Preserve the canonical id — the caller may have
                    # passed a rule with a different id; updates don't
                    # rename. (Renames go via delete + create.)
                    new.id = rule_id
                    self._rules[i] = new
                    self._save_locked()
                    return new
        raise RoutingRuleError(f"rule id {rule_id!r} not found")

    def delete_rule(self, rule_id: str) -> bool:
        with self._lock:
            for i, r in enumerate(self._rules):
                if r.id == rule_id:
                    del self._rules[i]
                    self._save_locked()
                    return True
        return False
