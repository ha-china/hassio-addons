import { NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';
import yaml from 'js-yaml';

interface Script {
    id?: string;
    alias?: string;
    sequence: any[];
}

import { createBackup } from '../backup-utils';

export async function POST(request: Request) {
  try {
    const { liveConfigPath, backupRootPath, scriptObject, timezone } = await request.json();

    if (!liveConfigPath || !scriptObject) {
      return NextResponse.json({ error: 'liveConfigPath and scriptObject are required' }, { status: 400 });
    }

    if (liveConfigPath.includes('..') || (backupRootPath && backupRootPath.includes('..'))) {
        return NextResponse.json({ error: 'Invalid path' }, { status: 400 });
    }

    const scriptsPath = path.join(liveConfigPath, 'scripts.yaml');

    // 1. Create a backup in the backups folder
    let backupPath: string | undefined;
    if (backupRootPath) {
        const { backupDir } = await createBackup(liveConfigPath, backupRootPath, timezone);
        backupPath = backupDir;
    }

    // 2. Read the live scripts file
    const fileContent = await fs.readFile(scriptsPath, 'utf8');
    let scriptsObject = yaml.load(fileContent) as Record<string, Omit<Script, 'id'>>;

    if (typeof scriptsObject !== 'object' || scriptsObject === null || Array.isArray(scriptsObject)) {
        // If the file is empty or invalid, start with an empty object
        scriptsObject = {};
    }

    const scriptToRestore: Script = { ...scriptObject };
    const scriptId = scriptToRestore.id;

    if (!scriptId) {
        return NextResponse.json({ error: 'Script to restore must have an id.' }, { status: 400 });
    }

    // The ID is the key in the YAML, so we remove it from the object we are saving
    delete scriptToRestore.id;

    // Update or add the script in the dictionary
    scriptsObject[scriptId] = scriptToRestore;

    // 4. Convert back to YAML and write to the file
    const newYamlContent = yaml.dump(scriptsObject);
    await fs.writeFile(scriptsPath, newYamlContent, 'utf8');

    return NextResponse.json({ message: 'Script restored successfully!', backup: backupPath });

  } catch (error: unknown) {
    const err = error as Error;
    console.error(err);
    return NextResponse.json({ error: 'Failed to restore script.', details: err.message }, { status: 500 });
  }
}