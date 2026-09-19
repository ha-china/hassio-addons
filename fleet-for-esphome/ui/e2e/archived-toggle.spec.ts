import { expect, test } from '@playwright/test';
import { mockApi, targets as baseTargets } from './fixtures';

// DM.1 — in-tab archived devices toggle. Replaces the standalone
// ArchivedDevicesList surface with a column-picker entry that flips a
// per-tab boolean; archived rows render below active rows at
// opacity-50, sort by archived_at desc, and expose only Unarchive +
// Permanently delete in the action menu.

const archivedTarget = {
  target: 'attic-old.yaml',
  device_name: 'attic-old',
  friendly_name: 'attic-old',
  online: null as boolean | null,
  needs_update: false,
  has_api_key: false,
  has_web_server: false,
  archived: true,
  archived_at: Math.floor(Date.now() / 1000) - 3600,
  archived_size: 1234,
};

async function withArchivedRow(page: import('@playwright/test').Page) {
  // Swap the canonical /ui/api/targets handler with one that includes
  // a single archived row. mockApi installs handlers in beforeEach;
  // page.route stacks LIFO so this overrides the earlier registration.
  await page.route('**/ui/api/targets', async (route) => {
    if (route.request().method() === 'POST') return route.fallback();
    return route.fulfill({
      json: [...baseTargets.map(t => ({ ...t, archived: false })), archivedTarget],
    });
  });
}

test.beforeEach(async ({ page }) => {
  // Start every test with the column-picker toggle reset, otherwise
  // a previous test's localStorage leaks the visibility state.
  await page.addInitScript(() => {
    try { localStorage.removeItem('devices-show-archived'); } catch { /* ignore */ }
  });
  await mockApi(page);
});

test('column picker exposes a Show archived devices entry', async ({ page }) => {
  await withArchivedRow(page);
  await page.goto('/');
  await expect(page.getByText('Living Room Sensor')).toBeVisible({ timeout: 5000 });

  await page.getByRole('button', { name: /toggle columns/i }).click();
  const item = page.getByRole('menuitemcheckbox', { name: /show archived devices/i });
  await expect(item).toBeVisible();
  // Off by default — fresh install should not surface archived rows
  // before the user opts in.
  await expect(item).toHaveAttribute('aria-checked', 'false');
});

test('toggling on reveals archived rows below active rows at opacity-50', async ({ page }) => {
  await withArchivedRow(page);
  await page.goto('/');
  await expect(page.getByText('Living Room Sensor')).toBeVisible({ timeout: 5000 });

  // Off → archived row hidden.
  await expect(page.locator('#tab-devices tbody tr[data-archived="true"]')).toHaveCount(0);
  await expect(page.getByText('attic-old')).toBeHidden();

  // Flip the toggle on.
  await page.getByRole('button', { name: /toggle columns/i }).click();
  await page.getByRole('menuitemcheckbox', { name: /show archived devices/i }).click();
  // Close the dropdown so subsequent locators can match the table cleanly.
  await page.keyboard.press('Escape');

  // Archived row visible, marked, dimmed.
  const archivedRow = page.locator('#tab-devices tbody tr[data-archived="true"]').first();
  await expect(archivedRow).toBeVisible();
  await expect(archivedRow).toHaveClass(/opacity-50/);
  await expect(archivedRow).toContainText('attic-old');

  // Active rows render before archived rows in DOM order — DM.1
  // requires archived to sort to a second group below all active rows.
  const allRows = page.locator('#tab-devices tbody tr');
  const lastIndex = await allRows.count() - 1;
  await expect(allRows.nth(lastIndex)).toHaveAttribute('data-archived', 'true');
});

test('archived row hamburger menu shows only Unarchive + Permanently delete', async ({ page }) => {
  await withArchivedRow(page);
  await page.goto('/');
  await expect(page.getByText('Living Room Sensor')).toBeVisible({ timeout: 5000 });

  await page.getByRole('button', { name: /toggle columns/i }).click();
  await page.getByRole('menuitemcheckbox', { name: /show archived devices/i }).click();
  await page.keyboard.press('Escape');

  const archivedRow = page.locator('#tab-devices tbody tr[data-archived="true"]').first();
  await archivedRow.getByRole('button', { name: /more actions/i }).click();

  await expect(page.getByRole('menuitem', { name: /^Unarchive$/ })).toBeVisible();
  await expect(page.getByRole('menuitem', { name: /Permanently delete/i })).toBeVisible();

  // Active-row actions must NOT show on archived rows — none of these
  // make sense for a YAML in .archive/ (the poller / queue don't see
  // it, so Compile / Live Logs / Restart would 404 or no-op).
  for (const label of ['Live Logs', 'Compile history', 'Restart', 'Copy API Key', 'Rename', 'Duplicate', 'Archive']) {
    await expect(page.getByRole('menuitem', { name: new RegExp(`^${label}`) })).toHaveCount(0);
  }
});

test('Unarchive fires POST /ui/api/archive/<filename>/restore', async ({ page }) => {
  await withArchivedRow(page);
  let restoredFor: string | null = null;
  await page.route('**/ui/api/archive/*/restore', route => {
    if (route.request().method() === 'POST') {
      const url = route.request().url();
      restoredFor = decodeURIComponent(url.split('/archive/')[1].split('/restore')[0]);
      return route.fulfill({ json: { ok: true } });
    }
    return route.fallback();
  });
  await page.goto('/');
  await expect(page.getByText('Living Room Sensor')).toBeVisible({ timeout: 5000 });

  await page.getByRole('button', { name: /toggle columns/i }).click();
  await page.getByRole('menuitemcheckbox', { name: /show archived devices/i }).click();
  await page.keyboard.press('Escape');

  const archivedRow = page.locator('#tab-devices tbody tr[data-archived="true"]').first();
  await archivedRow.getByRole('button', { name: /more actions/i }).click();
  await page.getByRole('menuitem', { name: /^Unarchive$/ }).click();

  await expect.poll(() => restoredFor).toBe('attic-old.yaml');
});

test('Permanently delete needs a two-step confirm before firing DELETE', async ({ page }) => {
  await withArchivedRow(page);
  let deletedFor: string | null = null;
  await page.route('**/ui/api/archive/*', route => {
    if (route.request().method() === 'DELETE') {
      const url = route.request().url();
      deletedFor = decodeURIComponent(url.split('/archive/')[1].split('?')[0]);
      return route.fulfill({ json: { ok: true } });
    }
    return route.fallback();
  });
  await page.goto('/');
  await expect(page.getByText('Living Room Sensor')).toBeVisible({ timeout: 5000 });

  await page.getByRole('button', { name: /toggle columns/i }).click();
  await page.getByRole('menuitemcheckbox', { name: /show archived devices/i }).click();
  await page.keyboard.press('Escape');

  const archivedRow = page.locator('#tab-devices tbody tr[data-archived="true"]').first();
  await archivedRow.getByRole('button', { name: /more actions/i }).click();
  await page.getByRole('menuitem', { name: /Permanently delete/i }).click();

  // Confirm dialog opens — destructive, so two clicks needed.
  const dialog = page.getByRole('dialog');
  await expect(dialog).toBeVisible();
  await expect(dialog.getByRole('heading', { name: /Delete attic-old\.yaml from the archive/i })).toBeVisible();
  // No DELETE has fired yet.
  expect(deletedFor).toBeNull();

  await dialog.getByRole('button', { name: /^Delete$/ }).click();
  await expect.poll(() => deletedFor).toBe('attic-old.yaml');
});
