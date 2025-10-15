"use client";

import { useState, useEffect } from 'react';
import ReactDiffViewer from 'react-diff-viewer-continued';
import yaml from 'js-yaml';

interface Automation {
  id?: string;
  alias?: string;
  [key: string]: any;
}

interface ItemDiffViewerProps {
  backupItem: Automation;
  liveConfigPath: string;
  mode: 'automations' | 'scripts';
  backupTimestamp: number;
  onRestore: (item: Automation) => void;
  onClose: () => void;
}

export default function ItemDiffViewer({ backupItem, liveConfigPath, mode, backupTimestamp, onRestore, onClose }: ItemDiffViewerProps) {
  const [liveItem, setLiveItem] = useState<Automation | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchLiveItem = async () => {
      setIsLoading(true);
      setError(null);
      const identifier = backupItem.id || backupItem.alias;
      if (!identifier) {
        setError(`Backup ${mode === 'automations' ? 'automation' : 'script'} has no ID or Alias.`);
        setIsLoading(false);
        return;
      }

      try {
        const apiPath = mode === 'automations' ? '/api/get-live-automation' : '/api/get-live-script';
        const response = await fetch(apiPath, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ liveConfigPath, automationIdentifier: identifier }),
        });

        if (!response.ok) {
          if (response.status === 404) {
            setLiveItem(null);
          } else {
            const errorData = await response.json();
            throw new Error(errorData.error || `Failed to fetch live ${mode}`);
          }
        } else {
          const data = await response.json();
          setLiveItem(data.automation || data.script);
        }
      } catch (err: any) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchLiveItem();
  }, [backupItem, liveConfigPath, mode]);

  const oldYaml = liveItem ? yaml.dump(liveItem) : `// This file does not exist in the current configuration.`;
  const newYaml = yaml.dump(backupItem);
  const noChanges = oldYaml === newYaml;

  return (
    <div style={{ position: 'fixed', inset: 0, backgroundColor: 'rgba(0, 0, 0, 0.6)', backdropFilter: 'blur(8px)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 50, padding: '24px' }}>
      <div style={{ backgroundColor: '#2d2d2d', borderRadius: '16px', border: '1px solid rgba(255, 255, 255, 0.1)', boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)', width: '100%', maxWidth: '1152px', maxHeight: '90vh', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
        <div style={{ padding: '24px', borderBottom: '1px solid rgba(255, 255, 255, 0.05)' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div>
              <h2 style={{ fontSize: '20px', fontWeight: '600', color: 'white', marginBottom: '4px' }}>
                {backupItem.alias || 'Unnamed Item'}
              </h2>
              <p style={{ fontSize: '14px', color: '#9ca3af' }}>
                {!liveItem
                  ? `Backup from ${new Date(backupTimestamp).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' })}`
                  : noChanges
                  ? 'No changes between backup and live version.'
                  : 'Comparing backup with current live version.'}
              </p>
            </div>
            <button
              onClick={onClose}
              style={{ width: '32px', height: '32px', backgroundColor: 'rgba(255, 255, 255, 0.05)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: 'none', cursor: 'pointer' }}
            >
              <svg style={{ width: '20px', height: '20px', color: '#9ca3af' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        <main style={{ flex: 1, overflowY: 'auto', padding: '24px' }}>
          {isLoading && <p style={{ padding: '16px', color: '#9ca3af' }}>Loading live version...</p>}
          {error && <p style={{ padding: '16px', color: '#ef4444' }}>Error: {error}</p>}
          {!isLoading && !error && (
            <>
              {!liveItem ? (
                <div style={{ textAlign: 'center', padding: '16px' }}>
                  <h3 style={{ fontSize: '18px', fontWeight: '600', color: '#ef4444', marginBottom: '16px' }}>This item has been deleted.</h3>
                  <p style={{ color: '#9ca3af', marginBottom: '24px' }}>You can restore it from this backup version.</p>
                  <pre style={{ padding: '16px', backgroundColor: '#1e1e1e', borderRadius: '12px', textAlign: 'left', fontSize: '14px', color: '#d1d5db', whiteSpace: 'pre-wrap', border: '1px solid rgba(255, 255, 255, 0.05)' }}>
                    <code>{newYaml}</code>
                  </pre>
                </div>
              ) : noChanges ? (
                <div style={{ textAlign: 'center', padding: '16px' }}>
                  <h3 style={{ fontSize: '18px', fontWeight: '600', color: '#9ca3af', marginBottom: '16px' }}>No changes detected.</h3>
                  <pre style={{ padding: '16px', backgroundColor: '#1e1e1e', borderRadius: '12px', textAlign: 'left', fontSize: '14px', color: '#d1d5db', whiteSpace: 'pre-wrap', border: '1px solid rgba(255, 255, 255, 0.05)' }}>
                    <code>{newYaml}</code>
                  </pre>
                </div>
              ) : (
                <>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }}>
                    <div style={{ textAlign: 'center', padding: '8px', backgroundColor: 'rgba(255, 255, 255, 0.05)', borderRadius: '8px' }}>
                      <span style={{ fontSize: '14px', fontWeight: '500', color: '#d1d5db' }}>Current Version</span>
                    </div>
                    <div style={{ textAlign: 'center', padding: '8px', backgroundColor: 'rgba(37, 99, 235, 0.2)', borderRadius: '8px', border: '1px solid rgba(37, 99, 235, 0.3)' }}>
                      <span style={{ fontSize: '14px', fontWeight: '500', color: '#60a5fa' }}>{new Date(backupTimestamp).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' })}</span>
                    </div>
                  </div>
                  <div style={{ backgroundColor: '#1e1e1e', borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(255, 255, 255, 0.05)' }}>
                    <ReactDiffViewer
                      oldValue={oldYaml}
                      newValue={newYaml}
                      splitView={true}
                      useDarkTheme={true}
                      linesOffset={1000}
                    />
                  </div>
                </>
              )}
            </>
          )}
        </main>

        <footer style={{ padding: '24px', backgroundColor: 'rgba(45, 45, 45, 0.7)', borderTop: '1px solid rgba(255, 255, 255, 0.05)', display: 'flex', justifyContent: 'flex-end', gap: '12px' }}>
          <button 
            onClick={onClose} 
            style={{ padding: '10px 24px', backgroundColor: 'rgba(255, 255, 255, 0.05)', color: '#d1d5db', fontWeight: '500', borderRadius: '12px', border: '1px solid rgba(255, 255, 255, 0.1)', cursor: 'pointer' }}
          >
            Cancel
          </button>
          <button 
            onClick={() => onRestore(backupItem)} 
            style={{ padding: '10px 24px', backgroundColor: '#2563eb', color: 'white', fontWeight: '500', borderRadius: '12px', border: 'none', cursor: 'pointer', boxShadow: '0 10px 15px -3px rgba(37, 99, 235, 0.2)' }}
          >
            Restore This Version
          </button>
        </footer>
      </div>
    </div>
  );
}