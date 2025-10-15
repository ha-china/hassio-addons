
import { NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';
import yaml from 'js-yaml';

interface Script {
    alias?: string;
    sequence: any[];
}

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

    const scriptsPath = path.join(backupPath, 'scripts.yaml');

    const fileContent = await fs.readFile(scriptsPath, 'utf8');
    const scriptsObject = yaml.load(fileContent) as Record<string, Script>;

    if (typeof scriptsObject !== 'object' || scriptsObject === null || Array.isArray(scriptsObject)) {
        return NextResponse.json({ error: 'scripts.yaml is not a valid dictionary' }, { status: 500 });
    }

    // Transform the object into an array of items with an 'id' property
    const scripts = Object.keys(scriptsObject).map(scriptId => {
        return {
            id: scriptId,
            ...scriptsObject[scriptId]
        };
    });

    return NextResponse.json({ scripts });

  } catch (error: unknown) {
    const err = error as Error & { code?: string; path?: string };
    if (err.code === 'ENOENT') {
        return NextResponse.json({ error: `scripts.yaml not found in the specified backup.` }, { status: 404 });
    }
    console.error(err);
    return NextResponse.json({ error: 'Failed to read or parse scripts.yaml.', details: err.message }, { status: 500 });
  }
}
