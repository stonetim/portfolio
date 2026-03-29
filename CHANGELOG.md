# Changelog

## [3.0.4] - 2026-03-21
### Added
- Project data model (src/data/projects.js) with schema for portfolio items
- Initial project entries from existing portfolio (will update before release)

## [3.0.3] - 2026-03-21
### Added
- Hero component
- Brand color palette
- Global body background styling

### Changed
- Moved Tailwind import from SCSS to CSS for Tailwind v4 Vite plugin compatibility
- Removed SCSS deprecation silencing from Vite config

## [3.0.2] - 2026-03-21
### Added
- React entry point (main.jsx) with StrictMode
- Root App component with Tailwind-styled placeholder
- Verified React, Vite, Tailwind, and SCSS toolchain

## [3.0.1] - 2026-03-21
### Added
- Vite, Tailwind CSS v4, and Sass configuration
- Project dependencies and npm scripts
- Changelog, MIT license, and .gitignore

### Changed
- Replaced static HTML portfolio (v1) with Vite entry point
- Migrated static assets to public/

### Removed
- tailwind.config.js (not needed in Tailwind v4)
- Old jQuery/Foundation dependencies from root index.html