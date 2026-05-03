import { useEffect, useMemo, useRef, useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from './ui/dialog';
import { Button } from './ui/button';
import { TagChip } from './ui/tag-chips';

/**
 * Bug #8 — bulk tag editor for the Devices tab.
 *
 * The single-target editor (`TagsEditDialog`) replaces a target's whole
 * tag list. Bulk editing is different: each selected device has its own
 * (possibly distinct) list, and the user wants to "add X to all" or
 * "remove Y where present" without disturbing the rest. So this dialog
 * emits a *diff* (``{ add, remove }``) rather than a full list — the
 * caller applies the diff per-target.
 *
 * UX shape:
 *  - "Common tags" row: tags every selected device shares. Each chip has
 *    an inline × that *marks the tag for removal across all selected* —
 *    the chip dims to signal the pending change, click again to undo.
 *  - "Partial tags" row: tags on some-but-not-all selected. Read-only;
 *    informational (grey + italic). Surfacing them prevents the user
 *    being surprised when their bulk edit only touches a subset.
 *  - "Add to all" chip-input: each chip the user enters / picks from
 *    suggestions is applied to every selected device that doesn't
 *    already have it.
 *  - Save fires once with ``{ add: addedChips, remove: removeMarkedChips }``.
 */

interface Props {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  /** Number of selected devices (just the count — caller resolves the
   *  per-device tag application). */
  count: number;
  /** Tags every selected device shares. The user can mark these for
   *  removal across all selected. */
  common: string[];
  /** Tags on some-but-not-all selected — read-only context. */
  partial: string[];
  /** Fleet-wide pool for autocomplete; the dialog filters out anything
   *  already in ``common``. */
  suggestions: string[];
  /** Caller applies the diff per-target (``add`` to every selected;
   *  ``remove`` from every selected that has the tag). */
  onSave: (diff: { add: string[]; remove: string[] }) => Promise<void>;
}

export function BulkTagsEditDialog({ open, onOpenChange, count, common, partial, suggestions, onSave }: Props) {
  const [removing, setRemoving] = useState<Set<string>>(new Set());
  const [adding, setAdding] = useState<string[]>([]);
  const [input, setInput] = useState('');
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [focused, setFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  // Re-seed only on the open transition (Bug #14 pattern — parent
  // re-renders every 1Hz on the SWR poll and would otherwise wipe
  // pending edits).
  useEffect(() => {
    if (open) {
      setRemoving(new Set());
      setAdding([]);
      setInput('');
      setError(null);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  const toggleRemove = (t: string) => {
    setRemoving(prev => {
      const next = new Set(prev);
      if (next.has(t)) next.delete(t);
      else next.add(t);
      return next;
    });
  };

  const addAdding = (raw: string) => {
    const v = raw.trim();
    if (!v) return;
    setAdding(prev => (prev.includes(v) ? prev : [...prev, v]));
    setInput('');
    inputRef.current?.focus();
  };

  const removeAdding = (t: string) => {
    setAdding(prev => prev.filter(x => x !== t));
    inputRef.current?.focus();
  };

  // Autocomplete pool: anything in suggestions that isn't already in
  // common (would be a no-op add) and isn't already pending-add.
  const filtered = useMemo(() => {
    const skip = new Set([...common, ...adding]);
    const q = input.trim().toLowerCase();
    return suggestions
      .filter(s => !skip.has(s))
      .filter(s => !q || s.toLowerCase().includes(q))
      .slice(0, 12);
  }, [suggestions, common, adding, input]);

  const handleSave = async () => {
    // Pick up an unsubmitted typed-tag suffix as the last add.
    const trimmed = input.trim();
    const finalAdd = trimmed && !adding.includes(trimmed) && !common.includes(trimmed)
      ? [...adding, trimmed]
      : adding;

    if (finalAdd.length === 0 && removing.size === 0) {
      setError('No changes to apply');
      return;
    }

    setSaving(true);
    setError(null);
    try {
      await onSave({ add: finalAdd, remove: Array.from(removing) });
      onOpenChange(false);
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Failed to save tags');
    } finally {
      setSaving(false);
    }
  };

  const dirty = adding.length > 0 || removing.size > 0 || input.trim().length > 0;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent showCloseButton={false}>
        <DialogHeader>
          <DialogTitle>Bulk edit tags — {count} device{count === 1 ? '' : 's'}</DialogTitle>
        </DialogHeader>

        <div className="px-4 py-3 space-y-4">
          <p className="text-[12px] text-[var(--text-muted)]">
            Add tags to every selected device, or click × on a shared tag
            to remove it from every device that has it. Tags shown as
            grey "(partial)" appear on some selected devices but not
            all — they're read-only here.
          </p>

          {/* Common tags — shared by every selected device, removable. */}
          <div>
            <div className="mb-1.5 text-[10px] font-semibold uppercase tracking-wide text-[var(--text-muted)]">
              Shared by all {count} {count === 1 ? 'device' : 'devices'}
            </div>
            {common.length === 0 ? (
              <span className="text-[12px] italic text-[var(--text-muted)]">
                No tags in common across the selection.
              </span>
            ) : (
              <div className="flex flex-wrap gap-1.5">
                {common.map(t => {
                  const marked = removing.has(t);
                  return (
                    <span key={t} className={marked ? 'opacity-40 line-through' : ''}>
                      <TagChip tag={t} onRemove={() => toggleRemove(t)} />
                    </span>
                  );
                })}
              </div>
            )}
            {removing.size > 0 && (
              <div className="mt-1 text-[11px] text-[var(--warn,#f59e0b)]">
                {removing.size} tag{removing.size === 1 ? '' : 's'} will be removed from all {count} {count === 1 ? 'device' : 'devices'} on save.
              </div>
            )}
          </div>

          {/* Partial tags — informational, on some selected only. */}
          {partial.length > 0 && (
            <div>
              <div className="mb-1.5 text-[10px] font-semibold uppercase tracking-wide text-[var(--text-muted)]">
                On some devices only (not editable here)
              </div>
              <div className="flex flex-wrap gap-1.5 opacity-60 italic">
                {partial.map(t => <TagChip key={t} tag={t} />)}
              </div>
            </div>
          )}

          {/* Add chips — tags to apply to every selected device. */}
          <div>
            <div className="mb-1.5 text-[10px] font-semibold uppercase tracking-wide text-[var(--text-muted)]">
              Add to all {count} {count === 1 ? 'device' : 'devices'}
            </div>
            {/* Bug #20: chip-input + autocomplete dropdown anchored below. */}
            <div className="relative">
              <div
                className="flex flex-wrap items-center gap-1.5 rounded-md border border-[var(--border)] bg-[var(--surface2)] px-2 py-1.5 min-h-[40px] cursor-text"
                onClick={() => inputRef.current?.focus()}
              >
                {adding.map(t => (
                  <TagChip key={t} tag={t} onRemove={() => removeAdding(t)} />
                ))}
                <input
                  ref={inputRef}
                  autoFocus
                  value={input}
                  onFocus={() => setFocused(true)}
                  onBlur={() => setFocused(false)}
                  onChange={e => setInput(e.target.value)}
                  onKeyDown={e => {
                    if (e.key === 'Enter' || e.key === ',') {
                      e.preventDefault();
                      if (input.trim()) addAdding(input);
                      else if (!saving && dirty) void handleSave();
                    } else if (e.key === 'Backspace' && !input && adding.length > 0) {
                      e.preventDefault();
                      setAdding(prev => prev.slice(0, -1));
                    } else if (e.key === 'Escape') {
                      setFocused(false);
                    }
                  }}
                  placeholder={adding.length === 0 ? 'Type a tag and press Enter…' : ''}
                  className="flex-1 min-w-[140px] bg-transparent outline-none text-[13px] text-[var(--text)] placeholder:text-[var(--text-muted)]"
                />
              </div>
              {focused && input.trim().length > 0 && filtered.length > 0 && (
                <div className="absolute left-0 right-0 top-full mt-1 z-10 rounded-md border border-[var(--border)] bg-[var(--surface)] shadow-lg max-h-[220px] overflow-y-auto py-1">
                  {filtered.map(t => (
                    <button
                      key={t}
                      type="button"
                      onMouseDown={(e) => {
                        e.preventDefault();
                        addAdding(t);
                      }}
                      className="flex w-full items-center gap-2 px-2 py-1 text-left text-[13px] text-[var(--text)] hover:bg-[var(--surface2)]"
                    >
                      <TagChip tag={t} />
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {error && (
            <div className="rounded-md border border-[var(--danger,#ef4444)] bg-[var(--danger,#ef4444)]/10 px-2.5 py-1.5 text-[12px] text-[var(--danger,#ef4444)]">
              {error}
            </div>
          )}
        </div>

        <DialogFooter>
          <Button variant="secondary" size="sm" onClick={() => onOpenChange(false)} disabled={saving}>
            Cancel
          </Button>
          <Button size="sm" onClick={handleSave} disabled={saving || !dirty}>
            {saving ? 'Saving…' : 'Apply'}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
