
import { NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';
import yaml from 'js-yaml';

export async function POST(request: Request) {
  try {
    const { backupPath } = await request.json();

    if (!backupPath) {
      return NextResponse.json({ error: 'backupPath is required' }, { status: 400 });
    }

    // Basic security check
    if (backupPath.includes('..')) {
        return NextResponse.json({ error: 'Invalid path' }, { status: 400 });
    }

    const automationsPath = path.join(backupPath, 'automations.yaml');

    const fileContent = await fs.readFile(automationsPath, 'utf8');
    const automations = yaml.load(fileContent);

    // Ensure automations is an array
    if (!Array.isArray(automations)) {
        return NextResponse.json({ error: 'automations.yaml is not a valid list' }, { status: 500 });
    }

    return NextResponse.json({ automations });

  } catch (error: unknown) {
    const err = error as Error & { code?: string; path?: string };
    if (err.code === 'ENOENT') {
        return NextResponse.json({ error: `automations.yaml not found in the specified backup.` }, { status: 404 });
    }
    console.error(err);
    return NextResponse.json({ error: 'Failed to read or parse automations.yaml.', details: err.message }, { status: 500 });
  }
}
