import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from './ui/dialog';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';

/**
 * DQ.11 — per-worker disk-quota override editor.
 *
 * Dialog mirrors the "Set max parallel jobs" UX: a default radio that
 * inherits the fleet default (no override; the worker picks up the
 * server-pushed value on the next heartbeat) and a custom radio that
 * sets an integer-GiB override. Save POSTs to the disk-quota endpoint;
 * the value the user sees in the Workers tab updates within one
 * heartbeat tick (≤10s) without a worker restart.
 */
interface Props {
  hostname: string;
  /** Persisted override in bytes; ``null`` if no override is set. */
  currentOverrideBytes: number | null;
  /** Fleet default in bytes; used to label the default radio. */
  defaultBytes: number;
  /** ``onSave(bytes | null)`` — pass ``null`` to clear the override. */
  onSave: (bytes: number | null) => void | Promise<void>;
  onClose: () => void;
}

const GIB = 1024 ** 3;

export function SetDiskQuotaDialog({
  hostname,
  currentOverrideBytes,
  defaultBytes,
  onSave,
  onClose,
}: Props) {
  const initialMode: 'default' | 'custom' =
    currentOverrideBytes == null ? 'default' : 'custom';
  const initialGb =
    currentOverrideBytes != null
      ? Math.max(1, Math.round(currentOverrideBytes / GIB))
      : Math.max(1, Math.round(defaultBytes / GIB));

  const [mode, setMode] = useState<'default' | 'custom'>(initialMode);
  const [gb, setGb] = useState<number>(initialGb);
  const [saving, setSaving] = useState(false);

  // No re-sync effect: state is initialised once on mount, and the
  // parent forces a fresh mount per worker via `key={w.client_id}`. A
  // mid-edit SWR refresh that flips currentOverrideBytes/defaultBytes
  // therefore can't yank the user's typed value out from under them.

  const defaultGb = Math.max(1, Math.round(defaultBytes / GIB));
  const valid = mode === 'default' || (Number.isInteger(gb) && gb >= 1 && gb <= 1024);

  async function handleSave() {
    if (!valid) return;
    setSaving(true);
    try {
      await onSave(mode === 'default' ? null : gb * GIB);
      onClose();
    } finally {
      setSaving(false);
    }
  }

  return (
    <Dialog open onOpenChange={(open) => { if (!open) onClose(); }}>
      <DialogContent style={{ maxWidth: 460 }}>
        <DialogHeader>
          <DialogTitle>Set disk quota — {hostname}</DialogTitle>
        </DialogHeader>
        <div className="p-[18px] flex flex-col gap-3">
          <p className="text-sm text-[var(--text-muted)]">
            Bounds the worker's <code>/esphome-versions/</code> footprint
            (venvs, per-target caches, slot dirs, PlatformIO toolchains).
            The disk-quota engine evicts mtime-LRU between jobs to stay
            under the budget.
          </p>
          <div className="flex flex-col gap-2 text-sm">
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="disk-quota-set-mode"
                value="default"
                checked={mode === 'default'}
                onChange={() => setMode('default')}
              />
              <span>Use fleet default ({defaultGb} GiB)</span>
            </label>
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="disk-quota-set-mode"
                value="custom"
                checked={mode === 'custom'}
                onChange={() => setMode('custom')}
              />
              <span>Custom</span>
            </label>
            <div className="ml-6 flex items-center gap-2">
              <Label htmlFor="disk-quota-gb" className="m-0 text-xs text-[var(--text-muted)]">
                GiB
              </Label>
              <Input
                id="disk-quota-gb"
                type="number"
                min={1}
                max={1024}
                value={gb}
                disabled={mode !== 'custom'}
                onChange={e => setGb(Math.max(1, parseInt(e.target.value, 10) || 1))}
                className="w-28"
              />
            </div>
          </div>
        </div>
        <DialogFooter>
          <Button variant="secondary" onClick={onClose} disabled={saving}>
            Cancel
          </Button>
          <Button onClick={handleSave} disabled={!valid || saving}>
            {saving ? 'Saving…' : 'Save'}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
