
import { NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';
import yaml from 'js-yaml';

interface Automation {
    id?: string;
    alias?: string;
    description?: string;
    trigger: any[];
    condition?: any[];
    action: any[];
    mode?: string;
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

    const automationsPath = path.join(liveConfigPath, 'automations.yaml');

    const fileContent = await fs.readFile(automationsPath, 'utf8');
    const automations = yaml.load(fileContent) as Automation[];

    if (!Array.isArray(automations)) {
        return NextResponse.json({ error: 'automations.yaml is not a valid list' }, { status: 500 });
    }

    // Find the automation by ID or alias
    const liveAutomation = automations.find(auto => auto.id === automationIdentifier || auto.alias === automationIdentifier);

    if (!liveAutomation) {
        return NextResponse.json({ error: 'Automation not found in live configuration.' }, { status: 404 });
    }

    return NextResponse.json({ automation: liveAutomation });

  } catch (error: unknown) {
    const err = error as Error & { code?: string; path?: string };
    if (err.code === 'ENOENT') {
        return NextResponse.json({ error: `automations.yaml not found in live config path.` }, { status: 404 });
    }
    console.error(err);
    return NextResponse.json({ error: 'Failed to read or parse live automations.yaml.', details: err.message }, { status: 500 });
  }
}
