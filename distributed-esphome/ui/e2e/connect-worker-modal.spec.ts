import { expect, test } from '@playwright/test';
import { mockApi } from './fixtures';

// HT.6 — Connect Worker modal snapshot test.
//
// Renders the modal, switches across the three format tabs (bash /
// powershell / compose), grabs each rendered docker-run command, and
// asserts the load-bearing shape of each:
//
//   * `--network host` (bash + powershell) and `network_mode: host`
//     (compose) — TR.4 regression guard. Without these the worker
//     starts on docker's default bridge and can't reach ESP devices.
//   * `-e SERVER_URL=...` with the live server URL the modal reads
//     from `/ui/api/server-info`.
//   * `-v esphome-versions:/esphome-versions` named-volume mount so
//     the worker's ESPHome venv cache survives container restarts.
//
// The bash branch silently breaking and every other test seeing the
// modal "render fine" was the failure mode this spec is built for.

test.beforeEach(async ({ page }) => {
  await mockApi(page);
  await page.goto('/');
  await expect(page.getByText('Living Room Sensor')).toBeVisible({ timeout: 5000 });
  await page.getByRole('button', { name: /Workers/ }).click();
  await expect(page.getByText('build-server-1').first()).toBeVisible({ timeout: 5000 });
  await page.getByRole('button', { name: /connect worker/i }).click();
  await expect(page.getByRole('dialog')).toBeVisible();
});

async function commandFor(page: import('@playwright/test').Page, format: 'bash' | 'powershell' | 'compose'): Promise<string> {
  const dialog = page.getByRole('dialog');
  if (format === 'powershell') {
    await dialog.getByRole('button', { name: 'PowerShell' }).click();
  } else if (format === 'compose') {
    await dialog.getByRole('button', { name: 'Docker Compose' }).click();
  }
  // Bash is the default tab — no click needed.
  return (await dialog.locator('.docker-cmd').innerText()).trim();
}

test('bash command carries --network host, SERVER_URL, and the named volume mount', async ({ page }) => {
  const cmd = await commandFor(page, 'bash');
  expect(cmd).toContain('--network host');
  expect(cmd).toMatch(/-e SERVER_URL=https?:\/\//);
  expect(cmd).toContain('-v esphome-versions:/esphome-versions');
  expect(cmd).toContain('docker run -d');
});

test('powershell command carries --network host, SERVER_URL, and the named volume mount', async ({ page }) => {
  const cmd = await commandFor(page, 'powershell');
  expect(cmd).toContain('--network host');
  expect(cmd).toMatch(/-e SERVER_URL=https?:\/\//);
  expect(cmd).toContain('-v esphome-versions:/esphome-versions');
  // PowerShell's continuation char is the backtick, not the backslash.
  expect(cmd).toMatch(/`\s*$/m);
});

test('docker-compose snippet uses network_mode: host plus the named volume', async ({ page }) => {
  const cmd = await commandFor(page, 'compose');
  expect(cmd).toContain('network_mode: host');
  expect(cmd).toMatch(/SERVER_URL=https?:\/\//);
  expect(cmd).toContain('esphome-versions:/esphome-versions');
  // Compose snippets are YAML, not shell — should NOT carry the `docker
  // run` prefix or the bash continuation backslashes.
  expect(cmd).not.toContain('docker run');
});

test('SERVER_URL value matches the live /ui/api/server-info url across every format', async ({ page }) => {
  // The mock fixture returns http://localhost:8765 from /ui/api/server-info.
  const expected = 'http://localhost:8765';
  for (const fmt of ['bash', 'powershell', 'compose'] as const) {
    const cmd = await commandFor(page, fmt);
    expect(cmd, `${fmt} branch`).toContain(expected);
  }
});

// DQ.17 — disk-quota field on the Connect Worker modal.

test('disk-quota field defaults to "use fleet default" → no env var emitted', async ({ page }) => {
  // Default mode is selected on initial render — the user did not flip
  // the radio to "Custom", so WORKER_DISK_QUOTA_GB must not be baked
  // into any of the three output formats.
  for (const fmt of ['bash', 'powershell', 'compose'] as const) {
    const cmd = await commandFor(page, fmt);
    expect(cmd, `${fmt} branch should NOT carry WORKER_DISK_QUOTA_GB in default mode`)
      .not.toContain('WORKER_DISK_QUOTA_GB');
  }
});

test('disk-quota field "Custom" mode bakes WORKER_DISK_QUOTA_GB into every format', async ({ page }) => {
  const dialog = page.getByRole('dialog');
  await dialog.getByLabel('Disk quota in GiB').waitFor();
  // Flip to Custom + set 5 GiB.
  await dialog.locator('input[type="radio"][value="custom"]').check();
  await dialog.getByLabel('Disk quota in GiB').fill('5');

  for (const fmt of ['bash', 'powershell', 'compose'] as const) {
    const cmd = await commandFor(page, fmt);
    expect(cmd, `${fmt} branch should carry WORKER_DISK_QUOTA_GB=5 in custom mode`)
      .toMatch(/WORKER_DISK_QUOTA_GB=5\b/);
  }
});
