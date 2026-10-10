import { expect, test } from '@playwright/test';
import { mockApi } from './fixtures';

test.beforeEach(async ({ page }) => {
  await mockApi(page);
  await page.goto('/');
  await page.getByRole('button', { name: /Workers/ }).click();
});

// ---------------------------------------------------------------------------
// PW.5 — Workers tab interactions
// ---------------------------------------------------------------------------

test('workers tab shows worker hostnames', async ({ page }) => {
  await expect(page.getByText('build-server-1').first()).toBeVisible({ timeout: 5000 });
  await expect(page.getByText('build-server-2').first()).toBeVisible();
});

test('online worker shows online indicator', async ({ page }) => {
  await expect(page.getByText('build-server-1').first()).toBeVisible({ timeout: 5000 });
});

test('connect worker button is present', async ({ page }) => {
  const btn = page.getByRole('button', { name: /connect/i });
  await expect(btn).toBeVisible({ timeout: 5000 });
});

test('connect worker button opens modal', async ({ page }) => {
  const btn = page.getByRole('button', { name: /connect/i });
  await expect(btn).toBeVisible({ timeout: 5000 });
  await btn.click();

  // Modal should show connection instructions with docker command
  await expect(page.getByText(/docker/i).first()).toBeVisible({ timeout: 5000 });
});

test('worker shows system info', async ({ page }) => {
  await expect(page.getByText('build-server-1').first()).toBeVisible({ timeout: 5000 });
  // Worker 1 has system_info with cpu, memory, etc.
  await expect(page.getByText(/Intel|i7|32 GB|Debian/i).first()).toBeVisible();
});

// DQ.18 — disk-quota cell + Set disk quota dialog

test('worker row surfaces disk-quota usage when system_info reports it', async ({ page }) => {
  // Fixture seeds 2.1 / 10 GiB → "Quota: 2.1 / 10 GiB" in the platform cell.
  await expect(page.getByText('build-server-1').first()).toBeVisible({ timeout: 5000 });
  await expect(page.getByText(/Quota:\s*2\.1 \/ 10 GiB/)).toBeVisible();
});

test('Set disk quota… dialog round-trips a custom override', async ({ page }) => {
  await expect(page.getByText('build-server-1').first()).toBeVisible({ timeout: 5000 });

  // Open the Actions hamburger for build-server-1 + click "Set disk quota…".
  // The actions menu has aria-label "Actions for build-server-1" so we can
  // target the right row deterministically.
  await page.getByRole('button', { name: 'Actions for build-server-1' }).click();
  await page.getByRole('menuitem', { name: /Set disk quota/i }).click();

  // Dialog renders with the fleet default (10 GiB) selected — flip to Custom + 5 GiB.
  const dialog = page.getByRole('dialog');
  await expect(dialog).toBeVisible();
  await expect(dialog.getByText(/Use fleet default \(10 GiB\)/)).toBeVisible();
  await dialog.locator('input[type="radio"][value="custom"]').check();
  await dialog.locator('#disk-quota-gb').fill('5');

  // Capture the POST body to /ui/api/workers/worker-1/disk-quota and assert
  // the wire shape (bytes — not GiB — at the API boundary).
  const reqWait = page.waitForRequest((req) =>
    req.url().includes('/ui/api/workers/worker-1/disk-quota')
    && req.method() === 'POST',
  );
  await dialog.getByRole('button', { name: /^Save$/ }).click();
  const req = await reqWait;
  expect(JSON.parse(req.postData() ?? '{}')).toEqual({
    disk_quota_bytes: 5 * 1024 ** 3,
  });
});

test('Set disk quota… dialog clears the override when "Use fleet default" is saved', async ({ page }) => {
  await expect(page.getByText('build-server-1').first()).toBeVisible({ timeout: 5000 });
  await page.getByRole('button', { name: 'Actions for build-server-1' }).click();
  await page.getByRole('menuitem', { name: /Set disk quota/i }).click();

  const dialog = page.getByRole('dialog');
  await expect(dialog).toBeVisible();
  // Start by going Custom so the next "default" click is a real state change.
  await dialog.locator('input[type="radio"][value="custom"]').check();
  await dialog.locator('input[type="radio"][value="default"]').check();

  const reqWait = page.waitForRequest((req) =>
    req.url().includes('/ui/api/workers/worker-1/disk-quota')
    && req.method() === 'POST',
  );
  await dialog.getByRole('button', { name: /^Save$/ }).click();
  const req = await reqWait;
  expect(JSON.parse(req.postData() ?? '{}')).toEqual({
    disk_quota_bytes: null,
  });
});
