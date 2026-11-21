import { expect, test } from '@playwright/test';
import { mockApi } from './fixtures';

// Bug #8 — bulk-edit tags from the Devices toolbar.
//
// Fixtures: `living-room.yaml` has tags="kitchen,cosy" and
// `bedroom-light.yaml` has tags="kitchen,sleeping". Selecting both should
// surface "kitchen" as the only common tag (removable in bulk) and
// "cosy"/"sleeping" as partial (read-only). The save handler emits a
// per-target POST to /ui/api/targets/{filename}/meta — this spec asserts
// both POSTs fire with the expected merged-tags payload.

test.beforeEach(async ({ page }) => {
  await mockApi(page);
});

async function selectAndOpenBulkTags(page: import('@playwright/test').Page) {
  await page.goto('/');
  await expect(page.getByText('Living Room Sensor')).toBeVisible({ timeout: 5000 });

  // Tick the row checkboxes for the two devices that share tags.
  const livingRoom = page.locator('#tab-devices tbody tr').filter({ hasText: 'Living Room Sensor' });
  const bedroom = page.locator('#tab-devices tbody tr').filter({ hasText: 'Bedroom Light' });
  await livingRoom.locator('input[type="checkbox"]').first().check();
  await bedroom.locator('input[type="checkbox"]').first().check();

  // Open the toolbar Actions dropdown and pick "Edit Tags…".
  await page.locator('#tab-devices').getByRole('button', { name: /^Actions/ }).click();
  await page.getByRole('menuitem', { name: 'Edit Tags…' }).click();
  await expect(page.locator('[data-slot="dialog-content"]')).toBeVisible({ timeout: 3000 });
}

test('bulk dialog surfaces common (kitchen) and partial (cosy / sleeping) tags (#8)', async ({ page }) => {
  await selectAndOpenBulkTags(page);

  const dialog = page.locator('[data-slot="dialog-content"]');
  await expect(dialog.getByText('Bulk edit tags — 2 devices')).toBeVisible();

  // "kitchen" is on both → shared / removable section.
  await expect(dialog.getByText(/Shared by all 2 devices/)).toBeVisible();
  await expect(dialog.locator('text=kitchen').first()).toBeVisible();

  // "cosy" + "sleeping" land in the partial / read-only section.
  await expect(dialog.getByText(/On some devices only/)).toBeVisible();
  await expect(dialog.locator('text=cosy').first()).toBeVisible();
  await expect(dialog.locator('text=sleeping').first()).toBeVisible();
});

test('bulk add applies the new tag to every selected device (#8)', async ({ page }) => {
  await selectAndOpenBulkTags(page);

  // Capture the per-target meta POSTs the dialog fires on save.
  const postedMeta: Record<string, unknown> = {};
  await page.route('**/ui/api/targets/*/meta', async (route, request) => {
    const url = new URL(request.url());
    // Path = /ui/api/targets/<filename>/meta
    const m = url.pathname.match(/\/ui\/api\/targets\/([^/]+)\/meta$/);
    if (m) postedMeta[decodeURIComponent(m[1])] = JSON.parse(request.postData() || '{}');
    await route.fulfill({ status: 200, contentType: 'application/json', body: '{"ok":true}' });
  });

  const dialog = page.locator('[data-slot="dialog-content"]');
  // Type a new tag and Enter.
  const input = dialog.locator('input[placeholder*="Type a tag"]');
  await input.fill('production');
  await input.press('Enter');
  await dialog.getByRole('button', { name: 'Apply' }).click();

  // Wait for the bulk Promise.all to flush.
  await expect.poll(() => Object.keys(postedMeta).length, { timeout: 3000 }).toBe(2);
  // Living-room originally had kitchen,cosy → kitchen,cosy,production
  expect(postedMeta['living-room.yaml']).toEqual({ tags: 'kitchen,cosy,production' });
  // Bedroom-light originally had kitchen,sleeping → kitchen,sleeping,production
  expect(postedMeta['bedroom-light.yaml']).toEqual({ tags: 'kitchen,sleeping,production' });
});

test('bulk remove drops the tag from every device that has it (#8)', async ({ page }) => {
  await selectAndOpenBulkTags(page);

  const postedMeta: Record<string, unknown> = {};
  await page.route('**/ui/api/targets/*/meta', async (route, request) => {
    const m = new URL(request.url()).pathname.match(/\/ui\/api\/targets\/([^/]+)\/meta$/);
    if (m) postedMeta[decodeURIComponent(m[1])] = JSON.parse(request.postData() || '{}');
    await route.fulfill({ status: 200, contentType: 'application/json', body: '{"ok":true}' });
  });

  const dialog = page.locator('[data-slot="dialog-content"]');
  // Click the × on the "kitchen" chip in the Shared row.
  const removeBtn = dialog.getByRole('button', { name: 'Remove tag kitchen' });
  await removeBtn.click();
  await dialog.getByRole('button', { name: 'Apply' }).click();

  await expect.poll(() => Object.keys(postedMeta).length, { timeout: 3000 }).toBe(2);
  // Both lose kitchen, partial tags survive.
  expect(postedMeta['living-room.yaml']).toEqual({ tags: 'cosy' });
  expect(postedMeta['bedroom-light.yaml']).toEqual({ tags: 'sleeping' });
});
