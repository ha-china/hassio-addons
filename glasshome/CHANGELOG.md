# Changelog

## 0.6.0

### Features

- Add theme customization with presets, color editing, and auto-save functionality
- Add animated background support with new themes and a geometric houses animation
- Add widget configuration versioning and migration system for safer upgrades
- Enhance clock widget with preset themes, date display, auto layout, and visual glow effects
- Add card layout and display options to the batteries widget
- Add skip controls (next/previous) to media player widget in small layout
- Add safe config loading with validation helpers and fallback defaults

### Improvements

- Migrate all widgets to a new unified widget framework (Light, Clock, Batteries, Switch, Binary Sensor, Media Player, Weather, Camera)
- Introduce aggregation presets and entity state utilities for cleaner widget code
- Implement shared state colors theming system across all widgets
- Enhance config schemas with proper fallbacks for missing or invalid values
- Remove primaryEntity anti-pattern from all widgets for better consistency
- Standardize widget configurations and improve code organization

### Bug Fixes

- Fix session/login bugs including OAuth callback parameter cleanup and disconnect before reconnect behavior
- Fix Next.js server binding to 0.0.0.0 for VM compatibility
- Fix clock widget creation dialog with proper V2 fields
- Fix TypeScript build errors and Zod v4 compatibility issues
- Fix widget gradient and glow format issues in button and switch widgets

## 0.5.0

### Features

- Add lock widget for controlling Home Assistant lock entities       
- Enhance demo mode functionality with improved widget support       

### Improvements

- Migrate the underlying framework for better stability in the long run
- Improve performance overall by reducing rerenders and using React Compiler for better memoization
- Add a performance testing suite
- Implement session validation for improved dashboard redirection    
- Refactor application structure for better maintainability

### Bug Fixes

- Fix build and Docker image configuration
- Fix a bug where the baterry widget would cause too many rerenders and bad performance

## 0.4.4

### Bug Fixes
- Fix a bug where the delete and edit buttons in widgets do not appear if entity is deleted from HA

## 0.4.3

### Bug Fixes
- Fix the issue where the app does not load at all on startup (for real for real this time)

## 0.4.2

### Bug Fixes
- Fix the issue where the app does not load at all on startup (for real this time)

## 0.4.1

### Bug Fixes
- Fix the issue where the app does not load at all on startup

## 0.4.0

### Features

- Add media player widget with play, pause, next, previous, volume control, and source selection
- Add cover widget for controlling Home Assistant cover entities with position adjustments
- Add clock widget with configuration options
- Add demo mode functionality for testing without real Home Assistant connections
- Implement simplified session management architecture
- Enhance dock management with drag-and-drop reordering and dynamic item visibility
- Add support for dock links to external URLs alongside dashboards

### Bug Fixes

- Refactor area widget dialogs to use consistent entity ID retrieval
- Remove deprecated configuration files and migrate to unified configuration structure

## 0.3.2

### Bug Fixes
- Fix a bug where no entities were being detected in the area widget dialogs, preventing creation or editing 

## 0.3.1

### Bug Fixes
- Fix a bug where the entity picker doesn't display any entities when creating or editing a widget

## 0.3.0

### Features
- Build and integrate @glasshome/sync-layer, a new library to interface and sync with Home Assistant
- Add a debug dialog to peak into the sync-layer and HA communication (enabled in the settings)
- Add a Home Assistant button that let's you jump to HA (enabled in the settings)
- Add the button widget
- Add the switch widget 

### Bug Fixes
- Rewrite of the camera widget and improve its stability
- Add more debugging information to the camera 
- Add a full test suite for early bug detection

## 0.2.0

### Features
- Add ability to configure Home Assistant URL
- Add ability to click area cards and navigate to their dashboard with sleek animations
- Add ability to click on camera widget and see the full feed

### Bug Fixes
- Fix camera feed freezing or disappearing
- Fix editing widget entities crashing the dashboard
- Fix debug information dialog tabs overflowing
- Fix battery widget config not being applied
- Fix icons in navigation dock and area widgets to use HA-defined icons

## 0.1.1

- Support processors older than 2013

## 0.1.0

- Initial release
- Support for amd64 and aarch64 architectures
- Direct port access (port 3123)
- HaKit authentication
- Drag-and-drop dashboard builder
- Multiple widget types
