import {
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
} from '../ui/dropdown-menu';
import { ApiError, getApiKey, restartDevice } from '../../api/client';
import { stripYaml } from '../../utils';
import type { Target } from '../../types';

/**
 * #209: shared "Device" group for any DropdownMenu that needs the same
 * device-level actions the Devices-tab hamburger exposes (Live Logs,
 * Compile history, Restart, Copy API Key, Ping, Install to address).
 *
 * Used by ``DeviceContextMenu`` (the Devices-tab per-row hamburger) and
 * the Queue tab's per-row hamburger (#209) so the two can't drift. The
 * "Config" group lives only on the Devices tab — Queue rows are
 * compile attempts, not config edit surfaces.
 */

export interface DeviceMenuSectionProps {
  target: Target;
  onToast: (msg: string, type?: 'info' | 'success' | 'error') => void;
  /** AV.6: open the per-file History panel. */
  onLogs: (target: string) => void;
  /** JH.5: open the per-device Compile-history panel. */
  onOpenCompileHistory: (target: string) => void;
  /** DM.2: open the ICMP ping diagnostic modal. */
  onPing: (target: string) => void;
  /** DM.3: open the install-to-specific-address modal. */
  onInstallToAddress: (target: string) => void;
  /** Bug #216 / #221: optional "Edit YAML" entry rendered at the bottom
   *  of the Device group. Used by the Queue-tab row hamburger; the
   *  Devices-tab hamburger leaves this unset because that tab has an
   *  inline Edit button on every row. */
  onEdit?: (target: string) => void;
  /** Optional label override; defaults to "Device". */
  label?: string;
}

export function DeviceMenuSection({
  target: t,
  onToast,
  onLogs,
  onOpenCompileHistory,
  onPing,
  onInstallToAddress,
  onEdit,
  label = 'Device',
}: DeviceMenuSectionProps) {
  async function handleCopyApiKey() {
    let key: string;
    try {
      key = await getApiKey(t.target);
    } catch (err) {
      // 404 = device YAML has no `api:` block / no encryption key — info,
      // not an error. Anything else (network, auth, server 500) is a real
      // failure the operator needs to see, otherwise they think the device
      // just doesn't have an API key when actually the request never made it.
      if (err instanceof ApiError && err.status === 404) {
        onToast('No API key found', 'info');
      } else {
        onToast('Could not fetch API key: ' + (err as Error).message, 'error');
      }
      return;
    }
    try {
      await navigator.clipboard.writeText(key);
      onToast('API key copied!', 'success');
    } catch (err) {
      // Clipboard writes can fail in iframe contexts, when the page lost
      // focus, or when the browser refuses without a recent user gesture.
      onToast('Could not copy to clipboard: ' + (err as Error).message, 'error');
    }
  }

  async function handleRestart() {
    try {
      await restartDevice(t.target);
      onToast(`Restarting ${stripYaml(t.target)}...`, 'success');
    } catch (err) {
      onToast('Restart failed: ' + (err as Error).message, 'error');
    }
  }

  return (
    <DropdownMenuGroup>
      <DropdownMenuLabel>{label}</DropdownMenuLabel>
      <DropdownMenuItem onClick={() => onLogs(t.target)}>Live Logs</DropdownMenuItem>
      <DropdownMenuItem onClick={() => onOpenCompileHistory(t.target)}>
        Compile history…
      </DropdownMenuItem>
      <DropdownMenuItem
        onClick={handleRestart}
        disabled={!t.has_restart_button}
        title={t.has_restart_button ? undefined : "No restart button in this device's YAML — add `button: [{platform: restart}]` to enable."}
      >
        Restart
      </DropdownMenuItem>
      <DropdownMenuItem
        onClick={handleCopyApiKey}
        disabled={!t.has_api_key}
        title={t.has_api_key ? undefined : "This device has no `api:` block with an encryption key. Add `api: { encryption: { key: ... } }` to enable."}
      >
        Copy API Key
      </DropdownMenuItem>
      <DropdownMenuItem onClick={() => onPing(t.target)}>
        Ping device…
      </DropdownMenuItem>
      <DropdownMenuItem onClick={() => onInstallToAddress(t.target)}>
        Install to address…
      </DropdownMenuItem>
      {onEdit && (
        <DropdownMenuItem onClick={() => onEdit(t.target)}>
          Edit YAML
        </DropdownMenuItem>
      )}
    </DropdownMenuGroup>
  );
}
