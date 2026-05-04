import { useState } from 'react';
import { Wifi } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogClose,
} from './ui/dialog';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { compile } from '../api/client';
import { stripYaml } from '../utils';

interface Props {
  /** YAML filename. */
  target: string;
  /** Pre-fill — typically the device's resolved IP from the poller. */
  defaultAddress: string | null | undefined;
  onClose: () => void;
  onToast: (msg: string, type?: 'info' | 'success' | 'error') => void;
}

// DM.3: Allowed shape for an OTA address — IPv4 / IPv6 / hostname /
// hostname.local. Mirrors the server-side bound (length ≤ 253) and
// keeps the client-side regex narrow enough to reject obvious typos
// without rejecting legitimate IPv6 (which uses ``:`` separators).
const ADDRESS_RE = /^[a-zA-Z0-9.\-_:]+$/;

export default function InstallToAddressModal({ target, defaultAddress, onClose, onToast }: Props) {
  const initial = (defaultAddress ?? '').trim();
  const [address, setAddress] = useState<string>(initial);
  const [confirming, setConfirming] = useState(false);
  const [busy, setBusy] = useState(false);

  const trimmed = address.trim();
  const edited = trimmed !== initial;
  const isValid = trimmed.length > 0 && trimmed.length <= 253 && ADDRESS_RE.test(trimmed);

  async function fireInstall() {
    setBusy(true);
    try {
      await compile([target], undefined, undefined, false, undefined, undefined, trimmed);
      onToast(`Queued install for ${stripYaml(target)} → ${trimmed}`, 'success');
      onClose();
    } catch (e) {
      onToast(`Install failed: ${(e as Error).message}`, 'error');
      setBusy(false);
    }
  }

  function handlePrimary() {
    if (!isValid || busy) return;
    // Single-step install when the user didn't edit the pre-fill;
    // otherwise show the confirm step so a typo doesn't OTA the wrong
    // device.
    if (!edited) {
      fireInstall();
      return;
    }
    if (!confirming) {
      setConfirming(true);
      return;
    }
    fireInstall();
  }

  return (
    <Dialog open onOpenChange={(open) => { if (!open && !busy) onClose(); }}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Wifi className="size-4" aria-hidden="true" />
            Install {stripYaml(target)} to address…
          </DialogTitle>
        </DialogHeader>
        <div className="px-4 py-3 flex flex-col gap-2 text-sm text-[var(--text)]">
          <p className="text-xs text-[var(--text-muted)]">
            Compile and OTA-flash this device, overriding the auto-resolved
            address with the one you enter below.
          </p>
          <Label htmlFor="install-address">OTA address</Label>
          <Input
            id="install-address"
            value={address}
            onChange={(e) => { setAddress(e.target.value); setConfirming(false); }}
            placeholder={initial || '192.168.1.42 or device.local'}
            autoFocus
            disabled={busy}
            aria-invalid={!isValid && trimmed.length > 0}
          />
          {initial ? (
            <div className="text-[11px] text-[var(--text-muted)]">
              Auto-resolved: <code>{initial}</code> — edit to override.
            </div>
          ) : (
            <div className="text-[11px] text-[var(--text-muted)]">
              No auto-resolved address — enter the device's IP or hostname.
            </div>
          )}
          {!isValid && trimmed.length > 0 && (
            <div className="text-[11px] text-[var(--danger)]">
              Invalid address. Use letters, digits, dots, hyphens, underscores or colons.
            </div>
          )}
          {confirming && edited && (
            <div className="rounded-md border border-[var(--warn)] bg-[var(--warn-bg)] p-3 text-[12px]">
              <div className="font-medium">Override the auto-resolved address?</div>
              <div className="mt-1 text-[var(--text-muted)]">
                You're about to OTA <strong>{stripYaml(target)}</strong> to{' '}
                <code>{trimmed}</code> instead of the discovered{' '}
                {initial ? <code>{initial}</code> : 'address'}. Click <strong>Install</strong> again to confirm.
              </div>
            </div>
          )}
        </div>
        <DialogFooter>
          <DialogClose>
            <Button variant="secondary" size="sm" disabled={busy}>Cancel</Button>
          </DialogClose>
          <Button
            size="sm"
            onClick={handlePrimary}
            disabled={!isValid || busy}
          >
            {busy ? 'Queuing…' : 'Install'}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
