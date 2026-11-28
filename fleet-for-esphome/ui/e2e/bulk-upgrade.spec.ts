import { expect, test } from '@playwright/test';
import { mockApi, targets as fixtureTargets } from './fixtures';

// Bugs #106 + #107 — bulk-upgrade dropdown routes through UpgradeModal,
// and "Commit all uncommitted" prompts for a commit message before the
// fan-out.

test.beforeEach(async ({ page }) => {
  await mockApi(page);
  await page.goto('/');
  await expect(page.getByText('Living Room Sensor')).toBeVisible({ timeout: 5000 });
});

function upgradeTrigger(page: import('@playwright/test').Page) {
  return page.locator('#tab-devices .actions').getByRole('button', { name: /^Upgrade/ });
}

function actionsTrigger(page: import('@playwright/test').Page) {
  return page.locator('#tab-devices .actions').getByRole('button', { name: /^Actions/ });
}

test.describe('Bug #107 — bulk Upgrade items open the UpgradeModal', () => {
  test('Upgrade All opens the modal with the full target count', async ({ page }) => {
    await upgradeTrigger(page).click();
    await page.getByRole('menuitem', { name: /^Upgrade All$/ }).click();

    const dialog = page.getByRole('dialog');
    await expect(dialog).toBeVisible();
    // Title surfaces the multi-target displayName from App.tsx.
    await expect(dialog.getByRole('heading', { name: new RegExp(`Upgrade — all ${fixtureTargets.length} devices`) })).toBeVisible();
    // The pin-warning + remove-existing-schedule are suppressed in the
    // multi-target case because no single device drives them.
    await expect(dialog.getByText(/Pin update\./)).toHaveCount(0);
    await expect(dialog.getByRole('button', { name: /Remove existing schedule/ })).toHaveCount(0);
    // The action radio is still visible — the user picks Upgrade Now /
    // Download Now / Schedule Recurring / Schedule Once.
    await expect(dialog.getByRole('radio', { name: /Upgrade Now/ })).toBeVisible();
    await expect(dialog.getByRole('radio', { name: /Schedule Recurring/ })).toBeVisible();
  });

  test('Upgrade Outdated opens the modal with only outdated devices in the title', async ({ page }) => {
    await upgradeTrigger(page).click();
    await page.getByRole('menuitem', { name: /^Upgrade Outdated$/ }).click();

    const dialog = page.getByRole('dialog');
    await expect(dialog).toBeVisible();
    // Only bedroom-light has needs_update=true in the fixture.
    await expect(dialog.getByRole('heading', { name: /Upgrade — 1 outdated device$/ })).toBeVisible();
  });

  test('Upgrade Selected is disabled with no checked rows', async ({ page }) => {
    await upgradeTrigger(page).click();
    await expect(page.getByRole('menuitem', { name: /^Upgrade Selected$/ })).toHaveAttribute('aria-disabled', 'true');
    await page.keyboard.press('Escape');
  });

  // 115 — "Upgrade Changed": filters by hasDriftedConfig (config_drifted
  // _since_flash || config_modified). Distinct from Upgrade Outdated
  // (firmware-version mismatch).
  test('Upgrade Changed is disabled when no targets have config drift', async ({ page }) => {
    await upgradeTrigger(page).click();
    await expect(page.getByRole('menuitem', { name: /^Upgrade Changed$/ })).toHaveAttribute('aria-disabled', 'true');
    await page.keyboard.press('Escape');
  });

  test('Upgrade Changed opens the modal with only drifted devices in the title', async ({ page }) => {
    // Mark exactly one fixture target as drifted so the title lands on
    // "1 changed device".
    await page.route('**/ui/api/targets', route => {
      const drifted = fixtureTargets.map((t, i) => ({
        ...t,
        config_drifted_since_flash: i === 0 ? true : null,
      }));
      route.fulfill({ json: drifted });
    });
    await page.reload();
    await expect(page.getByText('Living Room Sensor')).toBeVisible({ timeout: 5000 });

    await upgradeTrigger(page).click();
    const item = page.getByRole('menuitem', { name: /^Upgrade Changed$/ });
    await expect(item).not.toHaveAttribute('aria-disabled', 'true');
    await item.click();

    const dialog = page.getByRole('dialog');
    await expect(dialog).toBeVisible();
    await expect(dialog.getByRole('heading', { name: /Upgrade — 1 changed device$/ })).toBeVisible();
  });

  // #229 — `/ui/api/targets` merges `.archive/*.yaml` rows into the
  // same list (DM.1 in-tab surface) with `online=null`, `needs_update
  // =null`, `config_modified=null`. The bulk-Upgrade predicates used
  // to leak archived rows into `Upgrade All` (no filter) and
  // `Upgrade All Online` (`t.online !== false` passes `null`); the
  // server then silently filtered them via `set(scan_configs(...))`,
  // so the toast count and the queued count diverged. This pair of
  // tests asserts the predicates exclude archived rows so the count
  // the user sees matches the count the queue receives.
  test('Upgrade All / Upgrade All Online exclude archived rows so the title count matches the active set (#229)', async ({ page }) => {
    const activeCount = fixtureTargets.length;
    await page.route('**/ui/api/targets', route => {
      const archivedExtras: typeof fixtureTargets = [
        {
          ...fixtureTargets[0],
          target: '.archive/old-bulb.yaml',
          friendly_name: 'Old Bulb (archived)',
          device_name: 'old-bulb',
          online: null,
          needs_update: undefined,
          config_modified: undefined,
          archived: true,
        },
        {
          ...fixtureTargets[0],
          target: '.archive/decommissioned-sensor.yaml',
          friendly_name: 'Decommissioned Sensor (archived)',
          device_name: 'decommissioned-sensor',
          online: null,
          needs_update: undefined,
          config_modified: undefined,
          archived: true,
        },
      ];
      route.fulfill({ json: [...fixtureTargets, ...archivedExtras] });
    });
    await page.reload();
    await expect(page.getByText('Living Room Sensor')).toBeVisible({ timeout: 5000 });

    // Upgrade All: title says `all <activeCount> devices`, not `all <activeCount + 2>`.
    await upgradeTrigger(page).click();
    await page.getByRole('menuitem', { name: /^Upgrade All$/ }).click();
    let dialog = page.getByRole('dialog');
    await expect(dialog.getByRole('heading', { name: new RegExp(`Upgrade — all ${activeCount} devices`) })).toBeVisible();
    await dialog.getByRole('button', { name: /^Cancel$/ }).click();
    await expect(dialog).toBeHidden();

    // Upgrade All Online: same — archived rows must NOT count toward
    // the "online" set even though their `online` field is null.
    const onlineActive = fixtureTargets.filter(t => t.online !== false).length;
    await upgradeTrigger(page).click();
    await page.getByRole('menuitem', { name: /^Upgrade All Online$/ }).click();
    dialog = page.getByRole('dialog');
    await expect(dialog.getByRole('heading', { name: new RegExp(`Upgrade — ${onlineActive} online devices?`) })).toBeVisible();
    await dialog.getByRole('button', { name: /^Cancel$/ }).click();
  });

  test('Upgrade All Online posts only active targets to /ui/api/compile (#229)', async ({ page }) => {
    let postedTargets: unknown = null;
    await page.route('**/ui/api/targets', route => {
      const archived: typeof fixtureTargets[number] = {
        ...fixtureTargets[0],
        target: '.archive/old-bulb.yaml',
        friendly_name: 'Old Bulb (archived)',
        device_name: 'old-bulb',
        online: null,
        needs_update: undefined,
        config_modified: undefined,
        archived: true,
      };
      route.fulfill({ json: [...fixtureTargets, archived] });
    });
    await page.route('**/ui/api/compile', route => {
      const body = route.request().postDataJSON();
      postedTargets = body.targets;
      route.fulfill({ json: { enqueued: Array.isArray(body.targets) ? body.targets.length : 0 } });
    });
    await page.reload();
    await expect(page.getByText('Living Room Sensor')).toBeVisible({ timeout: 5000 });

    await upgradeTrigger(page).click();
    await page.getByRole('menuitem', { name: /^Upgrade All Online$/ }).click();
    const dialog = page.getByRole('dialog');
    await dialog.getByRole('button', { name: /^Upgrade$/ }).click();

    await expect.poll(() => Array.isArray(postedTargets) ? (postedTargets as string[]).length : -1).toBeGreaterThan(0);
    expect(Array.isArray(postedTargets) && (postedTargets as string[]).every(t => !t.startsWith('.archive/'))).toBe(true);
  });

  test('Upgrade Selected enqueues a single compile POST containing every checked target', async ({ page }) => {
    let postedTargets: unknown = null;
    await page.route('**/ui/api/compile', route => {
      const body = route.request().postDataJSON();
      postedTargets = body.targets;
      route.fulfill({ json: { enqueued: Array.isArray(body.targets) ? body.targets.length : 0 } });
    });

    const checkboxes = page.locator('#tab-devices tbody input.target-cb');
    await checkboxes.nth(0).check();
    await checkboxes.nth(1).check();

    await upgradeTrigger(page).click();
    await page.getByRole('menuitem', { name: /^Upgrade Selected$/ }).click();

    const dialog = page.getByRole('dialog');
    await expect(dialog).toBeVisible();
    await expect(dialog.getByRole('heading', { name: /Upgrade — 2 selected devices/ })).toBeVisible();

    // Default action is Upgrade Now / Any worker — no extra inputs needed.
    await dialog.getByRole('button', { name: /^Upgrade$/ }).click();

    await expect.poll(() => Array.isArray(postedTargets) ? (postedTargets as unknown[]).length : 0).toBe(2);
  });
});

test.describe('Bug #106 — Commit all uncommitted prompts for a commit message', () => {
  test('menu item is disabled when no targets have uncommitted changes', async ({ page }) => {
    await actionsTrigger(page).click();
    await expect(page.getByRole('menuitem', { name: /^Commit all uncommitted/ })).toHaveAttribute('aria-disabled', 'true');
    await page.keyboard.press('Escape');
  });

  test('clicking the menu item opens a dialog and the typed message is sent to commitFile for every dirty target', async ({ page }) => {
    // Inject a couple of dirty targets so the menu item enables.
    await page.route('**/ui/api/targets', route => {
      const dirty = fixtureTargets.map((t, i) => ({ ...t, has_uncommitted_changes: i < 2 }));
      route.fulfill({ json: dirty });
    });
    // Capture commitFile bodies per target.
    const posted: { target: string; message: string | undefined }[] = [];
    await page.route('**/ui/api/files/*/commit', route => {
      const url = route.request().url();
      const target = decodeURIComponent(url.split('/files/')[1].split('/')[0]);
      let body: Record<string, unknown> = {};
      try { body = route.request().postDataJSON() ?? {}; } catch { /* empty body */ }
      posted.push({ target, message: typeof body.message === 'string' ? body.message : undefined });
      route.fulfill({ json: { committed: true, hash: 'a'.repeat(40), short_hash: 'aaaaaaa', message: String(body.message ?? '') } });
    });

    await page.reload();
    await expect(page.getByText('Living Room Sensor')).toBeVisible({ timeout: 5000 });

    await actionsTrigger(page).click();
    const item = page.getByRole('menuitem', { name: /^Commit all uncommitted \(2\)/ });
    await expect(item).not.toHaveAttribute('aria-disabled', 'true');
    await item.click();

    const dialog = page.getByRole('dialog');
    await expect(dialog).toBeVisible();
    await expect(dialog.getByRole('heading', { name: /Commit 2 uncommitted files/ })).toBeVisible();

    const input = dialog.locator('input[placeholder="Manually committed from UI"]');
    await input.fill('cleanup: external edits');
    await dialog.getByRole('button', { name: /^Commit$/ }).click();

    await expect.poll(() => posted.length).toBe(2);
    for (const p of posted) {
      expect(p.message).toBe('cleanup: external edits');
    }
  });

  test('leaving the message blank sends no message and the server falls back to the default', async ({ page }) => {
    await page.route('**/ui/api/targets', route => {
      const dirty = fixtureTargets.map((t, i) => ({ ...t, has_uncommitted_changes: i === 0 }));
      route.fulfill({ json: dirty });
    });
    const bodies: Record<string, unknown>[] = [];
    await page.route('**/ui/api/files/*/commit', route => {
      try { bodies.push(route.request().postDataJSON() ?? {}); } catch { bodies.push({}); }
      route.fulfill({ json: { committed: true, hash: 'b'.repeat(40), short_hash: 'bbbbbbb', message: '' } });
    });

    await page.reload();
    await expect(page.getByText('Living Room Sensor')).toBeVisible({ timeout: 5000 });

    await actionsTrigger(page).click();
    await page.getByRole('menuitem', { name: /^Commit all uncommitted \(1\)/ }).click();

    const dialog = page.getByRole('dialog');
    await expect(dialog).toBeVisible();
    await dialog.getByRole('button', { name: /^Commit$/ }).click();

    await expect.poll(() => bodies.length).toBe(1);
    // Empty input → no `message` key → server uses its default marker.
    expect(bodies[0]).not.toHaveProperty('message');
  });
});
