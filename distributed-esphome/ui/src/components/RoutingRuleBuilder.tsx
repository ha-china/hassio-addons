import { useEffect, useMemo, useRef, useState } from 'react';
import { Plus, X } from 'lucide-react';
import { Button } from './ui/button';
import { DialogFooter } from './ui/dialog';
import { Input } from './ui/input';
import { Select } from './ui/select';
import { TagChip } from './ui/tag-chips';
import {
  createRoutingRule,
  updateRoutingRule,
} from '../api/client';
import { previewRuleImpact } from '../utils/routing';
import type { RoutingClause, RoutingClauseOp, RoutingRule } from '../types';

// Local re-import: select.tsx is a thin native-<select> wrapper, so the
// `Select` component above already covers our use case via the standard
// onChange + value + child <option> shape. (The shadcn Radix Select
// API I initially reached for doesn't exist in this project.)

/**
 * TG.8 — rule builder form embedded inside `RoutingRulesModal`.
 *
 * Layout:
 *   - Name input (auto-slugs `id` until the user edits the id explicitly)
 *   - "When device has" section: list of clause rows; each row is
 *     `[All of / Any of / None of]` + chip-input drawing autocomplete
 *     from the device tag pool. `+ Add clause` appends; `−` removes
 *     (unless it's the last clause).
 *   - "Worker must" section: same shape, worker tag pool.
 *   - Live preview footer: "With this rule, **N of M devices** would be
 *     constrained, and **K of L online workers** are eligible to build
 *     for them." Counts update as the user types.
 *   - Save / Cancel buttons in the dialog footer.
 *
 * The component is a one-shot: open mounts a fresh draft from `initial`;
 * cancel discards; save POSTs (create) or PUTs (edit) and the parent
 * resets the modal to list mode.
 */

interface Props {
  /** Existing rule when editing; null when creating. */
  initial: RoutingRule | null;
  /** Existing rule ids — used to validate the slug stays unique on create. */
  existingIds: string[];
  /** Tag pool for autocomplete on the "When device has" clauses. */
  devicePool: string[];
  /** Tag pool for autocomplete on the "Worker must" clauses. */
  workerPool: string[];
  /** Live-preview corpus: every device's tags. */
  previewDevices: { tags: string[] }[];
  /** Live-preview corpus: every *online* worker's tags. */
  previewWorkers: { tags: string[] }[];
  onCancel: () => void;
  onSaved: (rule: RoutingRule) => void | Promise<void>;
  onError: (msg: string) => void;
}

// Auto-slug mirror of the server-side _slugify in ui_api.py.
function slugify(name: string): string {
  const out: string[] = [];
  let prevDash = false;
  for (const ch of name.toLowerCase()) {
    if (/[a-z0-9]/.test(ch)) {
      out.push(ch);
      prevDash = false;
    } else if (ch === ' ' || ch === '-' || ch === '_') {
      if (!prevDash) {
        out.push('-');
        prevDash = true;
      }
    }
  }
  return out.join('').replace(/^-+|-+$/g, '');
}

function newClause(): RoutingClause {
  return { op: 'all_of', tags: [] };
}

function ClauseRow({
  clause,
  pool,
  onChange,
  onRemove,
  canRemove,
}: {
  clause: RoutingClause;
  pool: string[];
  onChange: (next: RoutingClause) => void;
  onRemove: () => void;
  canRemove: boolean;
}) {
  const [input, setInput] = useState('');
  const [focused, setFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const filtered = useMemo(() => {
    const sel = new Set(clause.tags);
    const q = input.trim().toLowerCase();
    return pool
      .filter(t => !sel.has(t))
      .filter(t => !q || t.toLowerCase().includes(q))
      .slice(0, 12);
  }, [pool, clause.tags, input]);

  const addTag = (raw: string) => {
    const v = raw.trim();
    if (!v || clause.tags.includes(v)) return;
    onChange({ ...clause, tags: [...clause.tags, v] });
    setInput('');
    inputRef.current?.focus();
  };

  const removeTag = (t: string) => {
    onChange({ ...clause, tags: clause.tags.filter(x => x !== t) });
  };

  return (
    <div className="flex items-start gap-2">
      <Select
        value={clause.op}
        onChange={(e) => onChange({ ...clause, op: e.target.value as RoutingClauseOp })}
        className="w-[100px]"
      >
        <option value="all_of">All of</option>
        <option value="any_of">Any of</option>
        <option value="none_of">None of</option>
      </Select>
      <div className="relative flex-1">
        <div
          className="flex flex-wrap items-center gap-1.5 rounded-md border border-[var(--border)] bg-[var(--surface2)] px-2 py-1 min-h-[32px] cursor-text"
          onClick={() => inputRef.current?.focus()}
        >
          {clause.tags.map(t => <TagChip key={t} tag={t} onRemove={() => removeTag(t)} />)}
          <input
            ref={inputRef}
            value={input}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ',') {
                e.preventDefault();
                if (input.trim()) addTag(input);
              } else if (e.key === 'Backspace' && !input && clause.tags.length > 0) {
                e.preventDefault();
                removeTag(clause.tags[clause.tags.length - 1]);
              } else if (e.key === 'Escape') {
                setFocused(false);
              }
            }}
            placeholder={clause.tags.length === 0 ? 'Type a tag and press Enter…' : ''}
            className="flex-1 min-w-[100px] bg-transparent outline-none text-[12px] text-[var(--text)] placeholder:text-[var(--text-muted)]"
          />
        </div>
        {focused && input.trim().length > 0 && filtered.length > 0 && (
          <div className="absolute left-0 right-0 top-full mt-1 z-10 rounded-md border border-[var(--border)] bg-[var(--surface)] shadow-lg max-h-[180px] overflow-y-auto py-1">
            {filtered.map(t => (
              <button
                key={t}
                type="button"
                onMouseDown={(e) => {
                  e.preventDefault();
                  addTag(t);
                }}
                className="flex w-full items-center gap-2 px-2 py-1 text-left text-[12px] text-[var(--text)] hover:bg-[var(--surface2)]"
              >
                <TagChip tag={t} />
              </button>
            ))}
          </div>
        )}
      </div>
      <Button
        variant="secondary"
        size="sm"
        onClick={onRemove}
        disabled={!canRemove}
        title={canRemove ? 'Remove this clause' : 'A rule needs at least one clause on each side'}
        aria-label="Remove clause"
      >
        <X className="size-3.5" />
      </Button>
    </div>
  );
}

export function RoutingRuleBuilder({
  initial,
  existingIds,
  devicePool,
  workerPool,
  previewDevices,
  previewWorkers,
  onCancel,
  onSaved,
  onError,
}: Props) {
  const isEdit = initial != null;
  const [name, setName] = useState(initial?.name ?? '');
  const [id, setId] = useState(initial?.id ?? '');
  const [idTouched, setIdTouched] = useState(isEdit);
  const [deviceClauses, setDeviceClauses] = useState<RoutingClause[]>(
    initial?.device_match.length ? initial.device_match : [newClause()],
  );
  const [workerClauses, setWorkerClauses] = useState<RoutingClause[]>(
    initial?.worker_match.length ? initial.worker_match : [newClause()],
  );
  const [saving, setSaving] = useState(false);

  // Auto-slug `id` from `name` until the user edits the id explicitly.
  useEffect(() => {
    if (!idTouched) setId(slugify(name));
  }, [name, idTouched]);

  // Live preview — recomputes on every clause / tag change.
  const draft: RoutingRule = useMemo(() => ({
    id: id || 'preview',
    name: name || '(unnamed)',
    severity: 'required',
    device_match: deviceClauses,
    worker_match: workerClauses,
  }), [id, name, deviceClauses, workerClauses]);

  const preview = useMemo(
    () => previewRuleImpact(draft, previewDevices, previewWorkers),
    [draft, previewDevices, previewWorkers],
  );

  const idCollision = !isEdit && id !== '' && existingIds.includes(id);

  const canSave = (
    !saving
    && name.trim().length > 0
    && id.trim().length > 0
    && !idCollision
    && deviceClauses.every(c => c.tags.length > 0)
    && workerClauses.every(c => c.tags.length > 0)
  );

  const handleSave = async () => {
    setSaving(true);
    try {
      let saved: RoutingRule;
      if (isEdit && initial) {
        saved = await updateRoutingRule(initial.id, {
          ...draft,
          id: initial.id,  // server preserves the original id on update
        });
      } else {
        saved = await createRoutingRule(draft);
      }
      await onSaved(saved);
    } catch (e) {
      onError(`Save failed: ${(e as Error).message}`);
    } finally {
      setSaving(false);
    }
  };

  const updateClauseAt = (
    list: RoutingClause[],
    setList: (next: RoutingClause[]) => void,
    idx: number,
    next: RoutingClause,
  ) => {
    setList(list.map((c, i) => (i === idx ? next : c)));
  };

  return (
    <>
      <div className="px-4 py-3 space-y-4">
        {/* Name + auto-slug id */}
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="block text-[10px] font-semibold uppercase tracking-wide text-[var(--text-muted)] mb-1">Name</label>
            <Input
              value={name}
              autoFocus
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g. Kitchen devices need kitchen workers"
            />
          </div>
          <div>
            <label className="block text-[10px] font-semibold uppercase tracking-wide text-[var(--text-muted)] mb-1">
              ID {isEdit && <span className="text-[var(--text-muted)] font-normal">(immutable)</span>}
            </label>
            <Input
              value={id}
              disabled={isEdit}
              onChange={(e) => {
                setIdTouched(true);
                setId(slugify(e.target.value));
              }}
              placeholder="auto-slug from name"
            />
            {idCollision && (
              <div className="mt-1 text-[11px] text-[var(--danger,#ef4444)]">
                A rule with id "{id}" already exists.
              </div>
            )}
          </div>
        </div>

        {/* When device has — clauses */}
        <div>
          <div className="mb-1.5 flex items-center justify-between">
            <span className="text-[10px] font-semibold uppercase tracking-wide text-[var(--text-muted)]">
              When device has
            </span>
            <Button
              variant="secondary"
              size="sm"
              onClick={() => setDeviceClauses([...deviceClauses, newClause()])}
            >
              <Plus className="size-3 mr-1" />
              Add clause
            </Button>
          </div>
          <div className="space-y-2">
            {deviceClauses.map((c, i) => (
              <ClauseRow
                key={i}
                clause={c}
                pool={devicePool}
                onChange={(next) => updateClauseAt(deviceClauses, setDeviceClauses, i, next)}
                onRemove={() => setDeviceClauses(deviceClauses.filter((_, j) => j !== i))}
                canRemove={deviceClauses.length > 1}
              />
            ))}
          </div>
        </div>

        {/* Worker must — clauses */}
        <div>
          <div className="mb-1.5 flex items-center justify-between">
            <span className="text-[10px] font-semibold uppercase tracking-wide text-[var(--text-muted)]">
              Worker must
            </span>
            <Button
              variant="secondary"
              size="sm"
              onClick={() => setWorkerClauses([...workerClauses, newClause()])}
            >
              <Plus className="size-3 mr-1" />
              Add clause
            </Button>
          </div>
          <div className="space-y-2">
            {workerClauses.map((c, i) => (
              <ClauseRow
                key={i}
                clause={c}
                pool={workerPool}
                onChange={(next) => updateClauseAt(workerClauses, setWorkerClauses, i, next)}
                onRemove={() => setWorkerClauses(workerClauses.filter((_, j) => j !== i))}
                canRemove={workerClauses.length > 1}
              />
            ))}
          </div>
        </div>

        {/* Live preview footer */}
        <div className="rounded-md border border-[var(--border)] bg-[var(--surface2)] px-3 py-2 text-[12px] text-[var(--text-muted)]">
          With this rule,{' '}
          <strong className="text-[var(--text)]">{preview.constrainedDevices} of {preview.totalDevices} devices</strong>{' '}
          would be constrained, and{' '}
          <strong className="text-[var(--text)]">{preview.eligibleWorkers} of {preview.totalWorkers} online workers</strong>{' '}
          are eligible to build for them.
        </div>
      </div>

      <DialogFooter>
        <Button variant="secondary" size="sm" onClick={onCancel} disabled={saving}>
          Cancel
        </Button>
        <Button size="sm" onClick={handleSave} disabled={!canSave}>
          {saving ? 'Saving…' : isEdit ? 'Save' : 'Create rule'}
        </Button>
      </DialogFooter>
    </>
  );
}
