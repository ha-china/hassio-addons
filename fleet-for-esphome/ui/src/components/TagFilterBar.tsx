import { useMemo } from 'react';
import { TagChip } from './ui/tag-chips';

/**
 * TG.5 / TG.6 — above-table filter pill bar.
 *
 * One clickable pill per tag in the current fleet, with a `(N)` count
 * badge so a quick glance shows which tags are dense vs sparse.
 * Clicking a pill toggles that tag in the selected set; rows that
 * carry *every* selected tag are kept (AND-logic — #222 flipped this
 * from the original OR semantics because users want progressive
 * narrowing, e.g. `kitchen` AND `prod` to mean "kitchen-and-prod"
 * rather than "either"). Selected pills render with full saturation;
 * unselected pills are dimmed so the visible filter shape reads as
 * "what I asked for" rather than "everything but the rejects." A
 * trailing "Clear" button shows when at least one pill is selected so
 * the user can unstick the filter without re-clicking every pill.
 *
 * Empty-pool case (no tags in the fleet yet) renders nothing — a
 * fresh install shouldn't show an empty bar.
 */

interface Props {
  /** Every tag currently in use across the relevant fleet surface
   *  (devices on the Devices tab, workers on the Workers tab),
   *  pre-counted by the parent. Sorted alphabetically by the parent. */
  tags: { tag: string; count: number }[];
  /** Currently-selected pills. The parent owns this state and persists
   *  it to localStorage so the filter sticks across reloads. */
  selected: string[];
  onChange: (next: string[]) => void;
}

export function TagFilterBar({ tags, selected, onChange }: Props) {
  const selectedSet = useMemo(() => new Set(selected), [selected]);
  if (tags.length === 0) return null;

  const toggle = (t: string) => {
    if (selectedSet.has(t)) {
      onChange(selected.filter(x => x !== t));
    } else {
      onChange([...selected, t]);
    }
  };

  return (
    <div className="flex flex-wrap items-center gap-1.5 px-4 py-2 border-b border-[var(--border)] bg-[var(--surface2)]">
      <span className="text-[10px] font-semibold uppercase tracking-wide text-[var(--text-muted)] mr-1">
        Filter
      </span>
      {tags.map(({ tag, count }) => {
        const sel = selectedSet.has(tag);
        return (
          <span
            key={tag}
            className={sel ? '' : 'opacity-50 hover:opacity-90 transition-opacity'}
          >
            <TagChip
              tag={tag}
              count={count}
              onClick={() => toggle(tag)}
            />
          </span>
        );
      })}
      {selected.length > 0 && (
        <button
          type="button"
          onClick={() => onChange([])}
          className="ml-1 cursor-pointer rounded-md border border-transparent px-2 py-0.5 text-[11px] text-[var(--text-muted)] hover:border-[var(--border)] hover:text-[var(--text)]"
          title="Clear all tag filters"
        >
          Clear
        </button>
      )}
    </div>
  );
}
