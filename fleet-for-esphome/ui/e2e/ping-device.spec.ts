import { expect, test } from '@playwright/test';
import { mockApi } from './fixtures';

// DM.2 — Ping device hamburger entry + modal. Mocked /ping endpoint
// returns a stub host; spec verifies the menu item appears, the
// modal opens, and the result table renders.

test.beforeEach(async ({ page }) => {
  await mockApi(page);
  // Stub the ping endpoint with a happy-path response — no actual ICMP
  // happens in the mocked Playwright setup.
  await page.route('**/ui/api/targets/*/ping', route =>
    route.fulfill({
      json: {
        target: 'living-room.yaml',
        address: '192.168.1.10',
        ran_at: 1700000000,
        is_alive: true,
        packets_sent: 10,
        packets_received: 9,
        packet_loss: 0.1,
        min_rtt: 1.5,
        avg_rtt: 2.3,
        max_rtt: 8.0,
        jitter: 0.7,
      },
    }),
  );
  await page.goto('/');
  await expect(page.getByText('Living Room Sensor')).toBeVisible({ timeout: 5000 });
});

test('hamburger menu carries Ping device entry', async ({ page }) => {
  const row = page.locator('#tab-devices tbody tr').filter({ hasText: 'Living Room Sensor' });
  await row.getByRole('button', { name: 'More actions' }).click();
  await expect(page.getByRole('menuitem', { name: /Ping device/ })).toBeVisible();
});

test('clicking Ping device opens the modal and renders stats', async ({ page }) => {
  const row = page.locator('#tab-devices tbody tr').filter({ hasText: 'Living Room Sensor' });
  await row.getByRole('button', { name: 'More actions' }).click();
  await page.getByRole('menuitem', { name: /Ping device/ }).click();

  // Modal title shows "Ping <device>" using the YAML's stem.
  await expect(page.getByRole('dialog').getByText(/Ping living-room/)).toBeVisible();
  // Wait for the result to render — "Reachable" tag for is_alive=true.
  await expect(page.getByText('Reachable')).toBeVisible({ timeout: 5000 });
  // Result table includes the packet-loss + RTT values from the stub.
  await expect(page.getByText('192.168.1.10').first()).toBeVisible();
  await expect(page.getByText('10.0%')).toBeVisible();   // packet_loss
  await expect(page.getByText(/1\.50.*2\.30.*8\.00/)).toBeVisible();   // min/avg/max
});

test('modal Run again button re-fires the request', async ({ page }) => {
  let pings = 0;
  await page.route('**/ui/api/targets/*/ping', async (route) => {
    pings += 1;
    await route.fulfill({
      json: {
        target: 'living-room.yaml',
        address: '192.168.1.10',
        ran_at: 1700000000,
        is_alive: true,
        packets_sent: 10,
        packets_received: 10,
        packet_loss: 0,
        min_rtt: 1, avg_rtt: 1, max_rtt: 1, jitter: 0,
      },
    });
  });

  const row = page.locator('#tab-devices tbody tr').filter({ hasText: 'Living Room Sensor' });
  await row.getByRole('button', { name: 'More actions' }).click();
  await page.getByRole('menuitem', { name: /Ping device/ }).click();
  await expect(page.getByText('Reachable')).toBeVisible({ timeout: 5000 });
  expect(pings).toBe(1);

  await page.getByRole('button', { name: /Run again/ }).click();
  await expect.poll(() => pings).toBe(2);
});
