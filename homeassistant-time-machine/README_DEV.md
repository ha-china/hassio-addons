# Home Assistant Time Machine

This is a web-based tool built with Next.js and React that serves as a "Time Machine" for Home Assistant automations. It allows a user to browse their existing file-based backups and restore individual automations into their live configuration.

## Core Architecture

- **Frontend:** Built with React and TypeScript. The UI is designed to be self-contained in the browser.
- **Backend:** A series of Next.js API routes handle all file system operations. **No frontend code should ever interact with the file system directly.**
- **Styling:** Tailwind CSS is used for styling.
- **State Management:** Component-level state (`useState`, `useEffect`) and `localStorage` for persisting configuration paths.

## Project Structure

- `src/app/page.tsx`: The main entry point of the application. It handles the initial setup and layout.
- `src/components/`: Contains all reusable React components.
  - `BackupBrowser.tsx`: The main component for listing backups and automations.
  - `AutomationDiffViewer.tsx`: The modal component for comparing and restoring automations.
- `src/app/api/`: Contains all backend API routes.
  - `scan-backups/`: Scans the user-provided backup directory for snapshots.
  - `get-backup-automations/`: Fetches and parses the `automations.yaml` from a specific backup snapshot.
  - `get-live-automation/`: Fetches a single automation from the live `automations.yaml` for comparison.
  - `restore-automation/`: The critical API that performs the restore operation, including making a safety backup.

## Key Libraries

- `next`: The core React framework.
- `react-diff-view`: Used to render the side-by-side diff in the `AutomationDiffViewer`.
- `js-yaml`: Used on the backend to parse and serialize YAML files.
- `diff`: Used to generate the diff structure required by `react-diff-view`.

## How It Works

1.  **Configuration:** The user provides two paths: a `liveConfigPath` and a `backupRootPath`. These are stored in `localStorage`.
2.  **Scanning:** The `BackupBrowser` component calls the `/api/scan-backups` API, which recursively searches the `backupRootPath` for timestamped directories that represent snapshots.
3.  **Viewing Automations:** When a backup is selected, the frontend calls `/api/get-backup-automations` with the path to the snapshot. The API reads and parses the `automations.yaml` within that snapshot and returns the list of automations.
4.  **Comparing:** When an automation is selected, the `AutomationDiffViewer` component is mounted. It calls the `/api/get-live-automation` API to get the current version of that same automation. It then uses `js-yaml` to dump both versions into strings and the `diff` library to create a parsable diff, which is rendered by `react-diff-view`.
5.  **Restoring:** The "Restore" button calls the `/api/restore-automation` API. This API first copies the live `automations.yaml` to a `.bak` file. It then reads the live YAML, finds the automation to replace by its `id` or `alias`, replaces it, and writes the file back.

## Future Development

- **Error Handling:** Error handling can be made more robust with user-friendly notifications instead of `alert()`.
- **Configuration Validation:** The backend could do more to validate the paths provided by the user.
- **Splitting Automations:** The tool currently assumes all automations are in a single `automations.yaml`. It could be extended to support Home Assistant's feature of splitting automations into multiple files or packages.
- **Testing:** No automated tests have been written. Future work could include adding unit tests for the API routes and integration tests for the frontend components.