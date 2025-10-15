
import { NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';

interface BackupInfo {
  path: string;
  createdAt: number;
}

// This function will recursively scan directories.
async function getBackupDirs(dir: string): Promise<BackupInfo[]> {
  let results: BackupInfo[] = [];
  const list = await fs.readdir(dir, { withFileTypes: true });

  for (const dirent of list) {
    const fullPath = path.resolve(dir, dirent.name);
    if (dirent.isDirectory()) {
      // Regex to match the final timestamped folder, e.g., 2025-06-02-215431
      if (/\d{4}-\d{2}-\d{2}-\d{6}$/.test(dirent.name)) {
        const stats = await fs.stat(fullPath);
        results.push({ path: fullPath, createdAt: stats.birthtimeMs });
      } else {
        // Continue scanning deeper
        results = results.concat(await getBackupDirs(fullPath));
      }
    }
  }
  return results;
}


export async function POST(request: Request) {
  try {
    let backupRootPath: string;

    if (process.env.BACKUP_FOLDER_PATH) {
      backupRootPath = process.env.BACKUP_FOLDER_PATH;
    } else {
      const { backupRootPath: bodyBackupRootPath } = await request.json();
      backupRootPath = bodyBackupRootPath;
    }

    if (!backupRootPath) {
      return NextResponse.json({ error: 'backupRootPath is required' }, { status: 400 });
    }

    // Basic security check: prevent path traversal attacks
    // This is a simple check; a real app might need more robust validation.
    if (backupRootPath.includes('..')) {
        return NextResponse.json({ error: 'Invalid path' }, { status: 400 });
    }

    const backupDirs = await getBackupDirs(backupRootPath);

    // Sort descending to show the newest backups first
    backupDirs.sort((a, b) => b.createdAt - a.createdAt);

    return NextResponse.json({ backups: backupDirs });
  } catch (error: unknown) {
    const err = error as Error & { code?: string; path?: string };
    // Handle errors, e.g., directory not found
    if (err.code === 'ENOENT') {
        return NextResponse.json({ error: `Directory not found: ${err.path}` }, { status: 404 });
    }
    console.error(err);
    return NextResponse.json({ error: 'Failed to scan backup directory.', details: err.message }, { status: 500 });
  }
}
