"use client";

import { useState, useEffect } from 'react';
import BackupBrowser from '@/components/BackupBrowser';
import Image from 'next/image';

export default function Home() {
  const [liveConfigPath, setLiveConfigPath] = useState('');
  const [backupRootPath, setBackupRootPath] = useState('');

  useEffect(() => {
    const savedLivePath = localStorage.getItem('liveConfigPath');
    const savedBackupPath = localStorage.getItem('backupRootPath');
    if (savedLivePath) {
      setLiveConfigPath(savedLivePath);
    }
    if (savedBackupPath) {
      setBackupRootPath(savedBackupPath);
    }
  }, []);

  const handleSaveConfig = (config: { haUrl: string; haToken: string; backupFolderPath: string; liveFolderPath: string }) => {
    setLiveConfigPath(config.liveFolderPath);
    setBackupRootPath(config.backupFolderPath);
    localStorage.setItem('liveConfigPath', config.liveFolderPath);
    localStorage.setItem('backupRootPath', config.backupFolderPath);
  };

  return (
    <main style={{ minHeight: '100vh', backgroundColor: '#1e1e1e', padding: '24px' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <header style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '32px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <Image src="/icon.png" alt="Home Assistant Time Machine" width={48} height={48} />
            <div>
              <h1 style={{ fontSize: '24px', fontWeight: '600', color: 'white', marginBottom: '4px' }}>Home Assistant Time Machine</h1>
              <p style={{ fontSize: '14px', color: '#9ca3af' }}>Browse and restore backups</p>
            </div>
          </div>
        </header>
        
        <BackupBrowser 
          key={`${liveConfigPath}-${backupRootPath}`}
          liveConfigPath={liveConfigPath}
          backupRootPath={backupRootPath} 
          onSaveConfig={handleSaveConfig}
        />
      </div>
    </main>
  );
}