import { useEffect, useRef, useState } from 'react';
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from './ui/dialog';
import { Button } from './ui/button';
import { stripYaml } from '../utils';
import { createTarget, updateTargetMeta } from '../api/client';

/**
 * Shared "create" + "duplicate" modal (CD.4).
 *
 * Props:
 *   - mode: 'new' → creates a minimal stub YAML
 *           'duplicate' → duplicates an existing file and rewrites its name
 *   - sourceTarget: required when mode === 'duplicate'
 *   - existingTargets: full target list, used for client-side collision check
 *   - onCreate(target): called after successful creation — typically opens
 *     the editor on the new target
 *   - onClose: dismiss the modal
 *   - onToast: for error/success toasts
 */
interface Props {
  mode: 'new' | 'duplicate';
  sourceTarget?: string;
  existingTargets: string[];
  onCreate: (target: string) => void;
  onClose: () => void;
  onToast: (msg: string, type?: 'info' | 'success' | 'error') => void;
}

const SLUG_RE = /^[a-z0-9][a-z0-9-]*$/;

export function NewDeviceModal({ mode, sourceTarget, existingTargets, onCreate, onClose, onToast }: Props) {
  const defaultName = mode === 'duplicate' && sourceTarget
    ? `${stripYaml(sourceTarget)}-copy`
    : '';
  const [name, setName] = useState(defaultName);
  // TG.7: optional initial tags. Comma-separated; persisted via the
  // /ui/api/targets/{filename}/meta endpoint after the YAML is created.
  const [tags, setTags] = useState('');
  const [saving, setSaving] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
    inputRef.current?.select();
  }, []);

  // Validation — returns null on success, error string on failure
  function validate(raw: string): string | null {
    const n = raw.trim();
    if (!n) return 'Name is required';
    // Strip optional .yaml the user might type
    const slug = n.toLowerCase().endsWith('.yaml') ? n.slice(0, -5) : n;
    if (!SLUG_RE.test(slug)) {
      return 'Lowercase letters, digits, and hyphens only (must start with a letter or digit)';
    }
    if (slug.length > 64) return 'Name too long (max 64 characters)';
    const filename = `${slug}.yaml`;
    if (existingTargets.includes(filename)) return `${filename} already exists`;
    return null;
  }

  const error = name.trim() ? validate(name) : null;
  const canSubmit = name.trim().length > 0 && error === null && !saving;

  async function handleSubmit() {
    if (!canSubmit) return;
    const slug = name.trim().toLowerCase().endsWith('.yaml')
      ? name.trim().slice(0, -5)
      : name.trim();
    setSaving(true);
    try {
      const target = await createTarget(slug, mode === 'duplicate' ? sourceTarget : undefined);
      const displayName = stripYaml(target).replace(/^\.pending\./, '');
      // TG.7: persist initial tags via the existing meta endpoint. Done
      // after createTarget so a tag-write failure doesn't orphan a
      // partial create — the YAML is already on disk + browseable. The
      // server normalises (trim / drop empties / dedupe).
      const cleanedTags = tags.split(',').map(s => s.trim()).filter(Boolean);
      if (cleanedTags.length > 0) {
        try {
          await updateTargetMeta(target, { tags: cleanedTags.join(',') });
        } catch (err) {
          // Non-fatal — the device exists, just without tags.
          onToast(`Created ${displayName} but tag write failed: ${(err as Error).message}`, 'error');
        }
      }
      onToast(
        mode === 'duplicate'
          ? `Duplicated ${stripYaml(sourceTarget!)} → ${displayName}`
          : `Created ${displayName}`,
        'success',
      );
      onCreate(target);
    } catch (err) {
      onToast('Create failed: ' + (err as Error).message, 'error');
      setSaving(false);
    }
  }

  const title = mode === 'duplicate'
    ? `Duplicate ${stripYaml(sourceTarget ?? '')}`
    : 'New Device';

  return (
    <Dialog open onOpenChange={(open) => { if (!open) onClose(); }}>
      <DialogContent style={{ maxWidth: 440 }}>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
        </DialogHeader>
        <div style={{ padding: '16px' }}>
          <label style={{ fontSize: 12, color: 'var(--text-muted)', marginBottom: 6, display: 'block' }}>
            Device filename
          </label>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
            <input
              ref={inputRef}
              type="text"
              value={name}
              onChange={e => setName(e.target.value)}
              onKeyDown={e => {
                if (e.key === 'Enter' && canSubmit) handleSubmit();
              }}
              placeholder="kitchen-sensor"
              style={{
                flex: 1,
                padding: '8px 12px',
                background: 'var(--surface2)',
                border: `1px solid ${error ? 'var(--destructive)' : 'var(--border)'}`,
                borderRadius: 'var(--radius)',
                color: 'var(--text)',
                fontSize: 14,
                fontFamily: 'monospace',
              }}
            />
            <span style={{ fontSize: 12, color: 'var(--text-muted)' }}>.yaml</span>
          </div>
          {error && (
            <p style={{ fontSize: 11, color: 'var(--destructive)', marginTop: 6 }}>{error}</p>
          )}
          {/* TG.7: optional initial tags. Comma-separated text input — the
              chip-input editor on the Devices tab can refine later. */}
          <label style={{ fontSize: 12, color: 'var(--text-muted)', marginTop: 14, marginBottom: 6, display: 'block' }}>
            Tags <span style={{ fontWeight: 'normal', textTransform: 'none' }}>(optional, comma-separated)</span>
          </label>
          <input
            type="text"
            value={tags}
            onChange={e => setTags(e.target.value)}
            onKeyDown={e => {
              if (e.key === 'Enter' && canSubmit) handleSubmit();
            }}
            placeholder="e.g. kitchen, sensor, prod"
            style={{
              width: '100%',
              padding: '8px 12px',
              background: 'var(--surface2)',
              border: '1px solid var(--border)',
              borderRadius: 'var(--radius)',
              color: 'var(--text)',
              fontSize: 14,
            }}
          />
          <p style={{ fontSize: 11, color: 'var(--text-muted)', marginTop: 10 }}>
            {mode === 'duplicate'
              ? `Duplicates ${stripYaml(sourceTarget ?? '')}.yaml and rewrites esphome.name to match the new filename. Comments are not preserved.`
              : 'Creates a minimal YAML with esphome.name set. You can add board, platform, and components in the editor.'}
          </p>
        </div>
        <DialogFooter>
          <Button variant="secondary" size="sm" onClick={onClose} disabled={saving}>Cancel</Button>
          <Button size="sm" disabled={!canSubmit} onClick={handleSubmit}>
            {saving ? 'Creating…' : mode === 'duplicate' ? 'Duplicate' : 'Create'}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
