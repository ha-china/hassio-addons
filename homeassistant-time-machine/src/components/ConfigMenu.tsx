
import { useState, useEffect } from 'react';

interface ConfigMenuProps {
  onClose: () => void;
  onSave: (config: { haUrl: string; haToken: string; backupFolderPath: string; liveFolderPath: string }) => void;
  initialBackupFolderPath: string;
  initialLiveFolderPath: string;
  liveConfigPathError: string | null;
  initialCronExpression: string;
}

export default function ConfigMenu({ onClose, onSave, initialBackupFolderPath, initialLiveFolderPath, liveConfigPathError }: ConfigMenuProps) {
  const [haUrl, setHaUrl] = useState('');
  const [haToken, setHaToken] = useState('');
  const [backupFolderPath, setBackupFolderPath] = useState(initialBackupFolderPath || '/media/backups/yaml');
  const [liveFolderPath, setLiveFolderPath] = useState(initialLiveFolderPath || '/config');
  const [scheduleEnabled, setScheduleEnabled] = useState(false);
  const [scheduleFrequency, setScheduleFrequency] = useState('daily'); // 'hourly', 'daily', 'weekly'
  const [scheduleTime, setScheduleTime] = useState('00:00'); // HH:MM format
  const [testConnectionMessage, setTestConnectionMessage] = useState<string | null>(null);

  // Helper to convert cron to schedule frequency and time
  const cronToSchedule = (cron: string) => {
    const parts = cron.split(' ');
    if (parts.length === 5) {
      const minute = parts[0];
      const hour = parts[1];
      const dayOfMonth = parts[2];
      const month = parts[3];
      const dayOfWeek = parts[4];

      const extractedTime = `${hour.padStart(2, '0')}:${minute.padStart(2, '0')}`;

      if (dayOfMonth === '*' && month === '*' && dayOfWeek === '*' && hour === '*' && minute === '0') {
        return { frequency: 'hourly', time: '00:00' };
      } else if (dayOfMonth === '*' && month === '*' && dayOfWeek === '*' ) {
        return { frequency: 'daily', time: extractedTime };
      } else if (dayOfMonth === '*' && month === '*' && dayOfWeek !== '*' ) {
        return { frequency: 'weekly', time: extractedTime };
      }
    }
    return { frequency: 'daily', time: '00:00' }; // Default
  };

  // Helper to convert schedule frequency and time to cron
  const scheduleToCron = (frequency: string, time: string) => {
    const [hour, minute] = time.split(':').map(Number);
    switch (frequency) {
      case 'hourly':
        return `0 * * * *`;
      case 'daily':
        return `${minute} ${hour} * * *`;
      case 'weekly':
        return `${minute} ${hour} * * 0`; // Sunday
      default:
        return `0 0 * * *`; // Default to daily midnight
    }
  };

  useEffect(() => {
    const savedConfig = localStorage.getItem('haConfig');
    if (savedConfig) {
      const { haUrl, haToken } = JSON.parse(savedConfig);
      setHaUrl(haUrl || '');
      setHaToken(haToken || '');
    }

    // Fetch existing schedule
    fetch('/api/schedule-backup')
      .then(res => res.json())
      .then(data => {
        if (data.jobs && data.jobs['default-backup-job']) {
          setScheduleEnabled(data.jobs['default-backup-job'].enabled);
          const { frequency, time } = cronToSchedule(data.jobs['default-backup-job'].cronExpression);
          setScheduleFrequency(frequency);
          setScheduleTime(time);
        }
      })
      .catch(error => console.error('Failed to fetch schedule:', error));

  }, []);

  const handleSave = async () => {
    const config = { haUrl, haToken, backupFolderPath, liveFolderPath };
    localStorage.setItem('haConfig', JSON.stringify({ haUrl, haToken }));

    // Save schedule configuration
    try {
      const cronExpression = scheduleToCron(scheduleFrequency, scheduleTime);
      const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
      await fetch('/api/schedule-backup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          id: 'default-backup-job',
          enabled: scheduleEnabled,
          cronExpression: cronExpression,
          backupFolderPath: backupFolderPath,
          liveFolderPath: liveFolderPath,
          timezone: timezone,
        }),
      });
    } catch (error) {
      console.error('Failed to save schedule:', error);
    }

    onSave(config);
    onClose();
  };

  const handleTestConnection = async () => {
    setTestConnectionMessage('Testing connection...');
    try {
      const response = await fetch('/api/test-home-assistant-connection', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ haUrl, haToken }),
      });
      const data = await response.json();
      setTestConnectionMessage(data.message);
    } catch (error) {
      setTestConnectionMessage('Failed to connect to API.');
    }
  };

  return (
    <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0,0,0,0.5)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 1000 }}>
      <div style={{ backgroundColor: '#2d2d2d', padding: '24px', borderRadius: '16px', border: '1px solid rgba(255, 255, 255, 0.05)', boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)', width: '400px' }}>
        <h2 style={{ fontSize: '18px', fontWeight: '600', color: 'white', marginBottom: '16px' }}>Configuration</h2>
        <div style={{ marginBottom: '16px' }}>
          <label htmlFor="haUrl" style={{ display: 'block', color: '#9ca3af', fontSize: '14px', marginBottom: '8px' }}>Home Assistant URL</label>
          <input
            id="haUrl"
            type="text"
            value={haUrl}
            onChange={(e) => setHaUrl(e.target.value)}
            placeholder="http://homeassistant.local:8123"
            style={{ width: '100%', padding: '12px', backgroundColor: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255, 255, 255, 0.1)', borderRadius: '12px', color: 'white', fontSize: '14px' }}
          />
        </div>
        <div style={{ marginBottom: '24px' }}>
          <label htmlFor="haToken" style={{ display: 'block', color: '#9ca3af', fontSize: '14px', marginBottom: '8px' }}>Long-Lived Access Token</label>
          <input
            id="haToken"
            type="password"
            value={haToken}
            onChange={(e) => setHaToken(e.target.value)}
            style={{ width: '100%', padding: '12px', backgroundColor: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255, 255, 255, 0.1)', borderRadius: '12px', color: 'white', fontSize: '14px' }}
          />
          <button
            onClick={handleTestConnection}
            style={{ marginTop: '12px', padding: '8px 16px', borderRadius: '8px', fontWeight: '500', fontSize: '14px', border: '1px solid rgba(255, 255, 255, 0.1)', cursor: 'pointer', backgroundColor: 'transparent', color: '#9ca3af' }}
          >
            Test Connection
          </button>
          {testConnectionMessage && (
            <p style={{ marginTop: '8px', fontSize: '12px', color: testConnectionMessage.includes('successful') ? '#4CAF50' : '#ef4444' }}>
              {testConnectionMessage}
            </p>
          )}
        </div>

        <div style={{ marginBottom: '24px' }}>
          <label htmlFor="liveFolderPath" style={{ display: 'block', color: '#9ca3af', fontSize: '14px', marginBottom: '8px' }}>Live Home Assistant Folder Path</label>
          <input
            id="liveFolderPath"
            type="text"
            value={liveFolderPath}
            onChange={(e) => setLiveFolderPath(e.target.value)}
            style={{ width: '100%', padding: '12px', backgroundColor: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255, 255, 255, 0.1)', borderRadius: '12px', color: 'white', fontSize: '14px' }}
          />
          {liveConfigPathError && <p style={{ color: '#ef4444', fontSize: '12px', marginTop: '4px' }}>{liveConfigPathError}</p>}
        </div>

        <div style={{ marginBottom: '16px' }}>
          <label htmlFor="backupFolderPath" style={{ display: 'block', color: '#9ca3af', fontSize: '14px', marginBottom: '8px' }}>Backup Folder Path</label>
          <input
            id="backupFolderPath"
            type="text"
            value={backupFolderPath}
            onChange={(e) => setBackupFolderPath(e.target.value)}
            style={{ width: '100%', padding: '12px', backgroundColor: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255, 255, 255, 0.1)', borderRadius: '12px', color: 'white', fontSize: '14px' }}
          />
        </div>

        {/* Scheduled Backup Section */}
        <div style={{ marginBottom: '16px', paddingTop: '16px', borderTop: '1px solid rgba(255, 255, 255, 0.05)' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
            <label style={{ color: '#9ca3af', fontSize: '14px' }}>Enable Scheduled Backup</label>
            <label style={{ position: 'relative', display: 'inline-block', width: '38px', height: '22px' }}>
              <input
                type="checkbox"
                checked={scheduleEnabled}
                onChange={(e) => setScheduleEnabled(e.target.checked)}
                style={{ opacity: 0, width: 0, height: 0 }}
              />
              <span
                style={{
                  position: 'absolute',
                  cursor: 'pointer',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  backgroundColor: scheduleEnabled ? '#2563eb' : '#757575',
                  transition: '.4s',
                  borderRadius: '22px',
                }}
              />
              <span
                style={{
                  position: 'absolute',
                  content: '""',
                  height: '18px',
                  width: '18px',
                  left: '2px',
                  bottom: '2px',
                  backgroundColor: 'white',
                  transition: '.4s',
                  borderRadius: '50%',
                  transform: scheduleEnabled ? 'translateX(16px)' : 'translateX(0)',
                }}
              />
            </label>
          </div>

          {scheduleEnabled && (
            <div style={{ display: 'flex', gap: '12px', marginBottom: '16px' }}>
              <div style={{ flex: 1 }}>
                <label htmlFor="scheduleFrequency" style={{ display: 'block', color: '#9ca3af', fontSize: '14px', marginBottom: '8px' }}>Frequency</label>
                <select
                  id="scheduleFrequency"
                  value={scheduleFrequency}
                  onChange={(e) => setScheduleFrequency(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '12px',
                    backgroundColor: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: '12px',
                    color: 'white',
                    fontSize: '14px',
                    WebkitAppearance: 'none',
                    MozAppearance: 'none',
                    appearance: 'none',
                  }}
                >
                  <option value="hourly">Hourly</option>
                  <option value="daily">Daily</option>
                  <option value="weekly">Weekly</option>
                </select>
              </div>
              {(scheduleFrequency === 'daily' || scheduleFrequency === 'weekly') && (
                <div style={{ flex: 1 }}>
                  <label htmlFor="scheduleTime" style={{ display: 'block', color: '#9ca3af', fontSize: '14px', marginBottom: '8px' }}>Time</label>
                  <input
                    id="scheduleTime"
                    type="time"
                    value={scheduleTime}
                    onChange={(e) => setScheduleTime(e.target.value)}
                    style={{ 
                      width: '100%', 
                      padding: '12px', 
                      backgroundColor: 'rgba(255, 255, 255, 0.05)', 
                      border: '1px solid rgba(255, 255, 255, 0.1)', 
                      borderRadius: '12px', 
                      color: 'white', 
                      fontSize: '14px',
                      WebkitAppearance: 'none', /* Safari and Chrome */
                      MozAppearance: 'none',    /* Firefox */
                      appearance: 'none',       /* Standard */
                    }}
                  />
                </div>
              )}
            </div>
          )}
        </div>

        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '12px' }}>
          <button onClick={onClose} style={{ padding: '10px 24px', borderRadius: '8px', fontWeight: '500', fontSize: '14px', border: '1px solid rgba(255, 255, 255, 0.1)', cursor: 'pointer', backgroundColor: 'transparent', color: '#9ca3af' }}>
            Cancel
          </button>
          <button onClick={handleSave} style={{ padding: '10px 24px', borderRadius: '8px', fontWeight: '500', fontSize: '14px', border: 'none', cursor: 'pointer', backgroundColor: '#2563eb', color: 'white' }}>
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
