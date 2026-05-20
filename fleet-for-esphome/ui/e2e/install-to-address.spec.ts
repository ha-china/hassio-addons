import { expect, test } from '@playwright/test';
import { mockApi } from './fixtures';

// DM.3 — Install-to-specific-address modal:
// pre-fills with the device's resolved IP, lets the user override,
// confirms the override before sending the compile request, sends
// `address` in the POST body for the single target.

test.beforeEach(async ({ page }) => {
  await mockApi(page);
  await page.goto('/');
  await expect(page.getByText('Living Room Sensor')).toBeVisible({ timeout: 5000 });
});

test('hamburger menu carries Install to address entry', async ({ page }) => {
  const row = page.locator('#tab-devices tbody tr').filter({ hasText: 'Living Room Sensor' });
  await row.getByRole('button', { name: 'More actions' }).click();
  await expect(page.getByRole('menuitem', { name: /Install to address/ })).toBeVisible();
});

test('modal pre-fills with device IP and sends compile when unchanged', async ({ page }) => {
  const compileBodies: any[] = [];
  await page.route('**/ui/api/compile', async (route, request) => {
    compileBodies.push(JSON.parse(request.postData() || '{}'));
    await route.fulfill({ json: { run_id: 'r1', enqueued: 1 } });
  });

  const row = page.locator('#tab-devices tbody tr').filter({ hasText: 'Living Room Sensor' });
  await row.getByRole('button', { name: 'More actions' }).click();
  await page.getByRole('menuitem', { name: /Install to address/ }).click();

  // Pre-fill should be the device's IP from the seeded fixture
  // (living-room.yaml is seeded with ip_address=192.168.1.10).
  const input = page.getByRole('textbox', { name: /OTA address/i });
  await expect(input).toHaveValue('192.168.1.10');

  // Click Install once — single-step because the value is unchanged.
  await page.getByRole('button', { name: 'Install' }).click();
  await expect.poll(() => compileBodies.length).toBe(1);
  expect(compileBodies[0]).toMatchObject({
    targets: ['living-room.yaml'],
    address: '192.168.1.10',
  });
});

test('editing the address requires a confirm step', async ({ page }) => {
  const compileBodies: any[] = [];
  await page.route('**/ui/api/compile', async (route, request) => {
    compileBodies.push(JSON.parse(request.postData() || '{}'));
    await route.fulfill({ json: { run_id: 'r1', enqueued: 1 } });
  });

  const row = page.locator('#tab-devices tbody tr').filter({ hasText: 'Living Room Sensor' });
  await row.getByRole('button', { name: 'More actions' }).click();
  await page.getByRole('menuitem', { name: /Install to address/ }).click();

  const input = page.getByRole('textbox', { name: /OTA address/i });
  await input.fill('192.168.1.99');

  // First click — shows the confirm warning, no compile fired yet.
  await page.getByRole('button', { name: 'Install' }).click();
  await expect(page.getByText(/Override the auto-resolved address/)).toBeVisible();
  expect(compileBodies.length).toBe(0);

  // Second click — confirms.
  await page.getByRole('button', { name: 'Install' }).click();
  await expect.poll(() => compileBodies.length).toBe(1);
  expect(compileBodies[0]).toMatchObject({
    targets: ['living-room.yaml'],
    address: '192.168.1.99',
  });
});

test('Install button disables when address is invalid', async ({ page }) => {
  const row = page.locator('#tab-devices tbody tr').filter({ hasText: 'Living Room Sensor' });
  await row.getByRole('button', { name: 'More actions' }).click();
  await page.getByRole('menuitem', { name: /Install to address/ }).click();

  const input = page.getByRole('textbox', { name: /OTA address/i });
  // Spaces are not in the allowed regex.
  await input.fill('not a valid address');
  await expect(page.getByRole('button', { name: 'Install' })).toBeDisabled();
  await expect(page.getByText(/Invalid address/)).toBeVisible();
});
