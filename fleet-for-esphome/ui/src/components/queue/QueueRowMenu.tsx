import { memo } from 'react';
import { MoreVertical } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from '../ui/dropdown-menu';
import { DeviceMenuSection } from '../devices/DeviceMenuSection';
import type { Job, Target } from '../../types';

const variantLabel = (variant: string): string => {
  switch (variant) {
    case 'factory': return 'Factory image';
    case 'ota':     return 'OTA image';
    case 'firmware': return 'Firmware';
    default:        return variant;
  }
};

/**
 * #209: per-row hamburger for the Queue tab. Mirrors the device-section
 * actions from the Devices-tab hamburger (so users get a consistent
 * surface no matter which tab they're on) plus the per-job actions that
 * used to live as inline buttons (Cancel, Download). Rerun, Clear, and
 * (since #221) View log stay inline as the highest-frequency actions.
 *
 * Bug #216 / #221: Edit YAML moved from the standalone "Job" group
 * into the Device-section list (via DeviceMenuSection's optional
 * ``onEdit`` prop) so it sits with the other device-targeted actions.
 *
 * The "Config" group from the Devices-tab hamburger (Pin/Rename/
 * Duplicate/Config history/Rendered config/Commit/Archive/Delete) is
 * intentionally NOT mirrored here — Queue rows are compile attempts,
 * not config edit surfaces, and config-mutating actions belong on the
 * Devices tab so users land at the canonical place to make changes.
 */

interface Props {
  job: Job;
  /** Resolved Target — required to render the device-section items.
   *  When the row's target was deleted (job pre-dates the YAML being
   *  removed), the menu still renders Cancel/Download but hides the
   *  device section since those actions don't have a target to act on. */
  target: Target | null;
  inProgress: boolean;
  canDownload: boolean;
  variants: string[];
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onCancel: (jobId: string) => void;
  onEdit: (target: string) => void;
  onToast: (msg: string, type?: 'info' | 'success' | 'error') => void;
  onLogs: (target: string) => void;
  onOpenCompileHistory: (target: string) => void;
  onPing: (target: string) => void;
  onInstallToAddress: (target: string) => void;
}

function QueueRowMenuImpl({
  job,
  target,
  inProgress,
  canDownload,
  variants,
  open,
  onOpenChange,
  onCancel,
  onEdit,
  onToast,
  onLogs,
  onOpenCompileHistory,
  onPing,
  onInstallToAddress,
}: Props) {
  return (
    <DropdownMenu open={open} onOpenChange={onOpenChange}>
      <DropdownMenuTrigger
        className="action-menu-trigger cursor-pointer inline-flex items-center justify-center"
        aria-label="More actions"
        title="More actions"
      >
        <MoreVertical className="size-4" />
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className="min-w-[200px] w-max max-w-[320px] data-[state=closed]:!animate-none"
      >
        {/* Job group: only renders when there are job-level entries to
            show. Cancel is the only remaining entry now that View Log
            (#221) is inline and Edit YAML (#216 / #221) moved to the
            Device section. When the row's target was deleted we fall
            back to surfacing Edit YAML here — DeviceMenuSection won't
            render without a Target. */}
        {(inProgress || !target) && (
          <DropdownMenuGroup>
            <DropdownMenuLabel>Job</DropdownMenuLabel>
            {inProgress && (
              <DropdownMenuItem
                variant="destructive"
                onClick={() => onCancel(job.id)}
              >
                Cancel
              </DropdownMenuItem>
            )}
            {!target && (
              <DropdownMenuItem onClick={() => onEdit(job.target)}>
                Edit YAML
              </DropdownMenuItem>
            )}
          </DropdownMenuGroup>
        )}

        {canDownload && variants.length > 0 && (
          <>
            {inProgress && <DropdownMenuSeparator />}
            <DropdownMenuGroup>
              <DropdownMenuLabel>Download firmware</DropdownMenuLabel>
              {variants.map((variant) => (
                <DropdownMenuItem
                  key={`${variant}-raw`}
                  render={(props) => (
                    <a
                      {...props}
                      href={`./ui/api/jobs/${job.id}/firmware?variant=${variant}`}
                      download
                      onClick={(e) => e.stopPropagation()}
                    >
                      {variantLabel(variant)} (.bin)
                    </a>
                  )}
                />
              ))}
              {variants.map((variant) => (
                <DropdownMenuItem
                  key={`${variant}-gz`}
                  render={(props) => (
                    <a
                      {...props}
                      href={`./ui/api/jobs/${job.id}/firmware?variant=${variant}&gz=1`}
                      download
                      onClick={(e) => e.stopPropagation()}
                    >
                      {variantLabel(variant)} (.bin.gz)
                    </a>
                  )}
                />
              ))}
            </DropdownMenuGroup>
          </>
        )}

        {target && (
          <>
            {(inProgress || (canDownload && variants.length > 0)) && <DropdownMenuSeparator />}
            <DeviceMenuSection
              target={target}
              onToast={onToast}
              onLogs={onLogs}
              onOpenCompileHistory={onOpenCompileHistory}
              onPing={onPing}
              onInstallToAddress={onInstallToAddress}
              onEdit={onEdit}
            />
          </>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

function propsEqual(prev: Props, next: Props): boolean {
  if (prev.open !== next.open) return false;
  if (prev.inProgress !== next.inProgress) return false;
  if (prev.canDownload !== next.canDownload) return false;
  if (prev.variants.length !== next.variants.length) return false;
  if (prev.variants.some((v, i) => v !== next.variants[i])) return false;
  if (prev.job.id !== next.job.id) return false;
  if (prev.job.target !== next.job.target) return false;
  // Target identity changes on every SWR poll but only the listed
  // attributes drive the visible menu shape — same compare we use for
  // the Devices-tab hamburger.
  const a = prev.target;
  const b = next.target;
  if (a === null || b === null) return a === b;
  return (
    a.target === b.target &&
    a.has_restart_button === b.has_restart_button &&
    a.has_api_key === b.has_api_key
  );
}

export const QueueRowMenu = memo(QueueRowMenuImpl, propsEqual);
