
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
    const { liveConfigPath, automationIdentifier } = await request.json();

    if (!liveConfigPath || !automationIdentifier) {
      return NextResponse.json({ error: 'liveConfigPath and automationIdentifier are required' }, { status: 400 });
    }

    if (liveConfigPath.includes('..')) {
        return NextResponse.json({ error: 'Invalid path' }, { status: 400 });
    }

    const scriptsPath = path.join(liveConfigPath, 'scripts.yaml');

    const fileContent = await fs.readFile(scriptsPath, 'utf8');
    const scriptsObject = yaml.load(fileContent) as Record<string, Script>;

    if (typeof scriptsObject !== 'object' || scriptsObject === null || Array.isArray(scriptsObject)) {
        return NextResponse.json({ error: 'scripts.yaml is not a valid dictionary' }, { status: 500 });
    }

    // Find the script by its key (which we treat as the ID)
    const scriptContent = scriptsObject[automationIdentifier];

    if (!scriptContent) {
        return NextResponse.json({ error: 'Script not found in live configuration.' }, { status: 404 });
    }

    // Reconstruct the script object with its ID for the frontend
    const liveScript = {
        id: automationIdentifier,
        ...scriptContent
    };

    return NextResponse.json({ script: liveScript });

  } catch (error: unknown) {
    const err = error as Error & { code?: string; path?: string };
    if (err.code === 'ENOENT') {
        return NextResponse.json({ error: `scripts.yaml not found in live config path.` }, { status: 404 });
    }
    console.error(err);
    return NextResponse.json({ error: 'Failed to read or parse live scripts.yaml.', details: err.message }, { status: 500 });
  }
}
