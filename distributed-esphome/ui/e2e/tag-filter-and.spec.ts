import { expect, test } from '@playwright/test';
import { mockApi } from './fixtures';

/**
 * Bug #222: tag filter pill bar uses AND semantics (was OR pre-#222).
 * Selecting `kitchen` matches every device tagged kitchen (Living Room
 * Sensor + Bedroom Light per fixtures); adding `cosy` narrows to rows
 * carrying BOTH (only Living Room Sensor) — under the old OR behaviour
 * the second click would have *added* cosy-only rows, not narrowed.
 */
test('Devices tag-filter narrows progressively (AND across selected pills)', async ({ page }) => {
  await mockApi(page);
  await page.goto('/');

  await expect(page.getByText('Living Room Sensor')).toBeVisible({ timeout: 5000 });

  const tab = page.locator('#tab-devices');
  const filterBar = tab.locator('div').filter({ hasText: /^Filter/ }).first();

  // Click `kitchen` — both kitchen-tagged rows visible.
  await filterBar.getByRole('button', { name: /^kitchen \(/ }).click();
  await expect(tab.getByText('Living Room Sensor')).toBeVisible();
  await expect(tab.getByText('Bedroom Light')).toBeVisible();

  // Add `cosy` — under AND semantics, only Living Room Sensor (which has
  // both kitchen + cosy) survives. Bedroom Light (kitchen + sleeping)
  // drops out, even though it still matches `kitchen`.
  await filterBar.getByRole('button', { name: /^cosy \(/ }).click();
  await expect(tab.getByText('Living Room Sensor')).toBeVisible();
  await expect(tab.getByText('Bedroom Light')).toHaveCount(0);
});
