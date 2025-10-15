import { promises as fs } from 'fs';
import path from 'path';

export async function POST(request: Request) {
  let folderPath: string;

  if (process.env.LIVE_CONFIG_PATH) {
    folderPath = process.env.LIVE_CONFIG_PATH;
  } else {
    const body = await request.json();
    folderPath = body.path;
  }

  if (!folderPath) {
    return new Response(JSON.stringify({ isValid: false, error: 'Path is required' }), { status: 400 });
  }

  try {
    const stats = await fs.stat(folderPath);

    if (!stats.isDirectory()) {
      return new Response(JSON.stringify({ isValid: false, error: 'Provided path is not a directory' }), { status: 400 });
    }

    const files = await fs.readdir(folderPath);
    const yamlFiles = files.filter(file => file.endsWith('.yaml') || file.endsWith('.yml'));

    if (yamlFiles.length === 0) {
      return new Response(JSON.stringify({ isValid: false, error: 'No YAML files found in the directory' }), { status: 400 });
    }

    return new Response(JSON.stringify({ isValid: true }), { status: 200 });
  } catch (error: any) {
    if (error.code === 'ENOENT') {
      return new Response(JSON.stringify({ isValid: false, error: 'Directory does not exist' }), { status: 400 });
    }
    return new Response(JSON.stringify({ isValid: false, error: error.message }), { status: 500 });
  }
}
