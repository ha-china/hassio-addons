import { expect, test } from '@playwright/test';
import { mockApi } from './fixtures';

// Bug #19 — invariant: the Devices-tab column-picker (the Settings²
// dropdown) renders checkbox items in the same order as the actual
// table columns render left-to-right. Picker drifting from the table
// is confusing because toggling a column visually moves something
// other than what the user just clicked on.
//
// We can't grep this — picker order lives in ``OPTIONAL_COLUMNS`` in
// DevicesTab.tsx, table order lives in ``useDeviceColumns.tsx`` —
// so the invariant lives as a Playwright assertion: open the picker,
// scrape the checkbox labels in order, scrape the table header
// columns in order, then assert that the picker labels are a
// subsequence of the table labels in the same order.

test.beforeEach(async ({ page }) => {
  await mockApi(page);
});

// Map picker label → expected column header text in the rendered table.
// Most labels match exactly; a few are aliased ("ESPHome" picker label
// for the "running" column; the column header is the version string).
// Only labels that AREN'T present as a header text get listed here.
const HEADER_LABEL_OVERRIDES: Record<string, string> = {
  ESPHome: 'ESPHome',
  // "IP Config" picker label maps to the "IP Config" header — same.
};

test('column-picker order matches the table column order (#19)', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByText('Living Room Sensor')).toBeVisible({ timeout: 5000 });

  // Get table column header labels in render order. The shadcn SortHeader
  // renders the visible label inside a button; we read every <th>'s
  // textContent and trim. Skip the leading select / actions columns.
  const headerLabels = await page.evaluate(() => {
    const ths = Array.from(document.querySelectorAll('#tab-devices thead tr:first-of-type th'));
    return ths.map(th => (th.textContent || '').trim());
  });

  // Open the picker. The Settings² icon-only button has aria-label
  // "Toggle columns".
  await page.getByRole('button', { name: 'Toggle columns' }).click();
  // Read CHECKED checkboxes only — those are the columns currently in
  // the rendered table. Unchecked picker entries reflect hidden columns
  // that don't show up in the headers; we can't assert their order via
  // the DOM. The picker array itself controls both, so as long as the
  // visible subset orders correctly, the array-controlled hidden subset
  // will too.
  const pickerLabels = await page.evaluate(() => {
    const items = Array.from(document.querySelectorAll('[role="menuitemcheckbox"]'));
    return items
      .filter(it => it.getAttribute('aria-checked') === 'true' || it.getAttribute('data-state') === 'checked')
      .map(it => (it.textContent || '').trim())
      .filter(s => s !== 'Show unmanaged devices');
  });

  // Each picker label must appear in headerLabels in the same relative
  // order. Walk both lists; advance the header pointer past matches.
  let hi = 0;
  for (const pickerLabel of pickerLabels) {
    const expectedHeader = HEADER_LABEL_OVERRIDES[pickerLabel] || pickerLabel;
    const idx = headerLabels.indexOf(expectedHeader, hi);
    expect(
      idx,
      `picker label "${pickerLabel}" (expected header "${expectedHeader}") ` +
        `not found in header labels at or after position ${hi}. ` +
        `Picker order: ${JSON.stringify(pickerLabels)}. ` +
        `Header order: ${JSON.stringify(headerLabels)}.`,
    ).toBeGreaterThanOrEqual(hi);
    hi = idx + 1;
  }
});
