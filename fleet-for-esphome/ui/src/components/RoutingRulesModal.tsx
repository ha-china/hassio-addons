import { useEffect, useMemo, useState } from 'react';
import useSWR from 'swr';
import { toast } from 'sonner';
import { Trash2, Pencil, Plus } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from './ui/dialog';
import { Button } from './ui/button';
import { TagChip } from './ui/tag-chips';
import { RoutingRuleBuilder } from './RoutingRuleBuilder';
import {
  deleteRoutingRule,
  getRoutingRules,
} from '../api/client';
import type { RoutingClause, RoutingRule, Target, Worker } from '../types';

/**
 * TG.8 — Routing rules editor.
 *
 * Two-mode dialog:
 *   - "list" — table of every existing rule (Name / device side / worker
 *     side / Edit / Delete) plus an "Add rule" CTA. Empty state explains
 *     "no rules → all workers eligible to claim any job."
 *   - "create" / "edit" — embedded `RoutingRuleBuilder` form.
 *
 * The list view is owned by this component; the builder is a separate
 * component so its state survives a mode-switch only via the parent's
 * `mode` flag (no shared draft state — picking a different rule from
 * the list discards the in-flight builder draft, which is the right
 * thing).
 */

interface Props {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  /** Devices + workers feed the builder's autocomplete pool and the
   *  live-preview footer. The parent passes the same lists every other
   *  surface uses. */
  targets: Target[];
  workers: Worker[];
  /** TG.9: when set on the open transition, jump straight into edit
   *  mode for the matching rule (deep-link from the Queue tab's
   *  BLOCKED-badge click). Empty string / null ⇒ open in list mode. */
  initialEditRuleId?: string | null;
}

type Mode =
  | { kind: 'list' }
  | { kind: 'create' }
  | { kind: 'edit'; rule: RoutingRule };

function clauseSummary(clauses: RoutingClause[]): React.ReactNode {
  if (clauses.length === 0) {
    return <span className="text-[var(--text-muted)] italic">any</span>;
  }
  // Render each clause as: [op label] [chip…] (joined by AND for
  // multiple clauses on the same side).
  return (
    <span className="inline-flex flex-wrap items-center gap-1">
      {clauses.map((c, i) => (
        <span key={i} className="inline-flex flex-wrap items-center gap-1">
          {i > 0 && <span className="text-[10px] uppercase text-[var(--text-muted)] mx-1">AND</span>}
          <span className="text-[10px] uppercase text-[var(--text-muted)] font-semibold">
            {c.op === 'all_of' ? 'all of' : c.op === 'any_of' ? 'any of' : 'none of'}
          </span>
          {c.tags.map(t => <TagChip key={t} tag={t} />)}
        </span>
      ))}
    </span>
  );
}

export function RoutingRulesModal({ open, onOpenChange, targets, workers, initialEditRuleId }: Props) {
  const [mode, setMode] = useState<Mode>({ kind: 'list' });
  const [pendingDeleteId, setPendingDeleteId] = useState<string | null>(null);

  const { data: rules = [], mutate } = useSWR<RoutingRule[]>(
    open ? 'routing-rules' : null,
    getRoutingRules,
    { revalidateOnFocus: false },
  );

  // TG.9: when the modal opens with an initialEditRuleId, jump straight
  // into edit-mode for that rule once the rule list has loaded. Falls
  // back to list-mode if the rule was deleted between the badge click
  // and the modal mount.
  useEffect(() => {
    if (!open || !initialEditRuleId || rules.length === 0) return;
    const rule = rules.find((r) => r.id === initialEditRuleId);
    if (rule && (mode.kind !== 'edit' || mode.rule.id !== rule.id)) {
      setMode({ kind: 'edit', rule });
    }
    // Intentional: fire on open + when rules arrive. Re-jumping into the
    // builder while the user is mid-edit would clobber typing, so we
    // gate on the mode mismatch above.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open, initialEditRuleId, rules]);

  // Reset mode on each open transition so a half-finished builder
  // session doesn't reappear when the user reopens the modal.
  const handleOpenChange = (next: boolean) => {
    if (!next) setMode({ kind: 'list' });
    onOpenChange(next);
  };

  const handleDelete = async (id: string) => {
    setPendingDeleteId(id);
    try {
      await deleteRoutingRule(id);
      await mutate();
      toast.success(`Deleted rule ${id}`);
    } catch (e) {
      toast.error(`Delete failed: ${(e as Error).message}`);
    } finally {
      setPendingDeleteId(null);
    }
  };

  const handleSaved = async () => {
    await mutate();
    setMode({ kind: 'list' });
  };

  // Tag pools — derived from the current fleet snapshot. The builder
  // consumes these for clause-tag autocomplete; we compute once here
  // so a re-render of the builder while the user types doesn't re-walk
  // the whole fleet on every keystroke.
  const devicePool = useMemo(() => {
    const s = new Set<string>();
    for (const t of targets) {
      if (t.tags) for (const tag of t.tags.split(',').map(x => x.trim()).filter(Boolean)) s.add(tag);
    }
    return Array.from(s).sort();
  }, [targets]);

  const workerPool = useMemo(() => {
    const s = new Set<string>();
    for (const w of workers) {
      if (w.tags) for (const tag of w.tags) s.add(tag);
    }
    return Array.from(s).sort();
  }, [workers]);

  const onlineWorkers = useMemo(() => workers.filter(w => w.online), [workers]);

  // Devices for the live-preview footer. Each entry is `{ tags: [...] }`;
  // unmanaged devices have no tags so they don't constrain any rule.
  const previewDevices = useMemo(
    () => targets.map(t => ({
      tags: (t.tags || '').split(',').map(s => s.trim()).filter(Boolean),
    })),
    [targets],
  );

  const previewWorkers = useMemo(
    () => onlineWorkers.map(w => ({ tags: w.tags ?? [] })),
    [onlineWorkers],
  );

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent className="max-w-[720px]" showCloseButton={false}>
        <DialogHeader>
          <DialogTitle>
            {mode.kind === 'list' && 'Routing rules'}
            {mode.kind === 'create' && 'Add routing rule'}
            {mode.kind === 'edit' && `Edit rule — ${mode.rule.name}`}
          </DialogTitle>
        </DialogHeader>

        {mode.kind === 'list' && (
          <>
            <div className="px-4 py-3 space-y-3">
              <p className="text-[12px] text-[var(--text-muted)]">
                Rules decide which workers can claim jobs for which devices.
                A rule fires when a device matches "When device has", then
                requires the worker to match "Worker must". Empty rule list
                means every worker is eligible for every device.
              </p>

              {rules.length === 0 ? (
                <div className="rounded-md border border-dashed border-[var(--border)] bg-[var(--surface2)] px-4 py-6 text-center">
                  <p className="text-[13px] text-[var(--text-muted)]">
                    No routing rules yet. All workers are eligible to claim any job.
                  </p>
                </div>
              ) : (
                <div className="overflow-hidden rounded-md border border-[var(--border)]">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-[var(--surface2)]">
                        <th className="text-left text-[10px] uppercase tracking-wide text-[var(--text-muted)] px-3 py-2">Name</th>
                        <th className="text-left text-[10px] uppercase tracking-wide text-[var(--text-muted)] px-3 py-2">When device has</th>
                        <th className="text-left text-[10px] uppercase tracking-wide text-[var(--text-muted)] px-3 py-2">Worker must</th>
                        <th className="text-right text-[10px] uppercase tracking-wide text-[var(--text-muted)] px-3 py-2">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {rules.map(r => (
                        <tr key={r.id} className="border-t border-[var(--border)]">
                          <td className="px-3 py-2 align-top">
                            <div className="text-[13px] font-medium text-[var(--text)]">{r.name}</div>
                            <div className="text-[10px] font-mono text-[var(--text-muted)]">{r.id}</div>
                          </td>
                          <td className="px-3 py-2 align-top text-[12px]">{clauseSummary(r.device_match)}</td>
                          <td className="px-3 py-2 align-top text-[12px]">{clauseSummary(r.worker_match)}</td>
                          <td className="px-3 py-2 align-top text-right">
                            <div className="inline-flex gap-1">
                              <Button
                                variant="secondary"
                                size="sm"
                                onClick={() => setMode({ kind: 'edit', rule: r })}
                                aria-label={`Edit rule ${r.name}`}
                                title="Edit"
                              >
                                <Pencil className="size-3" />
                              </Button>
                              <Button
                                variant="destructive"
                                size="sm"
                                onClick={() => handleDelete(r.id)}
                                disabled={pendingDeleteId === r.id}
                                aria-label={`Delete rule ${r.name}`}
                                title="Delete"
                              >
                                <Trash2 className="size-3" />
                              </Button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
            <DialogFooter>
              <Button variant="secondary" size="sm" onClick={() => onOpenChange(false)}>
                Close
              </Button>
              <Button size="sm" onClick={() => setMode({ kind: 'create' })}>
                <Plus className="size-3.5 mr-1" />
                Add rule
              </Button>
            </DialogFooter>
          </>
        )}

        {(mode.kind === 'create' || mode.kind === 'edit') && (
          <RoutingRuleBuilder
            initial={mode.kind === 'edit' ? mode.rule : null}
            existingIds={rules.map(r => r.id)}
            devicePool={devicePool}
            workerPool={workerPool}
            previewDevices={previewDevices}
            previewWorkers={previewWorkers}
            onCancel={() => setMode({ kind: 'list' })}
            onSaved={async (savedRule) => {
              toast.success(
                mode.kind === 'create'
                  ? `Created rule ${savedRule.name}`
                  : `Updated rule ${savedRule.name}`,
              );
              await handleSaved();
            }}
            onError={(msg) => toast.error(msg)}
          />
        )}
      </DialogContent>
    </Dialog>
  );
}
