import { useState, useEffect, useMemo } from 'react';
import yaml from 'js-yaml';
import ItemDiffViewer from './ItemDiffViewer';
import ConfigMenu from './ConfigMenu';

interface BackupInfo {
  path: string;
  createdAt: number;
}

interface Automation {
  id?: string;
  alias?: string;
  description?: string;
  trigger?: any[];
  condition?: any[];
  action?: any[];
  mode?: string;
  sequence?: any[];
}

interface BackupBrowserProps {
  backupRootPath: string;
  liveConfigPath: string;
  onSaveConfig: (config: { haUrl: string; haToken: string; backupFolderPath: string; liveFolderPath: string }) => void;
}

interface HaConfig {
  haUrl: string;
  haToken: string;
}

type Mode = 'automations' | 'scripts';

export default function BackupBrowser({ backupRootPath, liveConfigPath, onSaveConfig }: BackupBrowserProps) {
  const [mode, setMode] = useState<Mode>('automations');
  const [backups, setBackups] = useState<BackupInfo[]>([]);
  const [isLoadingBackups, setIsLoadingBackups] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [backupError, setBackupError] = useState<string | null>(null);
  const [liveConfigPathError, setLiveConfigPathError] = useState<string | null>(null);
  const [notificationMessage, setNotificationMessage] = useState<string | null>(null);
  const [notificationType, setNotificationType] = useState<'success' | 'error' | null>(null);

  const [selectedBackup, setSelectedBackup] = useState<BackupInfo | null>(null);
  const [items, setItems] = useState<Automation[]>([]);
  const [isLoadingItems, setIsLoadingItems] = useState(false);
  const [sortOrder, setSortOrder] = useState('default');
  const [searchTerm, setSearchTerm] = useState('');

  const [isConfigMenuOpen, setConfigMenuOpen] = useState(false);
  const [haConfig, setHaConfig] = useState<HaConfig | null>(null);
  const [initialCronExpression, setInitialCronExpression] = useState('');

  useEffect(() => {
    const savedConfig = localStorage.getItem('haConfig');
    if (savedConfig) {
      setHaConfig(JSON.parse(savedConfig));
    }

    // Fetch existing schedule
    fetch('/api/schedule-backup')
      .then(res => res.json())
      .then(data => {
        if (data.jobs && data.jobs['default-backup-job']) {
          setInitialCronExpression(data.jobs['default-backup-job'].cronExpression);
        }
      })
      .catch(error => console.error('Failed to fetch schedule:', error));
  }, []);

  useEffect(() => {
    const validateLivePath = async () => {
      if (!liveConfigPath) {
        setLiveConfigPathError('Live Home Assistant Config Path cannot be empty.');
        return;
      }

      try {
        const response = await fetch('/api/validate-path', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ path: liveConfigPath }),
        });
        const data = await response.json();
        if (!data.isValid) {
          setLiveConfigPathError(data.error);
        } else {
          setLiveConfigPathError(null);
        }
      } catch (err) {
        setLiveConfigPathError('Error validating path.');
      }
    };

    validateLivePath();
  }, [liveConfigPath]);

  const sortedAndFilteredItems = useMemo(() => {
    const filtered = items.filter(item => 
      (item.alias || '').toLowerCase().includes(searchTerm.toLowerCase())
    );

    const sorted = [...filtered];
    if (sortOrder === 'alpha-asc') {
      sorted.sort((a, b) => (a.alias || '').localeCompare(b.alias || ''));
    } else if (sortOrder === 'alpha-desc') {
      sorted.sort((a, b) => (b.alias || '').localeCompare(a.alias || ''));
    }
    return sorted;
  }, [items, sortOrder, searchTerm]);

  const [selectedItem, setSelectedItem] = useState<Automation | null>(null);
  const [liveItemsMap, setLiveItemsMap] = useState<Record<string, Automation>>({});
  const [itemStatuses, setItemStatuses] = useState<Record<string, string>>({});
  const [isLoadingLiveItems, setIsLoadingLiveItems] = useState(false);

  useEffect(() => {
    const fetchLiveItems = async () => {
      setIsLoadingLiveItems(true);
      try {
        if (sortedAndFilteredItems.length === 0) {
          setLiveItemsMap({});
          setItemStatuses({});
          return;
        }

        const itemIdentifiers = sortedAndFilteredItems.map(item => item.id || item.alias).filter(Boolean) as string[];

        const response = await fetch('/api/get-live-items', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ liveConfigPath, itemIdentifiers, mode }),
        });

        if (!response.ok) {
          console.error('Failed to fetch live items');
          setLiveItemsMap({});
          setItemStatuses({});
          return;
        }

        const data = await response.json();
        const liveItems = data.liveItems || {};
        setLiveItemsMap(liveItems);

        const newStatuses: Record<string, string> = {};
        sortedAndFilteredItems.forEach(item => {
          const key = item.id || item.alias || '';
          if (!key) return;

          const liveItem = liveItems[key];
          if (liveItem) {
            const backupYaml = yaml.dump(item);
            const liveYaml = yaml.dump(liveItem);
            if (backupYaml !== liveYaml) {
              newStatuses[key] = 'changed';
            } else {
              newStatuses[key] = 'unchanged';
            }
          } else {
            newStatuses[key] = 'deleted';
          }
        });
        setItemStatuses(newStatuses);

      } catch (err: unknown) {
        const error = err as Error;
        console.error(error);
        setLiveItemsMap({});
        setItemStatuses({});
      } finally {
        setIsLoadingLiveItems(false);
      }
    };

    fetchLiveItems();
  }, [sortedAndFilteredItems, liveConfigPath, mode]);

  useEffect(() => {
    const fetchBackups = async () => {
      setIsLoadingBackups(true);
      setBackupError(null);
      try {
        const response = await fetch('/api/scan-backups', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ backupRootPath }),
        });
        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.error || 'Failed to fetch backups');
        }
        const data = await response.json();
        setBackups(data.backups || []);
      } catch (err: unknown) {
        const error = err as Error;
        setBackupError(error.message);
      } finally {
        setIsLoadingBackups(false);
      }
    };

    if (backupRootPath) {
      fetchBackups();
    }

    setSelectedBackup(null);
    setItems([]);
  }, [backupRootPath, mode]);

  const handleSelectBackup = async (backup: BackupInfo) => {
    setSelectedBackup(backup);
    setIsLoadingItems(true);
    setItems([]);
    setLiveItemsMap({});
    setItemStatuses({});
    setError(null);
    try {
      const apiPath = mode === 'automations' ? '/api/get-backup-automations' : '/api/get-backup-scripts';
      const response = await fetch(apiPath, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ backupPath: backup.path }),
      });
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || `Failed to load ${mode}`);
      }
      const data = await response.json();
      setItems(data.automations || data.scripts || []);
    } catch (err: unknown) {
      const error = err as Error;
      setError(error.message);
    } finally {
      setIsLoadingItems(false);
    }
  };

  const reloadHomeAssistant = async () => {
    if (!haConfig || !haConfig.haUrl || !haConfig.haToken) {
      setNotificationMessage('Home Assistant URL or token not configured.');
      setNotificationType('error');
      return;
    }

    try {
      const service = mode === 'automations' ? 'automation.reload' : 'script.reload';
      const response = await fetch('/api/reload-home-assistant', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...haConfig, service }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || `Failed to reload ${mode} in Home Assistant.`);
      }

      setNotificationMessage(`${mode === 'automations' ? 'Automation' : 'Script'}s reloaded successfully in Home Assistant!`);
      setNotificationType('success');
    } catch (error: unknown) {
      const err = error as Error;
      setNotificationMessage(`Error reloading Home Assistant: ${err.message}`);
      setNotificationType('error');
    }
  };

  const handleRestore = async (itemToRestore: Automation) => {
    try {
      const apiPath = mode === 'automations' ? '/api/restore-automation' : '/api/restore-script';
      const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
      const body = {
        liveConfigPath,
        backupRootPath,
        ...(mode === 'automations' ? { automationObject: itemToRestore } : { scriptObject: itemToRestore }),
        timezone,
      };
      const response = await fetch(apiPath, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || `Failed to restore ${mode}`);
      }

      const savedHaConfig = localStorage.getItem('haConfig');
      let currentHaConfig: HaConfig | null = null;
      if (savedHaConfig) {
        currentHaConfig = JSON.parse(savedHaConfig);
      }

      if (currentHaConfig && currentHaConfig.haUrl && currentHaConfig.haToken) {
        await reloadHomeAssistant();
      } else {
        setNotificationMessage(`${mode === 'automations' ? 'Automation' : 'Script'} restored successfully! Manual reload in Home Assistant required, or configure URL/Token in settings.`);
        setNotificationType('success');
      }

      setSelectedItem(null);
      if (selectedBackup) {
        handleSelectBackup(selectedBackup);
      }
    } catch (err: unknown) {
      const error = err as Error;
      setNotificationMessage(`Error: ${error.message}`);
      setNotificationType('error');
    }
  };

  const handleSaveFromMenu = (config: { haUrl: string; haToken: string; backupFolderPath: string; liveFolderPath: string }) => {
    setHaConfig({ haUrl: config.haUrl, haToken: config.haToken });
    localStorage.setItem('haConfig', JSON.stringify({ haUrl: config.haUrl, haToken: config.haToken }));
    onSaveConfig(config);
  };

  const formatTimestamp = (timestamp: number) => {
    const date = new Date(timestamp);
    const formattedDate = new Intl.DateTimeFormat('en-US', {
      month: 'short',
      day: '2-digit',
      year: 'numeric',
    }).format(date);
    const formattedTime = new Intl.DateTimeFormat('en-US', {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true
    }).format(date);
    return `${formattedDate} at ${formattedTime}`;
  };

  useEffect(() => {
    if (notificationMessage) {
      const timer = setTimeout(() => {
        setNotificationMessage(null);
        setNotificationType(null);
      }, 5000); // Clear after 5 seconds
      return () => clearTimeout(timer);
    }
  }, [notificationMessage]);

  return (
    <>
      {notificationMessage && (
        <div
          style={{
            position: 'fixed',
            top: '20px',
            right: '20px',
            padding: '12px 24px',
            borderRadius: '8px',
            color: 'white',
            fontWeight: '500',
            zIndex: 1000,
            backgroundColor: notificationType === 'success' ? '#4CAF50' : '#ef4444',
            boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
          }}
        >
          {notificationMessage}
          <button onClick={() => setNotificationMessage(null)} style={{ background: 'none', border: 'none', color: 'white', fontSize: '18px', cursor: 'pointer' }}>
            &times;
          </button>
        </div>
      )}

      {isConfigMenuOpen && (
        <ConfigMenu
          onClose={() => setConfigMenuOpen(false)}
          onSave={handleSaveFromMenu}
          initialBackupFolderPath={backupRootPath}
          initialLiveFolderPath={liveConfigPath}
          liveConfigPathError={liveConfigPathError}
          initialCronExpression={initialCronExpression}
        />
      )}

      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
        <div style={{ display: 'flex', gap: '4px', backgroundColor: '#2d2d2d', padding: '4px', borderRadius: '12px', border: '1px solid rgba(255, 255, 255, 0.05)', width: 'fit-content' }}>
          <button
            onClick={() => setMode('automations')}
            style={{ 
              padding: '10px 24px', 
              borderRadius: '8px', 
              fontWeight: '500', 
              fontSize: '14px', 
              border: 'none',
              cursor: 'pointer',
              backgroundColor: mode === 'automations' ? '#2563eb' : 'transparent',
              color: mode === 'automations' ? 'white' : '#9ca3af',
              boxShadow: mode === 'automations' ? '0 10px 15px -3px rgba(0, 0, 0, 0.3)' : 'none'
            }}
          >
            Automations
          </button>
          <button
            onClick={() => setMode('scripts')}
            style={{ 
              padding: '10px 24px', 
              borderRadius: '8px', 
              fontWeight: '500', 
              fontSize: '14px', 
              border: 'none',
              cursor: 'pointer',
              backgroundColor: mode === 'scripts' ? '#2563eb' : 'transparent',
              color: mode === 'scripts' ? 'white' : '#9ca3af',
              boxShadow: mode === 'scripts' ? '0 10px 15px -3px rgba(0, 0, 0, 0.3)' : 'none'
            }}
          >
            Scripts
          </button>
        </div>
        <button
          onClick={() => setConfigMenuOpen(true)}
          style={{
            padding: '10px 24px',
            borderRadius: '8px',
            fontWeight: '500',
            fontSize: '14px',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            cursor: 'pointer',
            backgroundColor: 'transparent',
            color: '#9ca3af'
          }}
        >
          Settings
        </button>
      </div>

      {/* Main Content Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '24px', height: 'calc(100vh - 220px)' }}>
        {/* Backups List */}
        <div style={{ backgroundColor: '#2d2d2d', borderRadius: '16px', border: '1px solid rgba(255, 255, 255, 0.05)', boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
          <div style={{ padding: '24px', borderBottom: '1px solid rgba(255, 255, 255, 0.05)' }}>
            <h2 style={{ fontSize: '18px', fontWeight: '600', color: 'white', marginBottom: '4px' }}>Backups</h2>
            <p style={{ fontSize: '14px', color: '#9ca3af' }}>{backups.length} snapshots available</p>
          </div>
          
          <div style={{ flex: 1, overflowY: 'auto', padding: '16px' }}>
            {isLoadingBackups && <p style={{ textAlign: 'center', color: '#9ca3af' }}>Scanning...</p>}
            {backupError && !isLoadingBackups && <p style={{ textAlign: 'center', color: '#ef4444' }}>{backupError}</p>}
            {!isLoadingBackups && backups.length > 0 && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {backups.map((backup) => (
                  <button
                    key={backup.path} // Use backup name as key
                    onClick={() => handleSelectBackup(backup)}
                    style={{
                      width: '100%',
                      textAlign: 'left',
                      padding: '14px 16px',
                      borderRadius: '12px',
                      border: 'none',
                      cursor: 'pointer',
                      backgroundColor: selectedBackup?.path === backup.path ? '#2563eb' : 'rgba(255, 255, 255, 0.05)',
                      color: selectedBackup?.path === backup.path ? 'white' : '#d1d5db',
                      boxShadow: selectedBackup?.path === backup.path ? '0 10px 15px -3px rgba(0, 0, 0, 0.3)' : 'none'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <div style={{
                        width: '8px',
                        height: '8px',
                        borderRadius: '50%',
                        backgroundColor: selectedBackup?.path === backup.path ? 'white' : '#6b7280'
                      }} />
                      <span style={{ fontWeight: '500' }}>{formatTimestamp(backup.createdAt)}</span>
                    </div>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Items List */}
        <div style={{ backgroundColor: '#2d2d2d', borderRadius: '16px', border: '1px solid rgba(255, 255, 255, 0.05)', boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
          <div style={{ padding: '24px', borderBottom: '1px solid rgba(255, 255, 255, 0.05)' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
              <div>
                <h2 style={{ fontSize: '18px', fontWeight: '600', color: 'white', marginBottom: '4px', textTransform: 'capitalize' }}>
                  {mode}
                </h2>
                <p style={{ fontSize: '14px', color: '#9ca3af' }}>
                  {selectedBackup ? formatTimestamp(selectedBackup.createdAt) : 'No backup selected'}
                </p>
              </div>
              
              <select
                value={sortOrder}
                onChange={(e) => setSortOrder(e.target.value)}
                style={{ 
                  padding: '6px 40px 6px 16px',
                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '8px',
                  fontSize: '14px',
                  color: '#d1d5db',
                  cursor: 'pointer',
                  appearance: 'none',
                  WebkitAppearance: 'none',
                  backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`,
                  backgroundPosition: 'right 16px center',
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: '1em',
                }}
              >
                <option value="default">Default Order</option>
                <option value="alpha-asc">A → Z</option>
                <option value="alpha-desc">Z → A</option>
              </select>
            </div>

            <div style={{ position: 'relative' }}>
              <svg style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', width: '20px', height: '20px', color: '#6b7280' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                type="text"
                placeholder={`Search ${mode}...`}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{ width: '100%', paddingLeft: '48px', paddingRight: '16px', paddingTop: '12px', paddingBottom: '12px', backgroundColor: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255, 255, 255, 0.1)', borderRadius: '12px', color: 'white', fontSize: '14px' }}
              />
            </div>
          </div>

          <div style={{ flex: 1, overflowY: 'auto', padding: '16px' }}>
            {isLoadingItems && <p style={{ textAlign: 'center', color: '#9ca3af' }}>Loading {mode}...</p>}
            {error && !isLoadingItems && <p style={{ textAlign: 'center', color: '#ef4444' }}>{error}</p>}
            {!selectedBackup && (
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%', textAlign: 'center' }}>
                <div style={{ width: '64px', height: '64px', backgroundColor: 'rgba(255, 255, 255, 0.05)', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px' }}>
                  <svg style={{ width: '32px', height: '32px', color: '#6b7280' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <p style={{ color: '#9ca3af' }}>Select a backup to view {mode}</p>
              </div>
            )}
            {!isLoadingItems && selectedBackup && sortedAndFilteredItems.length > 0 && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {sortedAndFilteredItems.map((item, index) => (
                  <button
                    key={`${item.id || ''}-${item.alias || ''}-${index}`}
                    onClick={() => setSelectedItem(item)}
                    style={{ width: '100%', textAlign: 'left', padding: '16px', backgroundColor: 'rgba(255, 255, 255, 0.05)', borderRadius: '12px', border: '1px solid rgba(255, 255, 255, 0.05)', cursor: 'pointer' }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      <div style={{ flex: 1 }}>
                        <h3 style={{ color: 'white', fontWeight: '500', marginBottom: '4px' }}>
                          {item.alias || `${mode === 'automations' ? 'Automation' : 'Script'} ${item.id || index + 1}`}
                        </h3>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        {itemStatuses[item.id || item.alias || ''] === 'changed' && (
                          <span style={{ padding: '4px 12px', backgroundColor: 'rgba(249, 115, 22, 0.2)', color: '#f97316', fontSize: '12px', fontWeight: '500', borderRadius: '9999px', border: '1px solid rgba(249, 115, 22, 0.3)' }}>
                            Changed
                          </span>
                        )}
                        {itemStatuses[item.id || item.alias || ''] === 'deleted' && (
                          <span style={{ padding: '4px 12px', backgroundColor: 'rgba(239, 68, 68, 0.2)', color: '#ef4444', fontSize: '12px', fontWeight: '500', borderRadius: '9999px', border: '1px solid rgba(239, 68, 68, 0.3)' }}>
                            Deleted
                          </span>
                        )}
                        <svg style={{ width: '20px', height: '20px', color: '#6b7280' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            )}
            {!isLoadingItems && selectedBackup && items.length === 0 && (
              <p style={{ textAlign: 'center', color: '#6b7280' }}>No {mode} found in this backup file.</p>
            )}
          </div>
        </div>
      </div>

      {selectedItem && (
        <ItemDiffViewer 
          backupItem={selectedItem}
          liveConfigPath={liveConfigPath}
          mode={mode}
          backupTimestamp={selectedBackup ? selectedBackup.createdAt : 0}
          onClose={() => setSelectedItem(null)}
          onRestore={handleRestore}
        />
      )}
    </>
  );
}