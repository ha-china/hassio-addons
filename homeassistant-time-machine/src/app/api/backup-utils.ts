import fs from 'fs/promises';
import path from 'path';

export async function createBackup(liveConfigPath: string, backupRootPath: string, timezone: string) {
    const date = new Date();
    const options: Intl.DateTimeFormatOptions = {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
        timeZone: timezone
    };
    const formatter = new Intl.DateTimeFormat('en-US', options);
    const parts = formatter.formatToParts(date);
    const getPart = (type: string) => parts.find(p => p.type === type)?.value || '';
    
    const year = getPart('year');
    const month = getPart('month');
    const day = getPart('day');
    const hours = getPart('hour');
    const minutes = getPart('minute');
    const seconds = getPart('second');

    const timestamp = `${year}-${month}-${day}-${hours}${minutes}${seconds}`;

    const backupDir = path.join(backupRootPath, year.toString(), month, timestamp);
    await fs.mkdir(backupDir, { recursive: true });

    const files = await fs.readdir(liveConfigPath);
    const yamlFiles = files.filter(file => file.endsWith('.yaml'));

    for (const file of yamlFiles) {
        const sourcePath = path.join(liveConfigPath, file);
        const destinationPath = path.join(backupDir, file);
        await fs.copyFile(sourcePath, destinationPath);
    }

    return { backupDir };
}