# Changelog

## [3.0.0] - In Progress

### Added
- Initialized React 18 + Vite project
- Tailwind CSS v4 with Vite plugin integration
- SCSS support via Sass
- Framer Motion and React Icons dependencies
- GitHub Pages deployment script via gh-pages
- Project README
- .gitignore for node_modules, dist, and OS files
- Changelog
- MIT License
- React entry point (main.jsx) with StrictMode
- Root App component with Tailwind-styled placeholder

### Changed
- Replaced static HTML portfolio (v1) with Vite entry point
- Migrated static assets (images, portfolio-host, resume, CNAME) to public/
- Updated index.scss to use @use syntax for Tailwind v4 compatibility

### Removed
- tailwind.config.js (not needed in Tailwind v4)
- Old jQuery/Foundation dependencies from root index.html