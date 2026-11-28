import type { RoutingClause, RoutingRule } from '../types';

/**
 * TG.8 — client-side mirror of `ha-addon/server/routing.py`'s
 * `evaluate_clause` / `evaluate_rule` / `is_eligible`. Used by the
 * Routing-rules editor's live-preview footer to compute, as the user
 * types: how many devices a draft rule would constrain, and how many
 * online workers would be eligible to build for them.
 *
 * The Python implementation is the authoritative one — this exists
 * purely to render counts without a server round-trip per keystroke.
 */

export function evaluateClause(clause: RoutingClause, tagSet: Set<string>): boolean {
  switch (clause.op) {
    case 'all_of':
      return clause.tags.every(t => tagSet.has(t));
    case 'any_of':
      return clause.tags.some(t => tagSet.has(t));
    case 'none_of':
      return !clause.tags.some(t => tagSet.has(t));
    default:
      // Unknown op → no match. The server-side validator rejects
      // unknown ops at create time, so this branch is defensive only.
      return false;
  }
}

function matchesSide(clauses: RoutingClause[], tagSet: Set<string>): boolean {
  return clauses.every(c => evaluateClause(c, tagSet));
}

/**
 * Conditional rule semantics: a rule passes for (device, worker) when
 * either the device doesn't match (rule doesn't apply, automatic pass)
 * OR both sides match.
 */
export function evaluateRule(
  rule: RoutingRule,
  deviceTags: string[],
  workerTags: string[],
): boolean {
  const dt = new Set(deviceTags);
  if (!matchesSide(rule.device_match, dt)) return true;
  return matchesSide(rule.worker_match, new Set(workerTags));
}

export function isEligible(
  deviceTags: string[],
  workerTags: string[],
  rules: RoutingRule[],
): boolean {
  return rules.every(r => evaluateRule(r, deviceTags, workerTags));
}

/**
 * For the live-preview footer: count devices the rule would *apply* to
 * (i.e. the rule's `device_match` clauses all hold) and online workers
 * the rule's `worker_match` clauses all hold for.
 */
export function previewRuleImpact(
  rule: RoutingRule,
  devices: { tags: string[] }[],
  onlineWorkers: { tags: string[] }[],
): { constrainedDevices: number; eligibleWorkers: number; totalDevices: number; totalWorkers: number } {
  let constrained = 0;
  for (const d of devices) {
    if (matchesSide(rule.device_match, new Set(d.tags))) constrained += 1;
  }
  let eligible = 0;
  for (const w of onlineWorkers) {
    if (matchesSide(rule.worker_match, new Set(w.tags))) eligible += 1;
  }
  return {
    constrainedDevices: constrained,
    eligibleWorkers: eligible,
    totalDevices: devices.length,
    totalWorkers: onlineWorkers.length,
  };
}
